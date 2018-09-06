import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import ChooseCurrency from "./ChooseCurrency";
import Summary from "./Summary";
import Instructions from "./Instructions";
import LLCGatewayData from "./LLCGatewayData";
import accountUtils from "common/account_utils";
import {RecentTransactions} from "../../Account/RecentTransactions";
import Immutable from "immutable";
import Tabs from "components-brand-new/Utility/Tabs";

class LLCGateway extends React.Component {
    static label = "LLCGateway";
    static WITHDRAW = "withdraw";
    static DEPOSIT = "deposit";

    constructor(props) {
        super(props);

        this.onChangeDepositWithdraw = this.onChangeDepositWithdraw.bind(this);

        this.state = {
            type: LLCGateway.WITHDRAW,
            currency: {
                asset: null,
                currency: null
            },
            depositAddress: ""
        };
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

        this.createDepositAddress(this.props.account.get("name"), model.asset);
    }

    createDepositAddress(account, asset) {
        if (!account || !asset) return;

        new LLCGatewayData().сreatePaymentAddress(account, asset, address => {
            this.setState({
                depositAddress: address
            });
        });
    }

    //{counterpart.translate("gateway.gateway")}
    render() {
        let accountsList = Immutable.Set();
        accountsList = accountsList.add(this.props.account);

        const items = [
            {
                title: "gateway.gateway",
                content: ""
            }
        ];

        const depositWithdrawList = [
            {
                title: "gateway.withdraw",
                content: ""
            },
            {
                title: "gateway.deposit",
                content: ""
            }
        ];

        return (
            <div className="grid-content no-padding">
                <div className="content-block">
                    <Tabs items={items} inner={true} />
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
                                <Tabs
                                    onChange={this.onChangeDepositWithdraw}
                                    items={depositWithdrawList}
                                    inner={true}
                                />
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
