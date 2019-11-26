import React from "react";
import Translate from "react-translate-component";
import SettingsStore from "stores/SettingsStore";
import AccountActions from "actions/AccountActions";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import ChainTypes from "components/Utility/ChainTypes";
import TransactionConfirmActions from "actions/TransactionConfirmActions";
import TransactionConfirmStore from "stores/TransactionConfirmStore";
import {
    SerializerValidation,
    TransactionBuilder,
    TransactionHelper,
    ChainStore
} from "bitsharesjs/es";
import {Asset} from "common/MarketClasses";
import {checkFeeStatusAsync, checkBalance} from "common/trxHelper";

class WithdrawModal extends React.Component {
    asset = null;
    localcoinAccount = null;

    constructor(props) {
        super(props);

        this.state = {
            active: props.active,
            balance: this.getBalance(),
            insufficient: this.checkInsufficient(),
            wdBtn: "button btn large inverted disabled",
            feeAmount: new Asset({amount: 0}),
            validAddress: true
        };

        this.deactivateModal = this.deactivateModal.bind(this);
        this.onWdClick = this.onWdClick.bind(this);

        setInterval(() => {
            if (!this.localcoinAccount || !this.asset) {
                this.asset = ChainStore.getAsset(this.props.currency.asset);
                this.localcoinAccount = ChainStore.getAccount(
                    "localcoin-wallet"
                );
                this._updateFee();
            }
        }, 1000);
    }

    getAssetId() {
        this.asset = ChainStore.getAsset(this.props.currency.asset);
        if (this.asset) return this.asset.get("id");
        return null;
    }

    checkInsufficient() {
        if (!this.props.account)
            return counterpart.translate("transfer.errors.noFeeBalance");
        if (!this.props.currency.asset)
            return counterpart.translate("transfer.errors.noFeeBalance");

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset,
            this.props.currency.currencyCoef
        );
        if (balance > this.props.currency.minimalAmountWithdraw) return "";

