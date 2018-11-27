(window.webpackJsonp = window.webpackJsonp || []).push([
    [22, 43],
    {
        112: function(e, t, a) {
            "use strict";
            var r = a(0),
                n = a.n(r),
                o = a(1),
                s = a.n(o),
                i = a(4),
                l = a(6),
                c = a(13),
                u = a(3),
                p = a.n(u),
                h = a(150),
                d = a(17),
                m = a(7),
                f = a.n(m),
                g = a(9),
                b = a.n(g),
                y = a(50),
                v = a(2),
                _ = a.n(v),
                k = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
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
                    C(t, n.a.Component),
                    k(t, [
                        {
                            key: "render",
                            value: function() {
                                return 0 !== this.props.assets.length &&
                                    this.props.value
                                    ? n.a.createElement(h.a, {
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
                                              ? n.a.createElement(d.a, {
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
            (x.propTypes = {value: _.a.string, onChange: _.a.func}),
                (x = Object(y.a)(x, {asList: !0}));
            var S = (function(e) {
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
                    C(t, n.a.Component),
                    k(t, [
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
                                    r = this.getError(),
                                    o = void 0;
                                t ||
                                    (this.props.asset
                                        ? (o = this.props.asset.get("symbol"))
                                        : !r &&
                                          this.props.assetInput &&
                                          (r = p.a.translate(
                                              "explorer.asset.not_found",
                                              {name: this.props.assetInput}
                                          )));
                                var i = b()("button", {
                                    disabled:
                                        !this.props.asset ||
                                        r ||
                                        this.props.disableActionButton
                                });
                                return n.a.createElement(
                                    "div",
                                    {
                                        className: "asset-selector",
                                        style: this.props.style
                                    },
                                    n.a.createElement(
                                        "div",
                                        null,
                                        n.a.createElement(
                                            "div",
                                            {className: "header-area"},
                                            r || a
                                                ? null
                                                : n.a.createElement(
                                                      "label",
                                                      {
                                                          className:
                                                              "right-label"
                                                      },
                                                      "  ",
                                                      n.a.createElement(
                                                          "span",
                                                          null,
                                                          o
                                                      )
                                                  ),
                                            n.a.createElement(s.a, {
                                                component: "label",
                                                content: this.props.label
                                            })
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {className: "input-area"},
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "inline-label input-wrapper"
                                                },
                                                n.a.createElement("input", {
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
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "form-label select floating-dropdown"
                                                    },
                                                    this.props.asset
                                                        ? n.a.createElement(x, {
                                                              ref: this.props
                                                                  .refCallback,
                                                              value: this.props.asset.get(
                                                                  "symbol"
                                                              ),
                                                              assets: f.a.List(
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
                                                    ? n.a.createElement(
                                                          "button",
                                                          {
                                                              className: i,
                                                              onClick: this.onAction.bind(
                                                                  this
                                                              )
                                                          },
                                                          n.a.createElement(
                                                              s.a,
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
                                        n.a.createElement(
                                            "div",
                                            {
                                                className: "error-area",
                                                style: {paddingBottom: "10px"}
                                            },
                                            n.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        wordBreak: "break-all"
                                                    }
                                                },
                                                r
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
            (S.propTypes = {
                label: _.a.string,
                error: _.a.string,
                placeholder: _.a.string,
                onChange: _.a.func,
                onFound: _.a.func,
                assetInput: _.a.string,
                asset: l.a.ChainAsset,
                tabIndex: _.a.number,
                disableActionButton: _.a.string
            }),
                (S.defaultProps = {disabled: !1}),
                (t.a = Object(c.a)(S));
        },
        133: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(0),
                n = a.n(r),
                o = a(11),
                s = a(15),
                i = a(8),
                l = a(1),
                c = a.n(l),
                u = a(58),
                p = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var h = (function(e) {
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
                    })(t, n.a.Component),
                    p(t, [
                        {
                            key: "render",
                            value: function() {
                                return n.a.createElement(
                                    "div",
                                    {className: "page-404"},
                                    n.a.createElement(
                                        "div",
                                        {className: "page-404-container"},
                                        n.a.createElement(
                                            "div",
                                            {className: "page-404-logo"},
                                            n.a.createElement("img", {
                                                src: u.logoLight,
                                                height: "50px",
                                                width: "50px",
                                                alt: "Logo"
                                            })
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {className: "page-404-title"},
                                            n.a.createElement(c.a, {
                                                content:
                                                    "page404.page_not_found_title"
                                            })
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {className: "page-404-subtitle"},
                                            n.a.createElement(c.a, {
                                                content:
                                                    "page404." +
                                                    this.props.subtitle
                                            })
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {className: "page-404-button-back"},
                                            n.a.createElement(
                                                o.b,
                                                {to: "/"},
                                                n.a.createElement(c.a, {
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
            (h.defaultProps = {subtitle: "page_not_found_subtitle"}),
                (t.default = h = Object(s.connect)(h, {
                    listenTo: function() {
                        return [i.a];
                    },
                    getProps: function() {
                        return {theme: i.a.getState().settings.get("themes")};
                    }
                }));
        },
        359: function(e, t, a) {
            "use strict";
            var r = a(76),
                n = a(0),
                o = a.n(n),
                s = a(7),
                i = a.n(s),
                l = a(54),
                c = a.n(l),
                u = a(5),
                p = a(1),
                h = a.n(p),
                d = a(33),
                m = a(15),
                f = a(17),
                g = a(50),
                b = a(6),
                y = a(13),
                v = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var _ = (function(e) {
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
                    v(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.props.account
                                    ? o.a.createElement(
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
            (_.propTypes = {account: b.a.ChainObject.isRequired}),
                (_.defaultProps = {autosubscribe: !1});
            var k = Object(y.a)(_),
                E = a(12),
                w = a(35),
                C = a(10),
                x = a(2),
                S = a.n(x),
                A = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
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
                    })(t, o.a.Component),
                    A(t, [
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
                            value: function(e, t, a) {
                                a.preventDefault(),
                                    this.props.starred
                                        ? C.a.removeStarMarket(e, t)
                                        : C.a.addStarMarket(e, t);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.quote,
                                    r = t.base,
                                    n = (t.noSymbols, t.stats),
                                    s = t.starred;
                                if (!a || !r) return null;
                                var i = a.get("symbol") + "_" + r.get("symbol"),
                                    l = a.get("symbol") + "/" + r.get("symbol"),
                                    c = this.props.getDynamicObject(
                                        a.get("dynamic_asset_data_id")
                                    ),
                                    p = this.props.getDynamicObject(
                                        r.get("dynamic_asset_data_id")
                                    ),
                                    h = u.a.convertPrice(a, r),
                                    d = {};
                                this.props.leftAlign && (d.textAlign = "left");
                                var m = "button outline",
                                    g = null;
                                this.props.compact &&
                                    ((m += " no-margin"),
                                    (g = {
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
                                                    var d = s
                                                        ? "gold-star"
                                                        : "grey-star";
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onStar.bind(
                                                                e,
                                                                a.get("symbol"),
                                                                r.get("symbol")
                                                            ),
                                                            key: t.index
                                                        },
                                                        o.a.createElement(E.a, {
                                                            className: d,
                                                            name: "fi-star",
                                                            title:
                                                                "icons.fi_star.symbol"
                                                        })
                                                    );
                                                case "vol":
                                                    var b = n
                                                        ? n.volumeBase
                                                        : 0;
                                                    return o.a.createElement(
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
                                                    var y = u.a.format_number(
                                                            n && n.change
                                                                ? n.change
                                                                : 0,
                                                            2
                                                        ),
                                                        v =
                                                            "0.00" === y
                                                                ? ""
                                                                : y > 0
                                                                    ? "change-up"
                                                                    : "change-down";
                                                    return o.a.createElement(
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
                                                        y + "%"
                                                    );
                                                case "marketName":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {
                                                                className: m,
                                                                style: g
                                                            },
                                                            l
                                                        )
                                                    );
                                                case "market":
                                                    var _ = e.props.name;
                                                    try {
                                                        void 0 !== _.props &&
                                                            (_ =
                                                                _.props
                                                                    .children[0]
                                                                    .props
                                                                    .name +
                                                                "/" +
                                                                _.props
                                                                    .children[2]
                                                                    .props
                                                                    .name);
                                                    } catch (e) {}
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        _
                                                    );
                                                case "price":
                                                    var w =
                                                            n && n.price
                                                                ? n.price.toReal()
                                                                : n &&
                                                                  n.close &&
                                                                  n.close.quote
                                                                      .amount &&
                                                                  n.close.base
                                                                      .amount
                                                                    ? u.a.get_asset_price(
                                                                          n
                                                                              .close
                                                                              .quote
                                                                              .amount,
                                                                          a,
                                                                          n
                                                                              .close
                                                                              .base
                                                                              .amount,
                                                                          r,
                                                                          !0
                                                                      )
                                                                    : u.a.get_asset_price(
                                                                          h
                                                                              .quote
                                                                              .amount,
                                                                          a,
                                                                          h.base
                                                                              .amount,
                                                                          r,
                                                                          !0
                                                                      ),
                                                        C = 6;
                                                    return (
                                                        -1 !==
                                                            [
                                                                "BTC",
                                                                "OPEN.BTC",
                                                                "TRADE.BTC",
                                                                "GOLD",
                                                                "SILVER"
                                                            ].indexOf(
                                                                r.get("symbol")
                                                            ) && (C = 8),
                                                        o.a.createElement(
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
                                                                        : C
                                                            )
                                                        )
                                                    );
                                                case "quoteSupply":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        c
                                                            ? o.a.createElement(
                                                                  f.a,
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
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        p
                                                            ? o.a.createElement(
                                                                  f.a,
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
                                                                      asset: r.get(
                                                                          "id"
                                                                      )
                                                                  }
                                                              )
                                                            : null
                                                    );
                                                case "issuer":
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            onClick: e._onClick.bind(
                                                                e,
                                                                i
                                                            ),
                                                            key: t.index
                                                        },
                                                        o.a.createElement(k, {
                                                            account: a.get(
                                                                "issuer"
                                                            )
                                                        })
                                                    );
                                                case "add":
                                                    return o.a.createElement(
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
                                                        o.a.createElement(
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
                                                    return o.a.createElement(
                                                        "td",
                                                        {
                                                            key: t.index,
                                                            className:
                                                                "clickable",
                                                            onClick:
                                                                e.props
                                                                    .removeMarket
                                                        },
                                                        o.a.createElement(
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
                                    y = "clickable";
                                return (
                                    this.props.current &&
                                        (y += " activeMarket"),
                                    o.a.createElement(
                                        "tr",
                                        {className: y, style: d},
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
                (O.contextTypes = {router: S.a.object.isRequired});
            var N = Object(g.a)(O, {
                    propNames: ["quote", "base"],
                    defaultProps: {tempComponent: "tr"},
                    withDynamic: !0
                }),
                P = a(8),
                T = a(31),
                I = a(106),
                B = a(22),
                M = a(77),
                F = a(9),
                q = a.n(F),
                j = a(112),
                R = a(3),
                L = a.n(R),
                D = a(37),
                z = a(4),
                U = a(20),
                W = a.n(U),
                H = a(34),
                V = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var J = (function(e) {
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
                        })(t, o.a.Component),
                        V(t, [
                            {
                                key: "_onMoveUp",
                                value: function(e) {
                                    var t = this.props.quotes.findIndex(
                                        function(t) {
                                            return t === e;
                                        }
                                    );
                                    C.a.modifyPreferedBases({
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
                                    C.a.modifyPreferedBases({
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
                                        C.a.modifyPreferedBases({remove: t});
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
                                        C.a.modifyPreferedBases({
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
                                        a = this.props.quotes.size;
                                    return o.a.createElement(
                                        H.a,
                                        {
                                            id: "quote_selection",
                                            overlay: !0,
                                            modalHeader:
                                                "exchange.quote_selection",
                                            noLogo: !0
                                        },
                                        o.a.createElement(
                                            "section",
                                            {
                                                className:
                                                    "block-list no-border-bottom"
                                            },
                                            o.a.createElement(
                                                "table",
                                                {className: "table"},
                                                o.a.createElement(
                                                    "thead",
                                                    null,
                                                    o.a.createElement(
                                                        "tr",
                                                        null,
                                                        o.a.createElement(
                                                            "th",
                                                            null
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            null,
                                                            o.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "account.quote"
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.move_down"
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.move_up"
                                                                }
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "th",
                                                            {
                                                                style: {
                                                                    textAlign:
                                                                        "center"
                                                                }
                                                            },
                                                            o.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.remove"
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    "tbody",
                                                    null,
                                                    this.props.quotes.map(
                                                        function(t, r) {
                                                            return o.a.createElement(
                                                                "tr",
                                                                {key: t},
                                                                o.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    r + 1
                                                                ),
                                                                o.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    t
                                                                ),
                                                                o.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    r !==
                                                                        a - 1 &&
                                                                        o.a.createElement(
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
                                                                o.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    0 !== r &&
                                                                        o.a.createElement(
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
                                                                o.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "text-center"
                                                                    },
                                                                    a > 1 &&
                                                                        o.a.createElement(
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
                                            o.a.createElement("br", null),
                                            o.a.createElement("br", null),
                                            o.a.createElement("br", null),
                                            o.a.createElement(
                                                "div",
                                                null,
                                                o.a.createElement(j.a, {
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
                                                o.a.createElement(
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
                                var a = [],
                                    r = !0,
                                    n = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var s, i = e[Symbol.iterator]();
                                        !(r = (s = i.next()).done) &&
                                        (a.push(s.value), !t || a.length !== t);
                                        r = !0
                                    );
                                } catch (e) {
                                    (n = !0), (o = e);
                                } finally {
                                    try {
                                        !r && i.return && i.return();
                                    } finally {
                                        if (n) throw o;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                Y = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            function G(e, t) {
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
                        G(this, t);
                        var a = K(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (a.state = a._getInitialState(e)), a;
                    }
                    return (
                        X(t, o.a.Component),
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
                                    C.a.changeViewSetting({
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
                                        a = new Date();
                                    a.setFullYear(a.getFullYear() + 1),
                                        ("vol-true" != t &&
                                            "name-true" != t &&
                                            "name-false" != t) ||
                                        "volume" != e
                                            ? ("vol-false" != t && null != t) ||
                                              "volume" != e ||
                                              (this.setCookie(
                                                  "gt_get_sort",
                                                  "vol-true",
                                                  {expires: a.toGMTString()}
                                              ),
                                              this._inverseSort())
                                            : this.setCookie(
                                                  "gt_get_sort",
                                                  "vol-false",
                                                  {expires: a.toGMTString()}
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
                                                  {expires: a.toGMTString()}
                                              ),
                                              this._inverseSort())
                                            : this.setCookie(
                                                  "gt_get_sort",
                                                  "name-false",
                                                  {expires: a.toGMTString()}
                                              ),
                                        e !== this.state.sortBy
                                            ? (C.a.changeViewSetting({
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
                                            C.a.changeViewSetting(a);
                                    }
                                }
                            },
                            {
                                key: "_onToggleUserMarket",
                                value: function(e) {
                                    var t = e.split("_"),
                                        a = Q(t, 2),
                                        r = a[0],
                                        n = a[1],
                                        o = !this.props.userMarkets.get(e);
                                    C.a.setUserMarket(r, n, o);
                                }
                            },
                            {
                                key: "setCookie",
                                value: function(e, t, a) {
                                    var r = (a = a || {}).expires;
                                    if ("number" == typeof r && r) {
                                        var n = new Date();
                                        n.setTime(n.getTime() + 1e3 * r),
                                            (r = a.expires = n);
                                    }
                                    r &&
                                        r.toUTCString &&
                                        (a.expires = r.toUTCString());
                                    var o =
                                        e + "=" + (t = encodeURIComponent(t));
                                    for (var s in a) {
                                        o += "; " + s;
                                        var i = a[s];
                                        !0 !== i && (o += "=" + i);
                                    }
                                    document.cookie = o;
                                }
                            },
                            {
                                key: "getCookie",
                                value: function(e) {
                                    var t = document.cookie,
                                        a = e + "=",
                                        r = t.indexOf("; " + a),
                                        n = null;
                                    if (-1 == r) {
                                        if (0 != (r = t.indexOf(a)))
                                            return null;
                                        n = document.cookie.indexOf(";", r);
                                    } else
                                        (r += 2),
                                            -1 ==
                                                (n = document.cookie.indexOf(
                                                    ";",
                                                    r
                                                )) && (n = t.length);
                                    return decodeURI(
                                        t.substring(r + a.length, n)
                                    ).replace(/"/g, "");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.columns,
                                        r = t.markets,
                                        n = t.base,
                                        s = t.marketStats,
                                        i = t.starredMarkets,
                                        l = t.current,
                                        c = this.state,
                                        u = c.sortBy,
                                        p = c.inverseSort,
                                        d = c.open;
                                    if (!r || !r.length) return null;
                                    var m = a.map(function(t) {
                                            switch (t.name) {
                                                case "market":
                                                    var a = "",
                                                        r = e.getCookie(
                                                            "gt_get_sort"
                                                        );
                                                    return (
                                                        "name" !=
                                                            e.state.sortBy ||
                                                        ("name-false" != r &&
                                                            null != r)
                                                            ? "name" ==
                                                                  e.state
                                                                      .sortBy &&
                                                              "name-true" ==
                                                                  r &&
                                                              (a = o.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▼"
                                                              ))
                                                            : (a = o.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▲"
                                                              )),
                                                        o.a.createElement(
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
                                                            o.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.market"
                                                                }
                                                            ),
                                                            a
                                                        )
                                                    );
                                                case "vol":
                                                    var n = "",
                                                        s = e.getCookie(
                                                            "gt_get_sort"
                                                        );
                                                    return (
                                                        "volume" !=
                                                            e.state.sortBy ||
                                                        ("vol-false" != s &&
                                                            null != s)
                                                            ? "volume" ==
                                                                  e.state
                                                                      .sortBy &&
                                                              "vol-true" == s &&
                                                              (n = o.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▲"
                                                              ))
                                                            : (n = o.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▼"
                                                              )),
                                                        o.a.createElement(
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
                                                            o.a.createElement(
                                                                h.a,
                                                                {
                                                                    content:
                                                                        "exchange.vol_short"
                                                                }
                                                            ),
                                                            n
                                                        )
                                                    );
                                                case "price":
                                                    return o.a.createElement(
                                                        "th",
                                                        {
                                                            key: t.name,
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    );
                                                case "quoteSupply":
                                                    return o.a.createElement(
                                                        "th",
                                                        {key: t.name},
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "exchange.base_supply"
                                                        })
                                                    );
                                                case "baseSupply":
                                                    return o.a.createElement(
                                                        "th",
                                                        {key: t.name},
                                                        o.a.createElement(h.a, {
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
                                                            ? (i = o.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▲"
                                                              ))
                                                            : "change" ==
                                                                  e.state
                                                                      .sortBy &&
                                                              (i = o.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▼"
                                                              )),
                                                        o.a.createElement(
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
                                                            o.a.createElement(
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
                                                    return o.a.createElement(
                                                        "th",
                                                        {key: t.name},
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "explorer.assets.issuer"
                                                        })
                                                    );
                                                case "add":
                                                    return o.a.createElement(
                                                        "th",
                                                        {
                                                            key: t.name,
                                                            style: {
                                                                textAlign:
                                                                    "right"
                                                            }
                                                        },
                                                        o.a.createElement(h.a, {
                                                            content:
                                                                "account.perm.confirm_add"
                                                        })
                                                    );
                                                default:
                                                    return o.a.createElement(
                                                        "th",
                                                        {key: t.name}
                                                    );
                                            }
                                        }),
                                        f = r
                                            .map(function(t) {
                                                return e.props.onlyLiquid &&
                                                    s.get(t.id) &&
                                                    0 == s.get(t.id).volumeBase
                                                    ? null
                                                    : o.a.createElement(N, {
                                                          key: t.id,
                                                          name:
                                                              "others" === n
                                                                  ? o.a.createElement(
                                                                        "span",
                                                                        null,
                                                                        o.a.createElement(
                                                                            B.a,
                                                                            {
                                                                                name:
                                                                                    t.quote
                                                                            }
                                                                        ),
                                                                        ":",
                                                                        o.a.createElement(
                                                                            B.a,
                                                                            {
                                                                                name:
                                                                                    t.base
                                                                            }
                                                                        )
                                                                    )
                                                                  : o.a.createElement(
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
                                                          stats: s.get(t.id),
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
                                            .sort(function(t, a) {
                                                var r = t.key.split("_"),
                                                    n = a.key.split("_"),
                                                    o = s.get(
                                                        r[0] + "_" + r[1]
                                                    ),
                                                    i = s.get(
                                                        n[0] + "_" + n[1]
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
                                                            r[0] > n[0]
                                                                ? p
                                                                    ? -1
                                                                    : 1
                                                                : r[0] < n[0]
                                                                    ? p
                                                                        ? 1
                                                                        : -1
                                                                    : r[1] >
                                                                      n[1]
                                                                        ? p
                                                                            ? -1
                                                                            : 1
                                                                        : r[1] <
                                                                          n[1]
                                                                            ? p
                                                                                ? 1
                                                                                : -1
                                                                            : 0
                                                        );
                                                    case "volume":
                                                        return o && i
                                                            ? "vol-false" ==
                                                                  l || null == l
                                                                ? i.volumeBase -
                                                                  o.volumeBase
                                                                : o.volumeBase -
                                                                  i.volumeBase
                                                            : 0;
                                                    case "change":
                                                        return o && i
                                                            ? p
                                                                ? i.change -
                                                                  o.change
                                                                : o.change -
                                                                  i.change
                                                            : 0;
                                                }
                                            });
                                    return o.a.createElement(
                                        "div",
                                        {style: {paddingRight: 10}},
                                        d
                                            ? o.a.createElement(
                                                  "table",
                                                  {
                                                      className:
                                                          "table table-hover text-right"
                                                  },
                                                  o.a.createElement(
                                                      "thead",
                                                      null,
                                                      o.a.createElement(
                                                          "tr",
                                                          null,
                                                          m
                                                      )
                                                  ),
                                                  f && f.length
                                                      ? o.a.createElement(
                                                            "tbody",
                                                            null,
                                                            f
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
                    G(this, t);
                    var a = K(
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
                        (a._onInputName = a._onInputName.bind(a)),
                        (a._setMinWidth = a._setMinWidth.bind(a)),
                        (a.getAssetList = Object(r.a)(
                            M.a.getAssetList.defer,
                            150
                        )),
                        a
                    );
                }
                return (
                    X(t, o.a.Component),
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
                                C.a.changeViewSetting({
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
                                    a = new Date();
                                a.setFullYear(a.getFullYear() + 1),
                                    "vol-true" == t && "volume" == e
                                        ? this.setCookie(
                                              "gt_get_sort",
                                              "vol-false",
                                              {expires: a.toGMTString()}
                                          )
                                        : ("vol-false" != t && null != t) ||
                                          "volume" != e ||
                                          (this.setCookie(
                                              "gt_get_sort",
                                              "vol-true",
                                              {expires: a.toGMTString()}
                                          ),
                                          this._inverseSort()),
                                    e !== this.state.sortBy
                                        ? (C.a.changeViewSetting({
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
                                C.a.changeViewSetting({favMarketTab: e}),
                                    this.setState({activeTab: e}),
                                    this._setMinWidth();
                            }
                        },
                        {
                            key: "_onInputName",
                            value: function(e) {
                                var t = e.target.value.trim().toUpperCase(),
                                    a = !z.d.is_valid_symbol_error(t, !0);
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
                                        r = e.toUpperCase().split(":"),
                                        n = r[0],
                                        o = 2 === r.length ? r[1] : null;
                                    if (
                                        (this.setState({
                                            lookupQuote: n,
                                            lookupBase: o
                                        }),
                                        C.a.changeViewSetting.defer({
                                            marketLookupInput: e.toUpperCase()
                                        }),
                                        this.state.lookupQuote !== n || t)
                                    ) {
                                        if (n.length < 1 || a - Z <= 250)
                                            return !1;
                                        this.getAssetList(n, 50);
                                    } else if (
                                        o &&
                                        this.state.lookupBase !== o
                                    ) {
                                        if (o.length < 1 || a - Z <= 250)
                                            return !1;
                                        this.getAssetList(o, 50);
                                    }
                                }
                            }
                        },
                        {
                            key: "toggleActiveMarketTab",
                            value: function(e) {
                                C.a.changeViewSetting({activeMarketTab: e}),
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
                                    r = t.starredMarkets,
                                    n = t.defaultMarkets,
                                    s = t.marketStats,
                                    l = t.columns,
                                    c = t.searchAssets,
                                    u = t.assetsLoading,
                                    p = t.preferredBases,
                                    m = (t.core, t.current),
                                    f = t.viewSettings,
                                    g = t.listHeight,
                                    b = t.onlyStars,
                                    y = t.userMarkets,
                                    v = this.state,
                                    _ = v.activeMarketTab,
                                    k = v.activeTab,
                                    E = v.lookupQuote,
                                    x = v.lookupBase,
                                    S = o.a.createElement("tr", null),
                                    A = "my-market" === k,
                                    O = p.map(function(e) {
                                        return e;
                                    });
                                A ||
                                    (p = (p = p.clear()).push(
                                        this.state.activeFindBase
                                    ));
                                var N = {},
                                    P = [];
                                E || (E = "OPEN."),
                                    A || (_ = 0),
                                    c
                                        .filter(function(e) {
                                            return x && x.length
                                                ? 0 === e.symbol.indexOf(x)
                                                : -1 !== e.symbol.indexOf(E);
                                        })
                                        .forEach(function(e) {
                                            x && x.length
                                                ? 0 === e.symbol.indexOf(x) &&
                                                  P.push(e.symbol)
                                                : p.includes(e.symbol) &&
                                                  e.symbol.length >= E.length &&
                                                  e.symbol.length <
                                                      E.length + 3 &&
                                                  P.push(e.symbol);
                                        }),
                                    (P = (P = P.concat(
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
                                var T = [];
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
                                            P.forEach(function(t) {
                                                var a = e.symbol + "_" + t;
                                                t !== e.symbol &&
                                                    T.push([
                                                        a,
                                                        {
                                                            quote: e.symbol,
                                                            base: t
                                                        }
                                                    ]);
                                            });
                                        }),
                                    (T = T.filter(function(e) {
                                        return !x || e[1].quote === E;
                                    })),
                                    (T = i.a.Map(T));
                                var I = A ? n : T;
                                A &&
                                    y.size &&
                                    y.forEach(function(e, t) {
                                        I = I.set(t, e);
                                    }),
                                    I.size > 0 &&
                                        (S = I.filter(function(t) {
                                            if (A) {
                                                var a = t.quote + "_" + t.base;
                                                return e.state.myMarketFilter
                                                    ? -1 !==
                                                          a.indexOf(
                                                              e.state
                                                                  .myMarketFilter
                                                          )
                                                    : !(b && !r.has(a));
                                            }
                                            return (
                                                !(E.length < 1) &&
                                                -1 !== t.quote.indexOf(E)
                                            );
                                        })
                                            .map(function(e) {
                                                var t = e.quote + "_" + e.base;
                                                return p.includes(e.base)
                                                    ? (N[e.base] ||
                                                          (N[e.base] = []),
                                                      N[e.base].push({
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
                                            .take(A ? 100 : 20)
                                            .toArray());
                                var B = S && S.length,
                                    M = "mymarkets-header clickable",
                                    F = q()(M, {inactive: !A}),
                                    R = q()(M, {inactive: A}),
                                    z = {
                                        minWidth: this.state.minWidth,
                                        minHeight: "6rem"
                                    };
                                g && (z.height = g);
                                var U = a(3);
                                return o.a.createElement(
                                    "div",
                                    {
                                        className:
                                            this.props.className +
                                            " explorer_markets",
                                        style: this.props.style
                                    },
                                    o.a.createElement(
                                        "div",
                                        {
                                            style: this.props.headerStyle,
                                            className:
                                                "grid-block shrink left-orderbook-header bottom-header"
                                        },
                                        o.a.createElement(
                                            "div",
                                            {
                                                ref: "myMarkets",
                                                className: F,
                                                onClick: this._changeTab.bind(
                                                    this,
                                                    "my-market"
                                                ),
                                                "data-intro": U.translate(
                                                    "walkthrough.my_markets_tab"
                                                )
                                            },
                                            o.a.createElement(h.a, {
                                                content: "exchange.market_name"
                                            })
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className: R,
                                                onClick: this._changeTab.bind(
                                                    this,
                                                    "find-market"
                                                ),
                                                "data-intro": U.translate(
                                                    "walkthrough.find_markets_tab"
                                                )
                                            },
                                            o.a.createElement(h.a, {
                                                content: "exchange.more"
                                            })
                                        )
                                    ),
                                    this.props.controls
                                        ? o.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "small-12 medium-6",
                                                  style: {padding: "1rem 0"}
                                              },
                                              this.props.controls
                                                  ? o.a.createElement(
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
                                    A
                                        ? o.a.createElement(
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
                                              o.a.createElement(
                                                  "div",
                                                  null,
                                                  o.a.createElement(
                                                      "label",
                                                      {
                                                          style: {
                                                              margin: "3px 0 0"
                                                          }
                                                      },
                                                      o.a.createElement(
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
                                                                  C.a.changeViewSetting(
                                                                      {
                                                                          onlyLiquid: !e
                                                                              .props
                                                                              .onlyLiquid
                                                                      }
                                                                  );
                                                              }
                                                          }
                                                      ),
                                                      o.a.createElement(
                                                          "span",
                                                          {
                                                              style: {
                                                                  paddingLeft:
                                                                      "0.4rem"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              h.a,
                                                              {
                                                                  content:
                                                                      "exchange.show_only_liquid"
                                                              }
                                                          )
                                                      )
                                                  ),
                                                  o.a.createElement(
                                                      "label",
                                                      {
                                                          style: {
                                                              margin: "3px 0 0"
                                                          }
                                                      },
                                                      o.a.createElement(
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
                                                      o.a.createElement(
                                                          "span",
                                                          {
                                                              style: {
                                                                  paddingLeft:
                                                                      "0.4rem"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              d.a,
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
                                              o.a.createElement(
                                                  "div",
                                                  {className: "search-wrapper"},
                                                  o.a.createElement(
                                                      "form",
                                                      null,
                                                      o.a.createElement(
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
                                                      o.a.createElement(
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
                                        : o.a.createElement(
                                              "div",
                                              {
                                                  style: {
                                                      width: "100%",
                                                      textAlign: "left",
                                                      padding: "0.75rem 0.5rem"
                                                  }
                                              },
                                              o.a.createElement(
                                                  "table",
                                                  null,
                                                  o.a.createElement(
                                                      "tbody",
                                                      null,
                                                      o.a.createElement(
                                                          "tr",
                                                          {
                                                              style: {
                                                                  width: "100%"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              "td",
                                                              null,
                                                              o.a.createElement(
                                                                  j.a,
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
                                                      o.a.createElement(
                                                          "tr",
                                                          {
                                                              style: {
                                                                  width: "100%"
                                                              }
                                                          },
                                                          o.a.createElement(
                                                              "td",
                                                              null,
                                                              o.a.createElement(
                                                                  "label",
                                                                  null,
                                                                  o.a.createElement(
                                                                      h.a,
                                                                      {
                                                                          content:
                                                                              "account.user_issued_assets.name"
                                                                      }
                                                                  ),
                                                                  ":"
                                                              ),
                                                              o.a.createElement(
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
                                                                      placeholder: L.a.translate(
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
                                                                  ? o.a.createElement(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "error-area",
                                                                            style: {
                                                                                paddingTop: 10
                                                                            }
                                                                        },
                                                                        o.a.createElement(
                                                                            "span",
                                                                            {
                                                                                style: {
                                                                                    wordBreak:
                                                                                        "break-all"
                                                                                }
                                                                            },
                                                                            o.a.createElement(
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
                                    o.a.createElement(
                                        "ul",
                                        {className: "mymarkets-tabs"},
                                        p.map(function(t, a) {
                                            return t
                                                ? o.a.createElement(
                                                      "li",
                                                      {
                                                          key: t,
                                                          onClick: e.toggleActiveMarketTab.bind(
                                                              e,
                                                              a
                                                          ),
                                                          className: q()(
                                                              "mymarkets-tab",
                                                              {active: _ === a}
                                                          )
                                                      },
                                                      o.a.createElement(
                                                          "span",
                                                          null,
                                                          t
                                                      )
                                                  )
                                                : null;
                                        }),
                                        A && B
                                            ? o.a.createElement(
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
                                                                  _ ===
                                                                  p.size + 1
                                                          }
                                                      )
                                                  },
                                                  o.a.createElement(h.a, {
                                                      content: "exchange.others"
                                                  })
                                              )
                                            : null,
                                        A &&
                                            o.a.createElement(
                                                "li",
                                                {
                                                    key: "quote_edit",
                                                    style: {
                                                        textTransform:
                                                            "uppercase"
                                                    },
                                                    onClick: function() {
                                                        W.a.publish(
                                                            "quote_selection",
                                                            "open"
                                                        );
                                                    },
                                                    className: "mymarkets-tab"
                                                },
                                                " + "
                                            )
                                    ),
                                    o.a.createElement(
                                        "div",
                                        {
                                            style: z,
                                            className:
                                                "table-container grid-block vertical mymarkets-list",
                                            ref: "favorites"
                                        },
                                        u
                                            ? o.a.createElement(
                                                  "div",
                                                  {
                                                      style: {
                                                          position: "absolute",
                                                          paddingTop: "3rem",
                                                          textAlign: "center",
                                                          width: "100%"
                                                      }
                                                  },
                                                  o.a.createElement(D.a, {
                                                      type: "three-bounce"
                                                  })
                                              )
                                            : null,
                                        p
                                            .filter(function(e) {
                                                return e === p.get(_);
                                            })
                                            .map(function(t, a) {
                                                return o.a.createElement($, {
                                                    userMarkets:
                                                        e.props.userMarkets,
                                                    defaultMarkets:
                                                        e.props.defaultMarkets,
                                                    index: a,
                                                    allowChange: !1,
                                                    key: t,
                                                    current: m,
                                                    starredMarkets: r,
                                                    marketStats: s,
                                                    viewSettings: f,
                                                    columns: A
                                                        ? l
                                                        : e.props.findColumns ||
                                                          l,
                                                    markets: N[t],
                                                    base: t,
                                                    maxRows: A ? 20 : 10,
                                                    findMarketTab: !A,
                                                    location: e.props.location,
                                                    history: e.props.history,
                                                    onlyLiquid:
                                                        e.props.onlyLiquid && A
                                                });
                                            }),
                                        _ === p.size + 1 && A && B
                                            ? o.a.createElement($, {
                                                  userMarkets: this.props
                                                      .userMarkets,
                                                  index: p.size,
                                                  current: m,
                                                  starredMarkets: r,
                                                  marketStats: s,
                                                  viewSettings: f,
                                                  columns: l,
                                                  markets: S,
                                                  base: "others",
                                                  maxRows: A ? 20 : 10,
                                                  findMarketTab: !A,
                                                  location: this.props.location,
                                                  history: this.props.history
                                              })
                                            : null
                                    ),
                                    o.a.createElement(J, {
                                        quotes: this.props.preferredBases
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (ee.propTypes = {core: b.a.ChainAsset.isRequired}),
                (ee.defaultProps = {
                    activeTab: "my-market",
                    core: "1.3.0",
                    setMinWidth: !1
                }),
                (ee.contextTypes = {router: S.a.object.isRequired}),
                (ee = Object(y.a)(ee));
            var te = (function(e) {
                function t() {
                    return (
                        G(this, t),
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
                    X(t, o.a.Component),
                    Y(t, [
                        {
                            key: "render",
                            value: function() {
                                return o.a.createElement(ee, this.props);
                            }
                        }
                    ]),
                    t
                );
            })();
            t.a = Object(m.connect)(te, {
                listenTo: function() {
                    return [P.a, T.a, I.a];
                },
                getProps: function() {
                    return {
                        starredMarkets: P.a.getState().starredMarkets,
                        onlyLiquid: P.a
                            .getState()
                            .viewSettings.get("onlyLiquid", !0),
                        defaultMarkets: P.a.getState().defaultMarkets,
                        viewSettings: P.a.getState().viewSettings,
                        preferredBases: P.a.getState().preferredBases,
                        marketStats: T.a.getState().allMarketStats,
                        userMarkets: P.a.getState().userMarkets,
                        searchAssets: I.a.getState().assets,
                        onlyStars: T.a.getState().onlyStars,
                        assetsLoading: I.a.getState().assetsLoading
                    };
                }
            });
        },
        362: function(e, t) {
            e.exports = {
                midnightTheme: {
                    bidColor: "#50D2C2",
                    bidFillColor: "rgba(80, 210, 194, 0.5)",
                    askColor: "#E3745B",
                    askFillColor: "rgba(227, 116, 91, 0.5)",
                    callColor: "#BBBF2B",
                    settleColor: "rgba(125, 134, 214, 1)",
                    settleFillColor: "rgba(125, 134, 214, 0.5)",
                    positiveColor: "#6BA583",
                    negativeColor: "#DB0000",
                    strokeColor: "#FFFF00",
                    primaryText: "#e0e0e0",
                    volumeColor: "#848484",
                    tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
                    tooltipColor: "#fff",
                    tooltipFillColor: "#fff",
                    axisLabelsColor: "#fff",
                    axisLineColor: "rgba(200, 200, 200, 0.3)",
                    indicatorLineColor: "#FFFFFF",
                    bgColor: "#191a1f",
                    textColor: "#e0e0e0"
                },
                darkTheme: {
                    bidColor: "#6BA583",
                    bidFillColor: "rgba(80, 210, 194, 0.5)",
                    askColor: "#E3745B",
                    askFillColor: "rgba(227, 116, 91, 0.5)",
                    callColor: "#BBBF2B",
                    settleColor: "rgba(125, 134, 214, 1)",
                    settleFillColor: "rgba(125, 134, 214, 0.5)",
                    positiveColor: "#258A14",
                    negativeColor: "#DB0000",
                    strokeColor: "#FFFF00",
                    primaryText: "#e0e0e0",
                    volumeColor: "#848484",
                    tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
                    tooltipColor: "#fff",
                    tooltipFillColor: "#fff",
                    axisLabelsColor: "#fff",
                    axisLineColor: "rgba(200, 200, 200, 0.3)",
                    indicatorLineColor: "#FFFFFF",
                    bgColor: "#2a2a2a",
                    textColor: "#ffffff"
                },
                lightTheme: {
                    bidColor: "#258A14",
                    bidFillColor: "rgba(80, 210, 194, 0.5)",
                    askColor: "#EA340B",
                    askFillColor: "rgba(227, 116, 91, 0.5)",
                    callColor: "#BBBF2B",
                    settleColor: "rgba(125, 134, 214, 1)",
                    settleFillColor: "rgba(125, 134, 214, 0.5)",
                    positiveColor: "#528c0a",
                    negativeColor: "rgba(225, 66, 74, 1)",
                    strokeColor: "#000000",
                    primaryText: "#242424",
                    volumeColor: "#848484",
                    tooltipBackgroundColor: "rgba(255,255,255, 0.9)",
                    tooltipColor: "#000",
                    tooltipFillColor: "#000",
                    axisLabelsColor: "#000",
                    axisLineColor: "rgba(200, 200, 200, 0.3)",
                    indicatorLineColor: "#848484",
                    bgColor: "#fff",
                    textColor: "#3d3d3d"
                }
            };
        },
        4982: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(0),
                n = a.n(r),
                o = a(31),
                s = a(14),
                i = a(106),
                l = a(8),
                c = a(75),
                u = a(184),
                p = a(74),
                h = a(51),
                d = a.n(h),
                m = a(76),
                f = a(2),
                g = a.n(f),
                b = a(35),
                y = a(335),
                v = a(54),
                _ = a.n(v),
                k = a(5),
                E = a(1),
                w = a.n(E),
                C = a(10),
                x = a(9),
                S = a.n(x),
                A = a(155),
                O = a(111),
                N = a(22),
                P = a(500),
                T = a(12),
                I = a(42),
                B = a.n(I),
                M = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            function F(e, t) {
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
            var R = (function(e) {
                    function t() {
                        return (
                            F(this, t),
                            q(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        j(t, n.a.Component),
                        M(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        e.order.market_base ===
                                            this.props.order.market_base &&
                                        (e.order.ne(this.props.order) ||
                                            e.index !== this.props.index ||
                                            e.currentAccount !==
                                                this.props.currentAccount)
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.order,
                                        r = e.quote,
                                        o = e.base,
                                        s = e.final,
                                        i = t.isBid(),
                                        l = t.isCall()
                                            ? "orderHistoryCall"
                                            : i
                                                ? "orderHistoryBid"
                                                : "orderHistoryAsk",
                                        c = a(3),
                                        u = n.a.createElement(A.a, {
                                            price: t.getPrice(),
                                            quote: r,
                                            base: o
                                        }),
                                        p = i
                                            ? k.a.format_number(
                                                  t
                                                      .totalForSale()
                                                      .getAmount({real: !0}),
                                                  8
                                              )
                                            : k.a.format_number(
                                                  t
                                                      .totalToReceive()
                                                      .getAmount({real: !0}),
                                                  8
                                              ),
                                        h = i
                                            ? k.a.format_number(
                                                  t
                                                      .totalToReceive()
                                                      .getAmount({real: !0}),
                                                  8
                                              )
                                            : k.a.format_number(
                                                  t
                                                      .totalForSale()
                                                      .getAmount({real: !0}),
                                                  8
                                              ),
                                        d =
                                            c.translate("exchange.total") +
                                            " " +
                                            r.get("symbol") +
                                            " " +
                                            h +
                                            "<br />" +
                                            c.translate("exchange.total") +
                                            " " +
                                            o.get("symbol") +
                                            " " +
                                            p;
                                    return n.a.createElement(
                                        "div",
                                        {
                                            onClick: this.props.onClick,
                                            className: S()(
                                                "sticky-table-row order-row vertical-table-cell",
                                                {"final-row": s},
                                                {
                                                    "my-order": t.isMine(
                                                        this.props
                                                            .currentAccount
                                                    )
                                                }
                                            )
                                        },
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "cell left vertical-table-cell vertical-table-cell-one"
                                            },
                                            k.a.format_number(
                                                t[
                                                    i
                                                        ? "amountForSale"
                                                        : "amountToReceive"
                                                ]().getAmount({real: !0}),
                                                o.get("precision")
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "cell vertical-table-cell vertical-table-cell-two"
                                            },
                                            k.a.format_number(
                                                t[
                                                    i
                                                        ? "amountToReceive"
                                                        : "amountForSale"
                                                ]().getAmount({real: !0}),
                                                r.get("precision")
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "cell " +
                                                    l +
                                                    " right vertical-table-cell-three",
                                                "data-tip": d,
                                                "data-html": !0,
                                                "data-place": "right"
                                            },
                                            u
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                L = (function(e) {
                    function t() {
                        return (
                            F(this, t),
                            q(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        j(t, n.a.Component),
                        M(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        e.order.ne(this.props.order) ||
                                        e.position !== this.props.position ||
                                        e.index !== this.props.index ||
                                        e.currentAccount !==
                                            this.props.currentAccount
                                    );
                                }
                            },
                            {
                                key: "rmLeftCellActive",
                                value: function() {
                                    var e = document.getElementsByTagName(
                                        "main"
                                    )[0];
                                    e.className.indexOf("left-cell-active") >
                                        -1 &&
                                        (e.className = e.className.replace(
                                            "left-cell-active",
                                            ""
                                        ));
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this.rmLeftCellActive();
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    this.rmLeftCellActive();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = a(3),
                                        t = this.props,
                                        r = t.order,
                                        o = t.quote,
                                        s = t.base,
                                        i = t.position,
                                        l = r.isBid(),
                                        c = r.isCall()
                                            ? "orderHistoryCall"
                                            : l
                                                ? "orderHistoryBid"
                                                : "orderHistoryAsk",
                                        u = n.a.createElement(A.a, {
                                            price: r.getPrice(),
                                            quote: o,
                                            base: s
                                        }),
                                        p = l
                                            ? k.a.format_number(
                                                  r
                                                      .amountToReceive()
                                                      .getAmount({real: !0}),
                                                  o.get("precision")
                                              )
                                            : k.a.format_number(
                                                  r
                                                      .amountForSale()
                                                      .getAmount({real: !0}),
                                                  o.get("precision")
                                              ),
                                        h = l
                                            ? k.a.format_number(
                                                  r
                                                      .amountForSale()
                                                      .getAmount({real: !0}),
                                                  s.get("precision")
                                              )
                                            : k.a.format_number(
                                                  r
                                                      .amountToReceive()
                                                      .getAmount({real: !0}),
                                                  s.get("precision")
                                              ),
                                        d = l
                                            ? k.a.format_number(
                                                  r
                                                      .totalForSale()
                                                      .getAmount({real: !0}),
                                                  8
                                              )
                                            : k.a.format_number(
                                                  r
                                                      .totalToReceive()
                                                      .getAmount({real: !0}),
                                                  8
                                              ),
                                        m = l
                                            ? k.a.format_number(
                                                  r
                                                      .totalToReceive()
                                                      .getAmount({real: !0}),
                                                  8
                                              )
                                            : k.a.format_number(
                                                  r
                                                      .totalForSale()
                                                      .getAmount({real: !0}),
                                                  8
                                              ),
                                        f =
                                            e.translate("exchange.total") +
                                            " " +
                                            o.get("symbol") +
                                            " " +
                                            m +
                                            "<br />" +
                                            e.translate("exchange.total") +
                                            " " +
                                            s.get("symbol") +
                                            " " +
                                            d;
                                    return n.a.createElement(
                                        "tr",
                                        {
                                            onClick: this.props.onClick,
                                            className: r.isMine(
                                                this.props.currentAccount
                                            )
                                                ? "my-order"
                                                : ""
                                        },
                                        n.a.createElement(
                                            "td",
                                            {
                                                style: {width: "25%"},
                                                className: c
                                            },
                                            u
                                        ),
                                        n.a.createElement(
                                            "td",
                                            null,
                                            "left" === i ? p : h
                                        ),
                                        n.a.createElement(
                                            "td",
                                            {
                                                "data-tip": f,
                                                "data-html": !0,
                                                "data-place": "right"
                                            },
                                            "left" === i ? h : p
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                D = (function(e) {
                    function t(e) {
                        F(this, t);
                        var a = q(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (a.queryStickyTable = function(e) {
                                return a.refs.vertical_sticky_table_up.table.querySelector(
                                    e
                                );
                            }),
                            (a.verticalScrollBar = function() {
                                return a.queryStickyTable("#y-scrollbar");
                            }),
                            (a.toggleSpreadValue = function() {
                                a.setState({
                                    displaySpreadAsPercentage: !a.state
                                        .displaySpreadAsPercentage
                                });
                            }),
                            (a.toggleAutoScroll = function() {
                                var e = {autoScroll: !a.state.autoScroll};
                                e.autoScroll || a.setState(e);
                            }),
                            (a.state = {
                                flip: e.flipOrderBook,
                                showAllBids: !1,
                                showAllAsks: !1,
                                rowCount: 50,
                                autoScroll: !0
                            }),
                            a
                        );
                    }
                    return (
                        j(t, n.a.Component),
                        M(t, [
                            {
                                key: "addLeftCellActive",
                                value: function() {
                                    var e = document.getElementsByTagName(
                                        "main"
                                    )[0];
                                    -1 ===
                                        e.className.indexOf(
                                            "left-cell-active"
                                        ) &&
                                        (e.className += " left-cell-active");
                                }
                            },
                            {
                                key: "updateCeilWith",
                                value: function() {
                                    function e(e, t) {
                                        var a = document.getElementsByClassName(
                                            e
                                        );
                                        for (var r in a)
                                            try {
                                                a[r].style.width = t + "px";
                                            } catch (e) {}
                                    }
                                    function t(e) {
                                        var t = 0,
                                            a = document.getElementsByClassName(
                                                e
                                            );
                                        for (var r in a) {
                                            var n = a[r].offsetWidth;
                                            n > t && (t = n);
                                        }
                                        return t;
                                    }
                                    var a = "vertical-table-cell-one",
                                        r = "vertical-table-cell-two",
                                        n = "vertical-table-cell-three",
                                        o = {one: t(a), two: t(r), three: t(n)};
                                    e(a, o.one), e(r, o.two), e(n, o.three);
                                    var s = 0;
                                    try {
                                        (s = o.one + o.two + o.three),
                                            (document.getElementsByClassName(
                                                "container-menu-header"
                                            )[0].style.marginLeft = s + "px");
                                    } catch (e) {}
                                    try {
                                        var i = "exchange_header_style",
                                            l =
                                                "@media only screen and (min-width: 1280px) { body.localcoin .exchange-layout .grid-block.shrink.no-padding.overflow-visible.top-bar, body.localcoin .exchange-layout .main .grid-block.shrink.no-padding.overflow-visible.top-bar.left-cell-active { width: calc(100% - " +
                                                (s + t("right-column")) +
                                                "px); }}";
                                        if (document.getElementById(i)) {
                                            document.getElementById(
                                                i
                                            ).innerHTML = l;
                                        } else {
                                            var c = document.createElement(
                                                "style"
                                            );
                                            (c.id = i),
                                                (c.innerHTML = l),
                                                document
                                                    .getElementsByTagName(
                                                        "head"
                                                    )[0]
                                                    .appendChild(c);
                                        }
                                    } catch (e) {}
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    var t = this;
                                    (e.base.get("id") ===
                                        this.props.base.get("id") &&
                                        e.quote.get("id") ===
                                            this.props.quote.get("id")) ||
                                        (this.refs.askTransition &&
                                            (this.refs.askTransition.resetAnimation(),
                                            this.refs.hor_asks &&
                                                (this.refs.hor_asks.scrollTop = 0),
                                            this.refs.hor_bids &&
                                                (this.refs.hor_bids.scrollTop = 0)),
                                        this.refs.bidTransition &&
                                            this.refs.bidTransition.resetAnimation(),
                                        this.refs.vert_bids &&
                                            (this.refs.vert_bids.scrollTop = 0),
                                        this.props.horizontal ||
                                            this.setState({autoScroll: !0})),
                                        (k.a.are_equal_shallow(
                                            e.combinedAsks,
                                            this.props.combinedAsks
                                        ) &&
                                            k.a.are_equal_shallow(
                                                e.combinedBids,
                                                this.props.combinedBids
                                            )) ||
                                            this.setState({}, function() {
                                                t.psUpdate();
                                            });
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    if (!this.props.horizontal) {
                                        var e = this;
                                        document.delayedExecution.add(
                                            "orderBook_componentDidUpdate",
                                            function() {
                                                e.updateCeilWith(),
                                                    e.addLeftCellActive();
                                            },
                                            100
                                        );
                                    }
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    if (
                                        (B.a.rebuild(),
                                        document.fastLoader.hide(),
                                        this.props.horizontal)
                                    ) {
                                        var e = this.refs.hor_bids;
                                        _.a.initialize(e);
                                        var t = this.refs.hor_asks;
                                        _.a.initialize(t);
                                    } else {
                                        var a = this;
                                        document.delayedExecution.add(
                                            "orderBook_componentDidUpdate",
                                            function() {
                                                a.updateCeilWith(),
                                                    a.addLeftCellActive();
                                            },
                                            100
                                        );
                                        var r = this.refs.vertical_sticky_table_up.table.querySelector(
                                            "#y-scrollbar"
                                        );
                                        _.a.initialize(r);
                                        var n = this.refs.vertical_sticky_table_down.table.querySelector(
                                            "#y-scrollbar"
                                        );
                                        _.a.initialize(n);
                                    }
                                    this.upVerticalBlockToEndScroll();
                                }
                            },
                            {key: "componentWillUpdate", value: function() {}},
                            {
                                key: "upVerticalBlockToEndScroll",
                                value: function() {
                                    this.props.horizontal ||
                                        (this.queryStickyTable(
                                            "#sticky-table-y-wrapper"
                                        ).scrollTop = 99999);
                                }
                            },
                            {
                                key: "psUpdate",
                                value: function() {
                                    if (this.props.horizontal) {
                                        var e = this.refs.hor_bids;
                                        _.a.update(e);
                                        var t = this.refs.hor_asks;
                                        _.a.update(t);
                                    } else;
                                }
                            },
                            {
                                key: "_flipBuySell",
                                value: function() {
                                    C.a.changeViewSetting({
                                        flipOrderBook: !this.state.flip
                                    }),
                                        this.setState({flip: !this.state.flip});
                                }
                            },
                            {
                                key: "_onToggleShowAll",
                                value: function(e) {
                                    "asks" === e
                                        ? (this.setState({
                                              showAllAsks: !this.state
                                                  .showAllAsks
                                          }),
                                          this.state.showAllAsks &&
                                              (this.refs.hor_asks.scrollTop = 0))
                                        : (this.setState({
                                              showAllBids: !this.state
                                                  .showAllBids
                                          }),
                                          this.state.showAllBids &&
                                              (this.refs.hor_bids.scrollTop = 0));
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        r = t.combinedBids,
                                        o = t.combinedAsks,
                                        s = t.highestBid,
                                        i = t.lowestAsk,
                                        l = t.quote,
                                        c = t.base,
                                        u = t.totalAsks,
                                        p = t.totalBids,
                                        h = t.quoteSymbol,
                                        d = t.baseSymbol,
                                        m = t.horizontal,
                                        f = this.state,
                                        g = f.showAllAsks,
                                        b = f.showAllBids,
                                        y = f.rowCount,
                                        v = f.displaySpreadAsPercentage,
                                        _ = !i.sell_price && !s.sell_price,
                                        E =
                                            !(!i.sell_price || !s.sell_price) &&
                                            (v
                                                ? (
                                                      100 *
                                                      (i._real_price /
                                                          s._real_price -
                                                          1)
                                                  ).toFixed(2) + "%"
                                                : n.a.createElement(A.a, {
                                                      price:
                                                          i._real_price -
                                                          s._real_price,
                                                      base: c,
                                                      quote: l
                                                  })),
                                        C = null,
                                        x = null;
                                    if (c && l) {
                                        C = r.map(function(t, a) {
                                            if (!(a > 100))
                                                return m
                                                    ? n.a.createElement(L, {
                                                          index: a,
                                                          key:
                                                              t.getPrice() +
                                                              (t.isCall()
                                                                  ? "_call"
                                                                  : ""),
                                                          order: t,
                                                          onClick: e.props.onClick.bind(
                                                              e,
                                                              t
                                                          ),
                                                          base: c,
                                                          quote: l,
                                                          position: e.state.flip
                                                              ? "left"
                                                              : "right",
                                                          currentAccount:
                                                              e.props
                                                                  .currentAccount
                                                      })
                                                    : n.a.createElement(R, {
                                                          index: a,
                                                          key:
                                                              t.getPrice() +
                                                              (t.isCall()
                                                                  ? "_call"
                                                                  : ""),
                                                          order: t,
                                                          onClick: e.props.onClick.bind(
                                                              e,
                                                              t
                                                          ),
                                                          base: c,
                                                          quote: l,
                                                          final: 0 === a,
                                                          currentAccount:
                                                              e.props
                                                                  .currentAccount
                                                      });
                                        });
                                        var I = o;
                                        I.sort(function(e, t) {
                                            return m
                                                ? e.getPrice() - t.getPrice()
                                                : t.getPrice() - e.getPrice();
                                        }),
                                            (x = I.map(function(t, a) {
                                                if (!(a > 100))
                                                    return m
                                                        ? n.a.createElement(L, {
                                                              index: a,
                                                              key:
                                                                  t.getPrice() +
                                                                  (t.isCall()
                                                                      ? "_call"
                                                                      : ""),
                                                              order: t,
                                                              onClick: e.props.onClick.bind(
                                                                  e,
                                                                  t
                                                              ),
                                                              base: c,
                                                              quote: l,
                                                              type: t.type,
                                                              position: e.state
                                                                  .flip
                                                                  ? "left"
                                                                  : "right",
                                                              currentAccount:
                                                                  e.props
                                                                      .currentAccount
                                                          })
                                                        : n.a.createElement(R, {
                                                              index: a,
                                                              key:
                                                                  t.getPrice() +
                                                                  (t.isCall()
                                                                      ? "_call"
                                                                      : ""),
                                                              order: t,
                                                              onClick: e.props.onClick.bind(
                                                                  e,
                                                                  t
                                                              ),
                                                              base: c,
                                                              quote: l,
                                                              type: t.type,
                                                              final: 0 === a,
                                                              currentAccount:
                                                                  e.props
                                                                      .currentAccount
                                                          });
                                            }));
                                    }
                                    if (this.props.horizontal) {
                                        try {
                                            if (
                                                document.getElementsByClassName(
                                                    "container-menu-header"
                                                ).length > 0
                                            ) {
                                                var B = document.getElementsByClassName(
                                                        "container-menu-header"
                                                    )[0],
                                                    M = B.className.toString();
                                                -1 !==
                                                    M.indexOf(
                                                        "left-cell-active"
                                                    ) &&
                                                    (B.className = M.replace(
                                                        /left-cell-active/gi,
                                                        ""
                                                    ));
                                            }
                                        } catch (e) {}
                                        var F = C.length,
                                            q = x.length;
                                        b || C.splice(y, C.length),
                                            g || x.splice(y, x.length);
                                        var j = n.a.createElement(
                                                "thead",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    {
                                                        key: "top-header",
                                                        className: "top-header"
                                                    },
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(w.a, {
                                                            className:
                                                                (this.state.flip
                                                                    ? "ask-total"
                                                                    : "bid-total") +
                                                                " header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {
                                                                    dataPlace:
                                                                        "top",
                                                                    name: d
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {
                                                                    dataPlace:
                                                                        "top",
                                                                    name: h
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            D = n.a.createElement(
                                                "thead",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    {
                                                        key: "top-header",
                                                        className: "top-header"
                                                    },
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(w.a, {
                                                            className:
                                                                (this.state.flip
                                                                    ? "bid-total"
                                                                    : "ask-total") +
                                                                " header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {
                                                                    dataPlace:
                                                                        "top",
                                                                    name: h
                                                                }
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "th",
                                                        null,
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {
                                                                    dataPlace:
                                                                        "top",
                                                                    name: d
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            z = a(3);
                                        return n.a.createElement(
                                            "div",
                                            {
                                                className: S()(
                                                    this.props.wrapperClass,
                                                    "grid-block orderbook no-padding small-vertical medium-horizontal align-spaced no-overflow small-12 xlarge-8"
                                                )
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className: S()(
                                                        "small-12 medium-6 middle-content",
                                                        this.state.flip
                                                            ? "order-1"
                                                            : "order-2"
                                                    )
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "exchange-bordered"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "exchange-content-header ask",
                                                            "data-intro": z.translate(
                                                                "walkthrough.sell_orders"
                                                            )
                                                        },
                                                        n.a.createElement(w.a, {
                                                            content:
                                                                "exchange.asks"
                                                        }),
                                                        this.state.flip
                                                            ? n.a.createElement(
                                                                  "div",
                                                                  {
                                                                      style: {
                                                                          display:
                                                                              "inline-block"
                                                                      }
                                                                  },
                                                                  n.a.createElement(
                                                                      "span",
                                                                      {
                                                                          onClick: this._flipBuySell.bind(
                                                                              this
                                                                          ),
                                                                          style: {
                                                                              cursor:
                                                                                  "pointer",
                                                                              fontSize:
                                                                                  "1rem",
                                                                              marginLeft:
                                                                                  "4px",
                                                                              position:
                                                                                  "relative",
                                                                              top:
                                                                                  "-2px"
                                                                          },
                                                                          className:
                                                                              "flip-arrow"
                                                                      },
                                                                      " ",
                                                                      "⇆"
                                                                  ),
                                                                  n.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "order-book-button-v",
                                                                          onClick: this
                                                                              .props
                                                                              .moveOrderBook
                                                                      },
                                                                      n.a.createElement(
                                                                          T.a,
                                                                          {
                                                                              name:
                                                                                  "thumb-tack",
                                                                              title:
                                                                                  "icons.thumb_tack",
                                                                              className:
                                                                                  "icon-14px"
                                                                          }
                                                                      )
                                                                  )
                                                              )
                                                            : null,
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    lineHeight:
                                                                        "16px"
                                                                },
                                                                className:
                                                                    "float-right header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.total"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "span",
                                                                null,
                                                                ": "
                                                            ),
                                                            k.a.format_number(
                                                                u,
                                                                l.get(
                                                                    "precision"
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "span",
                                                                null,
                                                                " ",
                                                                "(",
                                                                n.a.createElement(
                                                                    N.a,
                                                                    {name: h}
                                                                ),
                                                                ")"
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                paddingRight:
                                                                    "0.6rem"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right"
                                                            },
                                                            this.state.flip
                                                                ? D
                                                                : j
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block",
                                                            ref: "hor_asks",
                                                            style: {
                                                                paddingRight:
                                                                    "0.6rem",
                                                                overflow:
                                                                    "hidden",
                                                                maxHeight: 210
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "table",
                                                            {
                                                                style: {
                                                                    paddingBottom: 5
                                                                },
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right no-overflow"
                                                            },
                                                            n.a.createElement(
                                                                O.a,
                                                                {
                                                                    ref:
                                                                        "askTransition",
                                                                    className:
                                                                        "orderbook clickable",
                                                                    component:
                                                                        "tbody",
                                                                    transitionName:
                                                                        "newrow"
                                                                },
                                                                x
                                                            )
                                                        ),
                                                        q > y
                                                            ? n.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "orderbook-showall"
                                                                  },
                                                                  n.a.createElement(
                                                                      "a",
                                                                      {
                                                                          onClick: this._onToggleShowAll.bind(
                                                                              this,
                                                                              "asks"
                                                                          )
                                                                      },
                                                                      n.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content: g
                                                                                  ? "exchange.hide"
                                                                                  : "exchange.show_asks"
                                                                          }
                                                                      ),
                                                                      g
                                                                          ? null
                                                                          : n.a.createElement(
                                                                                "span",
                                                                                null,
                                                                                " ",
                                                                                "(",
                                                                                q,
                                                                                ")"
                                                                            )
                                                                  )
                                                              )
                                                            : null
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className: S()(
                                                        "small-12 medium-6 middle-content",
                                                        this.state.flip
                                                            ? "order-2"
                                                            : "order-1"
                                                    )
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "exchange-bordered"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "exchange-content-header bid",
                                                            "data-intro": z.translate(
                                                                "walkthrough.buy_orders"
                                                            )
                                                        },
                                                        n.a.createElement(w.a, {
                                                            content:
                                                                "exchange.bids"
                                                        }),
                                                        this.state.flip
                                                            ? null
                                                            : n.a.createElement(
                                                                  "div",
                                                                  {
                                                                      style: {
                                                                          display:
                                                                              "inline-block"
                                                                      }
                                                                  },
                                                                  n.a.createElement(
                                                                      "span",
                                                                      {
                                                                          onClick: this._flipBuySell.bind(
                                                                              this
                                                                          ),
                                                                          style: {
                                                                              cursor:
                                                                                  "pointer",
                                                                              fontSize:
                                                                                  "1rem",
                                                                              marginLeft:
                                                                                  "4px",
                                                                              position:
                                                                                  "relative",
                                                                              top:
                                                                                  "-2px"
                                                                          },
                                                                          className:
                                                                              "flip-arrow"
                                                                      },
                                                                      " ",
                                                                      "⇆"
                                                                  ),
                                                                  n.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "order-book-button-v",
                                                                          onClick: this
                                                                              .props
                                                                              .moveOrderBook
                                                                      },
                                                                      n.a.createElement(
                                                                          T.a,
                                                                          {
                                                                              name:
                                                                                  "thumb-tack",
                                                                              title:
                                                                                  "icons.thumb_tack",
                                                                              className:
                                                                                  "icon-14px"
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    lineHeight:
                                                                        "16px"
                                                                },
                                                                className:
                                                                    "float-right header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.total"
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "span",
                                                                null,
                                                                ": "
                                                            ),
                                                            k.a.format_number(
                                                                p,
                                                                c.get(
                                                                    "precision"
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "span",
                                                                null,
                                                                " ",
                                                                "(",
                                                                n.a.createElement(
                                                                    N.a,
                                                                    {name: d}
                                                                ),
                                                                ")"
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                paddingRight:
                                                                    "0.6rem"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right"
                                                            },
                                                            this.state.flip
                                                                ? D
                                                                : j
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block",
                                                            ref: "hor_bids",
                                                            style: {
                                                                paddingRight:
                                                                    "0.6rem",
                                                                overflow:
                                                                    "hidden",
                                                                maxHeight: 210
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "table",
                                                            {
                                                                style: {
                                                                    paddingBottom: 5
                                                                },
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right no-overflow"
                                                            },
                                                            n.a.createElement(
                                                                O.a,
                                                                {
                                                                    ref:
                                                                        "bidTransition",
                                                                    className:
                                                                        "orderbook clickable",
                                                                    component:
                                                                        "tbody",
                                                                    transitionName:
                                                                        "newrow"
                                                                },
                                                                C
                                                            )
                                                        ),
                                                        F > y
                                                            ? n.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "orderbook-showall"
                                                                  },
                                                                  n.a.createElement(
                                                                      "a",
                                                                      {
                                                                          onClick: this._onToggleShowAll.bind(
                                                                              this,
                                                                              "bids"
                                                                          )
                                                                      },
                                                                      n.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content: b
                                                                                  ? "exchange.hide"
                                                                                  : "exchange.show_bids"
                                                                          }
                                                                      ),
                                                                      b
                                                                          ? null
                                                                          : n.a.createElement(
                                                                                "span",
                                                                                null,
                                                                                " ",
                                                                                "(",
                                                                                F,
                                                                                ")"
                                                                            )
                                                                  )
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        );
                                    }
                                    if (
                                        document.getElementsByClassName(
                                            "container-menu-header"
                                        ).length > 0
                                    ) {
                                        var U = document.getElementsByClassName(
                                            "container-menu-header"
                                        )[0];
                                        -1 ===
                                            U.className.indexOf(
                                                "left-cell-active"
                                            ) &&
                                            (U.className +=
                                                " left-cell-active");
                                    }
                                    return n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "left-order-book no-padding"
                                        },
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "order-table-container exchange-sell-orders vertical-orderbook-up"
                                            },
                                            n.a.createElement(
                                                P.StickyTable,
                                                {
                                                    className:
                                                        "order-table table",
                                                    ref:
                                                        "vertical_sticky_table_up"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "custom-sticky-header-wrap"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "header-cell left vertical-table-cell-one custom-sticky-header"
                                                        },
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {name: d}
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "header-cell vertical-table-cell-two custom-sticky-header"
                                                        },
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {name: h}
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                " header-cell right vertical-table-cell-three custom-sticky-header"
                                                        },
                                                        n.a.createElement(w.a, {
                                                            className:
                                                                "header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    )
                                                ),
                                                n.a.createElement(
                                                    O.a,
                                                    {
                                                        ref: "askTransition",
                                                        className:
                                                            "transition-container clickable",
                                                        component: "div",
                                                        transitionName: "newrow"
                                                    },
                                                    x.length > 0
                                                        ? x
                                                        : _ ||
                                                          n.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "sticky-table-row"
                                                              },
                                                              n.a.createElement(
                                                                  "td",
                                                                  {
                                                                      className:
                                                                          "cell no-orders padtop",
                                                                      colSpan:
                                                                          "3"
                                                                  },
                                                                  "No asks"
                                                              )
                                                          )
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "sticky-table-row exchange-sell-buy-orders",
                                                ref: "center_text"
                                            },
                                            _
                                                ? n.a.createElement(
                                                      "td",
                                                      {
                                                          colSpan: 3,
                                                          className:
                                                              "no-orders padtop"
                                                      },
                                                      n.a.createElement(w.a, {
                                                          content:
                                                              "exchange.no_orders"
                                                      })
                                                  )
                                                : n.a.createElement(
                                                      "td",
                                                      {
                                                          className:
                                                              "cell center-cell",
                                                          colSpan: "3"
                                                      },
                                                      n.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "orderbook-latest-price"
                                                          },
                                                          n.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "text-center spread"
                                                              },
                                                              !!E &&
                                                                  n.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "clickable left",
                                                                          onClick: this
                                                                              .toggleSpreadValue
                                                                      },
                                                                      n.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content:
                                                                                  "exchange.spread"
                                                                          }
                                                                      ),
                                                                      " ",
                                                                      n.a.createElement(
                                                                          "span",
                                                                          {
                                                                              className:
                                                                                  "spread-value"
                                                                          },
                                                                          E
                                                                      )
                                                                  ),
                                                              "  ",
                                                              !!this.props
                                                                  .latest &&
                                                                  n.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "right"
                                                                      },
                                                                      n.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content:
                                                                                  "exchange.latest"
                                                                          }
                                                                      ),
                                                                      " ",
                                                                      n.a.createElement(
                                                                          "span",
                                                                          {
                                                                              className: this
                                                                                  .props
                                                                                  .changeClass
                                                                          },
                                                                          n.a.createElement(
                                                                              A.a,
                                                                              {
                                                                                  preFormattedPrice: this
                                                                                      .props
                                                                                      .latest
                                                                              }
                                                                          )
                                                                      )
                                                                  )
                                                          )
                                                      )
                                                  )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "order-table-container exchange-buy-orders vertical-orderbook-down"
                                            },
                                            n.a.createElement(
                                                P.StickyTable,
                                                {
                                                    className:
                                                        "order-table table",
                                                    ref:
                                                        "vertical_sticky_table_down"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "sticky-table-row top-header"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "cell header-cell left"
                                                        },
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {name: d}
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "cell header-cell"
                                                        },
                                                        n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            n.a.createElement(
                                                                N.a,
                                                                {name: h}
                                                            )
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "cell header-cell right"
                                                        },
                                                        n.a.createElement(w.a, {
                                                            className:
                                                                "header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    )
                                                ),
                                                n.a.createElement(
                                                    O.a,
                                                    {
                                                        ref: "bidTransition",
                                                        className:
                                                            "transition-container clickable",
                                                        component: "div",
                                                        transitionName: "newrow"
                                                    },
                                                    C.length > 0
                                                        ? C
                                                        : _ ||
                                                          n.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "sticky-table-row"
                                                              },
                                                              n.a.createElement(
                                                                  "td",
                                                                  {
                                                                      className:
                                                                          "cell no-orders",
                                                                      colSpan:
                                                                          "3"
                                                                  },
                                                                  n.a.createElement(
                                                                      w.a,
                                                                      {
                                                                          content:
                                                                              "exchange.no_bids"
                                                                      }
                                                                  )
                                                              )
                                                          )
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "v-align no-padding align-center grid-block footer shrink bottom-header"
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    onClick: this.props
                                                        .moveOrderBook
                                                },
                                                n.a.createElement(T.a, {
                                                    name: "thumb-untack",
                                                    title: "icons.thumb_untack",
                                                    className:
                                                        "icon-14px order-book-button-h"
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
            (D.defaultProps = {bids: [], asks: [], orders: {}}),
                (D.propTypes = {
                    bids: g.a.array.isRequired,
                    asks: g.a.array.isRequired,
                    orders: g.a.object.isRequired
                });
            var z = D,
                U = a(7),
                W = a.n(U),
                H = a(44),
                V = a(15),
                J = a(4),
                Q = a(3),
                Y = a.n(Q),
                G = a(93),
                K = a(183),
                X = a(280),
                Z = a.n(X),
                $ = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var ee = (function(e) {
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
                    })(t, n.a.Component),
                    $(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                this.props.block ||
                                    K.a.getBlock(this.props.block_number);
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.block &&
                                        !this.props.block &&
                                        setTimeout(B.a.rebuild, 1e3),
                                    e.block !== this.props.block
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.block,
                                    a = e.tooltip,
                                    r = e.component,
                                    o = e.format;
                                return t
                                    ? n.a.createElement(
                                          r,
                                          {
                                              className: a ? "tooltip" : "",
                                              "data-tip": a ? t.timestamp : ""
                                          },
                                          n.a.createElement(
                                              "span",
                                              null,
                                              Y.a.localize(t.timestamp, {
                                                  type: "date",
                                                  format: o
                                              })
                                          )
                                      )
                                    : n.a.createElement(r);
                            }
                        }
                    ]),
                    t
                );
            })();
            ee.defaultProps = {
                format:
                    -1 !==
                    Z()()
                        .toLowerCase()
                        .indexOf("en-us")
                        ? "market_history_us"
                        : "market_history",
                tooltip: !1,
                component: "span"
            };
            var te = (ee = Object(V.connect)(ee, {
                    listenTo: function() {
                        return [G.a];
                    },
                    getProps: function(e) {
                        return {
                            block: G.a.getState().blocks.get(e.block_number)
                        };
                    }
                })),
                ae = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var re = J.c.operations,
                ne = (function(e) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (a.state = {
                                activeTab: e.viewSettings.get(
                                    "historyTab",
                                    "history"
                                )
                            }),
                            a
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
                        })(t, n.a.Component),
                        ae(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e, t) {
                                    return (
                                        !W.a.is(
                                            e.history,
                                            this.props.history
                                        ) ||
                                        e.baseSymbol !==
                                            this.props.baseSymbol ||
                                        e.quoteSymbol !==
                                            this.props.quoteSymbol ||
                                        e.className !== this.props.className ||
                                        t.activeTab !== this.state.activeTab ||
                                        e.currentAccount !==
                                            this.props.currentAccount
                                    );
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = this.refs.history;
                                    _.a.initialize(e);
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    var e = this.refs.history;
                                    _.a.update(e);
                                }
                            },
                            {
                                key: "_changeTab",
                                value: function(e) {
                                    C.a.changeViewSetting({historyTab: e}),
                                        this.setState({activeTab: e});
                                    var t = this.refs.history;
                                    (t.scrollTop = 0),
                                        _.a.update(t),
                                        setTimeout(B.a.rebuild, 1e3);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.history,
                                        a = e.myHistory,
                                        r = e.base,
                                        o = e.quote,
                                        s = e.baseSymbol,
                                        i = e.quoteSymbol,
                                        l = e.isNullAccount,
                                        c = this.state.activeTab,
                                        u = null;
                                    if (
                                        (l && (c = "history"),
                                        "my_history" === c && a && a.size)
                                    ) {
                                        var p = -1,
                                            h =
                                                r.get("id").split(".")[2] >
                                                o.get("id").split(".")[2];
                                        u = a
                                            .filter(function(e) {
                                                return (
                                                    e.getIn(["op", 0]) ===
                                                    re.fill_order
                                                );
                                            })
                                            .filter(function(e) {
                                                var t = o.get("id"),
                                                    a = r.get("id"),
                                                    n = e.getIn([
                                                        "op",
                                                        1,
                                                        "pays",
                                                        "asset_id"
                                                    ]),
                                                    s = e.getIn([
                                                        "op",
                                                        1,
                                                        "receives",
                                                        "asset_id"
                                                    ]);
                                                return (
                                                    (t === n || t === s) &&
                                                    (a === n || a === s)
                                                );
                                            })
                                            .sort(function(e, t) {
                                                return (
                                                    t.get("block_num") -
                                                    e.get("block_num")
                                                );
                                            })
                                            .map(function(e) {
                                                var t = e.toJS().op[1];
                                                p++;
                                                var a = void 0,
                                                    s = void 0,
                                                    i = !1;
                                                t.pays.asset_id === r.get("id")
                                                    ? ((a = r),
                                                      (s = o),
                                                      (i = !0))
                                                    : ((a = o), (s = r));
                                                var l = H.a.parse_order_history(
                                                        t,
                                                        a,
                                                        s,
                                                        i,
                                                        h
                                                    ),
                                                    c = e.get("block_num");
                                                return n.a.createElement(
                                                    "tr",
                                                    {key: "my_history_" + p},
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                l.className
                                                        },
                                                        n.a.createElement(A.a, {
                                                            preFormattedPrice: l
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        null,
                                                        l.receives
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        null,
                                                        l.pays
                                                    ),
                                                    n.a.createElement(te, {
                                                        component: "td",
                                                        block_number: c,
                                                        tooltip: !0
                                                    })
                                                );
                                            })
                                            .toArray();
                                    } else if (t && t.size) {
                                        var d = 0,
                                            m = -1,
                                            f =
                                                r.get("id").split(".")[2] >
                                                o.get("id").split(".")[2];
                                        u = this.props.history
                                            .filter(function() {
                                                return ++d % 2 == 0;
                                            })
                                            .take(100)
                                            .map(function(e) {
                                                m++;
                                                var t = void 0,
                                                    a = void 0,
                                                    s = !1;
                                                e.pays.asset_id === r.get("id")
                                                    ? ((t = r),
                                                      (a = o),
                                                      (s = !0))
                                                    : ((t = o), (a = r));
                                                var i = H.a.parse_order_history(
                                                    e,
                                                    t,
                                                    a,
                                                    s,
                                                    f
                                                );
                                                return n.a.createElement(
                                                    "tr",
                                                    {key: "history_" + m},
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                i.className
                                                        },
                                                        n.a.createElement(A.a, {
                                                            preFormattedPrice: i
                                                        })
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        null,
                                                        i.receives
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        null,
                                                        i.pays
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            "data-place":
                                                                "right",
                                                            className:
                                                                "tooltip",
                                                            "data-tip": new Date(
                                                                e.time
                                                            ).toLocaleDateString()
                                                        },
                                                        new Date(
                                                            e.time
                                                        ).toLocaleTimeString()
                                                    )
                                                );
                                            })
                                            .toArray();
                                    }
                                    var g = "mymarkets-header clickable",
                                        b = S()(g, {
                                            inactive: "my_history" === c
                                        }),
                                        y = S()(g, {inactive: "history" === c});
                                    return n.a.createElement(
                                        "div",
                                        {className: this.props.className},
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "exchange-bordered small-12",
                                                style: {height: 266}
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    style: this.props
                                                        .headerStyle,
                                                    className:
                                                        "grid-block shrink left-orderbook-header bottom-header"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className: S()(y, {
                                                            disabled: l
                                                        }),
                                                        onClick: this._changeTab.bind(
                                                            this,
                                                            "my_history"
                                                        )
                                                    },
                                                    n.a.createElement(w.a, {
                                                        content:
                                                            "exchange.my_history"
                                                    })
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className: b,
                                                        onClick: this._changeTab.bind(
                                                            this,
                                                            "history"
                                                        )
                                                    },
                                                    n.a.createElement(w.a, {
                                                        content:
                                                            "exchange.history"
                                                    })
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block shrink left-orderbook-header market-right-padding-only"
                                                },
                                                n.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "table order-table text-right fixed-table market-right-padding"
                                                    },
                                                    n.a.createElement(
                                                        "thead",
                                                        null,
                                                        n.a.createElement(
                                                            "tr",
                                                            null,
                                                            n.a.createElement(
                                                                "th",
                                                                null,
                                                                n.a.createElement(
                                                                    w.a,
                                                                    {
                                                                        className:
                                                                            "header-sub-title",
                                                                        content:
                                                                            "exchange.price"
                                                                    }
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "th",
                                                                null,
                                                                n.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "header-sub-title"
                                                                    },
                                                                    n.a.createElement(
                                                                        N.a,
                                                                        {
                                                                            dataPlace:
                                                                                "top",
                                                                            name: i
                                                                        }
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "th",
                                                                null,
                                                                n.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "header-sub-title"
                                                                    },
                                                                    n.a.createElement(
                                                                        N.a,
                                                                        {
                                                                            dataPlace:
                                                                                "top",
                                                                            name: s
                                                                        }
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "th",
                                                                null,
                                                                n.a.createElement(
                                                                    w.a,
                                                                    {
                                                                        className:
                                                                            "header-sub-title",
                                                                        content:
                                                                            "explorer.block.date"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "table-container grid-block market-right-padding-only no-overflow",
                                                    ref: "history",
                                                    style: {
                                                        maxHeight: 210,
                                                        overflow: "hidden"
                                                    }
                                                },
                                                n.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "table order-table text-right fixed-table market-right-padding"
                                                    },
                                                    n.a.createElement(
                                                        O.a,
                                                        {
                                                            component: "tbody",
                                                            transitionName:
                                                                "newrow"
                                                        },
                                                        u
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
            (ne.defaultProps = {history: []}),
                (ne.propTypes = {history: g.a.object.isRequired});
            var oe = Object(V.connect)(ne, {
                    listenTo: function() {
                        return [l.a];
                    },
                    getProps: function() {
                        return {viewSettings: l.a.getState().viewSettings};
                    }
                }),
                se = a(359),
                ie = a(33),
                le = a(6),
                ce = a(13),
                ue = a(451),
                pe = a(452),
                he = a(18),
                de = a(185),
                me = a(48),
                fe = a(570),
                ge = a.n(fe),
                be = a(52),
                ye = a.n(be),
                ve = (a(113),
                Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var r in a)
                                Object.prototype.hasOwnProperty.call(a, r) &&
                                    (e[r] = a[r]);
                        }
                        return e;
                    }),
                _e = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var ke = (function(e) {
                function t(e) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
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
                    })(t, n.a.Component),
                    _e(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.amount !== this.props.amount ||
                                    e.onBorrow !== this.props.onBorrow ||
                                    e.total !== this.props.total ||
                                    e.currentPrice !==
                                        this.props.currentPrice ||
                                    e.price !== this.props.price ||
                                    e.balance !== this.props.balance ||
                                    e.account !== this.props.account ||
                                    e.className !== this.props.className ||
                                    (!(!e.fee || !this.props.fee) &&
                                        e.fee.ne(this.props.fee)) ||
                                    e.isPredictionMarket !==
                                        this.props.isPredictionMarket ||
                                    e.feeAsset !== this.props.feeAsset ||
                                    e.isOpen !== this.props.isOpen ||
                                    e.hasFeeBalance !==
                                        this.props.hasFeeBalance ||
                                    e.expirationType !==
                                        this.props.expirationType ||
                                    e.expirationCustomTime !==
                                        this.props.expirationCustomTime
                                );
                            }
                        },
                        {
                            key: "_addBalance",
                            value: function(e) {
                                "bid" === this.props.type
                                    ? this.props.totalChange({
                                          target: {
                                              value: e
                                                  .getAmount({real: !0})
                                                  .toString()
                                          }
                                      })
                                    : this.props.amountChange({
                                          target: {
                                              value: e
                                                  .getAmount({real: !0})
                                                  .toString()
                                          }
                                      });
                            }
                        },
                        {
                            key: "_setPrice",
                            value: function(e) {
                                this.props.priceChange({
                                    target: {value: e.toString()}
                                });
                            }
                        },
                        {
                            key: "_onDeposit",
                            value: function(e) {
                                e.preventDefault(),
                                    this.refs.deposit_modal.show();
                            }
                        },
                        {
                            key: "_onBuy",
                            value: function(e) {
                                e.preventDefault(),
                                    this.refs.bridge_modal.show();
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    r = t.type,
                                    o = t.quote,
                                    s = t.base,
                                    i = t.amountChange,
                                    c = t.fee,
                                    u = t.isPredictionMarket,
                                    p = t.priceChange,
                                    h = t.onSubmit,
                                    d = t.balance,
                                    m = t.totalChange,
                                    f = t.balancePrecision,
                                    g = t.currentPrice,
                                    b = t.currentPriceObject,
                                    y = t.feeAsset,
                                    v = t.feeAssets,
                                    _ = t.hasFeeBalance,
                                    E = t.backedCoin,
                                    C = void 0,
                                    x = void 0,
                                    O = void 0,
                                    P = this.props.isOpen
                                        ? n.a.createElement("span", null, "▼")
                                        : n.a.createElement("span", null, "▲");
                                this.props.amount && (C = this.props.amount),
                                    this.props.price && (x = this.props.price),
                                    this.props.total && (O = this.props.total);
                                var I = new he.a({
                                        amount: d ? d.get("balance") : 0,
                                        precision: f,
                                        asset_id: this.props.balanceId
                                    }),
                                    B = new he.a({
                                        amount: s.getIn([
                                            "options",
                                            "max_market_fee"
                                        ]),
                                        asset_id: s.get("asset_id"),
                                        precision: s.get("precision")
                                    }),
                                    M = new he.a({
                                        amount: o.getIn([
                                            "options",
                                            "max_market_fee"
                                        ]),
                                        asset_id: o.get("asset_id"),
                                        precision: o.get("precision")
                                    }),
                                    F =
                                        s.getIn([
                                            "options",
                                            "market_fee_percent"
                                        ]) /
                                            100 +
                                        "%",
                                    q =
                                        o.getIn([
                                            "options",
                                            "market_fee_percent"
                                        ]) /
                                            100 +
                                        "%",
                                    j = C
                                        ? Math.min(
                                              M.getAmount({real: !0}),
                                              (C *
                                                  o.getIn([
                                                      "options",
                                                      "market_fee_percent"
                                                  ])) /
                                                  1e4
                                          ).toFixed(M.precision)
                                        : 0,
                                    R = C
                                        ? Math.min(
                                              B.getAmount({real: !0}),
                                              (O *
                                                  s.getIn([
                                                      "options",
                                                      "market_fee_percent"
                                                  ])) /
                                                  1e4
                                          ).toFixed(B.precision)
                                        : 0,
                                    L = me.a.getFlagBooleans(
                                        s.getIn(["options", "flags"]),
                                        s.has("bitasset_data_id")
                                    ),
                                    D = me.a.getFlagBooleans(
                                        o.getIn(["options", "flags"]),
                                        o.has("bitasset_data_id")
                                    ),
                                    z = k.a.replaceName(this.props.base),
                                    U = z.name,
                                    W = z.prefix,
                                    H =
                                        L.charge_market_fee ||
                                        D.charge_market_fee,
                                    V = L.charge_market_fee
                                        ? n.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block no-padding buy-sell-row"
                                              },
                                              n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-label"
                                                  },
                                                  n.a.createElement(w.a, {
                                                      content:
                                                          "explorer.asset.summary.market_fee"
                                                  }),
                                                  ": ",
                                                  F
                                              ),
                                              n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-input"
                                                  },
                                                  n.a.createElement("input", {
                                                      disabled: !0,
                                                      type: "text",
                                                      id: "baseMarketFee",
                                                      value: R,
                                                      autoComplete: "off"
                                                  })
                                              ),
                                              n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                  },
                                                  n.a.createElement(N.a, {
                                                      noTip: !0,
                                                      name: s.get("symbol")
                                                  }),
                                                  n.a.createElement(
                                                      "span",
                                                      {
                                                          "data-tip": Y.a.translate(
                                                              "tooltip.market_fee",
                                                              {
                                                                  percent:
                                                                      s.getIn([
                                                                          "options",
                                                                          "market_fee_percent"
                                                                      ]) / 100,
                                                                  asset:
                                                                      (W ||
                                                                          "") +
                                                                      U
                                                              }
                                                          ),
                                                          className:
                                                              "inline-block tooltip"
                                                      },
                                                      " ",
                                                      n.a.createElement(T.a, {
                                                          style: {
                                                              position:
                                                                  "relative",
                                                              top: 3
                                                          },
                                                          name:
                                                              "question-circle",
                                                          title:
                                                              "icons.question_circle"
                                                      })
                                                  )
                                              )
                                          )
                                        : H
                                            ? n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block no-padding buy-sell-row"
                                                  },
                                                  n.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              visibility:
                                                                  "hidden"
                                                          },
                                                          className:
                                                              "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                      },
                                                      n.a.createElement(w.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      }),
                                                      ":"
                                                  )
                                              )
                                            : null,
                                    J = k.a.replaceName(this.props.quote),
                                    Q = J.name,
                                    G = J.prefix,
                                    K = D.charge_market_fee
                                        ? n.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block no-padding buy-sell-row"
                                              },
                                              n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-label"
                                                  },
                                                  n.a.createElement(w.a, {
                                                      content:
                                                          "explorer.asset.summary.market_fee"
                                                  }),
                                                  ": ",
                                                  q
                                              ),
                                              n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-input"
                                                  },
                                                  n.a.createElement("input", {
                                                      disabled: !0,
                                                      type: "text",
                                                      id: "quoteMarketFee",
                                                      value: j,
                                                      autoComplete: "off"
                                                  })
                                              ),
                                              n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                  },
                                                  n.a.createElement(N.a, {
                                                      noTip: !0,
                                                      name: o.get("symbol")
                                                  }),
                                                  n.a.createElement(
                                                      "span",
                                                      {
                                                          "data-tip": Y.a.translate(
                                                              "tooltip.market_fee",
                                                              {
                                                                  percent:
                                                                      o.getIn([
                                                                          "options",
                                                                          "market_fee_percent"
                                                                      ]) / 100,
                                                                  asset:
                                                                      (G ||
                                                                          "") +
                                                                      Q
                                                              }
                                                          ),
                                                          className:
                                                              "inline-block tooltip"
                                                      },
                                                      " ",
                                                      n.a.createElement(T.a, {
                                                          style: {
                                                              position:
                                                                  "relative",
                                                              top: 3
                                                          },
                                                          name:
                                                              "question-circle",
                                                          title:
                                                              "icons.question-circle"
                                                      })
                                                  )
                                              )
                                          )
                                        : H
                                            ? n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block no-padding buy-sell-row"
                                                  },
                                                  n.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              visibility:
                                                                  "hidden"
                                                          },
                                                          className:
                                                              "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                      },
                                                      n.a.createElement(w.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      }),
                                                      ":"
                                                  )
                                              )
                                            : null,
                                    X = "bid" === r,
                                    Z = X && K ? K : !X && V ? V : null,
                                    $ = X
                                        ? I.getAmount({real: !0}) >=
                                          parseFloat(O)
                                        : I.getAmount({real: !0}) >=
                                          parseFloat(C),
                                    ee = u
                                        ? Y.a.translate("exchange.short")
                                        : X
                                            ? Y.a.translate("exchange.buy")
                                            : Y.a.translate("exchange.sell"),
                                    te = X
                                        ? Y.a.translate("exchange.buy")
                                        : Y.a.translate("exchange.sell"),
                                    ae = !u && !(I.getAmount() > 0 && $),
                                    re = !(x > 0),
                                    ne = !(C > 0),
                                    oe = ae || re || ne,
                                    se = S()("button buySellButton", r, {
                                        disabled: oe
                                    }),
                                    le = X ? s.get("symbol") : o.get("symbol"),
                                    ce = re
                                        ? Y.a.translate(
                                              "exchange.invalid_price"
                                          )
                                        : ne
                                            ? Y.a.translate(
                                                  "exchange.invalid_amount"
                                              )
                                            : ae
                                                ? Y.a.translate(
                                                      "exchange.no_balance"
                                                  )
                                                : null;
                                v[1] &&
                                    "1.3.0" ===
                                        v[1].getIn([
                                            "options",
                                            "core_exchange_rate",
                                            "quote",
                                            "asset_id"
                                        ]) &&
                                    "1.3.0" ===
                                        v[1].getIn([
                                            "options",
                                            "core_exchange_rate",
                                            "base",
                                            "asset_id"
                                        ]) &&
                                    ((y = v[0]), v.splice(1, 1));
                                var fe = 0,
                                    be = v.map(function(e) {
                                        var t = k.a.replaceName(e),
                                            a = t.name,
                                            r = t.prefix;
                                        return n.a.createElement(
                                            "option",
                                            {key: e.get("id"), value: fe++},
                                            r,
                                            a
                                        );
                                    }),
                                    _e = void 0;
                                _e =
                                    y.get("symbol") === le
                                        ? I.clone(I.getAmount() - c.getAmount())
                                        : I;
                                var ke = k.a.replaceName(
                                        this.props[X ? "base" : "quote"]
                                    ),
                                    Ee = (ke.name, ke.prefix, a(3)),
                                    we = null;
                                "bid" == r &&
                                    (we = Ee.translate("walkthrough.buy_form")),
                                    "ask" == r &&
                                        (we = Ee.translate(
                                            "walkthrough.sell_form"
                                        ));
                                var Ce = Object.keys(
                                        this.props.expirations
                                    ).map(function(t, a) {
                                        return n.a.createElement(
                                            "option",
                                            {value: t, key: t},
                                            e.props.expirations[t].title
                                        );
                                    }),
                                    xe = l.a.getState().settings.get("themes"),
                                    Se = ye()(),
                                    Ae =
                                        "LLC" === s.get("symbol") ||
                                        "LLC" === o.get("symbol");
                                return n.a.createElement(
                                    "div",
                                    {className: this.props.className},
                                    n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "exchange-bordered buy-sell-container"
                                        },
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "exchange-content-header " +
                                                    r,
                                                "data-intro": we
                                            },
                                            n.a.createElement(
                                                "span",
                                                null,
                                                n.a.createElement(ie.a, {
                                                    string:
                                                        "exchange.buysell_formatter",
                                                    noLink: !0,
                                                    noTip: !1,
                                                    keys: [
                                                        {
                                                            type: "asset",
                                                            value: o.get(
                                                                "symbol"
                                                            ),
                                                            arg: "asset"
                                                        },
                                                        {
                                                            type: "translate",
                                                            value: u
                                                                ? "exchange.short"
                                                                : X
                                                                    ? "exchange.buy"
                                                                    : "exchange.sell",
                                                            arg: "direction"
                                                        }
                                                    ]
                                                })
                                            ),
                                            this.props.onFlip
                                                ? n.a.createElement(
                                                      "span",
                                                      {
                                                          onClick: this.props
                                                              .onFlip,
                                                          style: {
                                                              cursor: "pointer",
                                                              fontSize: "1rem"
                                                          },
                                                          className:
                                                              "flip-arrow"
                                                      },
                                                      " ",
                                                      "⇆"
                                                  )
                                                : "null",
                                            this.props.onTogglePosition
                                                ? n.a.createElement(
                                                      "span",
                                                      {
                                                          onClick: this.props
                                                              .onTogglePosition,
                                                          style: {
                                                              cursor: "pointer",
                                                              fontSize: "1rem"
                                                          },
                                                          className:
                                                              "flip-arrow"
                                                      },
                                                      " ",
                                                      "⇅"
                                                  )
                                                : "null",
                                            n.a.createElement(
                                                "div",
                                                {
                                                    onClick: this.props
                                                        .onToggleOpen,
                                                    className:
                                                        "float-right clickable hide-for-xlarge",
                                                    style: {paddingLeft: 10}
                                                },
                                                P
                                            ),
                                            Ae &&
                                            "LLC" !==
                                                this.props[
                                                    X ? "base" : "quote"
                                                ].get("symbol")
                                                ? n.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "float-right buy-sell-deposit"
                                                      },
                                                      n.a.createElement(
                                                          "a",
                                                          {
                                                              onClick: this
                                                                  .props
                                                                  .onShowModal
                                                          },
                                                          n.a.createElement(
                                                              ie.a,
                                                              {
                                                                  string:
                                                                      "exchange.buysell_formatter",
                                                                  noLink: !0,
                                                                  noTip: !0,
                                                                  keys: [
                                                                      {
                                                                          type:
                                                                              "asset",
                                                                          value: this.props[
                                                                              X
                                                                                  ? "quote"
                                                                                  : "base"
                                                                          ].get(
                                                                              "symbol"
                                                                          ),
                                                                          arg:
                                                                              "asset"
                                                                      },
                                                                      {
                                                                          type:
                                                                              "translate",
                                                                          value:
                                                                              "exchange.buy",
                                                                          arg:
                                                                              "direction"
                                                                      }
                                                                  ]
                                                              }
                                                          )
                                                      )
                                                  )
                                                : null,
                                            null,
                                            this.props.onBorrow
                                                ? n.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "float-right buy-sell-deposit"
                                                      },
                                                      n.a.createElement(
                                                          "a",
                                                          {
                                                              onClick: this
                                                                  .props
                                                                  .onBorrow
                                                          },
                                                          n.a.createElement(
                                                              ie.a,
                                                              {
                                                                  string:
                                                                      "exchange.buysell_formatter",
                                                                  noLink: !0,
                                                                  keys: [
                                                                      {
                                                                          type:
                                                                              "asset",
                                                                          value: this.props[
                                                                              X
                                                                                  ? "base"
                                                                                  : "quote"
                                                                          ].get(
                                                                              "symbol"
                                                                          ),
                                                                          arg:
                                                                              "asset"
                                                                      },
                                                                      {
                                                                          type:
                                                                              "translate",
                                                                          value:
                                                                              "exchange.borrow",
                                                                          arg:
                                                                              "direction"
                                                                      }
                                                                  ]
                                                              }
                                                          )
                                                      )
                                                  )
                                                : null
                                        ),
                                        n.a.createElement(
                                            "form",
                                            {
                                                className:
                                                    (this.props.isOpen
                                                        ? ""
                                                        : "hide-container ") +
                                                    "order-form",
                                                noValidate: !0
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical no-overflow no-padding"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-padding buy-sell-row"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        n.a.createElement(w.a, {
                                                            content:
                                                                "exchange.price"
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        n.a.createElement(
                                                            de.b,
                                                            {
                                                                id: r + "Price",
                                                                value: x,
                                                                onChange: p,
                                                                autoComplete:
                                                                    "off",
                                                                placeholder:
                                                                    "0.0"
                                                            }
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                        },
                                                        n.a.createElement(N.a, {
                                                            dataPlace: "right",
                                                            name: s.get(
                                                                "symbol"
                                                            )
                                                        }),
                                                        " / ",
                                                        n.a.createElement(N.a, {
                                                            dataPlace: "right",
                                                            name: o.get(
                                                                "symbol"
                                                            )
                                                        })
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-padding buy-sell-row"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        n.a.createElement(w.a, {
                                                            content:
                                                                "transfer.amount"
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        n.a.createElement(
                                                            de.b,
                                                            {
                                                                id:
                                                                    r +
                                                                    "Amount",
                                                                value: C,
                                                                onChange: i,
                                                                autoComplete:
                                                                    "off",
                                                                placeholder:
                                                                    "0.0"
                                                            }
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                        },
                                                        n.a.createElement(N.a, {
                                                            dataPlace: "right",
                                                            name: o.get(
                                                                "symbol"
                                                            )
                                                        })
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block buy-sell-row bottom-row"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        n.a.createElement(w.a, {
                                                            content:
                                                                "exchange.total"
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        n.a.createElement(
                                                            de.b,
                                                            {
                                                                id: r + "Total",
                                                                value: O,
                                                                onChange: m,
                                                                autoComplete:
                                                                    "off",
                                                                placeholder:
                                                                    "0.0"
                                                            }
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                        },
                                                        n.a.createElement(N.a, {
                                                            dataPlace: "right",
                                                            name: s.get(
                                                                "symbol"
                                                            )
                                                        })
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-padding buy-sell-row"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        n.a.createElement(w.a, {
                                                            content:
                                                                "transfer.fee"
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        n.a.createElement(
                                                            "input",
                                                            {
                                                                className: _
                                                                    ? ""
                                                                    : "no-balance",
                                                                disabled: !0,
                                                                type: "text",
                                                                id: r + "Fee",
                                                                value: _
                                                                    ? c.getAmount(
                                                                          {
                                                                              real: !0
                                                                          }
                                                                      )
                                                                    : Y.a.translate(
                                                                          "transfer.errors.insufficient"
                                                                      ),
                                                                autoComplete:
                                                                    "off"
                                                            }
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-4 no-margin no-overflow buy-sell-box",
                                                            style: {
                                                                paddingLeft:
                                                                    1 !==
                                                                    v.length
                                                                        ? 0
                                                                        : 5
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "select",
                                                            {
                                                                style:
                                                                    1 ===
                                                                    v.length
                                                                        ? {
                                                                              background:
                                                                                  "none"
                                                                          }
                                                                        : null,
                                                                disabled:
                                                                    1 ===
                                                                    v.length,
                                                                value: v.indexOf(
                                                                    this.props
                                                                        .feeAsset
                                                                ),
                                                                className:
                                                                    "form-control" +
                                                                    (1 !==
                                                                    v.length
                                                                        ? " buysell-select"
                                                                        : ""),
                                                                onChange: this
                                                                    .props
                                                                    .onChangeFeeAsset
                                                            },
                                                            be
                                                        )
                                                    )
                                                ),
                                                Z
                                            ),
                                            n.a.createElement(
                                                "div",
                                                null,
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content clear-fix no-padding"
                                                    },
                                                    n.a.createElement(
                                                        "table",
                                                        {
                                                            className:
                                                                "float-left"
                                                        },
                                                        n.a.createElement(
                                                            "tbody",
                                                            null,
                                                            n.a.createElement(
                                                                "tr",
                                                                {
                                                                    className:
                                                                        "buy-sell-info"
                                                                },
                                                                n.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    n.a.createElement(
                                                                        w.a,
                                                                        {
                                                                            content:
                                                                                "exchange.balance"
                                                                        }
                                                                    ),
                                                                    ":"
                                                                ),
                                                                n.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            paddingLeft: 5,
                                                                            textAlign:
                                                                                "right"
                                                                        }
                                                                    },
                                                                    n.a.createElement(
                                                                        "span",
                                                                        {
                                                                            style: {
                                                                                borderBottom:
                                                                                    "#A09F9F 1px dotted",
                                                                                cursor:
                                                                                    "pointer"
                                                                            },
                                                                            onClick: this._addBalance.bind(
                                                                                this,
                                                                                _e
                                                                            )
                                                                        },
                                                                        k.a.format_number(
                                                                            I.getAmount(
                                                                                {
                                                                                    real: !0
                                                                                }
                                                                            ),
                                                                            f
                                                                        ),
                                                                        " ",
                                                                        n.a.createElement(
                                                                            N.a,
                                                                            {
                                                                                name: le
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                "tr",
                                                                {
                                                                    className:
                                                                        "buy-sell-info"
                                                                },
                                                                n.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            paddingTop: 5
                                                                        }
                                                                    },
                                                                    X
                                                                        ? n.a.createElement(
                                                                              w.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.lowest_ask"
                                                                              }
                                                                          )
                                                                        : n.a.createElement(
                                                                              w.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.highest_bid"
                                                                              }
                                                                          ),
                                                                    ": "
                                                                ),
                                                                g
                                                                    ? n.a.createElement(
                                                                          "td",
                                                                          {
                                                                              style: {
                                                                                  paddingLeft: 5,
                                                                                  textAlign:
                                                                                      "right",
                                                                                  paddingTop: 5,
                                                                                  verticalAlign:
                                                                                      "bottom"
                                                                              }
                                                                          },
                                                                          n.a.createElement(
                                                                              "span",
                                                                              {
                                                                                  style: {
                                                                                      borderBottom:
                                                                                          "#A09F9F 1px dotted",
                                                                                      cursor:
                                                                                          "pointer"
                                                                                  },
                                                                                  onClick: this.props.setPrice.bind(
                                                                                      this,
                                                                                      r,
                                                                                      b.sellPrice()
                                                                                  )
                                                                              },
                                                                              n.a.createElement(
                                                                                  A.a,
                                                                                  {
                                                                                      price: g,
                                                                                      quote: o,
                                                                                      base: s
                                                                                  }
                                                                              ),
                                                                              " ",
                                                                              n.a.createElement(
                                                                                  N.a,
                                                                                  {
                                                                                      name: s.get(
                                                                                          "symbol"
                                                                                      )
                                                                                  }
                                                                              ),
                                                                              "/",
                                                                              n.a.createElement(
                                                                                  N.a,
                                                                                  {
                                                                                      name: o.get(
                                                                                          "symbol"
                                                                                      )
                                                                                  }
                                                                              )
                                                                          )
                                                                      )
                                                                    : null
                                                            ),
                                                            n.a.createElement(
                                                                "tr",
                                                                {
                                                                    className:
                                                                        "buy-sell-info"
                                                                },
                                                                n.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            paddingTop: 5
                                                                        }
                                                                    },
                                                                    n.a.createElement(
                                                                        w.a,
                                                                        {
                                                                            content:
                                                                                "transaction.expiration"
                                                                        }
                                                                    ),
                                                                    ":"
                                                                ),
                                                                n.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "expiration-datetime-picker"
                                                                    },
                                                                    n.a.createElement(
                                                                        "select",
                                                                        {
                                                                            onChange: this
                                                                                .props
                                                                                .onExpirationTypeChange,
                                                                            value: this
                                                                                .props
                                                                                .expirationType
                                                                        },
                                                                        Ce
                                                                    ),
                                                                    "SPECIFIC" ===
                                                                    this.props
                                                                        .expirationType
                                                                        ? n.a.createElement(
                                                                              ge.a,
                                                                              {
                                                                                  pickerPosition:
                                                                                      "bottom center",
                                                                                  wrapperClassName: xe,
                                                                                  timePicker: !0,
                                                                                  min: Se,
                                                                                  inputFormat:
                                                                                      "Do MMM YYYY hh:mm A",
                                                                                  value: this
                                                                                      .props
                                                                                      .expirationCustomTime,
                                                                                  onChange: this
                                                                                      .props
                                                                                      .onExpirationCustomChange
                                                                              }
                                                                          )
                                                                        : null
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    ce
                                                        ? n.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "float-right",
                                                                  "data-tip": ce,
                                                                  "data-place":
                                                                      "right"
                                                              },
                                                              n.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          margin: 0
                                                                      },
                                                                      className: se,
                                                                      type:
                                                                          "submit",
                                                                      onClick: h.bind(
                                                                          this,
                                                                          !0
                                                                      ),
                                                                      value: ee
                                                                  }
                                                              )
                                                          )
                                                        : n.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "float-right",
                                                                  "data-tip": ""
                                                              },
                                                              n.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          margin: 0
                                                                      },
                                                                      className: se,
                                                                      type:
                                                                          "submit",
                                                                      onClick: h.bind(
                                                                          this,
                                                                          !0
                                                                      ),
                                                                      value: ee
                                                                  }
                                                              )
                                                          ),
                                                    ce && u
                                                        ? n.a.createElement(
                                                              "div",
                                                              {
                                                                  style: {
                                                                      paddingRight: 10
                                                                  },
                                                                  className:
                                                                      "float-right",
                                                                  "data-tip": ce,
                                                                  "data-place":
                                                                      "right"
                                                              },
                                                              n.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          margin: 0
                                                                      },
                                                                      className: se,
                                                                      type:
                                                                          "submit",
                                                                      onClick: h.bind(
                                                                          this,
                                                                          !1
                                                                      ),
                                                                      value: te
                                                                  }
                                                              )
                                                          )
                                                        : u
                                                            ? n.a.createElement(
                                                                  "div",
                                                                  {
                                                                      style: {
                                                                          paddingRight: 10
                                                                      },
                                                                      className:
                                                                          "float-right",
                                                                      "data-tip":
                                                                          ""
                                                                  },
                                                                  n.a.createElement(
                                                                      "input",
                                                                      {
                                                                          style: {
                                                                              margin: 0
                                                                          },
                                                                          className: se,
                                                                          type:
                                                                              "submit",
                                                                          onClick: h.bind(
                                                                              this,
                                                                              !1
                                                                          ),
                                                                          value: te
                                                                      }
                                                                  )
                                                              )
                                                            : null
                                                )
                                            )
                                        )
                                    ),
                                    n.a.createElement(
                                        ue.a,
                                        ve(
                                            {
                                                ref: "deposit_modal",
                                                action: "deposit",
                                                fiatModal: !1,
                                                account: this.props.currentAccount.get(
                                                    "name"
                                                ),
                                                sender: this.props.currentAccount.get(
                                                    "id"
                                                ),
                                                asset: this.props[
                                                    X ? "base" : "quote"
                                                ].get("id"),
                                                modalId:
                                                    "simple_deposit_modal" +
                                                    ("bid" === r ? "" : "_ask"),
                                                balances: [this.props.balance]
                                            },
                                            E
                                        )
                                    ),
                                    n.a.createElement(pe.a, {
                                        ref: "bridge_modal",
                                        action: "deposit",
                                        account: this.props.currentAccount.get(
                                            "name"
                                        ),
                                        sender: this.props.currentAccount.get(
                                            "id"
                                        ),
                                        asset: this.props.balanceId,
                                        modalId:
                                            "simple_bridge_modal" +
                                            ("bid" === r ? "" : "_ask"),
                                        balances: [this.props.balance],
                                        bridges: this.props.currentBridges
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (ke.propTypes = {
                balance: le.a.ChainObject,
                type: g.a.string,
                amountChange: g.a.func.isRequired,
                priceChange: g.a.func.isRequired,
                onSubmit: g.a.func.isRequired,
                onExpirationTypeChange: g.a.func.isRequired,
                onExpirationCustomChange: g.a.func.isRequired
            }),
                (ke.defaultProps = {type: "bid"});
            var Ee = Object(ce.a)(ke),
                we = a(11),
                Ce = a(37),
                xe = a(77),
                Se = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var Ae = new Date(),
                Oe = (function(e) {
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
                                marketsList: "",
                                issuersList: "",
                                lookupQuote: null,
                                filterByIssuerName: null
                            }),
                            (e.getAssetList = Object(m.a)(
                                xe.a.getAssetList.defer,
                                150
                            )),
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
                        })(t, n.a.Component),
                        Se(t, [
                            {
                                key: "_onSelectIssuer",
                                value: function(e) {
                                    this.setState({
                                        filterByIssuerName:
                                            "0" == e.target.value
                                                ? null
                                                : e.target.value
                                    });
                                }
                            },
                            {
                                key: "_onInputName",
                                value: function(e, t) {
                                    var a = t.target.value.trim().toUpperCase(),
                                        r = !J.d.is_valid_symbol_error(a, !0);
                                    if (
                                        (this.setState({
                                            inputValue: t.target.value.trim(),
                                            marketsList: "",
                                            issuersList: "",
                                            filterByIssuerName: null
                                        }),
                                        a && a.length >= 3 && !r)
                                    )
                                        return this.setState({
                                            assetNameError: !0
                                        });
                                    this.setState({assetNameError: !1}),
                                        this._lookupAssets(a, e);
                                }
                            },
                            {
                                key: "_lookupAssets",
                                value: function(e) {
                                    var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1] &&
                                            arguments[1],
                                        a =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2] &&
                                            arguments[2];
                                    if (e || "" === e) {
                                        var r = new Date(),
                                            n = e.toUpperCase();
                                        if (
                                            (this.setState({lookupQuote: n}),
                                            this.state.lookupQuote !== n || a)
                                        ) {
                                            if (n.length < 1 || r - Ae <= 250)
                                                return !1;
                                            this.getAssetList(n, 25, t);
                                        }
                                    }
                                }
                            },
                            {
                                key: "_changeMarketPickerFilter",
                                value: function(e) {
                                    this.setState({
                                        marketPickerTab: e,
                                        inputValue: "",
                                        marketsList: "",
                                        issuersList: "",
                                        filterByIssuerName: null
                                    });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.searchAssets,
                                        r = t.assetsLoading,
                                        o = t.marketPickerAsset,
                                        s = this.state,
                                        i = s.lookupQuote,
                                        l = s.marketPickerTab,
                                        c = s.filterByIssuerName,
                                        u = s.inputValue,
                                        p = this.props.baseAsset.get("symbol"),
                                        h = this.props.quoteAsset.get("symbol"),
                                        d = [],
                                        m = [],
                                        f = this.state.marketsList,
                                        g = this.state.issuersList,
                                        y = 0;
                                    return (
                                        a.size &&
                                            u &&
                                            u.length > 2 &&
                                            a
                                                .filter(function(e) {
                                                    try {
                                                        if (
                                                            e.options
                                                                .description
                                                        ) {
                                                            var t = JSON.parse(
                                                                e.options
                                                                    .description
                                                            );
                                                            if (
                                                                "visible" in
                                                                    t &&
                                                                !t.visible
                                                            )
                                                                return !1;
                                                        }
                                                    } catch (e) {}
                                                    return (
                                                        -1 !==
                                                            e.symbol.indexOf(
                                                                i
                                                            ) &&
                                                        e.symbol.length >=
                                                            i.length
                                                    );
                                                })
                                                .forEach(function(t) {
                                                    if (!(y > 100)) {
                                                        y++;
                                                        var a = J.b.getObject(
                                                            t.issuer,
                                                            !1,
                                                            !1
                                                        );
                                                        if (a) {
                                                            var r = e.props.baseAsset.get(
                                                                    "symbol"
                                                                ),
                                                                n =
                                                                    t.symbol +
                                                                    "_" +
                                                                    r;
                                                            r === t.symbol ||
                                                                (c &&
                                                                    c !=
                                                                        a.get(
                                                                            "name"
                                                                        )) ||
                                                                (("search" !=
                                                                    l ||
                                                                    !t.symbol.startsWith(
                                                                        u
                                                                    )) &&
                                                                    l &&
                                                                    "filter" !=
                                                                        l) ||
                                                                d.push([
                                                                    n,
                                                                    {
                                                                        quote:
                                                                            t.symbol,
                                                                        base: r,
                                                                        issuer: a.get(
                                                                            "name"
                                                                        )
                                                                    }
                                                                ]),
                                                                m.includes(
                                                                    a.get(
                                                                        "name"
                                                                    )
                                                                ) ||
                                                                    m.push(
                                                                        a.get(
                                                                            "name"
                                                                        )
                                                                    );
                                                        }
                                                    }
                                                }),
                                        (g = m
                                            .sort(function(e, t) {
                                                return e > t
                                                    ? 1
                                                    : e < t
                                                        ? -1
                                                        : 0;
                                            })
                                            .map(function(e) {
                                                return n.a.createElement(
                                                    "option",
                                                    {key: e, value: e},
                                                    e
                                                );
                                            })),
                                        (f = d
                                            .sort(function(e, t) {
                                                return e[1].quote > t[1].quote
                                                    ? 1
                                                    : e[1].quote < t[1].quote
                                                        ? -1
                                                        : 0;
                                            })
                                            .map(function(t) {
                                                var a =
                                                    e.props.quoteAsset.get(
                                                        "symbol"
                                                    ) == o;
                                                return n.a.createElement(
                                                    "li",
                                                    {key: t[0]},
                                                    n.a.createElement(N.a, {
                                                        name: t[1].quote
                                                    }),
                                                    n.a.createElement(
                                                        "span",
                                                        {
                                                            style: {
                                                                float: "right"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            we.b,
                                                            {
                                                                onClick: function() {
                                                                    e.props.onToggleMarketPicker(
                                                                        null
                                                                    ),
                                                                        b.a.switchMarket();
                                                                },
                                                                to: a
                                                                    ? "/market/" +
                                                                      t[1]
                                                                          .quote +
                                                                      "_" +
                                                                      p
                                                                    : "/market/" +
                                                                      h +
                                                                      "_" +
                                                                      t[1].quote
                                                            },
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.market_picker.use"
                                                                }
                                                            )
                                                        )
                                                    )
                                                );
                                            })),
                                        n.a.createElement(
                                            "div",
                                            {className: "marketPicker"},
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "marketPicker__header"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "marketPicker__filterType"
                                                    },
                                                    n.a.createElement(w.a, {
                                                        className:
                                                            "marketPicker__filterHeader",
                                                        component: "span",
                                                        content:
                                                            "exchange.market_picker.search_mode"
                                                    }),
                                                    n.a.createElement(T.a, {
                                                        style: {
                                                            marginLeft: 5,
                                                            cursor: "pointer"
                                                        },
                                                        className:
                                                            this.state
                                                                .marketPickerTab &&
                                                            "filter" !=
                                                                this.state
                                                                    .marketPickerTab
                                                                ? ""
                                                                : "blue-icon",
                                                        size: "1_5x",
                                                        onClick: this._changeMarketPickerFilter.bind(
                                                            this,
                                                            "filter"
                                                        ),
                                                        name: "filter",
                                                        title: "icons.filter"
                                                    }),
                                                    n.a.createElement(T.a, {
                                                        style: {
                                                            marginLeft: 5,
                                                            cursor: "pointer"
                                                        },
                                                        className:
                                                            "search" ==
                                                            this.state
                                                                .marketPickerTab
                                                                ? "blue-icon"
                                                                : "",
                                                        size: "1_5x",
                                                        onClick: this._changeMarketPickerFilter.bind(
                                                            this,
                                                            "search"
                                                        ),
                                                        name: "zoom",
                                                        title: "icons.zoom"
                                                    })
                                                ),
                                                n.a.createElement(w.a, {
                                                    className:
                                                        "marketPicker__title",
                                                    component: "span",
                                                    content:
                                                        "exchange.market_picker.title"
                                                })
                                            ),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "marketPicker__subHeader"
                                                },
                                                n.a.createElement(w.a, {
                                                    content:
                                                        "exchange.market_picker.sub_title"
                                                }),
                                                " ",
                                                n.a.createElement(
                                                    we.b,
                                                    {
                                                        to: "/asset/" + o,
                                                        style: {
                                                            cursor: "pointer",
                                                            color:
                                                                "lightblue !important"
                                                        }
                                                    },
                                                    n.a.createElement(N.a, {
                                                        name: o
                                                    }),
                                                    n.a.createElement(T.a, {
                                                        className: "blue-icon",
                                                        style: {marginLeft: 5},
                                                        name: "info-circle-o",
                                                        title:
                                                            "icons.info_circle_o"
                                                    })
                                                )
                                            ),
                                            n.a.createElement("hr", null),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    id: "search",
                                                    style: {
                                                        display:
                                                            "search" == l
                                                                ? ""
                                                                : "none"
                                                    }
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    null,
                                                    n.a.createElement(
                                                        "section",
                                                        {
                                                            className:
                                                                "block-list no-border-bottom"
                                                        },
                                                        n.a.createElement(
                                                            "header",
                                                            null,
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "exchange.market_picker.search_for_asset"
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "input",
                                                            {
                                                                type: "text",
                                                                value: u,
                                                                onChange: this._onInputName.bind(
                                                                    this,
                                                                    !1
                                                                ),
                                                                placeholder: Y.a.translate(
                                                                    "exchange.market_picker.search"
                                                                ),
                                                                maxLength: "16",
                                                                tabIndex: 2
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    id: "filter",
                                                    style: {
                                                        display:
                                                            this.state
                                                                .marketPickerTab &&
                                                            "filter" !=
                                                                this.state
                                                                    .marketPickerTab
                                                                ? "none"
                                                                : ""
                                                    }
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    null,
                                                    n.a.createElement(
                                                        "section",
                                                        {
                                                            className:
                                                                "block-list no-border-bottom"
                                                        },
                                                        n.a.createElement(
                                                            "header",
                                                            null,
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "exchange.market_picker.find_by_asset"
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "input",
                                                            {
                                                                type: "text",
                                                                value: u,
                                                                onChange: this._onInputName.bind(
                                                                    this,
                                                                    !0
                                                                ),
                                                                placeholder: Y.a.translate(
                                                                    "exchange.market_picker.search"
                                                                ),
                                                                maxLength: "16",
                                                                tabIndex: 2
                                                            }
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    null,
                                                    n.a.createElement(
                                                        "section",
                                                        {
                                                            className:
                                                                "block-list no-border-bottom"
                                                        },
                                                        n.a.createElement(
                                                            "header",
                                                            null,
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "exchange.market_picker.filter_by_issuer"
                                                                }
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "ul",
                                                            null,
                                                            n.a.createElement(
                                                                "li",
                                                                {
                                                                    className:
                                                                        "with-dropdpwn"
                                                                },
                                                                n.a.createElement(
                                                                    "select",
                                                                    {
                                                                        className:
                                                                            "settings-select",
                                                                        onChange: this._onSelectIssuer.bind(
                                                                            this
                                                                        ),
                                                                        style: {
                                                                            border: 0
                                                                        }
                                                                    },
                                                                    n.a.createElement(
                                                                        "option",
                                                                        {
                                                                            key:
                                                                                "0",
                                                                            value:
                                                                                "0"
                                                                        },
                                                                        n.a.createElement(
                                                                            w.a,
                                                                            {
                                                                                content:
                                                                                    "exchange.market_picker.show_all"
                                                                            }
                                                                        )
                                                                    ),
                                                                    g
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "section",
                                                {
                                                    className:
                                                        "block-list no-border-bottom"
                                                },
                                                n.a.createElement(w.a, {
                                                    component: "header",
                                                    content:
                                                        "exchange.market_picker.results",
                                                    total_assets: d.length
                                                })
                                            ),
                                            r && d.length
                                                ? n.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              textAlign:
                                                                  "center"
                                                          }
                                                      },
                                                      n.a.createElement(Ce.a, {
                                                          type: "three-bounce"
                                                      })
                                                  )
                                                : n.a.createElement(
                                                      "div",
                                                      {className: "results"},
                                                      n.a.createElement(
                                                          "ul",
                                                          {
                                                              style: {
                                                                  marginLeft: 0
                                                              }
                                                          },
                                                          f
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
                Ne = a(362),
                Pe = a.n(Ne),
                Te = a(311),
                Ie = a.n(Te),
                Be = a(102),
                Me = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var a = [],
                                    r = !0,
                                    n = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var s, i = e[Symbol.iterator]();
                                        !(r = (s = i.next()).done) &&
                                        (a.push(s.value), !t || a.length !== t);
                                        r = !0
                                    );
                                } catch (e) {
                                    (n = !0), (o = e);
                                } finally {
                                    try {
                                        !r && i.return && i.return();
                                    } finally {
                                        if (n) throw o;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                Fe = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            function qe(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function je(e) {
                return e
                    .map(function(e) {
                        var t = e / 60,
                            a = t / 60 / 24,
                            r = a / 7;
                        if (t < 1) return e + "S";
                        if (a < 1 && parseInt(t, 10) === t) return t.toString();
                        if (r < 1) {
                            if (a >= 1 && parseInt(a, 10) === a)
                                return 1 === a ? "D" : a + "D";
                        } else if (r >= 1 && parseInt(r, 10) === r) return r + "D";
                        return null;
                    })
                    .filter(function(e) {
                        return !!e;
                    });
            }
            var Re = (function() {
                    function e() {
                        qe(this, e);
                    }
                    return (
                        Fe(e, [
                            {
                                key: "update",
                                value: function(e) {
                                    for (var t in e)
                                        switch (t) {
                                            case "resolutions":
                                                this.supported_resolutions = je(
                                                    e.resolutions
                                                );
                                                break;
                                            case "onMarketChange":
                                                o.a.unsubscribe(
                                                    "market_change"
                                                ),
                                                    o.a.subscribe(
                                                        "market_change",
                                                        e[t]
                                                    );
                                                break;
                                            default:
                                                this[t] = e[t];
                                        }
                                }
                            },
                            {
                                key: "clearSubs",
                                value: function() {
                                    o.a.clearSubs();
                                }
                            },
                            {
                                key: "onReady",
                                value: function(e) {
                                    var t = this;
                                    setTimeout(function() {
                                        e({
                                            exchanges: [
                                                {
                                                    value: "OPEN.",
                                                    name: "Openledger",
                                                    desc: "Openledger Gateway"
                                                }
                                            ],
                                            symbols_types: [],
                                            supported_resolutions:
                                                t.supported_resolutions,
                                            supports_marks: !1,
                                            supports_search: !1,
                                            supports_time: !0
                                        });
                                    }, 10);
                                }
                            },
                            {
                                key: "searchSymbols",
                                value: function(e, t, a, r) {
                                    console.log("searchSymbols", e, t, a),
                                        r([]);
                                }
                            },
                            {
                                key: "resolveSymbol",
                                value: function(e, t, a) {
                                    var r = this,
                                        n = e.split("_"),
                                        o = Me(n, 2),
                                        s = o[0],
                                        i = o[1];
                                    Promise.all([
                                        Object(J.f)("getAsset", s),
                                        Object(J.f)("getAsset", i)
                                    ])
                                        .then(function(a) {
                                            var n = Me(a, 2),
                                                o = n[0],
                                                s = n[1];
                                            t(
                                                new function e(t) {
                                                    qe(this, e),
                                                        (this.name = t.ticker),
                                                        (this.ticker =
                                                            t.ticker);
                                                    var a = Object(Be.c)(
                                                            t.quoteAsset
                                                        ),
                                                        r = Object(Be.c)(
                                                            t.baseAsset
                                                        ),
                                                        n =
                                                            a === r
                                                                ? a
                                                                : a && !r
                                                                    ? a
                                                                    : !a && r
                                                                        ? r
                                                                        : a +
                                                                          " / " +
                                                                          r,
                                                        o = k.a.replaceName(
                                                            t.baseAsset
                                                        ),
                                                        s = o.name,
                                                        i = o.prefix,
                                                        l = k.a.replaceName(
                                                            t.quoteAsset
                                                        ),
                                                        c = l.name,
                                                        u = l.prefix;
                                                    (this.description =
                                                        "" +
                                                        (u || "") +
                                                        c +
                                                        " / " +
                                                        (i || "") +
                                                        s +
                                                        " " +
                                                        (n
                                                            ? "(" + n + ")"
                                                            : "")),
                                                        (this.type = "bitcoin"),
                                                        (this.session = "24x7"),
                                                        (this.timezone = Ie.a.tz.guess()),
                                                        (this.data_status =
                                                            "streaming"),
                                                        (this.supported_resolutions =
                                                            t.resolutions),
                                                        (this.has_empty_bars = !0),
                                                        (this.pricescale = Math.pow(
                                                            10,
                                                            t.baseAsset.get(
                                                                "precision"
                                                            )
                                                        )),
                                                        (this.quoteAsset =
                                                            t.quoteAsset),
                                                        (this.baseAsset =
                                                            t.baseAsset),
                                                        (this.minmov = 1),
                                                        (this.has_intraday = this.supported_resolutions.reduce(
                                                            function(e, t) {
                                                                return (
                                                                    e ||
                                                                    !isNaN(
                                                                        parseInt(
                                                                            t,
                                                                            10
                                                                        )
                                                                    )
                                                                );
                                                            },
                                                            !1
                                                        )),
                                                        (this.intraday_multipliers = this.supported_resolutions.filter(
                                                            function(e) {
                                                                return !isNaN(
                                                                    parseInt(
                                                                        e,
                                                                        10
                                                                    )
                                                                );
                                                            }
                                                        )),
                                                        (this.has_seconds = this.supported_resolutions.reduce(
                                                            function(e, t) {
                                                                return (
                                                                    e ||
                                                                    -1 !==
                                                                        t.indexOf(
                                                                            "S"
                                                                        )
                                                                );
                                                            },
                                                            !1
                                                        )),
                                                        (this.seconds_multipliers = this.supported_resolutions.filter(
                                                            function(e) {
                                                                return (
                                                                    -1 !==
                                                                    e.indexOf(
                                                                        "S"
                                                                    )
                                                                );
                                                            }
                                                        )),
                                                        (this.has_daily = this.supported_resolutions.reduce(
                                                            function(e, t) {
                                                                return (
                                                                    e ||
                                                                    -1 !==
                                                                        t.indexOf(
                                                                            "D"
                                                                        )
                                                                );
                                                            },
                                                            !1
                                                        )),
                                                        (this.has_daily = this.supported_resolutions.reduce(
                                                            function(e, t) {
                                                                return (
                                                                    e ||
                                                                    -1 !==
                                                                        t.indexOf(
                                                                            "D"
                                                                        )
                                                                );
                                                            },
                                                            !1
                                                        ));
                                                }({
                                                    ticker: e,
                                                    quoteAsset: o,
                                                    baseAsset: s,
                                                    resolutions:
                                                        r.supported_resolutions
                                                })
                                            );
                                        })
                                        .catch(a);
                                }
                            },
                            {
                                key: "getBars",
                                value: function(e, t, a, r, n, o, s) {
                                    var i = this;
                                    (a *= 1e3), (r *= 1e3);
                                    var l = this._getHistory();
                                    if (
                                        ((this.latestBar = l[l.length - 1]),
                                        (l = l.filter(function(e) {
                                            return e.time >= a && e.time <= r;
                                        })),
                                        this.interval !== t)
                                    ) {
                                        if (!s) return;
                                        var c = (function(e) {
                                            return "D" === e
                                                ? 86400
                                                : -1 !== e.indexOf("W")
                                                    ? 7 *
                                                      parseInt(
                                                          e.replace("D", ""),
                                                          10
                                                      ) *
                                                      24 *
                                                      60 *
                                                      60
                                                    : -1 !== e.indexOf("D")
                                                        ? 24 *
                                                          parseInt(
                                                              e.replace(
                                                                  "D",
                                                                  ""
                                                              ),
                                                              10
                                                          ) *
                                                          60 *
                                                          60
                                                        : -1 !== e.indexOf("S")
                                                            ? parseInt(
                                                                  e.replace(
                                                                      "S",
                                                                      ""
                                                                  ),
                                                                  10
                                                              )
                                                            : 60 *
                                                              parseInt(e, 10);
                                        })(t);
                                        return (
                                            b.a.changeBucketSize(c),
                                            b.a
                                                .unSubscribeMarket(
                                                    e.quoteAsset.get("id"),
                                                    e.baseAsset.get("id")
                                                )
                                                .then(function() {
                                                    b.a
                                                        .subscribeMarket(
                                                            e.baseAsset,
                                                            e.quoteAsset,
                                                            c
                                                        )
                                                        .then(function() {
                                                            var e = i._getHistory();
                                                            if (
                                                                ((i.latestBar =
                                                                    e[
                                                                        e.length -
                                                                            1
                                                                    ]),
                                                                (e = e.filter(
                                                                    function(
                                                                        e
                                                                    ) {
                                                                        return (
                                                                            e.time >=
                                                                                a &&
                                                                            e.time <=
                                                                                r
                                                                        );
                                                                    }
                                                                )),
                                                                (i.interval = t),
                                                                !e.length)
                                                            )
                                                                return n(e, {
                                                                    noData: !0
                                                                });
                                                            n(e);
                                                        });
                                                })
                                        );
                                    }
                                    if (((this.interval = t), !l.length))
                                        return n(l, {noData: !0});
                                    n(l);
                                }
                            },
                            {
                                key: "_getHistory",
                                value: function() {
                                    return o.a.getState().priceData;
                                }
                            },
                            {
                                key: "subscribeBars",
                                value: function(e, t, a, r, n) {
                                    var s = this;
                                    o.a.unsubscribe("subscribeBars"),
                                        n(),
                                        o.a.subscribe(
                                            "subscribeBars",
                                            function() {
                                                var e = s._getHistory(),
                                                    t = e.filter(function(e) {
                                                        return (
                                                            !s.latestBar ||
                                                            e.time >
                                                                s.latestBar.time
                                                        );
                                                    });
                                                if (t.length)
                                                    t.forEach(function(e) {
                                                        a(e);
                                                    }),
                                                        (s.latestBar =
                                                            t[t.length - 1]);
                                                else {
                                                    var r = !1;
                                                    for (var n in s.latestBar)
                                                        s.latestBar[n] !==
                                                            e[e.length - 1][
                                                                n
                                                            ] && (r = !0);
                                                    r && a(e[e.length - 1]);
                                                }
                                            }
                                        );
                                }
                            },
                            {key: "unsubscribeBars", value: function() {}},
                            {
                                key: "calculateHistoryDepth",
                                value: function(e, t, a) {}
                            },
                            {
                                key: "getServerTime",
                                value: function(e) {
                                    e(new Date().getTime() / 1e3);
                                }
                            }
                        ]),
                        e
                    );
                })(),
                Le = [
                    "America/Argentina/Buenos_Aires",
                    "America/Bogota",
                    "America/Caracas",
                    "America/Chicago",
                    "America/El_Salvador",
                    "America/Los_Angeles",
                    "America/Mexico_City",
                    "America/New_York",
                    "America/Phoenix",
                    "America/Sao_Paulo",
                    "America/Toronto",
                    "America/Vancouver",
                    "Asia/Almaty",
                    "Asia/Ashkhabad",
                    "Asia/Bangkok",
                    "Asia/Dubai",
                    "Asia/Hong_Kong",
                    "Asia/Kathmandu",
                    "Asia/Kolkata",
                    "Asia/Seoul",
                    "Asia/Shanghai",
                    "Asia/Singapore",
                    "Asia/Taipei",
                    "Asia/Tehran",
                    "Asia/Tokyo",
                    "Australia/ACT",
                    "Australia/Adelaide",
                    "Australia/Brisbane",
                    "Australia/Sydney",
                    "Europe/Athens",
                    "Europe/Berlin",
                    "Europe/Istanbul",
                    "Europe/London",
                    "Europe/Madrid",
                    "Europe/Moscow",
                    "Europe/Paris",
                    "Europe/Warsaw",
                    "Europe/Zurich",
                    "Pacific/Auckland",
                    "Pacific/Chatham",
                    "Pacific/Fakaofo",
                    "Pacific/Honolulu",
                    "US/Mountain"
                ];
            var De = (function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var r = t[a];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, a, r) {
                    return a && e(t.prototype, a), r && e(t, r), t;
                };
            })();
            var ze = a(791),
                Ue = (function(e) {
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
                        })(t, n.a.Component),
                        De(t, [
                            {
                                key: "loadTradingView",
                                value: function(e) {
                                    var t = this,
                                        a = e.dataFeed,
                                        r = Pe.a[e.theme];
                                    a &&
                                        (this.tvWidget ||
                                            (a.update({
                                                resolutions: e.buckets,
                                                ticker:
                                                    e.quoteSymbol +
                                                    "_" +
                                                    e.baseSymbol,
                                                interval: je([e.bucketSize])[0]
                                            }),
                                            (this.tvWidget = new ze.widget({
                                                fullscreen: !1,
                                                symbol:
                                                    e.quoteSymbol +
                                                    "_" +
                                                    e.baseSymbol,
                                                interval: je([e.bucketSize])[0],
                                                library_path:
                                                    "/charting_library/",
                                                datafeed: a,
                                                container_id: "tv_chart",
                                                charts_storage_url:
                                                    "http://saveload.tradingview.com",
                                                charts_storage_api_version:
                                                    "1.1",
                                                client_id: "tradingview.com",
                                                user_id: "public_user_id",
                                                autosize: !0,
                                                locale: e.locale,
                                                timezone: (function() {
                                                    var e = Ie.a.tz.guess();
                                                    if (-1 !== Le.indexOf(e))
                                                        return e;
                                                    for (
                                                        var t = Ie()().toISOString(),
                                                            a = Ie.a
                                                                .tz(t, e)
                                                                .format(),
                                                            r = 0;
                                                        r < Le.length;
                                                        r++
                                                    )
                                                        if (
                                                            Ie.a
                                                                .tz(t, Le[r])
                                                                .format() === a
                                                        )
                                                            return Le[r];
                                                    return (
                                                        console.log(
                                                            "No matching timezone found for " +
                                                                e +
                                                                ", setting to default value of Europe/London"
                                                        ),
                                                        "Europe/London"
                                                    );
                                                })(),
                                                toolbar_bg: r.bgColor,
                                                overrides: {
                                                    "paneProperties.background":
                                                        r.bgColor,
                                                    "paneProperties.horzGridProperties.color":
                                                        r.axisLineColor,
                                                    "paneProperties.vertGridProperties.color":
                                                        r.axisLineColor,
                                                    "scalesProperties.lineColor":
                                                        r.axisLineColor,
                                                    "scalesProperties.textColor":
                                                        r.textColor
                                                },
                                                theme: e.theme,
                                                custom_css_url:
                                                    "custom-css.css",
                                                enabled_features: [
                                                    "study_templates"
                                                ],
                                                disabled_features: [
                                                    "use_localstorage_for_settings",
                                                    "header_saveload",
                                                    "symbol_info",
                                                    "symbol_search_hot_key",
                                                    "border_around_the_chart",
                                                    "header_symbol_search",
                                                    "header_compare"
                                                ],
                                                debug: !1,
                                                preset: this.props.mobile
                                                    ? "mobile"
                                                    : ""
                                            })),
                                            this.tvWidget.onChartReady(
                                                function() {
                                                    a.update({
                                                        onMarketChange: t._setSymbol.bind(
                                                            t
                                                        )
                                                    });
                                                }
                                            )));
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    e.marketReady &&
                                        !this.props.dataFeed &&
                                        e.dataFeed &&
                                        loadTradingView(e);
                                }
                            },
                            {
                                key: "_setSymbol",
                                value: function(e) {
                                    this.tvWidget &&
                                        this.tvWidget.setSymbol(
                                            e,
                                            je([this.props.bucketSize])[0]
                                        );
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    this.loadTradingView(this.props);
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    this.props.dataFeed.clearSubs();
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        e.chartHeight !==
                                            this.props.chartHeight ||
                                        (!this.tvWidget && !!e.marketReady)
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return n.a.createElement(
                                        "div",
                                        {className: "small-12"},
                                        n.a.createElement("div", {
                                            className: "exchange-bordered",
                                            style: {
                                                marginTop: 10,
                                                marginBottom: 10,
                                                height:
                                                    this.props.chartHeight +
                                                    "px"
                                            },
                                            id: "tv_chart"
                                        })
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                We = a(210),
                He = a(135),
                Ve = a.n(He),
                Je = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var Qe = (function(e) {
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
                    })(t, n.a.Component),
                    Je(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                var t =
                                    !isNaN(e.feedPrice) &&
                                    e.feedPrice !== this.props.feedPrice;
                                return (
                                    Object(he.h)(e.orders, this.props.orders) ||
                                    Object(he.h)(
                                        e.call_orders,
                                        this.props.call_orders
                                    ) ||
                                    t ||
                                    e.feedPrice !== this.props.feedPrice ||
                                    e.height !== this.props.height ||
                                    e.leftOrderBook !==
                                        this.props.leftOrderBook ||
                                    e.LCP !== this.props.LCP ||
                                    e.showCallLimit !==
                                        this.props.showCallLimit ||
                                    e.hasPrediction !==
                                        this.props.hasPrediction ||
                                    e.feedPrice !== this.props.feedPrice ||
                                    e.marketReady !== this.props.marketReady
                                );
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.reflowChart(500);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.refs.depthChart &&
                                    e.verticalOrderbook !==
                                        this.props.verticalOrderbook &&
                                    this.reflowChart(100);
                            }
                        },
                        {
                            key: "componentWillUpdate",
                            value: function() {
                                this.props.centerRef &&
                                    (this.tempScroll = this.props.centerRef.scrollTop);
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                this.props.centerRef &&
                                    (this.props.centerRef.scrollTop = this.tempScroll);
                            }
                        },
                        {
                            key: "reflowChart",
                            value: function(e) {
                                var t = this;
                                setTimeout(function() {
                                    t.refs.depthChart &&
                                        t.refs.depthChart.chart.reflow();
                                }, e);
                            }
                        },
                        {
                            key: "_getThemeColors",
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props;
                                return Pe.a[e.theme];
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.flat_bids,
                                    a = e.flat_asks,
                                    r = e.flat_calls,
                                    o = e.flat_settles,
                                    s = e.totalBids,
                                    i = e.totalAsks,
                                    l = e.base,
                                    c = e.quote,
                                    u = e.feedPrice,
                                    p = this._getThemeColors(),
                                    h = p.primaryText,
                                    d = p.callColor,
                                    m = p.settleColor,
                                    f = p.settleFillColor,
                                    g = p.bidColor,
                                    b = p.bidFillColor,
                                    y = p.askColor,
                                    v = p.askFillColor,
                                    _ = p.axisLineColor,
                                    E = k.a.replaceName(l),
                                    C = E.name,
                                    x = E.prefix,
                                    S = k.a.replaceName(c),
                                    A = S.name,
                                    O = S.prefix;
                                (C = (x || "") + C), (A = (O || "") + A);
                                var P = Object(We.a)(t),
                                    T = Object(We.a)(a),
                                    I = Object(We.a)(r),
                                    B = Object(We.a)(o),
                                    M = {
                                        chart: {
                                            type: "area",
                                            backgroundColor:
                                                "rgba(255, 0, 0, 0)",
                                            spacing: [10, 0, 5, 0]
                                        },
                                        title: {text: null},
                                        credits: {enabled: !1},
                                        legend: {enabled: !1},
                                        rangeSelector: {enabled: !1},
                                        navigator: {enabled: !1},
                                        scrollbar: {enabled: !1},
                                        dataGrouping: {enabled: !1},
                                        tooltip: {
                                            shared: !1,
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.75)",
                                            useHTML: !0,
                                            formatter: function() {
                                                return (
                                                    "\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" +
                                                    Y.a.translate(
                                                        "exchange.price"
                                                    ) +
                                                    ':</td>\n\t\t\t\t\t\t\t<td style="text-align: right">' +
                                                    k.a.format_number(
                                                        this.x,
                                                        l.get("precision")
                                                    ) +
                                                    " " +
                                                    C +
                                                    "/" +
                                                    A +
                                                    "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" +
                                                    Y.a.translate(
                                                        "exchange.quantity"
                                                    ) +
                                                    ':</td>\n\t\t\t\t\t\t\t<td style="text-align: right">' +
                                                    k.a.format_number(
                                                        this.y,
                                                        c.get("precision")
                                                    ) +
                                                    " " +
                                                    A +
                                                    "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t"
                                                );
                                            },
                                            style: {color: "#FFFFFF"}
                                        },
                                        series: [],
                                        yAxis: {
                                            labels: {
                                                enabled: !0,
                                                style: {color: h},
                                                formatter: function() {
                                                    return k.a.format_number(
                                                        this.value,
                                                        c.get("precision")
                                                    );
                                                }
                                            },
                                            opposite: !1,
                                            title: {
                                                text: null,
                                                style: {color: "#FFFFFF"}
                                            },
                                            gridLineWidth: 1,
                                            gridLineColor:
                                                "rgba(196, 196, 196, 0.30)",
                                            gridZIndex: 1,
                                            crosshair: {snap: !1},
                                            currentPriceIndicator: {enabled: !1}
                                        },
                                        xAxis: {
                                            labels: {style: {color: h}},
                                            ordinal: !1,
                                            lineColor: "#000000",
                                            title: {text: null},
                                            plotLines: []
                                        },
                                        plotOptions: {
                                            area: {
                                                animation: !1,
                                                marker: {enabled: !1},
                                                series: {
                                                    enableMouseTracking: !1
                                                }
                                            }
                                        }
                                    };
                                if (P.length > 0 && T.length > 0) {
                                    var F = (T[0][0] + P[P.length - 1][0]) / 2;
                                    (M.xAxis.min = 0.4 * F),
                                        (M.xAxis.max = 1.6 * F),
                                        M.xAxis.max < T[0][0] &&
                                            (M.xAxis.max = 1.5 * T[0][0]),
                                        M.xAxis.min > P[P.length - 1][0] &&
                                            (M.xAxis.min =
                                                0.5 * P[P.length - 1][0]);
                                    var q = 0;
                                    P.forEach(function(e) {
                                        e[0] >= M.xAxis.min &&
                                            (q = Math.max(e[1], q));
                                    }),
                                        T.forEach(function(e) {
                                            e[0] <= M.xAxis.max &&
                                                (q = Math.max(e[1], q));
                                        }),
                                        (M.yAxis.max = 1.15 * q);
                                    var j = q > 10 ? 0 : q > 1 ? 2 : 5;
                                    M.yAxis.labels.formatter = function() {
                                        return k.a.format_number(this.value, j);
                                    };
                                } else
                                    P.length && !T.length
                                        ? ((M.xAxis.min =
                                              0.4 * P[P.length - 1][0]),
                                          (M.xAxis.max =
                                              1.6 * P[P.length - 1][0]))
                                        : T.length &&
                                          !P.length &&
                                          ((M.xAxis.min = 0),
                                          (M.xAxis.max = 2 * T[0][0]));
                                if (
                                    (this.props.hasPrediction &&
                                        ((M.xAxis.min = -0.05),
                                        (M.xAxis.max = 1.05)),
                                    this.props.LCP &&
                                        M.xAxis.plotLines.push({
                                            color: _,
                                            id: "plot_line",
                                            dashStyle: "longdash",
                                            value: this.props.LCP,
                                            label: {
                                                text: Y.a.translate(
                                                    "explorer.block.call_limit"
                                                ),
                                                style: {
                                                    color: h,
                                                    fontWeight: "bold"
                                                }
                                            },
                                            width: 2,
                                            zIndex: 5
                                        }),
                                    u)
                                ) {
                                    var R = l.has("bitasset") ? y : g;
                                    M.xAxis.plotLines.push({
                                        color: R,
                                        id: "plot_line",
                                        dashStyle: "solid",
                                        value: u,
                                        label: {
                                            text: Y.a.translate(
                                                "explorer.block.feed_price"
                                            ),
                                            style: {
                                                color: h,
                                                fontWeight: "bold"
                                            }
                                        },
                                        width: 2,
                                        zIndex: 5
                                    }),
                                        I &&
                                            I.length &&
                                            M.series.push({
                                                name: "Call " + A,
                                                data: I,
                                                color: d
                                            });
                                }
                                return (
                                    u &&
                                        B &&
                                        B.length &&
                                        M.series.push({
                                            name: "Settle " + A,
                                            data: B,
                                            color: m,
                                            fillColor: f
                                        }),
                                    P.length &&
                                        M.series.push({
                                            step: "right",
                                            name: "Bid " + A,
                                            data: P,
                                            color: g,
                                            fillColor: b
                                        }),
                                    T.length &&
                                        M.series.push({
                                            step: "left",
                                            name: "Ask " + A,
                                            data: T,
                                            color: y,
                                            fillColor: v
                                        }),
                                    this.props.height
                                        ? (M.chart.height = this.props.height)
                                        : (M.chart.height = "400px"),
                                    this.props.onClick &&
                                        (M.chart.events = {
                                            click: this.props.onClick.bind(this)
                                        }),
                                    this.props.noFrame
                                        ? n.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content no-overflow no-padding"
                                              },
                                              P.length || T.length || I.length
                                                  ? null
                                                  : n.a.createElement(
                                                        "span",
                                                        {className: "no-data"},
                                                        n.a.createElement(w.a, {
                                                            content:
                                                                "exchange.no_data"
                                                        })
                                                    ),
                                              this.props.noText
                                                  ? null
                                                  : n.a.createElement(
                                                        "p",
                                                        {
                                                            className:
                                                                "bid-total"
                                                        },
                                                        k.a.format_number(
                                                            s,
                                                            l.get("precision")
                                                        ),
                                                        " ",
                                                        C
                                                    ),
                                              this.props.noText
                                                  ? null
                                                  : n.a.createElement(
                                                        "p",
                                                        {
                                                            className:
                                                                "ask-total"
                                                        },
                                                        k.a.format_number(
                                                            i,
                                                            c.get("precision")
                                                        ),
                                                        " ",
                                                        A
                                                    ),
                                              P || T || I
                                                  ? n.a.createElement(Ve.a, {
                                                        config: M
                                                    })
                                                  : null
                                          )
                                        : n.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content no-overflow no-padding middle-content"
                                              },
                                              n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "exchange-bordered",
                                                      style: {margin: 10}
                                                  },
                                                  n.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "exchange-content-header"
                                                      },
                                                      this.props.noText
                                                          ? null
                                                          : n.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "bid-total"
                                                                },
                                                                k.a.format_number(
                                                                    s,
                                                                    l.get(
                                                                        "precision"
                                                                    )
                                                                ),
                                                                " ",
                                                                n.a.createElement(
                                                                    N.a,
                                                                    {
                                                                        name: l.get(
                                                                            "symbol"
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                      this.props.noText
                                                          ? null
                                                          : n.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "ask-total float-right"
                                                                },
                                                                k.a.format_number(
                                                                    i,
                                                                    c.get(
                                                                        "precision"
                                                                    )
                                                                ),
                                                                " ",
                                                                n.a.createElement(
                                                                    N.a,
                                                                    {
                                                                        name: c.get(
                                                                            "symbol"
                                                                        )
                                                                    }
                                                                )
                                                            )
                                                  ),
                                                  P.length ||
                                                  T.length ||
                                                  I.length
                                                      ? null
                                                      : n.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "no-data"
                                                            },
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.no_data"
                                                                }
                                                            )
                                                        ),
                                                  P || T || I
                                                      ? n.a.createElement(
                                                            Ve.a,
                                                            {
                                                                ref:
                                                                    "depthChart",
                                                                config: M
                                                            }
                                                        )
                                                      : null
                                              )
                                          )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Qe.defaultProps = {
                flat_bids: [],
                flat_asks: [],
                orders: {},
                noText: !1,
                noFrame: !0
            }),
                (Qe.propTypes = {
                    flat_bids: g.a.array.isRequired,
                    flat_asks: g.a.array.isRequired,
                    orders: g.a.object.isRequired
                });
            var Ye = Qe,
                Ge = a(231),
                Ke = a(28),
                Xe = a(575),
                Ze = a.n(Xe),
                $e = a(20),
                et = a.n($e),
                tt = a(152),
                at = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var rt = J.c.operations,
                nt = Object.keys(rt),
                ot = (function(e) {
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
                        })(t, n.a.Component),
                        at(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    if (
                                        e.account &&
                                        e.account.size &&
                                        this.props.account &&
                                        this.props.account.get("history")
                                    ) {
                                        var t =
                                                this.props.account.get(
                                                    "history"
                                                ) &&
                                                this.props.account
                                                    .get("history")
                                                    .first()
                                                    ? this.props.account
                                                          .get("history")
                                                          .first()
                                                          .toJS()
                                                    : null,
                                            a =
                                                e.account.get("history") &&
                                                e.account.get("history").first()
                                                    ? e.account
                                                          .get("history")
                                                          .first()
                                                          .toJS()
                                                    : null;
                                        a &&
                                            t &&
                                            "fill_order" === nt[a.op[0]] &&
                                            ((!t && a.id) || a.id !== t.id) &&
                                            (et.a.publish(
                                                "account-notify",
                                                "open"
                                            ),
                                            setTimeout(function() {
                                                et.a.publish(
                                                    "account-notify",
                                                    "close"
                                                );
                                            }, 5e3));
                                    }
                                }
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        !(!e.account || !this.props.account) &&
                                        (!W.a.is(
                                            e.account.get("history"),
                                            this.props.account.get("history")
                                        ) ||
                                            !W.a.is(
                                                e.account,
                                                this.props.account
                                            ))
                                    );
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.account;
                                    if (!e)
                                        return n.a.createElement("div", null);
                                    var t = void 0,
                                        a = void 0;
                                    return (
                                        this.props.account.get("history") &&
                                            this.props.account.get("history")
                                                .size &&
                                            (t = this.props.account
                                                .get("history")
                                                .first()
                                                .toJS()) &&
                                            (a = n.a.createElement(tt.a, {
                                                key: t.id,
                                                op: t.op,
                                                result: t.result,
                                                block: t.block_num,
                                                current: e.get("id"),
                                                hideDate: !0,
                                                hideFee: !0
                                            })),
                                        t
                                            ? n.a.createElement(
                                                  Ze.a.Static,
                                                  {
                                                      id: "account-notify",
                                                      title: null,
                                                      image: "",
                                                      wrapperElement: "div"
                                                  },
                                                  n.a.createElement(
                                                      "table",
                                                      {className: "table"},
                                                      n.a.createElement(
                                                          "tbody",
                                                          null,
                                                          a
                                                      )
                                                  )
                                              )
                                            : n.a.createElement("div", null)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            ot.propTypes = {account: le.a.ChainAccount.isRequired};
            var st = (ot = Object(ce.a)(ot)),
                it = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var lt = (function(e) {
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
                        })(t, n.a.Component),
                        it(t, [
                            {
                                key: "render",
                                value: function() {
                                    return n.a.createElement(
                                        d.a,
                                        {
                                            stores: [s.a],
                                            inject: {
                                                account: function() {
                                                    return s.a.getState()
                                                        .currentAccount;
                                                }
                                            }
                                        },
                                        n.a.createElement(st, null)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ct = a(34),
                ut = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var pt = (function(e) {
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
                        })(t, n.a.Component),
                        ut(t, [
                            {
                                key: "show",
                                value: function() {
                                    var e = "modal_confirm_" + this.props.type;
                                    et.a.publish(e, "open");
                                }
                            },
                            {
                                key: "_onForce",
                                value: function(e, t) {
                                    var a = "modal_confirm_" + this.props.type;
                                    t.preventDefault(),
                                        et.a.publish(a, "close"),
                                        e && this.props.onForce();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.type,
                                        a = e.diff,
                                        r = e.hasOrders;
                                    return n.a.createElement(
                                        ct.a,
                                        {id: "modal_confirm_" + t, overlay: !0},
                                        n.a.createElement(w.a, {
                                            component: "h3",
                                            content: "transaction.confirm"
                                        }),
                                        n.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            r
                                                ? n.a.createElement(w.a, {
                                                      content:
                                                          "exchange.confirm_" +
                                                          t,
                                                      diff: k.a.format_number(
                                                          a,
                                                          2
                                                      )
                                                  })
                                                : n.a.createElement(w.a, {
                                                      content:
                                                          "exchange.confirm_no_orders_" +
                                                          t
                                                  }),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className: "button-group",
                                                    style: {paddingTop: "2rem"}
                                                },
                                                n.a.createElement("input", {
                                                    onClick: this._onForce.bind(
                                                        this,
                                                        !0
                                                    ),
                                                    className: "button success",
                                                    type: "submit",
                                                    value: "Yes"
                                                }),
                                                n.a.createElement("input", {
                                                    onClick: this._onForce.bind(
                                                        this,
                                                        !1
                                                    ),
                                                    className: "button info",
                                                    type: "submit",
                                                    value: "No"
                                                })
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ht = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var dt = (function(e) {
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
                                change: null,
                                curMarket: null,
                                marketChange: !1
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
                        })(t, n.a.Component),
                        ht(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        !(
                                            !e.volume2 ||
                                            e.volume2 === this.props.volume2
                                        ) ||
                                        (e.price !== this.props.price ||
                                            e.ready !== this.props.ready)
                                    );
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    var t = {change: 0},
                                        a = e.market,
                                        r = this.state.curMarket !== a,
                                        n = null != this.state.curMarket && r;
                                    (t.marketChange = n),
                                        (t.curMarket = a),
                                        (t.prevAsset = this.state.marketAsset),
                                        e.ready &&
                                            this.props.ready &&
                                            (t.change =
                                                parseFloat(e.price) -
                                                parseFloat(this.props.price)),
                                        this.setState(t);
                                }
                            },
                            {
                                key: "componentDidUpdate",
                                value: function() {
                                    B.a.rebuild();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.base,
                                        a = e.quote,
                                        r = e.price,
                                        o = e.content,
                                        s = e.ready,
                                        i = e.volume,
                                        l = e.toolTip,
                                        c = e.ignoreColorChange,
                                        u = this.state,
                                        p = u.change,
                                        h = null;
                                    !u.marketChange &&
                                        p &&
                                        null !== p &&
                                        !0 !== c &&
                                        (h =
                                            p > 0
                                                ? "pulsate green"
                                                : "pulsate red");
                                    var d = i
                                        ? k.a.format_volume(r)
                                        : k.a.price_text(r, a, t);
                                    return n.a.createElement(
                                        "li",
                                        {
                                            className: S()(
                                                "stressed-stat",
                                                this.props.className,
                                                h
                                            ),
                                            onClick: this.props.onClick,
                                            "data-place": "bottom",
                                            "data-tip": l
                                        },
                                        n.a.createElement(
                                            "span",
                                            null,
                                            n.a.createElement(
                                                "span",
                                                {
                                                    className:
                                                        "value stat-primary"
                                                },
                                                s ? d : 0,
                                                " "
                                            ),
                                            n.a.createElement(
                                                "span",
                                                {className: "symbol-text"},
                                                n.a.createElement(N.a, {
                                                    name: t.get("symbol")
                                                })
                                            )
                                        ),
                                        o
                                            ? n.a.createElement(
                                                  "div",
                                                  {className: "stat-text"},
                                                  n.a.createElement(w.a, {
                                                      content: o
                                                  })
                                              )
                                            : null
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                mt =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var r in a)
                                Object.prototype.hasOwnProperty.call(a, r) &&
                                    (e[r] = a[r]);
                        }
                        return e;
                    },
                ft = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            function gt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function bt(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function yt(e, t) {
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
            var vt = (function(e) {
                function t() {
                    return (
                        gt(this, t),
                        bt(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    yt(t, n.a.Component),
                    ft(t, [
                        {
                            key: "_getFeedPrice",
                            value: function() {
                                return this.props
                                    ? 1 /
                                          k.a.get_asset_price(
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
                                    k.a.get_asset_amount(
                                        e.collateral,
                                        this.props.collateralAsset
                                    ) /
                                    (k.a.get_asset_amount(
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
                                        ? Y.a.translate("tooltip.cr_danger", {
                                              mr: t
                                          })
                                        : "warning" === e
                                            ? Y.a.translate(
                                                  "tooltip.cr_warning",
                                                  {mr: t}
                                              )
                                            : null
                                    : null;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.object.toJS(),
                                    t = this._getCollateralRatio(),
                                    a = (k.a.get_asset_amount(
                                        e.debt,
                                        this.props.debtAsset
                                    ),
                                    this._getStatusClass());
                                return n.a.createElement(
                                    "li",
                                    {
                                        className: S()(
                                            "stressed-stat",
                                            this.props.className
                                        ),
                                        onClick: this.props.onClick,
                                        "data-place": "bottom",
                                        "data-tip": this._getCRTip()
                                    },
                                    n.a.createElement(
                                        "span",
                                        null,
                                        n.a.createElement(
                                            "span",
                                            {
                                                className: S()(
                                                    "value stat-primary",
                                                    a
                                                )
                                            },
                                            k.a.format_number(t, 2)
                                        )
                                    ),
                                    n.a.createElement(
                                        "div",
                                        {className: "stat-text"},
                                        n.a.createElement(w.a, {
                                            content: "header.collateral_ratio"
                                        })
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (vt.propTypes = {
                debtAsset: le.a.ChainAsset.isRequired,
                collateralAsset: le.a.ChainAsset.isRequired
            }),
                (vt = Object(ce.a)(vt));
            var _t = (function(e) {
                function t() {
                    return (
                        gt(this, t),
                        bt(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    yt(t, n.a.Component),
                    ft(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.object,
                                    a = e.account,
                                    r = t.getIn([
                                        "call_price",
                                        "quote",
                                        "asset_id"
                                    ]),
                                    o = t.getIn([
                                        "call_price",
                                        "base",
                                        "asset_id"
                                    ]);
                                return n.a.createElement(
                                    vt,
                                    mt(
                                        {
                                            debtAsset: r,
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
            _t.propTypes = {object: le.a.ChainObject.isRequired};
            var kt = (_t = Object(ce.a)(_t)),
                Et = a(101),
                wt = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            var Ct = (function(e) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (a.state = {
                                volumeShowQuote: !0,
                                chartHeight: e.chartHeight
                            }),
                            (a.setChartHeight = a.setChartHeight.bind(a)),
                            a
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
                        })(t, n.a.Component),
                        wt(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return !!e.marketReady;
                                }
                            },
                            {
                                key: "_addMarket",
                                value: function(e, t) {
                                    var a = e + "_" + t;
                                    this.props.starredMarkets.has(a)
                                        ? C.a.removeStarMarket(e, t)
                                        : C.a.addStarMarket(e, t);
                                }
                            },
                            {
                                key: "changeVolumeBase",
                                value: function() {
                                    this.setState({
                                        volumeShowQuote: !this.state
                                            .volumeShowQuote
                                    });
                                }
                            },
                            {
                                key: "marketPicker",
                                value: function(e) {
                                    var t = this.state
                                        .selectedMarketPickerAsset;
                                    (t = t && t == e ? null : e),
                                        this.setState({
                                            selectedMarketPickerAsset: t
                                        }),
                                        this.props.onToggleMarketPicker(t);
                                }
                            },
                            {
                                key: "setChartHeight",
                                value: function() {
                                    this.props.onChangeChartHeight({
                                        value: this.state.chartHeight
                                    });
                                }
                            },
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = this;
                                    document.delayedExecution.add(
                                        "ExchangeHeader_updateMargin",
                                        function() {
                                            e.updateMargin();
                                        },
                                        100
                                    );
                                }
                            },
                            {
                                key: "updateMargin",
                                value: function() {
                                    function e(e) {
                                        var t = 0,
                                            a = document.getElementsByClassName(
                                                e
                                            );
                                        for (var r in a) {
                                            var n = a[r].offsetWidth;
                                            n > t && (t = n);
                                        }
                                        return t;
                                    }
                                    var t = [
                                            "vertical-table-cell-one",
                                            "vertical-table-cell-two",
                                            "vertical-table-cell-three"
                                        ],
                                        a = 0;
                                    for (var r in t) a += e(t[r]);
                                    if (a > 0)
                                        try {
                                            document.getElementsByClassName(
                                                "container-menu-header"
                                            )[0].style.marginLeft = a + "px";
                                        } catch (e) {}
                                    try {
                                        var n = "exchange_header_style",
                                            o =
                                                "@media only screen and (min-width: 1280px) { body.localcoin .exchange-layout .grid-block.shrink.no-padding.overflow-visible.top-bar.left-cell-active { width: calc(100% - " +
                                                (a + e("right-column")) +
                                                "px); }}";
                                        if (document.getElementById(n)) {
                                            document.getElementById(
                                                n
                                            ).innerHTML = o;
                                        } else {
                                            var s = document.createElement(
                                                "style"
                                            );
                                            (s.id = n),
                                                (s.innerHTML = o),
                                                document
                                                    .getElementsByTagName(
                                                        "head"
                                                    )[0]
                                                    .appendChild(s);
                                        }
                                    } catch (e) {}
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        r = t.quoteAsset,
                                        o = t.baseAsset,
                                        s = t.starredMarkets,
                                        i = t.hasPrediction,
                                        l = t.feedPrice,
                                        c = t.showCallLimit,
                                        u = t.lowestCallPrice,
                                        p = t.marketReady,
                                        h = t.latestPrice,
                                        d = t.marketStats,
                                        m = t.showDepthChart,
                                        f = t.account,
                                        g = o.get("symbol"),
                                        y = r.get("symbol"),
                                        v = y + "_" + g,
                                        _ = s.has(v)
                                            ? "gold-star"
                                            : "grey-star",
                                        k = d.get("change"),
                                        E =
                                            0 === parseFloat(k)
                                                ? ""
                                                : parseFloat(k) < 0
                                                    ? "negative"
                                                    : "positive",
                                        C = d.get("volumeBase"),
                                        x = d.get("volumeQuote"),
                                        S = k > 0 ? "+" + k : k,
                                        A = this.state.volumeShowQuote ? x : C,
                                        O = this.state.volumeShowQuote ? r : o,
                                        P = !1,
                                        I = r.get("id"),
                                        B = o.get("id"),
                                        M =
                                            "1.3.0" === I
                                                ? B
                                                : "1.3.0" === B
                                                    ? I
                                                    : null,
                                        F = M ? J.b.getAsset(M) : null,
                                        q = "",
                                        j = null;
                                    if (!!F && !!F.get("bitasset")) {
                                        if (f.toJS && f.has("call_orders"))
                                            for (
                                                var R = f
                                                        .get("call_orders")
                                                        .toJS(),
                                                    L = 0;
                                                L < R.length;
                                                L++
                                            ) {
                                                var D = R[L];
                                                if (
                                                    J.b
                                                        .getObject(D)
                                                        .getIn([
                                                            "call_price",
                                                            "quote",
                                                            "asset_id"
                                                        ]) === M
                                                ) {
                                                    (q = D), (P = !0);
                                                    break;
                                                }
                                            }
                                        var z =
                                            "1.3.0" == o.get("id")
                                                ? r
                                                : "1.3.0" == r.get("id")
                                                    ? o
                                                    : null;
                                        if (z && l) {
                                            var U = z
                                                .getIn(["bitasset", "options"])
                                                .toJS()
                                                .force_settlement_offset_percent;
                                            j =
                                                "1.3.0" == o.get("id")
                                                    ? l.toReal() / (1 + U / 1e4)
                                                    : l.toReal() *
                                                      (1 + U / 1e4);
                                        }
                                    }
                                    var W = a(3),
                                        H =
                                            !!this.state
                                                .selectedMarketPickerAsset &&
                                            this.state
                                                .selectedMarketPickerAsset == y,
                                        V =
                                            !!this.state
                                                .selectedMarketPickerAsset &&
                                            this.state
                                                .selectedMarketPickerAsset == g,
                                        Q = [
                                            {
                                                key: "depth_chart",
                                                label: Y.a.translate(
                                                    "exchange.order_depth"
                                                )
                                            },
                                            {
                                                key: "price_chart",
                                                label: Y.a.translate(
                                                    "exchange.price_history"
                                                )
                                            }
                                        ];
                                    return n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-block shrink no-padding overflow-visible top-bar container-menu-header"
                                        },
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block overflow-visible"
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block shrink"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {style: {padding: "10px"}},
                                                    i
                                                        ? n.a.createElement(
                                                              "a",
                                                              {
                                                                  className:
                                                                      "market-symbol"
                                                              },
                                                              n.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  y + " : " + g
                                                              )
                                                          )
                                                        : n.a.createElement(
                                                              "div",
                                                              {
                                                                  style: {
                                                                      padding:
                                                                          "0 5px",
                                                                      fontSize:
                                                                          "18px",
                                                                      marginTop:
                                                                          "1px"
                                                                  }
                                                              },
                                                              n.a.createElement(
                                                                  "span",
                                                                  {
                                                                      onClick: this.marketPicker.bind(
                                                                          this,
                                                                          y
                                                                      ),
                                                                      style: {
                                                                          cursor:
                                                                              "pointer",
                                                                          color: H
                                                                              ? "#2196f3"
                                                                              : ""
                                                                      }
                                                                  },
                                                                  n.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          name: y,
                                                                          replace: !0,
                                                                          noTip: !0
                                                                      }
                                                                  )
                                                              ),
                                                              n.a.createElement(
                                                                  "span",
                                                                  {
                                                                      style: {
                                                                          padding:
                                                                              "0 5px"
                                                                      }
                                                                  },
                                                                  "/"
                                                              ),
                                                              n.a.createElement(
                                                                  "span",
                                                                  {
                                                                      onClick: this.marketPicker.bind(
                                                                          this,
                                                                          g
                                                                      ),
                                                                      style: {
                                                                          cursor:
                                                                              "pointer",
                                                                          color: V
                                                                              ? "#2196f3"
                                                                              : ""
                                                                      }
                                                                  },
                                                                  n.a.createElement(
                                                                      N.a,
                                                                      {
                                                                          name: g,
                                                                          replace: !0,
                                                                          noTip: !0
                                                                      }
                                                                  )
                                                              ),
                                                              n.a.createElement(
                                                                  we.b,
                                                                  {
                                                                      onClick: function() {
                                                                          b.a.switchMarket();
                                                                      },
                                                                      to:
                                                                          "/market/" +
                                                                          g +
                                                                          "_" +
                                                                          y,
                                                                      "data-intro": W.translate(
                                                                          "walkthrough.switch_button"
                                                                      )
                                                                  },
                                                                  n.a.createElement(
                                                                      T.a,
                                                                      {
                                                                          className:
                                                                              "shuffle",
                                                                          name:
                                                                              "shuffle",
                                                                          title:
                                                                              "icons.shuffle"
                                                                      }
                                                                  )
                                                              ),
                                                              n.a.createElement(
                                                                  we.b,
                                                                  {
                                                                      onClick: function() {
                                                                          e._addMarket(
                                                                              e.props.quoteAsset.get(
                                                                                  "symbol"
                                                                              ),
                                                                              e.props.baseAsset.get(
                                                                                  "symbol"
                                                                              )
                                                                          );
                                                                      },
                                                                      "data-intro": W.translate(
                                                                          "walkthrough.favourite_button"
                                                                      )
                                                                  },
                                                                  n.a.createElement(
                                                                      T.a,
                                                                      {
                                                                          className: _,
                                                                          name:
                                                                              "fi-star",
                                                                          title:
                                                                              "icons.fi_star.market"
                                                                      }
                                                                  )
                                                              )
                                                          ),
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "label-actions"
                                                        },
                                                        n.a.createElement(w.a, {
                                                            component: "span",
                                                            style: {
                                                                padding:
                                                                    "5px 0 0 5px"
                                                            },
                                                            className:
                                                                "stat-text",
                                                            content:
                                                                "exchange.trading_pair"
                                                        })
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical",
                                                    style: {overflow: "visible"}
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block wrap market-stats-container"
                                                    },
                                                    n.a.createElement(
                                                        "ul",
                                                        {
                                                            className:
                                                                "market-stats stats top-stats"
                                                        },
                                                        h
                                                            ? n.a.createElement(
                                                                  dt,
                                                                  {
                                                                      ignoreColorChange: !0,
                                                                      ready: p,
                                                                      price:
                                                                          h.full,
                                                                      quote: r,
                                                                      base: o,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.latest"
                                                                  }
                                                              )
                                                            : null,
                                                        n.a.createElement(
                                                            "li",
                                                            {
                                                                className:
                                                                    "hide-order-1 stressed-stat daily_change " +
                                                                    E
                                                            },
                                                            n.a.createElement(
                                                                "span",
                                                                null,
                                                                n.a.createElement(
                                                                    "b",
                                                                    {
                                                                        className:
                                                                            "value"
                                                                    },
                                                                    p ? S : 0
                                                                ),
                                                                n.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    " %"
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    component:
                                                                        "div",
                                                                    className:
                                                                        "stat-text",
                                                                    content:
                                                                        "account.hour_24"
                                                                }
                                                            )
                                                        ),
                                                        C >= 0
                                                            ? n.a.createElement(
                                                                  dt,
                                                                  {
                                                                      ignoreColorChange: !0,
                                                                      onClick: this.changeVolumeBase.bind(
                                                                          this
                                                                      ),
                                                                      ready: p,
                                                                      decimals: 0,
                                                                      volume: !0,
                                                                      price: A,
                                                                      className:
                                                                          "hide-order-2 clickable",
                                                                      base: O,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.volume_24"
                                                                  }
                                                              )
                                                            : null,
                                                        !i && l
                                                            ? n.a.createElement(
                                                                  dt,
                                                                  {
                                                                      ignoreColorChange: !0,
                                                                      toolTip: Y.a.translate(
                                                                          "tooltip.feed_price"
                                                                      ),
                                                                      ready: p,
                                                                      className:
                                                                          "hide-order-3",
                                                                      price: l.toReal(),
                                                                      quote: r,
                                                                      base: o,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.feed_price"
                                                                  }
                                                              )
                                                            : null,
                                                        !i && l
                                                            ? n.a.createElement(
                                                                  dt,
                                                                  {
                                                                      ignoreColorChange: !0,
                                                                      toolTip: Y.a.translate(
                                                                          "tooltip.settle_price"
                                                                      ),
                                                                      ready: p,
                                                                      className:
                                                                          "hide-order-4",
                                                                      price: j,
                                                                      quote: r,
                                                                      base: o,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.settle"
                                                                  }
                                                              )
                                                            : null,
                                                        P
                                                            ? n.a.createElement(
                                                                  kt,
                                                                  {
                                                                      object: q,
                                                                      account: f
                                                                  }
                                                              )
                                                            : null,
                                                        u && c
                                                            ? n.a.createElement(
                                                                  dt,
                                                                  {
                                                                      toolTip: Y.a.translate(
                                                                          "tooltip.call_limit"
                                                                      ),
                                                                      ready: p,
                                                                      className:
                                                                          "hide-order-5 is-call",
                                                                      price: u,
                                                                      quote: r,
                                                                      base: o,
                                                                      market: v,
                                                                      content:
                                                                          "explorer.block.call_limit"
                                                                  }
                                                              )
                                                            : null,
                                                        l && c
                                                            ? n.a.createElement(
                                                                  dt,
                                                                  {
                                                                      toolTip: Y.a.translate(
                                                                          "tooltip.margin_price"
                                                                      ),
                                                                      ready: p,
                                                                      className:
                                                                          "hide-order-6 is-call",
                                                                      price: l.getSqueezePrice(
                                                                          {
                                                                              real: !0
                                                                          }
                                                                      ),
                                                                      quote: r,
                                                                      base: o,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.squeeze"
                                                                  }
                                                              )
                                                            : null
                                                    ),
                                                    n.a.createElement(
                                                        "ul",
                                                        {
                                                            className:
                                                                "market-stats stats top-stats"
                                                        },
                                                        n.a.createElement(
                                                            "li",
                                                            {
                                                                className:
                                                                    "stressed-stat input clickable",
                                                                style: {
                                                                    padding:
                                                                        "16px"
                                                                },
                                                                onClick: function() {
                                                                    et.a.publish(
                                                                        "chart_options",
                                                                        "open"
                                                                    );
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.chart_modal"
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            ct.a,
                                            {
                                                id: "chart_options",
                                                overlay: !0,
                                                modalHeader:
                                                    "exchange.chart_modal",
                                                noLogo: !0
                                            },
                                            n.a.createElement(
                                                "section",
                                                {
                                                    className:
                                                        "block-list no-border-bottom"
                                                },
                                                n.a.createElement(
                                                    "header",
                                                    null,
                                                    n.a.createElement(w.a, {
                                                        content:
                                                            "exchange.chart_type"
                                                    }),
                                                    ":"
                                                ),
                                                n.a.createElement(
                                                    "ul",
                                                    null,
                                                    n.a.createElement(
                                                        "li",
                                                        {
                                                            className:
                                                                "with-dropdown"
                                                        },
                                                        n.a.createElement(
                                                            Et.a,
                                                            {
                                                                options: Q,
                                                                selected: Q.find(
                                                                    function(
                                                                        e
                                                                    ) {
                                                                        return (
                                                                            e.key ===
                                                                            (m
                                                                                ? "depth_chart"
                                                                                : "price_chart")
                                                                        );
                                                                    }
                                                                ),
                                                                onChange: function(
                                                                    t
                                                                ) {
                                                                    e.props.onToggleCharts();
                                                                }
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                "section",
                                                {
                                                    className:
                                                        "block-list no-border-bottom"
                                                },
                                                n.a.createElement(
                                                    "header",
                                                    null,
                                                    n.a.createElement(w.a, {
                                                        content:
                                                            "exchange.chart_height"
                                                    }),
                                                    ":"
                                                ),
                                                n.a.createElement(
                                                    "label",
                                                    null,
                                                    n.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "inline-label"
                                                        },
                                                        n.a.createElement(
                                                            "input",
                                                            {
                                                                onKeyDown: function(
                                                                    t
                                                                ) {
                                                                    13 ===
                                                                        t.keyCode &&
                                                                        e.setChartHeight();
                                                                },
                                                                type: "number",
                                                                value: this
                                                                    .state
                                                                    .chartHeight,
                                                                onChange: function(
                                                                    t
                                                                ) {
                                                                    return e.setState(
                                                                        {
                                                                            chartHeight:
                                                                                t
                                                                                    .target
                                                                                    .value
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        ),
                                                        n.a.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "btn large inverted no-margin",
                                                                onClick: this
                                                                    .setChartHeight
                                                            },
                                                            "Set"
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
                })(),
                xt = a(21),
                St = a(36),
                At = a(295),
                Ot = a.n(At),
                Nt = a(363),
                Pt = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var a = [],
                                    r = !0,
                                    n = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var s, i = e[Symbol.iterator]();
                                        !(r = (s = i.next()).done) &&
                                        (a.push(s.value), !t || a.length !== t);
                                        r = !0
                                    );
                                } catch (e) {
                                    (n = !0), (o = e);
                                } finally {
                                    try {
                                        !r && i.return && i.return();
                                    } finally {
                                        if (n) throw o;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                Tt =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var r in a)
                                Object.prototype.hasOwnProperty.call(a, r) &&
                                    (e[r] = a[r]);
                        }
                        return e;
                    },
                It = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            function Bt(e, t, a) {
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
            var Mt = (function(e) {
                function t(e) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        document.querySelector("#content > div") &&
                            document
                                .querySelector("#content > div")
                                .classList.add("exchange-layout");
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.EXPIRATIONS = {
                            HOUR: {
                                title: "1 hour",
                                get: function() {
                                    return ye()()
                                        .add(1, "hour")
                                        .valueOf();
                                }
                            },
                            "12HOURS": {
                                title: "12 hours",
                                get: function() {
                                    return ye()()
                                        .add(12, "hour")
                                        .valueOf();
                                }
                            },
                            "24HOURS": {
                                title: "24 hours",
                                get: function() {
                                    return ye()()
                                        .add(1, "day")
                                        .valueOf();
                                }
                            },
                            "7DAYS": {
                                title: "7 days",
                                get: function() {
                                    return ye()()
                                        .add(7, "day")
                                        .valueOf();
                                }
                            },
                            MONTH: {
                                title: "30 days",
                                get: function() {
                                    return ye()()
                                        .add(30, "day")
                                        .valueOf();
                                }
                            },
                            YEAR: {
                                title: "1 year",
                                get: function() {
                                    return ye()()
                                        .add(1, "year")
                                        .valueOf();
                                }
                            },
                            SPECIFIC: {
                                title: "Specific",
                                get: function(e) {
                                    return a.state.expirationCustomTime[
                                        e
                                    ].valueOf();
                                }
                            }
                        }),
                        (a.state = Tt({}, a._initialState(e), {
                            expirationType: {
                                bid:
                                    e.exchange.getIn([
                                        "lastExpiration",
                                        "bid"
                                    ]) || "YEAR",
                                ask:
                                    e.exchange.getIn([
                                        "lastExpiration",
                                        "ask"
                                    ]) || "YEAR"
                            },
                            expirationCustomTime: {
                                bid: ye()().add(1, "day"),
                                ask: ye()().add(1, "day")
                            },
                            isBridgeModalVisible: !1
                        })),
                        (a._getWindowSize = Object(m.a)(
                            a._getWindowSize.bind(a),
                            150
                        )),
                        (a._checkFeeStatus = a._checkFeeStatus.bind(a)),
                        (a._handleExpirationChange = a._handleExpirationChange.bind(
                            a
                        )),
                        (a._handleCustomExpirationChange = a._handleCustomExpirationChange.bind(
                            a
                        )),
                        (a.onShowModal = a.onShowModal.bind(a)),
                        (a.psInit = !0),
                        a
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
                    })(t, n.a.Component),
                    It(t, [
                        {
                            key: "onShowModal",
                            value: function() {
                                var e = this;
                                this.setState(
                                    {isBridgeModalVisible: !1},
                                    function() {
                                        e.setState({isBridgeModalVisible: !0});
                                    }
                                );
                            }
                        },
                        {
                            key: "_handleExpirationChange",
                            value: function(e, t) {
                                var a = Tt(
                                    {},
                                    this.state.expirationType,
                                    Bt({}, e, t.target.value)
                                );
                                "SPECIFIC" !== t.target.value &&
                                    C.a.setExchangeLastExpiration(
                                        Tt(
                                            {},
                                            (this.props.exchange.has(
                                                "lastExpiration"
                                            ) &&
                                                this.props.exchange
                                                    .get("lastExpiration")
                                                    .toJS()) ||
                                                {},
                                            Bt({}, e, t.target.value)
                                        )
                                    ),
                                    this.setState({expirationType: a});
                            }
                        },
                        {
                            key: "_handleCustomExpirationChange",
                            value: function(e, t) {
                                var a = Tt(
                                    {},
                                    this.state.expirationCustomTime,
                                    Bt({}, e, t)
                                );
                                this.setState({expirationCustomTime: a});
                            }
                        },
                        {
                            key: "_initialState",
                            value: function(e) {
                                var t = e.viewSettings,
                                    a = {
                                        forSaleText: "",
                                        toReceiveText: "",
                                        priceText: "",
                                        for_sale: new he.a({
                                            asset_id: e.baseAsset.get("id"),
                                            precision: e.baseAsset.get(
                                                "precision"
                                            )
                                        }),
                                        to_receive: new he.a({
                                            asset_id: e.quoteAsset.get("id"),
                                            precision: e.quoteAsset.get(
                                                "precision"
                                            )
                                        })
                                    };
                                a.price = new he.f({
                                    base: a.for_sale,
                                    quote: a.to_receive
                                });
                                var r = {
                                    forSaleText: "",
                                    toReceiveText: "",
                                    priceText: "",
                                    for_sale: new he.a({
                                        asset_id: e.quoteAsset.get("id"),
                                        precision: e.quoteAsset.get("precision")
                                    }),
                                    to_receive: new he.a({
                                        asset_id: e.baseAsset.get("id"),
                                        precision: e.baseAsset.get("precision")
                                    })
                                };
                                return (
                                    (r.price = new he.f({
                                        base: r.for_sale,
                                        quote: r.to_receive
                                    })),
                                    {
                                        history: [],
                                        buySellOpen: t.get("buySellOpen", !0),
                                        bid: a,
                                        ask: r,
                                        flipBuySell: t.get("flipBuySell", !1),
                                        favorite: !1,
                                        showDepthChart: t.get(
                                            "showDepthChart",
                                            !1
                                        ),
                                        leftOrderBook: t.get(
                                            "leftOrderBook",
                                            !1
                                        ),
                                        buyDiff: !1,
                                        sellDiff: !1,
                                        buySellTop: t.get("buySellTop", !0),
                                        buyFeeAssetIdx: t.get(
                                            "buyFeeAssetIdx",
                                            0
                                        ),
                                        sellFeeAssetIdx: t.get(
                                            "sellFeeAssetIdx",
                                            0
                                        ),
                                        feeStatus: {},
                                        height: window.innerHeight,
                                        width: window.innerWidth,
                                        chartHeight: t.get("chartHeight", 400),
                                        currentPeriod: t.get(
                                            "currentPeriod",
                                            7776e3
                                        )
                                    }
                                );
                            }
                        },
                        {
                            key: "_getLastMarketKey",
                            value: function() {
                                var e = xt.Apis.instance().chain_id;
                                return (
                                    "lastMarket" +
                                    (e ? "_" + e.substr(0, 8) : "")
                                );
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._checkFeeStatus();
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                C.a.changeViewSetting.defer(
                                    Bt(
                                        {},
                                        this._getLastMarketKey(),
                                        this.props.quoteAsset.get("symbol") +
                                            "_" +
                                            this.props.baseAsset.get("symbol")
                                    )
                                ),
                                    window.addEventListener(
                                        "resize",
                                        this._getWindowSize,
                                        {capture: !1, passive: !0}
                                    );
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return !(
                                    !e.marketReady && !this.props.marketReady
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
                                            : [
                                                  this.props.coreAsset,
                                                  this.props.baseAsset,
                                                  this.props.quoteAsset
                                              ],
                                    a =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : this.props.currentAccount,
                                    r = {},
                                    n = [];
                                t.forEach(function(e) {
                                    n.push(
                                        Object(St.b)({
                                            accountID: a.get("id"),
                                            feeID: e.get("id"),
                                            type: "limit_order_create"
                                        })
                                    );
                                }),
                                    Promise.all(n)
                                        .then(function(a) {
                                            t.forEach(function(e, t) {
                                                r[e.get("id")] = a[t];
                                            }),
                                                k.a.are_equal_shallow(
                                                    e.state.feeStatus,
                                                    r
                                                ) || e.setState({feeStatus: r});
                                        })
                                        .catch(function(t) {
                                            console.log(
                                                "checkFeeStatusAsync error",
                                                t
                                            ),
                                                e.setState({feeStatus: {}});
                                        });
                            }
                        },
                        {
                            key: "_getWindowSize",
                            value: function() {
                                var e = window,
                                    t = e.innerHeight,
                                    a = e.innerWidth;
                                if (
                                    t !== this.state.height ||
                                    a !== this.state.width
                                ) {
                                    this.setState({height: t, width: a});
                                    var r = this.refs.center;
                                    r && _.a.update(r);
                                }
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function(e, t) {
                                if (
                                    (this._initPsContainer(),
                                    !this.props.exchange.get("tutorialShown") &&
                                        e.coreAsset &&
                                        t.feeStatus &&
                                        !this.tutorialShown)
                                ) {
                                    this.tutorialShown = !0;
                                    var a = this.props.settings.get("themes");
                                    Ot.a
                                        .introJs()
                                        .setOptions({
                                            tooltipClass: a,
                                            highlightClass: a,
                                            showBullets: !1,
                                            hideNext: !0,
                                            hidePrev: !0,
                                            nextLabel: Y.a.translate(
                                                "walkthrough.next_label"
                                            ),
                                            prevLabel: Y.a.translate(
                                                "walkthrough.prev_label"
                                            ),
                                            skipLabel: Y.a.translate(
                                                "walkthrough.skip_label"
                                            ),
                                            doneLabel: Y.a.translate(
                                                "walkthrough.done_label"
                                            )
                                        })
                                        .start(),
                                        C.a.setExchangeTutorialShown.defer(!0);
                                }
                            }
                        },
                        {
                            key: "_initPsContainer",
                            value: function() {
                                if (this.refs.center && this.psInit) {
                                    var e = this.refs.center;
                                    e &&
                                        (_.a.initialize(e), (this.psInit = !1));
                                }
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                if (
                                    (this._initPsContainer(),
                                    (e.quoteAsset === this.props.quoteAsset &&
                                        e.baseAsset === this.props.baseAsset &&
                                        e.currentAccount ===
                                            this.props.currentAccount) ||
                                        this._checkFeeStatus(
                                            [
                                                e.coreAsset,
                                                e.baseAsset,
                                                e.quoteAsset
                                            ],
                                            e.currentAccount
                                        ),
                                    e.quoteAsset.get("symbol") !==
                                        this.props.quoteAsset.get("symbol") ||
                                        e.baseAsset.get("symbol") !==
                                            this.props.baseAsset.get("symbol"))
                                )
                                    return (
                                        this.setState(this._initialState(e)),
                                        C.a.changeViewSetting(
                                            Bt(
                                                {},
                                                this._getLastMarketKey(),
                                                e.quoteAsset.get("symbol") +
                                                    "_" +
                                                    e.baseAsset.get("symbol")
                                            )
                                        )
                                    );
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                window.removeEventListener(
                                    "resize",
                                    this._getWindowSize
                                );
                            }
                        },
                        {
                            key: "_getFeeAssets",
                            value: function(e, t, a) {
                                var r = this,
                                    n = this.props.currentAccount,
                                    o = this.state.feeStatus;
                                function s(e, t) {
                                    -1 === e.indexOf(t) && e.push(t);
                                }
                                var i = [a, e === a ? t : e];
                                s(i, e), s(i, t);
                                var l = [a, t === a ? e : t];
                                s(l, e), s(l, t);
                                var c = {};
                                function u(e, t, r) {
                                    var n = void 0;
                                    return (
                                        (e = e.filter(function(e) {
                                            return (
                                                !!t[e.get("id")] &&
                                                ((function(e) {
                                                    return (
                                                        o[e] &&
                                                        o[e].hasPoolBalance
                                                    );
                                                })(e.get("id")) &&
                                                    (function(e) {
                                                        return (
                                                            o[e] &&
                                                            o[e].hasBalance
                                                        );
                                                    })(e.get("id")))
                                            );
                                        })).length
                                            ? (n = e[Math.min(e.length - 1, r)])
                                            : ((n = a), e.push(a)),
                                        {assets: e, asset: n}
                                    );
                                }
                                n.get("balances", [])
                                    .filter(function(a, r) {
                                        return (
                                            [
                                                "1.3.0",
                                                e.get("id"),
                                                t.get("id")
                                            ].indexOf(r) >= 0
                                        );
                                    })
                                    .forEach(function(e, t) {
                                        var a = J.b.getObject(e);
                                        c[t] = {
                                            balance: a
                                                ? parseInt(a.get("balance"), 10)
                                                : 0,
                                            fee: r._getFee(J.b.getAsset(t))
                                        };
                                    });
                                var p = u(i, c, this.state.sellFeeAssetIdx),
                                    h = p.assets,
                                    d = p.asset,
                                    m = u(l, c, this.state.buyFeeAssetIdx),
                                    f = m.assets,
                                    g = m.asset;
                                return {
                                    sellFeeAsset: d,
                                    sellFeeAssets: h,
                                    sellFee: this._getFee(d),
                                    buyFeeAsset: g,
                                    buyFeeAssets: f,
                                    buyFee: this._getFee(g)
                                };
                            }
                        },
                        {
                            key: "_getFee",
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props.coreAsset;
                                return (
                                    this.state.feeStatus[e.get("id")] &&
                                    this.state.feeStatus[e.get("id")].fee
                                );
                            }
                        },
                        {
                            key: "_verifyFee",
                            value: function(e, t, a, r) {
                                var n = this._getFee();
                                return "1.3.0" === e.asset_id
                                    ? n.getAmount() <= r
                                        ? "1.3.0"
                                        : null
                                    : (t.asset_id === e.asset_id
                                          ? e.getAmount() + t.getAmount()
                                          : t.getAmount()) <= a
                                        ? e.asset_id
                                        : n.getAmount() <= r &&
                                          "1.3.0" !== e.asset_id
                                            ? "1.3.0"
                                            : null;
                            }
                        },
                        {
                            key: "_createLimitOrderConfirm",
                            value: function(e, t, a, r, n, o) {
                                var s =
                                    !(
                                        arguments.length > 6 &&
                                        void 0 !== arguments[6]
                                    ) || arguments[6];
                                arguments[7].preventDefault();
                                var i = this.props.marketData,
                                    l = i.highestBid,
                                    c = i.lowestAsk,
                                    u = this.state[
                                        "sell" === o ? "ask" : "bid"
                                    ];
                                (a = u.for_sale.clone(
                                    a
                                        ? parseInt(
                                              J.b.getObject(a).toJS().balance,
                                              10
                                          )
                                        : 0
                                )),
                                    (r = new he.a({
                                        amount: r
                                            ? parseInt(
                                                  J.b.getObject(r).toJS()
                                                      .balance,
                                                  10
                                              )
                                            : 0
                                    }));
                                var p = this._getFee(n),
                                    h = this._verifyFee(
                                        p,
                                        u.for_sale,
                                        a.getAmount(),
                                        r.getAmount()
                                    );
                                if (!h)
                                    return Ke.a.addNotification({
                                        message:
                                            "Insufficient funds to pay fees",
                                        level: "error"
                                    });
                                if ("buy" === o && c) {
                                    var d =
                                        this.state.bid.price.toReal() /
                                        c.getPrice();
                                    if (d > 1.2)
                                        return (
                                            this.refs.buy.show(),
                                            this.setState({buyDiff: d})
                                        );
                                } else if ("sell" === o && l) {
                                    var m =
                                        1 /
                                        (this.state.ask.price.toReal() /
                                            l.getPrice());
                                    if (m > 1.2)
                                        return (
                                            this.refs.sell.show(),
                                            this.setState({sellDiff: m})
                                        );
                                }
                                var f = t.getIn([
                                    "bitasset",
                                    "is_prediction_market"
                                ]);
                                return u.for_sale.gt(a) && !f
                                    ? Ke.a.addNotification({
                                          message:
                                              "Insufficient funds to place order, you need at least " +
                                              u.for_sale.getAmount({real: !0}) +
                                              " " +
                                              t.get("symbol"),
                                          level: "error"
                                      })
                                    : u.for_sale.getAmount() > 0 &&
                                      u.to_receive.getAmount() > 0
                                        ? "sell" === o && f && s
                                            ? this._createPredictionShort(h)
                                            : void this._createLimitOrder(o, h)
                                        : Ke.a.addNotification({
                                              message:
                                                  "Please enter a valid amount and price",
                                              level: "error"
                                          });
                            }
                        },
                        {
                            key: "_createLimitOrder",
                            value: function(e, t) {
                                var a = "sell" === e ? "ask" : "bid",
                                    r = this.state[a],
                                    n = null;
                                n =
                                    "SPECIFIC" === this.state.expirationType[a]
                                        ? this.EXPIRATIONS[
                                              this.state.expirationType[a]
                                          ].get(a)
                                        : this.EXPIRATIONS[
                                              this.state.expirationType[a]
                                          ].get();
                                var o = new he.e({
                                        for_sale: r.for_sale,
                                        expiration: new Date(n || !1),
                                        to_receive: r.to_receive,
                                        seller: this.props.currentAccount.get(
                                            "id"
                                        ),
                                        fee: {asset_id: t, amount: 0}
                                    }),
                                    s = H.a.getMarketName(
                                        this.props.baseAsset,
                                        this.props.quoteAsset
                                    ),
                                    i = s.marketName,
                                    l = s.first,
                                    c = this.props.marketDirections.get(i);
                                if (
                                    (c &&
                                        l.get("id") !==
                                            this.props.baseAsset.get("id")) ||
                                    (!c &&
                                        l.get("id") !==
                                            this.props.baseAsset.get("id"))
                                ) {
                                    var u = {};
                                    (u[i] = !c), C.a.changeMarketDirection(u);
                                }
                                return (
                                    console.log(
                                        "order:",
                                        JSON.stringify(o.toObject())
                                    ),
                                    b.a
                                        .createLimitOrder2(o)
                                        .then(function(e) {
                                            e.error &&
                                                "wallet locked" !==
                                                    e.error.message &&
                                                Ke.a.addNotification({
                                                    message:
                                                        "Unknown error. Failed to place order for " +
                                                        r.to_receive.getAmount({
                                                            real: !0
                                                        }) +
                                                        " " +
                                                        r.to_receive.asset_id,
                                                    level: "error"
                                                });
                                        })
                                        .catch(function(e) {
                                            console.log("order failed:", e);
                                        })
                                );
                            }
                        },
                        {
                            key: "_createPredictionShort",
                            value: function(e) {
                                var t = this.state.ask,
                                    a = new he.e({
                                        for_sale: t.for_sale,
                                        to_receive: t.to_receive,
                                        seller: this.props.currentAccount.get(
                                            "id"
                                        ),
                                        fee: {asset_id: e, amount: 0}
                                    });
                                Promise.all([
                                    Object(J.f)(
                                        "getAsset",
                                        this.props.quoteAsset.getIn([
                                            "bitasset",
                                            "options",
                                            "short_backing_asset"
                                        ])
                                    )
                                ]).then(function(e) {
                                    var t = Pt(e, 1)[0],
                                        r = new he.a({
                                            amount: a.amount_for_sale.getAmount(),
                                            asset_id: t.get("id"),
                                            precision: t.get("precision")
                                        });
                                    b.a
                                        .createPredictionShort(a, r)
                                        .then(function(e) {
                                            e.error &&
                                                "wallet locked" !==
                                                    e.error.message &&
                                                Ke.a.addNotification({
                                                    message:
                                                        "Unknown error. Failed to place order for " +
                                                        buyAssetAmount +
                                                        " " +
                                                        buyAsset.symbol,
                                                    level: "error"
                                                });
                                        });
                                });
                            }
                        },
                        {
                            key: "_forceBuy",
                            value: function(e, t, a, r) {
                                var n = this.state[
                                    "sell" === e ? "ask" : "bid"
                                ];
                                (a = n.for_sale.clone(
                                    a
                                        ? parseInt(
                                              J.b.getObject(a).get("balance"),
                                              10
                                          )
                                        : 0
                                )),
                                    (r = new he.a({
                                        amount: r
                                            ? parseInt(
                                                  J.b.getObject(r).toJS()
                                                      .balance,
                                                  10
                                              )
                                            : 0
                                    }));
                                var o = this._getFee(t),
                                    s = this._verifyFee(
                                        o,
                                        n.for_sale,
                                        a.getAmount(),
                                        r.getAmount()
                                    );
                                s
                                    ? this._createLimitOrder(e, s)
                                    : console.error(
                                          "Unable to pay fees, aborting limit order creation"
                                      );
                            }
                        },
                        {
                            key: "_forceSell",
                            value: function(e, t, a, r) {
                                var n = this.state[
                                    "sell" === e ? "ask" : "bid"
                                ];
                                (a = n.for_sale.clone(
                                    a
                                        ? parseInt(
                                              J.b.getObject(a).get("balance"),
                                              10
                                          )
                                        : 0
                                )),
                                    (r = new he.a({
                                        amount: r
                                            ? parseInt(
                                                  J.b.getObject(r).toJS()
                                                      .balance,
                                                  10
                                              )
                                            : 0
                                    }));
                                var o = this._getFee(t),
                                    s = this._verifyFee(
                                        o,
                                        n.for_sale,
                                        a.getAmount(),
                                        r.getAmount()
                                    );
                                s
                                    ? this._createLimitOrder(e, s)
                                    : console.error(
                                          "Unable to pay fees, aborting limit order creation"
                                      );
                            }
                        },
                        {
                            key: "_cancelLimitOrder",
                            value: function(e, t) {
                                t.preventDefault();
                                var a = this.props.currentAccount;
                                b.a.cancelLimitOrder(a.get("id"), e);
                            }
                        },
                        {
                            key: "_changeZoomPeriod",
                            value: function(e, t) {
                                t.preventDefault(),
                                    e !== this.state.currentPeriod &&
                                        (this.setState({currentPeriod: e}),
                                        C.a.changeViewSetting({
                                            currentPeriod: e
                                        }));
                            }
                        },
                        {
                            key: "_depthChartClick",
                            value: function(e, t, a) {
                                a.preventDefault();
                                var r = this.state,
                                    n = r.bid,
                                    o = r.ask;
                                (n.price = new he.f({
                                    base: this.state.bid.for_sale,
                                    quote: this.state.bid.to_receive,
                                    real: a.xAxis[0].value
                                })),
                                    (n.priceText = n.price.toReal()),
                                    (o.price = new he.f({
                                        base: this.state.ask.to_receive,
                                        quote: this.state.ask.for_sale,
                                        real: a.xAxis[0].value
                                    })),
                                    (o.priceText = o.price.toReal());
                                var s = {
                                    bid: n,
                                    ask: o,
                                    depthLine: n.price.toReal()
                                };
                                this._setForSale(n, !0) ||
                                    this._setReceive(n, !0),
                                    this._setReceive(o) || this._setForSale(o),
                                    this._setPriceText(n, !0),
                                    this._setPriceText(o, !1),
                                    this.setState(s);
                            }
                        },
                        {
                            key: "_flipBuySell",
                            value: function() {
                                this.setState({
                                    flipBuySell: !this.state.flipBuySell
                                }),
                                    C.a.changeViewSetting({
                                        flipBuySell: !this.state.flipBuySell
                                    });
                            }
                        },
                        {
                            key: "_toggleOpenBuySell",
                            value: function() {
                                C.a.changeViewSetting({
                                    buySellOpen: !this.state.buySellOpen
                                }),
                                    this.setState({
                                        buySellOpen: !this.state.buySellOpen
                                    });
                            }
                        },
                        {
                            key: "_toggleCharts",
                            value: function() {
                                C.a.changeViewSetting({
                                    showDepthChart: !this.state.showDepthChart
                                }),
                                    this.setState({
                                        showDepthChart: !this.state
                                            .showDepthChart
                                    });
                            }
                        },
                        {
                            key: "_toggleMarketPicker",
                            value: function(e) {
                                var t = !!e;
                                this.setState({
                                    showMarketPicker: t,
                                    marketPickerAsset: e
                                });
                            }
                        },
                        {
                            key: "resetHeaderMargin",
                            value: function() {
                                try {
                                    document.getElementsByClassName(
                                        "container-menu-header"
                                    )[0].style.marginLeft = 0;
                                } catch (e) {}
                            }
                        },
                        {
                            key: "_moveOrderBook",
                            value: function() {
                                document.fastLoader.show();
                                var e = this;
                                document.delayedExecution.add(
                                    "_moveOrderBook",
                                    function() {
                                        e.state.leftOrderBook &&
                                            e.resetHeaderMargin(),
                                            C.a.changeViewSetting({
                                                leftOrderBook: !e.state
                                                    .leftOrderBook
                                            }),
                                            e.setState({
                                                leftOrderBook: !e.state
                                                    .leftOrderBook
                                            });
                                    },
                                    100
                                );
                            }
                        },
                        {
                            key: "_currentPriceClick",
                            value: function(e, t) {
                                var a = "bid" === e,
                                    r = this.state[e];
                                (r.price = t[a ? "invert" : "clone"]()),
                                    (r.priceText = r.price.toReal()),
                                    a
                                        ? this._setForSale(r, a) ||
                                          this._setReceive(r, a)
                                        : this._setReceive(r, a) ||
                                          this._setForSale(r, a),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_orderbookClick",
                            value: function(e) {
                                var t = e.isBid(),
                                    a = e.totalToReceive({noCache: !0}),
                                    r = a.times(e.sellPrice()),
                                    n = new he.f({
                                        base: t ? r : a,
                                        quote: t ? a : r
                                    }),
                                    o = this.state[t ? "bid" : "ask"];
                                (o.price = n), (o.priceText = n.toReal());
                                var s = Bt({}, t ? "ask" : "bid", {
                                    for_sale: a,
                                    forSaleText: a.getAmount({real: !0}),
                                    to_receive: r,
                                    toReceiveText: r.getAmount({real: !0}),
                                    price: n,
                                    priceText: n.toReal()
                                });
                                t
                                    ? this._setForSale(o, t) ||
                                      this._setReceive(o, t)
                                    : this._setReceive(o, t) ||
                                      this._setForSale(o, t),
                                    this.setState(s);
                            }
                        },
                        {
                            key: "_borrowQuote",
                            value: function() {
                                this.refs.borrowQuote.show();
                            }
                        },
                        {
                            key: "_borrowBase",
                            value: function() {
                                this.refs.borrowBase.show();
                            }
                        },
                        {
                            key: "_getSettlementInfo",
                            value: function() {
                                var e = this.props,
                                    t = e.lowestCallPrice,
                                    a = e.feedPrice,
                                    r = e.quoteAsset,
                                    n = !1;
                                return (
                                    a &&
                                        (n = a.inverted
                                            ? t <= a.toReal()
                                            : t >= a.toReal()),
                                    !(
                                        !n ||
                                        !t ||
                                        r.getIn([
                                            "bitasset",
                                            "is_prediction_market"
                                        ])
                                    )
                                );
                            }
                        },
                        {
                            key: "onChangeFeeAsset",
                            value: function(e, t) {
                                t.preventDefault(),
                                    "buy" === e
                                        ? (this.setState({
                                              buyFeeAssetIdx: t.target.value
                                          }),
                                          C.a.changeViewSetting({
                                              buyFeeAssetIdx: t.target.value
                                          }))
                                        : (this.setState({
                                              sellFeeAssetIdx: t.target.value
                                          }),
                                          C.a.changeViewSetting({
                                              sellFeeAssetIdx: t.target.value
                                          }));
                            }
                        },
                        {
                            key: "onChangeChartHeight",
                            value: function(e) {
                                var t = e.value,
                                    a = e.increase,
                                    r =
                                        t ||
                                        this.state.chartHeight + (a ? 20 : -20);
                                this.setState({chartHeight: r}),
                                    C.a.changeViewSetting({chartHeight: r});
                            }
                        },
                        {
                            key: "_toggleBuySellPosition",
                            value: function() {
                                this.setState({
                                    buySellTop: !this.state.buySellTop
                                }),
                                    C.a.changeViewSetting({
                                        buySellTop: !this.state.buySellTop
                                    });
                            }
                        },
                        {
                            key: "_setReceive",
                            value: function(e, t) {
                                return (
                                    !(
                                        !e.price.isValid() ||
                                        !e.for_sale.hasAmount()
                                    ) &&
                                    ((e.to_receive = e.for_sale.times(e.price)),
                                    (e.toReceiveText = e.to_receive
                                        .getAmount({real: !0})
                                        .toString()),
                                    !0)
                                );
                            }
                        },
                        {
                            key: "_setForSale",
                            value: function(e, t) {
                                return (
                                    !(
                                        !e.price.isValid() ||
                                        !e.to_receive.hasAmount()
                                    ) &&
                                    ((e.for_sale = e.to_receive.times(
                                        e.price,
                                        !0
                                    )),
                                    (e.forSaleText = e.for_sale
                                        .getAmount({real: !0})
                                        .toString()),
                                    !0)
                                );
                            }
                        },
                        {
                            key: "_setPrice",
                            value: function(e) {
                                return (
                                    !(
                                        !e.for_sale.hasAmount() ||
                                        !e.to_receive.hasAmount()
                                    ) &&
                                    ((e.price = new he.f({
                                        base: e.for_sale,
                                        quote: e.to_receive
                                    })),
                                    (e.priceText = e.price.toReal().toString()),
                                    !0)
                                );
                            }
                        },
                        {
                            key: "_setPriceText",
                            value: function(e, t) {
                                var a = e[t ? "for_sale" : "to_receive"],
                                    r = e[t ? "to_receive" : "for_sale"];
                                a.hasAmount() &&
                                    r.hasAmount() &&
                                    (e.priceText = new he.f({base: a, quote: r})
                                        .toReal()
                                        .toString());
                            }
                        },
                        {
                            key: "_onInputPrice",
                            value: function(e, t) {
                                var a = this.state[e],
                                    r = "bid" === e;
                                (a.price = new he.f({
                                    base: a[r ? "for_sale" : "to_receive"],
                                    quote: a[r ? "to_receive" : "for_sale"],
                                    real: parseFloat(t.target.value) || 0
                                })),
                                    r
                                        ? this._setForSale(a, r) ||
                                          this._setReceive(a, r)
                                        : this._setReceive(a, r) ||
                                          this._setForSale(a, r),
                                    (a.priceText = t.target.value),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onInputSell",
                            value: function(e, t, a) {
                                var r = this.state[e];
                                r.for_sale.setAmount({
                                    real: parseFloat(a.target.value) || 0
                                }),
                                    r.price.isValid()
                                        ? this._setReceive(r, t)
                                        : this._setPrice(r),
                                    (r.forSaleText = a.target.value),
                                    this._setPriceText(r, "bid" === e),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onInputReceive",
                            value: function(e, t, a) {
                                var r = this.state[e];
                                r.to_receive.setAmount({
                                    real: parseFloat(a.target.value) || 0
                                }),
                                    r.price.isValid()
                                        ? this._setForSale(r, t)
                                        : this._setPrice(r),
                                    (r.toReceiveText = a.target.value),
                                    this._setPriceText(r, "bid" === e),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "isMarketFrozen",
                            value: function() {
                                var e = this.props,
                                    t = e.baseAsset,
                                    a = e.quoteAsset,
                                    r = t
                                        .getIn(["options", "whitelist_markets"])
                                        .toJS(),
                                    n = a
                                        .getIn(["options", "whitelist_markets"])
                                        .toJS(),
                                    o = t
                                        .getIn(["options", "blacklist_markets"])
                                        .toJS(),
                                    s = a
                                        .getIn(["options", "blacklist_markets"])
                                        .toJS();
                                return n.length && -1 === n.indexOf(t.get("id"))
                                    ? {
                                          isFrozen: !0,
                                          frozenAsset: a.get("symbol")
                                      }
                                    : r.length && -1 === r.indexOf(a.get("id"))
                                        ? {
                                              isFrozen: !0,
                                              frozenAsset: t.get("symbol")
                                          }
                                        : s.length &&
                                          -1 !== s.indexOf(t.get("id"))
                                            ? {
                                                  isFrozen: !0,
                                                  frozenAsset: a.get("symbol")
                                              }
                                            : o.length &&
                                              -1 !== o.indexOf(a.get("id"))
                                                ? {
                                                      isFrozen: !0,
                                                      frozenAsset: t.get(
                                                          "symbol"
                                                      )
                                                  }
                                                : {isFrozen: !1};
                            }
                        },
                        {
                            key: "_toggleMiniChart",
                            value: function() {
                                C.a.changeViewSetting({
                                    miniDepthChart: !this.props.miniDepthChart
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.currentAccount,
                                    a = e.marketLimitOrders,
                                    r = e.marketCallOrders,
                                    o = e.marketData,
                                    s = e.activeMarketHistory,
                                    i = e.invertedCalls,
                                    l = e.starredMarkets,
                                    c = e.quoteAsset,
                                    u = e.baseAsset,
                                    p = e.lowestCallPrice,
                                    h = e.marketStats,
                                    d = e.marketReady,
                                    m = e.marketSettleOrders,
                                    f = e.bucketSize,
                                    g = e.totals,
                                    b = e.feedPrice,
                                    v = e.buckets,
                                    _ = e.coreAsset,
                                    k = o.combinedBids,
                                    E = o.combinedAsks,
                                    C = o.lowestAsk,
                                    x = o.highestBid,
                                    A = o.flatBids,
                                    O = o.flatAsks,
                                    N = o.flatCalls,
                                    P = o.flatSettles,
                                    T = this.state,
                                    I = T.bid,
                                    B = T.ask,
                                    M = T.leftOrderBook,
                                    F = T.showDepthChart,
                                    q = T.chartHeight,
                                    j = T.buyDiff,
                                    R = T.sellDiff,
                                    L = T.width,
                                    D = T.buySellTop,
                                    U = this.isMarketFrozen(),
                                    W = U.isFrozen,
                                    V = U.frozenAsset,
                                    J = null,
                                    Q = null,
                                    Y = null,
                                    G = null,
                                    K = null,
                                    X = null,
                                    Z = void 0,
                                    $ = void 0,
                                    ee = !1,
                                    te = void 0,
                                    ae = void 0,
                                    re = this.props.viewSettings.get(
                                        "showVolumeChart",
                                        !0
                                    );
                                this.props.viewSettings.get(
                                    "enableChartClamp",
                                    !0
                                );
                                if (c.size && u.size && t.size) {
                                    if (
                                        ((Q = c),
                                        ($ = (J = u).get("symbol")),
                                        (Z = Q.get("symbol")),
                                        (Y = t.get("balances").toJS()))
                                    )
                                        for (var ne in Y)
                                            ne === Q.get("id") && (G = Y[ne]),
                                                ne === J.get("id") &&
                                                    (K = Y[ne]),
                                                "1.3.0" === ne && (X = Y[ne]);
                                    ee = this._getSettlementInfo();
                                }
                                var ie = !!c.get("bitasset_data_id"),
                                    le = !!u.get("bitasset_data_id"),
                                    ce =
                                        C && x
                                            ? C.getPrice() - x.getPrice()
                                            : 0;
                                if (s.size) {
                                    var ue = s.take(3),
                                        pe = ue.first(),
                                        he = ue.last(),
                                        de = void 0,
                                        fe = void 0,
                                        ge = !1;
                                    pe.pays.asset_id === J.get("id")
                                        ? ((de = J), (fe = Q), (ge = !0))
                                        : ((de = Q), (fe = J));
                                    var be =
                                        J.get("id").split(".")[2] >
                                        Q.get("id").split(".")[2];
                                    if (
                                        ((te = H.a.parse_order_history(
                                            pe,
                                            de,
                                            fe,
                                            ge,
                                            be
                                        )),
                                        (ge = !1),
                                        he)
                                    ) {
                                        he.pays.asset_id === J.get("id")
                                            ? ((de = J), (fe = Q), (ge = !0))
                                            : ((de = Q), (fe = J));
                                        var ye = H.a.parse_order_history(
                                            he,
                                            de,
                                            fe,
                                            ge,
                                            be
                                        );
                                        ae =
                                            te.full === ye.full
                                                ? ""
                                                : te.full - ye.full > 0
                                                    ? "change-up"
                                                    : "change-down";
                                    }
                                }
                                if (
                                    !_ ||
                                    !Object.keys(this.state.feeStatus).length
                                )
                                    return null;
                                var ve = this._getFeeAssets(Q, J, _),
                                    _e = ve.sellFeeAsset,
                                    ke = ve.sellFeeAssets,
                                    we = ve.sellFee,
                                    xe = ve.buyFeeAsset,
                                    Se = ve.buyFeeAssets,
                                    Ae = ve.buyFee,
                                    Ne =
                                        J.getIn([
                                            "bitasset",
                                            "is_prediction_market"
                                        ]) ||
                                        Q.getIn([
                                            "bitasset",
                                            "is_prediction_market"
                                        ]),
                                    Pe = null;
                                Ne &&
                                    ((Pe = c.getIn(["options", "description"])),
                                    (Pe = me.a.parseDescription(Pe).main));
                                var Te = !1;
                                L < 1e3 && ((Te = !0), (M = !1));
                                var Ie = M ? 2 : 1,
                                    Be = (Math.max(
                                        this.state.height > 1100 ? q : q - 125,
                                        300
                                    ),
                                    this.state.expirationType),
                                    Me = this.state.expirationCustomTime,
                                    Fe = W
                                        ? null
                                        : n.a.createElement(Ee, {
                                              onShowModal: this.onShowModal,
                                              onBorrow: le
                                                  ? this._borrowBase.bind(this)
                                                  : null,
                                              currentAccount: t,
                                              backedCoin: this.props.backedCoins.find(
                                                  function(e) {
                                                      return (
                                                          e.symbol ===
                                                          J.get("symbol")
                                                      );
                                                  }
                                              ),
                                              currentBridges:
                                                  this.props.bridgeCoins.get(
                                                      J.get("symbol")
                                                  ) || null,
                                              smallScreen: Te,
                                              isOpen: this.state.buySellOpen,
                                              onToggleOpen: this._toggleOpenBuySell.bind(
                                                  this
                                              ),
                                              className: S()(
                                                  "small-12 no-padding middle-content",
                                                  M || Te
                                                      ? "medium-6"
                                                      : "medium-6 xlarge-4",
                                                  this.state.flipBuySell
                                                      ? "order-" +
                                                        (D ? 2 : 5 * Ie) +
                                                        " sell-form"
                                                      : "order-" +
                                                        (D ? 1 : 4 * Ie) +
                                                        " buy-form"
                                              ),
                                              type: "bid",
                                              expirationType: Be.bid,
                                              expirations: this.EXPIRATIONS,
                                              expirationCustomTime: Me.bid,
                                              onExpirationTypeChange: this._handleExpirationChange.bind(
                                                  this,
                                                  "bid"
                                              ),
                                              onExpirationCustomChange: this._handleCustomExpirationChange.bind(
                                                  this,
                                                  "bid"
                                              ),
                                              amount: I.toReceiveText,
                                              price: I.priceText,
                                              total: I.forSaleText,
                                              quote: Q,
                                              base: J,
                                              amountChange: this._onInputReceive.bind(
                                                  this,
                                                  "bid",
                                                  !0
                                              ),
                                              priceChange: this._onInputPrice.bind(
                                                  this,
                                                  "bid"
                                              ),
                                              setPrice: this._currentPriceClick.bind(
                                                  this
                                              ),
                                              totalChange: this._onInputSell.bind(
                                                  this,
                                                  "bid",
                                                  !1
                                              ),
                                              balance: K,
                                              balanceId: J.get("id"),
                                              onSubmit: this._createLimitOrderConfirm.bind(
                                                  this,
                                                  Q,
                                                  J,
                                                  K,
                                                  X,
                                                  xe,
                                                  "buy"
                                              ),
                                              balancePrecision: J.get(
                                                  "precision"
                                              ),
                                              quotePrecision: Q.get(
                                                  "precision"
                                              ),
                                              totalPrecision: J.get(
                                                  "precision"
                                              ),
                                              currentPrice: C.getPrice(),
                                              currentPriceObject: C,
                                              account: t.get("name"),
                                              fee: Ae,
                                              hasFeeBalance: this.state
                                                  .feeStatus[Ae.asset_id]
                                                  .hasBalance,
                                              feeAssets: Se,
                                              feeAsset: xe,
                                              onChangeFeeAsset: this.onChangeFeeAsset.bind(
                                                  this,
                                                  "buy"
                                              ),
                                              isPredictionMarket: J.getIn([
                                                  "bitasset",
                                                  "is_prediction_market"
                                              ]),
                                              onFlip: this.state._flipBuySell
                                                  ? null
                                                  : this._flipBuySell.bind(
                                                        this
                                                    ),
                                              onTogglePosition: this.state
                                                  ._toggleBuySellPosition
                                                  ? null
                                                  : this._toggleBuySellPosition.bind(
                                                        this
                                                    )
                                          }),
                                    qe = W
                                        ? null
                                        : n.a.createElement(Ee, {
                                              onShowModal: this.onShowModal,
                                              onBorrow: ie
                                                  ? this._borrowQuote.bind(this)
                                                  : null,
                                              currentAccount: t,
                                              backedCoin: this.props.backedCoins.find(
                                                  function(e) {
                                                      return (
                                                          e.symbol ===
                                                          Q.get("symbol")
                                                      );
                                                  }
                                              ),
                                              currentBridges:
                                                  this.props.bridgeCoins.get(
                                                      Q.get("symbol")
                                                  ) || null,
                                              smallScreen: Te,
                                              isOpen: this.state.buySellOpen,
                                              onToggleOpen: this._toggleOpenBuySell.bind(
                                                  this
                                              ),
                                              className: S()(
                                                  "small-12 no-padding middle-content",
                                                  M || Te
                                                      ? "medium-6"
                                                      : "medium-6 xlarge-4",
                                                  this.state.flipBuySell
                                                      ? "order-" +
                                                        (D ? 1 : 4 * Ie) +
                                                        " buy-form"
                                                      : "order-" +
                                                        (D ? 2 : 5 * Ie) +
                                                        " sell-form"
                                              ),
                                              type: "ask",
                                              amount: B.forSaleText,
                                              price: B.priceText,
                                              total: B.toReceiveText,
                                              quote: Q,
                                              base: J,
                                              expirationType: Be.ask,
                                              expirations: this.EXPIRATIONS,
                                              expirationCustomTime: Me.ask,
                                              onExpirationTypeChange: this._handleExpirationChange.bind(
                                                  this,
                                                  "ask"
                                              ),
                                              onExpirationCustomChange: this._handleCustomExpirationChange.bind(
                                                  this,
                                                  "ask"
                                              ),
                                              amountChange: this._onInputSell.bind(
                                                  this,
                                                  "ask",
                                                  !1
                                              ),
                                              priceChange: this._onInputPrice.bind(
                                                  this,
                                                  "ask"
                                              ),
                                              setPrice: this._currentPriceClick.bind(
                                                  this
                                              ),
                                              totalChange: this._onInputReceive.bind(
                                                  this,
                                                  "ask",
                                                  !0
                                              ),
                                              balance: G,
                                              balanceId: Q.get("id"),
                                              onSubmit: this._createLimitOrderConfirm.bind(
                                                  this,
                                                  J,
                                                  Q,
                                                  G,
                                                  X,
                                                  _e,
                                                  "sell"
                                              ),
                                              balancePrecision: Q.get(
                                                  "precision"
                                              ),
                                              quotePrecision: Q.get(
                                                  "precision"
                                              ),
                                              totalPrecision: J.get(
                                                  "precision"
                                              ),
                                              currentPrice: x.getPrice(),
                                              currentPriceObject: x,
                                              account: t.get("name"),
                                              fee: we,
                                              hasFeeBalance: this.state
                                                  .feeStatus[we.asset_id]
                                                  .hasBalance,
                                              feeAssets: ke,
                                              feeAsset: _e,
                                              onChangeFeeAsset: this.onChangeFeeAsset.bind(
                                                  this,
                                                  "sell"
                                              ),
                                              isPredictionMarket: Q.getIn([
                                                  "bitasset",
                                                  "is_prediction_market"
                                              ]),
                                              onFlip: this.state._flipBuySell
                                                  ? null
                                                  : this._flipBuySell.bind(
                                                        this
                                                    ),
                                              onTogglePosition: this.state
                                                  ._toggleBuySellPosition
                                                  ? null
                                                  : this._toggleBuySellPosition.bind(
                                                        this
                                                    )
                                          }),
                                    je = n.a.createElement(z, {
                                        latest: te,
                                        changeClass: ae,
                                        orders: a,
                                        calls: r,
                                        invertedCalls: i,
                                        combinedBids: k,
                                        combinedAsks: E,
                                        highestBid: x,
                                        lowestAsk: C,
                                        totalBids: g.bid,
                                        totalAsks: g.ask,
                                        base: J,
                                        quote: Q,
                                        baseSymbol: $,
                                        quoteSymbol: Z,
                                        onClick: this._orderbookClick.bind(
                                            this
                                        ),
                                        horizontal: !M,
                                        moveOrderBook: this._moveOrderBook.bind(
                                            this
                                        ),
                                        flipOrderBook: !0,
                                        marketReady: d,
                                        wrapperClass:
                                            "order-" +
                                            (D ? 3 : 1) +
                                            " xlarge-order-" +
                                            (D ? 4 : 1),
                                        currentAccount: this.props.currentAccount.get(
                                            "id"
                                        )
                                    });
                                return n.a.createElement(
                                    "div",
                                    {className: "grid-block vertical"},
                                    this.state.isBridgeModalVisible
                                        ? n.a.createElement(Nt.a, {
                                              account: this.props
                                                  .currentAccount,
                                              asset:
                                                  "LLC" === c.get("symbol")
                                                      ? u.get("symbol")
                                                      : c.get("symbol")
                                          })
                                        : null,
                                    this.props.marketReady
                                        ? null
                                        : n.a.createElement(Ce.a, null),
                                    n.a.createElement(Ct, {
                                        account: this.props.currentAccount,
                                        quoteAsset: c,
                                        baseAsset: u,
                                        hasPrediction: Ne,
                                        starredMarkets: l,
                                        lowestAsk: C,
                                        highestBid: x,
                                        lowestCallPrice: p,
                                        showCallLimit: ee,
                                        feedPrice: b,
                                        marketReady: d,
                                        latestPrice: te,
                                        showDepthChart: F,
                                        marketStats: h,
                                        onToggleCharts: this._toggleCharts.bind(
                                            this
                                        ),
                                        onToggleMarketPicker: this._toggleMarketPicker.bind(
                                            this
                                        ),
                                        showVolumeChart: re,
                                        chartHeight: q,
                                        onChangeChartHeight: this.onChangeChartHeight.bind(
                                            this
                                        )
                                    }),
                                    n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-block page-layout market-layout"
                                        },
                                        this.state.showMarketPicker
                                            ? n.a.createElement(
                                                  Oe,
                                                  Tt(
                                                      {
                                                          marketPickerAsset: this
                                                              .state
                                                              .marketPickerAsset,
                                                          onToggleMarketPicker: this._toggleMarketPicker.bind(
                                                              this
                                                          )
                                                      },
                                                      this.props
                                                  )
                                              )
                                            : null,
                                        n.a.createElement(lt, null),
                                        M
                                            ? n.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block left-column shrink no-overflow"
                                                  },
                                                  je
                                              )
                                            : null,
                                        n.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: 0},
                                                className: S()(
                                                    "grid-block main-content vertical no-overflow"
                                                )
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical no-padding ps-container",
                                                    id: "CenterContent",
                                                    ref: "center"
                                                },
                                                F
                                                    ? n.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "grid-block vertical no-padding shrink"
                                                          },
                                                          n.a.createElement(
                                                              Ye,
                                                              {
                                                                  marketReady: d,
                                                                  orders: a,
                                                                  showCallLimit: ee,
                                                                  call_orders: r,
                                                                  flat_asks: O,
                                                                  flat_bids: A,
                                                                  flat_calls: ee
                                                                      ? N
                                                                      : [],
                                                                  flat_settles:
                                                                      this.props.settings.get(
                                                                          "showSettles"
                                                                      ) && P,
                                                                  settles: m,
                                                                  invertedCalls: i,
                                                                  totalBids:
                                                                      g.bid,
                                                                  totalAsks:
                                                                      g.ask,
                                                                  base: J,
                                                                  quote: Q,
                                                                  height:
                                                                      this.state
                                                                          .height >
                                                                      1100
                                                                          ? q
                                                                          : q -
                                                                            150,
                                                                  onClick: this._depthChartClick.bind(
                                                                      this,
                                                                      J,
                                                                      Q
                                                                  ),
                                                                  feedPrice:
                                                                      !Ne &&
                                                                      b &&
                                                                      b.toReal(),
                                                                  spread: ce,
                                                                  LCP: ee
                                                                      ? p
                                                                      : null,
                                                                  leftOrderBook: M,
                                                                  hasPrediction: Ne,
                                                                  noFrame: !1,
                                                                  verticalOrderbook: M,
                                                                  theme: this.props.settings.get(
                                                                      "themes"
                                                                  ),
                                                                  centerRef: this
                                                                      .refs
                                                                      .center
                                                              }
                                                          )
                                                      )
                                                    : n.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "grid-block shrink no-overflow",
                                                              id:
                                                                  "market-charts"
                                                          },
                                                          n.a.createElement(
                                                              Ue,
                                                              {
                                                                  locale: this
                                                                      .props
                                                                      .locale,
                                                                  dataFeed: this
                                                                      .props
                                                                      .dataFeed,
                                                                  baseSymbol: $,
                                                                  quoteSymbol: Z,
                                                                  leftOrderBook: M,
                                                                  marketReady: d,
                                                                  theme: this.props.settings.get(
                                                                      "themes"
                                                                  ),
                                                                  buckets: v,
                                                                  bucketSize: f,
                                                                  currentPeriod: this
                                                                      .state
                                                                      .currentPeriod,
                                                                  chartHeight:
                                                                      this.state
                                                                          .height >
                                                                      1100
                                                                          ? q
                                                                          : q -
                                                                            150,
                                                                  mobile:
                                                                      L < 800
                                                              }
                                                          )
                                                      ),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-overflow wrap shrink"
                                                    },
                                                    Ne
                                                        ? n.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "small-12 no-overflow",
                                                                  style: {
                                                                      margin:
                                                                          "0 10px",
                                                                      lineHeight:
                                                                          "1.2rem"
                                                                  }
                                                              },
                                                              n.a.createElement(
                                                                  "p",
                                                                  null,
                                                                  Pe
                                                              )
                                                          )
                                                        : null,
                                                    W
                                                        ? n.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "error small-12 no-overflow",
                                                                  style: {
                                                                      margin:
                                                                          "0 10px",
                                                                      lineHeight:
                                                                          "1.2rem"
                                                                  }
                                                              },
                                                              n.a.createElement(
                                                                  w.a,
                                                                  {
                                                                      content:
                                                                          "exchange.market_frozen",
                                                                      asset: V,
                                                                      component:
                                                                          "p"
                                                                  }
                                                              )
                                                          )
                                                        : null,
                                                    Fe,
                                                    qe,
                                                    n.a.createElement(oe, {
                                                        className: S()(
                                                            Te || M
                                                                ? ""
                                                                : "medium-6 xlarge-4",
                                                            "no-padding no-overflow middle-content small-12 medium-6 order-5 xlarge-order-3"
                                                        ),
                                                        headerStyle: {
                                                            paddingTop: 0
                                                        },
                                                        history: s,
                                                        currentAccount: t,
                                                        myHistory: t.get(
                                                            "history"
                                                        ),
                                                        base: J,
                                                        quote: Q,
                                                        baseSymbol: $,
                                                        quoteSymbol: Z
                                                    }),
                                                    M ? null : je,
                                                    n.a.createElement(pt, {
                                                        type: "buy",
                                                        ref: "buy",
                                                        onForce: this._forceBuy.bind(
                                                            this,
                                                            "buy",
                                                            xe,
                                                            K,
                                                            X
                                                        ),
                                                        diff: j,
                                                        hasOrders: E.length > 0
                                                    }),
                                                    n.a.createElement(pt, {
                                                        type: "sell",
                                                        ref: "sell",
                                                        onForce: this._forceSell.bind(
                                                            this,
                                                            "sell",
                                                            _e,
                                                            G,
                                                            X
                                                        ),
                                                        diff: R,
                                                        hasOrders: k.length > 0
                                                    }),
                                                    a.size > 0 && J && Q
                                                        ? n.a.createElement(
                                                              y.a,
                                                              {
                                                                  smallScreen: this
                                                                      .props
                                                                      .smallScreen,
                                                                  className: S()(
                                                                      Te || M
                                                                          ? ""
                                                                          : "medium-6 xlarge-4",
                                                                      "small-12 medium-6 no-padding align-spaced ps-container middle-content order-6"
                                                                  ),
                                                                  key:
                                                                      "open_orders",
                                                                  orders: a,
                                                                  settleOrders: m,
                                                                  currentAccount: t,
                                                                  base: J,
                                                                  quote: Q,
                                                                  baseSymbol: $,
                                                                  quoteSymbol: Z,
                                                                  activeTab: this.props.viewSettings.get(
                                                                      "ordersTab"
                                                                  ),
                                                                  onCancel: this._cancelLimitOrder.bind(
                                                                      this
                                                                  ),
                                                                  flipMyOrders: this.props.viewSettings.get(
                                                                      "flipMyOrders"
                                                                  ),
                                                                  feedPrice: this
                                                                      .props
                                                                      .feedPrice
                                                              }
                                                          )
                                                        : null
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block shrink right-column no-overflow vertical show-for-medium",
                                                style: {
                                                    paddingTop: 0,
                                                    minWidth: 358,
                                                    maxWidth: 400
                                                }
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block no-padding no-margin vertical"
                                                },
                                                n.a.createElement(se.a, {
                                                    className:
                                                        "left-order-book no-padding no-overflow",
                                                    headerStyle: {
                                                        paddingTop: 0
                                                    },
                                                    columns: [
                                                        {
                                                            name: "star",
                                                            index: 1
                                                        },
                                                        {
                                                            name: "market",
                                                            index: 2
                                                        },
                                                        {name: "vol", index: 3},
                                                        {
                                                            name: "price",
                                                            index: 4
                                                        },
                                                        {
                                                            name: "change",
                                                            index: 5
                                                        }
                                                    ],
                                                    findColumns: [
                                                        {
                                                            name: "market",
                                                            index: 1
                                                        },
                                                        {
                                                            name: "issuer",
                                                            index: 2
                                                        },
                                                        {name: "vol", index: 3},
                                                        {name: "add", index: 4}
                                                    ],
                                                    current: Z + "_" + $
                                                })
                                            ),
                                            n.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        padding: this.props
                                                            .miniDepthChart
                                                            ? "0 0 40px 0"
                                                            : 0
                                                    },
                                                    className:
                                                        "grid-block no-margin vertical shrink"
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        onClick: this._toggleMiniChart.bind(
                                                            this
                                                        ),
                                                        className:
                                                            "exchange-content-header clickable",
                                                        style: {
                                                            textAlign: "left",
                                                            paddingRight: 10
                                                        }
                                                    },
                                                    this.props.miniDepthChart
                                                        ? n.a.createElement(
                                                              "span",
                                                              null,
                                                              "▼"
                                                          )
                                                        : n.a.createElement(
                                                              "span",
                                                              null,
                                                              "▲"
                                                          )
                                                ),
                                                this.props.miniDepthChart
                                                    ? n.a.createElement(Ye, {
                                                          marketReady: d,
                                                          orders: a,
                                                          showCallLimit: ee,
                                                          call_orders: r,
                                                          flat_asks: O,
                                                          flat_bids: A,
                                                          flat_calls: ee
                                                              ? N
                                                              : [],
                                                          flat_settles:
                                                              this.props.settings.get(
                                                                  "showSettles"
                                                              ) && P,
                                                          settles: m,
                                                          invertedCalls: i,
                                                          totalBids: g.bid,
                                                          totalAsks: g.ask,
                                                          base: J,
                                                          quote: Q,
                                                          height: 200,
                                                          onClick: this._depthChartClick.bind(
                                                              this,
                                                              J,
                                                              Q
                                                          ),
                                                          settlementPrice:
                                                              !Ne &&
                                                              b &&
                                                              b.toReal(),
                                                          spread: ce,
                                                          LCP: ee ? p : null,
                                                          leftOrderBook: M,
                                                          hasPrediction: Ne,
                                                          noText: !0,
                                                          theme: this.props.settings.get(
                                                              "themes"
                                                          )
                                                      })
                                                    : null
                                            )
                                        ),
                                        ie
                                            ? n.a.createElement(Ge.a, {
                                                  ref: "borrowQuote",
                                                  modalId:
                                                      "borrow_modal_quote_" +
                                                      c.get("id"),
                                                  quote_asset: c.get("id"),
                                                  backing_asset: c.getIn([
                                                      "bitasset",
                                                      "options",
                                                      "short_backing_asset"
                                                  ]),
                                                  account: t
                                              })
                                            : null,
                                        le
                                            ? n.a.createElement(Ge.a, {
                                                  ref: "borrowBase",
                                                  modalId:
                                                      "borrow_modal_base_" +
                                                      u.get("id"),
                                                  quote_asset: u.get("id"),
                                                  backing_asset: u.getIn([
                                                      "bitasset",
                                                      "options",
                                                      "short_backing_asset"
                                                  ]),
                                                  account: t
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
            (Mt.propTypes = {
                marketCallOrders: g.a.object.isRequired,
                activeMarketHistory: g.a.object.isRequired,
                viewSettings: g.a.object.isRequired,
                priceData: g.a.array.isRequired,
                volumeData: g.a.array.isRequired
            }),
                (Mt.defaultProps = {
                    marketCallOrders: [],
                    activeMarketHistory: {},
                    viewSettings: {},
                    priceData: [],
                    volumeData: []
                });
            var Ft = Mt,
                qt = a(133),
                jt =
                    Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var r in a)
                                Object.prototype.hasOwnProperty.call(a, r) &&
                                    (e[r] = a[r]);
                        }
                        return e;
                    },
                Rt = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t;
                    };
                })();
            function Lt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Dt(e, t) {
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
            var Ut = (function(e) {
                    function t() {
                        return (
                            Lt(this, t),
                            Dt(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        zt(t, n.a.Component),
                        Rt(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.params.marketID
                                        .toUpperCase()
                                        .split("_");
                                    return e[0] === e[1]
                                        ? n.a.createElement(qt.default, {
                                              subtitle:
                                                  "market_not_found_subtitle"
                                          })
                                        : n.a.createElement(
                                              d.a,
                                              {
                                                  stores: [
                                                      o.a,
                                                      s.a,
                                                      l.a,
                                                      p.a,
                                                      u.a
                                                  ],
                                                  inject: {
                                                      locale: function() {
                                                          return u.a.getState()
                                                              .currentLocale;
                                                      },
                                                      lockedWalletState: function() {
                                                          return p.a.getState()
                                                              .locked;
                                                      },
                                                      marketLimitOrders: function() {
                                                          return o.a.getState()
                                                              .marketLimitOrders;
                                                      },
                                                      marketCallOrders: function() {
                                                          return o.a.getState()
                                                              .marketCallOrders;
                                                      },
                                                      invertedCalls: function() {
                                                          return o.a.getState()
                                                              .invertedCalls;
                                                      },
                                                      marketSettleOrders: function() {
                                                          return o.a.getState()
                                                              .marketSettleOrders;
                                                      },
                                                      marketData: function() {
                                                          return o.a.getState()
                                                              .marketData;
                                                      },
                                                      totals: function() {
                                                          return o.a.getState()
                                                              .totals;
                                                      },
                                                      priceData: function() {
                                                          return o.a.getState()
                                                              .priceData;
                                                      },
                                                      volumeData: function() {
                                                          return o.a.getState()
                                                              .volumeData;
                                                      },
                                                      activeMarketHistory: function() {
                                                          return o.a.getState()
                                                              .activeMarketHistory;
                                                      },
                                                      bucketSize: function() {
                                                          return o.a.getState()
                                                              .bucketSize;
                                                      },
                                                      buckets: function() {
                                                          return o.a.getState()
                                                              .buckets;
                                                      },
                                                      lowestCallPrice: function() {
                                                          return o.a.getState()
                                                              .lowestCallPrice;
                                                      },
                                                      feedPrice: function() {
                                                          return o.a.getState()
                                                              .feedPrice;
                                                      },
                                                      currentAccount: function() {
                                                          return s.a.getState()
                                                              .currentAccount;
                                                      },
                                                      myActiveAccounts: function() {
                                                          return s.a.getState()
                                                              .myActiveAccounts;
                                                      },
                                                      viewSettings: function() {
                                                          return l.a.getState()
                                                              .viewSettings;
                                                      },
                                                      settings: function() {
                                                          return l.a.getState()
                                                              .settings;
                                                      },
                                                      exchange: function() {
                                                          return l.a.getState()
                                                              .exchange;
                                                      },
                                                      starredMarkets: function() {
                                                          return l.a.getState()
                                                              .starredMarkets;
                                                      },
                                                      marketDirections: function() {
                                                          return l.a.getState()
                                                              .marketDirections;
                                                      },
                                                      marketStats: function() {
                                                          return o.a.getState()
                                                              .marketStats;
                                                      },
                                                      marketReady: function() {
                                                          return o.a.getState()
                                                              .marketReady;
                                                      },
                                                      backedCoins: function() {
                                                          return c.a
                                                              .getState()
                                                              .backedCoins.get(
                                                                  "OPEN",
                                                                  []
                                                              );
                                                      },
                                                      bridgeCoins: function() {
                                                          return c.a.getState()
                                                              .bridgeCoins;
                                                      },
                                                      searchAssets: function() {
                                                          return i.a.getState()
                                                              .assets;
                                                      },
                                                      assetsLoading: function() {
                                                          return i.a.getState()
                                                              .assetsLoading;
                                                      },
                                                      miniDepthChart: function() {
                                                          return l.a
                                                              .getState()
                                                              .viewSettings.get(
                                                                  "miniDepthChart",
                                                                  !0
                                                              );
                                                      },
                                                      dataFeed: function() {
                                                          return new Re();
                                                      }
                                                  }
                                              },
                                              n.a.createElement(Gt, {
                                                  router: this.props.router,
                                                  quoteAsset: e[0],
                                                  baseAsset: e[1]
                                              })
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Wt = Object(J.e)(),
                Ht = void 0,
                Vt = void 0,
                Jt = void 0,
                Qt = void 0,
                Yt = void 0,
                Gt = (function(e) {
                    function t() {
                        Lt(this, t);
                        var e = Dt(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = {sub: null}),
                            (e._subToMarket = e._subToMarket.bind(e)),
                            e
                        );
                    }
                    return (
                        zt(t, n.a.Component),
                        Rt(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    null !== this.props.quoteAsset &&
                                        null !== this.props.baseAsset &&
                                        (this.props.quoteAsset.toJS &&
                                            this.props.baseAsset.toJS &&
                                            this._subToMarket(this.props),
                                        Wt.on(
                                            "cancel-order",
                                            (Vt = b.a.cancelLimitOrderSuccess)
                                        ),
                                        Wt.on(
                                            "close-call",
                                            (Ht = b.a.closeCallOrderSuccess)
                                        ),
                                        Wt.on(
                                            "call-order-update",
                                            (Jt = function(t) {
                                                var a =
                                                        t.call_price.base
                                                            .asset_id,
                                                    r =
                                                        t.call_price.quote
                                                            .asset_id,
                                                    n = e.props.baseAsset.get(
                                                        "id"
                                                    ),
                                                    o = e.props.quoteAsset.get(
                                                        "id"
                                                    );
                                                (a !== n && a !== o) ||
                                                    (r !== n && r !== o) ||
                                                    b.a.callOrderUpdate(t);
                                            })
                                        ),
                                        Wt.on(
                                            "bitasset-update",
                                            (Qt = b.a.feedUpdate)
                                        ),
                                        Wt.on(
                                            "settle-order-update",
                                            (Yt = function(t) {
                                                var a = market_utils.isMarketAsset(
                                                        e.props.quoteAsset,
                                                        e.props.baseAsset
                                                    ),
                                                    r = a.isMarketAsset,
                                                    n = a.marketAsset;
                                                r &&
                                                    n.id ===
                                                        t.balance.asset_id &&
                                                    b.a.settleOrderUpdate(n.id);
                                            })
                                        ));
                                }
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function(e) {
                                    var t = this;
                                    if (
                                        null !== e.quoteAsset &&
                                        null !== e.baseAsset
                                    ) {
                                        if (
                                            (e.baseAsset &&
                                                e.baseAsset.getIn([
                                                    "bitasset",
                                                    "is_prediction_market"
                                                ]) &&
                                                this.props.router.push(
                                                    "/market/" +
                                                        e.baseAsset.get(
                                                            "symbol"
                                                        ) +
                                                        "_" +
                                                        e.quoteAsset.get(
                                                            "symbol"
                                                        )
                                                ),
                                            e.quoteAsset &&
                                                e.baseAsset &&
                                                !this.state.sub)
                                        )
                                            return this._subToMarket(e);
                                        if (
                                            e.quoteAsset.get("symbol") !==
                                                this.props.quoteAsset.get(
                                                    "symbol"
                                                ) ||
                                            e.baseAsset.get("symbol") !==
                                                this.props.baseAsset.get(
                                                    "symbol"
                                                )
                                        ) {
                                            var a = this.state.sub.split("_");
                                            b.a
                                                .unSubscribeMarket(a[0], a[1])
                                                .then(function() {
                                                    t._subToMarket(e);
                                                });
                                        }
                                    }
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    var e = this.props,
                                        t = e.quoteAsset,
                                        a = e.baseAsset;
                                    null !== t &&
                                        null !== a &&
                                        (b.a.unSubscribeMarket(
                                            t.get("id"),
                                            a.get("id")
                                        ),
                                        Wt &&
                                            (Wt.off("cancel-order", Vt),
                                            Wt.off("close-call", Ht),
                                            Wt.off("call-order-update", Jt),
                                            Wt.off("bitasset-update", Qt),
                                            Wt.off("settle-order-update", Yt)));
                                }
                            },
                            {
                                key: "_subToMarket",
                                value: function(e, t) {
                                    var a = e.quoteAsset,
                                        r = e.baseAsset,
                                        n = e.bucketSize;
                                    t && (n = t),
                                        a.get("id") &&
                                            r.get("id") &&
                                            (b.a.subscribeMarket.defer(r, a, n),
                                            this.setState({
                                                sub:
                                                    a.get("id") +
                                                    "_" +
                                                    r.get("id")
                                            }));
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return null === this.props.quoteAsset ||
                                        null === this.props.baseAsset
                                        ? n.a.createElement(qt.default, {
                                              subtitle:
                                                  "market_not_found_subtitle"
                                          })
                                        : n.a.createElement(
                                              Ft,
                                              jt({}, this.props, {
                                                  sub: this.state.sub,
                                                  subToMarket: this._subToMarket
                                              })
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (Gt.propTypes = {
                currentAccount: le.a.ChainAccount.isRequired,
                quoteAsset: le.a.ChainAsset.isRequired,
                baseAsset: le.a.ChainAsset.isRequired,
                coreAsset: le.a.ChainAsset.isRequired
            }),
                (Gt.defaultProps = {
                    currentAccount: "1.2.3",
                    coreAsset: "1.3.0"
                }),
                (Gt = Object(ce.a)(Gt, {show_loader: !0}));
            t.default = Ut;
        },
        791: function(e, t, a) {
            !(function(e) {
                "use strict";
                function t(e, a) {
                    var n = r({}, e);
                    for (var o in a)
                        "object" != typeof e[o] ||
                        null === e[o] ||
                        Array.isArray(e[o])
                            ? void 0 !== a[o] && (n[o] = a[o])
                            : (n[o] = t(e[o], a[o]));
                    return n;
                }
                function a() {
                    return "1.12 (internal id 7580da73 @ 2018-05-14 05:13:04.428607)";
                }
                var r =
                        Object.assign ||
                        function(e) {
                            for (
                                var t,
                                    a = arguments,
                                    r = 1,
                                    n = arguments.length;
                                r < n;
                                r++
                            )
                                for (var o in (t = a[r]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        o
                                    ) && (e[o] = t[o]);
                            return e;
                        },
                    n = {
                        mobile: {
                            disabled_features: [
                                "left_toolbar",
                                "header_widget",
                                "timeframes_toolbar",
                                "edit_buttons_in_legend",
                                "context_menus",
                                "control_bar",
                                "border_around_the_chart"
                            ],
                            enabled_features: []
                        }
                    },
                    o = {
                        width: 800,
                        height: 500,
                        symbol: "AA",
                        interval: "D",
                        timezone: "UTC",
                        container_id: "",
                        library_path: "",
                        locale: "en",
                        widgetbar: {
                            details: !1,
                            watchlist: !1,
                            watchlist_settings: {default_symbols: []}
                        },
                        overrides: {"mainSeriesProperties.showCountdown": !1},
                        studies_overrides: {},
                        brokerConfig: {configFlags: {}},
                        fullscreen: !1,
                        autosize: !1,
                        disabled_features: [],
                        enabled_features: [],
                        debug: !1,
                        logo: {},
                        time_frames: [
                            {text: "5y", resolution: "W"},
                            {text: "1y", resolution: "W"},
                            {text: "6m", resolution: "120"},
                            {text: "3m", resolution: "60"},
                            {text: "1m", resolution: "30"},
                            {text: "5d", resolution: "5"},
                            {text: "1d", resolution: "1"}
                        ],
                        client_id: "0",
                        user_id: "0",
                        charts_storage_api_version: "1.0",
                        favorites: {intervals: [], chartTypes: []}
                    },
                    s = (function() {
                        function e(e) {
                            if (
                                ((this._id =
                                    "tradingview_" +
                                    ((1048576 * (1 + Math.random())) | 0)
                                        .toString(16)
                                        .substring(1)),
                                (this._ready = !1),
                                (this._readyHandlers = []),
                                (this._onWindowResize = this._autoResizeChart.bind(
                                    this
                                )),
                                !e.datafeed)
                            )
                                throw new Error("Datafeed is not defined");
                            if (((this._options = t(o, e)), e.preset)) {
                                var a = n[e.preset];
                                a
                                    ? (void 0 !==
                                      this._options.disabled_features
                                          ? (this._options.disabled_features = this._options.disabled_features.concat(
                                                a.disabled_features
                                            ))
                                          : (this._options.disabled_features =
                                                a.disabled_features),
                                      void 0 !== this._options.enabled_features
                                          ? (this._options.enabled_features = this._options.enabled_features.concat(
                                                a.enabled_features
                                            ))
                                          : (this._options.enabled_features =
                                                a.enabled_features))
                                    : console.warn(
                                          "Unknown preset: `" + e.preset + "`"
                                      );
                            }
                            this._create();
                        }
                        return (
                            (e.prototype.onChartReady = function(e) {
                                this._ready
                                    ? e.call(this)
                                    : this._readyHandlers.push(e);
                            }),
                            (e.prototype.onGrayedObjectClicked = function(e) {
                                this._innerAPI().onGrayedObjectClicked(e);
                            }),
                            (e.prototype.onShortcut = function(e, t) {
                                this._innerWindow().createShortcutAction(e, t);
                            }),
                            (e.prototype.subscribe = function(e, t) {
                                this._innerAPI().subscribe(e, t);
                            }),
                            (e.prototype.unsubscribe = function(e, t) {
                                this._innerAPI().unsubscribe(e, t);
                            }),
                            (e.prototype.chart = function(e) {
                                return this._innerAPI().chart(e);
                            }),
                            (e.prototype.setLanguage = function(e) {
                                this.remove(),
                                    (this._options.locale = e),
                                    this._create();
                            }),
                            (e.prototype.setSymbol = function(e, t, a) {
                                this._innerAPI().changeSymbol(e, t + "", a);
                            }),
                            (e.prototype.remove = function() {
                                window.removeEventListener(
                                    "resize",
                                    this._onWindowResize
                                ),
                                    this._readyHandlers.splice(
                                        0,
                                        this._readyHandlers.length
                                    ),
                                    delete window[this._id];
                                var e = this._getIFrameElement();
                                e.contentWindow.destroyChart(),
                                    e.parentNode && e.parentNode.removeChild(e);
                            }),
                            (e.prototype.closePopupsAndDialogs = function() {
                                this._innerAPI().closePopupsAndDialogs();
                            }),
                            (e.prototype.selectLineTool = function(e) {
                                this._innerAPI().selectLineTool(e);
                            }),
                            (e.prototype.selectedLineTool = function() {
                                return this._innerAPI().selectedLineTool();
                            }),
                            (e.prototype.save = function(e) {
                                this._innerAPI().saveChart(e);
                            }),
                            (e.prototype.load = function(e, t) {
                                this._innerAPI().loadChart({
                                    json: e,
                                    extendedData: t
                                });
                            }),
                            (e.prototype.getSavedCharts = function(e) {
                                this._innerAPI().getSavedCharts(e);
                            }),
                            (e.prototype.loadChartFromServer = function(e) {
                                this._innerAPI().loadChartFromServer(e);
                            }),
                            (e.prototype.saveChartToServer = function(
                                e,
                                t,
                                a,
                                r
                            ) {
                                this._innerAPI().saveChartToServer(e, t, a, r);
                            }),
                            (e.prototype.removeChartFromServer = function(
                                e,
                                t
                            ) {
                                this._innerAPI().removeChartFromServer(e, t);
                            }),
                            (e.prototype.onContextMenu = function(e) {
                                this._innerAPI().onContextMenu(e);
                            }),
                            (e.prototype.createButton = function(e) {
                                return this._innerWindow().createButton(e);
                            }),
                            (e.prototype.showNoticeDialog = function(e) {
                                this._innerAPI().showNoticeDialog(e);
                            }),
                            (e.prototype.showConfirmDialog = function(e) {
                                this._innerAPI().showConfirmDialog(e);
                            }),
                            (e.prototype.showLoadChartDialog = function() {
                                this._innerAPI().showLoadChartDialog();
                            }),
                            (e.prototype.showSaveAsChartDialog = function() {
                                this._innerAPI().showSaveAsChartDialog();
                            }),
                            (e.prototype.symbolInterval = function() {
                                return this._innerAPI().getSymbolInterval();
                            }),
                            (e.prototype.mainSeriesPriceFormatter = function() {
                                return this._innerAPI().mainSeriesPriceFormatter();
                            }),
                            (e.prototype.getIntervals = function() {
                                return this._innerAPI().getIntervals();
                            }),
                            (e.prototype.getStudiesList = function() {
                                return this._innerAPI().getStudiesList();
                            }),
                            (e.prototype.addCustomCSSFile = function(e) {
                                this._innerWindow().addCustomCSSFile(e);
                            }),
                            (e.prototype.applyOverrides = function(e) {
                                (this._options = t(this._options, {
                                    overrides: e
                                })),
                                    this._innerWindow().applyOverrides(e);
                            }),
                            (e.prototype.applyStudiesOverrides = function(e) {
                                this._innerWindow().applyStudiesOverrides(e);
                            }),
                            (e.prototype.watchList = function() {
                                return this._innerAPI().watchlist();
                            }),
                            (e.prototype.activeChart = function() {
                                return this._innerAPI().activeChart();
                            }),
                            (e.prototype.chartsCount = function() {
                                return this._innerAPI().chartsCount();
                            }),
                            (e.prototype.layout = function() {
                                return this._innerAPI().layout();
                            }),
                            (e.prototype.setLayout = function(e) {
                                this._innerAPI().setLayout(e);
                            }),
                            (e.prototype._getIFrameElement = function() {
                                var e = document.getElementById(this._id);
                                if (null === e)
                                    throw new Error("There is no such iframe");
                                return e;
                            }),
                            (e.prototype._innerAPI = function() {
                                return this._getIFrameElement().contentWindow
                                    .tradingViewApi;
                            }),
                            (e.prototype._innerWindow = function() {
                                return this._getIFrameElement().contentWindow;
                            }),
                            (e.prototype._autoResizeChart = function() {
                                this._options.fullscreen &&
                                    (this._getIFrameElement().style.height =
                                        window.innerHeight + "px");
                            }),
                            (e.prototype._create = function() {
                                var e = this,
                                    t = this._render(),
                                    a = document.getElementById(
                                        this._options.container_id
                                    );
                                if (null === a)
                                    throw new Error(
                                        "There is no such element - #" +
                                            this._options.container_id
                                    );
                                a.innerHTML = t;
                                var r = this._getIFrameElement();
                                (this._options.autosize ||
                                    this._options.fullscreen) &&
                                    ((r.style.width = "100%"),
                                    this._options.fullscreen ||
                                        (r.style.height = "100%")),
                                    window.addEventListener(
                                        "resize",
                                        this._onWindowResize
                                    ),
                                    this._onWindowResize();
                                var n = function() {
                                    r.removeEventListener("load", n, !1),
                                        r.contentWindow.widgetReady(function() {
                                            e._ready = !0;
                                            for (
                                                var t = 0, a = e._readyHandlers;
                                                t < a.length;
                                                t++
                                            )
                                                a[t].call(e);
                                            r.contentWindow.initializationFinished();
                                        });
                                };
                                r.addEventListener("load", n, !1);
                            }),
                            (e.prototype._render = function() {
                                var e = window;
                                (e[this._id] = {
                                    datafeed: this._options.datafeed,
                                    customFormatters: this._options
                                        .customFormatters,
                                    brokerFactory: this._options.brokerFactory,
                                    overrides: this._options.overrides,
                                    studiesOverrides: this._options
                                        .studies_overrides,
                                    disabledFeatures: this._options
                                        .disabled_features,
                                    enabledFeatures: this._options
                                        .enabled_features,
                                    brokerConfig: this._options.brokerConfig,
                                    restConfig: this._options.restConfig,
                                    favorites: this._options.favorites,
                                    logo: this._options.logo,
                                    numeric_formatting: this._options
                                        .numeric_formatting,
                                    rss_news_feed: this._options.rss_news_feed,
                                    newsProvider: this._options.news_provider,
                                    loadLastChart: this._options
                                        .load_last_chart,
                                    saveLoadAdapter: this._options
                                        .save_load_adapter,
                                    loading_screen: this._options
                                        .loading_screen,
                                    settingsAdapter: this._options
                                        .settings_adapter
                                }),
                                    this._options.saved_data &&
                                        (e[this._id].chartContent = {
                                            json: this._options.saved_data
                                        });
                                var t =
                                    (this._options.library_path || "") +
                                    "static/tv-chart.7580da73a91e1354cb09.html#localserver=1&symbol=" +
                                    encodeURIComponent(this._options.symbol) +
                                    "&interval=" +
                                    encodeURIComponent(this._options.interval) +
                                    (this._options.timeframe
                                        ? "&timeframe=" +
                                          encodeURIComponent(
                                              this._options.timeframe
                                          )
                                        : "") +
                                    (this._options.toolbar_bg
                                        ? "&toolbarbg=" +
                                          this._options.toolbar_bg.replace(
                                              "#",
                                              ""
                                          )
                                        : "") +
                                    (this._options.studies_access
                                        ? "&studiesAccess=" +
                                          encodeURIComponent(
                                              JSON.stringify(
                                                  this._options.studies_access
                                              )
                                          )
                                        : "") +
                                    "&widgetbar=" +
                                    encodeURIComponent(
                                        JSON.stringify(this._options.widgetbar)
                                    ) +
                                    (this._options.drawings_access
                                        ? "&drawingsAccess=" +
                                          encodeURIComponent(
                                              JSON.stringify(
                                                  this._options.drawings_access
                                              )
                                          )
                                        : "") +
                                    "&timeFrames=" +
                                    encodeURIComponent(
                                        JSON.stringify(
                                            this._options.time_frames
                                        )
                                    ) +
                                    "&locale=" +
                                    encodeURIComponent(this._options.locale) +
                                    "&uid=" +
                                    encodeURIComponent(this._id) +
                                    "&clientId=" +
                                    encodeURIComponent(
                                        String(this._options.client_id)
                                    ) +
                                    "&userId=" +
                                    encodeURIComponent(
                                        String(this._options.user_id)
                                    ) +
                                    (this._options.charts_storage_url
                                        ? "&chartsStorageUrl=" +
                                          encodeURIComponent(
                                              this._options.charts_storage_url
                                          )
                                        : "") +
                                    (this._options.charts_storage_api_version
                                        ? "&chartsStorageVer=" +
                                          encodeURIComponent(
                                              this._options
                                                  .charts_storage_api_version
                                          )
                                        : "") +
                                    (this._options.indicators_file_name
                                        ? "&indicatorsFile=" +
                                          encodeURIComponent(
                                              this._options.indicators_file_name
                                          )
                                        : "") +
                                    (this._options.custom_css_url
                                        ? "&customCSS=" +
                                          encodeURIComponent(
                                              this._options.custom_css_url
                                          )
                                        : "") +
                                    (this._options.auto_save_delay
                                        ? "&autoSaveDelay=" +
                                          encodeURIComponent(
                                              String(
                                                  this._options.auto_save_delay
                                              )
                                          )
                                        : "") +
                                    "&debug=" +
                                    this._options.debug +
                                    (this._options.snapshot_url
                                        ? "&snapshotUrl=" +
                                          encodeURIComponent(
                                              this._options.snapshot_url
                                          )
                                        : "") +
                                    (this._options.timezone
                                        ? "&timezone=" +
                                          encodeURIComponent(
                                              this._options.timezone
                                          )
                                        : "") +
                                    (this._options.study_count_limit
                                        ? "&studyCountLimit=" +
                                          encodeURIComponent(
                                              String(
                                                  this._options
                                                      .study_count_limit
                                              )
                                          )
                                        : "") +
                                    (this._options.symbol_search_request_delay
                                        ? "&ssreqdelay=" +
                                          encodeURIComponent(
                                              String(
                                                  this._options
                                                      .symbol_search_request_delay
                                              )
                                          )
                                        : "");
                                return (
                                    '<iframe id="' +
                                    this._id +
                                    '" name="' +
                                    this._id +
                                    '"  src="' +
                                    t +
                                    '"' +
                                    (this._options.autosize ||
                                    this._options.fullscreen
                                        ? ""
                                        : ' width="' +
                                          this._options.width +
                                          '" height="' +
                                          this._options.height +
                                          '"') +
                                    ' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'
                                );
                            }),
                            e
                        );
                    })();
                (window.TradingView = window.TradingView || {}),
                    (window.TradingView.version = a),
                    (e.version = a),
                    (e.onready = function(e) {
                        window.addEventListener("DOMContentLoaded", e, !1);
                    }),
                    (e.widget = s),
                    Object.defineProperty(e, "__esModule", {value: !0});
            })(t);
        }
    }
]);
