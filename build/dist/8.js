(window.webpackJsonp = window.webpackJsonp || []).push([
    [8, 7],
    {
        190: function(e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "BackupCreate", function() {
                    return x;
                }),
                n.d(t, "BackupRestore", function() {
                    return A;
                }),
                n.d(t, "Restore", function() {
                    return W;
                }),
                n.d(t, "NewWalletName", function() {
                    return M;
                }),
                n.d(t, "Download", function() {
                    return B;
                }),
                n.d(t, "Create", function() {
                    return L;
                }),
                n.d(t, "Upload", function() {
                    return D;
                }),
                n.d(t, "NameSizeModified", function() {
                    return F;
                }),
                n.d(t, "DecryptBackup", function() {
                    return I;
                }),
                n.d(t, "Sha1", function() {
                    return z;
                });
            var a = n(0),
                r = n.n(a),
                o = n(2),
                i = n.n(o),
                s = n(11),
                l = n(79),
                c = n(15),
                u = n(44),
                p = n(46),
                f = n(164),
                m = n(16),
                d = n(67),
                h = n(28),
                b = n(119),
                v = n(9),
                y = n.n(v),
                g = n(1),
                _ = n.n(g),
                w = n(4),
                E = n(10),
                k = n(283),
                O = n(3),
                N = n.n(O),
                S = (function() {
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
            function C(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function P(e, t) {
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
            var T = {
                    listenTo: function() {
                        return [p.a, f.a];
                    },
                    getProps: function() {
                        return {wallet: p.a.getState(), backup: f.a.getState()};
                    }
                },
                x = (function(e) {
                    function t() {
                        return (
                            j(this, t),
                            C(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        P(t, a["Component"]),
                        S(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        {style: {maxWidth: "40rem"}},
                                        r.a.createElement(
                                            L,
                                            {
                                                noText: this.props.noText,
                                                newAccount: this.props.location
                                                    ? this.props.location.query
                                                          .newAccount
                                                    : null
                                            },
                                            r.a.createElement(F, null),
                                            this.props.noText
                                                ? null
                                                : r.a.createElement(z, null),
                                            r.a.createElement(B, {
                                                downloadCb: this.props
                                                    .downloadCb
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })();
            x = Object(c.connect)(x, T);
            var A = (function(e) {
                function t() {
                    j(this, t);
                    var e = C(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {newWalletName: null}), e;
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                d.c.reset();
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.wallet.new_wallet;
                                this.props.wallet.wallet_names.has(e);
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(_.a, {
                                        style: {
                                            textAlign: "left",
                                            maxWidth: "30rem"
                                        },
                                        component: "p",
                                        content: "wallet.import_backup_choose"
                                    }),
                                    new FileReader().readAsBinaryString
                                        ? null
                                        : r.a.createElement(
                                              "p",
                                              {className: "error"},
                                              "Warning! You browser doesn't support some some file operations required to restore backup, we recommend you to use Chrome or Firefox browsers to restore your backup."
                                          ),
                                    r.a.createElement(
                                        D,
                                        null,
                                        r.a.createElement(F, null),
                                        r.a.createElement(
                                            I,
                                            {saveWalletObject: !0},
                                            r.a.createElement(
                                                M,
                                                null,
                                                r.a.createElement(W, null)
                                            )
                                        )
                                    ),
                                    r.a.createElement(
                                        s.b,
                                        {to: "/"},
                                        r.a.createElement(
                                            "button",
                                            {className: "btn large inverted"},
                                            N.a.translate("wallet.back")
                                        )
                                    )
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            A = Object(c.connect)(A, T);
            var W = (function(e) {
                function t() {
                    j(this, t);
                    var e = C(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {}), e;
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "isRestored",
                            value: function() {
                                var e = this.props.wallet.new_wallet;
                                return this.props.wallet.wallet_names.has(e);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this.props.wallet.new_wallet;
                                return this.isRestored()
                                    ? r.a.createElement(
                                          "span",
                                          null,
                                          r.a.createElement(
                                              "h5",
                                              null,
                                              r.a.createElement(_.a, {
                                                  content:
                                                      "wallet.restore_success",
                                                  name: e.toUpperCase()
                                              })
                                          ),
                                          r.a.createElement(
                                              s.b,
                                              {to: "/"},
                                              r.a.createElement(
                                                  "div",
                                                  {className: "button outline"},
                                                  r.a.createElement(_.a, {
                                                      component: "span",
                                                      content:
                                                          "header.dashboard"
                                                  })
                                              )
                                          ),
                                          r.a.createElement(
                                              "div",
                                              null,
                                              this.props.children
                                          )
                                      )
                                    : r.a.createElement(
                                          "span",
                                          null,
                                          r.a.createElement(
                                              "h3",
                                              null,
                                              r.a.createElement(_.a, {
                                                  content:
                                                      "wallet.ready_to_restore"
                                              })
                                          ),
                                          r.a.createElement(
                                              "button",
                                              {
                                                  className:
                                                      "btn large outline",
                                                  onClick: this.onRestore.bind(
                                                      this
                                                  )
                                              },
                                              couterpart.translate(
                                                  "wallet.restore_wallet_of",
                                                  {name: e}
                                              )
                                          )
                                      );
                            }
                        },
                        {
                            key: "onRestore",
                            value: function() {
                                u.a.restore(
                                    this.props.wallet.new_wallet,
                                    this.props.backup.wallet_object
                                ),
                                    E.a.changeSetting({
                                        setting: "passwordLogin",
                                        value: !1
                                    });
                            }
                        }
                    ]),
                    t
                );
            })();
            W = Object(c.connect)(W, T);
            var M = (function(e) {
                function t() {
                    j(this, t);
                    var e = C(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = {new_wallet: null, accept: !1}), e;
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                var e = !!this.props.wallet.current_wallet;
                                if (!e) {
                                    var t = "default";
                                    this.props.backup.name &&
                                        (t = this.props.backup.name.match(
                                            /[a-z0-9_-]*/
                                        )[0]),
                                        p.a.setNewWallet(t),
                                        this.setState({accept: !0});
                                }
                                if (
                                    e &&
                                    this.props.backup.name &&
                                    !this.state.new_wallet
                                ) {
                                    var n = this.props.backup.name
                                        .toLowerCase()
                                        .match(/[a-z0-9_-]*/)[0];
                                    n && this.setState({new_wallet: n});
                                }
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                if (this.state.accept)
                                    return r.a.createElement(
                                        "span",
                                        null,
                                        this.props.children
                                    );
                                var e = !!this.state.new_wallet,
                                    t =
                                        !!e &&
                                        this.props.wallet.wallet_names.has(
                                            this.state.new_wallet
                                        ),
                                    n = !t && e;
                                return r.a.createElement(
                                    "form",
                                    {onSubmit: this.onAccept.bind(this)},
                                    r.a.createElement(
                                        "h5",
                                        null,
                                        r.a.createElement(_.a, {
                                            content: "wallet.new_wallet_name"
                                        })
                                    ),
                                    r.a.createElement("input", {
                                        type: "text",
                                        id: "new_wallet",
                                        onChange: this.formChange.bind(this),
                                        value: this.state.new_wallet
                                    }),
                                    r.a.createElement(
                                        "p",
                                        null,
                                        t
                                            ? r.a.createElement(_.a, {
                                                  content: "wallet.wallet_exist"
                                              })
                                            : null
                                    ),
                                    r.a.createElement(
                                        "button",
                                        {
                                            className: "btn large outline",
                                            disabled: !n,
                                            onClick: this.onAccept.bind(this)
                                        },
                                        N.a.translate("wallet.accept")
                                    )
                                );
                            }
                        },
                        {
                            key: "onAccept",
                            value: function(e) {
                                e && e.preventDefault(),
                                    this.setState({accept: !0}),
                                    p.a.setNewWallet(this.state.new_wallet);
                            }
                        },
                        {
                            key: "formChange",
                            value: function(e) {
                                var t = e.target.id,
                                    n = e.target.value;
                                if (
                                    "new_wallet" !== t ||
                                    ((n = n.toLowerCase()),
                                    !/[^a-z0-9_-]/.test(n))
                                ) {
                                    var a = {};
                                    (a[t] = n), this.setState(a);
                                }
                            }
                        }
                    ]),
                    t
                );
            })();
            M = Object(c.connect)(M, T);
            var B = (function(e) {
                function t() {
                    return (
                        j(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "componentWillMount",
                            value: function() {
                                try {
                                    this.isFileSaverSupported = !!new Blob();
                                } catch (e) {}
                            }
                        },
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.isFileSaverSupported ||
                                    h.a.error("File saving is not supported");
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    {
                                        className: "button",
                                        onClick: this.onDownload.bind(this)
                                    },
                                    r.a.createElement(_.a, {
                                        content: "wallet.download"
                                    })
                                );
                            }
                        },
                        {
                            key: "onDownload",
                            value: function() {
                                var e = new Blob([this.props.backup.contents], {
                                    type:
                                        "application/octet-stream; charset=us-ascii"
                                });
                                if (e.size !== this.props.backup.size)
                                    throw new Error(
                                        "Invalid backup to download conversion"
                                    );
                                Object(b.saveAs)(e, this.props.backup.name),
                                    u.a.setBackupDate(),
                                    this.props.downloadCb &&
                                        this.props.downloadCb();
                            }
                        }
                    ]),
                    t
                );
            })();
            B = Object(c.connect)(B, T);
            var L = (function(e) {
                function t() {
                    return (
                        j(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "getBackupName",
                            value: function() {
                                return Object(k.a)(
                                    this.props.wallet.current_wallet
                                );
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                if (!!this.props.backup.contents)
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        this.props.children
                                    );
                                var e = null != m.a.getWallet();
                                return r.a.createElement(
                                    "div",
                                    null,
                                    this.props.noText
                                        ? null
                                        : r.a.createElement(
                                              "div",
                                              {style: {textAlign: "left"}},
                                              this.props.newAccount
                                                  ? r.a.createElement(_.a, {
                                                        component: "p",
                                                        content:
                                                            "wallet.backup_new_account"
                                                    })
                                                  : null,
                                              r.a.createElement(_.a, {
                                                  component: "p",
                                                  content:
                                                      "wallet.backup_explain"
                                              })
                                          ),
                                    r.a.createElement(
                                        "div",
                                        {
                                            onClick: this.onCreateBackup.bind(
                                                this
                                            ),
                                            className: y()(
                                                "button btn large inverted",
                                                {disabled: !e}
                                            ),
                                            style: {marginBottom: 10}
                                        },
                                        r.a.createElement(_.a, {
                                            content: "wallet.create_backup_of",
                                            name: this.props.wallet
                                                .current_wallet
                                        })
                                    ),
                                    r.a.createElement(R, null)
                                );
                            }
                        },
                        {
                            key: "onCreateBackup",
                            value: function() {
                                var e = this,
                                    t = m.a.getWallet().password_pubkey;
                                Object(d.a)(t).then(function(t) {
                                    var n = e.getBackupName();
                                    d.c.incommingBuffer({name: n, contents: t});
                                });
                            }
                        }
                    ]),
                    t
                );
            })();
            L = Object(c.connect)(L, T);
            var R = (function(e) {
                    function t() {
                        return (
                            j(this, t),
                            C(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        P(t, a["Component"]),
                        S(t, [
                            {
                                key: "render",
                                value: function() {
                                    if (!m.a.getWallet()) return null;
                                    var e = m.a.getWallet().backup_date,
                                        t = m.a.getWallet().last_modified,
                                        n = e
                                            ? r.a.createElement(
                                                  "h4",
                                                  null,
                                                  r.a.createElement(_.a, {
                                                      content:
                                                          "wallet.last_backup"
                                                  }),
                                                  " ",
                                                  r.a.createElement(l.a, {
                                                      value: e
                                                  })
                                              )
                                            : r.a.createElement(_.a, {
                                                  style: {paddingTop: 20},
                                                  className: "facolor-error",
                                                  component: "p",
                                                  content:
                                                      "wallet.never_backed_up"
                                              }),
                                        a = null;
                                    return (
                                        e &&
                                            (a =
                                                t.getTime() > e.getTime()
                                                    ? r.a.createElement(
                                                          "h4",
                                                          {
                                                              className:
                                                                  "facolor-error"
                                                          },
                                                          r.a.createElement(
                                                              _.a,
                                                              {
                                                                  content:
                                                                      "wallet.need_backup"
                                                              }
                                                          )
                                                      )
                                                    : r.a.createElement(
                                                          "h4",
                                                          {
                                                              className:
                                                                  "success"
                                                          },
                                                          r.a.createElement(
                                                              _.a,
                                                              {
                                                                  content:
                                                                      "wallet.noneed_backup"
                                                              }
                                                          )
                                                      )),
                                        r.a.createElement("span", null, n, a)
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                D = (function(e) {
                    function t() {
                        return (
                            j(this, t),
                            C(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                    this,
                                    arguments
                                )
                            )
                        );
                    }
                    return (
                        P(t, a["Component"]),
                        S(t, [
                            {
                                key: "reset",
                                value: function() {
                                    d.c.reset();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = r.a.createElement(
                                        "div",
                                        {style: {paddingTop: 20}},
                                        r.a.createElement(
                                            "button",
                                            {
                                                className: "btn large outline",
                                                disabled: !this.props.backup
                                                    .contents,
                                                onClick: this.reset.bind(this)
                                            },
                                            N.a.translate("wallet.reset")
                                        )
                                    );
                                    if (
                                        this.props.backup.contents &&
                                        this.props.backup.public_key
                                    )
                                        return r.a.createElement(
                                            "span",
                                            null,
                                            this.props.children,
                                            e
                                        );
                                    var t =
                                        this.props.backup.contents &&
                                        !this.props.backup.public_key;
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement("input", {
                                            ref: "file_input",
                                            accept: ".bin",
                                            type: "file",
                                            id: "backup_input_file",
                                            onChange: this.onFileUpload.bind(
                                                this
                                            )
                                        }),
                                        t
                                            ? r.a.createElement(
                                                  "h5",
                                                  null,
                                                  r.a.createElement(_.a, {
                                                      content:
                                                          "wallet.invalid_format"
                                                  })
                                              )
                                            : null,
                                        e
                                    );
                                }
                            },
                            {
                                key: "onFileUpload",
                                value: function(e) {
                                    var t = e.target.files[0];
                                    d.c.incommingWebFile(t), this.forceUpdate();
                                }
                            }
                        ]),
                        t
                    );
                })();
            D = Object(c.connect)(D, T);
            var F = (function(e) {
                function t() {
                    return (
                        j(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "span",
                                    null,
                                    r.a.createElement(
                                        "h5",
                                        null,
                                        r.a.createElement(
                                            "b",
                                            null,
                                            this.props.backup.name
                                        ),
                                        " (",
                                        this.props.backup.size,
                                        " ",
                                        "bytes)"
                                    ),
                                    this.props.backup.last_modified
                                        ? r.a.createElement(
                                              "div",
                                              null,
                                              this.props.backup.last_modified
                                          )
                                        : null,
                                    r.a.createElement("br", null)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            F = Object(c.connect)(F, T);
            var I = (function(e) {
                function t() {
                    j(this, t);
                    var e = C(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return (e.state = e._getInitialState()), e;
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "_getInitialState",
                            value: function() {
                                return {backup_password: "", verified: !1};
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.state.verified
                                    ? r.a.createElement(
                                          "span",
                                          null,
                                          this.props.children
                                      )
                                    : r.a.createElement(
                                          "form",
                                          {
                                              onSubmit: this.onPassword.bind(
                                                  this
                                              )
                                          },
                                          r.a.createElement(
                                              "label",
                                              null,
                                              r.a.createElement(_.a, {
                                                  content:
                                                      "wallet.enter_password"
                                              })
                                          ),
                                          r.a.createElement("input", {
                                              type: "password",
                                              id: "backup_password",
                                              onChange: this.formChange.bind(
                                                  this
                                              ),
                                              value: this.state.backup_password
                                          }),
                                          r.a.createElement(z, null),
                                          r.a.createElement(
                                              "div",
                                              {
                                                  type: "submit",
                                                  className: "button outline",
                                                  onClick: this.onPassword.bind(
                                                      this
                                                  )
                                              },
                                              r.a.createElement(_.a, {
                                                  content: "wallet.submit"
                                              })
                                          )
                                      );
                            }
                        },
                        {
                            key: "onPassword",
                            value: function(e) {
                                var t = this;
                                e && e.preventDefault();
                                var n = w.h.fromSeed(
                                        this.state.backup_password || ""
                                    ),
                                    a = this.props.backup.contents;
                                Object(d.b)(n.toWif(), a)
                                    .then(function(e) {
                                        t.setState({verified: !0}),
                                            t.props.saveWalletObject &&
                                                f.a.setWalletObjct(e);
                                    })
                                    .catch(function(e) {
                                        console.error(
                                            "Error verifying wallet " +
                                                t.props.backup.name,
                                            e,
                                            e.stack
                                        ),
                                            "invalid_decryption_key" === e
                                                ? h.a.error("Invalid Password")
                                                : h.a.error("" + e);
                                    });
                            }
                        },
                        {
                            key: "formChange",
                            value: function(e) {
                                var t = {};
                                (t[e.target.id] = e.target.value),
                                    this.setState(t);
                            }
                        }
                    ]),
                    t
                );
            })();
            (I.propTypes = {saveWalletObject: i.a.bool}),
                (I = Object(c.connect)(I, T));
            var z = (function(e) {
                function t() {
                    return (
                        j(this, t),
                        C(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    P(t, a["Component"]),
                    S(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    "div",
                                    null,
                                    r.a.createElement(
                                        "pre",
                                        {className: "no-overflow"},
                                        this.props.backup.sha1,
                                        " * SHA1"
                                    ),
                                    r.a.createElement("br", null)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            z = Object(c.connect)(z, T);
        },
        4982: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(8),
                i = n(183),
                s = n(50),
                l = n.n(s),
                c = n(386),
                u = n(3),
                p = n.n(u),
                f = n(114),
                m = n(1),
                d = n.n(m),
                h = n(10),
                b = n(224),
                v = n(22),
                y = n(205),
                g = n.n(y),
                _ = n(9),
                w = n.n(_),
                E = n(57),
                k = n(225),
                O = (function() {
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
            function N(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function S(e, t) {
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
            var C = (function(e) {
                    function t(e) {
                        N(this, t);
                        var n = S(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        return (
                            (n.state = {isOpen: !1}),
                            (n.handleClickOutside = n.handleClickOutside.bind(
                                n
                            )),
                            n
                        );
                    }
                    return (
                        j(t, r.a.Component),
                        O(t, [
                            {
                                key: "handleClickOutside",
                                value: function() {
                                    this.setState({isOpen: !1});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.setting,
                                        a = t.options,
                                        o = t.selected,
                                        i = t.onChange;
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className: w()(
                                                "select",
                                                {"select-withicon": !!o.icon},
                                                {"is-open": this.state.isOpen}
                                            )
                                        },
                                        r.a.createElement(
                                            "span",
                                            {
                                                className: "placeholder",
                                                onClick: function(t) {
                                                    t.preventDefault(),
                                                        e.setState({
                                                            isOpen: !e.state
                                                                .isOpen
                                                        });
                                                }
                                            },
                                            o.icon
                                                ? r.a.createElement("i", {
                                                      className: "icon",
                                                      style: {
                                                          backgroundImage:
                                                              "url(" +
                                                              o.icon +
                                                              ")"
                                                      }
                                                  })
                                                : null,
                                            o.label
                                        ),
                                        r.a.createElement(
                                            "ul",
                                            null,
                                            a
                                                .filter(function(e) {
                                                    return e.key !== o.key;
                                                })
                                                .map(function(t) {
                                                    return r.a.createElement(
                                                        "li",
                                                        {
                                                            key: t.key,
                                                            onClick: function(
                                                                a
                                                            ) {
                                                                i.bind(
                                                                    e,
                                                                    n,
                                                                    t.key
                                                                )(a),
                                                                    e.setState({
                                                                        isOpen: !1
                                                                    });
                                                            }
                                                        },
                                                        t.icon
                                                            ? r.a.createElement(
                                                                  "i",
                                                                  {
                                                                      className:
                                                                          "icon",
                                                                      style: {
                                                                          backgroundImage:
                                                                              "url(" +
                                                                              t.icon +
                                                                              ")"
                                                                      }
                                                                  }
                                                              )
                                                            : null,
                                                        t.label
                                                    );
                                                })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                P = Object(k.a)(C),
                T = (function(e) {
                    function t() {
                        N(this, t);
                        var e = S(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (
                            (e.state = {message: null}),
                            (e.handleNotificationChange = e.handleNotificationChange.bind(
                                e
                            )),
                            e
                        );
                    }
                    return (
                        j(t, r.a.Component),
                        O(t, [
                            {
                                key: "_setMessage",
                                value: function(e) {
                                    var t = this;
                                    this.setState({message: p.a.translate(e)}),
                                        (this.timer = setTimeout(function() {
                                            t.setState({message: null});
                                        }, 4e3));
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    clearTimeout(this.timer);
                                }
                            },
                            {
                                key: "handleNotificationChange",
                                value: function(e) {
                                    var t = this;
                                    return function(n) {
                                        t.props.onNotificationChange(
                                            e,
                                            !!n.target.checked
                                        );
                                    };
                                }
                            },
                            {
                                key: "getFlag",
                                value: function(e) {
                                    var t = {
                                        en: E.greatBritainFlag,
                                        zh: E.chinaFlag,
                                        fr: E.franceFlag,
                                        ko: E.southKoreaFlag,
                                        de: E.germanyFlag,
                                        es: E.spainFlag,
                                        it: E.italyFlag,
                                        tr: E.turkeyFlag,
                                        ru: E.russiaFlag,
                                        ja: E.japanFlag
                                    };
                                    return t[e] ? t[e] : null;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.defaults,
                                        a = t.setting,
                                        o = void 0,
                                        i = void 0,
                                        s = void 0,
                                        l = t.settings.get(a),
                                        c = null;
                                    switch (a) {
                                        case "locale":
                                            (i = {
                                                key: l,
                                                label: p()("languages." + l),
                                                icon: this.getFlag(l)
                                            }),
                                                (o = n.map(function(t) {
                                                    return {
                                                        key: t,
                                                        label: p()(
                                                            "languages." + t
                                                        ),
                                                        icon: e.getFlag(t)
                                                    };
                                                }));
                                            break;
                                        case "themes":
                                            (i = l),
                                                (o = n.map(function(e) {
                                                    var t = "settings." + e,
                                                        n = p.a.translate(t);
                                                    return r.a.createElement(
                                                        "option",
                                                        {key: e, value: e},
                                                        n
                                                    );
                                                }));
                                            break;
                                        case "browser_notifications":
                                            (i = l),
                                                (c = r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "settings--notifications"
                                                    },
                                                    r.a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "settings--notifications--group"
                                                        },
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "settings--notifications--item"
                                                            },
                                                            r.a.createElement(
                                                                "label",
                                                                {
                                                                    className:
                                                                        "checkbox"
                                                                },
                                                                r.a.createElement(
                                                                    "input",
                                                                    {
                                                                        type:
                                                                            "checkbox",
                                                                        className:
                                                                            "checkbox__input",
                                                                        checked: !!i.allow,
                                                                        onChange: this.handleNotificationChange(
                                                                            "allow"
                                                                        )
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "checkbox__styled"
                                                                    }
                                                                ),
                                                                r.a.createElement(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "checkbox__label"
                                                                    },
                                                                    p.a.translate(
                                                                        "settings.browser_notifications_allow"
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "settings--notifications--group"
                                                            },
                                                            r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "settings--notifications--item"
                                                                },
                                                                r.a.createElement(
                                                                    "label",
                                                                    {
                                                                        className:
                                                                            "checkbox"
                                                                    },
                                                                    r.a.createElement(
                                                                        "input",
                                                                        {
                                                                            type:
                                                                                "checkbox",
                                                                            className:
                                                                                "checkbox__input",
                                                                            disabled: !i.allow,
                                                                            checked: !!i
                                                                                .additional
                                                                                .transferToMe,
                                                                            onChange: this.handleNotificationChange(
                                                                                "additional.transferToMe"
                                                                            )
                                                                        }
                                                                    ),
                                                                    r.a.createElement(
                                                                        "span",
                                                                        {
                                                                            className: w()(
                                                                                "checkbox__styled",
                                                                                {
                                                                                    disable: !i.allow
                                                                                }
                                                                            )
                                                                        }
                                                                    ),
                                                                    r.a.createElement(
                                                                        "span",
                                                                        {
                                                                            className:
                                                                                "checkbox__label"
                                                                        },
                                                                        p.a.translate(
                                                                            "settings.browser_notifications_additional_transfer_to_me"
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    !!i.allow &&
                                                        g.a.needsPermission &&
                                                        r.a.createElement(
                                                            "a",
                                                            {
                                                                href:
                                                                    "https://goo.gl/zZ7NHY",
                                                                target:
                                                                    "_blank",
                                                                rel:
                                                                    "noopener noreferrer"
                                                            },
                                                            r.a.createElement(
                                                                d.a,
                                                                {
                                                                    component:
                                                                        "div",
                                                                    className:
                                                                        "settings--notifications--no-browser-support",
                                                                    content:
                                                                        "settings.browser_notifications_disabled_by_browser_notify"
                                                                }
                                                            )
                                                        )
                                                ));
                                            break;
                                        case "defaultMarkets":
                                            (o = null), (i = null);
                                            break;
                                        case "walletLockTimeout":
                                            (i = l),
                                                (s = r.a.createElement(
                                                    "input",
                                                    {
                                                        type: "text",
                                                        className:
                                                            "settings-input",
                                                        value: l,
                                                        onChange: function(t) {
                                                            e.props.onChange.bind(
                                                                e,
                                                                a,
                                                                t.target.value
                                                            )(t);
                                                        }
                                                    }
                                                ));
                                            break;
                                        default:
                                            "number" == typeof l
                                                ? (i = n[l])
                                                : "boolean" == typeof l
                                                    ? (i = l ? n[0] : n[1])
                                                    : "string" == typeof l &&
                                                      (i = l),
                                                n
                                                    ? ((o = n.map(function(e) {
                                                          var t = e.translate
                                                              ? p.a.translate(
                                                                    "settings." +
                                                                        e.translate
                                                                )
                                                              : e;
                                                          return (
                                                              "unit" === a &&
                                                                  (t = r.a.createElement(
                                                                      v.a,
                                                                      {name: e}
                                                                  )),
                                                              {
                                                                  key: e.translate
                                                                      ? e.translate
                                                                      : e,
                                                                  label: t
                                                              }
                                                          );
                                                      })),
                                                      (i = {
                                                          key: i.translate
                                                              ? i.translate
                                                              : i,
                                                          label: i.translate
                                                              ? p.a.translate(
                                                                    "settings." +
                                                                        i.translate
                                                                )
                                                              : i
                                                      }))
                                                    : (s = r.a.createElement(
                                                          "input",
                                                          {
                                                              className:
                                                                  "settings-input",
                                                              type: "text",
                                                              defaultValue: i,
                                                              onBlur: function(
                                                                  t
                                                              ) {
                                                                  e.props.onChange.bind(
                                                                      e,
                                                                      a,
                                                                      t.target
                                                                          .value
                                                                  )(t);
                                                              }
                                                          }
                                                      ));
                                    }
                                    return "number" == typeof i || i || o
                                        ? (i &&
                                              i.translate &&
                                              (i = i.translate),
                                          r.a.createElement(
                                              "div",
                                              {className: "options__form__row"},
                                              r.a.createElement(
                                                  "label",
                                                  null,
                                                  p.a.translate("settings." + a)
                                              ),
                                              o
                                                  ? r.a.createElement(P, {
                                                        setting: a,
                                                        options: o,
                                                        selected: i,
                                                        onChange: this.props
                                                            .onChange
                                                    })
                                                  : null,
                                              s || null,
                                              c || null,
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "facolor-success"
                                                  },
                                                  this.state.message
                                              )
                                          ))
                                        : null;
                                }
                            }
                        ]),
                        t
                    );
                })(),
                x = n(11),
                A = n(14),
                W = n(24),
                M = n(15),
                B = n(5),
                L = (function() {
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
            var R = (function(e) {
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
                        L(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function(e) {
                                    return (
                                        !B.a.are_equal_shallow(
                                            e.myAccounts,
                                            this.props.myAccounts
                                        ) ||
                                        e.hiddenAccounts !==
                                            this.props.hiddenAccounts
                                    );
                                }
                            },
                            {
                                key: "onToggleHide",
                                value: function(e, t, n) {
                                    n.preventDefault(),
                                        W.a.toggleHideAccount(e, t);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = t.myAccounts,
                                        a = t.hiddenAccounts,
                                        o = a
                                            .toArray()
                                            .concat(n)
                                            .sort();
                                    return o.length
                                        ? r.a.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "table-witnesses-wrap"
                                              },
                                              r.a.createElement(
                                                  "table",
                                                  {
                                                      className:
                                                          "table-witnesses"
                                                  },
                                                  r.a.createElement(
                                                      "tbody",
                                                      null,
                                                      o.map(function(t) {
                                                          var n = a.has(t),
                                                              o = r.a.createElement(
                                                                  "a",
                                                                  {
                                                                      onClick: n
                                                                          ? e.onToggleHide.bind(
                                                                                e,
                                                                                t,
                                                                                !1
                                                                            )
                                                                          : e.onToggleHide.bind(
                                                                                e,
                                                                                t,
                                                                                !0
                                                                            )
                                                                  },
                                                                  r.a.createElement(
                                                                      d.a,
                                                                      {
                                                                          content:
                                                                              "account." +
                                                                              (n
                                                                                  ? "unignore"
                                                                                  : "ignore")
                                                                      }
                                                                  )
                                                              );
                                                          return r.a.createElement(
                                                              "tr",
                                                              {key: t},
                                                              r.a.createElement(
                                                                  "td",
                                                                  null,
                                                                  t
                                                              ),
                                                              r.a.createElement(
                                                                  "td",
                                                                  null,
                                                                  r.a.createElement(
                                                                      x.b,
                                                                      {
                                                                          to:
                                                                              "/account/" +
                                                                              t +
                                                                              "/permissions"
                                                                      },
                                                                      r.a.createElement(
                                                                          d.a,
                                                                          {
                                                                              content:
                                                                                  "settings.view_keys"
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                              r.a.createElement(
                                                                  "td",
                                                                  null,
                                                                  o
                                                              )
                                                          );
                                                      })
                                                  )
                                              )
                                          )
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(d.a, {
                                                  content:
                                                      "settings.no_accounts"
                                              })
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                D = (R = Object(M.connect)(R, {
                    listenTo: function() {
                        return [A.a];
                    },
                    getProps: function() {
                        return {
                            myAccounts: A.a.getMyAccounts(),
                            hiddenAccounts: A.a.getState().myHiddenAccounts
                        };
                    }
                })),
                F = n(565),
                I = n(556),
                z = n(16),
                U = (function() {
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
            var q = (function(e) {
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
                            (e.state = {lookupActive: !1, resetMessage: null}),
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
                        U(t, [
                            {
                                key: "onLookup",
                                value: function() {
                                    this.setState({lookupActive: !0});
                                }
                            },
                            {
                                key: "onResetBrainkeySequence",
                                value: function() {
                                    z.a.resetBrainKeySequence(),
                                        this.setState({
                                            resetMessage: p.a.translate(
                                                "wallet.brainkey_reset_success"
                                            )
                                        });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.state.lookupActive;
                                    return this.props.deprecated
                                        ? r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  F.ChangeActiveWallet,
                                                  null
                                              ),
                                              r.a.createElement(
                                                  F.WalletDelete,
                                                  null
                                              )
                                          )
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  F.ChangeActiveWallet,
                                                  null
                                              ),
                                              r.a.createElement(
                                                  F.WalletDelete,
                                                  null
                                              ),
                                              r.a.createElement(
                                                  "section",
                                                  {
                                                      style: {
                                                          padding: "15px 0"
                                                      },
                                                      className: "block-list"
                                                  },
                                                  r.a.createElement(
                                                      "header",
                                                      null,
                                                      r.a.createElement(d.a, {
                                                          content:
                                                              "wallet.balance_claims"
                                                      }),
                                                      ":"
                                                  )
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {style: {paddingBottom: 10}},
                                                  r.a.createElement(d.a, {
                                                      content:
                                                          "settings.lookup_text"
                                                  }),
                                                  ":"
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "btn large outline button",
                                                      onClick: this.onLookup.bind(
                                                          this
                                                      )
                                                  },
                                                  r.a.createElement(d.a, {
                                                      content:
                                                          "wallet.balance_claim_lookup"
                                                  })
                                              ),
                                              e
                                                  ? r.a.createElement(
                                                        I.default,
                                                        null
                                                    )
                                                  : null,
                                              r.a.createElement(
                                                  "section",
                                                  {
                                                      style: {
                                                          padding: "15px 0"
                                                      },
                                                      className: "block-list"
                                                  },
                                                  r.a.createElement(
                                                      "header",
                                                      null,
                                                      r.a.createElement(d.a, {
                                                          content:
                                                              "wallet.brainkey_seq_reset"
                                                      }),
                                                      ":"
                                                  )
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {style: {paddingBottom: 10}},
                                                  r.a.createElement(
                                                      "p",
                                                      null,
                                                      r.a.createElement(d.a, {
                                                          unsafe: !0,
                                                          content:
                                                              "wallet.brainkey_seq_reset_text"
                                                      })
                                                  ),
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "btn large outline button",
                                                          onClick: this.onResetBrainkeySequence.bind(
                                                              this
                                                          )
                                                      },
                                                      r.a.createElement(d.a, {
                                                          content:
                                                              "wallet.brainkey_seq_reset_button"
                                                      })
                                                  ),
                                                  this.state.resetMessage
                                                      ? r.a.createElement(
                                                            "p",
                                                            {
                                                                style: {
                                                                    paddingTop: 10
                                                                },
                                                                className:
                                                                    "facolor-success"
                                                            },
                                                            this.state
                                                                .resetMessage
                                                        )
                                                      : null
                                              )
                                          );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                V = n(28),
                H = n(288),
                J = n(2),
                K = n.n(J),
                Y = (function() {
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
            function Z(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function G(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function Q(e, t) {
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
            var X = (function(e) {
                    function t() {
                        Z(this, t);
                        var e = G(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {success: !1}), e;
                    }
                    return (
                        Q(t, a["Component"]),
                        Y(t, [
                            {
                                key: "onAccept",
                                value: function(e) {
                                    var t = this;
                                    e.preventDefault();
                                    var n = this.state,
                                        a = n.old_password,
                                        r = n.new_password;
                                    z.a
                                        .changePassword(a, r, !0)
                                        .then(function() {
                                            V.a.success("Password changed"),
                                                t.setState({success: !0});
                                        })
                                        .catch(function(e) {
                                            console.error(e),
                                                V.a.error(
                                                    "Unable to change password: " +
                                                        e
                                                );
                                        });
                                }
                            },
                            {
                                key: "onOldPassword",
                                value: function(e) {
                                    this.setState({old_password: e});
                                }
                            },
                            {
                                key: "onNewPassword",
                                value: function(e) {
                                    this.setState({new_password: e});
                                }
                            },
                            {
                                key: "_onCancel",
                                value: function() {
                                    this.setState({old_password: ""}),
                                        this.refs.pwd.cancel();
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = !!this.state.new_password;
                                    return this.state.success
                                        ? r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(d.a, {
                                                  component: "p",
                                                  content:
                                                      "wallet.change_success"
                                              }),
                                              r.a.createElement(d.a, {
                                                  component: "p",
                                                  content:
                                                      "wallet.change_backup"
                                              }),
                                              r.a.createElement(
                                                  x.b,
                                                  {to: "/wallet/backup/create"},
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "button outline"
                                                      },
                                                      r.a.createElement(d.a, {
                                                          content:
                                                              "wallet.create_backup"
                                                      })
                                                  )
                                              )
                                          )
                                        : r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  $,
                                                  {
                                                      ref: "pwd",
                                                      onValid: this.onOldPassword.bind(
                                                          this
                                                      )
                                                  },
                                                  r.a.createElement(
                                                      H.a,
                                                      {
                                                          onSubmit: this.onAccept.bind(
                                                              this
                                                          ),
                                                          newPassword: !0,
                                                          onValid: this.onNewPassword.bind(
                                                              this
                                                          )
                                                      },
                                                      r.a.createElement(
                                                          "button",
                                                          {
                                                              className: w()(
                                                                  "btn large inverted button",
                                                                  {disabled: !e}
                                                              ),
                                                              type: "submit",
                                                              onClick: this.onAccept.bind(
                                                                  this
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              d.a,
                                                              {
                                                                  content:
                                                                      "wallet.accept"
                                                              }
                                                          )
                                                      ),
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "button",
                                                              onClick: this._onCancel.bind(
                                                                  this
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              d.a,
                                                              {
                                                                  content:
                                                                      "wallet.cancel"
                                                              }
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
                $ = (function(e) {
                    function t() {
                        Z(this, t);
                        var e = G(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        );
                        return (e.state = {password: "", verified: !1}), e;
                    }
                    return (
                        Q(t, a["Component"]),
                        Y(t, [
                            {
                                key: "cancel",
                                value: function() {
                                    this.setState({verified: !1, password: ""});
                                }
                            },
                            {
                                key: "onPassword",
                                value: function(e) {
                                    e.preventDefault(),
                                        z.a.validatePassword(
                                            this.state.password,
                                            !0
                                        ).success
                                            ? (this.setState({verified: !0}),
                                              this.props.onValid(
                                                  this.state.password
                                              ))
                                            : V.a.error("Invalid Password");
                                }
                            },
                            {
                                key: "formChange",
                                value: function(e) {
                                    var t = {};
                                    (t[e.target.id] = e.target.value),
                                        this.setState(t);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this.state.verified
                                        ? r.a.createElement(
                                              "div",
                                              {className: "grid-content"},
                                              this.props.children
                                          )
                                        : r.a.createElement(
                                              "form",
                                              {
                                                  className: "options__form",
                                                  onSubmit: this.onPassword.bind(
                                                      this
                                                  )
                                              },
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "options__form__row"
                                                  },
                                                  r.a.createElement(
                                                      "label",
                                                      null,
                                                      p.a.translate(
                                                          "wallet.existing_password"
                                                      )
                                                  ),
                                                  r.a.createElement("input", {
                                                      placeholder: p.a.translate(
                                                          "wallet.current_pass"
                                                      ),
                                                      type: "password",
                                                      id: "password",
                                                      onChange: this.formChange.bind(
                                                          this
                                                      ),
                                                      value: this.state.password
                                                  })
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className:
                                                          "options__form__row"
                                                  },
                                                  r.a.createElement(
                                                      "button",
                                                      {
                                                          className:
                                                              "btn large inverted button"
                                                      },
                                                      r.a.createElement(d.a, {
                                                          content:
                                                              "wallet.submit"
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
            $.propTypes = {onValid: K.a.func.isRequired};
            !(function(e) {
                function t() {
                    return (
                        Z(this, t),
                        G(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                Q(t, a["Component"]),
                    Y(t, [
                        {
                            key: "render",
                            value: function() {
                                var e =
                                    this.props.label ||
                                    r.a.createElement(d.a, {
                                        content: "wallet.reset"
                                    });
                                return r.a.createElement(
                                    "span",
                                    {
                                        className: "button outline",
                                        onClick: this.onReset.bind(this)
                                    },
                                    e
                                );
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                window.history.back();
                            }
                        }
                    ]);
            })();
            var ee = (function() {
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
            var te = (function(e) {
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
                        ee(t, [
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(X, null);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ne = n(190),
                ae = n(580),
                re = n(202),
                oe = (function() {
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
            var ie = (function(e) {
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
                        );
                        return (n.state = {json: null, error: null}), n;
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
                        oe(t, [
                            {
                                key: "upload",
                                value: function(e) {
                                    var t = this;
                                    this.setState({error: !1, json: null});
                                    var n = e.target.files[0],
                                        a = new FileReader();
                                    (a.onload = function(e) {
                                        var n = e.target.result;
                                        try {
                                            var a = JSON.parse(n);
                                            for (var r in a) {
                                                var o = a[r],
                                                    i = o.quote,
                                                    s = o.base;
                                                if (!i || !s)
                                                    throw new Error(
                                                        "Cannot parse json data."
                                                    );
                                            }
                                            t.setState({json: a});
                                        } catch (e) {
                                            t.setState({error: !0});
                                        }
                                    }),
                                        a.readAsText(n);
                                }
                            },
                            {
                                key: "finish",
                                value: function() {
                                    var e = this.state.json;
                                    for (var t in (h.a.clearStarredMarkets(),
                                    e)) {
                                        var n = e[t],
                                            a = n.quote,
                                            r = n.base;
                                        h.a.addStarMarket(a, r);
                                    }
                                    V.a.addNotification({
                                        message: p()(
                                            "settings.backup_favorites_success"
                                        ),
                                        level: "success",
                                        autoDismiss: 2
                                    });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.state;
                                    return r.a.createElement(
                                        "div",
                                        {style: {marginTop: "20px"}},
                                        r.a.createElement("input", {
                                            type: "file",
                                            id: "file_input",
                                            accept: ".json",
                                            style: {
                                                border: "solid",
                                                marginBottom: 15
                                            },
                                            onChange: this.upload.bind(this)
                                        }),
                                        e.error &&
                                            r.a.createElement(
                                                "h5",
                                                null,
                                                r.a.createElement(d.a, {
                                                    content:
                                                        "settings.backup_favorites_error"
                                                })
                                            ),
                                        e.json &&
                                            r.a.createElement(
                                                "p",
                                                null,
                                                r.a.createElement(
                                                    "button",
                                                    {
                                                        onClick: this.finish.bind(
                                                            this
                                                        ),
                                                        className:
                                                            "button success"
                                                    },
                                                    r.a.createElement(d.a, {
                                                        content:
                                                            "settings.backup_favorites_finish"
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
                se = n(102),
                le = (function() {
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
            var ce = (function(e) {
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
                                restoreType: 0,
                                types: [
                                    "backup",
                                    "key",
                                    "legacy",
                                    "brainkey",
                                    "favorites"
                                ]
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
                        le(t, [
                            {
                                key: "_setWalletMode",
                                value: function() {
                                    h.a.changeSetting({
                                        setting: "passwordLogin",
                                        value: !1
                                    });
                                }
                            },
                            {
                                key: "_changeType",
                                value: function(e, t) {
                                    this.setState({
                                        restoreType: this.state.types.indexOf(e)
                                    });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    if (this.props.passwordLogin)
                                        return r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(d.a, {
                                                content:
                                                    "settings.wallet_required",
                                                component: "h4"
                                            }),
                                            r.a.createElement(
                                                "p",
                                                {className: "dark-text-color"},
                                                r.a.createElement(d.a, {
                                                    content:
                                                        "settings.wallet_required_text"
                                                }),
                                                ":"
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "btn large inverted",
                                                    style: {marginTop: "20px"},
                                                    onClick: this._setWalletMode
                                                },
                                                r.a.createElement(d.a, {
                                                    content:
                                                        "settings.enable_wallet"
                                                })
                                            )
                                        );
                                    var t = this.state,
                                        n = t.types,
                                        a = t.restoreType,
                                        o = n
                                            .filter(function(e) {
                                                return e !== n[a];
                                            })
                                            .map(function(e) {
                                                return {
                                                    key: e,
                                                    label: p.a.translate(
                                                        "settings.backup_" + e
                                                    )
                                                };
                                            }),
                                        i = {
                                            key: n[a],
                                            label: p.a.translate(
                                                "settings.backup_" + n[a]
                                            )
                                        },
                                        s = void 0;
                                    switch (n[a]) {
                                        case "backup":
                                            s = r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    ne.BackupRestore,
                                                    null
                                                )
                                            );
                                            break;
                                        case "brainkey":
                                            s = r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(
                                                    "p",
                                                    {
                                                        style: {
                                                            maxWidth: "40rem",
                                                            paddingBottom: 10
                                                        }
                                                    },
                                                    r.a.createElement(d.a, {
                                                        content:
                                                            "settings.restore_brainkey_text"
                                                    })
                                                ),
                                                r.a.createElement(
                                                    re.CreateWalletFromBrainkey,
                                                    {nested: !0}
                                                )
                                            );
                                            break;
                                        case "favorites":
                                            s = r.a.createElement(
                                                "div",
                                                null,
                                                r.a.createElement(ie, null)
                                            );
                                            break;
                                        default:
                                            s = r.a.createElement(ae.default, {
                                                privateKey: 1 === a
                                            });
                                    }
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(se.a, {
                                            options: o,
                                            selected: i,
                                            onChange: function(t) {
                                                return e._changeType.bind(e)(t);
                                            }
                                        }),
                                        s
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ue = (function() {
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
            var pe = (function(e) {
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
                        return (e.state = {message: null}), e;
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
                        ue(t, [
                            {
                                key: "_setMessage",
                                value: function(e) {
                                    var t = this;
                                    this.setState({message: p.a.translate(e)}),
                                        (this.timer = setTimeout(function() {
                                            t.setState({message: null});
                                        }, 4e3));
                                }
                            },
                            {
                                key: "componentWillUnmount",
                                value: function() {
                                    clearTimeout(this.timer);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this;
                                    return r.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "block-list no-border-bottom"
                                        },
                                        r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(d.a, {
                                                component: "span",
                                                style: {
                                                    fontWeight: "normal",
                                                    fontStyle: "normal"
                                                },
                                                content:
                                                    "settings.reset_text_description",
                                                generalName: p.a.translate(
                                                    "settings.general"
                                                ),
                                                with: {
                                                    generalName: p.a.translate(
                                                        "settings.general"
                                                    ),
                                                    accessName: p.a.translate(
                                                        "settings.access"
                                                    ),
                                                    faucetName: p.a.translate(
                                                        "settings.faucet_address"
                                                    )
                                                }
                                            })
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    height: 60,
                                                    width: "100%",
                                                    paddingTop: 20,
                                                    marginTop: 20,
                                                    textAlign: "center",
                                                    cursor: "pointer"
                                                },
                                                className: "btn large inverted",
                                                onClick: function() {
                                                    h.a
                                                        .clearSettings()
                                                        .then(function() {
                                                            e._setMessage(
                                                                "settings.restore_default_success"
                                                            );
                                                        });
                                                }
                                            },
                                            p.a.translate("settings.reset")
                                        ),
                                        r.a.createElement(
                                            "div",
                                            {
                                                className: "facolor-success",
                                                style: {
                                                    marginTop: "20px",
                                                    height: "18px"
                                                }
                                            },
                                            this.state.message
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                fe = n(79),
                me = n(44),
                de = n(4),
                he = (function() {
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
            var be = (function(e) {
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
                        return (e.state = e._getInitialState()), e;
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
                        })(t, a["Component"]),
                        he(t, [
                            {
                                key: "_getInitialState",
                                value: function() {
                                    return {
                                        password: null,
                                        brainkey: null,
                                        invalid_password: !1
                                    };
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e,
                                        t = z.a.getWallet()
                                            ? z.a.getWallet()
                                                  .brainkey_backup_date
                                            : null,
                                        n = t
                                            ? r.a.createElement(
                                                  "div",
                                                  null,
                                                  r.a.createElement(d.a, {
                                                      content:
                                                          "wallet.brainkey_backed_up"
                                                  }),
                                                  ":",
                                                  " ",
                                                  r.a.createElement(fe.a, {
                                                      value: t
                                                  })
                                              )
                                            : r.a.createElement(d.a, {
                                                  className: "facolor-error",
                                                  component: "p",
                                                  content:
                                                      "wallet.brainkey_not_backed_up"
                                              });
                                    if (this.state.verified) {
                                        var a = de.n
                                            .sha1(this.state.brainkey)
                                            .toString("hex")
                                            .substring(0, 4);
                                        e = r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "h3",
                                                null,
                                                r.a.createElement(d.a, {
                                                    content: "wallet.brainkey"
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {className: "card"},
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-content"},
                                                    r.a.createElement(
                                                        "h5",
                                                        null,
                                                        this.state.brainkey
                                                    )
                                                )
                                            ),
                                            r.a.createElement("br", null),
                                            r.a.createElement(
                                                "pre",
                                                {className: "no-overflow"},
                                                "sha1 hash of the brainkey: ",
                                                a
                                            ),
                                            r.a.createElement("br", null),
                                            n
                                        );
                                    }
                                    if (!e && this.state.brainkey) {
                                        a = de.n
                                            .sha1(this.state.brainkey)
                                            .toString("hex")
                                            .substring(0, 4);
                                        e = r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "h3",
                                                null,
                                                r.a.createElement(d.a, {
                                                    content: "wallet.brainkey"
                                                })
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {className: "card"},
                                                r.a.createElement(
                                                    "div",
                                                    {className: "card-content"},
                                                    r.a.createElement(
                                                        "h5",
                                                        null,
                                                        this.state.brainkey
                                                    )
                                                )
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {style: {padding: "10px 0"}},
                                                r.a.createElement(
                                                    "pre",
                                                    {className: "no-overflow"},
                                                    "sha1 hash of your brainkey: ",
                                                    a
                                                )
                                            ),
                                            r.a.createElement("hr", null),
                                            r.a.createElement(
                                                "div",
                                                {
                                                    style: {
                                                        padding: "10px 0 20px 0"
                                                    }
                                                },
                                                r.a.createElement(d.a, {
                                                    content:
                                                        "wallet.brainkey_w1"
                                                }),
                                                r.a.createElement("br", null),
                                                r.a.createElement(d.a, {
                                                    content:
                                                        "wallet.brainkey_w2"
                                                }),
                                                r.a.createElement("br", null),
                                                r.a.createElement(d.a, {
                                                    content:
                                                        "wallet.brainkey_w3"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "btn large outline button success",
                                                    onClick: this.onComplete.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(d.a, {
                                                    content: "wallet.verify"
                                                })
                                            ),
                                            r.a.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "btn large outline button cancel",
                                                    onClick: this.reset.bind(
                                                        this
                                                    )
                                                },
                                                r.a.createElement(d.a, {
                                                    content: "wallet.cancel"
                                                })
                                            )
                                        );
                                    }
                                    if (!e) {
                                        this.state.password &&
                                            this.state.password;
                                        e = r.a.createElement(
                                            "div",
                                            null,
                                            r.a.createElement(
                                                "form",
                                                {
                                                    onSubmit: this.onSubmit.bind(
                                                        this
                                                    ),
                                                    className: "name-form",
                                                    noValidate: !0
                                                },
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "options__form__row"
                                                    },
                                                    r.a.createElement(
                                                        "label",
                                                        null,
                                                        r.a.createElement(d.a, {
                                                            content:
                                                                "wallet.enter_password"
                                                        })
                                                    ),
                                                    r.a.createElement("input", {
                                                        type: "password",
                                                        id: "password",
                                                        onChange: this.onPassword.bind(
                                                            this
                                                        )
                                                    }),
                                                    r.a.createElement(
                                                        "p",
                                                        null,
                                                        this.state
                                                            .invalid_password
                                                            ? r.a.createElement(
                                                                  "span",
                                                                  {
                                                                      className:
                                                                          "error"
                                                                  },
                                                                  "Invalid password"
                                                              )
                                                            : r.a.createElement(
                                                                  "span",
                                                                  null,
                                                                  r.a.createElement(
                                                                      d.a,
                                                                      {
                                                                          content:
                                                                              "wallet.pwd4brainkey"
                                                                      }
                                                                  )
                                                              )
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    null,
                                                    n,
                                                    r.a.createElement(
                                                        "br",
                                                        null
                                                    )
                                                ),
                                                r.a.createElement(
                                                    "button",
                                                    {
                                                        className:
                                                            "btn large inverted button success"
                                                    },
                                                    r.a.createElement(d.a, {
                                                        content:
                                                            "wallet.show_brainkey"
                                                    })
                                                )
                                            )
                                        );
                                    }
                                    return r.a.createElement("div", null, e);
                                }
                            },
                            {
                                key: "onComplete",
                                value: function(e) {
                                    this.setState({verified: !0}),
                                        me.a.setBrainkeyBackupDate();
                                }
                            },
                            {
                                key: "reset",
                                value: function(e) {
                                    e && e.preventDefault(),
                                        this.setState(this._getInitialState());
                                }
                            },
                            {
                                key: "onBack",
                                value: function(e) {
                                    e.preventDefault(), window.history.back();
                                }
                            },
                            {
                                key: "onSubmit",
                                value: function(e) {
                                    e.preventDefault();
                                    var t = z.a.isLocked();
                                    if (
                                        z.a.validatePassword(
                                            this.state.password,
                                            !0
                                        ).success
                                    ) {
                                        var n = z.a.getBrainKey();
                                        t && z.a.onLock(),
                                            this.setState({brainkey: n});
                                    } else
                                        this.setState({invalid_password: !0});
                                }
                            },
                            {
                                key: "onPassword",
                                value: function(e) {
                                    this.setState({
                                        password: e.target.value,
                                        invalid_password: !1
                                    });
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ve = n(119),
                ye = (function() {
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
            var ge = (function(e) {
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
                        ye(t, [
                            {
                                key: "makeBackup",
                                value: function() {
                                    var e = this.props.starredMarkets.toJS(),
                                        t = new Blob([JSON.stringify(e)], {
                                            type:
                                                "application/json; charset=us-ascii"
                                        });
                                    Object(ve.saveAs)(t, "favorites.json");
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(
                                            "p",
                                            null,
                                            r.a.createElement(d.a, {
                                                content:
                                                    "settings.backup_favoritestext"
                                            })
                                        ),
                                        r.a.createElement(
                                            "button",
                                            {
                                                onClick: this.makeBackup.bind(
                                                    this
                                                ),
                                                className:
                                                    "btn button success large flat"
                                            },
                                            r.a.createElement(d.a, {
                                                content:
                                                    "settings.backup_favoritesbtn"
                                            })
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                _e = Object(M.connect)(ge, {
                    listenTo: function() {
                        return [o.a];
                    },
                    getProps: function() {
                        return {starredMarkets: o.a.getState().starredMarkets};
                    }
                }),
                we = (function() {
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
            var Ee = (function(e) {
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
                                restoreType: 0,
                                types: ["backup", "brainkey", "favorites"]
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
                        we(t, [
                            {
                                key: "_changeType",
                                value: function(e, t) {
                                    this.setState({
                                        restoreType: this.state.types.indexOf(e)
                                    });
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this.state,
                                        t = e.types,
                                        n = e.restoreType,
                                        a = t.map(function(e) {
                                            return {
                                                key: e,
                                                label: p.a.translate(
                                                    "settings.backupcreate_" + e
                                                )
                                            };
                                        }),
                                        o = {
                                            key: t[n],
                                            label: p.a.translate(
                                                "settings.backupcreate_" + t[n]
                                            )
                                        },
                                        i = void 0;
                                    switch (t[n]) {
                                        case "backup":
                                            i = r.a.createElement(
                                                ne.BackupCreate,
                                                null
                                            );
                                            break;
                                        case "brainkey":
                                            i = r.a.createElement(be, null);
                                            break;
                                        case "favorites":
                                            i = r.a.createElement(_e, null);
                                    }
                                    return r.a.createElement(
                                        "div",
                                        null,
                                        r.a.createElement(se.a, {
                                            options: a,
                                            selected: o,
                                            onChange: this._changeType.bind(
                                                this
                                            )
                                        }),
                                        i
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(),
                ke = n(23),
                Oe = n(286),
                Ne = n(13),
                Se =
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
                je =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  "function" == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : typeof e;
                          },
                Ce = (function() {
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
            function Pe(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function Te(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
            }
            function xe(e, t) {
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
            var Ae = "wss://fake.automatic-selection.com",
                We = ke.g.WS_NODE_LIST.find(function(e) {
                    return -1 !== e.url.indexOf("node.testnet.bitshares.eu");
                }),
                Me = ke.g.WS_NODE_LIST.find(function(e) {
                    return -1 !== e.url.indexOf("testnet.nodes.bitshares.ws");
                }),
                Be = (function(e) {
                    function t(e) {
                        return (
                            Pe(this, t),
                            Te(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e
                                )
                            )
                        );
                    }
                    return (
                        xe(t, r.a.Component),
                        Ce(t, [
                            {
                                key: "activate",
                                value: function(e) {
                                    h.a.changeSetting({
                                        setting: "apiServer",
                                        value: e
                                    }),
                                        setTimeout(
                                            function() {
                                                Object(Oe.a)(
                                                    this.props.router,
                                                    this.props.router.replace,
                                                    function() {},
                                                    !1
                                                );
                                            }.bind(this),
                                            50
                                        );
                                }
                            },
                            {
                                key: "remove",
                                value: function(e, t, n) {
                                    (n.target.id = "remove"),
                                        this.props.triggerModal(n, e, t);
                                }
                            },
                            {
                                key: "show",
                                value: function(e) {
                                    h.a.showWS(e);
                                }
                            },
                            {
                                key: "hide",
                                value: function(e) {
                                    h.a.hideWS(e);
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e,
                                        t = this.props,
                                        n = (this.state,
                                        t.allowActivation,
                                        t.allowRemoval),
                                        a = t.automatic,
                                        o = t.autoActive,
                                        i = t.name,
                                        s = t.url,
                                        l = t.displayUrl,
                                        c = t.ping,
                                        u = t.up,
                                        p = t.hidden,
                                        f = t.activeNode,
                                        m = t.popup,
                                        h = void 0,
                                        b = void 0;
                                    c < 400
                                        ? ((h = "low"), (b = "low_latency"))
                                        : c >= 400 && c < 800
                                            ? ((h = "medium"),
                                              (b = "medium_latency"))
                                            : ((h = "high"),
                                              (b = "high_latency")),
                                        (e =
                                            c >= 1e3
                                                ? +(c / 1e3).toFixed(2) + "s"
                                                : c + "ms");
                                    var v =
                                            (We && s === We.url) ||
                                            (Me && s === Me.url),
                                        y = ke.g.WS_NODE_LIST.length - 3,
                                        g = f.url == s,
                                        _ = !g && !a;
                                    return m
                                        ? s === Ae
                                            ? r.a.createElement(
                                                  "div",
                                                  null,
                                                  r.a.createElement(
                                                      "span",
                                                      {
                                                          className: "switch",
                                                          style: {
                                                              float: "right",
                                                              position:
                                                                  "relative",
                                                              top: "-15px"
                                                          },
                                                          onClick: this.activate.bind(
                                                              this,
                                                              o ? f.url : Ae
                                                          )
                                                      },
                                                      r.a.createElement(
                                                          "input",
                                                          {
                                                              id:
                                                                  "automatic_node_switcher",
                                                              type: "checkbox",
                                                              checked: o,
                                                              onChange: function() {}
                                                          }
                                                      ),
                                                      r.a.createElement(
                                                          "label",
                                                          null
                                                      )
                                                  ),
                                                  r.a.createElement(
                                                      "p",
                                                      {
                                                          style: {
                                                              fontSize: "80%"
                                                          }
                                                      },
                                                      r.a.createElement(d.a, {
                                                          content:
                                                              "settings.automatic_short"
                                                      }),
                                                      ":"
                                                  )
                                              )
                                            : r.a.createElement(
                                                  "div",
                                                  {className: "api-status"},
                                                  r.a.createElement(
                                                      "a",
                                                      null,
                                                      r.a.createElement(Ne.a, {
                                                          className:
                                                              h +
                                                              " default-icon",
                                                          name: g
                                                              ? "connected"
                                                              : "disconnected",
                                                          title: g
                                                              ? "icons.connected"
                                                              : "icons.disconnected",
                                                          size: "1_5x",
                                                          onClick: this.activate.bind(
                                                              this,
                                                              s
                                                          )
                                                      }),
                                                      r.a.createElement(Ne.a, {
                                                          className:
                                                              h + " hover-icon",
                                                          name: "connect",
                                                          title:
                                                              "icons.connect",
                                                          size: "1_5x",
                                                          onClick: this.activate.bind(
                                                              this,
                                                              s
                                                          )
                                                      })
                                                  ),
                                                  i
                                              )
                                        : s === Ae
                                            ? r.a.createElement(
                                                  "div",
                                                  {className: "auto-node"},
                                                  r.a.createElement(
                                                      "div",
                                                      null,
                                                      r.a.createElement(
                                                          "span",
                                                          {
                                                              className:
                                                                  "switch",
                                                              onClick: this.activate.bind(
                                                                  this,
                                                                  o ? f.url : Ae
                                                              )
                                                          },
                                                          r.a.createElement(
                                                              "input",
                                                              {
                                                                  id:
                                                                      "automatic_node_switcher",
                                                                  type:
                                                                      "checkbox",
                                                                  checked: o,
                                                                  onChange: function() {}
                                                              }
                                                          ),
                                                          r.a.createElement(
                                                              "label",
                                                              null
                                                          )
                                                      ),
                                                      r.a.createElement(d.a, {
                                                          component: "div",
                                                          style: {
                                                              paddingLeft:
                                                                  "1rem",
                                                              paddingTop:
                                                                  "0.5rem"
                                                          },
                                                          content:
                                                              "settings.automatic",
                                                          totalNodes: y
                                                      })
                                                  )
                                              )
                                            : r.a.createElement(
                                                  "div",
                                                  {className: "api-node"},
                                                  r.a.createElement(
                                                      "div",
                                                      null,
                                                      r.a.createElement(
                                                          "p",
                                                          null,
                                                          i
                                                      ),
                                                      r.a.createElement(
                                                          "p",
                                                          {
                                                              id: f
                                                                  ? "active_node"
                                                                  : null
                                                          },
                                                          l
                                                      )
                                                  ),
                                                  r.a.createElement(
                                                      "div",
                                                      null,
                                                      v && !c
                                                          ? null
                                                          : r.a.createElement(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "api-status"
                                                                },
                                                                u
                                                                    ? r.a.createElement(
                                                                          "span",
                                                                          {
                                                                              className: h
                                                                          },
                                                                          r.a.createElement(
                                                                              d.a,
                                                                              {
                                                                                  content:
                                                                                      "settings." +
                                                                                      b
                                                                              }
                                                                          ),
                                                                          r.a.createElement(
                                                                              "p",
                                                                              null,
                                                                              e
                                                                          )
                                                                      )
                                                                    : r.a.createElement(
                                                                          "span",
                                                                          {
                                                                              className:
                                                                                  "high"
                                                                          },
                                                                          r.a.createElement(
                                                                              d.a,
                                                                              {
                                                                                  content:
                                                                                      "settings.node_down"
                                                                              }
                                                                          )
                                                                      )
                                                            )
                                                  ),
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          style: {
                                                              marginTop: "-5px"
                                                          }
                                                      },
                                                      _ &&
                                                          p &&
                                                          r.a.createElement(
                                                              "a",
                                                              {
                                                                  onClick: this.show.bind(
                                                                      this,
                                                                      s
                                                                  )
                                                              },
                                                              r.a.createElement(
                                                                  Ne.a,
                                                                  {
                                                                      className:
                                                                          "shuffle",
                                                                      name:
                                                                          "eye-striked",
                                                                      title:
                                                                          "icons.eye_striked",
                                                                      size:
                                                                          "1_5x"
                                                                  }
                                                              )
                                                          ),
                                                      _ &&
                                                          !p &&
                                                          r.a.createElement(
                                                              "a",
                                                              {
                                                                  onClick: this.hide.bind(
                                                                      this,
                                                                      s
                                                                  )
                                                              },
                                                              r.a.createElement(
                                                                  Ne.a,
                                                                  {
                                                                      className:
                                                                          "shuffle",
                                                                      name:
                                                                          "eye",
                                                                      title:
                                                                          "icons.eye",
                                                                      size:
                                                                          "1_5x"
                                                                  }
                                                              )
                                                          ),
                                                      _ &&
                                                          n &&
                                                          r.a.createElement(
                                                              "a",
                                                              {
                                                                  onClick: this.remove.bind(
                                                                      this,
                                                                      s,
                                                                      i
                                                                  )
                                                              },
                                                              r.a.createElement(
                                                                  Ne.a,
                                                                  {
                                                                      name:
                                                                          "times",
                                                                      title:
                                                                          "icons.times",
                                                                      size:
                                                                          "1_5x"
                                                                  }
                                                              )
                                                          ),
                                                      r.a.createElement(
                                                          "div",
                                                          {
                                                              className:
                                                                  "api-status"
                                                          },
                                                          f.url != s
                                                              ? r.a.createElement(
                                                                    "a",
                                                                    {
                                                                        id: l,
                                                                        onClick: this.activate.bind(
                                                                            this,
                                                                            s
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        Ne.a,
                                                                        {
                                                                            className:
                                                                                h +
                                                                                " default-icon",
                                                                            name:
                                                                                "disconnected",
                                                                            title:
                                                                                "icons.connect",
                                                                            size:
                                                                                "1_5x"
                                                                        }
                                                                    ),
                                                                    r.a.createElement(
                                                                        Ne.a,
                                                                        {
                                                                            className:
                                                                                h +
                                                                                " hover-icon",
                                                                            name:
                                                                                "connect",
                                                                            title:
                                                                                "icons.connect",
                                                                            size:
                                                                                "1_5x"
                                                                        }
                                                                    )
                                                                )
                                                              : r.a.createElement(
                                                                    Ne.a,
                                                                    (function(
                                                                        e,
                                                                        t,
                                                                        n
                                                                    ) {
                                                                        return (
                                                                            t in
                                                                            e
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
                                                                                : (e[
                                                                                      t
                                                                                  ] = n),
                                                                            e
                                                                        );
                                                                    })(
                                                                        {
                                                                            className: h,
                                                                            name:
                                                                                "connected",
                                                                            title:
                                                                                "icons.connected",
                                                                            size:
                                                                                "2x"
                                                                        },
                                                                        "title",
                                                                        "settings.active_node"
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
            Be.defaultProps = {
                name: "Test node",
                url: "wss://testnode.net/wss",
                displayUrl: "wss://testnode.net/wss",
                up: !0,
                ping: null,
                allowActivation: !1,
                allowRemoval: !1,
                hidden: !1
            };
            var Le = Object(x.g)(Be),
                Re = (function(e) {
                    function t(e) {
                        Pe(this, t);
                        var n = Te(
                            this,
                            (t.__proto__ || Object.getPrototypeOf(t)).call(
                                this,
                                e
                            )
                        );
                        n.state = {activeTab: "available-nodes"};
                        var a = {};
                        return (
                            ke.g.WS_NODE_LIST.forEach(function(e) {
                                a[e.url] = !0;
                            }),
                            (n.isDefaultNode = a),
                            n
                        );
                    }
                    return (
                        xe(t, r.a.Component),
                        Ce(t, [
                            {
                                key: "getNodeIndexByURL",
                                value: function(e) {
                                    var t = this.props.nodes.findIndex(function(
                                        t
                                    ) {
                                        return t.url === e;
                                    });
                                    return -1 === t ? null : t;
                                }
                            },
                            {
                                key: "getCurrentNodeIndex",
                                value: function() {
                                    var e = this.props;
                                    return this.getNodeIndexByURL.call(
                                        this,
                                        e.currentNode
                                    );
                                }
                            },
                            {
                                key: "getNode",
                                value: function(e) {
                                    var t = this.props;
                                    return {
                                        name: e.location || "Unknown location",
                                        url: e.url,
                                        up: e.url in t.apiLatencies,
                                        ping: t.apiLatencies[e.url],
                                        hidden: !!e.hidden
                                    };
                                }
                            },
                            {
                                key: "renderNode",
                                value: function(e, t, n) {
                                    var a = this.props,
                                        o = e.url === Ae,
                                        i = o ? "..." : e.url,
                                        s =
                                            e.name &&
                                            "object" === je(e.name) &&
                                            "translate" in e.name
                                                ? r.a.createElement(d.a, {
                                                      component: "span",
                                                      content: e.name.translate
                                                  })
                                                : e.name,
                                        l = !o && !this.isDefaultNode[e.url];
                                    return r.a.createElement(
                                        Le,
                                        Se({}, e, {
                                            autoActive: a.currentNode === Ae,
                                            automatic: o,
                                            allowActivation: n,
                                            allowRemoval: n && l,
                                            key: e.url,
                                            name: s,
                                            displayUrl: i,
                                            triggerModal: a.triggerModal,
                                            activeNode: t,
                                            popup: a.popup
                                        })
                                    );
                                }
                            },
                            {
                                key: "_changeTab",
                                value: function(e) {
                                    this.setState({activeTab: e});
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        n = this.getNode.bind(this),
                                        a = this.renderNode.bind(this),
                                        o = this.getCurrentNodeIndex.call(this),
                                        i = "nodes-header clickable",
                                        s =
                                            "hidden-nodes" !==
                                            this.state.activeTab,
                                        l = (w()(i, {
                                            inactive:
                                                "available-nodes" !==
                                                this.state.activeTab
                                        }),
                                        w()(i, {
                                            inactive:
                                                "hidden-nodes" !==
                                                this.state.activeTab
                                        }),
                                        w()(i, {
                                            inactive:
                                                "my-nodes" !==
                                                this.state.activeTab
                                        }),
                                        n(t.nodes[o] || t.nodes[0]));
                                    if (l.url == Ae) {
                                        var c = t.activeNode;
                                        (o = this.getNodeIndexByURL.call(
                                            this,
                                            c
                                        )),
                                            (l = n(t.nodes[o]));
                                    }
                                    var u = t.nodes
                                        .map(function(e) {
                                            return n(e);
                                        })
                                        .filter(function(e) {
                                            return e.url !== l.url;
                                        });
                                    (u = u.sort(function(e, t) {
                                        var n =
                                            (e.url === We && We.url) ||
                                            (Me && e.url === Me.url);
                                        return e.url == Ae
                                            ? -1
                                            : e.up && t.up
                                                ? e.ping - t.ping
                                                : e.up || t.up
                                                    ? e.up && !t.up
                                                        ? -1
                                                        : t.up && !e.up
                                                            ? 1
                                                            : 0
                                                    : n
                                                        ? -1
                                                        : 1;
                                    })),
                                        (u =
                                            "my-nodes" === this.state.activeTab
                                                ? u.filter(function(t) {
                                                      return !e
                                                          .isDefaultNode[t.url];
                                                  })
                                                : u.filter(function(t) {
                                                      return (
                                                          t.hidden !== s &&
                                                          e.isDefaultNode[t.url]
                                                      );
                                                  }));
                                    var f = n(t.nodes[0]),
                                        m = 0,
                                        h = u.reduce(function(e, t) {
                                            return (
                                                -1 !==
                                                    e.findIndex(function(e) {
                                                        return e.url === t.url;
                                                    }) || e.push(t),
                                                e
                                            );
                                        }, []);
                                    return this.props.popup
                                        ? r.a.createElement(
                                              "div",
                                              null,
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      style: {
                                                          fontWeight: "bold",
                                                          height: 40
                                                      }
                                                  },
                                                  r.a.createElement(d.a, {
                                                      content: "settings.switch"
                                                  }),
                                                  a(f, l, !1)
                                              ),
                                              r.a.createElement(
                                                  "div",
                                                  {
                                                      className: "nodes-list",
                                                      style: {
                                                          display:
                                                              t.currentNode ===
                                                              Ae
                                                                  ? "none"
                                                                  : ""
                                                      }
                                                  },
                                                  h.map(function(e) {
                                                      if (
                                                          e.url !== Ae &&
                                                          ++m <= 5
                                                      )
                                                          return a(e, l, !0);
                                                  })
                                              )
                                          )
                                        : r.a.createElement(
                                              "div",
                                              {
                                                  className: "row",
                                                  style: {paddingTop: "1em"}
                                              },
                                              r.a.createElement(
                                                  "div",
                                                  {className: "col-lg-11"},
                                                  a(f, l, !1),
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "active-node"
                                                      },
                                                      r.a.createElement(d.a, {
                                                          component: "h4",
                                                          style: {
                                                              marginLeft: "1rem"
                                                          },
                                                          content:
                                                              "settings.active_node"
                                                      }),
                                                      a(l, l, !1)
                                                  ),
                                                  r.a.createElement(
                                                      "div",
                                                      {
                                                          className: "nodes",
                                                          style: {
                                                              display:
                                                                  t.currentNode ===
                                                                  Ae
                                                                      ? "none"
                                                                      : "",
                                                              position:
                                                                  "relative",
                                                              marginBottom:
                                                                  "2em"
                                                          }
                                                      },
                                                      r.a.createElement(
                                                          "ul",
                                                          {
                                                              className:
                                                                  "markets-list"
                                                          },
                                                          r.a.createElement(
                                                              "li",
                                                              {
                                                                  className: w()(
                                                                      "markets-list__item",
                                                                      {
                                                                          active:
                                                                              "available-nodes" ===
                                                                              this
                                                                                  .state
                                                                                  .activeTab
                                                                      }
                                                                  ),
                                                                  onClick: this._changeTab.bind(
                                                                      this,
                                                                      "available-nodes"
                                                                  )
                                                              },
                                                              p.a.translate(
                                                                  "settings.available_nodes"
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "li",
                                                              {
                                                                  className: w()(
                                                                      "markets-list__item",
                                                                      {
                                                                          active:
                                                                              "hidden-nodes" ===
                                                                              this
                                                                                  .state
                                                                                  .activeTab
                                                                      }
                                                                  ),
                                                                  onClick: this._changeTab.bind(
                                                                      this,
                                                                      "hidden-nodes"
                                                                  )
                                                              },
                                                              p.a.translate(
                                                                  "settings.hidden_nodes"
                                                              )
                                                          ),
                                                          r.a.createElement(
                                                              "li",
                                                              {
                                                                  className: w()(
                                                                      "markets-list__item",
                                                                      {
                                                                          active:
                                                                              "my-nodes" ===
                                                                              this
                                                                                  .state
                                                                                  .activeTab
                                                                      }
                                                                  ),
                                                                  onClick: this._changeTab.bind(
                                                                      this,
                                                                      "my-nodes"
                                                                  )
                                                              },
                                                              p.a.translate(
                                                                  "settings.my_nodes"
                                                              )
                                                          )
                                                      ),
                                                      "my-nodes" !==
                                                      this.state.activeTab
                                                          ? null
                                                          : r.a.createElement(
                                                                "div",
                                                                {
                                                                    style: {
                                                                        paddingLeft:
                                                                            "1rem",
                                                                        paddingBottom:
                                                                            "1rem",
                                                                        marginTop:
                                                                            "10px"
                                                                    }
                                                                },
                                                                r.a.createElement(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "button btn large inverted",
                                                                        onClick: t.triggerModal.bind(
                                                                            this
                                                                        )
                                                                    },
                                                                    r.a.createElement(
                                                                        d.a,
                                                                        {
                                                                            id:
                                                                                "add",
                                                                            component:
                                                                                "span",
                                                                            content:
                                                                                "settings.add_api"
                                                                        }
                                                                    )
                                                                )
                                                            ),
                                                      h.map(function(e) {
                                                          if (e.url !== Ae)
                                                              return a(
                                                                  e,
                                                                  l,
                                                                  !0
                                                              );
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
                De = (Re = Object(M.connect)(Re, {
                    listenTo: function() {
                        return [o.a];
                    },
                    getProps: function() {
                        return {
                            currentNode: o.a
                                .getState()
                                .settings.get("apiServer"),
                            activeNode: o.a
                                .getState()
                                .settings.get("activeNode"),
                            apiLatencies: o.a.getState().apiLatencies
                        };
                    }
                })),
                Fe =
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
                Ie = (function() {
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
            var ze = (function(e) {
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
                            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                        ),
                        a = n._getMenuEntries(e),
                        r = 0,
                        o = e.params.tab
                            ? a.indexOf(e.params.tab)
                            : e.viewSettings.get("activeSetting", 0);
                    return (
                        o >= 0 && (r = o),
                        (n.state = {
                            apiServer: e.settings.get("apiServer"),
                            activeSetting: r,
                            menuEntries: a,
                            settingEntries: {
                                general: [
                                    "locale",
                                    "unit",
                                    "browser_notifications",
                                    "showSettles",
                                    "walletLockTimeout",
                                    "showAssetPercent",
                                    "passwordLogin",
                                    "reset"
                                ],
                                access: ["apiServer", "faucet_address"]
                            }
                        }),
                        (n._handleNotificationChange = n._handleNotificationChange.bind(
                            n
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
                    })(t, r.a.Component),
                    Ie(t, [
                        {
                            key: "componentDidUpdate",
                            value: function(e) {
                                e.params.tab !== this.props.params.tab &&
                                    this._onChangeMenu(this.props.params.tab);
                            }
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                if (
                                    e.settings.get("passwordLogin") !==
                                    this.props.settings.get("passwordLogin")
                                ) {
                                    var t = this._getMenuEntries(this.props),
                                        n = this._getMenuEntries(e),
                                        a = t[this.state.activeSetting],
                                        r = n.indexOf(a),
                                        o = n[r];
                                    this.setState({menuEntries: n}),
                                        r && r !== this.state.activeSetting
                                            ? this.setState({
                                                  activeSetting: n.indexOf(a)
                                              })
                                            : (!o ||
                                                  this.state.activeSetting >
                                                      n.length - 1) &&
                                              this.setState({activeSetting: 0});
                                }
                            }
                        },
                        {
                            key: "_getMenuEntries",
                            value: function(e) {
                                if (e.deprecated) return ["wallet", "backup"];
                                var t = [
                                    "general",
                                    "wallet",
                                    "accounts",
                                    "password",
                                    "backup",
                                    "restore",
                                    "access",
                                    "faucet_address",
                                    "reset"
                                ];
                                return (
                                    e.settings.get("passwordLogin") &&
                                        (t.splice(4, 1),
                                        t.splice(3, 1),
                                        t.splice(1, 1)),
                                    t
                                );
                            }
                        },
                        {
                            key: "triggerModal",
                            value: function(e) {
                                for (
                                    var t,
                                        n = arguments.length,
                                        a = Array(n > 1 ? n - 1 : 0),
                                        r = 1;
                                    r < n;
                                    r++
                                )
                                    a[r - 1] = arguments[r];
                                (t = this.refs.ws_modal).show.apply(
                                    t,
                                    [e].concat(a)
                                );
                            }
                        },
                        {
                            key: "_handleNotificationChange",
                            value: function(e, t) {
                                var n = Object(c.a)(
                                    this.props.settings.get(
                                        "browser_notifications"
                                    ),
                                    e,
                                    t
                                );
                                h.a.changeSetting({
                                    setting: "browser_notifications",
                                    value: n
                                });
                            }
                        },
                        {
                            key: "_onChangeSetting",
                            value: function(e, t, n) {
                                n.preventDefault();
                                var a = this.props.defaults,
                                    r = null;
                                function o(e, t) {
                                    if (!t) return e;
                                    if (!t[0].translate) return t.indexOf(e);
                                    for (var n = 0; n < t.length; n++)
                                        if (
                                            p.a.translate(
                                                "settings." + t[n].translate
                                            ) === e
                                        )
                                            return n;
                                }
                                switch (e) {
                                    case "locale":
                                        t !== p.a.getLocale() &&
                                            (f.a.switchLocale(t),
                                            h.a.changeSetting({
                                                setting: "locale",
                                                value: t
                                            }));
                                        break;
                                    case "themes":
                                        h.a.changeSetting({
                                            setting: "themes",
                                            value: t
                                        });
                                        break;
                                    case "defaultMarkets":
                                        break;
                                    case "walletLockTimeout":
                                        var i = parseInt(t, 10);
                                        isNaN(i) && (i = 0),
                                            isNaN(i) ||
                                                "number" != typeof i ||
                                                h.a.changeSetting({
                                                    setting:
                                                        "walletLockTimeout",
                                                    value: i
                                                });
                                        break;
                                    case "inverseMarket":
                                    case "confirmMarketOrder":
                                        r = 0 === o(t, a[e]);
                                        break;
                                    case "apiServer":
                                        h.a.changeSetting({
                                            setting: "apiServer",
                                            value: t
                                        }),
                                            this.setState({apiServer: t});
                                        break;
                                    case "showSettles":
                                    case "showAssetPercent":
                                    case "passwordLogin":
                                        var s = a[e][0];
                                        s.translate && (s = s.translate),
                                            h.a.changeSetting({
                                                setting: e,
                                                value: t === s
                                            });
                                        break;
                                    case "unit":
                                        var l = o(t, a[e]);
                                        h.a.changeSetting({
                                            setting: e,
                                            value: a[e][l]
                                        });
                                        break;
                                    default:
                                        r = o(t, a[e]);
                                }
                                null !== r &&
                                    h.a.changeSetting({setting: e, value: r});
                            }
                        },
                        {
                            key: "onReset",
                            value: function() {
                                h.a.clearSettings();
                            }
                        },
                        {
                            key: "_redirectToEntry",
                            value: function(e, t) {
                                t.preventDefault(),
                                    this.context.router.push("/settings/" + e);
                            }
                        },
                        {
                            key: "_onChangeMenu",
                            value: function(e) {
                                var t = this.state.menuEntries.indexOf(e);
                                this.setState({activeSetting: t}),
                                    h.a.changeViewSetting({activeSetting: t});
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.settings,
                                    a = t.defaults,
                                    o = this.state,
                                    i = o.menuEntries,
                                    s = o.activeSetting,
                                    l = o.settingEntries,
                                    c = void 0,
                                    u = i[s] || i[0];
                                switch (u) {
                                    case "accounts":
                                        c = r.a.createElement(D, null);
                                        break;
                                    case "wallet":
                                        c = r.a.createElement(q, this.props);
                                        break;
                                    case "password":
                                        c = r.a.createElement(te, null);
                                        break;
                                    case "backup":
                                        c = r.a.createElement(Ee, null);
                                        break;
                                    case "restore":
                                        c = r.a.createElement(ce, {
                                            passwordLogin: this.props.settings.get(
                                                "passwordLogin"
                                            )
                                        });
                                        break;
                                    case "access":
                                        c = r.a.createElement(De, {
                                            faucet: n.get("faucet_address"),
                                            nodes: a.apiServer,
                                            onChange: this._onChangeSetting.bind(
                                                this
                                            ),
                                            triggerModal: this.triggerModal.bind(
                                                this
                                            )
                                        });
                                        break;
                                    case "faucet_address":
                                        c = r.a.createElement("input", {
                                            type: "text",
                                            className: "settings-input",
                                            defaultValue: n.get(
                                                "faucet_address"
                                            ),
                                            onChange: this._onChangeSetting.bind(
                                                this,
                                                "faucet_address"
                                            )
                                        });
                                        break;
                                    case "reset":
                                        c = r.a.createElement(pe, null);
                                        break;
                                    default:
                                        c = l[u].map(function(t) {
                                            return r.a.createElement(
                                                T,
                                                Fe(
                                                    {
                                                        key: t,
                                                        setting: t,
                                                        settings: n,
                                                        defaults: a[t],
                                                        onChange: e._onChangeSetting.bind(
                                                            e
                                                        ),
                                                        onNotificationChange:
                                                            e._handleNotificationChange,
                                                        locales:
                                                            e.props
                                                                .localesObject
                                                    },
                                                    e.state
                                                )
                                            );
                                        });
                                }
                                return r.a.createElement(
                                    "div",
                                    {className: "content"},
                                    r.a.createElement(
                                        "div",
                                        {className: "options"},
                                        r.a.createElement(
                                            "div",
                                            {className: "container"},
                                            r.a.createElement(
                                                "h2",
                                                {className: "content__heading"},
                                                p.a.translate("header.settings")
                                            ),
                                            r.a.createElement(
                                                "div",
                                                {className: "options__row"},
                                                r.a.createElement(
                                                    "ul",
                                                    {className: "options__nav"},
                                                    i.map(function(t, n) {
                                                        var a = p.a.translate(
                                                            "settings." + t
                                                        );
                                                        return r.a.createElement(
                                                            "li",
                                                            {
                                                                className:
                                                                    "options__nav__item"
                                                            },
                                                            n === s
                                                                ? r.a.createElement(
                                                                      "span",
                                                                      {
                                                                          className:
                                                                              "options__nav__link"
                                                                      },
                                                                      a
                                                                  )
                                                                : r.a.createElement(
                                                                      "a",
                                                                      {
                                                                          className:
                                                                              "options__nav__link",
                                                                          href:
                                                                              "#",
                                                                          key: t,
                                                                          onClick: e._redirectToEntry.bind(
                                                                              e,
                                                                              t
                                                                          )
                                                                      },
                                                                      a
                                                                  )
                                                        );
                                                    })
                                                ),
                                                r.a.createElement(
                                                    "div",
                                                    {
                                                        className:
                                                            "options__setup"
                                                    },
                                                    r.a.createElement(d.a, {
                                                        component: "h3",
                                                        content:
                                                            "settings." + i[s]
                                                    }),
                                                    "access" != u &&
                                                        r.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "options__form__row"
                                                            },
                                                            r.a.createElement(
                                                                d.a,
                                                                {
                                                                    unsafe: !0,
                                                                    style: {
                                                                        paddingTop: 5,
                                                                        marginBottom: 30
                                                                    },
                                                                    content:
                                                                        "settings." +
                                                                        i[s] +
                                                                        "_text",
                                                                    className:
                                                                        "panel-bg-color"
                                                                }
                                                            )
                                                        ),
                                                    c
                                                )
                                            )
                                        )
                                    ),
                                    r.a.createElement(b.a, {
                                        ref: "ws_modal",
                                        apis: a.apiServer,
                                        api: a.apiServer
                                            .filter(function(t) {
                                                return (
                                                    t.url === e.state.apiServer
                                                );
                                            })
                                            .reduce(function(e, t) {
                                                return t && t.url;
                                            }, null),
                                        changeConnection: function(t) {
                                            e.setState({apiServer: t});
                                        }
                                    })
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            ze.contextTypes = {router: K.a.object.isRequired};
            var Ue = ze,
                qe = (function() {
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
            var Ve = (function(e) {
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
                    qe(t, [
                        {
                            key: "render",
                            value: function() {
                                return r.a.createElement(
                                    l.a,
                                    {
                                        stores: [o.a],
                                        inject: {
                                            settings: function() {
                                                return o.a.getState().settings;
                                            },
                                            viewSettings: function() {
                                                return o.a.getState()
                                                    .viewSettings;
                                            },
                                            defaults: function() {
                                                return o.a.getState().defaults;
                                            },
                                            localesObject: function() {
                                                return i.a.getState()
                                                    .localesObject;
                                            },
                                            apiLatencies: function() {
                                                return o.a.getState()
                                                    .apiLatencies;
                                            }
                                        }
                                    },
                                    r.a.createElement(Ue, this.props)
                                );
                            }
                        }
                    ]),
                    t
                );
            })();
            t.default = Ve;
        }
    }
]);