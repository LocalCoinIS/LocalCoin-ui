import WalletUnlockActions from "actions/WalletUnlockActions";
import notify from "actions/NotificationActions";
import WalletDb from "stores/WalletDb";
import {
    Aes,
    ChainValidation,
    TransactionBuilder,
    TransactionHelper,
    FetchChain,
    PrivateKey,
    ChainStore
} from "bitsharesjs/es";
import counterpart from "counterpart";

const ApplicationApi = {
    create_account(
        owner_pubkey,
        active_pubkey,
        new_account_name,
        registrar,
        referrer,
        referrer_percent,
        broadcast = false
    ) {
        ChainValidation.required(registrar, "registrar_id");
        ChainValidation.required(referrer, "referrer_id");

        return new Promise((resolve, reject) => {
            return Promise.all([
                FetchChain("getAccount", registrar),
                FetchChain("getAccount", referrer)
            ]).then(res => {
                let [chain_registrar, chain_referrer] = res;

                let tr = new TransactionBuilder();
                tr.add_type_operation("account_create", {
                    fee: {
                        amount: 0,
                        asset_id: 0
                    },
                    registrar: chain_registrar.get("id"),
                    referrer: chain_referrer.get("id"),
                    referrer_percent: referrer_percent,
                    name: new_account_name,
                    owner: {
                        weight_threshold: 1,
                        account_auths: [],
                        key_auths: [[owner_pubkey, 1]],
                        address_auths: []
                    },
                    active: {
                        weight_threshold: 1,
                        account_auths: [],
                        key_auths: [[active_pubkey, 1]],
                        address_auths: []
                    },
                    options: {
                        memo_key: active_pubkey,
                        voting_account: "1.2.5",
                        num_witness: 0,
                        num_committee: 0,
                        votes: []
                    }
                });
                return WalletDb.process_transaction(
                    tr,
                    null, //signer_private_keys,
                    broadcast
                )
                    .then(res => {
                        console.log("process_transaction then", res);
                        resolve();
                    })
                    .catch(err => {
                        console.log("process_transaction catch", err);
                        reject(err);
                    });
            });
        });
    },

    /**
        @param propose_account (or null) pays the fee to create the proposal, also used as memo from
    */
    transfer({
        // OBJECT: { ... }
        from_account,
        to_account,
        amount,
        asset,
        memo,
        broadcast = true,
        encrypt_memo = true,
        optional_nonce = null,
        propose_account = null,
        fee_asset_id = "1.3.0"
    }) {
        let memo_sender = propose_account || from_account;

        let unlock_promise = WalletUnlockActions.unlock();

        return Promise.all([
            FetchChain("getAccount", from_account),
            FetchChain("getAccount", to_account),
            FetchChain("getAccount", memo_sender),
            FetchChain("getAccount", propose_account),
            FetchChain("getAsset", asset),
            FetchChain("getAsset", fee_asset_id),
            unlock_promise
        ])
            .then(res => {
                let [
                    chain_from,
                    chain_to,
                    chain_memo_sender,
                    chain_propose_account,
                    chain_asset,
                    chain_fee_asset
                ] = res;

                let memo_from_public, memo_to_public;
                if (memo && encrypt_memo) {
                    memo_from_public = chain_memo_sender.getIn([
                        "options",
                        "memo_key"
                    ]);

                    // The 1s are base58 for all zeros (null)
                    if (/111111111111111111111/.test(memo_from_public)) {
                        memo_from_public = null;
                    }

                    memo_to_public = chain_to.getIn(["options", "memo_key"]);
                    if (/111111111111111111111/.test(memo_to_public)) {
                        memo_to_public = null;
                    }
                }

                let propose_acount_id = propose_account
                    ? chain_propose_account.get("id")
                    : null;

                let memo_from_privkey;
                if (encrypt_memo && memo) {
                    memo_from_privkey = WalletDb.getPrivateKey(
                        memo_from_public
                    );

                    if (!memo_from_privkey) {
                        notify.addNotification({
                            message: counterpart.translate(
                                "account.errors.memo_missing"
                            ),
                            level: "error",
                            autoDismiss: 10
                        });
                        throw new Error(
                            "Missing private memo key for sender: " +
                                memo_sender
                        );
                    }
                }

                let memo_object;
                if (memo && memo_to_public && memo_from_public) {
                    let nonce =
                        optional_nonce == null
                            ? TransactionHelper.unique_nonce_uint64()
                            : optional_nonce;

                    memo_object = {
                        from: memo_from_public,
                        to: memo_to_public,
                        nonce,
                        message: encrypt_memo
                            ? Aes.encrypt_with_checksum(
                                  memo_from_privkey,
                                  memo_to_public,
                                  nonce,
                                  memo
                              )
                            : Buffer.isBuffer(memo)
                                ? memo.toString("utf-8")
                                : memo
                    };
                }
                // Allow user to choose asset with which to pay fees #356
                let fee_asset = chain_fee_asset.toJS();

                // Default to CORE in case of faulty core_exchange_rate
                if (
                    fee_asset.options.core_exchange_rate.base.asset_id ===
                        "1.3.0" &&
                    fee_asset.options.core_exchange_rate.quote.asset_id ===
                        "1.3.0"
                ) {
                    fee_asset_id = "1.3.0";
                }

                let tr = new TransactionBuilder();
                let transfer_op = tr.get_type_operation("transfer", {
                    fee: {
                        amount: 0,
                        asset_id: fee_asset_id
                    },
                    from: chain_from.get("id"),
                    to: chain_to.get("id"),
                    amount: {amount, asset_id: chain_asset.get("id")},
                    memo: memo_object
                });

                return tr.update_head_block().then(() => {
                    if (propose_account) {
                        tr.add_type_operation("proposal_create", {
                            proposed_ops: [{op: transfer_op}],
                            fee_paying_account: propose_acount_id
                        });
                    } else {
                        tr.add_operation(transfer_op);
                    }

                    return WalletDb.process_transaction(
                        tr,
                        null, //signer_private_keys,
                        broadcast
                    );
                });
            })
            .catch(() => {});
    },

    activenode_create_operation(
        account
    ) {
        let unlock_promise = WalletUnlockActions.unlock();

        return Promise.all([
            unlock_promise
        ])
            .then(res => {
                let tr = new TransactionBuilder();
                tr.add_type_operation("activenode_create_operation", {
                    fee: {
                        amount: 0,
                        asset_id: "1.3.0"
                    },
                    activenode_account: account.activenode_account
                });

                return WalletDb.process_transaction(tr, null, true);
            })
            .catch(() => {});
    },

    issue_asset(
        to_account,
        from_account,
        asset_id,
        amount,
        memo,
        encrypt_memo = true,
        optional_nonce = null
    ) {
        let unlock_promise = WalletUnlockActions.unlock();

        return Promise.all([
            FetchChain("getAccount", from_account),
            FetchChain("getAccount", to_account),
            unlock_promise
        ])
            .then(res => {
                let [chain_memo_sender, chain_to] = res;

                let memo_from_public, memo_to_public;
                if (memo && encrypt_memo) {
                    memo_from_public = chain_memo_sender.getIn([
                        "options",
                        "memo_key"
                    ]);

                    // The 1s are base58 for all zeros (null)
                    if (/111111111111111111111/.test(memo_from_public)) {
                        memo_from_public = null;
                    }

                    memo_to_public = chain_to.getIn(["options", "memo_key"]);
                    if (/111111111111111111111/.test(memo_to_public)) {
                        memo_to_public = null;
                    }
                }

                let memo_from_privkey;
                if (encrypt_memo && memo) {
                    memo_from_privkey = WalletDb.getPrivateKey(
                        memo_from_public
                    );

                    if (!memo_from_privkey) {
                        throw new Error(
                            "Missing private memo key for sender: " +
                                from_account
                        );
                    }
                }

                let memo_object;
                if (memo && memo_to_public && memo_from_public) {
                    let nonce =
                        optional_nonce == null
                            ? TransactionHelper.unique_nonce_uint64()
                            : optional_nonce;

                    memo_object = {
                        from: memo_from_public,
                        to: memo_to_public,
                        nonce,
                        message: encrypt_memo
                            ? Aes.encrypt_with_checksum(
                                  memo_from_privkey,
                                  memo_to_public,
                                  nonce,
                                  memo
                              )
                            : Buffer.isBuffer(memo)
                                ? memo.toString("utf-8")
                                : memo
                    };
                }

                let tr = new TransactionBuilder();
                tr.add_type_operation("asset_issue", {
                    fee: {
                        amount: 0,
                        asset_id: 0
                    },
                    issuer: from_account,
                    asset_to_issue: {
                        amount: amount,
                        asset_id: asset_id
                    },
                    issue_to_account: to_account,
                    memo: memo_object
                });

                return WalletDb.process_transaction(tr, null, true);
            })
            .catch(() => {});
    },

    createWorker(options, account) {
        return new Promise((resolve, reject) => {
            let tr = new TransactionBuilder();
            const core = ChainStore.getAsset("1.3.0");
            if (!core)
                reject(new Error("Can't find core asset, please try again"));
            let precision = Math.pow(10, core.get("precision"));

            const owner = ChainStore.getAccount(account).get("id");
            if (!owner)
                reject(
                    new Error("Can't find the owner account, please try again")
                );

            try {
                tr.add_type_operation("worker_create", {
                    fee: {
                        amount: 0,
                        asset_id: 0
                    },
                    owner,
                    work_begin_date: options.start,
                    work_end_date: options.end,
                    daily_pay: options.pay * precision,
                    name: options.title,
                    url: options.url,
                    initializer: [1, {pay_vesting_period_days: options.vesting}]
                });
            } catch (err) {
                reject(err);
            }
            WalletDb.process_transaction(tr, null, true)
                .then(resolve)
                .catch(reject);
        });
    },

    updateAccount(updateObject) {
        let tr = new TransactionBuilder();
        tr.add_type_operation("account_update", updateObject);
        return WalletDb.process_transaction(tr, null, true);
    }
};

export default ApplicationApi;
