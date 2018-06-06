import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import ChooseCurrency from "./ChooseCurrency";

class LLCGateway extends React.Component {
    static label = "LLCGateway";
    static WITHDRAW = "withdraw";
    static DEPOSIT = "deposit";

    constructor() {
        super();

        this.switchToDeposit = this.switchToDeposit.bind(this);
        this.switchToWithdraw = this.switchToWithdraw.bind(this);

        this.state = {
            type: LLCGateway.WITHDRAW
        };
    }

    switchToDeposit() {
        this.setState({type: LLCGateway.DEPOSIT});
    }

    switchToWithdraw() {
        this.setState({type: LLCGateway.WITHDRAW});
    }

    render() {
        return (
            <div className="grid-content no-padding">
                <div className="content-block">
                    <div
                        className="service-selector"
                        style={{marginBottom: "2rem"}}
                    >
                        <ul className="button-group segmented no-margin">
                            <li className="is-active">
                                <a>
                                    <span>
                                        {counterpart.translate(
                                            "gateway.gateway"
                                        )}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="grid-block no-margin vertical medium-horizontal no-padding">
                            <div className="medium-4">
                                <ChooseCurrency type={this.state.type} />
                            </div>
                            <div className="medium-6 medium-offset-1">
                                <label className="left-label">
                                    <span>
                                        {counterpart.translate(
                                            "gateway.gateway_text"
                                        )}
                                    </span>:
                                </label>
                                <div>
                                    <ul className="button-group segmented no-margin">
                                        <li
                                            onClick={this.switchToDeposit}
                                            className={
                                                this.state.type ==
                                                LLCGateway.DEPOSIT
                                                    ? "is-active"
                                                    : ""
                                            }
                                        >
                                            <a>
                                                <span>
                                                    {counterpart.translate(
                                                        "gateway.deposit"
                                                    )}
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            onClick={this.switchToWithdraw}
                                            className={
                                                this.state.type ==
                                                LLCGateway.WITHDRAW
                                                    ? "is-active"
                                                    : ""
                                            }
                                        >
                                            <a>
                                                <span>
                                                    {counterpart.translate(
                                                        "gateway.withdraw"
                                                    )}
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LLCGateway;
