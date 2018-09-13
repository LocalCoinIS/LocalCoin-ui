(window.webpackJsonp = window.webpackJsonp || []).push([
    [31],
    {
        351: function(e, t, n) {
            "use strict";
            var a = n(0),
                s = n.n(a),
                o = n(1),
                i = n.n(o),
                r = n(5),
                c = n(56),
                l = n(3),
                u = n.n(l),
                p = n(43),
                m = n(77),
                d = (function() {
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
            var h = (function(e) {
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (n.state = {amount: 0}), n;
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
                    d(t, [
                        {
                            key: "onAmountChanged",
                            value: function(e) {
                                var t = e.amount,
                                    n = e.asset;
                                this.setState({amount: t, asset: n});
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                var e = r.a.get_asset_precision(
                                        this.state.asset.get("precision")
                                    ),
                                    t = this.state.amount.replace(/,/g, "");
                                (t *= e),
                                    m.a.reserveAsset(
                                        t,
                                        this.props.assetId,
                                        this.props.account.get("id")
                                    ),
                                    this.props.onClose();
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.assetId;
                                return s.a.createElement(
                                    "form",
                                    {
                                        className:
                                            "grid-block vertical full-width-content"
                                    },
                                    s.a.createElement(i.a, {
                                        component: "h3",
                                        content: "modal.reserve.title"
                                    }),
                                    s.a.createElement(
                                        "div",
                                        {
                                            className: "grid-container ",
                                            style: {paddingTop: "2rem"}
                                        },
                                        s.a.createElement(
                                            "div",
                                            {className: "content-block"},
                                            s.a.createElement(p.a, {
                                                label: "modal.reserve.amount",
                                                amount: this.state.amount,
                                                onChange: this.onAmountChanged.bind(
                                                    this
                                                ),
                                                asset: e,
                                                assets: [e],
                                                display_balance: s.a.createElement(
                                                    c.a,
                                                    {
                                                        balance: this.props.account.getIn(
                                                            ["balances", e]
                                                        )
                                                    }
                                                ),
                                                tabIndex: 1
                                            })
                                        ),
                                        s.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "content-block button-group"
                                            },
                                            s.a.createElement("input", {
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
                                            s.a.createElement(
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
            t.a = h;
        },
        4970: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(76),
                s = n(0),
                o = n.n(s),
                i = n(2),
                r = n.n(i),
                c = n(11),
                l = n(1),
                u = n.n(l),
                p = n(77),
                m = n(106),
                d = n(24),
                h = n(35),
                b = n(17),
                f = n(20),
                v = n.n(f),
                y = n(28),
                g = n(5),
                _ = n(37),
                E = n(576),
                k = n(351),
                w = n(15),
                T = n(47),
                C = n(7),
                N = n(49),
                O = (n(72), n(3)),
                S = n.n(O),
                x = (function() {
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
            var A = (function(e) {
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
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (n.state = {
                            create: {
                                symbol: "",
                                name: "",
                                description: "",
                                max_supply: 1e15,
                                precision: 4
                            },
                            issue: {
                                amount: 0,
                                to: "",
                                to_id: "",
                                asset_id: "",
                                symbol: ""
                            },
                            errors: {symbol: null},
                            isValid: !1,
                            searchTerm: ""
                        }),
                        (n._searchAccounts = Object(a.a)(
                            n._searchAccounts,
                            150
                        )),
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
                    })(t, o.a.Component),
                    x(t, [
                        {
                            key: "_checkAssets",
                            value: function(e, t) {
                                if (!this.props.account.get("assets").size) {
                                    var n = e
                                        .sort(function(e, t) {
                                            return e.symbol > t.symbol
                                                ? 1
                                                : e.symbol < t.symbol
                                                    ? -1
                                                    : 0;
                                        })
                                        .last();
                                    0 === e.size || t
                                        ? (p.a.getAssetList.defer("A", 100),
                                          this.setState({assetsFetched: 100}))
                                        : e.size >= this.state.assetsFetched &&
                                          (p.a.getAssetList.defer(
                                              n.symbol,
                                              100
                                          ),
                                          this.setState({
                                              assetsFetched:
                                                  this.state.assetsFetched + 99
                                          }));
                                }
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this._checkAssets(e.assets);
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._checkAssets(this.props.assets, !0);
                            }
                        },
                        {
                            key: "_onIssueInput",
                            value: function(e, t) {
                                var n = t.target.id,
                                    a = this.state.issue;
                                if ("to" === n) {
                                    this._searchAccounts(t.target.value),
                                        (a.to = t.target.value);
                                    var s = this.props.searchAccounts.findEntry(
                                        function(e) {
                                            return e === t.target.value;
                                        }
                                    );
                                    a.to_id = s ? s[0] : null;
                                } else a[e] = t.target.value;
                                this.setState({issue: a});
                            }
                        },
                        {
                            key: "_searchAccounts",
                            value: function(e) {
                                d.a.accountSearch(e);
                            }
                        },
                        {
                            key: "_issueAsset",
                            value: function(e, t) {
                                var n = this;
                                t.preventDefault(),
                                    v.a.publish("issue_asset", "close");
                                var a = this.state.issue,
                                    s = this.props.assets.get(a.asset_id);
                                (a.amount *= g.a.get_asset_precision(
                                    s.precision
                                )),
                                    p.a.issueAsset(e, a).then(function(e) {
                                        e
                                            ? (y.a.addNotification({
                                                  message:
                                                      "Successfully issued " +
                                                      g.a.format_asset(
                                                          a.amount,
                                                          n.props.assets.get(
                                                              a.asset_id
                                                          )
                                                      ),
                                                  level: "success",
                                                  autoDismiss: 10
                                              }),
                                              ChainStore.getAsset(a.asset_id))
                                            : y.a.addNotification({
                                                  message:
                                                      "Failed to issue asset",
                                                  level: "error",
                                                  autoDismiss: 10
                                              });
                                    });
                            }
                        },
                        {
                            key: "_reserveButtonClick",
                            value: function(e, t) {
                                t.preventDefault(),
                                    this.setState({reserve: e}),
                                    v.a.publish("reserve_asset", "open");
                            }
                        },
                        {
                            key: "_reserveAsset",
                            value: function(e, t) {
                                t.preventDefault(),
                                    v.a.publish("reserve_asset", "close");
                                var n = this.state.issue,
                                    a = this.props.assets.get(n.asset_id);
                                (n.amount *= g.a.get_asset_precision(
                                    a.precision
                                )),
                                    p.a.issueAsset(e, n);
                            }
                        },
                        {
                            key: "_issueButtonClick",
                            value: function(e, t, n) {
                                n.preventDefault();
                                var a = this.state.issue;
                                (a.asset_id = e),
                                    (a.symbol = t),
                                    this.setState({issue: a}),
                                    v.a.publish("issue_asset", "open");
                            }
                        },
                        {
                            key: "_editButtonClick",
                            value: function(e, t, n) {
                                n.preventDefault(),
                                    this.props.router.push(
                                        "/account/" + t + "/update-asset/" + e
                                    );
                            }
                        },
                        {
                            key: "_onAccountSelect",
                            value: function(e) {
                                var t = this.state.issue;
                                (t.to = e),
                                    (t.to_id = this.props.account_name_to_id[
                                        e
                                    ]),
                                    this.setState({issue: t});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.account,
                                    a = t.account_name,
                                    s = t.assets,
                                    i = t.assetsList,
                                    r = !0;
                                if (!n)
                                    return o.a.createElement(_.a, {
                                        type: "circle"
                                    });
                                if ((n.notFound && (r = !1), !r))
                                    return o.a.createElement(
                                        "div",
                                        {className: "grid-block"},
                                        o.a.createElement(
                                            "h5",
                                            null,
                                            o.a.createElement(u.a, {
                                                component: "h5",
                                                content:
                                                    "account.errors.not_found",
                                                name: a
                                            })
                                        )
                                    );
                                i.length &&
                                    ((s = s.clear()),
                                    i.forEach(function(e) {
                                        e && (s = s.set(e.get("id"), e.toJS()));
                                    }));
                                var l = s
                                    .filter(function(e) {
                                        return e.issuer === n.get("id");
                                    })
                                    .sort(function(e, t) {
                                        return (
                                            parseInt(
                                                e.id.substring(4, e.id.length),
                                                10
                                            ) -
                                            parseInt(
                                                t.id.substring(4, t.id.length),
                                                10
                                            )
                                        );
                                    })
                                    .map(function(t) {
                                        var n = T.a.parseDescription(
                                                t.options.description
                                            ),
                                            s = n.short_name
                                                ? n.short_name
                                                : n.main;
                                        s.length > 100 &&
                                            (s = s.substr(0, 100) + "...");
                                        var i = e.props.getDynamicObject(
                                            t.dynamic_asset_data_id
                                        );
                                        return o.a.createElement(
                                            "tr",
                                            {key: t.symbol},
                                            o.a.createElement(
                                                "td",
                                                null,
                                                o.a.createElement(
                                                    c.b,
                                                    {to: "/asset/" + t.symbol},
                                                    t.symbol
                                                )
                                            ),
                                            o.a.createElement(
                                                "td",
                                                {style: {maxWidth: "250px"}},
                                                s
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                i
                                                    ? o.a.createElement(b.a, {
                                                          amount: parseInt(
                                                              i.get(
                                                                  "current_supply"
                                                              ),
                                                              10
                                                          ),
                                                          asset: t.id
                                                      })
                                                    : null
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                o.a.createElement(b.a, {
                                                    amount: parseInt(
                                                        t.options.max_supply,
                                                        10
                                                    ),
                                                    asset: t.id
                                                })
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                t.bitasset_data_id
                                                    ? null
                                                    : o.a.createElement(
                                                          "button",
                                                          {
                                                              onClick: e._issueButtonClick.bind(
                                                                  e,
                                                                  t.id,
                                                                  t.symbol
                                                              ),
                                                              className:
                                                                  "btn outline"
                                                          },
                                                          S.a.translate(
                                                              "transaction.trxTypes.asset_issue"
                                                          )
                                                      )
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                t.bitasset_data_id
                                                    ? null
                                                    : o.a.createElement(
                                                          "button",
                                                          {
                                                              onClick: e._reserveButtonClick.bind(
                                                                  e,
                                                                  t.id
                                                              ),
                                                              className:
                                                                  "btn outline"
                                                          },
                                                          o.a.createElement(
                                                              u.a,
                                                              {
                                                                  content:
                                                                      "transaction.trxTypes.asset_reserve"
                                                              }
                                                          )
                                                      )
                                            ),
                                            o.a.createElement(
                                                "td",
                                                null,
                                                o.a.createElement(
                                                    "button",
                                                    {
                                                        onClick: e._editButtonClick.bind(
                                                            e,
                                                            t.symbol,
                                                            a
                                                        ),
                                                        className: "btn outline"
                                                    },
                                                    S.a.translate(
                                                        "transaction.trxTypes.asset_update"
                                                    )
                                                )
                                            )
                                        );
                                    })
                                    .toArray();
                                return o.a.createElement(
                                    "div",
                                    null,
                                    o.a.createElement(
                                        "h2",
                                        {className: "content__heading"},
                                        S.a.translate(
                                            "account.user_issued_assets.issued_assets"
                                        )
                                    ),
                                    o.a.createElement(
                                        "div",
                                        {className: "negative-margins"},
                                        o.a.createElement(
                                            "div",
                                            {className: "container-fluid"},
                                            o.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                o.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "blue-bg with-borders"
                                                    },
                                                    o.a.createElement(
                                                        "thead",
                                                        null,
                                                        o.a.createElement(
                                                            "tr",
                                                            null,
                                                            o.a.createElement(
                                                                "th",
                                                                null,
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.symbol"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        maxWidth:
                                                                            "200px"
                                                                    }
                                                                },
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.description"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                u.a,
                                                                {
                                                                    component:
                                                                        "th",
                                                                    content:
                                                                        "markets.supply"
                                                                }
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                null,
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.user_issued_assets.max_supply"
                                                                    }
                                                                )
                                                            ),
                                                            o.a.createElement(
                                                                "th",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "center"
                                                                    },
                                                                    colSpan: "3"
                                                                },
                                                                o.a.createElement(
                                                                    u.a,
                                                                    {
                                                                        content:
                                                                            "account.perm.action"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    o.a.createElement(
                                                        "tbody",
                                                        null,
                                                        l
                                                    )
                                                )
                                            ),
                                            o.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                o.a.createElement(
                                                    c.b,
                                                    {
                                                        to:
                                                            "/account/" +
                                                            a +
                                                            "/create-asset/"
                                                    },
                                                    o.a.createElement(
                                                        "button",
                                                        {
                                                            className:
                                                                "btn large inverted"
                                                        },
                                                        S.a.translate(
                                                            "transaction.trxTypes.asset_create"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    o.a.createElement(
                                        h.a,
                                        {id: "issue_asset", overlay: !0},
                                        o.a.createElement("br", null),
                                        o.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            o.a.createElement(E.a, {
                                                asset_to_issue: this.state.issue
                                                    .asset_id,
                                                onClose: function() {
                                                    v.a.publish(
                                                        "issue_asset",
                                                        "close"
                                                    );
                                                }
                                            })
                                        )
                                    ),
                                    o.a.createElement(
                                        h.a,
                                        {id: "reserve_asset", overlay: !0},
                                        o.a.createElement("br", null),
                                        o.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            o.a.createElement(k.a, {
                                                assetId: this.state.reserve,
                                                account: n,
                                                onClose: function() {
                                                    v.a.publish(
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
            (A.defaultProps = {
                symbol: "",
                name: "",
                description: "",
                max_supply: 0,
                precision: 0
            }),
                (A.propTypes = {symbol: r.a.string.isRequired}),
                (A = Object(N.a)(A, {
                    propNames: ["assetsList"],
                    asList: !0,
                    withDynamic: !0
                })),
                (t.default = Object(w.connect)(A, {
                    listenTo: function() {
                        return [m.a];
                    },
                    getProps: function(e) {
                        var t = Object(C.Map)(),
                            n = Object(C.List)();
                        return (
                            e.account.get("assets", []).size
                                ? e.account
                                      .get("assets", [])
                                      .forEach(function(e) {
                                          n = n.push(e);
                                      })
                                : (t = m.a.getState().assets),
                            {assets: t, assetsList: n}
                        );
                    }
                }));
        },
        576: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    s = n.n(a),
                    o = n(1),
                    i = n.n(o),
                    r = n(6),
                    c = n(12),
                    l = n(5),
                    u = n(3),
                    p = n.n(u),
                    m = n(77),
                    d = n(101),
                    h = n(43),
                    b = (function() {
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
                var f = (function(t) {
                    function n(e) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, n);
                        var t = (function(e, t) {
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
                            (n.__proto__ || Object.getPrototypeOf(n)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (t.state = {
                                amount: e.amount,
                                to: e.to,
                                to_id: null,
                                memo: ""
                            }),
                            t
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
                        })(n, s.a.Component),
                        b(n, [
                            {
                                key: "onAmountChanged",
                                value: function(e) {
                                    var t = e.amount;
                                    this.setState({amount: t});
                                }
                            },
                            {
                                key: "onToAccountChanged",
                                value: function(e) {
                                    var t = e
                                        ? {
                                              to: e.get("name"),
                                              to_id: e.get("id")
                                          }
                                        : {to_id: null};
                                    this.setState(t);
                                }
                            },
                            {
                                key: "onToChanged",
                                value: function(e) {
                                    this.setState({to: e, to_id: null});
                                }
                            },
                            {
                                key: "onSubmit",
                                value: function() {
                                    var t = this.props.asset_to_issue,
                                        n = l.a.get_asset_precision(
                                            t.get("precision")
                                        ),
                                        a = this.state.amount
                                            .toString()
                                            .replace(/,/g, "");
                                    (a *= n),
                                        m.a.issueAsset(
                                            this.state.to_id,
                                            t.get("issuer"),
                                            t.get("id"),
                                            a,
                                            this.state.memo
                                                ? new e(
                                                      this.state.memo,
                                                      "utf-8"
                                                  )
                                                : this.state.memo
                                        ),
                                        this.setState({
                                            amount: 0,
                                            to: "",
                                            to_id: null,
                                            memo: ""
                                        });
                                }
                            },
                            {
                                key: "onMemoChanged",
                                value: function(e) {
                                    this.setState({memo: e.target.value});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props.asset_to_issue.get("id"),
                                        t = 1;
                                    return s.a.createElement(
                                        "form",
                                        {
                                            className:
                                                "grid-block vertical full-width-content"
                                        },
                                        s.a.createElement(
                                            "div",
                                            {
                                                className: "grid-container ",
                                                style: {paddingTop: "2rem"}
                                            },
                                            s.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                s.a.createElement(d.a, {
                                                    label: "modal.issue.to",
                                                    accountName: this.state.to,
                                                    onAccountChanged: this.onToAccountChanged.bind(
                                                        this
                                                    ),
                                                    onChange: this.onToChanged.bind(
                                                        this
                                                    ),
                                                    account: this.state.to,
                                                    tabIndex: t++
                                                })
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                s.a.createElement(h.a, {
                                                    label: "modal.issue.amount",
                                                    amount: this.state.amount,
                                                    onChange: this.onAmountChanged.bind(
                                                        this
                                                    ),
                                                    asset: e,
                                                    assets: [e],
                                                    tabIndex: t++
                                                })
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                s.a.createElement(
                                                    "label",
                                                    null,
                                                    s.a.createElement(i.a, {
                                                        component: "span",
                                                        content: "transfer.memo"
                                                    }),
                                                    " ",
                                                    "(",
                                                    s.a.createElement(i.a, {
                                                        content:
                                                            "transfer.optional"
                                                    }),
                                                    ")"
                                                ),
                                                s.a.createElement("textarea", {
                                                    rows: "3",
                                                    value: this.state.memo,
                                                    tabIndex: t++,
                                                    onChange: this.onMemoChanged.bind(
                                                        this
                                                    )
                                                })
                                            ),
                                            s.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block button-group"
                                                },
                                                s.a.createElement(
                                                    "button",
                                                    {
                                                        type: "submit",
                                                        className:
                                                            "button primary",
                                                        onClick: this.onSubmit.bind(
                                                            this,
                                                            this.state.to,
                                                            this.state.amount
                                                        ),
                                                        disabled:
                                                            !this.state.to_id ||
                                                            !this.state.amount,
                                                        tabIndex: t++
                                                    },
                                                    p.a.translate(
                                                        "modal.issue.submit"
                                                    )
                                                ),
                                                s.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "button primary hollow",
                                                        onClick: this.props
                                                            .onClose,
                                                        tabIndex: t++
                                                    },
                                                    p.a.translate("cancel")
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        n
                    );
                })();
                (f.propTypes = {asset_to_issue: r.a.ChainAsset.isRequired}),
                    (t.a = Object(c.a)(f));
            }.call(this, n(29).Buffer));
        },
        72: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return g;
            }),
                n.d(t, "a", function() {
                    return y;
                });
            var a = n(0),
                s = n.n(a),
                o = n(2),
                i = n.n(o),
                r = (n(1), n(9)),
                c = n.n(r),
                l = n(15),
                u = n(10),
                p = n(8),
                m = n(3),
                d = n.n(m),
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
            function b(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function v(e, t) {
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
            var y = (function(e) {
                function t() {
                    return (
                        b(this, t),
                        f(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    v(t, s.a.Component),
                    h(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.index,
                                    a = e.changeTab,
                                    o = e.title,
                                    i = e.className,
                                    r = e.updatedTab,
                                    l = e.disabled,
                                    u = e.subText,
                                    p = c()({"is-active": t}, i);
                                return (
                                    "string" == typeof o &&
                                        o.indexOf(".") > 0 &&
                                        (o = d.a.translate(o)),
                                    this.props.collapsed
                                        ? ("string" == typeof u &&
                                              (u = u.trim()),
                                          s.a.createElement(
                                              "option",
                                              {
                                                  value: n,
                                                  "data-is-link-to": this.props
                                                      .isLinkTo
                                              },
                                              s.a.createElement(
                                                  "span",
                                                  {className: "tab-title"},
                                                  o,
                                                  r ? "*" : "",
                                                  u && " (",
                                                  u && u,
                                                  u && ")"
                                              )
                                          ))
                                        : s.a.createElement(
                                              "li",
                                              {
                                                  className: p,
                                                  onClick: l
                                                      ? null
                                                      : a.bind(
                                                            this,
                                                            n,
                                                            this.props.isLinkTo
                                                        )
                                              },
                                              s.a.createElement(
                                                  "a",
                                                  null,
                                                  s.a.createElement(
                                                      "span",
                                                      {className: "tab-title"},
                                                      o,
                                                      r ? "*" : ""
                                                  ),
                                                  u &&
                                                      s.a.createElement(
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
            (y.propTypes = {
                changeTab: i.a.func,
                isActive: i.a.bool.isRequired,
                index: i.a.number.isRequired,
                className: i.a.string,
                isLinkTo: i.a.string,
                subText: i.a.oneOfType([i.a.object, i.a.string])
            }),
                (y.defaultProps = {
                    isActive: !1,
                    index: 0,
                    className: "",
                    isLinkTo: "",
                    subText: null
                });
            var g = (function(e) {
                function t(e) {
                    b(this, t);
                    var n = f(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (n.state = {
                            activeTab: e.setting
                                ? e.viewSettings.get(
                                      e.setting,
                                      e.defaultActiveTab
                                  )
                                : e.defaultActiveTab,
                            width: window.innerWidth
                        }),
                        (n._setDimensions = n._setDimensions.bind(n)),
                        n
                    );
                }
                return (
                    v(t, s.a.Component),
                    h(t, [
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
                                    n = t.children,
                                    a = t.contentClass,
                                    o = t.tabsClass,
                                    i = t.style,
                                    r = t.segmented,
                                    l =
                                        this.state.width < 900 &&
                                        s.a.Children.count(n) > 2,
                                    u = null,
                                    p = s.a.Children.map(n, function(t, n) {
                                        if (!t) return null;
                                        if (l && t.props.disabled) return null;
                                        var a = n === e.state.activeTab;
                                        return (
                                            a && (u = t.props.children),
                                            s.a.cloneElement(t, {
                                                collapsed: l,
                                                isActive: a,
                                                changeTab: e._changeTab.bind(e),
                                                index: n
                                            })
                                        );
                                    }).filter(function(e) {
                                        return null !== e;
                                    });
                                return (
                                    u || (u = p[0].props.children),
                                    s.a.createElement(
                                        "div",
                                        {
                                            className: c()(
                                                this.props.actionButtons
                                                    ? "with-buttons"
                                                    : "",
                                                this.props.className
                                            )
                                        },
                                        s.a.createElement(
                                            "div",
                                            {className: "service-selector"},
                                            s.a.createElement(
                                                "ul",
                                                {
                                                    style: i,
                                                    className: c()(
                                                        "button-group no-margin",
                                                        o,
                                                        {segmented: r}
                                                    )
                                                },
                                                l
                                                    ? s.a.createElement(
                                                          "li",
                                                          {
                                                              style: {
                                                                  paddingLeft: 10,
                                                                  paddingRight: 10,
                                                                  minWidth:
                                                                      "15rem"
                                                              }
                                                          },
                                                          s.a.createElement(
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
                                                                      var n = parseInt(
                                                                          t
                                                                              .target
                                                                              .value,
                                                                          10
                                                                      );
                                                                      e._changeTab(
                                                                          n,
                                                                          t
                                                                              .target[
                                                                              n
                                                                          ]
                                                                              .attributes[
                                                                              "data-is-link-to"
                                                                          ]
                                                                              .value
                                                                      );
                                                                  }
                                                              },
                                                              p
                                                          )
                                                      )
                                                    : p,
                                                this.props.actionButtons
                                                    ? s.a.createElement(
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
                                        s.a.createElement(
                                            "div",
                                            {className: c()("tab-content", a)},
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
            (g.propTypes = {
                setting: i.a.string,
                defaultActiveTab: i.a.number,
                segmented: i.a.bool
            }),
                (g.defaultProps = {
                    active: 0,
                    defaultActiveTab: 0,
                    segmented: !0,
                    contentClass: "",
                    style: {}
                }),
                (g.contextTypes = {router: i.a.object.isRequired}),
                (g = Object(l.connect)(g, {
                    listenTo: function() {
                        return [p.a];
                    },
                    getProps: function() {
                        return {viewSettings: p.a.getState().viewSettings};
                    }
                }));
        }
    }
]);
