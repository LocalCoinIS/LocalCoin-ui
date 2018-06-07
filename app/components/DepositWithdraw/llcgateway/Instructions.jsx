import React from "react";
import AccountStore from "stores/AccountStore";
import Translate from "react-translate-component";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import WithdrawModal from "./WithdrawModal";

class Instructions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            modalActive: false,
            account: AccountStore.getState().currentAccount
        };

        this.activateModal = this.activateModal.bind(this);

        this._copy = this._copy.bind(this);
        document.addEventListener("copy", this._copy);
    }

    _copy(e) {
        try {
            if (this.state.clipboardText)
                e.clipboardData.setData("text/plain", this.state.clipboardText);
            else
                e.clipboardData.setData(
                    "text/plain",
                    counterpart
                        .translate("gateway.use_copy_button")
                        .toUpperCase()
                );
            e.preventDefault();
        } catch (err) {
            console.error(err);
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            type: props.type
        });
    }

    activateModal() {
        this.setState({
            modalActive: true
        });
    }

    deactivateModal() {
        this.setState({
            modalActive: false
        });
    }

    toClipboard(clipboardText) {
        try {
            this.setState({clipboardText}, () => {
                document.execCommand("copy");
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        let memoText = "LLCGateway";
        let addressText = "llc:" + this.state.account;

        return (
            <div className="small-12 medium-7">
                <h4>
                    {this.state.type == LLCGateway.WITHDRAW
                        ? counterpart.translate("gateway.withdraw_inst")
                        : counterpart.translate("gateway.deposit_inst")}
                </h4>
                <div style={{padding: "10px 0px", fontSize: "1.1rem"}}>
                    {this.state.type == LLCGateway.WITHDRAW ? (
                        <div>
                            <label className="left-label">
                                <span>
                                    <Translate
                                        content="gateway.withdraw_to"
                                        asset={"LLC"}
                                    />
                                </span>:
                            </label>
                            <div
                                className="button-group"
                                style={{paddingTop: 20}}
                            >
                                <button
                                    onClick={this.activateModal}
                                    className="button success"
                                    style={{fontSize: "1.3rem"}}
                                >
                                    <span>
                                        {counterpart.translate(
                                            "gateway.withdraw_now"
                                        )}
                                    </span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <label className="left-label">
                                <Translate
                                    content="gateway.deposit_to"
                                    asset={"LLC"}
                                />:
                            </label>
                            <label className="left-label">
                                <b>
                                    <span>
                                        <Translate
                                            content="gateway.rudex.min_amount"
                                            minAmount={1}
                                            symbol={"LLC"}
                                        />
                                    </span>
                                </b>
                            </label>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            {counterpart
                                                .translate("gateway.address")
                                                .toUpperCase()}:&nbsp;
                                            <b>
                                                <span>{addressText}</span>
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {counterpart
                                                .translate("gateway.memo")
                                                .toUpperCase()}:&nbsp;
                                            <b>
                                                <span>{memoText}</span>
                                            </b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div
                                className="button-group"
                                style={{paddingTop: 10}}
                            >
                                <div
                                    className="button"
                                    onClick={this.toClipboard.bind(
                                        this,
                                        addressText
                                    )}
                                >
                                    {counterpart.translate(
                                        "gateway.copy_address"
                                    )}
                                </div>
                                <div
                                    className="button"
                                    onClick={this.toClipboard.bind(
                                        this,
                                        memoText
                                    )}
                                >
                                    {counterpart.translate("gateway.copy_memo")}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <WithdrawModal
                    bullet={this}
                    active={this.state.modalActive}
                    currency={this.props.currency}
                />
            </div>
        );
    }
}

export default Instructions;
