(window.webpackJsonp = window.webpackJsonp || []).push([
    [21, 1, 44],
    {
        241: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                s = n(11),
                c = n(15),
                r = n(8),
                i = n(1),
                u = n.n(i),
                l = n(58),
                p = (function() {
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
                    p(t, [
                        {
                            key: "render",
                            value: function() {
                                return o.a.createElement(
                                    "div",
                                    {className: "page-404"},
                                    o.a.createElement(
                                        "div",
                                        {className: "page-404-container"},
                                        o.a.createElement(
                                            "div",
                                            {className: "page-404-logo"},
                                            o.a.createElement("img", {
                                                src: l.logoLight,
                                                height: "50px",
                                                width: "50px",
                                                alt: "Logo"
                                            })
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {className: "page-404-title"},
                                            o.a.createElement(u.a, {
                                                content:
                                                    "page404.page_not_found_title"
                                            })
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {className: "page-404-subtitle"},
                                            o.a.createElement(u.a, {
                                                content:
                                                    "page404." +
                                                    this.props.subtitle
                                            })
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {className: "page-404-button-back"},
                                            o.a.createElement(
                                                s.b,
                                                {to: "/"},
                                                o.a.createElement(u.a, {
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
            (d.defaultProps = {subtitle: "page_not_found_subtitle"}),
                (t.default = d = Object(c.connect)(d, {
                    listenTo: function() {
                        return [r.a];
                    },
                    getProps: function() {
                        return {theme: r.a.getState().settings.get("themes")};
                    }
                }));
        },
        4974: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                s = n(24),
                c = n(14),
                r = n(8),
                i = n(74),
                u = n(75),
                l = n(6),
                p = n(13),
                d = n(15),
                f = n(66),
                h = n(7),
                b = n(241),
                m = (n(236),
                n(235),
                n(715),
                Object.assign ||
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) &&
                                    (e[a] = n[a]);
                        }
                        return e;
                    }),
                g = (function() {
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
            function _(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function v(e, t) {
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
            var y = (function(e) {
                function t() {
                    return (
                        _(this, t),
                        v(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, o.a.Component),
                    g(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.props.account &&
                                    (s.a.setCurrentAccount.defer(
                                        this.props.account.get("name")
                                    ),
                                    f.a.getPossibleFees(
                                        this.props.account,
                                        "transfer"
                                    ));
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                if (e.account) {
                                    var t = e.account.get("name"),
                                        n =
                                            this.props.account &&
                                            this.props.account.get("name");
                                    (this.props.account && t === n) ||
                                        (s.a.setCurrentAccount.defer(t),
                                        f.a.getPossibleFees(
                                            e.account,
                                            "transfer"
                                        ));
                                }
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.myActiveAccounts,
                                    n = e.account_name,
                                    a = e.searchAccounts,
                                    s = e.settings,
                                    r = e.wallet_locked,
                                    i = e.account,
                                    u = e.hiddenAssets;
                                if (!i)
                                    return o.a.createElement(b.default, null);
                                var l = c.a.isMyAccount(i);
                                return o.a.createElement(
                                    "div",
                                    {className: "content"},
                                    o.a.cloneElement(
                                        o.a.Children.only(this.props.children),
                                        {
                                            account_name: n,
                                            myActiveAccounts: t,
                                            searchAccounts: a,
                                            settings: s,
                                            wallet_locked: r,
                                            account: i,
                                            isMyAccount: l,
                                            hiddenAssets: u,
                                            contained: !0,
                                            balances: i
                                                .get(
                                                    "balances",
                                                    Object(h.List)()
                                                )
                                                .toList(),
                                            orders: i
                                                .get("orders", Object(h.List)())
                                                .toList(),
                                            backedCoins: this.props.backedCoins,
                                            bridgeCoins: this.props.bridgeCoins,
                                            gatewayDown: this.props.gatewayDown,
                                            viewSettings: this.props
                                                .viewSettings,
                                            proxy: i.getIn([
                                                "options",
                                                "voting_account"
                                            ])
                                        }
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (y.propTypes = {account: l.a.ChainAccount.isRequired}),
                (y.defaultProps = {account: "props.params.account_name"}),
                (y = Object(p.a)(y, {show_loader: !0}));
            var A = (function(e) {
                function t() {
                    return (
                        _(this, t),
                        v(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    w(t, o.a.Component),
                    g(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.routeParams.account_name;
                                return o.a.createElement(
                                    y,
                                    m({}, this.props, {account_name: e})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = Object(d.connect)(A, {
                listenTo: function() {
                    return [c.a, r.a, i.a, u.a];
                },
                getProps: function() {
                    return {
                        myActiveAccounts: c.a.getState().myActiveAccounts,
                        searchAccounts: c.a.getState().searchAccounts,
                        settings: r.a.getState().settings,
                        hiddenAssets: r.a.getState().hiddenAssets,
                        wallet_locked: i.a.getState().locked,
                        viewSettings: r.a.getState().viewSettings,
                        backedCoins: u.a.getState().backedCoins,
                        bridgeCoins: u.a.getState().bridgeCoins,
                        gatewayDown: u.a.getState().down
                    };
                }
            });
        },
        715: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                s = n(11),
                c = n(15),
                r = (n(132), n(24), n(14)),
                i = n(8),
                u = n(10),
                l = (n(20), n(220)),
                p = n(254),
                d = n(75),
                f = (n(12), n(1), n(3)),
                h = n.n(f),
                b = (n(16), n(74)),
                m = (n(45), n(47)),
                g = n(9),
                _ = n.n(g),
                v = (n(108), n(42), n(21)),
                w = (n(28), n(90)),
                y = (n(359), n(4)),
                A = n(255),
                k = (n(7), n(2)),
                S = n.n(k),
                O = (n(58),
                (function() {
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
                })());
            var E = (function(e) {
                function t(e, n) {
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
                        ),
                        o = n.location.pathname,
                        s = a.props.currentAccount;
                    return (
                        (a.state = {active: o, showSubMenu: s}),
                        (a._toggleSubMenu = a._toggleSubMenu.bind(a)),
                        (a.unlisten = null),
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
                    })(t, o.a.Component),
                    O(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                var e = this;
                                this.unlisten = this.context.router.listen(
                                    function(t, n) {
                                        n ||
                                            (e.unlisten &&
                                                e.state.active !== t.pathname &&
                                                e.setState({
                                                    active: t.pathname
                                                }));
                                    }
                                );
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this.unlisten &&
                                    (this.unlisten(), (this.unlisten = null));
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    e.myActiveAccounts !==
                                        this.props.myActiveAccounts ||
                                    e.currentAccount !==
                                        this.props.currentAccount ||
                                    e.passwordLogin !==
                                        this.props.passwordLogin ||
                                    e.locked !== this.props.locked ||
                                    e.current_wallet !==
                                        this.props.current_wallet ||
                                    e.lastMarket !== this.props.lastMarket ||
                                    e.starredAccounts !==
                                        this.props.starredAccounts ||
                                    e.currentLocale !==
                                        this.props.currentLocale ||
                                    t.active !== this.state.active ||
                                    t.hiddenAssets !==
                                        this.props.hiddenAssets ||
                                    t.dropdownActive !==
                                        this.state.dropdownActive ||
                                    t.dropdownSubmenuActive !==
                                        this.state.dropdownSubmenuActive ||
                                    t.accountsListDropdownActive !==
                                        this.state.accountsListDropdownActive ||
                                    e.height !== this.props.height ||
                                    t.showSubMenu !== this.state.showSubMenu
                                );
                            }
                        },
                        {
                            key: "_onNavigate",
                            value: function(e, t) {
                                t.preventDefault(),
                                    "/accounts" == e &&
                                        u.a.changeViewSetting({
                                            dashboardEntry: "accounts"
                                        }),
                                    this.context.router.push(e);
                            }
                        },
                        {
                            key: "_toggleSubMenu",
                            value: function(e) {
                                e.preventDefault(),
                                    this.setState({
                                        showSubMenu: !this.state.showSubMenu
                                    });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.state.active,
                                    n = this.props,
                                    a = n.currentAccount,
                                    c = n.starredAccounts,
                                    i = n.passwordLogin,
                                    u = n.passwordAccount,
                                    d = r.a.getMyAccounts(),
                                    f = y.b.getAccount(a);
                                !!f && r.a.isMyAccount(f),
                                    this.props.contacts.has(a),
                                    v.Apis.instance() &&
                                        v.Apis.instance().chain_id;
                                if (c.size) {
                                    for (var b = d.length - 1; b >= 0; b--)
                                        c.has(d[b]) || d.splice(b, 1);
                                    c.forEach(function(e) {
                                        -1 === d.indexOf(e.name) &&
                                            d.push(e.name);
                                    });
                                }
                                r.a.getMyAccounts().length;
                                var m = function(e) {
                                    var t = e.title,
                                        n = e.link,
                                        a = e.subLink,
                                        c = e.noBorder,
                                        r = e.isActive;
                                    a = !!a;
                                    var i = t;
                                    "string" == typeof i &&
                                        i.indexOf(".") > 0 &&
                                        (i = h.a.translate(i));
                                    var u = a
                                            ? "sidebar__menu__sub__item"
                                            : "sidebar__menu__item",
                                        l = a
                                            ? "sidebar__menu__sub__link"
                                            : "sidebar__menu__link";
                                    return o.a.createElement(
                                        "li",
                                        {
                                            className: _()(
                                                u,
                                                {active: !!r},
                                                {noborder: !!c}
                                            )
                                        },
                                        o.a.createElement(
                                            s.b,
                                            {className: l, to: n},
                                            i
                                        )
                                    );
                                };
                                return a
                                    ? o.a.createElement(
                                          "div",
                                          {className: "sidebar"},
                                          o.a.createElement(
                                              "div",
                                              {className: "sidebar__qr"},
                                              o.a.createElement(w.a, {
                                                  size: {
                                                      height: 150,
                                                      width: 150
                                                  },
                                                  account: a
                                              })
                                          ),
                                          o.a.createElement(
                                              "p",
                                              {className: "sidebar__descr"},
                                              h.a.translate(
                                                  "account.deposit_address"
                                              )
                                          ),
                                          o.a.createElement(
                                              "span",
                                              {className: "sidebar__user"},
                                              o.a.createElement("b", null, a)
                                          ),
                                          o.a.createElement(
                                              "ul",
                                              {className: "sidebar__menu"},
                                              m({
                                                  title: "header.dashboard",
                                                  link: "/account/" + a,
                                                  isActive:
                                                      t === "/account/" + a
                                              }),
                                              m({
                                                  title: "account.member.stats",
                                                  link:
                                                      "/account/" +
                                                      a +
                                                      "/member-stats",
                                                  isActive:
                                                      -1 !==
                                                      t.indexOf(
                                                          "/account/" +
                                                              a +
                                                              "/member-stats"
                                                      )
                                              }),
                                              m({
                                                  title: "account.voting",
                                                  link:
                                                      "/account/" +
                                                      a +
                                                      "/voting",
                                                  isActive:
                                                      -1 !==
                                                      t.indexOf(
                                                          "/account/" +
                                                              a +
                                                              "/voting"
                                                      )
                                              }),
                                              null,
                                              o.a.createElement(
                                                  "li",
                                                  {
                                                      className: _()(
                                                          "sidebar__menu__item expand",
                                                          {
                                                              showsub: this
                                                                  .state
                                                                  .showSubMenu
                                                          }
                                                      )
                                                  },
                                                  o.a.createElement(
                                                      "a",
                                                      {
                                                          className:
                                                              "sidebar__menu__link",
                                                          href: "#",
                                                          onClick: this
                                                              ._toggleSubMenu
                                                      },
                                                      h.a.translate(
                                                          "account.advanced"
                                                      )
                                                  ),
                                                  o.a.createElement(
                                                      "ul",
                                                      {
                                                          className:
                                                              "sidebar__menu__sub"
                                                      },
                                                      m({
                                                          title:
                                                              "explorer.assets.title",
                                                          link:
                                                              "/account/" +
                                                              a +
                                                              "/assets",
                                                          isActive:
                                                              -1 !==
                                                              t.indexOf(
                                                                  "/account/" +
                                                                      a +
                                                                      "/assets"
                                                              ),
                                                          subLink: !0,
                                                          noBorder: !0
                                                      }),
                                                      m({
                                                          title:
                                                              "account.permissions",
                                                          link:
                                                              "/account/" +
                                                              a +
                                                              "/permissions",
                                                          isActive:
                                                              -1 !==
                                                              t.indexOf(
                                                                  "/account/" +
                                                                      a +
                                                                      "/permissions"
                                                              ),
                                                          subLink: !0
                                                      }),
                                                      m({
                                                          title:
                                                              "account.whitelist.title",
                                                          link:
                                                              "/account/" +
                                                              a +
                                                              "/whitelist",
                                                          isActive:
                                                              -1 !==
                                                              t.indexOf(
                                                                  "/account/" +
                                                                      a +
                                                                      "/whitelist"
                                                              ),
                                                          subLink: !0
                                                      }),
                                                      m({
                                                          title:
                                                              "account.vesting.title",
                                                          link:
                                                              "/account/" +
                                                              a +
                                                              "/vesting",
                                                          isActive:
                                                              -1 !==
                                                              t.indexOf(
                                                                  "/account/" +
                                                                      a +
                                                                      "/vesting"
                                                              ),
                                                          subLink: !0
                                                      }),
                                                      m({
                                                          title:
                                                              "account.signedmessages.menuitem",
                                                          link:
                                                              "/account/" +
                                                              a +
                                                              "/signedmessages",
                                                          isActive:
                                                              -1 !==
                                                              t.indexOf(
                                                                  "/account/" +
                                                                      a +
                                                                      "/signedmessages"
                                                              ),
                                                          subLink: !0
                                                      })
                                                  )
                                              )
                                          ),
                                          o.a.createElement(
                                              "button",
                                              {
                                                  className:
                                                      "btn large outline create-account",
                                                  type: "button",
                                                  onClick: this._onNavigate.bind(
                                                      this,
                                                      "/create-account/password"
                                                  )
                                              },
                                              h.a.translate(
                                                  "header.create_account"
                                              )
                                          ),
                                          o.a.createElement(l.a, {
                                              id: "send_modal_header",
                                              refCallback: function(t) {
                                                  t && (e.send_modal = t);
                                              },
                                              from_name: a
                                          }),
                                          o.a.createElement(p.a, {
                                              ref: "deposit_modal_new",
                                              modalId: "deposit_modal_new",
                                              account: a,
                                              backedCoins: this.props
                                                  .backedCoins
                                          }),
                                          o.a.createElement(A.a, {
                                              ref: "withdraw_modal_new",
                                              modalId: "withdraw_modal_new",
                                              backedCoins: this.props
                                                  .backedCoins
                                          })
                                      )
                                    : null;
                            }
                        }
                    ]),
                    t
                );
            })();
            (E.contextTypes = {
                location: S.a.object.isRequired,
                router: S.a.object.isRequired
            }),
                (t.default = Object(c.connect)(E, {
                    listenTo: function() {
                        return [r.a, b.a, m.a, i.a, d.a];
                    },
                    getProps: function() {
                        var e = v.Apis.instance().chain_id;
                        return {
                            backedCoins: d.a.getState().backedCoins,
                            myActiveAccounts: r.a.getState().myActiveAccounts,
                            currentAccount:
                                r.a.getState().currentAccount ||
                                r.a.getState().passwordAccount,
                            passwordAccount: r.a.getState().passwordAccount,
                            locked: b.a.getState().locked,
                            current_wallet: m.a.getState().current_wallet,
                            lastMarket: i.a
                                .getState()
                                .viewSettings.get(
                                    "lastMarket" +
                                        (e ? "_" + e.substr(0, 8) : "")
                                ),
                            starredAccounts: r.a.getState().starredAccounts,
                            passwordLogin: i.a
                                .getState()
                                .settings.get("passwordLogin"),
                            currentLocale: i.a
                                .getState()
                                .settings.get("locale"),
                            hiddenAssets: i.a.getState().hiddenAssets,
                            settings: i.a.getState().settings,
                            locales: i.a.getState().defaults.locale,
                            contacts: r.a.getState().accountContacts
                        };
                    }
                }));
        }
    }
]);
