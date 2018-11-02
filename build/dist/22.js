(window.webpackJsonp = window.webpackJsonp || []).push([
    [22, 43],
    {
        112: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                s = a(1),
                o = a.n(s),
                i = a(4),
                l = a(6),
                c = a(13),
                u = a(3),
                p = a.n(u),
                h = a(147),
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
                    C(t, r.a.Component),
                    k(t, [
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
                                              ? r.a.createElement(d.a, {
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
            (S.propTypes = {value: _.a.string, onChange: _.a.func}),
                (S = Object(y.a)(S, {asList: !0}));
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
                    C(t, r.a.Component),
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
                                                        ? r.a.createElement(S, {
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
                (x.defaultProps = {disabled: !1}),
                (t.a = Object(c.a)(x));
        },
        113: function(e, t, a) {
            "use strict";
            var n = a(4),
                r = (function() {
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
            var s = (function() {
                function e() {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (this.getPairsCourse = function(e) {
                            this.ajax(e, "GetPairsCourse");
                        });
                }
                return (
                    r(e, [
                        {
                            key: "getBaseUrl",
                            value: function() {
                                return "https://llcgateway.localcoin.is/";
                            }
                        },
                        {
                            key: "getAllowCurrency",
                            value: function(e) {
                                this.ajax(e, "GetAllowCurrency");
                            }
                        },
                        {
                            key: "сreatePaymentAddress",
                            value: function(e, t, a, n) {
                                this.ajax(
                                    function(e) {
                                        n(e.address);
                                    },
                                    "CreatePaymentAddress",
                                    {account: e, asset: t, type: a}
                                );
                            }
                        },
                        {
                            key: "validateAddress",
                            value: function(e, t, a) {
                                this.ajax(a, "ValidateAddress", {
                                    address: e,
                                    currency: t
                                });
                            }
                        },
                        {
                            key: "ajax",
                            value: function(e, t, a) {
                                void 0 === a && (a = null);
                                var n =
                                    this.getBaseUrl() +
                                    "?methodnameaction=" +
                                    t;
                                a && (n += "&" + this.encodeQueryData(a)),
                                    fetch(n)
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(e);
                            }
                        },
                        {
                            key: "encodeQueryData",
                            value: function(e) {
                                var t = [];
                                for (var a in e)
                                    t.push(
                                        encodeURIComponent(a) +
                                            "=" +
                                            encodeURIComponent(e[a])
                                    );
                                return t.join("&");
                            }
                        },
                        {
                            key: "precisionToCoef",
                            value: function(e) {
                                for (var t = "1", a = 0; a < e; a++) t += "0";
                                return parseInt(t);
                            }
                        },
                        {
                            key: "getUserBalance",
                            value: function(e, t, a) {
                                var r = [],
                                    s = function(e, t, a) {
                                        return e ? (t ? t / a : 0) : t;
                                    },
                                    o = e.get("balances").toJS();
                                for (var i in o) {
                                    var l = n.b.getAsset(i);
                                    if (l) {
                                        var c = o[i],
                                            u = n.b.getObject(c),
                                            p = l.get("precision"),
                                            h = this.precisionToCoef(p);
                                        r[l.get("symbol")] = s(
                                            t,
                                            u.get("balance"),
                                            h
                                        );
                                    }
                                }
                                return void 0 !== a
                                    ? void 0 !== r[a]
                                        ? r[a]
                                        : 0
                                    : r;
                            }
                        }
                    ]),
                    e
                );
            })();
            t.a = s;
        },
        152: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(11),
                o = a(15),
                i = a(8),
                l = a(1),
                c = a.n(l),
                u = a(58),
                p = (function() {
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
                    })(t, r.a.Component),
                    p(t, [
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
                                                s.b,
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
            (h.defaultProps = {subtitle: "page_not_found_subtitle"}),
                (t.default = h = Object(o.connect)(h, {
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
            var n = a(76),
                r = a(0),
                s = a.n(r),
                o = a(7),
                i = a.n(o),
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
            (_.propTypes = {account: b.a.ChainObject.isRequired}),
                (_.defaultProps = {autosubscribe: !1});
            var k = Object(y.a)(_),
                E = a(12),
                w = a(35),
                C = a(10),
                S = a(2),
                x = a.n(S),
                A = (function() {
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
            var N = (function(e) {
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
                                    n = t.base,
                                    r = (t.noSymbols, t.stats),
                                    o = t.starred;
                                if (!a || !n) return null;
                                var i = a.get("symbol") + "_" + n.get("symbol"),
                                    l = a.get("symbol") + "/" + n.get("symbol"),
                                    c = this.props.getDynamicObject(
                                        a.get("dynamic_asset_data_id")
                                    ),
                                    p = this.props.getDynamicObject(
                                        n.get("dynamic_asset_data_id")
                                    ),
                                    h = u.a.convertPrice(a, n),
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
                                                    var d = o
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
                                                            className: d,
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
                                                    var y = u.a.format_number(
                                                            r && r.change
                                                                ? r.change
                                                                : 0,
                                                            2
                                                        ),
                                                        v =
                                                            "0.00" === y
                                                                ? ""
                                                                : y > 0
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
                                                        y + "%"
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
                                                    return s.a.createElement(
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
                                                                n.get("symbol")
                                                            ) && (C = 8),
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
                                                                        : C
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
                                                        s.a.createElement(k, {
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
                                    y = "clickable";
                                return (
                                    this.props.current &&
                                        (y += " activeMarket"),
                                    s.a.createElement(
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
            (N.defaultProps = {noSymbols: !1}),
                (N.contextTypes = {router: x.a.object.isRequired});
            var O = Object(g.a)(N, {
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
                j = a.n(F),
                q = a(112),
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
                        })(t, s.a.Component),
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
                                    return s.a.createElement(
                                        H.a,
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
                                                        function(t, n) {
                                                            return s.a.createElement(
                                                                "tr",
                                                                {key: t},
                                                                s.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    n + 1
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
                                                                    n !==
                                                                        a - 1 &&
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
                                                                    0 !== n &&
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
                                                                    a > 1 &&
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
                                                s.a.createElement(q.a, {
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
                G = (function() {
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
            function Y(e, t) {
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
                        Y(this, t);
                        var a = K(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (a.state = a._getInitialState(e)), a;
                    }
                    return (
                        X(t, s.a.Component),
                        G(t, [
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
                                        n = a[0],
                                        r = a[1],
                                        s = !this.props.userMarkets.get(e);
                                    C.a.setUserMarket(n, r, s);
                                }
                            },
                            {
                                key: "setCookie",
                                value: function(e, t, a) {
                                    var n = (a = a || {}).expires;
                                    if ("number" == typeof n && n) {
                                        var r = new Date();
                                        r.setTime(r.getTime() + 1e3 * n),
                                            (n = a.expires = r);
                                    }
                                    n &&
                                        n.toUTCString &&
                                        (a.expires = n.toUTCString());
                                    var s =
                                        e + "=" + (t = encodeURIComponent(t));
                                    for (var o in a) {
                                        s += "; " + o;
                                        var i = a[o];
                                        !0 !== i && (s += "=" + i);
                                    }
                                    document.cookie = s;
                                }
                            },
                            {
                                key: "getCookie",
                                value: function(e) {
                                    var t = document.cookie,
                                        a = e + "=",
                                        n = t.indexOf("; " + a),
                                        r = null;
                                    if (-1 == n) {
                                        if (0 != (n = t.indexOf(a)))
                                            return null;
                                        r = document.cookie.indexOf(";", n);
                                    } else
                                        (n += 2),
                                            -1 ==
                                                (r = document.cookie.indexOf(
                                                    ";",
                                                    n
                                                )) && (r = t.length);
                                    return decodeURI(
                                        t.substring(n + a.length, r)
                                    ).replace(/"/g, "");
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
                                        c = this.state,
                                        u = c.sortBy,
                                        p = c.inverseSort,
                                        d = c.open;
                                    if (!n || !n.length) return null;
                                    var m = a.map(function(t) {
                                            switch (t.name) {
                                                case "market":
                                                    var a = "",
                                                        n = e.getCookie(
                                                            "gt_get_sort"
                                                        );
                                                    return (
                                                        "name" !=
                                                            e.state.sortBy ||
                                                        ("name-false" != n &&
                                                            null != n)
                                                            ? "name" ==
                                                                  e.state
                                                                      .sortBy &&
                                                              "name-true" ==
                                                                  n &&
                                                              (a = s.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  "▼"
                                                              ))
                                                            : (a = s.a.createElement(
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
                                                            a
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
                                        f = n
                                            .map(function(t) {
                                                return e.props.onlyLiquid &&
                                                    o.get(t.id) &&
                                                    0 == o.get(t.id).volumeBase
                                                    ? null
                                                    : s.a.createElement(O, {
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
                                                var n = t.key.split("_"),
                                                    r = a.key.split("_"),
                                                    s = o.get(
                                                        n[0] + "_" + n[1]
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
                                                            n[0] > r[0]
                                                                ? p
                                                                    ? -1
                                                                    : 1
                                                                : n[0] < r[0]
                                                                    ? p
                                                                        ? 1
                                                                        : -1
                                                                    : n[1] >
                                                                      r[1]
                                                                        ? p
                                                                            ? -1
                                                                            : 1
                                                                        : n[1] <
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
                                        d
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
                                                          m
                                                      )
                                                  ),
                                                  f && f.length
                                                      ? s.a.createElement(
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
                    Y(this, t);
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
                        (a.getAssetList = Object(n.a)(
                            M.a.getAssetList.defer,
                            150
                        )),
                        a
                    );
                }
                return (
                    X(t, s.a.Component),
                    G(t, [
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
                                        n = e.toUpperCase().split(":"),
                                        r = n[0],
                                        s = 2 === n.length ? n[1] : null;
                                    if (
                                        (this.setState({
                                            lookupQuote: r,
                                            lookupBase: s
                                        }),
                                        C.a.changeViewSetting.defer({
                                            marketLookupInput: e.toUpperCase()
                                        }),
                                        this.state.lookupQuote !== r || t)
                                    ) {
                                        if (r.length < 1 || a - Z <= 250)
                                            return !1;
                                        this.getAssetList(r, 50);
                                    } else if (
                                        s &&
                                        this.state.lookupBase !== s
                                    ) {
                                        if (s.length < 1 || a - Z <= 250)
                                            return !1;
                                        this.getAssetList(s, 50);
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
                                    n = t.starredMarkets,
                                    r = t.defaultMarkets,
                                    o = t.marketStats,
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
                                    S = v.lookupBase,
                                    x = s.a.createElement("tr", null),
                                    A = "my-market" === k,
                                    N = p.map(function(e) {
                                        return e;
                                    });
                                A ||
                                    (p = (p = p.clear()).push(
                                        this.state.activeFindBase
                                    ));
                                var O = {},
                                    P = [];
                                E || (E = "OPEN."),
                                    A || (_ = 0),
                                    c
                                        .filter(function(e) {
                                            return S && S.length
                                                ? 0 === e.symbol.indexOf(S)
                                                : -1 !== e.symbol.indexOf(E);
                                        })
                                        .forEach(function(e) {
                                            S && S.length
                                                ? 0 === e.symbol.indexOf(S) &&
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
                                                    !S ||
                                                    !S.length ||
                                                    0 === e.indexOf(S)
                                                );
                                            })
                                            .toArray()
                                    )).filter(function(e) {
                                        return (
                                            !(S && S.length > 1) ||
                                            0 === e.indexOf(S)
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
                                        return !S || e[1].quote === E;
                                    })),
                                    (T = i.a.Map(T));
                                var I = A ? r : T;
                                A &&
                                    y.size &&
                                    y.forEach(function(e, t) {
                                        I = I.set(t, e);
                                    }),
                                    I.size > 0 &&
                                        (x = I.filter(function(t) {
                                            if (A) {
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
                                            .take(A ? 100 : 20)
                                            .toArray());
                                var B = x && x.length,
                                    M = "mymarkets-header clickable",
                                    F = j()(M, {inactive: !A}),
                                    R = j()(M, {inactive: A}),
                                    z = {
                                        minWidth: this.state.minWidth,
                                        minHeight: "6rem"
                                    };
                                g && (z.height = g);
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
                                                className: F,
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
                                                className: R,
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
                                    A
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
                                                                  q.a,
                                                                  {
                                                                      onAssetSelect: this._onFoundBaseAsset.bind(
                                                                          this
                                                                      ),
                                                                      assets: N,
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
                                                          className: j()(
                                                              "mymarkets-tab",
                                                              {active: _ === a}
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
                                        A && B
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
                                                      className: j()(
                                                          "mymarkets-tab",
                                                          {
                                                              active:
                                                                  _ ===
                                                                  p.size + 1
                                                          }
                                                      )
                                                  },
                                                  s.a.createElement(h.a, {
                                                      content: "exchange.others"
                                                  })
                                              )
                                            : null,
                                        A &&
                                            s.a.createElement(
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
                                    s.a.createElement(
                                        "div",
                                        {
                                            style: z,
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
                                                  s.a.createElement(D.a, {
                                                      type: "three-bounce"
                                                  })
                                              )
                                            : null,
                                        p
                                            .filter(function(e) {
                                                return e === p.get(_);
                                            })
                                            .map(function(t, a) {
                                                return s.a.createElement($, {
                                                    userMarkets:
                                                        e.props.userMarkets,
                                                    defaultMarkets:
                                                        e.props.defaultMarkets,
                                                    index: a,
                                                    allowChange: !1,
                                                    key: t,
                                                    current: m,
                                                    starredMarkets: n,
                                                    marketStats: o,
                                                    viewSettings: f,
                                                    columns: A
                                                        ? l
                                                        : e.props.findColumns ||
                                                          l,
                                                    markets: O[t],
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
                                            ? s.a.createElement($, {
                                                  userMarkets: this.props
                                                      .userMarkets,
                                                  index: p.size,
                                                  current: m,
                                                  starredMarkets: n,
                                                  marketStats: o,
                                                  viewSettings: f,
                                                  columns: l,
                                                  markets: x,
                                                  base: "others",
                                                  maxRows: A ? 20 : 10,
                                                  findMarketTab: !A,
                                                  location: this.props.location,
                                                  history: this.props.history
                                              })
                                            : null
                                    ),
                                    s.a.createElement(J, {
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
                (ee.contextTypes = {router: x.a.object.isRequired}),
                (ee = Object(y.a)(ee));
            var te = (function(e) {
                function t() {
                    return (
                        Y(this, t),
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
                    G(t, [
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
        4981: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(31),
                o = a(14),
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
                S = a(9),
                x = a.n(S),
                A = a(153),
                N = a(111),
                O = a(22),
                P = a(499),
                T = a(12),
                I = a(43),
                B = a.n(I),
                M = (function() {
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
            function F(e, t) {
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
            var R = (function(e) {
                    function t() {
                        return (
                            F(this, t),
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
                        q(t, r.a.Component),
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
                                        n = e.quote,
                                        s = e.base,
                                        o = e.final,
                                        i = t.isBid(),
                                        l = t.isCall()
                                            ? "orderHistoryCall"
                                            : i
                                                ? "orderHistoryBid"
                                                : "orderHistoryAsk",
                                        c = a(3),
                                        u = r.a.createElement(A.a, {
                                            price: t.getPrice(),
                                            quote: n,
                                            base: s
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
                                            n.get("symbol") +
                                            " " +
                                            h +
                                            "<br />" +
                                            c.translate("exchange.total") +
                                            " " +
                                            s.get("symbol") +
                                            " " +
                                            p;
                                    return r.a.createElement(
                                        "div",
                                        {
                                            onClick: this.props.onClick,
                                            className: x()(
                                                "sticky-table-row order-row vertical-table-cell",
                                                {"final-row": o},
                                                {
                                                    "my-order": t.isMine(
                                                        this.props
                                                            .currentAccount
                                                    )
                                                }
                                            )
                                        },
                                        r.a.createElement(
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
                                                s.get("precision")
                                            )
                                        ),
                                        r.a.createElement(
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
                                                n.get("precision")
                                            )
                                        ),
                                        r.a.createElement(
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
                        q(t, r.a.Component),
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
                                        n = t.order,
                                        s = t.quote,
                                        o = t.base,
                                        i = t.position,
                                        l = n.isBid(),
                                        c = n.isCall()
                                            ? "orderHistoryCall"
                                            : l
                                                ? "orderHistoryBid"
                                                : "orderHistoryAsk",
                                        u = r.a.createElement(A.a, {
                                            price: n.getPrice(),
                                            quote: s,
                                            base: o
                                        }),
                                        p = l
                                            ? k.a.format_number(
                                                  n
                                                      .amountToReceive()
                                                      .getAmount({real: !0}),
                                                  s.get("precision")
                                              )
                                            : k.a.format_number(
                                                  n
                                                      .amountForSale()
                                                      .getAmount({real: !0}),
                                                  s.get("precision")
                                              ),
                                        h = l
                                            ? k.a.format_number(
                                                  n
                                                      .amountForSale()
                                                      .getAmount({real: !0}),
                                                  o.get("precision")
                                              )
                                            : k.a.format_number(
                                                  n
                                                      .amountToReceive()
                                                      .getAmount({real: !0}),
                                                  o.get("precision")
                                              ),
                                        d = l
                                            ? k.a.format_number(
                                                  n
                                                      .totalForSale()
                                                      .getAmount({real: !0}),
                                                  8
                                              )
                                            : k.a.format_number(
                                                  n
                                                      .totalToReceive()
                                                      .getAmount({real: !0}),
                                                  8
                                              ),
                                        m = l
                                            ? k.a.format_number(
                                                  n
                                                      .totalToReceive()
                                                      .getAmount({real: !0}),
                                                  8
                                              )
                                            : k.a.format_number(
                                                  n
                                                      .totalForSale()
                                                      .getAmount({real: !0}),
                                                  8
                                              ),
                                        f =
                                            e.translate("exchange.total") +
                                            " " +
                                            s.get("symbol") +
                                            " " +
                                            m +
                                            "<br />" +
                                            e.translate("exchange.total") +
                                            " " +
                                            o.get("symbol") +
                                            " " +
                                            d;
                                    return r.a.createElement(
                                        "tr",
                                        {
                                            onClick: this.props.onClick,
                                            className: n.isMine(
                                                this.props.currentAccount
                                            )
                                                ? "my-order"
                                                : ""
                                        },
                                        r.a.createElement(
                                            "td",
                                            {
                                                style: {width: "25%"},
                                                className: c
                                            },
                                            u
                                        ),
                                        r.a.createElement(
                                            "td",
                                            null,
                                            "left" === i ? p : h
                                        ),
                                        r.a.createElement(
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
                        var a = j(
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
                        q(t, r.a.Component),
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
                                        for (var n in a)
                                            try {
                                                a[n].style.width = t + "px";
                                            } catch (e) {}
                                    }
                                    function t(e) {
                                        var t = 0,
                                            a = document.getElementsByClassName(
                                                e
                                            );
                                        for (var n in a) {
                                            var r = a[n].offsetWidth;
                                            r > t && (t = r);
                                        }
                                        return t;
                                    }
                                    var a = "vertical-table-cell-one",
                                        n = "vertical-table-cell-two",
                                        r = "vertical-table-cell-three",
                                        s = {one: t(a), two: t(n), three: t(r)};
                                    e(a, s.one), e(n, s.two), e(r, s.three);
                                    var o = 0;
                                    try {
                                        (o = s.one + s.two + s.three),
                                            (document.getElementsByClassName(
                                                "container-menu-header"
                                            )[0].style.marginLeft = o + "px");
                                    } catch (e) {}
                                    try {
                                        var i = "exchange_header_style",
                                            l =
                                                "@media only screen and (min-width: 1280px) { body.localcoin .exchange-layout .grid-block.shrink.no-padding.overflow-visible.top-bar, body.localcoin .exchange-layout .main .grid-block.shrink.no-padding.overflow-visible.top-bar.left-cell-active { width: calc(100% - " +
                                                (o + t("right-column")) +
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
                                        var n = this.refs.vertical_sticky_table_up.table.querySelector(
                                            "#y-scrollbar"
                                        );
                                        _.a.initialize(n);
                                        var r = this.refs.vertical_sticky_table_down.table.querySelector(
                                            "#y-scrollbar"
                                        );
                                        _.a.initialize(r);
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
                                        n = t.combinedBids,
                                        s = t.combinedAsks,
                                        o = t.highestBid,
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
                                        _ = !i.sell_price && !o.sell_price,
                                        E =
                                            !(!i.sell_price || !o.sell_price) &&
                                            (v
                                                ? (
                                                      100 *
                                                      (i._real_price /
                                                          o._real_price -
                                                          1)
                                                  ).toFixed(2) + "%"
                                                : r.a.createElement(A.a, {
                                                      price:
                                                          i._real_price -
                                                          o._real_price,
                                                      base: c,
                                                      quote: l
                                                  })),
                                        C = null,
                                        S = null;
                                    if (c && l) {
                                        C = n.map(function(t, a) {
                                            if (!(a > 100))
                                                return m
                                                    ? r.a.createElement(L, {
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
                                                    : r.a.createElement(R, {
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
                                        var I = s;
                                        I.sort(function(e, t) {
                                            return m
                                                ? e.getPrice() - t.getPrice()
                                                : t.getPrice() - e.getPrice();
                                        }),
                                            (S = I.map(function(t, a) {
                                                if (!(a > 100))
                                                    return m
                                                        ? r.a.createElement(L, {
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
                                                        : r.a.createElement(R, {
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
                                            j = S.length;
                                        b || C.splice(y, C.length),
                                            g || S.splice(y, S.length);
                                        var q = r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    {
                                                        key: "top-header",
                                                        className: "top-header"
                                                    },
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(w.a, {
                                                            className:
                                                                (this.state.flip
                                                                    ? "ask-total"
                                                                    : "bid-total") +
                                                                " header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
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
                                                                O.a,
                                                                {
                                                                    dataPlace:
                                                                        "top",
                                                                    name: d
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
                                                                O.a,
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
                                            D = r.a.createElement(
                                                "thead",
                                                null,
                                                r.a.createElement(
                                                    "tr",
                                                    {
                                                        key: "top-header",
                                                        className: "top-header"
                                                    },
                                                    r.a.createElement(
                                                        "th",
                                                        null,
                                                        r.a.createElement(w.a, {
                                                            className:
                                                                (this.state.flip
                                                                    ? "bid-total"
                                                                    : "ask-total") +
                                                                " header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
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
                                                                O.a,
                                                                {
                                                                    dataPlace:
                                                                        "top",
                                                                    name: h
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
                                                                O.a,
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
                                        return r.a.createElement(
                                            "div",
                                            {
                                                className: x()(
                                                    this.props.wrapperClass,
                                                    "grid-block orderbook no-padding small-vertical medium-horizontal align-spaced no-overflow small-12 xlarge-8"
                                                )
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: x()(
                                                        "small-12 medium-6 middle-content",
                                                        this.state.flip
                                                            ? "order-1"
                                                            : "order-2"
                                                    )
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "exchange-bordered"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "exchange-content-header ask",
                                                            "data-intro": z.translate(
                                                                "walkthrough.sell_orders"
                                                            )
                                                        },
                                                        r.a.createElement(w.a, {
                                                            content:
                                                                "exchange.asks"
                                                        }),
                                                        this.state.flip
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      style: {
                                                                          display:
                                                                              "inline-block"
                                                                      }
                                                                  },
                                                                  r.a.createElement(
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
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "order-book-button-v",
                                                                          onClick: this
                                                                              .props
                                                                              .moveOrderBook
                                                                      },
                                                                      r.a.createElement(
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
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    lineHeight:
                                                                        "16px"
                                                                },
                                                                className:
                                                                    "float-right header-sub-title"
                                                            },
                                                            r.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.total"
                                                                }
                                                            ),
                                                            r.a.createElement(
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
                                                            r.a.createElement(
                                                                "span",
                                                                null,
                                                                " ",
                                                                "(",
                                                                r.a.createElement(
                                                                    O.a,
                                                                    {name: h}
                                                                ),
                                                                ")"
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                paddingRight:
                                                                    "0.6rem"
                                                            }
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right"
                                                            },
                                                            this.state.flip
                                                                ? D
                                                                : q
                                                        )
                                                    ),
                                                    r.a.createElement(
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
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                style: {
                                                                    paddingBottom: 5
                                                                },
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right no-overflow"
                                                            },
                                                            r.a.createElement(
                                                                N.a,
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
                                                                S
                                                            )
                                                        ),
                                                        j > y
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "orderbook-showall"
                                                                  },
                                                                  r.a.createElement(
                                                                      "a",
                                                                      {
                                                                          onClick: this._onToggleShowAll.bind(
                                                                              this,
                                                                              "asks"
                                                                          )
                                                                      },
                                                                      r.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content: g
                                                                                  ? "exchange.hide"
                                                                                  : "exchange.show_asks"
                                                                          }
                                                                      ),
                                                                      g
                                                                          ? null
                                                                          : r.a.createElement(
                                                                                "span",
                                                                                null,
                                                                                " ",
                                                                                "(",
                                                                                j,
                                                                                ")"
                                                                            )
                                                                  )
                                                              )
                                                            : null
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: x()(
                                                        "small-12 medium-6 middle-content",
                                                        this.state.flip
                                                            ? "order-2"
                                                            : "order-1"
                                                    )
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "exchange-bordered"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "exchange-content-header bid",
                                                            "data-intro": z.translate(
                                                                "walkthrough.buy_orders"
                                                            )
                                                        },
                                                        r.a.createElement(w.a, {
                                                            content:
                                                                "exchange.bids"
                                                        }),
                                                        this.state.flip
                                                            ? null
                                                            : r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      style: {
                                                                          display:
                                                                              "inline-block"
                                                                      }
                                                                  },
                                                                  r.a.createElement(
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
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "order-book-button-v",
                                                                          onClick: this
                                                                              .props
                                                                              .moveOrderBook
                                                                      },
                                                                      r.a.createElement(
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
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    lineHeight:
                                                                        "16px"
                                                                },
                                                                className:
                                                                    "float-right header-sub-title"
                                                            },
                                                            r.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.total"
                                                                }
                                                            ),
                                                            r.a.createElement(
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
                                                            r.a.createElement(
                                                                "span",
                                                                null,
                                                                " ",
                                                                "(",
                                                                r.a.createElement(
                                                                    O.a,
                                                                    {name: d}
                                                                ),
                                                                ")"
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                paddingRight:
                                                                    "0.6rem"
                                                            }
                                                        },
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right"
                                                            },
                                                            this.state.flip
                                                                ? D
                                                                : q
                                                        )
                                                    ),
                                                    r.a.createElement(
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
                                                        r.a.createElement(
                                                            "table",
                                                            {
                                                                style: {
                                                                    paddingBottom: 5
                                                                },
                                                                className:
                                                                    "table order-table table-hover fixed-table text-right no-overflow"
                                                            },
                                                            r.a.createElement(
                                                                N.a,
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
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "orderbook-showall"
                                                                  },
                                                                  r.a.createElement(
                                                                      "a",
                                                                      {
                                                                          onClick: this._onToggleShowAll.bind(
                                                                              this,
                                                                              "bids"
                                                                          )
                                                                      },
                                                                      r.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content: b
                                                                                  ? "exchange.hide"
                                                                                  : "exchange.show_bids"
                                                                          }
                                                                      ),
                                                                      b
                                                                          ? null
                                                                          : r.a.createElement(
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
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "left-order-book no-padding"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "order-table-container exchange-sell-orders vertical-orderbook-up"
                                            },
                                            r.a.createElement(
                                                P.StickyTable,
                                                {
                                                    className:
                                                        "order-table table",
                                                    ref:
                                                        "vertical_sticky_table_up"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "custom-sticky-header-wrap"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "header-cell left vertical-table-cell-one custom-sticky-header"
                                                        },
                                                        r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            r.a.createElement(
                                                                O.a,
                                                                {name: d}
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "header-cell vertical-table-cell-two custom-sticky-header"
                                                        },
                                                        r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            r.a.createElement(
                                                                O.a,
                                                                {name: h}
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                " header-cell right vertical-table-cell-three custom-sticky-header"
                                                        },
                                                        r.a.createElement(w.a, {
                                                            className:
                                                                "header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    N.a,
                                                    {
                                                        ref: "askTransition",
                                                        className:
                                                            "transition-container clickable",
                                                        component: "div",
                                                        transitionName: "newrow"
                                                    },
                                                    S.length > 0
                                                        ? S
                                                        : _ ||
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "sticky-table-row"
                                                              },
                                                              r.a.createElement(
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
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "sticky-table-row exchange-sell-buy-orders",
                                                ref: "center_text"
                                            },
                                            _
                                                ? r.a.createElement(
                                                      "td",
                                                      {
                                                          colSpan: 3,
                                                          className:
                                                              "no-orders padtop"
                                                      },
                                                      r.a.createElement(w.a, {
                                                          content:
                                                              "exchange.no_orders"
                                                      })
                                                  )
                                                : r.a.createElement(
                                                      "td",
                                                      {
                                                          className:
                                                              "cell center-cell",
                                                          colSpan: "3"
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "orderbook-latest-price"
                                                          },
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "text-center spread"
                                                              },
                                                              !!E &&
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "clickable left",
                                                                          onClick: this
                                                                              .toggleSpreadValue
                                                                      },
                                                                      r.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content:
                                                                                  "exchange.spread"
                                                                          }
                                                                      ),
                                                                      " ",
                                                                      r.a.createElement(
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
                                                                  r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "right"
                                                                      },
                                                                      r.a.createElement(
                                                                          w.a,
                                                                          {
                                                                              content:
                                                                                  "exchange.latest"
                                                                          }
                                                                      ),
                                                                      " ",
                                                                      r.a.createElement(
                                                                          "span",
                                                                          {
                                                                              className: this
                                                                                  .props
                                                                                  .changeClass
                                                                          },
                                                                          r.a.createElement(
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
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "order-table-container exchange-buy-orders vertical-orderbook-down"
                                            },
                                            r.a.createElement(
                                                P.StickyTable,
                                                {
                                                    className:
                                                        "order-table table",
                                                    ref:
                                                        "vertical_sticky_table_down"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "sticky-table-row top-header"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "cell header-cell left"
                                                        },
                                                        r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            r.a.createElement(
                                                                O.a,
                                                                {name: d}
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "cell header-cell"
                                                        },
                                                        r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "header-sub-title"
                                                            },
                                                            r.a.createElement(
                                                                O.a,
                                                                {name: h}
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "cell header-cell right"
                                                        },
                                                        r.a.createElement(w.a, {
                                                            className:
                                                                "header-sub-title",
                                                            content:
                                                                "exchange.price"
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    N.a,
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
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "sticky-table-row"
                                                              },
                                                              r.a.createElement(
                                                                  "td",
                                                                  {
                                                                      className:
                                                                          "cell no-orders",
                                                                      colSpan:
                                                                          "3"
                                                                  },
                                                                  r.a.createElement(
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
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "v-align no-padding align-center grid-block footer shrink bottom-header"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    onClick: this.props
                                                        .moveOrderBook
                                                },
                                                r.a.createElement(T.a, {
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
                H = a(42),
                V = a(15),
                J = a(4),
                Q = a(3),
                G = a.n(Q),
                Y = a(93),
                K = a(183),
                X = a(280),
                Z = a.n(X),
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
                    })(t, r.a.Component),
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
                                    n = e.component,
                                    s = e.format;
                                return t
                                    ? r.a.createElement(
                                          n,
                                          {
                                              className: a ? "tooltip" : "",
                                              "data-tip": a ? t.timestamp : ""
                                          },
                                          r.a.createElement(
                                              "span",
                                              null,
                                              G.a.localize(t.timestamp, {
                                                  type: "date",
                                                  format: s
                                              })
                                          )
                                      )
                                    : r.a.createElement(n);
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
                        return [Y.a];
                    },
                    getProps: function(e) {
                        return {
                            block: Y.a.getState().blocks.get(e.block_number)
                        };
                    }
                })),
                ae = (function() {
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
            var ne = J.c.operations,
                re = (function(e) {
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
                        })(t, r.a.Component),
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
                                        n = e.base,
                                        s = e.quote,
                                        o = e.baseSymbol,
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
                                                n.get("id").split(".")[2] >
                                                s.get("id").split(".")[2];
                                        u = a
                                            .filter(function(e) {
                                                return (
                                                    e.getIn(["op", 0]) ===
                                                    ne.fill_order
                                                );
                                            })
                                            .filter(function(e) {
                                                var t = s.get("id"),
                                                    a = n.get("id"),
                                                    r = e.getIn([
                                                        "op",
                                                        1,
                                                        "pays",
                                                        "asset_id"
                                                    ]),
                                                    o = e.getIn([
                                                        "op",
                                                        1,
                                                        "receives",
                                                        "asset_id"
                                                    ]);
                                                return (
                                                    (t === r || t === o) &&
                                                    (a === r || a === o)
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
                                                    o = void 0,
                                                    i = !1;
                                                t.pays.asset_id === n.get("id")
                                                    ? ((a = n),
                                                      (o = s),
                                                      (i = !0))
                                                    : ((a = s), (o = n));
                                                var l = H.a.parse_order_history(
                                                        t,
                                                        a,
                                                        o,
                                                        i,
                                                        h
                                                    ),
                                                    c = e.get("block_num");
                                                return r.a.createElement(
                                                    "tr",
                                                    {key: "my_history_" + p},
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                l.className
                                                        },
                                                        r.a.createElement(A.a, {
                                                            preFormattedPrice: l
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        l.receives
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        l.pays
                                                    ),
                                                    r.a.createElement(te, {
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
                                                n.get("id").split(".")[2] >
                                                s.get("id").split(".")[2];
                                        u = this.props.history
                                            .filter(function() {
                                                return ++d % 2 == 0;
                                            })
                                            .take(100)
                                            .map(function(e) {
                                                m++;
                                                var t = void 0,
                                                    a = void 0,
                                                    o = !1;
                                                e.pays.asset_id === n.get("id")
                                                    ? ((t = n),
                                                      (a = s),
                                                      (o = !0))
                                                    : ((t = s), (a = n));
                                                var i = H.a.parse_order_history(
                                                    e,
                                                    t,
                                                    a,
                                                    o,
                                                    f
                                                );
                                                return r.a.createElement(
                                                    "tr",
                                                    {key: "history_" + m},
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                i.className
                                                        },
                                                        r.a.createElement(A.a, {
                                                            preFormattedPrice: i
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        i.receives
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        i.pays
                                                    ),
                                                    r.a.createElement(
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
                                        b = x()(g, {
                                            inactive: "my_history" === c
                                        }),
                                        y = x()(g, {inactive: "history" === c});
                                    return r.a.createElement(
                                        "div",
                                        {className: this.props.className},
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
                                                    style: this.props
                                                        .headerStyle,
                                                    className:
                                                        "grid-block shrink left-orderbook-header bottom-header"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: x()(y, {
                                                            disabled: l
                                                        }),
                                                        onClick: this._changeTab.bind(
                                                            this,
                                                            "my_history"
                                                        )
                                                    },
                                                    r.a.createElement(w.a, {
                                                        content:
                                                            "exchange.my_history"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className: b,
                                                        onClick: this._changeTab.bind(
                                                            this,
                                                            "history"
                                                        )
                                                    },
                                                    r.a.createElement(w.a, {
                                                        content:
                                                            "exchange.history"
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
                                                    r.a.createElement(
                                                        "thead",
                                                        null,
                                                        r.a.createElement(
                                                            "tr",
                                                            null,
                                                            r.a.createElement(
                                                                "th",
                                                                null,
                                                                r.a.createElement(
                                                                    w.a,
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
                                                                        O.a,
                                                                        {
                                                                            dataPlace:
                                                                                "top",
                                                                            name: i
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
                                                                        O.a,
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
                                            r.a.createElement(
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
                                                r.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "table order-table text-right fixed-table market-right-padding"
                                                    },
                                                    r.a.createElement(
                                                        N.a,
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
            (re.defaultProps = {history: []}),
                (re.propTypes = {history: g.a.object.isRequired});
            var se = Object(V.connect)(re, {
                    listenTo: function() {
                        return [l.a];
                    },
                    getProps: function() {
                        return {viewSettings: l.a.getState().viewSettings};
                    }
                }),
                oe = a(359),
                ie = a(33),
                le = a(6),
                ce = a(13),
                ue = a(450),
                pe = a(451),
                he = a(18),
                de = a(185),
                me = a(48),
                fe = a(569),
                ge = a.n(fe),
                be = a(52),
                ye = a.n(be),
                ve = a(113),
                _e =
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
                ke = (function() {
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
            var Ee = (function(e) {
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
                    })(t, r.a.Component),
                    ke(t, [
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
                                    n = t.type,
                                    s = t.quote,
                                    o = t.base,
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
                                    S = void 0,
                                    N = void 0,
                                    P = this.props.isOpen
                                        ? r.a.createElement("span", null, "▼")
                                        : r.a.createElement("span", null, "▲");
                                this.props.amount && (C = this.props.amount),
                                    this.props.price && (S = this.props.price),
                                    this.props.total && (N = this.props.total);
                                var I = new he.a({
                                        amount: d ? d.get("balance") : 0,
                                        precision: f,
                                        asset_id: this.props.balanceId
                                    }),
                                    B = new he.a({
                                        amount: o.getIn([
                                            "options",
                                            "max_market_fee"
                                        ]),
                                        asset_id: o.get("asset_id"),
                                        precision: o.get("precision")
                                    }),
                                    M = new he.a({
                                        amount: s.getIn([
                                            "options",
                                            "max_market_fee"
                                        ]),
                                        asset_id: s.get("asset_id"),
                                        precision: s.get("precision")
                                    }),
                                    F =
                                        o.getIn([
                                            "options",
                                            "market_fee_percent"
                                        ]) /
                                            100 +
                                        "%",
                                    j =
                                        s.getIn([
                                            "options",
                                            "market_fee_percent"
                                        ]) /
                                            100 +
                                        "%",
                                    q = C
                                        ? Math.min(
                                              M.getAmount({real: !0}),
                                              (C *
                                                  s.getIn([
                                                      "options",
                                                      "market_fee_percent"
                                                  ])) /
                                                  1e4
                                          ).toFixed(M.precision)
                                        : 0,
                                    R = C
                                        ? Math.min(
                                              B.getAmount({real: !0}),
                                              (N *
                                                  o.getIn([
                                                      "options",
                                                      "market_fee_percent"
                                                  ])) /
                                                  1e4
                                          ).toFixed(B.precision)
                                        : 0,
                                    L = me.a.getFlagBooleans(
                                        o.getIn(["options", "flags"]),
                                        o.has("bitasset_data_id")
                                    ),
                                    D = me.a.getFlagBooleans(
                                        s.getIn(["options", "flags"]),
                                        s.has("bitasset_data_id")
                                    ),
                                    z = k.a.replaceName(this.props.base),
                                    U = z.name,
                                    W = z.prefix,
                                    H =
                                        L.charge_market_fee ||
                                        D.charge_market_fee,
                                    V = L.charge_market_fee
                                        ? r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block no-padding buy-sell-row"
                                              },
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-label"
                                                  },
                                                  r.a.createElement(w.a, {
                                                      content:
                                                          "explorer.asset.summary.market_fee"
                                                  }),
                                                  ": ",
                                                  F
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-input"
                                                  },
                                                  r.a.createElement("input", {
                                                      disabled: !0,
                                                      type: "text",
                                                      id: "baseMarketFee",
                                                      value: R,
                                                      autoComplete: "off"
                                                  })
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                  },
                                                  r.a.createElement(O.a, {
                                                      noTip: !0,
                                                      name: o.get("symbol")
                                                  }),
                                                  r.a.createElement(
                                                      "span",
                                                      {
                                                          "data-tip": G.a.translate(
                                                              "tooltip.market_fee",
                                                              {
                                                                  percent:
                                                                      o.getIn([
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
                                                      r.a.createElement(T.a, {
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
                                            ? r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block no-padding buy-sell-row"
                                                  },
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              visibility:
                                                                  "hidden"
                                                          },
                                                          className:
                                                              "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                      },
                                                      r.a.createElement(w.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      }),
                                                      ":"
                                                  )
                                              )
                                            : null,
                                    J = k.a.replaceName(this.props.quote),
                                    Q = J.name,
                                    Y = J.prefix,
                                    K = D.charge_market_fee
                                        ? r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block no-padding buy-sell-row"
                                              },
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-label"
                                                  },
                                                  r.a.createElement(w.a, {
                                                      content:
                                                          "explorer.asset.summary.market_fee"
                                                  }),
                                                  ": ",
                                                  j
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-input"
                                                  },
                                                  r.a.createElement("input", {
                                                      disabled: !0,
                                                      type: "text",
                                                      id: "quoteMarketFee",
                                                      value: q,
                                                      autoComplete: "off"
                                                  })
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                  },
                                                  r.a.createElement(O.a, {
                                                      noTip: !0,
                                                      name: s.get("symbol")
                                                  }),
                                                  r.a.createElement(
                                                      "span",
                                                      {
                                                          "data-tip": G.a.translate(
                                                              "tooltip.market_fee",
                                                              {
                                                                  percent:
                                                                      s.getIn([
                                                                          "options",
                                                                          "market_fee_percent"
                                                                      ]) / 100,
                                                                  asset:
                                                                      (Y ||
                                                                          "") +
                                                                      Q
                                                              }
                                                          ),
                                                          className:
                                                              "inline-block tooltip"
                                                      },
                                                      " ",
                                                      r.a.createElement(T.a, {
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
                                            ? r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block no-padding buy-sell-row"
                                                  },
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              visibility:
                                                                  "hidden"
                                                          },
                                                          className:
                                                              "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                      },
                                                      r.a.createElement(w.a, {
                                                          content:
                                                              "explorer.asset.summary.market_fee"
                                                      }),
                                                      ":"
                                                  )
                                              )
                                            : null,
                                    X = "bid" === n,
                                    Z = X && K ? K : !X && V ? V : null,
                                    $ = X
                                        ? I.getAmount({real: !0}) >=
                                          parseFloat(N)
                                        : I.getAmount({real: !0}) >=
                                          parseFloat(C),
                                    ee = u
                                        ? G.a.translate("exchange.short")
                                        : X
                                            ? G.a.translate("exchange.buy")
                                            : G.a.translate("exchange.sell"),
                                    te = X
                                        ? G.a.translate("exchange.buy")
                                        : G.a.translate("exchange.sell"),
                                    ae = !u && !(I.getAmount() > 0 && $),
                                    ne = !(S > 0),
                                    re = !(C > 0),
                                    se = ae || ne || re,
                                    oe = x()("button buySellButton", n, {
                                        disabled: se
                                    }),
                                    le = X ? o.get("symbol") : s.get("symbol"),
                                    ce = ne
                                        ? G.a.translate(
                                              "exchange.invalid_price"
                                          )
                                        : re
                                            ? G.a.translate(
                                                  "exchange.invalid_amount"
                                              )
                                            : ae
                                                ? G.a.translate(
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
                                            n = t.prefix;
                                        return r.a.createElement(
                                            "option",
                                            {key: e.get("id"), value: fe++},
                                            n,
                                            a
                                        );
                                    }),
                                    ve = void 0;
                                ve =
                                    y.get("symbol") === le
                                        ? I.clone(I.getAmount() - c.getAmount())
                                        : I;
                                var ke = k.a.replaceName(
                                        this.props[X ? "base" : "quote"]
                                    ),
                                    Ee = (ke.name, ke.prefix, a(3)),
                                    we = null;
                                "bid" == n &&
                                    (we = Ee.translate("walkthrough.buy_form")),
                                    "ask" == n &&
                                        (we = Ee.translate(
                                            "walkthrough.sell_form"
                                        ));
                                var Ce = Object.keys(
                                        this.props.expirations
                                    ).map(function(t, a) {
                                        return r.a.createElement(
                                            "option",
                                            {value: t, key: t},
                                            e.props.expirations[t].title
                                        );
                                    }),
                                    Se = l.a.getState().settings.get("themes"),
                                    xe = ye()(),
                                    Ae =
                                        "LLC" === o.get("symbol") ||
                                        "LLC" === s.get("symbol");
                                return r.a.createElement(
                                    "div",
                                    {className: this.props.className},
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "exchange-bordered buy-sell-container"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "exchange-content-header " +
                                                    n,
                                                "data-intro": we
                                            },
                                            r.a.createElement(
                                                "span",
                                                null,
                                                r.a.createElement(ie.a, {
                                                    string:
                                                        "exchange.buysell_formatter",
                                                    noLink: !0,
                                                    noTip: !1,
                                                    keys: [
                                                        {
                                                            type: "asset",
                                                            value: s.get(
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
                                                ? r.a.createElement(
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
                                                ? r.a.createElement(
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
                                            r.a.createElement(
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
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "float-right buy-sell-deposit"
                                                      },
                                                      r.a.createElement(
                                                          "a",
                                                          {
                                                              onClick: this
                                                                  .props
                                                                  .onShowModal
                                                          },
                                                          r.a.createElement(
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
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "float-right buy-sell-deposit"
                                                      },
                                                      r.a.createElement(
                                                          "a",
                                                          {
                                                              onClick: this
                                                                  .props
                                                                  .onShowModal
                                                          },
                                                          r.a.createElement(
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
                                        r.a.createElement(
                                            "form",
                                            {
                                                className:
                                                    (this.props.isOpen
                                                        ? ""
                                                        : "hide-container ") +
                                                    "order-form",
                                                noValidate: !0
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical no-overflow no-padding"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-padding buy-sell-row"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        r.a.createElement(w.a, {
                                                            content:
                                                                "exchange.price"
                                                        }),
                                                        ":"
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        r.a.createElement(
                                                            de.b,
                                                            {
                                                                id: n + "Price",
                                                                value: S,
                                                                onChange: p,
                                                                autoComplete:
                                                                    "off",
                                                                placeholder:
                                                                    "0.0"
                                                            }
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                        },
                                                        r.a.createElement(O.a, {
                                                            dataPlace: "right",
                                                            name: o.get(
                                                                "symbol"
                                                            )
                                                        }),
                                                        " / ",
                                                        r.a.createElement(O.a, {
                                                            dataPlace: "right",
                                                            name: s.get(
                                                                "symbol"
                                                            )
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-padding buy-sell-row"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        r.a.createElement(w.a, {
                                                            content:
                                                                "transfer.amount"
                                                        }),
                                                        ":"
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        r.a.createElement(
                                                            de.b,
                                                            {
                                                                id:
                                                                    n +
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
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                        },
                                                        r.a.createElement(O.a, {
                                                            dataPlace: "right",
                                                            name: s.get(
                                                                "symbol"
                                                            )
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block buy-sell-row bottom-row"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        r.a.createElement(w.a, {
                                                            content:
                                                                "exchange.total"
                                                        }),
                                                        ":"
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        r.a.createElement(
                                                            de.b,
                                                            {
                                                                id: n + "Total",
                                                                value: N,
                                                                onChange: m,
                                                                autoComplete:
                                                                    "off",
                                                                placeholder:
                                                                    "0.0"
                                                            }
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-4 no-margin no-overflow buy-sell-box"
                                                        },
                                                        r.a.createElement(O.a, {
                                                            dataPlace: "right",
                                                            name: o.get(
                                                                "symbol"
                                                            )
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-padding buy-sell-row"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-3 no-margin no-overflow buy-sell-label"
                                                        },
                                                        r.a.createElement(w.a, {
                                                            content:
                                                                "transfer.fee"
                                                        }),
                                                        ":"
                                                    ),
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block small-5 no-margin no-overflow buy-sell-input"
                                                        },
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                className: _
                                                                    ? ""
                                                                    : "no-balance",
                                                                disabled: !0,
                                                                type: "text",
                                                                id: n + "Fee",
                                                                value: _
                                                                    ? c.getAmount(
                                                                          {
                                                                              real: !0
                                                                          }
                                                                      )
                                                                    : G.a.translate(
                                                                          "transfer.errors.insufficient"
                                                                      ),
                                                                autoComplete:
                                                                    "off"
                                                            }
                                                        )
                                                    ),
                                                    r.a.createElement(
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
                                                        r.a.createElement(
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
                                            r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-content clear-fix no-padding"
                                                    },
                                                    r.a.createElement(
                                                        "table",
                                                        {
                                                            className:
                                                                "float-left"
                                                        },
                                                        r.a.createElement(
                                                            "tbody",
                                                            null,
                                                            r.a.createElement(
                                                                "tr",
                                                                {
                                                                    className:
                                                                        "buy-sell-info"
                                                                },
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    r.a.createElement(
                                                                        w.a,
                                                                        {
                                                                            content:
                                                                                "exchange.balance"
                                                                        }
                                                                    ),
                                                                    ":"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            paddingLeft: 5,
                                                                            textAlign:
                                                                                "right"
                                                                        }
                                                                    },
                                                                    r.a.createElement(
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
                                                                                ve
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
                                                                        r.a.createElement(
                                                                            O.a,
                                                                            {
                                                                                name: le
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "tr",
                                                                {
                                                                    className:
                                                                        "buy-sell-info"
                                                                },
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            paddingTop: 5
                                                                        }
                                                                    },
                                                                    X
                                                                        ? r.a.createElement(
                                                                              w.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.lowest_ask"
                                                                              }
                                                                          )
                                                                        : r.a.createElement(
                                                                              w.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.highest_bid"
                                                                              }
                                                                          ),
                                                                    ": "
                                                                ),
                                                                g
                                                                    ? r.a.createElement(
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
                                                                          r.a.createElement(
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
                                                                                      n,
                                                                                      b.sellPrice()
                                                                                  )
                                                                              },
                                                                              r.a.createElement(
                                                                                  A.a,
                                                                                  {
                                                                                      price: g,
                                                                                      quote: s,
                                                                                      base: o
                                                                                  }
                                                                              ),
                                                                              " ",
                                                                              r.a.createElement(
                                                                                  O.a,
                                                                                  {
                                                                                      name: o.get(
                                                                                          "symbol"
                                                                                      )
                                                                                  }
                                                                              ),
                                                                              "/",
                                                                              r.a.createElement(
                                                                                  O.a,
                                                                                  {
                                                                                      name: s.get(
                                                                                          "symbol"
                                                                                      )
                                                                                  }
                                                                              )
                                                                          )
                                                                      )
                                                                    : null
                                                            ),
                                                            r.a.createElement(
                                                                "tr",
                                                                {
                                                                    className:
                                                                        "buy-sell-info"
                                                                },
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            paddingTop: 5
                                                                        }
                                                                    },
                                                                    r.a.createElement(
                                                                        w.a,
                                                                        {
                                                                            content:
                                                                                "transaction.expiration"
                                                                        }
                                                                    ),
                                                                    ":"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "expiration-datetime-picker"
                                                                    },
                                                                    r.a.createElement(
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
                                                                        ? r.a.createElement(
                                                                              ge.a,
                                                                              {
                                                                                  pickerPosition:
                                                                                      "bottom center",
                                                                                  wrapperClassName: Se,
                                                                                  timePicker: !0,
                                                                                  min: xe,
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
                                                        ? r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "float-right",
                                                                  "data-tip": ce,
                                                                  "data-place":
                                                                      "right"
                                                              },
                                                              r.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          margin: 0
                                                                      },
                                                                      className: oe,
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
                                                        : r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "float-right",
                                                                  "data-tip": ""
                                                              },
                                                              r.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          margin: 0
                                                                      },
                                                                      className: oe,
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
                                                        ? r.a.createElement(
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
                                                              r.a.createElement(
                                                                  "input",
                                                                  {
                                                                      style: {
                                                                          margin: 0
                                                                      },
                                                                      className: oe,
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
                                                            ? r.a.createElement(
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
                                                                  r.a.createElement(
                                                                      "input",
                                                                      {
                                                                          style: {
                                                                              margin: 0
                                                                          },
                                                                          className: oe,
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
                                    r.a.createElement(
                                        ue.a,
                                        _e(
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
                                                    ("bid" === n ? "" : "_ask"),
                                                balances: [this.props.balance]
                                            },
                                            E
                                        )
                                    ),
                                    r.a.createElement(pe.a, {
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
                                            ("bid" === n ? "" : "_ask"),
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
            (Ee.propTypes = {
                balance: le.a.ChainObject,
                type: g.a.string,
                amountChange: g.a.func.isRequired,
                priceChange: g.a.func.isRequired,
                onSubmit: g.a.func.isRequired,
                onExpirationTypeChange: g.a.func.isRequired,
                onExpirationCustomChange: g.a.func.isRequired
            }),
                (Ee.defaultProps = {type: "bid"});
            var we = Object(ce.a)(Ee),
                Ce = a(11),
                Se = a(37),
                xe = a(77),
                Ae = (function() {
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
            var Ne = new Date(),
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
                        })(t, r.a.Component),
                        Ae(t, [
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
                                        n = !J.d.is_valid_symbol_error(a, !0);
                                    if (
                                        (this.setState({
                                            inputValue: t.target.value.trim(),
                                            marketsList: "",
                                            issuersList: "",
                                            filterByIssuerName: null
                                        }),
                                        a && a.length >= 3 && !n)
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
                                        var n = new Date(),
                                            r = e.toUpperCase();
                                        if (
                                            (this.setState({lookupQuote: r}),
                                            this.state.lookupQuote !== r || a)
                                        ) {
                                            if (r.length < 1 || n - Ne <= 250)
                                                return !1;
                                            this.getAssetList(r, 25, t);
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
                                        n = t.assetsLoading,
                                        s = t.marketPickerAsset,
                                        o = this.state,
                                        i = o.lookupQuote,
                                        l = o.marketPickerTab,
                                        c = o.filterByIssuerName,
                                        u = o.inputValue,
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
                                                            var n = e.props.baseAsset.get(
                                                                    "symbol"
                                                                ),
                                                                r =
                                                                    t.symbol +
                                                                    "_" +
                                                                    n;
                                                            n === t.symbol ||
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
                                                                    r,
                                                                    {
                                                                        quote:
                                                                            t.symbol,
                                                                        base: n,
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
                                                return r.a.createElement(
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
                                                    ) == s;
                                                return r.a.createElement(
                                                    "li",
                                                    {key: t[0]},
                                                    r.a.createElement(O.a, {
                                                        name: t[1].quote
                                                    }),
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            style: {
                                                                float: "right"
                                                            }
                                                        },
                                                        r.a.createElement(
                                                            Ce.b,
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
                                                            r.a.createElement(
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
                                        r.a.createElement(
                                            "div",
                                            {className: "marketPicker"},
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "marketPicker__header"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "marketPicker__filterType"
                                                    },
                                                    r.a.createElement(w.a, {
                                                        className:
                                                            "marketPicker__filterHeader",
                                                        component: "span",
                                                        content:
                                                            "exchange.market_picker.search_mode"
                                                    }),
                                                    r.a.createElement(T.a, {
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
                                                    r.a.createElement(T.a, {
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
                                                r.a.createElement(w.a, {
                                                    className:
                                                        "marketPicker__title",
                                                    component: "span",
                                                    content:
                                                        "exchange.market_picker.title"
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "marketPicker__subHeader"
                                                },
                                                r.a.createElement(w.a, {
                                                    content:
                                                        "exchange.market_picker.sub_title"
                                                }),
                                                " ",
                                                r.a.createElement(
                                                    Ce.b,
                                                    {
                                                        to: "/asset/" + s,
                                                        style: {
                                                            cursor: "pointer",
                                                            color:
                                                                "lightblue !important"
                                                        }
                                                    },
                                                    r.a.createElement(O.a, {
                                                        name: s
                                                    }),
                                                    r.a.createElement(T.a, {
                                                        className: "blue-icon",
                                                        style: {marginLeft: 5},
                                                        name: "info-circle-o",
                                                        title:
                                                            "icons.info_circle_o"
                                                    })
                                                )
                                            ),
                                            r.a.createElement("hr", null),
                                            r.a.createElement(
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
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    r.a.createElement(
                                                        "section",
                                                        {
                                                            className:
                                                                "block-list no-border-bottom"
                                                        },
                                                        r.a.createElement(
                                                            "header",
                                                            null,
                                                            r.a.createElement(
                                                                w.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "exchange.market_picker.search_for_asset"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                type: "text",
                                                                value: u,
                                                                onChange: this._onInputName.bind(
                                                                    this,
                                                                    !1
                                                                ),
                                                                placeholder: G.a.translate(
                                                                    "exchange.market_picker.search"
                                                                ),
                                                                maxLength: "16",
                                                                tabIndex: 2
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
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
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    r.a.createElement(
                                                        "section",
                                                        {
                                                            className:
                                                                "block-list no-border-bottom"
                                                        },
                                                        r.a.createElement(
                                                            "header",
                                                            null,
                                                            r.a.createElement(
                                                                w.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "exchange.market_picker.find_by_asset"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "input",
                                                            {
                                                                type: "text",
                                                                value: u,
                                                                onChange: this._onInputName.bind(
                                                                    this,
                                                                    !0
                                                                ),
                                                                placeholder: G.a.translate(
                                                                    "exchange.market_picker.search"
                                                                ),
                                                                maxLength: "16",
                                                                tabIndex: 2
                                                            }
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    r.a.createElement(
                                                        "section",
                                                        {
                                                            className:
                                                                "block-list no-border-bottom"
                                                        },
                                                        r.a.createElement(
                                                            "header",
                                                            null,
                                                            r.a.createElement(
                                                                w.a,
                                                                {
                                                                    component:
                                                                        "span",
                                                                    content:
                                                                        "exchange.market_picker.filter_by_issuer"
                                                                }
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "ul",
                                                            null,
                                                            r.a.createElement(
                                                                "li",
                                                                {
                                                                    className:
                                                                        "with-dropdpwn"
                                                                },
                                                                r.a.createElement(
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
                                                                    r.a.createElement(
                                                                        "option",
                                                                        {
                                                                            key:
                                                                                "0",
                                                                            value:
                                                                                "0"
                                                                        },
                                                                        r.a.createElement(
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
                                            r.a.createElement(
                                                "section",
                                                {
                                                    className:
                                                        "block-list no-border-bottom"
                                                },
                                                r.a.createElement(w.a, {
                                                    component: "header",
                                                    content:
                                                        "exchange.market_picker.results",
                                                    total_assets: d.length
                                                })
                                            ),
                                            n && d.length
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              textAlign:
                                                                  "center"
                                                          }
                                                      },
                                                      r.a.createElement(Se.a, {
                                                          type: "three-bounce"
                                                      })
                                                  )
                                                : r.a.createElement(
                                                      "div",
                                                      {className: "results"},
                                                      r.a.createElement(
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
                Pe = a(362),
                Te = a.n(Pe),
                Ie = a(311),
                Be = a.n(Ie),
                Me = a(103),
                Fe = (function() {
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
                je = (function() {
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
            function qe(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Re(e) {
                return e
                    .map(function(e) {
                        var t = e / 60,
                            a = t / 60 / 24,
                            n = a / 7;
                        if (t < 1) return e + "S";
                        if (a < 1 && parseInt(t, 10) === t) return t.toString();
                        if (n < 1) {
                            if (a >= 1 && parseInt(a, 10) === a)
                                return 1 === a ? "D" : a + "D";
                        } else if (n >= 1 && parseInt(n, 10) === n) return n + "D";
                        return null;
                    })
                    .filter(function(e) {
                        return !!e;
                    });
            }
            var Le = (function() {
                    function e() {
                        qe(this, e);
                    }
                    return (
                        je(e, [
                            {
                                key: "update",
                                value: function(e) {
                                    for (var t in e)
                                        switch (t) {
                                            case "resolutions":
                                                this.supported_resolutions = Re(
                                                    e.resolutions
                                                );
                                                break;
                                            case "onMarketChange":
                                                s.a.unsubscribe(
                                                    "market_change"
                                                ),
                                                    s.a.subscribe(
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
                                    s.a.clearSubs();
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
                                value: function(e, t, a, n) {
                                    console.log("searchSymbols", e, t, a),
                                        n([]);
                                }
                            },
                            {
                                key: "resolveSymbol",
                                value: function(e, t, a) {
                                    var n = this,
                                        r = e.split("_"),
                                        s = Fe(r, 2),
                                        o = s[0],
                                        i = s[1];
                                    Promise.all([
                                        Object(J.f)("getAsset", o),
                                        Object(J.f)("getAsset", i)
                                    ])
                                        .then(function(a) {
                                            var r = Fe(a, 2),
                                                s = r[0],
                                                o = r[1];
                                            t(
                                                new function e(t) {
                                                    qe(this, e),
                                                        (this.name = t.ticker),
                                                        (this.ticker =
                                                            t.ticker);
                                                    var a = Object(Me.c)(
                                                            t.quoteAsset
                                                        ),
                                                        n = Object(Me.c)(
                                                            t.baseAsset
                                                        ),
                                                        r =
                                                            a === n
                                                                ? a
                                                                : a && !n
                                                                    ? a
                                                                    : !a && n
                                                                        ? n
                                                                        : a +
                                                                          " / " +
                                                                          n,
                                                        s = k.a.replaceName(
                                                            t.baseAsset
                                                        ),
                                                        o = s.name,
                                                        i = s.prefix,
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
                                                        o +
                                                        " " +
                                                        (r
                                                            ? "(" + r + ")"
                                                            : "")),
                                                        (this.type = "bitcoin"),
                                                        (this.session = "24x7"),
                                                        (this.timezone = Be.a.tz.guess()),
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
                                                    quoteAsset: s,
                                                    baseAsset: o,
                                                    resolutions:
                                                        n.supported_resolutions
                                                })
                                            );
                                        })
                                        .catch(a);
                                }
                            },
                            {
                                key: "getBars",
                                value: function(e, t, a, n, r, s, o) {
                                    var i = this;
                                    (a *= 1e3), (n *= 1e3);
                                    var l = this._getHistory();
                                    if (
                                        ((this.latestBar = l[l.length - 1]),
                                        (l = l.filter(function(e) {
                                            return e.time >= a && e.time <= n;
                                        })),
                                        this.interval !== t)
                                    ) {
                                        if (!o) return;
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
                                                                                n
                                                                        );
                                                                    }
                                                                )),
                                                                (i.interval = t),
                                                                !e.length)
                                                            )
                                                                return r(e, {
                                                                    noData: !0
                                                                });
                                                            r(e);
                                                        });
                                                })
                                        );
                                    }
                                    if (((this.interval = t), !l.length))
                                        return r(l, {noData: !0});
                                    r(l);
                                }
                            },
                            {
                                key: "_getHistory",
                                value: function() {
                                    return s.a.getState().priceData;
                                }
                            },
                            {
                                key: "subscribeBars",
                                value: function(e, t, a, n, r) {
                                    var o = this;
                                    s.a.unsubscribe("subscribeBars"),
                                        r(),
                                        s.a.subscribe(
                                            "subscribeBars",
                                            function() {
                                                var e = o._getHistory(),
                                                    t = e.filter(function(e) {
                                                        return (
                                                            !o.latestBar ||
                                                            e.time >
                                                                o.latestBar.time
                                                        );
                                                    });
                                                if (t.length)
                                                    t.forEach(function(e) {
                                                        a(e);
                                                    }),
                                                        (o.latestBar =
                                                            t[t.length - 1]);
                                                else {
                                                    var n = !1;
                                                    for (var r in o.latestBar)
                                                        o.latestBar[r] !==
                                                            e[e.length - 1][
                                                                r
                                                            ] && (n = !0);
                                                    n && a(e[e.length - 1]);
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
                De = [
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
            var ze = (function() {
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
            var Ue = a(790),
                We = (function(e) {
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
                        ze(t, [
                            {
                                key: "loadTradingView",
                                value: function(e) {
                                    var t = this,
                                        a = e.dataFeed,
                                        n = Te.a[e.theme];
                                    a &&
                                        (this.tvWidget ||
                                            (a.update({
                                                resolutions: e.buckets,
                                                ticker:
                                                    e.quoteSymbol +
                                                    "_" +
                                                    e.baseSymbol,
                                                interval: Re([e.bucketSize])[0]
                                            }),
                                            (this.tvWidget = new Ue.widget({
                                                fullscreen: !1,
                                                symbol:
                                                    e.quoteSymbol +
                                                    "_" +
                                                    e.baseSymbol,
                                                interval: Re([e.bucketSize])[0],
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
                                                    var e = Be.a.tz.guess();
                                                    if (-1 !== De.indexOf(e))
                                                        return e;
                                                    for (
                                                        var t = Be()().toISOString(),
                                                            a = Be.a
                                                                .tz(t, e)
                                                                .format(),
                                                            n = 0;
                                                        n < De.length;
                                                        n++
                                                    )
                                                        if (
                                                            Be.a
                                                                .tz(t, De[n])
                                                                .format() === a
                                                        )
                                                            return De[n];
                                                    return (
                                                        console.log(
                                                            "No matching timezone found for " +
                                                                e +
                                                                ", setting to default value of Europe/London"
                                                        ),
                                                        "Europe/London"
                                                    );
                                                })(),
                                                toolbar_bg: n.bgColor,
                                                overrides: {
                                                    "paneProperties.background":
                                                        n.bgColor,
                                                    "paneProperties.horzGridProperties.color":
                                                        n.axisLineColor,
                                                    "paneProperties.vertGridProperties.color":
                                                        n.axisLineColor,
                                                    "scalesProperties.lineColor":
                                                        n.axisLineColor,
                                                    "scalesProperties.textColor":
                                                        n.textColor
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
                                            Re([this.props.bucketSize])[0]
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
                                    return r.a.createElement(
                                        "div",
                                        {className: "small-12"},
                                        r.a.createElement("div", {
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
                He = a(202),
                Ve = a(133),
                Je = a.n(Ve),
                Qe = (function() {
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
            var Ge = (function(e) {
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
                    Qe(t, [
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
                                return Te.a[e.theme];
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.flat_bids,
                                    a = e.flat_asks,
                                    n = e.flat_calls,
                                    s = e.flat_settles,
                                    o = e.totalBids,
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
                                    S = E.prefix,
                                    x = k.a.replaceName(c),
                                    A = x.name,
                                    N = x.prefix;
                                (C = (S || "") + C), (A = (N || "") + A);
                                var P = Object(He.a)(t),
                                    T = Object(He.a)(a),
                                    I = Object(He.a)(n),
                                    B = Object(He.a)(s),
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
                                                    G.a.translate(
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
                                                    G.a.translate(
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
                                    var j = 0;
                                    P.forEach(function(e) {
                                        e[0] >= M.xAxis.min &&
                                            (j = Math.max(e[1], j));
                                    }),
                                        T.forEach(function(e) {
                                            e[0] <= M.xAxis.max &&
                                                (j = Math.max(e[1], j));
                                        }),
                                        (M.yAxis.max = 1.15 * j);
                                    var q = j > 10 ? 0 : j > 1 ? 2 : 5;
                                    M.yAxis.labels.formatter = function() {
                                        return k.a.format_number(this.value, q);
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
                                                text: G.a.translate(
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
                                            text: G.a.translate(
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
                                        ? r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content no-overflow no-padding"
                                              },
                                              P.length || T.length || I.length
                                                  ? null
                                                  : r.a.createElement(
                                                        "span",
                                                        {className: "no-data"},
                                                        r.a.createElement(w.a, {
                                                            content:
                                                                "exchange.no_data"
                                                        })
                                                    ),
                                              this.props.noText
                                                  ? null
                                                  : r.a.createElement(
                                                        "p",
                                                        {
                                                            className:
                                                                "bid-total"
                                                        },
                                                        k.a.format_number(
                                                            o,
                                                            l.get("precision")
                                                        ),
                                                        " ",
                                                        C
                                                    ),
                                              this.props.noText
                                                  ? null
                                                  : r.a.createElement(
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
                                                  ? r.a.createElement(Je.a, {
                                                        config: M
                                                    })
                                                  : null
                                          )
                                        : r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-content no-overflow no-padding middle-content"
                                              },
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "exchange-bordered",
                                                      style: {margin: 10}
                                                  },
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "exchange-content-header"
                                                      },
                                                      this.props.noText
                                                          ? null
                                                          : r.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "bid-total"
                                                                },
                                                                k.a.format_number(
                                                                    o,
                                                                    l.get(
                                                                        "precision"
                                                                    )
                                                                ),
                                                                " ",
                                                                r.a.createElement(
                                                                    O.a,
                                                                    {
                                                                        name: l.get(
                                                                            "symbol"
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                      this.props.noText
                                                          ? null
                                                          : r.a.createElement(
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
                                                                r.a.createElement(
                                                                    O.a,
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
                                                      : r.a.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "no-data"
                                                            },
                                                            r.a.createElement(
                                                                w.a,
                                                                {
                                                                    content:
                                                                        "exchange.no_data"
                                                                }
                                                            )
                                                        ),
                                                  P || T || I
                                                      ? r.a.createElement(
                                                            Je.a,
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
            (Ge.defaultProps = {
                flat_bids: [],
                flat_asks: [],
                orders: {},
                noText: !1,
                noFrame: !0
            }),
                (Ge.propTypes = {
                    flat_bids: g.a.array.isRequired,
                    flat_asks: g.a.array.isRequired,
                    orders: g.a.object.isRequired
                });
            var Ye = Ge,
                Ke = a(231),
                Xe = a(28),
                Ze = a(574),
                $e = a.n(Ze),
                et = a(20),
                tt = a.n(et),
                at = a(149),
                nt = (function() {
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
            var rt = J.c.operations,
                st = Object.keys(rt),
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
                        })(t, r.a.Component),
                        nt(t, [
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
                                            "fill_order" === st[a.op[0]] &&
                                            ((!t && a.id) || a.id !== t.id) &&
                                            (tt.a.publish(
                                                "account-notify",
                                                "open"
                                            ),
                                            setTimeout(function() {
                                                tt.a.publish(
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
                                        return r.a.createElement("div", null);
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
                                            (a = r.a.createElement(at.a, {
                                                key: t.id,
                                                op: t.op,
                                                result: t.result,
                                                block: t.block_num,
                                                current: e.get("id"),
                                                hideDate: !0,
                                                hideFee: !0
                                            })),
                                        t
                                            ? r.a.createElement(
                                                  $e.a.Static,
                                                  {
                                                      id: "account-notify",
                                                      title: null,
                                                      image: "",
                                                      wrapperElement: "div"
                                                  },
                                                  r.a.createElement(
                                                      "table",
                                                      {className: "table"},
                                                      r.a.createElement(
                                                          "tbody",
                                                          null,
                                                          a
                                                      )
                                                  )
                                              )
                                            : r.a.createElement("div", null)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            ot.propTypes = {account: le.a.ChainAccount.isRequired};
            var it = (ot = Object(ce.a)(ot)),
                lt = (function() {
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
            var ct = (function(e) {
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
                        lt(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        d.a,
                                        {
                                            stores: [o.a],
                                            inject: {
                                                account: function() {
                                                    return o.a.getState()
                                                        .currentAccount;
                                                }
                                            }
                                        },
                                        r.a.createElement(it, null)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ut = a(34),
                pt = (function() {
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
            var ht = (function(e) {
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
                        pt(t, [
                            {
                                key: "show",
                                value: function() {
                                    var e = "modal_confirm_" + this.props.type;
                                    tt.a.publish(e, "open");
                                }
                            },
                            {
                                key: "_onForce",
                                value: function(e, t) {
                                    var a = "modal_confirm_" + this.props.type;
                                    t.preventDefault(),
                                        tt.a.publish(a, "close"),
                                        e && this.props.onForce();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.type,
                                        a = e.diff,
                                        n = e.hasOrders;
                                    return r.a.createElement(
                                        ut.a,
                                        {id: "modal_confirm_" + t, overlay: !0},
                                        r.a.createElement(w.a, {
                                            component: "h3",
                                            content: "transaction.confirm"
                                        }),
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            n
                                                ? r.a.createElement(w.a, {
                                                      content:
                                                          "exchange.confirm_" +
                                                          t,
                                                      diff: k.a.format_number(
                                                          a,
                                                          2
                                                      )
                                                  })
                                                : r.a.createElement(w.a, {
                                                      content:
                                                          "exchange.confirm_no_orders_" +
                                                          t
                                                  }),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "button-group",
                                                    style: {paddingTop: "2rem"}
                                                },
                                                r.a.createElement("input", {
                                                    onClick: this._onForce.bind(
                                                        this,
                                                        !0
                                                    ),
                                                    className: "button success",
                                                    type: "submit",
                                                    value: "Yes"
                                                }),
                                                r.a.createElement("input", {
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
                dt = (function() {
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
            var mt = (function(e) {
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
                        })(t, r.a.Component),
                        dt(t, [
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
                                        n = this.state.curMarket !== a,
                                        r = null != this.state.curMarket && n;
                                    (t.marketChange = r),
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
                                        n = e.price,
                                        s = e.content,
                                        o = e.ready,
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
                                        ? k.a.format_volume(n)
                                        : k.a.price_text(n, a, t);
                                    return r.a.createElement(
                                        "li",
                                        {
                                            className: x()(
                                                "stressed-stat",
                                                this.props.className,
                                                h
                                            ),
                                            onClick: this.props.onClick,
                                            "data-place": "bottom",
                                            "data-tip": l
                                        },
                                        r.a.createElement(
                                            "span",
                                            null,
                                            r.a.createElement(
                                                "span",
                                                {
                                                    className:
                                                        "value stat-primary"
                                                },
                                                o ? d : 0,
                                                " "
                                            ),
                                            r.a.createElement(
                                                "span",
                                                {className: "symbol-text"},
                                                r.a.createElement(O.a, {
                                                    name: t.get("symbol")
                                                })
                                            )
                                        ),
                                        s
                                            ? r.a.createElement(
                                                  "div",
                                                  {className: "stat-text"},
                                                  r.a.createElement(w.a, {
                                                      content: s
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
                ft =
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
                gt = (function() {
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
            function bt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function yt(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function vt(e, t) {
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
            var _t = (function(e) {
                function t() {
                    return (
                        bt(this, t),
                        yt(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    vt(t, r.a.Component),
                    gt(t, [
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
                                        ? G.a.translate("tooltip.cr_danger", {
                                              mr: t
                                          })
                                        : "warning" === e
                                            ? G.a.translate(
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
                                return r.a.createElement(
                                    "li",
                                    {
                                        className: x()(
                                            "stressed-stat",
                                            this.props.className
                                        ),
                                        onClick: this.props.onClick,
                                        "data-place": "bottom",
                                        "data-tip": this._getCRTip()
                                    },
                                    r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(
                                            "span",
                                            {
                                                className: x()(
                                                    "value stat-primary",
                                                    a
                                                )
                                            },
                                            k.a.format_number(t, 2)
                                        )
                                    ),
                                    r.a.createElement(
                                        "div",
                                        {className: "stat-text"},
                                        r.a.createElement(w.a, {
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
            (_t.propTypes = {
                debtAsset: le.a.ChainAsset.isRequired,
                collateralAsset: le.a.ChainAsset.isRequired
            }),
                (_t = Object(ce.a)(_t));
            var kt = (function(e) {
                function t() {
                    return (
                        bt(this, t),
                        yt(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    vt(t, r.a.Component),
                    gt(t, [
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
                                    s = t.getIn([
                                        "call_price",
                                        "base",
                                        "asset_id"
                                    ]);
                                return r.a.createElement(
                                    _t,
                                    ft(
                                        {
                                            debtAsset: n,
                                            collateralAsset: s,
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
            kt.propTypes = {object: le.a.ChainObject.isRequired};
            var Et = (kt = Object(ce.a)(kt)),
                wt = a(102),
                Ct = (function() {
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
            var St = (function(e) {
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
                        })(t, r.a.Component),
                        Ct(t, [
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
                                        for (var n in a) {
                                            var r = a[n].offsetWidth;
                                            r > t && (t = r);
                                        }
                                        return t;
                                    }
                                    var t = [
                                            "vertical-table-cell-one",
                                            "vertical-table-cell-two",
                                            "vertical-table-cell-three"
                                        ],
                                        a = 0;
                                    for (var n in t) a += e(t[n]);
                                    if (a > 0)
                                        try {
                                            document.getElementsByClassName(
                                                "container-menu-header"
                                            )[0].style.marginLeft = a + "px";
                                        } catch (e) {}
                                    try {
                                        var r = "exchange_header_style",
                                            s =
                                                "@media only screen and (min-width: 1280px) { body.localcoin .exchange-layout .grid-block.shrink.no-padding.overflow-visible.top-bar.left-cell-active { width: calc(100% - " +
                                                (a + e("right-column")) +
                                                "px); }}";
                                        if (document.getElementById(r)) {
                                            document.getElementById(
                                                r
                                            ).innerHTML = s;
                                        } else {
                                            var o = document.createElement(
                                                "style"
                                            );
                                            (o.id = r),
                                                (o.innerHTML = s),
                                                document
                                                    .getElementsByTagName(
                                                        "head"
                                                    )[0]
                                                    .appendChild(o);
                                        }
                                    } catch (e) {}
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.quoteAsset,
                                        s = t.baseAsset,
                                        o = t.starredMarkets,
                                        i = t.hasPrediction,
                                        l = t.feedPrice,
                                        c = t.showCallLimit,
                                        u = t.lowestCallPrice,
                                        p = t.marketReady,
                                        h = t.latestPrice,
                                        d = t.marketStats,
                                        m = t.showDepthChart,
                                        f = t.account,
                                        g = s.get("symbol"),
                                        y = n.get("symbol"),
                                        v = y + "_" + g,
                                        _ = o.has(v)
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
                                        S = d.get("volumeQuote"),
                                        x = k > 0 ? "+" + k : k,
                                        A = this.state.volumeShowQuote ? S : C,
                                        N = this.state.volumeShowQuote ? n : s,
                                        P = !1,
                                        I = n.get("id"),
                                        B = s.get("id"),
                                        M =
                                            "1.3.0" === I
                                                ? B
                                                : "1.3.0" === B
                                                    ? I
                                                    : null,
                                        F = M ? J.b.getAsset(M) : null,
                                        j = "",
                                        q = null;
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
                                                    (j = D), (P = !0);
                                                    break;
                                                }
                                            }
                                        var z =
                                            "1.3.0" == s.get("id")
                                                ? n
                                                : "1.3.0" == n.get("id")
                                                    ? s
                                                    : null;
                                        if (z && l) {
                                            var U = z
                                                .getIn(["bitasset", "options"])
                                                .toJS()
                                                .force_settlement_offset_percent;
                                            q =
                                                "1.3.0" == s.get("id")
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
                                                label: G.a.translate(
                                                    "exchange.order_depth"
                                                )
                                            },
                                            {
                                                key: "price_chart",
                                                label: G.a.translate(
                                                    "exchange.price_history"
                                                )
                                            }
                                        ];
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-block shrink no-padding overflow-visible top-bar container-menu-header"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block overflow-visible"
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block shrink"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {style: {padding: "10px"}},
                                                    i
                                                        ? r.a.createElement(
                                                              "a",
                                                              {
                                                                  className:
                                                                      "market-symbol"
                                                              },
                                                              r.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  y + " : " + g
                                                              )
                                                          )
                                                        : r.a.createElement(
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
                                                              r.a.createElement(
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
                                                                  r.a.createElement(
                                                                      O.a,
                                                                      {
                                                                          name: y,
                                                                          replace: !0,
                                                                          noTip: !0
                                                                      }
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "span",
                                                                  {
                                                                      style: {
                                                                          padding:
                                                                              "0 5px"
                                                                      }
                                                                  },
                                                                  "/"
                                                              ),
                                                              r.a.createElement(
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
                                                                  r.a.createElement(
                                                                      O.a,
                                                                      {
                                                                          name: g,
                                                                          replace: !0,
                                                                          noTip: !0
                                                                      }
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  Ce.b,
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
                                                                  r.a.createElement(
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
                                                              r.a.createElement(
                                                                  Ce.b,
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
                                                                  r.a.createElement(
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
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "label-actions"
                                                        },
                                                        r.a.createElement(w.a, {
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
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical",
                                                    style: {overflow: "visible"}
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block wrap market-stats-container"
                                                    },
                                                    r.a.createElement(
                                                        "ul",
                                                        {
                                                            className:
                                                                "market-stats stats top-stats"
                                                        },
                                                        h
                                                            ? r.a.createElement(
                                                                  mt,
                                                                  {
                                                                      ignoreColorChange: !0,
                                                                      ready: p,
                                                                      price:
                                                                          h.full,
                                                                      quote: n,
                                                                      base: s,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.latest"
                                                                  }
                                                              )
                                                            : null,
                                                        r.a.createElement(
                                                            "li",
                                                            {
                                                                className:
                                                                    "hide-order-1 stressed-stat daily_change " +
                                                                    E
                                                            },
                                                            r.a.createElement(
                                                                "span",
                                                                null,
                                                                r.a.createElement(
                                                                    "b",
                                                                    {
                                                                        className:
                                                                            "value"
                                                                    },
                                                                    p ? x : 0
                                                                ),
                                                                r.a.createElement(
                                                                    "span",
                                                                    null,
                                                                    " %"
                                                                )
                                                            ),
                                                            r.a.createElement(
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
                                                            ? r.a.createElement(
                                                                  mt,
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
                                                                      base: N,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.volume_24"
                                                                  }
                                                              )
                                                            : null,
                                                        !i && l
                                                            ? r.a.createElement(
                                                                  mt,
                                                                  {
                                                                      ignoreColorChange: !0,
                                                                      toolTip: G.a.translate(
                                                                          "tooltip.feed_price"
                                                                      ),
                                                                      ready: p,
                                                                      className:
                                                                          "hide-order-3",
                                                                      price: l.toReal(),
                                                                      quote: n,
                                                                      base: s,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.feed_price"
                                                                  }
                                                              )
                                                            : null,
                                                        !i && l
                                                            ? r.a.createElement(
                                                                  mt,
                                                                  {
                                                                      ignoreColorChange: !0,
                                                                      toolTip: G.a.translate(
                                                                          "tooltip.settle_price"
                                                                      ),
                                                                      ready: p,
                                                                      className:
                                                                          "hide-order-4",
                                                                      price: q,
                                                                      quote: n,
                                                                      base: s,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.settle"
                                                                  }
                                                              )
                                                            : null,
                                                        P
                                                            ? r.a.createElement(
                                                                  Et,
                                                                  {
                                                                      object: j,
                                                                      account: f
                                                                  }
                                                              )
                                                            : null,
                                                        u && c
                                                            ? r.a.createElement(
                                                                  mt,
                                                                  {
                                                                      toolTip: G.a.translate(
                                                                          "tooltip.call_limit"
                                                                      ),
                                                                      ready: p,
                                                                      className:
                                                                          "hide-order-5 is-call",
                                                                      price: u,
                                                                      quote: n,
                                                                      base: s,
                                                                      market: v,
                                                                      content:
                                                                          "explorer.block.call_limit"
                                                                  }
                                                              )
                                                            : null,
                                                        l && c
                                                            ? r.a.createElement(
                                                                  mt,
                                                                  {
                                                                      toolTip: G.a.translate(
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
                                                                      quote: n,
                                                                      base: s,
                                                                      market: v,
                                                                      content:
                                                                          "exchange.squeeze"
                                                                  }
                                                              )
                                                            : null
                                                    ),
                                                    r.a.createElement(
                                                        "ul",
                                                        {
                                                            className:
                                                                "market-stats stats top-stats"
                                                        },
                                                        r.a.createElement(
                                                            "li",
                                                            {
                                                                className:
                                                                    "stressed-stat input clickable",
                                                                style: {
                                                                    padding:
                                                                        "16px"
                                                                },
                                                                onClick: function() {
                                                                    tt.a.publish(
                                                                        "chart_options",
                                                                        "open"
                                                                    );
                                                                }
                                                            },
                                                            r.a.createElement(
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
                                        r.a.createElement(
                                            ut.a,
                                            {
                                                id: "chart_options",
                                                overlay: !0,
                                                modalHeader:
                                                    "exchange.chart_modal",
                                                noLogo: !0
                                            },
                                            r.a.createElement(
                                                "section",
                                                {
                                                    className:
                                                        "block-list no-border-bottom"
                                                },
                                                r.a.createElement(
                                                    "header",
                                                    null,
                                                    r.a.createElement(w.a, {
                                                        content:
                                                            "exchange.chart_type"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "ul",
                                                    null,
                                                    r.a.createElement(
                                                        "li",
                                                        {
                                                            className:
                                                                "with-dropdown"
                                                        },
                                                        r.a.createElement(
                                                            wt.a,
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
                                            r.a.createElement(
                                                "section",
                                                {
                                                    className:
                                                        "block-list no-border-bottom"
                                                },
                                                r.a.createElement(
                                                    "header",
                                                    null,
                                                    r.a.createElement(w.a, {
                                                        content:
                                                            "exchange.chart_height"
                                                    }),
                                                    ":"
                                                ),
                                                r.a.createElement(
                                                    "label",
                                                    null,
                                                    r.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "inline-label"
                                                        },
                                                        r.a.createElement(
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
                                                        r.a.createElement(
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
                At = a(36),
                Nt = a(295),
                Ot = a.n(Nt),
                Pt = a(147),
                Tt = a(132),
                It = (function() {
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
            var Bt = (function(e) {
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
                    (a.currencies = []), (a.courses = []), (a.inputValue = 0);
                    var n = a;
                    return (
                        (a.state = {
                            isActiveThisModal: "is-active",
                            account: null,
                            receiveAmount: 0,
                            assets: [],
                            asset: t.DEFAULT_CURRENCY,
                            address: "",
                            minimal: 0,
                            confirmations: 0,
                            assetValues: []
                        }),
                        (a.onChooseAsset = a.onChooseAsset.bind(a)),
                        (a.closeModal = a.closeModal.bind(a)),
                        (a.handleSendInput = a.handleSendInput.bind(a)),
                        new ve.a().getAllowCurrency(function(a) {
                            n.currencies = a.deposit;
                            var r = t.DEFAULT_CURRENCY;
                            if (n.currencies) {
                                var s = [],
                                    o = [];
                                for (var i in n.currencies)
                                    n.currencies[i].asset &&
                                        (s.push(n.currencies[i].asset),
                                        (o[n.currencies[i].asset] =
                                            n.currencies[i].asset),
                                        n.currencies[i].asset === e.asset &&
                                            (r = e.asset));
                                n.onChooseAsset(r),
                                    n.setState({
                                        asset: r,
                                        assets: s,
                                        assetValues: o
                                    });
                            }
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
                    })(t, r.a.Component),
                    It(t, [
                        {
                            key: "closeModal",
                            value: function() {
                                this.setState({isActiveThisModal: ""});
                            }
                        },
                        {
                            key: "showModal",
                            value: function() {
                                this.setState({isActiveThisModal: "is-active"});
                            }
                        },
                        {
                            key: "loadAssetCourse",
                            value: function(e, t) {
                                var a = this;
                                new ve.a().getPairsCourse(function(n) {
                                    (a.courses = n.list), t(e);
                                });
                            }
                        },
                        {
                            key: "onChooseAsset",
                            value: function(e) {
                                var a = this,
                                    n = this.findCurrentCurrency(e);
                                this.setState({
                                    asset: e,
                                    confirmations: this.getCountConfirmations(
                                        e
                                    ),
                                    minimal: n ? n.minimal : 0
                                }),
                                    this.loadAssetCourse(
                                        e,
                                        this.updateReceive.bind(this)
                                    ),
                                    new ve.a().сreatePaymentAddress(
                                        this.props.account.get("name"),
                                        e,
                                        t.MODE_BRIDGE,
                                        function(e) {
                                            a.setState({address: e});
                                        }
                                    );
                            }
                        },
                        {
                            key: "getCountConfirmations",
                            value: function(e) {
                                switch (e) {
                                    case "BTC":
                                        return 2;
                                    case "LTC":
                                    case "DASH":
                                        return 6;
                                    case "USDT":
                                        return 2;
                                    case "ETH":
                                        return 6;
                                    case "XMR":
                                        return 10;
                                }
                                return 6;
                            }
                        },
                        {
                            key: "findCurrentCurrency",
                            value: function(e) {
                                for (var t in (void 0 === e &&
                                    (e = this.state.asset),
                                this.currencies)) {
                                    var a = this.currencies[t];
                                    if (a.asset == e) return a;
                                }
                                return null;
                            }
                        },
                        {
                            key: "updateReceive",
                            value: function(e) {
                                var a = this.getCourseByAsset(e),
                                    n =
                                        parseFloat(this.inputValue) *
                                        parseFloat(a.coef);
                                isNaN(n) && (n = 0),
                                    this.setState({
                                        receiveAmount: n.toFixed(t.PRESICTION)
                                    });
                            }
                        },
                        {
                            key: "getCourseByAsset",
                            value: function(e) {
                                for (var t in this.courses) {
                                    var a = this.courses[t];
                                    if (a.to == e) return a;
                                }
                                return null;
                            }
                        },
                        {
                            key: "handleSendInput",
                            value: function(e) {
                                e.preventDefault(),
                                    (this.inputValue = parseFloat(
                                        e.target.value.replace(",", ".")
                                    )),
                                    this.updateReceive(this.state.asset);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = r.a.createElement(
                                        "div",
                                        {
                                            className: "button-group",
                                            style: {marginTop: 10}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                onClick: this.closeModal,
                                                className: "button"
                                            },
                                            r.a.createElement(
                                                "span",
                                                null,
                                                G.a.translate(
                                                    "modal.withdraw.cancel"
                                                )
                                            )
                                        )
                                    ),
                                    t = r.a.createElement(
                                        "div",
                                        {
                                            className: "small-6",
                                            style: {
                                                paddingTop: 10,
                                                paddingRight: 10,
                                                float: "left",
                                                width: "49%"
                                            }
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block"},
                                            r.a.createElement(
                                                "label",
                                                {className: "left-label"},
                                                r.a.createElement(w.a, {
                                                    content: "transfer.send"
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
                                                type: "number",
                                                defaultValue: 0,
                                                onChange: this.handleSendInput
                                            }),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "form-label select floating-dropdown"
                                                },
                                                r.a.createElement(Pt.a, {
                                                    entries: this.state.assets,
                                                    values: this.state
                                                        .assetValues,
                                                    singleEntry: this.state
                                                        .asset,
                                                    value: this.state.asset,
                                                    onChange: this.onChooseAsset
                                                })
                                            )
                                        )
                                    ),
                                    a = r.a.createElement(
                                        "div",
                                        {
                                            className: "small-6",
                                            style: {
                                                paddingTop: 10,
                                                paddingRight: 10,
                                                float: "left",
                                                width: "49%"
                                            }
                                        },
                                        r.a.createElement(
                                            "label",
                                            {className: "left-label"},
                                            r.a.createElement(w.a, {
                                                content: "exchange.receive"
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "inline-label input-wrapper"
                                            },
                                            r.a.createElement("input", {
                                                type: "text",
                                                value: this.state.receiveAmount
                                            }),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "input-right-symbol"
                                                },
                                                "LLC"
                                            )
                                        )
                                    ),
                                    n = r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("br", null),
                                        r.a.createElement("br", null),
                                        r.a.createElement("br", null),
                                        r.a.createElement("br", null),
                                        r.a.createElement(w.a, {
                                            content: "gateway.rudex.min_amount",
                                            minAmount: this.state.minimal,
                                            symbol: this.state.asset
                                        }),
                                        r.a.createElement("br", null),
                                        r.a.createElement("br", null),
                                        r.a.createElement(w.a, {
                                            className: "deposit-withdraw-info",
                                            component: "b",
                                            content:
                                                "gateway.min_count_confirmations",
                                            cnt: this.state.confirmations
                                        }),
                                        r.a.createElement("br", null),
                                        r.a.createElement("br", null),
                                        r.a.createElement(w.a, {
                                            component: "span",
                                            style: {fontSize: "0.8rem"},
                                            content:
                                                "gateway.min_deposit_warning_asset",
                                            minDeposit: this.state.minimal || 0,
                                            coin: this.state.asset
                                        })
                                    ),
                                    s = r.a.createElement(
                                        "div",
                                        {className: "grid-block"},
                                        r.a.createElement(Tt.a, {
                                            text: this.state.address,
                                            className: "copyIcon"
                                        }),
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(w.a, {
                                                component: "div",
                                                style: {
                                                    fontSize: "0.8rem",
                                                    fontWeight: "bold",
                                                    paddingBottom: "0.3rem"
                                                },
                                                content:
                                                    "gateway.purchase_notice",
                                                inputAsset: this.state.asset,
                                                outputAsset: "LLC"
                                            }),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "modal__highlight bridge_modal_address"
                                                },
                                                this.state.address
                                            )
                                        )
                                    );
                                return r.a.createElement(
                                    "div",
                                    {
                                        className:
                                            "modal-overlay " +
                                            this.state.isActiveThisModal
                                    },
                                    r.a.createElement(
                                        "div",
                                        {
                                            id:
                                                "withdraw_asset_rudex-scorum_RUDEX.SCR",
                                            "data-closable": "true",
                                            className:
                                                "modal fadeIn ng-enter is-active ng-enter-active"
                                        },
                                        r.a.createElement(
                                            "a",
                                            {
                                                onClick: this.closeModal,
                                                href: "javascript:void(0)",
                                                className: "close-button"
                                            },
                                            "×"
                                        ),
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            r.a.createElement(
                                                "form",
                                                {
                                                    className:
                                                        "grid-block vertical full-width-content"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-container"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "content-block"
                                                        },
                                                        r.a.createElement(
                                                            "h3",
                                                            null,
                                                            r.a.createElement(
                                                                "span",
                                                                null,
                                                                G.a.translate(
                                                                    "exchange.buy"
                                                                ),
                                                                " ",
                                                                "LLC"
                                                            )
                                                        )
                                                    ),
                                                    t,
                                                    a,
                                                    n,
                                                    r.a.createElement(
                                                        "br",
                                                        null
                                                    ),
                                                    s,
                                                    r.a.createElement(
                                                        "br",
                                                        null
                                                    ),
                                                    e
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
            (Bt.DEFAULT_CURRENCY = "BTC"),
                (Bt.MODE_BRIDGE = "1"),
                (Bt.PRESICTION = 4);
            var Mt = Bt,
                Ft = (function() {
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
                jt =
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
                qt = (function() {
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
            function Rt(e, t, a) {
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
            var Lt = (function(e) {
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
                        (a.state = jt({}, a._initialState(e), {
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
                    })(t, r.a.Component),
                    qt(t, [
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
                                var a = jt(
                                    {},
                                    this.state.expirationType,
                                    Rt({}, e, t.target.value)
                                );
                                "SPECIFIC" !== t.target.value &&
                                    C.a.setExchangeLastExpiration(
                                        jt(
                                            {},
                                            (this.props.exchange.has(
                                                "lastExpiration"
                                            ) &&
                                                this.props.exchange
                                                    .get("lastExpiration")
                                                    .toJS()) ||
                                                {},
                                            Rt({}, e, t.target.value)
                                        )
                                    ),
                                    this.setState({expirationType: a});
                            }
                        },
                        {
                            key: "_handleCustomExpirationChange",
                            value: function(e, t) {
                                var a = jt(
                                    {},
                                    this.state.expirationCustomTime,
                                    Rt({}, e, t)
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
                                var n = {
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
                                    (n.price = new he.f({
                                        base: n.for_sale,
                                        quote: n.to_receive
                                    })),
                                    {
                                        history: [],
                                        buySellOpen: t.get("buySellOpen", !0),
                                        bid: a,
                                        ask: n,
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
                                    Rt(
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
                                    n = {},
                                    r = [];
                                t.forEach(function(e) {
                                    r.push(
                                        Object(At.b)({
                                            accountID: a.get("id"),
                                            feeID: e.get("id"),
                                            type: "limit_order_create"
                                        })
                                    );
                                }),
                                    Promise.all(r)
                                        .then(function(a) {
                                            t.forEach(function(e, t) {
                                                n[e.get("id")] = a[t];
                                            }),
                                                k.a.are_equal_shallow(
                                                    e.state.feeStatus,
                                                    n
                                                ) || e.setState({feeStatus: n});
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
                                    var n = this.refs.center;
                                    n && _.a.update(n);
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
                                            nextLabel: G.a.translate(
                                                "walkthrough.next_label"
                                            ),
                                            prevLabel: G.a.translate(
                                                "walkthrough.prev_label"
                                            ),
                                            skipLabel: G.a.translate(
                                                "walkthrough.skip_label"
                                            ),
                                            doneLabel: G.a.translate(
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
                                            Rt(
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
                                var n = this,
                                    r = this.props.currentAccount,
                                    s = this.state.feeStatus;
                                function o(e, t) {
                                    -1 === e.indexOf(t) && e.push(t);
                                }
                                var i = [a, e === a ? t : e];
                                o(i, e), o(i, t);
                                var l = [a, t === a ? e : t];
                                o(l, e), o(l, t);
                                var c = {};
                                function u(e, t, n) {
                                    var r = void 0;
                                    return (
                                        (e = e.filter(function(e) {
                                            return (
                                                !!t[e.get("id")] &&
                                                ((function(e) {
                                                    return (
                                                        s[e] &&
                                                        s[e].hasPoolBalance
                                                    );
                                                })(e.get("id")) &&
                                                    (function(e) {
                                                        return (
                                                            s[e] &&
                                                            s[e].hasBalance
                                                        );
                                                    })(e.get("id")))
                                            );
                                        })).length
                                            ? (r = e[Math.min(e.length - 1, n)])
                                            : ((r = a), e.push(a)),
                                        {assets: e, asset: r}
                                    );
                                }
                                r.get("balances", [])
                                    .filter(function(a, n) {
                                        return (
                                            [
                                                "1.3.0",
                                                e.get("id"),
                                                t.get("id")
                                            ].indexOf(n) >= 0
                                        );
                                    })
                                    .forEach(function(e, t) {
                                        var a = J.b.getObject(e);
                                        c[t] = {
                                            balance: a
                                                ? parseInt(a.get("balance"), 10)
                                                : 0,
                                            fee: n._getFee(J.b.getAsset(t))
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
                            value: function(e, t, a, n) {
                                var r = this._getFee();
                                return "1.3.0" === e.asset_id
                                    ? r.getAmount() <= n
                                        ? "1.3.0"
                                        : null
                                    : (t.asset_id === e.asset_id
                                          ? e.getAmount() + t.getAmount()
                                          : t.getAmount()) <= a
                                        ? e.asset_id
                                        : r.getAmount() <= n &&
                                          "1.3.0" !== e.asset_id
                                            ? "1.3.0"
                                            : null;
                            }
                        },
                        {
                            key: "_createLimitOrderConfirm",
                            value: function(e, t, a, n, r, s) {
                                var o =
                                    !(
                                        arguments.length > 6 &&
                                        void 0 !== arguments[6]
                                    ) || arguments[6];
                                arguments[7].preventDefault();
                                var i = this.props.marketData,
                                    l = i.highestBid,
                                    c = i.lowestAsk,
                                    u = this.state[
                                        "sell" === s ? "ask" : "bid"
                                    ];
                                (a = u.for_sale.clone(
                                    a
                                        ? parseInt(
                                              J.b.getObject(a).toJS().balance,
                                              10
                                          )
                                        : 0
                                )),
                                    (n = new he.a({
                                        amount: n
                                            ? parseInt(
                                                  J.b.getObject(n).toJS()
                                                      .balance,
                                                  10
                                              )
                                            : 0
                                    }));
                                var p = this._getFee(r),
                                    h = this._verifyFee(
                                        p,
                                        u.for_sale,
                                        a.getAmount(),
                                        n.getAmount()
                                    );
                                if (!h)
                                    return Xe.a.addNotification({
                                        message:
                                            "Insufficient funds to pay fees",
                                        level: "error"
                                    });
                                if ("buy" === s && c) {
                                    var d =
                                        this.state.bid.price.toReal() /
                                        c.getPrice();
                                    if (d > 1.2)
                                        return (
                                            this.refs.buy.show(),
                                            this.setState({buyDiff: d})
                                        );
                                } else if ("sell" === s && l) {
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
                                    ? Xe.a.addNotification({
                                          message:
                                              "Insufficient funds to place order, you need at least " +
                                              u.for_sale.getAmount({real: !0}) +
                                              " " +
                                              t.get("symbol"),
                                          level: "error"
                                      })
                                    : u.for_sale.getAmount() > 0 &&
                                      u.to_receive.getAmount() > 0
                                        ? "sell" === s && f && o
                                            ? this._createPredictionShort(h)
                                            : void this._createLimitOrder(s, h)
                                        : Xe.a.addNotification({
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
                                    n = this.state[a],
                                    r = null;
                                r =
                                    "SPECIFIC" === this.state.expirationType[a]
                                        ? this.EXPIRATIONS[
                                              this.state.expirationType[a]
                                          ].get(a)
                                        : this.EXPIRATIONS[
                                              this.state.expirationType[a]
                                          ].get();
                                var s = new he.e({
                                        for_sale: n.for_sale,
                                        expiration: new Date(r || !1),
                                        to_receive: n.to_receive,
                                        seller: this.props.currentAccount.get(
                                            "id"
                                        ),
                                        fee: {asset_id: t, amount: 0}
                                    }),
                                    o = H.a.getMarketName(
                                        this.props.baseAsset,
                                        this.props.quoteAsset
                                    ),
                                    i = o.marketName,
                                    l = o.first,
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
                                        JSON.stringify(s.toObject())
                                    ),
                                    b.a
                                        .createLimitOrder2(s)
                                        .then(function(e) {
                                            e.error &&
                                                "wallet locked" !==
                                                    e.error.message &&
                                                Xe.a.addNotification({
                                                    message:
                                                        "Unknown error. Failed to place order for " +
                                                        n.to_receive.getAmount({
                                                            real: !0
                                                        }) +
                                                        " " +
                                                        n.to_receive.asset_id,
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
                                    var t = Ft(e, 1)[0],
                                        n = new he.a({
                                            amount: a.amount_for_sale.getAmount(),
                                            asset_id: t.get("id"),
                                            precision: t.get("precision")
                                        });
                                    b.a
                                        .createPredictionShort(a, n)
                                        .then(function(e) {
                                            e.error &&
                                                "wallet locked" !==
                                                    e.error.message &&
                                                Xe.a.addNotification({
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
                            value: function(e, t, a, n) {
                                var r = this.state[
                                    "sell" === e ? "ask" : "bid"
                                ];
                                (a = r.for_sale.clone(
                                    a
                                        ? parseInt(
                                              J.b.getObject(a).get("balance"),
                                              10
                                          )
                                        : 0
                                )),
                                    (n = new he.a({
                                        amount: n
                                            ? parseInt(
                                                  J.b.getObject(n).toJS()
                                                      .balance,
                                                  10
                                              )
                                            : 0
                                    }));
                                var s = this._getFee(t),
                                    o = this._verifyFee(
                                        s,
                                        r.for_sale,
                                        a.getAmount(),
                                        n.getAmount()
                                    );
                                o
                                    ? this._createLimitOrder(e, o)
                                    : console.error(
                                          "Unable to pay fees, aborting limit order creation"
                                      );
                            }
                        },
                        {
                            key: "_forceSell",
                            value: function(e, t, a, n) {
                                var r = this.state[
                                    "sell" === e ? "ask" : "bid"
                                ];
                                (a = r.for_sale.clone(
                                    a
                                        ? parseInt(
                                              J.b.getObject(a).get("balance"),
                                              10
                                          )
                                        : 0
                                )),
                                    (n = new he.a({
                                        amount: n
                                            ? parseInt(
                                                  J.b.getObject(n).toJS()
                                                      .balance,
                                                  10
                                              )
                                            : 0
                                    }));
                                var s = this._getFee(t),
                                    o = this._verifyFee(
                                        s,
                                        r.for_sale,
                                        a.getAmount(),
                                        n.getAmount()
                                    );
                                o
                                    ? this._createLimitOrder(e, o)
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
                                var n = this.state,
                                    r = n.bid,
                                    s = n.ask;
                                (r.price = new he.f({
                                    base: this.state.bid.for_sale,
                                    quote: this.state.bid.to_receive,
                                    real: a.xAxis[0].value
                                })),
                                    (r.priceText = r.price.toReal()),
                                    (s.price = new he.f({
                                        base: this.state.ask.to_receive,
                                        quote: this.state.ask.for_sale,
                                        real: a.xAxis[0].value
                                    })),
                                    (s.priceText = s.price.toReal());
                                var o = {
                                    bid: r,
                                    ask: s,
                                    depthLine: r.price.toReal()
                                };
                                this._setForSale(r, !0) ||
                                    this._setReceive(r, !0),
                                    this._setReceive(s) || this._setForSale(s),
                                    this._setPriceText(r, !0),
                                    this._setPriceText(s, !1),
                                    this.setState(o);
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
                                    n = this.state[e];
                                (n.price = t[a ? "invert" : "clone"]()),
                                    (n.priceText = n.price.toReal()),
                                    a
                                        ? this._setForSale(n, a) ||
                                          this._setReceive(n, a)
                                        : this._setReceive(n, a) ||
                                          this._setForSale(n, a),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_orderbookClick",
                            value: function(e) {
                                var t = e.isBid(),
                                    a = e.totalToReceive({noCache: !0}),
                                    n = a.times(e.sellPrice()),
                                    r = new he.f({
                                        base: t ? n : a,
                                        quote: t ? a : n
                                    }),
                                    s = this.state[t ? "bid" : "ask"];
                                (s.price = r), (s.priceText = r.toReal());
                                var o = Rt({}, t ? "ask" : "bid", {
                                    for_sale: a,
                                    forSaleText: a.getAmount({real: !0}),
                                    to_receive: n,
                                    toReceiveText: n.getAmount({real: !0}),
                                    price: r,
                                    priceText: r.toReal()
                                });
                                t
                                    ? this._setForSale(s, t) ||
                                      this._setReceive(s, t)
                                    : this._setReceive(s, t) ||
                                      this._setForSale(s, t),
                                    this.setState(o);
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
                                    n = e.quoteAsset,
                                    r = !1;
                                return (
                                    a &&
                                        (r = a.inverted
                                            ? t <= a.toReal()
                                            : t >= a.toReal()),
                                    !(
                                        !r ||
                                        !t ||
                                        n.getIn([
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
                                    n =
                                        t ||
                                        this.state.chartHeight + (a ? 20 : -20);
                                this.setState({chartHeight: n}),
                                    C.a.changeViewSetting({chartHeight: n});
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
                                    n = e[t ? "to_receive" : "for_sale"];
                                a.hasAmount() &&
                                    n.hasAmount() &&
                                    (e.priceText = new he.f({base: a, quote: n})
                                        .toReal()
                                        .toString());
                            }
                        },
                        {
                            key: "_onInputPrice",
                            value: function(e, t) {
                                var a = this.state[e],
                                    n = "bid" === e;
                                (a.price = new he.f({
                                    base: a[n ? "for_sale" : "to_receive"],
                                    quote: a[n ? "to_receive" : "for_sale"],
                                    real: parseFloat(t.target.value) || 0
                                })),
                                    n
                                        ? this._setForSale(a, n) ||
                                          this._setReceive(a, n)
                                        : this._setReceive(a, n) ||
                                          this._setForSale(a, n),
                                    (a.priceText = t.target.value),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onInputSell",
                            value: function(e, t, a) {
                                var n = this.state[e];
                                n.for_sale.setAmount({
                                    real: parseFloat(a.target.value) || 0
                                }),
                                    n.price.isValid()
                                        ? this._setReceive(n, t)
                                        : this._setPrice(n),
                                    (n.forSaleText = a.target.value),
                                    this._setPriceText(n, "bid" === e),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onInputReceive",
                            value: function(e, t, a) {
                                var n = this.state[e];
                                n.to_receive.setAmount({
                                    real: parseFloat(a.target.value) || 0
                                }),
                                    n.price.isValid()
                                        ? this._setForSale(n, t)
                                        : this._setPrice(n),
                                    (n.toReceiveText = a.target.value),
                                    this._setPriceText(n, "bid" === e),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "isMarketFrozen",
                            value: function() {
                                var e = this.props,
                                    t = e.baseAsset,
                                    a = e.quoteAsset,
                                    n = t
                                        .getIn(["options", "whitelist_markets"])
                                        .toJS(),
                                    r = a
                                        .getIn(["options", "whitelist_markets"])
                                        .toJS(),
                                    s = t
                                        .getIn(["options", "blacklist_markets"])
                                        .toJS(),
                                    o = a
                                        .getIn(["options", "blacklist_markets"])
                                        .toJS();
                                return r.length && -1 === r.indexOf(t.get("id"))
                                    ? {
                                          isFrozen: !0,
                                          frozenAsset: a.get("symbol")
                                      }
                                    : n.length && -1 === n.indexOf(a.get("id"))
                                        ? {
                                              isFrozen: !0,
                                              frozenAsset: t.get("symbol")
                                          }
                                        : o.length &&
                                          -1 !== o.indexOf(t.get("id"))
                                            ? {
                                                  isFrozen: !0,
                                                  frozenAsset: a.get("symbol")
                                              }
                                            : s.length &&
                                              -1 !== s.indexOf(a.get("id"))
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
                                    n = e.marketCallOrders,
                                    s = e.marketData,
                                    o = e.activeMarketHistory,
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
                                    k = s.combinedBids,
                                    E = s.combinedAsks,
                                    C = s.lowestAsk,
                                    S = s.highestBid,
                                    A = s.flatBids,
                                    N = s.flatAsks,
                                    O = s.flatCalls,
                                    P = s.flatSettles,
                                    T = this.state,
                                    I = T.bid,
                                    B = T.ask,
                                    M = T.leftOrderBook,
                                    F = T.showDepthChart,
                                    j = T.chartHeight,
                                    q = T.buyDiff,
                                    R = T.sellDiff,
                                    L = T.width,
                                    D = T.buySellTop,
                                    U = this.isMarketFrozen(),
                                    W = U.isFrozen,
                                    V = U.frozenAsset,
                                    J = null,
                                    Q = null,
                                    G = null,
                                    Y = null,
                                    K = null,
                                    X = null,
                                    Z = void 0,
                                    $ = void 0,
                                    ee = !1,
                                    te = void 0,
                                    ae = void 0,
                                    ne = this.props.viewSettings.get(
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
                                        (G = t.get("balances").toJS()))
                                    )
                                        for (var re in G)
                                            re === Q.get("id") && (Y = G[re]),
                                                re === J.get("id") &&
                                                    (K = G[re]),
                                                "1.3.0" === re && (X = G[re]);
                                    ee = this._getSettlementInfo();
                                }
                                var ie = !!c.get("bitasset_data_id"),
                                    le = !!u.get("bitasset_data_id"),
                                    ce =
                                        C && S
                                            ? C.getPrice() - S.getPrice()
                                            : 0;
                                if (o.size) {
                                    var ue = o.take(3),
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
                                    Ee = ve.sellFee,
                                    Ce = ve.buyFeeAsset,
                                    xe = ve.buyFeeAssets,
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
                                        this.state.height > 1100 ? j : j - 125,
                                        300
                                    ),
                                    this.state.expirationType),
                                    Me = this.state.expirationCustomTime,
                                    Fe = W
                                        ? null
                                        : r.a.createElement(we, {
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
                                              className: x()(
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
                                                  Ce,
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
                                              feeAssets: xe,
                                              feeAsset: Ce,
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
                                    je = W
                                        ? null
                                        : r.a.createElement(we, {
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
                                              className: x()(
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
                                              balance: Y,
                                              balanceId: Q.get("id"),
                                              onSubmit: this._createLimitOrderConfirm.bind(
                                                  this,
                                                  J,
                                                  Q,
                                                  Y,
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
                                              currentPrice: S.getPrice(),
                                              currentPriceObject: S,
                                              account: t.get("name"),
                                              fee: Ee,
                                              hasFeeBalance: this.state
                                                  .feeStatus[Ee.asset_id]
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
                                    qe = r.a.createElement(z, {
                                        latest: te,
                                        changeClass: ae,
                                        orders: a,
                                        calls: n,
                                        invertedCalls: i,
                                        combinedBids: k,
                                        combinedAsks: E,
                                        highestBid: S,
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
                                return r.a.createElement(
                                    "div",
                                    {className: "grid-block vertical"},
                                    this.state.isBridgeModalVisible
                                        ? r.a.createElement(Mt, {
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
                                        : r.a.createElement(Se.a, null),
                                    r.a.createElement(St, {
                                        account: this.props.currentAccount,
                                        quoteAsset: c,
                                        baseAsset: u,
                                        hasPrediction: Ne,
                                        starredMarkets: l,
                                        lowestAsk: C,
                                        highestBid: S,
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
                                        showVolumeChart: ne,
                                        chartHeight: j,
                                        onChangeChartHeight: this.onChangeChartHeight.bind(
                                            this
                                        )
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "grid-block page-layout market-layout"
                                        },
                                        this.state.showMarketPicker
                                            ? r.a.createElement(
                                                  Oe,
                                                  jt(
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
                                        r.a.createElement(ct, null),
                                        M
                                            ? r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block left-column shrink no-overflow"
                                                  },
                                                  qe
                                              )
                                            : null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {paddingTop: 0},
                                                className: x()(
                                                    "grid-block main-content vertical no-overflow"
                                                )
                                            },
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block vertical no-padding ps-container",
                                                    id: "CenterContent",
                                                    ref: "center"
                                                },
                                                F
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "grid-block vertical no-padding shrink"
                                                          },
                                                          r.a.createElement(
                                                              Ye,
                                                              {
                                                                  marketReady: d,
                                                                  orders: a,
                                                                  showCallLimit: ee,
                                                                  call_orders: n,
                                                                  flat_asks: N,
                                                                  flat_bids: A,
                                                                  flat_calls: ee
                                                                      ? O
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
                                                                          ? j
                                                                          : j -
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
                                                    : r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "grid-block shrink no-overflow",
                                                              id:
                                                                  "market-charts"
                                                          },
                                                          r.a.createElement(
                                                              We,
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
                                                                          ? j
                                                                          : j -
                                                                            150,
                                                                  mobile:
                                                                      L < 800
                                                              }
                                                          )
                                                      ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-overflow wrap shrink"
                                                    },
                                                    Ne
                                                        ? r.a.createElement(
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
                                                              r.a.createElement(
                                                                  "p",
                                                                  null,
                                                                  Pe
                                                              )
                                                          )
                                                        : null,
                                                    W
                                                        ? r.a.createElement(
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
                                                              r.a.createElement(
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
                                                    je,
                                                    r.a.createElement(se, {
                                                        className: x()(
                                                            Te || M
                                                                ? ""
                                                                : "medium-6 xlarge-4",
                                                            "no-padding no-overflow middle-content small-12 medium-6 order-5 xlarge-order-3"
                                                        ),
                                                        headerStyle: {
                                                            paddingTop: 0
                                                        },
                                                        history: o,
                                                        currentAccount: t,
                                                        myHistory: t.get(
                                                            "history"
                                                        ),
                                                        base: J,
                                                        quote: Q,
                                                        baseSymbol: $,
                                                        quoteSymbol: Z
                                                    }),
                                                    M ? null : qe,
                                                    r.a.createElement(ht, {
                                                        type: "buy",
                                                        ref: "buy",
                                                        onForce: this._forceBuy.bind(
                                                            this,
                                                            "buy",
                                                            Ce,
                                                            K,
                                                            X
                                                        ),
                                                        diff: q,
                                                        hasOrders: E.length > 0
                                                    }),
                                                    r.a.createElement(ht, {
                                                        type: "sell",
                                                        ref: "sell",
                                                        onForce: this._forceSell.bind(
                                                            this,
                                                            "sell",
                                                            _e,
                                                            Y,
                                                            X
                                                        ),
                                                        diff: R,
                                                        hasOrders: k.length > 0
                                                    }),
                                                    a.size > 0 && J && Q
                                                        ? r.a.createElement(
                                                              y.a,
                                                              {
                                                                  smallScreen: this
                                                                      .props
                                                                      .smallScreen,
                                                                  className: x()(
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
                                        r.a.createElement(
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
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block no-padding no-margin vertical"
                                                },
                                                r.a.createElement(oe.a, {
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
                                            r.a.createElement(
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
                                                r.a.createElement(
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
                                                        ? r.a.createElement(
                                                              "span",
                                                              null,
                                                              "▼"
                                                          )
                                                        : r.a.createElement(
                                                              "span",
                                                              null,
                                                              "▲"
                                                          )
                                                ),
                                                this.props.miniDepthChart
                                                    ? r.a.createElement(Ye, {
                                                          marketReady: d,
                                                          orders: a,
                                                          showCallLimit: ee,
                                                          call_orders: n,
                                                          flat_asks: N,
                                                          flat_bids: A,
                                                          flat_calls: ee
                                                              ? O
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
                                            ? r.a.createElement(Ke.a, {
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
                                            ? r.a.createElement(Ke.a, {
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
            (Lt.propTypes = {
                marketCallOrders: g.a.object.isRequired,
                activeMarketHistory: g.a.object.isRequired,
                viewSettings: g.a.object.isRequired,
                priceData: g.a.array.isRequired,
                volumeData: g.a.array.isRequired
            }),
                (Lt.defaultProps = {
                    marketCallOrders: [],
                    activeMarketHistory: {},
                    viewSettings: {},
                    priceData: [],
                    volumeData: []
                });
            var Dt = Lt,
                zt = a(152),
                Ut =
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
                Wt = (function() {
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
            function Ht(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Vt(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Jt(e, t) {
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
            var Qt = (function(e) {
                    function t() {
                        return (
                            Ht(this, t),
                            Vt(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        Jt(t, r.a.Component),
                        Wt(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.params.marketID
                                        .toUpperCase()
                                        .split("_");
                                    return e[0] === e[1]
                                        ? r.a.createElement(zt.default, {
                                              subtitle:
                                                  "market_not_found_subtitle"
                                          })
                                        : r.a.createElement(
                                              d.a,
                                              {
                                                  stores: [
                                                      s.a,
                                                      o.a,
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
                                                          return s.a.getState()
                                                              .marketLimitOrders;
                                                      },
                                                      marketCallOrders: function() {
                                                          return s.a.getState()
                                                              .marketCallOrders;
                                                      },
                                                      invertedCalls: function() {
                                                          return s.a.getState()
                                                              .invertedCalls;
                                                      },
                                                      marketSettleOrders: function() {
                                                          return s.a.getState()
                                                              .marketSettleOrders;
                                                      },
                                                      marketData: function() {
                                                          return s.a.getState()
                                                              .marketData;
                                                      },
                                                      totals: function() {
                                                          return s.a.getState()
                                                              .totals;
                                                      },
                                                      priceData: function() {
                                                          return s.a.getState()
                                                              .priceData;
                                                      },
                                                      volumeData: function() {
                                                          return s.a.getState()
                                                              .volumeData;
                                                      },
                                                      activeMarketHistory: function() {
                                                          return s.a.getState()
                                                              .activeMarketHistory;
                                                      },
                                                      bucketSize: function() {
                                                          return s.a.getState()
                                                              .bucketSize;
                                                      },
                                                      buckets: function() {
                                                          return s.a.getState()
                                                              .buckets;
                                                      },
                                                      lowestCallPrice: function() {
                                                          return s.a.getState()
                                                              .lowestCallPrice;
                                                      },
                                                      feedPrice: function() {
                                                          return s.a.getState()
                                                              .feedPrice;
                                                      },
                                                      currentAccount: function() {
                                                          return o.a.getState()
                                                              .currentAccount;
                                                      },
                                                      myActiveAccounts: function() {
                                                          return o.a.getState()
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
                                                          return s.a.getState()
                                                              .marketStats;
                                                      },
                                                      marketReady: function() {
                                                          return s.a.getState()
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
                                                          return new Le();
                                                      }
                                                  }
                                              },
                                              r.a.createElement(ea, {
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
                Gt = Object(J.e)(),
                Yt = void 0,
                Kt = void 0,
                Xt = void 0,
                Zt = void 0,
                $t = void 0,
                ea = (function(e) {
                    function t() {
                        Ht(this, t);
                        var e = Vt(
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
                        Jt(t, r.a.Component),
                        Wt(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    var e = this;
                                    null !== this.props.quoteAsset &&
                                        null !== this.props.baseAsset &&
                                        (this.props.quoteAsset.toJS &&
                                            this.props.baseAsset.toJS &&
                                            this._subToMarket(this.props),
                                        Gt.on(
                                            "cancel-order",
                                            (Kt = b.a.cancelLimitOrderSuccess)
                                        ),
                                        Gt.on(
                                            "close-call",
                                            (Yt = b.a.closeCallOrderSuccess)
                                        ),
                                        Gt.on(
                                            "call-order-update",
                                            (Xt = function(t) {
                                                var a =
                                                        t.call_price.base
                                                            .asset_id,
                                                    n =
                                                        t.call_price.quote
                                                            .asset_id,
                                                    r = e.props.baseAsset.get(
                                                        "id"
                                                    ),
                                                    s = e.props.quoteAsset.get(
                                                        "id"
                                                    );
                                                (a !== r && a !== s) ||
                                                    (n !== r && n !== s) ||
                                                    b.a.callOrderUpdate(t);
                                            })
                                        ),
                                        Gt.on(
                                            "bitasset-update",
                                            (Zt = b.a.feedUpdate)
                                        ),
                                        Gt.on(
                                            "settle-order-update",
                                            ($t = function(t) {
                                                var a = market_utils.isMarketAsset(
                                                        e.props.quoteAsset,
                                                        e.props.baseAsset
                                                    ),
                                                    n = a.isMarketAsset,
                                                    r = a.marketAsset;
                                                n &&
                                                    r.id ===
                                                        t.balance.asset_id &&
                                                    b.a.settleOrderUpdate(r.id);
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
                                        Gt &&
                                            (Gt.off("cancel-order", Kt),
                                            Gt.off("close-call", Yt),
                                            Gt.off("call-order-update", Xt),
                                            Gt.off("bitasset-update", Zt),
                                            Gt.off("settle-order-update", $t)));
                                }
                            },
                            {
                                key: "_subToMarket",
                                value: function(e, t) {
                                    var a = e.quoteAsset,
                                        n = e.baseAsset,
                                        r = e.bucketSize;
                                    t && (r = t),
                                        a.get("id") &&
                                            n.get("id") &&
                                            (b.a.subscribeMarket.defer(n, a, r),
                                            this.setState({
                                                sub:
                                                    a.get("id") +
                                                    "_" +
                                                    n.get("id")
                                            }));
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return null === this.props.quoteAsset ||
                                        null === this.props.baseAsset
                                        ? r.a.createElement(zt.default, {
                                              subtitle:
                                                  "market_not_found_subtitle"
                                          })
                                        : r.a.createElement(
                                              Dt,
                                              Ut({}, this.props, {
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
            (ea.propTypes = {
                currentAccount: le.a.ChainAccount.isRequired,
                quoteAsset: le.a.ChainAsset.isRequired,
                baseAsset: le.a.ChainAsset.isRequired,
                coreAsset: le.a.ChainAsset.isRequired
            }),
                (ea.defaultProps = {
                    currentAccount: "1.2.3",
                    coreAsset: "1.3.0"
                }),
                (ea = Object(ce.a)(ea, {show_loader: !0}));
            t.default = Qt;
        },
        790: function(e, t, a) {
            !(function(e) {
                "use strict";
                function t(e, a) {
                    var r = n({}, e);
                    for (var s in a)
                        "object" != typeof e[s] ||
                        null === e[s] ||
                        Array.isArray(e[s])
                            ? void 0 !== a[s] && (r[s] = a[s])
                            : (r[s] = t(e[s], a[s]));
                    return r;
                }
                function a() {
                    return "1.12 (internal id 7580da73 @ 2018-05-14 05:13:04.428607)";
                }
                var n =
                        Object.assign ||
                        function(e) {
                            for (
                                var t,
                                    a = arguments,
                                    n = 1,
                                    r = arguments.length;
                                n < r;
                                n++
                            )
                                for (var s in (t = a[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        s
                                    ) && (e[s] = t[s]);
                            return e;
                        },
                    r = {
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
                    s = {
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
                    o = (function() {
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
                            if (((this._options = t(s, e)), e.preset)) {
                                var a = r[e.preset];
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
                                n
                            ) {
                                this._innerAPI().saveChartToServer(e, t, a, n);
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
                                var n = this._getIFrameElement();
                                (this._options.autosize ||
                                    this._options.fullscreen) &&
                                    ((n.style.width = "100%"),
                                    this._options.fullscreen ||
                                        (n.style.height = "100%")),
                                    window.addEventListener(
                                        "resize",
                                        this._onWindowResize
                                    ),
                                    this._onWindowResize();
                                var r = function() {
                                    n.removeEventListener("load", r, !1),
                                        n.contentWindow.widgetReady(function() {
                                            e._ready = !0;
                                            for (
                                                var t = 0, a = e._readyHandlers;
                                                t < a.length;
                                                t++
                                            )
                                                a[t].call(e);
                                            n.contentWindow.initializationFinished();
                                        });
                                };
                                n.addEventListener("load", r, !1);
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
                    (e.widget = o),
                    Object.defineProperty(e, "__esModule", {value: !0});
            })(t);
        }
    }
]);
