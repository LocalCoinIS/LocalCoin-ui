import React from "react";
import {connect} from "alt-react";
import accountUtils from "common/account_utils";
import {updateGatewayBackers} from "common/gatewayUtils";
import utils from "common/utils";
import Translate from "react-translate-component";
import ChainTypes from "../../components/Utility/ChainTypes";
import BindToChainState from "../../components/Utility/BindToChainState";
import HelpContent from "../../components/Utility/HelpContent";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import {settingsAPIs} from "api/apiConfig";
import GatewayStore from "stores/GatewayStore";
import AccountImage from "../../components/Account/AccountImage";
import PropTypes from "prop-types";
import LLCGateway from "../../components/DepositWithdraw/llcgateway/LLCGateway";
import counterpart from "counterpart";
import DropdownList from "../Utility/DropdownList";

class AccountDepositWithdraw extends React.Component {
    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired,
        contained: PropTypes.bool
    };

    static defaultProps = {
        contained: false
    };

    constructor(props) {
        super();
        this.state = {
            olService: props.viewSettings.get("olService", "gateway"),
            rudexService: props.viewSettings.get("rudexService", "gateway"),
            btService: props.viewSettings.get("btService", "bridge"),
            metaService: props.viewSettings.get("metaService", "bridge"),
            activeService: props.viewSettings.get("activeService", 0)
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.account !== this.props.account ||
            nextProps.servicesDown !== this.props.servicesDown ||
            !utils.are_equal_shallow(
                nextProps.blockTradesBackedCoins,
                this.props.blockTradesBackedCoins
            ) ||
            !utils.are_equal_shallow(
                nextProps.openLedgerBackedCoins,
                this.props.openLedgerBackedCoins
            ) ||
            nextState.olService !== this.state.olService ||
            nextState.rudexService !== this.state.rudexService ||
            nextState.btService !== this.state.btService ||
            nextState.metaService !== this.state.metaService ||
            nextState.activeService !== this.state.activeService
        );
    }

    componentWillMount() {
        accountUtils.getFinalFeeAsset(this.props.account, "transfer");
    }

    toggleOLService(service) {
        this.setState({
            olService: service
        });

        SettingsActions.changeViewSetting({
            olService: service
        });
    }

    toggleRuDEXService(service) {
        this.setState({
            rudexService: service
        });

        SettingsActions.changeViewSetting({
            rudexService: service
        });
    }

    toggleBTService(service) {
        this.setState({
            btService: service
        });

        SettingsActions.changeViewSetting({
            btService: service
        });
    }

    toggleMetaService(service) {
        this.setState({
            metaService: service
        });

        SettingsActions.changeViewSetting({
            metaService: service
        });
    }

    onSetService(e) {
        //let index = this.state.services.indexOf(e.target.value);
        this.setState({
            activeService: parseInt(e.target.value)
        });

        SettingsActions.changeViewSetting({
            activeService: parseInt(e.target.value)
        });
    }

    renderServices(openLedgerGatewayCoins, rudexGatewayCoins) {
        //let services = ["Openledger (OPEN.X)", "BlockTrades (TRADE.X)", "Transwiser", "BitKapital"];
        let serList = [];
        let {account} = this.props;
        // let {olService, btService, rudexService} = this.state;

        serList.push({
            name: LLCGateway.label,
            template: <LLCGateway account={account} />
        });

        return serList;
    }

    render() {
        let {account, servicesDown} = this.props;
        let {activeService} = this.state;

        let openLedgerGatewayCoins = this.props.openLedgerBackedCoins
            .map(coin => {
                return coin;
            })
            .sort((a, b) => {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

        let rudexGatewayCoins = this.props.rudexBackedCoins
            .map(coin => {
                return coin;
            })
            .sort((a, b) => {
                if (a.symbol < b.symbol) return -1;
                if (a.symbol > b.symbol) return 1;
                return 0;
            });

        let services = this.renderServices(
            openLedgerGatewayCoins,
            rudexGatewayCoins
        );

        let options = services.map((services_obj, index) => {
            return {
                key: index,
                label: services_obj.name
            };
        });

        const serviceNames = [
            "Winex",
            "GDEX",
            "OPEN",
            "RUDEX",
            "TRADE",
            "BITKAPITAL",
            LLCGateway.label
        ];
        const currentServiceName = serviceNames[activeService];
        const currentServiceDown = servicesDown.get(currentServiceName);

        return (
            <div className="content deposit-withdraw-layout">
                <h2 className="content__heading">
                    {counterpart.translate("gateway.title")}
                </h2>
                <div
                    className={this.props.contained ? "" : "grid-content"}
                    style={{paddingTop: "2rem"}}
                >
                    <div className="grid-block vertical medium-horizontal no-margin no-padding">
                        <div className="medium-6 show-for-medium">
                            <HelpContent
                                path="components/DepositWithdraw"
                                section="deposit-short"
                            />
                        </div>
                        <div className="medium-5 medium-offset-1">
                            <HelpContent
                                account={account.get("name")}
                                path="components/DepositWithdraw"
                                section="receive"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="grid-block vertical medium-horizontal no-margin no-padding">
                            <div className="medium-6 small-order-2 medium-order-1">
                                <Translate
                                    component="label"
                                    className="left-label"
                                    content="gateway.service"
                                />
                                <DropdownList
                                    options={options}
                                    selected={{
                                        key: activeService,
                                        label: services[activeService].name
                                    }}
                                    onChange={e =>
                                        this.onSetService.bind(this)(e)
                                    }
                                />

                                {currentServiceDown ? (
                                    <Translate
                                        style={{
                                            color: "red",
                                            marginBottom: "1em",
                                            display: "block"
                                        }}
                                        content={`gateway.unavailable_${currentServiceName}`}
                                    />
                                ) : null}
                            </div>
                            <div
                                className="medium-5 medium-offset-1 small-order-1 medium-order-2"
                                style={{paddingBottom: 20}}
                            >
                                <Translate
                                    component="label"
                                    className="left-label"
                                    content="gateway.your_account"
                                />
                                <div className="inline-label">
                                    <AccountImage
                                        size={{height: 40, width: 40}}
                                        account={account.get("name")}
                                        custom_image={null}
                                    />
                                    <input
                                        type="text"
                                        value={account.get("name")}
                                        placeholder={null}
                                        disabled
                                        onChange={() => {}}
                                        onKeyDown={() => {}}
                                        tabIndex={1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="grid-content no-padding"
                        style={{paddingTop: 15}}
                    >
                        {currentServiceDown
                            ? null
                            : activeService && services[activeService]
                                ? services[activeService].template
                                : services[0].template}
                    </div>
                </div>
            </div>
        );
    }
}
AccountDepositWithdraw = BindToChainState(AccountDepositWithdraw);

class DepositStoreWrapper extends React.Component {
    componentWillMount() {
        updateGatewayBackers();
    }

    render() {
        return <AccountDepositWithdraw {...this.props} />;
    }
}

export default connect(
    DepositStoreWrapper,
    {
        listenTo() {
            return [AccountStore, SettingsStore, GatewayStore];
        },
        getProps() {
            return {
                account: AccountStore.getState().currentAccount,
                viewSettings: SettingsStore.getState().viewSettings,
                openLedgerBackedCoins: GatewayStore.getState().backedCoins.get(
                    "OPEN",
                    []
                ),
                rudexBackedCoins: GatewayStore.getState().backedCoins.get(
                    "RUDEX",
                    []
                ),
                blockTradesBackedCoins: GatewayStore.getState().backedCoins.get(
                    "TRADE",
                    []
                ),
                winexBackedCoins: GatewayStore.getState().backedCoins.get(
                    "WIN",
                    []
                ),
                servicesDown: GatewayStore.getState().down || {}
            };
        }
    }
);
