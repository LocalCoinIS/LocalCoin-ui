import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";

class Recent extends React.Component {
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
            <span className="wrapper">
                <div
                    className="recent-transactions no-overflow"
                    style={{width: "100%", height: "100%"}}
                >
                    <div className="generic-bordered-box">
                        <div>
                            <div className="block-content-header">
                                <span>
                                    <span>
                                        {this.state.type == LLCGateway.WITHDRAW
                                            ? counterpart.translate(
                                                  "gateway.recent_withdraw"
                                              )
                                            : counterpart.translate(
                                                  "gateway.recent_deposit"
                                              )}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="header-selector">
                            <div className="selector">
                                <div className="inline-block" />
                            </div>
                        </div>
                        <div className="box-content grid-block no-margin">
                            <table className="table table-striped compact">
                                <thead>
                                    <tr>
                                        <th
                                            className="column-hide-tiny"
                                            style={{textAlign: "left"}}
                                        >
                                            <span>
                                                {counterpart.translate(
                                                    "account.transactions.id"
                                                )}
                                            </span>
                                        </th>
                                        <th
                                            className="column-hide-tiny"
                                            style={{textAlign: "left"}}
                                        >
                                            <span>
                                                {counterpart.translate(
                                                    "account.transactions.type"
                                                )}
                                            </span>
                                        </th>
                                        <th style={{textAlign: "left"}}>
                                            <span>
                                                {counterpart.translate(
                                                    "account.transactions.info"
                                                )}
                                            </span>
                                        </th>
                                        <th style={{textAlign: "left"}}>
                                            <span>
                                                {counterpart.translate(
                                                    "account.transactions.time"
                                                )}
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>
                                            <span>
                                                {counterpart.translate(
                                                    "gateway.no_recent"
                                                )}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="total-value">
                                        <td className="column-hide-tiny" />
                                        <td style={{textAlign: "right"}} />
                                        <td style={{textAlign: "center"}}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}

export default Recent;