        return counterpart.translate("transfer.errors.noFeeBalance");
    }

    deactivateModal(e) {
        if(e.target.classList.contains("close-modal")) {
            this.props.bullet.deactivateModal();
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            active: props.active,
            balance: this.getBalance(),
            insufficient: this.checkInsufficient()
        });
        this.validateUnlockWithdrawBtn();
    }

    getBalance() {
        if (!this.props.account) return 0;
        if (!this.props.currency.asset) return 0;

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset,
            this.props.currency.currencyCoef
        );

        if (!balance) return counterpart.translate("transfer.errors.noFunds");

        return balance;
    }

    wdAddr = null;
    onChangeWithdrAddr(e) {
        if (e.target.value.indexOf("") !== -1) {
            e.target.value = e.target.value.replace(new RegExp(" ", "g"), "");
        }

        this.wdAddr = e.target.value;
        this.validateUnlockWithdrawBtn();
    }

    wdAmount = null;
    onChangeAmount(e) {
        this.wdAmount = parseFloat(e.target.value);
        this.validateUnlockWithdrawBtn();
    }

    onChMemo(e) {
        this.setState({memo: e.target.value}, this._updateFee);
    }

    validateUnlockWithdrawBtn() {
        if (!this.wdAddr) {
            this.lockWithdrawBtn();
            return;
        }

        if (!this.props.account) {
            this.lockWithdrawBtn();
            return;
        }
        if (!this.props.currency.asset) {
            this.lockWithdrawBtn();
            return;
        }

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset,
            this.props.currency.currencyCoef
        );

        let gatewayFee = this.props.currency.gatewayFee;

        let fee = this.state.feeAmount
            ? this.state.feeAmount.getAmount({real: true})
            : 0;

        if (!this.wdAmount) {
            this.lockWithdrawBtn();
            return;
        }

        if (this.wdAmount < this.props.currency.minimalAmountWithdraw) {
            this.lockWithdrawBtn();
            return;
        }

        if (this.wdAmount > balance - gatewayFee) {
            this.lockWithdrawBtn();
            return;
        }

        this.unlockWithdrawBtn();
    }

    unlockWithdrawBtn() {
        this.setState({
            wdBtn: "button btn large inverted"
        });
    }

    lockWithdrawBtn() {
        this.setState({
            wdBtn: "button disabled btn large inverted"
        });
    }

    generateMemo() {
        return JSON.stringify(["withdraw to", this.wdAddr, this.state.memo]);
    }

    //чекнем у btcservice правильность адреса
    //через llcgateway
    validateAddr(addr, asset, cb) {
        let provider = new LLCGatewayData();
        let self = this;
        provider.validateAddress(addr, asset, reponse => {
            var isValide =
                reponse == "true" || reponse == "True" || reponse == "1";

            self.setState(
                {
                    validAddress: isValide
                },
                function() {
                    if (isValide) cb();
                }
            );
        });
    }

    onWdClick() {
        let self = this;
        let next = function() {
            self.props.bullet.setState({modalActive: false});
            self.asset = ChainStore.getAsset(self.props.currency.asset);
            const sendAmount = new Asset({
                real: self.wdAmount,
                asset_id: self.asset.get("id"),
                precision: self.asset.get("precision")
            });

            AccountActions.transfer(
                self.props.account.get("id"),
                self.localcoinAccount.get("id"),
                sendAmount.getAmount(),
                self.asset.get("id"),
                self.generateMemo(),
                self.state.propose ? self.state.propose_account : null,
                self.asset.get("id")
            )
                .then(() => {
                    self.resetForm.call(self);
                    TransactionConfirmStore.unlisten(self.onTrxIncluded);
                    TransactionConfirmStore.listen(self.onTrxIncluded);
                })
                .catch(e => {
                    let msg = e.message
                        ? e.message.split("\n")[1] || e.message
                        : null;
                    console.log("error: ", e, msg);
                    // self.setState({error: msg});
                });
        };

        this.validateAddr(this.wdAddr, this.props.currency.asset, next);
    }

    onTrxIncluded(confirm_store_state) {
        if (
            confirm_store_state.included &&
            confirm_store_state.broadcasted_transaction
        ) {
            // this.setState(Transfer.getInitialState());
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        } else if (confirm_store_state.closed) {
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        }
    }

    componentWillMount() {
        this._updateFee();
    }

    _updateFee() {
        let fee_asset_id = this.getAssetId();
        let from_account = this.props.account;
        if (!from_account || !fee_asset_id) return null;

        checkFeeStatusAsync({
            accountID: from_account.get("id"),
            feeID: fee_asset_id,
            options: ["price_per_kbyte"],
            data: {
                type: "memo",
                content: this.generateMemo()
            }
        }).then(({fee, hasBalance, hasPoolBalance}) => {
            if (this.unMounted) return;
            this.setState({feeAmount: fee}, this.validateUnlockWithdrawBtn);
        });
    }

    render() {
        let fee = this.state.feeAmount
            ? this.state.feeAmount.getAmount({real: true})
            : 0;

        return (
            <div
                onClick={this.deactivateModal}
                className={
                    this.state.active
                        ? "modal-overlay is-active close-modal"
                        : "modal-overlay close-modal"
                }
            >
                <div
                    id="withdraw_asset_rudex-scorum_RUDEX.SCR"
                    data-closable="true"
                    className="withdraw-modal modal fadeIn ng-enter is-active ng-enter-active"
                >
                    <a
                        href="javascript:void(0)"
                        className="close-button close-modal"
                        onClick={this.deactivateModal}
                    >
                        ×
                    </a>
                    <br />
                    <div className="grid-block vertical">
                        <form className="grid-block vertical full-width-content">
                            <div className="grid-container">
                                <div className="content-block">
                                    <h3>
                                        <span>
                                            {counterpart.translate(
                                                "modal.withdraw.withdraw"
                                            )}{" "}
                                            {this.props.currency.asset}
                                        </span>
                                    </h3>
                                </div>
                                <div className="content-block">
                                    <div className="amount-selector">
                                        <label className="right-label">
                                            {counterpart.translate(
                                                "transfer.available"
                                            ) +
                                                ": " +
                                                this.state.balance +
                                                " " +
                                                this.props.currency.asset}
                                        </label>
                                        <label className="left-label">
                                            {counterpart.translate(
                                                "modal.withdraw.amount"
                                            )}
                                        </label>
                                        <div className="inline-label input-wrapper">
                                            <input
                                                type="text"
                                                placeholder={0.0}
                                                tabIndex={0}
                                                defaultValue={0}
                                                onChange={this.onChangeAmount.bind(
                                                    this
                                                )}
                                            />
                                            <div className="form-label select floating-dropdown">
                                                <div className="dropdown-wrapper inactive">
                                                    <div>
                                                        <span className="no-amount">
                                                            <span className="currency">
                                                                <div className="inline-block tooltip">
                                                                    <span>
                                                                        {
                                                                            this
                                                                                .props
                                                                                .currency
                                                                                .asset
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        className="no-margin"
                                        style={{paddingTop: 10}}
                                    >
                                        <b>
                                            <span>
                                                <Translate
                                                    content="gateway.rudex.min_amount"
                                                    minAmount={
                                                        this.props.currency
                                                            .minimalAmountWithdraw
                                                    }
                                                    symbol={
                                                        this.props.currency
                                                            .asset
                                                    }
                                                />
                                            </span>
                                        </b>
                                    </p>
                                    <div>123</div>
                                </div>
                                <div className="content-block gate_fee">
                                    <div className="amount-selector">
                                        <label className="right-label" />
                                        <label className="left-label">
                                            {counterpart.translate(
                                                "modal.withdraw.fee"
                                            )}
                                        </label>
                                        <div className="inline-label input-wrapper">
                                            <input
                                                disabled
                                                type="text"
                                                tabIndex={2}
                                                defaultValue={fee + " LLC"}
                                                value={fee + " LLC"}
                                            />
                                            <div className="form-label select floating-dropdown" />
                                        </div>
                                    </div>
                                    <p
                                        className="has-error no-margin"
                                        style={{paddingTop: 10}}
                                    >
                                        <span>{this.state.insufficient}</span>
                                    </p>
                                    <div>123</div>
                                </div>
                                <div className="content-block gate_fee">
                                    <div className="amount-selector">
                                        <label className="right-label" />
                                        <label className="left-label">
                                            GATEWAY{" "}
                                            {counterpart.translate(
                                                "modal.withdraw.fee"
                                            )}
                                        </label>
                                        <div className="inline-label input-wrapper">
                                            <input
                                                disabled
                                                type="text"
                                                tabIndex={2}
                                                defaultValue={
                                                    this.props.currency
                                                        .gatewayFee +
                                                    " " +
                                                    this.props.currency.asset
                                                }
                                                value={
                                                    this.props.currency
                                                        .gatewayFee +
                                                    " " +
                                                    this.props.currency.asset
                                                }
                                            />
                                            <div className="form-label select floating-dropdown" />
                                        </div>
                                    </div>
                                </div>
                                <div className="content-block">
                                    <label className="left-label">
                                        <span>
                                            {counterpart.translate(
                                                "modal.withdraw.address"
                                            )}
                                        </span>
                                    </label>                                    
                                    <div className="rudex-select-dropdown">
                                        <div className="inline-label">
                                            <input
                                                type="text"
                                                tabIndex={4}
                                                autoComplete="off"
                                                defaultValue={""}
                                                onChange={this.onChangeWithdrAddr.bind(
                                                    this
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="rudex-position-options" />
                                    {!this.state.validAddress ? (
                                        <div
                                            className="has-error"
                                            style={{paddingTop: 10}}
                                        >
                                            <Translate
                                                content="gateway.valid_address"
                                                coin_type={
                                                    this.props.currency.asset
                                                }
                                            />
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="content-block">
                                    <label>
                                        <span>
                                            {counterpart.translate(
                                                "transfer.memo"
                                            )}
                                        </span>
                                    </label>
                                    <textarea
                                        rows={3}
                                        tabIndex={1}
                                        defaultValue={""}
                                        onChange={this.onChMemo.bind(this)}
                                    />
                                </div>
                                <div className="button-group">
                                    <div
                                        className={this.state.wdBtn}
                                        onClick={this.onWdClick}
                                    >
                                        <span>
                                            {counterpart.translate(
                                                "modal.withdraw.withdraw"
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className="button btn large outline close-modal"
                                        onClick={this.deactivateModal}
                                    >
                                        <span
                                            className="close-modal"
                                        >
                                            {counterpart.translate(
                                                "global.cancel"
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default WithdrawModal;
