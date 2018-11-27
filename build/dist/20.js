(window.webpackJsonp = window.webpackJsonp || []).push([
    [20],
    {
        4998: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(9),
                c = a.n(o),
                i = a(17),
                l = a(24),
                s = a(105),
                u = a(90),
                m = a(6),
                h = a(13),
                f = a(1),
                p = a.n(f),
                d = a(154),
                b = a.n(d),
                v = a(2),
                y = a.n(v),
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
            var E = (function(e) {
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
                    return (e.state = {hover: !1}), e;
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
                    _(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.account,
                                    n = t.image_size,
                                    o =
                                        a.get("lifetime_referrer_name") ===
                                        a.get("name"),
                                    c = r.a.createElement(
                                        "div",
                                        {className: "account-image"},
                                        r.a.createElement(b.a, {
                                            size: n.width,
                                            value: a.get("name")
                                        })
                                    ),
                                    i = this.state.hover
                                        ? !this.props.showQR
                                        : this.props.showQR;
                                return r.a.createElement(
                                    "div",
                                    {
                                        style: {maxWidth: n.width},
                                        className:
                                            "account-info" +
                                            (this.props.my_account
                                                ? " my-account"
                                                : "")
                                    },
                                    this.props.title
                                        ? r.a.createElement(
                                              "h4",
                                              null,
                                              this.props.title
                                          )
                                        : null,
                                    r.a.createElement(
                                        "div",
                                        {
                                            onMouseEnter: function() {
                                                e.setState({hover: !0});
                                            },
                                            onMouseLeave: function() {
                                                e.setState({hover: !1});
                                            },
                                            className: "clickable",
                                            onClick: function() {
                                                e.setState({hover: !1}),
                                                    e.props.toggleQR(
                                                        !e.props.showQR
                                                    );
                                            }
                                        },
                                        i
                                            ? c
                                            : r.a.createElement(u.a, {
                                                  size: n,
                                                  account: a.get("name"),
                                                  custom_image: null
                                              })
                                    ),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        r.a.createElement(p.a, {
                                            content: "account.deposit_address"
                                        }),
                                        "!"
                                    ),
                                    r.a.createElement(
                                        "p",
                                        {className: this.props.titleClass},
                                        r.a.createElement(
                                            "span",
                                            {className: o ? "lifetime" : ""},
                                            a.get("name")
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (E.propTypes = {
                account: m.a.ChainAccount.isRequired,
                title: y.a.string,
                image_size: y.a.object.isRequired,
                my_account: y.a.bool
            }),
                (E.defaultProps = {
                    title: null,
                    image_size: {height: 120, width: 120},
                    showQR: !1,
                    titleClass: "account-title"
                });
            var g = Object(h.a)(E),
                w = a(57),
                k = a(4),
                C = a(28),
                N = a(39),
                O = a(338),
                j = a(569),
                P = a.n(j),
                x = a(5),
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
            var S = (function(e) {
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
                    return (
                        (a.state = {
                            invoice: null,
                            pay_from_name: null,
                            pay_from_account: null,
                            error: null
                        }),
                        (a.onBroadcastAndConfirm = a.onBroadcastAndConfirm.bind(
                            a
                        )),
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
                    A(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this,
                                    t = P.a.decode(this.props.params.data);
                                try {
                                    Object(O.decompress)(t, function(t) {
                                        var a = JSON.parse(t);
                                        Object(k.g)(k.b.getAsset, [
                                            a.currency
                                        ]).then(function(t) {
                                            e.setState({
                                                invoice: a,
                                                asset: t[0]
                                            });
                                        });
                                    });
                                } catch (e) {
                                    console.dir(e),
                                        this.setState({error: e.message});
                                }
                            }
                        },
                        {
                            key: "parsePrice",
                            value: function(e) {
                                var t = e.match(/([\d\,\.\s]+)/);
                                return (
                                    !t || t.length,
                                    parseFloat(t[1].replace(/[\,\s]/g, ""))
                                );
                            }
                        },
                        {
                            key: "getTotal",
                            value: function(e) {
                                var t = this;
                                return e && 0 !== e.length
                                    ? e.reduce(function(e, a) {
                                          var n = t.parsePrice(a.price);
                                          return n ? e + a.quantity * n : e;
                                      }, 0)
                                    : 0;
                            }
                        },
                        {
                            key: "onBroadcastAndConfirm",
                            value: function(e) {
                                if (
                                    e.included &&
                                    e.broadcasted_transaction &&
                                    (N.a.unlisten(this.onBroadcastAndConfirm),
                                    N.a.reset(),
                                    this.state.invoice.callback)
                                ) {
                                    var t = e.broadcasted_transaction,
                                        a =
                                            this.state.invoice.callback +
                                            "?block=" +
                                            t.ref_block_num +
                                            "&trx=" +
                                            t.id();
                                    window.location.href = a;
                                }
                            }
                        },
                        {
                            key: "onPayClick",
                            value: function(e) {
                                var t = this;
                                e.preventDefault();
                                var a = this.state.asset,
                                    n = x.a.get_asset_precision(
                                        a.get("precision")
                                    ),
                                    r = this.getTotal(
                                        this.state.invoice.line_items
                                    ),
                                    o = k.b.getAccount(this.state.invoice.to);
                                o
                                    ? l.a
                                          .transfer(
                                              this.state.pay_from_account.get(
                                                  "id"
                                              ),
                                              o.get("id"),
                                              parseInt(r * n, 10),
                                              a.get("id"),
                                              this.state.invoice.memo
                                          )
                                          .then(function() {
                                              N.a.listen(
                                                  t.onBroadcastAndConfirm
                                              );
                                          })
                                          .catch(function(e) {
                                              console.log("error: ", e);
                                          })
                                    : C.a.error(
                                          "Account " +
                                              this.state.invoice.to +
                                              " not found"
                                      );
                            }
                        },
                        {
                            key: "fromChanged",
                            value: function(e) {
                                this.setState({pay_from_name: e});
                            }
                        },
                        {
                            key: "onFromAccountChanged",
                            value: function(e) {
                                this.setState({pay_from_account: e});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this;
                                if (
                                    (console.log(
                                        "-- Invoice.render --\x3e",
                                        this.state.invoice
                                    ),
                                    this.state.error)
                                )
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "h4",
                                            {
                                                className:
                                                    "has-error text-center"
                                            },
                                            this.state.error
                                        )
                                    );
                                if (!this.state.invoice) return null;
                                if (!this.state.asset)
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "h4",
                                            {
                                                className:
                                                    "has-error text-center"
                                            },
                                            "Asset ",
                                            this.state.invoice.currency,
                                            " is not supported by this blockchain."
                                        )
                                    );
                                var t = this.state.invoice,
                                    a = this.getTotal(t.line_items),
                                    n = this.state.invoice.currency,
                                    o = null;
                                if (this.state.pay_from_account) {
                                    var l = this.state.pay_from_account.get(
                                        "balances"
                                    );
                                    console.log(
                                        "-- Invoice.render balances --\x3e",
                                        l.get(this.state.asset.get("id"))
                                    ),
                                        (o = l.get(this.state.asset.get("id")));
                                }
                                var u = t.line_items.map(function(t) {
                                        var a = e.parsePrice(t.price),
                                            o = t.quantity * a;
                                        return r.a.createElement(
                                            "tr",
                                            null,
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(
                                                    "div",
                                                    {className: "item-name"},
                                                    t.label
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "item-description"
                                                    },
                                                    t.quantity,
                                                    " x",
                                                    " ",
                                                    r.a.createElement(i.a, {
                                                        amount: t.price,
                                                        asset: n,
                                                        exact_amount: !0
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "td",
                                                null,
                                                r.a.createElement(i.a, {
                                                    amount: o,
                                                    asset: n,
                                                    exact_amount: !0
                                                })
                                            )
                                        );
                                    }),
                                    m = c()("button", {
                                        disabled: !this.state.pay_from_account
                                    });
                                return r.a.createElement(
                                    "div",
                                    {className: "grid-block vertical"},
                                    r.a.createElement(
                                        "div",
                                        {className: "grid-content"},
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "content-block invoice"
                                            },
                                            r.a.createElement("br", null),
                                            r.a.createElement(
                                                "h3",
                                                null,
                                                "Pay Invoice"
                                            ),
                                            r.a.createElement(
                                                "h4",
                                                null,
                                                t.memo
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(g, {
                                                    title: t.to_label,
                                                    account: t.to,
                                                    image_size: {
                                                        height: 80,
                                                        width: 80
                                                    }
                                                }),
                                                r.a.createElement("br", null),
                                                r.a.createElement(
                                                    "table",
                                                    {className: "table"},
                                                    r.a.createElement(
                                                        "thead",
                                                        null,
                                                        r.a.createElement(
                                                            "tr",
                                                            null,
                                                            r.a.createElement(
                                                                "th",
                                                                null,
                                                                "Items"
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                null,
                                                                "Amount"
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        "tbody",
                                                        null,
                                                        u,
                                                        r.a.createElement(
                                                            "tr",
                                                            null,
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    className:
                                                                        "text-right"
                                                                },
                                                                "Total:"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        amount: a,
                                                                        asset: n,
                                                                        exact_amount: !0
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement("br", null),
                                                r.a.createElement("br", null),
                                                r.a.createElement(
                                                    "form",
                                                    null,
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "grid-block"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "grid-content medium-4"
                                                            },
                                                            r.a.createElement(
                                                                s.a,
                                                                {
                                                                    label:
                                                                        "transfer.pay_from",
                                                                    accountName: this
                                                                        .state
                                                                        .pay_from_name,
                                                                    onChange: this.fromChanged.bind(
                                                                        this
                                                                    ),
                                                                    onAccountChanged: this.onFromAccountChanged.bind(
                                                                        this
                                                                    ),
                                                                    account: this
                                                                        .state
                                                                        .pay_from_name
                                                                }
                                                            )
                                                        ),
                                                        this.state
                                                            .pay_from_account
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "grid-content medium-1"
                                                                  },
                                                                  r.a.createElement(
                                                                      "label",
                                                                      null,
                                                                      "Balance"
                                                                  ),
                                                                  r.a.createElement(
                                                                      w.a,
                                                                      {
                                                                          balance: o
                                                                      }
                                                                  )
                                                              )
                                                            : null
                                                    ),
                                                    r.a.createElement(
                                                        "br",
                                                        null
                                                    ),
                                                    r.a.createElement(
                                                        "a",
                                                        {
                                                            className: m,
                                                            onClick: this.onPayClick.bind(
                                                                this
                                                            )
                                                        },
                                                        "Pay",
                                                        " ",
                                                        r.a.createElement(i.a, {
                                                            amount: a,
                                                            asset: n,
                                                            exact_amount: !0
                                                        }),
                                                        " ",
                                                        "to ",
                                                        t.to
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
            })();
            t.default = S;
        },
        569: function(e, t, a) {
            e.exports = a(161);
        }
    }
]);
