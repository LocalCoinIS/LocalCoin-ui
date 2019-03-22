import React from "react";
import PropTypes from "prop-types";
import ReactHighchart from "react-highcharts";
import utils from "common/utils";
import counterpart from "counterpart";
import {cloneDeep} from "lodash-es";
import Translate from "react-translate-component";
import colors from "assets/colors";
import AssetName from "../Utility/AssetName";
import {didOrdersChange} from "common/MarketClasses";

class DepthHighChart extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isChart: true
        };

    }


    shouldComponentUpdate(nextProps) {
        let settleCheck = isNaN(nextProps.feedPrice)
            ? false
            : nextProps.feedPrice !== this.props.feedPrice;
        return (
            didOrdersChange(nextProps.orders, this.props.orders) ||
            didOrdersChange(nextProps.call_orders, this.props.call_orders) ||
            settleCheck ||
            nextProps.feedPrice !== this.props.feedPrice ||
            nextProps.height !== this.props.height ||
            nextProps.leftOrderBook !== this.props.leftOrderBook ||
            nextProps.LCP !== this.props.LCP ||
            nextProps.showCallLimit !== this.props.showCallLimit ||
            nextProps.hasPrediction !== this.props.hasPrediction ||
            nextProps.feedPrice !== this.props.feedPrice ||
            nextProps.marketReady !== this.props.marketReady
        );
    }

    componentDidMount() {
        this.reflowChart(500);
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.refs.depthChart &&
            nextProps.verticalOrderbook !== this.props.verticalOrderbook
        ) {
            this.reflowChart(100);
        }
    }

    componentWillUpdate() {
        if (this.props.centerRef) {
            this.tempScroll = this.props.centerRef.scrollTop;
        }
    }

    componentDidUpdate() {
        if (this.props.centerRef) {
            this.props.centerRef.scrollTop = this.tempScroll;
        }
    }

    componentWillUnmount() {
        console.log(11111);
        this.setState({
            isChart: false
        });
    }

    reflowChart(timeout) {
        setTimeout(() => {
            if (this.refs.depthChart) {
                this.refs.depthChart.chart.reflow();
            }
        }, timeout);
    }

    _getThemeColors(props = this.props) {
        return colors[props.theme];
    }

    render() {
        console.log("====");
        console.log(this.state);
        console.log(this.props);
        console.log("====");
        let {
            flat_bids,
            flat_asks,
            flat_calls,
            flat_settles,
            totalBids,
            totalAsks,
            base,
            quote,
            feedPrice
        } = this.props;

        const {
            primaryText,
            callColor,
            settleColor,
            settleFillColor,
            bidColor,
            bidFillColor,
            askColor,
            askFillColor,
            axisLineColor
        } = this._getThemeColors();

        let {name: baseSymbol, prefix: basePrefix} = utils.replaceName(base);
        let {name: quoteSymbol, prefix: quotePrefix} = utils.replaceName(quote);
        baseSymbol = (basePrefix || "") + baseSymbol;
        quoteSymbol = (quotePrefix || "") + quoteSymbol;

        let flatBids = cloneDeep(flat_bids),
            flatAsks = cloneDeep(flat_asks),
            flatCalls = cloneDeep(flat_calls),
            flatSettles = cloneDeep(flat_settles);

        let config = {
            chart: {
                type: "area",
                backgroundColor: "rgba(255, 0, 0, 0)",
                spacing: [10, 0, 5, 0]
            },
            title: {
                text: null
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            rangeSelector: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            scrollbar: {
                enabled: false
            },
            dataGrouping: {
                enabled: false
            },
            tooltip: {
                shared: false,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                useHTML: true,
                formatter: function() {
                    return `
					<table>
						<tr>
							<td>${counterpart.translate("exchange.price")}:</td>
							<td style="text-align: right">${utils.format_number(
                                this.x,
                                base.get("precision")
                            )} ${baseSymbol}/${quoteSymbol}</td>
						</tr>
						<tr>
							<td>${counterpart.translate("exchange.quantity")}:</td>
							<td style="text-align: right">${utils.format_number(
                                this.y,
                                quote.get("precision")
                            )} ${quoteSymbol}</td>
						</tr>
					</table>
					`;
                },
                style: {
                    color: "#FFFFFF"
                }
            },
            series: [],
            yAxis: {
            },
            xAxis: {
            },
            plotOptions: {
                area: {
                    animation: false,
                    marker: {
                        enabled: false
                    },
                    series: {
                        enableMouseTracking: false
                    }
                }
            }
        };


        if (this.props.noFrame) {
            return (
                <div className="grid-content no-overflow no-padding">
                    {!flatBids.length &&
                    !flatAsks.length &&
                    !flatCalls.length ? (
                        <span className="no-data">
                            <Translate content="exchange.no_data" />
                        </span>
                    ) : null}
                    {this.props.noText ? null : (
                        <p className="bid-total">
                            {utils.format_number(
                                totalBids,
                                base.get("precision")
                            )}{" "}
                            {baseSymbol}
                        </p>
                    )}
                    {this.props.noText ? null : (
                        <p className="ask-total">
                            {utils.format_number(
                                totalAsks,
                                quote.get("precision")
                            )}{" "}
                            {quoteSymbol}
                        </p>
                    )}
                    {this.state.isChart ? (flatBids || flatAsks || flatCalls ? (
                        <ReactHighchart config={config} />
                    ) : null) : null}

                </div>
            );
        } else {
            return (
                <div className="grid-content no-overflow no-padding middle-content">
                    <div className="exchange-bordered" style={{margin: 10}}>
                        <div className="exchange-content-header">
                            {this.props.noText ? null : (
                                <span className="bid-total">
                                    {utils.format_number(
                                        totalBids,
                                        base.get("precision")
                                    )}{" "}
                                    <AssetName name={base.get("symbol")} />
                                </span>
                            )}
                            {this.props.noText ? null : (
                                <span className="ask-total float-right">
                                    {utils.format_number(
                                        totalAsks,
                                        quote.get("precision")
                                    )}{" "}
                                    <AssetName name={quote.get("symbol")} />
                                </span>
                            )}
                        </div>
                        {!flatBids.length &&
                        !flatAsks.length &&
                        !flatCalls.length ? (
                            <span className="no-data">
                                <Translate content="exchange.no_data" />
                            </span>
                        ) : null}
                        {this.state.isChart ? (                        flatBids || flatAsks || flatCalls ? (
                            <ReactHighchart ref="depthChart" config={config} />
                        ) : null) : null}

                    </div>
                </div>
            );
        }
    }
}

DepthHighChart.defaultProps = {
    flat_bids: [],
    flat_asks: [],
    orders: {},
    noText: false,
    noFrame: true
};

DepthHighChart.propTypes = {
    flat_bids: PropTypes.array.isRequired,
    flat_asks: PropTypes.array.isRequired,
    orders: PropTypes.object.isRequired
};

export default DepthHighChart;
