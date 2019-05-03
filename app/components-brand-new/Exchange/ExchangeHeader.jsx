import React from "react";
import {Link} from "react-router/es";
import Icon from "../../components/Icon/Icon";
import AssetName from "../../components/Utility/AssetName";
import MarketsActions from "actions/MarketsActions";
import SettingsActions from "actions/SettingsActions";
import PriceStatWithLabel from "../../components/Exchange/PriceStatWithLabel";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import {ChainStore} from "bitsharesjs/es";
import ExchangeHeaderCollateral from "../../components/Exchange/ExchangeHeaderCollateral";
import BaseModal from "../../components/Modal/BaseModal";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import DropdownList from "../Utility/DropdownList";
import MarketPickerWrap from "../../components/Exchange/MarketPicker";

export default class ExchangeHeader extends React.Component {
    constructor(props) {
        super();

        this.state = {
            volumeShowQuote: true,
            chartHeight: props.chartHeight
        };

        this.setChartHeight = this.setChartHeight.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if (!nextProps.marketReady) return false;
        return true;
    }

    _addMarket(quote, base) {
        let marketID = `${quote}_${base}`;
        if (!this.props.starredMarkets.has(marketID)) {
            SettingsActions.addStarMarket(quote, base);
        } else {
            SettingsActions.removeStarMarket(quote, base);
        }
    }

    changeVolumeBase() {
        this.setState({
            volumeShowQuote: !this.state.volumeShowQuote
        });
    }

    marketPicker(asset) {
        let {selectedMarketPickerAsset} = this.state;

        selectedMarketPickerAsset =
            !!selectedMarketPickerAsset && selectedMarketPickerAsset == asset
                ? null
                : asset;

        this.setState({
            selectedMarketPickerAsset
        });
        this._toggleMarketPicker(selectedMarketPickerAsset);
    }

    setChartHeight() {
        this.props.onChangeChartHeight({value: this.state.chartHeight});
    }

    componentDidMount() {
        let self = this;
        document.delayedExecution.add(
            "ExchangeHeader_updateMargin",
            function() {
                self.updateMargin();
            },
            100
        );
    }

    componentWillReceiveProps(nextProps) {
        let self = this;
        document.delayedExecution.add(
            "ExchangeHeader_updateMargin",
            function() {
                self.updateMargin();
            },
            100
        );
    }


    updateMargin() {
        function getMaxWidth(queryClass) {
            let max = 0;
            let list = document.getElementsByClassName(queryClass);
            for (let i in list) {
                let width = list[i].offsetWidth;
                if (width > max) max = width;
            }

            return max;
        }

        let queries = [
            "vertical-table-cell-one",
            "vertical-table-cell-two",
            "vertical-table-cell-three"
        ];

        let margin = 0;
        for (var i in queries) {
            margin += getMaxWidth(queries[i]);
        }

        if (margin > 0) {
            //set margin header by with left cell bar
            try {
                let header = document.getElementsByClassName(
                    "container-menu-header"
                )[0];
                header.style.marginLeft = margin + "px";
            } catch (e) {}
        }

        try {
            let id = "exchange_header_style";
            let minus = margin + getMaxWidth("right-column");
            let style =
                "@media only screen and (min-width: 1000px) { " +
                "body.localcoin .exchange-layout .grid-block.shrink.no-padding.overflow-visible.top-bar.left-cell-active { " +
                "width: calc(100% - " +
                minus +
                "px); " +
                "}}";

            if (document.getElementById(id)) {
                let styleDom = document.getElementById(id);
                styleDom.innerHTML = style;
            } else {
                let styleDom = document.createElement("style");
                styleDom.id = id;
                styleDom.innerHTML = style;
                document.getElementsByTagName("head")[0].appendChild(styleDom);
            }
        } catch (e) {}
    }

    _toggleMarketPicker(asset) {
        let showMarketPicker = !!asset ? true : false;
        this.setState({
            showMarketPicker,
            marketPickerAsset: asset
        });
    }

