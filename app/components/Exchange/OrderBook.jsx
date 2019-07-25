import React from "react";
import PropTypes from "prop-types";
import Ps from "perfect-scrollbar";
import utils from "common/utils";
import Translate from "react-translate-component";
import SettingsActions from "actions/SettingsActions";
import classnames from "classnames";
import PriceText from "../Utility/PriceText";
import TransitionWrapper from "../Utility/TransitionWrapper";
import AssetName from "../Utility/AssetName";
import {StickyTable} from "react-sticky-table";
import Icon from "../Icon/Icon";
import ReactTooltip from "react-tooltip";

class OrderBookRowVertical extends React.Component {
    shouldComponentUpdate(np) {
        if (np.order.market_base !== this.props.order.market_base) return false;
        return (
            np.order.ne(this.props.order) ||
            np.index !== this.props.index ||
            np.currentAccount !== this.props.currentAccount
        );
    }

    render() {
        let {order, quote, base, final} = this.props;
        const isBid = order.isBid();
        const isCall = order.isCall();
        let integerClass = isCall
            ? "orderHistoryCall"
            : isBid
                ? "orderHistoryBid"
                : "orderHistoryAsk";
        const translator = require("counterpart");

        let price = (
            <PriceText price={order.getPrice()} quote={quote} base={base} />
        );

        let totalBaseCurrency = isBid
            ? utils.format_number(
                  order.totalForSale().getAmount({real: true}),
                  8
              )
            : utils.format_number(
                  order.totalToReceive().getAmount({real: true}),
                  8
              );

        let totalQuoteCurrency = !isBid
            ? utils.format_number(
                  order.totalForSale().getAmount({real: true}),
                  8
              )
            : utils.format_number(
                  order.totalToReceive().getAmount({real: true}),
                  8
              );

        let tdDataTip =
            translator.translate("exchange.total") +
            " " +
            quote.get("symbol") +
            " " +
            totalQuoteCurrency +
            "<br />" +
            translator.translate("exchange.total") +
            " " +
            base.get("symbol") +
            " " +
            totalBaseCurrency;

        return (
            <div
                onClick={this.props.onClick}
                className={classnames(
                    "sticky-table-row order-row vertical-table-cell",
                    {"final-row": final},
                    {"my-order": order.isMine(this.props.currentAccount)}
                )}
            >
                <div className="cell left vertical-table-cell vertical-table-cell-one">
                    {utils.format_number(
                        order[
                            isBid ? "amountForSale" : "amountToReceive"
                        ]().getAmount({real: true}),
                        base.get("precision")
                    )}
                </div>
                <div className="cell vertical-table-cell vertical-table-cell-two">
                    {utils.format_number(
                        order[
                            isBid ? "amountToReceive" : "amountForSale"
                        ]().getAmount({real: true}),
                        quote.get("precision")
                    )}
                </div>
                <div
                    className={`cell ${integerClass} right vertical-table-cell-three`}
                    data-tip={tdDataTip}
                    data-html={true}
                    data-place="right"
                >
                    {price}
                </div>
            </div>
        );
    }
}

const elemHeight = elem => elem.getBoundingClientRect().height;

class OrderBookRowHorizontal extends React.Component {
    shouldComponentUpdate(np) {
        return (
            np.order.ne(this.props.order) ||
            np.position !== this.props.position ||
            np.index !== this.props.index ||
            np.currentAccount !== this.props.currentAccount
        );
    }

    rmLeftCellActive() {
        let target = "left-cell-active";
        let main = document.getElementsByTagName("main")[0];
        if (main.className.indexOf(target) > -1) {
            main.className = main.className.replace(target, "");
        }
    }

    componentDidMount() {
        this.rmLeftCellActive();
    }

    componentDidUpdate() {
       /* this.rmLeftCellActive();*/
    }

