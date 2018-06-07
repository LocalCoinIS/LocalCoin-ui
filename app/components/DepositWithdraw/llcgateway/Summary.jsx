import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";

class Summary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            type: props.type
        });
    }
    render() {
        return (
            <div className="small-12 medium-5">
                <h4>
                    {this.state.type == LLCGateway.WITHDRAW
                        ? counterpart.translate("gateway.withdraw_summary")
                        : counterpart.translate("gateway.deposit_summary")}
                </h4>
                <div className="small-12 medium-10">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    {this.state.type == LLCGateway.DEPOSIT
                                        ? counterpart.translate(
                                              "gateway.asset_to_deposit"
                                          )
                                        : counterpart.translate(
                                              "gateway.asset_to_withdraw"
                                          )}
                                </td>
                                <td
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(4, 156, 206)",
                                        textAlign: "right"
                                    }}
                                >
                                    GOLOS
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {counterpart.translate(
                                        "gateway.asset_to_receive"
                                    )}
                                </td>
                                <td
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(4, 156, 206)",
                                        textAlign: "right"
                                    }}
                                >
                                    <span>
                                        <span className="asset-prefix-replaced">
                                            rudex.
                                        </span>GOLOS
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {counterpart.translate(
                                        "gateway.intermediate"
                                    )}
                                </td>
                                <td
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(4, 156, 206)",
                                        textAlign: "right"
                                    }}
                                >
                                    <a href="#/account/rudex-golos/overview/">
                                        rudex-golos
                                    </a>
                                </td>
                            </tr>
                            {this.state.type == LLCGateway.DEPOSIT ? (
                                <tr>
                                    <td>
                                        {counterpart.translate(
                                            "gateway.your_account"
                                        )}
                                    </td>
                                    <td
                                        style={{
                                            fontWeight: "bold",
                                            color: "rgb(4, 156, 206)",
                                            textAlign: "right"
                                        }}
                                    >
                                        <a href="#/account/ninetor-dot/overview/">
                                            ninetor-dot
                                        </a>
                                    </td>
                                </tr>
                            ) : (
                                ""
                            )}
                            <tr>
                                <td>
                                    <span>
                                        <td>
                                            {counterpart.translate(
                                                "gateway.balance"
                                            )}
                                        </td>
                                    </span>:
                                </td>
                                <td
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(4, 156, 206)",
                                        textAlign: "right"
                                    }}
                                >
                                    <span>
                                        0&nbsp;<span>
                                            <span className="asset-prefix-replaced">
                                                rudex.
                                            </span>GOLOS
                                        </span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Summary;
