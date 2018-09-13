(window.webpackJsonp = window.webpackJsonp || []).push([
    [21],
    {
        120: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                s = a(1),
                o = a.n(s),
                i = a(4),
                l = a(6),
                c = a(12),
                u = a(3),
                p = a.n(u),
                h = a(172),
                m = a(17),
                f = a(7),
                d = a.n(f),
                y = a(9),
                b = a.n(y),
                g = a(49),
                k = a(2),
                v = a.n(k),
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
            function E(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function S(e, t) {
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
            var M = (function(e) {
                function t() {
                    return (
                        E(this, t),
                        S(
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
                                return 0 !== this.props.assets.length &&
                                    this.props.value
                                    ? r.a.createElement(h.a, {
                                          entries: this.props.assets
                                              .map(function(e) {
                                                  return e && e.get("symbol");
                                              })
                                              .filter(function(e) {
                                                  return !!e;
                                              }),
                                          values: this.props.assets.reduce(
                                              function(e, t) {
                                                  return (
                                                      t &&
                                                          t.get("symbol") &&
                                                          (e[
                                                              t.get("symbol")
                                                          ] = t),
                                                      e
                                                  );
                                              },
                                              {}
                                          ),
                                          singleEntry: this.props.assets[0]
                                              ? r.a.createElement(m.a, {
                                                    asset: this.props.assets[0].get(
                                                        "id"
                                                    ),
                                                    amount: 0,
                                                    hide_amount: !0
                                                })
                                              : null,
                                          value: "",
                                          onChange: this.props.onChange
                                      })
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (M.propTypes = {value: v.a.string, onChange: v.a.func}),
                (M = Object(g.a)(M, {asList: !0}));
            var x = (function(e) {
                function t() {
                    return (
                        E(this, t),
                        S(
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
                            key: "getAsset",
                            value: function() {
                                return this.props.asset;
                            }
                        },
                        {
                            key: "getError",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : this.props.assetInput,
                                    t = this.props.error;
                                return (
                                    t ||
                                        !e ||
                                        this.getNameType(e) ||
                                        (t = p.a.translate(
                                            "explorer.asset.invalid",
                                            {name: e}
                                        )),
                                    t
                                );
                            }
                        },
                        {
                            key: "getNameType",
                            value: function(e) {
                                return e
                                    ? i.d.is_valid_symbol_error(e, !0)
                                        ? null
                                        : "symbol"
                                    : null;
                            }
                        },
                        {
                            key: "onInputChanged",
                            value: function(e) {
                                var t = e.target.value
                                    .trim()
                                    .substr(0, 16)
                                    .toUpperCase();
                                this.props.onChange &&
                                    t !== this.props.assetInput &&
                                    this.props.onChange(t);
                            }
                        },
                        {
                            key: "onKeyDown",
                            value: function(e) {
                                13 === e.keyCode &&
                                    (this.onFound(e), this.onAction(e));
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.props.onFound &&
                                    this.props.asset &&
                                    this.props.onFound(this.props.asset);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.props.onFound &&
                                    e.asset !== this.props.asset &&
                                    this.props.onFound(e.asset);
                            }
                        },
                        {
                            key: "onFound",
                            value: function(e) {
                                e.preventDefault(),
                                    !this.props.onFound ||
                                        this.getError() ||
                                        this.props.disableActionButton ||
                                        (this.props.asset &&
                                            this.props.onFound(
                                                this.props.asset
                                            ));
                            }
                        },
                        {
                            key: "onAssetSelect",
                            value: function(e) {
                                e &&
                                    (this.props.onFound(e),
                                    this.props.onChange(e.get("symbol")));
                            }
                        },
                        {
                            key: "onAction",
                            value: function(e) {
                                e.preventDefault(),
                                    !this.props.onAction ||
                                        this.getError() ||
                                        this.props.disableActionButton ||
                                        (this.props.asset &&
                                            this.props.onAction(
                                                this.props.asset
                                            ));
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.disabled,
                                    a = e.noLabel,
                                    n = this.getError(),
                                    s = void 0;
                                t ||
                                    (this.props.asset
                                        ? (s = this.props.asset.get("symbol"))
                                        : !n &&
                                          this.props.assetInput &&
                                          (n = p.a.translate(
                                              "explorer.asset.not_found",
                                              {name: this.props.assetInput}
                                          )));
                                var i = b()("button", {
                                    disabled:
                                        !this.props.asset ||
                                        n ||
                                        this.props.disableActionButton
                                });
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "asset-selector",
                                        style: this.props.style
                                    },
                                    r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {className: "header-area"},
                                            n || a
                                                ? null
                                                : r.a.createElement(
                                                      "label",
                                                      {
                                                          className:
                                                              "right-label"
                                                      },
                                                      "  ",
                                                      r.a.createElement(
                                                          "span",
                                                          null,
                                                          s
                                                      )
                                                  ),
                                            r.a.createElement(o.a, {
                                                component: "label",
                                                content: this.props.label
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "input-area"},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                r.a.createElement("input", {
                                                    style: this.props
                                                        .inputStyle,
                                                    disabled: this.props
                                                        .disabled,
                                                    type: "text",
                                                    value:
                                                        this.props.assetInput ||
                                                        "",
                                                    placeholder:
                                                        this.props
                                                            .placeholder ||
                                                        p.a.translate(
                                                            "explorer.assets.symbol"
                                                        ),
                                                    ref: "user_input",
                                                    onChange: this.onInputChanged.bind(
                                                        this
                                                    ),
                                                    onKeyDown: this.onKeyDown.bind(
                                                        this
                                                    ),
                                                    tabIndex: this.props
                                                        .tabIndex
                                                }),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    this.props.asset
                                                        ? r.a.createElement(M, {
                                                              ref: this.props
                                                                  .refCallback,
                                                              value: this.props.asset.get(
                                                                  "symbol"
                                                              ),
                                                              assets: d.a.List(
                                                                  this.props
                                                                      .assets
                                                              ),
                                                              onChange: this.onAssetSelect.bind(
                                                                  this
                                                              )
                                                          })
                                                        : null
                                                ),
                                                this.props.children,
                                                this.props.onAction
                                                    ? r.a.createElement(
                                                          "button",
                                                          {
                                                              className: i,
                                                              onClick: this.onAction.bind(
                                                                  this
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              o.a,
                                                              {
                                                                  content: this
                                                                      .props
                                                                      .action_label
                                                              }
                                                          )
                                                      )
                                                    : null
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "error-area",
                                                style: {paddingBottom: "10px"}
                                            },
                                            r.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        wordBreak: "break-all"
                                                    }
                                                },
                                                n
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
            (x.propTypes = {
                label: v.a.string,
                error: v.a.string,
                placeholder: v.a.string,
                onChange: v.a.func,
                onFound: v.a.func,
                assetInput: v.a.string,
                asset: l.a.ChainAsset,
                tabIndex: v.a.number,
                disableActionButton: v.a.string
            }),
                (x.defaultProps = {disabled: !1}),
                (t.a = Object(c.a)(x));
        },
        352: function(e, t, a) {
            "use strict";
            var n = a(76),
                r = a(0),
                s = a.n(r),
                o = a(7),
                i = a.n(o),
                l = a(58),
                c = a.n(l),
                u = a(5),
                p = a(1),
                h = a.n(p),
                m = a(32),
                f = a(15),
                d = a(17),
                y = a(49),
                b = a(6),
                g = a(12),
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
            var v = (function(e) {
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
                    })(t, s.a.Component),
                    k(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.props.account
                                    ? s.a.createElement(
                                          "span",
                                          null,
                                          this.props.account.get("name")
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (v.propTypes = {account: b.a.ChainObject.isRequired}),
                (v.defaultProps = {autosubscribe: !1});
            var _ = Object(g.a)(v),
                E = a(13),
                S = a(34),
                w = a(10),
                M = a(2),
                x = a.n(M),
                C = (function() {
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
            var O = (function(e) {
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
                    return (e.statsInterval = null), e;
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
                    })(t, s.a.Component),
                    C(t, [
                        {
                            key: "_onClick",
                            value: function(e) {
                                "/market/" + e !==
                                    this.context.router.location.pathname &&
                                    (S.a.switchMarket(),
                                    this.context.router.push("/market/" + e));
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                S.a.getMarketStats(
                                    this.props.base,
                                    this.props.quote
                                ),
                                    (this.statsChecked = new Date()),
                                    (this.statsInterval = setInterval(
                                        S.a.getMarketStats.bind(
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
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return !u.a.are_equal_shallow(e, this.props);
                            }
                        },
                        {
                            key: "_onStar",
                            value: function(e, t, a) {
                                a.preventDefault(),
                                    this.props.starred
                                        ? w.a.removeStarMarket(e, t)
                                        : w.a.addStarMarket(e, t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.quote,
                                    n = t.base,
                                    r = (t.noSymbols, t.stats),
                                    o = t.starred;
                                if (!a || !n) return null;
                                var i = a.get("symbol") + "_" + n.get("symbol"),
                                    l = a.get("symbol") + ":" + n.get("symbol"),
                                    c = this.props.getDynamicObject(
                                        a.get("dynamic_asset_data_id")
                                    ),
                                    p = this.props.getDynamicObject(
                                        n.get("dynamic_asset_data_id")
                                    ),
                                    h = u.a.convertPrice(a, n),
                                    m = {};
                                this.props.leftAlign && (m.textAlign = "left");
                                var f = "button outline",
                                    y = null;
                                this.props.compact &&
                                    ((f += " no-margin"),
                                    (y = {
                                        marginBottom: 0,
                                        fontSize: "0.75rem",
                                        padding: "4px 10px",
                                        borderRadius: "0px",
                                        letterSpacing: "0.05rem"
                                    }));
                                var b = this.props.columns
                                        .map(function(t) {
                                            switch (t.name) {
                                                case "star":
                                                    var m = o
                                                        ? "gold-star"
                                                        : "grey-star";
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onStar.bind(
                                                                e,
                                                                a.get("symbol"),
                                                                n.get("symbol")
                                                            ),
                                                            key: t.index
                                                        },
                                                        s.a.createElement(E.a, {
                                                            className: m,
                                                            name: "fi-star",
                                                            title:
                                                                "icons.fi_star.symbol"
                                                        })
                                                    );
                                                case "vol":
                                                    var b = r
                                                        ? r.volumeBase
                                                        : 0;
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            className:
                                                                "text-right",
                                                            key: t.index
                                                        },
                                                        u.a.format_volume(b)
                                                    );
                                                case "change":
                                                    var g = u.a.format_number(
                                                            r && r.change
                                                                ? r.change
                                                                : 0,
                                                            2
                                                        ),
                                                        k =
                                                            "0.00" === g
                                                                ? ""
                                                                : g > 0
                                                                    ? "change-up"
                                                                    : "change-down";
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            className:
                                                                "text-right " +
                                                                k,
                                                            key: t.index
                                                        },
                                                        g + "%"
                                                    );
                                                case "marketName":
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        s.a.createElement(
                                                            "div",
                                                            {
                                                                className: f,
                                                                style: y
                                                            },
                                                            l
                                                        )
                                                    );
                                                case "market":
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        e.props.name
                                                    );
                                                case "price":
                                                    var v =
                                                            r && r.price
                                                                ? r.price.toReal()
                                                                : r &&
                                                                  r.close &&
                                                                  r.close.quote
                                                                      .amount &&
                                                                  r.close.base
                                                                      .amount
                                                                    ? u.a.get_asset_price(
                                                                          r
                                                                              .close
                                                                              .quote
                                                                              .amount,
                                                                          a,
                                                                          r
                                                                              .close
                                                                              .base
                                                                              .amount,
                                                                          n,
                                                                          !0
                                                                      )
                                                                    : u.a.get_asset_price(
                                                                          h
                                                                              .quote
                                                                              .amount,
                                                                          a,
                                                                          h.base
                                                                              .amount,
                                                                          n,
                                                                          !0
                                                                      ),
                                                        S = 6;
                                                    return (
                                                        -1 !==
                                                            [
                                                                "BTC",
                                                                "OPEN.BTC",
                                                                "TRADE.BTC",
                                                                "GOLD",
                                                                "SILVER"
                                                            ].indexOf(
                                                                n.get("symbol")
                                                            ) && (S = 8),
                                                        s.a.createElement(
                                                            "td",
                                                            {
                                                                onClick: e._onClick.bind(
                                                                    e,
                                                                    i
                                                                ),
                                                                className:
                                                                    "text-right",
                                                                key: t.index
                                                            },
                                                            u.a.format_number(
                                                                v,
                                                                v > 1e3
                                                                    ? 0
                                                                    : v > 10
                                                                        ? 2
                                                                        : S
                                                            )
                                                        )
                                                    );
                                                case "quoteSupply":
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        c
                                                            ? s.a.createElement(
                                                                  d.a,
                                                                  {
                                                                      style: {
                                                                          fontWeight:
                                                                              "bold"
                                                                      },
                                                                      amount: parseInt(
                                                                          c.get(
                                                                              "current_supply"
                                                                          ),
                                                                          10
                                                                      ),
                                                                      asset: a.get(
                                                                          "id"
                                                                      )
                                                                  }
                                                              )
                                                            : null
                                                    );
                                                case "baseSupply":
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        p
                                                            ? s.a.createElement(
                                                                  d.a,
                                                                  {
                                                                      style: {
                                                                          fontWeight:
                                                                              "bold"
                                                                      },
                                                                      amount: parseInt(
                                                                          p.get(
                                                                              "current_supply"
                                                                          ),
                                                                          10
                                                                      ),
                                                                      asset: n.get(
                                                                          "id"
                                                                      )
                                                                  }
                                                              )
                                                            : null
                                                    );
                                                case "issuer":
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        s.a.createElement(_, {
                                                            account: a.get(
                                                                "issuer"
                                                            )
                                                        })
                                                    );
                                                case "add":
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            },
                                                            key: t.index,
                                                            onClick: e.props.onCheckMarket.bind(
                                                                e,
                                                                i
                                                            )
                                                        },
                                                        s.a.createElement(
                                                            "input",
                                                            {
                                                                type:
                                                                    "checkbox",
                                                                checked:
                                                                    !!e.props
                                                                        .isChecked ||
                                                                    e.props
                                                                        .isDefault,
                                                                disabled:
                                                                    e.props
                                                                        .isDefault,
                                                                "data-tip": e
                                                                    .props
                                                                    .isDefault
                                                                    ? "This market is a default market and cannot be removed"
                                                                    : null
                                                            }
                                                        )
                                                    );
                                                case "remove":
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            key: t.index,
                                                            className:
                                                                "clickable",
                                                            onClick:
                                                                e.props
                                                                    .removeMarket
                                                        },
                                                        s.a.createElement(
                                                            "span",
                                                            {
                                                                style: {
                                                                    marginBottom:
                                                                        "6px",
                                                                    marginRight:
                                                                        "6px",
                                                                    zIndex: 999
                                                                },
                                                                className:
                                                                    "text float-right remove"
                                                            },
                                                            "–"
                                                        )
                                                    );
                                            }
                                        })
                                        .sort(function(e, t) {
                                            return e.key > t.key;
                                        }),
                                    g = "clickable";
                                return (
                                    this.props.current &&
                                        (g += " activeMarket"),
                                    s.a.createElement(
                                        "tr",
                                        {className: g, style: m},
                                        b
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (O.defaultProps = {noSymbols: !1}),
                (O.contextTypes = {router: x.a.object.isRequired});
            var T = Object(y.a)(O, {
                    propNames: ["quote", "base"],
                    defaultProps: {tempComponent: "tr"},
                    withDynamic: !0
                }),
                j = a(8),
                A = a(31),
                N = a(106),
                B = a(22),
                P = a(77),
                I = a(9),
                q = a.n(I),
                D = a(120),
                W = a(3),
                L = a.n(W),
                R = a(37),
                F = a(4),
                U = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var a = [],
                                    n = !0,
                                    r = !1,
                                    s = void 0;
                                try {
                                    for (
                                        var o, i = e[Symbol.iterator]();
                                        !(n = (o = i.next()).done) &&
                                        (a.push(o.value), !t || a.length !== t);
                                        n = !0
                                    );
                                } catch (e) {
                                    (r = !0), (s = e);
                                } finally {
                                    try {
                                        !n && i.return && i.return();
                                    } finally {
                                        if (r) throw s;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                z = (function() {
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
            function V(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function H(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Q(e, t) {
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
            var J = new Date(),
                K = (function(e) {
                    function t(e) {
                        V(this, t);
                        var a = H(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (a.state = a._getInitialState(e)), a;
                    }
                    return (
                        Q(t, s.a.Component),
                        z(t, [
                            {
                                key: "_getInitialState",
                                value: function(e) {
                                    var t =
                                        !!e.findMarketTab ||
                                        e.viewSettings.get(
                                            "myMarketsBase_" + e.index
                                        );
                                    return {
                                        open: void 0 === t || t,
                                        inverseSort: e.viewSettings.get(
                                            "myMarketsInvert",
                                            !0
                                        ),
                                        sortBy: e.viewSettings.get(
                                            "myMarketsSort",
                                            "volume"
                                        ),
                                        inputValue: ""
                                    };
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.findMarketTab !==
                                        this.props.findMarketTab &&
                                        this.setState(this._getInitialState(e));
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        !e.markets ||
                                        !this.props.markets ||
                                        (!u.a.are_equal_shallow(
                                            t,
                                            this.state
                                        ) ||
                                            !u.a.are_equal_shallow(
                                                e.markets,
                                                this.props.markets
                                            ) ||
                                            e.starredMarkets !==
                                                this.props.starredMarkets ||
                                            e.marketStats !==
                                                this.props.marketStats ||
                                            e.userMarkets !==
                                                this.props.userMarkets)
                                    );
                                }
                            },
                            {
                                key: "_inverseSort",
                                value: function() {
                                    w.a.changeViewSetting({
                                        myMarketsInvert: !this.state
                                            .myMarketsInvert
                                    }),
                                        this.setState({
                                            inverseSort: !this.state.inverseSort
                                        });
                                }
                            },
                            {
                                key: "_changeSort",
                                value: function(e) {
                                    e !== this.state.sortBy
                                        ? (w.a.changeViewSetting({
                                              myMarketsSort: e
                                          }),
                                          this.setState({sortBy: e}))
                                        : this._inverseSort();
                                }
                            },
                            {
                                key: "_onToggle",
                                value: function(e) {
                                    if (!this.props.findMarketTab) {
                                        var t = !this.state.open;
                                        this.setState({open: t});
                                        var a = {};
                                        (a[
                                            "myMarketsBase_" + this.props.index
                                        ] = t),
                                            w.a.changeViewSetting(a);
                                    }
                                }
                            },
                            {
                                key: "_onToggleUserMarket",
                                value: function(e) {
                                    var t = e.split("_"),
                                        a = U(t, 2),
                                        n = a[0],
                                        r = a[1],
                                        s = !this.props.userMarkets.get(e);
                                    w.a.setUserMarket(n, r, s);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.columns,
                                        n = t.markets,
                                        r = t.base,
                                        o = t.marketStats,
                                        i = t.starredMarkets,
                                        l = t.current,
                                        c = (t.findMarketTab, this.state),
                                        u = c.sortBy,
                                        p = c.inverseSort,
                                        m = c.open;
                                    if (!n || !n.length) return null;
                                    var f = a.map(function(t) {
                                            switch (t.name) {
                                                case "market":
                                                    return s.a.createElement(
                                                        "th",
                                                        {
                                                            key: t.name,
                                                            className:
                                                                "clickable",
                                                            onClick: e._changeSort.bind(
                                                                e,
                                                                "name"
                                                            )
                                                        },
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "exchange.market"
                                                        })
                                                    );
                                                case "vol":
                                                    return s.a.createElement(
                                                        "th",
                                                        {
                                                            key: t.name,
                                                            className:
                                                                "clickable",
                                                            onClick: e._changeSort.bind(
                                                                e,
                                                                "volume"
                                                            ),
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "exchange.vol_short"
                                                        })
                                                    );
                                                case "price":
                                                    return s.a.createElement(
                                                        "th",
                                                        {
                                                            key: t.name,
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    );
                                                case "quoteSupply":
                                                    return s.a.createElement(
                                                        "th",
                                                        {key: t.name},
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "exchange.quote_supply"
                                                        })
                                                    );
                                                case "baseSupply":
                                                    return s.a.createElement(
                                                        "th",
                                                        {key: t.name},
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "exchange.base_supply"
                                                        })
                                                    );
                                                case "change":
                                                    return s.a.createElement(
                                                        "th",
                                                        {
                                                            key: t.name,
                                                            className:
                                                                "clickable",
                                                            onClick: e._changeSort.bind(
                                                                e,
                                                                "change"
                                                            ),
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "exchange.change"
                                                        })
                                                    );
                                                case "issuer":
                                                    return s.a.createElement(
                                                        "th",
                                                        {key: t.name},
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "explorer.assets.issuer"
                                                        })
                                                    );
                                                case "add":
                                                    return s.a.createElement(
                                                        "th",
                                                        {
                                                            key: t.name,
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "account.perm.confirm_add"
                                                        })
                                                    );
                                                default:
                                                    return s.a.createElement(
                                                        "th",
                                                        {key: t.name}
                                                    );
                                            }
                                        }),
                                        d = n
                                            .map(function(t) {
                                                return s.a.createElement(T, {
                                                    key: t.id,
                                                    name:
                                                        "others" === r
                                                            ? s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  s.a.createElement(
                                                                      B.a,
                                                                      {
                                                                          name:
                                                                              t.quote
                                                                      }
                                                                  ),
                                                                  ":",
                                                                  s.a.createElement(
                                                                      B.a,
                                                                      {
                                                                          name:
                                                                              t.base
                                                                      }
                                                                  )
                                                              )
                                                            : s.a.createElement(
                                                                  B.a,
                                                                  {
                                                                      dataPlace:
                                                                          "left",
                                                                      name:
                                                                          t.quote
                                                                  }
                                                              ),
                                                    quote: t.quote,
                                                    base: t.base,
                                                    columns: a,
                                                    leftAlign: !0,
                                                    compact: !0,
                                                    noSymbols: !0,
                                                    stats: o.get(t.id),
                                                    starred: i.has(t.id),
                                                    current: l === t.id,
                                                    isChecked: e.props.userMarkets.has(
                                                        t.id
                                                    ),
                                                    isDefault:
                                                        e.props
                                                            .defaultMarkets &&
                                                        e.props.defaultMarkets.has(
                                                            t.id
                                                        ),
                                                    onCheckMarket: e._onToggleUserMarket.bind(
                                                        e
                                                    )
                                                });
                                            })
                                            .filter(function(e) {
                                                return null !== e;
                                            })
                                            .sort(function(e, t) {
                                                var a = e.key.split("_"),
                                                    n = t.key.split("_"),
                                                    r = o.get(
                                                        a[0] + "_" + a[1]
                                                    ),
                                                    s = o.get(
                                                        n[0] + "_" + n[1]
                                                    );
                                                switch (u) {
                                                    case "name":
                                                        return a[0] > n[0]
                                                            ? p
                                                                ? -1
                                                                : 1
                                                            : a[0] < n[0]
                                                                ? p
                                                                    ? 1
                                                                    : -1
                                                                : a[1] > n[1]
                                                                    ? p
                                                                        ? -1
                                                                        : 1
                                                                    : a[1] <
                                                                      n[1]
                                                                        ? p
                                                                            ? 1
                                                                            : -1
                                                                        : 0;
                                                    case "volume":
                                                        return r && s
                                                            ? p
                                                                ? s.volumeBase -
                                                                  r.volumeBase
                                                                : r.volumeBase -
                                                                  s.volumeBase
                                                            : 0;
                                                    case "change":
                                                        return r && s
                                                            ? p
                                                                ? s.change -
                                                                  r.change
                                                                : r.change -
                                                                  s.change
                                                            : 0;
                                                }
                                            });
                                    m
                                        ? s.a.createElement("span", null, "▼")
                                        : s.a.createElement("span", null, "▲");
                                    return s.a.createElement(
                                        "div",
                                        {style: {paddingRight: 10}},
                                        m
                                            ? s.a.createElement(
                                                  "table",
                                                  {
                                                      className:
                                                          "table table-hover text-right"
                                                  },
                                                  s.a.createElement(
                                                      "thead",
                                                      null,
                                                      s.a.createElement(
                                                          "tr",
                                                          null,
                                                          f
                                                      )
                                                  ),
                                                  d && d.length
                                                      ? s.a.createElement(
                                                            "tbody",
                                                            null,
                                                            d
                                                        )
                                                      : null
                                              )
                                            : null
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            K.defaultProps = {maxRows: 20};
            var G = (function(e) {
                function t(e) {
                    V(this, t);
                    var a = H(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.clearInput = function(e) {
                            a.setState({myMarketFilter: ""});
                        }),
                        (a.handleSearchUpdate = function(e) {
                            a.setState({
                                myMarketFilter:
                                    e.target.value &&
                                    e.target.value.toUpperCase()
                            });
                        }),
                        (a.state = {
                            inverseSort: e.viewSettings.get(
                                "myMarketsInvert",
                                !0
                            ),
                            sortBy: e.viewSettings.get(
                                "myMarketsSort",
                                "volume"
                            ),
                            activeTab: e.viewSettings.get(
                                "favMarketTab",
                                "my-market"
                            ),
                            activeMarketTab: e.viewSettings.get(
                                "activeMarketTab",
                                0
                            ),
                            lookupQuote: null,
                            lookupBase: null,
                            inputValue: "",
                            minWidth: "100%",
                            findBaseInput: "USD",
                            activeFindBase: "USD"
                        }),
                        (a._setMinWidth = a._setMinWidth.bind(a)),
                        (a.getAssetList = Object(n.a)(
                            P.a.getAssetList.defer,
                            150
                        )),
                        a
                    );
                }
                return (
                    Q(t, s.a.Component),
                    z(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    "find-market" === this.state.activeTab ||
                                        "find-market" !== t.activeTab ||
                                        e.searchAssets.size ||
                                        this._lookupAssets("OPEN.", !0),
                                    !(
                                        i.a.is(
                                            e.searchAssets,
                                            this.props.searchAssets
                                        ) &&
                                        i.a.is(e.markets, this.props.markets) &&
                                        i.a.is(
                                            e.starredMarkets,
                                            this.props.starredMarkets
                                        ) &&
                                        i.a.is(
                                            e.defaultMarkets,
                                            this.props.defaultMarkets
                                        ) &&
                                        i.a.is(
                                            e.marketStats,
                                            this.props.marketStats
                                        ) &&
                                        u.a.are_equal_shallow(t, this.state) &&
                                        e.current === this.props.current &&
                                        e.minWidth === this.props.minWidth &&
                                        e.listHeight ===
                                            this.props.listHeight &&
                                        e.preferredBases ===
                                            this.props.preferredBases &&
                                        e.onlyStars === this.props.onlyStars &&
                                        e.assetsLoading ===
                                            this.props.assetsLoading &&
                                        e.userMarkets === this.props.userMarkets
                                    )
                                );
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                if (
                                    (this.props.setMinWidth &&
                                        window.addEventListener(
                                            "resize",
                                            this._setMinWidth,
                                            {capture: !1, passive: !0}
                                        ),
                                    this.props.currrent)
                                ) {
                                    var e = this.props.current.split("_")[1],
                                        t = this.props.preferredBases.findIndex(
                                            function(t) {
                                                return t === e;
                                            }
                                        );
                                    -1 !== t &&
                                        t !== this.state.activeMarketTab &&
                                        this.setState({activeMarketTab: t});
                                }
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this.refs.favorites;
                                c.a.initialize(e),
                                    this._setMinWidth(),
                                    "find-market" === this.state.activeTab &&
                                        this._lookupAssets("OPEN.", !0);
                            }
                        },
                        {
                            key: "componetWillUnmount",
                            value: function() {
                                this.props.setMinWidth &&
                                    window.removeEventListener(
                                        "resize",
                                        this._setMinWidth
                                    );
                            }
                        },
                        {
                            key: "_setMinWidth",
                            value: function() {
                                this.props.setMinWidth &&
                                    this.refs.favorites &&
                                    "my-market" === this.props.activeTab &&
                                    this.state.minWidth !==
                                        this.refs.favorites.offsetWidth &&
                                    this.setState({
                                        minWidth: this.refs.favorites
                                            .offsetWidth
                                    });
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                if (this.refs.favorites) {
                                    var e = this.refs.favorites;
                                    c.a.update(e);
                                }
                            }
                        },
                        {
                            key: "_inverseSort",
                            value: function() {
                                w.a.changeViewSetting({
                                    myMarketsInvert: !this.state.myMarketsInvert
                                }),
                                    this.setState({
                                        inverseSort: !this.state.inverseSort
                                    });
                            }
                        },
                        {
                            key: "_changeSort",
                            value: function(e) {
                                e !== this.state.sortBy
                                    ? (w.a.changeViewSetting({
                                          myMarketsSort: e
                                      }),
                                      this.setState({sortBy: e}))
                                    : this._inverseSort();
                            }
                        },
                        {
                            key: "_goMarkets",
                            value: function() {
                                this.context.router.push("/markets");
                            }
                        },
                        {
                            key: "_changeTab",
                            value: function(e) {
                                w.a.changeViewSetting({favMarketTab: e}),
                                    this.setState({activeTab: e}),
                                    this._setMinWidth();
                            }
                        },
                        {
                            key: "_onInputName",
                            value: function(e) {
                                var t = e.target.value.trim().toUpperCase(),
                                    a = !F.d.is_valid_symbol_error(t, !0);
                                if (
                                    (this.setState({inputValue: t}),
                                    t && t.length >= 3 && !a)
                                )
                                    return this.setState({assetNameError: !0});
                                this.setState({assetNameError: !1}),
                                    this._lookupAssets(t);
                            }
                        },
                        {
                            key: "_lookupAssets",
                            value: function(e) {
                                var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                                if (e || "" === e) {
                                    var a = new Date(),
                                        n = e.toUpperCase().split(":"),
                                        r = n[0],
                                        s = 2 === n.length ? n[1] : null;
                                    if (
                                        (this.setState({
                                            lookupQuote: r,
                                            lookupBase: s
                                        }),
                                        w.a.changeViewSetting.defer({
                                            marketLookupInput: e.toUpperCase()
                                        }),
                                        this.state.lookupQuote !== r || t)
                                    ) {
                                        if (r.length < 1 || a - J <= 250)
                                            return !1;
                                        this.getAssetList(r, 50);
                                    } else if (
                                        s &&
                                        this.state.lookupBase !== s
                                    ) {
                                        if (s.length < 1 || a - J <= 250)
                                            return !1;
                                        this.getAssetList(s, 50);
                                    }
                                }
                            }
                        },
                        {
                            key: "toggleActiveMarketTab",
                            value: function(e) {
                                w.a.changeViewSetting({activeMarketTab: e}),
                                    this.setState({activeMarketTab: e});
                            }
                        },
                        {
                            key: "_onInputBaseAsset",
                            value: function(e) {
                                this.setState({
                                    findBaseInput: e.toUpperCase(),
                                    error: null
                                });
                            }
                        },
                        {
                            key: "_onFoundBaseAsset",
                            value: function(e) {
                                e &&
                                    this.setState({
                                        activeFindBase: e.get("symbol")
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.starredMarkets,
                                    r = t.defaultMarkets,
                                    o = t.marketStats,
                                    l = t.columns,
                                    c = t.searchAssets,
                                    u = t.assetsLoading,
                                    p = t.preferredBases,
                                    f = (t.core, t.current),
                                    d = t.viewSettings,
                                    y = t.listHeight,
                                    b = t.onlyStars,
                                    g = t.userMarkets,
                                    k = this.state,
                                    v = k.activeMarketTab,
                                    _ = k.activeTab,
                                    E = k.lookupQuote,
                                    w = k.lookupBase,
                                    M = s.a.createElement("tr", null),
                                    x = "my-market" === _,
                                    C = p.map(function(e) {
                                        return e;
                                    });
                                x ||
                                    (p = (p = p.clear()).push(
                                        this.state.activeFindBase
                                    ));
                                var O = {},
                                    T = [];
                                E || (E = "OPEN."),
                                    x || (v = 0),
                                    c
                                        .filter(function(e) {
                                            return w && w.length
                                                ? 0 === e.symbol.indexOf(w)
                                                : -1 !== e.symbol.indexOf(E);
                                        })
                                        .forEach(function(e) {
                                            w && w.length
                                                ? 0 === e.symbol.indexOf(w) &&
                                                  T.push(e.symbol)
                                                : p.includes(e.symbol) &&
                                                  e.symbol.length >= E.length &&
                                                  e.symbol.length <
                                                      E.length + 3 &&
                                                  T.push(e.symbol);
                                        }),
                                    (T = (T = T.concat(
                                        p
                                            .filter(function(e) {
                                                return (
                                                    !w ||
                                                    !w.length ||
                                                    0 === e.indexOf(w)
                                                );
                                            })
                                            .toArray()
                                    )).filter(function(e) {
                                        return (
                                            !(w && w.length > 1) ||
                                            0 === e.indexOf(w)
                                        );
                                    }));
                                var j = [];
                                c.size &&
                                    c
                                        .filter(function(e) {
                                            try {
                                                if (e.options.description) {
                                                    var t = JSON.parse(
                                                        e.options.description
                                                    );
                                                    if (
                                                        "visible" in t &&
                                                        !t.visible
                                                    )
                                                        return !1;
                                                }
                                            } catch (e) {}
                                            return (
                                                -1 !== e.symbol.indexOf(E) &&
                                                e.symbol.length >= E.length
                                            );
                                        })
                                        .forEach(function(e) {
                                            T.forEach(function(t) {
                                                var a = e.symbol + "_" + t;
                                                t !== e.symbol &&
                                                    j.push([
                                                        a,
                                                        {
                                                            quote: e.symbol,
                                                            base: t
                                                        }
                                                    ]);
                                            });
                                        }),
                                    (j = j.filter(function(e) {
                                        return !w || e[1].quote === E;
                                    })),
                                    (j = i.a.Map(j));
                                var A = x ? r : j;
                                x &&
                                    g.size &&
                                    g.forEach(function(e, t) {
                                        A = A.set(t, e);
                                    }),
                                    A.size > 0 &&
                                        (M = A.filter(function(t) {
                                            if (x) {
                                                var a = t.quote + "_" + t.base;
                                                return e.state.myMarketFilter
                                                    ? -1 !==
                                                          a.indexOf(
                                                              e.state
                                                                  .myMarketFilter
                                                          )
                                                    : !(b && !n.has(a));
                                            }
                                            return (
                                                !(E.length < 1) &&
                                                -1 !== t.quote.indexOf(E)
                                            );
                                        })
                                            .map(function(e) {
                                                var t = e.quote + "_" + e.base;
                                                return p.includes(e.base)
                                                    ? (O[e.base] ||
                                                          (O[e.base] = []),
                                                      O[e.base].push({
                                                          id: t,
                                                          quote: e.quote,
                                                          base: e.base
                                                      }),
                                                      null)
                                                    : {
                                                          id: t,
                                                          quote: e.quote,
                                                          base: e.base
                                                      };
                                            })
                                            .filter(function(e) {
                                                return null !== e;
                                            })
                                            .take(x ? 100 : 20)
                                            .toArray());
                                var N = M && M.length,
                                    P = "mymarkets-header clickable",
                                    I = q()(P, {inactive: !x}),
                                    W = q()(P, {inactive: x}),
                                    F = {
                                        minWidth: this.state.minWidth,
                                        minHeight: "6rem"
                                    };
                                y && (F.height = y);
                                var U = a(3);
                                return s.a.createElement(
                                    "div",
                                    {
                                        className:
                                            this.props.className +
                                            " explorer_markets",
                                        style: this.props.style
                                    },
                                    s.a.createElement(
                                        "div",
                                        {
                                            style: this.props.headerStyle,
                                            className:
                                                "grid-block shrink left-orderbook-header bottom-header"
                                        },
                                        s.a.createElement(
                                            "div",
                                            {
                                                ref: "myMarkets",
                                                className: I,
                                                onClick: this._changeTab.bind(
                                                    this,
                                                    "my-market"
                                                ),
                                                "data-intro": U.translate(
                                                    "walkthrough.my_markets_tab"
                                                )
                                            },
                                            s.a.createElement(h.a, {
                                                content: "exchange.market_name"
                                            })
                                        ),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className: W,
                                                onClick: this._changeTab.bind(
                                                    this,
                                                    "find-market"
                                                ),
                                                "data-intro": U.translate(
                                                    "walkthrough.find_markets_tab"
                                                )
                                            },
                                            s.a.createElement(h.a, {
                                                content: "exchange.more"
                                            })
                                        )
                                    ),
                                    this.props.controls
                                        ? s.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "small-12 medium-6",
                                                  style: {padding: "1rem 0"}
                                              },
                                              this.props.controls
                                                  ? s.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                paddingBottom:
                                                                    "0.5rem"
                                                            }
                                                        },
                                                        this.props.controls
                                                    )
                                                  : null
                                          )
                                        : null,
                                    x
                                        ? s.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block shrink",
                                                  style: {
                                                      width: "100%",
                                                      textAlign: "left",
                                                      padding: "0.75rem 0.5rem"
                                                  }
                                              },
                                              s.a.createElement(
                                                  "label",
                                                  {style: {margin: "3px 0 0"}},
                                                  s.a.createElement("input", {
                                                      style: {
                                                          position: "relative",
                                                          top: 3
                                                      },
                                                      className: "no-margin",
                                                      type: "checkbox",
                                                      checked: this.props
                                                          .onlyStars,
                                                      onChange: function() {
                                                          S.a.toggleStars();
                                                      }
                                                  }),
                                                  s.a.createElement(
                                                      "span",
                                                      {
                                                          style: {
                                                              paddingLeft:
                                                                  "0.4rem"
                                                          }
                                                      },
                                                      s.a.createElement(m.a, {
                                                          string:
                                                              "exchange.show_only_star_formatter",
                                                          keys: [
                                                              {
                                                                  type: "icon",
                                                                  value:
                                                                      "fi-star",
                                                                  className:
                                                                      "gold-star",
                                                                  arg:
                                                                      "star_icon"
                                                              }
                                                          ]
                                                      })
                                                  )
                                              ),
                                              s.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "float-right search-wrapper",
                                                      style: {paddingLeft: 20}
                                                  },
                                                  s.a.createElement(
                                                      "form",
                                                      null,
                                                      s.a.createElement(
                                                          "input",
                                                          {
                                                              autoComplete:
                                                                  "off",
                                                              style: {
                                                                  fontSize:
                                                                      "0.9rem",
                                                                  height:
                                                                      "inherit",
                                                                  position:
                                                                      "relative",
                                                                  top: 1,
                                                                  padding: 2
                                                              },
                                                              type: "text",
                                                              className:
                                                                  "no-margin market-filter-input",
                                                              placeholder: L.a.translate(
                                                                  "exchange.filter"
                                                              ),
                                                              maxLength: "16",
                                                              name: "focus",
                                                              required:
                                                                  "required",
                                                              value: this.state
                                                                  .myMarketFilter,
                                                              onChange: this
                                                                  .handleSearchUpdate
                                                          }
                                                      ),
                                                      s.a.createElement(
                                                          "button",
                                                          {
                                                              className:
                                                                  "clear-text",
                                                              type: "reset",
                                                              onClick: this
                                                                  .clearInput
                                                          }
                                                      )
                                                  )
                                              )
                                          )
                                        : s.a.createElement(
                                              "div",
                                              {
                                                  style: {
                                                      width: "100%",
                                                      textAlign: "left",
                                                      padding: "0.75rem 0.5rem"
                                                  }
                                              },
                                              s.a.createElement(
                                                  "table",
                                                  null,
                                                  s.a.createElement(
                                                      "tbody",
                                                      null,
                                                      s.a.createElement(
                                                          "tr",
                                                          {
                                                              style: {
                                                                  width: "100%"
                                                              }
                                                          },
                                                          s.a.createElement(
                                                              "td",
                                                              null,
                                                              s.a.createElement(
                                                                  D.a,
                                                                  {
                                                                      onAssetSelect: this._onFoundBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      assets: C,
                                                                      onChange: this._onInputBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      asset: this
                                                                          .state
                                                                          .findBaseInput,
                                                                      assetInput: this
                                                                          .state
                                                                          .findBaseInput,
                                                                      tabIndex: 1,
                                                                      style: {
                                                                          width:
                                                                              "100%",
                                                                          paddingBottom:
                                                                              "1.5rem"
                                                                      },
                                                                      onFound: this._onFoundBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      label:
                                                                          "exchange.quote",
                                                                      noLabel: !0,
                                                                      inputStyle: {
                                                                          fontSize:
                                                                              "0.9rem"
                                                                      }
                                                                  }
                                                              )
                                                          )
                                                      ),
                                                      s.a.createElement(
                                                          "tr",
                                                          {
                                                              style: {
                                                                  width: "100%"
                                                              }
                                                          },
                                                          s.a.createElement(
                                                              "td",
                                                              null,
                                                              s.a.createElement(
                                                                  "label",
                                                                  null,
                                                                  s.a.createElement(
                                                                      h.a,
                                                                      {
                                                                          content:
                                                                              "account.user_issued_assets.name"
                                                                      }
                                                                  ),
                                                                  ":"
                                                              ),
                                                              s.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          fontSize:
                                                                              "0.9rem",
                                                                          position:
                                                                              "relative",
                                                                          top: 1
                                                                      },
                                                                      type:
                                                                          "text",
                                                                      value: this
                                                                          .state
                                                                          .inputValue,
                                                                      onChange: this._onInputName.bind(
                                                                          this
                                                                      ),
                                                                      placeholder: L.a.translate(
                                                                          "exchange.search"
                                                                      ),
                                                                      maxLength:
                                                                          "16",
                                                                      tabIndex: 2
                                                                  }
                                                              ),
                                                              this.state
                                                                  .assetNameError
                                                                  ? s.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "error-area",
                                                                            style: {
                                                                                paddingTop: 10
                                                                            }
                                                                        },
                                                                        s.a.createElement(
                                                                            "span",
                                                                            {
                                                                                style: {
                                                                                    wordBreak:
                                                                                        "break-all"
                                                                                }
                                                                            },
                                                                            s.a.createElement(
                                                                                h.a,
                                                                                {
                                                                                    content:
                                                                                        "explorer.asset.invalid",
                                                                                    name: this
                                                                                        .state
                                                                                        .inputValue
                                                                                }
                                                                            )
                                                                        )
                                                                    )
                                                                  : null
                                                          )
                                                      )
                                                  )
                                              )
                                          ),
                                    s.a.createElement(
                                        "ul",
                                        {className: "mymarkets-tabs"},
                                        p.map(function(t, a) {
                                            return t
                                                ? s.a.createElement(
                                                      "li",
                                                      {
                                                          key: t,
                                                          onClick: e.toggleActiveMarketTab.bind(
                                                              e,
                                                              a
                                                          ),
                                                          className: q()(
                                                              "mymarkets-tab",
                                                              {active: v === a}
                                                          )
                                                      },
                                                      s.a.createElement(B.a, {
                                                          name: t,
                                                          dataPlace: "left"
                                                      })
                                                  )
                                                : null;
                                        }),
                                        x && N
                                            ? s.a.createElement(
                                                  "li",
                                                  {
                                                      key: "others",
                                                      style: {
                                                          textTransform:
                                                              "uppercase"
                                                      },
                                                      onClick: this.toggleActiveMarketTab.bind(
                                                          this,
                                                          p.size + 1
                                                      ),
                                                      className: q()(
                                                          "mymarkets-tab",
                                                          {
                                                              active:
                                                                  v ===
                                                                  p.size + 1
                                                          }
                                                      )
                                                  },
                                                  s.a.createElement(h.a, {
                                                      content: "exchange.others"
                                                  })
                                              )
                                            : null
                                    ),
                                    s.a.createElement(
                                        "div",
                                        {
                                            style: F,
                                            className:
                                                "table-container grid-block vertical mymarkets-list",
                                            ref: "favorites"
                                        },
                                        u
                                            ? s.a.createElement(
                                                  "div",
                                                  {
                                                      style: {
                                                          position: "absolute",
                                                          paddingTop: "3rem",
                                                          textAlign: "center",
                                                          width: "100%"
                                                      }
                                                  },
                                                  s.a.createElement(R.a, {
                                                      type: "three-bounce"
                                                  })
                                              )
                                            : null,
                                        p
                                            .filter(function(e) {
                                                return e === p.get(v);
                                            })
                                            .map(function(t, a) {
                                                return s.a.createElement(K, {
                                                    userMarkets:
                                                        e.props.userMarkets,
                                                    defaultMarkets:
                                                        e.props.defaultMarkets,
                                                    index: a,
                                                    allowChange: !1,
                                                    key: t,
                                                    current: f,
                                                    starredMarkets: n,
                                                    marketStats: o,
                                                    viewSettings: d,
                                                    columns: x
                                                        ? l
                                                        : e.props.findColumns ||
                                                          l,
                                                    markets: O[t],
                                                    base: t,
                                                    maxRows: x ? 20 : 10,
                                                    findMarketTab: !x
                                                });
                                            }),
                                        v === p.size + 1 && x && N
                                            ? s.a.createElement(K, {
                                                  userMarkets: this.props
                                                      .userMarkets,
                                                  index: p.size,
                                                  current: f,
                                                  starredMarkets: n,
                                                  marketStats: o,
                                                  viewSettings: d,
                                                  columns: l,
                                                  markets: M,
                                                  base: "others",
                                                  maxRows: x ? 20 : 10,
                                                  findMarketTab: !x
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
            (G.propTypes = {core: b.a.ChainAsset.isRequired}),
                (G.defaultProps = {
                    activeTab: "my-market",
                    core: "1.3.0",
                    setMinWidth: !1
                }),
                (G.contextTypes = {router: x.a.object.isRequired}),
                (G = Object(g.a)(G));
            var X = (function(e) {
                function t() {
                    return (
                        V(this, t),
                        H(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    Q(t, s.a.Component),
                    z(t, [
                        {
                            key: "render",
                            value: function() {
                                return s.a.createElement(G, this.props);
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = Object(f.connect)(X, {
                listenTo: function() {
                    return [j.a, A.a, N.a];
                },
                getProps: function() {
                    return {
                        starredMarkets: j.a.getState().starredMarkets,
                        defaultMarkets: j.a.getState().defaultMarkets,
                        viewSettings: j.a.getState().viewSettings,
                        preferredBases: j.a.getState().preferredBases,
                        marketStats: A.a.getState().allMarketStats,
                        userMarkets: j.a.getState().userMarkets,
                        searchAssets: N.a.getState().assets,
                        onlyStars: A.a.getState().onlyStars,
                        assetsLoading: N.a.getState().assetsLoading
                    };
                }
            });
        },
        4993: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(121),
                o = a(31),
                i = a(106),
                l = a(8),
                c = a(50),
                u = a.n(c),
                p = a(352),
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
            var m = (function(e) {
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
                        return (
                            (e.state = {height: null}),
                            (e._setDimensions = e._setDimensions.bind(e)),
                            e
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
                        h(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    window.addEventListener(
                                        "resize",
                                        this._setDimensions,
                                        {capture: !1, passive: !0}
                                    );
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this._setDimensions();
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
                                    var e = this.refs.wrapper.offsetHeight;
                                    e !== this.state.height &&
                                        this.setState({height: e});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        {
                                            ref: "wrapper",
                                            className:
                                                "grid-block page-layout no-overflow"
                                        },
                                        r.a.createElement(p.a, {
                                            style: {width: "100%", padding: 20},
                                            listHeight: this.state.height
                                                ? this.state.height - 82
                                                : null,
                                            className: "no-overflow",
                                            headerStyle: {
                                                paddingTop: 0,
                                                borderTop: "none"
                                            },
                                            columns: [
                                                {name: "star", index: 1},
                                                {name: "market", index: 2},
                                                {name: "quoteSupply", index: 3},
                                                {name: "vol", index: 4},
                                                {name: "price", index: 5},
                                                {name: "change", index: 6}
                                            ]
                                        })
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                f = (function() {
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
            var d = (function(e) {
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
                        f(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        u.a,
                                        {
                                            stores: [l.a, i.a, o.a],
                                            inject: {
                                                starredMarkets: function() {
                                                    return l.a.getState()
                                                        .starredMarkets;
                                                },
                                                viewSettings: function() {
                                                    return l.a.getState()
                                                        .viewSettings;
                                                },
                                                lookupResults: function() {
                                                    return i.a.getState()
                                                        .lookupResults;
                                                },
                                                marketBase: function() {
                                                    return o.a.getState()
                                                        .marketBase;
                                                }
                                            }
                                        },
                                        r.a.createElement(m, null)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                y = (function() {
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
            var b = (function(e) {
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
                    y(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = r.a.createElement(d, null);
                                return r.a.createElement(
                                    "div",
                                    {className: "content"},
                                    r.a.createElement(s.a, {
                                        defaultActiveTab: "markets.title",
                                        defaultContent: e
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = b;
        }
    }
]);
