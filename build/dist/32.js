(window.webpackJsonp = window.webpackJsonp || []).push([
    [32],
    {
        112: function(e, t, a) {
            "use strict";
            var s = a(0),
                n = a.n(s),
                r = a(1),
                i = a.n(r),
                o = a(4),
                l = a(6),
                c = a(13),
                u = a(3),
                p = a.n(u),
                m = a(150),
                d = a(17),
                _ = a(7),
                h = a.n(_),
                b = a(9),
                g = a.n(b),
                f = a(50),
                y = a(2),
                E = a.n(y),
                v = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            function k(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function x(e, t) {
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
            var A = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        x(
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
                    v(t, [
                        {
                            key: "render",
                            value: function() {
                                return 0 !== this.props.assets.length &&
                                    this.props.value
                                    ? n.a.createElement(m.a, {
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
            (A.propTypes = {value: E.a.string, onChange: E.a.func}),
                (A = Object(f.a)(A, {asList: !0}));
            var w = (function(e) {
                function t() {
                    return (
                        k(this, t),
                        x(
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
                    v(t, [
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
                                    ? o.d.is_valid_symbol_error(e, !0)
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
                                    s = this.getError(),
                                    r = void 0;
                                t ||
                                    (this.props.asset
                                        ? (r = this.props.asset.get("symbol"))
                                        : !s &&
                                          this.props.assetInput &&
                                          (s = p.a.translate(
                                              "explorer.asset.not_found",
                                              {name: this.props.assetInput}
                                          )));
                                var o = g()("button", {
                                    disabled:
                                        !this.props.asset ||
                                        s ||
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
                                            s || a
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
                                                          r
                                                      )
                                                  ),
                                            n.a.createElement(i.a, {
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
                                                        ? n.a.createElement(A, {
                                                              ref: this.props
                                                                  .refCallback,
                                                              value: this.props.asset.get(
                                                                  "symbol"
                                                              ),
                                                              assets: h.a.List(
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
                                                              className: o,
                                                              onClick: this.onAction.bind(
                                                                  this
                                                              )
                                                          },
                                                          n.a.createElement(
                                                              i.a,
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
                                                s
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
            (w.propTypes = {
                label: E.a.string,
                error: E.a.string,
                placeholder: E.a.string,
                onChange: E.a.func,
                onFound: E.a.func,
                assetInput: E.a.string,
                asset: l.a.ChainAsset,
                tabIndex: E.a.number,
                disableActionButton: E.a.string
            }),
                (w.defaultProps = {disabled: !1}),
                (t.a = Object(c.a)(w));
        },
        4973: function(e, t, a) {
            "use strict";
            a.r(t),
                a.d(t, "AccountAssetCreate", function() {
                    return R;
                }),
                a.d(t, "BitAssetOptions", function() {
                    return S;
                });
            var s = a(0),
                n = a.n(s),
                r = a(1),
                i = a.n(r),
                o = a(9),
                l = a.n(o),
                c = a(77),
                u = a(69),
                p = a(5),
                m = a(4),
                d = a(17),
                _ = a(3),
                h = a.n(_),
                b = a(6),
                g = a(13),
                f = a(112),
                y = a(83),
                E = a.n(y),
                v = a(48),
                k = a(104),
                x = a(43),
                C = a(82),
                A = a.n(C),
                w = a(36),
                N = a(2),
                B = a.n(N),
                P = (function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            (s.enumerable = s.enumerable || !1),
                                (s.configurable = !0),
                                "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s);
                        }
                    }
                    return function(t, a, s) {
                        return a && e(t.prototype, a), s && e(t, s), t;
                    };
                })();
            function I(e, t) {
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
            function F(e, t) {
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
            var U = new E.a(A.a.GRAPHENE_MAX_SHARE_SUPPLY),
                S = (function(e) {
                    function t(e) {
                        I(this, t);
                        var a = O(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {
                                backingAsset: e.backingAsset.get("symbol"),
                                error: null
                            }),
                            a
                        );
                    }
                    return (
                        F(t, n.a.Component),
                        P(t, [
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
                                        ("1.3.0" === e.get("id") ||
                                        (e.get("bitasset_data_id") &&
                                            !e.getIn([
                                                "bitasset",
                                                "is_prediction_market"
                                            ]))
                                            ? e.get("precision") !==
                                              parseInt(
                                                  this.props.assetPrecision,
                                                  10
                                              )
                                                ? this.setState({
                                                      error: h.a.translate(
                                                          "account.user_issued_assets.error_precision",
                                                          {
                                                              asset: this.props
                                                                  .assetSymbol
                                                          }
                                                      )
                                                  })
                                                : this.props.onUpdate(
                                                      "short_backing_asset",
                                                      e.get("id")
                                                  )
                                            : this.setState({
                                                  error: h.a.translate(
                                                      "account.user_issued_assets.error_invalid"
                                                  )
                                              }));
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.bitasset_opts,
                                        t = this.state.error;
                                    return n.a.createElement(
                                        "div",
                                        {className: "small-12 grid-content"},
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.feed_lifetime_sec"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value: e.feed_lifetime_sec / 60,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "feed_lifetime_sec"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.minimum_feeds"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value: e.minimum_feeds,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "minimum_feeds"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.force_settlement_delay_sec"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value:
                                                    e.force_settlement_delay_sec /
                                                    60,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "force_settlement_delay_sec"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.force_settlement_offset_percent"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value:
                                                    e.force_settlement_offset_percent /
                                                    A.a.GRAPHENE_1_PERCENT,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "force_settlement_offset_percent"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.maximum_force_settlement_volume"
                                            }),
                                            n.a.createElement("input", {
                                                type: "number",
                                                value:
                                                    e.maximum_force_settlement_volume /
                                                    A.a.GRAPHENE_1_PERCENT,
                                                onChange: this.props.onUpdate.bind(
                                                    this,
                                                    "maximum_force_settlement_volume"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "grid-block no-margin small-12"
                                            },
                                            n.a.createElement(f.a, {
                                                label:
                                                    "account.user_issued_assets.backing",
                                                onChange: this._onInputBackingAsset.bind(
                                                    this
                                                ),
                                                asset: this.state.backingAsset,
                                                assetInput: this.state
                                                    .backingAsset,
                                                tabIndex: 1,
                                                style: {
                                                    width: "100%",
                                                    paddingRight: "10px"
                                                },
                                                onFound: this._onFoundBackingAsset.bind(
                                                    this
                                                )
                                            }),
                                            t
                                                ? n.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "content-block has-error"
                                                      },
                                                      t
                                                  )
                                                : null
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (S.propTypes = {
                backingAsset: b.a.ChainAsset.isRequired,
                isUpdate: B.a.bool
            }),
                (S.defaultProps = {isUpdate: !1}),
                (S = Object(g.a)(S));
            var R = (function(e) {
                function t(e) {
                    I(this, t);
                    var a = O(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (a.state = a.resetState(e)), a;
                }
                return (
                    F(t, n.a.Component),
                    P(t, [
                        {
                            key: "resetState",
                            value: function(e) {
                                p.a.get_asset_precision(4),
                                    p.a.get_asset_precision(
                                        e.core.get("precision")
                                    );
                                var t = this._getPermissions({isBitAsset: !1}),
                                    a = t.flagBooleans,
                                    s = t.permissionBooleans;
                                m.b.getAsset("1.3.0").get("symbol");
                                return {
                                    update: {
                                        symbol: "",
                                        precision: 4,
                                        max_supply: 1e5,
                                        max_market_fee: 0,
                                        market_fee_percent: 0,
                                        description: {main: ""}
                                    },
                                    errors: {max_supply: null},
                                    isValid: !0,
                                    flagBooleans: a,
                                    permissionBooleans: s,
                                    isBitAsset: !1,
                                    is_prediction_market: !1,
                                    core_exchange_rate: {
                                        quote: {asset_id: null, amount: 1},
                                        base: {asset_id: "1.3.0", amount: 1}
                                    },
                                    bitasset_opts: {
                                        feed_lifetime_sec: 86400,
                                        minimum_feeds: 7,
                                        force_settlement_delay_sec: 86400,
                                        force_settlement_offset_percent:
                                            1 * A.a.GRAPHENE_1_PERCENT,
                                        maximum_force_settlement_volume:
                                            20 * A.a.GRAPHENE_1_PERCENT,
                                        short_backing_asset: "1.3.0"
                                    },
                                    marketInput: ""
                                };
                            }
                        },
                        {
                            key: "_getPermissions",
                            value: function(e) {
                                return {
                                    flagBooleans: v.a.getFlagBooleans(
                                        0,
                                        e.isBitAsset
                                    ),
                                    permissionBooleans: v.a.getFlagBooleans(
                                        "all",
                                        e.isBitAsset
                                    )
                                };
                            }
                        },
                        {
                            key: "_createAsset",
                            value: function(e) {
                                e.preventDefault();
                                var t = this.state,
                                    a = t.update,
                                    s = t.flagBooleans,
                                    n = t.permissionBooleans,
                                    r = t.core_exchange_rate,
                                    i = t.isBitAsset,
                                    o = t.is_prediction_market,
                                    l = t.bitasset_opts,
                                    u = this.props.account,
                                    p = v.a.getFlags(s, i),
                                    m = v.a.getPermissions(n, i);
                                this.state.marketInput !==
                                    a.description.market &&
                                    (a.description.market = "");
                                var d = JSON.stringify(a.description);
                                c.a
                                    .createAsset(
                                        u.get("id"),
                                        a,
                                        p,
                                        m,
                                        r,
                                        i,
                                        o,
                                        l,
                                        d
                                    )
                                    .then(function(e) {
                                        console.log(
                                            "... AssetActions.createAsset(account_id, update)",
                                            u.get("id"),
                                            a,
                                            p,
                                            m
                                        );
                                    });
                            }
                        },
                        {
                            key: "_hasChanged",
                            value: function() {
                                return !p.a.are_equal_shallow(
                                    this.state,
                                    this.resetState(this.props)
                                );
                            }
                        },
                        {
                            key: "_reset",
                            value: function(e) {
                                e.preventDefault(),
                                    this.setState(this.resetState(this.props));
                            }
                        },
                        {
                            key: "_forcePositive",
                            value: function(e) {
                                return parseFloat(e) < 0 ? "0" : e;
                            }
                        },
                        {
                            key: "_onUpdateDescription",
                            value: function(e, t) {
                                var a = this.state.update,
                                    s = !0;
                                switch (e) {
                                    case "condition":
                                        if (t.target.value.length > 60)
                                            return void (s = !1);
                                        a.description[e] = t.target.value;
                                        break;
                                    case "short_name":
                                        if (t.target.value.length > 32)
                                            return void (s = !1);
                                        a.description[e] = t.target.value;
                                        break;
                                    case "market":
                                        a.description[e] = t;
                                        break;
                                    case "visible":
                                        a.description[e] = !a.description[e];
                                        break;
                                    default:
                                        a.description[e] = t.target.value;
                                }
                                s &&
                                    (this.forceUpdate(),
                                    this._validateEditFields(a));
                            }
                        },
                        {
                            key: "onChangeBitAssetOpts",
                            value: function(e, t) {
                                var a = this.state.bitasset_opts;
                                switch (e) {
                                    case "force_settlement_offset_percent":
                                    case "maximum_force_settlement_volume":
                                        a[e] =
                                            parseFloat(t.target.value) *
                                            A.a.GRAPHENE_1_PERCENT;
                                        break;
                                    case "minimum_feeds":
                                        a[e] = parseInt(t.target.value, 10);
                                        break;
                                    case "feed_lifetime_sec":
                                    case "force_settlement_delay_sec":
                                        console.log(
                                            t.target.value,
                                            parseInt(
                                                60 * parseFloat(t.target.value),
                                                10
                                            )
                                        ),
                                            (a[e] = parseInt(
                                                60 * parseFloat(t.target.value),
                                                10
                                            ));
                                        break;
                                    case "short_backing_asset":
                                        a[e] = t;
                                        break;
                                    default:
                                        a[e] = t.target.value;
                                }
                                this.forceUpdate();
                            }
                        },
                        {
                            key: "_onUpdateInput",
                            value: function(e, t) {
                                var a = this.state,
                                    s = a.update,
                                    n = a.errors,
                                    r = !1,
                                    i = p.a.get_asset_precision(
                                        this.state.update.precision
                                    ),
                                    o = t.target,
                                    l = o.selectionStart,
                                    c = o.value;
                                switch (e) {
                                    case "market_fee_percent":
                                        s[e] = this._forcePositive(o.value);
                                        break;
                                    case "max_market_fee":
                                        if (new E.a(c).times(i).gt(U))
                                            return (
                                                (n.max_market_fee =
                                                    "The number you tried to enter is too large"),
                                                this.setState({errors: n})
                                            );
                                        (o.value = p.a.limitByPrecision(
                                            o.value,
                                            this.state.update.precision
                                        )),
                                            (s[e] = o.value);
                                        break;
                                    case "precision":
                                        s[e] = this._forcePositive(o.value);
                                        break;
                                    case "max_supply":
                                        (r = !0),
                                            new RegExp(/[[:digit:]]/).test(
                                                o.value
                                            ) ||
                                                (o.value = o.value.replace(
                                                    /[^0-9.]/g,
                                                    ""
                                                )),
                                            "." == o.value.charAt(0) &&
                                                (o.value = "0."),
                                            o.value.charAt(o.value.length) !=
                                                o.value.search(".") &&
                                                o.value.substr(1),
                                            (o.value = p.a.limitByPrecision(
                                                o.value,
                                                this.state.update.precision
                                            )),
                                            (s[e] = o.value);
                                        break;
                                    case "symbol":
                                        r = !0;
                                        var u = o.value.toUpperCase(),
                                            d = new RegExp("^[.A-Z]+$");
                                        if ("" !== u && !d.test(u)) break;
                                        m.b.getAsset(u),
                                            (s[e] = this._forcePositive(u));
                                        break;
                                    default:
                                        s[e] = o.value;
                                }
                                this.setState({update: s}, function() {
                                    if (r) {
                                        var t = l - (c.length - s[e].length);
                                        o.setSelectionRange(t, t);
                                    }
                                }),
                                    this._validateEditFields(s);
                            }
                        },
                        {
                            key: "_validateEditFields",
                            value: function(e) {
                                var t = {max_supply: null};
                                (t.symbol = m.d.is_valid_symbol_error(
                                    e.symbol
                                )),
                                    m.b.getAsset(e.symbol) &&
                                        (t.symbol = h.a.translate(
                                            "account.user_issued_assets.exists"
                                        ));
                                try {
                                    t.max_supply =
                                        e.max_supply <= 0
                                            ? h.a.translate(
                                                  "account.user_issued_assets.max_positive"
                                              )
                                            : new E.a(e.max_supply)
                                                  .times(
                                                      Math.pow(10, e.precision)
                                                  )
                                                  .gt(U)
                                                ? h.a.translate(
                                                      "account.user_issued_assets.too_large"
                                                  )
                                                : null;
                                } catch (e) {
                                    console.log("err:", e),
                                        (t.max_supply = h.a.translate(
                                            "account.user_issued_assets.too_large"
                                        ));
                                }
                                var a = !t.symbol && !t.max_supply;
                                this.setState({isValid: a, errors: t});
                            }
                        },
                        {
                            key: "_onFlagChange",
                            value: function(e) {
                                var t = this.state.flagBooleans;
                                (t[e] = !t[e]),
                                    this.setState({flagBooleans: t});
                            }
                        },
                        {
                            key: "_onPermissionChange",
                            value: function(e) {
                                var t = this.state.permissionBooleans;
                                (t[e] = !t[e]),
                                    this.setState({permissionBooleans: t});
                            }
                        },
                        {
                            key: "_onInputCoreAsset",
                            value: function(e, t) {
                                "quote" === e
                                    ? this.setState({quoteAssetInput: t})
                                    : "base" === e &&
                                      this.setState({baseAssetInput: t});
                            }
                        },
                        {
                            key: "_onFoundCoreAsset",
                            value: function(e, t) {
                                if (t) {
                                    var a = this.state.core_exchange_rate;
                                    (a[e].asset_id = t.get("id")),
                                        this.setState({core_exchange_rate: a}),
                                        this._validateEditFields({
                                            max_supply: this.state.max_supply,
                                            core_exchange_rate: a
                                        });
                                }
                            }
                        },
                        {
                            key: "_onInputMarket",
                            value: function(e) {
                                this.setState({marketInput: e});
                            }
                        },
                        {
                            key: "_onFoundMarketAsset",
                            value: function(e) {
                                e &&
                                    this._onUpdateDescription(
                                        "market",
                                        e.get("symbol")
                                    );
                            }
                        },
                        {
                            key: "_onCoreRateChange",
                            value: function(e, t) {
                                var a = void 0,
                                    s = void 0;
                                if ("quote" === e)
                                    (a = p.a.limitByPrecision(
                                        t.target.value,
                                        this.state.update.precision
                                    )),
                                        (s = null);
                                else {
                                    if (!(t && "amount" in t)) return;
                                    (a =
                                        "" == t.amount
                                            ? "0"
                                            : p.a.limitByPrecision(
                                                  t.amount
                                                      .toString()
                                                      .replace(/,/g, ""),
                                                  this.props.core.get(
                                                      "precision"
                                                  )
                                              )),
                                        (s = t.asset.get("id"));
                                }
                                (this.state.core_exchange_rate[e] = {
                                    amount: a,
                                    asset_id: s
                                }),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onToggleBitAsset",
                            value: function() {
                                this.state.update;
                                (this.state.isBitAsset = !this.state
                                    .isBitAsset),
                                    this.state.isBitAsset ||
                                        (this.state.is_prediction_market = !1);
                                var e = this._getPermissions(this.state),
                                    t = e.flagBooleans,
                                    a = e.permissionBooleans;
                                (this.state.flagBooleans = t),
                                    (this.state.permissionBooleans = a),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "_onTogglePM",
                            value: function() {
                                (this.state.is_prediction_market = !this.state
                                    .is_prediction_market),
                                    (this.state.update.precision = this.props.core.get(
                                        "precision"
                                    )),
                                    (this.state.core_exchange_rate.base.asset_id = this.props.core.get(
                                        "id"
                                    )),
                                    this.forceUpdate();
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.globalObject,
                                    a = e.core,
                                    s = this.state,
                                    r = s.errors,
                                    o = s.isValid,
                                    c = s.update,
                                    m = s.flagBooleans,
                                    _ = s.permissionBooleans,
                                    b = s.core_exchange_rate,
                                    g = s.is_prediction_market,
                                    y = s.isBitAsset,
                                    E = s.bitasset_opts,
                                    v = c.symbol.length,
                                    C = "N/A";
                                3 === v
                                    ? (C = n.a.createElement(d.a, {
                                          amount: Object(w.c)(
                                              "asset_create",
                                              ["symbol3"],
                                              t
                                          ),
                                          asset: "1.3.0"
                                      }))
                                    : 4 === v
                                        ? (C = n.a.createElement(d.a, {
                                              amount: Object(w.c)(
                                                  "asset_create",
                                                  ["symbol4"],
                                                  t
                                              ),
                                              asset: "1.3.0"
                                          }))
                                        : v > 4 &&
                                          (C = n.a.createElement(d.a, {
                                              amount: Object(w.c)(
                                                  "asset_create",
                                                  ["long_symbol"],
                                                  t
                                              ),
                                              asset: "1.3.0"
                                          }));
                                var A = [],
                                    N = function(e, t, a) {
                                        return n.a.createElement(
                                            "table",
                                            {
                                                key: "table_" + e,
                                                className: "table"
                                            },
                                            n.a.createElement(
                                                "tbody",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    null,
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none",
                                                                width: "80%"
                                                            }
                                                        },
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "account.user_issued_assets." +
                                                                e
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "switch",
                                                                style: {
                                                                    marginBottom:
                                                                        "10px"
                                                                },
                                                                onClick: t
                                                            },
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "checkbox",
                                                                    checked: a
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        );
                                    };
                                for (var B in _)
                                    _[B] &&
                                        "charge_market_fee" !== B &&
                                        A.push(
                                            N(
                                                B,
                                                this._onFlagChange.bind(
                                                    this,
                                                    B
                                                ),
                                                m[B]
                                            )
                                        );
                                A.push(
                                    N(
                                        "visible",
                                        this._onUpdateDescription.bind(
                                            this,
                                            "visible"
                                        ),
                                        !c.description.visible &&
                                            !1 === c.description.visible
                                    )
                                );
                                var P = [];
                                for (var I in _)
                                    P.push(
                                        n.a.createElement(
                                            "table",
                                            {
                                                key: "table_" + I,
                                                className: "table"
                                            },
                                            n.a.createElement(
                                                "tbody",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    null,
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none",
                                                                width: "80%"
                                                            }
                                                        },
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "account.user_issued_assets." +
                                                                I
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "switch",
                                                                style: {
                                                                    marginBottom:
                                                                        "10px"
                                                                },
                                                                onClick: this._onPermissionChange.bind(
                                                                    this,
                                                                    I
                                                                )
                                                            },
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "checkbox",
                                                                    checked:
                                                                        _[I],
                                                                    onChange: function() {}
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                var O = n.a.createElement(
                                        "div",
                                        null,
                                        n.a.createElement(
                                            "button",
                                            {
                                                className: "btn large outline",
                                                onClick: this._reset.bind(this),
                                                value: h.a.translate(
                                                    "account.perm.reset"
                                                )
                                            },
                                            n.a.createElement(i.a, {
                                                content: "account.perm.reset"
                                            })
                                        ),
                                        n.a.createElement(
                                            "button",
                                            {
                                                className: "btn large inverted",
                                                disabled: !o,
                                                onClick: this._createAsset.bind(
                                                    this
                                                )
                                            },
                                            n.a.createElement(i.a, {
                                                content: "header.create_asset"
                                            })
                                        )
                                    ),
                                    F = n.a.createElement(
                                        "div",
                                        {className: "small-12 grid-content"},
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.symbol"
                                            }),
                                            n.a.createElement("input", {
                                                type: "text",
                                                value: c.symbol,
                                                onChange: this._onUpdateInput.bind(
                                                    this,
                                                    "symbol"
                                                )
                                            })
                                        ),
                                        r.symbol
                                            ? n.a.createElement(
                                                  "p",
                                                  {
                                                      className:
                                                          "grid-content has-error"
                                                  },
                                                  r.symbol
                                              )
                                            : null,
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.max_supply"
                                            }),
                                            " ",
                                            c.symbol
                                                ? n.a.createElement(
                                                      "span",
                                                      null,
                                                      "(",
                                                      c.symbol,
                                                      ")"
                                                  )
                                                : null,
                                            n.a.createElement("input", {
                                                type: "text",
                                                value: c.max_supply,
                                                onChange: this._onUpdateInput.bind(
                                                    this,
                                                    "max_supply"
                                                )
                                            })
                                        ),
                                        r.max_supply
                                            ? n.a.createElement(
                                                  "p",
                                                  {
                                                      className:
                                                          "grid-content has-error"
                                                  },
                                                  r.max_supply
                                              )
                                            : null,
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.decimals"
                                            }),
                                            n.a.createElement("input", {
                                                min: "0",
                                                max: "8",
                                                step: "1",
                                                type: "range",
                                                value: c.precision,
                                                onChange: this._onUpdateInput.bind(
                                                    this,
                                                    "precision"
                                                )
                                            })
                                        ),
                                        n.a.createElement(
                                            "p",
                                            null,
                                            c.precision
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                style: {marginBottom: 10},
                                                className: "txtlabel cancel"
                                            },
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.precision_warning"
                                            })
                                        ),
                                        n.a.createElement(
                                            "table",
                                            {
                                                className: "table",
                                                style: {width: "inherit"}
                                            },
                                            n.a.createElement(
                                                "tbody",
                                                null,
                                                n.a.createElement(
                                                    "tr",
                                                    null,
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        n.a.createElement(i.a, {
                                                            content:
                                                                "account.user_issued_assets.mpa"
                                                        }),
                                                        ":"
                                                    ),
                                                    n.a.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                border: "none"
                                                            }
                                                        },
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "switch",
                                                                style: {
                                                                    marginBottom:
                                                                        "10px"
                                                                },
                                                                onClick: this._onToggleBitAsset.bind(
                                                                    this
                                                                )
                                                            },
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "checkbox",
                                                                    checked: y
                                                                }
                                                            ),
                                                            n.a.createElement(
                                                                "label",
                                                                null
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        y
                                            ? n.a.createElement(
                                                  "table",
                                                  {
                                                      className: "table",
                                                      style: {width: "inherit"}
                                                  },
                                                  n.a.createElement(
                                                      "tbody",
                                                      null,
                                                      n.a.createElement(
                                                          "tr",
                                                          null,
                                                          n.a.createElement(
                                                              "td",
                                                              {
                                                                  style: {
                                                                      border:
                                                                          "none"
                                                                  }
                                                              },
                                                              n.a.createElement(
                                                                  i.a,
                                                                  {
                                                                      content:
                                                                          "account.user_issued_assets.pm"
                                                                  }
                                                              ),
                                                              ":"
                                                          ),
                                                          n.a.createElement(
                                                              "td",
                                                              {
                                                                  style: {
                                                                      border:
                                                                          "none"
                                                                  }
                                                              },
                                                              n.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "switch",
                                                                      style: {
                                                                          marginBottom:
                                                                              "10px"
                                                                      },
                                                                      onClick: this._onTogglePM.bind(
                                                                          this
                                                                      )
                                                                  },
                                                                  n.a.createElement(
                                                                      "input",
                                                                      {
                                                                          type:
                                                                              "checkbox",
                                                                          checked: g
                                                                      }
                                                                  ),
                                                                  n.a.createElement(
                                                                      "label",
                                                                      null
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                              )
                                            : null,
                                        n.a.createElement(i.a, {
                                            component: "h3",
                                            content:
                                                "account.user_issued_assets.core_exchange_rate"
                                        }),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "grid-block no-margin"
                                                },
                                                r.quote_asset
                                                    ? n.a.createElement(
                                                          "p",
                                                          {
                                                              className:
                                                                  "grid-content has-error"
                                                          },
                                                          r.quote_asset
                                                      )
                                                    : null,
                                                r.base_asset
                                                    ? n.a.createElement(
                                                          "p",
                                                          {
                                                              className:
                                                                  "grid-content has-error"
                                                          },
                                                          r.base_asset
                                                      )
                                                    : null,
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-margin small-12 medium-6"
                                                    },
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "amount-selector",
                                                            style: {
                                                                width: "100%",
                                                                paddingRight:
                                                                    "10px"
                                                            }
                                                        },
                                                        n.a.createElement(i.a, {
                                                            component: "label",
                                                            content:
                                                                "account.user_issued_assets.quote"
                                                        }),
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "inline-label"
                                                            },
                                                            n.a.createElement(
                                                                "input",
                                                                {
                                                                    type:
                                                                        "text",
                                                                    placeholder:
                                                                        "0.0",
                                                                    onChange: this._onCoreRateChange.bind(
                                                                        this,
                                                                        "quote"
                                                                    ),
                                                                    value:
                                                                        b.quote
                                                                            .amount
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "grid-block no-margin small-12 medium-6"
                                                    },
                                                    n.a.createElement(x.a, {
                                                        label:
                                                            "account.user_issued_assets.base",
                                                        amount: b.base.amount,
                                                        onChange: this._onCoreRateChange.bind(
                                                            this,
                                                            "base"
                                                        ),
                                                        asset: b.base.asset_id,
                                                        assets: [
                                                            b.base.asset_id
                                                        ],
                                                        placeholder: "0.0",
                                                        tabIndex: 1,
                                                        style: {
                                                            width: "100%",
                                                            paddingLeft: "10px"
                                                        }
                                                    })
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                null,
                                                n.a.createElement(
                                                    "h5",
                                                    null,
                                                    n.a.createElement(i.a, {
                                                        content:
                                                            "exchange.price"
                                                    }),
                                                    n.a.createElement(
                                                        "span",
                                                        null,
                                                        ":",
                                                        " ",
                                                        p.a.format_number(
                                                            p.a.get_asset_price(
                                                                b.quote.amount *
                                                                    p.a.get_asset_precision(
                                                                        c.precision
                                                                    ),
                                                                {
                                                                    precision:
                                                                        c.precision
                                                                },
                                                                b.base.amount *
                                                                    p.a.get_asset_precision(
                                                                        a
                                                                    ),
                                                                a
                                                            ),
                                                            2 +
                                                                (parseInt(
                                                                    c.precision,
                                                                    10
                                                                ) || 8)
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "span",
                                                        null,
                                                        " ",
                                                        c.symbol,
                                                        "/",
                                                        a.get("symbol")
                                                    )
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.cer_warning_1",
                                                component: "label",
                                                className: "has-error"
                                            }),
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.cer_warning_2",
                                                component: "p"
                                            })
                                        ),
                                        n.a.createElement(
                                            "p",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.approx_fee"
                                            }),
                                            ": ",
                                            C
                                        )
                                    ),
                                    U = n.a.createElement(
                                        "div",
                                        {className: "small-12 grid-content"},
                                        n.a.createElement(i.a, {
                                            component: "label",
                                            content:
                                                "account.user_issued_assets.description"
                                        }),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement("textarea", {
                                                style: {height: "7rem"},
                                                rows: "1",
                                                value: c.description.main,
                                                onChange: this._onUpdateDescription.bind(
                                                    this,
                                                    "main"
                                                )
                                            })
                                        ),
                                        n.a.createElement(i.a, {
                                            component: "label",
                                            content:
                                                "account.user_issued_assets.short"
                                        }),
                                        n.a.createElement(
                                            "label",
                                            null,
                                            n.a.createElement("input", {
                                                type: "text",
                                                rows: "1",
                                                value: c.description.short_name,
                                                onChange: this._onUpdateDescription.bind(
                                                    this,
                                                    "short_name"
                                                )
                                            })
                                        ),
                                        n.a.createElement(i.a, {
                                            component: "label",
                                            content:
                                                "account.user_issued_assets.market"
                                        }),
                                        n.a.createElement(f.a, {
                                            label:
                                                "account.user_issued_assets.name",
                                            onChange: this._onInputMarket.bind(
                                                this
                                            ),
                                            asset: this.state.marketInput,
                                            assetInput: this.state.marketInput,
                                            style: {
                                                width: "100%",
                                                paddingRight: "10px"
                                            },
                                            onFound: this._onFoundMarketAsset.bind(
                                                this
                                            )
                                        }),
                                        g
                                            ? n.a.createElement(
                                                  "div",
                                                  null,
                                                  n.a.createElement(i.a, {
                                                      component: "h3",
                                                      content:
                                                          "account.user_issued_assets.condition"
                                                  }),
                                                  n.a.createElement(
                                                      "label",
                                                      null,
                                                      n.a.createElement(
                                                          "input",
                                                          {
                                                              type: "text",
                                                              rows: "1",
                                                              value:
                                                                  c.description
                                                                      .condition,
                                                              onChange: this._onUpdateDescription.bind(
                                                                  this,
                                                                  "condition"
                                                              )
                                                          }
                                                      )
                                                  ),
                                                  n.a.createElement(i.a, {
                                                      component: "h3",
                                                      content:
                                                          "account.user_issued_assets.expiry"
                                                  }),
                                                  n.a.createElement(
                                                      "label",
                                                      null,
                                                      n.a.createElement(
                                                          "input",
                                                          {
                                                              type: "date",
                                                              value:
                                                                  c.description
                                                                      .expiry,
                                                              onChange: this._onUpdateDescription.bind(
                                                                  this,
                                                                  "expiry"
                                                              )
                                                          }
                                                      )
                                                  )
                                              )
                                            : null
                                    ),
                                    R = n.a.createElement(
                                        "div",
                                        {className: "small-12 grid-content"},
                                        n.a.createElement(
                                            "div",
                                            {style: {maxWidth: 800}},
                                            n.a.createElement(u.a, {
                                                path:
                                                    "components/AccountAssetCreate",
                                                section: "permissions"
                                            })
                                        ),
                                        P
                                    ),
                                    j = n.a.createElement(
                                        "div",
                                        {className: "small-12 grid-content"},
                                        n.a.createElement(
                                            "div",
                                            {style: {maxWidth: 800}},
                                            n.a.createElement(u.a, {
                                                path:
                                                    "components/AccountAssetCreate",
                                                section: "flags"
                                            })
                                        ),
                                        _.charge_market_fee
                                            ? n.a.createElement(
                                                  "div",
                                                  null,
                                                  n.a.createElement(i.a, {
                                                      component: "h3",
                                                      content:
                                                          "account.user_issued_assets.market_fee"
                                                  }),
                                                  n.a.createElement(
                                                      "table",
                                                      {className: "table"},
                                                      n.a.createElement(
                                                          "tbody",
                                                          null,
                                                          n.a.createElement(
                                                              "tr",
                                                              null,
                                                              n.a.createElement(
                                                                  "td",
                                                                  {
                                                                      style: {
                                                                          border:
                                                                              "none",
                                                                          width:
                                                                              "80%"
                                                                      }
                                                                  },
                                                                  n.a.createElement(
                                                                      i.a,
                                                                      {
                                                                          content:
                                                                              "account.user_issued_assets.charge_market_fee"
                                                                      }
                                                                  ),
                                                                  ":"
                                                              ),
                                                              n.a.createElement(
                                                                  "td",
                                                                  {
                                                                      style: {
                                                                          border:
                                                                              "none"
                                                                      }
                                                                  },
                                                                  n.a.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "switch",
                                                                          style: {
                                                                              marginBottom:
                                                                                  "10px"
                                                                          },
                                                                          onClick: this._onFlagChange.bind(
                                                                              this,
                                                                              "charge_market_fee"
                                                                          )
                                                                      },
                                                                      n.a.createElement(
                                                                          "input",
                                                                          {
                                                                              type:
                                                                                  "checkbox",
                                                                              checked:
                                                                                  m.charge_market_fee
                                                                          }
                                                                      ),
                                                                      n.a.createElement(
                                                                          "label",
                                                                          null
                                                                      )
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  n.a.createElement(
                                                      "div",
                                                      {
                                                          className: l()({
                                                              disabled: !m.charge_market_fee
                                                          })
                                                      },
                                                      n.a.createElement(
                                                          "label",
                                                          null,
                                                          n.a.createElement(
                                                              i.a,
                                                              {
                                                                  content:
                                                                      "account.user_issued_assets.market_fee"
                                                              }
                                                          ),
                                                          " ",
                                                          "(%)",
                                                          n.a.createElement(
                                                              "input",
                                                              {
                                                                  type:
                                                                      "number",
                                                                  value:
                                                                      c.market_fee_percent,
                                                                  onChange: this._onUpdateInput.bind(
                                                                      this,
                                                                      "market_fee_percent"
                                                                  )
                                                              }
                                                          )
                                                      ),
                                                      n.a.createElement(
                                                          "label",
                                                          null,
                                                          n.a.createElement(
                                                              i.a,
                                                              {
                                                                  content:
                                                                      "account.user_issued_assets.max_market_fee"
                                                              }
                                                          ),
                                                          " ",
                                                          "(",
                                                          c.symbol,
                                                          ")",
                                                          n.a.createElement(
                                                              "input",
                                                              {
                                                                  type:
                                                                      "number",
                                                                  value:
                                                                      c.max_market_fee,
                                                                  onChange: this._onUpdateInput.bind(
                                                                      this,
                                                                      "max_market_fee"
                                                                  )
                                                              }
                                                          )
                                                      ),
                                                      r.max_market_fee
                                                          ? n.a.createElement(
                                                                "p",
                                                                {
                                                                    className:
                                                                        "grid-content has-error"
                                                                },
                                                                r.max_market_fee
                                                            )
                                                          : null
                                                  )
                                              )
                                            : null,
                                        n.a.createElement(
                                            "h3",
                                            null,
                                            n.a.createElement(i.a, {
                                                content:
                                                    "account.user_issued_assets.flags"
                                            })
                                        ),
                                        A
                                    ),
                                    T = n.a.createElement(S, {
                                        bitasset_opts: E,
                                        onUpdate: this.onChangeBitAssetOpts.bind(
                                            this
                                        ),
                                        backingAsset: E.short_backing_asset,
                                        assetPrecision: c.precision,
                                        assetSymbol: c.symbol
                                    }),
                                    D = [
                                        {
                                            title:
                                                "account.user_issued_assets.primary",
                                            content: F
                                        },
                                        {
                                            title:
                                                "account.user_issued_assets.description",
                                            content: U
                                        },
                                        {
                                            title: "account.permissions",
                                            content: R
                                        },
                                        {
                                            title:
                                                "account.user_issued_assets.flags",
                                            content: j
                                        }
                                    ];
                                return (
                                    y &&
                                        D.splice(2, 0, {
                                            title:
                                                "account.user_issued_assets.bitasset_opts",
                                            content: T
                                        }),
                                    n.a.createElement(
                                        "div",
                                        {className: "create-asset-container"},
                                        n.a.createElement(
                                            "h2",
                                            {className: "content__heading"},
                                            h.a.translate("header.create_asset")
                                        ),
                                        n.a.createElement(k.a, {
                                            items: D,
                                            dashboardTabsClass:
                                                "dashboard__tabs permissions small",
                                            buttons: O
                                        })
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (R.propTypes = {
                core: b.a.ChainAsset.isRequired,
                globalObject: b.a.ChainObject.isRequired
            }),
                (R.defaultProps = {globalObject: "2.0.0", core: "1.3.0"}),
                (R = Object(g.a)(R));
        }
    }
]);
