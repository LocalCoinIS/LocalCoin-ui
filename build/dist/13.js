(window.webpackJsonp = window.webpackJsonp || []).push([
    [13, 25],
    {
        210: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(15),
                l = n(14),
                i = n(11),
                s = n(1),
                c = n.n(s),
                u = n(33),
                p = n(287),
                d = n(10),
                h = n(45),
                m = n(131),
                f = n.n(m),
                y = n(8),
                b = n(117),
                g = n(58),
                v = n(3),
                _ = n.n(v),
                k = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            var E = function(e) {
                    var t = e.flag,
                        n = e.width,
                        a = void 0 === n ? 50 : n,
                        o = e.height,
                        l = void 0 === o ? 50 : o;
                    return r.a.createElement("img", {
                        height: l,
                        width: a,
                        src: "/language-dropdown/" + t.toUpperCase() + ".png"
                    });
                },
                w = (function(e) {
                    function t(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                        var n = (function(e, t) {
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
                            (n.state = {
                                step: 1,
                                locales: y.a.getState().defaults.locale,
                                currentLocale: y.a
                                    .getState()
                                    .settings.get("locale")
                            }),
                            n
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
                        k(t, [
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    var e = l.a.getMyAccounts(),
                                        t = r.a.Children.count(
                                            this.props.children
                                        );
                                    this.props.router &&
                                        Array.isArray(e) &&
                                        0 !== e.length &&
                                        0 === t &&
                                        this.props.router.push(
                                            "/account/" +
                                                this.props.currentAccount
                                        );
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    Object(p.a)(function(t) {
                                        e.setState({incognito: t});
                                    });
                                }
                            },
                            {
                                key: "onSelect",
                                value: function(e) {
                                    this.props.router.push(
                                        "/create-account/" + e
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = n(3),
                                        a = r.a.Children.count(
                                            this.props.children
                                        ),
                                        o = r.a.createElement(
                                            f.a,
                                            null,
                                            r.a.createElement(
                                                f.a.Button,
                                                {
                                                    title: "",
                                                    style: {width: "64px"}
                                                },
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        style: {
                                                            padding: "1rem",
                                                            border: "none"
                                                        },
                                                        className:
                                                            "button arrow-down"
                                                    },
                                                    r.a.createElement(E, {
                                                        flag: this.state
                                                            .currentLocale
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                f.a.Content,
                                                null,
                                                r.a.createElement(
                                                    "ul",
                                                    {
                                                        className:
                                                            "no-first-element-top-border"
                                                    },
                                                    this.state.locales.map(
                                                        function(t) {
                                                            return r.a.createElement(
                                                                "li",
                                                                {key: t},
                                                                r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        onClick: function(
                                                                            n
                                                                        ) {
                                                                            n.preventDefault(),
                                                                                b.a.switchLocale(
                                                                                    t
                                                                                ),
                                                                                e.setState(
                                                                                    {
                                                                                        currentLocale: t
                                                                                    }
                                                                                );
                                                                        }
                                                                    },
                                                                    r.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "table-cell"
                                                                        },
                                                                        r.a.createElement(
                                                                            E,
                                                                            {
                                                                                width:
                                                                                    "20",
                                                                                height:
                                                                                    "20",
                                                                                flag: t
                                                                            }
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "table-cell",
                                                                            style: {
                                                                                paddingLeft: 10
                                                                            }
                                                                        },
                                                                        r.a.createElement(
                                                                            c.a,
                                                                            {
                                                                                content:
                                                                                    "languages." +
                                                                                    t
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            );
                                                        }
                                                    )
                                                )
                                            )
                                        );
                                    return r.a.createElement(
                                        "div",
                                        {className: "grid-block align-center"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink vertical"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-content shrink text-center account-creation"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    r.a.createElement("img", {
                                                        src: g.logoLight,
                                                        height: "50px",
                                                        width: "50px"
                                                    })
                                                ),
                                                0 == a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              c.a,
                                                              {
                                                                  content:
                                                                      "header.create_account",
                                                                  component:
                                                                      "h4"
                                                              }
                                                          )
                                                      ),
                                                1 == a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          null,
                                                          r.a.createElement(
                                                              c.a,
                                                              {
                                                                  content:
                                                                      "account.intro_text_title",
                                                                  component:
                                                                      "h4"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              c.a,
                                                              {
                                                                  unsafe: !0,
                                                                  content:
                                                                      "account.intro_text_1",
                                                                  component: "p"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "shrink text-center"
                                                              },
                                                              r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "grp-menu-item overflow-visible account-drop-down"
                                                                  },
                                                                  r.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "grp-menu-item overflow-visible",
                                                                          style: {
                                                                              margin:
                                                                                  "0 auto"
                                                                          },
                                                                          "data-intro": t.translate(
                                                                              "walkthrough.language_flag"
                                                                          )
                                                                      },
                                                                      o
                                                                  )
                                                              )
                                                          )
                                                      ),
                                                a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "grid-block account-login-options"
                                                          },
                                                          r.a.createElement(
                                                              i.b,
                                                              {
                                                                  id:
                                                                      "account_login_button",
                                                                  to:
                                                                      "/create-account/password",
                                                                  className:
                                                                      "button primary",
                                                                  "data-intro": t.translate(
                                                                      "walkthrough.create_cloud_wallet"
                                                                  )
                                                              },
                                                              _.a.translate(
                                                                  "header.create_account"
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "span",
                                                              {
                                                                  id:
                                                                      "account_login_button2",
                                                                  className:
                                                                      "button primary outline",
                                                                  style: {
                                                                      color:
                                                                          "#00195b"
                                                                  },
                                                                  onClick: function() {
                                                                      d.a.changeSetting(
                                                                          {
                                                                              setting:
                                                                                  "passwordLogin",
                                                                              value: !0
                                                                          }
                                                                      ),
                                                                          h.a.unlock.defer();
                                                                  }
                                                              },
                                                              _.a.translate(
                                                                  "header.unlock_short"
                                                              )
                                                          )
                                                      ),
                                                a
                                                    ? null
                                                    : r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "additional-account-options"
                                                          },
                                                          r.a.createElement(
                                                              "h5",
                                                              {
                                                                  style: {
                                                                      textAlign:
                                                                          "center"
                                                                  }
                                                              },
                                                              r.a.createElement(
                                                                  u.a,
                                                                  {
                                                                      string:
                                                                          "account.optional.formatter",
                                                                      keys: [
                                                                          {
                                                                              type:
                                                                                  "link",
                                                                              value:
                                                                                  "/wallet/backup/restore",
                                                                              translation:
                                                                                  "account.optional.restore_link",
                                                                              dataIntro: t.translate(
                                                                                  "walkthrough.restore_account"
                                                                              ),
                                                                              arg:
                                                                                  "restore_link"
                                                                          },
                                                                          {
                                                                              type:
                                                                                  "link",
                                                                              value:
                                                                                  "/create-account/wallet",
                                                                              translation:
                                                                                  "account.optional.restore_form",
                                                                              dataIntro: t.translate(
                                                                                  "walkthrough.create_local_wallet"
                                                                              ),
                                                                              arg:
                                                                                  "restore_form"
                                                                          }
                                                                      ]
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                this.props.children
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            t.default = Object(o.connect)(w, {
                listenTo: function() {
                    return [l.a];
                },
                getProps: function() {
                    return {
                        currentAccount:
                            l.a.getState().currentAccount ||
                            l.a.getState().passwordAccount
                    };
                }
            });
        },
        4989: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(15),
                l = n(37),
                i = n(210),
                s = n(14),
                c = n(105),
                u = n(21),
                p = n(5),
                d = n(8),
                h = n(31),
                m = n(11),
                f = n(4),
                y = n(1),
                b = n.n(y),
                g = n(9),
                v = n.n(g),
                _ = n(3),
                k = n.n(_),
                E = n(10),
                w = n(6),
                O = n(12),
                C = n(22),
                S = n(13),
                N = n(35),
                A = n(43),
                j =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) &&
                                    (e[a] = n[a]);
                        }
                        return e;
                    },
                x = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var n = [],
                                    a = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var l, i = e[Symbol.iterator]();
                                        !(a = (l = i.next()).done) &&
                                        (n.push(l.value), !t || n.length !== t);
                                        a = !0
                                    );
                                } catch (e) {
                                    (r = !0), (o = e);
                                } finally {
                                    try {
                                        !a && i.return && i.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                P = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function M(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function L(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
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
            var H = (function(e) {
                function t() {
                    M(this, t);
                    var e = L(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (e.statsInterval = null), (e.state = {imgError: !1}), e
                    );
                }
                return (
                    I(t, r.a.Component),
                    P(t, [
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
                            value: function(e, t) {
                                return (
                                    this._checkStats(
                                        e.marketStats,
                                        this.props.marketStats
                                    ) ||
                                    e.base.get("id") !==
                                        this.props.base.get("id") ||
                                    e.quote.get("id") !==
                                        this.props.quote.get("id") ||
                                    e.visible !== this.props.visible ||
                                    t.imgError !== this.state.imgError ||
                                    e.starredMarkets.size !==
                                        this.props.starredMarkets
                                );
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._setInterval();
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this._clearInterval();
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                (e.base.get("id") ===
                                    this.props.base.get("id") &&
                                    e.quote.get("id") ===
                                        this.props.quote.get("id")) ||
                                    (this._clearInterval(),
                                    this._setInterval(e));
                            }
                        },
                        {
                            key: "_setInterval",
                            value: function() {
                                var e =
                                        (arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null) || this.props,
                                    t = e.base,
                                    n = e.quote;
                                N.a.getMarketStats(t, n),
                                    (this.statsChecked = new Date()),
                                    (this.statsInterval = setInterval(
                                        N.a.getMarketStats.bind(this, t, n),
                                        35e3
                                    ));
                            }
                        },
                        {
                            key: "_clearInterval",
                            value: function() {
                                clearInterval(this.statsInterval);
                            }
                        },
                        {
                            key: "_onError",
                            value: function(e) {
                                this.state.imgError ||
                                    ((this.refs[e.toLowerCase()].src =
                                        "asset-symbols/bts.png"),
                                    this.setState({imgError: !0}));
                            }
                        },
                        {
                            key: "_toggleFavoriteMarket",
                            value: function(e, t) {
                                var n = e + "_" + t;
                                this.props.starredMarkets.has(n)
                                    ? E.a.removeStarMarket(e, t)
                                    : E.a.addStarMarket(e, t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.base,
                                    n = e.quote,
                                    a = e.marketStats,
                                    o = e.isHidden,
                                    l = e.inverted,
                                    i = e.visible,
                                    s = e.handleHide,
                                    c = e.handleFlip;
                                var u = (function(e) {
                                        var t = e.get("symbol");
                                        if (
                                            "OPEN.BTC" === t ||
                                            "GDEX.BTC" === t
                                        )
                                            return t;
                                        var n = e.get("symbol").split(".");
                                        return 2 === n.length ? n[1] : n[0];
                                    })(n),
                                    d = a
                                        ? parseFloat(a.change) > 0
                                            ? "change-up"
                                            : parseFloat(a.change) < 0
                                                ? "change-down"
                                                : ""
                                        : "",
                                    h = n.get("symbol") + "_" + t.get("symbol"),
                                    f = this.props.starredMarkets.has(h)
                                        ? "gold-star"
                                        : "grey-star";
                                return r.a.createElement(
                                    "tr",
                                    {style: {display: i ? "" : "none"}},
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                onClick: this._toggleFavoriteMarket.bind(
                                                    this,
                                                    n.get("symbol"),
                                                    t.get("symbol")
                                                )
                                            },
                                            r.a.createElement(O.a, {
                                                style: {cursor: "pointer"},
                                                className: f,
                                                name: "fi-star",
                                                title: "icons.fi_star.market"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: {textAlign: "left"}},
                                        r.a.createElement(
                                            m.b,
                                            {
                                                to:
                                                    "/market/" +
                                                    this.props.quote.get(
                                                        "symbol"
                                                    ) +
                                                    "_" +
                                                    this.props.base.get(
                                                        "symbol"
                                                    )
                                            },
                                            r.a.createElement("img", {
                                                ref: u.toLowerCase(),
                                                className: "column-hide-small",
                                                onError: this._onError.bind(
                                                    this,
                                                    u
                                                ),
                                                style: {
                                                    maxWidth: 20,
                                                    marginRight: 10
                                                },
                                                src:
                                                    "/asset-symbols/" +
                                                    u.toLowerCase() +
                                                    ".png"
                                            }),
                                            r.a.createElement(C.a, {
                                                dataPlace: "top",
                                                name: n.get("symbol")
                                            }),
                                            " ",
                                            ":",
                                            " ",
                                            r.a.createElement(C.a, {
                                                dataPlace: "top",
                                                name: t.get("symbol")
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: {textAlign: "right"}},
                                        a && a.price
                                            ? p.a.price_text(
                                                  a.price.toReal(),
                                                  n,
                                                  t
                                              )
                                            : null
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: {textAlign: "right"},
                                            className: v()(d)
                                        },
                                        a ? a.change : null,
                                        "%"
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            className: "column-hide-small",
                                            style: {textAlign: "right"}
                                        },
                                        a
                                            ? p.a.format_volume(
                                                  a.volumeBase,
                                                  t.get("precision")
                                              )
                                            : null
                                    ),
                                    null === l
                                        ? null
                                        : r.a.createElement(
                                              "td",
                                              {className: "column-hide-small"},
                                              r.a.createElement(
                                                  "a",
                                                  {onClick: c},
                                                  r.a.createElement(O.a, {
                                                      name: "shuffle",
                                                      title: "icons.shuffle"
                                                  })
                                              )
                                          ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(
                                            "a",
                                            {
                                                style: {marginRight: 0},
                                                className: o
                                                    ? "action-plus"
                                                    : "order-cancel",
                                                onClick: s
                                            },
                                            r.a.createElement(O.a, {
                                                name: o
                                                    ? "plus-circle"
                                                    : "cross-circle",
                                                title: o
                                                    ? "icons.plus_circle.show_market"
                                                    : "icons.cross_circle.hide_market",
                                                className: "icon-14px"
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
            (H.propTypes = {
                quote: w.a.ChainAsset.isRequired,
                base: w.a.ChainAsset.isRequired
            }),
                (H.defaultProps = {tempComponent: "tr"}),
                (H = Object(S.a)(H)),
                (H = Object(o.connect)(H, {
                    listenTo: function() {
                        return [h.a];
                    },
                    getProps: function(e) {
                        return {
                            marketStats: h.a
                                .getState()
                                .allMarketStats.get(e.marketId),
                            starredMarkets: d.a.getState().starredMarkets
                        };
                    }
                }));
            var T = (function(e) {
                    function t() {
                        M(this, t);
                        var e = L(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = {
                                filter: "",
                                showFlip: !0,
                                showHidden: !1,
                                markets: []
                            }),
                            (e.update = e.update.bind(e)),
                            e
                        );
                    }
                    return (
                        I(t, r.a.Component),
                        P(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    this.update(e);
                                }
                            },
                            {
                                key: "componentWillMount",
                                value: function() {
                                    f.b.subscribe(this.update), this.update();
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    f.b.unsubscribe(this.update);
                                }
                            },
                            {
                                key: "update",
                                value: function() {
                                    var e =
                                            (arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : null) || this.props,
                                        t = !e.forceDirection || e.handleFlip,
                                        n = e.markets
                                            .map(function(n) {
                                                var a = x(n, 2),
                                                    r = a[0],
                                                    o = a[1];
                                                if (e.forceDirection) {
                                                    var l = r + "_" + o;
                                                    return {
                                                        key: l,
                                                        inverted: !t && null,
                                                        marketId: l,
                                                        quote: r,
                                                        base: o,
                                                        isHidden: e.hiddenMarkets.includes(
                                                            l
                                                        )
                                                    };
                                                }
                                                var i = A.a.getMarketName(
                                                        f.b.getAsset(r),
                                                        f.b.getAsset(o)
                                                    ),
                                                    s = i.marketName,
                                                    c = i.first,
                                                    u = i.second;
                                                if (!c || !u) return null;
                                                var p = e.marketDirections.get(
                                                    s
                                                );
                                                if (p) {
                                                    var d = [u, c];
                                                    (c = d[0]), (u = d[1]);
                                                }
                                                return {
                                                    key: s,
                                                    inverted: p,
                                                    marketId:
                                                        c.get("symbol") +
                                                        "_" +
                                                        u.get("symbol"),
                                                    quote: c.get("symbol"),
                                                    base: u.get("symbol"),
                                                    isHidden: e.hiddenMarkets.includes(
                                                        s
                                                    )
                                                };
                                            })
                                            .filter(function(e) {
                                                return null !== e;
                                            });
                                    this.setState({showFlip: t, markets: n});
                                }
                            },
                            {
                                key: "_toggleShowHidden",
                                value: function(e) {
                                    this.state.showHidden !== e &&
                                        this.setState({showHidden: e});
                                }
                            },
                            {
                                key: "_handleFilterInput",
                                value: function(e) {
                                    e.preventDefault(),
                                        this.setState({
                                            filter: e.target.value.toUpperCase()
                                        });
                                }
                            },
                            {
                                key: "_handleHide",
                                value: function(e, t) {
                                    if (this.props.handleHide)
                                        return this.props.handleHide(e, t);
                                    E.a.hideMarket(e.key, t);
                                }
                            },
                            {
                                key: "_handleFlip",
                                value: function(e, t) {
                                    if (this.props.handleFlip)
                                        return this.props.handleFlip(e, t);
                                    E.a.changeMarketDirection(
                                        (function(e, t, n) {
                                            return (
                                                t in e
                                                    ? Object.defineProperty(
                                                          e,
                                                          t,
                                                          {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          }
                                                      )
                                                    : (e[t] = n),
                                                e
                                            );
                                        })({}, e.key, t)
                                    );
                                }
                            },
                            {
                                key: "_renderRadioButton",
                                value: function(e, t) {
                                    var n =
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
                                            checked: n
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
                                        t = this.state,
                                        n = t.markets,
                                        a = t.showFlip,
                                        o = t.showHidden,
                                        l = t.filter;
                                    this.loaded = !0;
                                    var i = 0;
                                    return (
                                        (n = n.map(function(t) {
                                            var n = !0;
                                            if (
                                                t.isHidden !==
                                                e.state.showHidden
                                            )
                                                n = !1;
                                            else if (l) {
                                                var a = f.b.getAsset(t.quote),
                                                    o = f.b.getAsset(t.base),
                                                    s = p.a.replaceName(a)
                                                        .isBitAsset,
                                                    c = p.a.replaceName(o)
                                                        .isBitAsset,
                                                    u = t.quote,
                                                    d = t.base;
                                                if (
                                                    (s && (u = "bit" + u),
                                                    c && (d = "bit" + d),
                                                    l.includes(":"))
                                                ) {
                                                    var h = l
                                                            .split(":")[0]
                                                            .trim(),
                                                        m = l
                                                            .split(":")[1]
                                                            .trim();
                                                    n =
                                                        u
                                                            .toLowerCase()
                                                            .includes(
                                                                String(
                                                                    h
                                                                ).toLowerCase()
                                                            ) &&
                                                        d
                                                            .toLowerCase()
                                                            .includes(
                                                                String(
                                                                    m
                                                                ).toLowerCase()
                                                            );
                                                } else
                                                    n =
                                                        u
                                                            .toLowerCase()
                                                            .includes(
                                                                String(
                                                                    l
                                                                ).toLowerCase()
                                                            ) ||
                                                        d
                                                            .toLowerCase()
                                                            .includes(
                                                                String(
                                                                    l
                                                                ).toLowerCase()
                                                            );
                                            }
                                            return (
                                                n && ++i,
                                                r.a.createElement(
                                                    H,
                                                    j({}, t, {
                                                        visible: n,
                                                        handleHide: e._handleHide.bind(
                                                            e,
                                                            t,
                                                            !t.isHidden
                                                        ),
                                                        handleFlip: e._handleFlip.bind(
                                                            e,
                                                            t,
                                                            !t.inverted
                                                        )
                                                    })
                                                )
                                            );
                                        })),
                                        r.a.createElement(
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
                                                                    onChange: this._handleFilterInput.bind(
                                                                        this
                                                                    )
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
                                                                    k.a.translate(
                                                                        "account.hide_hidden"
                                                                    ),
                                                                    this._toggleShowHidden.bind(
                                                                        this,
                                                                        !1
                                                                    ),
                                                                    !o
                                                                ),
                                                                this._renderRadioButton(
                                                                    k.a.translate(
                                                                        "account.show_hidden"
                                                                    ),
                                                                    this._toggleShowHidden.bind(
                                                                        this,
                                                                        !0
                                                                    ),
                                                                    o
                                                                )
                                                            )
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
                                                            "dashboard__table"
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
                                                                            "left",
                                                                        width:
                                                                            "75px"
                                                                    }
                                                                }
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "left"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
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
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "exchange.price"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "account.hour_24_short"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-small",
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "exchange.volume"
                                                                    }
                                                                )
                                                            ),
                                                            a
                                                                ? r.a.createElement(
                                                                      "th",
                                                                      {
                                                                          className:
                                                                              "column-hide-small"
                                                                      },
                                                                      r.a.createElement(
                                                                          b.a,
                                                                          {
                                                                              content:
                                                                                  "exchange.flip"
                                                                          }
                                                                      )
                                                                  )
                                                                : null,
                                                            r.a.createElement(
                                                                "th",
                                                                null,
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content: o
                                                                            ? "account.perm.show"
                                                                            : "exchange.hide"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "tbody",
                                                        null,
                                                        r.a.createElement(
                                                            "tr",
                                                            {
                                                                className:
                                                                    "table-empty",
                                                                style: {
                                                                    display: i
                                                                        ? "none"
                                                                        : ""
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    colSpan: a
                                                                        ? 6
                                                                        : 5
                                                                },
                                                                r.a.createElement(
                                                                    b.a,
                                                                    {
                                                                        content:
                                                                            "dashboard.table_empty"
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        n
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
                })(),
                q = Object(o.connect)(T, {
                    listenTo: function() {
                        return [d.a];
                    },
                    getProps: function() {
                        var e = d.a.getState();
                        return {
                            marketDirections: e.marketDirections,
                            hiddenMarkets: e.hiddenMarkets
                        };
                    }
                }),
                D = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var n = [],
                                    a = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var l, i = e[Symbol.iterator]();
                                        !(a = (l = i.next()).done) &&
                                        (n.push(l.value), !t || n.length !== t);
                                        a = !0
                                    );
                                } catch (e) {
                                    (r = !0), (o = e);
                                } finally {
                                    try {
                                        !a && i.return && i.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                F = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t;
                    };
                })();
            function R(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function B(e, t) {
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
            var U = (function(e) {
                function t() {
                    return (
                        R(this, t),
                        B(
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
                    F(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.starredMarkets,
                                    t = [];
                                if (e.size) {
                                    var n = !0,
                                        a = !1,
                                        o = void 0;
                                    try {
                                        for (
                                            var l,
                                                i = e
                                                    .values()
                                                    [Symbol.iterator]();
                                            !(n = (l = i.next()).done);
                                            n = !0
                                        ) {
                                            var s = l.value;
                                            t.push([s.quote, s.base]);
                                        }
                                    } catch (e) {
                                        (a = !0), (o = e);
                                    } finally {
                                        try {
                                            !n && i.return && i.return();
                                        } finally {
                                            if (a) throw o;
                                        }
                                    }
                                }
                                return r.a.createElement(q, {
                                    markets: t,
                                    forceDirection: !0
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            U = Object(o.connect)(U, {
                listenTo: function() {
                    return [d.a];
                },
                getProps: function() {
                    return {starredMarkets: d.a.getState().starredMarkets};
                }
            });
            var z = (function(e) {
                function t() {
                    R(this, t);
                    var e = B(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        ),
                        n = u.Apis.instance().chain_id;
                    return (
                        n && (n = n.substr(0, 8)),
                        (e.state = {chainID: n, markets: []}),
                        (e.marketsByChain = (function(e, t, n) {
                            return (
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n),
                                e
                            );
                        })({}, e.state.chainID, [
                            ["USD", "LLC"],
                            ["USD", "CNY"],
                            ["LLC", "CNY"],
                            ["BTC", "LLC"]
                        ])),
                        (e.update = e.update.bind(e)),
                        e
                    );
                }
                return (
                    W(t, r.a.Component),
                    F(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return !p.a.are_equal_shallow(e, this.props);
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this.update();
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.update(e);
                            }
                        },
                        {
                            key: "update",
                            value: function() {
                                var e = (
                                        (arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null) || this.props
                                    ).lowVolumeMarkets,
                                    t =
                                        this.marketsByChain[
                                            this.state.chainID
                                        ] || this.marketsByChain["4018d784"];
                                (t = t.filter(function(t) {
                                    var n = D(t, 2),
                                        a = n[0],
                                        r = n[1];
                                    return !(
                                        e.get(a + "_" + r) || e.get(r + "_" + a)
                                    );
                                })),
                                    this.setState({markets: t});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(q, {
                                    markets: this.state.markets
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            z = Object(o.connect)(z, {
                listenTo: function() {
                    return [h.a];
                },
                getProps: function() {
                    return {lowVolumeMarkets: h.a.getState().lowVolumeMarkets};
                }
            });
            !(function(e) {
                function t() {
                    return (
                        R(this, t),
                        B(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                W(t, r.a.Component),
                    F(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(q, {markets: []});
                            }
                        }
                    ]);
            })();
            var V = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        (a.enumerable = a.enumerable || !1),
                            (a.configurable = !0),
                            "value" in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a);
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t;
                };
            })();
            var J = (function(e) {
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
                    V(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.myActiveAccounts,
                                    n = e.myHiddenAccounts,
                                    a = e.accountsReady,
                                    o = e.passwordAccount;
                                if (!a) return r.a.createElement(l.a, null);
                                if (!(t.size + n.size + (o ? 1 : 0)))
                                    return r.a.createElement(i.default, null);
                                var s = [
                                    {
                                        title: "dashboard.starred_markets",
                                        content: r.a.createElement(U, null)
                                    },
                                    {
                                        title: "dashboard.featured_markets",
                                        content: r.a.createElement(z, null)
                                    }
                                ];
                                return r.a.createElement(
                                    "div",
                                    {className: "content"},
                                    r.a.createElement(c.a, {
                                        items: s,
                                        inner: !0,
                                        dashboardTabsClass: "voting"
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = Object(o.connect)(J, {
                listenTo: function() {
                    return [s.a];
                },
                getProps: function() {
                    var e = s.a.getState(),
                        t = e.myActiveAccounts,
                        n = e.myHiddenAccounts,
                        a = e.passwordAccount,
                        r = e.accountsLoaded,
                        o = e.refsLoaded;
                    return {
                        myActiveAccounts: t,
                        myHiddenAccounts: n,
                        passwordAccount: a,
                        accountsReady: r && o
                    };
                }
            });
        }
    }
]);
