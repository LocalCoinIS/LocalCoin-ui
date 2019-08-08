import React from "react";
import FormattedAsset from "../../components/Utility/FormattedAsset";
import AssetWrapper from "../../components/Utility/AssetWrapper";
import AccountName from "../../components/Utility/AccountName";
import utils from "common/utils";
import Icon from "../../components/Icon/Icon";
import MarketsActions from "actions/MarketsActions";
import SettingsActions from "actions/SettingsActions";
import PropTypes from "prop-types";
import {getSmartCoinMarkets} from "branding";
import MarketsStore from "stores/MarketsStore";

class MarketRow extends React.Component {
    static defaultProps = {
        noSymbols: false
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor() {
        super();

        this.statsInterval = null;
    }

    _onClick(marketID) {
        const newPath = `/market/${marketID}`;
        if (newPath !== this.context.router.location.pathname) {
            MarketsActions.switchMarket();
            this.context.router.push(`/market/${marketID}`);
        }
    }

    componentDidMount() {
        MarketsActions.getMarketStats(this.props.base, this.props.quote);
        this.statsChecked = new Date();
        this.statsInterval = setInterval(
            MarketsActions.getMarketStats.bind(
                this,
                this.props.base,
                this.props.quote
            ),
            35 * 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.statsInterval);
    }

    shouldComponentUpdate(nextProps) {
        return !utils.are_equal_shallow(nextProps, this.props);
    }

    _onStar(quote, base, e) {
        e.preventDefault();
        if (!this.props.starred) {
            SettingsActions.addStarMarket(quote, base);
        } else {
            SettingsActions.removeStarMarket(quote, base);
        }
    }

    render() {
        let {quote, base, noSymbols, stats, starred} = this.props;
        if (!quote || !base) {
            return null;
        }

        let smartCoinArr = getSmartCoinMarkets();
        let exeptionArr = ["USDT", "EURT", "TUSD", "USDC", "USDS"];
        let marketID = base.get("symbol") + "_" + quote.get("symbol");
        let reversePairs = false;
        // 1. базовая валюта всегда слева;
        // 2. помещаем в правую сторону смарткоины, если нет исключений, т.е. валют из exeptionArr;
        // 3. помещаем в правую сторону исключения, т.е. валюты из exeptionArr.
        if((exeptionArr.includes(base.get("symbol")) && !exeptionArr.includes(quote.get("symbol"))) || (smartCoinArr.includes(base.get("symbol")) && !exeptionArr.includes(quote.get("symbol")) && !smartCoinArr.includes(quote.get("symbol")))) {
            marketID = quote.get("symbol") + "_" + base.get("symbol");
            reversePairs = true;
        }
        let marketName = quote.get("symbol") + "/" + base.get("symbol");
        let dynamic_data = this.props.getDynamicObject(
            quote.get("dynamic_asset_data_id")
        );
        let base_dynamic_data = this.props.getDynamicObject(
            base.get("dynamic_asset_data_id")
        );

        let price = utils.convertPrice(quote, base);

        let rowStyles = {};
        if (this.props.leftAlign) {
            rowStyles.textAlign = "left";
        }

        let buttonClass = "button outline";
        let buttonStyle = null;
        if (this.props.compact) {
            buttonClass += " no-margin";
            buttonStyle = {
                marginBottom: 0,
                fontSize: "0.75rem",
                padding: "4px 10px",
                borderRadius: "0px",
                letterSpacing: "0.05rem"
            };
        }

        const quoteSymbol   = this.props.quote.get("symbol");
        const baseSymbol    = this.props.base.get("symbol");
        const marketIDByURL = typeof this.context.router.params.marketID === "undefined"
            ? quote.get("symbol") + "_" + base.get("symbol")
            : this.context.router.params.marketID.toUpperCase().trim();

        let needPairDirection;

        if( marketIDByURL.indexOf("_" + quoteSymbol) !== -1 ||
            marketIDByURL.indexOf(baseSymbol + "_") !== -1 ) { 
            needPairDirection = baseSymbol  + "_" + quoteSymbol; }
        else if( smartCoinArr.includes(baseSymbol) && !exeptionArr.includes(quoteSymbol) ) {
            needPairDirection = quoteSymbol + "_" + baseSymbol;
            reversePairs = true; }
        else if( exeptionArr.includes(quoteSymbol) ) {
            needPairDirection = baseSymbol + "_" + quoteSymbol; }            
        else {
            needPairDirection = baseSymbol  + "_" + quoteSymbol;
        }
        
        let columns = this.props.columns
            .map(column => {
                switch (column.name) {
                    case "star":
                        let starClass = starred ? "gold-star" : "grey-star";
                        return (
                            <td
                                onClick={this._onStar.bind(
                                    this,
                                    quote.get("symbol"),
                                    base.get("symbol")
                                )}
                                key={column.index}
                            >
                                <Icon
                                    className={starClass}
                                    name="fi-star"
                                    title="icons.fi_star.symbol"
                                />
                            </td>
                        );

                    case "vol":
                        let amount = stats ? stats.volumeBase : 0;
                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                className="text-right"
                                key={column.index}
                            >
                                {utils.format_volume(amount)}
                            </td>
                        );

                    case "change":
                        let currentMarketByLeftOrder = MarketsStore
                            .getState()
                            .allMarketStats
                            .get(needPairDirection);

                        const dayChange = currentMarketByLeftOrder ? currentMarketByLeftOrder.change : 0;
                        const dayChangeWithSign = dayChange > 0 ? "+" + dayChange : dayChange;
                        const change = utils.format_number( dayChangeWithSign, 2 );
                    
                        let changeClass =
                            change === "0.00"
                                ? ""
                                : change > 0
                                    ? "change-up"
                                    : "change-down";

                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                className={"text-right " + changeClass}
                                key={column.index}
                            >
                                {change + "%"}
                            </td>
                        );

                    case "marketName":
                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                key={column.index}
                            >
                                <div
                                    className={buttonClass}
                                    style={buttonStyle}
                                >
                                    {marketName}
                                </div>
                            </td>
                        );

                    case "market":
                        let customMarketName = this.props.name;

                        try {
                            if (typeof customMarketName.props !== "undefined") {
                                customMarketName =
                                    customMarketName.props.children[0].props
                                        .name +
                                    "/" +
                                    customMarketName.props.children[2].props
                                        .name;
                            }
                        } catch (e) {}

                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                key={column.index}
                            >
                                {customMarketName}
                                {/*{"/123" + base.get("symbol")}*/}
                            </td>
                        );

                    case "price":
                        let baseAmount, quoteAmount, baseAsset, quoteAsset = false;

                        let finalPrice = 0;

                        if(stats && stats.price) {
                            baseAmount = reversePairs ? stats.price.quote.amount : stats.price.base.amount;
                            quoteAmount = reversePairs ? stats.price.base.amount : stats.price.quote.amount;
                            baseAsset = reversePairs ? quote : base;
                            quoteAsset = reversePairs ? base : quote;

                        } else if(stats && stats.close && (stats.close.quote.amount && stats.close.base.amount)) {
                            baseAmount = reversePairs ? stats.close.quote.amount : stats.close.base.amount;
                            quoteAmount = reversePairs ? stats.close.base.amount : stats.close.quote.amount;
                            baseAsset = reversePairs ? quote : base;
                            quoteAsset = reversePairs ? base : quote;
                        } else {
                            baseAmount = reversePairs ? price.quote.amount : price.base.amount;
                            quoteAmount = reversePairs ? price.base.amount : price.quote.amount;
                            baseAsset = reversePairs ? quote : base;
                            quoteAsset = reversePairs ? base : quote;
                        }

                        finalPrice = utils.get_asset_price(
                            baseAmount,
                            baseAsset,
                            quoteAmount,
                            quoteAsset,
                            true
                        );

                        let highPrecisionAssets = [
                            "BTC",
                            "OPEN.BTC",
                            "TRADE.BTC",
                            "GOLD",
                            "SILVER"
                        ];
                        let precision = 6;
                        if (
                            highPrecisionAssets.indexOf(base.get("symbol")) !==
                            -1
                        ) {
                            precision = 8;
                        }

                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                className="text-right"
                                key={column.index}
                            >
                                {utils.format_numerical(utils.format_number(
                                    finalPrice,
                                    finalPrice > 1000
                                        ? 0
                                        : finalPrice > 10
                                            ? 2
                                            : precision
                                ))}
                            </td>
                        );