    _closeMarketPicker() {
        this.setState({
            selectedMarketPickerAsset: null
        });
        this._toggleMarketPicker(null);
    }

    render() {
        const {
            quoteAsset,
            baseAsset,
            starredMarkets,
            hasPrediction,
            feedPrice,
            showCallLimit,
            lowestCallPrice,
            marketReady,
            latestPrice,
            marketStats,
            showDepthChart,
            account
        } = this.props;

        const baseSymbol = baseAsset.get("symbol");
        const quoteSymbol = quoteAsset.get("symbol");

        // Favorite star
        const marketID = `${quoteSymbol}_${baseSymbol}`;
        const starClass = starredMarkets.has(marketID)
            ? "gold-star"
            : "grey-star";

        // Market stats
        const dayChange = marketStats.get("change");

        const dayChangeClass =
            parseFloat(dayChange) === 0
                ? ""
                : parseFloat(dayChange) < 0
                    ? "negative"
                    : "positive";
        const volumeBase = marketStats.get("volumeBase");
        const volumeQuote = marketStats.get("volumeQuote");
        const dayChangeWithSign = dayChange > 0 ? "+" + dayChange : dayChange;

        const volume24h = this.state.volumeShowQuote ? volumeQuote : volumeBase;
        const volume24hAsset = this.state.volumeShowQuote
            ? quoteAsset
            : baseAsset;

        let showCollateralRatio = false;

        const quoteId = quoteAsset.get("id");
        const baseId = baseAsset.get("id");

        const lookForBitAsset =
            quoteId === "1.3.0" ? baseId : baseId === "1.3.0" ? quoteId : null;
        const possibleBitAsset = lookForBitAsset
            ? ChainStore.getAsset(lookForBitAsset)
            : null;
        const isBitAsset = possibleBitAsset
            ? !!possibleBitAsset.get("bitasset")
            : false;
        let collOrderObject = "";
        let settlePrice = null;

        if (isBitAsset) {
            if (account.toJS && account.has("call_orders")) {
                const call_orders = account.get("call_orders").toJS();

                for (let i = 0; i < call_orders.length; i++) {
                    let callID = call_orders[i];

                    let position = ChainStore.getObject(callID);
                    let debtAsset = position.getIn([
                        "call_price",
                        "quote",
                        "asset_id"
                    ]);

                    if (debtAsset === lookForBitAsset) {
                        collOrderObject = callID;
                        showCollateralRatio = true;
                        break;
                    }
                }
            }

            /* Settlment Offset */
            let settleAsset =
                baseAsset.get("id") == "1.3.0"
                    ? quoteAsset
                    : quoteAsset.get("id") == "1.3.0"
                        ? baseAsset
                        : null;

            if (settleAsset && feedPrice) {
                let offset_percent = settleAsset
                    .getIn(["bitasset", "options"])
                    .toJS().force_settlement_offset_percent;
                settlePrice =
                    baseAsset.get("id") == "1.3.0"
                        ? feedPrice.toReal() / (1 + offset_percent / 10000)
                        : feedPrice.toReal() * (1 + offset_percent / 10000);
            }
        }

        const translator = require("counterpart");

        let isQuoteSelected =
            !!this.state.selectedMarketPickerAsset &&
            this.state.selectedMarketPickerAsset == quoteSymbol;
        let isBaseSelected =
            !!this.state.selectedMarketPickerAsset &&
            this.state.selectedMarketPickerAsset == baseSymbol;

        const chartOptions = [
            {
                key: "depth_chart",
                label: counterpart.translate("exchange.order_depth")
            },
            {
                key: "price_chart",
                label: counterpart.translate("exchange.price_history")
            }
        ];

        return (
            <div className="grid-block shrink no-padding overflow-visible top-bar container-menu-header">
                <div className="grid-block overflow-visible">
                    <div className="grid-block shrink">
                        <div className="change-pair" style={{padding: "5px"}}>
                            {!hasPrediction ? (
                                <div
                                    className="pair-switcher-block"
                                    style={{
                                        padding: "0 5px",
                                        fontSize: "18px",
                                        marginTop: "1px"
                                    }}
                                >
                                    <Link
                                      onClick={() => {
                                        this._addMarket(
                                          this.props.quoteAsset.get(
                                            "symbol"
                                          ),
                                          this.props.baseAsset.get(
                                            "symbol"
                                          )
                                        );
                                      }}
                                      data-intro={translator.translate(
                                        "walkthrough.favourite_button"
                                      )}
                                    >
                                      <Icon
                                        className={starClass}
                                        name="fi-star"
                                        title="icons.fi_star.market"
                                      />
                                    </Link>
                                    <span
                                        className={isQuoteSelected ? "is-active" : ""}
                                        onClick={this.marketPicker.bind(
                                            this,
                                            quoteSymbol
                                        )}
                                        style={{
                                            cursor: "pointer",
                                            color: isQuoteSelected
                                                ? "#2196f3"
                                                : ""
                                        }}
                                    >
                                        <AssetName
                                            name={quoteSymbol}
                                            replace={true}
                                            noTip
                                        />
                                    </span>
                                    <Link
                                      onClick={() => {
                                        MarketsActions.switchMarket();
                                      }}
                                      to={`/market/${baseSymbol}_${quoteSymbol}`}
                                      data-intro={translator.translate(
                                        "walkthrough.switch_button"
                                      )}
                                    >
                                      <Icon
                                        className="shuffle"
                                        name="shuffle"
                                        title="icons.shuffle"
                                      />
                                    </Link>
                                    <span
                                        className={isBaseSelected ? "is-active" : ""}
                                        onClick={this.marketPicker.bind(
                                            this,
                                            baseSymbol
                                        )}
                                        style={{
                                            cursor: "pointer",
                                            color: isBaseSelected
                                                ? "#2196f3"
                                                : ""
                                        }}
                                    >
                                        <AssetName
                                            name={baseSymbol}
                                            replace={true}
                                            noTip
                                        />
                                    </span>
                                </div>
                            ) : (
                                <a className="market-symbol">
                                    <span
                                    >{`${quoteSymbol} : ${baseSymbol}`}</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div
                        className="grid-block vertical"
                        style={{overflow: "visible"}}
                    >
                        <div className="grid-block wrap market-stats-container">
                            <ul className="market-stats stats top-stats">
                                {latestPrice ? (
                                    <PriceStatWithLabel
                                        ignoreColorChange={true}
                                        ready={marketReady}
                                        price={latestPrice.full}
                                        quote={quoteAsset}
                                        base={baseAsset}
                                        market={marketID}
                                        content="exchange.latest"
                                    />
                                ) : null}

                                <li
                                    className={
                                        "hide-order-1 stressed-stat daily_change " +
                                        dayChangeClass
                                    }
                                >
                                    <span>
                                        <b className="value">
                                            {marketReady
                                                ? dayChangeWithSign
                                                : 0}
                                        </b>
                                        <span> %</span>
                                    </span>
                                    <Translate
                                        component="div"
                                        className="stat-text"
                                        content="account.hour_24"
                                    />
                                </li>

                                {volumeBase >= 0 ? (
                                    <PriceStatWithLabel
                                        ignoreColorChange={true}
                                        onClick={this.changeVolumeBase.bind(
                                            this
                                        )}
                                        ready={marketReady}
                                        decimals={0}
                                        volume={true}
                                        price={volume24h}
                                        className="hide-order-2 clickable"
                                        base={volume24hAsset}
                                        market={marketID}
                                        content="exchange.volume_24"
                                    />
                                ) : null}
                                {!hasPrediction && feedPrice ? (
                                    <PriceStatWithLabel
                                        ignoreColorChange={true}
                                        toolTip={counterpart.translate(
                                            "tooltip.feed_price"
                                        )}
                                        ready={marketReady}
                                        className="hide-order-3"
                                        price={feedPrice.toReal()}
                                        quote={quoteAsset}
                                        base={baseAsset}
                                        market={marketID}
                                        content="exchange.feed_price"
                                    />
                                ) : null}
                                {!hasPrediction && feedPrice ? (
                                    <PriceStatWithLabel
                                        ignoreColorChange={true}
                                        toolTip={counterpart.translate(
                                            "tooltip.settle_price"
                                        )}
                                        ready={marketReady}
                                        className="hide-order-4"
                                        price={settlePrice}
                                        quote={quoteAsset}
                                        base={baseAsset}
                                        market={marketID}
                                        content="exchange.settle"
                                    />
                                ) : null}
                                {showCollateralRatio ? (
                                    <ExchangeHeaderCollateral
                                        object={collOrderObject}
                                        account={account}
                                    />
                                ) : null}
                                {lowestCallPrice && showCallLimit ? (
                                    <PriceStatWithLabel
                                        toolTip={counterpart.translate(
                                            "tooltip.call_limit"
                                        )}
                                        ready={marketReady}
                                        className="hide-order-5 is-call"
                                        price={lowestCallPrice}
                                        quote={quoteAsset}
                                        base={baseAsset}
                                        market={marketID}
                                        content="explorer.block.call_limit"
                                    />
                                ) : null}

                                {feedPrice && showCallLimit ? (
                                    <PriceStatWithLabel
                                        toolTip={counterpart.translate(
                                            "tooltip.margin_price"
                                        )}
                                        ready={marketReady}
                                        className="hide-order-6 is-call"
                                        price={feedPrice.getSqueezePrice({
                                            real: true
                                        })}
                                        quote={quoteAsset}
                                        base={baseAsset}
                                        market={marketID}
                                        content="exchange.squeeze"
                                    />
                                ) : null}
                            </ul>
                            <ul className="market-stats stats top-stats">
                                <li
                                    className="stressed-stat input clickable"
                                    style={{padding: "16px"}}
                                    onClick={() => {
                                        ZfApi.publish("chart_options", "open");
                                    }}
                                >
                                    <Translate content="exchange.chart_modal" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <BaseModal
                    id="chart_options"
                    overlay={true}
                    modalHeader="exchange.chart_modal"
                    noLogo
                >
                    <section className="block-list no-border-bottom">
                        <header>
                            <Translate content="exchange.chart_type" />:
                        </header>
                        <ul>
                            <li className="with-dropdown">
                                <DropdownList
                                    options={chartOptions}
                                    selected={chartOptions.find(
                                        ({key}) =>
                                            key ===
                                            (showDepthChart
                                                ? "depth_chart"
                                                : "price_chart")
                                    )}
                                    onChange={key => {
                                        this.props.onToggleCharts();
                                    }}
                                />
                            </li>
                        </ul>
                    </section>
                    <section className="block-list no-border-bottom">
                        <header>
                            <Translate content="exchange.chart_height" />:
                        </header>
                        <label>
                            <span className="inline-label">
                                <input
                                    onKeyDown={e => {
                                        if (e.keyCode === 13)
                                            this.setChartHeight();
                                    }}
                                    type="number"
                                    value={this.state.chartHeight}
                                    onChange={e =>
                                        this.setState({
                                            chartHeight: e.target.value
                                        })
                                    }
                                />
                                <button
                                    className="btn large inverted no-margin"
                                    onClick={this.setChartHeight}
                                >
                                    Set
                                </button>
                            </span>
                        </label>
                    </section>
                </BaseModal>

                {!!this.state.showMarketPicker ? (
                    <MarketPickerWrap
                        marketPickerAsset={this.state.marketPickerAsset}
                        onToggleMarketPicker={this._toggleMarketPicker.bind(
                            this
                        )}
                        closeMarketPicker={this._closeMarketPicker.bind(
                            this
                        )}
                        {...this.props}
                    />
                ) : null}
            </div>
        );
    }
}