    render() {
        const translator = require("counterpart");

        let {order, quote, base, position} = this.props;
        const isBid = order.isBid();
        const isCall = order.isCall();

        let integerClass = isCall
            ? "orderHistoryCall"
            : isBid
                ? "orderHistoryBid"
                : "orderHistoryAsk";

        let price = (
            <PriceText price={order.getPrice()} quote={quote} base={base} />
        );
        let amount = isBid
            ? utils.format_numerical(
                  order.amountToReceive().getAmount({real: true}),
                  quote.get("precision")
              )
            : utils.format_numerical(
                  order.amountForSale().getAmount({real: true}),
                  quote.get("precision")
              );
        let value = isBid
            ? utils.format_numerical(
                  order.amountForSale().getAmount({real: true}),
                  base.get("precision")
              )
            : utils.format_numerical(
                  order.amountToReceive().getAmount({real: true}),
                  base.get("precision")
              );

        let totalBaseCurrency = isBid
            ? utils.format_numerical(
                  order.totalForSale().getAmount({real: true}),
                  8
              )
            : utils.format_numerical(
                  order.totalToReceive().getAmount({real: true}),
                  8
              );

        let totalQuoteCurrency = !isBid
            ? utils.format_numerical(
                  order.totalForSale().getAmount({real: true}),
                  8
              )
            : utils.format_numerical(
                  order.totalToReceive().getAmount({real: true}),
                  8
              );

        let tdDataTip =
            translator.translate("exchange.total") +
            " " +
            quote.get("symbol") +
            " " +
            totalQuoteCurrency +
            "<br />" +
            translator.translate("exchange.total") +
            " " +
            base.get("symbol") +
            " " +
            totalBaseCurrency;

        return (
            <tr
                onClick={this.props.onClick}
                className={
                    order.isMine(this.props.currentAccount) ? "my-order" : ""
                }
            >
                <td style={{width: "25%"}} className={integerClass}>
                    {price}
                </td>
                <td>{position === "left" ? amount : value}</td>
                <td data-tip={tdDataTip} data-html={true} data-place="right">
                    {position === "left" ? value : amount}
                </td>
            </tr>
        );
    }
}

class OrderBook extends React.Component {
    constructor(props) {
        super();
        this.state = {
            flip: props.flipOrderBook,
            showAllBids: false,
            showAllAsks: false,
            rowCount: 50,
            autoScroll: true
        };
    }

    addLeftCellActive() {
        let forAdd = "left-cell-active";
        let main = document.getElementsByTagName("main")[0];
        if (main.className.indexOf(forAdd) === -1) {
            main.className += " " + forAdd;
        }
    }

    addLeftCellActive() {
        let forAdd = "left-cell-active";
        let main = document.getElementsByTagName("main")[0];
        if (main.className.indexOf(forAdd) === -1) {
            main.className += " " + forAdd;
        }
    }



