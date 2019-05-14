import React from "react";
import Immutable from "immutable";
import Translate from "react-translate-component";
import BalanceComponent from "../../components/Utility/BalanceComponent";
import TotalBalanceValue from "../../components/Utility/TotalBalanceValue";
import SettleModal from "../../components/Modal/SettleModal";
import {BalanceValueComponent} from "../../components/Utility/EquivalentValueComponent";
import {Market24HourChangeComponent} from "../../components/Utility/MarketChangeComponent";
import AssetName from "../../components/Utility/AssetName";
import MarginPositions from "./MarginPositions";
import {RecentTransactions} from "./RecentTransactions";
import Proposals from "components/Account/Proposals";
import {ChainStore} from "bitsharesjs/es";
import SettingsActions from "actions/SettingsActions";
import assetUtils from "common/asset_utils";
import counterpart from "counterpart";
import Icon from "../../components/Icon/Icon";
import {Link} from "react-router/es";
import EquivalentPrice from "../../components/Utility/EquivalentPrice";
import LinkToAssetById from "../../components/Utility/LinkToAssetById";
import utils from "common/utils";
import BorrowModal from "../../components/Modal/BorrowModal";
// import DepositModal from "../../components/Modal/DepositModal";
import ReactTooltip from "react-tooltip";
import SimpleDepositWithdraw from "../../components/Dashboard/SimpleDepositWithdraw";
// import SimpleDepositBlocktradesBridge from "../../components/Dashboard/SimpleDepositBlocktradesBridge";
import Tabs from "../Utility/Tabs";
import AccountOrders from "./AccountOrders";
import cnames from "classnames";
import TranslateWithLinks from "../../components/Utility/TranslateWithLinks";
import {checkMarginStatus} from "common/accountHelper";
import BalanceWrapper from "../../components/Account/BalanceWrapper";
import SendModal from "../../components/Modal/SendModal";
import PulseIcon from "../../components/Icon/PulseIcon";
// import WithdrawModal from "../../components/Modal/WithdrawModalNew";
import AccountTreemap from "../../components/Account/AccountTreemap";
import {getBackedCoin} from "common/gatewayUtils";
import AssetWrapper from "../../components/Utility/AssetWrapper";

import ReserveAssetModal from "../../components/Modal/ReserveAssetModal";
import BaseModal from "../../components/Modal/BaseModal";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import LLCBridgeModal from "../../components/DepositWithdraw/llcgateway/LLCBridgeModal";
import LLCGatewayData from "../../components/DepositWithdraw/llcgateway/LLCGatewayData";
import {getDashboardAssets} from "branding";

class AccountOverview extends React.Component {

    static MODE_BUY_LLC = "1";
    static MODE_BUY_OTHER_COIN = "0";

    constructor(props) {
        super();
        this.state = {
            sortKey: props.viewSettings.get("portfolioSort", "totalValue"),
            sortDirection: props.viewSettings.get(
                "portfolioSortDirection",
                true
            ), // alphabetical A -> B, numbers high to low
            settleAsset: "1.3.0",
            shownAssets: props.viewSettings.get("shownAssets", "active"),
            depositAsset: null,
            withdrawAsset: null,
            bridgeAsset: null,
            alwaysShowAssets: [
                "LLC",
                "BTC", "ETH", "XMR", "DASH", "LTC", "USDT",
                "EUR", "USD", "GBP", "CNY", "RUB", "UAH"
                //,
                //"USD",
                //"CNY"
                // "OPEN.BTC",
                // "OPEN.USDT",
                // "OPEN.ETH",
                // "OPEN.MAID",
                // "OPEN.STEEM",
                // "OPEN.DASH"
            ],
            hide0balances: false,
            isBridgeModalVisible: false,
            currentAsset: null,
            type: "deposit",
            currency: {
                asset: null,
                currency: null
            },
            currencies: null,
            depositAddress: null,
            buyLLCAddress: null,
            activeTab: "deposit_tab",
            isAssetsLoad: true,
            isDashboard: true
            };

        this.qtyRefs = {};
        this.priceRefs = {};
        this.valueRefs = {};
        this.changeRefs = {};
        for (let key in this.sortFunctions) {
            this.sortFunctions[key] = this.sortFunctions[key].bind(this);
        }
        this._handleFilterInput = this._handleFilterInput.bind(this);
        this.onShowModal = this.onShowModal.bind(this);
    }

    onShowModal(asset, tab) {
        let self = this;
        this.setState(
            {
                isBridgeModalVisible: false,
                isDashboard: true
            },
            function() {
                self.setState({
                    isBridgeModalVisible: true,
                    currentAsset: asset ? asset : null,
                    activeTab: tab,
                    isDashboard: asset === "LLC" ? false : true
                });
            }
        );
        this.getAllowCurrencies(asset);
        let account = this.props.account
        let accountName = typeof account === "object" ? account.get("name") :
            typeof account === "string" ? account : "";

        new LLCGatewayData().сreatePaymentAddress(
            accountName,
            asset,
            AccountOverview.MODE_BUY_LLC,
            function(address) {
                self.setState({buyLLCAddress: address});
            }
        );
        
        new LLCGatewayData().сreatePaymentAddress(
            accountName,
            asset,
            AccountOverview.MODE_BUY_OTHER_COIN,
            function(address) {
                self.setState({depositAddress: address});
            }
        );
    }

