(window.webpackJsonp = window.webpackJsonp || []).push([
    [11],
    {
        4990: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(288),
                a = n(0),
                c = n.n(a),
                o = n(15),
                i = n(7),
                u = n.n(i),
                s = n(9),
                l = n.n(s),
                f = n(27),
                p = (function() {
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
            var y = (function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                    }
                    return (
                        p(e, [
                            {
                                key: "setBrainkey",
                                value: function(e) {
                                    return e;
                                }
                            }
                        ]),
                        e
                    );
                })(),
                h = f.a.createActions(y),
                b = n(4),
                d = n(89),
                v = (function() {
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
            function _(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            var m = (function() {
                function e() {
                    _(this, e);
                }
                return (
                    v(e, null, [
                        {
                            key: "getInstance",
                            value: function(t) {
                                var n = e.instances.get(t);
                                n ||
                                    ((n = f.a.createStore(g, "BrainkeyStore")),
                                    e.instances.set(t, n));
                                var r = t + " subscribed_instance";
                                if (!e.instances.get(r)) {
                                    var a = n.chainStoreUpdate.bind(n);
                                    b.b.subscribe(a), e.instances.set(r, a);
                                }
                                return n;
                            }
                        },
                        {
                            key: "closeInstance",
                            value: function(t) {
                                var n = e.instances.get(t);
                                if (!n)
                                    throw new Error("unknown instance " + t);
                                var r = t + " subscribed_instance",
                                    a = e.instances.get(r);
                                e.instances.delete(r),
                                    b.b.unsubscribe(a),
                                    n.clearCache();
                            }
                        }
                    ]),
                    e
                );
            })();
            m.instances = new Map();
            var k = m,
                g = (function(e) {
                    function t() {
                        _(this, t);
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
                            e.clearCache(),
                            e.bindListeners({onSetBrainkey: h.setBrainkey}),
                            e._export(
                                "inSync",
                                "chainStoreUpdate",
                                "clearCache"
                            ),
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
                        })(t, d["a"]),
                        v(t, [
                            {
                                key: "clearCache",
                                value: function() {
                                    (this.state = {
                                        brnkey: "",
                                        account_ids: u.a.Set()
                                    }),
                                        (this.derived_keys = new Array()),
                                        (this.account_ids_by_key = null);
                                }
                            },
                            {
                                key: "onSetBrainkey",
                                value: function(e) {
                                    this.clearCache(),
                                        this.setState({brnkey: e}),
                                        this.deriveKeys(e),
                                        this.chainStoreUpdate();
                                }
                            },
                            {
                                key: "inSync",
                                value: function() {
                                    return (
                                        this.derived_keys.forEach(function(e) {
                                            if (w(e)) return !1;
                                        }),
                                        !0
                                    );
                                }
                            },
                            {
                                key: "chainStoreUpdate",
                                value: function() {
                                    this.derived_keys.length &&
                                        this.account_ids_by_key !==
                                            b.b.account_ids_by_key &&
                                        ((this.account_ids_by_key =
                                            b.b.account_ids_by_key),
                                        this.updateAccountIds());
                                }
                            },
                            {
                                key: "deriveKeys",
                                value: function() {
                                    var e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : this.state.brnkey,
                                        t = this.derived_keys.length,
                                        n = (function(e) {
                                            var t = e
                                                .toPublicKey()
                                                .toPublicKeyString();
                                            return {
                                                private_key: e,
                                                public_string: t
                                            };
                                        })(b.o.get_brainPrivateKey(e, t));
                                    this.derived_keys.push(n),
                                        this.derived_keys.length < 10 &&
                                            this.deriveKeys(e);
                                }
                            },
                            {
                                key: "updateAccountIds",
                                value: function() {
                                    var e = this,
                                        t = u.a
                                            .Set()
                                            .withMutations(function(t) {
                                                e.derived_keys.forEach(function(
                                                    e
                                                ) {
                                                    return (
                                                        (n = e.public_string),
                                                        void (
                                                            (r = b.b.getAccountRefsOfKey(
                                                                n
                                                            )) &&
                                                            r.forEach(function(
                                                                e
                                                            ) {
                                                                t.add(e);
                                                            })
                                                        )
                                                    );
                                                    var n, r;
                                                });
                                            });
                                    t.equals(this.state.account_ids) ||
                                        ((this.state.account_ids = t),
                                        this.setState({account_ids: t}));
                                }
                            }
                        ]),
                        t
                    );
                })();
            var w = function(e) {
                    return void 0 === b.b.getAccountRefsOfKey(e.public_string);
                },
                E = n(13),
                O = n(6),
                j = n(392),
                C = n(1),
                S = n.n(C),
                P = n(57),
                A = n(90),
                T = n(14),
                B = n(2),
                N = n.n(B),
                x = (function() {
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
                    })(t, c.a.Component),
                    x(t, [
                        {
                            key: "onCardClick",
                            value: function(e) {
                                e.preventDefault();
                                var t = this.props.account.get("name");
                                this.context.router.push(
                                    "/account/" + t + "/overview/"
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = null,
                                    t = null,
                                    n = !1;
                                if (this.props.account) {
                                    e = this.props.account.get("name");
                                    var r = this.props.account.get("balances");
                                    r &&
                                        (t = r
                                            .map(function(e) {
                                                return b.b
                                                    .getObject(e)
                                                    .get("balance")
                                                    ? c.a.createElement(
                                                          "li",
                                                          {key: e},
                                                          c.a.createElement(
                                                              P.a,
                                                              {balance: e}
                                                          )
                                                      )
                                                    : null;
                                            })
                                            .toArray()),
                                        (n = T.a.isMyAccount(
                                            this.props.account
                                        ));
                                }
                                return c.a.createElement(
                                    "div",
                                    {
                                        className: "grid-content account-card",
                                        onClick: this.onCardClick.bind(this)
                                    },
                                    c.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "card" +
                                                (n ? " my-account" : "")
                                        },
                                        c.a.createElement(
                                            "h4",
                                            {className: "text-center"},
                                            e
                                        ),
                                        c.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "card-content clearfix"
                                            },
                                            c.a.createElement(
                                                "div",
                                                {className: "float-left"},
                                                c.a.createElement(A.a, {
                                                    account: e,
                                                    size: {
                                                        height: 64,
                                                        width: 64
                                                    }
                                                })
                                            ),
                                            c.a.createElement(
                                                "ul",
                                                {className: "balances"},
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
            })();
            (I.contextTypes = {router: N.a.object.isRequired}),
                (I.propTypes = {account: O.a.ChainAccount.isRequired});
            var K = Object(E.a)(I);
            n.d(t, "BrainkeyInputAccept", function() {
                return W;
            });
            var R = (function() {
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
            function U(e, t) {
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
            function L(e, t) {
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
            var M = {
                    listenTo: function() {
                        return [k.getInstance("wmc")];
                    },
                    getProps: function() {
                        return k.getInstance("wmc").getState();
                    }
                },
                z = (function(e) {
                    function t() {
                        return (
                            U(this, t),
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
                        L(t, a["Component"]),
                        R(t, [
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    k.closeInstance("wmc");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return c.a.createElement(
                                        "span",
                                        null,
                                        c.a.createElement(
                                            "h3",
                                            null,
                                            c.a.createElement(S.a, {
                                                content: "wallet.brainkey"
                                            })
                                        ),
                                        c.a.createElement(
                                            W,
                                            null,
                                            c.a.createElement(J, null)
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            z = Object(o.connect)(z, M);
            t.default = z;
            var J = (function(e) {
                function t() {
                    return (
                        U(this, t),
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
                    L(t, a["Component"]),
                    R(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.brnkey.substring(0, 10);
                                return c.a.createElement(
                                    "span",
                                    null,
                                    c.a.createElement(
                                        "div",
                                        null,
                                        c.a.createElement(
                                            "span",
                                            {className: ""},
                                            e
                                        ),
                                        "…"
                                    ),
                                    c.a.createElement("p", null),
                                    this.props.account_ids.size
                                        ? c.a.createElement(D, {
                                              accounts: u.a.List(
                                                  this.props.account_ids.toArray()
                                              )
                                          })
                                        : c.a.createElement(
                                              "h5",
                                              null,
                                              c.a.createElement(S.a, {
                                                  content: "wallet.no_accounts"
                                              })
                                          )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            J = Object(o.connect)(J, M);
            var D = (function() {
                function e() {
                    U(this, e);
                }
                return (
                    R(e, [
                        {
                            key: "render",
                            value: function() {
                                var e = Object(r.a)(this.props.accounts)
                                    .filter(function(e) {
                                        return !!e[1];
                                    })
                                    .map(function(e) {
                                        return e[1].get("name");
                                    })
                                    .sort()
                                    .map(function(e) {
                                        return c.a.createElement(K, {
                                            key: e,
                                            account: e
                                        });
                                    });
                                return c.a.createElement("span", null, e);
                            }
                        }
                    ]),
                    e
                );
            })();
            (D.propTypes = {accounts: O.a.ChainAccountsList.isRequired}),
                (D = Object(E.a)(D));
            var W = (function(e) {
                function t() {
                    U(this, t);
                    var e = q(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {brnkey: "", accept: !1}), e;
                }
                return (
                    L(t, a["Component"]),
                    R(t, [
                        {
                            key: "render",
                            value: function() {
                                if (this.state.accept)
                                    return c.a.createElement(
                                        "span",
                                        null,
                                        this.props.children
                                    );
                                var e =
                                    this.state.brnkey &&
                                    "" !== this.state.brnkey;
                                return c.a.createElement(
                                    "span",
                                    {className: "grid-container"},
                                    c.a.createElement(
                                        "div",
                                        null,
                                        c.a.createElement(j.a, {
                                            onChange: this.onBrainkeyChange.bind(
                                                this
                                            )
                                        })
                                    ),
                                    c.a.createElement(
                                        "div",
                                        {
                                            className: l()("button success", {
                                                disabled: !e
                                            }),
                                            onClick: this.onAccept.bind(this)
                                        },
                                        c.a.createElement(S.a, {
                                            content: "wallet.accept"
                                        })
                                    )
                                );
                            }
                        },
                        {
                            key: "onBrainkeyChange",
                            value: function(e) {
                                this.setState({brnkey: e});
                            }
                        },
                        {
                            key: "onAccept",
                            value: function() {
                                this.setState({accept: !0}),
                                    h.setBrainkey(this.state.brnkey);
                            }
                        }
                    ]),
                    t
                );
            })();
        }
    }
]);
