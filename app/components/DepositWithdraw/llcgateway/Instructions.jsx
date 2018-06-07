import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";

class Instructions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type
        };
    }

    componentWillUpdate(props) {
        this.setState({
            type: props.type
        });
    }
    render() {
        return (
            <div className="small-12 medium-7">
                <h4>
                    {this.state.type == LLCGateway.WITHDRAW
                        ? counterpart.translate("gateway.withdraw_inst")
                        : counterpart.translate("gateway.deposit_inst")}
                </h4>
                <label className="left-label">
                    <span>Please send your GOLOS to the address below</span>:
                </label>
                <label className="left-label">
                    <b>
                        <span>Minimum amount: 1 golos</span>
                    </b>
                </label>
                <div style={{padding: "10px 0px", fontSize: "1.1rem"}}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    ADDRESS:{" "}
                                    <b>
                                        <span>rudex</span>
                                    </b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    MEMO:{" "}
                                    <b>
                                        <span>dex:ninetor-dot</span>
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="button-group" style={{paddingTop: 10}}>
                        <div className="button">Copy address</div>
                        <div className="button">Copy memo</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructions;