    getAllowCurrencies(asset) {
        let provider = new LLCGatewayData();
        let self = this;
        provider.getAllowCurrency(data => {
            data[this.state.type].forEach(a => {
                if(a.asset == asset) {
                    self.setState(
                        {
                            currency: a
                        }
                    );
                }
            })

        });
    }

    onCloseModal = () => {
        this.setState(
            {
                currentAsset: null,
                currency: {
                    asset: null,
                    currency: null
                },
                depositAddress: null
            }
        );
    }

    updateModal = () => {
        this.setState({isBridgeModalVisible: false});
    };
    _reserveButtonClick(assetId, e) {
        e.preventDefault();
        this.setState({reserve: assetId});
        ZfApi.publish("reserve_asset", "open");
    }

    _reserveAsset(account_id, e) {
        e.preventDefault();
        ZfApi.publish("reserve_asset", "close");
        let {issue} = this.state;
        let asset = this.props.assets.get(issue.asset_id);
        issue.amount *= utils.get_asset_precision(asset.precision);
        AssetActions.issueAsset(account_id, issue);
    }

    _handleFilterInput(e) {
        e.preventDefault();
        this.setState({
            filterValue: e.target.value
        });
    }

    sortFunctions = {
        qty: function(a, b, force) {
            if (Number(this.qtyRefs[a.key]) < Number(this.qtyRefs[b.key]))
                return this.state.sortDirection || force ? -1 : 1;

            if (Number(this.qtyRefs[a.key]) > Number(this.qtyRefs[b.key]))
                return this.state.sortDirection || force ? 1 : -1;
        },
        alphabetic: function(a, b, force) {
            if (a.key > b.key)
                return this.state.sortDirection || force ? 1 : -1;
            if (a.key < b.key)
                return this.state.sortDirection || force ? -1 : 1;
            return 0;
        },
        priceValue: function(a, b) {
            let aRef = this.priceRefs[a.key];
            let bRef = this.priceRefs[b.key];
            if (aRef && bRef) {
                let aPrice = aRef.getFinalPrice(true);
                let bPrice = bRef.getFinalPrice(true);
                if (aPrice === null && bPrice !== null) return 1;
                if (aPrice !== null && bPrice === null) return -1;
                if (aPrice === null && bPrice === null)
                    return this.sortFunctions.alphabetic(a, b, true);
                return this.state.sortDirection
                    ? aPrice - bPrice
                    : bPrice - aPrice;
            }
        },
        totalValue: function(a, b) {
            let aRef = this.valueRefs[a.key];
            let bRef = this.valueRefs[b.key];
            if (aRef && bRef) {
                let aValue = aRef.getValue();
                let bValue = bRef.getValue();
                if (!aValue && bValue) return 1;
                if (aValue && !bValue) return -1;
                if (!aValue && !bValue)
                    return this.sortFunctions.alphabetic(a, b, true);
                return this.state.sortDirection
                    ? aValue - bValue
                    : bValue - aValue;
            }
        },
        changeValue: function(a, b) {
            let aRef = this.changeRefs[a.key];
            let bRef = this.changeRefs[b.key];

            if (aRef && bRef) {
                let aValue = aRef.getValue();
                let bValue = bRef.getValue();
                let aChange =
                    parseFloat(aValue) != "NaN" ? parseFloat(aValue) : aValue;
                let bChange =
                    parseFloat(bValue) != "NaN" ? parseFloat(bValue) : bValue;
                let direction =
                    typeof this.state.sortDirection !== "undefined"
                        ? this.state.sortDirection
                        : true;

                return direction ? aChange - bChange : bChange - aChange;
            }
        }
    };

    componentWillMount() {
        this._checkMarginStatus();
        if(this.props.location.hash === "#activity") {
           this.props.router.push("/account/" + this.props.account_name);
        }
    }

    _checkMarginStatus(props = this.props) {
        checkMarginStatus(props.account).then(status => {
            let globalMarginStatus = null;
            for (let asset in status) {
                globalMarginStatus =
                    status[asset].statusClass || globalMarginStatus;
            }
            this.setState({globalMarginStatus});
        });
    }

