(window.webpackJsonp = window.webpackJsonp || []).push([
    [17, 44],
    {
        241: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                l = a(11),
                s = a(15),
                o = a(8),
                i = a(1),
                c = a.n(i),
                u = a(58),
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
            var p = (function(e) {
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
                    m(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    {className: "page-404"},
                                    r.a.createElement(
                                        "div",
                                        {className: "page-404-container"},
                                        r.a.createElement(
                                            "div",
                                            {className: "page-404-logo"},
                                            r.a.createElement("img", {
                                                src: u.logoLight,
                                                height: "50px",
                                                width: "50px",
                                                alt: "Logo"
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "page-404-title"},
                                            r.a.createElement(c.a, {
                                                content:
                                                    "page404.page_not_found_title"
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "page-404-subtitle"},
                                            r.a.createElement(c.a, {
                                                content:
                                                    "page404." +
                                                    this.props.subtitle
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "page-404-button-back"},
                                            r.a.createElement(
                                                l.b,
                                                {to: "/"},
                                                r.a.createElement(c.a, {
                                                    component: "button",
                                                    className:
                                                        "btn large inverted flat",
                                                    content: "page404.home"
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
            (p.defaultProps = {subtitle: "page_not_found_subtitle"}),
                (t.default = p = Object(s.connect)(p, {
                    listenTo: function() {
                        return [o.a];
                    },
                    getProps: function() {
                        return {theme: o.a.getState().settings.get("themes")};
                    }
                }));
        },
        351: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                l = a(2),
                s = a.n(l),
                o = a(17),
                i = a(6),
                c = a(13),
                u = a(36),
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
            var p = (function(e) {
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
                    m(t, [
                        {
                            key: "getFee",
                            value: function() {
                                return Object(u.c)(
                                    this.props.opType,
                                    this.props.options,
                                    this.props.globalObject
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.opType,
                                    a = e.options,
                                    n = e.globalObject;
                                if (!t || !a || !n) return null;
                                var l = Object(u.c)(t, a, n);
                                return r.a.createElement(o.a, {
                                    amount: l,
                                    asset: "1.3.0"
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            (p.propTypes = {
                globalObject: i.a.ChainObject.isRequired,
                opType: s.a.string,
                options: s.a.array
            }),
                (p.defaultProps = {globalObject: "2.0.0", options: []}),
                (t.a = Object(c.a)(p));
        },
        354: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                l = (a(9), a(1)),
                s = a.n(l),
                o = a(3),
                i = a.n(o),
                c = a(105),
                u = a(43),
                m = a(17),
                p = a(351),
                d = a(77),
                b = a(50),
                f = a(4);
            var _ = function(e, t) {
                    var a =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : function(e) {
                                  return e;
                              };
                    return function(n) {
                        return e.setState(
                            (function(e, t, a) {
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
                            })({}, t, a(n))
                        );
                    };
                },
                h = (function(e) {
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
                        return g.call(a), (a.state = a.initialState()), a;
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
                        t
                    );
                })(),
                g = function() {
                    var e,
                        t = this;
                    (this.onAccountNameChanged = _(this, "funderAccountName")),
                        (this.onAccountChanged = _(this, "newFunderAccount")),
                        (this.onPoolInput = _(
                            this,
                            "fundPoolAmount",
                            ((e = "amount"),
                            function(t) {
                                return t[e];
                            })
                        )),
                        (this.onFundPool = function() {
                            return d.a.fundPool(
                                t.state.newFunderAccount
                                    ? t.state.newFunderAccount.get("id")
                                    : null,
                                t.props.core,
                                t.props.asset,
                                t.state.fundPoolAmount.replace(/,/g, "")
                            );
                        }),
                        (this.reset = function() {
                            t.setState(t.initialState());
                        }),
                        (this.initialState = function() {
                            return {
                                funderAccountName: t.props.funderAccountName,
                                fundPoolAmount: 0
                            };
                        }),
                        (this.render = function() {
                            var e = t.props,
                                a = t.state,
                                n = t.onPoolInput,
                                l = t.onFundPool,
                                o = t.reset,
                                d = t.onAccountNameChanged,
                                b = t.onAccountChanged,
                                _ = e.asset,
                                h = e.core,
                                g = e.hideBalance,
                                E = e.getDynamicObject,
                                y = a.funderAccountName,
                                v = a.fundPoolAmount,
                                k = a.newFunderAccount,
                                O = null;
                            g || (O = E(_.get("dynamic_asset_data_id")));
                            var w = h.get("id") || "1.3.0",
                                x = 0;
                            if (k) {
                                var P = k.getIn(["balances", w]);
                                if (P) {
                                    var A = f.b.getObject(P);
                                    A && (x = A.get("balance"));
                                }
                            }
                            var T = r.a.createElement(
                                "span",
                                null,
                                r.a.createElement(s.a, {
                                    component: "span",
                                    content: "transfer.available"
                                }),
                                ": ",
                                r.a.createElement(m.a, {amount: x, asset: w})
                            );
                            return r.a.createElement(
                                "div",
                                null,
                                r.a.createElement(s.a, {
                                    component: "p",
                                    content:
                                        "explorer.asset.fee_pool.fund_text",
                                    asset: _.get("symbol"),
                                    core: h.get("symbol")
                                }),
                                g ||
                                    r.a.createElement(
                                        "div",
                                        {style: {paddingBottom: "1.5rem"}},
                                        r.a.createElement(s.a, {
                                            content:
                                                "explorer.asset.fee_pool.pool_balance"
                                        }),
                                        r.a.createElement("span", null, ": "),
                                        O
                                            ? r.a.createElement(m.a, {
                                                  amount: O.get("fee_pool"),
                                                  asset: w
                                              })
                                            : null
                                    ),
                                r.a.createElement(c.a, {
                                    label: "transaction.funding_account",
                                    accountName: y,
                                    onChange: d,
                                    onAccountChanged: b,
                                    account: y,
                                    error: null,
                                    tabIndex: 1
                                }),
                                r.a.createElement(u.a, {
                                    label: "transfer.amount",
                                    display_balance: T,
                                    amount: v,
                                    onChange: n,
                                    asset: w,
                                    assets: [w],
                                    placeholder: "0.0",
                                    tabIndex: 2,
                                    style: {width: "100%", paddingTop: 16}
                                }),
                                r.a.createElement(
                                    "div",
                                    {style: {paddingTop: "1rem"}},
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "btn large inverted",
                                            disabled: v <= 0,
                                            onClick: l
                                        },
                                        i.a.translate(
                                            "transaction.trxTypes.asset_fund_fee_pool"
                                        )
                                    ),
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "btn large outline",
                                            onClick: o
                                        },
                                        i.a.translate("account.perm.reset")
                                    ),
                                    r.a.createElement("br", null),
                                    r.a.createElement("br", null),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(s.a, {
                                            content:
                                                "account.user_issued_assets.approx_fee"
                                        }),
                                        ": ",
                                        r.a.createElement(p.a, {
                                            opType: "asset_fund_fee_pool"
                                        })
                                    ),
                                    r.a.createElement("hr", null)
                                )
                            );
                        });
                };
            (h = Object(b.a)(h, {
                propNames: ["asset", "core"],
                defaultProps: {core: "1.3.0"},
                withDynamic: !0
            })),
                (t.a = h);
        },
        4999: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                l = a(11),
                s = a(1),
                o = a.n(s),
                i = a(40),
                c = a(50),
                u = a(17),
                m = a(64),
                p = a(22),
                d = a(154),
                b = a(69),
                f = a(48),
                _ = a(5),
                h = (function() {
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
            var g = (function(e) {
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
                        return (a.state = {time: e.time}), a;
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
                        h(t, [
                            {
                                key: "getHours",
                                value: function(e) {
                                    return e / 3600;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        this.getHours(this.state.time),
                                        "h"
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                E = a(4),
                y = a(21),
                v = a(72),
                k = a(18),
                O = a(241),
                w = a(354),
                x = a(14),
                P = a(15),
                A = a(3),
                T = a.n(A),
                j = a(107),
                N =
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
                S = (function() {
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
            function C(e, t, a) {
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
            function q(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function R(e, t) {
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
            var I = (function(e) {
                    function t() {
                        return (
                            q(this, t),
                            R(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        D(t, r.a.Component),
                        S(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "label",
                                              {className: "btn orange"},
                                              T.a.translate(
                                                  "account.user_issued_assets." +
                                                      a
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                F = (function(e) {
                    function t() {
                        return (
                            q(this, t),
                            R(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        D(t, r.a.Component),
                        S(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.isSet,
                                        a = e.name;
                                    return t
                                        ? r.a.createElement(
                                              "label",
                                              {className: "btn orange"},
                                              T.a.translate(
                                                  "account.user_issued_assets." +
                                                      a
                                              )
                                          )
                                        : r.a.createElement("span", null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                L = (function(e) {
                    function t(e) {
                        q(this, t);
                        var a = R(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {
                                callOrders: [],
                                marginTableSort: "price",
                                sortDirection: !0
                            }),
                            a
                        );
                    }
                    return (
                        D(t, r.a.Component),
                        S(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    if (this.props.asset.has("bitasset")) {
                                        var t,
                                            a = (C(
                                                (t = {}),
                                                this.props.asset.get("id"),
                                                this.props.asset.toJS()
                                            ),
                                            C(
                                                t,
                                                this.props.backingAsset.get(
                                                    "id"
                                                ),
                                                this.props.backingAsset.toJS()
                                            ),
                                            t),
                                            n = this.props.asset.getIn(
                                                [
                                                    "bitasset",
                                                    "is_prediction_market"
                                                ],
                                                !1
                                            ),
                                            r = this.props.asset.getIn([
                                                "bitasset",
                                                "current_feed",
                                                "maximum_short_squeeze_ratio"
                                            ]),
                                            l = this.props.asset.getIn([
                                                "bitasset",
                                                "current_feed",
                                                "settlement_price"
                                            ]);
                                        n &&
                                            l.getIn(["base", "asset_id"]) ===
                                                l.getIn([
                                                    "quote",
                                                    "asset_id"
                                                ]) &&
                                            (a[
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            ] ||
                                                (a[
                                                    this.props.backingAsset.get(
                                                        "id"
                                                    )
                                                ] = {
                                                    precision: this.props.asset.get(
                                                        "precision"
                                                    )
                                                }),
                                            (l = (l = (l = (l = l.setIn(
                                                ["base", "amount"],
                                                1
                                            )).setIn(
                                                ["base", "asset_id"],
                                                this.props.backingAsset.get(
                                                    "id"
                                                )
                                            )).setIn(
                                                ["quote", "amount"],
                                                1
                                            )).setIn(
                                                ["quote", "asset_id"],
                                                this.props.asset.get("id")
                                            )),
                                            (r = 1e3));
                                        try {
                                            var s = new k.c({
                                                priceObject: l,
                                                market_base: this.props.asset.get(
                                                    "id"
                                                ),
                                                sqr: r,
                                                assets: a
                                            });
                                            y.Apis.instance()
                                                .db_api()
                                                .exec("get_call_orders", [
                                                    this.props.asset.get("id"),
                                                    300
                                                ])
                                                .then(function(t) {
                                                    var r = t.map(function(t) {
                                                        return new k.b(
                                                            t,
                                                            a,
                                                            e.props.asset.get(
                                                                "id"
                                                            ),
                                                            s,
                                                            n
                                                        );
                                                    });
                                                    e.setState({callOrders: r});
                                                });
                                        } catch (e) {}
                                    }
                                }
                            },
                            {
                                key: "_toggleSortOrder",
                                value: function(e) {
                                    e !== this.state.marginTableSort
                                        ? this.setState({marginTableSort: e})
                                        : this.setState({
                                              sortDirection: !this.state
                                                  .sortDirection
                                          });
                                }
                            },
                            {
                                key: "_assetType",
                                value: function(e) {
                                    return "bitasset" in e
                                        ? e.bitasset.is_prediction_market
                                            ? "Prediction"
                                            : "Smart"
                                        : "Simple";
                                }
                            },
                            {
                                key: "renderFlagIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        t.map(function(t) {
                                            return r.a.createElement(I, {
                                                key: "flag_" + t,
                                                name: t,
                                                isSet: e[t]
                                            });
                                        })
                                    );
                                }
                            },
                            {
                                key: "renderPermissionIndicators",
                                value: function(e, t) {
                                    return r.a.createElement(
                                        "tr",
                                        null,
                                        r.a.createElement(
                                            "td",
                                            {colspan: "2"},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "table-blocks__item__table__labels"
                                                },
                                                t.map(function(t) {
                                                    return r.a.createElement(
                                                        F,
                                                        {
                                                            key: "perm_" + t,
                                                            name: t,
                                                            isSet: e[t]
                                                        }
                                                    );
                                                })
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "formattedPrice",
                                value: function(e) {
                                    var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1] &&
                                            arguments[1],
                                        a =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2] &&
                                            arguments[2],
                                        n = e.base,
                                        l = e.quote;
                                    return r.a.createElement(m.a, {
                                        base_amount: n.amount,
                                        base_asset: n.asset_id,
                                        quote_amount: l.amount,
                                        quote_asset: l.asset_id,
                                        hide_value: a,
                                        hide_symbols: t
                                    });
                                }
                            },
                            {
                                key: "renderAuthorityList",
                                value: function(e) {
                                    return e.map(function(e) {
                                        return r.a.createElement(
                                            "span",
                                            null,
                                            " ",
                                            r.a.createElement(i.a, {account: e})
                                        );
                                    });
                                }
                            },
                            {
                                key: "renderMarketList",
                                value: function(e, t) {
                                    var a = e.symbol;
                                    return t.map(
                                        function(e) {
                                            if (e == a) return null;
                                            var t = e + "_" + a,
                                                n = e + "/" + a;
                                            return r.a.createElement(
                                                "span",
                                                null,
                                                r.a.createElement(
                                                    l.b,
                                                    {to: "/market/" + t},
                                                    n
                                                ),
                                                " ",
                                                " "
                                            );
                                        }.bind(this)
                                    );
                                }
                            },
                            {
                                key: "renderAboutBox",
                                value: function(e, t) {
                                    var a = E.b.getObject(e.issuer, !1, !1),
                                        n = a ? a.get("name") : "",
                                        s = f.a.parseDescription(
                                            e.options.description
                                        ),
                                        i = s.main,
                                        c = s.short_name ? s.short_name : null,
                                        u = (i =
                                            i && i.length > 0
                                                ? i + " "
                                                : i).match(
                                            /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g
                                        ),
                                        m = E.b.getAsset("1.3.0"),
                                        p = s.market
                                            ? s.market
                                            : m
                                                ? m.get("symbol")
                                                : "LLC";
                                    "bitasset" in e &&
                                        e.bitasset.is_prediction_market &&
                                        (p = (p = E.b.getAsset(
                                            e.bitasset.options
                                                .short_backing_asset
                                        ))
                                            ? p.get("symbol")
                                            : m.get("symbol")),
                                        e.symbol === m.get("symbol") &&
                                            (p = "USD"),
                                        u &&
                                            u.length &&
                                            u.forEach(function(e) {
                                                var t =
                                                    '<a target="_blank" rel="noopener noreferrer" href="' +
                                                    e +
                                                    '">' +
                                                    e +
                                                    "</a>";
                                                i = i.replace(e, t);
                                            });
                                    var d = _.a.replaceName(t),
                                        h = d.name,
                                        g = d.prefix;
                                    return r.a.createElement(
                                        "div",
                                        {style: {overflow: "visible"}},
                                        r.a.createElement(b.a, {
                                            path: "assets/" + e.symbol,
                                            alt_path: "assets/Asset",
                                            section: "summary",
                                            symbol: (g || "") + h,
                                            description: i,
                                            issuer: n,
                                            hide_issuer: "true"
                                        }),
                                        c
                                            ? r.a.createElement("p", null, c)
                                            : null,
                                        r.a.createElement(
                                            "button",
                                            {
                                                className:
                                                    "btn large inverted marketw3c-btn"
                                            },
                                            r.a.createElement(
                                                l.b,
                                                {
                                                    to:
                                                        "/market/" +
                                                        e.symbol +
                                                        "_" +
                                                        p
                                                },
                                                r.a.createElement(o.a, {
                                                    content: "exchange.market"
                                                }),
                                                " ",
                                                r.a.createElement(
                                                    "span",
                                                    null,
                                                    e.symbol,
                                                    " / ",
                                                    p
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderSummary",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options,
                                        n = f.a.getFlagBooleans(
                                            e.options.flags,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        l = Object.keys(n),
                                        s = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.current_supply"
                                                      }),
                                                      " "
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(u.a, {
                                                          amount:
                                                              t.current_supply,
                                                          asset: e.id
                                                      }),
                                                      " "
                                                  )
                                              )
                                            : null,
                                        c = t
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.stealth_supply"
                                                      }),
                                                      " "
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(u.a, {
                                                          amount:
                                                              t.confidential_supply,
                                                          asset: e.id
                                                      }),
                                                      " "
                                                  )
                                              )
                                            : null,
                                        m = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      }),
                                                      " "
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      a.market_fee_percent /
                                                          100,
                                                      " % "
                                                  )
                                              )
                                            : null,
                                        d = n.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.summary.max_market_fee"
                                                      }),
                                                      " "
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(u.a, {
                                                          amount: +a.max_market_fee,
                                                          asset: e.id
                                                      }),
                                                      " "
                                                  )
                                              )
                                            : null;
                                    return r.a.createElement(
                                        "div",
                                        {className: "table-blocks__item"},
                                        r.a.createElement(
                                            "h5",
                                            {
                                                className:
                                                    "table-blocks__item__heading"
                                            },
                                            r.a.createElement(p.a, {
                                                name: e.symbol
                                            })
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table-blocks__item__table"
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.summary.asset_type"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        this._assetType(e),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.summary.issuer"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(i.a, {
                                                            account: e.issuer
                                                        }),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.assets.precision"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        e.precision,
                                                        " "
                                                    )
                                                ),
                                                s,
                                                c,
                                                m,
                                                d
                                            )
                                        ),
                                        this.renderFlagIndicators(n, l)
                                    );
                                }
                            },
                            {
                                key: "renderPriceFeed",
                                value: function(e, t) {
                                    var a = r.a.createElement(o.a, {
                                            content:
                                                "explorer.asset.price_feed.title"
                                        }),
                                        n = e.bitasset;
                                    if (!("current_feed" in n))
                                        return r.a.createElement("div", {
                                            header: a
                                        });
                                    var l = n.current_feed,
                                        s =
                                            n.options
                                                .force_settlement_delay_sec,
                                        i =
                                            n.options
                                                .force_settlement_offset_percent,
                                        c = this.getGlobalSettlementPrice();
                                    return r.a.createElement(
                                        "div",
                                        {className: "table-blocks__item"},
                                        r.a.createElement(
                                            "h5",
                                            {
                                                className:
                                                    "table-blocks__item__heading"
                                            },
                                            a
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table-blocks__item__table"
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.settlement_price"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        this.formattedPrice(
                                                            l.settlement_price
                                                        ),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maintenance_collateral_ratio"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        l.maintenance_collateral_ratio /
                                                            10,
                                                        "%",
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.maximum_short_squeeze_ratio"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        l.maximum_short_squeeze_ratio /
                                                            10,
                                                        "%",
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.global_settlement_price"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        c || "-",
                                                        " "
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table-blocks__item__table",
                                                style: {marginTop: "2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.settlement_delay"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(g, {
                                                            time: s
                                                        }),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed.force_settlement_offset"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        i / 100,
                                                        "% "
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "renderFeePool",
                                value: function(e) {
                                    var t = this.props.getDynamicObject(
                                        e.dynamic_asset_data_id
                                    );
                                    t && (t = t.toJS());
                                    var a = e.options;
                                    return r.a.createElement(
                                        "div",
                                        {className: "table-blocks__item"},
                                        r.a.createElement(
                                            "h5",
                                            {
                                                className:
                                                    "table-blocks__item__heading"
                                            },
                                            T.a.translate(
                                                "explorer.asset.fee_pool.title"
                                            )
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table-blocks__item__table"
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.core_exchange_rate"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        this.formattedPrice(
                                                            a.core_exchange_rate
                                                        ),
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.pool_balance"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        t
                                                            ? r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      asset:
                                                                          "1.3.0",
                                                                      amount:
                                                                          t.fee_pool
                                                                  }
                                                              )
                                                            : null,
                                                        " "
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "tr",
                                                    null,
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.fee_pool.unclaimed_issuer_income"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        " ",
                                                        t
                                                            ? r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      asset:
                                                                          e.id,
                                                                      amount:
                                                                          t.accumulated_fees
                                                                  }
                                                              )
                                                            : null,
                                                        " "
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(w.a, {
                                            asset: e.symbol,
                                            funderAccountName: this.props
                                                .currentAccount,
                                            hideBalance: !0
                                        })
                                    );
                                }
                            },
                            {
                                key: "renderPermissions",
                                value: function(e) {
                                    var t = e.options,
                                        a = f.a.getFlagBooleans(
                                            e.options.issuer_permissions,
                                            this.props.asset.has(
                                                "bitasset_data_id"
                                            )
                                        ),
                                        n = Object.keys(a),
                                        l = a.charge_market_fee
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(o.a, {
                                                          content:
                                                              "explorer.asset.permissions.max_market_fee"
                                                      }),
                                                      " "
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      " ",
                                                      r.a.createElement(u.a, {
                                                          amount: +t.max_market_fee,
                                                          asset: e.id
                                                      }),
                                                      " "
                                                  )
                                              )
                                            : null,
                                        s = r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                r.a.createElement(o.a, {
                                                    content:
                                                        "explorer.asset.permissions.max_supply"
                                                }),
                                                " "
                                            ),
                                            r.a.createElement(
                                                "td",
                                                null,
                                                " ",
                                                r.a.createElement(u.a, {
                                                    amount: +t.max_supply,
                                                    asset: e.id
                                                }),
                                                " "
                                            )
                                        );
                                    a.white_list &&
                                        r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.blacklist_authorities"
                                            }),
                                            ":  ",
                                            this.renderAuthorityList(
                                                t.blacklist_authorities
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.blacklist_markets"
                                            }),
                                            ":  ",
                                            this.renderMarketList(
                                                e,
                                                t.blacklist_markets
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.whitelist_authorities"
                                            }),
                                            ":  ",
                                            this.renderAuthorityList(
                                                t.whitelist_authorities
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(o.a, {
                                                content:
                                                    "explorer.asset.permissions.whitelist_markets"
                                            }),
                                            ":  ",
                                            this.renderMarketList(
                                                e,
                                                t.whitelist_markets
                                            )
                                        );
                                    return r.a.createElement(
                                        "div",
                                        {className: "table-blocks__item"},
                                        r.a.createElement(
                                            "h5",
                                            {
                                                className:
                                                    "table-blocks__item__heading"
                                            },
                                            T.a.translate(
                                                "explorer.asset.permissions.title"
                                            )
                                        ),
                                        r.a.createElement(
                                            "table",
                                            {
                                                className:
                                                    "table key-value-table table-hover",
                                                style: {padding: "1.2rem"}
                                            },
                                            r.a.createElement(
                                                "tbody",
                                                null,
                                                l,
                                                s
                                            )
                                        ),
                                        this.renderPermissionIndicators(a, n)
                                    );
                                }
                            },
                            {
                                key: "getMarginPositions",
                                value: function() {
                                    var e = this.state.sortDirection,
                                        t = {
                                            name: function(t, a) {
                                                var n = E.b.getAccount(
                                                    t.borrower,
                                                    !1
                                                );
                                                n && (n = n.get("name"));
                                                var r = E.b.getAccount(
                                                    a.borrower,
                                                    !1
                                                );
                                                return (
                                                    r && (r = r.get("name")),
                                                    n > r
                                                        ? e
                                                            ? 1
                                                            : -1
                                                        : n < r
                                                            ? e
                                                                ? -1
                                                                : 1
                                                            : 0
                                                );
                                            },
                                            price: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.call_price.toReal() -
                                                        a.call_price.toReal())
                                                );
                                            },
                                            collateral: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a
                                                        .getCollateral()
                                                        .getAmount() -
                                                        t
                                                            .getCollateral()
                                                            .getAmount())
                                                );
                                            },
                                            debt: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (a
                                                        .amountToReceive()
                                                        .getAmount() -
                                                        t
                                                            .amountToReceive()
                                                            .getAmount())
                                                );
                                            },
                                            ratio: function(t, a) {
                                                return (
                                                    (e ? 1 : -1) *
                                                    (t.getRatio() -
                                                        a.getRatio())
                                                );
                                            }
                                        };
                                    return this.state.callOrders.sort(
                                        t[this.state.marginTableSort]
                                    );
                                }
                            },
                            {
                                key: "getGlobalSettlementPriceFromSorted",
                                value: function(e) {
                                    if (
                                        (console.log(
                                            "global settlement sorted called"
                                        ),
                                        !e || e.length <= 0)
                                    )
                                        return (
                                            console.log(
                                                "length array 0 passed in"
                                            ),
                                            null
                                        );
                                    console.log(
                                        "sortedCallOrders exists according to sorted get globa"
                                    );
                                    var t = e[0],
                                        a = t.amountToReceive().getAmount(),
                                        n = t.getCollateral().getAmount();
                                    return r.a.createElement(m.a, {
                                        base_amount: n,
                                        base_asset: t.call_price.base.asset_id,
                                        quote_amount: a,
                                        quote_asset: t.call_price.quote.asset_id
                                    });
                                }
                            },
                            {
                                key: "getGlobalSettlementPrice",
                                value: function() {
                                    if (!this.state.callOrders) return null;
                                    this.state.callOrders;
                                    for (
                                        var e = null,
                                            t = null,
                                            a = this.state.callOrders.length,
                                            n = 0;
                                        n < a;
                                        n++
                                    ) {
                                        var l = this.state.callOrders[n];
                                        null == e
                                            ? ((e = l), (t = l.getRatio()))
                                            : l.getRatio() < t &&
                                              ((t = l.getRatio()), (e = l));
                                    }
                                    if (null == e)
                                        return (
                                            console.log(
                                                "couldn't find the least col short"
                                            ),
                                            null
                                        );
                                    var s = e.amountToReceive().getAmount(),
                                        o = e.getCollateral().getAmount();
                                    return r.a.createElement(m.a, {
                                        base_amount: o,
                                        base_asset: e.call_price.base.asset_id,
                                        quote_amount: s,
                                        quote_asset: e.call_price.quote.asset_id
                                    });
                                }
                            },
                            {
                                key: "renderPriceFeedData",
                                value: function(e, t) {
                                    var a = e.bitasset;
                                    if (
                                        !("feeds" in a) ||
                                        0 == a.feeds.length ||
                                        a.is_prediction_market
                                    )
                                        return null;
                                    var n = new Date().getTime(),
                                        l = new Date(
                                            n -
                                                1e3 *
                                                    e.bitasset.options
                                                        .feed_lifetime_sec
                                        ),
                                        s = a.feeds;
                                    if (
                                        !(s = s
                                            .filter(function(e) {
                                                return new Date(e[1][0]) > l;
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    new Date(t[1][0]) -
                                                    new Date(e[1][0])
                                                );
                                            })).length
                                    )
                                        return null;
                                    for (
                                        var c = [],
                                            p = s[0][1][1].settlement_price,
                                            b = s[0][1][1].core_exchange_rate,
                                            f = r.a.createElement(
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
                                                            }
                                                        },
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.publisher"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.settlement_price"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            p,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.core_exchange_rate"
                                                        }),
                                                        r.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        "(",
                                                        this.formattedPrice(
                                                            b,
                                                            !1,
                                                            !0
                                                        ),
                                                        ")"
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maintenance_collateral_ratio"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.maximum_short_squeeze_ratio"
                                                        }),
                                                        " "
                                                    ),
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        " ",
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "explorer.asset.price_feed_data.published"
                                                        }),
                                                        " "
                                                    )
                                                )
                                            ),
                                            _ = 0;
                                        _ < s.length;
                                        _++
                                    ) {
                                        var h = s[_],
                                            g = h[0],
                                            E = new Date(h[1][0] + "Z"),
                                            y = h[1][1].settlement_price,
                                            k = h[1][1].core_exchange_rate,
                                            O =
                                                h[1][1]
                                                    .maintenance_collateral_ratio /
                                                    10 +
                                                "%",
                                            w =
                                                h[1][1]
                                                    .maximum_short_squeeze_ratio /
                                                    10 +
                                                "%";
                                        c.push(
                                            r.a.createElement(
                                                "tr",
                                                {key: g},
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    " ",
                                                    r.a.createElement(i.a, {
                                                        account: g
                                                    }),
                                                    " "
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    this.formattedPrice(y, !0)
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    " ",
                                                    this.formattedPrice(k, !0),
                                                    " "
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    " ",
                                                    O
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    " ",
                                                    w
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(d.a, {
                                                        time: E
                                                    })
                                                )
                                            )
                                        );
                                    }
                                    var x = r.a.createElement(
                                            "thead",
                                            null,
                                            r.a.createElement(
                                                "tr",
                                                null,
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "name"
                                                        ),
                                                        style: {
                                                            textAlign: "left"
                                                        }
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.borrower"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "collateral"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.collateral"
                                                    }),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      amount: this.state.callOrders[0]
                                                                          .getCollateral()
                                                                          .getAmount(),
                                                                      asset: this.state.callOrders[0].getCollateral()
                                                                          .asset_id,
                                                                      hide_amount: !0
                                                                  }
                                                              ),
                                                              " ",
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "debt"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "transaction.borrow_amount"
                                                    }),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      amount: this.state.callOrders[0]
                                                                          .amountToReceive()
                                                                          .getAmount(),
                                                                      asset: this.state.callOrders[0].amountToReceive()
                                                                          .asset_id,
                                                                      hide_amount: !0
                                                                  }
                                                              ),
                                                              " ",
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        style: {
                                                            paddingRight: 10
                                                        },
                                                        className: "clickable"
                                                    },
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            onClick: this._toggleSortOrder.bind(
                                                                this,
                                                                "price"
                                                            )
                                                        },
                                                        r.a.createElement(o.a, {
                                                            content:
                                                                "exchange.call"
                                                        })
                                                    ),
                                                    this.state.callOrders.length
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              " (",
                                                              r.a.createElement(
                                                                  m.a,
                                                                  {
                                                                      base_amount: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .base
                                                                          .amount,
                                                                      base_asset: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .base
                                                                          .asset_id,
                                                                      quote_amount: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .quote
                                                                          .amount,
                                                                      quote_asset: this
                                                                          .state
                                                                          .callOrders[0]
                                                                          .call_price
                                                                          .quote
                                                                          .asset_id,
                                                                      hide_value: !0,
                                                                      noPopOver: !0
                                                                  }
                                                              ),
                                                              ")"
                                                          )
                                                        : null
                                                ),
                                                r.a.createElement(
                                                    "th",
                                                    {
                                                        className: "clickable",
                                                        onClick: this._toggleSortOrder.bind(
                                                            this,
                                                            "ratio"
                                                        )
                                                    },
                                                    r.a.createElement(o.a, {
                                                        content:
                                                            "borrow.coll_ratio"
                                                    })
                                                )
                                            )
                                        ),
                                        P = t.map(function(e) {
                                            return r.a.createElement(
                                                "tr",
                                                {
                                                    className: "margin-row",
                                                    key: e.id
                                                },
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    r.a.createElement(i.a, {
                                                        account: e.borrower
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(u.a, {
                                                        amount: e
                                                            .getCollateral()
                                                            .getAmount(),
                                                        asset: e.getCollateral()
                                                            .asset_id,
                                                        hide_asset: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    r.a.createElement(u.a, {
                                                        amount: e
                                                            .amountToReceive()
                                                            .getAmount(),
                                                        asset: e.amountToReceive()
                                                            .asset_id,
                                                        hide_asset: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "right",
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    r.a.createElement(m.a, {
                                                        base_amount:
                                                            e.call_price.base
                                                                .amount,
                                                        base_asset:
                                                            e.call_price.base
                                                                .asset_id,
                                                        quote_amount:
                                                            e.call_price.quote
                                                                .amount,
                                                        quote_asset:
                                                            e.call_price.quote
                                                                .asset_id,
                                                        hide_symbols: !0
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        className: e.getStatus(),
                                                        style: {
                                                            textAlign: "right"
                                                        }
                                                    },
                                                    e.getRatio().toFixed(3)
                                                )
                                            );
                                        });
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-block"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-content no-padding"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {className: ""},
                                                r.a.createElement(
                                                    v.b,
                                                    {
                                                        defaultActiveTab: 0,
                                                        segmented: !1,
                                                        setting:
                                                            "bitassetDataTabs"
                                                    },
                                                    r.a.createElement(
                                                        v.a,
                                                        {
                                                            title:
                                                                "explorer.asset.price_feed_data.title"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "responsive-table"
                                                            },
                                                            r.a.createElement(
                                                                "table",
                                                                {
                                                                    className:
                                                                        " table order-table table-hover",
                                                                    style: {
                                                                        padding:
                                                                            "1.2rem"
                                                                    }
                                                                },
                                                                f,
                                                                r.a.createElement(
                                                                    "tbody",
                                                                    null,
                                                                    c
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        v.a,
                                                        {
                                                            title:
                                                                "explorer.asset.margin_positions.title"
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    " table order-table table-hover",
                                                                style: {
                                                                    padding:
                                                                        "1.2rem"
                                                                }
                                                            },
                                                            x,
                                                            r.a.createElement(
                                                                "tbody",
                                                                null,
                                                                P
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.asset.toJS(),
                                        t = this.getMarginPositions(),
                                        a =
                                            "bitasset" in e
                                                ? this.renderPriceFeed(e, t)
                                                : null;
                                    "bitasset" in e &&
                                        this.renderPriceFeedData(e, t);
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className: "content",
                                            style: {margin: 20}
                                        },
                                        r.a.createElement(
                                            "h2",
                                            {className: "content__heading"},
                                            r.a.createElement(j.a, {
                                                showIcon: !0,
                                                asset: e.id
                                            })
                                        ),
                                        this.renderAboutBox(
                                            e,
                                            this.props.asset
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "table-blocks"},
                                            this.renderSummary(e),
                                            a || this.renderPermissions(e),
                                            this.renderFeePool(e),
                                            a ? this.renderPermissions(e) : null
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (L = Object(P.connect)(L, {
                listenTo: function() {
                    return [x.a];
                },
                getProps: function() {
                    y.Apis.instance().chain_id;
                    return {
                        currentAccount:
                            x.a.getState().currentAccount ||
                            x.a.getState().passwordAccount
                    };
                }
            })),
                (L = Object(c.a)(L, {propNames: ["backingAsset"]}));
            var B = (function(e) {
                function t() {
                    return (
                        q(this, t),
                        R(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    D(t, r.a.Component),
                    S(t, [
                        {
                            key: "render",
                            value: function() {
                                if (null === this.props.asset)
                                    return r.a.createElement(O.default, {
                                        subtitle: "asset_not_found_subtitle"
                                    });
                                var e = this.props.asset.has("bitasset")
                                    ? this.props.asset.getIn([
                                          "bitasset",
                                          "options",
                                          "short_backing_asset"
                                      ])
                                    : "1.3.0";
                                return r.a.createElement(
                                    L,
                                    N({}, this.props, {backingAsset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            B = Object(c.a)(B, {withDynamic: !0});
            var z = (function(e) {
                function t() {
                    return (
                        q(this, t),
                        R(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    D(t, r.a.Component),
                    S(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.params.symbol.toUpperCase();
                                return r.a.createElement(
                                    B,
                                    N({}, this.props, {asset: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = z;
        },
        72: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return E;
            }),
                a.d(t, "a", function() {
                    return g;
                });
            var n = a(0),
                r = a.n(n),
                l = a(2),
                s = a.n(l),
                o = (a(1), a(9)),
                i = a.n(o),
                c = a(15),
                u = a(10),
                m = a(8),
                p = a(3),
                d = a.n(p),
                b = (function() {
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
            function _(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function h(e, t) {
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
            var g = (function(e) {
                function t() {
                    return (
                        f(this, t),
                        _(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    h(t, r.a.Component),
                    b(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    a = e.index,
                                    n = e.changeTab,
                                    l = e.title,
                                    s = e.className,
                                    o = e.updatedTab,
                                    c = e.disabled,
                                    u = e.subText,
                                    m = i()({"is-active": t}, s);
                                return (
                                    "string" == typeof l &&
                                        l.indexOf(".") > 0 &&
                                        (l = d.a.translate(l)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          r.a.createElement(
                                              "option",
                                              {
                                                  value: a,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              r.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  l,
                                                  o ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : r.a.createElement(
                                              "li",
                                              {
                                                  className: m,
                                                  onClick: c
                                                      ? null
                                                      : n.bind(
                                                            this,
                                                            a,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              r.a.createElement(
                                                  "a",
                                                  null,
                                                  r.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      l,
                                                      o ? "*" : ""
                                                  ),
                                                  u &&
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "tab-subtext"
                                                          },
                                                          u
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
            (g.propTypes = {
                changeTab: s.a.func,
                isActive: s.a.bool.isRequired,
                index: s.a.number.isRequired,
                className: s.a.string,
                isLinkTo: s.a.string,
                subText: s.a.oneOfType([s.a.object, s.a.string])
            }),
                (g.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var E = (function(e) {
                function t(e) {
                    f(this, t);
                    var a = _(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (a._setDimensions = a._setDimensions.bind(a)),
                        a
                    );
                }
                return (
                    h(t, r.a.Component),
                    b(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this._setDimensions(),
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = e.viewSettings.get(e.setting);
                                t !==
                                    this.props.viewSettings.get(
                                        this.props.setting
                                    ) && this.setState({activeTab: t});
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener(
                                    "resize",
                                    this._setDimensions
                                );
                            }
                        },
                        {
                            key: "_setDimensions",
                            value: function() {
                                var e = window.innerWidth;
                                e !== this.state.width &&
                                    this.setState({width: e});
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e, t) {
                                e !== this.state.activeTab &&
                                    ("" === t
                                        ? (this.props.setting &&
                                              u.a.changeViewSetting(
                                                  (function(e, t, a) {
                                                      return (
                                                          t in e
                                                              ? Object.defineProperty(
                                                                    e,
                                                                    t,
                                                                    {
                                                                        value: a,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    }
                                                                )
                                                              : (e[t] = a),
                                                          e
                                                      );
                                                  })({}, this.props.setting, e)
                                              ),
                                          this.setState({activeTab: e}),
                                          this.props.onChangeTab &&
                                              this.props.onChangeTab(e))
                                        : this.context.router.push(t));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.children,
                                    n = t.contentClass,
                                    l = t.tabsClass,
                                    s = t.style,
                                    o = t.segmented,
                                    c =
                                        this.state.width < 900 &&
                                        r.a.Children.count(a) > 2,
                                    u = null,
                                    m = r.a.Children.map(a, function(t, a) {
                                        if (!t) return null;
                                        if (c && t.props.disabled) return null;
                                        var n = a === e.state.activeTab;
                                        return (
                                            n && (u = t.props.children),
                                            r.a.cloneElement(t, {
                                                collapsed: c,
                                                isActive: n,
                                                changeTab: e._changeTab.bind(e),
                                                index: a
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = m[0].props.children),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: i()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            r.a.createElement(
                                                "ul",
                                                {
                                                    style: s,
                                                    className: i()(
                                                        "button-group no-margin",
                                                        l,
                                                        {segmented: o}
                                                    )
                                                },
                                                c
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "select",
                                                              {
                                                                  value: this
                                                                      .state
                                                                      .activeTab,
                                                                  style: {
                                                                      marginTop: 10,
                                                                      marginBottom: 10
                                                                  },
                                                                  className:
                                                                      "bts-select",
                                                                  onChange: function(
                                                                      t
                                                                  ) {
                                                                      var a = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          a,
                                                                          t
                                                                              .target[
                                                                              a
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              m
                                                          )
                                                      )
                                                    : m,
                                                this.props.actionButtons
                                                    ? r.a.createElement(
                                                          "li",
                                                          {
                                                              className:
                                                                  "tabs-action-buttons"
                                                          },
                                                          this.props
                                                              .actionButtons
                                                      )
                                                    : null
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: i()("tab-content", n)},
                                            u
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (E.propTypes = {
                setting: s.a.string,
                defaultActiveTab: s.a.number,
                segmented: s.a.bool
            }),
                (E.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (E.contextTypes = {router: s.a.object.isRequired}),
                (E = Object(c.connect)(E, {
                    listenTo: function() {
                        return [m.a];
                    },
                    getProps: function() {
                        return {viewSettings: m.a.getState().viewSettings};
                    }
                }));
        }
    }
]);
