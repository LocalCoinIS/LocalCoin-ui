(window.webpackJsonp = window.webpackJsonp || []).push([
    [39],
    {
        4987: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(0),
                n = a.n(s),
                i = a(1),
                r = a.n(i),
                o = a(356),
                l = a(6),
                c = a(13),
                m = a(3),
                u = a.n(m),
                g = a(27),
                f = a(4),
                d = a(45),
                h = a(16),
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
            var p = "-----BEGIN BITSHARES SIGNED MESSAGE-----",
                b = "-----END BITSHARES SIGNED MESSAGE-----",
                _ = (function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                    }
                    return (
                        v(e, [
                            {
                                key: "parseMessage",
                                value: function(e) {
                                    var t = void 0,
                                        a = void 0,
                                        s = void 0,
                                        n = void 0;
                                    try {
                                        (t = (a = (t = e.split(p)[1]).split(
                                            "-----BEGIN META-----"
                                        ))[0].replace(/^\n|\n$/g, "")),
                                            (a = (s = a[1].split(
                                                "-----BEGIN SIGNATURE-----"
                                            ))[0].trim()),
                                            (s = s[1].split(b)[0].trim()),
                                            (n = t + "\n" + a);
                                    } catch (e) {
                                        throw new Error(
                                            u.a.translate(
                                                "account.signedmessages.invalidformat"
                                            )
                                        );
                                    }
                                    var i = void 0,
                                        r = void 0,
                                        o = void 0,
                                        l = void 0;
                                    if (a)
                                        try {
                                            (i = (i = a.split("account="))[1]
                                                .split("\n")[0]
                                                .trim()),
                                                (r = (r = a.split(
                                                    "memokey="
                                                ))[1]
                                                    .split("\n")[0]
                                                    .trim()),
                                                (o = (o = a.split("block="))[1]
                                                    .split("\n")[0]
                                                    .trim()),
                                                (l = (l = a.split(
                                                    "timestamp="
                                                ))[1]
                                                    .split("\n")[0]
                                                    .trim());
                                        } catch (e) {
                                            throw new Error(
                                                u.a.translate(
                                                    "account.signedmessages.invalidformat"
                                                )
                                            );
                                        }
                                    return {
                                        content: t,
                                        meta: {
                                            account: i,
                                            key: r,
                                            block: o,
                                            timestamp: l
                                        },
                                        signed: n,
                                        signature: s
                                    };
                                }
                            },
                            {
                                key: "verifyMemo",
                                value: function(e) {
                                    var t = void 0;
                                    if (
                                        ((t =
                                            "string" == typeof e ||
                                            e instanceof String
                                                ? this.parseMessage(e)
                                                : e),
                                        null == f.b.getAccount(t.meta.account))
                                    )
                                        throw new Error(
                                            u.a.translate(
                                                "account.signedmessages.invaliduser"
                                            )
                                        );
                                    var a = !1;
                                    try {
                                        a = f.k
                                            .fromHex(t.signature)
                                            .verifyBuffer(
                                                t.signed,
                                                f.i.fromPublicKeyString(
                                                    t.meta.key
                                                )
                                            );
                                    } catch (e) {
                                        throw new Error(
                                            u.a.translate(
                                                "account.signedmessages.errorverifying"
                                            )
                                        );
                                    }
                                    if (!a)
                                        throw new Error(
                                            u.a.translate(
                                                "account.signedmessages.invalidsignature"
                                            )
                                        );
                                    return t;
                                }
                            },
                            {
                                key: "signMessage",
                                value: function(e, t) {
                                    return new Promise(function(a, s) {
                                        d.a
                                            .unlock()
                                            .then(function() {
                                                try {
                                                    var n = e
                                                        .get("options")
                                                        .get("memo_key");
                                                    /111111111111111111111/.test(
                                                        n
                                                    ) && (n = null);
                                                    var i = void 0;
                                                    if (
                                                        t &&
                                                        n &&
                                                        !(i = h.a.getPrivateKey(
                                                            n
                                                        ))
                                                    )
                                                        throw new Error(
                                                            u.a.translate(
                                                                "account.signedmessages.invalidkey"
                                                            )
                                                        );
                                                    var r = f.b
                                                            .getObject("2.1.0")
                                                            .get(
                                                                "last_irreversible_block_num"
                                                            ),
                                                        o = new Date(),
                                                        l =
                                                            "account=" +
                                                            e.get("name") +
                                                            "\nmemokey=" +
                                                            n +
                                                            "\nblock=" +
                                                            r +
                                                            "\ntimestamp=" +
                                                            o.toUTCString(),
                                                        c = t + "\n" + l;
                                                    setTimeout(function() {
                                                        try {
                                                            var e = f.k.signBuffer(
                                                                    c,
                                                                    i,
                                                                    n
                                                                ),
                                                                r =
                                                                    p +
                                                                    "\n" +
                                                                    t +
                                                                    "\n-----BEGIN META-----\n" +
                                                                    l +
                                                                    "\n-----BEGIN SIGNATURE-----\n" +
                                                                    e.toHex() +
                                                                    "\n" +
                                                                    b;
                                                            a(r);
                                                        } catch (e) {
                                                            s(e);
                                                        }
                                                    }, 0);
                                                } catch (e) {
                                                    s(e);
                                                }
                                            })
                                            .catch(function(e) {
                                                s(e);
                                            });
                                    });
                                }
                            }
                        ]),
                        e
                    );
                })(),
                y = g.a.createActions(_),
                E = (a(2),
                (function() {
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
                })());
            var w = (function(e) {
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
                            message: a.props.message,
                            messageParsed: null,
                            showRawMessage: !1,
                            noVerification: a.props.noVerification,
                            verified: null,
                            notification: null
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
                    E(t, [
                        {
                            key: "_verifyMessage",
                            value: function(e) {
                                var t = this;
                                this.setState({
                                    message: e,
                                    messageParsed: null,
                                    verified: null
                                });
                                var a = null;
                                try {
                                    (a = y.parseMessage(e)),
                                        this.setState({
                                            verified: null,
                                            messageParsed: a
                                        }),
                                        this.state.noVerification ||
                                            (this.setState({
                                                verified: null,
                                                notification: u.a.translate(
                                                    "account.signedmessages.verifying"
                                                )
                                            }),
                                            setTimeout(function() {
                                                try {
                                                    y.verifyMemo(a),
                                                        t.setState({
                                                            verified: !0,
                                                            notification: ""
                                                        });
                                                } catch (e) {
                                                    t._warning(e.message),
                                                        t.setState({
                                                            verified: !1
                                                        });
                                                }
                                            }, 0));
                                } catch (e) {
                                    this._warning(e.message);
                                }
                            }
                        },
                        {
                            key: "componentWillMount",
                            value: function() {
                                this._verifyMessage(this.state.message);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = e.message;
                                (void 0 != t &&
                                    null != t &&
                                    t == this.state.message) ||
                                    this._verifyMessage(t);
                            }
                        },
                        {
                            key: "_warning",
                            value: function(e) {
                                this.setState({notification: e});
                            }
                        },
                        {
                            key: "_toggleRawMessage",
                            value: function() {
                                this.setState({
                                    showRawMessage: !this.state.showRawMessage
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = void 0,
                                    t = void 0;
                                null != this.state.messageParsed &&
                                    (null == this.state.verified
                                        ? ((t = "#FFF"),
                                          (e =
                                              "Unverified message from " +
                                              this.state.messageParsed.meta
                                                  .account))
                                        : this.state.verified
                                            ? ((t = "#FFF"),
                                              (e =
                                                  "Verified message from " +
                                                  this.state.messageParsed.meta
                                                      .account))
                                            : ((t = "#F00"),
                                              (e =
                                                  "Refuted message, indicated sender " +
                                                  this.state.messageParsed.meta
                                                      .account)));
                                var a =
                                        null != this.props.message &&
                                        "" != this.props.message,
                                    s =
                                        this.state.notification &&
                                        "" != this.state.notification;
                                return n.a.createElement(
                                    "div",
                                    {
                                        style: {
                                            color: "gray",
                                            margin: "10px 10px"
                                        }
                                    },
                                    null != this.state.messageParsed &&
                                        n.a.createElement(
                                            "fieldset",
                                            {style: {borderColor: t}},
                                            n.a.createElement(
                                                "legend",
                                                {
                                                    style: {
                                                        color: "white",
                                                        weight: "bold"
                                                    }
                                                },
                                                e
                                            ),
                                            n.a.createElement(
                                                "pre",
                                                {
                                                    style: {
                                                        position: "relative",
                                                        width: "100%",
                                                        display: "table"
                                                    }
                                                },
                                                this.state.messageParsed
                                                    .content,
                                                s &&
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                textAlign:
                                                                    "center",
                                                                display:
                                                                    "table-cell",
                                                                verticalAlign:
                                                                    "middle",
                                                                position:
                                                                    "absolute",
                                                                width:
                                                                    "calc(100% - 30px)",
                                                                height:
                                                                    "calc(100% + 15px)",
                                                                top: "0px",
                                                                right: "30px",
                                                                backgroundColor:
                                                                    "rgba(50,50,50,0.5)"
                                                            },
                                                            id: "overlay"
                                                        },
                                                        this.state.notification
                                                    )
                                            ),
                                            n.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        fontSize: "small",
                                                        float: "right"
                                                    }
                                                },
                                                "Signed on ",
                                                this.state.messageParsed.meta
                                                    .timestamp,
                                                " ",
                                                " ",
                                                n.a.createElement(
                                                    "button",
                                                    {
                                                        className: "button",
                                                        type: "button",
                                                        style: {
                                                            fontSize: "small",
                                                            float: "right",
                                                            padding: "0px 0px",
                                                            background: "#777"
                                                        },
                                                        onClick: this._toggleRawMessage.bind(
                                                            this
                                                        )
                                                    },
                                                    "🔍"
                                                )
                                            ),
                                            this.state.showRawMessage &&
                                                n.a.createElement("br", null),
                                            this.state.showRawMessage &&
                                                n.a.createElement("br", null),
                                            this.state.showRawMessage &&
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            overflow: "auto",
                                                            width: "calc(100%)",
                                                            maxWidth: "1000px"
                                                        }
                                                    },
                                                    n.a.createElement(
                                                        "pre",
                                                        null,
                                                        this.state.message
                                                    )
                                                )
                                        ),
                                    a &&
                                        null == this.state.messageParsed &&
                                        n.a.createElement(
                                            "fieldset",
                                            {style: {borderColor: "#F00"}},
                                            n.a.createElement(
                                                "legend",
                                                {
                                                    style: {
                                                        color: "red",
                                                        weight: "bold"
                                                    },
                                                    className: "error"
                                                },
                                                "Error while parsing message, please check syntax from message below"
                                            ),
                                            n.a.createElement(
                                                "pre",
                                                null,
                                                this.props.message
                                            )
                                        )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            w.defaultProps = {noVerification: !1};
            var k = w,
                M = (a(9), a(104)),
                S = (function() {
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
            var P = (function(e) {
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
                            tabsm_memo_key: a.props.account
                                .get("options")
                                .get("memo_key"),
                            tabsm_popup: "",
                            tabsm_message_text: null,
                            tabsm_message_signed: null,
                            tabvm_popup: "",
                            tabvm_message_signed: null,
                            tabvm_verified: null,
                            tabvm_message_signed_and_verified: null,
                            tabvm_flag_verifyonchange: !1
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
                    S(t, [
                        {
                            key: "_tabSMSignAction",
                            value: function(e) {
                                var t = this;
                                e.preventDefault();
                                try {
                                    var a = this.props.account
                                        .get("options")
                                        .get("memo_key");
                                    if (this.state.tabsm_memo_key !== a)
                                        throw Error(
                                            u.a.translate(
                                                "account.signedmessages.keymismatch"
                                            )
                                        );
                                    this.state.tabsm_message_text &&
                                        (this._tabSMPopMessage(
                                            u.a.translate(
                                                "account.signedmessages.signing"
                                            ),
                                            0
                                        ),
                                        y
                                            .signMessage(
                                                this.props.account,
                                                this.state.tabsm_message_text
                                            )
                                            .then(function(e) {
                                                t.setState({
                                                    tabsm_message_signed: e,
                                                    tabsm_popup: ""
                                                });
                                            })
                                            .catch(function(e) {
                                                t._tabSMPopMessage(e.message),
                                                    t.setState({
                                                        tabsm_message_signed: null
                                                    });
                                            }));
                                } catch (e) {
                                    this._tabSMPopMessage(e.message),
                                        this.setState({
                                            tabsm_message_signed: null
                                        });
                                }
                            }
                        },
                        {
                            key: "_tabSMHandleChange",
                            value: function(e) {
                                this.setState({
                                    tabsm_message_text: e.target.value
                                });
                            }
                        },
                        {
                            key: "_tabSMHandleChangeKey",
                            value: function(e) {
                                this.setState({tabsm_memo_key: e});
                            }
                        },
                        {
                            key: "_tabSMCopyToClipBoard",
                            value: function(e) {
                                if ("" !== e.target.value) {
                                    e.target.focus(), e.target.select();
                                    try {
                                        var t = document.execCommand("copy");
                                        this._tabSMPopMessage(
                                            t
                                                ? u.a.translate(
                                                      "account.signedmessages.copysuccessful"
                                                  )
                                                : u.a.translate(
                                                      "account.signedmessages.copyunsuccessful"
                                                  )
                                        );
                                    } catch (e) {
                                        this._tabSMPopMessage(
                                            u.a.translate(
                                                "account.signedmessages.copyunsuccessful"
                                            )
                                        );
                                    }
                                }
                            }
                        },
                        {
                            key: "_tabSMPopMessage",
                            value: function(e) {
                                var t = this,
                                    a =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 3e3;
                                this.setState({tabsm_popup: e}),
                                    "" !== e &&
                                        a > 0 &&
                                        setTimeout(function() {
                                            t.setState({tabsm_popup: ""});
                                        }, a);
                            }
                        },
                        {
                            key: "_tabVMAction",
                            value: function(e) {
                                var t = this;
                                e.preventDefault(),
                                    this.setState({
                                        tabvm_message_signed_and_verified: null,
                                        tabvm_verified: !1
                                    }),
                                    this.state.tabvm_message_signed &&
                                        (this._tabVMPopMessage(
                                            u.a.translate(
                                                "account.signedmessages.verifying"
                                            ),
                                            0
                                        ),
                                        setTimeout(function() {
                                            try {
                                                var e = y.verifyMemo(
                                                    t.state.tabvm_message_signed
                                                );
                                                t.setState({
                                                    tabvm_message_signed_and_verified: e,
                                                    tabvm_verified: !0,
                                                    tabvm_popup: ""
                                                });
                                            } catch (e) {
                                                t._tabVMPopMessage(e.message),
                                                    t.setState({
                                                        tabvm_message_signed_and_verified: null,
                                                        tabvm_verified: !1
                                                    });
                                            }
                                        }, 0));
                            }
                        },
                        {
                            key: "_tabVMHandleChange",
                            value: function(e) {
                                this.setState({
                                    tabvm_message_signed: e.target.value,
                                    tabvm_verified: !1,
                                    tabvm_message_signed_and_verified: null
                                }),
                                    this.state.tabvm_flag_verifyonchange &&
                                        this._tabVMAction(e);
                            }
                        },
                        {
                            key: "_tabVMPopMessage",
                            value: function(e) {
                                var t = this,
                                    a =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 3e3;
                                this.setState({tabvm_popup: e}),
                                    "" !== e &&
                                        a > 0 &&
                                        setTimeout(function() {
                                            t.setState({tabvm_popup: ""});
                                        }, a);
                            }
                        },
                        {
                            key: "_tabVMToggleVerifyOnChange",
                            value: function() {
                                this.setState({
                                    tabvm_flag_verifyonchange: !this.state
                                        .tabvm_flag_verifyonchange
                                });
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = [
                                    {
                                        title:
                                            "account.signedmessages.signmessage",
                                        content: n.a.createElement(
                                            "div",
                                            {
                                                className: "grid-content",
                                                style: {overflowX: "hidden"}
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block no-margin"
                                                },
                                                n.a.createElement(
                                                    "h3",
                                                    null,
                                                    n.a.createElement(r.a, {
                                                        content:
                                                            "account.signedmessages.signmessage"
                                                    })
                                                )
                                            ),
                                            n.a.createElement(o.a, {
                                                ref: "memo_key",
                                                value: this.state
                                                    .tabsm_memo_key,
                                                label:
                                                    "account.perm.memo_public_key",
                                                placeholder: "Public Key",
                                                tabIndex: 7,
                                                onChange: this._tabSMHandleChangeKey.bind(
                                                    this
                                                ),
                                                disableActionButton: !0
                                            }),
                                            n.a.createElement("br", null),
                                            n.a.createElement("textarea", {
                                                rows: "4",
                                                value: this.state
                                                    .tabsm_message_text,
                                                onChange: this._tabSMHandleChange.bind(
                                                    this
                                                ),
                                                placeholder: u.a.translate(
                                                    "account.signedmessages.entermessage"
                                                )
                                            }),
                                            n.a.createElement(
                                                "span",
                                                null,
                                                n.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "button btn large inverted",
                                                        style: {
                                                            "margin-top": "10px"
                                                        },
                                                        onClick: this._tabSMSignAction.bind(
                                                            this
                                                        )
                                                    },
                                                    u.a.translate(
                                                        "account.signedmessages.sign"
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "text",
                                                    {style: {color: "gray"}},
                                                    this.state.tabsm_popup
                                                )
                                            ),
                                            n.a.createElement("br", null),
                                            n.a.createElement("br", null),
                                            n.a.createElement("textarea", {
                                                rows: "4",
                                                value: this.state
                                                    .tabsm_message_signed,
                                                style: {editable: !1},
                                                placeholder: u.a.translate(
                                                    "account.signedmessages.automaticcreation"
                                                ),
                                                onClick: this._tabSMCopyToClipBoard.bind(
                                                    this
                                                )
                                            })
                                        )
                                    },
                                    {
                                        title:
                                            "account.signedmessages.verifymessage",
                                        content: n.a.createElement(
                                            "div",
                                            {
                                                className: "grid-content",
                                                style: {overflowX: "hidden"}
                                            },
                                            n.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content-block no-margin"
                                                },
                                                n.a.createElement(
                                                    "h3",
                                                    null,
                                                    n.a.createElement(r.a, {
                                                        content:
                                                            "account.signedmessages.verifymessage"
                                                    })
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    {
                                                        style: {
                                                            float: "right",
                                                            marginTop: "0.1em",
                                                            marginBottom:
                                                                "0.5em",
                                                            display: "flex",
                                                            alignItems: "center"
                                                        }
                                                    },
                                                    n.a.createElement(r.a, {
                                                        content:
                                                            "account.signedmessages.verifyonchange"
                                                    }),
                                                    " ",
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            className: "switch",
                                                            onClick: this._tabVMToggleVerifyOnChange.bind(
                                                                this
                                                            )
                                                        },
                                                        n.a.createElement(
                                                            "input",
                                                            {
                                                                type:
                                                                    "checkbox",
                                                                checked: this
                                                                    .state
                                                                    .tabvm_flag_verifyonchange,
                                                                value: u.a.translate(
                                                                    "account.signedmessages.verifyonchange"
                                                                )
                                                            }
                                                        ),
                                                        n.a.createElement(
                                                            "label",
                                                            null
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement("textarea", {
                                                rows: "4",
                                                value: this.state
                                                    .tabvm_message_signed,
                                                onChange: this._tabVMHandleChange.bind(
                                                    this
                                                ),
                                                placeholder: u.a.translate(
                                                    "account.signedmessages.entermessage"
                                                )
                                            }),
                                            n.a.createElement(
                                                "span",
                                                null,
                                                n.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "button btn large inverted",
                                                        style: {
                                                            "margin-top": "10px"
                                                        },
                                                        onClick: this._tabVMAction.bind(
                                                            this
                                                        )
                                                    },
                                                    u.a.translate(
                                                        "account.signedmessages.verify"
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "text",
                                                    {style: {color: "gray"}},
                                                    this.state.tabvm_popup
                                                ),
                                                null !==
                                                    this.state.tabvm_verified &&
                                                    n.a.createElement(
                                                        "div",
                                                        {
                                                            style: {
                                                                float: "right"
                                                            }
                                                        },
                                                        "Message is:",
                                                        n.a.createElement(
                                                            "div",
                                                            {
                                                                style: {
                                                                    backgroundColor: this
                                                                        .state
                                                                        .tabvm_verified
                                                                        ? "green"
                                                                        : "red"
                                                                }
                                                            },
                                                            n.a.createElement(
                                                                "label",
                                                                null,
                                                                this.state
                                                                    .tabvm_verified
                                                                    ? "verified"
                                                                    : "not verified"
                                                            )
                                                        )
                                                    ),
                                                ((this.state.tabvm_verified &&
                                                    null !==
                                                        this.state
                                                            .tabvm_message_signed_and_verified) ||
                                                    this.state
                                                        .tabvm_flag_verifyonchange) &&
                                                    n.a.createElement(
                                                        "div",
                                                        null,
                                                        n.a.createElement(
                                                            "br",
                                                            null
                                                        ),
                                                        n.a.createElement(k, {
                                                            message: this.state
                                                                .tabvm_message_signed
                                                        })
                                                    )
                                            )
                                        )
                                    }
                                ];
                                return n.a.createElement(M.a, {
                                    items: e,
                                    dashboardTabsClass: "permissions small"
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            (P.propTypes = {account: l.a.ChainAccount.isRequired}),
                (P = Object(c.a)(P));
            t.default = P;
        }
    }
]);
