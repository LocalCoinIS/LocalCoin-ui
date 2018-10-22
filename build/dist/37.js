(window.webpackJsonp = window.webpackJsonp || []).push([
    [37],
    {
        139: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return j;
            }),
                n.d(t, "a", function() {
                    return I;
                });
            var a = n(0),
                o = n.n(a),
                r = n(17),
                s = n(6),
                i = n(13),
                c = n(50),
                l = n(5),
                u = n(15),
                p = n(31),
                m = n(1),
                d = n.n(m),
                h = n(3),
                f = n.n(h),
                _ = n(47),
                v = n.n(_),
                g = n(271),
                b = n(42),
                y =
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
                E = (function() {
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
            function w(e, t) {
                var n = {};
                for (var a in e)
                    t.indexOf(a) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, a) &&
                            (n[a] = e[a]));
                return n;
            }
            function x(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function k(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function O(e, t) {
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
                function t(e) {
                    return (
                        x(this, t),
                        k(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    O(t, g["a"]),
                    E(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                v.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    (function e(t, n, a) {
                                        null === t && (t = Function.prototype);
                                        var o = Object.getOwnPropertyDescriptor(
                                            t,
                                            n
                                        );
                                        if (void 0 === o) {
                                            var r = Object.getPrototypeOf(t);
                                            return null === r
                                                ? void 0
                                                : e(r, n, a);
                                        }
                                        if ("value" in o) return o.value;
                                        var s = o.get;
                                        return void 0 !== s
                                            ? s.call(a)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    !l.a.are_equal_shallow(
                                        e.pulsate,
                                        this.props.pulsate
                                    ) ||
                                    e.toAsset !== this.props.toAsset ||
                                    e.fromAsset !== this.props.fromAsset ||
                                    e.amount !== this.props.amount
                                );
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    n = e.toAsset,
                                    a = e.fromAsset,
                                    o = e.fullPrecision,
                                    r = e.marketStats,
                                    s = e.coreAsset;
                                return b.a.convertValue(t, n, a, r, s, o);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.amount,
                                    n = e.toAsset,
                                    a = e.fromAsset,
                                    s = e.fullPrecision,
                                    i = w(e, [
                                        "amount",
                                        "toAsset",
                                        "fromAsset",
                                        "fullPrecision"
                                    ]),
                                    c = n.get("id"),
                                    u = n.get("symbol");
                                s || (t = l.a.get_asset_amount(t, a));
                                var p = this.getValue();
                                return p || 0 === p
                                    ? o.a.createElement(
                                          r.a,
                                          y(
                                              {
                                                  noPrefix: !0,
                                                  amount: p,
                                                  asset: c,
                                                  decimalOffset:
                                                      -1 !== u.indexOf("BTC")
                                                          ? 4
                                                          : this.props
                                                                .fullDecimals
                                                              ? 0
                                                              : this.props
                                                                    .noDecimals
                                                                  ? n.get(
                                                                        "precision"
                                                                    )
                                                                  : n.get(
                                                                        "precision"
                                                                    ) - 2
                                              },
                                              i
                                          )
                                      )
                                    : o.a.createElement(
                                          "div",
                                          {
                                              className: "tooltip inline-block",
                                              "data-place": "bottom",
                                              "data-tip": f.a.translate(
                                                  "tooltip.no_price"
                                              ),
                                              style: {fontSize: "0.9rem"}
                                          },
                                          o.a.createElement(d.a, {
                                              content: "account.no_price"
                                          })
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (A.defaultProps = {
                fullPrecision: !0,
                noDecimals: !1,
                fullDecimals: !1,
                hide_asset: !1
            }),
                (A = Object(c.a)(A, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var j = (function(e) {
                function t() {
                    return (
                        x(this, t),
                        k(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    O(t, o.a.Component),
                    E(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    n = w(e, ["refCallback"]);
                                return o.a.createElement(A, y({}, n, {ref: t}));
                            }
                        }
                    ]),
                    t
                );
            })();
            j = Object(u.connect)(j, {
                listenTo: function() {
                    return [p.a];
                },
                getProps: function() {
                    return {marketStats: p.a.getState().allMarketStats};
                }
            });
            var I = (function(e) {
                function t() {
                    return (
                        x(this, t),
                        k(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    O(t, o.a.Component),
                    E(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balance,
                                    n = w(e, ["balance"]),
                                    a = !!t.getIn(["balance", "amount"]),
                                    r = Number(
                                        a
                                            ? t.getIn(["balance", "amount"])
                                            : t.get("balance")
                                    ),
                                    s = a
                                        ? t.getIn(["balance", "asset_id"])
                                        : t.get("asset_type");
                                return isNaN(r)
                                    ? o.a.createElement("span", null, "--")
                                    : o.a.createElement(
                                          j,
                                          y(
                                              {
                                                  amount: r,
                                                  fromAsset: s,
                                                  noDecimals: !0
                                              },
                                              n
                                          )
                                      );
                            }
                        }
                    ]),
                    t
                );
            })();
            (I.propTypes = {balance: s.a.ChainObject.isRequired}),
                (I = Object(i.a)(I, {keep_updating: !0}));
        },
        4989: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                r = n(7),
                s = n.n(r),
                i = n(1),
                c = n.n(i),
                l = n(62),
                u = n(4),
                p = n(3),
                m = n.n(p),
                d = n(5),
                h = n(6),
                f = n(17),
                _ = n(40),
                v = n(13),
                g = n(139),
                b = n(12),
                y = n(2),
                E = n.n(y),
                w = (function() {
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
            var x = (function(e) {
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
                    })(t, o.a.Component),
                    w(t, [
                        {
                            key: "onApprove",
                            value: function() {
                                var e = [],
                                    t = [];
                                this.props.vote_ids.has(
                                    this.props.worker.get("vote_against")
                                ) &&
                                    t.push(
                                        this.props.worker.get("vote_against")
                                    ),
                                    this.props.vote_ids.has(
                                        this.props.worker.get("vote_for")
                                    ) ||
                                        e.push(
                                            this.props.worker.get("vote_for")
                                        ),
                                    this.props.onChangeVotes(e, t);
                            }
                        },
                        {
                            key: "onReject",
                            value: function() {
                                var e = [];
                                this.props.vote_ids.has(
                                    this.props.worker.get("vote_against")
                                ) &&
                                    e.push(
                                        this.props.worker.get("vote_against")
                                    ),
                                    this.props.vote_ids.has(
                                        this.props.worker.get("vote_for")
                                    ) &&
                                        e.push(
                                            this.props.worker.get("vote_for")
                                        ),
                                    this.props.onChangeVotes([], e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.rank,
                                    t = this.props.worker.toJS(),
                                    n =
                                        t.total_votes_for -
                                        t.total_votes_against,
                                    a =
                                        !!this.props.vote_ids.has(t.vote_for) ||
                                        (!this.props.vote_ids.has(
                                            t.vote_against
                                        ) &&
                                            null),
                                    r = 0;
                                t.daily_pay < this.props.rest
                                    ? (r = 100)
                                    : this.props.rest > 0 &&
                                      (r =
                                          (this.props.rest / t.daily_pay) *
                                          100);
                                var s = m.a.localize(
                                        new Date(t.work_begin_date + "Z"),
                                        {type: "date", format: "short_custom"}
                                    ),
                                    i = m.a.localize(
                                        new Date(t.work_end_date + "Z"),
                                        {type: "date", format: "short_custom"}
                                    ),
                                    c = new Date(),
                                    l = new Date(t.work_end_date + "Z") <= c,
                                    u = new Date(t.work_begin_date + "Z") <= c,
                                    p =
                                        (!l && n < this.props.voteThreshold) ||
                                        !u;
                                return o.a.createElement(
                                    "tr",
                                    {className: a ? "" : "unsupported"},
                                    l
                                        ? null
                                        : o.a.createElement(
                                              "td",
                                              {
                                                  style: {
                                                      textAlign: "right",
                                                      paddingRight: 10,
                                                      paddingLeft: 0
                                                  }
                                              },
                                              e
                                          ),
                                    o.a.createElement(
                                        "td",
                                        {
                                            className: "worker-id",
                                            style: {textAlign: "left"}
                                        },
                                        t.id
                                    ),
                                    o.a.createElement(
                                        "td",
                                        {
                                            className: "worker-name",
                                            style: {textAlign: "left"}
                                        },
                                        o.a.createElement(
                                            "div",
                                            {
                                                className: "inline-block",
                                                style: {
                                                    paddingRight: 5,
                                                    position: "relative",
                                                    top: -1
                                                }
                                            },
                                            o.a.createElement(
                                                "a",
                                                {
                                                    style: {
                                                        visibility:
                                                            t.url &&
                                                            -1 !==
                                                                t.url.indexOf(
                                                                    "."
                                                                )
                                                                ? "visible"
                                                                : "hidden"
                                                    },
                                                    href: t.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                },
                                                o.a.createElement(b.a, {
                                                    name: "share",
                                                    title: "icons.share"
                                                })
                                            )
                                        ),
                                        o.a.createElement(
                                            "div",
                                            {
                                                "data-tip": t.name,
                                                className:
                                                    "inline-block tooltip"
                                            },
                                            t.name,
                                            o.a.createElement("br", null),
                                            o.a.createElement(_.a, {
                                                account: t.worker_account
                                            })
                                        )
                                    ),
                                    o.a.createElement(
                                        "td",
                                        {
                                            style: {textAlign: "right"},
                                            className: "hide-column-small"
                                        },
                                        o.a.createElement(f.a, {
                                            amount: n,
                                            asset: "1.3.0",
                                            decimalOffset: 5,
                                            hide_asset: !0
                                        })
                                    ),
                                    p
                                        ? o.a.createElement(
                                              "td",
                                              {style: {textAlign: "right"}},
                                              o.a.createElement(f.a, {
                                                  amount: Math.max(
                                                      0,
                                                      this.props.voteThreshold -
                                                          n
                                                  ),
                                                  asset: "1.3.0",
                                                  hide_asset: !0,
                                                  decimalOffset: 5
                                              })
                                          )
                                        : null,
                                    o.a.createElement("td", null, s, " - ", i),
                                    l || p
                                        ? null
                                        : o.a.createElement(
                                              "td",
                                              {
                                                  style: {textAlign: "right"},
                                                  className: "hide-column-small"
                                              },
                                              d.a.format_number(r, 2),
                                              "%"
                                          ),
                                    o.a.createElement(
                                        "td",
                                        {
                                            style: {textAlign: "right"},
                                            className: "hide-column-small"
                                        },
                                        o.a.createElement(g.b, {
                                            hide_asset: !0,
                                            fromAsset: "1.3.0",
                                            toAsset: this.props.preferredUnit,
                                            amount: t.daily_pay
                                        })
                                    ),
                                    l || p
                                        ? null
                                        : o.a.createElement(
                                              "td",
                                              {style: {textAlign: "right"}},
                                              this.props.rest <= 0
                                                  ? "0.00"
                                                  : o.a.createElement(g.b, {
                                                        hide_asset: !0,
                                                        fromAsset: "1.3.0",
                                                        toAsset: this.props
                                                            .preferredUnit,
                                                        amount: this.props.rest
                                                    })
                                          ),
                                    o.a.createElement(
                                        "td",
                                        {
                                            className: "clickable",
                                            onClick: this.props.proxy
                                                ? function() {}
                                                : this[
                                                      a
                                                          ? "onReject"
                                                          : "onApprove"
                                                  ].bind(this)
                                        },
                                        this.props.proxy
                                            ? o.a.createElement(b.a, {
                                                  name: "locked",
                                                  title: "icons.locked.action"
                                              })
                                            : o.a.createElement(b.a, {
                                                  name: a
                                                      ? "checkmark-circle"
                                                      : "minus-circle",
                                                  title: a
                                                      ? "icons.checkmark_circle.approved"
                                                      : "icons.minus_circle.disapproved"
                                              })
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (x.propTypes = {
                worker: h.a.ChainObject.isRequired,
                onAddVote: E.a.func,
                onRemoveVote: E.a.func,
                vote_ids: E.a.object
            }),
                (x.defaultProps = {tempComponent: "tr"});
            var k = Object(v.a)(x),
                O = n(162),
                A = (function() {
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
            function j(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function I(e, t) {
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
            function N(e, t) {
                var n = "",
                    a = 0,
                    o = void 0;
                return (
                    "witness" === e
                        ? (o = u.b.getWitnessById(t.get("id")))
                        : "committee" === e &&
                          (o = u.b.getCommitteeMemberById(t.get("id"))),
                    {
                        url: (n = o ? o.get("url") : n),
                        votes: (a = o ? o.get("total_votes") : a),
                        id: o.get("id")
                    }
                );
            }
            var S = (function(e) {
                function t() {
                    return (
                        j(this, t),
                        I(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    C(t, o.a.Component),
                    A(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    e.account !== this.props.account ||
                                    e.action !== this.props.action ||
                                    e.isActive !== this.props.isActive ||
                                    e.idx !== this.props.idx ||
                                    e.proxy !== this.props.proxy
                                );
                            }
                        },
                        {
                            key: "onAction",
                            value: function(e) {
                                this.props.onAction(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.account,
                                    n = e.type,
                                    a = e.action,
                                    r = e.isActive,
                                    s = t.get("id"),
                                    i = N(n, t),
                                    l = i.url,
                                    u = i.votes,
                                    p =
                                        l &&
                                        l.length > 0 &&
                                        -1 === l.indexOf("http")
                                            ? "http://" + l
                                            : l,
                                    m = "remove" === a;
                                return o.a.createElement(
                                    "tr",
                                    {className: m ? "" : "unsupported"},
                                    o.a.createElement(
                                        "td",
                                        {style: {textAlign: "right"}},
                                        this.props.idx + 1
                                    ),
                                    o.a.createElement(
                                        "td",
                                        {style: {textAlign: "left"}},
                                        o.a.createElement(_.a, {
                                            account: t.get("id")
                                        })
                                    ),
                                    o.a.createElement(
                                        "td",
                                        null,
                                        p && -1 !== p.indexOf(".")
                                            ? o.a.createElement(
                                                  "a",
                                                  {
                                                      href: p,
                                                      target: "_blank",
                                                      rel: "noopener noreferrer"
                                                  },
                                                  o.a.createElement(b.a, {
                                                      name: "share",
                                                      title: "icons.share"
                                                  })
                                              )
                                            : null
                                    ),
                                    o.a.createElement(
                                        "td",
                                        null,
                                        o.a.createElement(f.a, {
                                            amount: u,
                                            asset: "1.3.0",
                                            decimalOffset: 5,
                                            hide_asset: !0
                                        })
                                    ),
                                    o.a.createElement(
                                        "td",
                                        null,
                                        o.a.createElement(c.a, {
                                            content:
                                                "account.votes." +
                                                (r
                                                    ? "active_short"
                                                    : "inactive")
                                        })
                                    ),
                                    o.a.createElement(
                                        "td",
                                        {style: {textAlign: "center"}},
                                        o.a.createElement(c.a, {
                                            content:
                                                "settings." + (m ? "yes" : "no")
                                        })
                                    ),
                                    o.a.createElement(
                                        "td",
                                        {
                                            className: this.props.proxy
                                                ? ""
                                                : "clickable",
                                            onClick: this.props.proxy
                                                ? function() {}
                                                : this.onAction.bind(this, s)
                                        },
                                        this.props.proxy
                                            ? o.a.createElement(b.a, {
                                                  name: "locked",
                                                  title: "icons.locked.action"
                                              })
                                            : o.a.createElement(b.a, {
                                                  name: m
                                                      ? "checkmark-circle"
                                                      : "minus-circle",
                                                  title: m
                                                      ? "icons.checkmark_circle.yes"
                                                      : "icons.minus_circle.no"
                                              })
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            S.propTypes = {
                account: E.a.object.isRequired,
                onAction: E.a.func.isRequired
            };
            var P = (function(e) {
                function t(e) {
                    j(this, t);
                    var n = I(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (n.state = {
                            selected_item: null,
                            item_name_input: "",
                            error: null
                        }),
                        (n.onItemChange = n.onItemChange.bind(n)),
                        (n.onItemAccountChange = n.onItemAccountChange.bind(n)),
                        (n.onAddItem = n.onAddItem.bind(n)),
                        n
                    );
                }
                return (
                    C(t, o.a.Component),
                    A(t, [
                        {
                            key: "onItemChange",
                            value: function(e) {
                                this.setState({item_name_input: e});
                            }
                        },
                        {
                            key: "onItemAccountChange",
                            value: function(e) {
                                var t = this;
                                if (
                                    (this.setState({
                                        selected_item: e,
                                        error: null
                                    }),
                                    e && this.props.validateAccount)
                                ) {
                                    var n = this.props.validateAccount(e);
                                    if (null === n) return;
                                    "string" == typeof n
                                        ? this.setState({error: n})
                                        : n.then(function(e) {
                                              return t.setState({error: e});
                                          });
                                }
                            }
                        },
                        {
                            key: "onAddItem",
                            value: function(e) {
                                if (e) {
                                    this.setState({
                                        selected_item: null,
                                        item_name_input: "",
                                        error: null
                                    }),
                                        this.props.onAddItem(e.get("id"));
                                }
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this;
                                if (!this.props.items) return null;
                                var t = this.props.items
                                        .filter(function(e) {
                                            return !!e;
                                        })
                                        .sort(function(t, n) {
                                            var a = N(e.props.type, t).votes,
                                                o = N(e.props.type, n).votes;
                                            return a !== o
                                                ? parseInt(o, 10) -
                                                      parseInt(a, 10)
                                                : t.get("name") > n.get("name")
                                                    ? 1
                                                    : t.get("name") <
                                                      n.get("name")
                                                        ? -1
                                                        : 0;
                                        })
                                        .map(function(t, n) {
                                            var a =
                                                    e.props.supported &&
                                                    e.props.supported.includes(
                                                        t.get("id")
                                                    )
                                                        ? "remove"
                                                        : "add",
                                                r = e.props.active.includes(
                                                    N(e.props.type, t).id
                                                );
                                            return o.a.createElement(S, {
                                                idx: n,
                                                key: t.get("name"),
                                                account: t,
                                                type: e.props.type,
                                                onAction:
                                                    "add" === a
                                                        ? e.props.onAddItem
                                                        : e.props.onRemoveItem,
                                                isSelected:
                                                    -1 !==
                                                    e.props.items.indexOf(t),
                                                action: a,
                                                isActive: r,
                                                proxy: e.props.proxy
                                            });
                                        }),
                                    n = this.state.error;
                                !n &&
                                    this.state.selected_item &&
                                    -1 !==
                                        this.props.items.indexOf(
                                            this.state.selected_item
                                        ) &&
                                    (n = m.a.translate(
                                        "account.votes.already"
                                    ));
                                var a = ["10%", "20%", "40%", "20%", "10%"];
                                return o.a.createElement(
                                    "div",
                                    null,
                                    this.props.withSelector
                                        ? o.a.createElement(
                                              "div",
                                              {className: "header-selector"},
                                              o.a.createElement(O.a, {
                                                  style: {maxWidth: "600px"},
                                                  label: this.props.label,
                                                  error: n,
                                                  placeholder: this.props
                                                      .placeholder,
                                                  account: this.state
                                                      .item_name_input,
                                                  accountName: this.state
                                                      .item_name_input,
                                                  onChange: this.onItemChange,
                                                  onAccountChanged: this
                                                      .onItemAccountChange,
                                                  onAction: this.onAddItem,
                                                  action_label:
                                                      "account.votes.add_witness",
                                                  tabIndex: this.props.tabIndex
                                              })
                                          )
                                        : null,
                                    this.props.title && t.length
                                        ? o.a.createElement(
                                              "h4",
                                              null,
                                              this.props.title
                                          )
                                        : null,
                                    t.length
                                        ? o.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "dashboard__adaptive"
                                              },
                                              o.a.createElement(
                                                  "table",
                                                  {
                                                      className:
                                                          "dashboard__table"
                                                  },
                                                  o.a.createElement(
                                                      "thead",
                                                      null,
                                                      o.a.createElement(
                                                          "tr",
                                                          null,
                                                          o.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      textAlign:
                                                                          "right"
                                                                  }
                                                              },
                                                              "#"
                                                          ),
                                                          o.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      textAlign:
                                                                          "left",
                                                                      maxWidth:
                                                                          a[1]
                                                                  }
                                                              },
                                                              o.a.createElement(
                                                                  c.a,
                                                                  {
                                                                      content:
                                                                          "account.votes.name"
                                                                  }
                                                              )
                                                          ),
                                                          o.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          a[2]
                                                                  }
                                                              },
                                                              o.a.createElement(
                                                                  c.a,
                                                                  {
                                                                      content:
                                                                          "account.votes.about"
                                                                  }
                                                              )
                                                          ),
                                                          o.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          a[3]
                                                                  }
                                                              },
                                                              o.a.createElement(
                                                                  c.a,
                                                                  {
                                                                      content:
                                                                          "account.votes.votes"
                                                                  }
                                                              )
                                                          ),
                                                          o.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          a[4]
                                                                  }
                                                              },
                                                              o.a.createElement(
                                                                  c.a,
                                                                  {
                                                                      content:
                                                                          "account.votes.status.title"
                                                                  }
                                                              )
                                                          ),
                                                          o.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          a[0]
                                                                  }
                                                              },
                                                              o.a.createElement(
                                                                  c.a,
                                                                  {
                                                                      content:
                                                                          "account.votes.supported"
                                                                  }
                                                              )
                                                          ),
                                                          o.a.createElement(
                                                              "th",
                                                              {
                                                                  style: {
                                                                      maxWidth:
                                                                          a[5]
                                                                  }
                                                              },
                                                              o.a.createElement(
                                                                  c.a,
                                                                  {
                                                                      content:
                                                                          "account.votes.toggle"
                                                                  }
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  o.a.createElement(
                                                      "tbody",
                                                      null,
                                                      t
                                                  )
                                              )
                                          )
                                        : null
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (P.propTypes = {
                items: h.a.ChainObjectsList,
                onAddItem: E.a.func.isRequired,
                onRemoveItem: E.a.func.isRequired,
                validateAccount: E.a.func,
                label: E.a.string.isRequired,
                placeholder: E.a.string,
                tabIndex: E.a.number,
                action: E.a.string,
                withSelector: E.a.bool
            }),
                (P.defaultProps = {
                    action: "remove",
                    withSelector: !0,
                    autosubscribe: !1
                });
            var T = Object(v.a)(P),
                R = n(9),
                B = n.n(R),
                V = n(104),
                D = n(11),
                W = n(118),
                q = n(22),
                L = n(8),
                M =
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
                z = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var n = [],
                                    a = !0,
                                    o = !1,
                                    r = void 0;
                                try {
                                    for (
                                        var s, i = e[Symbol.iterator]();
                                        !(a = (s = i.next()).done) &&
                                        (n.push(s.value), !t || n.length !== t);
                                        a = !0
                                    );
                                } catch (e) {
                                    (o = !0), (r = e);
                                } finally {
                                    try {
                                        !a && i.return && i.return();
                                    } finally {
                                        if (o) throw r;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                Z = (function() {
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
            var F = (function(e) {
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
                        ),
                        a = e.proxy.get("id"),
                        o = e.proxy.get("name");
                    return (
                        (n.state = {
                            proxy_account_id: "1.2.5" === a ? "" : a,
                            prev_proxy_account_id: "1.2.5" === a ? "" : a,
                            current_proxy_input: "1.2.5" === a ? "" : o,
                            witnesses: null,
                            committee: null,
                            vote_ids: s.a.Set(),
                            proxy_vote_ids: s.a.Set(),
                            lastBudgetObject: e.initialBudget.get("id"),
                            workerTableIndex: e.viewSettings.get(
                                "workerTableIndex",
                                1
                            ),
                            all_witnesses: s.a.List(),
                            all_committee: s.a.List()
                        }),
                        (n.onProxyAccountFound = n.onProxyAccountFound.bind(n)),
                        (n.onPublish = n.onPublish.bind(n)),
                        (n.onReset = n.onReset.bind(n)),
                        (n._getVoteObjects = n._getVoteObjects.bind(n)),
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
                    Z(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                l.a.getFinalFeeAsset(
                                    this.props.account,
                                    "account_update"
                                ),
                                    u.b.fetchAllWorkers(),
                                    this.getBudgetObject();
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.updateAccountData(this.props),
                                    this._getVoteObjects(),
                                    this._getVoteObjects("committee");
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                if (e.account !== this.props.account) {
                                    var t = e.proxy.get("id"),
                                        n = {
                                            proxy_account_id:
                                                "1.2.5" === t ? "" : t
                                        };
                                    this.setState({
                                        prev_proxy_account_id:
                                            n.proxy_account_id
                                    }),
                                        this.updateAccountData(e, n);
                                }
                                this.getBudgetObject();
                            }
                        },
                        {
                            key: "updateAccountData",
                            value: function(e) {
                                var t = this,
                                    n = e.account,
                                    a = (arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : this.state
                                    ).proxy_account_id,
                                    o = u.b.getAccount(a),
                                    r = n.get("options"),
                                    i = o ? o.get("options") : null,
                                    c = o ? o.get("name") : "";
                                "1.2.5" === a && ((a = ""), (c = ""));
                                var l = r.get("votes").toArray(),
                                    p = s.a.Set(l);
                                u.b.getObjectsByVoteIds(l);
                                var m = null,
                                    d = s.a.Set([]);
                                if ("1.2.5" !== a && i) {
                                    var h = i.get("votes").toArray();
                                    (d = s.a.Set(h)),
                                        u.b.getObjectsByVoteIds(h),
                                        (m = Object(u.g)(
                                            u.b.getObjectByVoteID,
                                            h,
                                            1e4
                                        ));
                                }
                                Promise.all([
                                    Object(u.g)(u.b.getObjectByVoteID, l, 1e4),
                                    m
                                ]).then(function(e) {
                                    var n = z(e, 2),
                                        o = n[0],
                                        r = n[1];
                                    function i(e) {
                                        var t = new s.a.List(),
                                            n = new s.a.List(),
                                            a = new s.a.Set();
                                        return (
                                            e.forEach(function(e) {
                                                var a = e.get(
                                                    "committee_member_account"
                                                );
                                                a
                                                    ? (n = n.push(a))
                                                    : (a = e.get(
                                                          "worker_account"
                                                      )) ||
                                                      ((a = e.get(
                                                          "witness_account"
                                                      )) &&
                                                          (t = t.push(a)));
                                            }),
                                            {
                                                witnesses: t,
                                                committee: n,
                                                workers: a
                                            }
                                        );
                                    }
                                    var l = i(o),
                                        u = l.witnesses,
                                        m = l.committee,
                                        h = l.workers,
                                        f = i(r || []),
                                        _ = f.witnesses,
                                        v = f.committee,
                                        g = f.workers,
                                        b = {
                                            proxy_account_id: a,
                                            current_proxy_input: c,
                                            witnesses: u,
                                            committee: m,
                                            workers: h,
                                            proxy_witnesses: _,
                                            proxy_committee: v,
                                            proxy_workers: g,
                                            vote_ids: p,
                                            proxy_vote_ids: d,
                                            prev_witnesses: u,
                                            prev_committee: m,
                                            prev_workers: h,
                                            prev_vote_ids: p
                                        };
                                    t.setState(b);
                                });
                            }
                        },
                        {
                            key: "isChanged",
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.state;
                                return (
                                    e.proxy_account_id !==
                                        e.prev_proxy_account_id ||
                                    e.witnesses !== e.prev_witnesses ||
                                    e.committee !== e.prev_committee ||
                                    !s.a.is(e.vote_ids, e.prev_vote_ids)
                                );
                            }
                        },
                        {
                            key: "_getVoteObjects",
                            value: function() {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : "witnesses",
                                    n = arguments[1],
                                    a = this.state["all_" + t],
                                    o = "witnesses" === t,
                                    r = void 0;
                                if (n)
                                    r = parseInt(
                                        n[n.length - 1].split(".")[2],
                                        10
                                    );
                                else {
                                    n = [];
                                    var i =
                                        this.props.globalObject
                                            .get(
                                                o
                                                    ? "active_witnesses"
                                                    : "active_committee_members"
                                            )
                                            .sort(function(e, t) {
                                                return (
                                                    parseInt(
                                                        e.split(".")[2],
                                                        10
                                                    ) -
                                                    parseInt(
                                                        t.split(".")[2],
                                                        10
                                                    )
                                                );
                                            })
                                            .last() ||
                                        "1." + (o ? "6" : "5") + ".1";
                                    r = parseInt(i.split(".")[2], 10);
                                    for (var c = 1; c <= r + 10; c++)
                                        n.push(
                                            "1." + (o ? "6" : "5") + "." + c
                                        );
                                }
                                Object(u.g)(u.b.getObject, n, 5e3, {}).then(
                                    function(i) {
                                        if (
                                            ((e.state["all_" + t] = a.concat(
                                                s.a.List(
                                                    i
                                                        .filter(function(e) {
                                                            return !!e;
                                                        })
                                                        .map(function(e) {
                                                            return e.get(
                                                                o
                                                                    ? "witness_account"
                                                                    : "committee_member_account"
                                                            );
                                                        })
                                                )
                                            )),
                                            i[i.length - 1])
                                        ) {
                                            n = [];
                                            for (
                                                var c = r + 11;
                                                c <= r + 20;
                                                c++
                                            )
                                                n.push(
                                                    "1." +
                                                        (o ? "6" : "5") +
                                                        "." +
                                                        c
                                                );
                                            return e._getVoteObjects(t, n);
                                        }
                                        e.forceUpdate();
                                    }
                                );
                            }
                        },
                        {
                            key: "onPublish",
                            value: function() {
                                var e = this,
                                    t = this.props.account.toJS(),
                                    n = {account: t.id},
                                    a = {memo_key: t.options.memo_key},
                                    o = this.state.proxy_account_id;
                                (a.voting_account = o || "1.2.5"),
                                    (a.num_witness = this.state.witnesses.size),
                                    (a.num_committee = this.state.committee.size),
                                    (n.new_options = a),
                                    (n.fee = {
                                        amount: 0,
                                        asset_id: l.a.getFinalFeeAsset(
                                            t.id,
                                            "account_update"
                                        )
                                    });
                                var r = this.state.vote_ids,
                                    s = this._getWorkerArray(),
                                    i = new Date();
                                function c(e, t) {
                                    return (
                                        e.includes(t) && (e = e.delete(t)), e
                                    );
                                }
                                s.forEach(function(e) {
                                    e &&
                                        (new Date(e.get("work_end_date")) <=
                                            i && (r = c(r, e.get("vote_for"))),
                                        (r = c(r, e.get("vote_against"))));
                                }),
                                    Object(u.g)(
                                        u.b.getWitnessById,
                                        this.state.witnesses.toArray(),
                                        4e3
                                    )
                                        .then(function(t) {
                                            var n = t.map(function(e) {
                                                return e.get("vote_id");
                                            });
                                            return Promise.all([
                                                Promise.resolve(n),
                                                Object(u.g)(
                                                    u.b.getCommitteeMemberById,
                                                    e.state.committee.toArray(),
                                                    4e3
                                                )
                                            ]);
                                        })
                                        .then(function(e) {
                                            (n.new_options.votes = e[0]
                                                .concat(
                                                    e[1].map(function(e) {
                                                        return e.get("vote_id");
                                                    })
                                                )
                                                .concat(
                                                    r
                                                        .filter(function(e) {
                                                            return (
                                                                "2" ===
                                                                e.split(":")[0]
                                                            );
                                                        })
                                                        .toArray()
                                                )
                                                .sort(function(e, t) {
                                                    var n = e.split(":"),
                                                        a = t.split(":");
                                                    return (
                                                        parseInt(n[1], 10) -
                                                        parseInt(a[1], 10)
                                                    );
                                                })),
                                                W.a.updateAccount(n);
                                        });
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                var e = this,
                                    t = this.state;
                                this.refs.voting_proxy &&
                                    this.refs.voting_proxy.refs
                                        .bound_component &&
                                    this.refs.voting_proxy.refs.bound_component.onResetProxy(),
                                    this.setState(
                                        {
                                            proxy_account_id:
                                                t.prev_proxy_account_id,
                                            current_proxy_input:
                                                t.prev_proxy_input,
                                            witnesses: t.prev_witnesses,
                                            committee: t.prev_committee,
                                            workers: t.prev_workers,
                                            vote_ids: t.prev_vote_ids
                                        },
                                        function() {
                                            e.updateAccountData(e.props);
                                        }
                                    );
                            }
                        },
                        {
                            key: "onAddItem",
                            value: function(e, t) {
                                var n = {};
                                (n[e] = this.state[e].push(t)),
                                    this.setState(n);
                            }
                        },
                        {
                            key: "onRemoveItem",
                            value: function(e, t) {
                                var n = {};
                                (n[e] = this.state[e].filter(function(e) {
                                    return e !== t;
                                })),
                                    this.setState(n);
                            }
                        },
                        {
                            key: "onChangeVotes",
                            value: function(e, t) {
                                var n = {};
                                (n.vote_ids = this.state.vote_ids),
                                    e.length &&
                                        e.forEach(function(e) {
                                            n.vote_ids = n.vote_ids.add(e);
                                        }),
                                    t &&
                                        t.forEach(function(e) {
                                            n.vote_ids = n.vote_ids.delete(e);
                                        }),
                                    this.setState(n);
                            }
                        },
                        {
                            key: "validateAccount",
                            value: function(e, t) {
                                return t
                                    ? "witnesses" === e
                                        ? Object(u.g)(
                                              u.b.getWitnessById,
                                              [t.get("id")],
                                              3e3
                                          ).then(function(e) {
                                              return e[0]
                                                  ? null
                                                  : "Not a witness";
                                          })
                                        : "committee" === e
                                            ? Object(u.g)(
                                                  u.b.getCommitteeMemberById,
                                                  [t.get("id")],
                                                  3e3
                                              ).then(function(e) {
                                                  return e[0]
                                                      ? null
                                                      : "Not a committee member";
                                              })
                                            : null
                                    : null;
                            }
                        },
                        {
                            key: "onProxyChange",
                            value: function(e) {
                                var t = u.b.getAccount(e);
                                (!t ||
                                    (t &&
                                        t.get("id") !==
                                            this.state.proxy_account_id)) &&
                                    this.setState({
                                        proxy_account_id: "",
                                        proxy_witnesses: s.a.Set(),
                                        proxy_committee: s.a.Set(),
                                        proxy_workers: s.a.Set()
                                    }),
                                    this.setState({current_proxy_input: e});
                            }
                        },
                        {
                            key: "onProxyAccountFound",
                            value: function(e) {
                                var t = this;
                                this.setState(
                                    {proxy_account_id: e ? e.get("id") : ""},
                                    function() {
                                        t.updateAccountData(t.props);
                                    }
                                );
                            }
                        },
                        {
                            key: "onClearProxy",
                            value: function() {
                                this.setState({proxy_account_id: ""});
                            }
                        },
                        {
                            key: "_getTotalVotes",
                            value: function(e) {
                                return (
                                    parseInt(e.get("total_votes_for"), 10) -
                                    parseInt(e.get("total_votes_against"), 10)
                                );
                            }
                        },
                        {
                            key: "getBudgetObject",
                            value: function() {
                                var e = this,
                                    t = this.state.lastBudgetObject,
                                    n = void 0;
                                n = u.b.getObject(t);
                                var a = parseInt(t.split(".")[2], 10);
                                if (n) {
                                    var o = n.get("time");
                                    /Z$/.test(o) || (o += "Z");
                                    var r = new Date(),
                                        s =
                                            a +
                                            Math.floor(
                                                (r - new Date(o).getTime()) /
                                                    1e3 /
                                                    60 /
                                                    60
                                            ) -
                                            1;
                                    if (a >= s) return;
                                    var i = "2.13." + Math.max(a, s),
                                        c = parseInt(i.split(".")[2], 10);
                                    Object(u.g)(
                                        u.b.getObject,
                                        [i],
                                        void 0,
                                        {}
                                    ).then(function(t) {
                                        null === z(t, 1)[0]
                                            ? e.setState(
                                                  {
                                                      lastBudgetObject:
                                                          "2.13." + (c - 1)
                                                  },
                                                  e.getBudgetObject
                                              )
                                            : (L.a.setLastBudgetObject(i),
                                              e.setState({
                                                  lastBudgetObject: i
                                              }));
                                    });
                                } else {
                                    var l = "2.13." + (a - 1);
                                    Object(u.g)(
                                        u.b.getObject,
                                        [l],
                                        void 0,
                                        {}
                                    ).then(function(t) {
                                        null === z(t, 1)[0]
                                            ? e.setState(
                                                  {
                                                      lastBudgetObject:
                                                          "2.13." + (a - 2)
                                                  },
                                                  e.getBudgetObject
                                              )
                                            : (L.a.setLastBudgetObject(l),
                                              e.setState({
                                                  lastBudgetObject: l
                                              }));
                                    });
                                }
                            }
                        },
                        {
                            key: "_getWorkerArray",
                            value: function() {
                                var e = [];
                                return (
                                    u.b.workers.forEach(function(t) {
                                        var n = u.b.getObject(t, !1, !1);
                                        n && e.push(n);
                                    }),
                                    e
                                );
                            }
                        },
                        {
                            key: "_setWorkerTableIndex",
                            value: function(e) {
                                this.setState({workerTableIndex: e});
                            }
                        },
                        {
                            key: "_renderRadioButton",
                            value: function(e, t) {
                                var n =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                return o.a.createElement(
                                    "label",
                                    {className: "radio"},
                                    o.a.createElement("input", {
                                        className: "radio__input",
                                        type: "radio",
                                        name: "dashboard-filters",
                                        onChange: t,
                                        checked: n
                                    }),
                                    o.a.createElement("span", {
                                        className: "radio__styled"
                                    }),
                                    o.a.createElement(
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
                                    t = this.state.workerTableIndex,
                                    n =
                                        this.props.settings.get("unit") ||
                                        "1.3.0",
                                    a = !!this.state.proxy_account_id,
                                    r = B()("btn large inverted", {
                                        disabled: !this.isChanged()
                                    }),
                                    s = this.props.globalObject,
                                    i = void 0;
                                this.state.lastBudgetObject &&
                                    (i = u.b.getObject(
                                        this.state.lastBudgetObject
                                    ));
                                var l = 0,
                                    p = s
                                        ? parseInt(
                                              s.getIn([
                                                  "parameters",
                                                  "worker_budget_per_day"
                                              ]),
                                              10
                                          )
                                        : 0;
                                i &&
                                    ((p = Math.min(
                                        24 *
                                            i.getIn([
                                                "record",
                                                "worker_budget"
                                            ]),
                                        p
                                    )),
                                    (l = Math.min(
                                        24 *
                                            i.getIn([
                                                "record",
                                                "worker_budget"
                                            ]),
                                        p
                                    )));
                                var d = new Date(),
                                    h = this._getWorkerArray(),
                                    _ = 0,
                                    v = h
                                        .filter(function(e) {
                                            return (
                                                !!e &&
                                                (new Date(
                                                    e.get("work_end_date") + "Z"
                                                ) > d &&
                                                    new Date(
                                                        e.get(
                                                            "work_begin_date"
                                                        ) + "Z"
                                                    ) <= d)
                                            );
                                        })
                                        .sort(function(t, n) {
                                            return (
                                                e._getTotalVotes(n) -
                                                e._getTotalVotes(t)
                                            );
                                        })
                                        .map(function(t, r) {
                                            var s = parseInt(
                                                t.get("daily_pay"),
                                                10
                                            );
                                            p -= s;
                                            var i =
                                                t.get("total_votes_for") -
                                                t.get("total_votes_against");
                                            return (
                                                p <= 0 && !_ && (_ = i),
                                                _ && i < _
                                                    ? null
                                                    : o.a.createElement(k, {
                                                          preferredUnit: n,
                                                          rest: p + s,
                                                          rank: r + 1,
                                                          key: t.get("id"),
                                                          worker: t.get("id"),
                                                          vote_ids:
                                                              e.state[
                                                                  a
                                                                      ? "proxy_vote_ids"
                                                                      : "vote_ids"
                                                              ],
                                                          onChangeVotes: e.onChangeVotes.bind(
                                                              e
                                                          ),
                                                          proxy: a,
                                                          voteThreshold: _
                                                      })
                                            );
                                        })
                                        .filter(function(e) {
                                            return !!e;
                                        }),
                                    y = h
                                        .filter(function(e) {
                                            if (!e) return !1;
                                            var t =
                                                e.get("total_votes_for") -
                                                e.get("total_votes_against");
                                            return (
                                                (new Date(
                                                    e.get("work_end_date") + "Z"
                                                ) > d &&
                                                    t < _) ||
                                                new Date(
                                                    e.get("work_begin_date") +
                                                        "Z"
                                                ) > d
                                            );
                                        })
                                        .sort(function(t, n) {
                                            return (
                                                e._getTotalVotes(n) -
                                                e._getTotalVotes(t)
                                            );
                                        })
                                        .map(function(t, r) {
                                            return o.a.createElement(k, {
                                                preferredUnit: n,
                                                rest: 0,
                                                rank: r + 1,
                                                key: t.get("id"),
                                                worker: t.get("id"),
                                                vote_ids:
                                                    e.state[
                                                        a
                                                            ? "proxy_vote_ids"
                                                            : "vote_ids"
                                                    ],
                                                onChangeVotes: e.onChangeVotes.bind(
                                                    e
                                                ),
                                                proxy: a,
                                                voteThreshold: _
                                            });
                                        }),
                                    E = h
                                        .filter(function(e) {
                                            return (
                                                !!e &&
                                                new Date(
                                                    e.get("work_end_date")
                                                ) <= d
                                            );
                                        })
                                        .sort(function(t, n) {
                                            return (
                                                e._getTotalVotes(n) -
                                                e._getTotalVotes(t)
                                            );
                                        })
                                        .map(function(t, r) {
                                            return o.a.createElement(k, {
                                                preferredUnit: n,
                                                rest: 0,
                                                rank: r + 1,
                                                key: t.get("id"),
                                                worker: t.get("id"),
                                                vote_ids:
                                                    e.state[
                                                        a
                                                            ? "proxy_vote_ids"
                                                            : "vote_ids"
                                                    ],
                                                onChangeVotes: e.onChangeVotes.bind(
                                                    e
                                                ),
                                                proxy: a,
                                                voteThreshold: _
                                            });
                                        }),
                                    w = o.a.createElement(
                                        "span",
                                        {style: {float: "right"}},
                                        o.a.createElement(
                                            "button",
                                            {
                                                className: B()(r, {
                                                    success: this.isChanged()
                                                }),
                                                onClick: this.onPublish,
                                                tabIndex: 4,
                                                disabled: !this.isChanged()
                                            },
                                            o.a.createElement(c.a, {
                                                content: "account.votes.publish"
                                            })
                                        ),
                                        o.a.createElement(
                                            "button",
                                            {
                                                className: r,
                                                onClick: this.onReset,
                                                tabIndex: 8,
                                                disabled: !this.isChanged()
                                            },
                                            o.a.createElement(c.a, {
                                                content: "account.perm.reset"
                                            })
                                        )
                                    ),
                                    x = o.a.createElement(
                                        "div",
                                        {
                                            style: {
                                                width: "50%",
                                                maxWidth: 350
                                            },
                                            "data-tip":
                                                "Search for an account to be used as your proxy for voting",
                                            "data-place": "right"
                                        },
                                        o.a.createElement(
                                            O.a,
                                            {
                                                hideImage: !0,
                                                account: this.state
                                                    .current_proxy_input,
                                                accountName: this.state
                                                    .current_proxy_input,
                                                onChange: this.onProxyChange.bind(
                                                    this
                                                ),
                                                onAccountChanged: this
                                                    .onProxyAccountFound,
                                                typeahead: !0,
                                                tabIndex: 1,
                                                placeholder: "Proxy not set"
                                            },
                                            o.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        paddingLeft: 5,
                                                        position: "relative",
                                                        top: -1,
                                                        display: a ? "" : "none"
                                                    }
                                                },
                                                o.a.createElement(b.a, {
                                                    name: "locked",
                                                    title:
                                                        "icons.locked.action",
                                                    size: "1x"
                                                })
                                            ),
                                            o.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        paddingLeft: 5,
                                                        position: "relative",
                                                        top: 9,
                                                        display: a ? "none" : ""
                                                    }
                                                },
                                                o.a.createElement(
                                                    D.b,
                                                    {to: "/help/voting"},
                                                    o.a.createElement(b.a, {
                                                        name: "question-circle",
                                                        title:
                                                            "icons.question_circle",
                                                        size: "1x"
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    A = (o.a.createElement(
                                        "div",
                                        {
                                            className: "inline-block",
                                            style: {
                                                float: "right",
                                                visibility: this.isChanged()
                                                    ? "visible"
                                                    : "hidden",
                                                color: "red",
                                                padding: "0.85rem",
                                                fontSize: "0.9rem"
                                            }
                                        },
                                        o.a.createElement(c.a, {
                                            content: "account.votes.save_finish"
                                        })
                                    ),
                                    [
                                        {
                                            title: "explorer.witnesses.title",
                                            content: o.a.createElement(
                                                "div",
                                                null,
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "dashboard__actions"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "container-fluid"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {className: "row"},
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-9 col-lg-12"
                                                                },
                                                                x
                                                            ),
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-3 col-lg-6"
                                                                },
                                                                w
                                                            )
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(T, {
                                                    type: "witness",
                                                    label:
                                                        "account.votes.add_witness_label",
                                                    items: this.state
                                                        .all_witnesses,
                                                    validateAccount: this.validateAccount.bind(
                                                        this,
                                                        "witnesses"
                                                    ),
                                                    onAddItem: this.onAddItem.bind(
                                                        this,
                                                        "witnesses"
                                                    ),
                                                    onRemoveItem: this.onRemoveItem.bind(
                                                        this,
                                                        "witnesses"
                                                    ),
                                                    tabIndex: a ? -1 : 2,
                                                    supported: this.state[
                                                        a
                                                            ? "proxy_witnesses"
                                                            : "witnesses"
                                                    ],
                                                    withSelector: !1,
                                                    active: s.get(
                                                        "active_witnesses"
                                                    ),
                                                    proxy: this.state
                                                        .proxy_account_id
                                                })
                                            )
                                        },
                                        {
                                            title:
                                                "explorer.committee_members.title",
                                            content: o.a.createElement(
                                                "div",
                                                null,
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "dashboard__actions"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "container-fluid"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {className: "row"},
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-9 col-lg-12"
                                                                },
                                                                x
                                                            ),
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-3 col-lg-6"
                                                                },
                                                                w
                                                            )
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(T, {
                                                    type: "committee",
                                                    label:
                                                        "account.votes.add_committee_label",
                                                    items: this.state
                                                        .all_committee,
                                                    validateAccount: this.validateAccount.bind(
                                                        this,
                                                        "committee"
                                                    ),
                                                    onAddItem: this.onAddItem.bind(
                                                        this,
                                                        "committee"
                                                    ),
                                                    onRemoveItem: this.onRemoveItem.bind(
                                                        this,
                                                        "committee"
                                                    ),
                                                    tabIndex: a ? -1 : 3,
                                                    supported: this.state[
                                                        a
                                                            ? "proxy_committee"
                                                            : "committee"
                                                    ],
                                                    withSelector: !1,
                                                    active: s.get(
                                                        "active_committee_members"
                                                    ),
                                                    proxy: this.state
                                                        .proxy_account_id
                                                })
                                            )
                                        },
                                        {
                                            title:
                                                "account.votes.workers_short",
                                            content: o.a.createElement(
                                                "div",
                                                null,
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "container-fluid"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {className: "row"},
                                                        o.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "col-xs-12"
                                                            },
                                                            w
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "dashboard__actions"
                                                    },
                                                    o.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "container-fluid"
                                                        },
                                                        o.a.createElement(
                                                            "div",
                                                            {className: "row"},
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-3 col-lg-6"
                                                                },
                                                                x
                                                            ),
                                                            o.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-9 col-lg-12"
                                                                },
                                                                o.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "dashboard__actions__filters"
                                                                    },
                                                                    this._renderRadioButton(
                                                                        m.a.translate(
                                                                            "account.votes.new",
                                                                            {
                                                                                count:
                                                                                    y.length
                                                                            }
                                                                        ),
                                                                        this._setWorkerTableIndex.bind(
                                                                            this,
                                                                            0
                                                                        ),
                                                                        !(
                                                                            0 !==
                                                                            t
                                                                        )
                                                                    ),
                                                                    this._renderRadioButton(
                                                                        m.a.translate(
                                                                            "account.votes.active",
                                                                            {
                                                                                count:
                                                                                    v.length
                                                                            }
                                                                        ),
                                                                        this._setWorkerTableIndex.bind(
                                                                            this,
                                                                            1
                                                                        ),
                                                                        !(
                                                                            1 !==
                                                                            t
                                                                        )
                                                                    )
                                                                ),
                                                                o.a.createElement(
                                                                    "button",
                                                                    {
                                                                        className:
                                                                            "btn large inverted"
                                                                    },
                                                                    o.a.createElement(
                                                                        D.b,
                                                                        {
                                                                            to:
                                                                                "/create-worker"
                                                                        },
                                                                        o.a.createElement(
                                                                            c.a,
                                                                            {
                                                                                content:
                                                                                    "account.votes.create_worker"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "dashboard__adaptive"
                                                    },
                                                    o.a.createElement(
                                                        "table",
                                                        null,
                                                        2 === t
                                                            ? null
                                                            : 0 === t
                                                                ? o.a.createElement(
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
                                                                              {
                                                                                  colSpan:
                                                                                      "3",
                                                                                  style: {
                                                                                      textAlign:
                                                                                          "left"
                                                                                  }
                                                                              },
                                                                              o.a.createElement(
                                                                                  c.a,
                                                                                  {
                                                                                      content:
                                                                                          "account.votes.threshold"
                                                                                  }
                                                                              )
                                                                          ),
                                                                          o.a.createElement(
                                                                              "th",
                                                                              {
                                                                                  style: {
                                                                                      textAlign:
                                                                                          "right"
                                                                                  }
                                                                              },
                                                                              o.a.createElement(
                                                                                  f.a,
                                                                                  {
                                                                                      decimalOffset: 5,
                                                                                      hide_asset: !0,
                                                                                      amount: _,
                                                                                      asset:
                                                                                          "1.3.0"
                                                                                  }
                                                                              )
                                                                          ),
                                                                          o.a.createElement(
                                                                              "th",
                                                                              {
                                                                                  colSpan:
                                                                                      "3"
                                                                              }
                                                                          )
                                                                      ),
                                                                      o.a.createElement(
                                                                          "tr",
                                                                          null,
                                                                          o.a.createElement(
                                                                              "th",
                                                                              {
                                                                                  style: {
                                                                                      border:
                                                                                          "none",
                                                                                      backgroundColor:
                                                                                          "transparent"
                                                                                  }
                                                                              }
                                                                          )
                                                                      )
                                                                  )
                                                                : o.a.createElement(
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
                                                                              {
                                                                                  colSpan:
                                                                                      "4",
                                                                                  style: {
                                                                                      textAlign:
                                                                                          "left"
                                                                                  }
                                                                              },
                                                                              o.a.createElement(
                                                                                  c.a,
                                                                                  {
                                                                                      content:
                                                                                          "account.votes.total_budget"
                                                                                  }
                                                                              ),
                                                                              " ",
                                                                              "(",
                                                                              o.a.createElement(
                                                                                  q.a,
                                                                                  {
                                                                                      name: n
                                                                                  }
                                                                              ),
                                                                              ")"
                                                                          ),
                                                                          o.a.createElement(
                                                                              "th",
                                                                              {
                                                                                  colSpan:
                                                                                      "2",
                                                                                  className:
                                                                                      "hide-column-small"
                                                                              }
                                                                          ),
                                                                          o.a.createElement(
                                                                              "th",
                                                                              {
                                                                                  style: {
                                                                                      textAlign:
                                                                                          "right"
                                                                                  }
                                                                              },
                                                                              s
                                                                                  ? o.a.createElement(
                                                                                        g.b,
                                                                                        {
                                                                                            hide_asset: !0,
                                                                                            fromAsset:
                                                                                                "1.3.0",
                                                                                            toAsset: n,
                                                                                            amount: l
                                                                                        }
                                                                                    )
                                                                                  : null
                                                                          ),
                                                                          o.a.createElement(
                                                                              "th",
                                                                              {
                                                                                  className:
                                                                                      "hide-column-small"
                                                                              }
                                                                          )
                                                                      ),
                                                                      o.a.createElement(
                                                                          "tr",
                                                                          null,
                                                                          o.a.createElement(
                                                                              "th",
                                                                              {
                                                                                  style: {
                                                                                      border:
                                                                                          "none",
                                                                                      backgroundColor:
                                                                                          "transparent"
                                                                                  }
                                                                              }
                                                                          )
                                                                      )
                                                                  ),
                                                        o.a.createElement(
                                                            "thead",
                                                            null,
                                                            o.a.createElement(
                                                                "tr",
                                                                null,
                                                                2 === t
                                                                    ? null
                                                                    : o.a.createElement(
                                                                          "th",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          o.a.createElement(
                                                                              c.a,
                                                                              {
                                                                                  content:
                                                                                      "account.votes.line"
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
                                                                        c.a,
                                                                        {
                                                                            content:
                                                                                "account.user_issued_assets.id"
                                                                        }
                                                                    )
                                                                ),
                                                                o.a.createElement(
                                                                    "th",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "left"
                                                                        }
                                                                    },
                                                                    o.a.createElement(
                                                                        c.a,
                                                                        {
                                                                            content:
                                                                                "account.user_issued_assets.description"
                                                                        }
                                                                    )
                                                                ),
                                                                o.a.createElement(
                                                                    "th",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "right"
                                                                        },
                                                                        className:
                                                                            "hide-column-small"
                                                                    },
                                                                    o.a.createElement(
                                                                        c.a,
                                                                        {
                                                                            content:
                                                                                "account.votes.total_votes"
                                                                        }
                                                                    )
                                                                ),
                                                                0 === t
                                                                    ? o.a.createElement(
                                                                          "th",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          o.a.createElement(
                                                                              c.a,
                                                                              {
                                                                                  content:
                                                                                      "account.votes.missing"
                                                                              }
                                                                          )
                                                                      )
                                                                    : null,
                                                                o.a.createElement(
                                                                    "th",
                                                                    null,
                                                                    o.a.createElement(
                                                                        c.a,
                                                                        {
                                                                            content:
                                                                                "explorer.workers.period"
                                                                        }
                                                                    )
                                                                ),
                                                                2 === t ||
                                                                0 === t
                                                                    ? null
                                                                    : o.a.createElement(
                                                                          "th",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              },
                                                                              className:
                                                                                  "hide-column-small"
                                                                          },
                                                                          o.a.createElement(
                                                                              c.a,
                                                                              {
                                                                                  content:
                                                                                      "account.votes.funding"
                                                                              }
                                                                          )
                                                                      ),
                                                                o.a.createElement(
                                                                    "th",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "right"
                                                                        },
                                                                        className:
                                                                            "hide-column-small"
                                                                    },
                                                                    o.a.createElement(
                                                                        c.a,
                                                                        {
                                                                            content:
                                                                                "account.votes.daily_pay"
                                                                        }
                                                                    ),
                                                                    o.a.createElement(
                                                                        "div",
                                                                        {
                                                                            style: {
                                                                                paddingTop: 5,
                                                                                fontSize:
                                                                                    "0.8rem"
                                                                            }
                                                                        },
                                                                        "(",
                                                                        o.a.createElement(
                                                                            q.a,
                                                                            {
                                                                                name: n
                                                                            }
                                                                        ),
                                                                        ")"
                                                                    )
                                                                ),
                                                                2 === t ||
                                                                0 === t
                                                                    ? null
                                                                    : o.a.createElement(
                                                                          "th",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          o.a.createElement(
                                                                              c.a,
                                                                              {
                                                                                  content:
                                                                                      "explorer.witnesses.budget"
                                                                              }
                                                                          ),
                                                                          o.a.createElement(
                                                                              "div",
                                                                              {
                                                                                  style: {
                                                                                      paddingTop: 5,
                                                                                      fontSize:
                                                                                          "0.8rem"
                                                                                  }
                                                                              },
                                                                              "(",
                                                                              o.a.createElement(
                                                                                  q.a,
                                                                                  {
                                                                                      name: n
                                                                                  }
                                                                              ),
                                                                              ")"
                                                                          )
                                                                      ),
                                                                o.a.createElement(
                                                                    "th",
                                                                    null,
                                                                    o.a.createElement(
                                                                        c.a,
                                                                        {
                                                                            content:
                                                                                "account.votes.toggle"
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        o.a.createElement(
                                                            "tbody",
                                                            null,
                                                            0 === t
                                                                ? y
                                                                : 1 === t
                                                                    ? v
                                                                    : E
                                                        )
                                                    )
                                                )
                                            )
                                        }
                                    ]);
                                return o.a.createElement(
                                    "div",
                                    {className: "voting-container"},
                                    o.a.createElement(V.a, {
                                        items: A,
                                        inner: !0,
                                        hashByConten: !0,
                                        dashboardTabsClass:
                                            "dashboard__tabs permissions small"
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (F.propTypes = {
                initialBudget: h.a.ChainObject.isRequired,
                globalObject: h.a.ChainObject.isRequired,
                proxy: h.a.ChainAccount.isRequired
            }),
                (F.defaultProps = {globalObject: "2.0.0"}),
                (F = Object(v.a)(F));
            t.default = function(e) {
                return o.a.createElement(
                    F,
                    M({}, e, {initialBudget: L.a.getLastBudgetObject()})
                );
            };
        }
    }
]);
