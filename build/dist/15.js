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
                a = n.n(r),
                o = n(17),
                i = n(6),
                l = n(12),
                s = n(49),
                c = n(5),
                u = n(15),
                p = n(31),
                f = n(1),
                m = n.n(f),
                b = n(3),
                h = n.n(b),
                y = n(52),
                d = n.n(y),
                g = n(271),
                v = n(42),
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
            function k(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function w(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function j(e, t) {
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
                        k(this, t),
                        w(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    j(t, g["a"]),
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
                                        var a = Object.getOwnPropertyDescriptor(
                                            t,
                                            n
                                        );
                                        if (void 0 === a) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, n, r);
                                        }
                                        if ("value" in a) return a.value;
                                        var i = a.get;
                                        return void 0 !== i
                                            ? i.call(r)
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
                                    a = e.fullPrecision,
                                    o = e.marketStats,
                                    i = e.coreAsset;
                                return v.a.convertValue(t, n, r, o, i, a);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    n = e.toAsset,
                                    r = e.fromAsset,
                                    i = e.fullPrecision,
                                    l = E(e, [
                                        "amount",
                                        "toAsset",
                                        "fromAsset",
                                        "fullPrecision"
                                    ]),
                                    s = n.get("id"),
                                    u = n.get("symbol");
                                i || (t = c.a.get_asset_amount(t, r));
                                var p = this.getValue();
                                return p || 0 === p
                                    ? a.a.createElement(
                                          o.a,
                                          O(
                                              {
                                                  noPrefix: !0,
                                                  amount: p,
                                                  asset: s,
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
                                              l
                                          )
                                      )
                                    : a.a.createElement(
                                          "div",
                                          {
                                              className: "tooltip inline-block",
                                              "data-place": "bottom",
                                              "data-tip": h.a.translate(
                                                  "tooltip.no_price"
                                              ),
                                              style: {fontSize: "0.9rem"}
                                          },
                                          a.a.createElement(m.a, {
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
                (P = Object(s.a)(P, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var A = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        w(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    j(t, a.a.Component),
                    _(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    n = E(e, ["refCallback"]);
                                return a.a.createElement(P, O({}, n, {ref: t}));
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
                        k(this, t),
                        w(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    j(t, a.a.Component),
                    _(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balance,
                                    n = E(e, ["balance"]),
                                    r = !!t.getIn(["balance", "amount"]),
                                    o = Number(
                                        r
                                            ? t.getIn(["balance", "amount"])
                                            : t.get("balance")
                                    ),
                                    i = r
                                        ? t.getIn(["balance", "asset_id"])
                                        : t.get("asset_type");
                                return isNaN(o)
                                    ? a.a.createElement("span", null, "--")
                                    : a.a.createElement(
                                          A,
                                          O(
                                              {
                                                  amount: o,
                                                  fromAsset: i,
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
            (C.propTypes = {balance: i.a.ChainObject.isRequired}),
                (C = Object(l.a)(C, {keep_updating: !0}));
        },
        4991: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                a = n.n(r),
                o = n(121),
                i = n(8),
                l = n(50),
                s = n.n(l),
                c = n(7),
                u = n.n(c),
                p = n(3),
                f = n.n(p),
                m = n(9),
                b = n.n(m),
                h = n(1),
                y = n.n(h),
                d = n(69),
                g = n(6),
                v = n(12),
                O = n(17),
                _ = n(139),
                E = n(4),
                k = (function() {
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
                T = [5, 7, 20, 21, 34],
                N = (function(e) {
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
                        P(t, a.a.Component),
                        k(t, [
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
                                    var o = E.b.getAsset("1.3.0"),
                                        i = t.parameters.current_fees,
                                        l =
                                            t.parameters
                                                .network_percent_of_fee / 1e4,
                                        s = i.scale,
                                        c = i.parameters,
                                        u = n.get("unit") || o.get("symbol"),
                                        p = f.a.translate(
                                            "transaction.trxTypes"
                                        ),
                                        m = r.map(function(e) {
                                            if (!(e >= c.length)) {
                                                var t = c[e],
                                                    n = t[0],
                                                    r = t[1],
                                                    o = C[n],
                                                    i = p[o],
                                                    m = l;
                                                10 === n && (m = 0.5 + 0.5 * l);
                                                var h = [],
                                                    y = !1,
                                                    d = b()("label", "info");
                                                for (var g in r) {
                                                    var v = (r[g] * s) / 1e4,
                                                        E = v * m,
                                                        k = f.a.translate(
                                                            "transaction.feeTypes"
                                                        ),
                                                        w = v
                                                            ? a.a.createElement(
                                                                  O.a,
                                                                  {
                                                                      amount: v,
                                                                      asset:
                                                                          "1.3.0"
                                                                  }
                                                              )
                                                            : k._none,
                                                        j = v
                                                            ? a.a.createElement(
                                                                  _.b,
                                                                  {
                                                                      fromAsset:
                                                                          "1.3.0",
                                                                      fullPrecision: !0,
                                                                      amount: v,
                                                                      toAsset: u,
                                                                      fullDecimals: !0
                                                                  }
                                                              )
                                                            : k._none,
                                                        P = E
                                                            ? a.a.createElement(
                                                                  O.a,
                                                                  {
                                                                      amount: E,
                                                                      asset:
                                                                          "1.3.0"
                                                                  }
                                                              )
                                                            : k._none,
                                                        A = E
                                                            ? a.a.createElement(
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
                                                            : k._none,
                                                        x = null;
                                                    y ||
                                                        ((y = !0),
                                                        (x = a.a.createElement(
                                                            "td",
                                                            {
                                                                rowSpan: "6",
                                                                style: {
                                                                    width:
                                                                        "15em"
                                                                }
                                                            },
                                                            a.a.createElement(
                                                                "span",
                                                                {className: d},
                                                                i
                                                            )
                                                        ))),
                                                        T.indexOf(n) < 0
                                                            ? h.push(
                                                                  a.a.createElement(
                                                                      "tr",
                                                                      {
                                                                          key:
                                                                              n.toString() +
                                                                              g,
                                                                          className:
                                                                              "Annual Membership" ===
                                                                              k[
                                                                                  g
                                                                              ]
                                                                                  ? "linethrough"
                                                                                  : ""
                                                                      },
                                                                      x,
                                                                      a.a.createElement(
                                                                          "td",
                                                                          null,
                                                                          k[g]
                                                                      ),
                                                                      a.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          w,
                                                                          0 !==
                                                                              v &&
                                                                              "LLC" !==
                                                                                  u && [
                                                                                  " / ",
                                                                                  j
                                                                              ]
                                                                      ),
                                                                      a.a.createElement(
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
                                                                                  v &&
                                                                              "LLC" !==
                                                                                  u && [
                                                                                  " / ",
                                                                                  A
                                                                              ]
                                                                      )
                                                                  )
                                                              )
                                                            : h.push(
                                                                  a.a.createElement(
                                                                      "tr",
                                                                      {
                                                                          key:
                                                                              n.toString() +
                                                                              g
                                                                      },
                                                                      x,
                                                                      a.a.createElement(
                                                                          "td",
                                                                          null,
                                                                          k[g]
                                                                      ),
                                                                      a.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          "- ",
                                                                          a.a.createElement(
                                                                              "sup",
                                                                              null,
                                                                              "*"
                                                                          )
                                                                      ),
                                                                      a.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          P,
                                                                          0 !==
                                                                              v &&
                                                                              "LLC" !==
                                                                                  u && [
                                                                                  " / ",
                                                                                  A
                                                                              ]
                                                                      )
                                                                  )
                                                              );
                                                }
                                                return a.a.createElement(
                                                    "tbody",
                                                    {key: e},
                                                    h
                                                );
                                            }
                                            console.warn(
                                                "Asking for non-existing fee id %d! Check group settings in Fees.jsx",
                                                e
                                            );
                                        });
                                    return a.a.createElement(
                                        "div",
                                        {className: "asset-card"},
                                        a.a.createElement(
                                            "div",
                                            {className: "card-divider"},
                                            this.props.title
                                        ),
                                        a.a.createElement(
                                            "table",
                                            null,
                                            a.a.createElement(
                                                "thead",
                                                null,
                                                a.a.createElement(
                                                    "tr",
                                                    null,
                                                    a.a.createElement(
                                                        "th",
                                                        null,
                                                        a.a.createElement(y.a, {
                                                            content:
                                                                "explorer.block.op"
                                                        })
                                                    ),
                                                    a.a.createElement(
                                                        "th",
                                                        null,
                                                        a.a.createElement(y.a, {
                                                            content:
                                                                "explorer.fees.type"
                                                        })
                                                    ),
                                                    a.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        a.a.createElement(y.a, {
                                                            content:
                                                                "explorer.fees.fee"
                                                        })
                                                    ),
                                                    a.a.createElement(
                                                        "th",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        a.a.createElement(y.a, {
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
            (N.propTypes = {globalObject: g.a.ChainObject.isRequired}),
                (N.defaultProps = {globalObject: "2.0.0"}),
                (N = Object(v.a)(N));
            var S = (function(e) {
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
                        P(t, a.a.Component),
                        k(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = f.a.translate(
                                            "transaction.feeGroups"
                                        ),
                                        t = [];
                                    for (var n in x) {
                                        var r = e[n],
                                            o = x[n];
                                        t.push(
                                            a.a.createElement(N, {
                                                key: n,
                                                settings: this.props.settings,
                                                opIds: o,
                                                title: r
                                            })
                                        );
                                    }
                                    return a.a.createElement(
                                        "div",
                                        {
                                            className: "grid-block vertical",
                                            style: {overflow: "visible"}
                                        },
                                        a.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block small-12 shrink",
                                                style: {overflow: "visible"}
                                            },
                                            a.a.createElement(d.a, {
                                                path: "components/Fees"
                                            })
                                        ),
                                        a.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block small-12 ",
                                                style: {overflow: "visible"}
                                            },
                                            a.a.createElement(
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
                        })(t, a.a.Component),
                        D(t, [
                            {
                                key: "dikiHack",
                                value: function() {
                                    var e = [
                                            [
                                                "Price per KByte Transaction Size",
                                                "highlight-all"
                                            ],
                                            [
                                                "Symbols with 4 Characters",
                                                "highlight-all"
                                            ],
                                            [
                                                "Fee for Premium Names",
                                                "highlight-all"
                                            ],
                                            [
                                                "Lifetime Membership",
                                                "highlight-all"
                                            ]
                                        ],
                                        t = document.getElementsByTagName("td");
                                    if (t.length < 50) return !1;
                                    for (var n in t)
                                        for (var r in e) {
                                            var a = t[n].innerHTML,
                                                o = e[r][0];
                                            try {
                                                a.indexOf(o) > -1 &&
                                                    (t[n].parentNode.className =
                                                        e[r][1]);
                                            } catch (e) {}
                                        }
                                    return !0;
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function(e, t) {
                                    this.dikiHack() ||
                                        setTimeout(this.dikiHack, 1e3);
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this.dikiHack() ||
                                        setTimeout(this.dikiHack, 1e3);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return a.a.createElement(
                                        s.a,
                                        {
                                            stores: [i.a],
                                            inject: {
                                                settings: i.a.getState()
                                                    .settings
                                            }
                                        },
                                        a.a.createElement(S, this.props)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                H = (function() {
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
            var M = (function(e) {
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
                    })(t, a.a.Component),
                    H(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = a.a.createElement(L, null);
                                return a.a.createElement(
                                    "div",
                                    {className: "content"},
                                    a.a.createElement(o.a, {
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
            t.default = M;
        }
    }
]);