    componentWillReceiveProps(np) {
        if (np.account !== this.props.account) {
            this._checkMarginStatus(np);
            this.priceRefs = {};
            this.valueRefs = {};
            this.changeRefs = {};
            setTimeout(this.forceUpdate.bind(this), 500);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            !utils.are_equal_shallow(
                nextProps.backedCoins,
                this.props.backedCoins
            ) ||
            !utils.are_equal_shallow(nextProps.balances, this.props.balances) ||
            nextProps.account !== this.props.account ||
            nextProps.settings !== this.props.settings ||
            nextProps.hiddenAssets !== this.props.hiddenAssets ||
            !utils.are_equal_shallow(nextState, this.state) ||
            this.state.filterValue !== nextState.filterValue
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if(!this.state.isAssetsLoad) {
            let self = this;
            setTimeout(function () {
                self.forceUpdate();
            }, 1000)
        }
    }

    _onSettleAsset(id, e) {
        e.preventDefault();
        this.setState({
            settleAsset: id
        });
        this.refs.settlement_modal.show();
        console.log("====================================");
        console.log(this.refs.settlement_modal);
        console.log("====================================");
        // let settleRef = "settlement_modal";
        // this.refs[settleRef].show();

        // ZfApi.publish("settle_asset", "open");
    }

    _hideAsset(asset, status) {
        SettingsActions.hideAsset(asset, status);
    }

    _showDepositModal(asset, e) {
        e.preventDefault();
        this.setState({depositAsset: asset}, () => {
            this.refs.deposit_modal_new.show();
        });
    }

    _showDepositWithdraw(action, asset, fiatModal, e) {
        e.preventDefault();
        this.setState(
            {
                [action === "bridge_modal"
                    ? "bridgeAsset"
                    : action === "deposit_modal"
                        ? "depositAsset"
                        : "withdrawAsset"]: asset,
                fiatModal
            },
            () => {
                this.refs[action].show();
            }
        );
    }

    _getSeparator(render) {
        return render ? <span>&nbsp;|&nbsp;</span> : null;
    }

    _onNavigate(route, e) {
        e.preventDefault();
        this.props.router.push(route);
    }

    triggerSend(asset) {
        this.setState({send_asset: asset}, () => {
            if (this.send_modal) this.send_modal.show();
        });
    }

    _renderBuy = (symbol, canBuy, emptyCell) => {
        if (canBuy) {
            // Precision of 5, 1 = 10^5
            return (
                <span>
                    <a onClick={this.onShowModal.bind(this, symbol, "buy_tab")}>
                        <PulseIcon
                            onIcon="dollar"
                            offIcon="dollar"
                            title="icons.dollar.buy"
                            duration={1000}
                            className="icon-14px"
                        />
                    </a>
                </span>
            );
        } else {
            return emptyCell;
        }
    };

    _renderBalances(balanceList, optionalAssets, visible) {
        const {core_asset} = this.props;
        let {settings, hiddenAssets, orders} = this.props;
        let preferredUnit = settings.get("unit") || core_asset.get("symbol");
        let showAssetPercent = settings.get("showAssetPercent", false);

        const renderBorrow = (asset, account) => {
            let isBitAsset = asset && asset.has("bitasset_data_id");
            let modalRef = "cp_modal_" + asset.get("id");
            return {
                isBitAsset,
                borrowModal: !isBitAsset ? null : (
                    <BorrowModal
                        ref={modalRef}
                        modalId={"borrow_modal_" + asset.get("id")}
                        quote_asset={asset.get("id")}
                        backing_asset={asset.getIn([
                            "bitasset",
                            "options",
                            "short_backing_asset"
                        ])}
                        account={account}
                    />
                ),
                borrowLink: !isBitAsset ? null : (
                    <a
                        onClick={() => {
                            ReactTooltip.hide();
                            this.refs[modalRef].show();
                        }}
                    >
                        <Icon
                            name="dollar"
                            title="icons.dollar.borrow"
                            className="icon-14px"
                        />
                    </a>
                )
            };
        };

        let balances = [];
        const emptyCell = "-";
        const deafaultAssetsArr = getDashboardAssets();
        balanceList.forEach(balance => {
            let balanceObject = ChainStore.getObject(balance);
            if (!balanceObject) return;
            let asset_type = balanceObject.get("asset_type");

            let asset = ChainStore.getObject(asset_type);
            if (!asset) return;

            let directMarketLink, settleLink, transferLink;
            let symbol = "";

            const assetName = asset.get("symbol");
            const notCore = asset.get("id") !== "1.3.0";
            const notCorePrefUnit = preferredUnit !== core_asset.get("symbol");

            let {market} = assetUtils.parseDescription(
                asset.getIn(["options", "description"])
            );
            symbol = asset.get("symbol");
            if (symbol.indexOf("OPEN.") !== -1 && !market) market = "USD";
            let preferredMarket = market ? market : preferredUnit;

            if (notCore && preferredMarket === symbol)
                preferredMarket = core_asset.get("symbol");

            /* Table content */
            directMarketLink = notCore ? (
                <Link to={`/market/${preferredMarket}_${asset.get("symbol")}`}>
                    <Icon
                        name="trade"
                        title="icons.trade.trade"
                        className="icon-14px"
                    />
                </Link>
            ) : notCorePrefUnit ? (
                <Link to={`/market/${preferredUnit}_${asset.get("symbol")}`}>
                    <Icon
                        name="trade"
                        title="icons.trade.trade"
                        className="icon-14px"
                    />
                </Link>
            ) : (
                emptyCell
            );
            transferLink = (
                <a onClick={this.triggerSend.bind(this, asset.get("id"))}>
                    <Icon
                        name="transfer"
                        title="icons.transfer"
                        className="icon-14px"
                    />
                </a>
            );

            let {isBitAsset, borrowModal, borrowLink} = renderBorrow(
                asset,
                this.props.account
            );

            /* Popover content */
            settleLink = (
                <a onClick={this._onSettleAsset.bind(this, asset.get("id"))}>
                    <Icon
                        name="settle"
                        title="icons.settle"
                        className="icon-14px"
                    />
                </a>
            );

            const includeAsset = !hiddenAssets.includes(asset_type);
            const hasBalance = !!balanceObject.get("balance");
            const hasOnOrder = !!orders[asset_type];

            const backedCoin = getBackedCoin(
                asset.get("symbol"),
                this.props.backedCoins
            );

            const canTrade = deafaultAssetsArr.includes(asset.get("symbol"));

            const canDeposit = (backedCoin && backedCoin.depositAllowed) || canTrade;

            const canWithdraw =
                (backedCoin &&
                backedCoin.withdrawalAllowed &&
                (hasBalance && balanceObject.get("balance") != 0)) || canTrade;

            const canBuy = !!this.props.bridgeCoins.get(symbol) || asset.get("symbol") === "LLC" ;

            const assetAmount = balanceObject.get("balance");

            this.qtyRefs[asset.get("symbol")] = utils.get_asset_amount(
                assetAmount,
                asset
            );
            balances.push(
                <tr key={asset.get("symbol")} style={{maxWidth: "100rem"}}>
                    <td style={{textAlign: "left"}}>
                        <LinkToAssetById showIcon asset={asset.get("id")} />
                    </td>
                    <td style={{textAlign: "right"}}>
                        {hasBalance || hasOnOrder ? (
                            <BalanceComponent balance={balance} hide_asset />
                        ) : null}
                    </td>
                    <td
                        style={{textAlign: "right"}}
                        className="column-hide-small"
                    >
                        <EquivalentPrice
                            refCallback={c => {
                                if (c && c.refs.bound_component)
                                    this.priceRefs[asset.get("symbol")] =
                                        c.refs.bound_component;
                            }}
                            fromAsset={asset.get("id")}
                            pulsate={{reverse: true, fill: "forwards"}}
                            hide_symbols
                        />
                    </td>
                    <td
                        style={{textAlign: "right"}}
                        className="column-hide-small"
                    >
                        <Market24HourChangeComponent
                            refCallback={c => {
                                if (c && c.refs.bound_component)
                                    this.changeRefs[asset.get("symbol")] =
                                        c.refs.bound_component;
                            }}
                            base={asset.get("id")}
                            quote={preferredUnit}
                            marketId={asset.get("symbol") + "_" + preferredUnit}
                            hide_symbols
                        />
                    </td>
                    <td
                        style={{textAlign: "right"}}
                        className="column-hide-small"
                    >
                        {hasBalance || hasOnOrder ? (
                            <BalanceValueComponent
                                balance={balance}
                                toAsset={preferredUnit}
                                hide_asset
                                refCallback={c => {
                                    if (c && c.refs.bound_component)
                                        this.valueRefs[asset.get("symbol")] =
                                            c.refs.bound_component;
                                }}
                            />
                        ) : null}
                    </td>
                    {showAssetPercent ? (
                        <td style={{textAlign: "right"}}>
                            {hasBalance ? (
                                <BalanceComponent
                                    balance={balance}
                                    asPercentage={true}
                                />
                            ) : null}
                        </td>
                    ) : null}
                    <td>{transferLink}</td>
                    <td>
                        {this._renderBuy(
                            asset.get("symbol"),
                            canBuy,
                            emptyCell
                        )}
                    </td>
                    <td>
                        {canDeposit ? (
                            <span>
                                <Icon
                                    style={{cursor: "pointer"}}
                                    name="deposit"
                                    title="icons.deposit.deposit"
                                    className="icon-14x"
                                    onClick={this.onShowModal.bind(this,  asset.get("symbol"), "deposit_tab")}
                                />
                            </span>
                        ) : (
                            emptyCell
                        )}
                    </td>
                    <td>
                        {canWithdraw ? (
                            <span>
                                <Icon
                                style={{cursor: "pointer"}}
                                name="withdraw"
                                title="icons.withdraw"
                                className="icon-14px"
                                onClick={this.onShowModal.bind(this,  asset.get("symbol"), "withdraw_tab")}
                                />
                            </span>
                        ) : (
                            emptyCell
                        )}
                    </td>
                    <td>{directMarketLink}</td>
                    <td>
                        {isBitAsset ? (
                            <div
                                className="inline-block"
                                data-place="bottom"
                                data-tip={counterpart.translate(
                                    "tooltip.borrow",
                                    {asset: symbol}
                                )}
                            >
                                {borrowLink}
                                {borrowModal}
                            </div>
                        ) : (
                            emptyCell
                        )}
                    </td>
                    <td>
                        {isBitAsset ? (
                            <div
                                className="inline-block"
                                data-place="bottom"
                                data-tip={counterpart.translate(
                                    "tooltip.settle",
                                    {asset: symbol}
                                )}
                            >
                                {settleLink}
                            </div>
                        ) : (
                            emptyCell
                        )}
                    </td>
                    <td
                        style={{textAlign: "center"}}
                        className="column-hide-small"
                        data-place="bottom"
                        data-tip={counterpart.translate("tooltip.burn")}
                        onClick={this._reserveButtonClick.bind(
                            this,
                            asset.get("id")
                        )}
                    >
                        <a
                            style={{marginRight: 0}}
                            className={
                                includeAsset ? "order-cancel" : "action-plus"
                            }
                        >
                            <span className="icon fire icon-14px">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z" />
                                </svg>
                            </span>
                        </a>
                    </td>
                    <td
                        style={{textAlign: "center"}}
                        className="column-hide-small"
                        data-place="bottom"
                        data-tip={counterpart.translate(
                            "tooltip." +
                                (includeAsset ? "hide_asset" : "show_asset")
                        )}
                        onClick={this._hideAsset.bind(
                            this,
                            asset_type,
                            includeAsset
                        )}
                    >
                        <a
                            style={{marginRight: 0}}
                            className={
                                includeAsset ? "order-cancel" : "action-plus"
                            }
                        >
                            <Icon
                                name={
                                    includeAsset
                                        ? "cross-circle"
                                        : "plus-circle"
                                }
                                title={
                                    includeAsset
                                        ? "icons.cross_circle.hide_asset"
                                        : "icons.plus_circle.show_asset"
                                }
                                className="icon-14px"
                            />
                        </a>
                    </td>
                </tr>
            );
        });
        if (optionalAssets && !this.state.hide0balances) {
            let isAssetsLoad = true;
            this.setState({
                isAssetsLoad: true
            });
            optionalAssets
                .filter(asset => {
                    let keep = true;
                    balances.forEach(a => {
                        if (a.key === asset) keep = false;
                    });
                    return keep;
                })
                .forEach(a => {
                    let asset = ChainStore.getAsset(a);
                    if(!asset) {
                        isAssetsLoad = false;
                    }

                    if (asset) {

                        const includeAsset = !hiddenAssets.includes(
                            asset.get("id")
                        );

                        const thisAssetName = asset.get("symbol").split(".");
                        const backedCoin = getBackedCoin(
                            asset.get("symbol"),
                            this.props.backedCoins
                        );

                        const canTrade = deafaultAssetsArr.includes(asset.get("symbol"));

                        const canDeposit = (backedCoin && backedCoin.depositAllowed) || canTrade;

                        const canWithdraw =
                            (backedCoin &&
                                backedCoin.withdrawalAllowed) || canTrade;

                        const canBuy = !!this.props.bridgeCoins.get(
                            asset.get("symbol")
                        )  || asset.get("symbol") === "LLC" ;

                        const notCore = asset.get("id") !== "1.3.0";
                        let {market} = assetUtils.parseDescription(
                            asset.getIn(["options", "description"])
                        );
                        if (
                            asset.get("symbol").indexOf("OPEN.") !== -1 &&
                            !market
                        )
                            market = "USD";
                        let preferredMarket = market
                            ? market
                            : core_asset
                                ? core_asset.get("symbol")
                                : "LLC";
                        let directMarketLink = notCore ? (
                            <Link
                                to={`/market/${preferredMarket}_${asset.get(
                                    "symbol"
                                )}`}
                            >
                                <Icon
                                    name="trade"
                                    title="icons.trade.trade"
                                    className="icon-14px"
                                />
                            </Link>
                        ) : (
                            emptyCell
                        );
                        let {
                            isBitAsset,
                            borrowModal,
                            borrowLink
                        } = renderBorrow(asset, this.props.account);
                        if (
                            (includeAsset && visible) ||
                            (!includeAsset && !visible)
                        )
                            balances.push(
                                <tr
                                    key={asset.get("symbol")}
                                    style={{maxWidth: "100rem"}}
                                >
                                    <td style={{textAlign: "left"}}>
                                        <LinkToAssetById showIcon asset={asset.get("id")} />
                                    </td>
                                    <td style={{textAlign: "right"}}>{emptyCell}</td>
                                    <td
                                        style={{textAlign: "right"}}
                                        className="column-hide-small"
                                    >
                                        {emptyCell}
                                    </td>
                                    <td
                                        style={{textAlign: "right"}}
                                        className="column-hide-small"
                                    >
                                        {emptyCell}
                                    </td>
                                    <td
                                        style={{textAlign: "right"}}
                                        className="column-hide-small"
                                    >
                                        {emptyCell}
                                    </td>
                                    <td>{emptyCell}</td>
                                    <td>
                                        {this._renderBuy(
                                            asset.get("symbol"),
                                            canBuy,
                                            emptyCell
                                        )}
                                    </td>
                                    <td>
                                        {canDeposit ? (
                                            <span>
                                                <Icon
                                                    style={{cursor: "pointer"}}
                                                    name="deposit"
                                                    title="icons.deposit.deposit"
                                                    className="icon-14x"
                                                    onClick={this.onShowModal.bind(this,  asset.get("symbol"), "deposit_tab")}
                                                />
                                            </span>
                                        ) : (
                                            emptyCell
                                        )}
                                    </td>
                                    <td>
                                        {canWithdraw ? (
                                            <span>
                                                <Icon
                                                    style={{cursor: "pointer"}}
                                                    name="withdraw"
                                                    title="icons.withdraw"
                                                    className="icon-14px"
                                                    onClick={this.onShowModal.bind(this,  asset.get("symbol"), "withdraw_tab")}
                                                />
                                            </span>
                                        ) : (
                                            emptyCell
                                        )}
                                    </td>
                                    <td>
                                        {directMarketLink}
                                    </td>
                                    <td>
                                        {isBitAsset ? (
                                            <div
                                                className="inline-block"
                                                data-place="bottom"
                                                data-tip={counterpart.translate(
                                                    "tooltip.borrow",
                                                    {asset: asset.get("symbol")}
                                                )}
                                            >
                                                {borrowLink}
                                                {borrowModal}
                                            </div>
                                        ) : (
                                            emptyCell
                                        )}
                                    </td>
                                    <td>{emptyCell}</td>
                                    <td style={{textAlign: "center"}}>{emptyCell}</td>
                                    <td
                                        style={{textAlign: "center"}}
                                        className="column-hide-small"
                                        data-place="bottom"
                                        data-tip={counterpart.translate(
                                            "tooltip." +
                                                (includeAsset
                                                    ? "hide_asset"
                                                    : "show_asset")
                                        )}
                                    >
                                        <a
                                            style={{marginRight: 0}}
                                            className={
                                                includeAsset
                                                    ? "order-cancel"
                                                    : "action-plus"
                                            }
                                            onClick={this._hideAsset.bind(
                                                this,
                                                asset.get("id"),
                                                includeAsset
                                            )}
                                        >
                                            <Icon
                                                name={
                                                    includeAsset
                                                        ? "cross-circle"
                                                        : "plus-circle"
                                                }
                                                title={
                                                    includeAsset
                                                        ? "icons.cross_circle.hide_asset"
                                                        : "icons.plus_circle.show_asset"
                                                }
                                                className="icon-14px"
                                            />
                                        </a>
                                    </td>
                                </tr>
                            );
                    }
                });
            this.setState({
                isAssetsLoad: isAssetsLoad
            });
        }

        balances.sort(this.sortFunctions[this.state.sortKey]);
        return balances;
    }

    _changeShownAssets(shownAssets = "active") {
        this.setState({
            shownAssets
        });
        SettingsActions.changeViewSetting({
            shownAssets
        });
    }

    _toggleSortOrder(key) {
        if (this.state.sortKey === key) {
            SettingsActions.changeViewSetting({
                portfolioSortDirection: !this.state.sortDirection
            });
            this.setState({
                sortDirection: !this.state.sortDirection
            });
        } else {
            SettingsActions.changeViewSetting({
                portfolioSort: key
            });
            this.setState({
                sortDirection: false,
                sortKey: key
            });
        }
    }

    _renderRadioButton(title, change, checked = false) {
        return (
            <label className="radio">
                <input
                    className="radio__input"
                    type="radio"
                    name="dashboard-filters"
                    onChange={change}
                    checked={checked}
                />
                <span className="radio__styled" />
                <span className="radio__label">{title}</span>
            </label>
        );
    }

    render() {
        let {account, hiddenAssets, settings, orders, location} = this.props;
        let {shownAssets} = this.state;

        if (!account) {
            return null;
        }

        let call_orders = [],
            collateral = {},
            debt = {};

        if (account.toJS && account.has("call_orders"))
            call_orders = account.get("call_orders").toJS();
        let includedBalances, hiddenBalances;
        let account_balances = account.get("balances");

        let includedBalancesList = Immutable.List(),
            hiddenBalancesList = Immutable.List();
        call_orders.forEach(callID => {
            let position = ChainStore.getObject(callID);
            if (position) {
                let collateralAsset = position.getIn([
                    "call_price",
                    "base",
                    "asset_id"
                ]);
                if (!collateral[collateralAsset]) {
                    collateral[collateralAsset] = parseInt(
                        position.get("collateral"),
                        10
                    );
                } else {
                    collateral[collateralAsset] += parseInt(
                        position.get("collateral"),
                        10
                    );
                }
                let debtAsset = position.getIn([
                    "call_price",
                    "quote",
                    "asset_id"
                ]);
                if (!debt[debtAsset]) {
                    debt[debtAsset] = parseInt(position.get("debt"), 10);
                } else {
                    debt[debtAsset] += parseInt(position.get("debt"), 10);
                }
            }
        });

        if (account_balances) {
            // Filter out balance objects that have 0 balance or are not included in open orders
            account_balances = account_balances.filter((a, index) => {
                let balanceObject = ChainStore.getObject(a);
                if (
                    balanceObject &&
                    (!balanceObject.get("balance") && !orders[index])
                ) {
                    return false;
                } else {
                    if (
                        this.state.hide0balances &&
                        balanceObject.get("balance") <= 0
                    )
                        return false;

                    return true;
                }
            });

            // Separate balances into hidden and included
            account_balances.forEach((a, asset_type) => {
                const asset = ChainStore.getAsset(asset_type);

                let assetName = "";
                let filter = "";

                if (this.state.filterValue) {
                    filter = this.state.filterValue
                        ? String(this.state.filterValue).toLowerCase()
                        : "";
                    assetName = asset.get("symbol").toLowerCase();
                    let {isBitAsset} = utils.replaceName(asset);
                    if (isBitAsset) {
                        assetName = "bit" + assetName;
                    }
                }

                if (
                    hiddenAssets.includes(asset_type) &&
                    assetName.includes(filter)
                ) {
                    hiddenBalancesList = hiddenBalancesList.push(a);
                } else if (assetName.includes(filter)) {
                    includedBalancesList = includedBalancesList.push(a);
                }
            });

            let included = this._renderBalances(
                includedBalancesList,
                !this.state.filterValue ? this.state.alwaysShowAssets : null,
                true
            );
            includedBalances = included;
            let hidden = this._renderBalances(
                hiddenBalancesList,
                !this.state.filterValue ? this.state.alwaysShowAssets : null
            );
            hiddenBalances = hidden;
        }

        let portfolioHiddenAssetsBalance = (
            <TotalBalanceValue noTip balances={hiddenBalancesList} hide_asset />
        );

        let portfolioActiveAssetsBalance = (
            <TotalBalanceValue
                noTip
                balances={includedBalancesList}
                hide_asset
            />
        );
        let ordersValue = (
            <TotalBalanceValue
                noTip
                balances={Immutable.List()}
                openOrders={orders}
                hide_asset
            />
        );
        let marginValue = (
            <TotalBalanceValue
                noTip
                balances={Immutable.List()}
                debt={debt}
                collateral={collateral}
                hide_asset
            />
        );
        let debtValue = (
            <TotalBalanceValue
                noTip
                balances={Immutable.List()}
                debt={debt}
                hide_asset
            />
        );
        let collateralValue = (
            <TotalBalanceValue
                noTip
                balances={Immutable.List()}
                collateral={collateral}
                hide_asset
            />
        );

        const preferredUnit =
            settings.get("unit") || this.props.core_asset.get("symbol");
        const totalValueText = (
            <TranslateWithLinks
                noLink
                string="account.total"
                keys={[{type: "asset", value: preferredUnit, arg: "asset"}]}
            />
        );

        includedBalances.push(
            <tr key="portfolio" className="total-value">
                <td colSpan="2" style={{textAlign: "left"}}>
                    {totalValueText}
                </td>
                <td className="column-hide-small" />
                <td className="column-hide-small" />
                <td style={{textAlign: "right"}}>
                    {portfolioActiveAssetsBalance}
                </td>
                <td colSpan="9" />
            </tr>
        );

        hiddenBalances.push(
            <tr key="portfolio" className="total-value">
                <td colSpan="2" style={{textAlign: "left"}}>
                    {totalValueText}
                </td>
                <td className="column-hide-small" />
                <td className="column-hide-small" />
                <td style={{textAlign: "right"}}>
                    {portfolioHiddenAssetsBalance}
                </td>
                <td colSpan="9" />
            </tr>
        );

        let showAssetPercent = settings.get("showAssetPercent", false);

        // Find the current Openledger coins
        // const currentDepositAsset = this.props.backedCoins.get("OPEN", []).find(c => {
        //     return c.symbol === this.state.depositAsset;
        // }) || {};
        const currentWithdrawAsset =
            this.props.backedCoins.get("OPEN", []).find(c => {
                return c.symbol === this.state.withdrawAsset;
            }) || {};
        const currentBridges =
            this.props.bridgeCoins.get(this.state.bridgeAsset) || null;

        // add unicode non-breaking space as subtext to Activity Tab to ensure that all titles are aligned
        // horizontally
        const hiddenSubText = "\u00a0";

        const accountPortfolio = (
            <div>
                <div className="dashboard__actions">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6">
                                <input
                                    type="text"
                                    placeholder="Filter"
                                    onChange={this._handleFilterInput}
                                />
                            </div>
                            <div className="col-xl-9 col-lg-12">
                                <div className="dashboard__actions__filters">
                                    {this._renderRadioButton(
                                        counterpart.translate(
                                            "account.hide_hidden"
                                        ),
                                        shownAssets != "active"
                                            ? this._changeShownAssets.bind(
                                                  this,
                                                  "active"
                                              )
                                            : () => {},
                                        !(shownAssets != "active")
                                    )}
                                    {hiddenBalances.length
                                        ? this._renderRadioButton(
                                              counterpart.translate(
                                                  "account.show_hidden"
                                              ),
                                              shownAssets != "hidden"
                                                  ? this._changeShownAssets.bind(
                                                        this,
                                                        "hidden"
                                                    )
                                                  : () => {},
                                              !(shownAssets != "hidden")
                                          )
                                        : null}
                                    {this._renderRadioButton(
                                        counterpart.translate(
                                            "account.show_visual"
                                        ),
                                        shownAssets != "visual"
                                            ? this._changeShownAssets.bind(
                                                  this,
                                                  "visual"
                                              )
                                            : () => {},
                                        !(shownAssets != "visual")
                                    )}
                                    <div>
                                        <label className="hide0balances">
                                            <input
                                                name="isGoing"
                                                type="checkbox"
                                                checked={
                                                    this.state.hide0balances
                                                }
                                                onChange={e =>
                                                    this.setState({
                                                        hide0balances: !this
                                                            .state.hide0balances
                                                    })
                                                }
                                            />
                                            <span />
                                            <span>
                                                {counterpart.translate(
                                                    "exchange.hide"
                                                )}
                                                &nbsp;0&nbsp;
                                                {counterpart.translate(
                                                    "transfer.balances"
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.isBridgeModalVisible ? (
                        <LLCBridgeModal
                            account={this.props.account}
                            currency={this.state.currency}
                            type={this.state.type}
                            depositAddress={this.state.depositAddress}
                            buyLLCAddress={this.state.buyLLCAddress}
                            activeTab={this.state.activeTab}
                            onCloseModal={this.onCloseModal}
                            isDashboard={this.state.isDashboard}
                        />
                    ) : null}
                </div>

                {/* Send Modal */}
                <SendModal
                    id="send_modal_portfolio"
                    refCallback={e => {
                        if (e) this.send_modal = e;
                    }}
                    from_name={this.props.account.get("name")}
                    asset_id={this.state.send_asset || "1.3.0"}
                />

                {shownAssets != "visual" ? (
                    <div className="dashboard__adaptive">
                        <table className="dashboard__table blue-bg with-borders">
                            <thead>
                                <tr>
                                    <th
                                        style={{textAlign: "left"}}
                                        className="clickable"
                                        onClick={this._toggleSortOrder.bind(
                                            this,
                                            "alphabetic"
                                        )}
                                    >
                                        <Translate
                                            component="span"
                                            content="account.asset"
                                        />
                                    </th>
                                    <th
                                        onClick={this._toggleSortOrder.bind(
                                            this,
                                            "qty"
                                        )}
                                        className="clickable"
                                        style={{textAlign: "right"}}
                                    >
                                        <Translate content="account.qty" />
                                    </th>
                                    <th
                                        onClick={this._toggleSortOrder.bind(
                                            this,
                                            "priceValue"
                                        )}
                                        className="column-hide-small clickable"
                                        style={{textAlign: "right"}}
                                    >
                                        <Translate content="exchange.price" /> (
                                        <AssetName name={preferredUnit} noTip />
                                        )
                                    </th>
                                    <th
                                        onClick={this._toggleSortOrder.bind(
                                            this,
                                            "changeValue"
                                        )}
                                        className="column-hide-small clickable"
                                        style={{textAlign: "right"}}
                                    >
                                        <Translate content="account.hour_24_short" />
                                    </th>
                                    <th
                                        onClick={this._toggleSortOrder.bind(
                                            this,
                                            "totalValue"
                                        )}
                                        style={{textAlign: "right"}}
                                        className="column-hide-small clickable"
                                    >
                                        <TranslateWithLinks
                                            noLink
                                            string="account.eq_value_header"
                                            keys={[
                                                {
                                                    type: "asset",
                                                    value: preferredUnit,
                                                    arg: "asset"
                                                }
                                            ]}
                                            noTip
                                        />
                                    </th>
                                    {showAssetPercent ? (
                                        <th
                                            style={{
                                                textAlign: "right"
                                            }}
                                        >
                                            <Translate
                                                component="span"
                                                content="account.percent"
                                            />
                                        </th>
                                    ) : null}
                                    <th>
                                        <Translate content="header.payments" />
                                    </th>
                                    <th>
                                        <Translate content="exchange.buy" />
                                    </th>
                                    <th>
                                        <Translate content="modal.deposit.submit" />
                                    </th>
                                    <th>
                                        <Translate content="modal.withdraw.submit" />
                                    </th>
                                    <th>
                                        <Translate content="account.trade" />
                                    </th>
                                    <th>
                                        <Translate content="exchange.borrow_short" />
                                    </th>
                                    <th>
                                        <Translate content="account.settle" />
                                    </th>
                                    <th>
                                        <Translate content="modal.reserve.submit" />
                                    </th>
                                    <th className="column-hide-small">
                                        <Translate
                                            content={
                                                shownAssets == "active"
                                                    ? "exchange.hide"
                                                    : "account.perm.show"
                                            }
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {shownAssets == "hidden" &&
                                hiddenBalances.length
                                    ? hiddenBalances
                                    : includedBalances}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <AccountTreemap balanceObjects={includedBalancesList} />
                )}
            </div>
        );

        const accountOpenOrders = (
            <AccountOrders {...this.props}>
                <tbody>
                    <tr className="total-value">
                        <td colSpan="7" style={{textAlign: "right"}}>
                            {totalValueText}
                        </td>
                        <td colSpan="2" style={{textAlign: "left"}}>
                            {ordersValue}
                        </td>
                        {this.props.isMyAccount ? <td /> : null}
                    </tr>
                </tbody>
            </AccountOrders>
        );

        const accountCollaterals = (
            <MarginPositions
                preferredUnit={preferredUnit}
                className="dashboard-table blue-bg with-borders"
                callOrders={call_orders}
                account={account}
            >
                <tr className="total-value">
                    <td>{totalValueText}</td>
                    <td />
                    <td>{debtValue}</td>
                    <td className="column-hide-medium">{collateralValue}</td>
                    <td />
                    <td>{marginValue}</td>
                    <td className="column-hide-small" />
                    <td className="column-hide-small" />
                    <td colSpan="3" />
                </tr>
            </MarginPositions>
        );

        const accountActivity = (
            <RecentTransactions
                accountsList={Immutable.fromJS([account.get("id")])}
                compactView={false}
                showMore={true}
                fullHeight={true}
                limit={15}
                showFilters={true}
                dashboard
            />
        );

        const accountProposals = (
            <div className="propsal-table-wrap">
                <Proposals
                    className="dashboard-table"
                    account={account.get("id")}
                />
            </div>
        );

        const items = [
            {
                title: "account.portfolio",
                subTitle: portfolioActiveAssetsBalance,
                content: accountPortfolio
            },
            {
                title: "account.open_orders",
                subTitle: ordersValue,
                content: accountOpenOrders
            },
            {
                title: "account.collaterals",
                subTitle: marginValue,
                content: accountCollaterals
            },
            {
                title: "account.activity",
                subTitle: "",
                content: accountActivity
            },
            {
                title: "account.proposed_transactions",
                subTitle: "",
                content: accountProposals
            }
        ];
        let settleRef = "settlement_modal";
        return (
            <div className="dashboard-layout">
                <Tabs
                    items={items}
                    inner={true}
                    updateModal={this.updateModal}
                    defaultActiveTab={location.hash === "#activity" ? "account.activity" : null}
                />
                <BaseModal id="reserve_asset" overlay={true}>
                    <br />
                    <div className="grid-block vertical">
                        <ReserveAssetModal
                            assetId={this.state.reserve}
                            account={account}
                            onClose={() => {
                                ZfApi.publish("reserve_asset", "close");
                            }}
                        />
                    </div>
                </BaseModal>
                <div />
                <SettleModal
                    ref="settlement_modal"
                    modalId="settlement_modal"
                    asset={this.state.settleAsset}
                    account={account.get("name")}
                />
            </div>
        );
    }
}

AccountOverview = AssetWrapper(AccountOverview, {propNames: ["core_asset"]});

export default class AccountOverviewWrapper extends React.Component {
    render() {
        return <BalanceWrapper {...this.props} wrap={AccountOverview} />;
    }
}
