import React from "react";
import counterpart from "counterpart";
import ChooseCurrency from "./ChooseCurrency";
import Summary from "./Summary";
import Instructions from "./Instructions";
import LLCGatewayData from "./LLCGatewayData";
import {RecentTransactions} from "../../Account/RecentTransactions";
import Immutable from "immutable";
import Tab from "components/Utility/Tab"; import Tabs from "components/Utility/Tabs";

class LLCGateway extends React.Component {
    static label = "LLCGateway";
    static WITHDRAW = "withdraw";
    static DEPOSIT = "deposit";

    static GATEWAY = "0";
    static BRIDGE = "1";

    constructor(props) {
        super(props);

        this.onChangeDepositWithdraw = this.onChangeDepositWithdraw.bind(this);
        this.onChangeGatewayBridge = this.onChangeGatewayBridge.bind(this);

        this.state = {
            type: LLCGateway.WITHDRAW,
            mode: LLCGateway.GATEWAY,
            currency: {
                asset: null,
                currency: null
            },
            depositAddress: "",
            gatewayBridgeList: [
                {title: "gateway.gateway", content: ""},
                {title: "gateway.bridge", content: ""}
            ],
            depositWithdrawList: [
                {title: "gateway.deposit", content: ""},
                {title: "gateway.withdraw", content: ""}
            ]
        };
    }

    componentDidMount() {
        this.switchToDeposit();
    }

    onChangeGatewayBridge(title) {
        if (title == "gateway.gateway") {
            this.setState({
                mode: LLCGateway.GATEWAY,
                depositWithdrawList: [
                    {title: "gateway.deposit", content: ""},
                    {title: "gateway.withdraw", content: ""}
                ],
                type: LLCGateway.WITHDRAW
            });
            this.createDepositAddress(
                this.props.account.get("name"),
                this.state.currency.asset,
                LLCGateway.GATEWAY
            );
        } else if (title == "gateway.bridge") {
            this.setState({
                mode: LLCGateway.BRIDGE,
                depositWithdrawList: [{title: "gateway.deposit", content: ""}],
                type: LLCGateway.DEPOSIT
            });
            this.createDepositAddress(
                this.props.account.get("name"),
                this.state.currency.asset,
                LLCGateway.BRIDGE
            );
        }
    }

    onChangeDepositWithdraw(title) {
        if (title == "gateway.deposit") {
            this.setState({type: LLCGateway.DEPOSIT});
        } else if (title == "gateway.withdraw") {
            this.setState({type: LLCGateway.WITHDRAW});
        }
    }

    switchToDeposit() {
        this.setState({type: LLCGateway.DEPOSIT});
    }

    switchToWithdraw() {
        this.setState({type: LLCGateway.WITHDRAW});
    }

    setCurrency(model) {
        this.setState({
            currency: model
        });

        this.createDepositAddress(
            this.props.account.get("name"),
            model.asset,
            this.state.mode
        );
    }

    createDepositAddress(account, asset, mode) {
        if (!account || !asset) return;

        new LLCGatewayData().сreatePaymentAddress(
            account,
            asset,
            mode,
            address => {
                this.setState({
                    depositAddress: address
                });
            }
        );
    }

    //{counterpart.translate("gateway.gateway")}
    render() {
        let accountsList = Immutable.Set();
        accountsList = accountsList.add(this.props.account);

        return (
            <div className="grid-content no-padding">
                <div className="content-block">
                    {/* <Tabs
                        onChange={this.onChangeGatewayBridge}
                        items={this.state.gatewayBridgeList}
                        inner={true}
                    /> */}
                    <div className="dashboard">
                        <div className="dashboard__tabs">
                            <div className="select dashboard__mobileselect">
                                <span className="placeholder">
                                    {counterpart.translate("gateway.gateway")}
                                </span>
                                <ul>
                                    <li>
                                        {counterpart.translate(
                                            "gateway.bridge"
                                        )}
                                    </li>
                                </ul>
                            </div>
                            <div className="dashboard__tabs__item active">
                                <h4>
                                    {counterpart.translate("gateway.gateway")}
                                </h4>
                            </div>
                            <div className="dashboard__tabs__item">
                                <h4>
                                    {counterpart.translate("gateway.bridge")}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div>
                        <div className="grid-block no-margin vertical medium-horizontal no-padding">
                            <div className="medium-4">
                                <ChooseCurrency
                                    account={this.props.account}
                                    type={this.state.type}
                                    bullet={this}
                                />
                            </div>
                            <div className="medium-6 medium-offset-1">
                                <label className="left-label">
                                    <span>
                                        {counterpart.translate(
                                            "gateway.gateway_text"
                                        )}
                                    </span>
                                    :
                                </label>
                                {this.state.mode == LLCGateway.BRIDGE ? null : (
                                    <Tabs
                                        onChange={this.onChangeDepositWithdraw}
                                        items={this.state.depositWithdrawList}
                                        inner={true}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="rudex__gateway grid-block no-padding no-margin">
                        <Summary
                            account={this.props.account}
                            type={this.state.type}
                            currency={this.state.currency}
                        />
                        <Instructions
                            depositAddress={this.state.depositAddress}
                            account={this.props.account}
                            type={this.state.type}
                            currency={this.state.currency}
                        />
                    </div>

                    <div
                        style={{
                            display:
                                this.state.type == LLCGateway.WITHDRAW ||
                                !this.state.type
                                    ? "block"
                                    : "none"
                        }}
                    >
                        <RecentTransactions
                            accountsList={accountsList}
                            limit={25}
                            compactView={true}
                            filter="transfer"
                            fullHeight={true}
                        />
                    </div>

                    <div
                        style={{
                            display:
                                this.state.type == LLCGateway.DEPOSIT
                                    ? "block"
                                    : "none"
                        }}
                    >
                        <RecentTransactions
                            accountsList={accountsList}
                            limit={25}
                            compactView={true}
                            filter="asset_issue"
                            fullHeight={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default LLCGateway;
