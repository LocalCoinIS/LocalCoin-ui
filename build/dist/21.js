(window.webpackJsonp = window.webpackJsonp || []).push([
    [21],
    {
        112: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                s = n(1),
                o = n.n(s),
                i = n(4),
                l = n(6),
                c = n(13),
                u = n(3),
                p = n.n(u),
                h = n(181),
                m = n(17),
                f = n(7),
                d = n.n(f),
                y = n(9),
                g = n.n(y),
                b = n(50),
                v = n(2),
                k = n.n(v),
                _ = (function() {
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
            function E(e, t) {
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
            function S(e, t) {
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
                    return (
                        E(this, t),
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
                    S(t, r.a.Component),
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
            (x.propTypes = {value: k.a.string, onChange: k.a.func}),
                (x = Object(b.a)(x, {asList: !0}));
            var C = (function(e) {
                function t() {
                    return (
                        E(this, t),
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
                    S(t, r.a.Component),
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
                                    n = e.noLabel,
                                    a = this.getError(),
                                    s = void 0;
                                t ||
                                    (this.props.asset
                                        ? (s = this.props.asset.get("symbol"))
                                        : !a &&
                                          this.props.assetInput &&
                                          (a = p.a.translate(
                                              "explorer.asset.not_found",
                                              {name: this.props.assetInput}
                                          )));
                                var i = g()("button", {
                                    disabled:
                                        !this.props.asset ||
                                        a ||
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
                                            a || n
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
                                                        ? r.a.createElement(x, {
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
                                                a
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
            (C.propTypes = {
                label: k.a.string,
                error: k.a.string,
                placeholder: k.a.string,
                onChange: k.a.func,
                onFound: k.a.func,
                assetInput: k.a.string,
                asset: l.a.ChainAsset,
                tabIndex: k.a.number,
                disableActionButton: k.a.string
            }),
                (C.defaultProps = {disabled: !1}),
                (t.a = Object(c.a)(C));
        },
        358: function(e, t, n) {
            "use strict";
            var a = n(76),
                r = n(0),
                s = n.n(r),
                o = n(7),
                i = n.n(o),
                l = n(54),
                c = n.n(l),
                u = n(5),
                p = n(1),
                h = n.n(p),
                m = n(32),
                f = n(15),
                d = n(17),
                y = n(50),
                g = n(6),
                b = n(13),
                v = (function() {
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
            var k = (function(e) {
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
                    v(t, [
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
            (k.propTypes = {account: g.a.ChainObject.isRequired}),
                (k.defaultProps = {autosubscribe: !1});
            var _ = Object(b.a)(k),
                E = n(12),
                w = n(35),
                S = n(10),
                x = n(2),
                C = n.n(x),
                M = (function() {
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
                    M(t, [
                        {
                            key: "_onClick",
                            value: function(e) {
                                "/market/" + e !==
                                    this.context.router.location.pathname &&
                                    (w.a.switchMarket(),
                                    this.context.router.push("/market/" + e));
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                w.a.getMarketStats(
                                    this.props.base,
                                    this.props.quote
                                ),
                                    (this.statsChecked = new Date()),
                                    (this.statsInterval = setInterval(
                                        w.a.getMarketStats.bind(
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
                            value: function(e, t, n) {
                                n.preventDefault(),
                                    this.props.starred
                                        ? S.a.removeStarMarket(e, t)
                                        : S.a.addStarMarket(e, t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.quote,
                                    a = t.base,
                                    r = (t.noSymbols, t.stats),
                                    o = t.starred;
                                if (!n || !a) return null;
                                var i = n.get("symbol") + "_" + a.get("symbol"),
                                    l = n.get("symbol") + "/" + a.get("symbol"),
                                    c = this.props.getDynamicObject(
                                        n.get("dynamic_asset_data_id")
                                    ),
                                    p = this.props.getDynamicObject(
                                        a.get("dynamic_asset_data_id")
                                    ),
                                    h = u.a.convertPrice(n, a),
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
                                var g = this.props.columns
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
                                                                n.get("symbol"),
                                                                a.get("symbol")
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
                                                    var g = r
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
                                                        u.a.format_volume(g)
                                                    );
                                                case "change":
                                                    var b = u.a.format_number(
                                                            r && r.change
                                                                ? r.change
                                                                : 0,
                                                            2
                                                        ),
                                                        v =
                                                            "0.00" === b
                                                                ? ""
                                                                : b > 0
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
                                                                v,
                                                            key: t.index
                                                        },
                                                        b + "%"
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
                                                    var k = e.props.name;
                                                    try {
                                                        void 0 !== k.props &&
                                                            (k =
                                                                k.props
                                                                    .children[0]
                                                                    .props
                                                                    .name +
                                                                "/" +
                                                                k.props
                                                                    .children[2]
                                                                    .props
                                                                    .name);
                                                    } catch (e) {}
                                                    return s.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        k
                                                    );
                                                case "price":
                                                    var w =
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
                                                                          n,
                                                                          r
                                                                              .close
                                                                              .base
                                                                              .amount,
                                                                          a,
                                                                          !0
                                                                      )
                                                                    : u.a.get_asset_price(
                                                                          h
                                                                              .quote
                                                                              .amount,
                                                                          n,
                                                                          h.base
                                                                              .amount,
                                                                          a,
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
                                                                a.get("symbol")
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
                                                                w,
                                                                w > 1e3
                                                                    ? 0
                                                                    : w > 10
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
                                                                      asset: n.get(
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
                                                                      asset: a.get(
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
                                                            account: n.get(
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
                                    b = "clickable";
                                return (
                                    this.props.current &&
                                        (b += " activeMarket"),
                                    s.a.createElement(
                                        "tr",
                                        {className: b, style: m},
                                        g
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (O.defaultProps = {noSymbols: !1}),
                (O.contextTypes = {router: C.a.object.isRequired});
            var T = Object(y.a)(O, {
                    propNames: ["quote", "base"],
                    defaultProps: {tempComponent: "tr"},
                    withDynamic: !0
                }),
                A = n(8),
                B = n(31),
                N = n(106),
                j = n(22),
                q = n(77),
                I = n(9),
                P = n.n(I),
                L = n(112),
                D = n(3),
                R = n.n(D),
                F = n(37),
                W = n(4),
                U = n(20),
                z = n.n(U),
                V = n(34),
                G = (function() {
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
            var H = (function(e) {
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
                            (e.state = {
                                backingAsset: "",
                                error: !1,
                                valid: !1
                            }),
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
                        })(t, s.a.Component),
                        G(t, [
                            {
                                key: "_onMoveUp",
                                value: function(e) {
                                    var t = this.props.quotes.findIndex(
                                        function(t) {
                                            return t === e;
                                        }
                                    );
                                    S.a.modifyPreferedBases({
                                        oldIndex: t,
                                        newIndex: t - 1
                                    });
                                }
                            },
                            {
                                key: "_onMoveDown",
                                value: function(e) {
                                    var t = this.props.quotes.findIndex(
                                        function(t) {
                                            return t === e;
                                        }
                                    );
                                    S.a.modifyPreferedBases({
                                        oldIndex: t,
                                        newIndex: t + 1
                                    });
                                }
                            },
                            {
                                key: "_onRemove",
                                value: function(e) {
                                    var t = this.props.quotes.findIndex(
                                        function(t) {
                                            return t === e;
                                        }
                                    );
                                    t >= 0 &&
                                        S.a.modifyPreferedBases({remove: t});
                                }
                            },
                            {
                                key: "_onAdd",
                                value: function(e) {
                                    -1 ===
                                        this.props.quotes.findIndex(function(
                                            t
                                        ) {
                                            return t === e.get("symbol");
                                        }) &&
                                        S.a.modifyPreferedBases({
                                            add: e.get("symbol")
                                        });
                                }
                            },
                            {
                                key: "_onInputBackingAsset",
                                value: function(e) {
                                    this.setState({
                                        backingAsset: e.toUpperCase(),
                                        error: null
                                    });
                                }
                            },
                            {
                                key: "_onFoundBackingAsset",
                                value: function(e) {
                                    e &&
                                        (this.props.quotes.includes(
                                            e.get("symbol")
                                        )
                                            ? this.setState({
                                                  error:
                                                      "Asset already being used",
                                                  isValid: !1
                                              })
                                            : this.setState({isValid: !0}));
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.state.error,
                                        n = this.props.quotes.size;
                                    return s.a.createElement(
                                        V.a,
                                        {
                                            id: "quote_selection",
                                            overlay: !0,
                                            modalHeader:
                                                "exchange.quote_selection",
                                            noLogo: !0
                                        },
                                        s.a.createElement(
                                            "section",
                                            {
                                                className:
                                                    "block-list no-border-bottom"
                                            },
                                            s.a.createElement(
                                                "table",
                                                {className: "table"},
                                                s.a.createElement(
                                                    "thead",
                                                    null,
                                                    s.a.createElement(
                                                        "tr",
                                                        null,
                                                        s.a.createElement(
                                                            "th",
                                                            null
                                                        ),
                                                        s.a.createElement(
                                                            "th",
                                                            null,
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "account.quote"
                                                                }
                                                            )
                                                        ),
                                                        s.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.move_down"
                                                                }
                                                            )
                                                        ),
                                                        s.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.move_up"
                                                                }
                                                            )
                                                        ),
                                                        s.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.remove"
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                s.a.createElement(
                                                    "tbody",
                                                    null,
                                                    this.props.quotes.map(
                                                        function(t, a) {
                                                            return s.a.createElement(
                                                                "tr",
                                                                {key: t},
                                                                s.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    a + 1
                                                                ),
                                                                s.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    t
                                                                ),
                                                                s.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    a !==
                                                                        n - 1 &&
                                                                        s.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                onClick: e._onMoveDown.bind(
                                                                                    e,
                                                                                    t
                                                                                ),
                                                                                name:
                                                                                    "chevron-down",
                                                                                className:
                                                                                    "clickable"
                                                                            }
                                                                        )
                                                                ),
                                                                s.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    0 !== a &&
                                                                        s.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                onClick: e._onMoveUp.bind(
                                                                                    e,
                                                                                    t
                                                                                ),
                                                                                name:
                                                                                    "chevron-down",
                                                                                className:
                                                                                    "clickable rotate180"
                                                                            }
                                                                        )
                                                                ),
                                                                s.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    n > 1 &&
                                                                        s.a.createElement(
                                                                            E.a,
                                                                            {
                                                                                onClick: e._onRemove.bind(
                                                                                    e,
                                                                                    t
                                                                                ),
                                                                                name:
                                                                                    "cross-circle",
                                                                                className:
                                                                                    "clickable"
                                                                            }
                                                                        )
                                                                )
                                                            );
                                                        }
                                                    )
                                                )
                                            ),
                                            s.a.createElement("br", null),
                                            s.a.createElement("br", null),
                                            s.a.createElement("br", null),
                                            s.a.createElement(
                                                "div",
                                                null,
                                                s.a.createElement(L.a, {
                                                    label:
                                                        "exchange.custom_quote",
                                                    onChange: this._onInputBackingAsset.bind(
                                                        this
                                                    ),
                                                    asset: this.state
                                                        .backingAsset,
                                                    assetInput: this.state
                                                        .backingAsset,
                                                    tabIndex: 1,
                                                    style: {
                                                        width: "100%",
                                                        paddingRight: "10px"
                                                    },
                                                    onFound: this._onFoundBackingAsset.bind(
                                                        this
                                                    ),
                                                    onAction: this._onAdd.bind(
                                                        this
                                                    ),
                                                    action_label:
                                                        "exchange.add_quote",
                                                    disableActionButton: !!t,
                                                    noLabel: !0
                                                }),
                                                s.a.createElement(
                                                    "div",
                                                    {className: "error-area"},
                                                    t
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
                Q = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var n = [],
                                    a = !0,
                                    r = !1,
                                    s = void 0;
                                try {
                                    for (
                                        var o, i = e[Symbol.iterator]();
                                        !(a = (o = i.next()).done) &&
                                        (n.push(o.value), !t || n.length !== t);
                                        a = !0
                                    );
                                } catch (e) {
                                    (r = !0), (s = e);
                                } finally {
                                    try {
                                        !a && i.return && i.return();
                                    } finally {
                                        if (r) throw s;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                Y = (function() {
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
            function J(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function K(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function X(e, t) {
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
            var Z = new Date(),
                $ = (function(e) {
                    function t(e) {
                        J(this, t);
                        var n = K(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (n.state = n._getInitialState(e)), n;
                    }
                    return (
                        X(t, s.a.Component),
                        Y(t, [
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
                                    S.a.changeViewSetting({
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
                                    var t = this.getCookie("gt_get_sort"),
                                        n = new Date();
                                    n.setFullYear(n.getFullYear() + 1),
                                        ("vol-true" != t &&
                                            "name-true" != t &&
                                            "name-false" != t) ||
                                        "volume" != e
                                            ? ("vol-false" != t && null != t) ||
                                              "volume" != e ||
                                              (this.setCookie(
                                                  "gt_get_sort",
                                                  "vol-true",
                                                  {expires: n.toGMTString()}
                                              ),
                                              this._inverseSort())
                                            : this.setCookie(
                                                  "gt_get_sort",
                                                  "vol-false",
                                                  {expires: n.toGMTString()}
                                              ),
                                        ("name-true" != t &&
                                            "vol-true" != t &&
                                            "vol-false" != t) ||
                                        "name" != e
                                            ? ("name-false" != t &&
                                                  null != t) ||
                                              "name" != e ||
                                              (this.setCookie(
                                                  "gt_get_sort",
                                                  "name-true",
                                                  {expires: n.toGMTString()}
                                              ),
                                              this._inverseSort())
                                            : this.setCookie(
                                                  "gt_get_sort",
                                                  "name-false",
                                                  {expires: n.toGMTString()}
                                              ),
                                        e !== this.state.sortBy
                                            ? (S.a.changeViewSetting({
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
                                        var n = {};
                                        (n[
                                            "myMarketsBase_" + this.props.index
                                        ] = t),
                                            S.a.changeViewSetting(n);
                                    }
                                }
                            },
                            {
                                key: "_onToggleUserMarket",
                                value: function(e) {
                                    var t = e.split("_"),
                                        n = Q(t, 2),
                                        a = n[0],
                                        r = n[1],
                                        s = !this.props.userMarkets.get(e);
                                    S.a.setUserMarket(a, r, s);
                                }
                            },
                            {
                                key: "setCookie",
                                value: function(e, t, n) {
                                    var a = (n = n || {}).expires;
                                    if ("number" == typeof a && a) {
                                        var r = new Date();
                                        r.setTime(r.getTime() + 1e3 * a),
                                            (a = n.expires = r);
                                    }
                                    a &&
                                        a.toUTCString &&
                                        (n.expires = a.toUTCString());
                                    var s =
                                        e + "=" + (t = encodeURIComponent(t));
                                    for (var o in n) {
                                        s += "; " + o;
                                        var i = n[o];
                                        !0 !== i && (s += "=" + i);
                                    }
                                    document.cookie = s;
                                }
                            },
                            {
                                key: "getCookie",
                                value: function(e) {
                                    var t = document.cookie,
                                        n = e + "=",
                                        a = t.indexOf("; " + n),
                                        r = null;
                                    if (-1 == a) {
                                        if (0 != (a = t.indexOf(n)))
                                            return null;
                                        r = document.cookie.indexOf(";", a);
                                    } else
                                        (a += 2),
                                            -1 ==
                                                (r = document.cookie.indexOf(
                                                    ";",
                                                    a
                                                )) && (r = t.length);
                                    return decodeURI(
                                        t.substring(a + n.length, r)
                                    ).replace(/"/g, "");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.columns,
                                        a = t.markets,
                                        r = t.base,
                                        o = t.marketStats,
                                        i = t.starredMarkets,
                                        l = t.current,
                                        c = this.state,
                                        u = c.sortBy,
                                        p = c.inverseSort,
                                        m = c.open;
                                    if (!a || !a.length) return null;
                                    var f = n.map(function(t) {
                                            switch (t.name) {
                                                case "market":
                                                    var n = "",
                                                        a = e.getCookie(
                                                            "gt_get_sort"
                                                        );
                                                    return (
                                                        "name" !=
                                                            e.state.sortBy ||
                                                        ("name-false" != a &&
                                                            null != a)
                                                            ? "name" ==
                                                                  e.state
                                                                      .sortBy &&
                                                              "name-true" ==
                                                                  a &&
                                                              (n = s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▼"
                                                              ))
                                                            : (n = s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▲"
                                                              )),
                                                        s.a.createElement(
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
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.market"
                                                                }
                                                            ),
                                                            n
                                                        )
                                                    );
                                                case "vol":
                                                    var r = "",
                                                        o = e.getCookie(
                                                            "gt_get_sort"
                                                        );
                                                    return (
                                                        "volume" !=
                                                            e.state.sortBy ||
                                                        ("vol-false" != o &&
                                                            null != o)
                                                            ? "volume" ==
                                                                  e.state
                                                                      .sortBy &&
                                                              "vol-true" == o &&
                                                              (r = s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▲"
                                                              ))
                                                            : (r = s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▼"
                                                              )),
                                                        s.a.createElement(
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
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.vol_short"
                                                                }
                                                            ),
                                                            r
                                                        )
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
                                                                "exchange.base_supply"
                                                        })
                                                    );
                                                case "baseSupply":
                                                    return s.a.createElement(
                                                        "th",
                                                        {key: t.name},
                                                        s.a.createElement(h.a, {
                                                            content:
                                                                "exchange.quote_supply"
                                                        })
                                                    );
                                                case "change":
                                                    var i = "";
                                                    return (
                                                        "change" ==
                                                            e.state.sortBy &&
                                                        e.state.inverseSort
                                                            ? (i = s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▲"
                                                              ))
                                                            : "change" ==
                                                                  e.state
                                                                      .sortBy &&
                                                              (i = s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▼"
                                                              )),
                                                        s.a.createElement(
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
                                                            s.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.change"
                                                                }
                                                            ),
                                                            i
                                                        )
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
                                        d = a
                                            .map(function(t) {
                                                return e.props.onlyLiquid &&
                                                    o.get(t.id) &&
                                                    0 == o.get(t.id).volumeBase
                                                    ? null
                                                    : s.a.createElement(T, {
                                                          key: t.id,
                                                          name:
                                                              "others" === r
                                                                  ? s.a.createElement(
                                                                        "span",
                                                                        null,
                                                                        s.a.createElement(
                                                                            j.a,
                                                                            {
                                                                                name:
                                                                                    t.quote
                                                                            }
                                                                        ),
                                                                        ":",
                                                                        s.a.createElement(
                                                                            j.a,
                                                                            {
                                                                                name:
                                                                                    t.base
                                                                            }
                                                                        )
                                                                    )
                                                                  : s.a.createElement(
                                                                        j.a,
                                                                        {
                                                                            dataPlace:
                                                                                "left",
                                                                            name:
                                                                                t.quote
                                                                        }
                                                                    ),
                                                          quote: t.quote,
                                                          base: t.base,
                                                          columns: n,
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
                                                          ),
                                                          location:
                                                              e.props.location,
                                                          history:
                                                              e.props.history
                                                      });
                                            })
                                            .filter(function(e) {
                                                return null !== e;
                                            })
                                            .sort(function(t, n) {
                                                var a = t.key.split("_"),
                                                    r = n.key.split("_"),
                                                    s = o.get(
                                                        a[0] + "_" + a[1]
                                                    ),
                                                    i = o.get(
                                                        r[0] + "_" + r[1]
                                                    ),
                                                    l = e.getCookie(
                                                        "gt_get_sort"
                                                    );
                                                switch (u) {
                                                    case "name":
                                                        return (
                                                            "name-false" == l
                                                                ? (p = !1)
                                                                : "name-true" ==
                                                                      l &&
                                                                  (p = !0),
                                                            a[0] > r[0]
                                                                ? p
                                                                    ? -1
                                                                    : 1
                                                                : a[0] < r[0]
                                                                    ? p
                                                                        ? 1
                                                                        : -1
                                                                    : a[1] >
                                                                      r[1]
                                                                        ? p
                                                                            ? -1
                                                                            : 1
                                                                        : a[1] <
                                                                          r[1]
                                                                            ? p
                                                                                ? 1
                                                                                : -1
                                                                            : 0
                                                        );
                                                    case "volume":
                                                        return s && i
                                                            ? "vol-false" ==
                                                                  l || null == l
                                                                ? i.volumeBase -
                                                                  s.volumeBase
                                                                : s.volumeBase -
                                                                  i.volumeBase
                                                            : 0;
                                                    case "change":
                                                        return s && i
                                                            ? p
                                                                ? i.change -
                                                                  s.change
                                                                : s.change -
                                                                  i.change
                                                            : 0;
                                                }
                                            });
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
            $.defaultProps = {maxRows: 20, onlyLiquid: !1};
            var ee = (function(e) {
                function t(e) {
                    J(this, t);
                    var n = K(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.clearInput = function(e) {
                            n.setState({myMarketFilter: ""});
                        }),
                        (n.handleSearchUpdate = function(e) {
                            n.setState({
                                myMarketFilter:
                                    e.target.value &&
                                    e.target.value.toUpperCase()
                            });
                        }),
                        (n.state = {
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
                        (n._onInputName = n._onInputName.bind(n)),
                        (n._setMinWidth = n._setMinWidth.bind(n)),
                        (n.getAssetList = Object(a.a)(
                            q.a.getAssetList.defer,
                            150
                        )),
                        n
                    );
                }
                return (
                    X(t, s.a.Component),
                    Y(t, [
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
                                        e.onlyLiquid ===
                                            this.props.onlyLiquid &&
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
                                S.a.changeViewSetting({
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
                                var t = this.getCookie("gt_get_sort"),
                                    n = new Date();
                                n.setFullYear(n.getFullYear() + 1),
                                    "vol-true" == t && "volume" == e
                                        ? this.setCookie(
                                              "gt_get_sort",
                                              "vol-false",
                                              {expires: n.toGMTString()}
                                          )
                                        : ("vol-false" != t && null != t) ||
                                          "volume" != e ||
                                          (this.setCookie(
                                              "gt_get_sort",
                                              "vol-true",
                                              {expires: n.toGMTString()}
                                          ),
                                          this._inverseSort()),
                                    e !== this.state.sortBy
                                        ? (S.a.changeViewSetting({
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
                                S.a.changeViewSetting({favMarketTab: e}),
                                    this.setState({activeTab: e}),
                                    this._setMinWidth();
                            }
                        },
                        {
                            key: "_onInputName",
                            value: function(e) {
                                var t = e.target.value.trim().toUpperCase(),
                                    n = !W.d.is_valid_symbol_error(t, !0);
                                if (
                                    (this.setState({inputValue: t}),
                                    t && t.length >= 3 && !n)
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
                                    var n = new Date(),
                                        a = e.toUpperCase().split(":"),
                                        r = a[0],
                                        s = 2 === a.length ? a[1] : null;
                                    if (
                                        (this.setState({
                                            lookupQuote: r,
                                            lookupBase: s
                                        }),
                                        S.a.changeViewSetting.defer({
                                            marketLookupInput: e.toUpperCase()
                                        }),
                                        this.state.lookupQuote !== r || t)
                                    ) {
                                        if (r.length < 1 || n - Z <= 250)
                                            return !1;
                                        this.getAssetList(r, 50);
                                    } else if (
                                        s &&
                                        this.state.lookupBase !== s
                                    ) {
                                        if (s.length < 1 || n - Z <= 250)
                                            return !1;
                                        this.getAssetList(s, 50);
                                    }
                                }
                            }
                        },
                        {
                            key: "toggleActiveMarketTab",
                            value: function(e) {
                                S.a.changeViewSetting({activeMarketTab: e}),
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
                                    a = t.starredMarkets,
                                    r = t.defaultMarkets,
                                    o = t.marketStats,
                                    l = t.columns,
                                    c = t.searchAssets,
                                    u = t.assetsLoading,
                                    p = t.preferredBases,
                                    f = (t.core, t.current),
                                    d = t.viewSettings,
                                    y = t.listHeight,
                                    g = t.onlyStars,
                                    b = t.userMarkets,
                                    v = this.state,
                                    k = v.activeMarketTab,
                                    _ = v.activeTab,
                                    E = v.lookupQuote,
                                    x = v.lookupBase,
                                    C = s.a.createElement("tr", null),
                                    M = "my-market" === _,
                                    O = p.map(function(e) {
                                        return e;
                                    });
                                M ||
                                    (p = (p = p.clear()).push(
                                        this.state.activeFindBase
                                    ));
                                var T = {},
                                    A = [];
                                E || (E = "OPEN."),
                                    M || (k = 0),
                                    c
                                        .filter(function(e) {
                                            return x && x.length
                                                ? 0 === e.symbol.indexOf(x)
                                                : -1 !== e.symbol.indexOf(E);
                                        })
                                        .forEach(function(e) {
                                            x && x.length
                                                ? 0 === e.symbol.indexOf(x) &&
                                                  A.push(e.symbol)
                                                : p.includes(e.symbol) &&
                                                  e.symbol.length >= E.length &&
                                                  e.symbol.length <
                                                      E.length + 3 &&
                                                  A.push(e.symbol);
                                        }),
                                    (A = (A = A.concat(
                                        p
                                            .filter(function(e) {
                                                return (
                                                    !x ||
                                                    !x.length ||
                                                    0 === e.indexOf(x)
                                                );
                                            })
                                            .toArray()
                                    )).filter(function(e) {
                                        return (
                                            !(x && x.length > 1) ||
                                            0 === e.indexOf(x)
                                        );
                                    }));
                                var B = [];
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
                                            A.forEach(function(t) {
                                                var n = e.symbol + "_" + t;
                                                t !== e.symbol &&
                                                    B.push([
                                                        n,
                                                        {
                                                            quote: e.symbol,
                                                            base: t
                                                        }
                                                    ]);
                                            });
                                        }),
                                    (B = B.filter(function(e) {
                                        return !x || e[1].quote === E;
                                    })),
                                    (B = i.a.Map(B));
                                var N = M ? r : B;
                                M &&
                                    b.size &&
                                    b.forEach(function(e, t) {
                                        N = N.set(t, e);
                                    }),
                                    N.size > 0 &&
                                        (C = N.filter(function(t) {
                                            if (M) {
                                                var n = t.quote + "_" + t.base;
                                                return e.state.myMarketFilter
                                                    ? -1 !==
                                                          n.indexOf(
                                                              e.state
                                                                  .myMarketFilter
                                                          )
                                                    : !(g && !a.has(n));
                                            }
                                            return (
                                                !(E.length < 1) &&
                                                -1 !== t.quote.indexOf(E)
                                            );
                                        })
                                            .map(function(e) {
                                                var t = e.quote + "_" + e.base;
                                                return p.includes(e.base)
                                                    ? (T[e.base] ||
                                                          (T[e.base] = []),
                                                      T[e.base].push({
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
                                            .take(M ? 100 : 20)
                                            .toArray());
                                var j = C && C.length,
                                    q = "mymarkets-header clickable",
                                    I = P()(q, {inactive: !M}),
                                    D = P()(q, {inactive: M}),
                                    W = {
                                        minWidth: this.state.minWidth,
                                        minHeight: "6rem"
                                    };
                                y && (W.height = y);
                                var U = n(3);
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
                                                className: D,
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
                                    M
                                        ? s.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block vertical shrink",
                                                  style: {
                                                      width: "100%",
                                                      textAlign: "left",
                                                      padding: "0.75rem 0.5rem"
                                                  }
                                              },
                                              s.a.createElement(
                                                  "div",
                                                  null,
                                                  s.a.createElement(
                                                      "label",
                                                      {
                                                          style: {
                                                              margin: "3px 0 0"
                                                          }
                                                      },
                                                      s.a.createElement(
                                                          "input",
                                                          {
                                                              style: {
                                                                  position:
                                                                      "relative",
                                                                  top: 3
                                                              },
                                                              className:
                                                                  "no-margin",
                                                              type: "checkbox",
                                                              checked: this
                                                                  .props
                                                                  .onlyLiquid,
                                                              onChange: function() {
                                                                  S.a.changeViewSetting(
                                                                      {
                                                                          onlyLiquid: !e
                                                                              .props
                                                                              .onlyLiquid
                                                                      }
                                                                  );
                                                              }
                                                          }
                                                      ),
                                                      s.a.createElement(
                                                          "span",
                                                          {
                                                              style: {
                                                                  paddingLeft:
                                                                      "0.4rem"
                                                              }
                                                          },
                                                          s.a.createElement(
                                                              h.a,
                                                              {
                                                                  content:
                                                                      "exchange.show_only_liquid"
                                                              }
                                                          )
                                                      )
                                                  ),
                                                  s.a.createElement(
                                                      "label",
                                                      {
                                                          style: {
                                                              margin: "3px 0 0"
                                                          }
                                                      },
                                                      s.a.createElement(
                                                          "input",
                                                          {
                                                              style: {
                                                                  position:
                                                                      "relative",
                                                                  top: 3
                                                              },
                                                              className:
                                                                  "no-margin",
                                                              type: "checkbox",
                                                              checked: this
                                                                  .props
                                                                  .onlyStars,
                                                              onChange: function() {
                                                                  w.a.toggleStars();
                                                              }
                                                          }
                                                      ),
                                                      s.a.createElement(
                                                          "span",
                                                          {
                                                              style: {
                                                                  paddingLeft:
                                                                      "0.4rem"
                                                              }
                                                          },
                                                          s.a.createElement(
                                                              m.a,
                                                              {
                                                                  string:
                                                                      "exchange.show_only_star_formatter",
                                                                  keys: [
                                                                      {
                                                                          type:
                                                                              "icon",
                                                                          value:
                                                                              "fi-star",
                                                                          className:
                                                                              "gold-star",
                                                                          arg:
                                                                              "star_icon"
                                                                      }
                                                                  ]
                                                              }
                                                          )
                                                      )
                                                  )
                                              ),
                                              s.a.createElement(
                                                  "div",
                                                  {className: "search-wrapper"},
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
                                                              placeholder: R.a.translate(
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
                                                                  L.a,
                                                                  {
                                                                      onAssetSelect: this._onFoundBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      assets: O,
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
                                                                      onChange: this
                                                                          ._onInputName,
                                                                      placeholder: R.a.translate(
                                                                          "exchange.search"
                                                                      ),
                                                                      maxLength:
                                                                          "16",
                                                                      tabIndex: 2,
                                                                      ref:
                                                                          "findSearchInput"
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
                                        p.map(function(t, n) {
                                            return t
                                                ? s.a.createElement(
                                                      "li",
                                                      {
                                                          key: t,
                                                          onClick: e.toggleActiveMarketTab.bind(
                                                              e,
                                                              n
                                                          ),
                                                          className: P()(
                                                              "mymarkets-tab",
                                                              {active: k === n}
                                                          )
                                                      },
                                                      s.a.createElement(
                                                          "span",
                                                          null,
                                                          t
                                                      )
                                                  )
                                                : null;
                                        }),
                                        M && j
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
                                                      className: P()(
                                                          "mymarkets-tab",
                                                          {
                                                              active:
                                                                  k ===
                                                                  p.size + 1
                                                          }
                                                      )
                                                  },
                                                  s.a.createElement(h.a, {
                                                      content: "exchange.others"
                                                  })
                                              )
                                            : null,
                                        M &&
                                            s.a.createElement(
                                                "li",
                                                {
                                                    key: "quote_edit",
                                                    style: {
                                                        textTransform:
                                                            "uppercase"
                                                    },
                                                    onClick: function() {
                                                        z.a.publish(
                                                            "quote_selection",
                                                            "open"
                                                        );
                                                    },
                                                    className: "mymarkets-tab"
                                                },
                                                " + "
                                            )
                                    ),
                                    s.a.createElement(
                                        "div",
                                        {
                                            style: W,
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
                                                  s.a.createElement(F.a, {
                                                      type: "three-bounce"
                                                  })
                                              )
                                            : null,
                                        p
                                            .filter(function(e) {
                                                return e === p.get(k);
                                            })
                                            .map(function(t, n) {
                                                return s.a.createElement($, {
                                                    userMarkets:
                                                        e.props.userMarkets,
                                                    defaultMarkets:
                                                        e.props.defaultMarkets,
                                                    index: n,
                                                    allowChange: !1,
                                                    key: t,
                                                    current: f,
                                                    starredMarkets: a,
                                                    marketStats: o,
                                                    viewSettings: d,
                                                    columns: M
                                                        ? l
                                                        : e.props.findColumns ||
                                                          l,
                                                    markets: T[t],
                                                    base: t,
                                                    maxRows: M ? 20 : 10,
                                                    findMarketTab: !M,
                                                    location: e.props.location,
                                                    history: e.props.history,
                                                    onlyLiquid:
                                                        e.props.onlyLiquid && M
                                                });
                                            }),
                                        k === p.size + 1 && M && j
                                            ? s.a.createElement($, {
                                                  userMarkets: this.props
                                                      .userMarkets,
                                                  index: p.size,
                                                  current: f,
                                                  starredMarkets: a,
                                                  marketStats: o,
                                                  viewSettings: d,
                                                  columns: l,
                                                  markets: C,
                                                  base: "others",
                                                  maxRows: M ? 20 : 10,
                                                  findMarketTab: !M,
                                                  location: this.props.location,
                                                  history: this.props.history
                                              })
                                            : null
                                    ),
                                    s.a.createElement(H, {
                                        quotes: this.props.preferredBases
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (ee.propTypes = {core: g.a.ChainAsset.isRequired}),
                (ee.defaultProps = {
                    activeTab: "my-market",
                    core: "1.3.0",
                    setMinWidth: !1
                }),
                (ee.contextTypes = {router: C.a.object.isRequired}),
                (ee = Object(b.a)(ee));
            var te = (function(e) {
                function t() {
                    return (
                        J(this, t),
                        K(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    X(t, s.a.Component),
                    Y(t, [
                        {
                            key: "render",
                            value: function() {
                                return s.a.createElement(ee, this.props);
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = Object(f.connect)(te, {
                listenTo: function() {
                    return [A.a, B.a, N.a];
                },
                getProps: function() {
                    return {
                        starredMarkets: A.a.getState().starredMarkets,
                        onlyLiquid: A.a
                            .getState()
                            .viewSettings.get("onlyLiquid", !0),
                        defaultMarkets: A.a.getState().defaultMarkets,
                        viewSettings: A.a.getState().viewSettings,
                        preferredBases: A.a.getState().preferredBases,
                        marketStats: B.a.getState().allMarketStats,
                        userMarkets: A.a.getState().userMarkets,
                        searchAssets: N.a.getState().assets,
                        onlyStars: B.a.getState().onlyStars,
                        assetsLoading: N.a.getState().assetsLoading
                    };
                }
            });
        },
        4992: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                s = n(122),
                o = n(31),
                i = n(106),
                l = n(8),
                c = n(51),
                u = n.n(c),
                p = n(358),
                h = (function() {
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
                                                {name: "add", index: 1},
                                                {name: "star", index: 2},
                                                {name: "market", index: 3},
                                                {name: "quoteSupply", index: 4},
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
            var g = (function(e) {
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
            t.default = g;
        }
    }
]);
