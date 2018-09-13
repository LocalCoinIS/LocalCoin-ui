(window.webpackJsonp = window.webpackJsonp || []).push([
    [15],
    {
        139: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return A;
            }),
                n.d(t, "a", function() {
                    return C;
                });
            var r = n(0),
                o = n.n(r),
                a = n(17),
                l = n(6),
                s = n(12),
                i = n(49),
                c = n(5),
                u = n(15),
                p = n(31),
                f = n(1),
                m = n.n(f),
                b = n(3),
                y = n.n(b),
                h = n(52),
                d = n.n(h),
                v = n(271),
                g = n(42),
                O =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        }
                        return e;
                    },
                _ = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })();
            function E(e, t) {
                var n = {};
                for (var r in e)
                    t.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, r) &&
                            (n[r] = e[r]));
                return n;
            }
            function w(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function j(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function k(e, t) {
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
            var P = (function(e) {
                function t(e) {
                    return (
                        w(this, t),
                        j(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    k(t, v["a"]),
                    _(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                d.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    (function e(t, n, r) {
                                        null === t && (t = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(
                                            t,
                                            n
                                        );
                                        if (void 0 === o) {
                                            var a = Object.getPrototypeOf(t);
                                            return null === a
                                                ? void 0
                                                : e(a, n, r);
                                        }
                                        if ("value" in o) return o.value;
                                        var l = o.get;
                                        return void 0 !== l
                                            ? l.call(r)
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
                                    n = e.toAsset,
                                    r = e.fromAsset,
                                    o = e.fullPrecision,
                                    a = e.marketStats,
                                    l = e.coreAsset;
                                return g.a.convertValue(t, n, r, a, l, o);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    n = e.toAsset,
                                    r = e.fromAsset,
                                    l = e.fullPrecision,
                                    s = E(e, [
                                        "amount",
                                        "toAsset",
                                        "fromAsset",
                                        "fullPrecision"
                                    ]),
                                    i = n.get("id"),
                                    u = n.get("symbol");
                                l || (t = c.a.get_asset_amount(t, r));
                                var p = this.getValue();
                                return p || 0 === p
                                    ? o.a.createElement(
                                          a.a,
                                          O(
                                              {
                                                  noPrefix: !0,
                                                  amount: p,
                                                  asset: i,
                                                  decimalOffset:
                                                      -1 !== u.indexOf("BTC")
                                                          ? 4
                                                          : this.props
                                                                .fullDecimals
                                                              ? 0
                                                              : this.props
                                                                    .noDecimals
                                                                  ? n.get(
                                                                        "precision"
                                                                    )
                                                                  : n.get(
                                                                        "precision"
                                                                    ) - 2
                                              },
                                              s
                                          )
                                      )
                                    : o.a.createElement(
                                          "div",
                                          {
                                              className: "tooltip inline-block",
                                              "data-place": "bottom",
                                              "data-tip": y.a.translate(
                                                  "tooltip.no_price"
                                              ),
                                              style: {fontSize: "0.9rem"}
                                          },
                                          o.a.createElement(m.a, {
                                              content: "account.no_price"
                                          })
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (P.defaultProps = {
                fullPrecision: !0,
                noDecimals: !1,
                fullDecimals: !1,
                hide_asset: !1
            }),
                (P = Object(i.a)(P, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var A = (function(e) {
                function t() {
                    return (
                        w(this, t),
                        j(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    k(t, o.a.Component),
                    _(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    n = E(e, ["refCallback"]);
                                return o.a.createElement(P, O({}, n, {ref: t}));
                            }
                        }
                    ]),
                    t
                );
            })();
            A = Object(u.connect)(A, {
                listenTo: function() {
                    return [p.a];
                },
                getProps: function() {
                    return {marketStats: p.a.getState().allMarketStats};
                }
            });
            var C = (function(e) {
                function t() {
                    return (
                        w(this, t),
                        j(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    k(t, o.a.Component),
                    _(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balance,
                                    n = E(e, ["balance"]),
                                    r = !!t.getIn(["balance", "amount"]),
                                    a = Number(
                                        r
                                            ? t.getIn(["balance", "amount"])
                                            : t.get("balance")
                                    ),
                                    l = r
                                        ? t.getIn(["balance", "asset_id"])
                                        : t.get("asset_type");
                                return isNaN(a)
                                    ? o.a.createElement("span", null, "--")
                                    : o.a.createElement(
                                          A,
                                          O(
                                              {
                                                  amount: a,
                                                  fromAsset: l,
                                                  noDecimals: !0
                                              },
                                              n
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (C.propTypes = {balance: l.a.ChainObject.isRequired}),
                (C = Object(s.a)(C, {keep_updating: !0}));
        },
        4991: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                o = n.n(r),
                a = n(121),
                l = n(8),
                s = n(50),
                i = n.n(s),
                c = n(7),
                u = n.n(c),
                p = n(3),
                f = n.n(p),
                m = n(9),
                b = n.n(m),
                y = n(1),
                h = n.n(y),
                d = n(69),
                v = n(6),
                g = n(12),
                O = n(17),
                _ = n(139),
                E = n(4),
                w = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })();
            function j(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function k(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function P(e, t) {
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
            var A = E.c.operations,
                C = Object.keys(A),
                x = {
                    general: [0, 25, 26, 27, 28, 32, 33, 37, 39, 40],
                    asset: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 41],
                    market: [1, 2, 3, 4, 17, 18],
                    account: [5, 6, 7, 8, 9],
                    business: [20, 21, 22, 23, 24, 29, 30, 31, 34, 35, 36]
                },
                N = [5, 7, 20, 21, 34],
                T = (function(e) {
                    function t(e) {
                        return (
                            j(this, t),
                            k(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e
                                )
                            )
                        );
                    }
                    return (
                        P(t, o.a.Component),
                        w(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return !u.a.is(
                                        e.globalObject,
                                        this.props.globalObject
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.globalObject,
                                        n = e.settings,
                                        r = e.opIds;
                                    e.title;
                                    t = t.toJSON();
                                    var a = E.b.getAsset("1.3.0"),
                                        l = t.parameters.current_fees,
                                        s =
                                            t.parameters
                                                .network_percent_of_fee / 1e4,
                                        i = l.scale,
                                        c = l.parameters,
                                        u = n.get("unit") || a.get("symbol"),
                                        p = f.a.translate(
                                            "transaction.trxTypes"
                                        ),
                                        m = r.map(function(e) {
                                            if (!(e >= c.length)) {
                                                var t = c[e],
                                                    n = t[0],
                                                    r = t[1],
                                                    a = C[n],
                                                    l = p[a],
                                                    m = s;
                                                10 === n && (m = 0.5 + 0.5 * s);
                                                var y = [],
                                                    h = !1,
                                                    d = b()("label", "info");
                                                for (var v in r) {
                                                    var g = (r[v] * i) / 1e4,
                                                        E = g * m,
                                                        w = f.a.translate(
                                                            "transaction.feeTypes"
                                                        ),
                                                        j = g
                                                            ? o.a.createElement(
                                                                  O.a,
                                                                  {
                                                                      amount: g,
                                                                      asset:
                                                                          "1.3.0"
                                                                  }
                                                              )
                                                            : w._none,
                                                        k = g
                                                            ? o.a.createElement(
                                                                  _.b,
                                                                  {
                                                                      fromAsset:
                                                                          "1.3.0",
                                                                      fullPrecision: !0,
                                                                      amount: g,
                                                                      toAsset: u,
                                                                      fullDecimals: !0
                                                                  }
                                                              )
                                                            : w._none,
                                                        P = E
                                                            ? o.a.createElement(
                                                                  O.a,
                                                                  {
                                                                      amount: E,
                                                                      asset:
                                                                          "1.3.0"
                                                                  }
                                                              )
                                                            : w._none,
                                                        A = E
                                                            ? o.a.createElement(
                                                                  _.b,
                                                                  {
                                                                      fromAsset:
                                                                          "1.3.0",
                                                                      fullPrecision: !0,
                                                                      amount: E,
                                                                      toAsset: u,
                                                                      fullDecimals: !0
                                                                  }
                                                              )
                                                            : w._none,
                                                        x = null;
                                                    h ||
                                                        ((h = !0),
                                                        (x = o.a.createElement(
                                                            "td",
                                                            {
                                                                rowSpan: "6",
                                                                style: {
                                                                    width:
                                                                        "15em"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                "span",
                                                                {className: d},
                                                                l
                                                            )
                                                        ))),
                                                        N.indexOf(n) < 0
                                                            ? y.push(
                                                                  o.a.createElement(
                                                                      "tr",
                                                                      {
                                                                          key:
                                                                              n.toString() +
                                                                              v,
                                                                          className:
                                                                              "Annual Membership" ===
                                                                              w[
                                                                                  v
                                                                              ]
                                                                                  ? "linethrough"
                                                                                  : ""
                                                                      },
                                                                      x,
                                                                      o.a.createElement(
                                                                          "td",
                                                                          null,
                                                                          w[v]
                                                                      ),
                                                                      o.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          j,
                                                                          0 !==
                                                                              g &&
                                                                              "LLC" !==
                                                                                  u && [
                                                                                  " / ",
                                                                                  k
                                                                              ]
                                                                      ),
                                                                      o.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          8 !==
                                                                          e
                                                                              ? P
                                                                              : null,
                                                                          8 !==
                                                                              e &&
                                                                              0 !==
                                                                                  g &&
                                                                              "LLC" !==
                                                                                  u && [
                                                                                  " / ",
                                                                                  A
                                                                              ]
                                                                      )
                                                                  )
                                                              )
                                                            : y.push(
                                                                  o.a.createElement(
                                                                      "tr",
                                                                      {
                                                                          key:
                                                                              n.toString() +
                                                                              v
                                                                      },
                                                                      x,
                                                                      o.a.createElement(
                                                                          "td",
                                                                          null,
                                                                          w[v]
                                                                      ),
                                                                      o.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          "- ",
                                                                          o.a.createElement(
                                                                              "sup",
                                                                              null,
                                                                              "*"
                                                                          )
                                                                      ),
                                                                      o.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          P,
                                                                          0 !==
                                                                              g &&
                                                                              "LLC" !==
                                                                                  u && [
                                                                                  " / ",
                                                                                  A
                                                                              ]
                                                                      )
                                                                  )
                                                              );
                                                }
                                                return o.a.createElement(
                                                    "tbody",
                                                    {key: e},
                                                    y
                                                );
                                            }
                                            console.warn(
                                                "Asking for non-existing fee id %d! Check group settings in Fees.jsx",
                                                e
                                            );
                                        });
                                    return o.a.createElement(
                                        "div",
                                        {className: "asset-card"},
                                        o.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            this.props.title
                                        ),
                                        o.a.createElement(
                                            "table",
                                            null,
                                            o.a.createElement(
                                                "thead",
                                                null,
                                                o.a.createElement(
                                                    "tr",
                                                    null,
                                                    o.a.createElement(
                                                        "th",
                                                        null,
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "explorer.block.op"
                                                        })
                                                    ),
                                                    o.a.createElement(
                                                        "th",
                                                        null,
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "explorer.fees.type"
                                                        })
                                                    ),
                                                    o.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "explorer.fees.fee"
                                                        })
                                                    ),
                                                    o.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "explorer.fees.feeltm"
                                                        })
                                                    )
                                                )
                                            ),
                                            m
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (T.propTypes = {globalObject: v.a.ChainObject.isRequired}),
                (T.defaultProps = {globalObject: "2.0.0"}),
                (T = Object(g.a)(T));
            var S = (function(e) {
                    function t() {
                        return (
                            j(this, t),
                            k(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        P(t, o.a.Component),
                        w(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = f.a.translate(
                                            "transaction.feeGroups"
                                        ),
                                        t = [];
                                    for (var n in x) {
                                        var r = e[n],
                                            a = x[n];
                                        t.push(
                                            o.a.createElement(T, {
                                                key: n,
                                                settings: this.props.settings,
                                                opIds: a,
                                                title: r
                                            })
                                        );
                                    }
                                    return o.a.createElement(
                                        "div",
                                        {
                                            className: "grid-block vertical",
                                            style: {overflow: "visible"}
                                        },
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block small-12 shrink",
                                                style: {overflow: "visible"}
                                            },
                                            o.a.createElement(d.a, {
                                                path: "components/Fees"
                                            })
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block small-12 ",
                                                style: {overflow: "visible"}
                                            },
                                            o.a.createElement(
                                                "div",
                                                {className: "grid-content"},
                                                t
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                D = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })();
            var L = (function(e) {
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
                        })(t, o.a.Component),
                        D(t, [
                            {
                                key: "render",
                                value: function() {
                                    return o.a.createElement(
                                        i.a,
                                        {
                                            stores: [l.a],
                                            inject: {
                                                settings: l.a.getState()
                                                    .settings
                                            }
                                        },
                                        o.a.createElement(S, this.props)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                R = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })();
            var I = (function(e) {
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
                    })(t, o.a.Component),
                    R(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = o.a.createElement(L, null);
                                return o.a.createElement(
                                    "div",
                                    {className: "content"},
                                    o.a.createElement(a.a, {
                                        defaultActiveTab: "fees.title",
                                        defaultContent: e
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = I;
        }
    }
]);