                    case "quoteSupply":
                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                key={column.index}
                            >
                                {dynamic_data ? (
                                    <FormattedAsset
                                        style={{fontWeight: "bold"}}
                                        amount={parseInt(
                                            dynamic_data.get("current_supply"),
                                            10
                                        )}
                                        asset={quote.get("id")}
                                    />
                                ) : null}
                            </td>
                        );

                    case "baseSupply":
                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                key={column.index}
                            >
                                {base_dynamic_data ? (
                                    <FormattedAsset
                                        style={{fontWeight: "bold"}}
                                        amount={parseInt(
                                            base_dynamic_data.get(
                                                "current_supply"
                                            ),
                                            10
                                        )}
                                        asset={base.get("id")}
                                    />
                                ) : null}
                            </td>
                        );

                    case "issuer":
                        return (
                            <td
                                onClick={this._onClick.bind(this, needPairDirection)}
                                key={column.index}
                            >
                                <AccountName account={quote.get("issuer")} />
                            </td>
                        );

                    case "add":
                        return (
                            <td
                                style={{textAlign: "right"}}
                                key={column.index}
                                onClick={this.props.onCheckMarket.bind(
                                    this,
                                    marketID
                                )}
                            >
                                <input
                                    type="checkbox"
                                    checked={
                                        !!this.props.isChecked ||
                                        this.props.isDefault
                                    }
                                    disabled={this.props.isDefault}
                                    data-tip={
                                        this.props.isDefault
                                            ? "This market is a default market and cannot be removed"
                                            : null
                                    }
                                />
                            </td>
                        );

                    case "remove":
                        return (
                            <td
                                key={column.index}
                                className="clickable"
                                onClick={this.props.removeMarket}
                            >
                                <span
                                    style={{
                                        marginBottom: "6px",
                                        marginRight: "6px",
                                        zIndex: 999
                                    }}
                                    className="text float-right remove"
                                >
                                    –
                                </span>
                            </td>
                        );

                    default:
                        break;
                }
            })
            .sort((a, b) => {
                return a.key > b.key;
            });

        let className = "clickable";
        if (this.props.currentMarket === marketID || this.props.currentMarket === needPairDirection) {
            className += " activeMarket";
        }

        return (
            <tr className={className} style={rowStyles}>
                {columns}
            </tr>
        );
    }
}

export default AssetWrapper(MarketRow, {
    propNames: ["quote", "base"],
    defaultProps: {
        tempComponent: "tr"
    },
    withDynamic: true
});
