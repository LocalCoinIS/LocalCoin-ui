import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import {List} from "immutable";
import AccountBalance from "../../Account/AccountBalance";

class Summary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type
        };

        // console.log("balances:");
        // let balances = props.account.get("balances").toJS(); //props.account.get("balances", List()).toList();
        // console.log(balances);
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
                                    {this.state.type == LLCGateway.DEPOSIT
                                        ? this.props.currency.currency
                                        : this.props.currency.asset}
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
                                        {this.state.type == LLCGateway.WITHDRAW
                                            ? this.props.currency.currency
                                            : this.props.currency.asset}
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
                                    <a
                                        href={
                                            "#/account/" +
                                            this.props.currency.intermediate +
                                            "/overview/"
                                        }
                                    >
                                        {this.props.currency.intermediate}
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
                                        <a
                                            href={
                                                "/#/account/" +
                                                this.props.account.get("name")
                                            }
                                        >
                                            {this.props.account.get("name")}
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
                                    <AccountBalance
                                        account={this.props.account.get("name")}
                                        asset={this.props.currency.asset}
                                        replace={false}
                                    />
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
