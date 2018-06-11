import React from "react";
import Translate from "react-translate-component";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import ChainTypes from "components/Utility/ChainTypes";

class WithdrawModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: props.active,
            balance: this.getBalance(),
            insufficient: this.checkInsufficient()
        };

        this.deactivateModal = this.deactivateModal.bind(this);
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
                                            {this.state.balance}
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
                                                    minAmount={1}
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
                                                defaultValue
                                            />
                                            <span>▼</span>
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
                                    <div className="button disabled">
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
