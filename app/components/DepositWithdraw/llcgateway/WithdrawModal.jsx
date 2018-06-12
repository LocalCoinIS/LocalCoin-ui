import React from "react";
import Translate from "react-translate-component";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import ChainTypes from "components/Utility/ChainTypes";
import TransactionConfirmActions from "actions/TransactionConfirmActions";
import {
    SerializerValidation,
    TransactionBuilder,
    TransactionHelper,
    ChainStore
} from "bitsharesjs/es";

class WithdrawModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: props.active,
            balance: this.getBalance(),
            insufficient: this.checkInsufficient(),
            wdBtn: "button disabled"
        };

        this.deactivateModal = this.deactivateModal.bind(this);
        this.onWdClick = this.onWdClick.bind(this);

        ///test
        setTimeout(this.onWdClick, 1000);
    }

    getAssetId() {
        let asset = ChainStore.getAsset(this.props.currency.asset);
        if (asset) return asset.get("id");

        return null;
    }

    newTransaction() {
        let tr = new TransactionBuilder();

        tr.add_type_operation("withdraw", {
            fee: {
                amount: this.props.currency.minimal,
                asset_id: this.getAssetId()
            },
            funding_account: this.props.account.get("id"),
            withdraw: {
                amount: this.wdAmount,
                asset: this.props.currency.asset
            },
            address: {
                address: this.wdAddr
            }
        });

        return tr;
    }

    checkInsufficient() {
        if (!this.props.account)
            return counterpart.translate("transfer.errors.noFeeBalance");
        if (!this.props.currency.asset)
            return counterpart.translate("transfer.errors.noFeeBalance");

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset
        );
        if (balance > this.props.currency.minimal) return "";

        return counterpart.translate("transfer.errors.noFeeBalance");
    }

    deactivateModal() {
        this.props.bullet.deactivateModal();
    }

    componentWillReceiveProps(props) {
        this.setState({
            active: props.active,
            balance: this.getBalance(),
            insufficient: this.checkInsufficient()
        });
    }

    getBalance() {
        if (!this.props.account) return 0;
        if (!this.props.currency.asset) return 0;

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset
        );

        if (!balance) return counterpart.translate("transfer.errors.noFunds");

        return balance;
    }

    wdAddr = null;
    onChangeWithdrAddr(e) {
        this.wdAddr = e.target.value;
        this.validateUnlockWithdrawBtn();
    }

    wdAmount = null;
    onChangeAmount(e) {
        this.wdAmount = e.target.value;
        this.validateUnlockWithdrawBtn();
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
            this.props.currency.asset
        );

        if (this.wdAmount > balance) {
            this.lockWithdrawBtn();
            return;
        }

        if (this.wdAmount < this.props.currency.minimal) {
            this.lockWithdrawBtn();
            return;
        }

        this.unlockWithdrawBtn();
    }

    unlockWithdrawBtn() {
        this.setState({
            wdBtn: "button"
        });
    }

    lockWithdrawBtn() {
        this.setState({
            wdBtn: "button disabled"
        });
    }

    onWdClick() {
        TransactionConfirmActions.confirm(
            this.newTransaction(),
            function() {
                alert("success");
            },
            function() {
                alert("cancel");
            }
        );
    }

    render() {
        return (
            <div
                className={
                    this.state.active
                        ? "modal-overlay is-active"
                        : "modal-overlay"
                }
            >
                <div
                    id="withdraw_asset_rudex-scorum_RUDEX.SCR"
                    data-closable="true"
                    className="modal fadeIn ng-enter is-active ng-enter-active"
                >
                    <a
                        href="#"
                        className="close-button"
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
                                            {this.state.balance +
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
                                                            .minimal
                                                    }
                                                    symbol={
                                                        this.props.currency
                                                            .asset
                                                    }
                                                />
                                            </span>
                                        </b>
                                    </p>
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
                                                defaultValue={
                                                    this.props.currency.minimal
                                                }
                                                value={
                                                    this.props.currency.minimal
                                                }
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
                                        className="button"
                                        onClick={this.deactivateModal}
                                    >
                                        <span>
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
