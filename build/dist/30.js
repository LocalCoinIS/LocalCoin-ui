(window.webpackJsonp = window.webpackJsonp || []).push([
    [30],
    {
        111: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(502),
                s = a.n(o),
                i = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var l = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {animateEnter: !1}), (e.timer = null), e;
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    i(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.enableAnimation();
                            }
                        },
                        {
                            key: "resetAnimation",
                            value: function() {
                                this.setState({animateEnter: !1}),
                                    this.enableAnimation();
                            }
                        },
                        {
                            key: "enableAnimation",
                            value: function() {
                                var e = this;
                                this.timer = setTimeout(function() {
                                    e.timer && e.setState({animateEnter: !0});
                                }, 2e3);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                clearTimeout(this.timer), (this.timer = null);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.children
                                    ? r.a.createElement(
                                          s.a,
                                          {
                                              className: this.props.className,
                                              component: this.props.component,
                                              transitionName: this.props
                                                  .transitionName,
                                              transitionEnterTimeout: this.props
                                                  .enterTimeout,
                                              transitionEnter: this.state
                                                  .animateEnter,
                                              transitionLeave: !1
                                          },
                                          this.props.children
                                      )
                                    : r.a.createElement(this.props.component);
                            }
                        }
                    ]),
                    t
                );
            })();
            (l.defaultProps = {component: "span", enterTimeout: 2e3}),
                (t.a = l);
        },
        139: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return x;
            }),
                a.d(t, "a", function() {
                    return N;
                });
            var n = a(0),
                r = a.n(n),
                o = a(17),
                s = a(6),
                i = a(13),
                l = a(50),
                c = a(5),
                u = a(15),
                p = a(31),
                d = a(1),
                h = a.n(d),
                m = a(3),
                f = a.n(m),
                b = a(45),
                g = a.n(b),
                v = a(271),
                _ = a(42),
                y =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                E = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function w(e, t) {
                var a = {};
                for (var n in e)
                    t.indexOf(n) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, n) &&
                            (a[n] = e[n]));
                return a;
            }
            function k(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function O(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function A(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var C = (function(e) {
                function t(e) {
                    return (
                        k(this, t),
                        O(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    A(t, v["a"]),
                    E(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                g.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var s = r.get;
                                        return void 0 !== s
                                            ? s.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    !c.a.are_equal_shallow(
                                        e.pulsate,
                                        this.props.pulsate
                                    ) ||
                                    e.toAsset !== this.props.toAsset ||
                                    e.fromAsset !== this.props.fromAsset ||
                                    e.amount !== this.props.amount
                                );
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    a = e.toAsset,
                                    n = e.fromAsset,
                                    r = e.fullPrecision,
                                    o = e.marketStats,
                                    s = e.coreAsset;
                                return _.a.convertValue(t, a, n, o, s, r);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    a = e.toAsset,
                                    n = e.fromAsset,
                                    s = e.fullPrecision,
                                    i = w(e, [
                                        "amount",
                                        "toAsset",
                                        "fromAsset",
                                        "fullPrecision"
                                    ]),
                                    l = a.get("id"),
                                    u = a.get("symbol");
                                s || (t = c.a.get_asset_amount(t, n));
                                var p = this.getValue();
                                return p || 0 === p
                                    ? r.a.createElement(
                                          o.a,
                                          y(
                                              {
                                                  noPrefix: !0,
                                                  amount: p,
                                                  asset: l,
                                                  decimalOffset:
                                                      -1 !== u.indexOf("BTC")
                                                          ? 4
                                                          : this.props
                                                                .fullDecimals
                                                              ? 0
                                                              : this.props
                                                                    .noDecimals
                                                                  ? a.get(
                                                                        "precision"
                                                                    )
                                                                  : a.get(
                                                                        "precision"
                                                                    ) - 2
                                              },
                                              i
                                          )
                                      )
                                    : r.a.createElement(
                                          "div",
                                          {
                                              className: "tooltip inline-block",
                                              "data-place": "bottom",
                                              "data-tip": f.a.translate(
                                                  "tooltip.no_price"
                                              ),
                                              style: {fontSize: "0.9rem"}
                                          },
                                          r.a.createElement(h.a, {
                                              content: "account.no_price"
                                          })
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (C.defaultProps = {
                fullPrecision: !0,
                noDecimals: !1,
                fullDecimals: !1,
                hide_asset: !1
            }),
                (C = Object(l.a)(C, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var x = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        O(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    A(t, r.a.Component),
                    E(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    a = w(e, ["refCallback"]);
                                return r.a.createElement(C, y({}, a, {ref: t}));
                            }
                        }
                    ]),
                    t
                );
            })();
            x = Object(u.connect)(x, {
                listenTo: function() {
                    return [p.a];
                },
                getProps: function() {
                    return {marketStats: p.a.getState().allMarketStats};
                }
            });
            var N = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        O(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    A(t, r.a.Component),
                    E(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balance,
                                    a = w(e, ["balance"]),
                                    n = !!t.getIn(["balance", "amount"]),
                                    o = Number(
                                        n
                                            ? t.getIn(["balance", "amount"])
                                            : t.get("balance")
                                    ),
                                    s = n
                                        ? t.getIn(["balance", "asset_id"])
                                        : t.get("asset_type");
                                return isNaN(o)
                                    ? r.a.createElement("span", null, "--")
                                    : r.a.createElement(
                                          x,
                                          y(
                                              {
                                                  amount: o,
                                                  fromAsset: s,
                                                  noDecimals: !0
                                              },
                                              a
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (N.propTypes = {balance: s.a.ChainObject.isRequired}),
                (N = Object(i.a)(N, {keep_updating: !0}));
        },
        149: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(5),
                s = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var i = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    s(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.price,
                                    a = e.preFormattedPrice,
                                    n = e.quote,
                                    s = e.base,
                                    i = (e.component,
                                    a || o.a.price_to_text(t, n, s));
                                return i.full >= 1
                                    ? r.a.createElement(
                                          "span",
                                          null,
                                          r.a.createElement(
                                              "span",
                                              {className: "price-integer"},
                                              i.int,
                                              "."
                                          ),
                                          i.dec
                                              ? r.a.createElement(
                                                    "span",
                                                    {
                                                        className:
                                                            "price-integer"
                                                    },
                                                    i.dec
                                                )
                                              : null,
                                          i.trailing
                                              ? r.a.createElement(
                                                    "span",
                                                    {
                                                        className:
                                                            "price-decimal"
                                                    },
                                                    i.trailing
                                                )
                                              : null
                                      )
                                    : i.full >= 0.1
                                        ? r.a.createElement(
                                              "span",
                                              null,
                                              r.a.createElement(
                                                  "span",
                                                  {className: "price-decimal"},
                                                  i.int,
                                                  "."
                                              ),
                                              i.dec
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-integer"
                                                        },
                                                        i.dec
                                                    )
                                                  : null,
                                              i.trailing
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-decimal"
                                                        },
                                                        i.trailing
                                                    )
                                                  : null
                                          )
                                        : r.a.createElement(
                                              "span",
                                              null,
                                              r.a.createElement(
                                                  "span",
                                                  {className: "price-decimal"},
                                                  i.int,
                                                  "."
                                              ),
                                              i.dec
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-decimal"
                                                        },
                                                        i.dec
                                                    )
                                                  : null,
                                              i.trailing
                                                  ? r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "price-integer"
                                                        },
                                                        i.trailing
                                                    )
                                                  : null
                                          );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = i;
        },
        222: function(e, t, a) {
            "use strict";
            var n = a(519),
                r = a(0),
                o = a.n(r),
                s = a(2),
                i = a.n(s),
                l = a(20),
                c = a.n(l),
                u = a(34),
                p = a(63),
                d = a.n(p),
                h = a(1),
                m = a.n(h),
                f = a(6),
                b = a(13),
                g = a(17),
                v = a(5),
                _ = a(9),
                y = a.n(_),
                E = a(43),
                w = a(56),
                k = a(86),
                O = a(16),
                A = a(64),
                C = a(3),
                x = a.n(C),
                N = a(69),
                S = a(7),
                P = a.n(S),
                j = a(4),
                T = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function I(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function q(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function D(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var L = (function(e) {
                function t(e) {
                    I(this, t);
                    var a = q(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (a.state = a._initialState(e)), a;
                }
                return (
                    D(t, o.a.Component),
                    T(t, [
                        {
                            key: "_initialState",
                            value: function(e) {
                                var t = e ? this._getCurrentPosition(e) : {};
                                if (t.collateral) {
                                    var a = v.a.get_asset_amount(
                                            t.debt,
                                            e.quote_asset
                                        ),
                                        n = v.a.get_asset_amount(
                                            t.collateral,
                                            e.backing_asset
                                        );
                                    return {
                                        short_amount: a ? a.toString() : null,
                                        collateral: n ? n.toString() : null,
                                        collateral_ratio: this._getCollateralRatio(
                                            a,
                                            n
                                        ),
                                        errors: this._getInitialErrors(),
                                        isValid: !1,
                                        original_position: {
                                            debt: a,
                                            collateral: n
                                        }
                                    };
                                }
                                return {
                                    short_amount: 0,
                                    collateral: 0,
                                    collateral_ratio: this._getInitialCollateralRatio(
                                        e
                                    ),
                                    errors: this._getInitialErrors(),
                                    isValid: !1,
                                    original_position: {debt: 0, collateral: 0}
                                };
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this._initialState(this.props);
                                this.setState(e), this._setUpdatedPosition(e);
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return !(
                                    v.a.are_equal_shallow(t, this.state) &&
                                    P.a.is(
                                        e.quote_asset,
                                        this.props.quote_asset
                                    ) &&
                                    !e.backing_asset.get("symbol") !==
                                        this.props.backing_asset.get(
                                            "symbol"
                                        ) &&
                                    P.a.is(e.account, this.props.account) &&
                                    P.a.is(
                                        e.call_orders,
                                        this.props.call_orders
                                    )
                                );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = this.state,
                                    a = t.short_amount,
                                    n = t.collateral,
                                    r = t.collateral_ratio;
                                if (
                                    e.account !== this.props.account ||
                                    e.hasCallOrders !==
                                        this.props.hasCallOrders ||
                                    e.quote_asset.get("id") !==
                                        this.props.quote_asset.get("id")
                                ) {
                                    var o = this._initialState(e),
                                        s = !1;
                                    (a || n || r) &&
                                        ((o.short_amount = a),
                                        (o.collateral = n),
                                        (o.collateral_ratio = r),
                                        (s = !0)),
                                        this.setState(o),
                                        s && this._validateFields(o);
                                }
                            }
                        },
                        {
                            key: "_getInitialErrors",
                            value: function() {
                                return {
                                    collateral_balance: null,
                                    ratio_too_high: null
                                };
                            }
                        },
                        {
                            key: "confirmClicked",
                            value: function(e) {
                                e.preventDefault(),
                                    c.a.publish(this.props.modalId, "close");
                            }
                        },
                        {
                            key: "_onBorrowChange",
                            value: function(e) {
                                var t = this._getFeedPrice(),
                                    a = e.amount.replace(/,/g, ""),
                                    n = {
                                        short_amount: a,
                                        collateral: (
                                            this.state.collateral_ratio *
                                            (a / t)
                                        ).toFixed(
                                            this.props.backing_asset.get(
                                                "precision"
                                            )
                                        ),
                                        collateral_ratio: this.state
                                            .collateral_ratio
                                    };
                                this.setState(n),
                                    this._validateFields(n),
                                    this._setUpdatedPosition(n);
                            }
                        },
                        {
                            key: "_onCollateralChange",
                            value: function(e) {
                                var t = e.amount.replace(/,/g, ""),
                                    a = this._getFeedPrice(),
                                    r = t / (this.state.short_amount / a),
                                    o = this._isPredictionMarket(this.props)
                                        ? {
                                              short_amount: t,
                                              collateral: t,
                                              collateral_ratio: 1
                                          }
                                        : {
                                              short_amount: this.state
                                                  .short_amount,
                                              collateral: t,
                                              collateral_ratio: Object(n.a)(r)
                                                  ? r
                                                  : this._getInitialCollateralRatio(
                                                        this.props
                                                    )
                                          };
                                this.setState(o),
                                    this._validateFields(o),
                                    this._setUpdatedPosition(o);
                            }
                        },
                        {
                            key: "_onRatioChange",
                            value: function(e) {
                                var t = this._getFeedPrice(),
                                    a = e.target;
                                new RegExp(/[[:digit:]]/).test(a.value) ||
                                    (a.value = a.value.replace(/[^0-9.]/g, "")),
                                    "." == a.value.charAt(0) &&
                                        (a.value = "0.");
                                var n = a.value,
                                    r = {
                                        short_amount: this.state.short_amount,
                                        collateral: (
                                            (this.state.short_amount / t) *
                                            n
                                        ).toFixed(
                                            this.props.backing_asset.get(
                                                "precision"
                                            )
                                        ),
                                        collateral_ratio: n
                                    };
                                this.setState(r),
                                    this._validateFields(r),
                                    this._setUpdatedPosition(r);
                            }
                        },
                        {
                            key: "_maximizeCollateral",
                            value: function() {
                                var e = this.props
                                        ? this._getCurrentPosition(this.props)
                                        : {},
                                    t = 0;
                                e.collateral &&
                                    (t = v.a.get_asset_amount(
                                        e.collateral,
                                        this.props.backing_asset
                                    ));
                                var a = Math.floor(
                                    Math.min(
                                        this.props.backing_balance.get(
                                            "balance"
                                        ) /
                                            v.a.get_asset_precision(
                                                this.props.backing_asset
                                            ) +
                                            t -
                                            10,
                                        (this.state.short_amount /
                                            this._getFeedPrice()) *
                                            1e3
                                    )
                                );
                                this._onCollateralChange(
                                    new Object({amount: a.toString()})
                                );
                            }
                        },
                        {
                            key: "_maximizeDebt",
                            value: function() {
                                var e = this.props
                                        ? this._getCurrentPosition(this.props)
                                        : {},
                                    t = 0;
                                e.collateral &&
                                    (t = v.a.get_asset_amount(
                                        e.collateral,
                                        this.props.backing_asset
                                    ));
                                var a =
                                        this.props.backing_balance.get(
                                            "balance"
                                        ) /
                                            v.a.get_asset_precision(
                                                this.props.backing_asset
                                            ) +
                                        t -
                                        10,
                                    n = {
                                        short_amount:
                                            (a / this.state.collateral_ratio) *
                                            this._getFeedPrice(),
                                        collateral: a,
                                        collateral_ratio: this.state
                                            .collateral_ratio
                                    };
                                this.setState(n),
                                    this._validateFields(n),
                                    this._setUpdatedPosition(n);
                            }
                        },
                        {
                            key: "_payDebt",
                            value: function() {
                                var e = this.props
                                    ? this._getCurrentPosition(this.props)
                                    : {debt: 0};
                                if (!(e.debt <= 0)) {
                                    var t = v.a.get_asset_amount(
                                        Math.max(
                                            e.debt -
                                                this.props.bitasset_balance.get(
                                                    "balance"
                                                ),
                                            0
                                        ),
                                        this.props.quote_asset
                                    );
                                    this._onBorrowChange({
                                        amount: t.toString()
                                    });
                                }
                            }
                        },
                        {
                            key: "_setUpdatedPosition",
                            value: function(e) {
                                this.setState({
                                    newPosition:
                                        parseFloat(e.short_amount) /
                                        parseFloat(e.collateral)
                                });
                            }
                        },
                        {
                            key: "_validateFields",
                            value: function(e) {
                                var t = this._getInitialErrors(),
                                    a = this.state.original_position,
                                    n = this.props.backing_balance
                                        ? this.props.backing_balance.toJS()
                                        : {balance: 0};
                                parseFloat(e.collateral) - a.collateral >
                                    v.a.get_asset_amount(
                                        n.balance,
                                        this.props.backing_asset.toJS()
                                    ) &&
                                    (t.collateral_balance = x.a.translate(
                                        "borrow.errors.collateral"
                                    ));
                                var r =
                                        e.short_amount >= 0 &&
                                        e.collateral >= 0 &&
                                        (e.short_amount != a.debt ||
                                            e.collateral != a.collateral),
                                    o =
                                        this.props.quote_asset.getIn([
                                            "bitasset",
                                            "current_feed",
                                            "maintenance_collateral_ratio"
                                        ]) / 1e3;
                                parseFloat(e.collateral_ratio) <
                                (this._isPredictionMarket(this.props) ? 1 : o)
                                    ? ((t.below_maintenance = x.a.translate(
                                          "borrow.errors.below",
                                          {mr: o}
                                      )),
                                      (r = !1))
                                    : parseFloat(e.collateral_ratio) <
                                          (this._isPredictionMarket(this.props)
                                              ? 1
                                              : o + 0.5) &&
                                      ((t.close_maintenance = x.a.translate(
                                          "borrow.errors.close",
                                          {mr: o}
                                      )),
                                      (r = !0)),
                                    this.setState({errors: t, isValid: r});
                            }
                        },
                        {
                            key: "_onSubmit",
                            value: function(e) {
                                e.preventDefault();
                                var t = v.a.get_asset_precision(
                                        this.props.quote_asset.get("precision")
                                    ),
                                    a = v.a.get_asset_precision(
                                        this.props.backing_asset.get(
                                            "precision"
                                        )
                                    ),
                                    n = this._getCurrentPosition(this.props),
                                    r = k.a.new_transaction();
                                r.add_type_operation("call_order_update", {
                                    fee: {amount: 0, asset_id: 0},
                                    funding_account: this.props.account.get(
                                        "id"
                                    ),
                                    delta_collateral: {
                                        amount: parseInt(
                                            this.state.collateral * a -
                                                n.collateral,
                                            10
                                        ),
                                        asset_id: this.props.backing_asset.get(
                                            "id"
                                        )
                                    },
                                    delta_debt: {
                                        amount: parseInt(
                                            this.state.short_amount * t -
                                                n.debt,
                                            10
                                        ),
                                        asset_id: this.props.quote_asset.get(
                                            "id"
                                        )
                                    }
                                }),
                                    O.a
                                        .process_transaction(r, null, !0)
                                        .catch(function(e) {}),
                                    c.a.publish(this.props.modalId, "close");
                            }
                        },
                        {
                            key: "_getCurrentPosition",
                            value: function(e) {
                                var t = {collateral: null, debt: null};
                                return (
                                    e &&
                                        e.hasCallOrders &&
                                        e.call_orders &&
                                        (t = (t = e.call_orders
                                            .filter(function(e) {
                                                return !!e;
                                            })
                                            .find(function(t) {
                                                return (
                                                    t.getIn([
                                                        "call_price",
                                                        "quote",
                                                        "asset_id"
                                                    ]) ===
                                                    e.quote_asset.get("id")
                                                );
                                            }))
                                            ? t.toJS()
                                            : {collateral: null, debt: null}),
                                    t
                                );
                            }
                        },
                        {
                            key: "_getFeedPrice",
                            value: function() {
                                return this.props
                                    ? this._isPredictionMarket(this.props)
                                        ? 1
                                        : 1 /
                                          v.a.get_asset_price(
                                              this.props.quote_asset.getIn([
                                                  "bitasset",
                                                  "current_feed",
                                                  "settlement_price",
                                                  "quote",
                                                  "amount"
                                              ]),
                                              this.props.backing_asset,
                                              this.props.quote_asset.getIn([
                                                  "bitasset",
                                                  "current_feed",
                                                  "settlement_price",
                                                  "base",
                                                  "amount"
                                              ]),
                                              this.props.quote_asset
                                          )
                                    : 1;
                            }
                        },
                        {
                            key: "_getInitialCollateralRatio",
                            value: function(e) {
                                return this._isPredictionMarket(e) ? 1 : 0;
                            }
                        },
                        {
                            key: "_getCollateralRatio",
                            value: function(e, t) {
                                return t / (e / this._getFeedPrice());
                            }
                        },
                        {
                            key: "_isPredictionMarket",
                            value: function(e) {
                                return e.quote_asset.getIn([
                                    "bitasset",
                                    "is_prediction_market"
                                ]);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.quote_asset,
                                    n = t.bitasset_balance,
                                    r = t.backing_asset,
                                    s = t.backing_balance,
                                    i = this.state,
                                    l = i.short_amount,
                                    c = i.collateral,
                                    u = i.collateral_ratio,
                                    p = i.errors,
                                    h = i.isValid,
                                    f = v.a.get_asset_precision(
                                        this.props.quote_asset.get("precision")
                                    ),
                                    b = v.a.get_asset_precision(
                                        this.props.backing_asset.get(
                                            "precision"
                                        )
                                    );
                                (u && !isNaN(u) && u > 0 && u < 1e3) || (u = 0),
                                    (n = n ? n.toJS() : {balance: 0, id: null}),
                                    (s = s ? s.toJS() : {balance: 0, id: null});
                                var _ = y()("form-group", {
                                        "has-error": p.collateral_balance
                                    }),
                                    k = y()(
                                        "form-group",
                                        {"has-error": p.below_maintenance},
                                        {"has-warning": p.close_maintenance}
                                    ),
                                    O = y()(
                                        "button",
                                        {disabled: p.collateral_balance || !h},
                                        {success: h}
                                    ),
                                    C = this._getCurrentPosition(this.props),
                                    S = s.id ? j.b.getObject(s.id) : null,
                                    P =
                                        (S ? S.get("balance") : 0) -
                                        parseInt(
                                            this.state.collateral * b -
                                                C.collateral,
                                            10
                                        ),
                                    T = o.a.createElement(
                                        "span",
                                        null,
                                        o.a.createElement(
                                            "span",
                                            null,
                                            o.a.createElement(m.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ":",
                                            " ",
                                            n.id
                                                ? o.a.createElement(w.a, {
                                                      balance: n.id
                                                  })
                                                : o.a.createElement(g.a, {
                                                      amount: 0,
                                                      asset: a.get("id")
                                                  })
                                        ),
                                        o.a.createElement(
                                            "a",
                                            {onClick: this._payDebt.bind(this)},
                                            o.a.createElement(m.a, {
                                                content: "borrow.pay_max_debt"
                                            })
                                        ),
                                        "|",
                                        0 != u
                                            ? o.a.createElement(
                                                  "a",
                                                  {
                                                      onClick: this._maximizeDebt.bind(
                                                          this
                                                      )
                                                  },
                                                  o.a.createElement(m.a, {
                                                      content: "borrow.use_max"
                                                  })
                                              )
                                            : o.a.createElement(
                                                  "span",
                                                  {
                                                      className:
                                                          "disabled-link",
                                                      "data-place": "left",
                                                      "data-tip": x.a.translate(
                                                          "borrow.maximize_debt_set_ratio_slider"
                                                      )
                                                  },
                                                  o.a.createElement(m.a, {
                                                      content: "borrow.use_max"
                                                  })
                                              )
                                    ),
                                    I = o.a.createElement(
                                        "span",
                                        null,
                                        o.a.createElement(
                                            "span",
                                            null,
                                            o.a.createElement(m.a, {
                                                component: "span",
                                                content: "transfer.available"
                                            }),
                                            ":",
                                            " ",
                                            s.id
                                                ? o.a.createElement(g.a, {
                                                      amount: P,
                                                      asset: r.get("id")
                                                  })
                                                : o.a.createElement(g.a, {
                                                      amount: 0,
                                                      asset: r.get("id")
                                                  })
                                        ),
                                        o.a.createElement(
                                            "a",
                                            {
                                                onClick: this._maximizeCollateral.bind(
                                                    this
                                                )
                                            },
                                            o.a.createElement(m.a, {
                                                content: "borrow.use_max"
                                            })
                                        )
                                    ),
                                    q = this._getFeedPrice(),
                                    D =
                                        this.props.quote_asset.getIn([
                                            "bitasset",
                                            "current_feed",
                                            "maintenance_collateral_ratio"
                                        ]) / 1e3,
                                    L = (this.props.quote_asset.getIn([
                                        "bitasset",
                                        "current_feed",
                                        "maximum_short_squeeze_ratio"
                                    ]),
                                    this._isPredictionMarket(this.props));
                                return !L && isNaN(q)
                                    ? o.a.createElement(
                                          "div",
                                          null,
                                          o.a.createElement(
                                              "form",
                                              {
                                                  className:
                                                      "grid-container text-center no-overflow",
                                                  noValidate: !0
                                              },
                                              o.a.createElement(m.a, {
                                                  component: "h3",
                                                  content: "borrow.no_valid",
                                                  asset_symbol: a.get("symbol")
                                              })
                                          ),
                                          o.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content button-group text-center no-overflow"
                                              },
                                              o.a.createElement(
                                                  d.a,
                                                  {close: this.props.modalId},
                                                  o.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              " button warning"
                                                      },
                                                      o.a.createElement(m.a, {
                                                          content:
                                                              "account.perm.cancel"
                                                      })
                                                  )
                                              )
                                          )
                                      )
                                    : o.a.createElement(
                                          "div",
                                          null,
                                          o.a.createElement(
                                              "form",
                                              {
                                                  className:
                                                      "grid-container small-10 small-offset-1 no-overflow",
                                                  noValidate: !0
                                              },
                                              o.a.createElement(m.a, {
                                                  component: "h3",
                                                  content: "borrow.title",
                                                  asset_symbol: a.get("symbol")
                                              }),
                                              o.a.createElement(
                                                  "div",
                                                  {style: {textAlign: "left"}},
                                                  this.props.hide_help
                                                      ? null
                                                      : o.a.createElement(N.a, {
                                                            path:
                                                                "components/" +
                                                                (L
                                                                    ? "BorrowModalPrediction"
                                                                    : "BorrowModal"),
                                                            debt: a.get(
                                                                "symbol"
                                                            ),
                                                            collateral: r.get(
                                                                "symbol"
                                                            ),
                                                            borrower: this.props.account.get(
                                                                "name"
                                                            ),
                                                            mr: D
                                                        }),
                                                  L
                                                      ? null
                                                      : o.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    paddingBottom:
                                                                        "1rem"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "borrow-price-feeds"
                                                                },
                                                                o.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "borrow-price-label"
                                                                    },
                                                                    o.a.createElement(
                                                                        m.a,
                                                                        {
                                                                            content:
                                                                                "transaction.feed_price"
                                                                        }
                                                                    ),
                                                                    ": "
                                                                ),
                                                                o.a.createElement(
                                                                    A.a,
                                                                    {
                                                                        noPopOver: !0,
                                                                        quote_amount: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "base",
                                                                                "amount"
                                                                            ]
                                                                        ),
                                                                        quote_asset: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "base",
                                                                                "asset_id"
                                                                            ]
                                                                        ),
                                                                        base_asset: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "quote",
                                                                                "asset_id"
                                                                            ]
                                                                        ),
                                                                        base_amount: a.getIn(
                                                                            [
                                                                                "bitasset",
                                                                                "current_feed",
                                                                                "settlement_price",
                                                                                "quote",
                                                                                "amount"
                                                                            ]
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "b",
                                                                null
                                                            ),
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "borrow-price-final " +
                                                                        (p.below_maintenance
                                                                            ? "has-error"
                                                                            : p.close_maintenance
                                                                                ? "has-warning"
                                                                                : "")
                                                                },
                                                                o.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "borrow-price-label"
                                                                    },
                                                                    o.a.createElement(
                                                                        m.a,
                                                                        {
                                                                            content:
                                                                                "exchange.your_price"
                                                                        }
                                                                    ),
                                                                    ": "
                                                                ),
                                                                this.state
                                                                    .newPosition
                                                                    ? o.a.createElement(
                                                                          A.a,
                                                                          {
                                                                              noPopOver: !0,
                                                                              quote_amount:
                                                                                  D *
                                                                                  this
                                                                                      .state
                                                                                      .short_amount *
                                                                                  f,
                                                                              quote_asset: a.get(
                                                                                  "id"
                                                                              ),
                                                                              base_asset: r.get(
                                                                                  "id"
                                                                              ),
                                                                              base_amount:
                                                                                  this
                                                                                      .state
                                                                                      .collateral *
                                                                                  b
                                                                          }
                                                                      )
                                                                    : null
                                                            )
                                                        ),
                                                  o.a.createElement(
                                                      "div",
                                                      {className: "form-group"},
                                                      o.a.createElement(E.a, {
                                                          label:
                                                              "transaction.borrow_amount",
                                                          amount: l.toString(),
                                                          onChange: this._onBorrowChange.bind(
                                                              this
                                                          ),
                                                          asset: a.get("id"),
                                                          assets: [a.get("id")],
                                                          display_balance: T,
                                                          placeholder: "0.0",
                                                          tabIndex: 1
                                                      })
                                                  ),
                                                  o.a.createElement(
                                                      "div",
                                                      {className: _},
                                                      o.a.createElement(E.a, {
                                                          label:
                                                              "transaction.collateral",
                                                          amount: c.toString(),
                                                          onChange: this._onCollateralChange.bind(
                                                              this
                                                          ),
                                                          asset: r.get("id"),
                                                          assets: [r.get("id")],
                                                          display_balance: I,
                                                          placeholder: "0.0",
                                                          tabIndex: 1
                                                      }),
                                                      p.collateral_balance
                                                          ? o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "float-left",
                                                                    style: {
                                                                        paddingTop: 5
                                                                    }
                                                                },
                                                                p.collateral_balance
                                                            )
                                                          : null
                                                  ),
                                                  L
                                                      ? null
                                                      : o.a.createElement(
                                                            "div",
                                                            null,
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className: k,
                                                                    style: {
                                                                        marginBottom:
                                                                            "3.5rem"
                                                                    }
                                                                },
                                                                o.a.createElement(
                                                                    m.a,
                                                                    {
                                                                        component:
                                                                            "label",
                                                                        content:
                                                                            "borrow.coll_ratio"
                                                                    }
                                                                ),
                                                                o.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    o.a.createElement(
                                                                        "input",
                                                                        {
                                                                            value:
                                                                                0 ==
                                                                                u
                                                                                    ? null
                                                                                    : u,
                                                                            onChange: this._onRatioChange.bind(
                                                                                this
                                                                            ),
                                                                            type:
                                                                                "text",
                                                                            style: {
                                                                                width:
                                                                                    "12%",
                                                                                float:
                                                                                    "right",
                                                                                marginTop: -10
                                                                            }
                                                                        }
                                                                    ),
                                                                    o.a.createElement(
                                                                        "input",
                                                                        {
                                                                            style: {
                                                                                width:
                                                                                    "85%"
                                                                            },
                                                                            min:
                                                                                "0",
                                                                            max:
                                                                                "6",
                                                                            step:
                                                                                "0.01",
                                                                            onChange: this._onRatioChange.bind(
                                                                                this
                                                                            ),
                                                                            value: u,
                                                                            type:
                                                                                "range"
                                                                        }
                                                                    )
                                                                ),
                                                                p.below_maintenance ||
                                                                p.close_maintenance
                                                                    ? o.a.createElement(
                                                                          "div",
                                                                          {
                                                                              style: {
                                                                                  height:
                                                                                      "1em",
                                                                                  maxWidth:
                                                                                      "85%"
                                                                              },
                                                                              className:
                                                                                  "float-left"
                                                                          },
                                                                          p.below_maintenance,
                                                                          p.close_maintenance
                                                                      )
                                                                    : null
                                                            )
                                                        ),
                                                  o.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "no-padding grid-content button-group no-overflow"
                                                      },
                                                      o.a.createElement(
                                                          "div",
                                                          {
                                                              onClick: this._onSubmit.bind(
                                                                  this
                                                              ),
                                                              className: O
                                                          },
                                                          o.a.createElement(
                                                              m.a,
                                                              {
                                                                  content:
                                                                      "borrow.adjust"
                                                              }
                                                          )
                                                      ),
                                                      o.a.createElement(
                                                          "div",
                                                          {
                                                              onClick: function(
                                                                  t
                                                              ) {
                                                                  t.preventDefault(),
                                                                      e.setState(
                                                                          e._initialState(
                                                                              e.props
                                                                          )
                                                                      );
                                                              },
                                                              className:
                                                                  "button hollow primary"
                                                          },
                                                          o.a.createElement(
                                                              m.a,
                                                              {
                                                                  content:
                                                                      "wallet.reset"
                                                              }
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (L.propTypes = {
                quote_asset: f.a.ChainAsset.isRequired,
                bitasset_balance: f.a.ChainObject,
                backing_asset: f.a.ChainAsset.isRequired,
                backing_balance: f.a.ChainObject,
                call_orders: f.a.ChainObjectsList,
                hasCallOrders: i.a.bool
            }),
                (L = Object(b.a)(L));
            var R = (function(e) {
                function t() {
                    I(this, t);
                    var e = q(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {smallScreen: !1, open: !1}), e;
                }
                return (
                    D(t, o.a.Component),
                    T(t, [
                        {
                            key: "show",
                            value: function() {
                                var e = this;
                                this.setState({open: !0}, function() {
                                    c.a.publish(e.props.modalId, "open");
                                });
                            }
                        },
                        {
                            key: "onClose",
                            value: function() {
                                this.setState({open: !1});
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this.setState({
                                    smallScreen: window.innerHeight <= 800
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.quote_asset,
                                    a = e.backing_asset,
                                    n = e.account,
                                    r = n.get("balances").toJS(),
                                    s = void 0,
                                    i = void 0;
                                if (r)
                                    for (var l in r)
                                        l === a && (s = r[l]),
                                            l === t && (i = r[l]);
                                return this.state.open
                                    ? o.a.createElement(
                                          u.a,
                                          {
                                              id: this.props.modalId,
                                              overlay: !0,
                                              onClose: this.onClose.bind(this),
                                              ref: this.props.modalId
                                          },
                                          o.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block vertical"
                                              },
                                              o.a.createElement(L, {
                                                  quote_asset: t,
                                                  call_orders: n
                                                      .get(
                                                          "call_orders",
                                                          Object(S.List)()
                                                      )
                                                      .toList(),
                                                  hasCallOrders:
                                                      n.get("call_orders") &&
                                                      n.get("call_orders")
                                                          .size > 0,
                                                  modalId: this.props.modalId,
                                                  bitasset_balance: i,
                                                  backing_balance: s,
                                                  backing_asset: a,
                                                  hide_help: this.state
                                                      .smallScreen,
                                                  account: n
                                              })
                                          )
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = R;
        },
        321: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return y;
            }),
                a.d(t, "b", function() {
                    return v;
                });
            var n = a(0),
                r = a.n(n),
                o = a(50),
                s = a(9),
                i = a.n(s),
                l = a(35),
                c = a(31),
                u = a(15),
                p = a(5),
                d = a(64),
                h = a(42),
                m = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function f(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function b(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function g(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var v = (function(e) {
                    function t(e) {
                        f(this, t);
                        var a = b(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        a.statsInterval = null;
                        var n = h.a.getMarketName(e.base, e.quote).marketName;
                        return (a.state = {marketName: n}), a;
                    }
                    return (
                        g(t, r.a.Component),
                        m(t, [
                            {
                                key: "_checkStats",
                                value: function() {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {close: {}},
                                        t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {close: {}};
                                    return (
                                        e.volumeBase !== t.volumeBase ||
                                        !p.a.are_equal_shallow(
                                            e.close && e.close.base,
                                            t.close && t.close.base
                                        ) ||
                                        !p.a.are_equal_shallow(
                                            e.close && e.close.quote,
                                            t.close && t.close.quote
                                        )
                                    );
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        this._checkStats(
                                            e.allMarketStats.get(
                                                this.state.marketName
                                            ),
                                            this.props.allMarketStats.get(
                                                this.state.marketName
                                            )
                                        ) ||
                                        e.base.get("id") !==
                                            this.props.base.get("id") ||
                                        e.quote.get("id") !==
                                            this.props.quote.get("id")
                                    );
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    l.a.getMarketStats(
                                        this.props.base,
                                        this.props.quote
                                    ),
                                        (this.statsChecked = new Date()),
                                        (this.statsInterval = setInterval(
                                            l.a.getMarketStats.bind(
                                                this,
                                                this.props.base,
                                                this.props.quote
                                            ),
                                            35e3
                                        ));
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    clearInterval(this.statsInterval);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                _ = (function(e) {
                    function t(e) {
                        return (
                            f(this, t),
                            b(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e
                                )
                            )
                        );
                    }
                    return (
                        g(t, v),
                        m(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var s = r.get;
                                        return void 0 !== s
                                            ? s.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.allMarketStats,
                                        t = this.state.marketName,
                                        a = e.get(t),
                                        n = a && a.price ? a.price : null;
                                    return r.a.createElement(
                                        "span",
                                        {
                                            className: i()(
                                                "",
                                                this.props.className
                                            )
                                        },
                                        n
                                            ? r.a.createElement(d.a, {
                                                  base_amount: n.base.amount,
                                                  base_asset: n.base.asset_id,
                                                  quote_amount: n.quote.amount,
                                                  quote_asset: n.quote.asset_id,
                                                  force_direction: this.props
                                                      .force_direction,
                                                  hide_symbols: this.props
                                                      .hide_symbols
                                              })
                                            : "n/a"
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            _ = Object(o.a)(_, {propNames: ["quote", "base"]});
            var y = (function(e) {
                function t() {
                    return (
                        f(this, t),
                        b(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    g(t, r.a.Component),
                    m(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(_, this.props);
                            }
                        }
                    ]),
                    t
                );
            })();
            y = Object(u.connect)(y, {
                listenTo: function() {
                    return [c.a];
                },
                getProps: function() {
                    return {allMarketStats: c.a.getState().allMarketStats};
                }
            });
        },
        322: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(2),
                s = a.n(o),
                i = a(11),
                l = a(3),
                c = a.n(l),
                u = a(58),
                p = a.n(u),
                d = a(5),
                h = a(1),
                m = a.n(h),
                f = a(22),
                b = a(272),
                g = a.n(b),
                v = a(111),
                _ = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function y(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function E(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function w(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            (function(e) {
                function t() {
                    return (
                        y(this, t),
                        E(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, r.a.Component),
                    _(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.baseSymbol,
                                    a = e.quoteSymbol;
                                return r.a.createElement(
                                    "thead",
                                    null,
                                    r.a.createElement(
                                        "tr",
                                        null,
                                        r.a.createElement(
                                            "th",
                                            {style: {textAlign: "right"}},
                                            r.a.createElement(m.a, {
                                                content: "exchange.price"
                                            }),
                                            r.a.createElement("br", null),
                                            t
                                                ? r.a.createElement(
                                                      "span",
                                                      {
                                                          className:
                                                              "header-sub-title"
                                                      },
                                                      "(",
                                                      r.a.createElement(f.a, {
                                                          name: t
                                                      }),
                                                      "/",
                                                      r.a.createElement(f.a, {
                                                          name: a
                                                      }),
                                                      ")"
                                                  )
                                                : null
                                        ),
                                        r.a.createElement(
                                            "th",
                                            {style: {textAlign: "right"}},
                                            r.a.createElement(m.a, {
                                                content: "transfer.amount"
                                            }),
                                            r.a.createElement("br", null),
                                            a
                                                ? r.a.createElement(
                                                      "span",
                                                      {
                                                          className:
                                                              "header-sub-title"
                                                      },
                                                      "(",
                                                      r.a.createElement(f.a, {
                                                          name: a
                                                      }),
                                                      ")"
                                                  )
                                                : null
                                        ),
                                        r.a.createElement(
                                            "th",
                                            {style: {textAlign: "right"}},
                                            r.a.createElement(m.a, {
                                                content:
                                                    "transaction.settlement_date"
                                            }),
                                            r.a.createElement("br", null),
                                            r.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        visibility: "hidden"
                                                    },
                                                    className:
                                                        "header-sub-title"
                                                },
                                                "d"
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })().defaultProps = {quoteSymbol: null, baseSymbol: null};
            var k = (function(e) {
                function t() {
                    return (
                        y(this, t),
                        E(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, r.a.Component),
                    _(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.base,
                                    a = e.quote,
                                    n = e.order,
                                    o = e.showSymbols,
                                    s =
                                        "1.3.0" == t.get("id")
                                            ? n.getPrice() /
                                              (1 + n.offset_percent / 1e4)
                                            : n.getPrice() *
                                              (1 + n.offset_percent / 1e4),
                                    i = o ? " " + a.get("symbol") : null;
                                return r.a.createElement(
                                    "tr",
                                    {style: {paddingRight: 5}},
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            }
                                        },
                                        d.a.format_number(
                                            s,
                                            a.get("precision")
                                        ),
                                        " ",
                                        i
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            }
                                        },
                                        d.a.format_number(
                                            n[
                                                n.isBid()
                                                    ? "amountToReceive"
                                                    : "amountForSale"
                                            ]().getAmount({real: !0}),
                                            a.get("precision")
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            }
                                        },
                                        d.a.format_number(
                                            n[
                                                n.isBid()
                                                    ? "amountForSale"
                                                    : "amountToReceive"
                                            ]().getAmount({real: !0}),
                                            t.get("precision")
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {
                                                textAlign: "right",
                                                width: "25%"
                                            },
                                            className: "tooltip",
                                            "data-tip": new Date(
                                                n.settlement_date
                                            )
                                        },
                                        c.a.localize(
                                            new Date(n.settlement_date),
                                            {
                                                type: "date",
                                                format:
                                                    -1 !==
                                                    g()()
                                                        .toLowerCase()
                                                        .indexOf("en-us")
                                                        ? "market_history_us"
                                                        : "market_history"
                                            }
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            k.defaultProps = {showSymbols: !1, invert: !1};
            var O = (function(e) {
                function t() {
                    return (
                        y(this, t),
                        E(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, r.a.Component),
                    _(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.currentAccount !==
                                        this.props.currentAccount ||
                                    e.orders !== this.props.orders
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.orders,
                                    a = e.base,
                                    n = e.quote,
                                    o = null;
                                if (!(t.size > 0 && a && n)) return null;
                                var s = 0;
                                return (
                                    (o = t
                                        .sort(function(e, t) {
                                            return e.isBefore(t) ? -1 : 1;
                                        })
                                        .map(function(e) {
                                            return Date.now() <
                                                e.settlement_date
                                                ? r.a.createElement(k, {
                                                      key: s++,
                                                      order: e,
                                                      base: a,
                                                      quote: n
                                                  })
                                                : null;
                                        })
                                        .toArray()),
                                    r.a.createElement(
                                        v.a,
                                        {
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        o
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (O.defaultProps = {
                base: {},
                quote: {},
                orders: {},
                quoteSymbol: "",
                baseSymbol: ""
            }),
                (O.propTypes = {
                    base: s.a.object.isRequired,
                    quote: s.a.object.isRequired,
                    orders: s.a.object.isRequired,
                    quoteSymbol: s.a.string.isRequired,
                    baseSymbol: s.a.string.isRequired
                });
            var A = O,
                C = a(149),
                x = a(10),
                N = a(9),
                S = a.n(N),
                P = a(12),
                j = a(4),
                T = a(18),
                I = a(139),
                q = a(321),
                D = a(64),
                L = a(45),
                R = a.n(L);
            a.d(t, "b", function() {
                return H;
            }),
                a.d(t, "c", function() {
                    return z;
                }),
                a.d(t, "a", function() {
                    return J;
                });
            var M = (function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t;
                };
            })();
            function F(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function B(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function V(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function W(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var U = {textAlign: "left"},
                z = (function(e) {
                    function t() {
                        return (
                            B(this, t),
                            V(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        W(t, r.a.Component),
                        M(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.baseSymbol,
                                        a = e.quoteSymbol,
                                        n = e.dashboard,
                                        o = e.isMyAccount;
                                    return n
                                        ? r.a.createElement(
                                              "thead",
                                              null,
                                              r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "th",
                                                      {style: U, colSpan: "5"},
                                                      r.a.createElement(m.a, {
                                                          content:
                                                              "exchange.description"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {style: U},
                                                      r.a.createElement(m.a, {
                                                          content:
                                                              "exchange.price"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {style: U},
                                                      r.a.createElement(m.a, {
                                                          content:
                                                              "exchange.price_market"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: {
                                                              textAlign: "right"
                                                          }
                                                      },
                                                      r.a.createElement(m.a, {
                                                          content:
                                                              "exchange.value"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      null,
                                                      r.a.createElement(m.a, {
                                                          content:
                                                              "account.trade"
                                                      })
                                                  ),
                                                  o
                                                      ? r.a.createElement(
                                                            "th",
                                                            {
                                                                id:
                                                                    "cancelAllOrders",
                                                                style: {
                                                                    cursor:
                                                                        "pointer"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                m.a,
                                                                {
                                                                    content:
                                                                        "wallet.cancel"
                                                                }
                                                            )
                                                        )
                                                      : null
                                              )
                                          )
                                        : r.a.createElement(
                                              "thead",
                                              null,
                                              r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: {
                                                              textAlign: this
                                                                  .props
                                                                  .leftAlign
                                                                  ? "left"
                                                                  : ""
                                                          }
                                                      },
                                                      r.a.createElement(m.a, {
                                                          className:
                                                              "header-sub-title",
                                                          content:
                                                              "exchange.price"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: this.props
                                                              .leftAlign
                                                              ? {
                                                                    textAlign:
                                                                        "left"
                                                                }
                                                              : null
                                                      },
                                                      t
                                                          ? r.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "header-sub-title"
                                                                },
                                                                r.a.createElement(
                                                                    f.a,
                                                                    {
                                                                        dataPlace:
                                                                            "top",
                                                                        name: a
                                                                    }
                                                                )
                                                            )
                                                          : null
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: this.props
                                                              .leftAlign
                                                              ? {
                                                                    textAlign:
                                                                        "left"
                                                                }
                                                              : null
                                                      },
                                                      t
                                                          ? r.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "header-sub-title"
                                                                },
                                                                r.a.createElement(
                                                                    f.a,
                                                                    {
                                                                        dataPlace:
                                                                            "top",
                                                                        name: t
                                                                    }
                                                                )
                                                            )
                                                          : null
                                                  ),
                                                  r.a.createElement(
                                                      "th",
                                                      {
                                                          style: {
                                                              textAlign: this
                                                                  .props
                                                                  .leftAlign
                                                                  ? "left"
                                                                  : ""
                                                          }
                                                      },
                                                      r.a.createElement(m.a, {
                                                          className:
                                                              "header-sub-title",
                                                          content:
                                                              "transaction.expiration"
                                                      })
                                                  ),
                                                  r.a.createElement("th", {
                                                      style: {width: "6%"}
                                                  })
                                              )
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })();
            z.defaultProps = {quoteSymbol: null, baseSymbol: null};
            var H = (function(e) {
                function t() {
                    return (
                        B(this, t),
                        V(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    W(t, r.a.Component),
                    M(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.order.for_sale !==
                                        this.props.order.for_sale ||
                                    e.order.id !== this.props.order.id ||
                                    e.quote !== this.props.quote ||
                                    e.base !== this.props.base ||
                                    e.order.market_base !==
                                        this.props.order.market_base
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.base,
                                    a = e.quote,
                                    n = e.order,
                                    o = e.showSymbols,
                                    s = e.dashboard,
                                    l = e.isMyAccount,
                                    u = e.settings,
                                    p = n.isBid(),
                                    h = n.isCall(),
                                    b = h
                                        ? "orderHistoryCall"
                                        : p
                                            ? "orderHistoryBid"
                                            : "orderHistoryAsk",
                                    g = o
                                        ? r.a.createElement(
                                              "span",
                                              null,
                                              " " +
                                                  t.get("symbol") +
                                                  "/" +
                                                  a.get("symbol")
                                          )
                                        : null,
                                    v = o ? " " + t.get("symbol") : null,
                                    _ = o ? " " + a.get("symbol") : null,
                                    y = u ? u.get("unit") : "1.3.0",
                                    E = p ? "value positive" : "value negative",
                                    w = p ? "value negative" : "value positive";
                                return s
                                    ? r.a.createElement(
                                          "tr",
                                          {key: n.id, className: "clickable"},
                                          r.a.createElement(
                                              "td",
                                              {
                                                  colSpan: "5",
                                                  style: U,
                                                  onClick: this.props.onFlip
                                              },
                                              p
                                                  ? r.a.createElement(m.a, {
                                                        content:
                                                            "exchange.buy_description",
                                                        baseAsset: d.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountToReceive"
                                                                    : "amountForSale"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            t.get("precision"),
                                                            !1
                                                        ),
                                                        quoteAsset: d.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountForSale"
                                                                    : "amountToReceive"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            a.get("precision"),
                                                            !1
                                                        ),
                                                        baseName: r.a.createElement(
                                                            f.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: E,
                                                                name: a.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        ),
                                                        quoteName: r.a.createElement(
                                                            f.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: w,
                                                                name: t.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        )
                                                    })
                                                  : r.a.createElement(m.a, {
                                                        content:
                                                            "exchange.sell_description",
                                                        baseAsset: d.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountToReceive"
                                                                    : "amountForSale"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            t.get("precision"),
                                                            !1
                                                        ),
                                                        quoteAsset: d.a.format_number(
                                                            n[
                                                                p
                                                                    ? "amountForSale"
                                                                    : "amountToReceive"
                                                            ]().getAmount({
                                                                real: !0
                                                            }),
                                                            a.get("precision"),
                                                            !1
                                                        ),
                                                        baseName: r.a.createElement(
                                                            f.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: E,
                                                                name: a.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        ),
                                                        quoteName: r.a.createElement(
                                                            f.a,
                                                            {
                                                                noTip: !0,
                                                                customClass: w,
                                                                name: t.get(
                                                                    "symbol"
                                                                )
                                                            }
                                                        )
                                                    })
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: U,
                                                  onClick: this.props.onFlip
                                              },
                                              r.a.createElement(D.a, {
                                                  base_amount: n.sellPrice()
                                                      .base.amount,
                                                  base_asset: n.sellPrice().base
                                                      .asset_id,
                                                  quote_amount: n.sellPrice()
                                                      .quote.amount,
                                                  quote_asset: n.sellPrice()
                                                      .quote.asset_id,
                                                  force_direction: t.get(
                                                      "symbol"
                                                  ),
                                                  hide_symbols: !0
                                              })
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: U,
                                                  onClick: this.props.onFlip
                                              },
                                              r.a.createElement(q.a, {
                                                  base: t.get("id"),
                                                  quote: a.get("id"),
                                                  force_direction: t.get(
                                                      "symbol"
                                                  ),
                                                  hide_symbols: !0,
                                                  hide_asset: !0
                                              })
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: {textAlign: "right"},
                                                  onClick: this.props.onFlip
                                              },
                                              r.a.createElement(I.b, {
                                                  hide_asset: !0,
                                                  amount: n
                                                      .amountForSale()
                                                      .getAmount(),
                                                  fromAsset: n.amountForSale()
                                                      .asset_id,
                                                  noDecimals: !0,
                                                  toAsset: y
                                              }),
                                              " ",
                                              r.a.createElement(f.a, {name: y})
                                          ),
                                          r.a.createElement(
                                              "td",
                                              null,
                                              r.a.createElement(
                                                  i.b,
                                                  {
                                                      to:
                                                          "/market/" +
                                                          a.get("symbol") +
                                                          "_" +
                                                          t.get("symbol")
                                                  },
                                                  r.a.createElement(P.a, {
                                                      name: "trade",
                                                      title:
                                                          "icons.trade.trade",
                                                      className: "icon-14px"
                                                  })
                                              )
                                          ),
                                          l
                                              ? r.a.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                        style: {
                                                            padding: "2px 5px"
                                                        }
                                                    },
                                                    h
                                                        ? null
                                                        : r.a.createElement(
                                                              "span",
                                                              {
                                                                  style: {
                                                                      marginRight: 0
                                                                  },
                                                                  className:
                                                                      "order-cancel"
                                                              },
                                                              r.a.createElement(
                                                                  "input",
                                                                  {
                                                                      type:
                                                                          "checkbox",
                                                                      className:
                                                                          "orderCancel",
                                                                      onChange: this
                                                                          .props
                                                                          .onCheckCancel
                                                                  }
                                                              )
                                                          )
                                                )
                                              : null
                                      )
                                    : r.a.createElement(
                                          "tr",
                                          {key: n.id},
                                          r.a.createElement(
                                              "td",
                                              {
                                                  className: b,
                                                  style: {paddingLeft: 10}
                                              },
                                              r.a.createElement(C.a, {
                                                  price: n.getPrice(),
                                                  base: t,
                                                  quote: a
                                              }),
                                              g
                                          ),
                                          r.a.createElement(
                                              "td",
                                              null,
                                              d.a.format_number(
                                                  n[
                                                      p
                                                          ? "amountToReceive"
                                                          : "amountForSale"
                                                  ]().getAmount({real: !0}),
                                                  a.get("precision")
                                              ),
                                              " ",
                                              _
                                          ),
                                          r.a.createElement(
                                              "td",
                                              null,
                                              d.a.format_number(
                                                  n[
                                                      p
                                                          ? "amountForSale"
                                                          : "amountToReceive"
                                                  ]().getAmount({real: !0}),
                                                  t.get("precision")
                                              ),
                                              " ",
                                              v
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  style: {
                                                      width: "25%",
                                                      textAlign: "right"
                                                  },
                                                  className: "tooltip",
                                                  "data-tip": new Date(
                                                      n.expiration
                                                  )
                                              },
                                              h
                                                  ? null
                                                  : c.a.localize(
                                                        new Date(n.expiration),
                                                        {
                                                            type: "date",
                                                            format:
                                                                "short_custom"
                                                        }
                                                    )
                                          ),
                                          r.a.createElement(
                                              "td",
                                              {
                                                  className: "text-center",
                                                  style: {width: "6%"}
                                              },
                                              h
                                                  ? null
                                                  : r.a.createElement(
                                                        "a",
                                                        {
                                                            style: {
                                                                marginRight: 0
                                                            },
                                                            className:
                                                                "order-cancel",
                                                            onClick: this.props
                                                                .onCancel
                                                        },
                                                        r.a.createElement(P.a, {
                                                            name:
                                                                "cross-circle",
                                                            title:
                                                                "icons.cross_circle.cancel_order",
                                                            className:
                                                                "icon-14px"
                                                        })
                                                    )
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            H.defaultProps = {showSymbols: !1};
            var J = (function(e) {
                function t(e) {
                    B(this, t);
                    var a = V(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {activeTab: e.activeTab}),
                        (a._getOrders = a._getOrders.bind(a)),
                        a
                    );
                }
                return (
                    W(t, r.a.Component),
                    M(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this.refs.container;
                                e && p.a.initialize(e);
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                var e = this.refs.container;
                                e && p.a.update(e);
                            }
                        },
                        {
                            key: "_getOrders",
                            value: function() {
                                var e,
                                    t = this.props,
                                    a = t.currentAccount,
                                    n = t.base,
                                    r = t.quote,
                                    o = t.feedPrice,
                                    s = a.get("orders"),
                                    i = a.get("call_orders"),
                                    l = n.get("id"),
                                    c = r.get("id"),
                                    u = (F((e = {}), n.get("id"), {
                                        precision: n.get("precision")
                                    }),
                                    F(e, r.get("id"), {
                                        precision: r.get("precision")
                                    }),
                                    e),
                                    p = s
                                        .toArray()
                                        .map(function(e) {
                                            var t = j.b.getObject(e);
                                            if (!t) return null;
                                            var a = t.getIn([
                                                    "sell_price",
                                                    "base",
                                                    "asset_id"
                                                ]),
                                                n = t.getIn([
                                                    "sell_price",
                                                    "quote",
                                                    "asset_id"
                                                ]);
                                            return (a === l && n === c) ||
                                                (a === c && n === l)
                                                ? new T.d(
                                                      t.toJS(),
                                                      u,
                                                      r.get("id")
                                                  )
                                                : void 0;
                                        })
                                        .filter(function(e) {
                                            return !!e;
                                        }),
                                    d = i
                                        .toArray()
                                        .map(function(e) {
                                            try {
                                                var t = j.b.getObject(e);
                                                if (!t) return null;
                                                var a = t.getIn([
                                                        "call_price",
                                                        "base",
                                                        "asset_id"
                                                    ]),
                                                    n = t.getIn([
                                                        "call_price",
                                                        "quote",
                                                        "asset_id"
                                                    ]);
                                                if (
                                                    (a === l && n === c) ||
                                                    (a === c && n === l)
                                                )
                                                    return o
                                                        ? new T.b(
                                                              t.toJS(),
                                                              u,
                                                              r.get("id"),
                                                              o
                                                          )
                                                        : null;
                                            } catch (e) {
                                                return null;
                                            }
                                        })
                                        .filter(function(e) {
                                            return !!e;
                                        })
                                        .filter(function(e) {
                                            try {
                                                return e.isMarginCalled();
                                            } catch (e) {
                                                return !1;
                                            }
                                        });
                                return p.concat(d);
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e) {
                                x.a.changeViewSetting({ordersTab: e}),
                                    this.setState({activeTab: e});
                                var t = this.refs.container;
                                (t.scrollTop = 0),
                                    p.a.update(t),
                                    setTimeout(R.a.rebuild, 1e3);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.base,
                                    n = t.quote,
                                    o = t.quoteSymbol,
                                    s = t.baseSymbol,
                                    i = t.settleOrders,
                                    l = this.state.activeTab;
                                if (!a || !n) return null;
                                var c = void 0,
                                    u = !!(
                                        a.get("bitasset_data_id") && i.size > 0
                                    ),
                                    p = !!(
                                        n.get("bitasset_data_id") && i.size > 0
                                    );
                                if (
                                    ((l && (u || p)) || (l = "my_orders"),
                                    "my_orders" == l)
                                ) {
                                    var d = this._getOrders(),
                                        h = r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "td",
                                                {
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    colSpan: "5"
                                                },
                                                r.a.createElement(m.a, {
                                                    content: "account.no_orders"
                                                })
                                            )
                                        ),
                                        b = d
                                            .filter(function(e) {
                                                return e.isBid();
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    t.getPrice() - e.getPrice()
                                                );
                                            })
                                            .map(function(t) {
                                                var o = t.getPrice();
                                                return r.a.createElement(H, {
                                                    price: o,
                                                    key: t.id,
                                                    order: t,
                                                    base: a,
                                                    quote: n,
                                                    onCancel: e.props.onCancel.bind(
                                                        e,
                                                        t.id
                                                    )
                                                });
                                            }),
                                        g = d
                                            .filter(function(e) {
                                                return !e.isBid();
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    e.getPrice() - t.getPrice()
                                                );
                                            })
                                            .map(function(t) {
                                                var o = t.getPrice();
                                                return r.a.createElement(H, {
                                                    price: o,
                                                    key: t.id,
                                                    order: t,
                                                    base: a,
                                                    quote: n,
                                                    onCancel: e.props.onCancel.bind(
                                                        e,
                                                        t.id
                                                    )
                                                });
                                            }),
                                        _ = [];
                                    g.length && (_ = _.concat(g)),
                                        b.length && (_ = _.concat(b)),
                                        _.sort(function(e, t) {
                                            return (
                                                e.props.price - t.props.price
                                            );
                                        }),
                                        (c = r.a.createElement(
                                            v.a,
                                            {
                                                component: "tbody",
                                                transitionName: "newrow"
                                            },
                                            _.length ? _ : h
                                        ));
                                }
                                l &&
                                    "open_settlement" == l &&
                                    (c = r.a.createElement(A, {
                                        key: "settle_orders",
                                        orders: i,
                                        base: a,
                                        quote: n,
                                        baseSymbol: s,
                                        quoteSymbol: o
                                    }));
                                var y = "mymarkets-header clickable",
                                    E = S()(y, {inactive: "my_orders" !== l}),
                                    w = S()(y, {
                                        inactive: "open_settlement" !== l
                                    }),
                                    k = u || p ? "50%" : "100%",
                                    O = u || p ? "inherit" : "none";
                                return r.a.createElement(
                                    "div",
                                    {
                                        style: {marginBottom: "15px"},
                                        key: "open_orders",
                                        className: this.props.className
                                    },
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "exchange-bordered small-12",
                                            style: {height: 266}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink left-orderbook-header"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {width: k},
                                                    className: E,
                                                    onClick: this._changeTab.bind(
                                                        this,
                                                        "my_orders"
                                                    )
                                                },
                                                r.a.createElement(m.a, {
                                                    content:
                                                        "exchange.my_orders"
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {display: O},
                                                    className: w,
                                                    onClick: this._changeTab.bind(
                                                        this,
                                                        "open_settlement"
                                                    )
                                                },
                                                r.a.createElement(m.a, {
                                                    content:
                                                        "exchange.settle_orders"
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink left-orderbook-header market-right-padding-only"
                                            },
                                            r.a.createElement(
                                                "table",
                                                {
                                                    className:
                                                        "table order-table text-right fixed-table market-right-padding"
                                                },
                                                "my_orders" == l
                                                    ? r.a.createElement(z, {
                                                          rightAlign: !0,
                                                          type: "sell",
                                                          baseSymbol: s,
                                                          quoteSymbol: o
                                                      })
                                                    : r.a.createElement(
                                                          "thead",
                                                          null,
                                                          r.a.createElement(
                                                              "tr",
                                                              null,
                                                              r.a.createElement(
                                                                  "th",
                                                                  null,
                                                                  r.a.createElement(
                                                                      m.a,
                                                                      {
                                                                          className:
                                                                              "header-sub-title",
                                                                          content:
                                                                              "exchange.price"
                                                                      }
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "th",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "header-sub-title"
                                                                      },
                                                                      r.a.createElement(
                                                                          f.a,
                                                                          {
                                                                              dataPlace:
                                                                                  "top",
                                                                              name: o
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "th",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "header-sub-title"
                                                                      },
                                                                      r.a.createElement(
                                                                          f.a,
                                                                          {
                                                                              dataPlace:
                                                                                  "top",
                                                                              name: s
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "th",
                                                                  null
                                                              )
                                                          )
                                                      )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "table-container grid-block market-right-padding-only no-overflow",
                                                ref: "container",
                                                style: {
                                                    overflow: "hidden",
                                                    maxHeight: 200
                                                }
                                            },
                                            r.a.createElement(
                                                "table",
                                                {
                                                    className:
                                                        "table order-table text-right fixed-table market-right-padding"
                                                },
                                                c
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (J.defaultProps = {
                base: {},
                quote: {},
                orders: {},
                quoteSymbol: "",
                baseSymbol: ""
            }),
                (J.propTypes = {
                    base: s.a.object.isRequired,
                    quote: s.a.object.isRequired,
                    orders: s.a.object.isRequired,
                    quoteSymbol: s.a.string.isRequired,
                    baseSymbol: s.a.string.isRequired
                });
        },
        351: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(1),
                s = a.n(o),
                i = a(5),
                l = a(56),
                c = a(3),
                u = a.n(c),
                p = a(43),
                d = a(77),
                h = a(4),
                m = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var f = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var a = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (a.state = {amount: 0, showError: !1}), a;
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, r.a.Component),
                    m(t, [
                        {
                            key: "onAmountChanged",
                            value: function(e) {
                                var t = e.amount,
                                    a = e.asset;
                                this.setState({amount: t, asset: a});
                            }
                        },
                        {
                            key: "getBalance",
                            value: function() {
                                var e = this,
                                    t = this.props.account.get("balances"),
                                    a = 0;
                                return (
                                    t &&
                                        t.forEach(function(t, n) {
                                            if (n == e.props.assetId) {
                                                var r = h.b.getObject(t);
                                                a = r.get("balance");
                                            }
                                        }),
                                    a
                                );
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                var e = i.a.get_asset_precision(
                                        this.state.asset.get("precision")
                                    ),
                                    t = this.state.amount.replace(/,/g, "");
                                t *= e;
                                var a = this.getBalance();
                                t <= 0 || t > a
                                    ? this.setState({showError: !0})
                                    : (this.setState({showError: !1}),
                                      d.a.reserveAsset(
                                          t,
                                          this.props.assetId,
                                          this.props.account.get("id")
                                      ),
                                      this.props.onClose());
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props.assetId;
                                return r.a.createElement(
                                    "form",
                                    {
                                        className:
                                            "grid-block vertical full-width-content"
                                    },
                                    r.a.createElement(s.a, {
                                        component: "h3",
                                        content: "modal.reserve.title"
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-container ",
                                            style: {paddingTop: "2rem"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "content-block",
                                                onClick: function() {
                                                    e.setState({showError: !1});
                                                }
                                            },
                                            r.a.createElement(p.a, {
                                                label: "modal.reserve.amount",
                                                amount: this.state.amount,
                                                onChange: this.onAmountChanged.bind(
                                                    this
                                                ),
                                                asset: t,
                                                assets: [t],
                                                display_balance: r.a.createElement(
                                                    l.a,
                                                    {
                                                        balance: this.props.account.getIn(
                                                            ["balances", t]
                                                        )
                                                    }
                                                ),
                                                tabIndex: 1
                                            })
                                        ),
                                        this.state.showError
                                            ? r.a.createElement(
                                                  "p",
                                                  {className: "errorModal"},
                                                  u.a.translate(
                                                      "exchange.invalid_amount"
                                                  )
                                              )
                                            : null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "content-block button-group"
                                            },
                                            r.a.createElement("input", {
                                                type: "submit",
                                                className: "button success",
                                                onClick: this.onSubmit.bind(
                                                    this
                                                ),
                                                value: u.a.translate(
                                                    "modal.reserve.submit"
                                                ),
                                                tabIndex: 2
                                            }),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "button",
                                                    onClick: this.props.onClose,
                                                    tabIndex: 3
                                                },
                                                u.a.translate("cancel")
                                            )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = f;
        },
        439: function(e, t, a) {
            "use strict";
            (function(e) {
                var n = a(76),
                    r = a(0),
                    o = a.n(r),
                    s = a(20),
                    i = a.n(s),
                    l = a(34),
                    c = a(1),
                    u = a.n(c),
                    p = a(18),
                    d = a(5),
                    h = a(13),
                    m = a(6),
                    f = a(24),
                    b = a(45),
                    g = a.n(b),
                    v = a(3),
                    _ = a.n(v),
                    y = a(25),
                    E = a(161),
                    w = a(12),
                    k = a(37),
                    O = a(36),
                    A = a(22),
                    C = a(4),
                    x = a(182),
                    N = a(23),
                    S =
                        Object.assign ||
                        function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a)
                                    Object.prototype.hasOwnProperty.call(
                                        a,
                                        n
                                    ) && (e[n] = a[n]);
                            }
                            return e;
                        },
                    P = (function() {
                        function e(e, t) {
                            for (var a = 0; a < t.length; a++) {
                                var n = t[a];
                                (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    "value" in n && (n.writable = !0),
                                    Object.defineProperty(e, n.key, n);
                            }
                        }
                        return function(t, a, n) {
                            return a && e(t.prototype, a), n && e(t, n), t;
                        };
                    })();
                function j(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                }
                function T(e, t) {
                    if (!e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return !t ||
                        ("object" != typeof t && "function" != typeof t)
                        ? e
                        : t;
                }
                function I(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError(
                            "Super expression must either be null or a function, not " +
                                typeof t
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })),
                        t &&
                            (Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, t)
                                : (e.__proto__ = t));
                }
                var q = (function(t) {
                    function a(e) {
                        j(this, a);
                        var t = T(
                            this,
                            (a.__proto__ || Object.getPrototypeOf(a)).call(this)
                        );
                        return (
                            (t.state = {
                                toAddress: y.a.getLast(e.walletType),
                                withdrawValue: "",
                                amountError: null,
                                symbol: e.asset.get("symbol"),
                                to_withdraw: new p.a({
                                    asset_id: e.asset.get("id"),
                                    precision: e.asset.get("precision")
                                }),
                                fee_asset_id: "1.3.0",
                                feeStatus: {},
                                loading: !1,
                                emptyAddressDeposit: !1
                            }),
                            t._validateAddress(t.state.toAddress, e),
                            (t.addDepositAddress = t.addDepositAddress.bind(t)),
                            (t._checkFeeStatus = t._checkFeeStatus.bind(t)),
                            (t._checkBalance = t._checkBalance.bind(t)),
                            (t._getCurrentBalance = t._getCurrentBalance.bind(
                                t
                            )),
                            (t._getFee = t._getFee.bind(t)),
                            (t._updateFee = Object(n.a)(
                                t._updateFee.bind(t),
                                250
                            )),
                            t
                        );
                    }
                    return (
                        I(a, x["a"]),
                        P(a, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this._getDepositAddress(),
                                        this._updateFee(),
                                        this._checkFeeStatus();
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.asset &&
                                        this.props.asset &&
                                        e.asset.get("id") !==
                                            this.props.asset.get("id") &&
                                        this.setState(
                                            {
                                                to_withdraw: new p.a({
                                                    asset_id: e.asset.get("id"),
                                                    precision: e.asset.get(
                                                        "precision"
                                                    )
                                                }),
                                                gateFee: e.asset.get("gateFee"),
                                                intermediateAccount: e.asset.get(
                                                    "intermediateAccount"
                                                ),
                                                symbol: e.asset.get("symbol"),
                                                memo: "",
                                                withdrawValue: "",
                                                receive_address: null,
                                                toAddress: y.a.getLast(
                                                    e.walletType
                                                )
                                            },
                                            this._getDepositAddress
                                        );
                                }
                            },
                            {
                                key: "_getDepositAddress",
                                value: function() {
                                    if (this.props.backingCoinType) {
                                        var e = Object(y.j)({
                                            coin:
                                                "open." +
                                                this.props.backingCoinType.toLowerCase(),
                                            account: this.props.account,
                                            stateCallback: this
                                                .addDepositAddress
                                        });
                                        e
                                            ? this.setState({
                                                  receive_address: e
                                              })
                                            : Object(y.l)(
                                                  this._getDepositObject()
                                              );
                                    }
                                }
                            },
                            {
                                key: "_getDepositObject",
                                value: function() {
                                    return {
                                        inputCoinType: this.props.backingCoinType.toLowerCase(),
                                        outputCoinType: this.props.symbol.toLowerCase(),
                                        outputAddress: this.props.sender.get(
                                            "name"
                                        ),
                                        stateCallback: this.addDepositAddress
                                    };
                                }
                            },
                            {
                                key: "requestDepositAddressLoad",
                                value: function() {
                                    this.setState({
                                        loading: !0,
                                        emptyAddressDeposit: !1
                                    }),
                                        Object(y.l)(this._getDepositObject());
                                }
                            },
                            {
                                key: "addDepositAddress",
                                value: function(e) {
                                    e.error &&
                                        ("no_address" === e.error.message
                                            ? this.setState({
                                                  emptyAddressDeposit: !0
                                              })
                                            : this.setState({
                                                  emptyAddressDeposit: !1
                                              })),
                                        this.setState({
                                            receive_address: e,
                                            loading: !1
                                        });
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    g.a.rebuild();
                                }
                            },
                            {
                                key: "onSubmit",
                                value: function(t) {
                                    if (
                                        (t.preventDefault(),
                                        0 ===
                                            this.state.to_withdraw.getAmount())
                                    )
                                        return this.setState({
                                            amountError: "transfer.errors.pos"
                                        });
                                    if (this.props.intermediateAccount) {
                                        var a = this._getFee(),
                                            n = this._getGateFee(),
                                            r = this.state.to_withdraw.clone(),
                                            o = r.clone(
                                                this._getCurrentBalance().get(
                                                    "balance"
                                                )
                                            );
                                        r.plus(n),
                                            o.lt(r) &&
                                                (r = this.state.to_withdraw.clone()),
                                            f.a.transfer(
                                                this.props.sender.get("id"),
                                                this.props.intermediateAccount,
                                                this.state.to_withdraw.getAmount(),
                                                this.state.to_withdraw.asset_id,
                                                this.props.backingCoinType.toLowerCase() +
                                                    ":" +
                                                    this.state.toAddress +
                                                    (this.state.memo
                                                        ? ":" +
                                                          new e(
                                                              this.state.memo,
                                                              "utf-8"
                                                          )
                                                        : ""),
                                                null,
                                                a.asset_id
                                            );
                                    }
                                }
                            },
                            {
                                key: "_updateAmount",
                                value: function() {
                                    var e = this._getFee(),
                                        t = this._getCurrentBalance(),
                                        a = new p.a({
                                            amount: t ? t.get("balance") : 0,
                                            asset_id: this.props.asset.get(
                                                "id"
                                            ),
                                            precision: this.props.asset.get(
                                                "precision"
                                            )
                                        });
                                    a.asset_id === e.asset_id && a.minus(e),
                                        this.state.to_withdraw.setAmount({
                                            sats: a.getAmount()
                                        }),
                                        this.setState(
                                            {
                                                withdrawValue: a.getAmount({
                                                    real: !0
                                                }),
                                                amountError: null
                                            },
                                            this._checkBalance
                                        );
                                }
                            },
                            {
                                key: "_checkFeeStatus",
                                value: function() {
                                    var e = this,
                                        t =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : this.props.sender;
                                    if (t) {
                                        var a = [
                                                "1.3.0",
                                                this.state.to_withdraw.asset_id
                                            ],
                                            n = {},
                                            r = [];
                                        a.forEach(function(a) {
                                            r.push(
                                                Object(O.b)({
                                                    accountID: t.get("id"),
                                                    feeID: a,
                                                    options: [
                                                        "price_per_kbyte"
                                                    ],
                                                    data: {
                                                        type: "memo",
                                                        content:
                                                            e.props.backingCoinType.toLowerCase() +
                                                            ":" +
                                                            e.state.toAddress +
                                                            (e.state.memo
                                                                ? ":" +
                                                                  e.state.memo
                                                                : "")
                                                    }
                                                })
                                            );
                                        }),
                                            Promise.all(r)
                                                .then(function(t) {
                                                    a.forEach(function(e, a) {
                                                        n[e] = t[a];
                                                    }),
                                                        d.a.are_equal_shallow(
                                                            e.state.feeStatus,
                                                            n
                                                        ) ||
                                                            e.setState({
                                                                feeStatus: n
                                                            }),
                                                        e._checkBalance();
                                                })
                                                .catch(function(e) {
                                                    console.error(e);
                                                });
                                    }
                                }
                            },
                            {
                                key: "_updateFee",
                                value: function() {
                                    var e = this,
                                        t =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : this.state.fee_asset_id;
                                    if (!this.props.sender) return null;
                                    Object(O.b)({
                                        accountID: this.props.sender.get("id"),
                                        feeID: t,
                                        options: ["price_per_kbyte"],
                                        data: {
                                            type: "memo",
                                            content:
                                                this.props.backingCoinType.toLowerCase() +
                                                ":" +
                                                this.state.toAddress +
                                                (this.state.memo
                                                    ? ":" + this.state.memo
                                                    : "")
                                        }
                                    }).then(function(t) {
                                        var a = t.fee,
                                            n = t.hasBalance,
                                            r = t.hasPoolBalance;
                                        e.setState(
                                            {
                                                feeAmount: a,
                                                hasBalance: n,
                                                hasPoolBalance: r,
                                                error: !n || !r
                                            },
                                            e._checkFeeStatus
                                        );
                                    });
                                }
                            },
                            {
                                key: "_getCurrentBalance",
                                value: function() {
                                    var e = this;
                                    return this.props.balances.find(function(
                                        t
                                    ) {
                                        return (
                                            t &&
                                            t.get("asset_type") ===
                                                e.props.asset.get("id")
                                        );
                                    });
                                }
                            },
                            {
                                key: "_checkBalance",
                                value: function() {
                                    var e = this.state,
                                        t = e.feeAmount,
                                        a = e.to_withdraw,
                                        n = this.props.asset,
                                        r = this._getCurrentBalance();
                                    if (r && t) {
                                        var o = Object(O.a)(
                                            a.getAmount({real: !0}),
                                            n,
                                            this._getFee(),
                                            r,
                                            this._getGateFee()
                                        );
                                        if (null !== o)
                                            return (
                                                this.state.balanceError !==
                                                    !o &&
                                                    this.setState({
                                                        balanceError: !o
                                                    }),
                                                o
                                            );
                                    }
                                }
                            },
                            {
                                key: "_getFee",
                                value: function() {
                                    var e = {
                                        getAmount: function() {
                                            return 0;
                                        },
                                        asset_id: this.state.fee_asset_id
                                    };
                                    if (
                                        !this.state.feeStatus ||
                                        !this.state.feeAmount
                                    )
                                        return e;
                                    var t = this.state.feeStatus["1.3.0"],
                                        a = this.state.feeStatus[
                                            this.state.to_withdraw.asset_id
                                        ];
                                    return t && t.hasBalance
                                        ? t.fee
                                        : t &&
                                          !t.hasBalance &&
                                          a &&
                                          a.hasBalance
                                            ? a.fee
                                            : t
                                                ? t.fee
                                                : e;
                                }
                            },
                            {
                                key: "_onInputAmount",
                                value: function(e) {
                                    try {
                                        this.state.to_withdraw.setAmount({
                                            real: parseFloat(
                                                e.target.value || 0
                                            )
                                        }),
                                            this.setState(
                                                {
                                                    withdrawValue:
                                                        e.target.value,
                                                    amountError: null
                                                },
                                                this._checkBalance
                                            );
                                    } catch (e) {
                                        console.error("err:", e);
                                    }
                                }
                            },
                            {
                                key: "_onInputTo",
                                value: function(e) {
                                    var t = e.target.value.trim();
                                    this.setState({
                                        withdraw_address_check_in_progress: !0,
                                        withdraw_address_selected: t,
                                        validAddress: null,
                                        toAddress: t
                                    }),
                                        this._validateAddress(t);
                                }
                            },
                            {
                                key: "_onMemoChanged",
                                value: function(e) {
                                    this.setState(
                                        {memo: e.target.value},
                                        this._updateFee
                                    );
                                }
                            },
                            {
                                key: "_validateAddress",
                                value: function(e) {
                                    var t = this,
                                        a =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : this.props;
                                    Object(y.m)({
                                        url: N.e.BASE,
                                        walletType: a.walletType,
                                        newAddress: e
                                    })
                                        .then(function(a) {
                                            t.state.toAddress === e &&
                                                t.setState({
                                                    withdraw_address_check_in_progress: !1,
                                                    validAddress: !!a
                                                });
                                        })
                                        .catch(function(e) {
                                            console.error(
                                                "Error when validating address:",
                                                e
                                            );
                                        });
                                }
                            },
                            {
                                key: "_openRegistrarSite",
                                value: function(e) {
                                    e.preventDefault(),
                                        (window.open(
                                            SettingsStore.site_registr,
                                            "_blank"
                                        ).opener = null);
                                }
                            },
                            {
                                key: "_getGateFee",
                                value: function() {
                                    var e = this.props,
                                        t = e.gateFee,
                                        a = e.asset;
                                    return new p.a({
                                        real: parseFloat(
                                            t ? t.replace(",", "") : 0
                                        ),
                                        asset_id: a.get("id"),
                                        precision: a.get("precision")
                                    });
                                }
                            },
                            {
                                key: "_renderWithdraw",
                                value: function() {
                                    var e = this.state.amountError,
                                        t = d.a.replaceName(this.props.asset)
                                            .name,
                                        a = 1,
                                        n = this.props.supportsMemos,
                                        r = this._getFee(),
                                        s = this._getGateFee(),
                                        i = this.state.feeStatus[r.asset_id],
                                        l = C.b.getAsset(r.asset_id),
                                        c =
                                            (i && !i.hasBalance) ||
                                            this.state.balanceError ||
                                            !this.state.toAddress ||
                                            !this.state.withdrawValue;
                                    return o.a.createElement(
                                        "div",
                                        null,
                                        o.a.createElement(
                                            "p",
                                            null,
                                            o.a.createElement(u.a, {
                                                content:
                                                    "gateway.withdraw_funds",
                                                asset: t
                                            })
                                        ),
                                        this._renderCurrentBalance(),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            o.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                _.a.translate(
                                                    "modal.withdraw.amount"
                                                )
                                            ),
                                            o.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                o.a.createElement("input", {
                                                    tabIndex: a++,
                                                    type: "number",
                                                    min: "0",
                                                    onKeyPress: this.onKeyPress.bind(
                                                        this
                                                    ),
                                                    value: this.state
                                                        .withdrawValue,
                                                    onChange: this._onInputAmount.bind(
                                                        this
                                                    )
                                                }),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            null,
                                                            t
                                                        )
                                                    )
                                                )
                                            ),
                                            e
                                                ? o.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      o.a.createElement(u.a, {
                                                          content: e
                                                      })
                                                  )
                                                : null,
                                            this.state.balanceError
                                                ? o.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      o.a.createElement(u.a, {
                                                          content:
                                                              "transfer.errors.insufficient"
                                                      })
                                                  )
                                                : null
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            o.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                _.a.translate("transfer.fee")
                                            ),
                                            o.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                o.a.createElement("input", {
                                                    type: "text",
                                                    disabled: !0,
                                                    value: r.getAmount({
                                                        real: !0
                                                    })
                                                }),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            null,
                                                            l
                                                                ? o.a.createElement(
                                                                      A.a,
                                                                      {
                                                                          name: l.get(
                                                                              "symbol"
                                                                          )
                                                                      }
                                                                  )
                                                                : null
                                                        )
                                                    )
                                                )
                                            ),
                                            i && !i.hasBalance
                                                ? o.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      o.a.createElement(u.a, {
                                                          content:
                                                              "transfer.errors.insufficient"
                                                      })
                                                  )
                                                : null
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            o.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                _.a.translate("gateway.fee")
                                            ),
                                            o.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                o.a.createElement("input", {
                                                    type: "text",
                                                    disabled: !0,
                                                    value: s.getAmount({
                                                        real: !0
                                                    })
                                                }),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            null,
                                                            o.a.createElement(
                                                                A.a,
                                                                {
                                                                    name: this.props.asset.get(
                                                                        "symbol"
                                                                    )
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            i && !i.hasBalance
                                                ? o.a.createElement(
                                                      "p",
                                                      {
                                                          className:
                                                              "has-error no-margin",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      o.a.createElement(u.a, {
                                                          content:
                                                              "transfer.errors.insufficient"
                                                      })
                                                  )
                                                : null
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            o.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                _.a.translate(
                                                    "modal.withdraw.address"
                                                )
                                            ),
                                            o.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                o.a.createElement("input", {
                                                    placeholder: _.a.translate(
                                                        "gateway.withdraw_placeholder",
                                                        {asset: t}
                                                    ),
                                                    tabIndex: a++,
                                                    type: "text",
                                                    value: this.state.toAddress,
                                                    onChange: this._onInputTo.bind(
                                                        this
                                                    )
                                                }),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "dropdown-wrapper inactive"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {
                                                                "data-place":
                                                                    "right",
                                                                "data-tip": _.a.translate(
                                                                    "tooltip.withdraw_address",
                                                                    {asset: t}
                                                                )
                                                            },
                                                            "?"
                                                        )
                                                    )
                                                )
                                            ),
                                            !this.state.validAddress &&
                                            this.state.toAddress
                                                ? o.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "has-error",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      o.a.createElement(u.a, {
                                                          content:
                                                              "gateway.valid_address",
                                                          coin_type: t
                                                      })
                                                  )
                                                : null
                                        ),
                                        n
                                            ? o.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "SimpleTrade__withdraw-row"
                                                  },
                                                  o.a.createElement(
                                                      "label",
                                                      {className: "left-label"},
                                                      _.a.translate(
                                                          "transfer.memo"
                                                      )
                                                  ),
                                                  o.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "inline-label input-wrapper"
                                                      },
                                                      o.a.createElement(
                                                          "textarea",
                                                          {
                                                              rows: "3",
                                                              value: this.state
                                                                  .memo,
                                                              tabIndex: a++,
                                                              onChange: this._onMemoChanged.bind(
                                                                  this
                                                              )
                                                          }
                                                      )
                                                  ),
                                                  !this.state.validAddress &&
                                                  this.state.toAddress
                                                      ? o.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "has-error",
                                                                style: {
                                                                    paddingTop: 10
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                u.a,
                                                                {
                                                                    content:
                                                                        "gateway.valid_address",
                                                                    coin_type: t
                                                                }
                                                            )
                                                        )
                                                      : null
                                              )
                                            : null,
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "button-group SimpleTrade__withdraw-row"
                                            },
                                            o.a.createElement(
                                                "button",
                                                {
                                                    tabIndex: a++,
                                                    className:
                                                        "button" +
                                                        (c ? " disabled" : ""),
                                                    onClick: this.onSubmit.bind(
                                                        this
                                                    ),
                                                    type: "submit"
                                                },
                                                o.a.createElement(u.a, {
                                                    content:
                                                        "gateway.withdraw_now"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "_renderDeposit",
                                value: function() {
                                    var e = this.state,
                                        t = e.receive_address,
                                        a = e.loading,
                                        n = e.emptyAddressDeposit,
                                        r = d.a.replaceName(this.props.asset)
                                            .name,
                                        s = t && "memo" in t && t.memo,
                                        i = (t && t.address) || "",
                                        l = 1;
                                    return o.a.createElement(
                                        "div",
                                        {className: i ? "" : "no-overflow"},
                                        o.a.createElement(
                                            "p",
                                            null,
                                            o.a.createElement(u.a, {
                                                unsafe: !0,
                                                content: "gateway.add_funds",
                                                account: this.props.sender.get(
                                                    "name"
                                                )
                                            })
                                        ),
                                        this._renderCurrentBalance(),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "SimpleTrade__withdraw-row"
                                            },
                                            o.a.createElement(
                                                "p",
                                                {
                                                    style: {marginBottom: 10},
                                                    "data-place": "right",
                                                    "data-tip": _.a.translate(
                                                        "tooltip.deposit_tip",
                                                        {asset: r}
                                                    )
                                                },
                                                o.a.createElement(u.a, {
                                                    className: "help-tooltip",
                                                    content:
                                                        "gateway.deposit_to",
                                                    asset: r
                                                }),
                                                ":",
                                                o.a.createElement(
                                                    "label",
                                                    {
                                                        className:
                                                            "fz_12 left-label"
                                                    },
                                                    o.a.createElement(u.a, {
                                                        content:
                                                            "gateway.deposit_notice_delay"
                                                    })
                                                )
                                            ),
                                            i
                                                ? o.a.createElement(
                                                      "label",
                                                      null,
                                                      n
                                                          ? o.a.createElement(
                                                                u.a,
                                                                {
                                                                    content:
                                                                        "gateway.please_generate_address"
                                                                }
                                                            )
                                                          : o.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "inline-label"
                                                                },
                                                                o.a.createElement(
                                                                    "input",
                                                                    {
                                                                        readOnly: !0,
                                                                        type:
                                                                            "text",
                                                                        value: i
                                                                    }
                                                                ),
                                                                o.a.createElement(
                                                                    E.a,
                                                                    {text: i}
                                                                ),
                                                                " "
                                                            )
                                                  )
                                                : o.a.createElement(k.a, {
                                                      type: "three-bounce"
                                                  }),
                                            s
                                                ? o.a.createElement(
                                                      "label",
                                                      null,
                                                      o.a.createElement(
                                                          "span",
                                                          {
                                                              className:
                                                                  "inline-label"
                                                          },
                                                          o.a.createElement(
                                                              "input",
                                                              {
                                                                  readOnly: !0,
                                                                  type: "text",
                                                                  value:
                                                                      _.a.translate(
                                                                          "transfer.memo"
                                                                      ) +
                                                                      ": " +
                                                                      t.memo
                                                              }
                                                          ),
                                                          o.a.createElement(
                                                              E.a,
                                                              {text: t.memo}
                                                          )
                                                      )
                                                  )
                                                : null,
                                            t && t.error
                                                ? o.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "has-error",
                                                          style: {
                                                              paddingTop: 10
                                                          }
                                                      },
                                                      t.error.message
                                                  )
                                                : null
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "button-group SimpleTrade__withdraw-row"
                                            },
                                            o.a.createElement(
                                                "button",
                                                {
                                                    tabIndex: l++,
                                                    className:
                                                        "button spinner-button-circle",
                                                    onClick: this.requestDepositAddressLoad.bind(
                                                        this
                                                    ),
                                                    type: "submit"
                                                },
                                                a
                                                    ? o.a.createElement(k.a, {
                                                          type: "circle"
                                                      })
                                                    : null,
                                                o.a.createElement(u.a, {
                                                    content:
                                                        "gateway.generate_new"
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "_renderCurrentBalance",
                                value: function() {
                                    var e = d.a.replaceName(this.props.asset)
                                            .name,
                                        t = "deposit" === this.props.action,
                                        a = this._getCurrentBalance(),
                                        n = a
                                            ? new p.a({
                                                  asset_id: a.get("asset_type"),
                                                  precision: this.props.asset.get(
                                                      "precision"
                                                  ),
                                                  amount: a.get("balance")
                                              })
                                            : null,
                                        r = t
                                            ? o.a.createElement(
                                                  "span",
                                                  {
                                                      style: {
                                                          border:
                                                              "2px solid black",
                                                          borderLeft: "none"
                                                      },
                                                      className: "form-label"
                                                  },
                                                  e
                                              )
                                            : o.a.createElement(
                                                  "button",
                                                  {
                                                      "data-place": "right",
                                                      "data-tip": _.a.translate(
                                                          "tooltip.withdraw_full"
                                                      ),
                                                      className: "button",
                                                      style: {
                                                          border:
                                                              "2px solid black",
                                                          borderLeft: "none"
                                                      },
                                                      onClick: this._updateAmount.bind(
                                                          this,
                                                          a
                                                              ? parseInt(
                                                                    a.get(
                                                                        "balance"
                                                                    ),
                                                                    10
                                                                )
                                                              : 0
                                                      )
                                                  },
                                                  o.a.createElement(w.a, {
                                                      name: "clippy",
                                                      title:
                                                          "icons.clippy.withdraw_full"
                                                  })
                                              );
                                    return o.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "SimpleTrade__withdraw-row",
                                            style: {fontSize: "1rem"}
                                        },
                                        o.a.createElement(
                                            "label",
                                            {style: {fontSize: "1rem"}},
                                            _.a.translate(
                                                "gateway.balance_asset",
                                                {asset: e}
                                            ),
                                            ":",
                                            o.a.createElement(
                                                "span",
                                                {className: "inline-label"},
                                                o.a.createElement("input", {
                                                    disabled: !0,
                                                    style: {
                                                        color: "black",
                                                        border:
                                                            "2px solid black",
                                                        padding: 10,
                                                        width: "100%"
                                                    },
                                                    value: n
                                                        ? n.getAmount({
                                                              real: !0
                                                          })
                                                        : 0
                                                }),
                                                r
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.asset,
                                        a = "deposit" === e.action;
                                    if (!t) return null;
                                    var n = d.a.replaceName(t).name,
                                        r = this.props.isDown
                                            ? o.a.createElement(
                                                  "div",
                                                  null,
                                                  o.a.createElement(u.a, {
                                                      className:
                                                          "txtlabel cancel",
                                                      content:
                                                          "gateway.unavailable_OPEN",
                                                      component: "p"
                                                  })
                                              )
                                            : this.props.isAvailable
                                                ? a
                                                    ? this._renderDeposit()
                                                    : this._renderWithdraw()
                                                : o.a.createElement(
                                                      "div",
                                                      null,
                                                      o.a.createElement(u.a, {
                                                          className:
                                                              "txtlabel cancel",
                                                          content:
                                                              "gateway.unavailable",
                                                          component: "p"
                                                      })
                                                  );
                                    return o.a.createElement(
                                        "div",
                                        {className: "SimpleTrade__modal"},
                                        o.a.createElement(
                                            "div",
                                            {className: "Modal__header"},
                                            o.a.createElement(
                                                "h3",
                                                null,
                                                o.a.createElement(u.a, {
                                                    content: a
                                                        ? "gateway.deposit"
                                                        : "modal.withdraw.submit"
                                                }),
                                                " ",
                                                n
                                            )
                                        ),
                                        o.a.createElement("div", {
                                            className: "Modal__divider"
                                        }),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block vertical no-overflow",
                                                style: {
                                                    zIndex: 1002,
                                                    paddingLeft: "2rem",
                                                    paddingRight: "2rem",
                                                    paddingTop: "1rem"
                                                }
                                            },
                                            r
                                        )
                                    );
                                }
                            }
                        ]),
                        a
                    );
                })();
                (q.propTypes = {
                    sender: m.a.ChainAccount.isRequired,
                    asset: m.a.ChainAsset.isRequired,
                    coreAsset: m.a.ChainAsset.isRequired,
                    globalObject: m.a.ChainAsset.isRequired
                }),
                    (q.defaultProps = {
                        coreAsset: "1.3.0",
                        globalObject: "2.0.0"
                    }),
                    (q = Object(h.a)(q));
                var D = (function(e) {
                    function t() {
                        j(this, t);
                        var e = T(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {open: !1}), e;
                    }
                    return (
                        I(t, o.a.Component),
                        P(t, [
                            {
                                key: "show",
                                value: function() {
                                    var e = this;
                                    this.setState({open: !0}, function() {
                                        i.a.publish(e.props.modalId, "open");
                                    });
                                }
                            },
                            {
                                key: "onClose",
                                value: function() {
                                    this.setState({open: !1});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this.state.open
                                        ? o.a.createElement(
                                              l.a,
                                              {
                                                  className: "test",
                                                  onClose: this.onClose.bind(
                                                      this
                                                  ),
                                                  overlay: !0,
                                                  id: this.props.modalId
                                              },
                                              this.state.open
                                                  ? o.a.createElement(
                                                        q,
                                                        S({}, this.props, {
                                                            open: this.state
                                                                .open
                                                        })
                                                    )
                                                  : null
                                          )
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })();
                t.a = D;
            }.call(this, a(29).Buffer));
        },
        440: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(20),
                s = a.n(o),
                i = a(34),
                l = a(1),
                c = a.n(l),
                u = a(18),
                p = a(5),
                d = a(13),
                h = a(6),
                m = a(45),
                f = a.n(m),
                b = a(3),
                g = a.n(b),
                v = a(25),
                _ = a(221),
                y = a(161),
                E = a(12),
                w = a(37),
                k = a(23),
                O = a(172),
                A = a(15),
                C = a(8),
                x = a(10),
                N = a(146),
                S = a.n(N),
                P =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                j = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function T(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function I(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function q(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var D = (function(e) {
                function t(e) {
                    T(this, t);
                    var a = I(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            toAddress: v.a.getLast(e.walletType),
                            withdrawValue: "",
                            amountError: null,
                            inputAmount: 0,
                            receiveLoading: !1,
                            limitLoading: !0,
                            apiError: !1
                        }),
                        a._validateAddress(a.state.toAddress, e),
                        (a.deposit_address_cache = new _.a()),
                        a
                    );
                }
                return (
                    q(t, r.a.Component),
                    j(t, [
                        {
                            key: "onClose",
                            value: function() {
                                s.a.publish(this.props.modalId, "close");
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._getDepositAddress();
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._getDepositLimit(), this._estimateOutput();
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                (e.inputCoinType === this.props.inputCoinType &&
                                    e.outputCoinType ===
                                        this.props.outputCoinType) ||
                                    (this._getDepositLimit(e),
                                    this._estimateOutput(e),
                                    this._getDepositAddress(e));
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    e.inputCoinType !==
                                        this.props.inputCoinType ||
                                    e.outputCoinType !==
                                        this.props.outputCoinType ||
                                    e.sender !== this.props.sender ||
                                    e.asset !== this.props.asset ||
                                    e.isAvailable !== this.props.isAvailable ||
                                    e.isDown !== this.props.isDown ||
                                    !p.a.are_equal_shallow(t, this.state)
                                );
                            }
                        },
                        {
                            key: "_getDepositLimit",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                this.setState({limitLoading: !0}),
                                    Object(v.k)(
                                        t.inputCoinType,
                                        t.outputCoinType
                                    )
                                        .then(function(t) {
                                            e.setState({
                                                depositLimit: t.depositLimit,
                                                limitLoading: !1
                                            });
                                        })
                                        .catch(function(t) {
                                            console.log(
                                                "deposit limit error:",
                                                t
                                            ),
                                                e.setState({
                                                    depositLimit: null,
                                                    limitLoading: !1
                                                });
                                        });
                            }
                        },
                        {
                            key: "_onAmountChange",
                            value: function(e, t) {
                                var a = new RegExp(/[[:digit:]]/),
                                    n = t.target;
                                switch (
                                    (a.test(n.value) ||
                                        (n.value = n.value.replace(
                                            /[^0-9.]/g,
                                            ""
                                        )),
                                    "." == n.value.charAt(0) &&
                                        (n.value = "0."),
                                    n.value.charAt(n.value.length) !=
                                        n.value.search(".") &&
                                        n.value.substr(1),
                                    (n.value = p.a.limitByPrecision(
                                        n.value,
                                        8
                                    )),
                                    e)
                                ) {
                                    case "input":
                                        this.setState(
                                            {inputAmount: n.value},
                                            this._estimateOutput.bind(this)
                                        );
                                        break;
                                    case "output":
                                        this.setState(
                                            {outputAmount: n.value},
                                            this._estimateInput.bind(this)
                                        );
                                }
                            }
                        },
                        {
                            key: "_estimateOutput",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                this.setState({
                                    receiveAmount: 0,
                                    sendAmount: this.state.inputAmount
                                }),
                                    this.state.inputAmount &&
                                        (this.setState({receiveLoading: !0}),
                                        Object(v.c)(
                                            this.state.inputAmount,
                                            t.inputCoinType,
                                            t.outputCoinType
                                        )
                                            .then(function(t) {
                                                e.setState({
                                                    inputAmount: t.inputAmount,
                                                    receiveAmount:
                                                        t.outputAmount,
                                                    receiveLoading: !1
                                                });
                                            })
                                            .catch(function(t) {
                                                console.log(
                                                    "receive amount err:",
                                                    t
                                                ),
                                                    e.setState({
                                                        receiveLoading: !1,
                                                        apiError: !0
                                                    });
                                            }));
                            }
                        },
                        {
                            key: "_estimateInput",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                this.setState({
                                    receiveAmount: this.state.outputAmount,
                                    sendAmount: 0
                                }),
                                    this.state.outputAmount &&
                                        (this.setState({receiveLoading: !0}),
                                        Object(v.b)(
                                            this.state.outputAmount,
                                            t.inputCoinType,
                                            t.outputCoinType
                                        )
                                            .then(function(t) {
                                                e.setState({
                                                    inputAmount: t.inputAmount,
                                                    sendAmount: p.a.limitByPrecision(
                                                        t.inputAmount,
                                                        8
                                                    ),
                                                    receiveLoading: !1
                                                });
                                            })
                                            .catch(function(t) {
                                                console.log(
                                                    "send amount err:",
                                                    t
                                                ),
                                                    e.setState({
                                                        receiveLoading: !1,
                                                        apiError: !0
                                                    });
                                            }));
                            }
                        },
                        {
                            key: "_getDepositAddress",
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props;
                                if (e.inputCoinType) {
                                    this.setState({receive_address: null}),
                                        Object(v.l)(this._getDepositObject(e));
                                }
                            }
                        },
                        {
                            key: "_getDepositObject",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props;
                                return {
                                    inputCoinType: t.inputCoinType.toLowerCase(),
                                    outputCoinType: t.outputCoinType.toLowerCase(),
                                    outputAddress: t.sender.get("name"),
                                    url: k.a.BASE,
                                    stateCallback: function(a) {
                                        e.addDepositAddress(
                                            t.inputCoinType.toLowerCase(),
                                            t.outputCoinType.toLowerCase(),
                                            t.sender.get("name"),
                                            a
                                        );
                                    }
                                };
                            }
                        },
                        {
                            key: "addDepositAddress",
                            value: function(e, t, a, n) {
                                this.deposit_address_cache.cacheInputAddress(
                                    "blocktrades",
                                    a,
                                    e,
                                    t,
                                    n.address,
                                    n.memo
                                ),
                                    this.setState({receive_address: n});
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                f.a.rebuild();
                            }
                        },
                        {
                            key: "_validateAddress",
                            value: function(e) {
                                var t = this,
                                    a =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : this.props;
                                Object(v.m)({
                                    walletType: a.walletType,
                                    newAddress: e
                                })
                                    .then(function(a) {
                                        t.state.toAddress === e &&
                                            t.setState({
                                                withdraw_address_check_in_progress: !1,
                                                validAddress: a
                                            });
                                    })
                                    .catch(function(e) {
                                        console.error(
                                            "Error when validating address:",
                                            e
                                        );
                                    });
                            }
                        },
                        {
                            key: "_openRegistrarSite",
                            value: function(e) {
                                e.preventDefault(),
                                    (window.open(
                                        C.a.site_registr,
                                        "_blank"
                                    ).opener = null);
                            }
                        },
                        {
                            key: "_onDropDownSelect",
                            value: function(e) {
                                x.a.changeViewSetting({preferredBridge: e});
                            }
                        },
                        {
                            key: "onBlockTradesContact",
                            value: function() {
                                console.log("Open New Tab"),
                                    window
                                        .open(
                                            "https://www.blocktrades.us/contact",
                                            "_blank"
                                        )
                                        .focus();
                            }
                        },
                        {
                            key: "_renderDeposit",
                            value: function() {
                                var e = p.a.replaceName(this.props.asset),
                                    t = e.name,
                                    a = e.prefix,
                                    n = this.state,
                                    o = n.receive_address,
                                    s = n.apiError,
                                    i = o && "memo" in o && o.memo,
                                    l = (o && o.address) || "",
                                    u = r.a.createElement(
                                        "div",
                                        {
                                            className: "QR",
                                            style: {textAlign: "center"}
                                        },
                                        r.a.createElement(S.a, {
                                            size: 140,
                                            value: l
                                        })
                                    ),
                                    d = Object.keys(this.props.bridges.toJS()),
                                    h = this.props.inputCoinType.toUpperCase(),
                                    m = (a || "") + t,
                                    f = (
                                        this.state.receiveAmount /
                                        this.state.inputAmount
                                    ).toFixed(4),
                                    b = m + "/" + h,
                                    v =
                                        this.state.inputAmount >
                                            parseFloat(
                                                this.state.depositLimit
                                            ) ||
                                        this.state.sendAmount >
                                            parseFloat(this.state.depositLimit),
                                    _ = v
                                        ? {border: "1px solid #a94442"}
                                        : null;
                                return r.a.createElement(
                                    "div",
                                    {className: "modal__body"},
                                    r.a.createElement(
                                        "div",
                                        {className: "container-row"},
                                        r.a.createElement(
                                            "label",
                                            {className: "left-label"},
                                            r.a.createElement(c.a, {
                                                content: "modal.buy.asset"
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-label input-wrapper"
                                            },
                                            r.a.createElement("input", {
                                                disabled: !0,
                                                type: "text",
                                                defaultValue: m
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {className: "container-row"},
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block"},
                                            r.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                r.a.createElement(c.a, {
                                                    content: "modal.buy.bridge"
                                                })
                                            ),
                                            r.a.createElement(
                                                "span",
                                                {
                                                    "data-tip": g.a.translate(
                                                        "tooltip.bridge_TRADE"
                                                    ),
                                                    className:
                                                        "inline-block tooltip",
                                                    onClick: this.onBlockTradesContact.bind(
                                                        this
                                                    )
                                                },
                                                " ",
                                                r.a.createElement(E.a, {
                                                    style: {
                                                        position: "relative",
                                                        top: 0
                                                    },
                                                    name: "question-circle",
                                                    title:
                                                        "icons.question_circle"
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-label input-wrapper"
                                            },
                                            r.a.createElement("input", {
                                                disabled: !0,
                                                type: "text",
                                                defaultValue: "BLOCKTRADES"
                                            }),
                                            " "
                                        )
                                    ),
                                    r.a.createElement(
                                        "span",
                                        {
                                            style: s
                                                ? {display: "none"}
                                                : {display: ""}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "container-row double-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "no-margin no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block"
                                                        },
                                                        r.a.createElement(
                                                            "label",
                                                            {
                                                                className:
                                                                    "left-label"
                                                            },
                                                            r.a.createElement(
                                                                c.a,
                                                                {
                                                                    content:
                                                                        "transfer.send"
                                                                }
                                                            )
                                                        ),
                                                        v
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "error-msg inline-block tooltip",
                                                                      "data-tip": g.a.translate(
                                                                          "tooltip.over_limit"
                                                                      )
                                                                  },
                                                                  r.a.createElement(
                                                                      c.a,
                                                                      {
                                                                          content:
                                                                              "gateway.over_limit"
                                                                      }
                                                                  ),
                                                                  " ",
                                                                  r.a.createElement(
                                                                      E.a,
                                                                      {
                                                                          name:
                                                                              "question-circle",
                                                                          title:
                                                                              "icons.question_circle"
                                                                      }
                                                                  )
                                                              )
                                                            : null
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                style: _,
                                                                type: "text",
                                                                value: this
                                                                    .state
                                                                    .sendAmount,
                                                                onInput: this._onAmountChange.bind(
                                                                    this,
                                                                    "input"
                                                                )
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "form-label select floating-dropdown"
                                                            },
                                                            r.a.createElement(
                                                                O.a,
                                                                {
                                                                    entries: d,
                                                                    values: d.reduce(
                                                                        function(
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            return (
                                                                                t &&
                                                                                    (e[
                                                                                        t
                                                                                    ] = t),
                                                                                e
                                                                            );
                                                                        },
                                                                        {}
                                                                    ),
                                                                    singleEntry:
                                                                        d[0],
                                                                    value:
                                                                        this
                                                                            .props
                                                                            .preferredBridge ||
                                                                        d[0],
                                                                    onChange: this
                                                                        ._onDropDownSelect,
                                                                    upperCase: !0
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {paddingLeft: 10}
                                                    },
                                                    r.a.createElement(
                                                        "label",
                                                        {
                                                            className:
                                                                "left-label"
                                                        },
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "gateway.deposit_limit"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                disabled: !0,
                                                                type: "number",
                                                                value:
                                                                    (this.state
                                                                        .depositLimit &&
                                                                        parseFloat(
                                                                            this
                                                                                .state
                                                                                .depositLimit
                                                                        ).toFixed(
                                                                            4
                                                                        )) ||
                                                                    0
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "input-right-symbol"
                                                            },
                                                            h
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "container-row double-row"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "no-margin no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    r.a.createElement(
                                                        "label",
                                                        {
                                                            className:
                                                                "left-label"
                                                        },
                                                        r.a.createElement(c.a, {
                                                            content:
                                                                "exchange.receive"
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                style: _,
                                                                type: "text",
                                                                value: this
                                                                    .state
                                                                    .receiveAmount,
                                                                onInput: this._onAmountChange.bind(
                                                                    this,
                                                                    "output"
                                                                )
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "input-right-symbol"
                                                            },
                                                            m
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: "small-6",
                                                        style: {paddingLeft: 10}
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block"
                                                        },
                                                        r.a.createElement(
                                                            "label",
                                                            {
                                                                className:
                                                                    "left-label"
                                                            },
                                                            r.a.createElement(
                                                                c.a,
                                                                {
                                                                    content:
                                                                        "exchange.price"
                                                                }
                                                            ),
                                                            "  ",
                                                            this.state
                                                                .receiveLoading
                                                                ? r.a.createElement(
                                                                      c.a,
                                                                      {
                                                                          content:
                                                                              "footer.loading"
                                                                      }
                                                                  )
                                                                : ""
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "inline-label input-wrapper"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                disabled: !0,
                                                                type: "number",
                                                                value: v ? 0 : f
                                                            }
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "input-right-symbol"
                                                            },
                                                            b
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        l
                                            ? r.a.createElement(
                                                  "div",
                                                  {className: "container-row"},
                                                  i ? null : u,
                                                  r.a.createElement(
                                                      "div",
                                                      {className: "grid-block"},
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "copyIcon"
                                                          },
                                                          r.a.createElement(
                                                              y.a,
                                                              {
                                                                  text: l,
                                                                  className:
                                                                      "copyIcon"
                                                              }
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              c.a,
                                                              {
                                                                  component:
                                                                      "div",
                                                                  style: {
                                                                      fontSize:
                                                                          "0.8rem",
                                                                      fontWeight:
                                                                          "bold",
                                                                      paddingBottom:
                                                                          "0.3rem"
                                                                  },
                                                                  content:
                                                                      "gateway.purchase_notice",
                                                                  inputAsset: h,
                                                                  outputAsset: m
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "modal__highlight"
                                                              },
                                                              l
                                                          )
                                                      )
                                                  ),
                                                  i
                                                      ? r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-block",
                                                                style: {
                                                                    marginTop:
                                                                        "10px"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "copyIcon"
                                                                },
                                                                r.a.createElement(
                                                                    y.a,
                                                                    {
                                                                        text:
                                                                            o.memo,
                                                                        className:
                                                                            "copyIcon"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                null,
                                                                r.a.createElement(
                                                                    c.a,
                                                                    {
                                                                        unsafe: !0,
                                                                        content:
                                                                            "gateway.purchase_notice_memo",
                                                                        component:
                                                                            "div",
                                                                        style: {
                                                                            fontSize:
                                                                                "0.8rem",
                                                                            fontWeight:
                                                                                "bold",
                                                                            paddingBottom:
                                                                                "0.3rem"
                                                                        }
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "modal__highlight"
                                                                    },
                                                                    o.memo
                                                                )
                                                            )
                                                        )
                                                      : null
                                              )
                                            : r.a.createElement(
                                                  "div",
                                                  {
                                                      style: {
                                                          textAlign: "center"
                                                      }
                                                  },
                                                  r.a.createElement(w.a, {
                                                      type: "three-bounce"
                                                  })
                                              ),
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "no-margin no-padding"
                                                },
                                                r.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "button primary hollow",
                                                        onClick: this.onClose.bind(
                                                            this
                                                        )
                                                    },
                                                    r.a.createElement(c.a, {
                                                        content:
                                                            "transfer.close"
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        "span",
                                        {
                                            style: s
                                                ? {display: ""}
                                                : {display: "none"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "container-row double-row"
                                            },
                                            r.a.createElement(c.a, {
                                                className: "txtlabel cancel",
                                                content:
                                                    "gateway.unavailable_TRADE",
                                                component: "h3"
                                            }),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "button primary hollow",
                                                    onClick: this.onClose.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(c.a, {
                                                    content: "transfer.close"
                                                })
                                            )
                                        )
                                    )
                                );
                            }
                        },
                        {
                            key: "_renderCurrentBalance",
                            value: function() {
                                var e = this,
                                    t = p.a.replaceName(this.props.asset).name,
                                    a = "deposit" === this.props.action,
                                    n = this.props.balances.find(function(t) {
                                        return (
                                            t &&
                                            t.get("asset_type") ===
                                                e.props.asset.get("id")
                                        );
                                    }),
                                    o = n
                                        ? new u.a({
                                              asset_id: n.get("asset_type"),
                                              precision: this.props.asset.get(
                                                  "precision"
                                              ),
                                              amount: n.get("balance")
                                          })
                                        : null,
                                    s = a
                                        ? r.a.createElement(
                                              "span",
                                              {
                                                  style: {
                                                      border: "2px solid black",
                                                      borderLeft: "none"
                                                  },
                                                  className: "form-label"
                                              },
                                              t
                                          )
                                        : r.a.createElement(
                                              "button",
                                              {
                                                  "data-place": "right",
                                                  "data-tip": g.a.translate(
                                                      "tooltip.withdraw_full"
                                                  ),
                                                  className: "button",
                                                  style: {
                                                      border: "2px solid black",
                                                      borderLeft: "none"
                                                  },
                                                  onClick: this._updateAmount.bind(
                                                      this,
                                                      n
                                                          ? parseInt(
                                                                n.get(
                                                                    "balance"
                                                                ),
                                                                10
                                                            )
                                                          : 0
                                                  )
                                              },
                                              r.a.createElement(E.a, {
                                                  name: "clippy",
                                                  title:
                                                      "icons.clippy.withdraw_full"
                                              })
                                          );
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "SimpleTrade__withdraw-row",
                                        style: {fontSize: "1rem"}
                                    },
                                    r.a.createElement(
                                        "label",
                                        {style: {fontSize: "1rem"}},
                                        g.a.translate("gateway.balance_asset", {
                                            asset: t
                                        }),
                                        ":",
                                        r.a.createElement(
                                            "span",
                                            {className: "inline-label"},
                                            r.a.createElement("input", {
                                                disabled: !0,
                                                style: {
                                                    color: "black",
                                                    border: "2px solid black",
                                                    padding: 10,
                                                    width: "100%"
                                                },
                                                value: o
                                                    ? o.getAmount({real: !0})
                                                    : 0
                                            }),
                                            s
                                        )
                                    )
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.asset
                                    ? r.a.createElement(
                                          "div",
                                          {
                                              className:
                                                  "grid-block vertical no-overflow"
                                          },
                                          r.a.createElement(
                                              "div",
                                              {className: "modal__header"},
                                              r.a.createElement(c.a, {
                                                  component: "p",
                                                  content: "modal.buy.title"
                                              })
                                          ),
                                          this.props.isDown
                                              ? r.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            textAlign: "center"
                                                        }
                                                    },
                                                    r.a.createElement(c.a, {
                                                        className:
                                                            "txtlabel cancel",
                                                        content:
                                                            "gateway.unavailable_TRADE",
                                                        component: "p"
                                                    })
                                                )
                                              : this.props.isAvailable
                                                  ? this._renderDeposit()
                                                  : r.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center"
                                                            }
                                                        },
                                                        r.a.createElement(c.a, {
                                                            className:
                                                                "txtlabel cancel",
                                                            content:
                                                                "gateway.unavailable",
                                                            component: "p"
                                                        })
                                                    )
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (D.propTypes = {
                sender: h.a.ChainAccount.isRequired,
                asset: h.a.ChainAsset.isRequired
            }),
                (D = Object(d.a)(D));
            var L = (function(e) {
                function t() {
                    return (
                        T(this, t),
                        I(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    q(t, r.a.Component),
                    j(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.preferredBridge,
                                    a = (function(e, t) {
                                        var a = {};
                                        for (var n in e)
                                            t.indexOf(n) >= 0 ||
                                                (Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    n
                                                ) &&
                                                    (a[n] = e[n]));
                                        return a;
                                    })(e, ["preferredBridge"]),
                                    n = this.props.bridges.get(
                                        this.props.preferredBridge
                                    );
                                return (
                                    n ||
                                        (t = (n = this.props.bridges.first())
                                            .inputCoinType),
                                    r.a.createElement(
                                        D,
                                        P({}, a, {preferredBridge: t}, n.toJS())
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            L = Object(A.connect)(L, {
                listenTo: function() {
                    return [C.a];
                },
                getProps: function() {
                    return {
                        preferredBridge: C.a
                            .getState()
                            .viewSettings.get("preferredBridge", "btc")
                    };
                }
            });
            var R = (function(e) {
                function t() {
                    T(this, t);
                    var e = I(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {open: !1}), e;
                }
                return (
                    q(t, r.a.Component),
                    j(t, [
                        {
                            key: "show",
                            value: function() {
                                var e = this;
                                this.setState({open: !0}, function() {
                                    s.a.publish(e.props.modalId, "open");
                                });
                            }
                        },
                        {
                            key: "onClose",
                            value: function() {
                                this.setState({open: !1});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.bridges && this.state.open
                                    ? r.a.createElement(
                                          i.a,
                                          {
                                              id: this.props.modalId,
                                              onClose: this.onClose.bind(this),
                                              overlay: !0
                                          },
                                          this.state.open
                                              ? r.a.createElement(
                                                    L,
                                                    P({}, this.props, {
                                                        open: this.state.open
                                                    })
                                                )
                                              : null
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = R;
        },
        441: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return I;
            });
            var n = a(0),
                r = a.n(n),
                o = a(1),
                s = a.n(o),
                i = a(121),
                l = a(147),
                c = a(6),
                u = a(13),
                p = a(5),
                d = a(4),
                h = a(111),
                m = a(58),
                f = a.n(m),
                b = a(3),
                g = a.n(b),
                v = a(12),
                _ = a(9),
                y = a.n(_),
                E = a(2),
                w = a.n(E),
                k = a(57),
                O = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function A(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function C(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function x(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var N = d.c.operations,
                S = {textAlign: "left"},
                P = {textAlign: "right"};
            function j(e, t) {
                return t.block_num === e.block_num
                    ? t.virtual_op - e.virtual_op
                    : t.block_num - e.block_num;
            }
            function T(e) {
                return e
                    ? '"' + e.textContent.replace(/[\s\t\r\n]/gi, " ") + '"'
                    : "";
            }
            var I = (function(e) {
                function t(e) {
                    A(this, t);
                    var a = C(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            limit: e.limit || 20,
                            csvExport: !1,
                            headerHeight: 85,
                            openFilter: !1,
                            filter: "all"
                        }),
                        (a._downloadCSV = a._downloadCSV.bind(a)),
                        (a._findActiveFilter = a._findActiveFilter.bind(a)),
                        (a._renderFilters = a._renderFilters.bind(a)),
                        a
                    );
                }
                return (
                    x(t, r.a.Component),
                    O(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                if (!this.props.fullHeight) {
                                    var e = this.refs.transactions;
                                    f.a.initialize(e), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_setHeaderHeight",
                            value: function() {
                                var e = this.refs.header.offsetHeight;
                                e !== this.state.headerHeight &&
                                    this.setState({headerHeight: e});
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                if (
                                    !p.a.are_equal_shallow(
                                        this.props.accountsList,
                                        e.accountsList
                                    )
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (this.state.headerHeight !== t.headerHeight)
                                    return !0;
                                if (this.state.openFilter !== t.openFilter)
                                    return !0;
                                if (this.state.filter !== t.filter) return !0;
                                if (
                                    this.props.customFilter &&
                                    (!p.a.are_equal_shallow(
                                        this.props.customFilter.fields,
                                        e.customFilter.fields
                                    ) ||
                                        !p.a.are_equal_shallow(
                                            this.props.customFilter.values,
                                            e.customFilter.values
                                        ))
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (
                                    t.limit !== this.state.limit ||
                                    t.csvExport !== this.state.csvExport
                                )
                                    return !0;
                                for (
                                    var a = 0;
                                    a < e.accountsList.length;
                                    ++a
                                ) {
                                    var n = e.accountsList[a],
                                        r = this.props.accountsList[a];
                                    if (
                                        n &&
                                        r &&
                                        n.get("history") !== r.get("history")
                                    )
                                        return !0;
                                }
                                return !1;
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                if (this.state.csvExport) {
                                    this.state.csvExport = !1;
                                    var e = document.getElementById(
                                            "csv_export_container"
                                        ).childNodes,
                                        t = "",
                                        a = !0,
                                        n = !1,
                                        r = void 0;
                                    try {
                                        for (
                                            var o, s = e[Symbol.iterator]();
                                            !(a = (o = s.next()).done);
                                            a = !0
                                        ) {
                                            var l = o.value.childNodes;
                                            "" !== t && (t += "\n"),
                                                (t += [
                                                    T(l[0]),
                                                    T(l[1]),
                                                    T(l[2]),
                                                    T(l[3])
                                                ].join(","));
                                        }
                                    } catch (e) {
                                        (n = !0), (r = e);
                                    } finally {
                                        try {
                                            !a && s.return && s.return();
                                        } finally {
                                            if (n) throw r;
                                        }
                                    }
                                    var c = new Blob([t], {
                                            type: "text/csv;charset=utf-8"
                                        }),
                                        u = new Date();
                                    Object(i.saveAs)(
                                        c,
                                        "btshist-" +
                                            u.getFullYear() +
                                            "-" +
                                            ("0" + (u.getMonth() + 1)).slice(
                                                -2
                                            ) +
                                            "-" +
                                            ("0" + u.getDate()).slice(-2) +
                                            "-" +
                                            ("0" + u.getHours()).slice(-2) +
                                            ("0" + u.getMinutes()).slice(-2) +
                                            ".csv"
                                    );
                                }
                                if (!this.props.fullHeight) {
                                    var p = this.refs.transactions;
                                    f.a.update(p), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_onIncreaseLimit",
                            value: function() {
                                this.setState({limit: this.state.limit + 30});
                            }
                        },
                        {
                            key: "_getHistory",
                            value: function(e, t, a) {
                                var n = [],
                                    r = new Set(),
                                    o = !0,
                                    s = !1,
                                    i = void 0;
                                try {
                                    for (
                                        var l, c = e[Symbol.iterator]();
                                        !(o = (l = c.next()).done);
                                        o = !0
                                    ) {
                                        var u = l.value;
                                        if (u) {
                                            var p = u.get("history");
                                            p &&
                                                (n = n.concat(
                                                    p
                                                        .toJS()
                                                        .filter(function(e) {
                                                            return (
                                                                !r.has(e.id) &&
                                                                r.add(e.id)
                                                            );
                                                        })
                                                ));
                                        }
                                    }
                                } catch (e) {
                                    (s = !0), (i = e);
                                } finally {
                                    try {
                                        !o && c.return && c.return();
                                    } finally {
                                        if (s) throw i;
                                    }
                                }
                                return (
                                    t &&
                                        (n = n.filter(function(e) {
                                            return e.op[0] === N[t];
                                        })),
                                    a &&
                                        (n = n.filter(function(e) {
                                            return a.fields.reduce(function(
                                                t,
                                                n
                                            ) {
                                                switch (n) {
                                                    case "asset_id":
                                                        return (
                                                            t &&
                                                            e.op[1].amount[
                                                                n
                                                            ] === a.values[n]
                                                        );
                                                    default:
                                                        return (
                                                            t &&
                                                            e.op[1][n] ===
                                                                a.values[n]
                                                        );
                                                }
                                            },
                                            !0);
                                        })),
                                    n
                                );
                            }
                        },
                        {
                            key: "_downloadCSV",
                            value: function() {
                                this.setState({csvExport: !0});
                            }
                        },
                        {
                            key: "_onChangeFilter",
                            value: function(e) {
                                this.setState({filter: e.target.value});
                            }
                        },
                        {
                            key: "_findActiveFilter",
                            value: function(e) {
                                var t = this;
                                return e.find(function(e) {
                                    return e === t.state.filter;
                                });
                            }
                        },
                        {
                            key: "_renderFilters",
                            value: function(e) {
                                var t = this,
                                    a = this._findActiveFilter(e);
                                return a
                                    ? r.a.createElement(
                                          "div",
                                          {
                                              className: y()("select", {
                                                  "is-open": this.state
                                                      .openFilter
                                              })
                                          },
                                          r.a.createElement(
                                              "span",
                                              {
                                                  className: "placeholder",
                                                  onClick: function(e) {
                                                      e.preventDefault(),
                                                          t.setState({
                                                              openFilter: !t
                                                                  .state
                                                                  .openFilter
                                                          });
                                                  }
                                              },
                                              g.a.translate(
                                                  "transaction.trxTypes." + a
                                              )
                                          ),
                                          r.a.createElement(
                                              "ul",
                                              null,
                                              e
                                                  .filter(function(e) {
                                                      return e !== a;
                                                  })
                                                  .map(function(e) {
                                                      return r.a.createElement(
                                                          "li",
                                                          {
                                                              key: "" + e,
                                                              onClick: function(
                                                                  a
                                                              ) {
                                                                  a.preventDefault(),
                                                                      t.setState(
                                                                          {
                                                                              filter: e
                                                                          }
                                                                      ),
                                                                      t.setState(
                                                                          {
                                                                              openFilter: !1
                                                                          }
                                                                      );
                                                              }
                                                          },
                                                          g.a.translate(
                                                              "transaction.trxTypes." +
                                                                  e
                                                          )
                                                      );
                                                  })
                                          )
                                      )
                                    : null;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.accountsList,
                                    n = t.compactView,
                                    o = t.filter,
                                    i = t.customFilter,
                                    c = t.style,
                                    u = (t.maxHeight, this.state),
                                    p = u.limit,
                                    d = (u.headerHeight,
                                    1 === a.length && a[0]
                                        ? a[0].get("id")
                                        : null),
                                    m = this._getHistory(
                                        a,
                                        this.props.showFilters &&
                                        "all" !== this.state.filter
                                            ? this.state.filter
                                            : o,
                                        i
                                    ).sort(j),
                                    f = m.length,
                                    b = null;
                                b = [
                                    "all",
                                    "transfer",
                                    "limit_order_create",
                                    "limit_order_cancel",
                                    "fill_order",
                                    "account_create",
                                    "account_update",
                                    "asset_create",
                                    "witness_withdraw_pay",
                                    "vesting_balance_withdraw"
                                ];
                                var _ = m.length
                                    ? m.slice(0, p).map(function(e) {
                                          return r.a.createElement(l.a, {
                                              includeOperationId: !0,
                                              operationId: e.id,
                                              style: S,
                                              key: e.id,
                                              op: e.op,
                                              result: e.result,
                                              block: e.block_num,
                                              current: d,
                                              hideFee: !0,
                                              inverted: !1,
                                              hideOpLabel: n,
                                              fullDate: !0
                                          });
                                      })
                                    : [
                                          r.a.createElement(
                                              "tr",
                                              {key: "no_recent"},
                                              r.a.createElement(
                                                  "td",
                                                  {colSpan: n ? "2" : "3"},
                                                  r.a.createElement(s.a, {
                                                      content:
                                                          "operation.no_recent"
                                                  })
                                              )
                                          )
                                      ];
                                return (
                                    ((this.props.showMore &&
                                        f > this.props.limit) ||
                                        p < f) &&
                                        _.push(
                                            r.a.createElement(
                                                "tr",
                                                {
                                                    className: "total-value",
                                                    key: "total_value"
                                                },
                                                r.a.createElement("td", {
                                                    className:
                                                        "column-hide-tiny"
                                                }),
                                                r.a.createElement("td", {
                                                    style: P
                                                }),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "center"
                                                        }
                                                    },
                                                    " ",
                                                    r.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: this._onIncreaseLimit.bind(
                                                                this
                                                            )
                                                        },
                                                        r.a.createElement(v.a, {
                                                            name:
                                                                "chevron-down",
                                                            title:
                                                                "icons.chevron_down.transactions",
                                                            className:
                                                                "icon-14px"
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    " "
                                                )
                                            )
                                        ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "recent-transactions no-overflow",
                                            style: c
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "generic-bordered-box"},
                                            this.props.dashboard
                                                ? null
                                                : r.a.createElement(
                                                      "div",
                                                      {ref: "header"},
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "block-content-header"
                                                          },
                                                          r.a.createElement(
                                                              "span",
                                                              null,
                                                              this.props.title
                                                                  ? this.props
                                                                        .title
                                                                  : r.a.createElement(
                                                                        s.a,
                                                                        {
                                                                            content:
                                                                                "account.recent"
                                                                        }
                                                                    )
                                                          )
                                                      )
                                                  ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "dashboard__actions"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "container-fluid"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "row"},
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "col-lg-3"
                                                            },
                                                            this.props
                                                                .showFilters
                                                                ? this._renderFilters(
                                                                      b
                                                                  )
                                                                : null
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "dashboard__adaptive"
                                                },
                                                r.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "dashboard__table blue-bg with-borders" +
                                                            (n
                                                                ? "compact"
                                                                : "") +
                                                            (this.props
                                                                .dashboard
                                                                ? " dashboard-table"
                                                                : "")
                                                    },
                                                    r.a.createElement(
                                                        "thead",
                                                        null,
                                                        r.a.createElement(
                                                            "tr",
                                                            null,
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: S
                                                                },
                                                                r.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.id"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: S
                                                                },
                                                                r.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.type"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: S},
                                                                r.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.info"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: S},
                                                                r.a.createElement(
                                                                    s.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.time"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        h.a,
                                                        {
                                                            component: "tbody",
                                                            transitionName:
                                                                "newrow"
                                                        },
                                                        _
                                                    )
                                                )
                                            ),
                                            f > 0
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "export-row",
                                                          style: {
                                                              marginTop: "20px"
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "a",
                                                          {
                                                              className:
                                                                  "csv-export",
                                                              href: "#",
                                                              onClick: function(
                                                                  t
                                                              ) {
                                                                  t.preventDefault(),
                                                                      e._downloadCSV();
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "img",
                                                              {
                                                                  src:
                                                                      k.csvIcon,
                                                                  alt: ""
                                                              }
                                                          ),
                                                          g.a.translate(
                                                              "transaction.csv_tip"
                                                          )
                                                      )
                                                  )
                                                : null,
                                            f > 0 &&
                                                this.state.csvExport &&
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        id:
                                                            "csv_export_container",
                                                        style: {display: "none"}
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "DATE"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "OPERATION"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "MEMO"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "AMOUNT"
                                                        )
                                                    ),
                                                    m.map(function(e) {
                                                        return r.a.createElement(
                                                            l.a,
                                                            {
                                                                key: e.id,
                                                                op: e.op,
                                                                result:
                                                                    e.result,
                                                                block:
                                                                    e.block_num,
                                                                inverted: !1,
                                                                csvExportMode: !0
                                                            }
                                                        );
                                                    })
                                                )
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (I.propTypes = {
                accountsList: c.a.ChainAccountsList.isRequired,
                compactView: w.a.bool,
                limit: w.a.number,
                maxHeight: w.a.number,
                fullHeight: w.a.bool,
                showFilters: w.a.bool
            }),
                (I.defaultProps = {
                    limit: 25,
                    maxHeight: 500,
                    fullHeight: !1,
                    showFilters: !1
                }),
                (I = Object(u.a)(I));
            var q = (function(e) {
                function t() {
                    return (
                        A(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    x(t, r.a.Component),
                    O(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "span",
                                    {className: "wrapper"},
                                    this.props.children(this.props)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (q.propTypes = {
                asset: c.a.ChainAsset.isRequired,
                to: c.a.ChainAccount.isRequired,
                fromAccount: c.a.ChainAccount.isRequired
            }),
                (q.defaultProps = {asset: "1.3.0"}),
                (q = Object(u.a)(q));
        },
        4981: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(7),
                s = a.n(o),
                i = a(1),
                l = a.n(i),
                c = a(56),
                u = a(108),
                p = a(20),
                d = a.n(p),
                h = a(34),
                m = a(6),
                f = a(13),
                b = a(5),
                g = a(86),
                v = a(16),
                _ = a(3),
                y = a.n(_),
                E = a(4),
                w = a(43),
                k = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function O(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function A(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function C(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var x = (function(e) {
                function t() {
                    O(this, t);
                    var e = A(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {amount: 0}), e;
                }
                return (
                    C(t, r.a.Component),
                    k(t, [
                        {
                            key: "onAmountChanged",
                            value: function(e) {
                                var t = e.amount;
                                e.asset;
                                this.setState({amount: t});
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function(e) {
                                e.preventDefault(),
                                    d.a.publish("settlement_modal", "close");
                                var t = b.a.get_asset_precision(
                                        this.props.asset.get("precision")
                                    ),
                                    a = this.state.amount.replace(/,/g, "");
                                a *= t;
                                var n = g.a.new_transaction();
                                return (
                                    n.add_type_operation("asset_settle", {
                                        fee: {amount: 0, asset_id: 0},
                                        account: this.props.account.get("id"),
                                        amount: {
                                            amount: a,
                                            asset_id: this.props.asset.get("id")
                                        }
                                    }),
                                    v.a
                                        .process_transaction(n, null, !0)
                                        .then(function(e) {
                                            return !0;
                                        })
                                        .catch(function(e) {
                                            return (
                                                console.error(
                                                    "asset settle error: ",
                                                    e
                                                ),
                                                !1
                                            );
                                        })
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.asset,
                                    a = e.account,
                                    n = this.state.amount;
                                if (!t) return null;
                                var o = t.get("id"),
                                    s = a.get("balances"),
                                    i = null,
                                    u = 0;
                                s &&
                                    s.forEach(function(e) {
                                        var t = E.b.getObject(e);
                                        if (!t.get("balance")) return null;
                                        t.get("asset_type") === o &&
                                            ((i = e), (u = t.get("balance")));
                                    });
                                var p = b.a.get_asset_precision(
                                        t.get("precision")
                                    ),
                                    d = n ? n.replace(/,/g, "") : 0,
                                    h =
                                        parseFloat(d) > 0 &&
                                        parseFloat(d) * p <= parseFloat(u)
                                            ? "button success"
                                            : "button disabled",
                                    m = r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(l.a, {
                                            content: "exchange.balance"
                                        }),
                                        ": ",
                                        i
                                            ? r.a.createElement(c.a, {
                                                  balance: i
                                              })
                                            : "0 " + t.get("symbol")
                                    );
                                return r.a.createElement(
                                    "form",
                                    {
                                        className:
                                            "grid-block vertical full-width-content"
                                    },
                                    r.a.createElement(l.a, {
                                        component: "h3",
                                        style: {textAlign: "center"},
                                        content: "modal.settle.title",
                                        asset: t.get("symbol")
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-container ",
                                            style: {paddingTop: "2rem"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "content-block"},
                                            r.a.createElement(w.a, {
                                                label: "modal.settle.amount",
                                                amount: n,
                                                onChange: this.onAmountChanged.bind(
                                                    this
                                                ),
                                                display_balance: m,
                                                asset: o,
                                                assets: [o],
                                                tabIndex: 1
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "content-block"},
                                            r.a.createElement("input", {
                                                type: "submit",
                                                className: h,
                                                onClick: this.onSubmit.bind(
                                                    this
                                                ),
                                                value: y.a.translate(
                                                    "modal.settle.submit"
                                                )
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (x.propTypes = {
                asset: m.a.ChainAsset.isRequired,
                account: m.a.ChainAccount.isRequired
            }),
                (x = Object(f.a)(x));
            !(function(e) {
                function t() {
                    O(this, t);
                    var e = A(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {open: !1}), e;
                }
                C(t, r.a.Component),
                    k(t, [
                        {
                            key: "show",
                            value: function() {
                                var e = this;
                                this.setState({open: !0}, function() {
                                    d.a.publish(e.props.modalId, "open");
                                });
                            }
                        },
                        {
                            key: "onClose",
                            value: function() {
                                this.setState({open: !1});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.state.open
                                    ? r.a.createElement(
                                          h.a,
                                          {
                                              id: this.props.modalId,
                                              onClose: this.onClose.bind(this),
                                              overlay: !0,
                                              ref: "settlement_modal"
                                          },
                                          r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block vertical"
                                              },
                                              r.a.createElement(x, this.props)
                                          )
                                      )
                                    : null;
                            }
                        }
                    ]);
            })();
            var N = a(139),
                S = a(79),
                P = a(50),
                j = a(15),
                T = a(31),
                I = a(45),
                q = a.n(I),
                D = a(321),
                L =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                R = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function M(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function F(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function B(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var V = (function(e) {
                function t(e) {
                    return (
                        M(this, t),
                        F(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    B(t, D["b"]),
                    R(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                q.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var s = r.get;
                                        return void 0 !== s
                                            ? s.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    e.base !== this.props.base
                                );
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                var e = this.props.marketStats;
                                return e && e.change ? e.change : 0;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.getValue(),
                                    t =
                                        0 === parseFloat(e)
                                            ? ""
                                            : parseFloat(e) < 0
                                                ? "change-down"
                                                : "change-up",
                                    a = r.a.createElement(S.b, {
                                        style: "decimal",
                                        value: e,
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    });
                                return r.a.createElement(
                                    "span",
                                    {className: "value " + t},
                                    a,
                                    "%"
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (V.defaultProps = {
                fullPrecision: !1,
                noDecimals: !1,
                hide_asset: !1
            }),
                (V = Object(P.a)(V, {
                    propNames: ["quote", "base"],
                    defaultProps: {quote: "1.3.0"}
                }));
            var W = (function(e) {
                function t() {
                    return (
                        M(this, t),
                        F(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    B(t, r.a.Component),
                    R(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    a = (function(e, t) {
                                        var a = {};
                                        for (var n in e)
                                            t.indexOf(n) >= 0 ||
                                                (Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    n
                                                ) &&
                                                    (a[n] = e[n]));
                                        return a;
                                    })(e, ["refCallback"]);
                                return r.a.createElement(V, L({}, a, {ref: t}));
                            }
                        }
                    ]),
                    t
                );
            })();
            W = Object(j.connect)(W, {
                listenTo: function() {
                    return [T.a];
                },
                getProps: function(e) {
                    return {
                        marketStats: T.a
                            .getState()
                            .allMarketStats.get(e.marketId),
                        allMarketStats: T.a.getState().allMarketStats
                    };
                }
            });
            var U = a(22),
                z = a(17),
                H = a(64),
                J = a(222),
                K = a(12),
                G = a(11),
                X = a(32),
                Y = a(2),
                Z = a.n(Y),
                Q =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                $ = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function ee(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function te(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ae(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function ne(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var re = {textAlign: "right"},
                oe = {textAlign: "left"},
                se = (function(e) {
                    function t() {
                        return (
                            te(this, t),
                            ae(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        ne(t, r.a.Component),
                        $(t, [
                            {
                                key: "_onUpdatePosition",
                                value: function(e) {
                                    e.preventDefault();
                                    var t =
                                        "cp_modal_" +
                                        this.props.object.getIn([
                                            "call_price",
                                            "quote",
                                            "asset_id"
                                        ]);
                                    this.refs[t].show();
                                }
                            },
                            {
                                key: "_onClosePosition",
                                value: function(e) {
                                    e.preventDefault();
                                    var t = g.a.new_transaction();
                                    t.add_type_operation("call_order_update", {
                                        fee: {amount: 0, asset_id: 0},
                                        funding_account: this.props.object.get(
                                            "borrower"
                                        ),
                                        delta_collateral: {
                                            amount: -this.props.object.get(
                                                "collateral"
                                            ),
                                            asset_id: this.props.object.getIn([
                                                "call_price",
                                                "base",
                                                "asset_id"
                                            ])
                                        },
                                        delta_debt: {
                                            amount: -this.props.object.get(
                                                "debt"
                                            ),
                                            asset_id: this.props.object.getIn([
                                                "call_price",
                                                "quote",
                                                "asset_id"
                                            ])
                                        }
                                    }),
                                        v.a.process_transaction(t, null, !0);
                                }
                            },
                            {
                                key: "_getBalance",
                                value: function() {
                                    var e = this.props.account,
                                        t = this.props.object.getIn([
                                            "call_price",
                                            "quote",
                                            "asset_id"
                                        ]),
                                        a = e.get("balances"),
                                        n = 0;
                                    return (
                                        a &&
                                            a.forEach(function(e, a) {
                                                if (a == t) {
                                                    var r = E.b.getObject(e);
                                                    n = r.get("balance");
                                                }
                                            }),
                                        n
                                    );
                                }
                            },
                            {
                                key: "_getFeedPrice",
                                value: function() {
                                    return this.props
                                        ? 1 /
                                              b.a.get_asset_price(
                                                  this.props.debtAsset.getIn([
                                                      "bitasset",
                                                      "current_feed",
                                                      "settlement_price",
                                                      "quote",
                                                      "amount"
                                                  ]),
                                                  this.props.collateralAsset,
                                                  this.props.debtAsset.getIn([
                                                      "bitasset",
                                                      "current_feed",
                                                      "settlement_price",
                                                      "base",
                                                      "amount"
                                                  ]),
                                                  this.props.debtAsset
                                              )
                                        : 1;
                                }
                            },
                            {
                                key: "_getCollateralRatio",
                                value: function() {
                                    var e = this.props.object.toJS();
                                    return (
                                        b.a.get_asset_amount(
                                            e.collateral,
                                            this.props.collateralAsset
                                        ) /
                                        (b.a.get_asset_amount(
                                            e.debt,
                                            this.props.debtAsset
                                        ) /
                                            this._getFeedPrice())
                                    );
                                }
                            },
                            {
                                key: "_getMR",
                                value: function() {
                                    return (
                                        this.props.debtAsset.getIn([
                                            "bitasset",
                                            "current_feed",
                                            "maintenance_collateral_ratio"
                                        ]) / 1e3
                                    );
                                }
                            },
                            {
                                key: "_getStatusClass",
                                value: function() {
                                    var e = this._getCollateralRatio(),
                                        t = this._getMR();
                                    return isNaN(e)
                                        ? null
                                        : e < t
                                            ? "danger"
                                            : e < t + 0.5
                                                ? "warning"
                                                : "";
                                }
                            },
                            {
                                key: "_getCRTip",
                                value: function() {
                                    var e = this._getStatusClass(),
                                        t = this._getMR();
                                    return e && "" !== e
                                        ? "danger" === e
                                            ? y.a.translate(
                                                  "tooltip.cr_danger",
                                                  {mr: t}
                                              )
                                            : "warning" === e
                                                ? y.a.translate(
                                                      "tooltip.cr_warning",
                                                      {mr: t}
                                                  )
                                                : null
                                        : null;
                                }
                            },
                            {
                                key: "_onNavigate",
                                value: function(e, t) {
                                    t.preventDefault(),
                                        this.context.router.push(e);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.debtAsset,
                                        a = e.collateralAsset,
                                        n = e.object.toJS(),
                                        s = this._getCollateralRatio(),
                                        i = b.a.get_asset_amount(
                                            n.debt,
                                            this.props.debtAsset
                                        ),
                                        c = this._getBalance(),
                                        p = this._getStatusClass(),
                                        d = "/asset/" + t.get("symbol"),
                                        h =
                                            "/market/" +
                                            t.get("symbol") +
                                            "_" +
                                            a.get("symbol"),
                                        m = r.a.createElement(
                                            "ul",
                                            null,
                                            r.a.createElement(
                                                "li",
                                                null,
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        href: d,
                                                        onClick: this._onNavigate.bind(
                                                            this,
                                                            d
                                                        )
                                                    },
                                                    r.a.createElement(l.a, {
                                                        content:
                                                            "account.asset_details"
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "li",
                                                null,
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        href: h,
                                                        onClick: this._onNavigate.bind(
                                                            this,
                                                            h
                                                        )
                                                    },
                                                    r.a.createElement(U.a, {
                                                        name: t.get("symbol")
                                                    }),
                                                    " :",
                                                    " ",
                                                    r.a.createElement(U.a, {
                                                        name: a.get("symbol")
                                                    })
                                                )
                                            )
                                        );
                                    return r.a.createElement(
                                        "tr",
                                        {className: "margin-row"},
                                        r.a.createElement(
                                            "td",
                                            {style: oe},
                                            r.a.createElement(
                                                G.b,
                                                {
                                                    to:
                                                        "/asset/" +
                                                        t.get("symbol")
                                                },
                                                r.a.createElement(U.a, {
                                                    noTip: !0,
                                                    name: t.get("symbol")
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {style: re},
                                            r.a.createElement(z.a, {
                                                amount: c,
                                                asset:
                                                    n.call_price.quote.asset_id,
                                                assetInfo: m,
                                                hide_asset: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {style: re},
                                            r.a.createElement(z.a, {
                                                amount: n.debt,
                                                asset:
                                                    n.call_price.quote.asset_id,
                                                assetInfo: m,
                                                hide_asset: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                style: re,
                                                className: "column-hide-medium"
                                            },
                                            r.a.createElement(z.a, {
                                                decimalOffset: 5,
                                                amount: n.collateral,
                                                asset:
                                                    n.call_price.base.asset_id
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                "data-place": "bottom",
                                                "data-tip": this._getCRTip(),
                                                className: "center-content " + p
                                            },
                                            b.a.format_number(s, 2)
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {style: re},
                                            r.a.createElement(u.a, {
                                                noTip: !0,
                                                balances: Object(o.List)(),
                                                debt: ee(
                                                    {},
                                                    t.get("id"),
                                                    n.debt
                                                ),
                                                collateral: ee(
                                                    {},
                                                    a.get("id"),
                                                    parseInt(n.collateral, 10)
                                                ),
                                                hide_asset: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                style: re,
                                                className: "column-hide-small"
                                            },
                                            r.a.createElement(H.a, {
                                                base_amount:
                                                    n.call_price.base.amount,
                                                base_asset:
                                                    n.call_price.base.asset_id,
                                                quote_amount:
                                                    n.call_price.quote.amount,
                                                quote_asset:
                                                    n.call_price.quote.asset_id,
                                                hide_symbols: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                style: re,
                                                className: "column-hide-small"
                                            },
                                            r.a.createElement(H.a, {
                                                base_amount: t.getIn([
                                                    "bitasset",
                                                    "current_feed",
                                                    "settlement_price",
                                                    "base",
                                                    "amount"
                                                ]),
                                                base_asset:
                                                    n.call_price.quote.asset_id,
                                                quote_amount: t.getIn([
                                                    "bitasset",
                                                    "current_feed",
                                                    "settlement_price",
                                                    "quote",
                                                    "amount"
                                                ]),
                                                quote_asset:
                                                    n.call_price.base.asset_id,
                                                hide_symbols: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                className:
                                                    "center-content column-hide-small",
                                                style: oe
                                            },
                                            r.a.createElement(H.a, {
                                                base_amount:
                                                    n.call_price.base.amount,
                                                base_asset:
                                                    n.call_price.base.asset_id,
                                                quote_amount:
                                                    n.call_price.quote.amount,
                                                quote_asset:
                                                    n.call_price.quote.asset_id,
                                                hide_value: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {
                                                    "data-place": "left",
                                                    "data-tip": y.a.translate(
                                                        "tooltip.update_position"
                                                    ),
                                                    style: {paddingBottom: 5}
                                                },
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        onClick: this._onUpdatePosition.bind(
                                                            this
                                                        )
                                                    },
                                                    r.a.createElement(K.a, {
                                                        name: "adjust",
                                                        title: "icons.adjust",
                                                        className:
                                                            "icon-14px rotate90"
                                                    })
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "td",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {
                                                    "data-place": "left",
                                                    "data-tip": y.a.translate(
                                                        "tooltip.close_position",
                                                        {
                                                            amount: i,
                                                            asset: t.get(
                                                                "symbol"
                                                            )
                                                        }
                                                    ),
                                                    style: {paddingBottom: 5}
                                                },
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        onClick: this._onClosePosition.bind(
                                                            this
                                                        )
                                                    },
                                                    r.a.createElement(K.a, {
                                                        name: "cross-circle",
                                                        title:
                                                            "icons.cross_circle.close_position",
                                                        className: "icon-14px"
                                                    })
                                                )
                                            ),
                                            t
                                                ? r.a.createElement(J.a, {
                                                      ref:
                                                          "cp_modal_" +
                                                          n.call_price.quote
                                                              .asset_id,
                                                      modalId:
                                                          "cp_modal_" +
                                                          n.call_price.quote
                                                              .asset_id,
                                                      quote_asset:
                                                          n.call_price.quote
                                                              .asset_id,
                                                      backing_asset: t.getIn([
                                                          "bitasset",
                                                          "options",
                                                          "short_backing_asset"
                                                      ]),
                                                      account: this.props
                                                          .account
                                                  })
                                                : null
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (se.propTypes = {
                debtAsset: m.a.ChainAsset.isRequired,
                collateralAsset: m.a.ChainAsset.isRequired
            }),
                (se.defaultProps = {tempComponent: "tr"}),
                (se.contextTypes = {router: Z.a.object}),
                (se = Object(f.a)(se));
            var ie = (function(e) {
                function t() {
                    return (
                        te(this, t),
                        ae(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, r.a.Component),
                    $(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.object,
                                    a = e.account,
                                    n = t.getIn([
                                        "call_price",
                                        "quote",
                                        "asset_id"
                                    ]),
                                    o = t.getIn([
                                        "call_price",
                                        "base",
                                        "asset_id"
                                    ]);
                                return r.a.createElement(
                                    se,
                                    Q(
                                        {
                                            debtAsset: n,
                                            collateralAsset: o,
                                            account: a
                                        },
                                        this.props
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (ie.propTypes = {object: m.a.ChainObject.isRequired}),
                (ie = Object(f.a)(ie));
            var le = (function(e) {
                function t() {
                    return (
                        te(this, t),
                        ae(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, r.a.Component),
                    $(t, [
                        {
                            key: "_onUpdatePosition",
                            value: function(e) {
                                e.preventDefault();
                                var t =
                                    "cp_modal_" +
                                    this.props.debtAsset.get("id");
                                this.refs[t].show();
                            }
                        },
                        {
                            key: "_getFeedPrice",
                            value: function() {
                                return this.props
                                    ? 1 /
                                          b.a.get_asset_price(
                                              this.props.debtAsset.getIn([
                                                  "bitasset",
                                                  "current_feed",
                                                  "settlement_price",
                                                  "quote",
                                                  "amount"
                                              ]),
                                              this.props.collateralAsset,
                                              this.props.debtAsset.getIn([
                                                  "bitasset",
                                                  "current_feed",
                                                  "settlement_price",
                                                  "base",
                                                  "amount"
                                              ]),
                                              this.props.debtAsset
                                          )
                                    : 1;
                            }
                        },
                        {
                            key: "_onNavigate",
                            value: function(e, t) {
                                t.preventDefault(), this.context.router.push(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.debtAsset,
                                    a = e.collateralAsset,
                                    n = e.account,
                                    o = t.get("id"),
                                    s = n.get("balances"),
                                    i = 0;
                                s &&
                                    s.forEach(function(e, t) {
                                        if (t == o) {
                                            var a = E.b.getObject(e);
                                            i = a.get("balance");
                                        }
                                    });
                                var c = "/asset/" + t.get("symbol"),
                                    u =
                                        "/market/" +
                                        t.get("symbol") +
                                        "_" +
                                        a.get("symbol"),
                                    p = r.a.createElement(
                                        "ul",
                                        null,
                                        r.a.createElement(
                                            "li",
                                            null,
                                            r.a.createElement(
                                                "a",
                                                {
                                                    href: c,
                                                    onClick: this._onNavigate.bind(
                                                        this,
                                                        c
                                                    )
                                                },
                                                r.a.createElement(l.a, {
                                                    content:
                                                        "account.asset_details"
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "li",
                                            null,
                                            r.a.createElement(
                                                "a",
                                                {
                                                    href: u,
                                                    onClick: this._onNavigate.bind(
                                                        this,
                                                        u
                                                    )
                                                },
                                                r.a.createElement(U.a, {
                                                    name: t.get("symbol")
                                                }),
                                                " :",
                                                " ",
                                                r.a.createElement(U.a, {
                                                    name: a.get("symbol")
                                                })
                                            )
                                        )
                                    );
                                return r.a.createElement(
                                    "tr",
                                    {className: "margin-row"},
                                    r.a.createElement(
                                        "td",
                                        {style: oe},
                                        r.a.createElement(
                                            G.b,
                                            {to: "/asset/" + t.get("symbol")},
                                            r.a.createElement(U.a, {
                                                noTip: !0,
                                                name: t.get("symbol")
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: re},
                                        r.a.createElement(z.a, {
                                            amount: i,
                                            asset: t.get("id"),
                                            assetInfo: p,
                                            hide_asset: !0
                                        })
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: re},
                                        r.a.createElement(z.a, {
                                            amount: 0,
                                            asset: t.get("id"),
                                            assetInfo: p,
                                            hide_asset: !0
                                        })
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: re,
                                            className: "column-hide-medium"
                                        },
                                        r.a.createElement(z.a, {
                                            decimalOffset: 5,
                                            amount: 0,
                                            asset: a.get("id")
                                        })
                                    ),
                                    r.a.createElement("td", null),
                                    r.a.createElement("td", {style: re}),
                                    r.a.createElement("td", {
                                        style: re,
                                        className: "column-hide-small"
                                    }),
                                    r.a.createElement("td", {
                                        style: re,
                                        className: "column-hide-small"
                                    }),
                                    r.a.createElement("td", {
                                        className:
                                            "center-content column-hide-small",
                                        style: oe
                                    }),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                "data-place": "left",
                                                "data-tip": y.a.translate(
                                                    "tooltip.update_position"
                                                ),
                                                style: {paddingBottom: 5}
                                            },
                                            r.a.createElement(
                                                "a",
                                                {
                                                    onClick: this._onUpdatePosition.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(K.a, {
                                                    name: "adjust",
                                                    title: "icons.adjust",
                                                    className:
                                                        "icon-14px rotate90"
                                                })
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        t
                                            ? r.a.createElement(J.a, {
                                                  ref:
                                                      "cp_modal_" + t.get("id"),
                                                  modalId:
                                                      "cp_modal_" + t.get("id"),
                                                  quote_asset: t.get("id"),
                                                  backing_asset: t.getIn([
                                                      "bitasset",
                                                      "options",
                                                      "short_backing_asset"
                                                  ]),
                                                  account: this.props.account
                                              })
                                            : null
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (le.propTypes = {
                debtAsset: m.a.ChainAsset.isRequired,
                collateralAsset: m.a.ChainAsset.isRequired
            }),
                (le.defaultProps = {tempComponent: "tr"}),
                (le.contextTypes = {router: Z.a.object}),
                (le = Object(f.a)(le));
            var ce = (function(e) {
                function t() {
                    return (
                        te(this, t),
                        ae(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, r.a.Component),
                    $(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.account,
                                    n = t.callOrders,
                                    o = t.bitAssets;
                                if (
                                    ((n = n.filter(function(e) {
                                        return !!e;
                                    })),
                                    !(o = o.filter(function(e) {
                                        return !!e;
                                    })).length)
                                )
                                    return null;
                                if (
                                    (n.forEach(function(e) {
                                        if (e) {
                                            var t = o.findIndex(function(t) {
                                                return (
                                                    t &&
                                                    t.get("id") ===
                                                        e.getIn([
                                                            "call_price",
                                                            "quote",
                                                            "asset_id"
                                                        ])
                                                );
                                            });
                                            -1 !== t && o.splice(t, 1);
                                        }
                                    }),
                                    !o.length)
                                )
                                    return null;
                                var s = o.map(function(t) {
                                    return r.a.createElement(
                                        le,
                                        Q(
                                            {
                                                key: t.get("id"),
                                                debtAsset: t.get("id"),
                                                collateralAsset: t.getIn([
                                                    "bitasset",
                                                    "options",
                                                    "short_backing_asset"
                                                ]),
                                                account: a
                                            },
                                            e.props
                                        )
                                    );
                                });
                                return r.a.createElement("tbody", null, s);
                            }
                        }
                    ]),
                    t
                );
            })();
            (ce.propTypes = {callOrders: m.a.ChainObjectsList}),
                (ce = Object(f.a)(ce)),
                (ce = Object(P.a)(ce, {
                    propNames: ["bitAssets"],
                    defaultProps: {
                        bitAssets: [
                            "1.3.103",
                            "1.3.113",
                            "1.3.120",
                            "1.3.121",
                            "1.3.958",
                            "1.3.1325",
                            "1.3.1362",
                            "1.3.105",
                            "1.3.106"
                        ]
                    },
                    asList: !0
                }));
            var ue = function(e) {
                    var t = e.callOrders,
                        a = e.account,
                        n = e.className,
                        o = e.children,
                        i = e.preferredUnit;
                    return r.a.createElement(
                        "div",
                        {className: "dashboard__adaptive"},
                        r.a.createElement(
                            "table",
                            {className: "dashboard__table " + n},
                            r.a.createElement(
                                "thead",
                                null,
                                r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement(
                                        "th",
                                        {style: oe},
                                        r.a.createElement(l.a, {
                                            content: "explorer.asset.title"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {style: re},
                                        r.a.createElement(l.a, {
                                            content: "exchange.balance"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {style: re},
                                        r.a.createElement(l.a, {
                                            content: "transaction.borrow_amount"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            style: re,
                                            className: "column-hide-medium"
                                        },
                                        r.a.createElement(l.a, {
                                            content: "transaction.collateral"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "tooltip inline-block",
                                                "data-place": "top",
                                                "data-tip": y.a.translate(
                                                    "tooltip.coll_ratio"
                                                )
                                            },
                                            r.a.createElement(l.a, {
                                                content: "borrow.coll_ratio"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(X.a, {
                                            noLink: !0,
                                            string: "account.total",
                                            keys: [
                                                {
                                                    type: "asset",
                                                    value: i,
                                                    arg: "asset"
                                                }
                                            ]
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            style: re,
                                            className: "column-hide-small"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "tooltip inline-block",
                                                "data-place": "top",
                                                "data-tip": y.a.translate(
                                                    "tooltip.call_price"
                                                )
                                            },
                                            r.a.createElement(l.a, {
                                                content: "exchange.call"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            style: re,
                                            className: "column-hide-small"
                                        },
                                        r.a.createElement(l.a, {
                                            content: "exchange.price"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            className: "column-hide-small",
                                            style: oe
                                        },
                                        r.a.createElement(l.a, {
                                            content: "explorer.assets.units"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(l.a, {
                                            content: "borrow.adjust_short"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(l.a, {
                                            content: "transfer.close"
                                        })
                                    )
                                )
                            ),
                            r.a.createElement(
                                "tbody",
                                null,
                                t
                                    .sort(function(e, t) {
                                        return (
                                            e.split(".")[2] - t.split(".")[2]
                                        );
                                    })
                                    .map(function(e) {
                                        return r.a.createElement(ie, {
                                            key: e,
                                            object: e,
                                            account: a
                                        });
                                    })
                            ),
                            r.a.createElement(ce, {
                                account: a,
                                callOrders: s.a.List(t)
                            }),
                            r.a.createElement("tbody", null, o)
                        )
                    );
                },
                pe = a(441),
                de = a(255),
                he = a(117),
                me = a(14),
                fe = a(201),
                be = a(40),
                ge = {
                    AccountPermission: function(e, t, a) {
                        var n = this;
                        (this.id = e.get("id")),
                            (this.weight = t),
                            (this.threshold = e.getIn([a, "weight_threshold"])),
                            (this.accounts = []),
                            (this.keys = e
                                .getIn([a, "key_auths"])
                                .map(function(e) {
                                    return new function(e) {
                                        var t = this;
                                        (this.id = e.toJS ? e.get(0) : e[0]),
                                            (this.weight = e.toJS
                                                ? e.get(1)
                                                : e[1]),
                                            (this.isAvailable = function(e) {
                                                return e.includes
                                                    ? e.includes(t.id)
                                                    : -1 !== e.indexOf(t);
                                            });
                                    }(e);
                                })
                                .toArray()),
                            (this.isAvailable = function(e) {
                                return e.includes
                                    ? e.includes(n.id)
                                    : -1 !== e.indexOf(n);
                            }),
                            (this._sumWeights = function(e) {
                                if (n.isNested() || n.isMultiSig()) {
                                    var t = n.accounts.reduce(function(t, a) {
                                        return (
                                            t +
                                            (a._sumWeights(e) ? a.weight : 0)
                                        );
                                    }, 0);
                                    return Math.floor(t / n.threshold);
                                }
                                return n.isAvailable(e) ? n.weight : 0;
                            }),
                            (this.getStatus = function(e, t) {
                                if (n.isNested()) {
                                    var a = n.accounts.reduce(function(t, a) {
                                        return t + a._sumWeights(e);
                                    }, 0);
                                    return (
                                        n.keys.length && (a += n.sumKeys(t)), a
                                    );
                                }
                                var r = n._sumWeights(e);
                                return n.isMultiSig() && (r += n.sumKeys(t)), r;
                            }),
                            (this.sumKeys = function(e) {
                                return n.keys.reduce(function(t, a) {
                                    return (
                                        t + (a.isAvailable(e) ? a.weight : 0)
                                    );
                                }, 0);
                            }),
                            (this.isNested = function() {
                                return n.accounts.length > 0;
                            }),
                            (this.isMultiSig = function() {
                                return n.keys.reduce(function(e, t) {
                                    return e || t.weight < n.threshold;
                                }, !1);
                            }),
                            (this.getMissingSigs = function(e) {
                                var t = [],
                                    a = [];
                                return (
                                    n.isNested()
                                        ? (a = n.accounts.reduce(function(
                                              t,
                                              a
                                          ) {
                                              return t.concat(
                                                  a.getMissingSigs(e)
                                              );
                                          },
                                          []))
                                        : n.isAvailable(e) || t.push(n.id),
                                    t.concat(a)
                                );
                            }),
                            (this.getMissingKeys = function(e) {
                                var t = [],
                                    a = [];
                                return (
                                    n.keys.length &&
                                        (n.isNested() || n.isMultiSig()) &&
                                        n.keys.forEach(function(a) {
                                            a.isAvailable(e) || t.push(a.id);
                                        }),
                                    n.isNested() &&
                                        (a = n.accounts.reduce(function(t, a) {
                                            return t.concat(
                                                a.getMissingKeys(e)
                                            );
                                        }, [])),
                                    t.concat(a)
                                );
                            });
                    },
                    listToIDs: function(e) {
                        var t = [];
                        return (
                            e.forEach(function(e) {
                                e && t.push(e.get ? e.get("id") : e);
                            }),
                            t
                        );
                    },
                    unravel: function(e, t) {
                        var a = this,
                            n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : 0;
                        if (n < 3) {
                            var r = E.b.getAccount(e.id);
                            r &&
                                r.getIn([t, "account_auths"]).size &&
                                r
                                    .getIn([t, "account_auths"])
                                    .forEach(function(r) {
                                        var o = E.b.getAccount(r.get(0));
                                        o &&
                                            e.accounts.push(
                                                a.unravel(
                                                    new a.AccountPermission(
                                                        o,
                                                        r.get(1),
                                                        t
                                                    ),
                                                    t,
                                                    n + 1
                                                )
                                            );
                                    });
                        }
                        return e;
                    },
                    unnest: function(e, t) {
                        var a = this,
                            n = [];
                        return (
                            e.forEach(function(e) {
                                var r = E.b.getAccount(e),
                                    o = a.unravel(
                                        new a.AccountPermission(r, null, t),
                                        t
                                    );
                                n.push(o);
                            }),
                            n
                        );
                    },
                    flatten_auths: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : s.a.List();
                        return e.size
                            ? (e.forEach(function(e) {
                                  t.includes(e.get(0)) ||
                                      (t = t.push(e.get(0)));
                              }),
                              t)
                            : t;
                    }
                },
                ve = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var _e = (function(e) {
                    function t() {
                        return (
                            (function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                            (function(e, t) {
                                if (!e)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return !t ||
                                    ("object" != typeof t &&
                                        "function" != typeof t)
                                    ? e
                                    : t;
                            })(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        (function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                        typeof t
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                t &&
                                    (Object.setPrototypeOf
                                        ? Object.setPrototypeOf(e, t)
                                        : (e.__proto__ = t));
                        })(t, r.a.Component),
                        ve(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    q.a.rebuild();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.className,
                                        a = e.children,
                                        n = e.dataTip,
                                        o = e.content;
                                    return r.a.createElement(
                                        "span",
                                        {
                                            className: "tooltip " + t,
                                            "data-html": !0,
                                            "data-tip": n || y.a.translate(o)
                                        },
                                        a
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ye = function() {
                    return r.a.createElement(
                        _e,
                        {
                            className: "error appended",
                            content:
                                "explorer.proposals.authority_depth_warning"
                        },
                        "/!\\"
                    );
                },
                Ee = function() {
                    return r.a.createElement(
                        _e,
                        {
                            className: "error appended",
                            content:
                                "explorer.proposals.children_authority_depth_warning"
                        },
                        "/!\\"
                    );
                },
                we = function() {
                    return r.a.createElement(
                        _e,
                        {
                            className: "warning",
                            content: "explorer.proposals.pending_approval"
                        },
                        r.a.createElement(l.a, {
                            content: "explorer.proposals.pending"
                        })
                    );
                },
                ke = function() {
                    return r.a.createElement(
                        _e,
                        {
                            className: "warning",
                            content: "explorer.proposals.pending_review"
                        },
                        r.a.createElement(l.a, {
                            content: "explorer.proposals.review"
                        })
                    );
                },
                Oe = function() {
                    return r.a.createElement(
                        _e,
                        {
                            className: "error",
                            content: "explorer.proposals.failed_execute"
                        },
                        r.a.createElement(l.a, {
                            content: "explorer.proposals.failed"
                        })
                    );
                },
                Ae = function(e) {
                    var t = e.onToggle,
                        a = e.expanded;
                    return r.a.createElement(
                        "a",
                        {className: "expand-button", onClick: t},
                        "[",
                        a ? "-" : "+",
                        "]"
                    );
                },
                Ce = function(e) {
                    return e.approved
                        ? r.a.createElement(K.a, {
                              name: "checkmark-circle",
                              size: "1x",
                              className: "success",
                              title: "icons.checkmark_circle.operation_succeed"
                          })
                        : r.a.createElement(K.a, {
                              name: "cross-circle",
                              size: "1x",
                              className: "error",
                              title: "icons.cross_circle.operation_failed"
                          });
                },
                xe = function(e) {
                    var t = e.available,
                        a = e.permission,
                        n = e.weight,
                        o = e.level;
                    return r.a.createElement(
                        "tbody",
                        null,
                        r.a.createElement(
                            "tr",
                            null,
                            r.a.createElement(
                                "td",
                                {colSpan: "2"},
                                r.a.createElement(Ce, {
                                    approved: a.isAvailable(t)
                                }),
                                a.id.substr(0, 20 - 4 * o),
                                "..."
                            ),
                            r.a.createElement("td", null, n)
                        )
                    );
                },
                Ne = function e(t, a) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0;
                    return (
                        n > t ||
                        (!(!a.isNested() && !a.isMultiSig()) &&
                            a.accounts.some(function(a) {
                                return e(t, a, n + 1);
                            }))
                    );
                },
                Se = function(e, t, a) {
                    return (
                        e.accounts.reduce(function(e, n) {
                            return e + (Pe(n, t, a) ? n.weight : 0);
                        }, 0) +
                        e.keys.reduce(function(e, t) {
                            return e + (t.isAvailable(a) ? t.weight : 0);
                        }, 0)
                    );
                },
                Pe = function(e, t, a) {
                    return e.isNested() || e.isMultiSig()
                        ? Se(e, t, a) >= e.threshold
                        : e.isAvailable(t);
                },
                je = function(e, t, a) {
                    return e && e.threshold > 10
                        ? b.a.get_percentage(e.getStatus(t, a), e.threshold) +
                              " / 100%"
                        : e.getStatus(t, a) + " / " + e.threshold;
                },
                Te = function(e, t) {
                    return t && t > 10 ? b.a.get_percentage(e, t) : e;
                },
                Ie =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                qe = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function De(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Le(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Re(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var Me = (function(e) {
                function t(e) {
                    De(this, t);
                    var a = Le(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (a.handleExpandToggle = function() {
                            a.setState({expanded: !a.state.expanded});
                        }),
                        (a.state = {expanded: !!e.expanded}),
                        a
                    );
                }
                return (
                    Re(t, r.a.Component),
                    qe(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.account,
                                    a = e.available,
                                    n = e.availableKeys,
                                    o = e.permission,
                                    s = e.threshold,
                                    i = e.level,
                                    l = e.maxAuthorityDepth,
                                    c = e.hideRoot,
                                    u = this.state.expanded,
                                    p = Pe(o, a, n),
                                    d = o.isNested(),
                                    h = o.isMultiSig(),
                                    m = Te(o.weight, s) || 1,
                                    f = je(o, a, n),
                                    b = i >= l,
                                    g =
                                        d || h
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      {colSpan: "2"},
                                                      r.a.createElement(Ce, {
                                                          approved: p
                                                      }),
                                                      r.a.createElement(be.a, {
                                                          subpage:
                                                              "permissions",
                                                          account: t.get("id")
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      u
                                                          ? r.a.createElement(
                                                                "span",
                                                                {
                                                                    className: p
                                                                        ? "success-text"
                                                                        : ""
                                                                },
                                                                m
                                                            )
                                                          : m &&
                                                            (m && 2 === m.length
                                                                ? "  "
                                                                : "") +
                                                                m +
                                                                " ",
                                                      r.a.createElement(Ae, {
                                                          onToggle: this
                                                              .handleExpandToggle,
                                                          expanded: u
                                                      }),
                                                      u &&
                                                          r.a.createElement(
                                                              "span",
                                                              {
                                                                  className:
                                                                      "appended"
                                                              },
                                                              "(",
                                                              f,
                                                              ")"
                                                          ),
                                                      b
                                                          ? r.a.createElement(
                                                                ye,
                                                                null
                                                            )
                                                          : Ne(l, o, i) &&
                                                            !u &&
                                                            r.a.createElement(
                                                                Ee,
                                                                null
                                                            )
                                                  )
                                              )
                                            : r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      {colSpan: "2"},
                                                      r.a.createElement(Ce, {
                                                          approved: p
                                                      }),
                                                      r.a.createElement(be.a, {
                                                          subpage:
                                                              "permissions",
                                                          account: t.get("id")
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      !d && m
                                                          ? (m && 2 === m.length
                                                                ? "  "
                                                                : "") +
                                                            m +
                                                            " "
                                                          : null
                                                  )
                                              ),
                                    v = [];
                                return (
                                    (d || h) &&
                                        u &&
                                        (o.accounts.forEach(function(e) {
                                            v.push(
                                                r.a.createElement(Fe, {
                                                    key: e.id,
                                                    account: e.id,
                                                    accounts: e.accounts,
                                                    permission: e,
                                                    available: a,
                                                    availableKeys: n,
                                                    threshold: o.threshold,
                                                    level: i + 1,
                                                    maxAuthorityDepth: l
                                                })
                                            );
                                        }),
                                        o.keys.length &&
                                            o.keys.forEach(function(e) {
                                                return v.push(
                                                    r.a.createElement(xe, {
                                                        key: e.id,
                                                        permission: e,
                                                        available: n,
                                                        level: i + (c ? 0 : 1),
                                                        weight: Te(e.weight, s)
                                                    })
                                                );
                                            })),
                                    v.length > 0
                                        ? r.a.createElement(
                                              "tbody",
                                              null,
                                              c || g,
                                              r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      {
                                                          colSpan: "3",
                                                          className:
                                                              "heading-perm"
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className: c
                                                                  ? ""
                                                                  : "table-container"
                                                          },
                                                          r.a.createElement(
                                                              "table",
                                                              null,
                                                              v
                                                          )
                                                      ),
                                                      u &&
                                                          0 === i &&
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "spacer"
                                                              }
                                                          )
                                                  )
                                              )
                                          )
                                        : r.a.createElement("tbody", null, g)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Me.propTypes = {
                account: m.a.ChainAccount.isRequired,
                accounts: m.a.ChainAccountsList,
                level: Z.a.number.isRequired
            }),
                (Me.defaultProps = {level: 0});
            var Fe = Object(f.a)(Me),
                Be = (function(e) {
                    function t(e) {
                        De(this, t);
                        var a = Le(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.handleExpandToggle = function() {
                                return a.setState({
                                    expanded: !a.state.expanded
                                });
                            }),
                            (a.state = {
                                requiredPermissions: [],
                                expanded: e.expanded
                            }),
                            (a._updateState = a._updateState.bind(a)),
                            a
                        );
                    }
                    return (
                        Re(t, r.a.Component),
                        qe(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this._updateState(),
                                        E.b.subscribe(this._updateState);
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    E.b.unsubscribe(this._updateState);
                                }
                            },
                            {
                                key: "_updateState",
                                value: function() {
                                    var e = ge.listToIDs(this.props.required),
                                        t = ge.listToIDs(this.props.available);
                                    this.setState({
                                        requiredPermissions: ge.unnest(
                                            e,
                                            this.props.type
                                        ),
                                        required: e,
                                        available: t
                                    });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = (t.type, t.added),
                                        n = t.removed,
                                        o = t.availableKeys,
                                        s = t.globalObject,
                                        i = t.reviewPeriodTime,
                                        l = t.noFail,
                                        c = this.state,
                                        u = c.requiredPermissions,
                                        p = (c.required, c.available),
                                        d = c.expanded;
                                    (p = Object(fe.a)(p)),
                                        (o = o.toJS()),
                                        a && (p.push(a), o.push(a)),
                                        n &&
                                            (-1 !== p.indexOf(n) &&
                                                p.splice(p.indexOf(n), 1),
                                            -1 !== o.indexOf(n) &&
                                                o.splice(o.indexOf(n), 1));
                                    var h = u.reduce(function(e, t) {
                                            return e + (Pe(t, p, o) ? 1 : 0);
                                        }, 0),
                                        m = u.length,
                                        f = h === m,
                                        b = f && !i && !l,
                                        g = f && i,
                                        v = s
                                            .get("parameters")
                                            .get("max_authority_depth"),
                                        _ = 1 === u.length,
                                        y = _ ? u[0] : null,
                                        E = !_ && h + " / " + m,
                                        w = u.map(function(t) {
                                            return r.a.createElement(Fe, {
                                                key: t.id,
                                                account: t.id,
                                                accounts: t.accounts,
                                                permission: t,
                                                available: p,
                                                availableKeys: o,
                                                expanded: e.props.expanded || _,
                                                level: 0,
                                                maxAuthorityDepth: v,
                                                hideRoot: _
                                            });
                                        });
                                    return r.a.createElement(
                                        "div",
                                        {className: "nested-approval-state"},
                                        r.a.createElement(
                                            "div",
                                            {className: "root-status"},
                                            b
                                                ? r.a.createElement(Oe, null)
                                                : g
                                                    ? r.a.createElement(
                                                          ke,
                                                          null
                                                      )
                                                    : r.a.createElement(
                                                          we,
                                                          null
                                                      ),
                                            " ",
                                            y
                                                ? y.threshold > 1 && je(y, p, o)
                                                : r.a.createElement(
                                                      "span",
                                                      null,
                                                      "(",
                                                      E,
                                                      ")"
                                                  ),
                                            (!y ||
                                                y.isMultiSig() ||
                                                y.isNested()) &&
                                                r.a.createElement(Ae, {
                                                    onToggle: this
                                                        .handleExpandToggle,
                                                    expanded: d
                                                }),
                                            !d &&
                                                u.some(function(e) {
                                                    return Ne(v, e, 0);
                                                }) &&
                                                r.a.createElement(Ee, null)
                                        ),
                                        d && r.a.createElement("table", null, w)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (Be.propTypes = {
                required: m.a.ChainAccountsList,
                available: m.a.ChainAccountsList
            }),
                (Be.defaultProps = {
                    type: "active",
                    added: null,
                    removed: null
                }),
                (Be = Object(f.a)(Be));
            var Ve = (function(e) {
                function t() {
                    return (
                        De(this, t),
                        Le(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    Re(t, r.a.Component),
                    qe(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.proposal,
                                    a = e.type,
                                    n = t.get("available_" + a + "_approvals"),
                                    o = t.get("available_key_approvals"),
                                    s = t.get("required_" + a + "_approvals");
                                return r.a.createElement(
                                    Be,
                                    Ie({}, this.props, {
                                        required: s,
                                        available: n,
                                        availableKeys: o,
                                        reviewPeriodTime: t.get(
                                            "review_period_time"
                                        )
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Ve.propTypes = {
                proposal: m.a.ChainObject.isRequired,
                type: Z.a.string.isRequired,
                globalObject: m.a.ChainObject.isRequired
            }),
                (Ve.defaultProps = {
                    type: "active",
                    added: null,
                    globalObject: "2.0.0"
                });
            var We = Object(f.a)(Ve),
                Ue =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                ze = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var a = [],
                                    n = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var s, i = e[Symbol.iterator]();
                                        !(n = (s = i.next()).done) &&
                                        (a.push(s.value), !t || a.length !== t);
                                        n = !0
                                    );
                                } catch (e) {
                                    (r = !0), (o = e);
                                } finally {
                                    try {
                                        !n && i.return && i.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                He = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function Je(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Ke(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Ge(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var Xe = function(e, t, a) {
                    var n = [];
                    e.forEach(function(e) {
                        n = n.concat(e.getMissingSigs(t));
                    });
                    var r = [];
                    return (
                        e.forEach(function(e) {
                            r = r.concat(e.getMissingKeys(a));
                        }),
                        [n, r]
                    );
                },
                Ye = (function(e) {
                    function t(e) {
                        Je(this, t);
                        var a = Ke(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (a.state = {
                                active: null,
                                key: null,
                                owner: null,
                                payee: null
                            }),
                            a
                        );
                    }
                    return (
                        Ge(t, r.a.Component),
                        He(t, [
                            {
                                key: "onActiveAccount",
                                value: function(e, t, a, n) {
                                    var r = {};
                                    t[n]
                                        ? ((r.key = n), (r[a] = null))
                                        : n
                                            ? ((r[a] = e[n]), (r.key = null))
                                            : ((r[a] = null), (r.key = null)),
                                        this.setState(r);
                                }
                            },
                            {
                                key: "_onProposalAction",
                                value: function(e) {
                                    var t = this,
                                        a = e.toJS(),
                                        n = this.state,
                                        r = n.active,
                                        o = (n.key,
                                        n.owner,
                                        {
                                            fee_paying_account: n.payee || r,
                                            proposal: a.id,
                                            active_approvals_to_add: [],
                                            active_approvals_to_remove: [],
                                            owner_approvals_to_add: [],
                                            owner_approvals_to_remove: [],
                                            key_approvals_to_add: [],
                                            key_approvals_to_remove: []
                                        }),
                                        s = "approve" === this.props.action,
                                        i = [];
                                    ["active", "owner", "key"].forEach(function(
                                        e
                                    ) {
                                        var n = t.state[e];
                                        if (n) {
                                            var r =
                                                -1 !==
                                                a[
                                                    "available_" +
                                                        e +
                                                        "_approvals"
                                                ].indexOf(n);
                                            ((s && !r) || (!s && r)) &&
                                                ("approve" === t.props.action
                                                    ? ((o[
                                                          e +
                                                              "_approvals_to_add"
                                                      ] = [n]),
                                                      "key" === e && i.push(n))
                                                    : "reject" ===
                                                          t.props.action &&
                                                      ((o[
                                                          e +
                                                              "_approvals_to_remove"
                                                      ] = [n]),
                                                      "key" === e &&
                                                          i.push(n)));
                                        }
                                    });
                                    var l = g.a.new_transaction();
                                    l.add_type_operation("proposal_update", o),
                                        v.a.process_transaction(l, null, !0, i),
                                        d.a.publish(
                                            this.props.modalId,
                                            "close"
                                        );
                                }
                            },
                            {
                                key: "onChangePayee",
                                value: function(e) {
                                    var t = E.b.getAccount(e);
                                    t && this.setState({payee: t.get("id")});
                                }
                            },
                            {
                                key: "onCancel",
                                value: function() {
                                    d.a.publish(this.props.modalId, "close");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.proposal,
                                        a = e.type,
                                        n = [],
                                        o = {},
                                        s = "approve" === this.props.action;
                                    this.props.accounts.length &&
                                        this.props.accounts.forEach(function(
                                            e
                                        ) {
                                            (s
                                                ? e &&
                                                  !t
                                                      .get(
                                                          "available_" +
                                                              a +
                                                              "_approvals"
                                                      )
                                                      .includes(e.get("id"))
                                                : e &&
                                                  t
                                                      .get(
                                                          "available_" +
                                                              a +
                                                              "_approvals"
                                                      )
                                                      .includes(e.get("id"))) &&
                                                ((o[e.get("name")] = e.get(
                                                    "id"
                                                )),
                                                n.push(e.get("name")));
                                        });
                                    var i = [],
                                        c = {};
                                    this.props.keys.length &&
                                        this.props.keys.forEach(function(e) {
                                            var a = me.a.isMyKey(e),
                                                n = t
                                                    .get(
                                                        "available_key_approvals"
                                                    )
                                                    .includes(e);
                                            ((a && s && !n) ||
                                                (a && !s && n)) &&
                                                ((c[e] = !0), i.push(e));
                                        });
                                    var u = me.a.getMyAccounts();
                                    return r.a.createElement(
                                        "form",
                                        {
                                            className:
                                                "grid-block vertical full-width-content"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-container"},
                                            r.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                r.a.createElement(
                                                    "h4",
                                                    null,
                                                    s
                                                        ? "Add approval"
                                                        : "Remove approval"
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "content-block",
                                                    style: {paddingRight: "20%"}
                                                },
                                                r.a.createElement(We, {
                                                    expanded: !0,
                                                    proposal: t.get("id"),
                                                    type: a,
                                                    added: s
                                                        ? this.state.key
                                                            ? this.state.key
                                                            : this.state[a] ||
                                                              null
                                                        : null,
                                                    removed: s
                                                        ? null
                                                        : this.state.key
                                                            ? this.state.key
                                                            : this.state[a] ||
                                                              null,
                                                    noFail: !0
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block full-width-content"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "full-width-content form-group"
                                                    },
                                                    r.a.createElement(l.a, {
                                                        content:
                                                            "modal.proposals.pay_with",
                                                        component: "label"
                                                    }),
                                                    r.a.createElement(he.a, {
                                                        account_names: u,
                                                        onChange: this.onChangePayee.bind(
                                                            this
                                                        )
                                                    })
                                                ),
                                                n.length || i.length
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "full-width-content form-group"
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "modal.proposals.approval_" +
                                                                      (s
                                                                          ? "add"
                                                                          : "remove"),
                                                                  component:
                                                                      "label"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              he.a,
                                                              {
                                                                  account_names: n.concat(
                                                                      i
                                                                  ),
                                                                  onChange: this.onActiveAccount.bind(
                                                                      this,
                                                                      o,
                                                                      c,
                                                                      a
                                                                  )
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                null
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                r.a.createElement("input", {
                                                    type: "submit",
                                                    className: "button",
                                                    onClick: this._onProposalAction.bind(
                                                        this,
                                                        t
                                                    ),
                                                    value: s
                                                        ? "Approve"
                                                        : "Remove"
                                                }),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        onClick: this.onCancel.bind(
                                                            this
                                                        ),
                                                        className: " button"
                                                    },
                                                    r.a.createElement(l.a, {
                                                        content:
                                                            "account.perm.cancel"
                                                    })
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (Ye.propTypes = {accounts: m.a.ChainAccountsList}),
                (Ye = Object(f.a)(Ye));
            var Ze = (function(e) {
                function t() {
                    Je(this, t);
                    var e = Ke(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e._updateState = e._updateState.bind(e)), e;
                }
                return (
                    Ge(t, r.a.Component),
                    He(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._updateState(),
                                    E.b.subscribe(this._updateState);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                E.b.unsubscribe(this._updateState);
                            }
                        },
                        {
                            key: "_updateState",
                            value: function() {
                                var e = this.props,
                                    t = e.proposal,
                                    a = (e.account,
                                    t.get("required_active_approvals").size
                                        ? "active"
                                        : "owner"),
                                    n = ge.listToIDs(
                                        t.get("required_" + a + "_approvals")
                                    ),
                                    r = ge.listToIDs(
                                        t.get("available_" + a + "_approvals")
                                    ),
                                    o = ge.listToIDs(
                                        t.get("available_key_approvals")
                                    );
                                this.setState({
                                    requiredPermissions: ge.unnest(n, a),
                                    available: r,
                                    availableKeys: o,
                                    type: a
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.action,
                                    t = this.state,
                                    a = t.requiredPermissions,
                                    n = t.available,
                                    o = t.availableKeys,
                                    s = t.type,
                                    i = Xe(a, n, o),
                                    l = ze(i, 2),
                                    c = l[0],
                                    u = l[1];
                                return r.a.createElement(
                                    Ye,
                                    Ue({}, this.props, {
                                        type: s,
                                        accounts: "approve" === e ? c : n,
                                        keys: "approve" === e ? u : o
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Ze.propTypes = {
                account: m.a.ChainAccount.isRequired,
                proposal: m.a.ChainObject.isRequired
            }),
                (Ze = Object(f.a)(Ze));
            var Qe = (function(e) {
                    function t() {
                        Je(this, t);
                        var e = Ke(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {open: !1}), e;
                    }
                    return (
                        Ge(t, r.a.Component),
                        He(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = this;
                                    d.a.subscribe(this.props.modalId, function(
                                        t,
                                        a
                                    ) {
                                        e.setState({open: "open" === a});
                                    });
                                }
                            },
                            {
                                key: "show",
                                value: function() {
                                    d.a.publish(this.props.modalId, "open");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.modalId;
                                    e.proposal;
                                    return r.a.createElement(
                                        h.a,
                                        {id: t, overlay: !0, ref: t},
                                        this.state.open
                                            ? r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block vertical"
                                                  },
                                                  r.a.createElement(
                                                      Ze,
                                                      this.props
                                                  )
                                              )
                                            : null
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                $e = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var a = [],
                                    n = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var s, i = e[Symbol.iterator]();
                                        !(n = (s = i.next()).done) &&
                                        (a.push(s.value), !t || a.length !== t);
                                        n = !0
                                    );
                                } catch (e) {
                                    (r = !0), (o = e);
                                } finally {
                                    try {
                                        !n && i.return && i.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                et = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            var tt = (function(e) {
                function t() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    var e = (function(e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.forceUpdate = e.forceUpdate.bind(e)), e;
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, n["Component"]),
                    et(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                E.b.subscribe(this.forceUpdate);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                E.b.unsubscribe(this.forceUpdate);
                            }
                        },
                        {
                            key: "_onApproveModal",
                            value: function(e, t) {
                                this.refs[e + "_" + t] &&
                                    this.refs[e + "_" + t].show();
                            }
                        },
                        {
                            key: "_canReject",
                            value: function(e) {
                                return (
                                    e.available_active_approvals.length ||
                                    e.available_owner_approvals.length ||
                                    e.available_key_approvals.length
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props.account;
                                if (!t) return null;
                                var a = [];
                                t.get("proposals").size &&
                                    t.get("proposals").forEach(function(e) {
                                        var n = E.b.getObject(e);
                                        if (n) {
                                            var r = n
                                                .get("proposed_transaction")
                                                .get("operations");
                                            a.push({
                                                operations: r,
                                                account: t,
                                                proposal: n
                                            });
                                        }
                                    });
                                var n = a
                                    .sort(function(e, t) {
                                        return b.a.sortID(
                                            e.proposal.get("id"),
                                            t.proposal.get("id"),
                                            !0
                                        );
                                    })
                                    .reduce(function(t, a, n) {
                                        var o = !1,
                                            s = a.proposal.get("id"),
                                            i = a.proposal.get(
                                                "expiration_time"
                                            ),
                                            c = a.operations
                                                .map(function(e, t) {
                                                    return (
                                                        "1.2.153124" ===
                                                            e.getIn([
                                                                1,
                                                                "to"
                                                            ]) && (o = !0),
                                                        r.a.createElement(
                                                            de.b,
                                                            {
                                                                key:
                                                                    a.proposal.get(
                                                                        "id"
                                                                    ) +
                                                                    "_operation_" +
                                                                    t,
                                                                expiration: i,
                                                                index: t,
                                                                op: e.toJS(),
                                                                inverted: !1,
                                                                hideFee: !0,
                                                                hideOpLabel: !0,
                                                                hideExpiration: !0,
                                                                hideDate: !0,
                                                                proposal: !0,
                                                                id: s
                                                            }
                                                        )
                                                    );
                                                })
                                                .toArray(),
                                            u = e._canReject(a.proposal.toJS()),
                                            p = a.proposal.get("id"),
                                            d = a.proposal.get(
                                                "required_active_approvals"
                                            ).size
                                                ? "active"
                                                : "owner";
                                        t.push(
                                            r.a.createElement(
                                                "tr",
                                                {key: p + "_id"},
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        colSpan: "4",
                                                        className:
                                                            "proposal" +
                                                            (0 === n
                                                                ? " first"
                                                                : "")
                                                    },
                                                    r.a.createElement(de.a, {
                                                        id: s,
                                                        expiration: i
                                                    })
                                                )
                                            )
                                        );
                                        var h = ge.listToIDs(
                                                a.proposal.get(
                                                    "available_" +
                                                        d +
                                                        "_approvals"
                                                )
                                            ),
                                            m = ge.listToIDs(
                                                a.proposal.get(
                                                    "available_key_approvals"
                                                )
                                            ),
                                            f = ge.listToIDs(
                                                a.proposal.get(
                                                    "required_" +
                                                        d +
                                                        "_approvals"
                                                )
                                            ),
                                            b = ge.unnest(f, d),
                                            g = Xe(b, h, m),
                                            v = $e(g, 2),
                                            _ = v[0],
                                            E = v[1],
                                            w = [];
                                        _.length &&
                                            _.forEach(function(e) {
                                                e &&
                                                    !a.proposal
                                                        .get(
                                                            "available_" +
                                                                d +
                                                                "_approvals"
                                                        )
                                                        .includes(e) &&
                                                    w.push(e);
                                            });
                                        var k = [];
                                        E.length &&
                                            E.forEach(function(e) {
                                                me.a.isMyKey(e) &&
                                                    !a.proposal
                                                        .get(
                                                            "available_key_approvals"
                                                        )
                                                        .includes(e) &&
                                                    k.push(e);
                                            });
                                        var O = w.length + k.length > 0;
                                        return (
                                            t.push(
                                                r.a.createElement(
                                                    "tr",
                                                    {
                                                        className:
                                                            "top-left-align",
                                                        key: p + "_content"
                                                    },
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        c
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        b.map(function(e, t) {
                                                            return r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "list-item",
                                                                    key:
                                                                        p +
                                                                        "_approver_" +
                                                                        t
                                                                },
                                                                r.a.createElement(
                                                                    be.a,
                                                                    {
                                                                        subpage:
                                                                            "permissions",
                                                                        account:
                                                                            e.id
                                                                    }
                                                                )
                                                            );
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(We, {
                                                            proposal: a.proposal.get(
                                                                "id"
                                                            ),
                                                            type: d
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "approval-buttons"
                                                        },
                                                        o
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      "data-tip": y.a.translate(
                                                                          "tooltip.propose_scam"
                                                                      ),
                                                                      className:
                                                                          "tooltip has-error scam-error"
                                                                  },
                                                                  "SCAM"
                                                              )
                                                            : r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      onClick: O
                                                                          ? e._onApproveModal.bind(
                                                                                e,
                                                                                p,
                                                                                "approve"
                                                                            )
                                                                          : function() {},
                                                                      className:
                                                                          "button primary hollow" +
                                                                          (O
                                                                              ? ""
                                                                              : " hidden")
                                                                  },
                                                                  r.a.createElement(
                                                                      "span",
                                                                      null,
                                                                      r.a.createElement(
                                                                          l.a,
                                                                          {
                                                                              content:
                                                                                  "proposal.approve"
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                        r.a.createElement(Qe, {
                                                            ref: p + "_approve",
                                                            modalId:
                                                                p + "_approve",
                                                            account: a.account.get(
                                                                "id"
                                                            ),
                                                            proposal: p,
                                                            action: "approve"
                                                        }),
                                                        u
                                                            ? r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      onClick: e._onApproveModal.bind(
                                                                          e,
                                                                          p,
                                                                          "reject"
                                                                      ),
                                                                      className:
                                                                          "button primary hollow"
                                                                  },
                                                                  r.a.createElement(
                                                                      l.a,
                                                                      {
                                                                          content:
                                                                              "proposal.reject"
                                                                      }
                                                                  )
                                                              )
                                                            : null,
                                                        r.a.createElement(Qe, {
                                                            ref: p + "_reject",
                                                            modalId:
                                                                p + "_reject",
                                                            account: a.account.get(
                                                                "id"
                                                            ),
                                                            proposal: p,
                                                            action: "reject"
                                                        })
                                                    )
                                                )
                                            ),
                                            t.push(
                                                r.a.createElement(
                                                    "tr",
                                                    {key: p + "_separator"},
                                                    r.a.createElement(
                                                        "td",
                                                        {colSpan: "4"},
                                                        r.a.createElement(
                                                            "hr",
                                                            null
                                                        )
                                                    )
                                                )
                                            ),
                                            t
                                        );
                                    }, []);
                                return r.a.createElement(
                                    "table",
                                    {
                                        className:
                                            "table proposals compact " +
                                            this.props.className
                                    },
                                    r.a.createElement(
                                        "thead",
                                        null,
                                        r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "th",
                                                null,
                                                r.a.createElement(l.a, {
                                                    content:
                                                        "proposal.proposals"
                                                })
                                            ),
                                            r.a.createElement(
                                                "th",
                                                null,
                                                r.a.createElement(l.a, {
                                                    content:
                                                        "proposal.approvers"
                                                })
                                            ),
                                            r.a.createElement(
                                                "th",
                                                null,
                                                r.a.createElement(l.a, {
                                                    content: "proposal.status"
                                                })
                                            ),
                                            r.a.createElement(
                                                "th",
                                                null,
                                                r.a.createElement(l.a, {
                                                    content: "proposal.action"
                                                })
                                            )
                                        )
                                    ),
                                    r.a.createElement("tbody", null, n)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            tt.propTypes = {account: m.a.ChainAccount.isRequired};
            Object(f.a)(tt);
            var at = a(10),
                nt = a(48),
                rt = a(51),
                ot = a.n(rt),
                st = a(8),
                it = a(271),
                lt = a(42),
                ct =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                ut = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function pt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function dt(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function ht(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var mt = (function(e) {
                function t() {
                    return (
                        pt(this, t),
                        dt(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ht(t, it["a"]),
                    ut(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, a) {
                                return (
                                    (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var s = r.get;
                                        return void 0 !== s
                                            ? s.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    e.base_amount !== this.props.base_amount ||
                                    e.quote_amount !==
                                        this.props.quote_amount ||
                                    e.decimals !== this.props.decimals ||
                                    !b.a.are_equal_shallow(
                                        e.pulsate,
                                        this.props.pulsate
                                    ) ||
                                    !b.a.are_equal_shallow(a, this.state)
                                );
                            }
                        },
                        {
                            key: "getFinalPrice",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0] &&
                                        arguments[0],
                                    t = this.props,
                                    a = t.coreAsset,
                                    n = t.fromAsset,
                                    r = t.toAsset,
                                    o = t.marketStats;
                                return lt.a.getFinalPrice(a, n, r, o, e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.toAsset,
                                    a = e.forceDirection,
                                    n = (function(e, t) {
                                        var a = {};
                                        for (var n in e)
                                            t.indexOf(n) >= 0 ||
                                                (Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    n
                                                ) &&
                                                    (a[n] = e[n]));
                                        return a;
                                    })(e, ["toAsset", "forceDirection"]),
                                    o = this.getFinalPrice();
                                return 1 === o
                                    ? r.a.createElement("span", null, "1.00")
                                    : o
                                        ? r.a.createElement(
                                              H.a,
                                              ct(
                                                  {
                                                      force_direction:
                                                          !!a &&
                                                          t.get("symbol"),
                                                      base_amount:
                                                          o.base.amount,
                                                      base_asset:
                                                          o.base.asset_id,
                                                      quote_amount:
                                                          o.quote.amount,
                                                      quote_asset:
                                                          o.quote.asset_id
                                                  },
                                                  n
                                              )
                                          )
                                        : r.a.createElement("span", null, "--");
                            }
                        }
                    ]),
                    t
                );
            })();
            (mt.defaultProps = {forceDirection: !0}),
                (mt = Object(P.a)(mt, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var ft = (function(e) {
                    function t() {
                        return (
                            pt(this, t),
                            dt(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        ht(t, r.a.Component),
                        ut(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    return r.a.createElement(
                                        ot.a,
                                        {
                                            stores: [st.a, T.a],
                                            inject: {
                                                toAsset: function() {
                                                    return (
                                                        e.props.toAsset ||
                                                        st.a
                                                            .getState()
                                                            .settings.get(
                                                                "unit",
                                                                "1.3.0"
                                                            )
                                                    );
                                                },
                                                marketStats: function() {
                                                    return T.a.getState()
                                                        .allMarketStats;
                                                }
                                            }
                                        },
                                        r.a.createElement(
                                            mt,
                                            ct({}, this.props, {
                                                ref: this.props.refCallback
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                bt = a(107),
                gt = (a(252), a(439), a(440), a(104)),
                vt = a(322),
                _t = a(35),
                yt = a(18),
                Et = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function wt(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            var kt = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var a = (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {selectedOrders: [], filterValue: ""}), a
                        );
                    }
                    return (
                        (function(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                        typeof t
                                );
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                t &&
                                    (Object.setPrototypeOf
                                        ? Object.setPrototypeOf(e, t)
                                        : (e.__proto__ = t));
                        })(t, r.a.Component),
                        Et(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = document.getElementById(
                                        "cancelAllOrders"
                                    );
                                    e &&
                                        e.addEventListener(
                                            "click",
                                            function() {
                                                var e = this._getFilteredOrders.call(
                                                    this
                                                );
                                                (e = e.toJS ? e.toJS() : e),
                                                    this.setState({
                                                        selectedOrders: e
                                                    }),
                                                    document
                                                        .querySelectorAll(
                                                            ".orderCancel"
                                                        )
                                                        .forEach(function(e) {
                                                            e.checked ||
                                                                (e.checked = !0);
                                                        });
                                            }.bind(this)
                                        );
                                }
                            },
                            {
                                key: "_getFilteredOrders",
                                value: function() {
                                    var e = this.state.filterValue;
                                    return (
                                        this.props.account.get("orders") || []
                                    ).filter(function(t) {
                                        var a = E.b.getObject(t).toJS(),
                                            n = E.b.getAsset(
                                                a.sell_price.base.asset_id
                                            ),
                                            r = E.b.getAsset(
                                                a.sell_price.quote.asset_id
                                            ),
                                            o = n.get("symbol").toLowerCase(),
                                            s = r.get("symbol").toLowerCase();
                                        return (
                                            o.indexOf(e) > -1 ||
                                            s.indexOf(e) > -1
                                        );
                                    });
                                }
                            },
                            {
                                key: "_cancelLimitOrder",
                                value: function(e, t) {
                                    t.preventDefault(),
                                        _t.a
                                            .cancelLimitOrder(
                                                this.props.account.get("id"),
                                                e,
                                                !1
                                            )
                                            .catch(function(e) {
                                                console.log(
                                                    "cancel order error:",
                                                    e
                                                );
                                            });
                                }
                            },
                            {
                                key: "_cancelLimitOrders",
                                value: function(e) {
                                    var t = this;
                                    _t.a
                                        .cancelLimitOrders(
                                            this.props.account.get("id"),
                                            this.state.selectedOrders
                                        )
                                        .then(function() {
                                            t.resetSelected();
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                "cancel orders error:",
                                                e
                                            );
                                        });
                                }
                            },
                            {
                                key: "onFlip",
                                value: function(e) {
                                    var t = {};
                                    (t[e] = !this.props.marketDirections.get(
                                        e
                                    )),
                                        at.a.changeMarketDirection(t);
                                }
                            },
                            {
                                key: "onCheckCancel",
                                value: function(e, t) {
                                    var a = this.state.selectedOrders;
                                    if (t.target.checked)
                                        this.setState({
                                            selectedOrders: a.concat([e])
                                        });
                                    else {
                                        var n = a.indexOf(e);
                                        n > -1 &&
                                            this.setState({
                                                selectedOrders: a
                                                    .slice(0, n)
                                                    .concat(a.slice(n + 1))
                                            });
                                    }
                                }
                            },
                            {
                                key: "setFilterValue",
                                value: function(e) {
                                    this.setState({
                                        filterValue: e.target.value.toLowerCase()
                                    });
                                }
                            },
                            {
                                key: "resetSelected",
                                value: function() {
                                    this.setState({selectedOrders: []}),
                                        document
                                            .querySelectorAll(".orderCancel")
                                            .forEach(function(e) {
                                                e.checked && (e.checked = !1);
                                            });
                                }
                            },
                            {
                                key: "cancelSelected",
                                value: function() {
                                    this._cancelLimitOrders.call(this);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.account,
                                        n = t.marketDirections,
                                        o = this.state,
                                        s = o.filterValue,
                                        i = o.selectedOrders,
                                        c = y.a.translate(
                                            "account.perm.cancel"
                                        ),
                                        u = {},
                                        p = {};
                                    if (!a.get("orders")) return null;
                                    var d = a.get("orders"),
                                        h = d.size;
                                    s &&
                                        (d = this._getFilteredOrders.call(
                                            this
                                        )),
                                        d.forEach(function(t) {
                                            var a = E.b.getObject(t).toJS(),
                                                o = E.b.getAsset(
                                                    a.sell_price.base.asset_id
                                                ),
                                                s = E.b.getAsset(
                                                    a.sell_price.quote.asset_id
                                                );
                                            if (o && s) {
                                                var i,
                                                    l = (wt(
                                                        (i = {}),
                                                        o.get("id"),
                                                        {
                                                            precision: o.get(
                                                                "precision"
                                                            )
                                                        }
                                                    ),
                                                    wt(i, s.get("id"), {
                                                        precision: s.get(
                                                            "precision"
                                                        )
                                                    }),
                                                    i),
                                                    d = lt.a.getMarketName(o, s)
                                                        .marketName,
                                                    h = n.get(d);
                                                u[d] ||
                                                    (u[d] = h
                                                        ? {
                                                              base: {
                                                                  id: o.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: o.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: o.get(
                                                                      "precision"
                                                                  )
                                                              },
                                                              quote: {
                                                                  id: s.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: s.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: s.get(
                                                                      "precision"
                                                                  )
                                                              }
                                                          }
                                                        : {
                                                              base: {
                                                                  id: s.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: s.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: s.get(
                                                                      "precision"
                                                                  )
                                                              },
                                                              quote: {
                                                                  id: o.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: o.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: o.get(
                                                                      "precision"
                                                                  )
                                                              }
                                                          });
                                                var m = new yt.d(
                                                        a,
                                                        l,
                                                        u[d].quote.id
                                                    ),
                                                    f = E.b.getAsset(
                                                        u[d].base.id
                                                    ),
                                                    b = E.b.getAsset(
                                                        u[d].quote.id
                                                    );
                                                p[d] || (p[d] = []),
                                                    p[d].push(
                                                        r.a.createElement(
                                                            vt.b,
                                                            {
                                                                ref:
                                                                    u[d].base
                                                                        .symbol,
                                                                key: a.id,
                                                                order: m,
                                                                base: f,
                                                                quote: b,
                                                                cancel_text: c,
                                                                showSymbols: !1,
                                                                invert: !0,
                                                                onCancel: e._cancelLimitOrder.bind(
                                                                    e,
                                                                    a.id
                                                                ),
                                                                price: m.getPrice(),
                                                                dashboard: !0,
                                                                isMyAccount:
                                                                    e.props
                                                                        .isMyAccount,
                                                                settings:
                                                                    e.props
                                                                        .settings,
                                                                onFlip: e.onFlip.bind(
                                                                    e,
                                                                    d
                                                                ),
                                                                onCheckCancel: e.onCheckCancel.bind(
                                                                    e,
                                                                    a.id
                                                                )
                                                            }
                                                        )
                                                    );
                                            }
                                        });
                                    var m = [];
                                    for (var f in p)
                                        p[f].length &&
                                            (m.push(
                                                r.a.createElement(
                                                    "tbody",
                                                    {key: f},
                                                    p[f].sort(function(e, t) {
                                                        return (
                                                            e.props.price -
                                                            t.props.price
                                                        );
                                                    })
                                                )
                                            ),
                                            0);
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {className: "dashboard__actions"},
                                            r.a.createElement(
                                                "div",
                                                {className: "container-fluid"},
                                                r.a.createElement(
                                                    "div",
                                                    {className: "row"},
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "col-lg-9"},
                                                        d && h
                                                            ? r.a.createElement(
                                                                  "input",
                                                                  {
                                                                      type:
                                                                          "text",
                                                                      placeholder: y.a.translate(
                                                                          "account.filter_orders"
                                                                      ),
                                                                      style: {
                                                                          display:
                                                                              "inline-block",
                                                                          maxWidth:
                                                                              "50%",
                                                                          marginRight:
                                                                              "1em",
                                                                          marginBottom:
                                                                              "0"
                                                                      },
                                                                      onChange: this.setFilterValue.bind(
                                                                          this
                                                                      )
                                                                  }
                                                              )
                                                            : null,
                                                        i.length
                                                            ? r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      className:
                                                                          "btn large inverted"
                                                                  },
                                                                  r.a.createElement(
                                                                      l.a,
                                                                      {
                                                                          content:
                                                                              "account.reset_orders",
                                                                          onClick: this.resetSelected.bind(
                                                                              this
                                                                          )
                                                                      }
                                                                  )
                                                              )
                                                            : null,
                                                        i.length
                                                            ? r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      className:
                                                                          "btn large outline"
                                                                  },
                                                                  r.a.createElement(
                                                                      l.a,
                                                                      {
                                                                          content:
                                                                              "account.submit_orders",
                                                                          onClick: this.cancelSelected.bind(
                                                                              this
                                                                          )
                                                                      }
                                                                  )
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "dashboard__adaptive"},
                                            r.a.createElement(
                                                "table",
                                                {
                                                    className:
                                                        "dashboard__table blue-bg with-borders"
                                                },
                                                r.a.createElement(vt.c, {
                                                    settings: this.props
                                                        .settings,
                                                    dashboard: !0,
                                                    isMyAccount: this.props
                                                        .isMyAccount
                                                }),
                                                m,
                                                this.props.children
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Ot = (kt = Object(j.connect)(kt, {
                    listenTo: function() {
                        return [st.a];
                    },
                    getProps: function() {
                        return {
                            marketDirections: st.a.getState().marketDirections
                        };
                    }
                })),
                At = (a(9), {}),
                Ct = 6e4;
            var xt = a(383),
                Nt = a(223),
                St =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                Pt = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function jt(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            var Tt = (function(e) {
                function t() {
                    var e, a, n;
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    for (
                        var r = arguments.length, o = Array(r), s = 0;
                        s < r;
                        s++
                    )
                        o[s] = arguments[s];
                    return (
                        (a = n = jt(
                            this,
                            (e =
                                t.__proto__ ||
                                Object.getPrototypeOf(t)).call.apply(
                                e,
                                [this].concat(o)
                            )
                        )),
                        (n.tick = function() {
                            var e = n.props,
                                t = e.onIcon,
                                a = e.offIcon,
                                r = (n.state || {}).name,
                                o = void 0 === r ? t : r;
                            n.setState({name: o === t ? a : t});
                        }),
                        jt(n, a)
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, n["Component"]),
                    Pt(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this.props.duration;
                                this.interval = setInterval(this.tick, e);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this.interval && clearInterval(this.interval);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.onIcon,
                                    a = e.rest,
                                    n = (this.state || {}).name,
                                    o = void 0 === n ? t : n,
                                    s = this.props.title;
                                return r.a.createElement(
                                    K.a,
                                    St({name: o, title: s}, a)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            Tt.propTypes = {
                duration: Z.a.number.isRequired,
                offIcon: Z.a.string.isRequired,
                onIcon: Z.a.string.isRequired,
                title: Z.a.string.isRequired
            };
            var It = Tt,
                qt = (a(253), a(131)),
                Dt = a.n(qt),
                Lt = a(574),
                Rt = a.n(Lt),
                Mt = a(575),
                Ft = a.n(Mt),
                Bt =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                Vt = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function Wt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Ut(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function zt(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            Rt()(Dt.a.Highcharts), Ft()(Dt.a.Highcharts);
            var Ht = (function(e) {
                function t() {
                    return (
                        Wt(this, t),
                        Ut(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    zt(t, r.a.Component),
                    Vt(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balanceObjects,
                                    a = e.core_asset,
                                    n = e.marketStats,
                                    o = e.preferredAsset,
                                    s = null;
                                if (t && t.length > 0) {
                                    var i = 0;
                                    (s = t.forEach(function(e) {
                                        if (e) {
                                            var t =
                                                    "string" == typeof e
                                                        ? E.b.getObject(e)
                                                        : e,
                                                r = t.get("asset_type"),
                                                s = E.b.getAsset(r);
                                            if (s && o) {
                                                var l = Number(
                                                        t.get("balance")
                                                    ),
                                                    c = lt.a.convertValue(
                                                        l,
                                                        o,
                                                        s,
                                                        n,
                                                        a
                                                    );
                                                if (c) {
                                                    var u = b.a.get_asset_precision(
                                                        o.get("precision")
                                                    );
                                                    i += c / u;
                                                }
                                            }
                                        }
                                    })),
                                        (s = t
                                            .map(function(e, t) {
                                                if (!e) return null;
                                                var r =
                                                        "string" == typeof e
                                                            ? E.b.getObject(e)
                                                            : e,
                                                    s = r.get("asset_type"),
                                                    l = E.b.getAsset(s);
                                                if (!l) return null;
                                                var c = Number(
                                                        r.get("balance")
                                                    ),
                                                    u = lt.a.convertValue(
                                                        c,
                                                        o,
                                                        l,
                                                        n,
                                                        a
                                                    );
                                                if (!u) return null;
                                                var p =
                                                        u /
                                                        b.a.get_asset_precision(
                                                            o.get("precision")
                                                        ),
                                                    d = (p / i) * 100;
                                                return d < 0.5
                                                    ? null
                                                    : p >= 1
                                                        ? {
                                                              name:
                                                                  l.get(
                                                                      "symbol"
                                                                  ) +
                                                                  " (" +
                                                                  (0 === i
                                                                      ? 0
                                                                      : d.toFixed(
                                                                            2
                                                                        )) +
                                                                  "%)",
                                                              value: p,
                                                              color: Dt.a.Highcharts.getOptions()
                                                                  .colors[t]
                                                          }
                                                        : null;
                                            })
                                            .filter(function(e) {
                                                return !!e;
                                            }));
                                }
                                s &&
                                    1 === s.length &&
                                    0 === s[0].value &&
                                    (s = null);
                                var l = {
                                    chart: {
                                        backgroundColor: "rgba(255, 0, 0, 0)",
                                        height: 250,
                                        spacingLeft: 0,
                                        spacingRight: 0,
                                        spacingBottom: 0
                                    },
                                    credits: {enabled: !1},
                                    legend: {enabled: !1},
                                    plotOptions: {
                                        treemap: {
                                            animation: !1,
                                            tooltip: {
                                                pointFormatter: function() {
                                                    return (
                                                        "<b>" +
                                                        this.name +
                                                        "</b>: " +
                                                        Dt.a.Highcharts.numberFormat(
                                                            this.value,
                                                            0
                                                        ) +
                                                        " " +
                                                        o.get("symbol")
                                                    );
                                                }
                                            }
                                        }
                                    },
                                    series: [
                                        {
                                            type: "treemap",
                                            levels: [
                                                {
                                                    level: 1,
                                                    layoutAlgorithm:
                                                        "sliceAndDice",
                                                    dataLabels: {
                                                        enabled: !0,
                                                        align: "center",
                                                        verticalAlign: "middle"
                                                    }
                                                }
                                            ],
                                            data: s
                                        }
                                    ],
                                    title: {text: null}
                                };
                                return r.a.createElement(
                                    "div",
                                    {className: "account-treemap"},
                                    r.a.createElement(Dt.a, {config: l})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Ht.propTypes = {
                assets: m.a.ChainAssetsList,
                preferredAsset: m.a.ChainAsset.isRequired
            }),
                (Ht.defaultProps = {assets: [], preferredAsset: "1.3.0"}),
                (Ht = Object(f.a)(Ht));
            var Jt = (function(e) {
                function t() {
                    return (
                        Wt(this, t),
                        Ut(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    zt(t, r.a.Component),
                    Vt(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.balanceObjects
                                    .filter(function(e) {
                                        return !!e;
                                    })
                                    .map(function(e) {
                                        return e.get("asset_type");
                                    });
                                return r.a.createElement(
                                    Ht,
                                    Bt(
                                        {
                                            preferredAsset: this.props.settings.get(
                                                "unit",
                                                "1.3.0"
                                            ),
                                            assets: e
                                        },
                                        this.props
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Jt.propTypes = {
                balanceObjects: m.a.ChainObjectsList,
                core_asset: m.a.ChainAsset.isRequired
            }),
                (Jt.defaultProps = {balanceObjects: [], core_asset: "1.3.0"}),
                (Jt = Object(f.a)(Jt));
            var Kt = (function(e) {
                    function t() {
                        return (
                            Wt(this, t),
                            Ut(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        zt(t, r.a.Component),
                        Vt(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        ot.a,
                                        {
                                            stores: [st.a, T.a],
                                            inject: {
                                                marketStats: function() {
                                                    return T.a.getState()
                                                        .allMarketStats;
                                                },
                                                settings: function() {
                                                    return st.a.getState()
                                                        .settings;
                                                }
                                            }
                                        },
                                        r.a.createElement(
                                            Jt,
                                            Bt({}, this.props, {
                                                ref: this.props.refCallback
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Gt = a(103),
                Xt = a(351),
                Yt =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) &&
                                    (e[n] = a[n]);
                        }
                        return e;
                    },
                Zt = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t;
                    };
                })();
            function Qt(e, t, a) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a),
                    e
                );
            }
            function $t(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ea(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function ta(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function, not " +
                            typeof t
                    );
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t &&
                        (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
            }
            var aa = (function(e) {
                function t(e) {
                    $t(this, t);
                    var a = ea(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    for (var n in ((a.sortFunctions = {
                        qty: function(e, t, a) {
                            return Number(this.qtyRefs[e.key]) <
                                Number(this.qtyRefs[t.key])
                                ? this.state.sortDirection || a
                                    ? -1
                                    : 1
                                : Number(this.qtyRefs[e.key]) >
                                  Number(this.qtyRefs[t.key])
                                    ? this.state.sortDirection || a
                                        ? 1
                                        : -1
                                    : void 0;
                        },
                        alphabetic: function(e, t, a) {
                            return e.key > t.key
                                ? this.state.sortDirection || a
                                    ? 1
                                    : -1
                                : e.key < t.key
                                    ? this.state.sortDirection || a
                                        ? -1
                                        : 1
                                    : 0;
                        },
                        priceValue: function(e, t) {
                            var a = this.priceRefs[e.key],
                                n = this.priceRefs[t.key];
                            if (a && n) {
                                var r = a.getFinalPrice(!0),
                                    o = n.getFinalPrice(!0);
                                return null === r && null !== o
                                    ? 1
                                    : null !== r && null === o
                                        ? -1
                                        : null === r && null === o
                                            ? this.sortFunctions.alphabetic(
                                                  e,
                                                  t,
                                                  !0
                                              )
                                            : this.state.sortDirection
                                                ? r - o
                                                : o - r;
                            }
                        },
                        totalValue: function(e, t) {
                            var a = this.valueRefs[e.key],
                                n = this.valueRefs[t.key];
                            if (a && n) {
                                var r = a.getValue(),
                                    o = n.getValue();
                                return !r && o
                                    ? 1
                                    : r && !o
                                        ? -1
                                        : r || o
                                            ? this.state.sortDirection
                                                ? r - o
                                                : o - r
                                            : this.sortFunctions.alphabetic(
                                                  e,
                                                  t,
                                                  !0
                                              );
                            }
                        },
                        changeValue: function(e, t) {
                            var a = this.changeRefs[e.key],
                                n = this.changeRefs[t.key];
                            if (a && n) {
                                var r = a.getValue(),
                                    o = n.getValue(),
                                    s =
                                        "NaN" != parseFloat(r)
                                            ? parseFloat(r)
                                            : r,
                                    i =
                                        "NaN" != parseFloat(o)
                                            ? parseFloat(o)
                                            : o;
                                return void 0 === this.state.sortDirection ||
                                    this.state.sortDirection
                                    ? s - i
                                    : i - s;
                            }
                        }
                    }),
                    (a._renderBuy = function(e, t, n, o, s) {
                        return "LLC" === e && s <= 1e5
                            ? r.a.createElement(
                                  "span",
                                  null,
                                  r.a.createElement(
                                      "a",
                                      {
                                          onClick: a._showDepositWithdraw.bind(
                                              a,
                                              "bridge_modal",
                                              n,
                                              !1
                                          )
                                      },
                                      r.a.createElement(It, {
                                          onIcon: "dollar",
                                          offIcon: "dollar-green",
                                          title: "icons.dollar.buy",
                                          duration: 1e3,
                                          className: "icon-14px"
                                      })
                                  )
                              )
                            : t && a.props.isMyAccount
                                ? r.a.createElement(
                                      "span",
                                      null,
                                      r.a.createElement(
                                          "a",
                                          {
                                              onClick: a._showDepositWithdraw.bind(
                                                  a,
                                                  "bridge_modal",
                                                  n,
                                                  !1
                                              )
                                          },
                                          r.a.createElement(K.a, {
                                              name: "dollar",
                                              title: "icons.dollar.buy",
                                              className: "icon-14px"
                                          })
                                      )
                                  )
                                : o;
                    }),
                    (a.state = {
                        sortKey: e.viewSettings.get(
                            "portfolioSort",
                            "totalValue"
                        ),
                        sortDirection: e.viewSettings.get(
                            "portfolioSortDirection",
                            !0
                        ),
                        settleAsset: "1.3.0",
                        shownAssets: e.viewSettings.get(
                            "shownAssets",
                            "active"
                        ),
                        depositAsset: null,
                        withdrawAsset: null,
                        bridgeAsset: null,
                        alwaysShowAssets: ["LLC", "USD", "CNY"],
                        hide0balances: !1
                    }),
                    (a.qtyRefs = {}),
                    (a.priceRefs = {}),
                    (a.valueRefs = {}),
                    (a.changeRefs = {}),
                    a.sortFunctions))
                        a.sortFunctions[n] = a.sortFunctions[n].bind(a);
                    return (
                        (a._handleFilterInput = a._handleFilterInput.bind(a)), a
                    );
                }
                return (
                    ta(t, r.a.Component),
                    Zt(t, [
                        {
                            key: "_reserveButtonClick",
                            value: function(e, t) {
                                t.preventDefault(),
                                    this.setState({reserve: e}),
                                    d.a.publish("reserve_asset", "open");
                            }
                        },
                        {
                            key: "_reserveAsset",
                            value: function(e, t) {
                                t.preventDefault(),
                                    d.a.publish("reserve_asset", "close");
                                var a = this.state.issue,
                                    n = this.props.assets.get(a.asset_id);
                                (a.amount *= b.a.get_asset_precision(
                                    n.precision
                                )),
                                    AssetActions.issueAsset(e, a);
                            }
                        },
                        {
                            key: "_handleFilterInput",
                            value: function(e) {
                                e.preventDefault(),
                                    this.setState({
                                        filterValue: e.target.value
                                    });
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._checkMarginStatus();
                            }
                        },
                        {
                            key: "_checkMarginStatus",
                            value: function() {
                                var e = this;
                                (function(e) {
                                    if (
                                        !e ||
                                        (e && !e.get("call_orders", []).size)
                                    )
                                        return Promise.resolve(null);
                                    var t =
                                        e.get("name") +
                                        JSON.stringify(e.get("call_orders"));
                                    return At[t]
                                        ? At[t].result
                                            ? Promise.resolve(At[t].result)
                                            : new Promise(function(e, a) {
                                                  At[t].queue.push({
                                                      res: e,
                                                      rej: a
                                                  });
                                              })
                                        : new Promise(function(a, n) {
                                              (At[t] = {
                                                  queue: [{res: a, rej: n}],
                                                  result: null
                                              }),
                                                  Object(E.f)(
                                                      "getObject",
                                                      e
                                                          .get("call_orders")
                                                          .toArray()
                                                  )
                                                      .then(function(e) {
                                                          var a = [];
                                                          e.forEach(function(
                                                              e
                                                          ) {
                                                              var t = e.getIn([
                                                                      "call_price",
                                                                      "base",
                                                                      "asset_id"
                                                                  ]),
                                                                  n = e.getIn([
                                                                      "call_price",
                                                                      "quote",
                                                                      "asset_id"
                                                                  ]);
                                                              -1 ===
                                                                  a.indexOf(
                                                                      t
                                                                  ) &&
                                                                  a.push(t),
                                                                  -1 ===
                                                                      a.indexOf(
                                                                          n
                                                                      ) &&
                                                                      a.push(n);
                                                          }),
                                                              Object(E.f)(
                                                                  "getAsset",
                                                                  a,
                                                                  6e3
                                                              ).then(function(
                                                                  a
                                                              ) {
                                                                  var n = {};
                                                                  a.forEach(
                                                                      function(
                                                                          e
                                                                      ) {
                                                                          n[
                                                                              e.get(
                                                                                  "id"
                                                                              )
                                                                          ] = e.toJS();
                                                                      }
                                                                  );
                                                                  var r = {};
                                                                  e.forEach(
                                                                      function(
                                                                          e
                                                                      ) {
                                                                          var t =
                                                                                  n[
                                                                                      e.getIn(
                                                                                          [
                                                                                              "call_price",
                                                                                              "quote",
                                                                                              "asset_id"
                                                                                          ]
                                                                                      )
                                                                                  ],
                                                                              a =
                                                                                  n[
                                                                                      e.getIn(
                                                                                          [
                                                                                              "call_price",
                                                                                              "base",
                                                                                              "asset_id"
                                                                                          ]
                                                                                      )
                                                                                  ],
                                                                              o =
                                                                                  t
                                                                                      .bitasset
                                                                                      .current_feed
                                                                                      .settlement_price;
                                                                          if (
                                                                              o
                                                                                  .base
                                                                                  .asset_id ===
                                                                              o
                                                                                  .quote
                                                                                  .asset_id
                                                                          )
                                                                              r[
                                                                                  t.id
                                                                              ] = {
                                                                                  ratio: null
                                                                              };
                                                                          else {
                                                                              var s = new yt.a(
                                                                                      {
                                                                                          amount: e.get(
                                                                                              "collateral"
                                                                                          ),
                                                                                          asset_id:
                                                                                              a.id,
                                                                                          precision:
                                                                                              a.precision
                                                                                      }
                                                                                  ),
                                                                                  i = new yt.a(
                                                                                      {
                                                                                          amount: e.get(
                                                                                              "debt"
                                                                                          ),
                                                                                          asset_id:
                                                                                              t.id,
                                                                                          precision:
                                                                                              t.precision
                                                                                      }
                                                                                  ),
                                                                                  l =
                                                                                      t
                                                                                          .bitasset
                                                                                          .current_feed
                                                                                          .maintenance_collateral_ratio /
                                                                                      1e3,
                                                                                  c = new yt.c(
                                                                                      {
                                                                                          priceObject:
                                                                                              t
                                                                                                  .bitasset
                                                                                                  .current_feed
                                                                                                  .settlement_price,
                                                                                          market_base:
                                                                                              t
                                                                                                  .bitasset
                                                                                                  .current_feed
                                                                                                  .settlement_price
                                                                                                  .quote
                                                                                                  .asset_id,
                                                                                          sqr:
                                                                                              t
                                                                                                  .bitasset
                                                                                                  .current_feed
                                                                                                  .maximum_short_squeeze_ratio,
                                                                                          assets: n
                                                                                      }
                                                                                  ),
                                                                                  u = {
                                                                                      ratio:
                                                                                          s.getAmount(
                                                                                              {
                                                                                                  real: !0
                                                                                              }
                                                                                          ) /
                                                                                          (i.getAmount(
                                                                                              {
                                                                                                  real: !0
                                                                                              }
                                                                                          ) /
                                                                                              c.toReal())
                                                                                  };
                                                                              if (
                                                                                  isNaN(
                                                                                      u.ratio
                                                                                  )
                                                                              )
                                                                                  return null;
                                                                              u.ratio <
                                                                              l
                                                                                  ? (u.statusClass =
                                                                                        "danger")
                                                                                  : u.ratio <
                                                                                    l +
                                                                                        0.5
                                                                                      ? (u.statusClass =
                                                                                            "warning")
                                                                                      : (u.statusClass = null),
                                                                                  (r[
                                                                                      t.id
                                                                                  ] = u);
                                                                          }
                                                                      }
                                                                  ),
                                                                      At[
                                                                          t
                                                                      ].queue.forEach(
                                                                          function(
                                                                              e
                                                                          ) {
                                                                              e.res(
                                                                                  r
                                                                              );
                                                                          }
                                                                      ),
                                                                      (At[t] = {
                                                                          result: r
                                                                      }),
                                                                      setTimeout(
                                                                          function() {
                                                                              delete At[
                                                                                  t
                                                                              ];
                                                                          },
                                                                          Ct
                                                                      );
                                                              });
                                                      })
                                                      .catch(function() {
                                                          At[t].queue.forEach(
                                                              function(e) {
                                                                  e.rej();
                                                              }
                                                          );
                                                      });
                                          });
                                })(
                                    (arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props
                                    ).account
                                ).then(function(t) {
                                    var a = null;
                                    for (var n in t) a = t[n].statusClass || a;
                                    e.setState({globalMarginStatus: a});
                                });
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                e.account !== this.props.account &&
                                    (this._checkMarginStatus(e),
                                    (this.priceRefs = {}),
                                    (this.valueRefs = {}),
                                    (this.changeRefs = {}),
                                    setTimeout(
                                        this.forceUpdate.bind(this),
                                        500
                                    ));
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    !b.a.are_equal_shallow(
                                        e.backedCoins,
                                        this.props.backedCoins
                                    ) ||
                                    !b.a.are_equal_shallow(
                                        e.balances,
                                        this.props.balances
                                    ) ||
                                    e.account !== this.props.account ||
                                    e.settings !== this.props.settings ||
                                    e.hiddenAssets !==
                                        this.props.hiddenAssets ||
                                    !b.a.are_equal_shallow(t, this.state) ||
                                    this.state.filterValue !== t.filterValue
                                );
                            }
                        },
                        {
                            key: "_onSettleAsset",
                            value: function(e, t) {
                                t.preventDefault(),
                                    this.setState({settleAsset: e}),
                                    this.refs.settlement_modal.show();
                            }
                        },
                        {
                            key: "_hideAsset",
                            value: function(e, t) {
                                at.a.hideAsset(e, t);
                            }
                        },
                        {
                            key: "_showDepositModal",
                            value: function(e, t) {
                                var a = this;
                                t.preventDefault(),
                                    this.setState(
                                        {depositAsset: e},
                                        function() {
                                            a.refs.deposit_modal_new.show();
                                        }
                                    );
                            }
                        },
                        {
                            key: "_showDepositWithdraw",
                            value: function(e, t, a, n) {
                                var r,
                                    o = this;
                                n.preventDefault(),
                                    this.setState(
                                        (Qt(
                                            (r = {}),
                                            "bridge_modal" === e
                                                ? "bridgeAsset"
                                                : "deposit_modal" === e
                                                    ? "depositAsset"
                                                    : "withdrawAsset",
                                            t
                                        ),
                                        Qt(r, "fiatModal", a),
                                        r),
                                        function() {
                                            o.refs[e].show();
                                        }
                                    );
                            }
                        },
                        {
                            key: "_getSeparator",
                            value: function(e) {
                                return e
                                    ? r.a.createElement("span", null, " | ")
                                    : null;
                            }
                        },
                        {
                            key: "_onNavigate",
                            value: function(e, t) {
                                t.preventDefault(), this.props.router.push(e);
                            }
                        },
                        {
                            key: "triggerSend",
                            value: function(e) {
                                var t = this;
                                this.setState({send_asset: e}, function() {
                                    t.send_modal && t.send_modal.show();
                                });
                            }
                        },
                        {
                            key: "_renderBalances",
                            value: function(e, t, a) {
                                var n = this,
                                    o = this.props.core_asset,
                                    s = this.props,
                                    i = s.settings,
                                    l = s.hiddenAssets,
                                    u = s.orders,
                                    p = i.get("unit") || o.get("symbol"),
                                    d = i.get("showAssetPercent", !1),
                                    h = function(e, t) {
                                        var a = e && e.has("bitasset_data_id"),
                                            o = "cp_modal_" + e.get("id");
                                        return {
                                            isBitAsset: a,
                                            borrowModal: a
                                                ? r.a.createElement(J.a, {
                                                      ref: o,
                                                      modalId:
                                                          "borrow_modal_" +
                                                          e.get("id"),
                                                      quote_asset: e.get("id"),
                                                      backing_asset: e.getIn([
                                                          "bitasset",
                                                          "options",
                                                          "short_backing_asset"
                                                      ]),
                                                      account: t
                                                  })
                                                : null,
                                            borrowLink: a
                                                ? r.a.createElement(
                                                      "a",
                                                      {
                                                          onClick: function() {
                                                              q.a.hide(),
                                                                  n.refs[
                                                                      o
                                                                  ].show();
                                                          }
                                                      },
                                                      r.a.createElement(K.a, {
                                                          name: "dollar",
                                                          title:
                                                              "icons.dollar.borrow",
                                                          className: "icon-14px"
                                                      })
                                                  )
                                                : null
                                        };
                                    },
                                    m = [];
                                return (
                                    e.forEach(function(e) {
                                        var t = E.b.getObject(e);
                                        if (t) {
                                            var a = t.get("asset_type"),
                                                s = E.b.getObject(a);
                                            if (s) {
                                                var i,
                                                    f,
                                                    g,
                                                    v = "",
                                                    _ = s.get("symbol"),
                                                    w = "1.3.0" !== s.get("id"),
                                                    k = p !== o.get("symbol"),
                                                    O = nt.a.parseDescription(
                                                        s.getIn([
                                                            "options",
                                                            "description"
                                                        ])
                                                    ).market;
                                                -1 ===
                                                    (v = s.get(
                                                        "symbol"
                                                    )).indexOf("OPEN.") ||
                                                    O ||
                                                    (O = "USD");
                                                var A = O || p;
                                                w &&
                                                    A === v &&
                                                    (A = o.get("symbol")),
                                                    (i = w
                                                        ? r.a.createElement(
                                                              G.b,
                                                              {
                                                                  to:
                                                                      "/market/" +
                                                                      s.get(
                                                                          "symbol"
                                                                      ) +
                                                                      "_" +
                                                                      A
                                                              },
                                                              r.a.createElement(
                                                                  K.a,
                                                                  {
                                                                      name:
                                                                          "trade",
                                                                      title:
                                                                          "icons.trade.trade",
                                                                      className:
                                                                          "icon-14px"
                                                                  }
                                                              )
                                                          )
                                                        : k
                                                            ? r.a.createElement(
                                                                  G.b,
                                                                  {
                                                                      to:
                                                                          "/market/" +
                                                                          s.get(
                                                                              "symbol"
                                                                          ) +
                                                                          "_" +
                                                                          p
                                                                  },
                                                                  r.a.createElement(
                                                                      K.a,
                                                                      {
                                                                          name:
                                                                              "trade",
                                                                          title:
                                                                              "icons.trade.trade",
                                                                          className:
                                                                              "icon-14px"
                                                                      }
                                                                  )
                                                              )
                                                            : "-"),
                                                    (g = r.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: n.triggerSend.bind(
                                                                n,
                                                                s.get("id")
                                                            )
                                                        },
                                                        r.a.createElement(K.a, {
                                                            name: "transfer",
                                                            title:
                                                                "icons.transfer",
                                                            className:
                                                                "icon-14px"
                                                        })
                                                    ));
                                                var C = h(s, n.props.account),
                                                    x = C.isBitAsset,
                                                    S = C.borrowModal,
                                                    P = C.borrowLink;
                                                f = r.a.createElement(
                                                    "a",
                                                    {
                                                        onClick: n._onSettleAsset.bind(
                                                            n,
                                                            s.get("id")
                                                        )
                                                    },
                                                    r.a.createElement(K.a, {
                                                        name: "settle",
                                                        title: "icons.settle",
                                                        className: "icon-14px"
                                                    })
                                                );
                                                var j = !l.includes(a),
                                                    T = !!t.get("balance"),
                                                    I = !!u[a],
                                                    q = Object(Gt.b)(
                                                        s.get("symbol"),
                                                        n.props.backedCoins
                                                    ),
                                                    D =
                                                        (q &&
                                                            q.depositAllowed) ||
                                                        "LLC" ==
                                                            s.get("symbol"),
                                                    L =
                                                        q &&
                                                        q.withdrawalAllowed &&
                                                        T &&
                                                        0 != t.get("balance"),
                                                    R = !!n.props.bridgeCoins.get(
                                                        v
                                                    ),
                                                    M = t.get("balance");
                                                (n.qtyRefs[
                                                    s.get("symbol")
                                                ] = b.a.get_asset_amount(M, s)),
                                                    m.push(
                                                        r.a.createElement(
                                                            "tr",
                                                            {
                                                                key: s.get(
                                                                    "symbol"
                                                                ),
                                                                style: {
                                                                    maxWidth:
                                                                        "100rem"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "left"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    bt.a,
                                                                    {
                                                                        showIcon: !0,
                                                                        asset: s.get(
                                                                            "id"
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                T || I
                                                                    ? r.a.createElement(
                                                                          c.a,
                                                                          {
                                                                              balance: e,
                                                                              hide_asset: !0
                                                                          }
                                                                      )
                                                                    : null
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    },
                                                                    className:
                                                                        "column-hide-small"
                                                                },
                                                                r.a.createElement(
                                                                    ft,
                                                                    {
                                                                        refCallback: function(
                                                                            e
                                                                        ) {
                                                                            e &&
                                                                                e
                                                                                    .refs
                                                                                    .bound_component &&
                                                                                (n.priceRefs[
                                                                                    s.get(
                                                                                        "symbol"
                                                                                    )
                                                                                ] =
                                                                                    e.refs.bound_component);
                                                                        },
                                                                        fromAsset: s.get(
                                                                            "id"
                                                                        ),
                                                                        pulsate: {
                                                                            reverse: !0,
                                                                            fill:
                                                                                "forwards"
                                                                        },
                                                                        hide_symbols: !0
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    },
                                                                    className:
                                                                        "column-hide-small"
                                                                },
                                                                r.a.createElement(
                                                                    W,
                                                                    {
                                                                        refCallback: function(
                                                                            e
                                                                        ) {
                                                                            e &&
                                                                                e
                                                                                    .refs
                                                                                    .bound_component &&
                                                                                (n.changeRefs[
                                                                                    s.get(
                                                                                        "symbol"
                                                                                    )
                                                                                ] =
                                                                                    e.refs.bound_component);
                                                                        },
                                                                        base: s.get(
                                                                            "id"
                                                                        ),
                                                                        quote: p,
                                                                        marketId:
                                                                            s.get(
                                                                                "symbol"
                                                                            ) +
                                                                            "_" +
                                                                            p,
                                                                        hide_symbols: !0
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    },
                                                                    className:
                                                                        "column-hide-small"
                                                                },
                                                                T || I
                                                                    ? r.a.createElement(
                                                                          N.a,
                                                                          {
                                                                              balance: e,
                                                                              toAsset: p,
                                                                              hide_asset: !0,
                                                                              refCallback: function(
                                                                                  e
                                                                              ) {
                                                                                  e &&
                                                                                      e
                                                                                          .refs
                                                                                          .bound_component &&
                                                                                      (n.valueRefs[
                                                                                          s.get(
                                                                                              "symbol"
                                                                                          )
                                                                                      ] =
                                                                                          e.refs.bound_component);
                                                                              }
                                                                          }
                                                                      )
                                                                    : null
                                                            ),
                                                            d
                                                                ? r.a.createElement(
                                                                      "td",
                                                                      {
                                                                          style: {
                                                                              textAlign:
                                                                                  "right"
                                                                          }
                                                                      },
                                                                      T
                                                                          ? r.a.createElement(
                                                                                c.a,
                                                                                {
                                                                                    balance: e,
                                                                                    asPercentage: !0
                                                                                }
                                                                            )
                                                                          : null
                                                                  )
                                                                : null,
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                g
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                n._renderBuy(
                                                                    s.get(
                                                                        "symbol"
                                                                    ),
                                                                    R,
                                                                    _,
                                                                    "-",
                                                                    t.get(
                                                                        "balance"
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                D &&
                                                                n.props
                                                                    .isMyAccount
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          r.a.createElement(
                                                                              K.a,
                                                                              {
                                                                                  style: {
                                                                                      cursor:
                                                                                          "pointer"
                                                                                  },
                                                                                  name:
                                                                                      "deposit",
                                                                                  title:
                                                                                      "icons.deposit.deposit",
                                                                                  className:
                                                                                      "icon-14x",
                                                                                  onClick: n._showDepositModal.bind(
                                                                                      n,
                                                                                      _
                                                                                  )
                                                                              }
                                                                          )
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                L &&
                                                                n.props
                                                                    .isMyAccount
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          r.a.createElement(
                                                                              "a",
                                                                              {
                                                                                  className: L
                                                                                      ? ""
                                                                                      : "disabled",
                                                                                  onClick: L
                                                                                      ? n._showDepositWithdraw.bind(
                                                                                            n,
                                                                                            "withdraw_modal_new",
                                                                                            _,
                                                                                            !1
                                                                                        )
                                                                                      : function() {}
                                                                              },
                                                                              r.a.createElement(
                                                                                  K.a,
                                                                                  {
                                                                                      name:
                                                                                          "withdraw",
                                                                                      title:
                                                                                          "icons.withdraw",
                                                                                      className:
                                                                                          "icon-14px"
                                                                                  }
                                                                              )
                                                                          )
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                i
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                x
                                                                    ? r.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "inline-block",
                                                                              "data-place":
                                                                                  "bottom",
                                                                              "data-tip": y.a.translate(
                                                                                  "tooltip.borrow",
                                                                                  {
                                                                                      asset: v
                                                                                  }
                                                                              )
                                                                          },
                                                                          P,
                                                                          S
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                x
                                                                    ? r.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "inline-block",
                                                                              "data-place":
                                                                                  "bottom",
                                                                              "data-tip": y.a.translate(
                                                                                  "tooltip.settle",
                                                                                  {
                                                                                      asset: v
                                                                                  }
                                                                              )
                                                                          },
                                                                          f
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "center"
                                                                    },
                                                                    className:
                                                                        "column-hide-small",
                                                                    "data-place":
                                                                        "bottom",
                                                                    "data-tip": y.a.translate(
                                                                        "tooltip.burn"
                                                                    ),
                                                                    onClick: n._reserveButtonClick.bind(
                                                                        n,
                                                                        s.get(
                                                                            "id"
                                                                        )
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        style: {
                                                                            marginRight: 0
                                                                        },
                                                                        className: j
                                                                            ? "order-cancel"
                                                                            : "action-plus"
                                                                    },
                                                                    r.a.createElement(
                                                                        "span",
                                                                        {
                                                                            className:
                                                                                "icon fire icon-14px"
                                                                        },
                                                                        r.a.createElement(
                                                                            "svg",
                                                                            {
                                                                                version:
                                                                                    "1.1",
                                                                                xmlns:
                                                                                    "http://www.w3.org/2000/svg",
                                                                                width:
                                                                                    "32",
                                                                                height:
                                                                                    "32",
                                                                                viewBox:
                                                                                    "0 0 32 32"
                                                                            },
                                                                            r.a.createElement(
                                                                                "path",
                                                                                {
                                                                                    d:
                                                                                        "M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z"
                                                                                }
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "center"
                                                                    },
                                                                    className:
                                                                        "column-hide-small",
                                                                    "data-place":
                                                                        "bottom",
                                                                    "data-tip": y.a.translate(
                                                                        "tooltip." +
                                                                            (j
                                                                                ? "hide_asset"
                                                                                : "show_asset")
                                                                    ),
                                                                    onClick: n._hideAsset.bind(
                                                                        n,
                                                                        a,
                                                                        j
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        style: {
                                                                            marginRight: 0
                                                                        },
                                                                        className: j
                                                                            ? "order-cancel"
                                                                            : "action-plus"
                                                                    },
                                                                    r.a.createElement(
                                                                        K.a,
                                                                        {
                                                                            name: j
                                                                                ? "cross-circle"
                                                                                : "plus-circle",
                                                                            title: j
                                                                                ? "icons.cross_circle.hide_asset"
                                                                                : "icons.plus_circle.show_asset",
                                                                            className:
                                                                                "icon-14px"
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    );
                                            }
                                        }
                                    }),
                                    t &&
                                        t
                                            .filter(function(e) {
                                                var t = !1;
                                                n.props.backedCoins
                                                    .get("OPEN", [])
                                                    .forEach(function(a) {
                                                        a &&
                                                            a.symbol === e &&
                                                            (t = !0);
                                                    }),
                                                    n.props.bridgeCoins.get(
                                                        e
                                                    ) && (t = !0);
                                                var a = !0;
                                                return (
                                                    m.forEach(function(t) {
                                                        t.key === e && (a = !1);
                                                    }),
                                                    a && t
                                                );
                                            })
                                            .forEach(function(e) {
                                                var t = E.b.getAsset(e);
                                                if (t && n.props.isMyAccount) {
                                                    var s = !l.includes(
                                                            t.get("id")
                                                        ),
                                                        i = t
                                                            .get("symbol")
                                                            .split("."),
                                                        c =
                                                            !!n.props.backedCoins
                                                                .get("OPEN", [])
                                                                .find(function(
                                                                    e
                                                                ) {
                                                                    return (
                                                                        e.backingCoinType ===
                                                                        i[1]
                                                                    );
                                                                }) ||
                                                            !!n.props.backedCoins
                                                                .get(
                                                                    "RUDEX",
                                                                    []
                                                                )
                                                                .find(function(
                                                                    e
                                                                ) {
                                                                    return (
                                                                        e.backingCoin ===
                                                                        i[1]
                                                                    );
                                                                }) ||
                                                            "LLC" ==
                                                                t.get("symbol"),
                                                        u = !!n.props.bridgeCoins.get(
                                                            t.get("symbol")
                                                        ),
                                                        p =
                                                            "1.3.0" !==
                                                            t.get("id"),
                                                        d = nt.a.parseDescription(
                                                            t.getIn([
                                                                "options",
                                                                "description"
                                                            ])
                                                        ).market;
                                                    -1 ===
                                                        t
                                                            .get("symbol")
                                                            .indexOf("OPEN.") ||
                                                        d ||
                                                        (d = "USD");
                                                    var f =
                                                            d ||
                                                            (o
                                                                ? o.get(
                                                                      "symbol"
                                                                  )
                                                                : "LLC"),
                                                        b = p
                                                            ? r.a.createElement(
                                                                  G.b,
                                                                  {
                                                                      to:
                                                                          "/market/" +
                                                                          t.get(
                                                                              "symbol"
                                                                          ) +
                                                                          "_" +
                                                                          f
                                                                  },
                                                                  r.a.createElement(
                                                                      K.a,
                                                                      {
                                                                          name:
                                                                              "trade",
                                                                          title:
                                                                              "icons.trade.trade",
                                                                          className:
                                                                              "icon-14px"
                                                                      }
                                                                  )
                                                              )
                                                            : "-",
                                                        g = h(
                                                            t,
                                                            n.props.account
                                                        ),
                                                        v = g.isBitAsset,
                                                        _ = g.borrowModal,
                                                        w = g.borrowLink;
                                                    ((s && a) || (!s && !a)) &&
                                                        m.push(
                                                            r.a.createElement(
                                                                "tr",
                                                                {
                                                                    key: t.get(
                                                                        "symbol"
                                                                    ),
                                                                    style: {
                                                                        maxWidth:
                                                                            "100rem"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "left"
                                                                        }
                                                                    },
                                                                    r.a.createElement(
                                                                        bt.a,
                                                                        {
                                                                            asset: t.get(
                                                                                "id"
                                                                            )
                                                                        }
                                                                    )
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "column-hide-small"
                                                                    },
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "column-hide-small"
                                                                    },
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "column-hide-small"
                                                                    },
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "center"
                                                                        }
                                                                    },
                                                                    u &&
                                                                    n.props
                                                                        .isMyAccount
                                                                        ? r.a.createElement(
                                                                              "span",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  "a",
                                                                                  {
                                                                                      onClick: n._showDepositWithdraw.bind(
                                                                                          n,
                                                                                          "bridge_modal",
                                                                                          e,
                                                                                          !1
                                                                                      )
                                                                                  },
                                                                                  r.a.createElement(
                                                                                      K.a,
                                                                                      {
                                                                                          name:
                                                                                              "dollar",
                                                                                          title:
                                                                                              "icons.dollar.buy",
                                                                                          className:
                                                                                              "icon-14px"
                                                                                      }
                                                                                  )
                                                                              )
                                                                          )
                                                                        : "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    c &&
                                                                    n.props
                                                                        .isMyAccount
                                                                        ? r.a.createElement(
                                                                              "span",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  K.a,
                                                                                  {
                                                                                      style: {
                                                                                          cursor:
                                                                                              "pointer"
                                                                                      },
                                                                                      name:
                                                                                          "deposit",
                                                                                      title:
                                                                                          "icons.deposit.deposit",
                                                                                      className:
                                                                                          "icon-14x",
                                                                                      onClick: n._showDepositModal.bind(
                                                                                          n,
                                                                                          t.get(
                                                                                              "symbol"
                                                                                          )
                                                                                      )
                                                                                  }
                                                                              )
                                                                          )
                                                                        : "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "center"
                                                                        }
                                                                    },
                                                                    b
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    v
                                                                        ? r.a.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "inline-block",
                                                                                  "data-place":
                                                                                      "bottom",
                                                                                  "data-tip": y.a.translate(
                                                                                      "tooltip.borrow",
                                                                                      {
                                                                                          asset: t.get(
                                                                                              "symbol"
                                                                                          )
                                                                                      }
                                                                                  )
                                                                              },
                                                                              w,
                                                                              _
                                                                          )
                                                                        : "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "center"
                                                                        },
                                                                        className:
                                                                            "column-hide-small",
                                                                        "data-place":
                                                                            "bottom",
                                                                        "data-tip": y.a.translate(
                                                                            "tooltip." +
                                                                                (s
                                                                                    ? "hide_asset"
                                                                                    : "show_asset")
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        "a",
                                                                        {
                                                                            style: {
                                                                                marginRight: 0
                                                                            },
                                                                            className: s
                                                                                ? "order-cancel"
                                                                                : "action-plus",
                                                                            onClick: n._hideAsset.bind(
                                                                                n,
                                                                                t.get(
                                                                                    "id"
                                                                                ),
                                                                                s
                                                                            )
                                                                        },
                                                                        r.a.createElement(
                                                                            K.a,
                                                                            {
                                                                                name: s
                                                                                    ? "cross-circle"
                                                                                    : "plus-circle",
                                                                                title: s
                                                                                    ? "icons.cross_circle.hide_asset"
                                                                                    : "icons.plus_circle.show_asset",
                                                                                className:
                                                                                    "icon-14px"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        );
                                                }
                                            }),
                                    m.sort(
                                        this.sortFunctions[this.state.sortKey]
                                    ),
                                    m
                                );
                            }
                        },
                        {
                            key: "_changeShownAssets",
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : "active";
                                this.setState({shownAssets: e}),
                                    at.a.changeViewSetting({shownAssets: e});
                            }
                        },
                        {
                            key: "_toggleSortOrder",
                            value: function(e) {
                                this.state.sortKey === e
                                    ? (at.a.changeViewSetting({
                                          portfolioSortDirection: !this.state
                                              .sortDirection
                                      }),
                                      this.setState({
                                          sortDirection: !this.state
                                              .sortDirection
                                      }))
                                    : (at.a.changeViewSetting({
                                          portfolioSort: e
                                      }),
                                      this.setState({
                                          sortDirection: !1,
                                          sortKey: e
                                      }));
                            }
                        },
                        {
                            key: "_renderRadioButton",
                            value: function(e, t) {
                                var a =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                return r.a.createElement(
                                    "label",
                                    {className: "radio"},
                                    r.a.createElement("input", {
                                        className: "radio__input",
                                        type: "radio",
                                        name: "dashboard-filters",
                                        onChange: t,
                                        checked: a
                                    }),
                                    r.a.createElement("span", {
                                        className: "radio__styled"
                                    }),
                                    r.a.createElement(
                                        "span",
                                        {className: "radio__label"},
                                        e
                                    )
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.account,
                                    n = t.hiddenAssets,
                                    o = t.settings,
                                    i = t.orders,
                                    c = this.state.shownAssets;
                                if (!a) return null;
                                var p = [],
                                    m = {},
                                    f = {};
                                a.toJS &&
                                    a.has("call_orders") &&
                                    (p = a.get("call_orders").toJS());
                                var g = void 0,
                                    v = void 0,
                                    _ = a.get("balances"),
                                    w = s.a.List(),
                                    k = s.a.List();
                                (p.forEach(function(e) {
                                    var t = E.b.getObject(e);
                                    if (t) {
                                        var a = t.getIn([
                                            "call_price",
                                            "base",
                                            "asset_id"
                                        ]);
                                        m[a]
                                            ? (m[a] += parseInt(
                                                  t.get("collateral"),
                                                  10
                                              ))
                                            : (m[a] = parseInt(
                                                  t.get("collateral"),
                                                  10
                                              ));
                                        var n = t.getIn([
                                            "call_price",
                                            "quote",
                                            "asset_id"
                                        ]);
                                        f[n]
                                            ? (f[n] += parseInt(
                                                  t.get("debt"),
                                                  10
                                              ))
                                            : (f[n] = parseInt(
                                                  t.get("debt"),
                                                  10
                                              ));
                                    }
                                }),
                                _) &&
                                    ((_ = _.filter(function(t, a) {
                                        var n = E.b.getObject(t);
                                        return (
                                            !(
                                                n &&
                                                !n.get("balance") &&
                                                !i[a]
                                            ) &&
                                            !(
                                                e.state.hide0balances &&
                                                n.get("balance") <= 0
                                            )
                                        );
                                    })).forEach(function(t, a) {
                                        var r = E.b.getAsset(a),
                                            o = "",
                                            s = "";
                                        e.state.filterValue &&
                                            ((s = e.state.filterValue
                                                ? String(
                                                      e.state.filterValue
                                                  ).toLowerCase()
                                                : ""),
                                            (o = r.get("symbol").toLowerCase()),
                                            b.a.replaceName(r).isBitAsset &&
                                                (o = "bit" + o));
                                        n.includes(a) && o.includes(s)
                                            ? (k = k.push(t))
                                            : o.includes(s) && (w = w.push(t));
                                    }),
                                    (g = this._renderBalances(
                                        w,
                                        this.state.filterValue
                                            ? null
                                            : this.state.alwaysShowAssets,
                                        !0
                                    )),
                                    (v = this._renderBalances(
                                        k,
                                        this.state.filterValue
                                            ? null
                                            : this.state.alwaysShowAsset
                                    )));
                                var O = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: k,
                                        hide_asset: !0
                                    }),
                                    A = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: w,
                                        hide_asset: !0
                                    }),
                                    C = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: s.a.List(),
                                        openOrders: i,
                                        hide_asset: !0
                                    }),
                                    x = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: s.a.List(),
                                        debt: f,
                                        collateral: m,
                                        hide_asset: !0
                                    }),
                                    N = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: s.a.List(),
                                        debt: f,
                                        hide_asset: !0
                                    }),
                                    S = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: s.a.List(),
                                        collateral: m,
                                        hide_asset: !0
                                    }),
                                    P =
                                        o.get("unit") ||
                                        this.props.core_asset.get("symbol"),
                                    j = r.a.createElement(X.a, {
                                        noLink: !0,
                                        string: "account.total",
                                        keys: [
                                            {
                                                type: "asset",
                                                value: P,
                                                arg: "asset"
                                            }
                                        ]
                                    });
                                g.push(
                                    r.a.createElement(
                                        "tr",
                                        {
                                            key: "portfolio",
                                            className: "total-value"
                                        },
                                        r.a.createElement(
                                            "td",
                                            {
                                                colSpan: "2",
                                                style: {textAlign: "left"}
                                            },
                                            j
                                        ),
                                        r.a.createElement("td", {
                                            className: "column-hide-small"
                                        }),
                                        r.a.createElement("td", {
                                            className: "column-hide-small"
                                        }),
                                        r.a.createElement(
                                            "td",
                                            {style: {textAlign: "right"}},
                                            A
                                        ),
                                        r.a.createElement("td", {colSpan: "9"})
                                    )
                                ),
                                    v.push(
                                        r.a.createElement(
                                            "tr",
                                            {
                                                key: "portfolio",
                                                className: "total-value"
                                            },
                                            r.a.createElement(
                                                "td",
                                                {
                                                    colSpan: "2",
                                                    style: {textAlign: "left"}
                                                },
                                                j
                                            ),
                                            r.a.createElement("td", {
                                                className: "column-hide-small"
                                            }),
                                            r.a.createElement("td", {
                                                className: "column-hide-small"
                                            }),
                                            r.a.createElement(
                                                "td",
                                                {style: {textAlign: "right"}},
                                                O
                                            ),
                                            r.a.createElement("td", {
                                                colSpan: "9"
                                            })
                                        )
                                    );
                                var T = o.get("showAssetPercent", !1),
                                    I = (this.props.backedCoins
                                        .get("OPEN", [])
                                        .find(function(t) {
                                            return (
                                                t.symbol ===
                                                e.state.withdrawAsset
                                            );
                                        }),
                                    this.props.bridgeCoins.get(
                                        this.state.bridgeAsset
                                    ),
                                    [
                                        {
                                            title: "account.portfolio",
                                            subTitle: A,
                                            content: r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "dashboard__actions"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "container-fluid"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {className: "row"},
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-3 col-lg-6"
                                                                },
                                                                r.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "text",
                                                                        placeholder:
                                                                            "Filter",
                                                                        onChange: this
                                                                            ._handleFilterInput
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-9 col-lg-12"
                                                                },
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "dashboard__actions__filters"
                                                                    },
                                                                    this._renderRadioButton(
                                                                        y.a.translate(
                                                                            "account.hide_hidden"
                                                                        ),
                                                                        "active" !=
                                                                        c
                                                                            ? this._changeShownAssets.bind(
                                                                                  this,
                                                                                  "active"
                                                                              )
                                                                            : function() {},
                                                                        !(
                                                                            "active" !=
                                                                            c
                                                                        )
                                                                    ),
                                                                    v.length
                                                                        ? this._renderRadioButton(
                                                                              y.a.translate(
                                                                                  "account.show_hidden"
                                                                              ),
                                                                              "hidden" !=
                                                                              c
                                                                                  ? this._changeShownAssets.bind(
                                                                                        this,
                                                                                        "hidden"
                                                                                    )
                                                                                  : function() {},
                                                                              !(
                                                                                  "hidden" !=
                                                                                  c
                                                                              )
                                                                          )
                                                                        : null,
                                                                    this._renderRadioButton(
                                                                        y.a.translate(
                                                                            "account.show_visual"
                                                                        ),
                                                                        "visual" !=
                                                                        c
                                                                            ? this._changeShownAssets.bind(
                                                                                  this,
                                                                                  "visual"
                                                                              )
                                                                            : function() {},
                                                                        !(
                                                                            "visual" !=
                                                                            c
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "div",
                                                                        null,
                                                                        r.a.createElement(
                                                                            "label",
                                                                            {
                                                                                className:
                                                                                    "hide0balances"
                                                                            },
                                                                            r.a.createElement(
                                                                                "input",
                                                                                {
                                                                                    name:
                                                                                        "isGoing",
                                                                                    type:
                                                                                        "checkbox",
                                                                                    checked: this
                                                                                        .state
                                                                                        .hide0balances,
                                                                                    onChange: function(
                                                                                        t
                                                                                    ) {
                                                                                        return e.setState(
                                                                                            {
                                                                                                hide0balances: !e
                                                                                                    .state
                                                                                                    .hide0balances
                                                                                            }
                                                                                        );
                                                                                    }
                                                                                }
                                                                            ),
                                                                            r.a.createElement(
                                                                                "span",
                                                                                null,
                                                                                y.a.translate(
                                                                                    "exchange.hide"
                                                                                ),
                                                                                " 0 ",
                                                                                y.a.translate(
                                                                                    "transfer.balances"
                                                                                )
                                                                            ),
                                                                            r.a.createElement(
                                                                                "span",
                                                                                null
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(Nt.a, {
                                                    id: "send_modal_portfolio",
                                                    refCallback: function(t) {
                                                        t && (e.send_modal = t);
                                                    },
                                                    from_name: this.props.account.get(
                                                        "name"
                                                    ),
                                                    asset_id:
                                                        this.state.send_asset ||
                                                        "1.3.0"
                                                }),
                                                "visual" != c
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "dashboard__adaptive"
                                                          },
                                                          r.a.createElement(
                                                              "table",
                                                              {
                                                                  className:
                                                                      "dashboard__table blue-bg with-borders"
                                                              },
                                                              r.a.createElement(
                                                                  "thead",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "tr",
                                                                      null,
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "left"
                                                                              },
                                                                              className:
                                                                                  "clickable",
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "alphabetic"
                                                                              )
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "account.asset"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "qty"
                                                                              ),
                                                                              className:
                                                                                  "clickable",
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.qty"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "priceValue"
                                                                              ),
                                                                              className:
                                                                                  "column-hide-small clickable",
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.price"
                                                                              }
                                                                          ),
                                                                          " (",
                                                                          r.a.createElement(
                                                                              U.a,
                                                                              {
                                                                                  name: P,
                                                                                  noTip: !0
                                                                              }
                                                                          ),
                                                                          ")"
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "changeValue"
                                                                              ),
                                                                              className:
                                                                                  "column-hide-small clickable",
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.hour_24_short"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "totalValue"
                                                                              ),
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              },
                                                                              className:
                                                                                  "column-hide-small clickable"
                                                                          },
                                                                          r.a.createElement(
                                                                              X.a,
                                                                              {
                                                                                  noLink: !0,
                                                                                  string:
                                                                                      "account.eq_value_header",
                                                                                  keys: [
                                                                                      {
                                                                                          type:
                                                                                              "asset",
                                                                                          value: P,
                                                                                          arg:
                                                                                              "asset"
                                                                                      }
                                                                                  ],
                                                                                  noTip: !0
                                                                              }
                                                                          )
                                                                      ),
                                                                      T
                                                                          ? r.a.createElement(
                                                                                "th",
                                                                                {
                                                                                    style: {
                                                                                        textAlign:
                                                                                            "right"
                                                                                    }
                                                                                },
                                                                                r.a.createElement(
                                                                                    l.a,
                                                                                    {
                                                                                        component:
                                                                                            "span",
                                                                                        content:
                                                                                            "account.percent"
                                                                                    }
                                                                                )
                                                                            )
                                                                          : null,
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "header.payments"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.buy"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "modal.deposit.submit"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "modal.withdraw.submit"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.trade"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.borrow_short"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.settle"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "modal.reserve.submit"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              className:
                                                                                  "column-hide-small"
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "active" ==
                                                                                      c
                                                                                          ? "exchange.hide"
                                                                                          : "account.perm.show"
                                                                              }
                                                                          )
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "tbody",
                                                                  null,
                                                                  "hidden" ==
                                                                      c &&
                                                                  v.length
                                                                      ? v
                                                                      : g
                                                              )
                                                          )
                                                      )
                                                    : r.a.createElement(Kt, {
                                                          balanceObjects: w
                                                      })
                                            )
                                        },
                                        {
                                            title: "account.open_orders",
                                            subTitle: C,
                                            content: r.a.createElement(
                                                Ot,
                                                this.props,
                                                r.a.createElement(
                                                    "tbody",
                                                    null,
                                                    r.a.createElement(
                                                        "tr",
                                                        {
                                                            className:
                                                                "total-value"
                                                        },
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                colSpan: "7",
                                                                style: {
                                                                    textAlign:
                                                                        "right"
                                                                }
                                                            },
                                                            j
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                colSpan: "2",
                                                                style: {
                                                                    textAlign:
                                                                        "left"
                                                                }
                                                            },
                                                            C
                                                        ),
                                                        this.props.isMyAccount
                                                            ? r.a.createElement(
                                                                  "td",
                                                                  null
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        },
                                        {
                                            title: "account.collaterals",
                                            subTitle: x,
                                            content: r.a.createElement(
                                                ue,
                                                {
                                                    preferredUnit: P,
                                                    className:
                                                        "dashboard-table blue-bg with-borders",
                                                    callOrders: p,
                                                    account: a
                                                },
                                                r.a.createElement(
                                                    "tr",
                                                    {className: "total-value"},
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        j
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        N
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "column-hide-medium"
                                                        },
                                                        S
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        x
                                                    ),
                                                    r.a.createElement("td", {
                                                        className:
                                                            "column-hide-small"
                                                    }),
                                                    r.a.createElement("td", {
                                                        className:
                                                            "column-hide-small"
                                                    }),
                                                    r.a.createElement("td", {
                                                        colSpan: "3"
                                                    })
                                                )
                                            )
                                        },
                                        {
                                            title: "account.activity",
                                            subTitle: "",
                                            content: r.a.createElement(pe.a, {
                                                accountsList: s.a.fromJS([
                                                    a.get("id")
                                                ]),
                                                compactView: !1,
                                                showMore: !0,
                                                fullHeight: !0,
                                                limit: 15,
                                                showFilters: !0,
                                                dashboard: !0
                                            })
                                        }
                                    ]);
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(gt.a, {
                                        items: I,
                                        inner: !0
                                    }),
                                    r.a.createElement(
                                        h.a,
                                        {id: "reserve_asset", overlay: !0},
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            r.a.createElement(Xt.a, {
                                                assetId: this.state.reserve,
                                                account: a,
                                                onClose: function() {
                                                    d.a.publish(
                                                        "reserve_asset",
                                                        "close"
                                                    );
                                                }
                                            })
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            aa = Object(P.a)(aa, {propNames: ["core_asset"]});
            var na = (function(e) {
                function t() {
                    return (
                        $t(this, t),
                        ea(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ta(t, r.a.Component),
                    Zt(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    xt.a,
                                    Yt({}, this.props, {wrap: aa})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = na;
        },
        519: function(e, t, a) {
            "use strict";
            var n = a(65).a.isFinite;
            t.a = function(e) {
                return "number" == typeof e && n(e);
            };
        },
        574: function(e, t, a) {
            var n;
            !(function(r) {
                "object" == typeof e && e.exports
                    ? (e.exports = r)
                    : void 0 ===
                          (n = function() {
                              return r;
                          }.call(t, a, t, e)) || (e.exports = n);
            })(function(e) {
                !(function(e, t) {
                    var a = e.seriesType,
                        n = e.seriesTypes,
                        r = e.map,
                        o = e.merge,
                        s = e.extend,
                        i = e.noop,
                        l = e.each,
                        c = t.getColor,
                        u = t.getLevelOptions,
                        p = e.grep,
                        d = e.isArray,
                        h = e.isNumber,
                        m = e.isObject,
                        f = e.isString,
                        b = e.pick,
                        g = e.Series,
                        v = e.stableSort,
                        _ = e.Color,
                        y = e.reduce,
                        E = function(e, t, a) {
                            (a = a || this),
                                !1 !== (e = t.call(a, e)) && E(e, t, a);
                        },
                        w = t.updateRootId;
                    a(
                        "treemap",
                        "scatter",
                        {
                            showInLegend: !1,
                            marker: !1,
                            colorByPoint: !1,
                            dataLabels: {
                                enabled: !0,
                                defer: !1,
                                verticalAlign: "middle",
                                formatter: function() {
                                    return this.point.name || this.point.id;
                                },
                                inside: !0
                            },
                            tooltip: {
                                headerFormat: "",
                                pointFormat:
                                    "<b>{point.name}</b>: {point.value}<br/>"
                            },
                            ignoreHiddenPoint: !0,
                            layoutAlgorithm: "sliceAndDice",
                            layoutStartingDirection: "vertical",
                            alternateStartingDirection: !1,
                            levelIsConstant: !0,
                            drillUpButton: {
                                position: {align: "right", x: -10, y: 10}
                            },
                            borderColor: "#e6e6e6",
                            borderWidth: 1,
                            opacity: 0.15,
                            states: {
                                hover: {
                                    borderColor: "#999999",
                                    brightness: n.heatmap ? 0 : 0.1,
                                    halo: !1,
                                    opacity: 0.75,
                                    shadow: !1
                                }
                            }
                        },
                        {
                            pointArrayMap: ["value"],
                            directTouch: !0,
                            optionalAxis: "colorAxis",
                            getSymbol: i,
                            parallelArrays: ["x", "y", "value", "colorValue"],
                            colorKey: "colorValue",
                            trackerGroups: ["group", "dataLabelsGroup"],
                            getListOfParents: function(t, a) {
                                t = d(t) ? t : [];
                                var n = d(a) ? a : [];
                                return (
                                    (function(t, a, n) {
                                        (n = n || this),
                                            e.objectEach(t, function(e, r) {
                                                a.call(n, e, r, t);
                                            });
                                    })(
                                        (a = y(
                                            t,
                                            function(e, t, a) {
                                                return (
                                                    void 0 ===
                                                        e[
                                                            (t = b(
                                                                t.parent,
                                                                ""
                                                            ))
                                                        ] && (e[t] = []),
                                                    e[t].push(a),
                                                    e
                                                );
                                            },
                                            {"": []}
                                        )),
                                        function(t, a, r) {
                                            "" !== a &&
                                                -1 === e.inArray(a, n) &&
                                                (l(t, function(e) {
                                                    r[""].push(e);
                                                }),
                                                delete r[a]);
                                        }
                                    ),
                                    a
                                );
                            },
                            getTree: function() {
                                var e = r(this.data, function(e) {
                                    return e.id;
                                });
                                e = this.getListOfParents(this.data, e);
                                return (
                                    (this.nodeMap = []),
                                    this.buildNode("", -1, 0, e, null)
                                );
                            },
                            init: function(t, a) {
                                var n = e.colorSeriesMixin;
                                e.colorSeriesMixin &&
                                    ((this.translateColors = n.translateColors),
                                    (this.colorAttribs = n.colorAttribs),
                                    (this.axisTypes = n.axisTypes)),
                                    g.prototype.init.call(this, t, a),
                                    this.options.allowDrillToNode &&
                                        e.addEvent(
                                            this,
                                            "click",
                                            this.onClickDrillToNode
                                        );
                            },
                            buildNode: function(e, t, a, n, r) {
                                var o,
                                    s = this,
                                    i = [],
                                    c = s.points[t],
                                    u = 0;
                                return (
                                    l(n[e] || [], function(t) {
                                        (o = s.buildNode(
                                            s.points[t].id,
                                            t,
                                            a + 1,
                                            n,
                                            e
                                        )),
                                            (u = Math.max(o.height + 1, u)),
                                            i.push(o);
                                    }),
                                    (t = {
                                        id: e,
                                        i: t,
                                        children: i,
                                        height: u,
                                        level: a,
                                        parent: r,
                                        visible: !1
                                    }),
                                    (s.nodeMap[t.id] = t),
                                    c && (c.node = t),
                                    t
                                );
                            },
                            setTreeValues: function(e) {
                                var t,
                                    a = this,
                                    n = a.options,
                                    r = a.nodeMap[a.rootNode],
                                    o = ((n =
                                        "boolean" != typeof n.levelIsConstant ||
                                        n.levelIsConstant),
                                    0),
                                    i = [],
                                    c = a.points[e.i];
                                return (
                                    l(e.children, function(e) {
                                        (e = a.setTreeValues(e)),
                                            i.push(e),
                                            e.ignore || (o += e.val);
                                    }),
                                    v(i, function(e, t) {
                                        return e.sortIndex - t.sortIndex;
                                    }),
                                    (t = b(c && c.options.value, o)),
                                    c && (c.value = t),
                                    s(e, {
                                        children: i,
                                        childrenTotal: o,
                                        ignore: !(
                                            b(c && c.visible, !0) && 0 < t
                                        ),
                                        isLeaf: e.visible && !o,
                                        levelDynamic:
                                            e.level - (n ? 0 : r.level),
                                        name: b(c && c.name, ""),
                                        sortIndex: b(c && c.sortIndex, -t),
                                        val: t
                                    }),
                                    e
                                );
                            },
                            calculateChildrenAreas: function(e, t) {
                                var a,
                                    n = this,
                                    r = n.options,
                                    s = n.mapOptionsToLevel[e.level + 1],
                                    i = b(
                                        n[s && s.layoutAlgorithm] &&
                                            s.layoutAlgorithm,
                                        r.layoutAlgorithm
                                    ),
                                    c = r.alternateStartingDirection;
                                (e = p(e.children, function(e) {
                                    return !e.ignore;
                                })),
                                    s &&
                                        s.layoutStartingDirection &&
                                        (t.direction =
                                            "vertical" ===
                                            s.layoutStartingDirection
                                                ? 0
                                                : 1),
                                    (a = n[i](t, e)),
                                    l(e, function(e, r) {
                                        (r = a[r]),
                                            (e.values = o(r, {
                                                val: e.childrenTotal,
                                                direction: c
                                                    ? 1 - t.direction
                                                    : t.direction
                                            })),
                                            (e.pointValues = o(r, {
                                                x: r.x / n.axisRatio,
                                                width: r.width / n.axisRatio
                                            })),
                                            e.children.length &&
                                                n.calculateChildrenAreas(
                                                    e,
                                                    e.values
                                                );
                                    });
                            },
                            setPointValues: function() {
                                var e = this,
                                    t = e.xAxis,
                                    a = e.yAxis;
                                l(e.points, function(n) {
                                    var r,
                                        o,
                                        s,
                                        i = n.node,
                                        l = i.pointValues;
                                    (s =
                                        ((e.pointAttribs(n)["stroke-width"] ||
                                            0) %
                                            2) /
                                        2),
                                        l && i.visible
                                            ? ((i =
                                                  Math.round(
                                                      t.translate(
                                                          l.x,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - s),
                                              (r =
                                                  Math.round(
                                                      t.translate(
                                                          l.x + l.width,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - s),
                                              (o =
                                                  Math.round(
                                                      a.translate(
                                                          l.y,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - s),
                                              (l =
                                                  Math.round(
                                                      a.translate(
                                                          l.y + l.height,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - s),
                                              (n.shapeType = "rect"),
                                              (n.shapeArgs = {
                                                  x: Math.min(i, r),
                                                  y: Math.min(o, l),
                                                  width: Math.abs(r - i),
                                                  height: Math.abs(l - o)
                                              }),
                                              (n.plotX =
                                                  n.shapeArgs.x +
                                                  n.shapeArgs.width / 2),
                                              (n.plotY =
                                                  n.shapeArgs.y +
                                                  n.shapeArgs.height / 2))
                                            : (delete n.plotX, delete n.plotY);
                                });
                            },
                            setColorRecursive: function(e, t, a, n, r) {
                                var o,
                                    s = this,
                                    i =
                                        (i = s && s.chart) &&
                                        i.options &&
                                        i.options.colors;
                                e &&
                                    ((o = c(e, {
                                        colors: i,
                                        index: n,
                                        mapOptionsToLevel: s.mapOptionsToLevel,
                                        parentColor: t,
                                        parentColorIndex: a,
                                        series: s,
                                        siblings: r
                                    })),
                                    (t = s.points[e.i]) &&
                                        ((t.color = o.color),
                                        (t.colorIndex = o.colorIndex)),
                                    l(e.children || [], function(t, a) {
                                        s.setColorRecursive(
                                            t,
                                            o.color,
                                            o.colorIndex,
                                            a,
                                            e.children.length
                                        );
                                    }));
                            },
                            algorithmGroup: function(e, t, a, n) {
                                (this.height = e),
                                    (this.width = t),
                                    (this.plot = n),
                                    (this.startDirection = this.direction = a),
                                    (this.lH = this.nH = this.lW = this.nW = this.total = 0),
                                    (this.elArr = []),
                                    (this.lP = {
                                        total: 0,
                                        lH: 0,
                                        nH: 0,
                                        lW: 0,
                                        nW: 0,
                                        nR: 0,
                                        lR: 0,
                                        aspectRatio: function(e, t) {
                                            return Math.max(e / t, t / e);
                                        }
                                    }),
                                    (this.addElement = function(e) {
                                        (this.lP.total = this.elArr[
                                            this.elArr.length - 1
                                        ]),
                                            (this.total += e),
                                            0 === this.direction
                                                ? ((this.lW = this.nW),
                                                  (this.lP.lH =
                                                      this.lP.total / this.lW),
                                                  (this.lP.lR = this.lP.aspectRatio(
                                                      this.lW,
                                                      this.lP.lH
                                                  )),
                                                  (this.nW =
                                                      this.total / this.height),
                                                  (this.lP.nH =
                                                      this.lP.total / this.nW),
                                                  (this.lP.nR = this.lP.aspectRatio(
                                                      this.nW,
                                                      this.lP.nH
                                                  )))
                                                : ((this.lH = this.nH),
                                                  (this.lP.lW =
                                                      this.lP.total / this.lH),
                                                  (this.lP.lR = this.lP.aspectRatio(
                                                      this.lP.lW,
                                                      this.lH
                                                  )),
                                                  (this.nH =
                                                      this.total / this.width),
                                                  (this.lP.nW =
                                                      this.lP.total / this.nH),
                                                  (this.lP.nR = this.lP.aspectRatio(
                                                      this.lP.nW,
                                                      this.nH
                                                  ))),
                                            this.elArr.push(e);
                                    }),
                                    (this.reset = function() {
                                        (this.lW = this.nW = 0),
                                            (this.elArr = []),
                                            (this.total = 0);
                                    });
                            },
                            algorithmCalcPoints: function(e, t, a, n) {
                                var r,
                                    o,
                                    s,
                                    i,
                                    c,
                                    u = a.lW,
                                    p = a.lH,
                                    d = a.plot,
                                    h = 0,
                                    m = a.elArr.length - 1;
                                t
                                    ? ((u = a.nW), (p = a.nH))
                                    : (c = a.elArr[a.elArr.length - 1]),
                                    l(a.elArr, function(e) {
                                        (t || h < m) &&
                                            (0 === a.direction
                                                ? ((r = d.x),
                                                  (o = d.y),
                                                  (i = e / (s = u)))
                                                : ((r = d.x),
                                                  (o = d.y),
                                                  (s = e / (i = p))),
                                            n.push({
                                                x: r,
                                                y: o,
                                                width: s,
                                                height: i
                                            }),
                                            0 === a.direction
                                                ? (d.y += i)
                                                : (d.x += s)),
                                            (h += 1);
                                    }),
                                    a.reset(),
                                    0 === a.direction
                                        ? (a.width -= u)
                                        : (a.height -= p),
                                    (d.y =
                                        d.parent.y +
                                        (d.parent.height - a.height)),
                                    (d.x =
                                        d.parent.x +
                                        (d.parent.width - a.width)),
                                    e && (a.direction = 1 - a.direction),
                                    t || a.addElement(c);
                            },
                            algorithmLowAspectRatio: function(e, t, a) {
                                var n,
                                    r = [],
                                    o = this,
                                    s = {x: t.x, y: t.y, parent: t},
                                    i = 0,
                                    c = a.length - 1,
                                    u = new this.algorithmGroup(
                                        t.height,
                                        t.width,
                                        t.direction,
                                        s
                                    );
                                return (
                                    l(a, function(a) {
                                        (n =
                                            (a.val / t.val) *
                                            t.height *
                                            t.width),
                                            u.addElement(n),
                                            u.lP.nR > u.lP.lR &&
                                                o.algorithmCalcPoints(
                                                    e,
                                                    !1,
                                                    u,
                                                    r,
                                                    s
                                                ),
                                            i === c &&
                                                o.algorithmCalcPoints(
                                                    e,
                                                    !0,
                                                    u,
                                                    r,
                                                    s
                                                ),
                                            (i += 1);
                                    }),
                                    r
                                );
                            },
                            algorithmFill: function(e, t, a) {
                                var n,
                                    r,
                                    o,
                                    s,
                                    i,
                                    c = [],
                                    u = t.direction,
                                    p = t.x,
                                    d = t.y,
                                    h = t.width,
                                    m = t.height;
                                return (
                                    l(a, function(a) {
                                        (n =
                                            (a.val / t.val) *
                                            t.height *
                                            t.width),
                                            (r = p),
                                            (o = d),
                                            0 === u
                                                ? ((h -= s = n / (i = m)),
                                                  (p += s))
                                                : ((m -= i = n / (s = h)),
                                                  (d += i)),
                                            c.push({
                                                x: r,
                                                y: o,
                                                width: s,
                                                height: i
                                            }),
                                            e && (u = 1 - u);
                                    }),
                                    c
                                );
                            },
                            strip: function(e, t) {
                                return this.algorithmLowAspectRatio(!1, e, t);
                            },
                            squarified: function(e, t) {
                                return this.algorithmLowAspectRatio(!0, e, t);
                            },
                            sliceAndDice: function(e, t) {
                                return this.algorithmFill(!0, e, t);
                            },
                            stripes: function(e, t) {
                                return this.algorithmFill(!1, e, t);
                            },
                            translate: function() {
                                var e,
                                    t,
                                    a = this,
                                    n = a.options,
                                    r = w(a);
                                g.prototype.translate.call(a),
                                    (t = a.tree = a.getTree()),
                                    (e = a.nodeMap[r]),
                                    (a.mapOptionsToLevel = u({
                                        from: e.level + 1,
                                        levels: n.levels,
                                        to: t.height,
                                        defaults: {
                                            levelIsConstant:
                                                a.options.levelIsConstant,
                                            colorByPoint: n.colorByPoint
                                        }
                                    })),
                                    "" === r ||
                                        (e && e.children.length) ||
                                        (a.drillToNode("", !1),
                                        (r = a.rootNode),
                                        (e = a.nodeMap[r])),
                                    E(a.nodeMap[a.rootNode], function(e) {
                                        var t = !1,
                                            n = e.parent;
                                        return (
                                            (e.visible = !0),
                                            (n || "" === n) &&
                                                (t = a.nodeMap[n]),
                                            t
                                        );
                                    }),
                                    E(a.nodeMap[a.rootNode].children, function(
                                        e
                                    ) {
                                        var t = !1;
                                        return (
                                            l(e, function(e) {
                                                (e.visible = !0),
                                                    e.children.length &&
                                                        (t = (t || []).concat(
                                                            e.children
                                                        ));
                                            }),
                                            t
                                        );
                                    }),
                                    a.setTreeValues(t),
                                    (a.axisRatio = a.xAxis.len / a.yAxis.len),
                                    (a.nodeMap[""].pointValues = r = {
                                        x: 0,
                                        y: 0,
                                        width: 100,
                                        height: 100
                                    }),
                                    (a.nodeMap[""].values = r = o(r, {
                                        width: r.width * a.axisRatio,
                                        direction:
                                            "vertical" ===
                                            n.layoutStartingDirection
                                                ? 0
                                                : 1,
                                        val: t.val
                                    })),
                                    a.calculateChildrenAreas(t, r),
                                    a.colorAxis
                                        ? a.translateColors()
                                        : n.colorByPoint ||
                                          a.setColorRecursive(a.tree),
                                    n.allowDrillToNode &&
                                        ((n = e.pointValues),
                                        a.xAxis.setExtremes(
                                            n.x,
                                            n.x + n.width,
                                            !1
                                        ),
                                        a.yAxis.setExtremes(
                                            n.y,
                                            n.y + n.height,
                                            !1
                                        ),
                                        a.xAxis.setScale(),
                                        a.yAxis.setScale()),
                                    a.setPointValues();
                            },
                            drawDataLabels: function() {
                                var e,
                                    t,
                                    a = this,
                                    n = a.mapOptionsToLevel,
                                    r = p(a.points, function(e) {
                                        return e.node.visible;
                                    });
                                l(r, function(r) {
                                    (t = n[r.node.level]),
                                        (e = {style: {}}),
                                        r.node.isLeaf || (e.enabled = !1),
                                        t &&
                                            t.dataLabels &&
                                            ((e = o(e, t.dataLabels)),
                                            (a._hasPointLabels = !0)),
                                        r.shapeArgs &&
                                            ((e.style.width =
                                                r.shapeArgs.width),
                                            r.dataLabel &&
                                                r.dataLabel.css({
                                                    width:
                                                        r.shapeArgs.width + "px"
                                                })),
                                        (r.dlOptions = o(
                                            e,
                                            r.options.dataLabels
                                        ));
                                }),
                                    g.prototype.drawDataLabels.call(this);
                            },
                            alignDataLabel: function(e) {
                                n.column.prototype.alignDataLabel.apply(
                                    this,
                                    arguments
                                ),
                                    e.dataLabel &&
                                        e.dataLabel.attr({
                                            zIndex: (e.node.zIndex || 0) + 1
                                        });
                            },
                            pointAttribs: function(e, t) {
                                var a = m(this.mapOptionsToLevel)
                                        ? this.mapOptionsToLevel
                                        : {},
                                    n = (e && a[e.node.level]) || {},
                                    r = ((a = this.options),
                                    (t && a.states[t]) || {}),
                                    o = (e && e.getClassName()) || "";
                                return (
                                    (e = {
                                        stroke:
                                            (e && e.borderColor) ||
                                            n.borderColor ||
                                            r.borderColor ||
                                            a.borderColor,
                                        "stroke-width": b(
                                            e && e.borderWidth,
                                            n.borderWidth,
                                            r.borderWidth,
                                            a.borderWidth
                                        ),
                                        dashstyle:
                                            (e && e.borderDashStyle) ||
                                            n.borderDashStyle ||
                                            r.borderDashStyle ||
                                            a.borderDashStyle,
                                        fill: (e && e.color) || this.color
                                    }),
                                    -1 !== o.indexOf("highcharts-above-level")
                                        ? ((e.fill = "none"),
                                          (e["stroke-width"] = 0))
                                        : -1 !==
                                          o.indexOf(
                                              "highcharts-internal-node-interactive"
                                          )
                                            ? ((t = b(r.opacity, a.opacity)),
                                              (e.fill = _(e.fill)
                                                  .setOpacity(t)
                                                  .get()),
                                              (e.cursor = "pointer"))
                                            : -1 !==
                                              o.indexOf(
                                                  "highcharts-internal-node"
                                              )
                                                ? (e.fill = "none")
                                                : t &&
                                                  (e.fill = _(e.fill)
                                                      .brighten(r.brightness)
                                                      .get()),
                                    e
                                );
                            },
                            drawPoints: function() {
                                var e = this,
                                    t = p(e.points, function(e) {
                                        return e.node.visible;
                                    });
                                l(t, function(t) {
                                    var a =
                                        "level-group-" + t.node.levelDynamic;
                                    e[a] ||
                                        (e[a] = e.chart.renderer
                                            .g(a)
                                            .attr({
                                                zIndex:
                                                    1e3 - t.node.levelDynamic
                                            })
                                            .add(e.group)),
                                        (t.group = e[a]);
                                }),
                                    n.column.prototype.drawPoints.call(this),
                                    e.options.allowDrillToNode &&
                                        l(t, function(t) {
                                            t.graphic &&
                                                (t.drillId = e.options
                                                    .interactByLeaf
                                                    ? e.drillToByLeaf(t)
                                                    : e.drillToByGroup(t));
                                        });
                            },
                            onClickDrillToNode: function(e) {
                                var t = (e = e.point) && e.drillId;
                                f(t) && (e.setState(""), this.drillToNode(t));
                            },
                            drillToByGroup: function(e) {
                                var t = !1;
                                return (
                                    1 !=
                                        e.node.level -
                                            this.nodeMap[this.rootNode].level ||
                                        e.node.isLeaf ||
                                        (t = e.id),
                                    t
                                );
                            },
                            drillToByLeaf: function(e) {
                                var t = !1;
                                if (
                                    e.node.parent !== this.rootNode &&
                                    e.node.isLeaf
                                )
                                    for (e = e.node; !t; )
                                        (e = this.nodeMap[e.parent]).parent ===
                                            this.rootNode && (t = e.id);
                                return t;
                            },
                            drillUp: function() {
                                var e = this.nodeMap[this.rootNode];
                                e && f(e.parent) && this.drillToNode(e.parent);
                            },
                            drillToNode: function(e, t) {
                                var a = this.nodeMap[e];
                                (this.idPreviousRoot = this.rootNode),
                                    (this.rootNode = e),
                                    "" === e
                                        ? (this.drillUpButton = this.drillUpButton.destroy())
                                        : this.showDrillUpButton(
                                              (a && a.name) || e
                                          ),
                                    (this.isDirty = !0),
                                    b(t, !0) && this.chart.redraw();
                            },
                            showDrillUpButton: function(e) {
                                var t = this;
                                e = e || "< Back";
                                var a,
                                    n,
                                    r = t.options.drillUpButton;
                                r.text && (e = r.text),
                                    this.drillUpButton
                                        ? ((this.drillUpButton.placed = !1),
                                          this.drillUpButton
                                              .attr({text: e})
                                              .align())
                                        : ((n = (a = r.theme) && a.states),
                                          (this.drillUpButton = this.chart.renderer
                                              .button(
                                                  e,
                                                  null,
                                                  null,
                                                  function() {
                                                      t.drillUp();
                                                  },
                                                  a,
                                                  n && n.hover,
                                                  n && n.select
                                              )
                                              .addClass(
                                                  "highcharts-drillup-button"
                                              )
                                              .attr({
                                                  align: r.position.align,
                                                  zIndex: 7
                                              })
                                              .add()
                                              .align(
                                                  r.position,
                                                  !1,
                                                  r.relativeTo || "plotBox"
                                              )));
                            },
                            buildKDTree: i,
                            drawLegendSymbol: e.LegendSymbolMixin.drawRectangle,
                            getExtremes: function() {
                                g.prototype.getExtremes.call(
                                    this,
                                    this.colorValueData
                                ),
                                    (this.valueMin = this.dataMin),
                                    (this.valueMax = this.dataMax),
                                    g.prototype.getExtremes.call(this);
                            },
                            getExtremesFromAll: !0,
                            bindAxes: function() {
                                var t = {
                                    endOnTick: !1,
                                    gridLineWidth: 0,
                                    lineWidth: 0,
                                    min: 0,
                                    dataMin: 0,
                                    minPadding: 0,
                                    max: 100,
                                    dataMax: 100,
                                    maxPadding: 0,
                                    startOnTick: !1,
                                    title: null,
                                    tickPositions: []
                                };
                                g.prototype.bindAxes.call(this),
                                    e.extend(this.yAxis.options, t),
                                    e.extend(this.xAxis.options, t);
                            },
                            utils: {recursive: E, reduce: y}
                        },
                        {
                            getClassName: function() {
                                var t = e.Point.prototype.getClassName.call(
                                        this
                                    ),
                                    a = this.series,
                                    n = a.options;
                                return (
                                    this.node.level <=
                                    a.nodeMap[a.rootNode].level
                                        ? (t += " highcharts-above-level")
                                        : this.node.isLeaf ||
                                          b(
                                              n.interactByLeaf,
                                              !n.allowDrillToNode
                                          )
                                            ? this.node.isLeaf ||
                                              (t += " highcharts-internal-node")
                                            : (t +=
                                                  " highcharts-internal-node-interactive"),
                                    t
                                );
                            },
                            isValid: function() {
                                return this.id || h(this.value);
                            },
                            setState: function(t) {
                                e.Point.prototype.setState.call(this, t),
                                    this.graphic &&
                                        this.graphic.attr({
                                            zIndex: "hover" === t ? 1 : 0
                                        });
                            },
                            setVisible:
                                n.pie.prototype.pointClass.prototype.setVisible
                        }
                    );
                })(
                    e,
                    (function(e) {
                        var t = e.each,
                            a = e.extend,
                            n = e.isArray,
                            r = e.isObject,
                            o = e.isNumber,
                            s = e.merge,
                            i = e.pick,
                            l = e.reduce;
                        return {
                            getColor: function(t, a) {
                                var n,
                                    r,
                                    o,
                                    s,
                                    l = a.index,
                                    c = a.mapOptionsToLevel,
                                    u = a.parentColor,
                                    p = a.parentColorIndex,
                                    d = a.series,
                                    h = a.colors,
                                    m = a.siblings,
                                    f = d.points;
                                return (
                                    t &&
                                        ((f = f[t.i]),
                                        (t = c[t.level] || {}),
                                        (n = f && t.colorByPoint) &&
                                            ((o =
                                                f.index %
                                                (h
                                                    ? h.length
                                                    : d.chart.options.chart
                                                          .colorCount)),
                                            (r = h && h[o])),
                                        (h = f && f.options.color),
                                        (n = t && t.color),
                                        (c = u) &&
                                            (c =
                                                (c = t && t.colorVariation) &&
                                                "brightness" === c.key
                                                    ? e
                                                          .color(u)
                                                          .brighten(
                                                              (l / m) * c.to
                                                          )
                                                          .get()
                                                    : u),
                                        (n = i(h, n, r, c, d.color)),
                                        (s = i(
                                            f && f.options.colorIndex,
                                            t && t.colorIndex,
                                            o,
                                            p,
                                            a.colorIndex
                                        ))),
                                    {color: n, colorIndex: s}
                                );
                            },
                            getLevelOptions: function(e) {
                                var t,
                                    i,
                                    c,
                                    u,
                                    p = null;
                                if (r(e))
                                    for (
                                        p = {},
                                            c = o(e.from) ? e.from : 1,
                                            u = e.levels,
                                            i = {},
                                            t = r(e.defaults) ? e.defaults : {},
                                            n(u) &&
                                                (i = l(
                                                    u,
                                                    function(e, n) {
                                                        var i, l;
                                                        return (
                                                            r(n) &&
                                                                o(n.level) &&
                                                                ((i =
                                                                    "boolean" ==
                                                                    typeof (l = s(
                                                                        {},
                                                                        n
                                                                    ))
                                                                        .levelIsConstant
                                                                        ? l.levelIsConstant
                                                                        : t.levelIsConstant),
                                                                delete l.levelIsConstant,
                                                                delete l.level,
                                                                (n =
                                                                    n.level +
                                                                    (i
                                                                        ? 0
                                                                        : c -
                                                                          1)),
                                                                r(e[n])
                                                                    ? a(e[n], l)
                                                                    : (e[
                                                                          n
                                                                      ] = l)),
                                                            e
                                                        );
                                                    },
                                                    {}
                                                )),
                                            u = o(e.to) ? e.to : 1,
                                            e = 0;
                                        e <= u;
                                        e++
                                    )
                                        p[e] = s({}, t, r(i[e]) ? i[e] : {});
                                return p;
                            },
                            setTreeValues: function e(n, r) {
                                var o = r.before,
                                    s = r.idRoot,
                                    l = r.mapIdToNode[s],
                                    c = r.points[n.i],
                                    u = (c && c.options) || {},
                                    p = 0,
                                    d = [];
                                return (
                                    a(n, {
                                        levelDynamic:
                                            n.level -
                                            ("boolean" !=
                                                typeof r.levelIsConstant ||
                                            r.levelIsConstant
                                                ? 0
                                                : l.level),
                                        name: i(c && c.name, ""),
                                        visible:
                                            s === n.id ||
                                            ("boolean" == typeof r.visible &&
                                                r.visible)
                                    }),
                                    "function" == typeof o && (n = o(n, r)),
                                    t(n.children, function(t, o) {
                                        var s = a({}, r);
                                        a(s, {
                                            index: o,
                                            siblings: n.children.length,
                                            visible: n.visible
                                        }),
                                            (t = e(t, s)),
                                            d.push(t),
                                            t.visible && (p += t.val);
                                    }),
                                    (n.visible = 0 < p || n.visible),
                                    (o = i(u.value, p)),
                                    a(n, {
                                        children: d,
                                        childrenTotal: p,
                                        isLeaf: n.visible && !p,
                                        val: o
                                    }),
                                    n
                                );
                            },
                            updateRootId: function(e) {
                                var t;
                                return (
                                    r(e) &&
                                        ((t = r(e.options) ? e.options : {}),
                                        (t = i(e.rootNode, t.rootId, "")),
                                        r(e.userOptions) &&
                                            (e.userOptions.rootId = t),
                                        (e.rootNode = t)),
                                    t
                                );
                            }
                        };
                    })(e)
                );
            });
        },
        575: function(e, t, a) {
            var n;
            !(function(r) {
                "object" == typeof e && e.exports
                    ? (e.exports = r)
                    : void 0 ===
                          (n = function() {
                              return r;
                          }.call(t, a, t, e)) || (e.exports = n);
            })(function(e) {
                !(function(e) {
                    var t,
                        a = e.addEvent,
                        n = e.Axis,
                        r = e.Chart,
                        o = e.color,
                        s = e.each,
                        i = e.extend,
                        l = e.isNumber,
                        c = e.Legend,
                        u = e.LegendSymbolMixin,
                        p = e.noop,
                        d = e.merge,
                        h = e.pick;
                    e.ColorAxis ||
                        ((t = e.ColorAxis = function() {
                            this.init.apply(this, arguments);
                        }),
                        i(t.prototype, n.prototype),
                        i(t.prototype, {
                            defaultColorAxisOptions: {
                                lineWidth: 0,
                                minPadding: 0,
                                maxPadding: 0,
                                gridLineWidth: 1,
                                tickPixelInterval: 72,
                                startOnTick: !0,
                                endOnTick: !0,
                                offset: 0,
                                marker: {
                                    animation: {duration: 50},
                                    width: 0.01,
                                    color: "#999999"
                                },
                                labels: {overflow: "justify", rotation: 0},
                                minColor: "#e6ebf5",
                                maxColor: "#003399",
                                tickLength: 5,
                                showInLegend: !0
                            },
                            keepProps: [
                                "legendGroup",
                                "legendItemHeight",
                                "legendItemWidth",
                                "legendItem",
                                "legendSymbol"
                            ].concat(n.prototype.keepProps),
                            init: function(e, t) {
                                var a,
                                    r = "vertical" !== e.options.legend.layout;
                                (this.coll = "colorAxis"),
                                    (a = d(
                                        this.defaultColorAxisOptions,
                                        {side: r ? 2 : 1, reversed: !r},
                                        t,
                                        {
                                            opposite: !r,
                                            showEmpty: !1,
                                            title: null,
                                            visible: e.options.legend.enabled
                                        }
                                    )),
                                    n.prototype.init.call(this, e, a),
                                    t.dataClasses && this.initDataClasses(t),
                                    this.initStops(),
                                    (this.horiz = r),
                                    (this.zoomEnabled = !1),
                                    (this.defaultLegendLength = 200);
                            },
                            initDataClasses: function(e) {
                                var t,
                                    a = this.chart,
                                    n = 0,
                                    r = a.options.chart.colorCount,
                                    i = this.options,
                                    l = e.dataClasses.length;
                                (this.dataClasses = t = []),
                                    (this.legendItems = []),
                                    s(e.dataClasses, function(e, s) {
                                        (e = d(e)),
                                            t.push(e),
                                            e.color ||
                                                ("category" === i.dataClassColor
                                                    ? ((s = a.options.colors),
                                                      (r = s.length),
                                                      (e.color = s[n]),
                                                      (e.colorIndex = n),
                                                      ++n === r && (n = 0))
                                                    : (e.color = o(
                                                          i.minColor
                                                      ).tweenTo(
                                                          o(i.maxColor),
                                                          2 > l
                                                              ? 0.5
                                                              : s / (l - 1)
                                                      )));
                                    });
                            },
                            setTickPositions: function() {
                                if (!this.dataClasses)
                                    return n.prototype.setTickPositions.call(
                                        this
                                    );
                            },
                            initStops: function() {
                                (this.stops = this.options.stops || [
                                    [0, this.options.minColor],
                                    [1, this.options.maxColor]
                                ]),
                                    s(this.stops, function(e) {
                                        e.color = o(e[1]);
                                    });
                            },
                            setOptions: function(e) {
                                n.prototype.setOptions.call(this, e),
                                    (this.options.crosshair = this.options.marker);
                            },
                            setAxisSize: function() {
                                var e,
                                    t,
                                    a = this.legendSymbol,
                                    n = this.chart,
                                    r = n.options.legend || {};
                                a
                                    ? ((this.left = r = a.attr("x")),
                                      (this.top = e = a.attr("y")),
                                      (this.width = t = a.attr("width")),
                                      (this.height = a = a.attr("height")),
                                      (this.right = n.chartWidth - r - t),
                                      (this.bottom = n.chartHeight - e - a),
                                      (this.len = this.horiz ? t : a),
                                      (this.pos = this.horiz ? r : e))
                                    : (this.len =
                                          (this.horiz
                                              ? r.symbolWidth
                                              : r.symbolHeight) ||
                                          this.defaultLegendLength);
                            },
                            normalizedValue: function(e) {
                                return (
                                    this.isLog && (e = this.val2lin(e)),
                                    1 -
                                        (this.max - e) /
                                            (this.max - this.min || 1)
                                );
                            },
                            toColor: function(e, t) {
                                var a,
                                    n,
                                    r,
                                    o,
                                    s = this.stops,
                                    i = this.dataClasses;
                                if (i) {
                                    for (o = i.length; o--; )
                                        if (
                                            ((a = (r = i[o]).from),
                                            (s = r.to),
                                            (void 0 === a || e >= a) &&
                                                (void 0 === s || e <= s))
                                        ) {
                                            (n = r.color),
                                                t &&
                                                    ((t.dataClass = o),
                                                    (t.colorIndex =
                                                        r.colorIndex));
                                            break;
                                        }
                                } else {
                                    for (
                                        e = this.normalizedValue(e),
                                            o = s.length;
                                        o-- && !(e > s[o][0]);

                                    );
                                    (a = s[o] || s[o + 1]),
                                        (e =
                                            1 -
                                            ((s = s[o + 1] || a)[0] - e) /
                                                (s[0] - a[0] || 1)),
                                        (n = a.color.tweenTo(s.color, e));
                                }
                                return n;
                            },
                            getOffset: function() {
                                var e = this.legendGroup,
                                    t = this.chart.axisOffset[this.side];
                                e &&
                                    ((this.axisParent = e),
                                    n.prototype.getOffset.call(this),
                                    this.added ||
                                        ((this.added = !0),
                                        (this.labelLeft = 0),
                                        (this.labelRight = this.width)),
                                    (this.chart.axisOffset[this.side] = t));
                            },
                            setLegendColor: function() {
                                var e,
                                    t = this.reversed;
                                (e = t ? 1 : 0),
                                    (t = t ? 0 : 1),
                                    (e = this.horiz
                                        ? [e, 0, t, 0]
                                        : [0, t, 0, e]),
                                    (this.legendColor = {
                                        linearGradient: {
                                            x1: e[0],
                                            y1: e[1],
                                            x2: e[2],
                                            y2: e[3]
                                        },
                                        stops: this.stops
                                    });
                            },
                            drawLegendSymbol: function(e, t) {
                                var a = e.padding,
                                    n = e.options,
                                    r = this.horiz,
                                    o = h(
                                        n.symbolWidth,
                                        r ? this.defaultLegendLength : 12
                                    ),
                                    s = h(
                                        n.symbolHeight,
                                        r ? 12 : this.defaultLegendLength
                                    ),
                                    i = h(n.labelPadding, r ? 16 : 30);
                                n = h(n.itemDistance, 10);
                                this.setLegendColor(),
                                    (t.legendSymbol = this.chart.renderer
                                        .rect(0, e.baseline - 11, o, s)
                                        .attr({zIndex: 1})
                                        .add(t.legendGroup)),
                                    (this.legendItemWidth =
                                        o + a + (r ? n : i)),
                                    (this.legendItemHeight =
                                        s + a + (r ? i : 0));
                            },
                            setState: function(e) {
                                s(this.series, function(t) {
                                    t.setState(e);
                                });
                            },
                            visible: !0,
                            setVisible: p,
                            getSeriesExtremes: function() {
                                var e = this.series,
                                    t = e.length;
                                for (
                                    this.dataMin = 1 / 0, this.dataMax = -1 / 0;
                                    t--;

                                )
                                    e[t].getExtremes(),
                                        void 0 !== e[t].valueMin &&
                                            ((this.dataMin = Math.min(
                                                this.dataMin,
                                                e[t].valueMin
                                            )),
                                            (this.dataMax = Math.max(
                                                this.dataMax,
                                                e[t].valueMax
                                            )));
                            },
                            drawCrosshair: function(e, t) {
                                var a,
                                    r = t && t.plotX,
                                    o = t && t.plotY,
                                    s = this.pos,
                                    i = this.len;
                                t &&
                                    ((a = this.toPixels(t[t.series.colorKey])) <
                                    s
                                        ? (a = s - 2)
                                        : a > s + i && (a = s + i + 2),
                                    (t.plotX = a),
                                    (t.plotY = this.len - a),
                                    n.prototype.drawCrosshair.call(this, e, t),
                                    (t.plotX = r),
                                    (t.plotY = o),
                                    this.cross &&
                                        !this.cross.addedToColorAxis &&
                                        this.legendGroup &&
                                        (this.cross
                                            .addClass(
                                                "highcharts-coloraxis-marker"
                                            )
                                            .add(this.legendGroup),
                                        (this.cross.addedToColorAxis = !0),
                                        this.cross.attr({
                                            fill: this.crosshair.color
                                        })));
                            },
                            getPlotLinePath: function(e, t, a, r, o) {
                                return l(o)
                                    ? this.horiz
                                        ? [
                                              "M",
                                              o - 4,
                                              this.top - 6,
                                              "L",
                                              o + 4,
                                              this.top - 6,
                                              o,
                                              this.top,
                                              "Z"
                                          ]
                                        : [
                                              "M",
                                              this.left,
                                              o,
                                              "L",
                                              this.left - 6,
                                              o + 6,
                                              this.left - 6,
                                              o - 6,
                                              "Z"
                                          ]
                                    : n.prototype.getPlotLinePath.call(
                                          this,
                                          e,
                                          t,
                                          a,
                                          r
                                      );
                            },
                            update: function(e, t) {
                                var a = this.chart,
                                    r = a.legend;
                                s(this.series, function(e) {
                                    e.isDirtyData = !0;
                                }),
                                    e.dataClasses &&
                                        r.allItems &&
                                        (s(r.allItems, function(e) {
                                            e.isDataClass &&
                                                e.legendGroup &&
                                                e.legendGroup.destroy();
                                        }),
                                        (a.isDirtyLegend = !0)),
                                    (a.options[this.coll] = d(
                                        this.userOptions,
                                        e
                                    )),
                                    n.prototype.update.call(this, e, t),
                                    this.legendItem &&
                                        (this.setLegendColor(),
                                        r.colorizeItem(this, !0));
                            },
                            remove: function() {
                                this.legendItem &&
                                    this.chart.legend.destroyItem(this),
                                    n.prototype.remove.call(this);
                            },
                            getDataClassLegendSymbols: function() {
                                var t,
                                    a = this,
                                    n = this.chart,
                                    r = this.legendItems,
                                    o = n.options.legend,
                                    l = o.valueDecimals,
                                    c = o.valueSuffix || "";
                                return (
                                    r.length ||
                                        s(this.dataClasses, function(o, d) {
                                            var h = !0,
                                                m = o.from,
                                                f = o.to;
                                            (t = ""),
                                                void 0 === m
                                                    ? (t = "< ")
                                                    : void 0 === f &&
                                                      (t = "> "),
                                                void 0 !== m &&
                                                    (t +=
                                                        e.numberFormat(m, l) +
                                                        c),
                                                void 0 !== m &&
                                                    void 0 !== f &&
                                                    (t += " - "),
                                                void 0 !== f &&
                                                    (t +=
                                                        e.numberFormat(f, l) +
                                                        c),
                                                r.push(
                                                    i(
                                                        {
                                                            chart: n,
                                                            name: t,
                                                            options: {},
                                                            drawLegendSymbol:
                                                                u.drawRectangle,
                                                            visible: !0,
                                                            setState: p,
                                                            isDataClass: !0,
                                                            setVisible: function() {
                                                                (h = this.visible = !h),
                                                                    s(
                                                                        a.series,
                                                                        function(
                                                                            e
                                                                        ) {
                                                                            s(
                                                                                e.points,
                                                                                function(
                                                                                    e
                                                                                ) {
                                                                                    e.dataClass ===
                                                                                        d &&
                                                                                        e.setVisible(
                                                                                            h
                                                                                        );
                                                                                }
                                                                            );
                                                                        }
                                                                    ),
                                                                    n.legend.colorizeItem(
                                                                        this,
                                                                        h
                                                                    );
                                                            }
                                                        },
                                                        o
                                                    )
                                                );
                                        }),
                                    r
                                );
                            },
                            name: ""
                        }),
                        s(["fill", "stroke"], function(t) {
                            e.Fx.prototype[t + "Setter"] = function() {
                                this.elem.attr(
                                    t,
                                    o(this.start).tweenTo(
                                        o(this.end),
                                        this.pos
                                    ),
                                    null,
                                    !0
                                );
                            };
                        }),
                        a(r, "afterGetAxes", function() {
                            var e = this.options.colorAxis;
                            (this.colorAxis = []), e && new t(this, e);
                        }),
                        a(c, "afterGetAllItems", function(t) {
                            var a = [],
                                n = this.chart.colorAxis[0];
                            for (
                                n &&
                                    n.options &&
                                    n.options.showInLegend &&
                                    (n.options.dataClasses
                                        ? (a = n.getDataClassLegendSymbols())
                                        : a.push(n),
                                    s(n.series, function(a) {
                                        e.erase(t.allItems, a);
                                    })),
                                    n = a.length;
                                n--;

                            )
                                t.allItems.unshift(a[n]);
                        }),
                        a(c, "afterColorizeItem", function(e) {
                            e.visible &&
                                e.item.legendColor &&
                                e.item.legendSymbol.attr({
                                    fill: e.item.legendColor
                                });
                        }),
                        a(c, "afterUpdate", function(e, t, a) {
                            this.chart.colorAxis[0] &&
                                this.chart.colorAxis[0].update({}, a);
                        }));
                })(e),
                    (function(e) {
                        var t = e.defined,
                            a = e.each,
                            n = e.noop,
                            r = e.seriesTypes;
                        (e.colorPointMixin = {
                            isValid: function() {
                                return (
                                    null !== this.value &&
                                    1 / 0 !== this.value &&
                                    -1 / 0 !== this.value
                                );
                            },
                            setVisible: function(e) {
                                var t = this,
                                    n = e ? "show" : "hide";
                                a(["graphic", "dataLabel"], function(e) {
                                    t[e] && t[e][n]();
                                });
                            },
                            setState: function(t) {
                                e.Point.prototype.setState.call(this, t),
                                    this.graphic &&
                                        this.graphic.attr({
                                            zIndex: "hover" === t ? 1 : 0
                                        });
                            }
                        }),
                            (e.colorSeriesMixin = {
                                pointArrayMap: ["value"],
                                axisTypes: ["xAxis", "yAxis", "colorAxis"],
                                optionalAxis: "colorAxis",
                                trackerGroups: [
                                    "group",
                                    "markerGroup",
                                    "dataLabelsGroup"
                                ],
                                getSymbol: n,
                                parallelArrays: ["x", "y", "value"],
                                colorKey: "value",
                                pointAttribs: r.column.prototype.pointAttribs,
                                translateColors: function() {
                                    var e = this,
                                        t = this.options.nullColor,
                                        n = this.colorAxis,
                                        r = this.colorKey;
                                    a(this.data, function(a) {
                                        var o = a[r];
                                        (o =
                                            a.options.color ||
                                            (a.isNull
                                                ? t
                                                : n && void 0 !== o
                                                    ? n.toColor(o, a)
                                                    : a.color || e.color)) &&
                                            (a.color = o);
                                    });
                                },
                                colorAttribs: function(e) {
                                    var a = {};
                                    return (
                                        t(e.color) &&
                                            (a[this.colorProp || "fill"] =
                                                e.color),
                                        a
                                    );
                                }
                            });
                    })(e),
                    (function(e) {
                        var t = e.colorPointMixin,
                            a = e.each,
                            n = e.merge,
                            r = e.noop,
                            o = e.pick,
                            s = e.Series,
                            i = e.seriesType,
                            l = e.seriesTypes;
                        i(
                            "heatmap",
                            "scatter",
                            {
                                animation: !1,
                                borderWidth: 0,
                                nullColor: "#f7f7f7",
                                dataLabels: {
                                    formatter: function() {
                                        return this.point.value;
                                    },
                                    inside: !0,
                                    verticalAlign: "middle",
                                    crop: !1,
                                    overflow: !1,
                                    padding: 0
                                },
                                marker: null,
                                pointRange: null,
                                tooltip: {
                                    pointFormat:
                                        "{point.x}, {point.y}: {point.value}<br/>"
                                },
                                states: {hover: {halo: !1, brightness: 0.2}}
                            },
                            n(e.colorSeriesMixin, {
                                pointArrayMap: ["y", "value"],
                                hasPointSpecificOptions: !0,
                                getExtremesFromAll: !0,
                                directTouch: !0,
                                init: function() {
                                    var e;
                                    l.scatter.prototype.init.apply(
                                        this,
                                        arguments
                                    ),
                                        ((e = this.options).pointRange = o(
                                            e.pointRange,
                                            e.colsize || 1
                                        )),
                                        (this.yAxis.axisPointRange =
                                            e.rowsize || 1);
                                },
                                translate: function() {
                                    var e = this.options,
                                        t = this.xAxis,
                                        n = this.yAxis,
                                        r = e.pointPadding || 0,
                                        s = function(e, t, a) {
                                            return Math.min(Math.max(t, e), a);
                                        };
                                    this.generatePoints(),
                                        a(this.points, function(a) {
                                            var i = (e.colsize || 1) / 2,
                                                l = (e.rowsize || 1) / 2,
                                                c = s(
                                                    Math.round(
                                                        t.len -
                                                            t.translate(
                                                                a.x - i,
                                                                0,
                                                                1,
                                                                0,
                                                                1
                                                            )
                                                    ),
                                                    -t.len,
                                                    2 * t.len
                                                ),
                                                u = ((i = s(
                                                    Math.round(
                                                        t.len -
                                                            t.translate(
                                                                a.x + i,
                                                                0,
                                                                1,
                                                                0,
                                                                1
                                                            )
                                                    ),
                                                    -t.len,
                                                    2 * t.len
                                                )),
                                                s(
                                                    Math.round(
                                                        n.translate(
                                                            a.y - l,
                                                            0,
                                                            1,
                                                            0,
                                                            1
                                                        )
                                                    ),
                                                    -n.len,
                                                    2 * n.len
                                                )),
                                                p = ((l = s(
                                                    Math.round(
                                                        n.translate(
                                                            a.y + l,
                                                            0,
                                                            1,
                                                            0,
                                                            1
                                                        )
                                                    ),
                                                    -n.len,
                                                    2 * n.len
                                                )),
                                                o(a.pointPadding, r));
                                            (a.plotX = a.clientX = (c + i) / 2),
                                                (a.plotY = (u + l) / 2),
                                                (a.shapeType = "rect"),
                                                (a.shapeArgs = {
                                                    x: Math.min(c, i) + p,
                                                    y: Math.min(u, l) + p,
                                                    width:
                                                        Math.abs(i - c) - 2 * p,
                                                    height:
                                                        Math.abs(l - u) - 2 * p
                                                });
                                        }),
                                        this.translateColors();
                                },
                                drawPoints: function() {
                                    l.column.prototype.drawPoints.call(this),
                                        a(
                                            this.points,
                                            function(e) {
                                                e.graphic.attr(
                                                    this.colorAttribs(e)
                                                );
                                            },
                                            this
                                        );
                                },
                                animate: r,
                                getBox: r,
                                drawLegendSymbol:
                                    e.LegendSymbolMixin.drawRectangle,
                                alignDataLabel:
                                    l.column.prototype.alignDataLabel,
                                getExtremes: function() {
                                    s.prototype.getExtremes.call(
                                        this,
                                        this.valueData
                                    ),
                                        (this.valueMin = this.dataMin),
                                        (this.valueMax = this.dataMax),
                                        s.prototype.getExtremes.call(this);
                                }
                            }),
                            e.extend(
                                {
                                    haloPath: function(e) {
                                        if (!e) return [];
                                        var t = this.shapeArgs;
                                        return [
                                            "M",
                                            t.x - e,
                                            t.y - e,
                                            "L",
                                            t.x - e,
                                            t.y + t.height + e,
                                            t.x + t.width + e,
                                            t.y + t.height + e,
                                            t.x + t.width + e,
                                            t.y - e,
                                            "Z"
                                        ];
                                    }
                                },
                                t
                            )
                        );
                    })(e);
            });
        }
    }
]);