    updateCeilWith() {
        function updateWidth(queryClass, width) {
            let list = document.getElementsByClassName(queryClass);
            for (let i in list) {
                try {
                    list[i].style.width = width + "px";
                } catch (e) {}
            }
        }

        function getMaxWidth(queryClass) {
            let max = 0;
            let list = document.getElementsByClassName(queryClass);
            for (let i in list) {
                let width = list[i].offsetWidth;
                if (width > max) max = width;
            }

            return max;
        }

        let queries = {
            one: "vertical-table-cell-one",
            two: "vertical-table-cell-two",
            three: "vertical-table-cell-three"
        };

        let maxWidth = {
            one: getMaxWidth(queries.one),
            two: getMaxWidth(queries.two),
            three: getMaxWidth(queries.three)
        };

        updateWidth(queries.one, maxWidth.one);
        updateWidth(queries.two, maxWidth.two);
        updateWidth(queries.three, maxWidth.three);

        let margin = 0;
        //set margin header by with left cell bar
        try {
            margin = maxWidth.one + maxWidth.two + maxWidth.three - 4;
            let header = document.getElementsByClassName(
                "container-menu-header"
            )[0];
            header.style.marginLeft = margin + "px";
        } catch (e) {}

        try {
            let id = "exchange_header_style";
            let minus = margin + getMaxWidth("right-column");
            let style =
                "@media only screen and (min-width: 1000px) { " +
                "body.localcoin .exchange-layout .grid-block.shrink.no-padding.overflow-visible.top-bar, body.localcoin .exchange-layout .main .grid-block.shrink.no-padding.overflow-visible.top-bar.left-cell-active { " +
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

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("calls changed:", !Immutable.is(nextProps.calls, this.props.calls), nextProps.calls && nextProps.calls.toJS(), this.props.calls && this.props.calls.toJS());
    //     const callsChanged = didOrdersChange(nextProps.calls, this.props.calls);
    //     const limitsChanged = didOrdersChange(nextProps.orders, this.props.orders);
    //     console.log("callsChanged:", callsChanged, "limitsChanged", limitsChanged);
    //     return (
    //         !Immutable.is(nextProps.orders, this.props.orders) ||
    //         !Immutable.is(nextProps.calls, this.props.calls) ||
    //         nextProps.horizontal !== this.props.horizontal ||
    //         !utils.are_equal_shallow(nextProps.latest, this.props.latest) ||
    //         nextProps.smallScreen !== this.props.smallScreen ||
    //         nextProps.wrapperClass !== this.props.wrapperClass ||
    //         !utils.are_equal_shallow(nextState, this.state)
    //     );
    // }

    componentWillReceiveProps(nextProps) {
        // Change of market or direction
        if (
            nextProps.base.get("id") !== this.props.base.get("id") ||
            nextProps.quote.get("id") !== this.props.quote.get("id")
        ) {
            if (this.refs.askTransition) {
                this.refs.askTransition.resetAnimation();
                if (this.refs.hor_asks) this.refs.hor_asks.scrollTop = 0;
                if (this.refs.hor_bids) this.refs.hor_bids.scrollTop = 0;
            }

            if (this.refs.bidTransition) {
                this.refs.bidTransition.resetAnimation();
            }

            if (this.refs.vert_bids) this.refs.vert_bids.scrollTop = 0;

            if (!this.props.horizontal) {
                this.setState({autoScroll: true});
            }
        }

        if (
            !utils.are_equal_shallow(
                nextProps.combinedAsks,
                this.props.combinedAsks
            ) ||
            !utils.are_equal_shallow(
                nextProps.combinedBids,
                this.props.combinedBids
            )
        ) {
            this.setState({}, () => {
                this.psUpdate();
            });
        }

        if (!this.props.horizontal) {
            this.addLeftCellActive();
        }
    }

    queryStickyTable = query =>
        this.refs.vertical_sticky_table_up.table.querySelector(query);

    verticalScrollBar = () => this.queryStickyTable("#y-scrollbar");

    componentDidUpdate() {
        //delayed execution
        if (!this.props.horizontal) {
            let self = this;
            document.delayedExecution.add(
                "orderBook_componentDidUpdate",
                function() {
                    self.updateCeilWith();
                    /*self.addLeftCellActive();*/
                },
                100
            );
        }
    }

    componentDidMount() {
        ReactTooltip.rebuild();
        document.fastLoader.hide();

        if (!this.props.horizontal) {
            let self = this;
            document.delayedExecution.add(
                "orderBook_componentDidUpdate",
                function() {
                    self.updateCeilWith();
                    self.addLeftCellActive();
                },
                100
            );

            let up = this.refs.vertical_sticky_table_up.table.querySelector(
                "#y-scrollbar"
            );
            Ps.initialize(up);

            let down = this.refs.vertical_sticky_table_down.table.querySelector(
                "#y-scrollbar"
            );
            Ps.initialize(down);
        } else {
            let bidsContainer = this.refs.hor_bids;
            Ps.initialize(bidsContainer);
            let asksContainer = this.refs.hor_asks;
            Ps.initialize(asksContainer);
        }

        this.upVerticalBlockToEndScroll();
    }

    componentWillUpdate() {}

    upVerticalBlockToEndScroll() {
        if (!this.props.horizontal) {
            const scrollableContainer = this.queryStickyTable(
                "#sticky-table-y-wrapper"
            );
            scrollableContainer.scrollTop = 99999;
        }
    }

    // centerVerticalScrollBar() {
    //     if (!this.props.horizontal) {
    //         const scrollableContainer = this.queryStickyTable(
    //             "#sticky-table-y-wrapper"
    //         );
    //         const centerTextContainer = this.refs.center_text;
    //         const centeringOffset = 21;
    //         const offset =
    //             !this.state.autoScroll && this.offset ? this.offset : 0;
    //         const scrollTo =
    //             centerTextContainer.offsetTop -
    //             elemHeight(scrollableContainer) / 2 +
    //             centeringOffset +
    //             offset;

    //         this.setState(
    //             {ownScroll: true},
    //             () => (scrollableContainer.scrollTop = scrollTo)
    //         );
    //     }
    // }

    psUpdate() {
        if (!this.props.horizontal) {
            //Ps.update(this.verticalScrollBar());
            //this.centerVerticalScrollBar();
        } else {
            let bidsContainer = this.refs.hor_bids;
            Ps.update(bidsContainer);
            let asksContainer = this.refs.hor_asks;
            Ps.update(asksContainer);
        }
    }

    _flipBuySell() {
        SettingsActions.changeViewSetting({
            flipOrderBook: !this.state.flip
        });

        this.setState({flip: !this.state.flip});
    }

    _onToggleShowAll(type) {
        if (type === "asks") {
            this.setState({
                showAllAsks: !this.state.showAllAsks
            });

            if (this.state.showAllAsks) {
                this.refs.hor_asks.scrollTop = 0;
            }
        } else {
            this.setState({
                showAllBids: !this.state.showAllBids
            });

            if (this.state.showAllBids) {
                this.refs.hor_bids.scrollTop = 0;
            }
        }
    }

    toggleSpreadValue = () => {
        this.setState({
            displaySpreadAsPercentage: !this.state.displaySpreadAsPercentage
        });
    };

    toggleAutoScroll = () => {
        const newState = {autoScroll: !this.state.autoScroll};
        if (newState.autoScroll) {
            //this.setState(newState, this.centerVerticalScrollBar);
        } else this.setState(newState);
    };

    render() {
        let {
            combinedBids,
            combinedAsks,
            highestBid,
            lowestAsk,
            quote,
            base,
            totalAsks,
            totalBids,
            quoteSymbol,
            baseSymbol,
            horizontal
        } = this.props;
        let {
            showAllAsks,
            showAllBids,
            rowCount,
            displaySpreadAsPercentage
        } = this.state;

        const noOrders = !lowestAsk.sell_price && !highestBid.sell_price;
        const hasAskAndBids = !!(lowestAsk.sell_price && highestBid.sell_price);
        const spread =
            hasAskAndBids &&
            (displaySpreadAsPercentage ? (
                `${(
                    100 *
                    (lowestAsk._real_price / highestBid._real_price - 1)
                ).toFixed(2)}%`
            ) : (
                <PriceText
                    price={lowestAsk._real_price - highestBid._real_price}
                    base={base}
                    quote={quote}
                />
            ));
        let limitOfRows = 100;
        let bidRows = null,
            askRows = null;
        if (base && quote) {
            bidRows = combinedBids.map((order, index) => {
                if (index > limitOfRows) return;
                return horizontal ? (
                    <OrderBookRowHorizontal
                        index={index}
                        key={order.getPrice() + (order.isCall() ? "_call" : "")}
                        order={order}
                        onClick={this.props.onClick.bind(this, order)}
                        base={base}
                        quote={quote}
                        position={this.state.flip ? "left" : "right"}
                        currentAccount={this.props.currentAccount}
                    />
                ) : (
                    <OrderBookRowVertical
                        index={index}
                        key={order.getPrice() + (order.isCall() ? "_call" : "")}
                        order={order}
                        onClick={this.props.onClick.bind(this, order)}
                        base={base}
                        quote={quote}
                        final={index === 0}
                        currentAccount={this.props.currentAccount}
                    />
                );
            });

            let tempAsks = combinedAsks;
            tempAsks.sort((a, b) => {
                if (horizontal) {
                    return a.getPrice() - b.getPrice();
                } else {
                    return b.getPrice() - a.getPrice();
                }
            });
            askRows = tempAsks.map((order, index) => {
                if (index > limitOfRows) return;
                return horizontal ? (
                    <OrderBookRowHorizontal
                        index={index}
                        key={order.getPrice() + (order.isCall() ? "_call" : "")}
                        order={order}
                        onClick={this.props.onClick.bind(this, order)}
                        base={base}
                        quote={quote}
                        type={order.type}
                        position={!this.state.flip ? "right" : "left"}
                        currentAccount={this.props.currentAccount}
                    />
                ) : (
                    <OrderBookRowVertical
                        index={index}
                        key={order.getPrice() + (order.isCall() ? "_call" : "")}
                        order={order}
                        onClick={this.props.onClick.bind(this, order)}
                        base={base}
                        quote={quote}
                        type={order.type}
                        final={0 === index}
                        currentAccount={this.props.currentAccount}
                    />
                );
            });
        }

        if (this.props.horizontal) {
            try {
                if (
                    document.getElementsByClassName("container-menu-header")
                        .length > 0
                ) {
                    let dom = document.getElementsByClassName(
                        "container-menu-header"
                    )[0];
                    let strClassName = dom.className.toString();

                    if (strClassName.indexOf("left-cell-active") !== -1) {
                        dom.className = strClassName.replace(
                            /left-cell-active/gi,
                            ""
                        );
                    }
                }
            } catch (e) {}

            let totalBidsLength = 50;//bidRows.length;
            let totalAsksLength = 50;//askRows.length;

            if (!showAllBids) {
                bidRows.splice(rowCount, bidRows.length);
            }

            if (!showAllAsks) {
                askRows.splice(rowCount, askRows.length);
            }

            let leftHeader = (
                <thead>
                    <tr key="top-header" className="top-header">
                        <th>
                            <Translate
                                className={
                                    (this.state.flip
                                        ? "ask-total"
                                        : "bid-total") + " header-sub-title"
                                }
                                content="exchange.price"
                            />
                        </th>
                        <th>
                            <span className="header-sub-title">
                                <AssetName dataPlace="top" name={baseSymbol} />
                            </span>
                        </th>
                        <th>
                            <span className="header-sub-title">
                                <AssetName dataPlace="top" name={quoteSymbol} />
                            </span>
                        </th>
                    </tr>
                </thead>
            );

            let rightHeader = (
                <thead>
                    <tr key="top-header" className="top-header">
                        <th>
                            <Translate
                                className={
                                    (!this.state.flip
                                        ? "ask-total"
                                        : "bid-total") + " header-sub-title"
                                }
                                content="exchange.price"
                            />
                        </th>
                        <th>
                            <span className="header-sub-title">
                                <AssetName dataPlace="top" name={quoteSymbol} />
                            </span>
                        </th>
                        <th>
                            <span className="header-sub-title">
                                <AssetName dataPlace="top" name={baseSymbol} />
                            </span>
                        </th>
                    </tr>
                </thead>
            );

            const translator = require("counterpart");

            return (
                <div
                    className={classnames(
                        this.props.wrapperClass,
                        "grid-block orderbook no-padding small-vertical medium-horizontal align-spaced no-overflow small-12 xlarge-8"
                    )}
                >
                    <div
                        className={classnames(
                            "small-12 medium-6 middle-content",
                            this.state.flip ? "order-1" : "order-2"
                        )}
                    >
                        <div className="exchange-bordered">
                            <div
                                className="exchange-content-header ask"
                                data-intro={translator.translate(
                                    "walkthrough.sell_orders"
                                )}
                            >
                                <Translate content="exchange.asks" />
                                {this.state.flip ? (
                                    <div style={{display: "inline-block"}}>
                                        <span
                                            onClick={this._flipBuySell.bind(
                                                this
                                            )}
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            }}
                                            className="flip-arrow"
                                        >
                                            {" "}
                                            &#8646;
                                        </span>
                                        <span
                                            className="order-book-button-v"
                                            onClick={this.props.moveOrderBook}
                                        >
                                            <Icon
                                                name="thumb-tack"
                                                title="icons.thumb_tack"
                                                className="icon-14px"
                                            />
                                        </span>
                                    </div>
                                ) : null}
                                <div
                                    style={{lineHeight: "16px"}}
                                    className="float-right header-sub-title"
                                >
                                    <Translate content="exchange.total" />
                                    <span>: </span>
                                    {utils.format_number(
                                        totalAsks,
                                        quote.get("precision")
                                    )}
                                    <span>
                                        {" "}
                                        (<AssetName name={quoteSymbol} />)
                                    </span>
                                </div>
                            </div>
                            <div style={{paddingRight: "0.6rem"}}>
                                <table className="table order-table table-hover fixed-table text-right">
                                    {!this.state.flip
                                        ? leftHeader
                                        : rightHeader}
                                </table>
                            </div>
                            <div
                                className="grid-block"
                                ref="hor_asks"
                                style={{
                                    paddingRight: "0.6rem",
                                    overflow: "hidden",
                                    maxHeight: 210
                                }}
                            >
                                <table
                                    style={{paddingBottom: 5}}
                                    className="table order-table table-hover fixed-table text-right no-overflow"
                                >
                                    <TransitionWrapper
                                        ref="askTransition"
                                        className="orderbook clickable"
                                        component="tbody"
                                        transitionName="newrow"
                                    >
                                        {askRows}
                                    </TransitionWrapper>
                                </table>
                                {totalAsksLength > rowCount ? (
                                    <div className="orderbook-showall">
                                        <a
                                            onClick={this._onToggleShowAll.bind(
                                                this,
                                                "asks"
                                            )}
                                        >
                                            <Translate
                                                content={
                                                    showAllAsks
                                                        ? "exchange.hide"
                                                        : "exchange.show_asks"
                                                }
                                            />
                                            {!showAllAsks ? (
                                                <span>
                                                    {" "}
                                                    ({totalAsksLength})
                                                </span>
                                            ) : null}
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div
                        className={classnames(
                            "small-12 medium-6 middle-content",
                            this.state.flip ? "order-2" : "order-1"
                        )}
                    >
                        <div className="exchange-bordered">
                            <div
                                className="exchange-content-header bid"
                                data-intro={translator.translate(
                                    "walkthrough.buy_orders"
                                )}
                            >
                                <Translate content="exchange.bids" />
                                {!this.state.flip ? (
                                    <div style={{display: "inline-block"}}>
                                        <span
                                            onClick={this._flipBuySell.bind(
                                                this
                                            )}
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            }}
                                            className="flip-arrow"
                                        >
                                            {" "}
                                            &#8646;
                                        </span>
                                        <span
                                            className="order-book-button-v"
                                            onClick={this.props.moveOrderBook}
                                        >
                                            <Icon
                                                name="thumb-tack"
                                                title="icons.thumb_tack"
                                                className="icon-14px"
                                            />
                                        </span>
                                    </div>
                                ) : null}
                                <div
                                    style={{lineHeight: "16px"}}
                                    className="float-right header-sub-title"
                                >
                                    <Translate content="exchange.total" />
                                    <span>: </span>
                                    {utils.format_number(
                                        totalBids,
                                        base.get("precision")
                                    )}
                                    <span>
                                        {" "}
                                        (<AssetName name={baseSymbol} />)
                                    </span>
                                </div>
                            </div>
                            <div style={{paddingRight: "0.6rem"}}>
                                <table className="table order-table table-hover fixed-table text-right">
                                    {this.state.flip ? rightHeader : leftHeader}
                                </table>
                            </div>
                            <div
                                className="grid-block"
                                ref="hor_bids"
                                style={{
                                    paddingRight: "0.6rem",
                                    overflow: "hidden"
                                }}
                            >
                                <table
                                    style={{paddingBottom: 5}}
                                    className="table order-table table-hover fixed-table text-right no-overflow"
                                >
                                    <TransitionWrapper
                                        ref="bidTransition"
                                        className="orderbook clickable"
                                        component="tbody"
                                        transitionName="newrow"
                                    >
                                        {bidRows}
                                    </TransitionWrapper>
                                </table>
                                {totalBidsLength > rowCount ? (
                                    <div className="orderbook-showall">
                                        <a
                                            onClick={this._onToggleShowAll.bind(
                                                this,
                                                "bids"
                                            )}
                                        >
                                            <Translate
                                                content={
                                                    showAllBids
                                                        ? "exchange.hide"
                                                        : "exchange.show_bids"
                                                }
                                            />
                                            {!showAllBids ? (
                                                <span>
                                                    {" "}
                                                    ({totalBidsLength})
                                                </span>
                                            ) : null}
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            if (
                document.getElementsByClassName("container-menu-header")
                    .length > 0
            ) {
                let dom = document.getElementsByClassName(
                    "container-menu-header"
                )[0];
                if (dom.className.indexOf("left-cell-active") === -1) {
                    dom.className += " left-cell-active";
                }
            }
            // Vertical orderbook
            return (
                <div className="left-order-book no-padding">
                    <div className="order-table-container exchange-sell-orders vertical-orderbook-up">
                        <StickyTable
                            className="order-table table"
                            ref="vertical_sticky_table_up"
                        >
                            <div className="custom-sticky-header-wrap">
                                <div className="header-cell left vertical-table-cell-one custom-sticky-header">
                                    <span className="header-sub-title">
                                        <AssetName name={baseSymbol} dataPlace={"bottom"} dataClass={"test"}/>
                                    </span>
                                </div>
                                <div className="header-cell vertical-table-cell-two custom-sticky-header">
                                    <span className="header-sub-title">
                                        <AssetName name={quoteSymbol} />
                                    </span>
                                </div>
                                <div className=" header-cell right vertical-table-cell-three custom-sticky-header">
                                    <Translate
                                        className="header-sub-title"
                                        content="exchange.price"
                                    />
                                </div>
                            </div>
                            <div class="custom-sticky-table-wrap">
                            <TransitionWrapper
                                ref="askTransition"
                                className="transition-container clickable"
                                component="div"
                                transitionName="newrow"
                            >
                                {askRows.length > 0
                                    ? askRows
                                    : noOrders || (
                                          <div className="sticky-table-row">
                                              <td
                                                  className="cell no-orders padtop"
                                                  colSpan="3"
                                              >
                                                  No asks
                                              </td>
                                          </div>
                                      )}
                            </TransitionWrapper>
                            </div>
                        </StickyTable>
                    </div>
                    <div
                        className="sticky-table-row exchange-sell-buy-orders"
                        ref="center_text"
                    >
                        {noOrders ? (
                            <td colSpan={3} className="no-orders padtop">
                                <Translate content="exchange.no_orders" />
                            </td>
                        ) : (
                            <td className="cell center-cell" colSpan="3">
                                <div className="orderbook-latest-price">
                                    <div className="text-center spread">
                                        {!!spread && (
                                            <span
                                                className="left"

                                            >
                                                <Translate className="spread-label" content="exchange.spread" />{" "}
                                                <span className="spread-value">
                                                    {spread}({(
                                                    100 *
                                                    (lowestAsk._real_price / highestBid._real_price - 1)
                                                ).toFixed(2)}%)
                                                </span>
                                            </span>
                                        )}
                                        &nbsp;&nbsp;
                                        {!!this.props.latest && (
                                            <span className="right">
                                                <Translate className="latest-label" content="exchange.latest" />{" "}
                                                <span
                                                    className={
                                                        this.props.changeClass
                                                    }
                                                >
                                                    <PriceText
                                                        preFormattedPrice={
                                                            this.props.latest
                                                        }
                                                    />
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </td>
                        )}
                    </div>
                    <div className="order-table-container exchange-buy-orders vertical-orderbook-down">
                        <StickyTable
                            className="order-table table"
                            ref="vertical_sticky_table_down"
                        >
                            <div className="sticky-table-row top-header">
                                <div className="cell header-cell left">
                                    <span className="header-sub-title">
                                        <AssetName name={baseSymbol} />
                                    </span>
                                </div>
                                <div className="cell header-cell">
                                    <span className="header-sub-title">
                                        <AssetName name={quoteSymbol} />
                                    </span>
                                </div>
                                <div className="cell header-cell right">
                                    <Translate
                                        className="header-sub-title"
                                        content="exchange.price"
                                    />
                                </div>
                            </div>
                            <TransitionWrapper
                                ref="bidTransition"
                                className="transition-container clickable"
                                component="div"
                                transitionName="newrow"
                            >
                                {bidRows.length > 0
                                    ? bidRows
                                    : noOrders || (
                                          <div className="sticky-table-row">
                                              <td
                                                  className="cell no-orders"
                                                  colSpan="3"
                                              >
                                                  <Translate content="exchange.no_bids" />
                                              </td>
                                          </div>
                                      )}
                            </TransitionWrapper>
                        </StickyTable>
                    </div>
                    <div className="v-align no-padding align-center grid-block footer shrink bottom-header pin">
                        <div onClick={this.props.moveOrderBook}>
                            <Icon
                                name="thumb-untack"
                                title="icons.thumb_untack"
                                className="icon-14px order-book-button-h"
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

OrderBook.defaultProps = {
    bids: [],
    asks: [],
    orders: {}
};

OrderBook.propTypes = {
    bids: PropTypes.array.isRequired,
    asks: PropTypes.array.isRequired,
    orders: PropTypes.object.isRequired
};

export default OrderBook;