(window.webpackJsonp = window.webpackJsonp || []).push([
    [30],
    {
        357: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(1),
                i = a.n(o),
                s = a(5),
                l = a(57),
                c = a(3),
                u = a.n(c),
                p = a(44),
                d = a(77),
                h = a(4),
                m = (function() {
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
            var f = (function(e) {
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
                    return (a.state = {amount: 0, showError: !1}), a;
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
                    m(t, [
                        {
                            key: "onAmountChanged",
                            value: function(e) {
                                var t = e.amount,
                                    a = e.asset;
                                this.setState({amount: t, asset: a});
                            }
                        },
                        {
                            key: "getBalance",
                            value: function() {
                                var e = this,
                                    t = this.props.account.get("balances"),
                                    a = 0;
                                return (
                                    t &&
                                        t.forEach(function(t, n) {
                                            if (n == e.props.assetId) {
                                                var r = h.b.getObject(t);
                                                a = r.get("balance");
                                            }
                                        }),
                                    a
                                );
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function() {
                                var e = s.a.get_asset_precision(
                                        this.state.asset.get("precision")
                                    ),
                                    t = this.state.amount.replace(/,/g, "");
                                t *= e;
                                var a = this.getBalance();
                                t <= 0 || t > a
                                    ? this.setState({showError: !0})
                                    : (this.setState({showError: !1}),
                                      d.a.reserveAsset(
                                          t,
                                          this.props.assetId,
                                          this.props.account.get("id")
                                      ),
                                      this.props.onClose());
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props.assetId;
                                return r.a.createElement(
                                    "form",
                                    {
                                        className:
                                            "grid-block vertical full-width-content"
                                    },
                                    r.a.createElement(i.a, {
                                        component: "h3",
                                        content: "modal.reserve.title"
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-container ",
                                            style: {paddingTop: "2rem"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "content-block",
                                                onClick: function() {
                                                    e.setState({showError: !1});
                                                }
                                            },
                                            r.a.createElement(p.a, {
                                                label: "modal.reserve.amount",
                                                amount: this.state.amount,
                                                onChange: this.onAmountChanged.bind(
                                                    this
                                                ),
                                                asset: t,
                                                assets: [t],
                                                display_balance: r.a.createElement(
                                                    l.a,
                                                    {
                                                        balance: this.props.account.getIn(
                                                            ["balances", t]
                                                        )
                                                    }
                                                ),
                                                tabIndex: 1
                                            })
                                        ),
                                        this.state.showError
                                            ? r.a.createElement(
                                                  "p",
                                                  {className: "errorModal"},
                                                  u.a.translate(
                                                      "exchange.invalid_amount"
                                                  )
                                              )
                                            : null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "content-block button-group"
                                            },
                                            r.a.createElement("input", {
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
                                            r.a.createElement(
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
            t.a = f;
        },
        446: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return L;
            });
            var n = a(0),
                r = a.n(n),
                o = a(1),
                i = a.n(o),
                s = a(121),
                l = a(146),
                c = a(6),
                u = a(13),
                p = a(5),
                d = a(4),
                h = a(111),
                m = a(54),
                f = a.n(m),
                b = a(3),
                g = a.n(b),
                v = a(12),
                y = a(9),
                _ = a.n(y),
                E = a(2),
                w = a.n(E),
                k = a(58),
                x = a(43),
                O = a.n(x),
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
            function C(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function N(e, t) {
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
            var j = d.c.operations,
                P = {textAlign: "left"},
                I = {textAlign: "right"};
            function T(e, t) {
                return t.block_num === e.block_num
                    ? t.virtual_op - e.virtual_op
                    : t.block_num - e.block_num;
            }
            function M(e) {
                return e
                    ? '"' + e.textContent.replace(/[\s\t\r\n]/gi, " ") + '"'
                    : "";
            }
            var L = (function(e) {
                function t(e) {
                    C(this, t);
                    var a = N(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (
                        (a.state = {
                            limit: e.limit || 20,
                            csvExport: !1,
                            headerHeight: 85,
                            openFilter: !1,
                            filter: "all"
                        }),
                        (a._updateTooltip = a._updateTooltip.bind(a)),
                        (a._downloadCSV = a._downloadCSV.bind(a)),
                        (a._findActiveFilter = a._findActiveFilter.bind(a)),
                        (a._renderFilters = a._renderFilters.bind(a)),
                        a
                    );
                }
                return (
                    S(t, r.a.Component),
                    A(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                if (
                                    (this._updateTooltip(),
                                    !this.props.fullHeight)
                                ) {
                                    var e = this.refs.transactions;
                                    f.a.initialize(e), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_setHeaderHeight",
                            value: function() {
                                var e = this.refs.header.offsetHeight;
                                e !== this.state.headerHeight &&
                                    this.setState({headerHeight: e});
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                if (
                                    !p.a.are_equal_shallow(
                                        this.props.accountsList,
                                        e.accountsList
                                    )
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (this.state.headerHeight !== t.headerHeight)
                                    return !0;
                                if (this.state.openFilter !== t.openFilter)
                                    return !0;
                                if (this.state.filter !== t.filter) return !0;
                                if (
                                    this.props.customFilter &&
                                    (!p.a.are_equal_shallow(
                                        this.props.customFilter.fields,
                                        e.customFilter.fields
                                    ) ||
                                        !p.a.are_equal_shallow(
                                            this.props.customFilter.values,
                                            e.customFilter.values
                                        ))
                                )
                                    return !0;
                                if (this.props.maxHeight !== e.maxHeight)
                                    return !0;
                                if (
                                    t.limit !== this.state.limit ||
                                    t.csvExport !== this.state.csvExport
                                )
                                    return !0;
                                for (
                                    var a = 0;
                                    a < e.accountsList.length;
                                    ++a
                                ) {
                                    var n = e.accountsList[a],
                                        r = this.props.accountsList[a];
                                    if (
                                        n &&
                                        r &&
                                        n.get("history") !== r.get("history")
                                    )
                                        return !0;
                                }
                                return !1;
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function() {
                                if (
                                    (this._updateTooltip(),
                                    this.state.csvExport)
                                ) {
                                    this.state.csvExport = !1;
                                    var e = document.getElementById(
                                            "csv_export_container"
                                        ).childNodes,
                                        t = "",
                                        a = !0,
                                        n = !1,
                                        r = void 0;
                                    try {
                                        for (
                                            var o, i = e[Symbol.iterator]();
                                            !(a = (o = i.next()).done);
                                            a = !0
                                        ) {
                                            var l = o.value.childNodes;
                                            "" !== t && (t += "\n"),
                                                (t += [
                                                    M(l[0]),
                                                    M(l[1]),
                                                    M(l[2]),
                                                    M(l[3])
                                                ].join(","));
                                        }
                                    } catch (e) {
                                        (n = !0), (r = e);
                                    } finally {
                                        try {
                                            !a && i.return && i.return();
                                        } finally {
                                            if (n) throw r;
                                        }
                                    }
                                    var c = new Blob([t], {
                                            type: "text/csv;charset=utf-8"
                                        }),
                                        u = new Date();
                                    Object(s.saveAs)(
                                        c,
                                        "btshist-" +
                                            u.getFullYear() +
                                            "-" +
                                            ("0" + (u.getMonth() + 1)).slice(
                                                -2
                                            ) +
                                            "-" +
                                            ("0" + u.getDate()).slice(-2) +
                                            "-" +
                                            ("0" + u.getHours()).slice(-2) +
                                            ("0" + u.getMinutes()).slice(-2) +
                                            ".csv"
                                    );
                                }
                                if (!this.props.fullHeight) {
                                    var p = this.refs.transactions;
                                    f.a.update(p), this._setHeaderHeight();
                                }
                            }
                        },
                        {
                            key: "_onIncreaseLimit",
                            value: function() {
                                this.setState({limit: this.state.limit + 30});
                            }
                        },
                        {
                            key: "_getHistory",
                            value: function(e, t, a) {
                                var n = [],
                                    r = new Set(),
                                    o = !0,
                                    i = !1,
                                    s = void 0;
                                try {
                                    for (
                                        var l, c = e[Symbol.iterator]();
                                        !(o = (l = c.next()).done);
                                        o = !0
                                    ) {
                                        var u = l.value;
                                        if (u) {
                                            var p = u.get("history");
                                            p &&
                                                (n = n.concat(
                                                    p
                                                        .toJS()
                                                        .filter(function(e) {
                                                            return (
                                                                !r.has(e.id) &&
                                                                r.add(e.id)
                                                            );
                                                        })
                                                ));
                                        }
                                    }
                                } catch (e) {
                                    (i = !0), (s = e);
                                } finally {
                                    try {
                                        !o && c.return && c.return();
                                    } finally {
                                        if (i) throw s;
                                    }
                                }
                                return (
                                    t &&
                                        (n = n.filter(function(e) {
                                            return e.op[0] === j[t];
                                        })),
                                    a &&
                                        (n = n.filter(function(e) {
                                            return a.fields.reduce(function(
                                                t,
                                                n
                                            ) {
                                                switch (n) {
                                                    case "asset_id":
                                                        return (
                                                            t &&
                                                            e.op[1].amount[
                                                                n
                                                            ] === a.values[n]
                                                        );
                                                    default:
                                                        return (
                                                            t &&
                                                            e.op[1][n] ===
                                                                a.values[n]
                                                        );
                                                }
                                            },
                                            !0);
                                        })),
                                    n
                                );
                            }
                        },
                        {
                            key: "_downloadCSV",
                            value: function() {
                                this.setState({csvExport: !0});
                            }
                        },
                        {
                            key: "_onChangeFilter",
                            value: function(e) {
                                this.setState({filter: e.target.value});
                            }
                        },
                        {
                            key: "_findActiveFilter",
                            value: function(e) {
                                var t = this;
                                return e.find(function(e) {
                                    return e === t.state.filter;
                                });
                            }
                        },
                        {
                            key: "_updateTooltip",
                            value: function() {
                                O.a.rebuild();
                            }
                        },
                        {
                            key: "_renderFilters",
                            value: function(e) {
                                var t = this,
                                    a = this._findActiveFilter(e);
                                return a
                                    ? r.a.createElement(
                                          "div",
                                          {
                                              className: _()("select", {
                                                  "is-open": this.state
                                                      .openFilter
                                              })
                                          },
                                          r.a.createElement(
                                              "span",
                                              {
                                                  className: "placeholder",
                                                  onClick: function(e) {
                                                      e.preventDefault(),
                                                          t.setState({
                                                              openFilter: !t
                                                                  .state
                                                                  .openFilter
                                                          });
                                                  }
                                              },
                                              g.a.translate(
                                                  "transaction.trxTypes." + a
                                              )
                                          ),
                                          r.a.createElement(
                                              "ul",
                                              null,
                                              e
                                                  .filter(function(e) {
                                                      return e !== a;
                                                  })
                                                  .map(function(e) {
                                                      return r.a.createElement(
                                                          "li",
                                                          {
                                                              key: "" + e,
                                                              onClick: function(
                                                                  a
                                                              ) {
                                                                  a.preventDefault(),
                                                                      t.setState(
                                                                          {
                                                                              filter: e
                                                                          }
                                                                      ),
                                                                      t.setState(
                                                                          {
                                                                              openFilter: !1
                                                                          }
                                                                      );
                                                              }
                                                          },
                                                          g.a.translate(
                                                              "transaction.trxTypes." +
                                                                  e
                                                          )
                                                      );
                                                  })
                                          )
                                      )
                                    : null;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.accountsList,
                                    n = t.compactView,
                                    o = t.filter,
                                    s = t.customFilter,
                                    c = t.style,
                                    u = (t.maxHeight, this.state),
                                    p = u.limit,
                                    d = (u.headerHeight,
                                    1 === a.length && a[0]
                                        ? a[0].get("id")
                                        : null),
                                    m = this._getHistory(
                                        a,
                                        this.props.showFilters &&
                                        "all" !== this.state.filter
                                            ? this.state.filter
                                            : o,
                                        s
                                    ).sort(T),
                                    f = m.length;
                                O.a.rebuild();
                                var b = null;
                                b = [
                                    "all",
                                    "transfer",
                                    "limit_order_create",
                                    "limit_order_cancel",
                                    "fill_order",
                                    "account_create",
                                    "account_update",
                                    "asset_create",
                                    "witness_withdraw_pay",
                                    "vesting_balance_withdraw"
                                ];
                                var y = m.length
                                    ? m.slice(0, p).map(function(e) {
                                          return r.a.createElement(l.a, {
                                              includeOperationId: !0,
                                              operationId: e.id,
                                              style: P,
                                              key: e.id,
                                              op: e.op,
                                              result: e.result,
                                              block: e.block_num,
                                              current: d,
                                              hideFee: !0,
                                              inverted: !1,
                                              hideOpLabel: n,
                                              fullDate: !0
                                          });
                                      })
                                    : [
                                          r.a.createElement(
                                              "tr",
                                              {key: "no_recent"},
                                              r.a.createElement(
                                                  "td",
                                                  {colSpan: n ? "2" : "3"},
                                                  r.a.createElement(i.a, {
                                                      content:
                                                          "operation.no_recent"
                                                  })
                                              )
                                          )
                                      ];
                                return (
                                    ((this.props.showMore &&
                                        f > this.props.limit) ||
                                        p < f) &&
                                        y.push(
                                            r.a.createElement(
                                                "tr",
                                                {
                                                    className: "total-value",
                                                    key: "total_value"
                                                },
                                                r.a.createElement("td", {
                                                    className:
                                                        "column-hide-tiny"
                                                }),
                                                r.a.createElement("td", {
                                                    style: I
                                                }),
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        style: {
                                                            textAlign: "center"
                                                        }
                                                    },
                                                    " ",
                                                    r.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: this._onIncreaseLimit.bind(
                                                                this
                                                            )
                                                        },
                                                        r.a.createElement(v.a, {
                                                            name:
                                                                "chevron-down",
                                                            title:
                                                                "icons.chevron_down.transactions",
                                                            className:
                                                                "icon-14px"
                                                        })
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "td",
                                                    null,
                                                    " "
                                                )
                                            )
                                        ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "recent-transactions no-overflow",
                                            style: c
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "generic-bordered-box"},
                                            this.props.dashboard
                                                ? null
                                                : r.a.createElement(
                                                      "div",
                                                      {ref: "header"},
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "block-content-header"
                                                          },
                                                          r.a.createElement(
                                                              "span",
                                                              null,
                                                              this.props.title
                                                                  ? this.props
                                                                        .title
                                                                  : r.a.createElement(
                                                                        i.a,
                                                                        {
                                                                            content:
                                                                                "account.recent"
                                                                        }
                                                                    )
                                                          )
                                                      )
                                                  ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "dashboard__actions"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "container-fluid"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "row"},
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "col-lg-3"
                                                            },
                                                            this.props
                                                                .showFilters
                                                                ? this._renderFilters(
                                                                      b
                                                                  )
                                                                : null
                                                        )
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "dashboard__adaptive"
                                                },
                                                r.a.createElement(
                                                    "table",
                                                    {
                                                        className:
                                                            "dashboard__table blue-bg with-borders" +
                                                            (n
                                                                ? "compact"
                                                                : "") +
                                                            (this.props
                                                                .dashboard
                                                                ? " dashboard-table"
                                                                : "")
                                                    },
                                                    r.a.createElement(
                                                        "thead",
                                                        null,
                                                        r.a.createElement(
                                                            "tr",
                                                            null,
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: P
                                                                },
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.id"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {
                                                                    className:
                                                                        "column-hide-tiny",
                                                                    style: P
                                                                },
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.type",
                                                                        onLoad: this._updateTooltip()
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: P},
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.fee"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: P},
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.info"
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "th",
                                                                {style: P},
                                                                r.a.createElement(
                                                                    i.a,
                                                                    {
                                                                        content:
                                                                            "account.transactions.time"
                                                                    }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    r.a.createElement(
                                                        h.a,
                                                        {
                                                            component: "tbody",
                                                            transitionName:
                                                                "newrow"
                                                        },
                                                        y
                                                    )
                                                )
                                            ),
                                            f > 0
                                                ? r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "export-row",
                                                          style: {
                                                              marginTop: "20px"
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "a",
                                                          {
                                                              className:
                                                                  "csv-export",
                                                              href: "#",
                                                              onClick: function(
                                                                  t
                                                              ) {
                                                                  t.preventDefault(),
                                                                      e._downloadCSV();
                                                              }
                                                          },
                                                          r.a.createElement(
                                                              "img",
                                                              {
                                                                  src:
                                                                      k.csvIcon,
                                                                  alt: ""
                                                              }
                                                          ),
                                                          g.a.translate(
                                                              "transaction.csv_tip"
                                                          )
                                                      )
                                                  )
                                                : null,
                                            f > 0 &&
                                                this.state.csvExport &&
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        id:
                                                            "csv_export_container",
                                                        style: {display: "none"}
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        null,
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "DATE"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "OPERATION"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "MEMO"
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            null,
                                                            "AMOUNT"
                                                        )
                                                    ),
                                                    m.map(function(e) {
                                                        return r.a.createElement(
                                                            l.a,
                                                            {
                                                                key: e.id,
                                                                op: e.op,
                                                                result:
                                                                    e.result,
                                                                block:
                                                                    e.block_num,
                                                                inverted: !1,
                                                                csvExportMode: !0
                                                            }
                                                        );
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
            (L.propTypes = {
                accountsList: c.a.ChainAccountsList.isRequired,
                compactView: w.a.bool,
                limit: w.a.number,
                maxHeight: w.a.number,
                fullHeight: w.a.bool,
                showFilters: w.a.bool
            }),
                (L.defaultProps = {
                    limit: 25,
                    maxHeight: 500,
                    fullHeight: !1,
                    showFilters: !1
                }),
                (L = Object(u.a)(L));
            var D = (function(e) {
                function t() {
                    return (
                        C(this, t),
                        N(
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
                    A(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "span",
                                    {className: "wrapper"},
                                    this.props.children(this.props)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (D.propTypes = {
                asset: c.a.ChainAsset.isRequired,
                to: c.a.ChainAccount.isRequired,
                fromAccount: c.a.ChainAccount.isRequired
            }),
                (D.defaultProps = {asset: "1.3.0"}),
                (D = Object(u.a)(D));
        },
        4982: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(7),
                i = a.n(o),
                s = a(1),
                l = a.n(s),
                c = a(57),
                u = a(108),
                p = a(20),
                d = a.n(p),
                h = a(34),
                m = a(6),
                f = a(13),
                b = a(5),
                g = a(86),
                v = a(16),
                y = a(3),
                _ = a.n(y),
                E = a(4),
                w = a(44),
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
            function x(e, t) {
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
            function A(e, t) {
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
            var C = (function(e) {
                function t() {
                    x(this, t);
                    var e = O(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {amount: 0}), e;
                }
                return (
                    A(t, r.a.Component),
                    k(t, [
                        {
                            key: "onAmountChanged",
                            value: function(e) {
                                var t = e.amount;
                                e.asset;
                                this.setState({amount: t});
                            }
                        },
                        {
                            key: "onSubmit",
                            value: function(e) {
                                e.preventDefault(),
                                    d.a.publish("settlement_modal", "close");
                                var t = b.a.get_asset_precision(
                                        this.props.asset.get("precision")
                                    ),
                                    a = this.state.amount.replace(/,/g, "");
                                a *= t;
                                var n = g.a.new_transaction();
                                return (
                                    n.add_type_operation("asset_settle", {
                                        fee: {amount: 0, asset_id: 0},
                                        account: this.props.account.get("id"),
                                        amount: {
                                            amount: a,
                                            asset_id: this.props.asset.get("id")
                                        }
                                    }),
                                    v.a
                                        .process_transaction(n, null, !0)
                                        .then(function(e) {
                                            return !0;
                                        })
                                        .catch(function(e) {
                                            return (
                                                console.error(
                                                    "asset settle error: ",
                                                    e
                                                ),
                                                !1
                                            );
                                        })
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.asset,
                                    a = e.account,
                                    n = this.state.amount;
                                if (!t) return null;
                                var o = t.get("id"),
                                    i = a.get("balances"),
                                    s = null,
                                    u = 0;
                                i &&
                                    i.forEach(function(e) {
                                        var t = E.b.getObject(e);
                                        if (!t.get("balance")) return null;
                                        t.get("asset_type") === o &&
                                            ((s = e), (u = t.get("balance")));
                                    });
                                var p = b.a.get_asset_precision(
                                        t.get("precision")
                                    ),
                                    d = n ? n.replace(/,/g, "") : 0,
                                    h =
                                        parseFloat(d) > 0 &&
                                        parseFloat(d) * p <= parseFloat(u)
                                            ? "button success"
                                            : "button disabled",
                                    m = r.a.createElement(
                                        "span",
                                        null,
                                        r.a.createElement(l.a, {
                                            content: "exchange.balance"
                                        }),
                                        ": ",
                                        s
                                            ? r.a.createElement(c.a, {
                                                  balance: s
                                              })
                                            : "0 " + t.get("symbol")
                                    );
                                return r.a.createElement(
                                    "form",
                                    {
                                        className:
                                            "grid-block vertical full-width-content"
                                    },
                                    r.a.createElement(l.a, {
                                        component: "h3",
                                        style: {textAlign: "center"},
                                        content: "modal.settle.title",
                                        asset: t.get("symbol")
                                    }),
                                    r.a.createElement(
                                        "div",
                                        {
                                            className: "grid-container ",
                                            style: {paddingTop: "2rem"}
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "content-block"},
                                            r.a.createElement(w.a, {
                                                label: "modal.settle.amount",
                                                amount: n,
                                                onChange: this.onAmountChanged.bind(
                                                    this
                                                ),
                                                display_balance: m,
                                                asset: o,
                                                assets: [o],
                                                tabIndex: 1
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "content-block"},
                                            r.a.createElement("input", {
                                                type: "submit",
                                                className: h,
                                                onClick: this.onSubmit.bind(
                                                    this
                                                ),
                                                value: _.a.translate(
                                                    "modal.settle.submit"
                                                )
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
            (C.propTypes = {
                asset: m.a.ChainAsset.isRequired,
                account: m.a.ChainAccount.isRequired
            }),
                (C = Object(f.a)(C));
            !(function(e) {
                function t() {
                    x(this, t);
                    var e = O(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {open: !1}), e;
                }
                A(t, r.a.Component),
                    k(t, [
                        {
                            key: "show",
                            value: function() {
                                var e = this;
                                this.setState({open: !0}, function() {
                                    d.a.publish(e.props.modalId, "open");
                                });
                            }
                        },
                        {
                            key: "onClose",
                            value: function() {
                                this.setState({open: !1});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.state.open
                                    ? r.a.createElement(
                                          h.a,
                                          {
                                              id: this.props.modalId,
                                              onClose: this.onClose.bind(this),
                                              overlay: !0,
                                              ref: "settlement_modal"
                                          },
                                          r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "grid-block vertical"
                                              },
                                              r.a.createElement(C, this.props)
                                          )
                                      )
                                    : null;
                            }
                        }
                    ]);
            })();
            var N = a(138),
                S = a(79),
                j = a(50),
                P = a(15),
                I = a(31),
                T = a(43),
                M = a.n(T),
                L = a(333),
                D =
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
                R = (function() {
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
            function q(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function F(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function V(e, t) {
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
            var H = (function(e) {
                function t(e) {
                    return (
                        q(this, t),
                        F(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        )
                    );
                }
                return (
                    V(t, L["b"]),
                    R(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                M.a.rebuild();
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e) {
                                return (
                                    (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        return void 0 !== i
                                            ? i.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    e.base !== this.props.base
                                );
                            }
                        },
                        {
                            key: "getValue",
                            value: function() {
                                var e = this.props.marketStats;
                                return e && e.change ? e.change : 0;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.getValue(),
                                    t =
                                        0 === parseFloat(e)
                                            ? ""
                                            : parseFloat(e) < 0
                                                ? "change-down"
                                                : "change-up",
                                    a = r.a.createElement(S.b, {
                                        style: "decimal",
                                        value: e,
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    });
                                return r.a.createElement(
                                    "span",
                                    {className: "value " + t},
                                    a,
                                    "%"
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (H.defaultProps = {
                fullPrecision: !1,
                noDecimals: !1,
                hide_asset: !1
            }),
                (H = Object(j.a)(H, {
                    propNames: ["quote", "base"],
                    defaultProps: {quote: "1.3.0"}
                }));
            var W = (function(e) {
                function t() {
                    return (
                        q(this, t),
                        F(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    V(t, r.a.Component),
                    R(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.refCallback,
                                    a = (function(e, t) {
                                        var a = {};
                                        for (var n in e)
                                            t.indexOf(n) >= 0 ||
                                                (Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    n
                                                ) &&
                                                    (a[n] = e[n]));
                                        return a;
                                    })(e, ["refCallback"]);
                                return r.a.createElement(H, D({}, a, {ref: t}));
                            }
                        }
                    ]),
                    t
                );
            })();
            W = Object(P.connect)(W, {
                listenTo: function() {
                    return [I.a];
                },
                getProps: function(e) {
                    return {
                        marketStats: I.a
                            .getState()
                            .allMarketStats.get(e.marketId),
                        allMarketStats: I.a.getState().allMarketStats
                    };
                }
            });
            var B = a(22),
                U = a(17),
                z = a(64),
                K = a(222),
                G = a(12),
                J = a(11),
                X = a(32),
                Y = a(2),
                Z = a.n(Y),
                Q =
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
            function ee(e, t, a) {
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
            function te(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ae(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function ne(e, t) {
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
            var re = {textAlign: "right"},
                oe = {textAlign: "left"},
                ie = (function(e) {
                    function t() {
                        return (
                            te(this, t),
                            ae(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        ne(t, r.a.Component),
                        $(t, [
                            {
                                key: "_onUpdatePosition",
                                value: function(e) {
                                    e.preventDefault();
                                    var t =
                                        "cp_modal_" +
                                        this.props.object.getIn([
                                            "call_price",
                                            "quote",
                                            "asset_id"
                                        ]);
                                    this.refs[t].show();
                                }
                            },
                            {
                                key: "_onClosePosition",
                                value: function(e) {
                                    e.preventDefault();
                                    var t = g.a.new_transaction();
                                    t.add_type_operation("call_order_update", {
                                        fee: {amount: 0, asset_id: 0},
                                        funding_account: this.props.object.get(
                                            "borrower"
                                        ),
                                        delta_collateral: {
                                            amount: -this.props.object.get(
                                                "collateral"
                                            ),
                                            asset_id: this.props.object.getIn([
                                                "call_price",
                                                "base",
                                                "asset_id"
                                            ])
                                        },
                                        delta_debt: {
                                            amount: -this.props.object.get(
                                                "debt"
                                            ),
                                            asset_id: this.props.object.getIn([
                                                "call_price",
                                                "quote",
                                                "asset_id"
                                            ])
                                        }
                                    }),
                                        v.a.process_transaction(t, null, !0);
                                }
                            },
                            {
                                key: "_getBalance",
                                value: function() {
                                    var e = this.props.account,
                                        t = this.props.object.getIn([
                                            "call_price",
                                            "quote",
                                            "asset_id"
                                        ]),
                                        a = e.get("balances"),
                                        n = 0;
                                    return (
                                        a &&
                                            a.forEach(function(e, a) {
                                                if (a == t) {
                                                    var r = E.b.getObject(e);
                                                    n = r.get("balance");
                                                }
                                            }),
                                        n
                                    );
                                }
                            },
                            {
                                key: "_getFeedPrice",
                                value: function() {
                                    return this.props
                                        ? 1 /
                                              b.a.get_asset_price(
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
                                        b.a.get_asset_amount(
                                            e.collateral,
                                            this.props.collateralAsset
                                        ) /
                                        (b.a.get_asset_amount(
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
                                            ? _.a.translate(
                                                  "tooltip.cr_danger",
                                                  {mr: t}
                                              )
                                            : "warning" === e
                                                ? _.a.translate(
                                                      "tooltip.cr_warning",
                                                      {mr: t}
                                                  )
                                                : null
                                        : null;
                                }
                            },
                            {
                                key: "_onNavigate",
                                value: function(e, t) {
                                    t.preventDefault(),
                                        this.context.router.push(e);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.debtAsset,
                                        a = e.collateralAsset,
                                        n = e.object.toJS(),
                                        i = this._getCollateralRatio(),
                                        s = b.a.get_asset_amount(
                                            n.debt,
                                            this.props.debtAsset
                                        ),
                                        c = this._getBalance(),
                                        p = this._getStatusClass(),
                                        d = "/asset/" + t.get("symbol"),
                                        h =
                                            "/market/" +
                                            t.get("symbol") +
                                            "_" +
                                            a.get("symbol"),
                                        m = r.a.createElement(
                                            "ul",
                                            null,
                                            r.a.createElement(
                                                "li",
                                                null,
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        href: d,
                                                        onClick: this._onNavigate.bind(
                                                            this,
                                                            d
                                                        )
                                                    },
                                                    r.a.createElement(l.a, {
                                                        content:
                                                            "account.asset_details"
                                                    })
                                                )
                                            ),
                                            r.a.createElement(
                                                "li",
                                                null,
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        href: h,
                                                        onClick: this._onNavigate.bind(
                                                            this,
                                                            h
                                                        )
                                                    },
                                                    r.a.createElement(B.a, {
                                                        name: t.get("symbol")
                                                    }),
                                                    " :",
                                                    " ",
                                                    r.a.createElement(B.a, {
                                                        name: a.get("symbol")
                                                    })
                                                )
                                            )
                                        );
                                    return r.a.createElement(
                                        "tr",
                                        {className: "margin-row"},
                                        r.a.createElement(
                                            "td",
                                            {style: oe},
                                            r.a.createElement(
                                                J.b,
                                                {
                                                    to:
                                                        "/asset/" +
                                                        t.get("symbol")
                                                },
                                                r.a.createElement(B.a, {
                                                    noTip: !0,
                                                    name: t.get("symbol")
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {style: re},
                                            r.a.createElement(U.a, {
                                                amount: c,
                                                asset:
                                                    n.call_price.quote.asset_id,
                                                assetInfo: m,
                                                hide_asset: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {style: re},
                                            r.a.createElement(U.a, {
                                                amount: n.debt,
                                                asset:
                                                    n.call_price.quote.asset_id,
                                                assetInfo: m,
                                                hide_asset: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                style: re,
                                                className: "column-hide-medium"
                                            },
                                            r.a.createElement(U.a, {
                                                decimalOffset: 5,
                                                amount: n.collateral,
                                                asset:
                                                    n.call_price.base.asset_id
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                "data-place": "bottom",
                                                "data-tip": this._getCRTip(),
                                                className: "center-content " + p
                                            },
                                            b.a.format_number(i, 2)
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {style: re},
                                            r.a.createElement(u.a, {
                                                noTip: !0,
                                                balances: Object(o.List)(),
                                                debt: ee(
                                                    {},
                                                    t.get("id"),
                                                    n.debt
                                                ),
                                                collateral: ee(
                                                    {},
                                                    a.get("id"),
                                                    parseInt(n.collateral, 10)
                                                ),
                                                hide_asset: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                style: re,
                                                className: "column-hide-small"
                                            },
                                            r.a.createElement(z.a, {
                                                base_amount:
                                                    n.call_price.base.amount,
                                                base_asset:
                                                    n.call_price.base.asset_id,
                                                quote_amount:
                                                    n.call_price.quote.amount,
                                                quote_asset:
                                                    n.call_price.quote.asset_id,
                                                hide_symbols: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                style: re,
                                                className: "column-hide-small"
                                            },
                                            r.a.createElement(z.a, {
                                                base_amount: t.getIn([
                                                    "bitasset",
                                                    "current_feed",
                                                    "settlement_price",
                                                    "base",
                                                    "amount"
                                                ]),
                                                base_asset:
                                                    n.call_price.quote.asset_id,
                                                quote_amount: t.getIn([
                                                    "bitasset",
                                                    "current_feed",
                                                    "settlement_price",
                                                    "quote",
                                                    "amount"
                                                ]),
                                                quote_asset:
                                                    n.call_price.base.asset_id,
                                                hide_symbols: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            {
                                                className:
                                                    "center-content column-hide-small",
                                                style: oe
                                            },
                                            r.a.createElement(z.a, {
                                                base_amount:
                                                    n.call_price.base.amount,
                                                base_asset:
                                                    n.call_price.base.asset_id,
                                                quote_amount:
                                                    n.call_price.quote.amount,
                                                quote_asset:
                                                    n.call_price.quote.asset_id,
                                                hide_value: !0
                                            })
                                        ),
                                        r.a.createElement(
                                            "td",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {
                                                    "data-place": "left",
                                                    "data-tip": _.a.translate(
                                                        "tooltip.update_position"
                                                    ),
                                                    style: {paddingBottom: 5}
                                                },
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        onClick: this._onUpdatePosition.bind(
                                                            this
                                                        )
                                                    },
                                                    r.a.createElement(G.a, {
                                                        name: "adjust",
                                                        title: "icons.adjust",
                                                        className:
                                                            "icon-14px rotate90"
                                                    })
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "td",
                                            null,
                                            r.a.createElement(
                                                "div",
                                                {
                                                    "data-place": "left",
                                                    "data-tip": _.a.translate(
                                                        "tooltip.close_position",
                                                        {
                                                            amount: s,
                                                            asset: t.get(
                                                                "symbol"
                                                            )
                                                        }
                                                    ),
                                                    style: {paddingBottom: 5}
                                                },
                                                r.a.createElement(
                                                    "a",
                                                    {
                                                        onClick: this._onClosePosition.bind(
                                                            this
                                                        )
                                                    },
                                                    r.a.createElement(G.a, {
                                                        name: "cross-circle",
                                                        title:
                                                            "icons.cross_circle.close_position",
                                                        className: "icon-14px"
                                                    })
                                                )
                                            ),
                                            t
                                                ? r.a.createElement(K.a, {
                                                      ref:
                                                          "cp_modal_" +
                                                          n.call_price.quote
                                                              .asset_id,
                                                      modalId:
                                                          "cp_modal_" +
                                                          n.call_price.quote
                                                              .asset_id,
                                                      quote_asset:
                                                          n.call_price.quote
                                                              .asset_id,
                                                      backing_asset: t.getIn([
                                                          "bitasset",
                                                          "options",
                                                          "short_backing_asset"
                                                      ]),
                                                      account: this.props
                                                          .account
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
            (ie.propTypes = {
                debtAsset: m.a.ChainAsset.isRequired,
                collateralAsset: m.a.ChainAsset.isRequired
            }),
                (ie.defaultProps = {tempComponent: "tr"}),
                (ie.contextTypes = {router: Z.a.object}),
                (ie = Object(f.a)(ie));
            var se = (function(e) {
                function t() {
                    return (
                        te(this, t),
                        ae(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, r.a.Component),
                    $(t, [
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
                                    o = t.getIn([
                                        "call_price",
                                        "base",
                                        "asset_id"
                                    ]);
                                return r.a.createElement(
                                    ie,
                                    Q(
                                        {
                                            debtAsset: n,
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
            (se.propTypes = {object: m.a.ChainObject.isRequired}),
                (se = Object(f.a)(se));
            var le = (function(e) {
                function t() {
                    return (
                        te(this, t),
                        ae(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, r.a.Component),
                    $(t, [
                        {
                            key: "_onUpdatePosition",
                            value: function(e) {
                                e.preventDefault();
                                var t =
                                    "cp_modal_" +
                                    this.props.debtAsset.get("id");
                                this.refs[t].show();
                            }
                        },
                        {
                            key: "_getFeedPrice",
                            value: function() {
                                return this.props
                                    ? 1 /
                                          b.a.get_asset_price(
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
                            key: "_onNavigate",
                            value: function(e, t) {
                                t.preventDefault(), this.context.router.push(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.debtAsset,
                                    a = e.collateralAsset,
                                    n = e.account,
                                    o = t.get("id"),
                                    i = n.get("balances"),
                                    s = 0;
                                i &&
                                    i.forEach(function(e, t) {
                                        if (t == o) {
                                            var a = E.b.getObject(e);
                                            s = a.get("balance");
                                        }
                                    });
                                var c = "/asset/" + t.get("symbol"),
                                    u =
                                        "/market/" +
                                        t.get("symbol") +
                                        "_" +
                                        a.get("symbol"),
                                    p = r.a.createElement(
                                        "ul",
                                        null,
                                        r.a.createElement(
                                            "li",
                                            null,
                                            r.a.createElement(
                                                "a",
                                                {
                                                    href: c,
                                                    onClick: this._onNavigate.bind(
                                                        this,
                                                        c
                                                    )
                                                },
                                                r.a.createElement(l.a, {
                                                    content:
                                                        "account.asset_details"
                                                })
                                            )
                                        ),
                                        r.a.createElement(
                                            "li",
                                            null,
                                            r.a.createElement(
                                                "a",
                                                {
                                                    href: u,
                                                    onClick: this._onNavigate.bind(
                                                        this,
                                                        u
                                                    )
                                                },
                                                r.a.createElement(B.a, {
                                                    name: t.get("symbol")
                                                }),
                                                " :",
                                                " ",
                                                r.a.createElement(B.a, {
                                                    name: a.get("symbol")
                                                })
                                            )
                                        )
                                    );
                                return r.a.createElement(
                                    "tr",
                                    {className: "margin-row"},
                                    r.a.createElement(
                                        "td",
                                        {style: oe},
                                        r.a.createElement(
                                            J.b,
                                            {to: "/asset/" + t.get("symbol")},
                                            r.a.createElement(B.a, {
                                                noTip: !0,
                                                name: t.get("symbol")
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: re},
                                        r.a.createElement(U.a, {
                                            amount: s,
                                            asset: t.get("id"),
                                            assetInfo: p,
                                            hide_asset: !0
                                        })
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {style: re},
                                        r.a.createElement(U.a, {
                                            amount: 0,
                                            asset: t.get("id"),
                                            assetInfo: p,
                                            hide_asset: !0
                                        })
                                    ),
                                    r.a.createElement(
                                        "td",
                                        {
                                            style: re,
                                            className: "column-hide-medium"
                                        },
                                        r.a.createElement(U.a, {
                                            decimalOffset: 5,
                                            amount: 0,
                                            asset: a.get("id")
                                        })
                                    ),
                                    r.a.createElement("td", null),
                                    r.a.createElement("td", {style: re}),
                                    r.a.createElement("td", {
                                        style: re,
                                        className: "column-hide-small"
                                    }),
                                    r.a.createElement("td", {
                                        style: re,
                                        className: "column-hide-small"
                                    }),
                                    r.a.createElement("td", {
                                        className:
                                            "center-content column-hide-small",
                                        style: oe
                                    }),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                "data-place": "left",
                                                "data-tip": _.a.translate(
                                                    "tooltip.update_position"
                                                ),
                                                style: {paddingBottom: 5}
                                            },
                                            r.a.createElement(
                                                "a",
                                                {
                                                    onClick: this._onUpdatePosition.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(G.a, {
                                                    name: "adjust",
                                                    title: "icons.adjust",
                                                    className:
                                                        "icon-14px rotate90"
                                                })
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        "td",
                                        null,
                                        t
                                            ? r.a.createElement(K.a, {
                                                  ref:
                                                      "cp_modal_" + t.get("id"),
                                                  modalId:
                                                      "cp_modal_" + t.get("id"),
                                                  quote_asset: t.get("id"),
                                                  backing_asset: t.getIn([
                                                      "bitasset",
                                                      "options",
                                                      "short_backing_asset"
                                                  ]),
                                                  account: this.props.account
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
            (le.propTypes = {
                debtAsset: m.a.ChainAsset.isRequired,
                collateralAsset: m.a.ChainAsset.isRequired
            }),
                (le.defaultProps = {tempComponent: "tr"}),
                (le.contextTypes = {router: Z.a.object}),
                (le = Object(f.a)(le));
            var ce = (function(e) {
                function t() {
                    return (
                        te(this, t),
                        ae(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    ne(t, r.a.Component),
                    $(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.account,
                                    n = t.callOrders,
                                    o = t.bitAssets;
                                if (
                                    ((n = n.filter(function(e) {
                                        return !!e;
                                    })),
                                    !(o = o.filter(function(e) {
                                        return !!e;
                                    })).length)
                                )
                                    return null;
                                if (
                                    (n.forEach(function(e) {
                                        if (e) {
                                            var t = o.findIndex(function(t) {
                                                return (
                                                    t &&
                                                    t.get("id") ===
                                                        e.getIn([
                                                            "call_price",
                                                            "quote",
                                                            "asset_id"
                                                        ])
                                                );
                                            });
                                            -1 !== t && o.splice(t, 1);
                                        }
                                    }),
                                    !o.length)
                                )
                                    return null;
                                var i = o.map(function(t) {
                                    return r.a.createElement(
                                        le,
                                        Q(
                                            {
                                                key: t.get("id"),
                                                debtAsset: t.get("id"),
                                                collateralAsset: t.getIn([
                                                    "bitasset",
                                                    "options",
                                                    "short_backing_asset"
                                                ]),
                                                account: a
                                            },
                                            e.props
                                        )
                                    );
                                });
                                return r.a.createElement("tbody", null, i);
                            }
                        }
                    ]),
                    t
                );
            })();
            (ce.propTypes = {callOrders: m.a.ChainObjectsList}),
                (ce = Object(f.a)(ce)),
                (ce = Object(j.a)(ce, {
                    propNames: ["bitAssets"],
                    defaultProps: {
                        bitAssets: [
                            "1.3.103",
                            "1.3.113",
                            "1.3.120",
                            "1.3.121",
                            "1.3.958",
                            "1.3.1325",
                            "1.3.1362",
                            "1.3.105",
                            "1.3.106"
                        ]
                    },
                    asList: !0
                }));
            var ue = function(e) {
                    var t = e.callOrders,
                        a = e.account,
                        n = e.className,
                        o = e.children,
                        s = e.preferredUnit;
                    return r.a.createElement(
                        "div",
                        {className: "dashboard__adaptive"},
                        r.a.createElement(
                            "table",
                            {className: "dashboard__table " + n},
                            r.a.createElement(
                                "thead",
                                null,
                                r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement(
                                        "th",
                                        {style: oe},
                                        r.a.createElement(l.a, {
                                            content: "explorer.asset.title"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {style: re},
                                        r.a.createElement(l.a, {
                                            content: "exchange.balance"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {style: re},
                                        r.a.createElement(l.a, {
                                            content: "transaction.borrow_amount"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            style: re,
                                            className: "column-hide-medium"
                                        },
                                        r.a.createElement(l.a, {
                                            content: "transaction.collateral"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "tooltip inline-block",
                                                "data-place": "top",
                                                "data-tip": _.a.translate(
                                                    "tooltip.coll_ratio"
                                                )
                                            },
                                            r.a.createElement(l.a, {
                                                content: "borrow.coll_ratio"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(X.a, {
                                            noLink: !0,
                                            string: "account.total",
                                            keys: [
                                                {
                                                    type: "asset",
                                                    value: s,
                                                    arg: "asset"
                                                }
                                            ]
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            style: re,
                                            className: "column-hide-small"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {
                                                className:
                                                    "tooltip inline-block",
                                                "data-place": "top",
                                                "data-tip": _.a.translate(
                                                    "tooltip.call_price"
                                                )
                                            },
                                            r.a.createElement(l.a, {
                                                content: "exchange.call"
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            style: re,
                                            className: "column-hide-small"
                                        },
                                        r.a.createElement(l.a, {
                                            content: "exchange.price"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        {
                                            className: "column-hide-small",
                                            style: oe
                                        },
                                        r.a.createElement(l.a, {
                                            content: "explorer.assets.units"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(l.a, {
                                            content: "borrow.adjust_short"
                                        })
                                    ),
                                    r.a.createElement(
                                        "th",
                                        null,
                                        r.a.createElement(l.a, {
                                            content: "transfer.close"
                                        })
                                    )
                                )
                            ),
                            r.a.createElement(
                                "tbody",
                                null,
                                t
                                    .sort(function(e, t) {
                                        return (
                                            e.split(".")[2] - t.split(".")[2]
                                        );
                                    })
                                    .map(function(e) {
                                        return r.a.createElement(se, {
                                            key: e,
                                            object: e,
                                            account: a
                                        });
                                    })
                            ),
                            r.a.createElement(ce, {
                                account: a,
                                callOrders: i.a.List(t)
                            }),
                            r.a.createElement("tbody", null, o)
                        )
                    );
                },
                pe = a(446),
                de = a(256),
                he = a(117),
                me = a(14),
                fe = a(201),
                be = a(40),
                ge = {
                    AccountPermission: function(e, t, a) {
                        var n = this;
                        (this.id = e.get("id")),
                            (this.weight = t),
                            (this.threshold = e.getIn([a, "weight_threshold"])),
                            (this.accounts = []),
                            (this.keys = e
                                .getIn([a, "key_auths"])
                                .map(function(e) {
                                    return new function(e) {
                                        var t = this;
                                        (this.id = e.toJS ? e.get(0) : e[0]),
                                            (this.weight = e.toJS
                                                ? e.get(1)
                                                : e[1]),
                                            (this.isAvailable = function(e) {
                                                return e.includes
                                                    ? e.includes(t.id)
                                                    : -1 !== e.indexOf(t);
                                            });
                                    }(e);
                                })
                                .toArray()),
                            (this.isAvailable = function(e) {
                                return e.includes
                                    ? e.includes(n.id)
                                    : -1 !== e.indexOf(n);
                            }),
                            (this._sumWeights = function(e) {
                                if (n.isNested() || n.isMultiSig()) {
                                    var t = n.accounts.reduce(function(t, a) {
                                        return (
                                            t +
                                            (a._sumWeights(e) ? a.weight : 0)
                                        );
                                    }, 0);
                                    return Math.floor(t / n.threshold);
                                }
                                return n.isAvailable(e) ? n.weight : 0;
                            }),
                            (this.getStatus = function(e, t) {
                                if (n.isNested()) {
                                    var a = n.accounts.reduce(function(t, a) {
                                        return t + a._sumWeights(e);
                                    }, 0);
                                    return (
                                        n.keys.length && (a += n.sumKeys(t)), a
                                    );
                                }
                                var r = n._sumWeights(e);
                                return n.isMultiSig() && (r += n.sumKeys(t)), r;
                            }),
                            (this.sumKeys = function(e) {
                                return n.keys.reduce(function(t, a) {
                                    return (
                                        t + (a.isAvailable(e) ? a.weight : 0)
                                    );
                                }, 0);
                            }),
                            (this.isNested = function() {
                                return n.accounts.length > 0;
                            }),
                            (this.isMultiSig = function() {
                                return n.keys.reduce(function(e, t) {
                                    return e || t.weight < n.threshold;
                                }, !1);
                            }),
                            (this.getMissingSigs = function(e) {
                                var t = [],
                                    a = [];
                                return (
                                    n.isNested()
                                        ? (a = n.accounts.reduce(function(
                                              t,
                                              a
                                          ) {
                                              return t.concat(
                                                  a.getMissingSigs(e)
                                              );
                                          },
                                          []))
                                        : n.isAvailable(e) || t.push(n.id),
                                    t.concat(a)
                                );
                            }),
                            (this.getMissingKeys = function(e) {
                                var t = [],
                                    a = [];
                                return (
                                    n.keys.length &&
                                        (n.isNested() || n.isMultiSig()) &&
                                        n.keys.forEach(function(a) {
                                            a.isAvailable(e) || t.push(a.id);
                                        }),
                                    n.isNested() &&
                                        (a = n.accounts.reduce(function(t, a) {
                                            return t.concat(
                                                a.getMissingKeys(e)
                                            );
                                        }, [])),
                                    t.concat(a)
                                );
                            });
                    },
                    listToIDs: function(e) {
                        var t = [];
                        return (
                            e.forEach(function(e) {
                                e && t.push(e.get ? e.get("id") : e);
                            }),
                            t
                        );
                    },
                    unravel: function(e, t) {
                        var a = this,
                            n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : 0;
                        if (n < 3) {
                            var r = E.b.getAccount(e.id);
                            r &&
                                r.getIn([t, "account_auths"]).size &&
                                r
                                    .getIn([t, "account_auths"])
                                    .forEach(function(r) {
                                        var o = E.b.getAccount(r.get(0));
                                        o &&
                                            e.accounts.push(
                                                a.unravel(
                                                    new a.AccountPermission(
                                                        o,
                                                        r.get(1),
                                                        t
                                                    ),
                                                    t,
                                                    n + 1
                                                )
                                            );
                                    });
                        }
                        return e;
                    },
                    unnest: function(e, t) {
                        var a = this,
                            n = [];
                        return (
                            e.forEach(function(e) {
                                var r = E.b.getAccount(e),
                                    o = a.unravel(
                                        new a.AccountPermission(r, null, t),
                                        t
                                    );
                                n.push(o);
                            }),
                            n
                        );
                    },
                    flatten_auths: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : i.a.List();
                        return e.size
                            ? (e.forEach(function(e) {
                                  t.includes(e.get(0)) ||
                                      (t = t.push(e.get(0)));
                              }),
                              t)
                            : t;
                    }
                },
                ve = (function() {
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
            var ye = (function(e) {
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
                        ve(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    M.a.rebuild();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.className,
                                        a = e.children,
                                        n = e.dataTip,
                                        o = e.content;
                                    return r.a.createElement(
                                        "span",
                                        {
                                            className: "tooltip " + t,
                                            "data-html": !0,
                                            "data-tip": n || _.a.translate(o)
                                        },
                                        a
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                _e = function() {
                    return r.a.createElement(
                        ye,
                        {
                            className: "error appended",
                            content:
                                "explorer.proposals.authority_depth_warning"
                        },
                        "/!\\"
                    );
                },
                Ee = function() {
                    return r.a.createElement(
                        ye,
                        {
                            className: "error appended",
                            content:
                                "explorer.proposals.children_authority_depth_warning"
                        },
                        "/!\\"
                    );
                },
                we = function() {
                    return r.a.createElement(
                        ye,
                        {
                            className: "warning",
                            content: "explorer.proposals.pending_approval"
                        },
                        r.a.createElement(l.a, {
                            content: "explorer.proposals.pending"
                        })
                    );
                },
                ke = function() {
                    return r.a.createElement(
                        ye,
                        {
                            className: "warning",
                            content: "explorer.proposals.pending_review"
                        },
                        r.a.createElement(l.a, {
                            content: "explorer.proposals.review"
                        })
                    );
                },
                xe = function() {
                    return r.a.createElement(
                        ye,
                        {
                            className: "error",
                            content: "explorer.proposals.failed_execute"
                        },
                        r.a.createElement(l.a, {
                            content: "explorer.proposals.failed"
                        })
                    );
                },
                Oe = function(e) {
                    var t = e.onToggle,
                        a = e.expanded;
                    return r.a.createElement(
                        "a",
                        {className: "expand-button", onClick: t},
                        "[",
                        a ? "-" : "+",
                        "]"
                    );
                },
                Ae = function(e) {
                    return e.approved
                        ? r.a.createElement(G.a, {
                              name: "checkmark-circle",
                              size: "1x",
                              className: "success",
                              title: "icons.checkmark_circle.operation_succeed"
                          })
                        : r.a.createElement(G.a, {
                              name: "cross-circle",
                              size: "1x",
                              className: "error",
                              title: "icons.cross_circle.operation_failed"
                          });
                },
                Ce = function(e) {
                    var t = e.available,
                        a = e.permission,
                        n = e.weight,
                        o = e.level;
                    return r.a.createElement(
                        "tbody",
                        null,
                        r.a.createElement(
                            "tr",
                            null,
                            r.a.createElement(
                                "td",
                                {colSpan: "2"},
                                r.a.createElement(Ae, {
                                    approved: a.isAvailable(t)
                                }),
                                a.id.substr(0, 20 - 4 * o),
                                "..."
                            ),
                            r.a.createElement("td", null, n)
                        )
                    );
                },
                Ne = function e(t, a) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0;
                    return (
                        n > t ||
                        (!(!a.isNested() && !a.isMultiSig()) &&
                            a.accounts.some(function(a) {
                                return e(t, a, n + 1);
                            }))
                    );
                },
                Se = function(e, t, a) {
                    return (
                        e.accounts.reduce(function(e, n) {
                            return e + (je(n, t, a) ? n.weight : 0);
                        }, 0) +
                        e.keys.reduce(function(e, t) {
                            return e + (t.isAvailable(a) ? t.weight : 0);
                        }, 0)
                    );
                },
                je = function(e, t, a) {
                    return e.isNested() || e.isMultiSig()
                        ? Se(e, t, a) >= e.threshold
                        : e.isAvailable(t);
                },
                Pe = function(e, t, a) {
                    return e && e.threshold > 10
                        ? b.a.get_percentage(e.getStatus(t, a), e.threshold) +
                              " / 100%"
                        : e.getStatus(t, a) + " / " + e.threshold;
                },
                Ie = function(e, t) {
                    return t && t > 10 ? b.a.get_percentage(e, t) : e;
                },
                Te =
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
                Me = (function() {
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
            function Le(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function De(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Re(e, t) {
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
            var qe = (function(e) {
                function t(e) {
                    Le(this, t);
                    var a = De(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                    );
                    return (
                        (a.handleExpandToggle = function() {
                            a.setState({expanded: !a.state.expanded});
                        }),
                        (a.state = {expanded: !!e.expanded}),
                        a
                    );
                }
                return (
                    Re(t, r.a.Component),
                    Me(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.account,
                                    a = e.available,
                                    n = e.availableKeys,
                                    o = e.permission,
                                    i = e.threshold,
                                    s = e.level,
                                    l = e.maxAuthorityDepth,
                                    c = e.hideRoot,
                                    u = this.state.expanded,
                                    p = je(o, a, n),
                                    d = o.isNested(),
                                    h = o.isMultiSig(),
                                    m = Ie(o.weight, i) || 1,
                                    f = Pe(o, a, n),
                                    b = s >= l,
                                    g =
                                        d || h
                                            ? r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      {colSpan: "2"},
                                                      r.a.createElement(Ae, {
                                                          approved: p
                                                      }),
                                                      r.a.createElement(be.a, {
                                                          subpage:
                                                              "permissions",
                                                          account: t.get("id")
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      u
                                                          ? r.a.createElement(
                                                                "span",
                                                                {
                                                                    className: p
                                                                        ? "success-text"
                                                                        : ""
                                                                },
                                                                m
                                                            )
                                                          : m &&
                                                            (m && 2 === m.length
                                                                ? "  "
                                                                : "") +
                                                                m +
                                                                " ",
                                                      r.a.createElement(Oe, {
                                                          onToggle: this
                                                              .handleExpandToggle,
                                                          expanded: u
                                                      }),
                                                      u &&
                                                          r.a.createElement(
                                                              "span",
                                                              {
                                                                  className:
                                                                      "appended"
                                                              },
                                                              "(",
                                                              f,
                                                              ")"
                                                          ),
                                                      b
                                                          ? r.a.createElement(
                                                                _e,
                                                                null
                                                            )
                                                          : Ne(l, o, s) &&
                                                            !u &&
                                                            r.a.createElement(
                                                                Ee,
                                                                null
                                                            )
                                                  )
                                              )
                                            : r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      {colSpan: "2"},
                                                      r.a.createElement(Ae, {
                                                          approved: p
                                                      }),
                                                      r.a.createElement(be.a, {
                                                          subpage:
                                                              "permissions",
                                                          account: t.get("id")
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "td",
                                                      null,
                                                      !d && m
                                                          ? (m && 2 === m.length
                                                                ? "  "
                                                                : "") +
                                                            m +
                                                            " "
                                                          : null
                                                  )
                                              ),
                                    v = [];
                                return (
                                    (d || h) &&
                                        u &&
                                        (o.accounts.forEach(function(e) {
                                            v.push(
                                                r.a.createElement(Fe, {
                                                    key: e.id,
                                                    account: e.id,
                                                    accounts: e.accounts,
                                                    permission: e,
                                                    available: a,
                                                    availableKeys: n,
                                                    threshold: o.threshold,
                                                    level: s + 1,
                                                    maxAuthorityDepth: l
                                                })
                                            );
                                        }),
                                        o.keys.length &&
                                            o.keys.forEach(function(e) {
                                                return v.push(
                                                    r.a.createElement(Ce, {
                                                        key: e.id,
                                                        permission: e,
                                                        available: n,
                                                        level: s + (c ? 0 : 1),
                                                        weight: Ie(e.weight, i)
                                                    })
                                                );
                                            })),
                                    v.length > 0
                                        ? r.a.createElement(
                                              "tbody",
                                              null,
                                              c || g,
                                              r.a.createElement(
                                                  "tr",
                                                  null,
                                                  r.a.createElement(
                                                      "td",
                                                      {
                                                          colSpan: "3",
                                                          className:
                                                              "heading-perm"
                                                      },
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className: c
                                                                  ? ""
                                                                  : "table-container"
                                                          },
                                                          r.a.createElement(
                                                              "table",
                                                              null,
                                                              v
                                                          )
                                                      ),
                                                      u &&
                                                          0 === s &&
                                                          r.a.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "spacer"
                                                              }
                                                          )
                                                  )
                                              )
                                          )
                                        : r.a.createElement("tbody", null, g)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (qe.propTypes = {
                account: m.a.ChainAccount.isRequired,
                accounts: m.a.ChainAccountsList,
                level: Z.a.number.isRequired
            }),
                (qe.defaultProps = {level: 0});
            var Fe = Object(f.a)(qe),
                Ve = (function(e) {
                    function t(e) {
                        Le(this, t);
                        var a = De(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.handleExpandToggle = function() {
                                return a.setState({
                                    expanded: !a.state.expanded
                                });
                            }),
                            (a.state = {
                                requiredPermissions: [],
                                expanded: e.expanded
                            }),
                            (a._updateState = a._updateState.bind(a)),
                            a
                        );
                    }
                    return (
                        Re(t, r.a.Component),
                        Me(t, [
                            {
                                key: "componentWillMount",
                                value: function() {
                                    this._updateState(),
                                        E.b.subscribe(this._updateState);
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    E.b.unsubscribe(this._updateState);
                                }
                            },
                            {
                                key: "_updateState",
                                value: function() {
                                    var e = ge.listToIDs(this.props.required),
                                        t = ge.listToIDs(this.props.available);
                                    this.setState({
                                        requiredPermissions: ge.unnest(
                                            e,
                                            this.props.type
                                        ),
                                        required: e,
                                        available: t
                                    });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = (t.type, t.added),
                                        n = t.removed,
                                        o = t.availableKeys,
                                        i = t.globalObject,
                                        s = t.reviewPeriodTime,
                                        l = t.noFail,
                                        c = this.state,
                                        u = c.requiredPermissions,
                                        p = (c.required, c.available),
                                        d = c.expanded;
                                    (p = Object(fe.a)(p)),
                                        (o = o.toJS()),
                                        a && (p.push(a), o.push(a)),
                                        n &&
                                            (-1 !== p.indexOf(n) &&
                                                p.splice(p.indexOf(n), 1),
                                            -1 !== o.indexOf(n) &&
                                                o.splice(o.indexOf(n), 1));
                                    var h = u.reduce(function(e, t) {
                                            return e + (je(t, p, o) ? 1 : 0);
                                        }, 0),
                                        m = u.length,
                                        f = h === m,
                                        b = f && !s && !l,
                                        g = f && s,
                                        v = i
                                            .get("parameters")
                                            .get("max_authority_depth"),
                                        y = 1 === u.length,
                                        _ = y ? u[0] : null,
                                        E = !y && h + " / " + m,
                                        w = u.map(function(t) {
                                            return r.a.createElement(Fe, {
                                                key: t.id,
                                                account: t.id,
                                                accounts: t.accounts,
                                                permission: t,
                                                available: p,
                                                availableKeys: o,
                                                expanded: e.props.expanded || y,
                                                level: 0,
                                                maxAuthorityDepth: v,
                                                hideRoot: y
                                            });
                                        });
                                    return r.a.createElement(
                                        "div",
                                        {className: "nested-approval-state"},
                                        r.a.createElement(
                                            "div",
                                            {className: "root-status"},
                                            b
                                                ? r.a.createElement(xe, null)
                                                : g
                                                    ? r.a.createElement(
                                                          ke,
                                                          null
                                                      )
                                                    : r.a.createElement(
                                                          we,
                                                          null
                                                      ),
                                            " ",
                                            _
                                                ? _.threshold > 1 && Pe(_, p, o)
                                                : r.a.createElement(
                                                      "span",
                                                      null,
                                                      "(",
                                                      E,
                                                      ")"
                                                  ),
                                            (!_ ||
                                                _.isMultiSig() ||
                                                _.isNested()) &&
                                                r.a.createElement(Oe, {
                                                    onToggle: this
                                                        .handleExpandToggle,
                                                    expanded: d
                                                }),
                                            !d &&
                                                u.some(function(e) {
                                                    return Ne(v, e, 0);
                                                }) &&
                                                r.a.createElement(Ee, null)
                                        ),
                                        d && r.a.createElement("table", null, w)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            (Ve.propTypes = {
                required: m.a.ChainAccountsList,
                available: m.a.ChainAccountsList
            }),
                (Ve.defaultProps = {
                    type: "active",
                    added: null,
                    removed: null
                }),
                (Ve = Object(f.a)(Ve));
            var He = (function(e) {
                function t() {
                    return (
                        Le(this, t),
                        De(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    Re(t, r.a.Component),
                    Me(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.proposal,
                                    a = e.type,
                                    n = t.get("available_" + a + "_approvals"),
                                    o = t.get("available_key_approvals"),
                                    i = t.get("required_" + a + "_approvals");
                                return r.a.createElement(
                                    Ve,
                                    Te({}, this.props, {
                                        required: i,
                                        available: n,
                                        availableKeys: o,
                                        reviewPeriodTime: t.get(
                                            "review_period_time"
                                        )
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (He.propTypes = {
                proposal: m.a.ChainObject.isRequired,
                type: Z.a.string.isRequired,
                globalObject: m.a.ChainObject.isRequired
            }),
                (He.defaultProps = {
                    type: "active",
                    added: null,
                    globalObject: "2.0.0"
                });
            var We = Object(f.a)(He),
                Be =
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
                Ue = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var a = [],
                                    n = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var i, s = e[Symbol.iterator]();
                                        !(n = (i = s.next()).done) &&
                                        (a.push(i.value), !t || a.length !== t);
                                        n = !0
                                    );
                                } catch (e) {
                                    (r = !0), (o = e);
                                } finally {
                                    try {
                                        !n && s.return && s.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                ze = (function() {
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
            function Ke(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Ge(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Je(e, t) {
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
            var Xe = function(e, t, a) {
                    var n = [];
                    e.forEach(function(e) {
                        n = n.concat(e.getMissingSigs(t));
                    });
                    var r = [];
                    return (
                        e.forEach(function(e) {
                            r = r.concat(e.getMissingKeys(a));
                        }),
                        [n, r]
                    );
                },
                Ye = (function(e) {
                    function t(e) {
                        Ke(this, t);
                        var a = Ge(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (a.state = {
                                active: null,
                                key: null,
                                owner: null,
                                payee: null
                            }),
                            a
                        );
                    }
                    return (
                        Je(t, r.a.Component),
                        ze(t, [
                            {
                                key: "onActiveAccount",
                                value: function(e, t, a, n) {
                                    var r = {};
                                    t[n]
                                        ? ((r.key = n), (r[a] = null))
                                        : n
                                            ? ((r[a] = e[n]), (r.key = null))
                                            : ((r[a] = null), (r.key = null)),
                                        this.setState(r);
                                }
                            },
                            {
                                key: "_onProposalAction",
                                value: function(e) {
                                    var t = this,
                                        a = e.toJS(),
                                        n = this.state,
                                        r = n.active,
                                        o = (n.key,
                                        n.owner,
                                        {
                                            fee_paying_account: n.payee || r,
                                            proposal: a.id,
                                            active_approvals_to_add: [],
                                            active_approvals_to_remove: [],
                                            owner_approvals_to_add: [],
                                            owner_approvals_to_remove: [],
                                            key_approvals_to_add: [],
                                            key_approvals_to_remove: []
                                        }),
                                        i = "approve" === this.props.action,
                                        s = [];
                                    ["active", "owner", "key"].forEach(function(
                                        e
                                    ) {
                                        var n = t.state[e];
                                        if (n) {
                                            var r =
                                                -1 !==
                                                a[
                                                    "available_" +
                                                        e +
                                                        "_approvals"
                                                ].indexOf(n);
                                            ((i && !r) || (!i && r)) &&
                                                ("approve" === t.props.action
                                                    ? ((o[
                                                          e +
                                                              "_approvals_to_add"
                                                      ] = [n]),
                                                      "key" === e && s.push(n))
                                                    : "reject" ===
                                                          t.props.action &&
                                                      ((o[
                                                          e +
                                                              "_approvals_to_remove"
                                                      ] = [n]),
                                                      "key" === e &&
                                                          s.push(n)));
                                        }
                                    });
                                    var l = g.a.new_transaction();
                                    l.add_type_operation("proposal_update", o),
                                        v.a.process_transaction(l, null, !0, s),
                                        d.a.publish(
                                            this.props.modalId,
                                            "close"
                                        );
                                }
                            },
                            {
                                key: "onChangePayee",
                                value: function(e) {
                                    var t = E.b.getAccount(e);
                                    t && this.setState({payee: t.get("id")});
                                }
                            },
                            {
                                key: "onCancel",
                                value: function() {
                                    d.a.publish(this.props.modalId, "close");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.proposal,
                                        a = e.type,
                                        n = [],
                                        o = {},
                                        i = "approve" === this.props.action;
                                    this.props.accounts.length &&
                                        this.props.accounts.forEach(function(
                                            e
                                        ) {
                                            (i
                                                ? e &&
                                                  !t
                                                      .get(
                                                          "available_" +
                                                              a +
                                                              "_approvals"
                                                      )
                                                      .includes(e.get("id"))
                                                : e &&
                                                  t
                                                      .get(
                                                          "available_" +
                                                              a +
                                                              "_approvals"
                                                      )
                                                      .includes(e.get("id"))) &&
                                                ((o[e.get("name")] = e.get(
                                                    "id"
                                                )),
                                                n.push(e.get("name")));
                                        });
                                    var s = [],
                                        c = {};
                                    this.props.keys.length &&
                                        this.props.keys.forEach(function(e) {
                                            var a = me.a.isMyKey(e),
                                                n = t
                                                    .get(
                                                        "available_key_approvals"
                                                    )
                                                    .includes(e);
                                            ((a && i && !n) ||
                                                (a && !i && n)) &&
                                                ((c[e] = !0), s.push(e));
                                        });
                                    var u = me.a.getMyAccounts();
                                    return r.a.createElement(
                                        "form",
                                        {
                                            className:
                                                "grid-block vertical full-width-content"
                                        },
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-container"},
                                            r.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                r.a.createElement(
                                                    "h4",
                                                    null,
                                                    i
                                                        ? "Add approval"
                                                        : "Remove approval"
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className: "content-block",
                                                    style: {paddingRight: "20%"}
                                                },
                                                r.a.createElement(We, {
                                                    expanded: !0,
                                                    proposal: t.get("id"),
                                                    type: a,
                                                    added: i
                                                        ? this.state.key
                                                            ? this.state.key
                                                            : this.state[a] ||
                                                              null
                                                        : null,
                                                    removed: i
                                                        ? null
                                                        : this.state.key
                                                            ? this.state.key
                                                            : this.state[a] ||
                                                              null,
                                                    noFail: !0
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block full-width-content"
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "full-width-content form-group"
                                                    },
                                                    r.a.createElement(l.a, {
                                                        content:
                                                            "modal.proposals.pay_with",
                                                        component: "label"
                                                    }),
                                                    r.a.createElement(he.a, {
                                                        account_names: u,
                                                        onChange: this.onChangePayee.bind(
                                                            this
                                                        )
                                                    })
                                                ),
                                                n.length || s.length
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "full-width-content form-group"
                                                          },
                                                          r.a.createElement(
                                                              l.a,
                                                              {
                                                                  content:
                                                                      "modal.proposals.approval_" +
                                                                      (i
                                                                          ? "add"
                                                                          : "remove"),
                                                                  component:
                                                                      "label"
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              he.a,
                                                              {
                                                                  account_names: n.concat(
                                                                      s
                                                                  ),
                                                                  onChange: this.onActiveAccount.bind(
                                                                      this,
                                                                      o,
                                                                      c,
                                                                      a
                                                                  )
                                                              }
                                                          )
                                                      )
                                                    : null,
                                                null
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {className: "content-block"},
                                                r.a.createElement("input", {
                                                    type: "submit",
                                                    className: "button",
                                                    onClick: this._onProposalAction.bind(
                                                        this,
                                                        t
                                                    ),
                                                    value: i
                                                        ? "Approve"
                                                        : "Remove"
                                                }),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        onClick: this.onCancel.bind(
                                                            this
                                                        ),
                                                        className: " button"
                                                    },
                                                    r.a.createElement(l.a, {
                                                        content:
                                                            "account.perm.cancel"
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
            (Ye.propTypes = {accounts: m.a.ChainAccountsList}),
                (Ye = Object(f.a)(Ye));
            var Ze = (function(e) {
                function t() {
                    Ke(this, t);
                    var e = Ge(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e._updateState = e._updateState.bind(e)), e;
                }
                return (
                    Je(t, r.a.Component),
                    ze(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._updateState(),
                                    E.b.subscribe(this._updateState);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                E.b.unsubscribe(this._updateState);
                            }
                        },
                        {
                            key: "_updateState",
                            value: function() {
                                var e = this.props,
                                    t = e.proposal,
                                    a = (e.account,
                                    t.get("required_active_approvals").size
                                        ? "active"
                                        : "owner"),
                                    n = ge.listToIDs(
                                        t.get("required_" + a + "_approvals")
                                    ),
                                    r = ge.listToIDs(
                                        t.get("available_" + a + "_approvals")
                                    ),
                                    o = ge.listToIDs(
                                        t.get("available_key_approvals")
                                    );
                                this.setState({
                                    requiredPermissions: ge.unnest(n, a),
                                    available: r,
                                    availableKeys: o,
                                    type: a
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.action,
                                    t = this.state,
                                    a = t.requiredPermissions,
                                    n = t.available,
                                    o = t.availableKeys,
                                    i = t.type,
                                    s = Xe(a, n, o),
                                    l = Ue(s, 2),
                                    c = l[0],
                                    u = l[1];
                                return r.a.createElement(
                                    Ye,
                                    Be({}, this.props, {
                                        type: i,
                                        accounts: "approve" === e ? c : n,
                                        keys: "approve" === e ? u : o
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Ze.propTypes = {
                account: m.a.ChainAccount.isRequired,
                proposal: m.a.ChainObject.isRequired
            }),
                (Ze = Object(f.a)(Ze));
            var Qe = (function(e) {
                    function t() {
                        Ke(this, t);
                        var e = Ge(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {open: !1}), e;
                    }
                    return (
                        Je(t, r.a.Component),
                        ze(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = this;
                                    d.a.subscribe(this.props.modalId, function(
                                        t,
                                        a
                                    ) {
                                        e.setState({open: "open" === a});
                                    });
                                }
                            },
                            {
                                key: "show",
                                value: function() {
                                    d.a.publish(this.props.modalId, "open");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.modalId;
                                    e.proposal;
                                    return r.a.createElement(
                                        h.a,
                                        {id: t, overlay: !0, ref: t},
                                        this.state.open
                                            ? r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "grid-block vertical"
                                                  },
                                                  r.a.createElement(
                                                      Ze,
                                                      this.props
                                                  )
                                              )
                                            : null
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                $e = (function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function(e, t) {
                                var a = [],
                                    n = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (
                                        var i, s = e[Symbol.iterator]();
                                        !(n = (i = s.next()).done) &&
                                        (a.push(i.value), !t || a.length !== t);
                                        n = !0
                                    );
                                } catch (e) {
                                    (r = !0), (o = e);
                                } finally {
                                    try {
                                        !n && s.return && s.return();
                                    } finally {
                                        if (r) throw o;
                                    }
                                }
                                return a;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    };
                })(),
                et = (function() {
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
            var tt = (function(e) {
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
                    return (e.forceUpdate = e.forceUpdate.bind(e)), e;
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
                    })(t, n["Component"]),
                    et(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                E.b.subscribe(this.forceUpdate);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                E.b.unsubscribe(this.forceUpdate);
                            }
                        },
                        {
                            key: "_onApproveModal",
                            value: function(e, t) {
                                this.refs[e + "_" + t] &&
                                    this.refs[e + "_" + t].show();
                            }
                        },
                        {
                            key: "_canReject",
                            value: function(e) {
                                return (
                                    e.available_active_approvals.length ||
                                    e.available_owner_approvals.length ||
                                    e.available_key_approvals.length
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props.account;
                                if (!t) return null;
                                var a = [];
                                t.get("proposals").size &&
                                    t.get("proposals").forEach(function(e) {
                                        var n = E.b.getObject(e);
                                        if (n) {
                                            var r = n
                                                .get("proposed_transaction")
                                                .get("operations");
                                            a.push({
                                                operations: r,
                                                account: t,
                                                proposal: n
                                            });
                                        }
                                    });
                                var n = a
                                    .sort(function(e, t) {
                                        return b.a.sortID(
                                            e.proposal.get("id"),
                                            t.proposal.get("id"),
                                            !0
                                        );
                                    })
                                    .reduce(function(t, a, n) {
                                        var o = !1,
                                            i = a.proposal.get("id"),
                                            s = a.proposal.get(
                                                "expiration_time"
                                            ),
                                            c = a.operations
                                                .map(function(e, t) {
                                                    return (
                                                        "1.2.153124" ===
                                                            e.getIn([
                                                                1,
                                                                "to"
                                                            ]) && (o = !0),
                                                        r.a.createElement(
                                                            de.b,
                                                            {
                                                                key:
                                                                    a.proposal.get(
                                                                        "id"
                                                                    ) +
                                                                    "_operation_" +
                                                                    t,
                                                                expiration: s,
                                                                index: t,
                                                                op: e.toJS(),
                                                                inverted: !1,
                                                                hideFee: !0,
                                                                hideOpLabel: !0,
                                                                hideExpiration: !0,
                                                                hideDate: !0,
                                                                proposal: !0,
                                                                id: i
                                                            }
                                                        )
                                                    );
                                                })
                                                .toArray(),
                                            u = e._canReject(a.proposal.toJS()),
                                            p = a.proposal.get("id"),
                                            d = a.proposal.get(
                                                "required_active_approvals"
                                            ).size
                                                ? "active"
                                                : "owner";
                                        t.push(
                                            r.a.createElement(
                                                "tr",
                                                {key: p + "_id"},
                                                r.a.createElement(
                                                    "td",
                                                    {
                                                        colSpan: "4",
                                                        className:
                                                            "proposal" +
                                                            (0 === n
                                                                ? " first"
                                                                : "")
                                                    },
                                                    r.a.createElement(de.a, {
                                                        id: i,
                                                        expiration: s
                                                    })
                                                )
                                            )
                                        );
                                        var h = ge.listToIDs(
                                                a.proposal.get(
                                                    "available_" +
                                                        d +
                                                        "_approvals"
                                                )
                                            ),
                                            m = ge.listToIDs(
                                                a.proposal.get(
                                                    "available_key_approvals"
                                                )
                                            ),
                                            f = ge.listToIDs(
                                                a.proposal.get(
                                                    "required_" +
                                                        d +
                                                        "_approvals"
                                                )
                                            ),
                                            b = ge.unnest(f, d),
                                            g = Xe(b, h, m),
                                            v = $e(g, 2),
                                            y = v[0],
                                            E = v[1],
                                            w = [];
                                        y.length &&
                                            y.forEach(function(e) {
                                                e &&
                                                    !a.proposal
                                                        .get(
                                                            "available_" +
                                                                d +
                                                                "_approvals"
                                                        )
                                                        .includes(e) &&
                                                    w.push(e);
                                            });
                                        var k = [];
                                        E.length &&
                                            E.forEach(function(e) {
                                                me.a.isMyKey(e) &&
                                                    !a.proposal
                                                        .get(
                                                            "available_key_approvals"
                                                        )
                                                        .includes(e) &&
                                                    k.push(e);
                                            });
                                        var x = w.length + k.length > 0;
                                        return (
                                            t.push(
                                                r.a.createElement(
                                                    "tr",
                                                    {
                                                        className:
                                                            "top-left-align",
                                                        key: p + "_content"
                                                    },
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        c
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        b.map(function(e, t) {
                                                            return r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "list-item",
                                                                    key:
                                                                        p +
                                                                        "_approver_" +
                                                                        t
                                                                },
                                                                r.a.createElement(
                                                                    be.a,
                                                                    {
                                                                        subpage:
                                                                            "permissions",
                                                                        account:
                                                                            e.id
                                                                    }
                                                                )
                                                            );
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        r.a.createElement(We, {
                                                            proposal: a.proposal.get(
                                                                "id"
                                                            ),
                                                            type: d
                                                        })
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "approval-buttons"
                                                        },
                                                        o
                                                            ? r.a.createElement(
                                                                  "div",
                                                                  {
                                                                      "data-tip": _.a.translate(
                                                                          "tooltip.propose_scam"
                                                                      ),
                                                                      className:
                                                                          "tooltip has-error scam-error"
                                                                  },
                                                                  "SCAM"
                                                              )
                                                            : r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      onClick: x
                                                                          ? e._onApproveModal.bind(
                                                                                e,
                                                                                p,
                                                                                "approve"
                                                                            )
                                                                          : function() {},
                                                                      className:
                                                                          "button primary hollow" +
                                                                          (x
                                                                              ? ""
                                                                              : " hidden")
                                                                  },
                                                                  r.a.createElement(
                                                                      "span",
                                                                      null,
                                                                      r.a.createElement(
                                                                          l.a,
                                                                          {
                                                                              content:
                                                                                  "proposal.approve"
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                        r.a.createElement(Qe, {
                                                            ref: p + "_approve",
                                                            modalId:
                                                                p + "_approve",
                                                            account: a.account.get(
                                                                "id"
                                                            ),
                                                            proposal: p,
                                                            action: "approve"
                                                        }),
                                                        u
                                                            ? r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      onClick: e._onApproveModal.bind(
                                                                          e,
                                                                          p,
                                                                          "reject"
                                                                      ),
                                                                      className:
                                                                          "button primary hollow"
                                                                  },
                                                                  r.a.createElement(
                                                                      l.a,
                                                                      {
                                                                          content:
                                                                              "proposal.reject"
                                                                      }
                                                                  )
                                                              )
                                                            : null,
                                                        r.a.createElement(Qe, {
                                                            ref: p + "_reject",
                                                            modalId:
                                                                p + "_reject",
                                                            account: a.account.get(
                                                                "id"
                                                            ),
                                                            proposal: p,
                                                            action: "reject"
                                                        })
                                                    )
                                                )
                                            ),
                                            t.push(
                                                r.a.createElement(
                                                    "tr",
                                                    {key: p + "_separator"},
                                                    r.a.createElement(
                                                        "td",
                                                        {colSpan: "4"},
                                                        r.a.createElement(
                                                            "hr",
                                                            null
                                                        )
                                                    )
                                                )
                                            ),
                                            t
                                        );
                                    }, []);
                                return r.a.createElement(
                                    "table",
                                    {
                                        className:
                                            "table proposals compact " +
                                            this.props.className
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
                                                r.a.createElement(l.a, {
                                                    content:
                                                        "proposal.proposals"
                                                })
                                            ),
                                            r.a.createElement(
                                                "th",
                                                null,
                                                r.a.createElement(l.a, {
                                                    content:
                                                        "proposal.approvers"
                                                })
                                            ),
                                            r.a.createElement(
                                                "th",
                                                null,
                                                r.a.createElement(l.a, {
                                                    content: "proposal.status"
                                                })
                                            ),
                                            r.a.createElement(
                                                "th",
                                                null,
                                                r.a.createElement(l.a, {
                                                    content: "proposal.action"
                                                })
                                            )
                                        )
                                    ),
                                    r.a.createElement("tbody", null, n)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            tt.propTypes = {account: m.a.ChainAccount.isRequired};
            var at = Object(f.a)(tt),
                nt = a(10),
                rt = a(48),
                ot = a(51),
                it = a.n(ot),
                st = a(8),
                lt = a(278),
                ct = a(42),
                ut =
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
            function dt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ht(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function mt(e, t) {
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
            var ft = (function(e) {
                function t() {
                    return (
                        dt(this, t),
                        ht(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    mt(t, lt["a"]),
                    pt(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, a) {
                                return (
                                    (function e(t, a, n) {
                                        null === t && (t = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(
                                            t,
                                            a
                                        );
                                        if (void 0 === r) {
                                            var o = Object.getPrototypeOf(t);
                                            return null === o
                                                ? void 0
                                                : e(o, a, n);
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        return void 0 !== i
                                            ? i.call(n)
                                            : void 0;
                                    })(
                                        t.prototype.__proto__ ||
                                            Object.getPrototypeOf(t.prototype),
                                        "shouldComponentUpdate",
                                        this
                                    ).call(this, e) ||
                                    e.base_amount !== this.props.base_amount ||
                                    e.quote_amount !==
                                        this.props.quote_amount ||
                                    e.decimals !== this.props.decimals ||
                                    !b.a.are_equal_shallow(
                                        e.pulsate,
                                        this.props.pulsate
                                    ) ||
                                    !b.a.are_equal_shallow(a, this.state)
                                );
                            }
                        },
                        {
                            key: "getFinalPrice",
                            value: function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0] &&
                                        arguments[0],
                                    t = this.props,
                                    a = t.coreAsset,
                                    n = t.fromAsset,
                                    r = t.toAsset,
                                    o = t.marketStats;
                                return ct.a.getFinalPrice(a, n, r, o, e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.toAsset,
                                    a = e.forceDirection,
                                    n = (function(e, t) {
                                        var a = {};
                                        for (var n in e)
                                            t.indexOf(n) >= 0 ||
                                                (Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    n
                                                ) &&
                                                    (a[n] = e[n]));
                                        return a;
                                    })(e, ["toAsset", "forceDirection"]),
                                    o = this.getFinalPrice();
                                return 1 === o
                                    ? r.a.createElement("span", null, "1.00")
                                    : o
                                        ? r.a.createElement(
                                              z.a,
                                              ut(
                                                  {
                                                      force_direction:
                                                          !!a &&
                                                          t.get("symbol"),
                                                      base_amount:
                                                          o.base.amount,
                                                      base_asset:
                                                          o.base.asset_id,
                                                      quote_amount:
                                                          o.quote.amount,
                                                      quote_asset:
                                                          o.quote.asset_id
                                                  },
                                                  n
                                              )
                                          )
                                        : r.a.createElement("span", null, "--");
                            }
                        }
                    ]),
                    t
                );
            })();
            (ft.defaultProps = {forceDirection: !0}),
                (ft = Object(j.a)(ft, {
                    propNames: ["toAsset", "fromAsset", "coreAsset"],
                    defaultProps: {toAsset: "1.3.0", coreAsset: "1.3.0"}
                }));
            var bt = (function(e) {
                    function t() {
                        return (
                            dt(this, t),
                            ht(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        mt(t, r.a.Component),
                        pt(t, [
                            {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    return r.a.createElement(
                                        it.a,
                                        {
                                            stores: [st.a, I.a],
                                            inject: {
                                                toAsset: function() {
                                                    return (
                                                        e.props.toAsset ||
                                                        st.a
                                                            .getState()
                                                            .settings.get(
                                                                "unit",
                                                                "1.3.0"
                                                            )
                                                    );
                                                },
                                                marketStats: function() {
                                                    return I.a.getState()
                                                        .allMarketStats;
                                                }
                                            }
                                        },
                                        r.a.createElement(
                                            ft,
                                            ut({}, this.props, {
                                                ref: this.props.refCallback
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                gt = a(107),
                vt = (a(250), a(449), a(450), a(105)),
                yt = a(334),
                _t = a(35),
                Et = a(18),
                wt = (function() {
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
            function kt(e, t, a) {
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
            var xt = (function(e) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (a.state = {selectedOrders: [], filterValue: ""}), a
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
                        wt(t, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = document.getElementById(
                                        "cancelAllOrders"
                                    );
                                    e &&
                                        e.addEventListener(
                                            "click",
                                            function() {
                                                var e = this._getFilteredOrders.call(
                                                    this
                                                );
                                                (e = e.toJS ? e.toJS() : e),
                                                    this.setState({
                                                        selectedOrders: e
                                                    }),
                                                    document
                                                        .querySelectorAll(
                                                            ".orderCancel"
                                                        )
                                                        .forEach(function(e) {
                                                            e.checked ||
                                                                (e.checked = !0);
                                                        });
                                            }.bind(this)
                                        );
                                }
                            },
                            {
                                key: "_getFilteredOrders",
                                value: function() {
                                    var e = this.state.filterValue;
                                    return (
                                        this.props.account.get("orders") || []
                                    ).filter(function(t) {
                                        var a = E.b.getObject(t).toJS(),
                                            n = E.b.getAsset(
                                                a.sell_price.base.asset_id
                                            ),
                                            r = E.b.getAsset(
                                                a.sell_price.quote.asset_id
                                            ),
                                            o = n.get("symbol").toLowerCase(),
                                            i = r.get("symbol").toLowerCase();
                                        return (
                                            o.indexOf(e) > -1 ||
                                            i.indexOf(e) > -1
                                        );
                                    });
                                }
                            },
                            {
                                key: "_cancelLimitOrder",
                                value: function(e, t) {
                                    t.preventDefault(),
                                        _t.a
                                            .cancelLimitOrder(
                                                this.props.account.get("id"),
                                                e,
                                                !1
                                            )
                                            .catch(function(e) {
                                                console.log(
                                                    "cancel order error:",
                                                    e
                                                );
                                            });
                                }
                            },
                            {
                                key: "_cancelLimitOrders",
                                value: function(e) {
                                    var t = this;
                                    _t.a
                                        .cancelLimitOrders(
                                            this.props.account.get("id"),
                                            this.state.selectedOrders
                                        )
                                        .then(function() {
                                            t.resetSelected();
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                "cancel orders error:",
                                                e
                                            );
                                        });
                                }
                            },
                            {
                                key: "onFlip",
                                value: function(e) {
                                    var t = {};
                                    (t[e] = !this.props.marketDirections.get(
                                        e
                                    )),
                                        nt.a.changeMarketDirection(t);
                                }
                            },
                            {
                                key: "onCheckCancel",
                                value: function(e, t) {
                                    var a = this.state.selectedOrders;
                                    if (t.target.checked)
                                        this.setState({
                                            selectedOrders: a.concat([e])
                                        });
                                    else {
                                        var n = a.indexOf(e);
                                        n > -1 &&
                                            this.setState({
                                                selectedOrders: a
                                                    .slice(0, n)
                                                    .concat(a.slice(n + 1))
                                            });
                                    }
                                }
                            },
                            {
                                key: "setFilterValue",
                                value: function(e) {
                                    this.setState({
                                        filterValue: e.target.value.toLowerCase()
                                    });
                                }
                            },
                            {
                                key: "resetSelected",
                                value: function() {
                                    this.setState({selectedOrders: []}),
                                        document
                                            .querySelectorAll(".orderCancel")
                                            .forEach(function(e) {
                                                e.checked && (e.checked = !1);
                                            });
                                }
                            },
                            {
                                key: "cancelSelected",
                                value: function() {
                                    this._cancelLimitOrders.call(this);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.account,
                                        n = t.marketDirections,
                                        o = this.state,
                                        i = o.filterValue,
                                        s = o.selectedOrders,
                                        c = _.a.translate(
                                            "account.perm.cancel"
                                        ),
                                        u = {},
                                        p = {};
                                    if (!a.get("orders")) return null;
                                    var d = a.get("orders"),
                                        h = d.size;
                                    i &&
                                        (d = this._getFilteredOrders.call(
                                            this
                                        )),
                                        d.forEach(function(t) {
                                            var a = E.b.getObject(t).toJS(),
                                                o = E.b.getAsset(
                                                    a.sell_price.base.asset_id
                                                ),
                                                i = E.b.getAsset(
                                                    a.sell_price.quote.asset_id
                                                );
                                            if (o && i) {
                                                var s,
                                                    l = (kt(
                                                        (s = {}),
                                                        o.get("id"),
                                                        {
                                                            precision: o.get(
                                                                "precision"
                                                            )
                                                        }
                                                    ),
                                                    kt(s, i.get("id"), {
                                                        precision: i.get(
                                                            "precision"
                                                        )
                                                    }),
                                                    s),
                                                    d = ct.a.getMarketName(o, i)
                                                        .marketName,
                                                    h = n.get(d);
                                                u[d] ||
                                                    (u[d] = h
                                                        ? {
                                                              base: {
                                                                  id: o.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: o.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: o.get(
                                                                      "precision"
                                                                  )
                                                              },
                                                              quote: {
                                                                  id: i.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: i.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: i.get(
                                                                      "precision"
                                                                  )
                                                              }
                                                          }
                                                        : {
                                                              base: {
                                                                  id: i.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: i.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: i.get(
                                                                      "precision"
                                                                  )
                                                              },
                                                              quote: {
                                                                  id: o.get(
                                                                      "id"
                                                                  ),
                                                                  symbol: o.get(
                                                                      "symbol"
                                                                  ),
                                                                  precision: o.get(
                                                                      "precision"
                                                                  )
                                                              }
                                                          });
                                                var m = new Et.d(
                                                        a,
                                                        l,
                                                        u[d].quote.id
                                                    ),
                                                    f = E.b.getAsset(
                                                        u[d].base.id
                                                    ),
                                                    b = E.b.getAsset(
                                                        u[d].quote.id
                                                    );
                                                p[d] || (p[d] = []),
                                                    p[d].push(
                                                        r.a.createElement(
                                                            yt.b,
                                                            {
                                                                ref:
                                                                    u[d].base
                                                                        .symbol,
                                                                key: a.id,
                                                                order: m,
                                                                base: f,
                                                                quote: b,
                                                                cancel_text: c,
                                                                showSymbols: !1,
                                                                invert: !0,
                                                                onCancel: e._cancelLimitOrder.bind(
                                                                    e,
                                                                    a.id
                                                                ),
                                                                price: m.getPrice(),
                                                                dashboard: !0,
                                                                isMyAccount:
                                                                    e.props
                                                                        .isMyAccount,
                                                                settings:
                                                                    e.props
                                                                        .settings,
                                                                onFlip: e.onFlip.bind(
                                                                    e,
                                                                    d
                                                                ),
                                                                onCheckCancel: e.onCheckCancel.bind(
                                                                    e,
                                                                    a.id
                                                                )
                                                            }
                                                        )
                                                    );
                                            }
                                        });
                                    var m = [];
                                    for (var f in p)
                                        p[f].length &&
                                            (m.push(
                                                r.a.createElement(
                                                    "tbody",
                                                    {key: f},
                                                    p[f].sort(function(e, t) {
                                                        return (
                                                            e.props.price -
                                                            t.props.price
                                                        );
                                                    })
                                                )
                                            ),
                                            0);
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "div",
                                            {className: "dashboard__actions"},
                                            r.a.createElement(
                                                "div",
                                                {className: "container-fluid"},
                                                r.a.createElement(
                                                    "div",
                                                    {className: "row"},
                                                    r.a.createElement(
                                                        "div",
                                                        {className: "col-lg-9"},
                                                        d && h
                                                            ? r.a.createElement(
                                                                  "input",
                                                                  {
                                                                      type:
                                                                          "text",
                                                                      placeholder: _.a.translate(
                                                                          "account.filter_orders"
                                                                      ),
                                                                      style: {
                                                                          display:
                                                                              "inline-block",
                                                                          maxWidth:
                                                                              "50%",
                                                                          marginRight:
                                                                              "1em",
                                                                          marginBottom:
                                                                              "0"
                                                                      },
                                                                      onChange: this.setFilterValue.bind(
                                                                          this
                                                                      )
                                                                  }
                                                              )
                                                            : null,
                                                        s.length
                                                            ? r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      className:
                                                                          "btn large inverted"
                                                                  },
                                                                  r.a.createElement(
                                                                      l.a,
                                                                      {
                                                                          content:
                                                                              "account.reset_orders",
                                                                          onClick: this.resetSelected.bind(
                                                                              this
                                                                          )
                                                                      }
                                                                  )
                                                              )
                                                            : null,
                                                        s.length
                                                            ? r.a.createElement(
                                                                  "button",
                                                                  {
                                                                      className:
                                                                          "btn large outline"
                                                                  },
                                                                  r.a.createElement(
                                                                      l.a,
                                                                      {
                                                                          content:
                                                                              "account.submit_orders",
                                                                          onClick: this.cancelSelected.bind(
                                                                              this
                                                                          )
                                                                      }
                                                                  )
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {className: "dashboard__adaptive"},
                                            r.a.createElement(
                                                "table",
                                                {
                                                    className:
                                                        "dashboard__table blue-bg with-borders"
                                                },
                                                r.a.createElement(yt.c, {
                                                    settings: this.props
                                                        .settings,
                                                    dashboard: !0,
                                                    isMyAccount: this.props
                                                        .isMyAccount
                                                }),
                                                m,
                                                this.props.children
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Ot = (xt = Object(P.connect)(xt, {
                    listenTo: function() {
                        return [st.a];
                    },
                    getProps: function() {
                        return {
                            marketDirections: st.a.getState().marketDirections
                        };
                    }
                })),
                At = (a(9), {}),
                Ct = 6e4;
            var Nt = a(390),
                St = a(220),
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
                Pt = (function() {
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
            function It(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            var Tt = (function(e) {
                function t() {
                    var e, a, n;
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    for (
                        var r = arguments.length, o = Array(r), i = 0;
                        i < r;
                        i++
                    )
                        o[i] = arguments[i];
                    return (
                        (a = n = It(
                            this,
                            (e =
                                t.__proto__ ||
                                Object.getPrototypeOf(t)).call.apply(
                                e,
                                [this].concat(o)
                            )
                        )),
                        (n.tick = function() {
                            var e = n.props,
                                t = e.onIcon,
                                a = e.offIcon,
                                r = (n.state || {}).name,
                                o = void 0 === r ? t : r;
                            n.setState({name: o === t ? a : t});
                        }),
                        It(n, a)
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
                    })(t, n["Component"]),
                    Pt(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                var e = this.props.duration;
                                this.interval = setInterval(this.tick, e);
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this.interval && clearInterval(this.interval);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.onIcon,
                                    a = e.rest,
                                    n = (this.state || {}).name,
                                    o = void 0 === n ? t : n,
                                    i = this.props.title;
                                return r.a.createElement(
                                    G.a,
                                    jt({name: o, title: i}, a)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            Tt.propTypes = {
                duration: Z.a.number.isRequired,
                offIcon: Z.a.string.isRequired,
                onIcon: Z.a.string.isRequired,
                title: Z.a.string.isRequired
            };
            var Mt = Tt,
                Lt = (a(251), a(131)),
                Dt = a.n(Lt),
                Rt = a(574),
                qt = a.n(Rt),
                Ft = a(575),
                Vt = a.n(Ft),
                Ht =
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
            function Bt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Ut(e, t) {
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
            qt()(Dt.a.Highcharts), Vt()(Dt.a.Highcharts);
            var Kt = (function(e) {
                function t() {
                    return (
                        Bt(this, t),
                        Ut(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    zt(t, r.a.Component),
                    Wt(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.balanceObjects,
                                    a = e.core_asset,
                                    n = e.marketStats,
                                    o = e.preferredAsset,
                                    i = null;
                                if (t && t.length > 0) {
                                    var s = 0;
                                    (i = t.forEach(function(e) {
                                        if (e) {
                                            var t =
                                                    "string" == typeof e
                                                        ? E.b.getObject(e)
                                                        : e,
                                                r = t.get("asset_type"),
                                                i = E.b.getAsset(r);
                                            if (i && o) {
                                                var l = Number(
                                                        t.get("balance")
                                                    ),
                                                    c = ct.a.convertValue(
                                                        l,
                                                        o,
                                                        i,
                                                        n,
                                                        a
                                                    );
                                                if (c) {
                                                    var u = b.a.get_asset_precision(
                                                        o.get("precision")
                                                    );
                                                    s += c / u;
                                                }
                                            }
                                        }
                                    })),
                                        (i = t
                                            .map(function(e, t) {
                                                if (!e) return null;
                                                var r =
                                                        "string" == typeof e
                                                            ? E.b.getObject(e)
                                                            : e,
                                                    i = r.get("asset_type"),
                                                    l = E.b.getAsset(i);
                                                if (!l) return null;
                                                var c = Number(
                                                        r.get("balance")
                                                    ),
                                                    u = ct.a.convertValue(
                                                        c,
                                                        o,
                                                        l,
                                                        n,
                                                        a
                                                    );
                                                if (!u) return null;
                                                var p =
                                                        u /
                                                        b.a.get_asset_precision(
                                                            o.get("precision")
                                                        ),
                                                    d = (p / s) * 100;
                                                return d < 0.5
                                                    ? null
                                                    : p >= 1
                                                        ? {
                                                              name:
                                                                  l.get(
                                                                      "symbol"
                                                                  ) +
                                                                  " (" +
                                                                  (0 === s
                                                                      ? 0
                                                                      : d.toFixed(
                                                                            2
                                                                        )) +
                                                                  "%)",
                                                              value: p,
                                                              color: Dt.a.Highcharts.getOptions()
                                                                  .colors[t]
                                                          }
                                                        : null;
                                            })
                                            .filter(function(e) {
                                                return !!e;
                                            }));
                                }
                                i &&
                                    1 === i.length &&
                                    0 === i[0].value &&
                                    (i = null);
                                var l = {
                                    chart: {
                                        backgroundColor: "rgba(255, 0, 0, 0)",
                                        height: 250,
                                        spacingLeft: 0,
                                        spacingRight: 0,
                                        spacingBottom: 0
                                    },
                                    credits: {enabled: !1},
                                    legend: {enabled: !1},
                                    plotOptions: {
                                        treemap: {
                                            animation: !1,
                                            tooltip: {
                                                pointFormatter: function() {
                                                    return (
                                                        "<b>" +
                                                        this.name +
                                                        "</b>: " +
                                                        Dt.a.Highcharts.numberFormat(
                                                            this.value,
                                                            0
                                                        ) +
                                                        " " +
                                                        o.get("symbol")
                                                    );
                                                }
                                            }
                                        }
                                    },
                                    series: [
                                        {
                                            type: "treemap",
                                            levels: [
                                                {
                                                    level: 1,
                                                    layoutAlgorithm:
                                                        "sliceAndDice",
                                                    dataLabels: {
                                                        enabled: !0,
                                                        align: "center",
                                                        verticalAlign: "middle"
                                                    }
                                                }
                                            ],
                                            data: i
                                        }
                                    ],
                                    title: {text: null}
                                };
                                return r.a.createElement(
                                    "div",
                                    {className: "account-treemap"},
                                    r.a.createElement(Dt.a, {config: l})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            (Kt.propTypes = {
                assets: m.a.ChainAssetsList,
                preferredAsset: m.a.ChainAsset.isRequired
            }),
                (Kt.defaultProps = {assets: [], preferredAsset: "1.3.0"}),
                (Kt = Object(f.a)(Kt));
            var Gt = (function(e) {
                function t() {
                    return (
                        Bt(this, t),
                        Ut(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    zt(t, r.a.Component),
                    Wt(t, [
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.balanceObjects
                                    .filter(function(e) {
                                        return !!e;
                                    })
                                    .map(function(e) {
                                        return e.get("asset_type");
                                    });
                                return r.a.createElement(
                                    Kt,
                                    Ht(
                                        {
                                            preferredAsset: this.props.settings.get(
                                                "unit",
                                                "1.3.0"
                                            ),
                                            assets: e
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
            (Gt.propTypes = {
                balanceObjects: m.a.ChainObjectsList,
                core_asset: m.a.ChainAsset.isRequired
            }),
                (Gt.defaultProps = {balanceObjects: [], core_asset: "1.3.0"}),
                (Gt = Object(f.a)(Gt));
            var Jt = (function(e) {
                    function t() {
                        return (
                            Bt(this, t),
                            Ut(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        zt(t, r.a.Component),
                        Wt(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        it.a,
                                        {
                                            stores: [st.a, I.a],
                                            inject: {
                                                marketStats: function() {
                                                    return I.a.getState()
                                                        .allMarketStats;
                                                },
                                                settings: function() {
                                                    return st.a.getState()
                                                        .settings;
                                                }
                                            }
                                        },
                                        r.a.createElement(
                                            Gt,
                                            Ht({}, this.props, {
                                                ref: this.props.refCallback
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Xt = a(103),
                Yt = a(357),
                Zt =
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
                Qt = (function() {
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
            function $t(e, t, a) {
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
            function ea(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function ta(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function aa(e, t) {
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
            var na = (function(e) {
                function t(e) {
                    ea(this, t);
                    var a = ta(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    for (var n in ((a.sortFunctions = {
                        qty: function(e, t, a) {
                            return Number(this.qtyRefs[e.key]) <
                                Number(this.qtyRefs[t.key])
                                ? this.state.sortDirection || a
                                    ? -1
                                    : 1
                                : Number(this.qtyRefs[e.key]) >
                                  Number(this.qtyRefs[t.key])
                                    ? this.state.sortDirection || a
                                        ? 1
                                        : -1
                                    : void 0;
                        },
                        alphabetic: function(e, t, a) {
                            return e.key > t.key
                                ? this.state.sortDirection || a
                                    ? 1
                                    : -1
                                : e.key < t.key
                                    ? this.state.sortDirection || a
                                        ? -1
                                        : 1
                                    : 0;
                        },
                        priceValue: function(e, t) {
                            var a = this.priceRefs[e.key],
                                n = this.priceRefs[t.key];
                            if (a && n) {
                                var r = a.getFinalPrice(!0),
                                    o = n.getFinalPrice(!0);
                                return null === r && null !== o
                                    ? 1
                                    : null !== r && null === o
                                        ? -1
                                        : null === r && null === o
                                            ? this.sortFunctions.alphabetic(
                                                  e,
                                                  t,
                                                  !0
                                              )
                                            : this.state.sortDirection
                                                ? r - o
                                                : o - r;
                            }
                        },
                        totalValue: function(e, t) {
                            var a = this.valueRefs[e.key],
                                n = this.valueRefs[t.key];
                            if (a && n) {
                                var r = a.getValue(),
                                    o = n.getValue();
                                return !r && o
                                    ? 1
                                    : r && !o
                                        ? -1
                                        : r || o
                                            ? this.state.sortDirection
                                                ? r - o
                                                : o - r
                                            : this.sortFunctions.alphabetic(
                                                  e,
                                                  t,
                                                  !0
                                              );
                            }
                        },
                        changeValue: function(e, t) {
                            var a = this.changeRefs[e.key],
                                n = this.changeRefs[t.key];
                            if (a && n) {
                                var r = a.getValue(),
                                    o = n.getValue(),
                                    i =
                                        "NaN" != parseFloat(r)
                                            ? parseFloat(r)
                                            : r,
                                    s =
                                        "NaN" != parseFloat(o)
                                            ? parseFloat(o)
                                            : o;
                                return void 0 === this.state.sortDirection ||
                                    this.state.sortDirection
                                    ? i - s
                                    : s - i;
                            }
                        }
                    }),
                    (a._renderBuy = function(e, t, n, o, i) {
                        return "LLC" === e && i <= 1e5
                            ? r.a.createElement(
                                  "span",
                                  null,
                                  r.a.createElement(
                                      "a",
                                      {
                                          onClick: a._showDepositWithdraw.bind(
                                              a,
                                              "bridge_modal",
                                              n,
                                              !1
                                          )
                                      },
                                      r.a.createElement(Mt, {
                                          onIcon: "dollar",
                                          offIcon: "dollar-green",
                                          title: "icons.dollar.buy",
                                          duration: 1e3,
                                          className: "icon-14px"
                                      })
                                  )
                              )
                            : t && a.props.isMyAccount
                                ? r.a.createElement(
                                      "span",
                                      null,
                                      r.a.createElement(
                                          "a",
                                          {
                                              onClick: a._showDepositWithdraw.bind(
                                                  a,
                                                  "bridge_modal",
                                                  n,
                                                  !1
                                              )
                                          },
                                          r.a.createElement(G.a, {
                                              name: "dollar",
                                              title: "icons.dollar.buy",
                                              className: "icon-14px"
                                          })
                                      )
                                  )
                                : o;
                    }),
                    (a.state = {
                        sortKey: e.viewSettings.get(
                            "portfolioSort",
                            "totalValue"
                        ),
                        sortDirection: e.viewSettings.get(
                            "portfolioSortDirection",
                            !0
                        ),
                        settleAsset: "1.3.0",
                        shownAssets: e.viewSettings.get(
                            "shownAssets",
                            "active"
                        ),
                        depositAsset: null,
                        withdrawAsset: null,
                        bridgeAsset: null,
                        alwaysShowAssets: ["LLC", "USD", "CNY"],
                        hide0balances: !1
                    }),
                    (a.qtyRefs = {}),
                    (a.priceRefs = {}),
                    (a.valueRefs = {}),
                    (a.changeRefs = {}),
                    a.sortFunctions))
                        a.sortFunctions[n] = a.sortFunctions[n].bind(a);
                    return (
                        (a._handleFilterInput = a._handleFilterInput.bind(a)), a
                    );
                }
                return (
                    aa(t, r.a.Component),
                    Qt(t, [
                        {
                            key: "_reserveButtonClick",
                            value: function(e, t) {
                                t.preventDefault(),
                                    this.setState({reserve: e}),
                                    d.a.publish("reserve_asset", "open");
                            }
                        },
                        {
                            key: "_reserveAsset",
                            value: function(e, t) {
                                t.preventDefault(),
                                    d.a.publish("reserve_asset", "close");
                                var a = this.state.issue,
                                    n = this.props.assets.get(a.asset_id);
                                (a.amount *= b.a.get_asset_precision(
                                    n.precision
                                )),
                                    AssetActions.issueAsset(e, a);
                            }
                        },
                        {
                            key: "_handleFilterInput",
                            value: function(e) {
                                e.preventDefault(),
                                    this.setState({
                                        filterValue: e.target.value
                                    });
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._checkMarginStatus();
                            }
                        },
                        {
                            key: "_checkMarginStatus",
                            value: function() {
                                var e = this;
                                (function(e) {
                                    if (
                                        !e ||
                                        (e && !e.get("call_orders", []).size)
                                    )
                                        return Promise.resolve(null);
                                    var t =
                                        e.get("name") +
                                        JSON.stringify(e.get("call_orders"));
                                    return At[t]
                                        ? At[t].result
                                            ? Promise.resolve(At[t].result)
                                            : new Promise(function(e, a) {
                                                  At[t].queue.push({
                                                      res: e,
                                                      rej: a
                                                  });
                                              })
                                        : new Promise(function(a, n) {
                                              (At[t] = {
                                                  queue: [{res: a, rej: n}],
                                                  result: null
                                              }),
                                                  Object(E.f)(
                                                      "getObject",
                                                      e
                                                          .get("call_orders")
                                                          .toArray()
                                                  )
                                                      .then(function(e) {
                                                          var a = [];
                                                          e.forEach(function(
                                                              e
                                                          ) {
                                                              var t = e.getIn([
                                                                      "call_price",
                                                                      "base",
                                                                      "asset_id"
                                                                  ]),
                                                                  n = e.getIn([
                                                                      "call_price",
                                                                      "quote",
                                                                      "asset_id"
                                                                  ]);
                                                              -1 ===
                                                                  a.indexOf(
                                                                      t
                                                                  ) &&
                                                                  a.push(t),
                                                                  -1 ===
                                                                      a.indexOf(
                                                                          n
                                                                      ) &&
                                                                      a.push(n);
                                                          }),
                                                              Object(E.f)(
                                                                  "getAsset",
                                                                  a,
                                                                  6e3
                                                              ).then(function(
                                                                  a
                                                              ) {
                                                                  var n = {};
                                                                  a.forEach(
                                                                      function(
                                                                          e
                                                                      ) {
                                                                          n[
                                                                              e.get(
                                                                                  "id"
                                                                              )
                                                                          ] = e.toJS();
                                                                      }
                                                                  );
                                                                  var r = {};
                                                                  e.forEach(
                                                                      function(
                                                                          e
                                                                      ) {
                                                                          var t =
                                                                                  n[
                                                                                      e.getIn(
                                                                                          [
                                                                                              "call_price",
                                                                                              "quote",
                                                                                              "asset_id"
                                                                                          ]
                                                                                      )
                                                                                  ],
                                                                              a =
                                                                                  n[
                                                                                      e.getIn(
                                                                                          [
                                                                                              "call_price",
                                                                                              "base",
                                                                                              "asset_id"
                                                                                          ]
                                                                                      )
                                                                                  ],
                                                                              o =
                                                                                  t
                                                                                      .bitasset
                                                                                      .current_feed
                                                                                      .settlement_price;
                                                                          if (
                                                                              o
                                                                                  .base
                                                                                  .asset_id ===
                                                                              o
                                                                                  .quote
                                                                                  .asset_id
                                                                          )
                                                                              r[
                                                                                  t.id
                                                                              ] = {
                                                                                  ratio: null
                                                                              };
                                                                          else {
                                                                              var i = new Et.a(
                                                                                      {
                                                                                          amount: e.get(
                                                                                              "collateral"
                                                                                          ),
                                                                                          asset_id:
                                                                                              a.id,
                                                                                          precision:
                                                                                              a.precision
                                                                                      }
                                                                                  ),
                                                                                  s = new Et.a(
                                                                                      {
                                                                                          amount: e.get(
                                                                                              "debt"
                                                                                          ),
                                                                                          asset_id:
                                                                                              t.id,
                                                                                          precision:
                                                                                              t.precision
                                                                                      }
                                                                                  ),
                                                                                  l =
                                                                                      t
                                                                                          .bitasset
                                                                                          .current_feed
                                                                                          .maintenance_collateral_ratio /
                                                                                      1e3,
                                                                                  c = new Et.c(
                                                                                      {
                                                                                          priceObject:
                                                                                              t
                                                                                                  .bitasset
                                                                                                  .current_feed
                                                                                                  .settlement_price,
                                                                                          market_base:
                                                                                              t
                                                                                                  .bitasset
                                                                                                  .current_feed
                                                                                                  .settlement_price
                                                                                                  .quote
                                                                                                  .asset_id,
                                                                                          sqr:
                                                                                              t
                                                                                                  .bitasset
                                                                                                  .current_feed
                                                                                                  .maximum_short_squeeze_ratio,
                                                                                          assets: n
                                                                                      }
                                                                                  ),
                                                                                  u = {
                                                                                      ratio:
                                                                                          i.getAmount(
                                                                                              {
                                                                                                  real: !0
                                                                                              }
                                                                                          ) /
                                                                                          (s.getAmount(
                                                                                              {
                                                                                                  real: !0
                                                                                              }
                                                                                          ) /
                                                                                              c.toReal())
                                                                                  };
                                                                              if (
                                                                                  isNaN(
                                                                                      u.ratio
                                                                                  )
                                                                              )
                                                                                  return null;
                                                                              u.ratio <
                                                                              l
                                                                                  ? (u.statusClass =
                                                                                        "danger")
                                                                                  : u.ratio <
                                                                                    l +
                                                                                        0.5
                                                                                      ? (u.statusClass =
                                                                                            "warning")
                                                                                      : (u.statusClass = null),
                                                                                  (r[
                                                                                      t.id
                                                                                  ] = u);
                                                                          }
                                                                      }
                                                                  ),
                                                                      At[
                                                                          t
                                                                      ].queue.forEach(
                                                                          function(
                                                                              e
                                                                          ) {
                                                                              e.res(
                                                                                  r
                                                                              );
                                                                          }
                                                                      ),
                                                                      (At[t] = {
                                                                          result: r
                                                                      }),
                                                                      setTimeout(
                                                                          function() {
                                                                              delete At[
                                                                                  t
                                                                              ];
                                                                          },
                                                                          Ct
                                                                      );
                                                              });
                                                      })
                                                      .catch(function() {
                                                          At[t].queue.forEach(
                                                              function(e) {
                                                                  e.rej();
                                                              }
                                                          );
                                                      });
                                          });
                                })(
                                    (arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.props
                                    ).account
                                ).then(function(t) {
                                    var a = null;
                                    for (var n in t) a = t[n].statusClass || a;
                                    e.setState({globalMarginStatus: a});
                                });
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                e.account !== this.props.account &&
                                    (this._checkMarginStatus(e),
                                    (this.priceRefs = {}),
                                    (this.valueRefs = {}),
                                    (this.changeRefs = {}),
                                    setTimeout(
                                        this.forceUpdate.bind(this),
                                        500
                                    ));
                            }
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function(e, t) {
                                return (
                                    !b.a.are_equal_shallow(
                                        e.backedCoins,
                                        this.props.backedCoins
                                    ) ||
                                    !b.a.are_equal_shallow(
                                        e.balances,
                                        this.props.balances
                                    ) ||
                                    e.account !== this.props.account ||
                                    e.settings !== this.props.settings ||
                                    e.hiddenAssets !==
                                        this.props.hiddenAssets ||
                                    !b.a.are_equal_shallow(t, this.state) ||
                                    this.state.filterValue !== t.filterValue
                                );
                            }
                        },
                        {
                            key: "_onSettleAsset",
                            value: function(e, t) {
                                t.preventDefault(),
                                    this.setState({settleAsset: e}),
                                    this.refs.settlement_modal.show();
                            }
                        },
                        {
                            key: "_hideAsset",
                            value: function(e, t) {
                                nt.a.hideAsset(e, t);
                            }
                        },
                        {
                            key: "_showDepositModal",
                            value: function(e, t) {
                                var a = this;
                                t.preventDefault(),
                                    this.setState(
                                        {depositAsset: e},
                                        function() {
                                            a.refs.deposit_modal_new.show();
                                        }
                                    );
                            }
                        },
                        {
                            key: "_showDepositWithdraw",
                            value: function(e, t, a, n) {
                                var r,
                                    o = this;
                                n.preventDefault(),
                                    this.setState(
                                        ($t(
                                            (r = {}),
                                            "bridge_modal" === e
                                                ? "bridgeAsset"
                                                : "deposit_modal" === e
                                                    ? "depositAsset"
                                                    : "withdrawAsset",
                                            t
                                        ),
                                        $t(r, "fiatModal", a),
                                        r),
                                        function() {
                                            o.refs[e].show();
                                        }
                                    );
                            }
                        },
                        {
                            key: "_getSeparator",
                            value: function(e) {
                                return e
                                    ? r.a.createElement("span", null, " | ")
                                    : null;
                            }
                        },
                        {
                            key: "_onNavigate",
                            value: function(e, t) {
                                t.preventDefault(), this.props.router.push(e);
                            }
                        },
                        {
                            key: "triggerSend",
                            value: function(e) {
                                var t = this;
                                this.setState({send_asset: e}, function() {
                                    t.send_modal && t.send_modal.show();
                                });
                            }
                        },
                        {
                            key: "_renderBalances",
                            value: function(e, t, a) {
                                var n = this,
                                    o = this.props.core_asset,
                                    i = this.props,
                                    s = i.settings,
                                    l = i.hiddenAssets,
                                    u = i.orders,
                                    p = s.get("unit") || o.get("symbol"),
                                    d = s.get("showAssetPercent", !1),
                                    h = function(e, t) {
                                        var a = e && e.has("bitasset_data_id"),
                                            o = "cp_modal_" + e.get("id");
                                        return {
                                            isBitAsset: a,
                                            borrowModal: a
                                                ? r.a.createElement(K.a, {
                                                      ref: o,
                                                      modalId:
                                                          "borrow_modal_" +
                                                          e.get("id"),
                                                      quote_asset: e.get("id"),
                                                      backing_asset: e.getIn([
                                                          "bitasset",
                                                          "options",
                                                          "short_backing_asset"
                                                      ]),
                                                      account: t
                                                  })
                                                : null,
                                            borrowLink: a
                                                ? r.a.createElement(
                                                      "a",
                                                      {
                                                          onClick: function() {
                                                              M.a.hide(),
                                                                  n.refs[
                                                                      o
                                                                  ].show();
                                                          }
                                                      },
                                                      r.a.createElement(G.a, {
                                                          name: "dollar",
                                                          title:
                                                              "icons.dollar.borrow",
                                                          className: "icon-14px"
                                                      })
                                                  )
                                                : null
                                        };
                                    },
                                    m = [];
                                return (
                                    e.forEach(function(e) {
                                        var t = E.b.getObject(e);
                                        if (t) {
                                            var a = t.get("asset_type"),
                                                i = E.b.getObject(a);
                                            if (i) {
                                                var s,
                                                    f,
                                                    g,
                                                    v = "",
                                                    y = i.get("symbol"),
                                                    w = "1.3.0" !== i.get("id"),
                                                    k = p !== o.get("symbol"),
                                                    x = rt.a.parseDescription(
                                                        i.getIn([
                                                            "options",
                                                            "description"
                                                        ])
                                                    ).market;
                                                -1 ===
                                                    (v = i.get(
                                                        "symbol"
                                                    )).indexOf("OPEN.") ||
                                                    x ||
                                                    (x = "USD");
                                                var O = x || p;
                                                w &&
                                                    O === v &&
                                                    (O = o.get("symbol")),
                                                    (s = w
                                                        ? r.a.createElement(
                                                              J.b,
                                                              {
                                                                  to:
                                                                      "/market/" +
                                                                      i.get(
                                                                          "symbol"
                                                                      ) +
                                                                      "_" +
                                                                      O
                                                              },
                                                              r.a.createElement(
                                                                  G.a,
                                                                  {
                                                                      name:
                                                                          "trade",
                                                                      title:
                                                                          "icons.trade.trade",
                                                                      className:
                                                                          "icon-14px"
                                                                  }
                                                              )
                                                          )
                                                        : k
                                                            ? r.a.createElement(
                                                                  J.b,
                                                                  {
                                                                      to:
                                                                          "/market/" +
                                                                          i.get(
                                                                              "symbol"
                                                                          ) +
                                                                          "_" +
                                                                          p
                                                                  },
                                                                  r.a.createElement(
                                                                      G.a,
                                                                      {
                                                                          name:
                                                                              "trade",
                                                                          title:
                                                                              "icons.trade.trade",
                                                                          className:
                                                                              "icon-14px"
                                                                      }
                                                                  )
                                                              )
                                                            : "-"),
                                                    (g = r.a.createElement(
                                                        "a",
                                                        {
                                                            onClick: n.triggerSend.bind(
                                                                n,
                                                                i.get("id")
                                                            )
                                                        },
                                                        r.a.createElement(G.a, {
                                                            name: "transfer",
                                                            title:
                                                                "icons.transfer",
                                                            className:
                                                                "icon-14px"
                                                        })
                                                    ));
                                                var A = h(i, n.props.account),
                                                    C = A.isBitAsset,
                                                    S = A.borrowModal,
                                                    j = A.borrowLink;
                                                f = r.a.createElement(
                                                    "a",
                                                    {
                                                        onClick: n._onSettleAsset.bind(
                                                            n,
                                                            i.get("id")
                                                        )
                                                    },
                                                    r.a.createElement(G.a, {
                                                        name: "settle",
                                                        title: "icons.settle",
                                                        className: "icon-14px"
                                                    })
                                                );
                                                var P = !l.includes(a),
                                                    I = !!t.get("balance"),
                                                    T = !!u[a],
                                                    M = Object(Xt.b)(
                                                        i.get("symbol"),
                                                        n.props.backedCoins
                                                    ),
                                                    L =
                                                        (M &&
                                                            M.depositAllowed) ||
                                                        "LLC" ==
                                                            i.get("symbol"),
                                                    D =
                                                        M &&
                                                        M.withdrawalAllowed &&
                                                        I &&
                                                        0 != t.get("balance"),
                                                    R = !!n.props.bridgeCoins.get(
                                                        v
                                                    ),
                                                    q = t.get("balance");
                                                (n.qtyRefs[
                                                    i.get("symbol")
                                                ] = b.a.get_asset_amount(q, i)),
                                                    m.push(
                                                        r.a.createElement(
                                                            "tr",
                                                            {
                                                                key: i.get(
                                                                    "symbol"
                                                                ),
                                                                style: {
                                                                    maxWidth:
                                                                        "100rem"
                                                                }
                                                            },
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "left"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    gt.a,
                                                                    {
                                                                        showIcon: !0,
                                                                        asset: i.get(
                                                                            "id"
                                                                        )
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    }
                                                                },
                                                                I || T
                                                                    ? r.a.createElement(
                                                                          c.a,
                                                                          {
                                                                              balance: e,
                                                                              hide_asset: !0
                                                                          }
                                                                      )
                                                                    : null
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    },
                                                                    className:
                                                                        "column-hide-small"
                                                                },
                                                                r.a.createElement(
                                                                    bt,
                                                                    {
                                                                        refCallback: function(
                                                                            e
                                                                        ) {
                                                                            e &&
                                                                                e
                                                                                    .refs
                                                                                    .bound_component &&
                                                                                (n.priceRefs[
                                                                                    i.get(
                                                                                        "symbol"
                                                                                    )
                                                                                ] =
                                                                                    e.refs.bound_component);
                                                                        },
                                                                        fromAsset: i.get(
                                                                            "id"
                                                                        ),
                                                                        pulsate: {
                                                                            reverse: !0,
                                                                            fill:
                                                                                "forwards"
                                                                        },
                                                                        hide_symbols: !0
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    },
                                                                    className:
                                                                        "column-hide-small"
                                                                },
                                                                r.a.createElement(
                                                                    W,
                                                                    {
                                                                        refCallback: function(
                                                                            e
                                                                        ) {
                                                                            e &&
                                                                                e
                                                                                    .refs
                                                                                    .bound_component &&
                                                                                (n.changeRefs[
                                                                                    i.get(
                                                                                        "symbol"
                                                                                    )
                                                                                ] =
                                                                                    e.refs.bound_component);
                                                                        },
                                                                        base: i.get(
                                                                            "id"
                                                                        ),
                                                                        quote: p,
                                                                        marketId:
                                                                            i.get(
                                                                                "symbol"
                                                                            ) +
                                                                            "_" +
                                                                            p,
                                                                        hide_symbols: !0
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "right"
                                                                    },
                                                                    className:
                                                                        "column-hide-small"
                                                                },
                                                                I || T
                                                                    ? r.a.createElement(
                                                                          N.a,
                                                                          {
                                                                              balance: e,
                                                                              toAsset: p,
                                                                              hide_asset: !0,
                                                                              refCallback: function(
                                                                                  e
                                                                              ) {
                                                                                  e &&
                                                                                      e
                                                                                          .refs
                                                                                          .bound_component &&
                                                                                      (n.valueRefs[
                                                                                          i.get(
                                                                                              "symbol"
                                                                                          )
                                                                                      ] =
                                                                                          e.refs.bound_component);
                                                                              }
                                                                          }
                                                                      )
                                                                    : null
                                                            ),
                                                            d
                                                                ? r.a.createElement(
                                                                      "td",
                                                                      {
                                                                          style: {
                                                                              textAlign:
                                                                                  "right"
                                                                          }
                                                                      },
                                                                      I
                                                                          ? r.a.createElement(
                                                                                c.a,
                                                                                {
                                                                                    balance: e,
                                                                                    asPercentage: !0
                                                                                }
                                                                            )
                                                                          : null
                                                                  )
                                                                : null,
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                g
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                n._renderBuy(
                                                                    i.get(
                                                                        "symbol"
                                                                    ),
                                                                    R,
                                                                    y,
                                                                    "-",
                                                                    t.get(
                                                                        "balance"
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                L &&
                                                                n.props
                                                                    .isMyAccount
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          r.a.createElement(
                                                                              G.a,
                                                                              {
                                                                                  style: {
                                                                                      cursor:
                                                                                          "pointer"
                                                                                  },
                                                                                  name:
                                                                                      "deposit",
                                                                                  title:
                                                                                      "icons.deposit.deposit",
                                                                                  className:
                                                                                      "icon-14x",
                                                                                  onClick: n._showDepositModal.bind(
                                                                                      n,
                                                                                      y
                                                                                  )
                                                                              }
                                                                          )
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                D &&
                                                                n.props
                                                                    .isMyAccount
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          null,
                                                                          r.a.createElement(
                                                                              "a",
                                                                              {
                                                                                  className: D
                                                                                      ? ""
                                                                                      : "disabled",
                                                                                  onClick: D
                                                                                      ? n._showDepositWithdraw.bind(
                                                                                            n,
                                                                                            "withdraw_modal_new",
                                                                                            y,
                                                                                            !1
                                                                                        )
                                                                                      : function() {}
                                                                              },
                                                                              r.a.createElement(
                                                                                  G.a,
                                                                                  {
                                                                                      name:
                                                                                          "withdraw",
                                                                                      title:
                                                                                          "icons.withdraw",
                                                                                      className:
                                                                                          "icon-14px"
                                                                                  }
                                                                              )
                                                                          )
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                s
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                C
                                                                    ? r.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "inline-block",
                                                                              "data-place":
                                                                                  "bottom",
                                                                              "data-tip": _.a.translate(
                                                                                  "tooltip.borrow",
                                                                                  {
                                                                                      asset: v
                                                                                  }
                                                                              )
                                                                          },
                                                                          j,
                                                                          S
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                null,
                                                                C
                                                                    ? r.a.createElement(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "inline-block",
                                                                              "data-place":
                                                                                  "bottom",
                                                                              "data-tip": _.a.translate(
                                                                                  "tooltip.settle",
                                                                                  {
                                                                                      asset: v
                                                                                  }
                                                                              )
                                                                          },
                                                                          f
                                                                      )
                                                                    : "-"
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "center"
                                                                    },
                                                                    className:
                                                                        "column-hide-small",
                                                                    "data-place":
                                                                        "bottom",
                                                                    "data-tip": _.a.translate(
                                                                        "tooltip.burn"
                                                                    ),
                                                                    onClick: n._reserveButtonClick.bind(
                                                                        n,
                                                                        i.get(
                                                                            "id"
                                                                        )
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        style: {
                                                                            marginRight: 0
                                                                        },
                                                                        className: P
                                                                            ? "order-cancel"
                                                                            : "action-plus"
                                                                    },
                                                                    r.a.createElement(
                                                                        "span",
                                                                        {
                                                                            className:
                                                                                "icon fire icon-14px"
                                                                        },
                                                                        r.a.createElement(
                                                                            "svg",
                                                                            {
                                                                                version:
                                                                                    "1.1",
                                                                                xmlns:
                                                                                    "http://www.w3.org/2000/svg",
                                                                                width:
                                                                                    "32",
                                                                                height:
                                                                                    "32",
                                                                                viewBox:
                                                                                    "0 0 32 32"
                                                                            },
                                                                            r.a.createElement(
                                                                                "path",
                                                                                {
                                                                                    d:
                                                                                        "M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z"
                                                                                }
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "td",
                                                                {
                                                                    style: {
                                                                        textAlign:
                                                                            "center"
                                                                    },
                                                                    className:
                                                                        "column-hide-small",
                                                                    "data-place":
                                                                        "bottom",
                                                                    "data-tip": _.a.translate(
                                                                        "tooltip." +
                                                                            (P
                                                                                ? "hide_asset"
                                                                                : "show_asset")
                                                                    ),
                                                                    onClick: n._hideAsset.bind(
                                                                        n,
                                                                        a,
                                                                        P
                                                                    )
                                                                },
                                                                r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        style: {
                                                                            marginRight: 0
                                                                        },
                                                                        className: P
                                                                            ? "order-cancel"
                                                                            : "action-plus"
                                                                    },
                                                                    r.a.createElement(
                                                                        G.a,
                                                                        {
                                                                            name: P
                                                                                ? "cross-circle"
                                                                                : "plus-circle",
                                                                            title: P
                                                                                ? "icons.cross_circle.hide_asset"
                                                                                : "icons.plus_circle.show_asset",
                                                                            className:
                                                                                "icon-14px"
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    );
                                            }
                                        }
                                    }),
                                    t &&
                                        t
                                            .filter(function(e) {
                                                var t = !1;
                                                n.props.backedCoins
                                                    .get("OPEN", [])
                                                    .forEach(function(a) {
                                                        a &&
                                                            a.symbol === e &&
                                                            (t = !0);
                                                    }),
                                                    n.props.bridgeCoins.get(
                                                        e
                                                    ) && (t = !0);
                                                var a = !0;
                                                return (
                                                    m.forEach(function(t) {
                                                        t.key === e && (a = !1);
                                                    }),
                                                    a && t
                                                );
                                            })
                                            .forEach(function(e) {
                                                var t = E.b.getAsset(e);
                                                if (t && n.props.isMyAccount) {
                                                    var i = !l.includes(
                                                            t.get("id")
                                                        ),
                                                        s = t
                                                            .get("symbol")
                                                            .split("."),
                                                        c =
                                                            !!n.props.backedCoins
                                                                .get("OPEN", [])
                                                                .find(function(
                                                                    e
                                                                ) {
                                                                    return (
                                                                        e.backingCoinType ===
                                                                        s[1]
                                                                    );
                                                                }) ||
                                                            !!n.props.backedCoins
                                                                .get(
                                                                    "RUDEX",
                                                                    []
                                                                )
                                                                .find(function(
                                                                    e
                                                                ) {
                                                                    return (
                                                                        e.backingCoin ===
                                                                        s[1]
                                                                    );
                                                                }) ||
                                                            "LLC" ==
                                                                t.get("symbol"),
                                                        u = !!n.props.bridgeCoins.get(
                                                            t.get("symbol")
                                                        ),
                                                        p =
                                                            "1.3.0" !==
                                                            t.get("id"),
                                                        d = rt.a.parseDescription(
                                                            t.getIn([
                                                                "options",
                                                                "description"
                                                            ])
                                                        ).market;
                                                    -1 ===
                                                        t
                                                            .get("symbol")
                                                            .indexOf("OPEN.") ||
                                                        d ||
                                                        (d = "USD");
                                                    var f =
                                                            d ||
                                                            (o
                                                                ? o.get(
                                                                      "symbol"
                                                                  )
                                                                : "LLC"),
                                                        b = p
                                                            ? r.a.createElement(
                                                                  J.b,
                                                                  {
                                                                      to:
                                                                          "/market/" +
                                                                          t.get(
                                                                              "symbol"
                                                                          ) +
                                                                          "_" +
                                                                          f
                                                                  },
                                                                  r.a.createElement(
                                                                      G.a,
                                                                      {
                                                                          name:
                                                                              "trade",
                                                                          title:
                                                                              "icons.trade.trade",
                                                                          className:
                                                                              "icon-14px"
                                                                      }
                                                                  )
                                                              )
                                                            : "-",
                                                        g = h(
                                                            t,
                                                            n.props.account
                                                        ),
                                                        v = g.isBitAsset,
                                                        y = g.borrowModal,
                                                        w = g.borrowLink;
                                                    ((i && a) || (!i && !a)) &&
                                                        m.push(
                                                            r.a.createElement(
                                                                "tr",
                                                                {
                                                                    key: t.get(
                                                                        "symbol"
                                                                    ),
                                                                    style: {
                                                                        maxWidth:
                                                                            "100rem"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "left"
                                                                        }
                                                                    },
                                                                    r.a.createElement(
                                                                        gt.a,
                                                                        {
                                                                            asset: t.get(
                                                                                "id"
                                                                            )
                                                                        }
                                                                    )
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "column-hide-small"
                                                                    },
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "column-hide-small"
                                                                    },
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        className:
                                                                            "column-hide-small"
                                                                    },
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "center"
                                                                        }
                                                                    },
                                                                    u &&
                                                                    n.props
                                                                        .isMyAccount
                                                                        ? r.a.createElement(
                                                                              "span",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  "a",
                                                                                  {
                                                                                      onClick: n._showDepositWithdraw.bind(
                                                                                          n,
                                                                                          "bridge_modal",
                                                                                          e,
                                                                                          !1
                                                                                      )
                                                                                  },
                                                                                  r.a.createElement(
                                                                                      G.a,
                                                                                      {
                                                                                          name:
                                                                                              "dollar",
                                                                                          title:
                                                                                              "icons.dollar.buy",
                                                                                          className:
                                                                                              "icon-14px"
                                                                                      }
                                                                                  )
                                                                              )
                                                                          )
                                                                        : "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    c &&
                                                                    n.props
                                                                        .isMyAccount
                                                                        ? r.a.createElement(
                                                                              "span",
                                                                              null,
                                                                              r.a.createElement(
                                                                                  G.a,
                                                                                  {
                                                                                      style: {
                                                                                          cursor:
                                                                                              "pointer"
                                                                                      },
                                                                                      name:
                                                                                          "deposit",
                                                                                      title:
                                                                                          "icons.deposit.deposit",
                                                                                      className:
                                                                                          "icon-14x",
                                                                                      onClick: n._showDepositModal.bind(
                                                                                          n,
                                                                                          t.get(
                                                                                              "symbol"
                                                                                          )
                                                                                      )
                                                                                  }
                                                                              )
                                                                          )
                                                                        : "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "center"
                                                                        }
                                                                    },
                                                                    b
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    v
                                                                        ? r.a.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "inline-block",
                                                                                  "data-place":
                                                                                      "bottom",
                                                                                  "data-tip": _.a.translate(
                                                                                      "tooltip.borrow",
                                                                                      {
                                                                                          asset: t.get(
                                                                                              "symbol"
                                                                                          )
                                                                                      }
                                                                                  )
                                                                              },
                                                                              w,
                                                                              y
                                                                          )
                                                                        : "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    "-"
                                                                ),
                                                                r.a.createElement(
                                                                    "td",
                                                                    {
                                                                        style: {
                                                                            textAlign:
                                                                                "center"
                                                                        },
                                                                        className:
                                                                            "column-hide-small",
                                                                        "data-place":
                                                                            "bottom",
                                                                        "data-tip": _.a.translate(
                                                                            "tooltip." +
                                                                                (i
                                                                                    ? "hide_asset"
                                                                                    : "show_asset")
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        "a",
                                                                        {
                                                                            style: {
                                                                                marginRight: 0
                                                                            },
                                                                            className: i
                                                                                ? "order-cancel"
                                                                                : "action-plus",
                                                                            onClick: n._hideAsset.bind(
                                                                                n,
                                                                                t.get(
                                                                                    "id"
                                                                                ),
                                                                                i
                                                                            )
                                                                        },
                                                                        r.a.createElement(
                                                                            G.a,
                                                                            {
                                                                                name: i
                                                                                    ? "cross-circle"
                                                                                    : "plus-circle",
                                                                                title: i
                                                                                    ? "icons.cross_circle.hide_asset"
                                                                                    : "icons.plus_circle.show_asset",
                                                                                className:
                                                                                    "icon-14px"
                                                                            }
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        );
                                                }
                                            }),
                                    m.sort(
                                        this.sortFunctions[this.state.sortKey]
                                    ),
                                    m
                                );
                            }
                        },
                        {
                            key: "_changeShownAssets",
                            value: function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : "active";
                                this.setState({shownAssets: e}),
                                    nt.a.changeViewSetting({shownAssets: e});
                            }
                        },
                        {
                            key: "_toggleSortOrder",
                            value: function(e) {
                                this.state.sortKey === e
                                    ? (nt.a.changeViewSetting({
                                          portfolioSortDirection: !this.state
                                              .sortDirection
                                      }),
                                      this.setState({
                                          sortDirection: !this.state
                                              .sortDirection
                                      }))
                                    : (nt.a.changeViewSetting({
                                          portfolioSort: e
                                      }),
                                      this.setState({
                                          sortDirection: !1,
                                          sortKey: e
                                      }));
                            }
                        },
                        {
                            key: "_renderRadioButton",
                            value: function(e, t) {
                                var a =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                return r.a.createElement(
                                    "label",
                                    {className: "radio"},
                                    r.a.createElement("input", {
                                        className: "radio__input",
                                        type: "radio",
                                        name: "dashboard-filters",
                                        onChange: t,
                                        checked: a
                                    }),
                                    r.a.createElement("span", {
                                        className: "radio__styled"
                                    }),
                                    r.a.createElement(
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
                                    t = this.props,
                                    a = t.account,
                                    n = t.hiddenAssets,
                                    o = t.settings,
                                    s = t.orders,
                                    c = this.state.shownAssets;
                                if (!a) return null;
                                var p = [],
                                    m = {},
                                    f = {};
                                a.toJS &&
                                    a.has("call_orders") &&
                                    (p = a.get("call_orders").toJS());
                                var g = void 0,
                                    v = void 0,
                                    y = a.get("balances"),
                                    w = i.a.List(),
                                    k = i.a.List();
                                (p.forEach(function(e) {
                                    var t = E.b.getObject(e);
                                    if (t) {
                                        var a = t.getIn([
                                            "call_price",
                                            "base",
                                            "asset_id"
                                        ]);
                                        m[a]
                                            ? (m[a] += parseInt(
                                                  t.get("collateral"),
                                                  10
                                              ))
                                            : (m[a] = parseInt(
                                                  t.get("collateral"),
                                                  10
                                              ));
                                        var n = t.getIn([
                                            "call_price",
                                            "quote",
                                            "asset_id"
                                        ]);
                                        f[n]
                                            ? (f[n] += parseInt(
                                                  t.get("debt"),
                                                  10
                                              ))
                                            : (f[n] = parseInt(
                                                  t.get("debt"),
                                                  10
                                              ));
                                    }
                                }),
                                y) &&
                                    ((y = y.filter(function(t, a) {
                                        var n = E.b.getObject(t);
                                        return (
                                            !(
                                                n &&
                                                !n.get("balance") &&
                                                !s[a]
                                            ) &&
                                            !(
                                                e.state.hide0balances &&
                                                n.get("balance") <= 0
                                            )
                                        );
                                    })).forEach(function(t, a) {
                                        var r = E.b.getAsset(a),
                                            o = "",
                                            i = "";
                                        e.state.filterValue &&
                                            ((i = e.state.filterValue
                                                ? String(
                                                      e.state.filterValue
                                                  ).toLowerCase()
                                                : ""),
                                            (o = r.get("symbol").toLowerCase()),
                                            b.a.replaceName(r).isBitAsset &&
                                                (o = "bit" + o));
                                        n.includes(a) && o.includes(i)
                                            ? (k = k.push(t))
                                            : o.includes(i) && (w = w.push(t));
                                    }),
                                    (g = this._renderBalances(
                                        w,
                                        this.state.filterValue
                                            ? null
                                            : this.state.alwaysShowAssets,
                                        !0
                                    )),
                                    (v = this._renderBalances(
                                        k,
                                        this.state.filterValue
                                            ? null
                                            : this.state.alwaysShowAsset
                                    )));
                                var x = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: k,
                                        hide_asset: !0
                                    }),
                                    O = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: w,
                                        hide_asset: !0
                                    }),
                                    A = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: i.a.List(),
                                        openOrders: s,
                                        hide_asset: !0
                                    }),
                                    C = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: i.a.List(),
                                        debt: f,
                                        collateral: m,
                                        hide_asset: !0
                                    }),
                                    N = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: i.a.List(),
                                        debt: f,
                                        hide_asset: !0
                                    }),
                                    S = r.a.createElement(u.a, {
                                        noTip: !0,
                                        balances: i.a.List(),
                                        collateral: m,
                                        hide_asset: !0
                                    }),
                                    j =
                                        o.get("unit") ||
                                        this.props.core_asset.get("symbol"),
                                    P = r.a.createElement(X.a, {
                                        noLink: !0,
                                        string: "account.total",
                                        keys: [
                                            {
                                                type: "asset",
                                                value: j,
                                                arg: "asset"
                                            }
                                        ]
                                    });
                                g.push(
                                    r.a.createElement(
                                        "tr",
                                        {
                                            key: "portfolio",
                                            className: "total-value"
                                        },
                                        r.a.createElement(
                                            "td",
                                            {
                                                colSpan: "2",
                                                style: {textAlign: "left"}
                                            },
                                            P
                                        ),
                                        r.a.createElement("td", {
                                            className: "column-hide-small"
                                        }),
                                        r.a.createElement("td", {
                                            className: "column-hide-small"
                                        }),
                                        r.a.createElement(
                                            "td",
                                            {style: {textAlign: "right"}},
                                            O
                                        ),
                                        r.a.createElement("td", {colSpan: "9"})
                                    )
                                ),
                                    v.push(
                                        r.a.createElement(
                                            "tr",
                                            {
                                                key: "portfolio",
                                                className: "total-value"
                                            },
                                            r.a.createElement(
                                                "td",
                                                {
                                                    colSpan: "2",
                                                    style: {textAlign: "left"}
                                                },
                                                P
                                            ),
                                            r.a.createElement("td", {
                                                className: "column-hide-small"
                                            }),
                                            r.a.createElement("td", {
                                                className: "column-hide-small"
                                            }),
                                            r.a.createElement(
                                                "td",
                                                {style: {textAlign: "right"}},
                                                x
                                            ),
                                            r.a.createElement("td", {
                                                colSpan: "9"
                                            })
                                        )
                                    );
                                var I = o.get("showAssetPercent", !1),
                                    T = (this.props.backedCoins
                                        .get("OPEN", [])
                                        .find(function(t) {
                                            return (
                                                t.symbol ===
                                                e.state.withdrawAsset
                                            );
                                        }),
                                    this.props.bridgeCoins.get(
                                        this.state.bridgeAsset
                                    ),
                                    [
                                        {
                                            title: "account.portfolio",
                                            subTitle: O,
                                            content: r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "dashboard__actions"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "container-fluid"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {className: "row"},
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-3 col-lg-6"
                                                                },
                                                                r.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "text",
                                                                        placeholder:
                                                                            "Filter",
                                                                        onChange: this
                                                                            ._handleFilterInput
                                                                    }
                                                                )
                                                            ),
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "col-xl-9 col-lg-12"
                                                                },
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "dashboard__actions__filters"
                                                                    },
                                                                    this._renderRadioButton(
                                                                        _.a.translate(
                                                                            "account.hide_hidden"
                                                                        ),
                                                                        "active" !=
                                                                        c
                                                                            ? this._changeShownAssets.bind(
                                                                                  this,
                                                                                  "active"
                                                                              )
                                                                            : function() {},
                                                                        !(
                                                                            "active" !=
                                                                            c
                                                                        )
                                                                    ),
                                                                    v.length
                                                                        ? this._renderRadioButton(
                                                                              _.a.translate(
                                                                                  "account.show_hidden"
                                                                              ),
                                                                              "hidden" !=
                                                                              c
                                                                                  ? this._changeShownAssets.bind(
                                                                                        this,
                                                                                        "hidden"
                                                                                    )
                                                                                  : function() {},
                                                                              !(
                                                                                  "hidden" !=
                                                                                  c
                                                                              )
                                                                          )
                                                                        : null,
                                                                    this._renderRadioButton(
                                                                        _.a.translate(
                                                                            "account.show_visual"
                                                                        ),
                                                                        "visual" !=
                                                                        c
                                                                            ? this._changeShownAssets.bind(
                                                                                  this,
                                                                                  "visual"
                                                                              )
                                                                            : function() {},
                                                                        !(
                                                                            "visual" !=
                                                                            c
                                                                        )
                                                                    ),
                                                                    r.a.createElement(
                                                                        "div",
                                                                        null,
                                                                        r.a.createElement(
                                                                            "label",
                                                                            {
                                                                                className:
                                                                                    "hide0balances"
                                                                            },
                                                                            r.a.createElement(
                                                                                "input",
                                                                                {
                                                                                    name:
                                                                                        "isGoing",
                                                                                    type:
                                                                                        "checkbox",
                                                                                    checked: this
                                                                                        .state
                                                                                        .hide0balances,
                                                                                    onChange: function(
                                                                                        t
                                                                                    ) {
                                                                                        return e.setState(
                                                                                            {
                                                                                                hide0balances: !e
                                                                                                    .state
                                                                                                    .hide0balances
                                                                                            }
                                                                                        );
                                                                                    }
                                                                                }
                                                                            ),
                                                                            r.a.createElement(
                                                                                "span",
                                                                                null
                                                                            ),
                                                                            r.a.createElement(
                                                                                "span",
                                                                                null,
                                                                                _.a.translate(
                                                                                    "exchange.hide"
                                                                                ),
                                                                                " 0 ",
                                                                                _.a.translate(
                                                                                    "transfer.balances"
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                r.a.createElement(St.a, {
                                                    id: "send_modal_portfolio",
                                                    refCallback: function(t) {
                                                        t && (e.send_modal = t);
                                                    },
                                                    from_name: this.props.account.get(
                                                        "name"
                                                    ),
                                                    asset_id:
                                                        this.state.send_asset ||
                                                        "1.3.0"
                                                }),
                                                "visual" != c
                                                    ? r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "dashboard__adaptive"
                                                          },
                                                          r.a.createElement(
                                                              "table",
                                                              {
                                                                  className:
                                                                      "dashboard__table blue-bg with-borders"
                                                              },
                                                              r.a.createElement(
                                                                  "thead",
                                                                  null,
                                                                  r.a.createElement(
                                                                      "tr",
                                                                      null,
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              style: {
                                                                                  textAlign:
                                                                                      "left"
                                                                              },
                                                                              className:
                                                                                  "clickable",
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "alphabetic"
                                                                              )
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  component:
                                                                                      "span",
                                                                                  content:
                                                                                      "account.asset"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "qty"
                                                                              ),
                                                                              className:
                                                                                  "clickable",
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.qty"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "priceValue"
                                                                              ),
                                                                              className:
                                                                                  "column-hide-small clickable",
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.price"
                                                                              }
                                                                          ),
                                                                          " (",
                                                                          r.a.createElement(
                                                                              B.a,
                                                                              {
                                                                                  name: j,
                                                                                  noTip: !0
                                                                              }
                                                                          ),
                                                                          ")"
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "changeValue"
                                                                              ),
                                                                              className:
                                                                                  "column-hide-small clickable",
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              }
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.hour_24_short"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              onClick: this._toggleSortOrder.bind(
                                                                                  this,
                                                                                  "totalValue"
                                                                              ),
                                                                              style: {
                                                                                  textAlign:
                                                                                      "right"
                                                                              },
                                                                              className:
                                                                                  "column-hide-small clickable"
                                                                          },
                                                                          r.a.createElement(
                                                                              X.a,
                                                                              {
                                                                                  noLink: !0,
                                                                                  string:
                                                                                      "account.eq_value_header",
                                                                                  keys: [
                                                                                      {
                                                                                          type:
                                                                                              "asset",
                                                                                          value: j,
                                                                                          arg:
                                                                                              "asset"
                                                                                      }
                                                                                  ],
                                                                                  noTip: !0
                                                                              }
                                                                          )
                                                                      ),
                                                                      I
                                                                          ? r.a.createElement(
                                                                                "th",
                                                                                {
                                                                                    style: {
                                                                                        textAlign:
                                                                                            "right"
                                                                                    }
                                                                                },
                                                                                r.a.createElement(
                                                                                    l.a,
                                                                                    {
                                                                                        component:
                                                                                            "span",
                                                                                        content:
                                                                                            "account.percent"
                                                                                    }
                                                                                )
                                                                            )
                                                                          : null,
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "header.payments"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.buy"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "modal.deposit.submit"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "modal.withdraw.submit"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.trade"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "exchange.borrow_short"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "account.settle"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          null,
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "modal.reserve.submit"
                                                                              }
                                                                          )
                                                                      ),
                                                                      r.a.createElement(
                                                                          "th",
                                                                          {
                                                                              className:
                                                                                  "column-hide-small"
                                                                          },
                                                                          r.a.createElement(
                                                                              l.a,
                                                                              {
                                                                                  content:
                                                                                      "active" ==
                                                                                      c
                                                                                          ? "exchange.hide"
                                                                                          : "account.perm.show"
                                                                              }
                                                                          )
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "tbody",
                                                                  null,
                                                                  "hidden" ==
                                                                      c &&
                                                                  v.length
                                                                      ? v
                                                                      : g
                                                              )
                                                          )
                                                      )
                                                    : r.a.createElement(Jt, {
                                                          balanceObjects: w
                                                      })
                                            )
                                        },
                                        {
                                            title: "account.open_orders",
                                            subTitle: A,
                                            content: r.a.createElement(
                                                Ot,
                                                this.props,
                                                r.a.createElement(
                                                    "tbody",
                                                    null,
                                                    r.a.createElement(
                                                        "tr",
                                                        {
                                                            className:
                                                                "total-value"
                                                        },
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                colSpan: "7",
                                                                style: {
                                                                    textAlign:
                                                                        "right"
                                                                }
                                                            },
                                                            P
                                                        ),
                                                        r.a.createElement(
                                                            "td",
                                                            {
                                                                colSpan: "2",
                                                                style: {
                                                                    textAlign:
                                                                        "left"
                                                                }
                                                            },
                                                            A
                                                        ),
                                                        this.props.isMyAccount
                                                            ? r.a.createElement(
                                                                  "td",
                                                                  null
                                                              )
                                                            : null
                                                    )
                                                )
                                            )
                                        },
                                        {
                                            title: "account.collaterals",
                                            subTitle: C,
                                            content: r.a.createElement(
                                                ue,
                                                {
                                                    preferredUnit: j,
                                                    className:
                                                        "dashboard-table blue-bg with-borders",
                                                    callOrders: p,
                                                    account: a
                                                },
                                                r.a.createElement(
                                                    "tr",
                                                    {className: "total-value"},
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        P
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        N
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "column-hide-medium"
                                                        },
                                                        S
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null
                                                    ),
                                                    r.a.createElement(
                                                        "td",
                                                        null,
                                                        C
                                                    ),
                                                    r.a.createElement("td", {
                                                        className:
                                                            "column-hide-small"
                                                    }),
                                                    r.a.createElement("td", {
                                                        className:
                                                            "column-hide-small"
                                                    }),
                                                    r.a.createElement("td", {
                                                        colSpan: "3"
                                                    })
                                                )
                                            )
                                        },
                                        {
                                            title: "account.activity",
                                            subTitle: "",
                                            content: r.a.createElement(pe.a, {
                                                accountsList: i.a.fromJS([
                                                    a.get("id")
                                                ]),
                                                compactView: !1,
                                                showMore: !0,
                                                fullHeight: !0,
                                                limit: 15,
                                                showFilters: !0,
                                                dashboard: !0
                                            })
                                        },
                                        {
                                            title:
                                                "account.proposed_transactions",
                                            subTitle: "",
                                            content: r.a.createElement(at, {
                                                className: "dashboard-table",
                                                account: a.get("id")
                                            })
                                        }
                                    ]);
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(vt.a, {
                                        items: T,
                                        inner: !0
                                    }),
                                    r.a.createElement(
                                        h.a,
                                        {id: "reserve_asset", overlay: !0},
                                        r.a.createElement("br", null),
                                        r.a.createElement(
                                            "div",
                                            {className: "grid-block vertical"},
                                            r.a.createElement(Yt.a, {
                                                assetId: this.state.reserve,
                                                account: a,
                                                onClose: function() {
                                                    d.a.publish(
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
            na = Object(j.a)(na, {propNames: ["core_asset"]});
            var ra = (function(e) {
                function t() {
                    return (
                        ea(this, t),
                        ta(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    aa(t, r.a.Component),
                    Qt(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    Nt.a,
                                    Zt({}, this.props, {wrap: na})
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = ra;
        },
        563: function(e, t, a) {
            "use strict";
            var n = a(63).a.isFinite;
            t.a = function(e) {
                return "number" == typeof e && n(e);
            };
        },
        574: function(e, t) {
            !(function(t) {
                "object" == typeof e && e.exports
                    ? (e.exports = t)
                    : t(Highcharts);
            })(function(e) {
                !(function(e, t) {
                    var a = e.seriesType,
                        n = e.seriesTypes,
                        r = e.map,
                        o = e.merge,
                        i = e.extend,
                        s = e.noop,
                        l = e.each,
                        c = t.getColor,
                        u = t.getLevelOptions,
                        p = e.grep,
                        d = e.isNumber,
                        h = e.isObject,
                        m = e.isString,
                        f = e.pick,
                        b = e.Series,
                        g = e.stableSort,
                        v = e.Color,
                        y = e.reduce,
                        _ = function(e, t, a) {
                            (a = a || this),
                                !1 !== (e = t.call(a, e)) && _(e, t, a);
                        },
                        E = t.updateRootId;
                    a(
                        "treemap",
                        "scatter",
                        {
                            showInLegend: !1,
                            marker: !1,
                            colorByPoint: !1,
                            dataLabels: {
                                enabled: !0,
                                defer: !1,
                                verticalAlign: "middle",
                                formatter: function() {
                                    return this.point.name || this.point.id;
                                },
                                inside: !0
                            },
                            tooltip: {
                                headerFormat: "",
                                pointFormat:
                                    "<b>{point.name}</b>: {point.value}<br/>"
                            },
                            ignoreHiddenPoint: !0,
                            layoutAlgorithm: "sliceAndDice",
                            layoutStartingDirection: "vertical",
                            alternateStartingDirection: !1,
                            levelIsConstant: !0,
                            drillUpButton: {
                                position: {align: "right", x: -10, y: 10}
                            },
                            borderColor: "#e6e6e6",
                            borderWidth: 1,
                            opacity: 0.15,
                            states: {
                                hover: {
                                    borderColor: "#999999",
                                    brightness: n.heatmap ? 0 : 0.1,
                                    halo: !1,
                                    opacity: 0.75,
                                    shadow: !1
                                }
                            }
                        },
                        {
                            pointArrayMap: ["value"],
                            axisTypes: n.heatmap
                                ? ["xAxis", "yAxis", "colorAxis"]
                                : ["xAxis", "yAxis"],
                            directTouch: !0,
                            optionalAxis: "colorAxis",
                            getSymbol: s,
                            parallelArrays: ["x", "y", "value", "colorValue"],
                            colorKey: "colorValue",
                            translateColors:
                                n.heatmap &&
                                n.heatmap.prototype.translateColors,
                            colorAttribs:
                                n.heatmap && n.heatmap.prototype.colorAttribs,
                            trackerGroups: ["group", "dataLabelsGroup"],
                            getListOfParents: function(t, a) {
                                return (
                                    (function(t, a, n) {
                                        (n = n || this),
                                            e.objectEach(t, function(e, r) {
                                                a.call(n, e, r, t);
                                            });
                                    })(
                                        (t = y(
                                            t || [],
                                            function(e, t, a) {
                                                return (
                                                    void 0 ===
                                                        e[
                                                            (t = f(
                                                                t.parent,
                                                                ""
                                                            ))
                                                        ] && (e[t] = []),
                                                    e[t].push(a),
                                                    e
                                                );
                                            },
                                            {}
                                        )),
                                        function(t, n, r) {
                                            "" !== n &&
                                                -1 === e.inArray(n, a) &&
                                                (l(t, function(e) {
                                                    r[""].push(e);
                                                }),
                                                delete r[n]);
                                        }
                                    ),
                                    t
                                );
                            },
                            getTree: function() {
                                var e = r(this.data, function(e) {
                                    return e.id;
                                });
                                e = this.getListOfParents(this.data, e);
                                return (
                                    (this.nodeMap = []),
                                    this.buildNode("", -1, 0, e, null)
                                );
                            },
                            init: function(t, a) {
                                b.prototype.init.call(this, t, a),
                                    this.options.allowDrillToNode &&
                                        e.addEvent(
                                            this,
                                            "click",
                                            this.onClickDrillToNode
                                        );
                            },
                            buildNode: function(e, t, a, n, r) {
                                var o,
                                    i = this,
                                    s = [],
                                    c = i.points[t],
                                    u = 0;
                                return (
                                    l(n[e] || [], function(t) {
                                        (o = i.buildNode(
                                            i.points[t].id,
                                            t,
                                            a + 1,
                                            n,
                                            e
                                        )),
                                            (u = Math.max(o.height + 1, u)),
                                            s.push(o);
                                    }),
                                    (t = {
                                        id: e,
                                        i: t,
                                        children: s,
                                        height: u,
                                        level: a,
                                        parent: r,
                                        visible: !1
                                    }),
                                    (i.nodeMap[t.id] = t),
                                    c && (c.node = t),
                                    t
                                );
                            },
                            setTreeValues: function(e) {
                                var t,
                                    a = this,
                                    n = a.options,
                                    r = a.nodeMap[a.rootNode],
                                    o = ((n =
                                        "boolean" != typeof n.levelIsConstant ||
                                        n.levelIsConstant),
                                    0),
                                    s = [],
                                    c = a.points[e.i];
                                return (
                                    l(e.children, function(e) {
                                        (e = a.setTreeValues(e)),
                                            s.push(e),
                                            e.ignore || (o += e.val);
                                    }),
                                    g(s, function(e, t) {
                                        return e.sortIndex - t.sortIndex;
                                    }),
                                    (t = f(c && c.options.value, o)),
                                    c && (c.value = t),
                                    i(e, {
                                        children: s,
                                        childrenTotal: o,
                                        ignore: !(
                                            f(c && c.visible, !0) && 0 < t
                                        ),
                                        isLeaf: e.visible && !o,
                                        levelDynamic:
                                            e.level - (n ? 0 : r.level),
                                        name: f(c && c.name, ""),
                                        sortIndex: f(c && c.sortIndex, -t),
                                        val: t
                                    }),
                                    e
                                );
                            },
                            calculateChildrenAreas: function(e, t) {
                                var a,
                                    n = this,
                                    r = n.options,
                                    i = n.mapOptionsToLevel[e.level + 1],
                                    s = f(
                                        n[i && i.layoutAlgorithm] &&
                                            i.layoutAlgorithm,
                                        r.layoutAlgorithm
                                    ),
                                    c = r.alternateStartingDirection;
                                (e = p(e.children, function(e) {
                                    return !e.ignore;
                                })),
                                    i &&
                                        i.layoutStartingDirection &&
                                        (t.direction =
                                            "vertical" ===
                                            i.layoutStartingDirection
                                                ? 0
                                                : 1),
                                    (a = n[s](t, e)),
                                    l(e, function(e, r) {
                                        (r = a[r]),
                                            (e.values = o(r, {
                                                val: e.childrenTotal,
                                                direction: c
                                                    ? 1 - t.direction
                                                    : t.direction
                                            })),
                                            (e.pointValues = o(r, {
                                                x: r.x / n.axisRatio,
                                                width: r.width / n.axisRatio
                                            })),
                                            e.children.length &&
                                                n.calculateChildrenAreas(
                                                    e,
                                                    e.values
                                                );
                                    });
                            },
                            setPointValues: function() {
                                var e = this,
                                    t = e.xAxis,
                                    a = e.yAxis;
                                l(e.points, function(n) {
                                    var r,
                                        o,
                                        i,
                                        s = n.node,
                                        l = s.pointValues;
                                    (i =
                                        ((e.pointAttribs(n)["stroke-width"] ||
                                            0) %
                                            2) /
                                        2),
                                        l && s.visible
                                            ? ((s =
                                                  Math.round(
                                                      t.translate(
                                                          l.x,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - i),
                                              (r =
                                                  Math.round(
                                                      t.translate(
                                                          l.x + l.width,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - i),
                                              (o =
                                                  Math.round(
                                                      a.translate(
                                                          l.y,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - i),
                                              (l =
                                                  Math.round(
                                                      a.translate(
                                                          l.y + l.height,
                                                          0,
                                                          0,
                                                          0,
                                                          1
                                                      )
                                                  ) - i),
                                              (n.shapeType = "rect"),
                                              (n.shapeArgs = {
                                                  x: Math.min(s, r),
                                                  y: Math.min(o, l),
                                                  width: Math.abs(r - s),
                                                  height: Math.abs(l - o)
                                              }),
                                              (n.plotX =
                                                  n.shapeArgs.x +
                                                  n.shapeArgs.width / 2),
                                              (n.plotY =
                                                  n.shapeArgs.y +
                                                  n.shapeArgs.height / 2))
                                            : (delete n.plotX, delete n.plotY);
                                });
                            },
                            setColorRecursive: function(e, t, a, n, r) {
                                var o,
                                    i = this,
                                    s =
                                        (s = i && i.chart) &&
                                        s.options &&
                                        s.options.colors;
                                e &&
                                    ((o = c(e, {
                                        colors: s,
                                        index: n,
                                        mapOptionsToLevel: i.mapOptionsToLevel,
                                        parentColor: t,
                                        parentColorIndex: a,
                                        series: i,
                                        siblings: r
                                    })),
                                    (t = i.points[e.i]) &&
                                        ((t.color = o.color),
                                        (t.colorIndex = o.colorIndex)),
                                    l(e.children || [], function(t, a) {
                                        i.setColorRecursive(
                                            t,
                                            o.color,
                                            o.colorIndex,
                                            a,
                                            e.children.length
                                        );
                                    }));
                            },
                            algorithmGroup: function(e, t, a, n) {
                                (this.height = e),
                                    (this.width = t),
                                    (this.plot = n),
                                    (this.startDirection = this.direction = a),
                                    (this.lH = this.nH = this.lW = this.nW = this.total = 0),
                                    (this.elArr = []),
                                    (this.lP = {
                                        total: 0,
                                        lH: 0,
                                        nH: 0,
                                        lW: 0,
                                        nW: 0,
                                        nR: 0,
                                        lR: 0,
                                        aspectRatio: function(e, t) {
                                            return Math.max(e / t, t / e);
                                        }
                                    }),
                                    (this.addElement = function(e) {
                                        (this.lP.total = this.elArr[
                                            this.elArr.length - 1
                                        ]),
                                            (this.total += e),
                                            0 === this.direction
                                                ? ((this.lW = this.nW),
                                                  (this.lP.lH =
                                                      this.lP.total / this.lW),
                                                  (this.lP.lR = this.lP.aspectRatio(
                                                      this.lW,
                                                      this.lP.lH
                                                  )),
                                                  (this.nW =
                                                      this.total / this.height),
                                                  (this.lP.nH =
                                                      this.lP.total / this.nW),
                                                  (this.lP.nR = this.lP.aspectRatio(
                                                      this.nW,
                                                      this.lP.nH
                                                  )))
                                                : ((this.lH = this.nH),
                                                  (this.lP.lW =
                                                      this.lP.total / this.lH),
                                                  (this.lP.lR = this.lP.aspectRatio(
                                                      this.lP.lW,
                                                      this.lH
                                                  )),
                                                  (this.nH =
                                                      this.total / this.width),
                                                  (this.lP.nW =
                                                      this.lP.total / this.nH),
                                                  (this.lP.nR = this.lP.aspectRatio(
                                                      this.lP.nW,
                                                      this.nH
                                                  ))),
                                            this.elArr.push(e);
                                    }),
                                    (this.reset = function() {
                                        (this.lW = this.nW = 0),
                                            (this.elArr = []),
                                            (this.total = 0);
                                    });
                            },
                            algorithmCalcPoints: function(e, t, a, n) {
                                var r,
                                    o,
                                    i,
                                    s,
                                    c,
                                    u = a.lW,
                                    p = a.lH,
                                    d = a.plot,
                                    h = 0,
                                    m = a.elArr.length - 1;
                                t
                                    ? ((u = a.nW), (p = a.nH))
                                    : (c = a.elArr[a.elArr.length - 1]),
                                    l(a.elArr, function(e) {
                                        (t || h < m) &&
                                            (0 === a.direction
                                                ? ((r = d.x),
                                                  (o = d.y),
                                                  (s = e / (i = u)))
                                                : ((r = d.x),
                                                  (o = d.y),
                                                  (i = e / (s = p))),
                                            n.push({
                                                x: r,
                                                y: o,
                                                width: i,
                                                height: s
                                            }),
                                            0 === a.direction
                                                ? (d.y += s)
                                                : (d.x += i)),
                                            (h += 1);
                                    }),
                                    a.reset(),
                                    0 === a.direction
                                        ? (a.width -= u)
                                        : (a.height -= p),
                                    (d.y =
                                        d.parent.y +
                                        (d.parent.height - a.height)),
                                    (d.x =
                                        d.parent.x +
                                        (d.parent.width - a.width)),
                                    e && (a.direction = 1 - a.direction),
                                    t || a.addElement(c);
                            },
                            algorithmLowAspectRatio: function(e, t, a) {
                                var n,
                                    r = [],
                                    o = this,
                                    i = {x: t.x, y: t.y, parent: t},
                                    s = 0,
                                    c = a.length - 1,
                                    u = new this.algorithmGroup(
                                        t.height,
                                        t.width,
                                        t.direction,
                                        i
                                    );
                                return (
                                    l(a, function(a) {
                                        (n =
                                            (a.val / t.val) *
                                            t.height *
                                            t.width),
                                            u.addElement(n),
                                            u.lP.nR > u.lP.lR &&
                                                o.algorithmCalcPoints(
                                                    e,
                                                    !1,
                                                    u,
                                                    r,
                                                    i
                                                ),
                                            s === c &&
                                                o.algorithmCalcPoints(
                                                    e,
                                                    !0,
                                                    u,
                                                    r,
                                                    i
                                                ),
                                            (s += 1);
                                    }),
                                    r
                                );
                            },
                            algorithmFill: function(e, t, a) {
                                var n,
                                    r,
                                    o,
                                    i,
                                    s,
                                    c = [],
                                    u = t.direction,
                                    p = t.x,
                                    d = t.y,
                                    h = t.width,
                                    m = t.height;
                                return (
                                    l(a, function(a) {
                                        (n =
                                            (a.val / t.val) *
                                            t.height *
                                            t.width),
                                            (r = p),
                                            (o = d),
                                            0 === u
                                                ? ((h -= i = n / (s = m)),
                                                  (p += i))
                                                : ((m -= s = n / (i = h)),
                                                  (d += s)),
                                            c.push({
                                                x: r,
                                                y: o,
                                                width: i,
                                                height: s
                                            }),
                                            e && (u = 1 - u);
                                    }),
                                    c
                                );
                            },
                            strip: function(e, t) {
                                return this.algorithmLowAspectRatio(!1, e, t);
                            },
                            squarified: function(e, t) {
                                return this.algorithmLowAspectRatio(!0, e, t);
                            },
                            sliceAndDice: function(e, t) {
                                return this.algorithmFill(!0, e, t);
                            },
                            stripes: function(e, t) {
                                return this.algorithmFill(!1, e, t);
                            },
                            translate: function() {
                                var e,
                                    t,
                                    a = this,
                                    n = a.options,
                                    r = E(a);
                                b.prototype.translate.call(a),
                                    (t = a.tree = a.getTree()),
                                    (e = a.nodeMap[r]),
                                    (a.mapOptionsToLevel = u({
                                        from: e.level + 1,
                                        levels: n.levels,
                                        to: t.height,
                                        defaults: {
                                            levelIsConstant:
                                                a.options.levelIsConstant,
                                            colorByPoint: n.colorByPoint
                                        }
                                    })),
                                    "" === r ||
                                        (e && e.children.length) ||
                                        (a.drillToNode("", !1),
                                        (r = a.rootNode),
                                        (e = a.nodeMap[r])),
                                    _(a.nodeMap[a.rootNode], function(e) {
                                        var t = !1,
                                            n = e.parent;
                                        return (
                                            (e.visible = !0),
                                            (n || "" === n) &&
                                                (t = a.nodeMap[n]),
                                            t
                                        );
                                    }),
                                    _(a.nodeMap[a.rootNode].children, function(
                                        e
                                    ) {
                                        var t = !1;
                                        return (
                                            l(e, function(e) {
                                                (e.visible = !0),
                                                    e.children.length &&
                                                        (t = (t || []).concat(
                                                            e.children
                                                        ));
                                            }),
                                            t
                                        );
                                    }),
                                    a.setTreeValues(t),
                                    (a.axisRatio = a.xAxis.len / a.yAxis.len),
                                    (a.nodeMap[""].pointValues = r = {
                                        x: 0,
                                        y: 0,
                                        width: 100,
                                        height: 100
                                    }),
                                    (a.nodeMap[""].values = r = o(r, {
                                        width: r.width * a.axisRatio,
                                        direction:
                                            "vertical" ===
                                            n.layoutStartingDirection
                                                ? 0
                                                : 1,
                                        val: t.val
                                    })),
                                    a.calculateChildrenAreas(t, r),
                                    a.colorAxis
                                        ? a.translateColors()
                                        : n.colorByPoint ||
                                          a.setColorRecursive(a.tree),
                                    n.allowDrillToNode &&
                                        ((n = e.pointValues),
                                        a.xAxis.setExtremes(
                                            n.x,
                                            n.x + n.width,
                                            !1
                                        ),
                                        a.yAxis.setExtremes(
                                            n.y,
                                            n.y + n.height,
                                            !1
                                        ),
                                        a.xAxis.setScale(),
                                        a.yAxis.setScale()),
                                    a.setPointValues();
                            },
                            drawDataLabels: function() {
                                var e,
                                    t,
                                    a = this,
                                    n = a.mapOptionsToLevel,
                                    r = p(a.points, function(e) {
                                        return e.node.visible;
                                    });
                                l(r, function(r) {
                                    (t = n[r.node.level]),
                                        (e = {style: {}}),
                                        r.node.isLeaf || (e.enabled = !1),
                                        t &&
                                            t.dataLabels &&
                                            ((e = o(e, t.dataLabels)),
                                            (a._hasPointLabels = !0)),
                                        r.shapeArgs &&
                                            ((e.style.width =
                                                r.shapeArgs.width),
                                            r.dataLabel &&
                                                r.dataLabel.css({
                                                    width:
                                                        r.shapeArgs.width + "px"
                                                })),
                                        (r.dlOptions = o(
                                            e,
                                            r.options.dataLabels
                                        ));
                                }),
                                    b.prototype.drawDataLabels.call(this);
                            },
                            alignDataLabel: function(e) {
                                n.column.prototype.alignDataLabel.apply(
                                    this,
                                    arguments
                                ),
                                    e.dataLabel &&
                                        e.dataLabel.attr({
                                            zIndex: (e.node.zIndex || 0) + 1
                                        });
                            },
                            pointAttribs: function(e, t) {
                                var a = h(this.mapOptionsToLevel)
                                        ? this.mapOptionsToLevel
                                        : {},
                                    n = (e && a[e.node.level]) || {},
                                    r = ((a = this.options),
                                    (t && a.states[t]) || {}),
                                    o = (e && e.getClassName()) || "";
                                return (
                                    (e = {
                                        stroke:
                                            (e && e.borderColor) ||
                                            n.borderColor ||
                                            r.borderColor ||
                                            a.borderColor,
                                        "stroke-width": f(
                                            e && e.borderWidth,
                                            n.borderWidth,
                                            r.borderWidth,
                                            a.borderWidth
                                        ),
                                        dashstyle:
                                            (e && e.borderDashStyle) ||
                                            n.borderDashStyle ||
                                            r.borderDashStyle ||
                                            a.borderDashStyle,
                                        fill: (e && e.color) || this.color
                                    }),
                                    -1 !== o.indexOf("highcharts-above-level")
                                        ? ((e.fill = "none"),
                                          (e["stroke-width"] = 0))
                                        : -1 !==
                                          o.indexOf(
                                              "highcharts-internal-node-interactive"
                                          )
                                            ? ((t = f(r.opacity, a.opacity)),
                                              (e.fill = v(e.fill)
                                                  .setOpacity(t)
                                                  .get()),
                                              (e.cursor = "pointer"))
                                            : -1 !==
                                              o.indexOf(
                                                  "highcharts-internal-node"
                                              )
                                                ? (e.fill = "none")
                                                : t &&
                                                  (e.fill = v(e.fill)
                                                      .brighten(r.brightness)
                                                      .get()),
                                    e
                                );
                            },
                            drawPoints: function() {
                                var e = this,
                                    t = p(e.points, function(e) {
                                        return e.node.visible;
                                    });
                                l(t, function(t) {
                                    var a =
                                        "level-group-" + t.node.levelDynamic;
                                    e[a] ||
                                        (e[a] = e.chart.renderer
                                            .g(a)
                                            .attr({
                                                zIndex:
                                                    1e3 - t.node.levelDynamic
                                            })
                                            .add(e.group)),
                                        (t.group = e[a]);
                                }),
                                    n.column.prototype.drawPoints.call(this),
                                    e.options.allowDrillToNode &&
                                        l(t, function(t) {
                                            t.graphic &&
                                                (t.drillId = e.options
                                                    .interactByLeaf
                                                    ? e.drillToByLeaf(t)
                                                    : e.drillToByGroup(t));
                                        });
                            },
                            onClickDrillToNode: function(e) {
                                var t = (e = e.point) && e.drillId;
                                m(t) && (e.setState(""), this.drillToNode(t));
                            },
                            drillToByGroup: function(e) {
                                var t = !1;
                                return (
                                    1 !=
                                        e.node.level -
                                            this.nodeMap[this.rootNode].level ||
                                        e.node.isLeaf ||
                                        (t = e.id),
                                    t
                                );
                            },
                            drillToByLeaf: function(e) {
                                var t = !1;
                                if (
                                    e.node.parent !== this.rootNode &&
                                    e.node.isLeaf
                                )
                                    for (e = e.node; !t; )
                                        (e = this.nodeMap[e.parent]).parent ===
                                            this.rootNode && (t = e.id);
                                return t;
                            },
                            drillUp: function() {
                                var e = this.nodeMap[this.rootNode];
                                e && m(e.parent) && this.drillToNode(e.parent);
                            },
                            drillToNode: function(e, t) {
                                var a = this.nodeMap[e];
                                (this.idPreviousRoot = this.rootNode),
                                    (this.rootNode = e),
                                    "" === e
                                        ? (this.drillUpButton = this.drillUpButton.destroy())
                                        : this.showDrillUpButton(
                                              (a && a.name) || e
                                          ),
                                    (this.isDirty = !0),
                                    f(t, !0) && this.chart.redraw();
                            },
                            showDrillUpButton: function(e) {
                                var t = this;
                                e = e || "< Back";
                                var a,
                                    n,
                                    r = t.options.drillUpButton;
                                r.text && (e = r.text),
                                    this.drillUpButton
                                        ? ((this.drillUpButton.placed = !1),
                                          this.drillUpButton
                                              .attr({text: e})
                                              .align())
                                        : ((n = (a = r.theme) && a.states),
                                          (this.drillUpButton = this.chart.renderer
                                              .button(
                                                  e,
                                                  null,
                                                  null,
                                                  function() {
                                                      t.drillUp();
                                                  },
                                                  a,
                                                  n && n.hover,
                                                  n && n.select
                                              )
                                              .addClass(
                                                  "highcharts-drillup-button"
                                              )
                                              .attr({
                                                  align: r.position.align,
                                                  zIndex: 7
                                              })
                                              .add()
                                              .align(
                                                  r.position,
                                                  !1,
                                                  r.relativeTo || "plotBox"
                                              )));
                            },
                            buildKDTree: s,
                            drawLegendSymbol: e.LegendSymbolMixin.drawRectangle,
                            getExtremes: function() {
                                b.prototype.getExtremes.call(
                                    this,
                                    this.colorValueData
                                ),
                                    (this.valueMin = this.dataMin),
                                    (this.valueMax = this.dataMax),
                                    b.prototype.getExtremes.call(this);
                            },
                            getExtremesFromAll: !0,
                            bindAxes: function() {
                                var t = {
                                    endOnTick: !1,
                                    gridLineWidth: 0,
                                    lineWidth: 0,
                                    min: 0,
                                    dataMin: 0,
                                    minPadding: 0,
                                    max: 100,
                                    dataMax: 100,
                                    maxPadding: 0,
                                    startOnTick: !1,
                                    title: null,
                                    tickPositions: []
                                };
                                b.prototype.bindAxes.call(this),
                                    e.extend(this.yAxis.options, t),
                                    e.extend(this.xAxis.options, t);
                            },
                            utils: {recursive: _, reduce: y}
                        },
                        {
                            getClassName: function() {
                                var t = e.Point.prototype.getClassName.call(
                                        this
                                    ),
                                    a = this.series,
                                    n = a.options;
                                return (
                                    this.node.level <=
                                    a.nodeMap[a.rootNode].level
                                        ? (t += " highcharts-above-level")
                                        : this.node.isLeaf ||
                                          f(
                                              n.interactByLeaf,
                                              !n.allowDrillToNode
                                          )
                                            ? this.node.isLeaf ||
                                              (t += " highcharts-internal-node")
                                            : (t +=
                                                  " highcharts-internal-node-interactive"),
                                    t
                                );
                            },
                            isValid: function() {
                                return this.id || d(this.value);
                            },
                            setState: function(t) {
                                e.Point.prototype.setState.call(this, t),
                                    this.graphic &&
                                        this.graphic.attr({
                                            zIndex: "hover" === t ? 1 : 0
                                        });
                            },
                            setVisible:
                                n.pie.prototype.pointClass.prototype.setVisible
                        }
                    );
                })(
                    e,
                    (function(e) {
                        var t = e.each,
                            a = e.extend,
                            n = e.isArray,
                            r = e.isObject,
                            o = e.isNumber,
                            i = e.merge,
                            s = e.pick,
                            l = e.reduce;
                        return {
                            getColor: function(t, a) {
                                var n,
                                    r,
                                    o,
                                    i,
                                    l = a.index,
                                    c = a.mapOptionsToLevel,
                                    u = a.parentColor,
                                    p = a.parentColorIndex,
                                    d = a.series,
                                    h = a.colors,
                                    m = a.siblings,
                                    f = d.points;
                                return (
                                    t &&
                                        ((f = f[t.i]),
                                        (t = c[t.level] || {}),
                                        (n = f && t.colorByPoint) &&
                                            ((o =
                                                f.index %
                                                (h
                                                    ? h.length
                                                    : d.chart.options.chart
                                                          .colorCount)),
                                            (r = h && h[o])),
                                        (h = f && f.options.color),
                                        (n = t && t.color),
                                        (c = u) &&
                                            (c =
                                                (c = t && t.colorVariation) &&
                                                "brightness" === c.key
                                                    ? e
                                                          .color(u)
                                                          .brighten(
                                                              (l / m) * c.to
                                                          )
                                                          .get()
                                                    : u),
                                        (n = s(h, n, r, c, d.color)),
                                        (i = s(
                                            f && f.options.colorIndex,
                                            t && t.colorIndex,
                                            o,
                                            p,
                                            a.colorIndex
                                        ))),
                                    {color: n, colorIndex: i}
                                );
                            },
                            getLevelOptions: function(e) {
                                var t,
                                    s,
                                    c,
                                    u,
                                    p = null;
                                if (r(e))
                                    for (
                                        p = {},
                                            c = o(e.from) ? e.from : 1,
                                            u = e.levels,
                                            s = {},
                                            t = r(e.defaults) ? e.defaults : {},
                                            n(u) &&
                                                (s = l(
                                                    u,
                                                    function(e, n) {
                                                        var s, l;
                                                        return (
                                                            r(n) &&
                                                                o(n.level) &&
                                                                ((s =
                                                                    "boolean" ==
                                                                    typeof (l = i(
                                                                        {},
                                                                        n
                                                                    ))
                                                                        .levelIsConstant
                                                                        ? l.levelIsConstant
                                                                        : t.levelIsConstant),
                                                                delete l.levelIsConstant,
                                                                delete l.level,
                                                                (n =
                                                                    n.level +
                                                                    (s
                                                                        ? 0
                                                                        : c -
                                                                          1)),
                                                                r(e[n])
                                                                    ? a(e[n], l)
                                                                    : (e[
                                                                          n
                                                                      ] = l)),
                                                            e
                                                        );
                                                    },
                                                    {}
                                                )),
                                            u = o(e.to) ? e.to : 1,
                                            e = 0;
                                        e <= u;
                                        e++
                                    )
                                        p[e] = i({}, t, r(s[e]) ? s[e] : {});
                                return p;
                            },
                            setTreeValues: function e(n, r) {
                                var o = r.before,
                                    i = r.idRoot,
                                    l = r.mapIdToNode[i],
                                    c = r.points[n.i],
                                    u = (c && c.options) || {},
                                    p = 0,
                                    d = [];
                                return (
                                    a(n, {
                                        levelDynamic:
                                            n.level -
                                            ("boolean" !=
                                                typeof r.levelIsConstant ||
                                            r.levelIsConstant
                                                ? 0
                                                : l.level),
                                        name: s(c && c.name, ""),
                                        visible:
                                            i === n.id ||
                                            ("boolean" == typeof r.visible &&
                                                r.visible)
                                    }),
                                    "function" == typeof o && (n = o(n, r)),
                                    t(n.children, function(t, o) {
                                        var i = a({}, r);
                                        a(i, {
                                            index: o,
                                            siblings: n.children.length,
                                            visible: n.visible
                                        }),
                                            (t = e(t, i)),
                                            d.push(t),
                                            t.visible && (p += t.val);
                                    }),
                                    (n.visible = 0 < p || n.visible),
                                    (o = s(u.value, p)),
                                    a(n, {
                                        children: d,
                                        childrenTotal: p,
                                        isLeaf: n.visible && !p,
                                        val: o
                                    }),
                                    n
                                );
                            },
                            updateRootId: function(e) {
                                var t;
                                return (
                                    r(e) &&
                                        ((t = r(e.options) ? e.options : {}),
                                        (t = s(e.rootNode, t.rootId, "")),
                                        r(e.userOptions) &&
                                            (e.userOptions.rootId = t),
                                        (e.rootNode = t)),
                                    t
                                );
                            }
                        };
                    })(e)
                );
            });
        },
        575: function(e, t) {
            !(function(t) {
                "object" == typeof e && e.exports
                    ? (e.exports = t)
                    : t(Highcharts);
            })(function(e) {
                !(function(e) {
                    var t,
                        a = e.addEvent,
                        n = e.Axis,
                        r = e.Chart,
                        o = e.color,
                        i = e.each,
                        s = e.extend,
                        l = e.isNumber,
                        c = e.Legend,
                        u = e.LegendSymbolMixin,
                        p = e.noop,
                        d = e.merge,
                        h = e.pick;
                    e.ColorAxis ||
                        ((t = e.ColorAxis = function() {
                            this.init.apply(this, arguments);
                        }),
                        s(t.prototype, n.prototype),
                        s(t.prototype, {
                            defaultColorAxisOptions: {
                                lineWidth: 0,
                                minPadding: 0,
                                maxPadding: 0,
                                gridLineWidth: 1,
                                tickPixelInterval: 72,
                                startOnTick: !0,
                                endOnTick: !0,
                                offset: 0,
                                marker: {
                                    animation: {duration: 50},
                                    width: 0.01,
                                    color: "#999999"
                                },
                                labels: {overflow: "justify", rotation: 0},
                                minColor: "#e6ebf5",
                                maxColor: "#003399",
                                tickLength: 5,
                                showInLegend: !0
                            },
                            keepProps: [
                                "legendGroup",
                                "legendItemHeight",
                                "legendItemWidth",
                                "legendItem",
                                "legendSymbol"
                            ].concat(n.prototype.keepProps),
                            init: function(e, t) {
                                var a,
                                    r = "vertical" !== e.options.legend.layout;
                                (this.coll = "colorAxis"),
                                    (a = d(
                                        this.defaultColorAxisOptions,
                                        {side: r ? 2 : 1, reversed: !r},
                                        t,
                                        {
                                            opposite: !r,
                                            showEmpty: !1,
                                            title: null,
                                            visible: e.options.legend.enabled
                                        }
                                    )),
                                    n.prototype.init.call(this, e, a),
                                    t.dataClasses && this.initDataClasses(t),
                                    this.initStops(),
                                    (this.horiz = r),
                                    (this.zoomEnabled = !1),
                                    (this.defaultLegendLength = 200);
                            },
                            initDataClasses: function(e) {
                                var t,
                                    a = this.chart,
                                    n = 0,
                                    r = a.options.chart.colorCount,
                                    s = this.options,
                                    l = e.dataClasses.length;
                                (this.dataClasses = t = []),
                                    (this.legendItems = []),
                                    i(e.dataClasses, function(e, i) {
                                        (e = d(e)),
                                            t.push(e),
                                            e.color ||
                                                ("category" === s.dataClassColor
                                                    ? ((i = a.options.colors),
                                                      (r = i.length),
                                                      (e.color = i[n]),
                                                      (e.colorIndex = n),
                                                      ++n === r && (n = 0))
                                                    : (e.color = o(
                                                          s.minColor
                                                      ).tweenTo(
                                                          o(s.maxColor),
                                                          2 > l
                                                              ? 0.5
                                                              : i / (l - 1)
                                                      )));
                                    });
                            },
                            setTickPositions: function() {
                                if (!this.dataClasses)
                                    return n.prototype.setTickPositions.call(
                                        this
                                    );
                            },
                            initStops: function() {
                                (this.stops = this.options.stops || [
                                    [0, this.options.minColor],
                                    [1, this.options.maxColor]
                                ]),
                                    i(this.stops, function(e) {
                                        e.color = o(e[1]);
                                    });
                            },
                            setOptions: function(e) {
                                n.prototype.setOptions.call(this, e),
                                    (this.options.crosshair = this.options.marker);
                            },
                            setAxisSize: function() {
                                var e,
                                    t,
                                    a = this.legendSymbol,
                                    n = this.chart,
                                    r = n.options.legend || {};
                                a
                                    ? ((this.left = r = a.attr("x")),
                                      (this.top = e = a.attr("y")),
                                      (this.width = t = a.attr("width")),
                                      (this.height = a = a.attr("height")),
                                      (this.right = n.chartWidth - r - t),
                                      (this.bottom = n.chartHeight - e - a),
                                      (this.len = this.horiz ? t : a),
                                      (this.pos = this.horiz ? r : e))
                                    : (this.len =
                                          (this.horiz
                                              ? r.symbolWidth
                                              : r.symbolHeight) ||
                                          this.defaultLegendLength);
                            },
                            normalizedValue: function(e) {
                                return (
                                    this.isLog && (e = this.val2lin(e)),
                                    1 -
                                        (this.max - e) /
                                            (this.max - this.min || 1)
                                );
                            },
                            toColor: function(e, t) {
                                var a,
                                    n,
                                    r,
                                    o,
                                    i = this.stops,
                                    s = this.dataClasses;
                                if (s) {
                                    for (o = s.length; o--; )
                                        if (
                                            ((a = (r = s[o]).from),
                                            (i = r.to),
                                            (void 0 === a || e >= a) &&
                                                (void 0 === i || e <= i))
                                        ) {
                                            (n = r.color),
                                                t &&
                                                    ((t.dataClass = o),
                                                    (t.colorIndex =
                                                        r.colorIndex));
                                            break;
                                        }
                                } else {
                                    for (
                                        e = this.normalizedValue(e),
                                            o = i.length;
                                        o-- && !(e > i[o][0]);

                                    );
                                    (a = i[o] || i[o + 1]),
                                        (e =
                                            1 -
                                            ((i = i[o + 1] || a)[0] - e) /
                                                (i[0] - a[0] || 1)),
                                        (n = a.color.tweenTo(i.color, e));
                                }
                                return n;
                            },
                            getOffset: function() {
                                var e = this.legendGroup,
                                    t = this.chart.axisOffset[this.side];
                                e &&
                                    ((this.axisParent = e),
                                    n.prototype.getOffset.call(this),
                                    this.added ||
                                        ((this.added = !0),
                                        (this.labelLeft = 0),
                                        (this.labelRight = this.width)),
                                    (this.chart.axisOffset[this.side] = t));
                            },
                            setLegendColor: function() {
                                var e,
                                    t = this.reversed;
                                (e = t ? 1 : 0),
                                    (t = t ? 0 : 1),
                                    (e = this.horiz
                                        ? [e, 0, t, 0]
                                        : [0, t, 0, e]),
                                    (this.legendColor = {
                                        linearGradient: {
                                            x1: e[0],
                                            y1: e[1],
                                            x2: e[2],
                                            y2: e[3]
                                        },
                                        stops: this.stops
                                    });
                            },
                            drawLegendSymbol: function(e, t) {
                                var a = e.padding,
                                    n = e.options,
                                    r = this.horiz,
                                    o = h(
                                        n.symbolWidth,
                                        r ? this.defaultLegendLength : 12
                                    ),
                                    i = h(
                                        n.symbolHeight,
                                        r ? 12 : this.defaultLegendLength
                                    ),
                                    s = h(n.labelPadding, r ? 16 : 30);
                                n = h(n.itemDistance, 10);
                                this.setLegendColor(),
                                    (t.legendSymbol = this.chart.renderer
                                        .rect(0, e.baseline - 11, o, i)
                                        .attr({zIndex: 1})
                                        .add(t.legendGroup)),
                                    (this.legendItemWidth =
                                        o + a + (r ? n : s)),
                                    (this.legendItemHeight =
                                        i + a + (r ? s : 0));
                            },
                            setState: function(e) {
                                i(this.series, function(t) {
                                    t.setState(e);
                                });
                            },
                            visible: !0,
                            setVisible: p,
                            getSeriesExtremes: function() {
                                var e = this.series,
                                    t = e.length;
                                for (
                                    this.dataMin = 1 / 0, this.dataMax = -1 / 0;
                                    t--;

                                )
                                    e[t].getExtremes(),
                                        void 0 !== e[t].valueMin &&
                                            ((this.dataMin = Math.min(
                                                this.dataMin,
                                                e[t].valueMin
                                            )),
                                            (this.dataMax = Math.max(
                                                this.dataMax,
                                                e[t].valueMax
                                            )));
                            },
                            drawCrosshair: function(e, t) {
                                var a,
                                    r = t && t.plotX,
                                    o = t && t.plotY,
                                    i = this.pos,
                                    s = this.len;
                                t &&
                                    ((a = this.toPixels(t[t.series.colorKey])) <
                                    i
                                        ? (a = i - 2)
                                        : a > i + s && (a = i + s + 2),
                                    (t.plotX = a),
                                    (t.plotY = this.len - a),
                                    n.prototype.drawCrosshair.call(this, e, t),
                                    (t.plotX = r),
                                    (t.plotY = o),
                                    this.cross &&
                                        !this.cross.addedToColorAxis &&
                                        this.legendGroup &&
                                        (this.cross
                                            .addClass(
                                                "highcharts-coloraxis-marker"
                                            )
                                            .add(this.legendGroup),
                                        (this.cross.addedToColorAxis = !0),
                                        this.cross.attr({
                                            fill: this.crosshair.color
                                        })));
                            },
                            getPlotLinePath: function(e, t, a, r, o) {
                                return l(o)
                                    ? this.horiz
                                        ? [
                                              "M",
                                              o - 4,
                                              this.top - 6,
                                              "L",
                                              o + 4,
                                              this.top - 6,
                                              o,
                                              this.top,
                                              "Z"
                                          ]
                                        : [
                                              "M",
                                              this.left,
                                              o,
                                              "L",
                                              this.left - 6,
                                              o + 6,
                                              this.left - 6,
                                              o - 6,
                                              "Z"
                                          ]
                                    : n.prototype.getPlotLinePath.call(
                                          this,
                                          e,
                                          t,
                                          a,
                                          r
                                      );
                            },
                            update: function(e, t) {
                                var a = this.chart,
                                    r = a.legend;
                                i(this.series, function(e) {
                                    e.isDirtyData = !0;
                                }),
                                    e.dataClasses &&
                                        r.allItems &&
                                        (i(r.allItems, function(e) {
                                            e.isDataClass &&
                                                e.legendGroup &&
                                                e.legendGroup.destroy();
                                        }),
                                        (a.isDirtyLegend = !0)),
                                    (a.options[this.coll] = d(
                                        this.userOptions,
                                        e
                                    )),
                                    n.prototype.update.call(this, e, t),
                                    this.legendItem &&
                                        (this.setLegendColor(),
                                        r.colorizeItem(this, !0));
                            },
                            remove: function() {
                                this.legendItem &&
                                    this.chart.legend.destroyItem(this),
                                    n.prototype.remove.call(this);
                            },
                            getDataClassLegendSymbols: function() {
                                var t,
                                    a = this,
                                    n = this.chart,
                                    r = this.legendItems,
                                    o = n.options.legend,
                                    l = o.valueDecimals,
                                    c = o.valueSuffix || "";
                                return (
                                    r.length ||
                                        i(this.dataClasses, function(o, d) {
                                            var h = !0,
                                                m = o.from,
                                                f = o.to;
                                            (t = ""),
                                                void 0 === m
                                                    ? (t = "< ")
                                                    : void 0 === f &&
                                                      (t = "> "),
                                                void 0 !== m &&
                                                    (t +=
                                                        e.numberFormat(m, l) +
                                                        c),
                                                void 0 !== m &&
                                                    void 0 !== f &&
                                                    (t += " - "),
                                                void 0 !== f &&
                                                    (t +=
                                                        e.numberFormat(f, l) +
                                                        c),
                                                r.push(
                                                    s(
                                                        {
                                                            chart: n,
                                                            name: t,
                                                            options: {},
                                                            drawLegendSymbol:
                                                                u.drawRectangle,
                                                            visible: !0,
                                                            setState: p,
                                                            isDataClass: !0,
                                                            setVisible: function() {
                                                                (h = this.visible = !h),
                                                                    i(
                                                                        a.series,
                                                                        function(
                                                                            e
                                                                        ) {
                                                                            i(
                                                                                e.points,
                                                                                function(
                                                                                    e
                                                                                ) {
                                                                                    e.dataClass ===
                                                                                        d &&
                                                                                        e.setVisible(
                                                                                            h
                                                                                        );
                                                                                }
                                                                            );
                                                                        }
                                                                    ),
                                                                    n.legend.colorizeItem(
                                                                        this,
                                                                        h
                                                                    );
                                                            }
                                                        },
                                                        o
                                                    )
                                                );
                                        }),
                                    r
                                );
                            },
                            name: ""
                        }),
                        i(["fill", "stroke"], function(t) {
                            e.Fx.prototype[t + "Setter"] = function() {
                                this.elem.attr(
                                    t,
                                    o(this.start).tweenTo(
                                        o(this.end),
                                        this.pos
                                    ),
                                    null,
                                    !0
                                );
                            };
                        }),
                        a(r, "afterGetAxes", function() {
                            var e = this.options.colorAxis;
                            (this.colorAxis = []), e && new t(this, e);
                        }),
                        a(c, "afterGetAllItems", function(t) {
                            var a = [],
                                n = this.chart.colorAxis[0];
                            for (
                                n &&
                                    n.options &&
                                    n.options.showInLegend &&
                                    (n.options.dataClasses
                                        ? (a = n.getDataClassLegendSymbols())
                                        : a.push(n),
                                    i(n.series, function(a) {
                                        e.erase(t.allItems, a);
                                    })),
                                    n = a.length;
                                n--;

                            )
                                t.allItems.unshift(a[n]);
                        }),
                        a(c, "afterColorizeItem", function(e) {
                            e.visible &&
                                e.item.legendColor &&
                                e.item.legendSymbol.attr({
                                    fill: e.item.legendColor
                                });
                        }),
                        a(c, "afterUpdate", function(e, t, a) {
                            this.chart.colorAxis[0] &&
                                this.chart.colorAxis[0].update({}, a);
                        }));
                })(e),
                    (function(e) {
                        var t = e.defined,
                            a = e.each,
                            n = e.noop,
                            r = e.seriesTypes;
                        (e.colorPointMixin = {
                            isValid: function() {
                                return (
                                    null !== this.value &&
                                    1 / 0 !== this.value &&
                                    -1 / 0 !== this.value
                                );
                            },
                            setVisible: function(e) {
                                var t = this,
                                    n = e ? "show" : "hide";
                                a(["graphic", "dataLabel"], function(e) {
                                    t[e] && t[e][n]();
                                });
                            },
                            setState: function(t) {
                                e.Point.prototype.setState.call(this, t),
                                    this.graphic &&
                                        this.graphic.attr({
                                            zIndex: "hover" === t ? 1 : 0
                                        });
                            }
                        }),
                            (e.colorSeriesMixin = {
                                pointArrayMap: ["value"],
                                axisTypes: ["xAxis", "yAxis", "colorAxis"],
                                optionalAxis: "colorAxis",
                                trackerGroups: [
                                    "group",
                                    "markerGroup",
                                    "dataLabelsGroup"
                                ],
                                getSymbol: n,
                                parallelArrays: ["x", "y", "value"],
                                colorKey: "value",
                                pointAttribs: r.column.prototype.pointAttribs,
                                translateColors: function() {
                                    var e = this,
                                        t = this.options.nullColor,
                                        n = this.colorAxis,
                                        r = this.colorKey;
                                    a(this.data, function(a) {
                                        var o = a[r];
                                        (o =
                                            a.options.color ||
                                            (a.isNull
                                                ? t
                                                : n && void 0 !== o
                                                    ? n.toColor(o, a)
                                                    : a.color || e.color)) &&
                                            (a.color = o);
                                    });
                                },
                                colorAttribs: function(e) {
                                    var a = {};
                                    return (
                                        t(e.color) &&
                                            (a[this.colorProp || "fill"] =
                                                e.color),
                                        a
                                    );
                                }
                            });
                    })(e),
                    (function(e) {
                        var t = e.colorPointMixin,
                            a = e.each,
                            n = e.merge,
                            r = e.noop,
                            o = e.pick,
                            i = e.Series,
                            s = e.seriesType,
                            l = e.seriesTypes;
                        s(
                            "heatmap",
                            "scatter",
                            {
                                animation: !1,
                                borderWidth: 0,
                                nullColor: "#f7f7f7",
                                dataLabels: {
                                    formatter: function() {
                                        return this.point.value;
                                    },
                                    inside: !0,
                                    verticalAlign: "middle",
                                    crop: !1,
                                    overflow: !1,
                                    padding: 0
                                },
                                marker: null,
                                pointRange: null,
                                tooltip: {
                                    pointFormat:
                                        "{point.x}, {point.y}: {point.value}<br/>"
                                },
                                states: {hover: {halo: !1, brightness: 0.2}}
                            },
                            n(e.colorSeriesMixin, {
                                pointArrayMap: ["y", "value"],
                                hasPointSpecificOptions: !0,
                                getExtremesFromAll: !0,
                                directTouch: !0,
                                init: function() {
                                    var e;
                                    l.scatter.prototype.init.apply(
                                        this,
                                        arguments
                                    ),
                                        ((e = this.options).pointRange = o(
                                            e.pointRange,
                                            e.colsize || 1
                                        )),
                                        (this.yAxis.axisPointRange =
                                            e.rowsize || 1);
                                },
                                translate: function() {
                                    var e = this.options,
                                        t = this.xAxis,
                                        n = this.yAxis,
                                        r = e.pointPadding || 0,
                                        i = function(e, t, a) {
                                            return Math.min(Math.max(t, e), a);
                                        };
                                    this.generatePoints(),
                                        a(this.points, function(a) {
                                            var s = (e.colsize || 1) / 2,
                                                l = (e.rowsize || 1) / 2,
                                                c = i(
                                                    Math.round(
                                                        t.len -
                                                            t.translate(
                                                                a.x - s,
                                                                0,
                                                                1,
                                                                0,
                                                                1
                                                            )
                                                    ),
                                                    -t.len,
                                                    2 * t.len
                                                ),
                                                u = ((s = i(
                                                    Math.round(
                                                        t.len -
                                                            t.translate(
                                                                a.x + s,
                                                                0,
                                                                1,
                                                                0,
                                                                1
                                                            )
                                                    ),
                                                    -t.len,
                                                    2 * t.len
                                                )),
                                                i(
                                                    Math.round(
                                                        n.translate(
                                                            a.y - l,
                                                            0,
                                                            1,
                                                            0,
                                                            1
                                                        )
                                                    ),
                                                    -n.len,
                                                    2 * n.len
                                                )),
                                                p = ((l = i(
                                                    Math.round(
                                                        n.translate(
                                                            a.y + l,
                                                            0,
                                                            1,
                                                            0,
                                                            1
                                                        )
                                                    ),
                                                    -n.len,
                                                    2 * n.len
                                                )),
                                                o(a.pointPadding, r));
                                            (a.plotX = a.clientX = (c + s) / 2),
                                                (a.plotY = (u + l) / 2),
                                                (a.shapeType = "rect"),
                                                (a.shapeArgs = {
                                                    x: Math.min(c, s) + p,
                                                    y: Math.min(u, l) + p,
                                                    width:
                                                        Math.abs(s - c) - 2 * p,
                                                    height:
                                                        Math.abs(l - u) - 2 * p
                                                });
                                        }),
                                        this.translateColors();
                                },
                                drawPoints: function() {
                                    l.column.prototype.drawPoints.call(this),
                                        a(
                                            this.points,
                                            function(e) {
                                                e.graphic.attr(
                                                    this.colorAttribs(e)
                                                );
                                            },
                                            this
                                        );
                                },
                                animate: r,
                                getBox: r,
                                drawLegendSymbol:
                                    e.LegendSymbolMixin.drawRectangle,
                                alignDataLabel:
                                    l.column.prototype.alignDataLabel,
                                getExtremes: function() {
                                    i.prototype.getExtremes.call(
                                        this,
                                        this.valueData
                                    ),
                                        (this.valueMin = this.dataMin),
                                        (this.valueMax = this.dataMax),
                                        i.prototype.getExtremes.call(this);
                                }
                            }),
                            e.extend(
                                {
                                    haloPath: function(e) {
                                        if (!e) return [];
                                        var t = this.shapeArgs;
                                        return [
                                            "M",
                                            t.x - e,
                                            t.y - e,
                                            "L",
                                            t.x - e,
                                            t.y + t.height + e,
                                            t.x + t.width + e,
                                            t.y + t.height + e,
                                            t.x + t.width + e,
                                            t.y - e,
                                            "Z"
                                        ];
                                    }
                                },
                                t
                            )
                        );
                    })(e);
            });
        }
    }
]);
