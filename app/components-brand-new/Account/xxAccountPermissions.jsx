import React from "react";
import Immutable from "immutable";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import utils from "common/utils";
import accountUtils from "common/account_utils";
import ApplicationApi from "api/ApplicationApi";
import {PublicKey} from "bitsharesjs/es";
import AccountPermissionsList from "./AccountPermissionsList";
import AccountPermissionsMigrate from "./AccountPermissionsMigrate";
import PubKeyInput from "../../components/Forms/PubKeyInput";
import Tabs from "../../components/Utility/Tabs";
import HelpContent from "../../components/Utility/HelpContent";
// import {RecentTransactions} from "../../components/Account/RecentTransactions";
import {RecentTransactions} from "./RecentTransactions";
import notify from "actions/NotificationActions";

class AccountPermissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onPublish = this.onPublish.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    componentWillMount() {
        this.updateAccountData(this.props.account);
        accountUtils.getFinalFeeAsset(this.props.account, "account_update");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.account !== this.props.account)
            this.updateAccountData(nextProps.account);
    }

    permissionsFromImmutableObj(auths) {
        let threshold = auths.get("weight_threshold");
        let account_auths = auths.get("account_auths");
        let key_auths = auths.get("key_auths");
        let address_auths = auths.get("address_auths");

        let accounts = account_auths.map(a => a.get(0));
        let keys = key_auths.map(a => a.get(0));
        let addresses = address_auths.map(a => a.get(0));

        let weights = account_auths.reduce((res, a) => {
            res[a.get(0)] = a.get(1);
            return res;
        }, {});
        weights = key_auths.reduce((res, a) => {
            res[a.get(0)] = a.get(1);
            return res;
        }, weights);
        weights = address_auths.reduce((res, a) => {
            res[a.get(0)] = a.get(1);
            return res;
        }, weights);

        return {threshold, accounts, keys, addresses, weights};
    }

    permissionsToJson(threshold, accounts, keys, addresses, weights) {
        let res = {weight_threshold: threshold};
        res["account_auths"] = accounts
            .sort(utils.sortID)
            .map(a => [a, weights[a]])
            .toJS();
        res["key_auths"] = keys
            .sort(utils.sortID)
            .map(a => [a, weights[a]])
            .toJS();
        res["address_auths"] = addresses
            .sort(utils.sortID)
            .map(a => [a, weights[a]])
            .toJS();
        return res;
    }

    updateAccountData(account) {
        let active = this.permissionsFromImmutableObj(account.get("active"));
        let owner = this.permissionsFromImmutableObj(account.get("owner"));
        let memo_key = account.get("options").get("memo_key");
        let state = {
            active_accounts: active.accounts,
            active_keys: active.keys,
            active_addresses: active.addresses,
            owner_accounts: owner.accounts,
            owner_keys: owner.keys,
            owner_addresses: owner.addresses,
            active_weights: active.weights,
            owner_weights: owner.weights,
            active_threshold: active.threshold,
            owner_threshold: owner.threshold,
            memo_key: memo_key,
            prev_active_accounts: active.accounts,
            prev_active_keys: active.keys,
            prev_active_addresses: active.addresses,
            prev_owner_accounts: owner.accounts,
            prev_owner_keys: owner.keys,
            prev_owner_addresses: owner.addresses,
            prev_active_weights: active.weights,
            prev_owner_weights: owner.weights,
            prev_active_threshold: active.threshold,
            prev_owner_threshold: owner.threshold,
            prev_memo_key: memo_key
        };
        this.setState(state);
    }

    isChanged() {
        let s = this.state;
        return (
            s.active_accounts !== s.prev_active_accounts ||
            s.active_keys !== s.prev_active_keys ||
            s.active_addresses !== s.prev_active_addresses ||
            s.owner_accounts !== s.prev_owner_accounts ||
            s.owner_keys !== s.prev_owner_keys ||
            s.owner_addresses !== s.prev_owner_addresses ||
            s.active_threshold !== s.prev_active_threshold ||
            s.owner_threshold !== s.prev_owner_threshold ||
            s.memo_key !== s.prev_memo_key
        );
    }

    didChange(type, s = this.state) {
        if (type === "memo") {
            return s.memo_key !== s.prev_memo_key;
        }
        let didChange = false;
        ["_keys", "_active_addresses", "_accounts", "_threshold"].forEach(
            key => {
                let current = type + key;
                if (s[current] !== s["prev_" + current]) {
                    didChange = true;
                }
            }
        );
        return didChange;
    }

    onPublish() {
        let s = this.state;
        let updated_account = this.props.account.toJS();

        // Set fee asset
        updated_account.fee = {
            amount: 0,
            asset_id: accountUtils.getFinalFeeAsset(
                updated_account.id,
                "account_update"
            )
        };

        let updateObject = {
            account: updated_account.id
        };

        if (this.didChange("active")) {
            updateObject.active = this.permissionsToJson(
                s.active_threshold,
                s.active_accounts,
                s.active_keys,
                s.active_addresses,
                s.active_weights
            );
        }
        if (this.didChange("owner")) {
            updateObject.owner = this.permissionsToJson(
                s.owner_threshold,
                s.owner_accounts,
                s.owner_keys,
                s.owner_addresses,
                s.owner_weights
            );
        }
        if (
            this.didChange("owner") &&
            s.owner_keys.size === 0 &&
            s.owner_addresses.size === 0 &&
            s.owner_accounts.size === 1 &&
            s.owner_accounts.first() === updated_account.id
        ) {
            return notify.addNotification({
                message:
                    "Setting your owner permissions like this will render your account permanently unusable. Please make sure you know what you're doing before modifying account authorities!",
                level: "error",
                autoDismiss: 10
            });
        }
        if (
            s.memo_key &&
            this.didChange("memo") &&
            this.isValidPubKey(s.memo_key)
        ) {
            updateObject.new_options = this.props.account.get("options").toJS();
            updateObject.new_options.memo_key = s.memo_key;
        }

        // console.log("-- AccountPermissions.onPublish -->", updateObject, s.memo_key);
        ApplicationApi.updateAccount(updateObject);
    }

    isValidPubKey(value) {
        return !!PublicKey.fromPublicKeyString(value);
    }

    onReset() {
        let s = this.state;
        this.setState({
            active_accounts: s.prev_active_accounts,
            active_keys: s.prev_active_keys,
            active_addresses: s.prev_active_addresses,
            owner_accounts: s.prev_owner_accounts,
            owner_keys: s.prev_owner_keys,
            owner_addresses: s.prev_owner_addresses,
            active_weights: s.prev_active_weights,
            owner_weights: s.prev_owner_weights,
            active_threshold: s.prev_active_threshold,
            owner_threshold: s.prev_owner_threshold,
            memo_key: s.prev_memo_key
        });
    }

    onAddItem(collection, item_value, weight) {
        let state = {};
        let list =
            collection +
            (utils.is_object_id(item_value) ? "_accounts" : "_keys");
        state[list] = this.state[list].push(item_value);
        this.state[collection + "_weights"][item_value] = weight;
        this.setState(state);
    }

    onRemoveItem(collection, item_value, listSuffix) {
        console.log("onRemoveItem", collection, item_value, listSuffix);
        let state = {};
        let list = collection + listSuffix;

        state[list] = this.state[list].filter(i => i !== item_value);
        this.setState(state);
    }

    onThresholdChanged(var_name, event) {
        let value = parseInt(event.target.value.trim());
        let state = {};
        state[var_name] = value;
        this.setState(state);
    }

    validateAccount(collection, account) {
        return null;
    }

    sumUpWeights(accounts, keys, addresses, weights) {
        let sum = accounts.reduce((sum, a) => sum + weights[a], 0);
        sum = keys.reduce((sum, a) => sum + weights[a], sum);
        return addresses.reduce((sum, a) => sum + weights[a], sum);
    }

    onMemoKeyChanged(memo_key) {
        this.setState({memo_key});
    }

    onSetPasswordKeys(keys, roles = ["active", "owner", "memo"]) {
        let newState = {};

        roles.forEach(role => {
            newState[`password_${role}`] = keys[role];
        });

        this.setState(newState);
    }

    render() {
        let error1, error2;

        let {
            active_accounts,
            active_keys,
            active_addresses,
            active_weights
        } = this.state;
        let {
            owner_accounts,
            owner_keys,
            owner_addresses,
            owner_weights
        } = this.state;

        let threshold =
            this.state.active_threshold > 0 ? this.state.active_threshold : 0;
        let weights_total = this.sumUpWeights(
            active_accounts,
            active_keys,
            active_addresses,
            active_weights
        );
        if (this.didChange("active") && weights_total < threshold)
            error1 = counterpart.translate("account.perm.warning1", {
                weights_total,
                threshold
            });

        threshold =
            this.state.owner_threshold > 0 ? this.state.owner_threshold : 0;
        weights_total = this.sumUpWeights(
            owner_accounts,
            owner_keys,
            owner_addresses,
            owner_weights
        );
        if (this.didChange("owner") && weights_total < threshold)
            error2 = counterpart.translate("account.perm.warning2", {
                weights_total,
                threshold
            });

        let publish_buttons_class =
            "btn large inverted" +
            (!(error1 || error2) &&
            this.isChanged() &&
            this.isValidPubKey(this.state.memo_key)
                ? ""
                : " disabled");
        let reset_buttons_class =
            "btn large outline" + (this.isChanged() ? "" : " disabled");

        let accountsList = Immutable.Set();
        accountsList = accountsList.add(this.props.account.get("id"));

        // ошибка!!!
        let recentActivity = true ? null : (
            <RecentTransactions
                accountsList={accountsList}
                limit={25}
                compactView={false}
                filter="account_update"
                style={{paddingBottom: "2rem"}}
            />
        );

        let actionButtons = (
            <div className="account-actions" style={{marginTop: "10px"}}>
                <button
                    className={publish_buttons_class}
                    onClick={this.onPublish}
                    tabIndex={9}
                    disabled={
                        !(
                            !(error1 || error2) &&
                            this.isChanged() &&
                            this.isValidPubKey(this.state.memo_key)
                        )
                    }
                >
                    <Translate content="account.perm.publish" />
                </button>
                <button
                    className={reset_buttons_class}
                    onClick={this.onReset}
                    tabIndex={8}
                    disabled={!this.isChanged()}
                >
                    <Translate content="account.perm.reset" />
                </button>
            </div>
        );

        let permActive = (
            <div className="permissions-tab">
                <div className="row">
                    <div className="col-xl-7">
                        <HelpContent path="components/AccountPermActive" />
                    </div>
                </div>
                <div className="threshold-block">
                    <Translate content="account.perm.threshold" />
                    <input
                        type="number"
                        placeholder="0"
                        size="5"
                        value={this.state.active_threshold}
                        onChange={this.onThresholdChanged.bind(
                            this,
                            "active_threshold"
                        )}
                        autoComplete="off"
                        tabIndex={1}
                    />
                </div>
                <AccountPermissionsList
                    label="account.perm.add_permission_label"
                    accounts={active_accounts}
                    keys={active_keys}
                    weights={active_weights}
                    addresses={active_addresses}
                    validateAccount={this.validateAccount.bind(this, "active")}
                    onAddItem={this.onAddItem.bind(this, "active")}
                    onRemoveItem={this.onRemoveItem.bind(this, "active")}
                    placeholder={counterpart.translate(
                        "account.perm.account_name_or_key"
                    )}
                    tabIndex={2}
                />
                {error1 ? (
                    <div className="content-block has-error">{error1}</div>
                ) : null}
                {actionButtons}
                {recentActivity}
            </div>
        );

        let permOwner = (
            <div className="owner-tab">
                <div className="row">
                    <div className="col-xl-7">
                        <HelpContent path="components/AccountPermOwner" />
                    </div>
                </div>
                <div className="threshold-block">
                    <Translate content="account.perm.threshold" />
                    <input
                        type="number"
                        placeholder="0"
                        size="5"
                        value={this.state.owner_threshold}
                        onChange={this.onThresholdChanged.bind(
                            this,
                            "owner_threshold"
                        )}
                        autoComplete="off"
                        tabIndex={4}
                    />
                </div>
                <AccountPermissionsList
                    label="account.perm.add_permission_label"
                    accounts={owner_accounts}
                    keys={owner_keys}
                    weights={owner_weights}
                    addresses={owner_addresses}
                    validateAccount={this.validateAccount.bind(this, "owner")}
                    onAddItem={this.onAddItem.bind(this, "owner")}
                    onRemoveItem={this.onRemoveItem.bind(this, "owner")}
                    placeholder={counterpart.translate(
                        "account.perm.account_name_or_key"
                    )}
                    tabIndex={5}
                />
                {error2 ? (
                    <div className="content-block has-error">{error2}</div>
                ) : null}
                {actionButtons}
                {recentActivity}
            </div>
        );

        let permMemoKey = (
            <div className="memo-tab">
                <div className="row">
                    <div className="col-xl-7">
                        <HelpContent
                            style={{maxWidth: "800px"}}
                            path="components/AccountPermMemo"
                        />
                    </div>
                </div>
                <PubKeyInput
                    ref="memo_key"
                    value={this.state.memo_key}
                    label="account.perm.memo_public_key"
                    placeholder="Public Key"
                    onChange={this.onMemoKeyChanged.bind(this)}
                    tabIndex={7}
                />
                {actionButtons}
                {recentActivity}
            </div>
        );

        let permPasswordModel = (
            <div className="cloud-tab">
                <AccountPermissionsMigrate
                    active={this.state.password_active}
                    owner={this.state.password_owner}
                    memo={this.state.password_memo}
                    onSetPasswordKeys={this.onSetPasswordKeys.bind(this)}
                    account={this.props.account}
                    activeKeys={this.state.active_keys}
                    ownerKeys={this.state.owner_keys}
                    memoKey={this.state.memo_key}
                    onAddActive={this.onAddItem.bind(this, "active")}
                    onRemoveActive={this.onRemoveItem.bind(this, "active")}
                    onAddOwner={this.onAddItem.bind(this, "owner")}
                    onRemoveOwner={this.onRemoveItem.bind(this, "owner")}
                    onSetMemo={this.onMemoKeyChanged.bind(this)}
                />
                {actionButtons}
                {recentActivity}
            </div>
        );

        const items = [
            {
                title: "account.perm.active",
                content: permActive
            },
            {
                title: "account.perm.owner",
                content: permOwner
            },
            {
                title: "account.perm.memo_key",
                content: permMemoKey
            },
            {
                title: "account.perm.password_model",
                content: permPasswordModel
            }
        ];

        return (
            <Tabs
                items={items}
                dashboardTabsClass="dashboard__tabs permissions small"
            />
        );
    }
}

export default AccountPermissions;
