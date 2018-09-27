(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
    {
        195: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.ripemd160 = t.HmacSHA256 = t.sha512 = t.sha256 = t.sha1 = void 0);
            var n = o(r(158)),
                i = o(r(325));
            function o(e) {
                return e && e.__esModule ? e : {default: e};
            }
            (t.sha1 = function(e, t) {
                return (0, n.default)("sha1")
                    .update(e)
                    .digest(t);
            }),
                (t.sha256 = function(e, t) {
                    return (0, n.default)("sha256")
                        .update(e)
                        .digest(t);
                }),
                (t.sha512 = function(e, t) {
                    return (0, n.default)("sha512")
                        .update(e)
                        .digest(t);
                }),
                (t.HmacSHA256 = function(e, t) {
                    return (0, i.default)("sha256", t)
                        .update(e)
                        .digest();
                }),
                (t.ripemd160 = function(e) {
                    return (0, n.default)("rmd160")
                        .update(e)
                        .digest();
                });
        },
        262: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = _(r(55)),
                    o = r(131),
                    a = r(116),
                    s = r(195),
                    u = r(37),
                    f = _(r(30)),
                    c = _(r(198));
                function _(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var l = (0, o.getCurveByName)("secp256k1"),
                    d = l.G,
                    p = l.n,
                    h = (function() {
                        function e(t) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, e),
                                (this.Q = t);
                        }
                        return (
                            (e.fromBinary = function(t) {
                                return e.fromBuffer(new n(t, "binary"));
                            }),
                            (e.fromBuffer = function(t) {
                                return "000000000000000000000000000000000000000000000000000000000000000000" ===
                                    t.toString("hex")
                                    ? new e(null)
                                    : new e(o.Point.decodeFrom(l, t));
                            }),
                            (e.prototype.toBuffer = function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : this.Q
                                            ? this.Q.compressed
                                            : null;
                                return null === this.Q
                                    ? new n(
                                          "000000000000000000000000000000000000000000000000000000000000000000",
                                          "hex"
                                      )
                                    : this.Q.getEncoded(e);
                            }),
                            (e.fromPoint = function(t) {
                                return new e(t);
                            }),
                            (e.prototype.toUncompressed = function() {
                                var t = this.Q.getEncoded(!1),
                                    r = o.Point.decodeFrom(l, t);
                                return e.fromPoint(r);
                            }),
                            (e.prototype.toBlockchainAddress = function() {
                                var e = this.toBuffer(),
                                    t = (0, s.sha512)(e);
                                return (0, s.ripemd160)(t);
                            }),
                            (e.prototype.toString = function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : u.ChainConfig.address_prefix;
                                return this.toPublicKeyString(e);
                            }),
                            (e.prototype.toPublicKeyString = function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : u.ChainConfig.address_prefix,
                                    t = this.toBuffer(),
                                    r = (0, s.ripemd160)(t),
                                    i = n.concat([t, r.slice(0, 4)]);
                                return e + (0, a.encode)(i);
                            }),
                            (e.fromPublicKeyString = function(t) {
                                var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : u.ChainConfig.address_prefix;
                                try {
                                    return e.fromStringOrThrow(t, r);
                                } catch (e) {
                                    return null;
                                }
                            }),
                            (e.fromStringOrThrow = function(t) {
                                var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : u.ChainConfig.address_prefix;
                                null === t.Q &&
                                    (t =
                                        r +
                                        "1111111111111111111111111111111114T1Anm");
                                var i = t.slice(0, r.length);
                                f.default.equal(
                                    r,
                                    i,
                                    "Expecting key to begin with " +
                                        r +
                                        ", instead got " +
                                        i
                                ),
                                    (t = t.slice(r.length));
                                var o = (t = new n(
                                    (0, a.decode)(t),
                                    "binary"
                                )).slice(-4);
                                t = t.slice(0, -4);
                                var _ = (0, s.ripemd160)(t);
                                if (
                                    ((_ = _.slice(0, 4)), !(0, c.default)(o, _))
                                )
                                    throw new Error("Checksum did not match");
                                return e.fromBuffer(t);
                            }),
                            (e.prototype.toAddressString = function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : u.ChainConfig.address_prefix,
                                    t = this.toBuffer(),
                                    r = (0, s.sha512)(t),
                                    i = (0, s.ripemd160)(r),
                                    o = (0, s.ripemd160)(i);
                                return (
                                    (i = n.concat([i, o.slice(0, 4)])),
                                    e + (0, a.encode)(i)
                                );
                            }),
                            (e.prototype.toPtsAddy = function() {
                                var e = this.toBuffer(),
                                    t = (0, s.sha256)(e),
                                    r = (0, s.ripemd160)(t);
                                r = n.concat([new n([56]), r]);
                                var i = (0, s.sha256)(r);
                                return (
                                    (i = (0, s.sha256)(i)),
                                    (r = n.concat([r, i.slice(0, 4)])),
                                    (0, a.encode)(r)
                                );
                            }),
                            (e.prototype.child = function(t) {
                                (0, f.default)(
                                    n.isBuffer(t),
                                    "Buffer required: offset"
                                ),
                                    f.default.equal(
                                        t.length,
                                        32,
                                        "offset length"
                                    ),
                                    (t = n.concat([this.toBuffer(), t])),
                                    (t = (0, s.sha256)(t));
                                var r = i.default.fromBuffer(t);
                                if (r.compareTo(p) >= 0)
                                    throw new Error(
                                        "Child offset went out of bounds, try again"
                                    );
                                var o = d.multiply(r),
                                    a = this.Q.add(o);
                                if (l.isInfinity(a))
                                    throw new Error(
                                        "Child offset derived to an invalid key, try again"
                                    );
                                return e.fromPoint(a);
                            }),
                            (e.prototype.toByteBuffer = function() {
                                var e = new ByteBuffer(
                                    ByteBuffer.DEFAULT_CAPACITY,
                                    ByteBuffer.LITTLE_ENDIAN
                                );
                                return (
                                    this.appendByteBuffer(e),
                                    e.copy(0, e.offset)
                                );
                            }),
                            (e.fromHex = function(t) {
                                return e.fromBuffer(new n(t, "hex"));
                            }),
                            (e.prototype.toHex = function() {
                                return this.toBuffer().toString("hex");
                            }),
                            (e.fromPublicKeyStringHex = function(t) {
                                return e.fromPublicKeyString(new n(t, "hex"));
                            }),
                            e
                        );
                    })();
                (t.default = h), (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        317: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = {
                reserved_spaces: {
                    relative_protocol_ids: 0,
                    protocol_ids: 1,
                    implementation_ids: 2
                },
                object_type: {
                    null: 0,
                    base: 1,
                    account: 2,
                    asset: 3,
                    force_settlement: 4,
                    committee_member: 5,
                    witness: 6,
                    limit_order: 7,
                    call_order: 8,
                    custom: 9,
                    proposal: 10,
                    operation_history: 11,
                    withdraw_permission: 12,
                    vesting_balance: 13,
                    worker: 14,
                    balance: 15
                },
                impl_object_type: {
                    global_property: 0,
                    dynamic_global_property: 1,
                    index_meta: 2,
                    asset_dynamic_data: 3,
                    asset_bitasset_data: 4,
                    account_balance: 5,
                    account_statistics: 6,
                    transaction: 7,
                    block_summary: 8,
                    account_transaction_history: 9,
                    blinded_balance: 10,
                    chain_property: 11,
                    witness_schedule: 12,
                    budget_record: 13
                },
                vote_type: {committee: 0, witness: 1, worker: 2},
                operations: {
                    transfer: 0,
                    limit_order_create: 1,
                    limit_order_cancel: 2,
                    call_order_update: 3,
                    fill_order: 4,
                    account_create: 5,
                    account_update: 6,
                    account_whitelist: 7,
                    account_upgrade: 8,
                    account_transfer: 9,
                    asset_create: 10,
                    asset_update: 11,
                    asset_update_bitasset: 12,
                    asset_update_feed_producers: 13,
                    asset_issue: 14,
                    asset_reserve: 15,
                    asset_fund_fee_pool: 16,
                    asset_settle: 17,
                    asset_global_settle: 18,
                    asset_publish_feed: 19,
                    witness_create: 20,
                    witness_update: 21,
                    proposal_create: 22,
                    proposal_update: 23,
                    proposal_delete: 24,
                    withdraw_permission_create: 25,
                    withdraw_permission_update: 26,
                    withdraw_permission_claim: 27,
                    withdraw_permission_delete: 28,
                    committee_member_create: 29,
                    committee_member_update: 30,
                    committee_member_update_global_parameters: 31,
                    vesting_balance_create: 32,
                    vesting_balance_withdraw: 33,
                    worker_create: 34,
                    custom: 35,
                    assert: 36,
                    balance_claim: 37,
                    override_transfer: 38,
                    transfer_to_blind: 39,
                    blind_transfer: 40,
                    transfer_from_blind: 41,
                    asset_settle_cancel: 42,
                    asset_claim_fees: 43
                }
            };
            (t.default = n), (e.exports = t.default);
        },
        340: function(e, t, r) {
            var n = r(518),
                i = r(732),
                o = r(733),
                a = "[object Null]",
                s = "[object Undefined]",
                u = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e
                    ? void 0 === e
                        ? s
                        : a
                    : u && u in Object(e)
                        ? i(e)
                        : o(e);
            };
        },
        341: function(e, t) {
            e.exports = function(e) {
                return null != e && "object" == typeof e;
            };
        },
        343: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n =
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
                i = r(65),
                o = (function(e) {
                    return e && e.__esModule ? e : {default: e};
                })(r(317));
            var a = {
                is_empty: function(e) {
                    return null === e || void 0 === e;
                },
                required: function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                    if (this.is_empty(e))
                        throw new Error("value required " + t + " " + e);
                    return e;
                },
                require_long: function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                    if (!i.Long.isLong(e))
                        throw new Error("Long value required " + t + " " + e);
                    return e;
                },
                string: function(e) {
                    if (this.is_empty(e)) return e;
                    if ("string" != typeof e)
                        throw new Error("string required: " + e);
                    return e;
                },
                number: function(e) {
                    if (this.is_empty(e)) return e;
                    if ("number" != typeof e)
                        throw new Error("number required: " + e);
                    return e;
                },
                whole_number: function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                    if (this.is_empty(e)) return e;
                    if (/\./.test(e))
                        throw new Error("whole number required " + t + " " + e);
                    return e;
                },
                unsigned: function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                    if (this.is_empty(e)) return e;
                    if (/-/.test(e))
                        throw new Error("unsigned required " + t + " " + e);
                    return e;
                },
                is_digits: function(e) {
                    return "numeric" == typeof e || /^[0-9]+$/.test(e);
                },
                to_number: function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                    return this.is_empty(e)
                        ? e
                        : (this.no_overflow53(e, t),
                          "number" == typeof e ? e : parseInt(e));
                },
                to_long: function(e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                        r =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2];
                    return this.is_empty(e)
                        ? e
                        : i.Long.isLong(e)
                            ? e
                            : (this.no_overflow64(e, t, r),
                              "number" == typeof e && (e = "" + e),
                              i.Long.fromString(e, r));
                },
                to_string: function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                    if (this.is_empty(e)) return e;
                    if ("string" == typeof e) return e;
                    if ("number" == typeof e)
                        return this.no_overflow53(e, t), "" + e;
                    if (i.Long.isLong(e)) return e.toString();
                    throw "unsupported type " +
                        t +
                        ": (" +
                        (void 0 === e ? "undefined" : n(e)) +
                        ") " +
                        e;
                },
                require_test: function(e, t) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "";
                    if (this.is_empty(t)) return t;
                    if (!e.test(t))
                        throw new Error("unmatched " + e + " " + r + " " + t);
                    return t;
                },
                require_match: function(e, t) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "";
                    if (this.is_empty(t)) return t;
                    var n = t.match(e);
                    if (null === n)
                        throw new Error("unmatched " + e + " " + r + " " + t);
                    return n;
                },
                require_object_id: function(e, t) {
                    return require_match(
                        /^([0-9]+)\.([0-9]+)\.([0-9]+)$/,
                        e,
                        t
                    );
                },
                require_range: function(e, t, r) {
                    var n =
                        arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : "";
                    if (this.is_empty(r)) return r;
                    this.to_number(r);
                    if (r < e || r > t)
                        throw new Error(
                            "out of range " + r + " " + n + " " + r
                        );
                    return r;
                },
                require_object_type: function() {
                    var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 1,
                        t = arguments[1],
                        r = arguments[2],
                        n =
                            arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : "";
                    if (this.is_empty(r)) return r;
                    var i = o.default.object_type[t];
                    if (!i)
                        throw new Error(
                            "Unknown object type " + t + " " + n + " " + r
                        );
                    if (!new RegExp(e + "." + i + ".[0-9]+$").test(r))
                        throw new Error(
                            "Expecting " +
                                t +
                                " in format " +
                                e +
                                "." +
                                i +
                                ".[0-9]+ instead of " +
                                r +
                                " " +
                                n +
                                " " +
                                r
                        );
                    return r;
                },
                get_instance: function(e, t, r, n) {
                    return this.is_empty(r)
                        ? r
                        : (this.require_object_type(e, t, r, n),
                          this.to_number(r.split(".")[2]));
                },
                require_relative_type: function(e, t, r) {
                    return this.require_object_type(0, e, t, r), t;
                },
                get_relative_instance: function(e, t, r) {
                    return this.is_empty(t)
                        ? t
                        : (this.require_object_type(0, e, t, r),
                          this.to_number(t.split(".")[2]));
                },
                require_protocol_type: function(e, t, r) {
                    return this.require_object_type(1, e, t, r), t;
                },
                get_protocol_instance: function(e, t, r) {
                    return this.is_empty(t)
                        ? t
                        : (this.require_object_type(1, e, t, r),
                          this.to_number(t.split(".")[2]));
                },
                get_protocol_type: function(e, t) {
                    if (this.is_empty(e)) return e;
                    this.require_object_id(e, t);
                    var r = e.split(".");
                    return this.to_number(r[1]);
                },
                get_protocol_type_name: function(e, t) {
                    if (this.is_empty(e)) return e;
                    var r = this.get_protocol_type(e, t);
                    return Object.keys(o.default.object_type)[r];
                },
                require_implementation_type: function(e, t, r) {
                    return this.require_object_type(2, e, t, r), t;
                },
                get_implementation_instance: function(e, t, r) {
                    return this.is_empty(t)
                        ? t
                        : (this.require_object_type(2, e, t, r),
                          this.to_number(t.split(".")[2]));
                },
                no_overflow53: function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "";
                    if ("number" != typeof e)
                        if ("string" != typeof e) {
                            if (!i.Long.isLong(e))
                                throw "unsupported type " +
                                    t +
                                    ": (" +
                                    (void 0 === e ? "undefined" : n(e)) +
                                    ") " +
                                    e;
                            this.no_overflow53(e.toInt(), t);
                        } else {
                            parseInt(e);
                            if (e > 9007199254740991 || e < -9007199254740991)
                                throw new Error("overflow " + t + " " + e);
                        }
                    else if (e > 9007199254740991 || e < -9007199254740991)
                        throw new Error("overflow " + t + " " + e);
                },
                no_overflow64: function(e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                        r =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2];
                    if (!i.Long.isLong(e))
                        if (void 0 === e.t || void 0 === e.s)
                            if ("string" != typeof e) {
                                if ("number" != typeof e)
                                    throw "unsupported type " +
                                        t +
                                        ": (" +
                                        (void 0 === e ? "undefined" : n(e)) +
                                        ") " +
                                        e;
                                if (
                                    e > 9007199254740991 ||
                                    e < -9007199254740991
                                )
                                    throw new Error("overflow " + t + " " + e);
                            } else {
                                for (e = e.replace(/^0+/, ""); /0$/.test(e); )
                                    e = e.substring(0, e.length - 1);
                                if (
                                    (/\.$/.test(e) &&
                                        (e = e.substring(0, e.length - 1)),
                                    "" === e && (e = "0"),
                                    i.Long.fromString(e, r).toString() !==
                                        e.trim())
                                )
                                    throw new Error("overflow " + t + " " + e);
                            }
                        else this.no_overflow64(e.toString(), t, r);
                }
            };
            (t.default = a), (e.exports = t.default);
        },
        344: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = r(131),
                    o = (_(i), _(r(55))),
                    a = r(116),
                    s = r(195),
                    u = _(r(262)),
                    f = _(r(198)),
                    c = _(r(30));
                function _(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var l = (0, i.getCurveByName)("secp256k1"),
                    d = (l.G, l.n),
                    p = (function() {
                        function e(t) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, e),
                                (this.d = t);
                        }
                        return (
                            (e.fromBuffer = function(t) {
                                if (!n.isBuffer(t))
                                    throw new Error(
                                        "Expecting paramter to be a Buffer type"
                                    );
                                if (
                                    (32 !== t.length &&
                                        console.log(
                                            "WARN: Expecting 32 bytes, instead got " +
                                                t.length +
                                                ", stack trace:",
                                            new Error().stack
                                        ),
                                    0 === t.length)
                                )
                                    throw new Error("Empty buffer");
                                return new e(o.default.fromBuffer(t));
                            }),
                            (e.fromSeed = function(t) {
                                if ("string" != typeof t)
                                    throw new Error(
                                        "seed must be of type string"
                                    );
                                return e.fromBuffer((0, s.sha256)(t));
                            }),
                            (e.fromWif = function(t) {
                                var r = new n((0, a.decode)(t)),
                                    i = r.readUInt8(0);
                                c.default.equal(
                                    128,
                                    i,
                                    "Expected version 128, instead got " + i
                                );
                                var o = r.slice(0, -4),
                                    u = r.slice(-4),
                                    _ = (0, s.sha256)(o);
                                if (
                                    ((_ = (_ = (0, s.sha256)(_)).slice(0, 4)),
                                    !(0, f.default)(u, _))
                                )
                                    throw new Error("Checksum did not match");
                                return (o = o.slice(1)), e.fromBuffer(o);
                            }),
                            (e.prototype.toWif = function() {
                                var e = this.toBuffer();
                                e = n.concat([new n([128]), e]);
                                var t = (0, s.sha256)(e);
                                t = (t = (0, s.sha256)(t)).slice(0, 4);
                                var r = n.concat([e, t]);
                                return (0, a.encode)(r);
                            }),
                            (e.prototype.toPublicKeyPoint = function() {
                                return l.G.multiply(this.d);
                            }),
                            (e.prototype.toPublicKey = function() {
                                return this.public_key
                                    ? this.public_key
                                    : (this.public_key = u.default.fromPoint(
                                          this.toPublicKeyPoint()
                                      ));
                            }),
                            (e.prototype.toBuffer = function() {
                                return this.d.toBuffer(32);
                            }),
                            (e.prototype.get_shared_secret = function(e) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    r = (e = h(e)).toUncompressed().toBuffer(),
                                    a = i.Point.fromAffine(
                                        l,
                                        o.default.fromBuffer(r.slice(1, 33)),
                                        o.default.fromBuffer(r.slice(33, 65))
                                    ),
                                    u = this.toBuffer(),
                                    f = a
                                        .multiply(o.default.fromBuffer(u))
                                        .affineX.toBuffer({size: 32});
                                if (!t && f.length < 32) {
                                    var c = new n(32 - f.length).fill(0);
                                    f = n.concat([c, f]);
                                }
                                return (0, s.sha512)(f);
                            }),
                            (e.prototype.child = function(t) {
                                (t = n.concat([
                                    this.toPublicKey().toBuffer(),
                                    t
                                ])),
                                    (t = (0, s.sha256)(t));
                                var r = o.default.fromBuffer(t);
                                if (r.compareTo(d) >= 0)
                                    throw new Error(
                                        "Child offset went out of bounds, try again"
                                    );
                                var i = this.d.add(r);
                                if (0 === i.signum())
                                    throw new Error(
                                        "Child offset derived to an invalid key, try again"
                                    );
                                return new e(i);
                            }),
                            (e.prototype.toByteBuffer = function() {
                                var e = new ByteBuffer(
                                    ByteBuffer.DEFAULT_CAPACITY,
                                    ByteBuffer.LITTLE_ENDIAN
                                );
                                return (
                                    this.appendByteBuffer(e),
                                    e.copy(0, e.offset)
                                );
                            }),
                            (e.fromHex = function(t) {
                                return e.fromBuffer(new n(t, "hex"));
                            }),
                            (e.prototype.toHex = function() {
                                return this.toBuffer().toString("hex");
                            }),
                            e
                        );
                    })();
                t.default = p;
                var h = function(e) {
                    return null == e
                        ? e
                        : e.Q
                            ? e
                            : u.default.fromStringOrThrow(e);
                };
                e.exports = t.default;
            }.call(this, r(28).Buffer));
        },
        424: function(e, t, r) {
            var n = r(519),
                i =
                    "object" == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                o = n || i || Function("return this")();
            e.exports = o;
        },
        425: function(e, t) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
            };
        },
        426: function(e, t, r) {
            "use strict";
            (function(n, i) {
                t.__esModule = !0;
                var o = s(r(65)),
                    a = s(r(760));
                function s(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var u = n.env.npm_config__graphene_serializer_hex_dump,
                    f = (function() {
                        function e(t, r) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, e),
                                (this.operation_name = t),
                                (this.types = r),
                                this.types &&
                                    (this.keys = Object.keys(this.types)),
                                (e.printDebug = !0);
                        }
                        return (
                            (e.prototype.fromByteBuffer = function(t) {
                                var r = {},
                                    n = null;
                                try {
                                    for (
                                        var i = this.keys, o = 0;
                                        o < i.length;
                                        o++
                                    ) {
                                        n = i[o];
                                        var s = this.types[n];
                                        try {
                                            if (u)
                                                if (s.operation_name)
                                                    console.error(
                                                        s.operation_name
                                                    );
                                                else {
                                                    var f = t.offset;
                                                    s.fromByteBuffer(t);
                                                    var c = t.offset;
                                                    t.offset = f;
                                                    var _ = t.copy(f, c);
                                                    console.error(
                                                        this.operation_name +
                                                            "." +
                                                            n +
                                                            "\t",
                                                        _.toHex()
                                                    );
                                                }
                                            r[n] = s.fromByteBuffer(t);
                                        } catch (r) {
                                            throw (e.printDebug &&
                                                (console.error(
                                                    "Error reading " +
                                                        this.operation_name +
                                                        "." +
                                                        n +
                                                        " in data:"
                                                ),
                                                t.printDebug()),
                                            r);
                                        }
                                    }
                                } catch (e) {
                                    a.default.throw(
                                        this.operation_name + "." + n,
                                        e
                                    );
                                }
                                return r;
                            }),
                            (e.prototype.appendByteBuffer = function(e, t) {
                                var r = null;
                                try {
                                    for (
                                        var n = this.keys, i = 0;
                                        i < n.length;
                                        i++
                                    ) {
                                        (r = n[i]),
                                            this.types[r].appendByteBuffer(
                                                e,
                                                t[r]
                                            );
                                    }
                                } catch (e) {
                                    try {
                                        a.default.throw(
                                            this.operation_name +
                                                "." +
                                                r +
                                                " = " +
                                                JSON.stringify(t[r]),
                                            e
                                        );
                                    } catch (n) {
                                        a.default.throw(
                                            this.operation_name +
                                                "." +
                                                r +
                                                " = " +
                                                t[r],
                                            e
                                        );
                                    }
                                }
                            }),
                            (e.prototype.fromObject = function(e) {
                                var t = {},
                                    r = null;
                                try {
                                    for (
                                        var n = this.keys, i = 0;
                                        i < n.length;
                                        i++
                                    ) {
                                        r = n[i];
                                        var o = this.types[r],
                                            s = e[r],
                                            u = o.fromObject(s);
                                        t[r] = u;
                                    }
                                } catch (e) {
                                    a.default.throw(
                                        this.operation_name + "." + r,
                                        e
                                    );
                                }
                                return t;
                            }),
                            (e.prototype.toObject = function() {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                    t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {use_default: !1, annotate: !1},
                                    r = {},
                                    n = null;
                                try {
                                    if (!this.types) return r;
                                    for (
                                        var i = this.keys, s = 0;
                                        s < i.length;
                                        s++
                                    ) {
                                        n = i[s];
                                        var f = this.types[n],
                                            c = f.toObject(
                                                void 0 !== e && null !== e
                                                    ? e[n]
                                                    : void 0,
                                                t
                                            );
                                        if (((r[n] = c), u)) {
                                            var _ = new o.default(
                                                o.default.DEFAULT_CAPACITY,
                                                o.default.LITTLE_ENDIAN
                                            );
                                            f.appendByteBuffer(
                                                _,
                                                void 0 !== e && null !== e
                                                    ? e[n]
                                                    : void 0
                                            ),
                                                (_ = _.copy(0, _.offset)),
                                                console.error(
                                                    this.operation_name +
                                                        "." +
                                                        n,
                                                    _.toHex()
                                                );
                                        }
                                    }
                                } catch (e) {
                                    a.default.throw(
                                        this.operation_name + "." + n,
                                        e
                                    );
                                }
                                return r;
                            }),
                            (e.prototype.compare = function(e, t) {
                                var r = this.keys[0],
                                    n = this.types[r],
                                    o = e[r],
                                    a = t[r];
                                if (n.compare) return n.compare(o, a);
                                if (
                                    "number" == typeof o &&
                                    "number" == typeof a
                                )
                                    return o - a;
                                var s = void 0;
                                i.isBuffer(o) && i.isBuffer(a) && (s = "hex");
                                var u = o.toString(s),
                                    f = a.toString(s);
                                return u > f ? 1 : u < f ? -1 : 0;
                            }),
                            (e.prototype.fromHex = function(e) {
                                var t = o.default.fromHex(
                                    e,
                                    o.default.LITTLE_ENDIAN
                                );
                                return this.fromByteBuffer(t);
                            }),
                            (e.prototype.fromBuffer = function(e) {
                                var t = o.default.fromBinary(
                                    e.toString("binary"),
                                    o.default.LITTLE_ENDIAN
                                );
                                return this.fromByteBuffer(t);
                            }),
                            (e.prototype.toHex = function(e) {
                                return this.toByteBuffer(e).toHex();
                            }),
                            (e.prototype.toByteBuffer = function(e) {
                                var t = new o.default(
                                    o.default.DEFAULT_CAPACITY,
                                    o.default.LITTLE_ENDIAN
                                );
                                return (
                                    this.appendByteBuffer(t, e),
                                    t.copy(0, t.offset)
                                );
                            }),
                            (e.prototype.toBuffer = function(e) {
                                return new i(
                                    this.toByteBuffer(e).toBinary(),
                                    "binary"
                                );
                            }),
                            e
                        );
                    })();
                (t.default = f), (e.exports = t.default);
            }.call(this, r(91), r(28).Buffer));
        },
        427: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = (function(e) {
                    return e && e.__esModule ? e : {default: e};
                })(r(262));
                var o = (function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                    }
                    return (
                        (e.fixed_data = function(e, t, r) {
                            if (e) {
                                if (!r) {
                                    var i = e.copy(e.offset, e.offset + t);
                                    return (
                                        e.skip(t), new n(i.toBinary(), "binary")
                                    );
                                }
                                var o = r.slice(0, t).toString("binary");
                                for (e.append(o, "binary"); t-- > o.length; )
                                    e.writeUint8(0);
                            }
                        }),
                        (e.public_key = function(t, r) {
                            if (t) {
                                if (!r)
                                    return (
                                        (n = e.fixed_data(t, 33)),
                                        i.default.fromBuffer(n)
                                    );
                                var n = r.toBuffer();
                                t.append(n.toString("binary"), "binary");
                            }
                        }),
                        (e.ripemd160 = function(t, r) {
                            if (t)
                                return r
                                    ? void e.fixed_data(t, 20, r)
                                    : e.fixed_data(t, 20);
                        }),
                        (e.time_point_sec = function(e, t) {
                            return t
                                ? ((t = Math.ceil(t / 1e3)),
                                  void e.writeInt32(t))
                                : ((t = e.readInt32()), new Date(1e3 * t));
                        }),
                        e
                    );
                })();
                (t.default = o), (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        428: function(e, t, r) {
            "use strict";
            (function(n, i) {
                t.__esModule = !0;
                var o =
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
                    a = l(r(343)),
                    s = l(r(427)),
                    u = l(r(317)),
                    f = l(r(522)),
                    c = r(429),
                    _ = r(37);
                function l(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var d = {},
                    p = n.env.npm_config__graphene_serializer_hex_dump;
                (d.uint8 = {
                    fromByteBuffer: function(e) {
                        return e.readUint8();
                    },
                    appendByteBuffer: function(e, t) {
                        a.default.require_range(0, 255, t, "uint8 " + t),
                            e.writeUint8(t);
                    },
                    fromObject: function(e) {
                        return (
                            a.default.require_range(0, 255, e, "uint8 " + e), e
                        );
                    },
                    toObject: function(e) {
                        return (arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                        ).use_default && void 0 === e
                            ? 0
                            : (a.default.require_range(0, 255, e, "uint8 " + e),
                              parseInt(e));
                    }
                }),
                    (d.uint16 = {
                        fromByteBuffer: function(e) {
                            return e.readUint16();
                        },
                        appendByteBuffer: function(e, t) {
                            a.default.require_range(0, 65535, t, "uint16 " + t),
                                e.writeUint16(t);
                        },
                        fromObject: function(e) {
                            return (
                                a.default.require_range(
                                    0,
                                    65535,
                                    e,
                                    "uint16 " + e
                                ),
                                e
                            );
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? 0
                                : (a.default.require_range(
                                      0,
                                      65535,
                                      e,
                                      "uint16 " + e
                                  ),
                                  parseInt(e));
                        }
                    }),
                    (d.uint32 = {
                        fromByteBuffer: function(e) {
                            return e.readUint32();
                        },
                        appendByteBuffer: function(e, t) {
                            a.default.require_range(
                                0,
                                4294967295,
                                t,
                                "uint32 " + t
                            ),
                                e.writeUint32(t);
                        },
                        fromObject: function(e) {
                            return (
                                a.default.require_range(
                                    0,
                                    4294967295,
                                    e,
                                    "uint32 " + e
                                ),
                                e
                            );
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? 0
                                : (a.default.require_range(
                                      0,
                                      4294967295,
                                      e,
                                      "uint32 " + e
                                  ),
                                  parseInt(e));
                        }
                    });
                var h = -1 * Math.pow(2, 31),
                    m = Math.pow(2, 31) - 1;
                (d.varint32 = {
                    fromByteBuffer: function(e) {
                        return e.readVarint32();
                    },
                    appendByteBuffer: function(e, t) {
                        a.default.require_range(h, m, t, "uint32 " + t),
                            e.writeVarint32(t);
                    },
                    fromObject: function(e) {
                        return (
                            a.default.require_range(h, m, e, "uint32 " + e), e
                        );
                    },
                    toObject: function(e) {
                        return (arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                        ).use_default && void 0 === e
                            ? 0
                            : (a.default.require_range(h, m, e, "uint32 " + e),
                              parseInt(e));
                    }
                }),
                    (d.int64 = {
                        fromByteBuffer: function(e) {
                            return e.readInt64();
                        },
                        appendByteBuffer: function(e, t) {
                            a.default.required(t),
                                e.writeInt64(a.default.to_long(t));
                        },
                        fromObject: function(e) {
                            return a.default.required(e), a.default.to_long(e);
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? "0"
                                : (a.default.required(e),
                                  a.default.to_long(e).toString());
                        }
                    }),
                    (d.uint64 = {
                        fromByteBuffer: function(e) {
                            return e.readUint64();
                        },
                        appendByteBuffer: function(e, t) {
                            e.writeUint64(
                                a.default.to_long(
                                    a.default.unsigned(t),
                                    void 0,
                                    !0
                                )
                            );
                        },
                        fromObject: function(e) {
                            return a.default.to_long(
                                a.default.unsigned(e),
                                void 0,
                                !0
                            );
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? "0"
                                : a.default.to_long(e, void 0, !0).toString();
                        }
                    }),
                    (d.string = {
                        fromByteBuffer: function(e) {
                            var t,
                                r = e.readVarint32();
                            return (
                                (t = e.copy(e.offset, e.offset + r)),
                                e.skip(r),
                                new i(t.toBinary(), "binary")
                            );
                        },
                        appendByteBuffer: function(e, t) {
                            a.default.required(t),
                                e.writeVarint32(t.length),
                                e.append(t.toString("binary"), "binary");
                        },
                        fromObject: function(e) {
                            return a.default.required(e), new i(e);
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? ""
                                : e.toString();
                        }
                    }),
                    (d.bytes = function(e) {
                        return {
                            fromByteBuffer: function(t) {
                                if (void 0 === e) {
                                    var r,
                                        n = t.readVarint32();
                                    return (
                                        (r = t.copy(t.offset, t.offset + n)),
                                        t.skip(n),
                                        new i(r.toBinary(), "binary")
                                    );
                                }
                                return (
                                    (r = t.copy(t.offset, t.offset + e)),
                                    t.skip(e),
                                    new i(r.toBinary(), "binary")
                                );
                            },
                            appendByteBuffer: function(t, r) {
                                a.default.required(r),
                                    "string" == typeof r &&
                                        (r = new i(r, "hex")),
                                    void 0 === e && t.writeVarint32(r.length),
                                    t.append(r.toString("binary"), "binary");
                            },
                            fromObject: function(e) {
                                return (
                                    a.default.required(e),
                                    i.isBuffer(e) ? e : new i(e, "hex")
                                );
                            },
                            toObject: function(t) {
                                if (
                                    (arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {}
                                    ).use_default &&
                                    void 0 === t
                                ) {
                                    return (function(e) {
                                        return new Array(e).join("00");
                                    })(e);
                                }
                                return a.default.required(t), t.toString("hex");
                            }
                        };
                    }),
                    (d.bool = {
                        fromByteBuffer: function(e) {
                            return 1 === e.readUint8();
                        },
                        appendByteBuffer: function(e, t) {
                            e.writeUint8(JSON.parse(t) ? 1 : 0);
                        },
                        fromObject: function(e) {
                            return !!JSON.parse(e);
                        },
                        toObject: function(e) {
                            return (
                                (!(arguments.length > 1 &&
                                void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {}
                                ).use_default ||
                                    void 0 !== e) &&
                                !!JSON.parse(e)
                            );
                        }
                    }),
                    (d.void = {
                        fromByteBuffer: function(e) {
                            throw new Error("(void) undefined type");
                        },
                        appendByteBuffer: function(e, t) {
                            throw new Error("(void) undefined type");
                        },
                        fromObject: function(e) {
                            throw new Error("(void) undefined type");
                        },
                        toObject: function(e) {
                            if (
                                !(arguments.length > 1 &&
                                void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {}
                                ).use_default ||
                                void 0 !== e
                            )
                                throw new Error("(void) undefined type");
                        }
                    }),
                    (d.array = function(e) {
                        return {
                            fromByteBuffer: function(t) {
                                var r = t.readVarint32();
                                p &&
                                    console.log(
                                        "varint32 size = " + r.toString(16)
                                    );
                                for (
                                    var n = [], i = 0;
                                    0 < r ? i < r : i > r;
                                    i++
                                )
                                    n.push(e.fromByteBuffer(t));
                                return y(n, e);
                            },
                            appendByteBuffer: function(t, r) {
                                a.default.required(r),
                                    (r = y(r, e)),
                                    t.writeVarint32(r.length);
                                for (var n, i = 0; i < r.length; i++)
                                    (n = r[i]), e.appendByteBuffer(t, n);
                            },
                            fromObject: function(t) {
                                a.default.required(t), (t = y(t, e));
                                for (var r, n = [], i = 0; i < t.length; i++)
                                    (r = t[i]), n.push(e.fromObject(r));
                                return n;
                            },
                            toObject: function(t) {
                                var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                if (r.use_default && void 0 === t)
                                    return [e.toObject(t, r)];
                                a.default.required(t), (t = y(t, e));
                                for (var n, i = [], o = 0; o < t.length; o++)
                                    (n = t[o]), i.push(e.toObject(n, r));
                                return i;
                            }
                        };
                    }),
                    (d.time_point_sec = {
                        fromByteBuffer: function(e) {
                            return e.readUint32();
                        },
                        appendByteBuffer: function(e, t) {
                            "number" != typeof t &&
                                (t = d.time_point_sec.fromObject(t)),
                                e.writeUint32(t);
                        },
                        fromObject: function(e) {
                            if ((a.default.required(e), "number" == typeof e))
                                return e;
                            if (e.getTime) return Math.floor(e.getTime() / 1e3);
                            if ("string" != typeof e)
                                throw new Error("Unknown date type: " + e);
                            return (
                                /T[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$/.test(e) &&
                                    (e += "Z"),
                                Math.floor(new Date(e).getTime() / 1e3)
                            );
                        },
                        toObject: function(e) {
                            if (
                                (arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {}
                                ).use_default &&
                                void 0 === e
                            )
                                return new Date(0).toISOString().split(".")[0];
                            if ((a.default.required(e), "string" == typeof e))
                                return e;
                            if (e.getTime) return e.toISOString().split(".")[0];
                            var t = parseInt(e);
                            return (
                                a.default.require_range(
                                    0,
                                    4294967295,
                                    t,
                                    "uint32 " + e
                                ),
                                new Date(1e3 * t).toISOString().split(".")[0]
                            );
                        }
                    }),
                    (d.set = function(e) {
                        return {
                            validate: function(t) {
                                for (var r, n = {}, i = 0; i < t.length; i++) {
                                    var a;
                                    if (
                                        ((a =
                                            void 0 === (r = t[i])
                                                ? "undefined"
                                                : o(r)),
                                        ["string", "number"].indexOf(a) >= 0)
                                    ) {
                                        if (void 0 !== n[r])
                                            throw new Error("duplicate (set)");
                                        n[r] = !0;
                                    }
                                }
                                return y(t, e);
                            },
                            fromByteBuffer: function(t) {
                                var r = t.readVarint32();
                                return (
                                    p &&
                                        console.log(
                                            "varint32 size = " + r.toString(16)
                                        ),
                                    this.validate(
                                        (function() {
                                            for (
                                                var n = [], i = 0;
                                                0 < r ? i < r : i > r;
                                                i++
                                            )
                                                n.push(e.fromByteBuffer(t));
                                            return n;
                                        })()
                                    )
                                );
                            },
                            appendByteBuffer: function(t, r) {
                                r || (r = []), t.writeVarint32(r.length);
                                for (
                                    var n, i = this.validate(r), o = 0;
                                    o < i.length;
                                    o++
                                )
                                    (n = i[o]), e.appendByteBuffer(t, n);
                            },
                            fromObject: function(t) {
                                return (
                                    t || (t = []),
                                    this.validate(
                                        (function() {
                                            for (
                                                var r, n = [], i = 0;
                                                i < t.length;
                                                i++
                                            )
                                                (r = t[i]),
                                                    n.push(e.fromObject(r));
                                            return n;
                                        })()
                                    )
                                );
                            },
                            toObject: function(t) {
                                var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                return r.use_default && void 0 === t
                                    ? [e.toObject(t, r)]
                                    : (t || (t = []),
                                      this.validate(
                                          (function() {
                                              for (
                                                  var n, i = [], o = 0;
                                                  o < t.length;
                                                  o++
                                              )
                                                  (n = t[o]),
                                                      i.push(e.toObject(n, r));
                                              return i;
                                          })()
                                      ));
                            }
                        };
                    }),
                    (d.fixed_array = function(e, t) {
                        return {
                            fromByteBuffer: function(r) {
                                var n, i, o;
                                for (o = [], n = 0, i = e; n < i; n += 1)
                                    o.push(t.fromByteBuffer(r));
                                return y(o, t);
                            },
                            appendByteBuffer: function(r, n) {
                                var i, o, s;
                                for (
                                    0 !== e &&
                                        (a.default.required(n), (n = y(n, t))),
                                        i = o = 0,
                                        s = e;
                                    o < s;
                                    i = o += 1
                                )
                                    t.appendByteBuffer(r, n[i]);
                            },
                            fromObject: function(r) {
                                var n, i, o, s;
                                for (
                                    0 !== e && a.default.required(r),
                                        s = [],
                                        n = i = 0,
                                        o = e;
                                    i < o;
                                    n = i += 1
                                )
                                    s.push(t.fromObject(r[n]));
                                return s;
                            },
                            toObject: function(r, n) {
                                var i, o, s, u, f, c, _;
                                if (
                                    (null == n && (n = {}),
                                    n.use_default && void 0 === r)
                                ) {
                                    for (
                                        c = [], i = o = 0, u = e;
                                        o < u;
                                        i = o += 1
                                    )
                                        c.push(t.toObject(void 0, n));
                                    return c;
                                }
                                for (
                                    0 !== e && a.default.required(r),
                                        _ = [],
                                        i = s = 0,
                                        f = e;
                                    s < f;
                                    i = s += 1
                                )
                                    _.push(t.toObject(r[i], n));
                                return _;
                            }
                        };
                    });
                (d.protocol_id_type = function(e) {
                    return (
                        a.default.required(e, "name"),
                        (function(e, t) {
                            return (
                                a.default.required(e, "reserved_spaces"),
                                a.default.required(t, "object_type"),
                                {
                                    fromByteBuffer: function(e) {
                                        return e.readVarint32();
                                    },
                                    appendByteBuffer: function(r, n) {
                                        a.default.required(n),
                                            void 0 !== n.resolve &&
                                                (n = n.resolve),
                                            /^[0-9]+\.[0-9]+\.[0-9]+$/.test(
                                                n
                                            ) &&
                                                (n = a.default.get_instance(
                                                    e,
                                                    t,
                                                    n
                                                )),
                                            r.writeVarint32(
                                                a.default.to_number(n)
                                            );
                                    },
                                    fromObject: function(r) {
                                        return (
                                            a.default.required(r),
                                            void 0 !== r.resolve &&
                                                (r = r.resolve),
                                            a.default.is_digits(r)
                                                ? a.default.to_number(r)
                                                : a.default.get_instance(
                                                      e,
                                                      t,
                                                      r
                                                  )
                                        );
                                    },
                                    toObject: function(r) {
                                        var n =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {},
                                            i = u.default.object_type[t];
                                        return n.use_default && void 0 === r
                                            ? e + "." + i + ".0"
                                            : (a.default.required(r),
                                              void 0 !== r.resolve &&
                                                  (r = r.resolve),
                                              /^[0-9]+\.[0-9]+\.[0-9]+$/.test(
                                                  r
                                              ) &&
                                                  (r = a.default.get_instance(
                                                      e,
                                                      t,
                                                      r
                                                  )),
                                              e + "." + i + "." + r);
                                    }
                                }
                            );
                        })(u.default.reserved_spaces.protocol_ids, e)
                    );
                }),
                    (d.object_id_type = {
                        fromByteBuffer: function(e) {
                            return f.default.fromByteBuffer(e);
                        },
                        appendByteBuffer: function(e, t) {
                            a.default.required(t),
                                void 0 !== t.resolve && (t = t.resolve),
                                (t = f.default.fromString(t)).appendByteBuffer(
                                    e
                                );
                        },
                        fromObject: function(e) {
                            return (
                                a.default.required(e),
                                void 0 !== e.resolve && (e = e.resolve),
                                f.default.fromString(e)
                            );
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? "0.0.0"
                                : (a.default.required(e),
                                  void 0 !== e.resolve && (e = e.resolve),
                                  (e = f.default.fromString(e)).toString());
                        }
                    }),
                    (d.vote_id = {
                        TYPE: 255,
                        ID: 4294967040,
                        fromByteBuffer: function(e) {
                            var t = e.readUint32();
                            return {type: t & this.TYPE, id: t & this.ID};
                        },
                        appendByteBuffer: function(e, t) {
                            a.default.required(t),
                                "string" === t && (t = d.vote_id.fromObject(t));
                            var r = (t.id << 8) | t.type;
                            e.writeUint32(r);
                        },
                        fromObject: function(e) {
                            if (
                                (a.default.required(e, "(type vote_id)"),
                                "object" ===
                                    (void 0 === e ? "undefined" : o(e)))
                            )
                                return (
                                    a.default.required(e.type, "type"),
                                    a.default.required(e.id, "id"),
                                    e
                                );
                            a.default.require_test(
                                /^[0-9]+:[0-9]+$/,
                                e,
                                "vote_id format " + e
                            );
                            var t = e.split(":"),
                                r = t[0],
                                n = t[1];
                            return (
                                a.default.require_range(
                                    0,
                                    255,
                                    r,
                                    "vote type " + e
                                ),
                                a.default.require_range(
                                    0,
                                    16777215,
                                    n,
                                    "vote id " + e
                                ),
                                {type: r, id: n}
                            );
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? "0:0"
                                : (a.default.required(e),
                                  "string" == typeof e &&
                                      (e = d.vote_id.fromObject(e)),
                                  e.type + ":" + e.id);
                        },
                        compare: function(e, t) {
                            return (
                                "object" !==
                                    (void 0 === e ? "undefined" : o(e)) &&
                                    (e = d.vote_id.fromObject(e)),
                                "object" !==
                                    (void 0 === t ? "undefined" : o(t)) &&
                                    (t = d.vote_id.fromObject(t)),
                                parseInt(e.id) - parseInt(t.id)
                            );
                        }
                    }),
                    (d.optional = function(e) {
                        return (
                            a.default.required(e, "st_operation"),
                            {
                                fromByteBuffer: function(t) {
                                    if (1 === t.readUint8())
                                        return e.fromByteBuffer(t);
                                },
                                appendByteBuffer: function(t, r) {
                                    null !== r && void 0 !== r
                                        ? (t.writeUint8(1),
                                          e.appendByteBuffer(t, r))
                                        : t.writeUint8(0);
                                },
                                fromObject: function(t) {
                                    if (void 0 !== t) return e.fromObject(t);
                                },
                                toObject: function(t) {
                                    var r =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {},
                                        n =
                                            r.use_default || void 0 !== t
                                                ? e.toObject(t, r)
                                                : void 0;
                                    return (
                                        r.annotate &&
                                            ("object" ===
                                            (void 0 === n ? "undefined" : o(n))
                                                ? (n.__optional =
                                                      "parent is optional")
                                                : (n = {__optional: n})),
                                        n
                                    );
                                }
                            }
                        );
                    }),
                    (d.static_variant = function(e) {
                        return {
                            nosort: !0,
                            st_operations: e,
                            fromByteBuffer: function(e) {
                                var t = e.readVarint32(),
                                    r = this.st_operations[t];
                                return (
                                    p &&
                                        console.error(
                                            "static_variant id 0x" +
                                                t.toString(16) +
                                                " (" +
                                                t +
                                                ")"
                                        ),
                                    a.default.required(r, "operation " + t),
                                    [t, r.fromByteBuffer(e)]
                                );
                            },
                            appendByteBuffer: function(e, t) {
                                a.default.required(t);
                                var r = t[0],
                                    n = this.st_operations[r];
                                a.default.required(n, "operation " + r),
                                    e.writeVarint32(r),
                                    n.appendByteBuffer(e, t[1]);
                            },
                            fromObject: function(e) {
                                a.default.required(e);
                                var t = e[0],
                                    r = this.st_operations[t];
                                return (
                                    a.default.required(r, "operation " + t),
                                    [t, r.fromObject(e[1])]
                                );
                            },
                            toObject: function(e) {
                                var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                if (t.use_default && void 0 === e)
                                    return [
                                        0,
                                        this.st_operations[0].toObject(
                                            void 0,
                                            t
                                        )
                                    ];
                                a.default.required(e);
                                var r = e[0],
                                    n = this.st_operations[r];
                                return (
                                    a.default.required(n, "operation " + r),
                                    [r, n.toObject(e[1], t)]
                                );
                            }
                        };
                    }),
                    (d.map = function(e, t) {
                        return {
                            validate: function(t) {
                                if (!Array.isArray(t))
                                    throw new Error("expecting array");
                                for (var r, n = {}, i = 0; i < t.length; i++) {
                                    var a;
                                    if (2 !== (r = t[i]).length)
                                        throw new Error(
                                            "expecting two elements"
                                        );
                                    if (
                                        ((a = o(r[0])),
                                        ["number", "string"].indexOf(a) >= 0)
                                    ) {
                                        if (void 0 !== n[r[0]])
                                            throw new Error("duplicate (map)");
                                        n[r[0]] = !0;
                                    }
                                }
                                return y(t, e);
                            },
                            fromByteBuffer: function(r) {
                                for (
                                    var n = [], i = r.readVarint32(), o = 0;
                                    0 < i ? o < i : o > i;
                                    o++
                                )
                                    n.push([
                                        e.fromByteBuffer(r),
                                        t.fromByteBuffer(r)
                                    ]);
                                return this.validate(n);
                            },
                            appendByteBuffer: function(r, n) {
                                this.validate(n), r.writeVarint32(n.length);
                                for (var i, o = 0; o < n.length; o++)
                                    (i = n[o]),
                                        e.appendByteBuffer(r, i[0]),
                                        t.appendByteBuffer(r, i[1]);
                            },
                            fromObject: function(r) {
                                a.default.required(r);
                                for (var n, i = [], o = 0; o < r.length; o++)
                                    (n = r[o]),
                                        i.push([
                                            e.fromObject(n[0]),
                                            t.fromObject(n[1])
                                        ]);
                                return this.validate(i);
                            },
                            toObject: function(r) {
                                var n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                                if (n.use_default && void 0 === r)
                                    return [
                                        [
                                            e.toObject(void 0, n),
                                            t.toObject(void 0, n)
                                        ]
                                    ];
                                a.default.required(r), (r = this.validate(r));
                                for (var i, o = [], s = 0; s < r.length; s++)
                                    (i = r[s]),
                                        o.push([
                                            e.toObject(i[0], n),
                                            t.toObject(i[1], n)
                                        ]);
                                return o;
                            }
                        };
                    }),
                    (d.public_key = {
                        toPublic: function(e) {
                            return (
                                void 0 !== e.resolve && (e = e.resolve),
                                null == e
                                    ? e
                                    : e.Q
                                        ? e
                                        : c.PublicKey.fromStringOrThrow(e)
                            );
                        },
                        fromByteBuffer: function(e) {
                            return s.default.public_key(e);
                        },
                        appendByteBuffer: function(e, t) {
                            a.default.required(t),
                                s.default.public_key(
                                    e,
                                    d.public_key.toPublic(t)
                                );
                        },
                        fromObject: function(e) {
                            return (
                                a.default.required(e),
                                e.Q ? e : d.public_key.toPublic(e)
                            );
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? _.ChainConfig.address_prefix +
                                      "859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM"
                                : (a.default.required(e), e.toString());
                        },
                        compare: function(e, t) {
                            return d.public_key
                                .fromObject(e)
                                .toBlockchainAddress()
                                .compare(
                                    d.public_key
                                        .fromObject(t)
                                        .toBlockchainAddress()
                                );
                        }
                    }),
                    (d.address = {
                        _to_address: function(e) {
                            return (
                                a.default.required(e),
                                e.addy ? e : c.Address.fromString(e)
                            );
                        },
                        fromByteBuffer: function(e) {
                            return new c.Address(s.default.ripemd160(e));
                        },
                        appendByteBuffer: function(e, t) {
                            s.default.ripemd160(
                                e,
                                d.address._to_address(t).toBuffer()
                            );
                        },
                        fromObject: function(e) {
                            return d.address._to_address(e);
                        },
                        toObject: function(e) {
                            return (arguments.length > 1 &&
                            void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            ).use_default && void 0 === e
                                ? _.ChainConfig.address_prefix +
                                      "664KmHxSuQyDsfwo4WEJvWpzg1QKdg67S"
                                : d.address._to_address(e).toString();
                        },
                        compare: function(e, t) {
                            return b(e.toString(), t.toString());
                        }
                    });
                var b = function(e, t) {
                        return e > t ? 1 : e < t ? -1 : 0;
                    },
                    g = function(e) {
                        return Array.isArray(e) ? e[0] : e;
                    },
                    y = function(e, t) {
                        return t.nosort
                            ? e
                            : t.compare
                                ? e.sort(function(e, r) {
                                      return t.compare(g(e), g(r));
                                  })
                                : e.sort(function(e, t) {
                                      return "number" == typeof g(e) &&
                                          "number" == typeof g(t)
                                          ? g(e) - g(t)
                                          : i.isBuffer(g(e)) && i.isBuffer(g(t))
                                              ? b(
                                                    g(e).toString("hex"),
                                                    g(t).toString("hex")
                                                )
                                              : b(
                                                    g(e).toString(),
                                                    g(t).toString()
                                                );
                                  });
                    };
                (t.default = d), (e.exports = t.default);
            }.call(this, r(91), r(28).Buffer));
        },
        429: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.key = t.hash = t.brainKey = t.Signature = t.PublicKey = t.PrivateKey = t.Aes = t.Address = void 0);
            var n = _(r(430)),
                i = _(r(431)),
                o = _(r(344)),
                a = _(r(262)),
                s = _(r(523)),
                u = _(r(525)),
                f = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) &&
                                (t[r] = e[r]);
                    return (t.default = e), t;
                })(r(195)),
                c = _(r(432));
            function _(e) {
                return e && e.__esModule ? e : {default: e};
            }
            (t.Address = n.default),
                (t.Aes = i.default),
                (t.PrivateKey = o.default),
                (t.PublicKey = a.default),
                (t.Signature = s.default),
                (t.brainKey = u.default),
                (t.hash = f),
                (t.key = c.default);
        },
        430: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = f(r(30)),
                    o = r(37),
                    a = r(195),
                    s = r(116),
                    u = f(r(198));
                function f(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var c = (function() {
                    function e(t) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.addy = t);
                    }
                    return (
                        (e.fromBuffer = function(t) {
                            var r = (0, a.sha512)(t);
                            return new e((0, a.ripemd160)(r));
                        }),
                        (e.fromString = function(t) {
                            var r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : o.ChainConfig.address_prefix,
                                f = t.slice(0, r.length);
                            i.default.equal(
                                r,
                                f,
                                "Expecting key to begin with " +
                                    r +
                                    ", instead got " +
                                    f
                            );
                            var c = t.slice(r.length),
                                _ = (c = new n(
                                    (0, s.decode)(c),
                                    "binary"
                                )).slice(-4);
                            c = c.slice(0, -4);
                            var l = (0, a.ripemd160)(c);
                            if (((l = l.slice(0, 4)), !(0, u.default)(_, l)))
                                throw new Error("Checksum did not match");
                            return new e(c);
                        }),
                        (e.fromPublic = function(t) {
                            var r =
                                    !(
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                    ) || arguments[1],
                                i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : 56,
                                o = (0, a.sha256)(t.toBuffer(r)),
                                s = (0, a.ripemd160)(o),
                                u = new n(1);
                            u.writeUInt8(255 & i, 0);
                            var f = n.concat([u, s]),
                                c = (0, a.sha256)(f);
                            c = (0, a.sha256)(c);
                            var _ = n.concat([f, c.slice(0, 4)]);
                            return new e((0, a.ripemd160)(_));
                        }),
                        (e.prototype.toBuffer = function() {
                            return this.addy;
                        }),
                        (e.prototype.toString = function() {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : o.ChainConfig.address_prefix,
                                t = (0, a.ripemd160)(this.addy),
                                r = n.concat([this.addy, t.slice(0, 4)]);
                            return e + (0, s.encode)(r);
                        }),
                        e
                    );
                })();
                (t.default = c), (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        431: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = f(r(389)),
                    o = f(r(191)),
                    a = f(r(382)),
                    s = f(r(30)),
                    u = (r(65), r(195));
                function f(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var c = (function() {
                    function e(t, r) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.iv = t),
                            (this.key = r);
                    }
                    return (
                        (e.prototype.clear = function() {
                            return (this.iv = this.key = void 0);
                        }),
                        (e.fromSeed = function(t) {
                            if (void 0 === t)
                                throw new Error("seed is required");
                            var r = (0, u.sha512)(t);
                            return (r = r.toString("hex")), e.fromSha512(r);
                        }),
                        (e.fromSha512 = function(t) {
                            return (
                                s.default.equal(
                                    t.length,
                                    128,
                                    "A Sha512 in HEX should be 128 characters long, instead got " +
                                        t.length
                                ),
                                new e(
                                    o.default.parse(t.substring(64, 96)),
                                    o.default.parse(t.substring(0, 64))
                                )
                            );
                        }),
                        (e.fromBuffer = function(t) {
                            return (
                                (0, s.default)(
                                    n.isBuffer(t),
                                    "Expecting Buffer"
                                ),
                                s.default.equal(
                                    t.length,
                                    64,
                                    "A Sha512 Buffer should be 64 characters long, instead got " +
                                        t.length
                                ),
                                e.fromSha512(t.toString("hex"))
                            );
                        }),
                        (e.decrypt_with_checksum = function(t, r, i, o) {
                            var a =
                                arguments.length > 4 &&
                                void 0 !== arguments[4] &&
                                arguments[4];
                            null == i && (i = ""),
                                n.isBuffer(o) || (o = new n(o, "hex"));
                            var s = t.get_shared_secret(r, a),
                                f = e
                                    .fromSeed(
                                        n.concat([
                                            new n("" + i),
                                            new n(s.toString("hex"))
                                        ])
                                    )
                                    .decrypt(o);
                            if (!(f.length >= 4))
                                throw new Error(
                                    "Invalid key, could not decrypt message(1)"
                                );
                            var c = f.slice(0, 4),
                                _ = f.slice(4),
                                l = (0, u.sha256)(_);
                            if (
                                ((l = (l = l.slice(0, 4)).toString("hex")),
                                c.toString("hex") !== l)
                            )
                                throw new Error(
                                    "Invalid key, could not decrypt message(2)"
                                );
                            return _;
                        }),
                        (e.encrypt_with_checksum = function(t, r, i, o) {
                            null == i && (i = ""),
                                n.isBuffer(o) || (o = new n(o, "binary"));
                            var a = t.get_shared_secret(r),
                                s = e.fromSeed(
                                    n.concat([
                                        new n("" + i),
                                        new n(a.toString("hex"))
                                    ])
                                ),
                                f = (0, u.sha256)(o).slice(0, 4),
                                c = n.concat([f, o]);
                            return s.encrypt(c);
                        }),
                        (e.prototype._decrypt_word_array = function(e) {
                            return i.default.decrypt(
                                {ciphertext: e, salt: null},
                                this.key,
                                {iv: this.iv}
                            );
                        }),
                        (e.prototype._encrypt_word_array = function(e) {
                            var t = i.default.encrypt(e, this.key, {
                                iv: this.iv
                            });
                            return a.default.parse(t.toString());
                        }),
                        (e.prototype.decrypt = function(e) {
                            if (
                                ("string" == typeof e &&
                                    (e = new n(e, "binary")),
                                !n.isBuffer(e))
                            )
                                throw new Error("buffer required");
                            (0, s.default)(e, "Missing cipher text");
                            var t = this.decryptHex(e.toString("hex"));
                            return new n(t, "hex");
                        }),
                        (e.prototype.encrypt = function(e) {
                            if (
                                ("string" == typeof e &&
                                    (e = new n(e, "binary")),
                                !n.isBuffer(e))
                            )
                                throw new Error("buffer required");
                            var t = this.encryptHex(e.toString("hex"));
                            return new n(t, "hex");
                        }),
                        (e.prototype.encryptToHex = function(e) {
                            if (
                                ("string" == typeof e &&
                                    (e = new n(e, "binary")),
                                !n.isBuffer(e))
                            )
                                throw new Error("buffer required");
                            return this.encryptHex(e.toString("hex"));
                        }),
                        (e.prototype.decryptHex = function(e) {
                            (0, s.default)(e, "Missing cipher text");
                            var t = o.default.parse(e),
                                r = this._decrypt_word_array(t);
                            return o.default.stringify(r);
                        }),
                        (e.prototype.decryptHexToBuffer = function(e) {
                            (0, s.default)(e, "Missing cipher text");
                            var t = o.default.parse(e),
                                r = this._decrypt_word_array(t),
                                i = o.default.stringify(r);
                            return new n(i, "hex");
                        }),
                        (e.prototype.decryptHexToText = function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : "binary";
                            return this.decryptHexToBuffer(e).toString(t);
                        }),
                        (e.prototype.encryptHex = function(e) {
                            var t = o.default.parse(e),
                                r = this._encrypt_word_array(t);
                            return o.default.stringify(r);
                        }),
                        e
                    );
                })();
                (t.default = c), (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        432: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = _(r(344)),
                    o = _(r(262)),
                    a = _(r(430)),
                    s = _(r(431)),
                    u = r(195),
                    f = _(r(253)),
                    c = r(37);
                function _(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var l = {
                    aes_checksum: function(e) {
                        if ("string" != typeof e)
                            throw new "password string required"();
                        for (
                            var t = f.default.randomBuffer(4).toString("hex"),
                                r = 0,
                                n = t + e,
                                i = Date.now();
                            Date.now() - i < 250;

                        )
                            (n = (0, u.sha256)(n)), (r += 1);
                        var o = (0, u.sha256)(n),
                            a = [
                                r,
                                t.toString("hex"),
                                o.slice(0, 4).toString("hex")
                            ].join(",");
                        return {
                            aes_private: s.default.fromSeed(n),
                            checksum: a
                        };
                    },
                    aes_private: function(e, t) {
                        for (
                            var r = t.split(","),
                                n = r[0],
                                i = r[1],
                                o = r[2],
                                a = i + e,
                                f = 0;
                            0 < n ? f < n : f > n;
                            f++
                        )
                            a = (0, u.sha256)(a);
                        if (
                            (0, u.sha256)(a)
                                .slice(0, 4)
                                .toString("hex") !== o
                        )
                            throw new Error("wrong password");
                        return s.default.fromSeed(a);
                    },
                    random32ByteBuffer: function() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : this.browserEntropy();
                        if ("string" != typeof e)
                            throw new Error("string required for entropy");
                        if (e.length < 32)
                            throw new Error(
                                "expecting at least 32 bytes of entropy"
                            );
                        for (var t = Date.now(); Date.now() - t < 250; )
                            e = (0, u.sha256)(e);
                        var r = [];
                        return (
                            r.push(e),
                            r.push(f.default.randomBuffer(32)),
                            (0, u.sha256)(n.concat(r))
                        );
                    },
                    suggest_brain_key: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : ",",
                            t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.browserEntropy(),
                            r = this.random32ByteBuffer(t),
                            n = e.split(",");
                        if (49744 !== n.length)
                            throw new Error(
                                "expecting 49744 but got " +
                                    n.length +
                                    " dictionary words"
                            );
                        for (var i = [], o = 0; o < 32; o += 2) {
                            var a = ((r[o] << 8) + r[o + 1]) / Math.pow(2, 16),
                                s = Math.round(n.length * a);
                            i.push(n[s]);
                        }
                        return this.normalize_brainKey(i.join(" "));
                    },
                    get_random_key: function(e) {
                        return i.default.fromBuffer(this.random32ByteBuffer(e));
                    },
                    get_brainPrivateKey: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0;
                        if (t < 0) throw new Error("invalid sequence");
                        return (
                            (e = l.normalize_brainKey(e)),
                            i.default.fromBuffer(
                                (0, u.sha256)((0, u.sha512)(e + " " + t))
                            )
                        );
                    },
                    normalize_brainKey: function(e) {
                        if ("string" != typeof e)
                            throw new Error("string required for brainKey");
                        return (e = e.trim()).split(/[\t\n\v\f\r ]+/).join(" ");
                    },
                    browserEntropy: function() {
                        var e = "";
                        try {
                            e =
                                new Date().toString() +
                                " " +
                                window.screen.height +
                                " " +
                                window.screen.width +
                                " " +
                                window.screen.colorDepth +
                                "  " +
                                window.screen.availHeight +
                                " " +
                                window.screen.availWidth +
                                " " +
                                window.screen.pixelDepth +
                                navigator.language +
                                " " +
                                window.location +
                                " " +
                                window.history.length;
                            for (
                                var t, r = 0;
                                r < navigator.mimeTypes.length;
                                r++
                            )
                                e +=
                                    (t = navigator.mimeTypes[r]).description +
                                    " " +
                                    t.type +
                                    " " +
                                    t.suffixes +
                                    " ";
                            console.log("INFO\tbrowserEntropy gathered");
                        } catch (t) {
                            e = (0, u.sha256)(new Date().toString());
                        }
                        return (e +=
                            new n(e).toString("binary") +
                            " " +
                            new Date().toString());
                    },
                    addresses: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : c.ChainConfig.address_prefix,
                            r = o.default.fromPublicKeyString(e, t);
                        return [
                            a.default.fromPublic(r, !1, 0).toString(t),
                            a.default.fromPublic(r, !0, 0).toString(t),
                            a.default.fromPublic(r, !1, 56).toString(t),
                            a.default.fromPublic(r, !0, 56).toString(t),
                            r.toAddressString(t)
                        ];
                    }
                };
                (t.default = l), (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        465: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.Login = t.FetchChain = t.ChainValidation = t.TransactionHelper = t.NumberUtils = t.ObjectId = t.EmitterInstance = t.ChainTypes = t.FetchChainObjects = t.TransactionBuilder = t.ChainStore = t.key = t.hash = t.brainKey = t.Signature = t.PublicKey = t.PrivateKey = t.Aes = t.Address = t.SerializerValidation = t.template = t.ops = t.types = t.fp = t.Serializer = void 0);
            var n = E(r(426)),
                i = E(r(427)),
                o = E(r(428)),
                a = k(r(526)),
                s = E(r(527)),
                u = E(r(343)),
                f = E(r(430)),
                c = E(r(431)),
                _ = E(r(344)),
                l = E(r(262)),
                d = E(r(523)),
                p = E(r(525)),
                h = k(r(195)),
                m = E(r(432)),
                b = E(r(763)),
                g = E(r(764)),
                y = E(r(317)),
                v = E(r(522)),
                w = E(r(765)),
                B = E(r(766)),
                j = E(r(528)),
                x = E(r(529)),
                S = E(r(767));
            function k(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                return (t.default = e), t;
            }
            function E(e) {
                return e && e.__esModule ? e : {default: e};
            }
            (t.Serializer = n.default),
                (t.fp = i.default),
                (t.types = o.default),
                (t.ops = a),
                (t.template = s.default),
                (t.SerializerValidation = u.default),
                (t.Address = f.default),
                (t.Aes = c.default),
                (t.PrivateKey = _.default),
                (t.PublicKey = l.default),
                (t.Signature = d.default),
                (t.brainKey = p.default),
                (t.hash = h),
                (t.key = m.default);
            var O = b.default.FetchChainObjects,
                q = b.default.FetchChain;
            (t.ChainStore = b.default),
                (t.TransactionBuilder = g.default),
                (t.FetchChainObjects = O),
                (t.ChainTypes = y.default),
                (t.EmitterInstance = x.default),
                (t.ObjectId = v.default),
                (t.NumberUtils = w.default),
                (t.TransactionHelper = B.default),
                (t.ChainValidation = j.default),
                (t.FetchChain = q),
                (t.Login = S.default);
        },
        518: function(e, t, r) {
            var n = r(424).Symbol;
            e.exports = n;
        },
        519: function(e, t, r) {
            (function(t) {
                var r = "object" == typeof t && t && t.Object === Object && t;
                e.exports = r;
            }.call(this, r(92)));
        },
        522: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = r(65),
                i = (function(e) {
                    return e && e.__esModule ? e : {default: e};
                })(r(343));
            var o = n.Long.fromNumber(Math.pow(2, 48) - 1),
                a = (function() {
                    function e(t, r, n) {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e),
                            (this.space = t),
                            (this.type = r),
                            (this.instance = n);
                        var o = this.instance.toString(),
                            a = this.space + "." + this.type + "." + o;
                        if (!i.default.is_digits(o))
                            throw new ("Invalid object id " + a)();
                    }
                    return (
                        (e.fromString = function(t) {
                            if (
                                void 0 !== t.space &&
                                void 0 !== t.type &&
                                void 0 !== t.instance
                            )
                                return t;
                            var r = i.default.require_match(
                                /^([0-9]+)\.([0-9]+)\.([0-9]+)$/,
                                i.default.required(t, "ObjectId"),
                                "ObjectId"
                            );
                            return new e(
                                parseInt(r[1]),
                                parseInt(r[2]),
                                n.Long.fromString(r[3])
                            );
                        }),
                        (e.fromLong = function(t) {
                            return new e(
                                t.shiftRight(56).toInt(),
                                255 & t.shiftRight(48).toInt(),
                                t.and(o)
                            );
                        }),
                        (e.fromByteBuffer = function(t) {
                            return e.fromLong(t.readUint64());
                        }),
                        (e.prototype.toLong = function() {
                            return n.Long.fromNumber(this.space)
                                .shiftLeft(56)
                                .or(
                                    n.Long.fromNumber(this.type)
                                        .shiftLeft(48)
                                        .or(this.instance)
                                );
                        }),
                        (e.prototype.appendByteBuffer = function(e) {
                            return e.writeUint64(this.toLong());
                        }),
                        (e.prototype.toString = function() {
                            return (
                                this.space +
                                "." +
                                this.type +
                                "." +
                                this.instance.toString()
                            );
                        }),
                        e
                    );
                })();
            (t.default = a), (e.exports = t.default);
        },
        523: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = r(761),
                    o = r(195),
                    a = r(131),
                    s = c(r(30)),
                    u = c(r(55)),
                    f = c(r(262));
                function c(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var _ = (0, a.getCurveByName)("secp256k1"),
                    l = (function() {
                        function e(t, r, n) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, e),
                                (this.r = t),
                                (this.s = r),
                                (this.i = n),
                                s.default.equal(
                                    null != this.r,
                                    !0,
                                    "Missing parameter"
                                ),
                                s.default.equal(
                                    null != this.s,
                                    !0,
                                    "Missing parameter"
                                ),
                                s.default.equal(
                                    null != this.i,
                                    !0,
                                    "Missing parameter"
                                );
                        }
                        return (
                            (e.fromBuffer = function(t) {
                                var r;
                                return (
                                    s.default.equal(
                                        t.length,
                                        65,
                                        "Invalid signature length"
                                    ),
                                    (r = t.readUInt8(0)),
                                    s.default.equal(
                                        r - 27,
                                        (r - 27) & 7,
                                        "Invalid signature parameter"
                                    ),
                                    new e(
                                        u.default.fromBuffer(t.slice(1, 33)),
                                        u.default.fromBuffer(t.slice(33)),
                                        r
                                    )
                                );
                            }),
                            (e.prototype.toBuffer = function() {
                                var e;
                                return (
                                    (e = new n(65)).writeUInt8(this.i, 0),
                                    this.r.toBuffer(32).copy(e, 1),
                                    this.s.toBuffer(32).copy(e, 33),
                                    e
                                );
                            }),
                            (e.prototype.recoverPublicKeyFromBuffer = function(
                                e
                            ) {
                                return this.recoverPublicKey((0, o.sha256)(e));
                            }),
                            (e.prototype.recoverPublicKey = function(e) {
                                var t,
                                    r,
                                    n = void 0;
                                return (
                                    (r = u.default.fromBuffer(e)),
                                    (n = this.i),
                                    (n -= 27),
                                    (n &= 3),
                                    (t = (0, i.recoverPubKey)(_, r, this, n)),
                                    f.default.fromPoint(t)
                                );
                            }),
                            (e.signBuffer = function(t, r) {
                                var n = (0, o.sha256)(t);
                                return e.signBufferSha256(n, r);
                            }),
                            (e.signBufferSha256 = function(t, r) {
                                if (32 !== t.length || !n.isBuffer(t))
                                    throw new Error(
                                        "buf_sha256: 32 byte buffer requred"
                                    );
                                var o, a, s, f, c, l, d;
                                for (
                                    f = null,
                                        d = 0,
                                        a = u.default.fromBuffer(t);
                                    ;

                                ) {
                                    if (
                                        ((l = (o = (s = (0, i.sign)(
                                            _,
                                            t,
                                            r.d,
                                            d++
                                        )).toDER())[5 + (c = o[3])]),
                                        32 === c && 32 === l)
                                    ) {
                                        (f = (0, i.calcPubKeyRecoveryParam)(
                                            _,
                                            a,
                                            s,
                                            r.toPublicKey().Q
                                        )),
                                            (f += 4),
                                            (f += 27);
                                        break;
                                    }
                                    d % 10 == 0 &&
                                        console.log(
                                            "WARN: " +
                                                d +
                                                " attempts to find canonical signature"
                                        );
                                }
                                return new e(s.r, s.s, f);
                            }),
                            (e.sign = function(t, r) {
                                return e.signBuffer(new n(t), r);
                            }),
                            (e.prototype.verifyBuffer = function(e, t) {
                                var r = (0, o.sha256)(e);
                                return this.verifyHash(r, t);
                            }),
                            (e.prototype.verifyHash = function(e, t) {
                                return (
                                    s.default.equal(
                                        e.length,
                                        32,
                                        "A SHA 256 should be 32 bytes long, instead got " +
                                            e.length
                                    ),
                                    (0, i.verify)(
                                        _,
                                        e,
                                        {r: this.r, s: this.s},
                                        t.Q
                                    )
                                );
                            }),
                            (e.prototype.toByteBuffer = function() {
                                var e;
                                return (
                                    (e = new ByteBuffer(
                                        ByteBuffer.DEFAULT_CAPACITY,
                                        ByteBuffer.LITTLE_ENDIAN
                                    )),
                                    this.appendByteBuffer(e),
                                    e.copy(0, e.offset)
                                );
                            }),
                            (e.fromHex = function(t) {
                                return e.fromBuffer(new n(t, "hex"));
                            }),
                            (e.prototype.toHex = function() {
                                return this.toBuffer().toString("hex");
                            }),
                            (e.signHex = function(t, r) {
                                var i;
                                return (
                                    (i = new n(t, "hex")), e.signBuffer(i, r)
                                );
                            }),
                            (e.prototype.verifyHex = function(e, t) {
                                var r;
                                return (
                                    (r = new n(e, "hex")),
                                    this.verifyBuffer(r, t)
                                );
                            }),
                            e
                        );
                    })();
                (t.default = l), (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        524: function(e, t, r) {
            "use strict";
            (function(r) {
                function n(e) {
                    var t = e.toString().match(/function (.*?)\(/);
                    return t ? t[1] : null;
                }
                (t.__esModule = !0),
                    (t.default = function(e, t) {
                        switch (e) {
                            case "Array":
                                if (Array.isArray(t)) return;
                                break;
                            case "Boolean":
                                if ("boolean" == typeof t) return;
                                break;
                            case "Buffer":
                                if (r.isBuffer(t)) return;
                                break;
                            case "Number":
                                if ("number" == typeof t) return;
                                break;
                            case "String":
                                if ("string" == typeof t) return;
                                break;
                            default:
                                if (n(t.constructor) === n(e)) return;
                        }
                        throw new TypeError(
                            "Expected " + (n(e) || e) + ", got " + t
                        );
                    }),
                    (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        525: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.default = function(e) {
                    if ("string" != typeof e)
                        throw new Error("string required for brainKey");
                    return (e = e.trim()).split(/[\t\n\v\f\r ]+/).join(" ");
                }),
                (e.exports = t.default);
        },
        526: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.stealth_memo_data = t.signed_transaction = t.transaction = t.asset_claim_fees = t.asset_settle_cancel = t.transfer_from_blind = t.blind_transfer = t.blind_input = t.transfer_to_blind = t.blind_output = t.stealth_confirmation = t.override_transfer = t.balance_claim = t.assert = t.block_id_predicate = t.asset_symbol_eq_lit_predicate = t.account_name_eq_lit_predicate = t.custom = t.worker_create = void 0),
                (t.burn_worker_initializer = t.vesting_balance_worker_initializer = t.refund_worker_initializer = t.vesting_balance_withdraw = t.vesting_balance_create = t.cdd_vesting_policy_initializer = t.linear_vesting_policy_initializer = t.committee_member_update_global_parameters = t.chain_parameters = t.committee_member_update = t.committee_member_create = t.withdraw_permission_delete = t.withdraw_permission_claim = t.withdraw_permission_update = t.withdraw_permission_create = t.proposal_delete = t.proposal_update = t.proposal_create = t.op_wrapper = t.witness_update = t.witness_create = t.asset_publish_feed = t.price_feed = t.asset_global_settle = t.asset_settle = t.asset_fund_fee_pool = t.asset_reserve = t.asset_issue = t.asset_update_feed_producers = t.asset_update_bitasset = t.asset_update = t.asset_create = t.bitasset_options = t.asset_options = t.price = t.account_transfer = t.account_upgrade = t.account_whitelist = t.account_update = t.account_create = t.account_options = t.authority = t.fill_order = t.call_order_update = t.limit_order_cancel = t.limit_order_create = t.transfer = t.memo_data = t.signed_block_header = t.block_header = t.signed_block = t.processed_transaction = t.asset = t.void_result = t.fee_schedule = t.asset_claim_fees_operation_fee_parameters = t.asset_settle_cancel_operation_fee_parameters = t.transfer_from_blind_operation_fee_parameters = t.blind_transfer_operation_fee_parameters = t.transfer_to_blind_operation_fee_parameters = t.override_transfer_operation_fee_parameters = t.balance_claim_operation_fee_parameters = t.assert_operation_fee_parameters = t.custom_operation_fee_parameters = t.worker_create_operation_fee_parameters = t.vesting_balance_withdraw_operation_fee_parameters = t.vesting_balance_create_operation_fee_parameters = t.committee_member_update_global_parameters_operation_fee_parameters = t.committee_member_update_operation_fee_parameters = t.committee_member_create_operation_fee_parameters = t.withdraw_permission_delete_operation_fee_parameters = t.withdraw_permission_claim_operation_fee_parameters = t.withdraw_permission_update_operation_fee_parameters = t.withdraw_permission_create_operation_fee_parameters = t.proposal_delete_operation_fee_parameters = t.proposal_update_operation_fee_parameters = t.proposal_create_operation_fee_parameters = t.witness_update_operation_fee_parameters = t.witness_create_operation_fee_parameters = t.asset_publish_feed_operation_fee_parameters = t.asset_global_settle_operation_fee_parameters = t.asset_settle_operation_fee_parameters = t.asset_fund_fee_pool_operation_fee_parameters = t.asset_reserve_operation_fee_parameters = t.asset_issue_operation_fee_parameters = t.asset_update_feed_producers_operation_fee_parameters = t.asset_update_bitasset_operation_fee_parameters = t.asset_update_operation_fee_parameters = t.asset_create_operation_fee_parameters = t.account_transfer_operation_fee_parameters = t.account_upgrade_operation_fee_parameters = t.account_whitelist_operation_fee_parameters = t.account_update_operation_fee_parameters = t.account_create_operation_fee_parameters = t.fill_order_operation_fee_parameters = t.call_order_update_operation_fee_parameters = t.limit_order_cancel_operation_fee_parameters = t.limit_order_create_operation_fee_parameters = t.transfer_operation_fee_parameters = t.operation = void 0);
            var n = o(r(428)),
                i = o(r(426));
            function o(e) {
                return e && e.__esModule ? e : {default: e};
            }
            var a = n.default.uint8,
                s = n.default.uint16,
                u = n.default.uint32,
                f = n.default.int64,
                c = n.default.uint64,
                _ = n.default.string,
                l = n.default.bytes,
                d = n.default.bool,
                p = n.default.array,
                h = (n.default.fixed_array, n.default.protocol_id_type),
                m = n.default.object_id_type,
                b = n.default.vote_id,
                g = n.default.future_extensions,
                y = n.default.static_variant,
                v = n.default.map,
                w = n.default.set,
                B = n.default.public_key,
                j = n.default.address,
                x = n.default.time_point_sec,
                S = n.default.optional;
            g = n.default.void;
            var k = y();
            t.operation = k;
            var E = function(e, t) {
                    return new i.default(e, t);
                },
                O = y([
                    (t.transfer_operation_fee_parameters = new E(
                        "transfer_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.limit_order_create_operation_fee_parameters = new E(
                        "limit_order_create_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.limit_order_cancel_operation_fee_parameters = new E(
                        "limit_order_cancel_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.call_order_update_operation_fee_parameters = new E(
                        "call_order_update_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.fill_order_operation_fee_parameters = new E(
                        "fill_order_operation_fee_parameters"
                    )),
                    (t.account_create_operation_fee_parameters = new E(
                        "account_create_operation_fee_parameters",
                        {basic_fee: c, premium_fee: c, price_per_kbyte: u}
                    )),
                    (t.account_update_operation_fee_parameters = new E(
                        "account_update_operation_fee_parameters",
                        {fee: f, price_per_kbyte: u}
                    )),
                    (t.account_whitelist_operation_fee_parameters = new E(
                        "account_whitelist_operation_fee_parameters",
                        {fee: f}
                    )),
                    (t.account_upgrade_operation_fee_parameters = new E(
                        "account_upgrade_operation_fee_parameters",
                        {membership_annual_fee: c, membership_lifetime_fee: c}
                    )),
                    (t.account_transfer_operation_fee_parameters = new E(
                        "account_transfer_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_create_operation_fee_parameters = new E(
                        "asset_create_operation_fee_parameters",
                        {
                            symbol3: c,
                            symbol4: c,
                            long_symbol: c,
                            price_per_kbyte: u
                        }
                    )),
                    (t.asset_update_operation_fee_parameters = new E(
                        "asset_update_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.asset_update_bitasset_operation_fee_parameters = new E(
                        "asset_update_bitasset_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_update_feed_producers_operation_fee_parameters = new E(
                        "asset_update_feed_producers_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_issue_operation_fee_parameters = new E(
                        "asset_issue_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.asset_reserve_operation_fee_parameters = new E(
                        "asset_reserve_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_fund_fee_pool_operation_fee_parameters = new E(
                        "asset_fund_fee_pool_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_settle_operation_fee_parameters = new E(
                        "asset_settle_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_global_settle_operation_fee_parameters = new E(
                        "asset_global_settle_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_publish_feed_operation_fee_parameters = new E(
                        "asset_publish_feed_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.witness_create_operation_fee_parameters = new E(
                        "witness_create_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.witness_update_operation_fee_parameters = new E(
                        "witness_update_operation_fee_parameters",
                        {fee: f}
                    )),
                    (t.proposal_create_operation_fee_parameters = new E(
                        "proposal_create_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.proposal_update_operation_fee_parameters = new E(
                        "proposal_update_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.proposal_delete_operation_fee_parameters = new E(
                        "proposal_delete_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.withdraw_permission_create_operation_fee_parameters = new E(
                        "withdraw_permission_create_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.withdraw_permission_update_operation_fee_parameters = new E(
                        "withdraw_permission_update_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.withdraw_permission_claim_operation_fee_parameters = new E(
                        "withdraw_permission_claim_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.withdraw_permission_delete_operation_fee_parameters = new E(
                        "withdraw_permission_delete_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.committee_member_create_operation_fee_parameters = new E(
                        "committee_member_create_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.committee_member_update_operation_fee_parameters = new E(
                        "committee_member_update_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.committee_member_update_global_parameters_operation_fee_parameters = new E(
                        "committee_member_update_global_parameters_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.vesting_balance_create_operation_fee_parameters = new E(
                        "vesting_balance_create_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.vesting_balance_withdraw_operation_fee_parameters = new E(
                        "vesting_balance_withdraw_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.worker_create_operation_fee_parameters = new E(
                        "worker_create_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.custom_operation_fee_parameters = new E(
                        "custom_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.assert_operation_fee_parameters = new E(
                        "assert_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.balance_claim_operation_fee_parameters = new E(
                        "balance_claim_operation_fee_parameters"
                    )),
                    (t.override_transfer_operation_fee_parameters = new E(
                        "override_transfer_operation_fee_parameters",
                        {fee: c, price_per_kbyte: u}
                    )),
                    (t.transfer_to_blind_operation_fee_parameters = new E(
                        "transfer_to_blind_operation_fee_parameters",
                        {fee: c, price_per_output: u}
                    )),
                    (t.blind_transfer_operation_fee_parameters = new E(
                        "blind_transfer_operation_fee_parameters",
                        {fee: c, price_per_output: u}
                    )),
                    (t.transfer_from_blind_operation_fee_parameters = new E(
                        "transfer_from_blind_operation_fee_parameters",
                        {fee: c}
                    )),
                    (t.asset_settle_cancel_operation_fee_parameters = new E(
                        "asset_settle_cancel_operation_fee_parameters"
                    )),
                    (t.asset_claim_fees_operation_fee_parameters = new E(
                        "asset_claim_fees_operation_fee_parameters",
                        {fee: c}
                    ))
                ]),
                q = (t.fee_schedule = new E("fee_schedule", {
                    parameters: w(O),
                    scale: u
                })),
                A = (t.void_result = new E("void_result")),
                I = (t.asset = new E("asset", {
                    amount: f,
                    asset_id: h("asset")
                })),
                T = y([A, m, I]),
                M = (t.processed_transaction = new E("processed_transaction", {
                    ref_block_num: s,
                    ref_block_prefix: u,
                    expiration: x,
                    operations: p(k),
                    extensions: w(g),
                    signatures: p(l(65)),
                    operation_results: p(T)
                })),
                P = ((t.signed_block = new E("signed_block", {
                    previous: l(20),
                    timestamp: x,
                    witness: h("witness"),
                    transaction_merkle_root: l(20),
                    extensions: w(g),
                    witness_signature: l(65),
                    transactions: p(M)
                })),
                (t.block_header = new E("block_header", {
                    previous: l(20),
                    timestamp: x,
                    witness: h("witness"),
                    transaction_merkle_root: l(20),
                    extensions: w(g)
                })),
                (t.signed_block_header = new E("signed_block_header", {
                    previous: l(20),
                    timestamp: x,
                    witness: h("witness"),
                    transaction_merkle_root: l(20),
                    extensions: w(g),
                    witness_signature: l(65)
                })),
                (t.memo_data = new E("memo_data", {
                    from: B,
                    to: B,
                    nonce: c,
                    message: l()
                }))),
                C = (t.transfer = new E("transfer", {
                    fee: I,
                    from: h("account"),
                    to: h("account"),
                    amount: I,
                    memo: S(P),
                    extensions: w(g)
                })),
                D = (t.limit_order_create = new E("limit_order_create", {
                    fee: I,
                    seller: h("account"),
                    amount_to_sell: I,
                    min_to_receive: I,
                    expiration: x,
                    fill_or_kill: d,
                    extensions: w(g)
                })),
                z = (t.limit_order_cancel = new E("limit_order_cancel", {
                    fee: I,
                    fee_paying_account: h("account"),
                    order: h("limit_order"),
                    extensions: w(g)
                })),
                H = (t.call_order_update = new E("call_order_update", {
                    fee: I,
                    funding_account: h("account"),
                    delta_collateral: I,
                    delta_debt: I,
                    extensions: w(g)
                })),
                K = (t.fill_order = new E("fill_order", {
                    fee: I,
                    order_id: m,
                    account_id: h("account"),
                    pays: I,
                    receives: I
                })),
                U = (t.authority = new E("authority", {
                    weight_threshold: u,
                    account_auths: v(h("account"), s),
                    key_auths: v(B, s),
                    address_auths: v(j, s)
                })),
                L = (t.account_options = new E("account_options", {
                    memo_key: B,
                    voting_account: h("account"),
                    num_witness: s,
                    num_committee: s,
                    votes: w(b),
                    extensions: w(g)
                })),
                N = (t.account_create = new E("account_create", {
                    fee: I,
                    registrar: h("account"),
                    referrer: h("account"),
                    referrer_percent: s,
                    name: _,
                    owner: U,
                    active: U,
                    options: L,
                    extensions: w(g)
                })),
                R = (t.account_update = new E("account_update", {
                    fee: I,
                    account: h("account"),
                    owner: S(U),
                    active: S(U),
                    new_options: S(L),
                    extensions: w(g)
                })),
                F = (t.account_whitelist = new E("account_whitelist", {
                    fee: I,
                    authorizing_account: h("account"),
                    account_to_list: h("account"),
                    new_listing: a,
                    extensions: w(g)
                })),
                J = (t.account_upgrade = new E("account_upgrade", {
                    fee: I,
                    account_to_upgrade: h("account"),
                    upgrade_to_lifetime_member: d,
                    extensions: w(g)
                })),
                V = (t.account_transfer = new E("account_transfer", {
                    fee: I,
                    account_id: h("account"),
                    new_owner: h("account"),
                    extensions: w(g)
                })),
                $ = (t.price = new E("price", {base: I, quote: I})),
                Q = (t.asset_options = new E("asset_options", {
                    max_supply: f,
                    market_fee_percent: s,
                    max_market_fee: f,
                    issuer_permissions: s,
                    flags: s,
                    core_exchange_rate: $,
                    whitelist_authorities: w(h("account")),
                    blacklist_authorities: w(h("account")),
                    whitelist_markets: w(h("asset")),
                    blacklist_markets: w(h("asset")),
                    description: _,
                    extensions: w(g)
                })),
                W = (t.bitasset_options = new E("bitasset_options", {
                    feed_lifetime_sec: u,
                    minimum_feeds: a,
                    force_settlement_delay_sec: u,
                    force_settlement_offset_percent: s,
                    maximum_force_settlement_volume: s,
                    short_backing_asset: h("asset"),
                    extensions: w(g)
                })),
                Z = (t.asset_create = new E("asset_create", {
                    fee: I,
                    issuer: h("account"),
                    symbol: _,
                    precision: a,
                    common_options: Q,
                    bitasset_opts: S(W),
                    is_prediction_market: d,
                    extensions: w(g)
                })),
                Y = (t.asset_update = new E("asset_update", {
                    fee: I,
                    issuer: h("account"),
                    asset_to_update: h("asset"),
                    new_issuer: S(h("account")),
                    new_options: Q,
                    extensions: w(g)
                })),
                G = (t.asset_update_bitasset = new E("asset_update_bitasset", {
                    fee: I,
                    issuer: h("account"),
                    asset_to_update: h("asset"),
                    new_options: W,
                    extensions: w(g)
                })),
                X = (t.asset_update_feed_producers = new E(
                    "asset_update_feed_producers",
                    {
                        fee: I,
                        issuer: h("account"),
                        asset_to_update: h("asset"),
                        new_feed_producers: w(h("account")),
                        extensions: w(g)
                    }
                )),
                ee = (t.asset_issue = new E("asset_issue", {
                    fee: I,
                    issuer: h("account"),
                    asset_to_issue: I,
                    issue_to_account: h("account"),
                    memo: S(P),
                    extensions: w(g)
                })),
                te = (t.asset_reserve = new E("asset_reserve", {
                    fee: I,
                    payer: h("account"),
                    amount_to_reserve: I,
                    extensions: w(g)
                })),
                re = (t.asset_fund_fee_pool = new E("asset_fund_fee_pool", {
                    fee: I,
                    from_account: h("account"),
                    asset_id: h("asset"),
                    amount: f,
                    extensions: w(g)
                })),
                ne = (t.asset_settle = new E("asset_settle", {
                    fee: I,
                    account: h("account"),
                    amount: I,
                    extensions: w(g)
                })),
                ie = (t.asset_global_settle = new E("asset_global_settle", {
                    fee: I,
                    issuer: h("account"),
                    asset_to_settle: h("asset"),
                    settle_price: $,
                    extensions: w(g)
                })),
                oe = (t.price_feed = new E("price_feed", {
                    settlement_price: $,
                    maintenance_collateral_ratio: s,
                    maximum_short_squeeze_ratio: s,
                    core_exchange_rate: $
                })),
                ae = (t.asset_publish_feed = new E("asset_publish_feed", {
                    fee: I,
                    publisher: h("account"),
                    asset_id: h("asset"),
                    feed: oe,
                    extensions: w(g)
                })),
                se = (t.witness_create = new E("witness_create", {
                    fee: I,
                    witness_account: h("account"),
                    url: _,
                    block_signing_key: B
                })),
                ue = (t.witness_update = new E("witness_update", {
                    fee: I,
                    witness: h("witness"),
                    witness_account: h("account"),
                    new_url: S(_),
                    new_signing_key: S(B)
                })),
                fe = (t.op_wrapper = new E("op_wrapper", {op: k})),
                ce = (t.proposal_create = new E("proposal_create", {
                    fee: I,
                    fee_paying_account: h("account"),
                    expiration_time: x,
                    proposed_ops: p(fe),
                    review_period_seconds: S(u),
                    extensions: w(g)
                })),
                _e = (t.proposal_update = new E("proposal_update", {
                    fee: I,
                    fee_paying_account: h("account"),
                    proposal: h("proposal"),
                    active_approvals_to_add: w(h("account")),
                    active_approvals_to_remove: w(h("account")),
                    owner_approvals_to_add: w(h("account")),
                    owner_approvals_to_remove: w(h("account")),
                    key_approvals_to_add: w(B),
                    key_approvals_to_remove: w(B),
                    extensions: w(g)
                })),
                le = (t.proposal_delete = new E("proposal_delete", {
                    fee: I,
                    fee_paying_account: h("account"),
                    using_owner_authority: d,
                    proposal: h("proposal"),
                    extensions: w(g)
                })),
                de = (t.withdraw_permission_create = new E(
                    "withdraw_permission_create",
                    {
                        fee: I,
                        withdraw_from_account: h("account"),
                        authorized_account: h("account"),
                        withdrawal_limit: I,
                        withdrawal_period_sec: u,
                        periods_until_expiration: u,
                        period_start_time: x
                    }
                )),
                pe = (t.withdraw_permission_update = new E(
                    "withdraw_permission_update",
                    {
                        fee: I,
                        withdraw_from_account: h("account"),
                        authorized_account: h("account"),
                        permission_to_update: h("withdraw_permission"),
                        withdrawal_limit: I,
                        withdrawal_period_sec: u,
                        period_start_time: x,
                        periods_until_expiration: u
                    }
                )),
                he = (t.withdraw_permission_claim = new E(
                    "withdraw_permission_claim",
                    {
                        fee: I,
                        withdraw_permission: h("withdraw_permission"),
                        withdraw_from_account: h("account"),
                        withdraw_to_account: h("account"),
                        amount_to_withdraw: I,
                        memo: S(P)
                    }
                )),
                me = (t.withdraw_permission_delete = new E(
                    "withdraw_permission_delete",
                    {
                        fee: I,
                        withdraw_from_account: h("account"),
                        authorized_account: h("account"),
                        withdrawal_permission: h("withdraw_permission")
                    }
                )),
                be = (t.committee_member_create = new E(
                    "committee_member_create",
                    {fee: I, committee_member_account: h("account"), url: _}
                )),
                ge = (t.committee_member_update = new E(
                    "committee_member_update",
                    {
                        fee: I,
                        committee_member: h("committee_member"),
                        committee_member_account: h("account"),
                        new_url: S(_)
                    }
                )),
                ye = (t.chain_parameters = new E("chain_parameters", {
                    current_fees: q,
                    block_interval: a,
                    maintenance_interval: u,
                    maintenance_skip_slots: a,
                    committee_proposal_review_period: u,
                    maximum_transaction_size: u,
                    maximum_block_size: u,
                    maximum_time_until_expiration: u,
                    maximum_proposal_lifetime: u,
                    maximum_asset_whitelist_authorities: a,
                    maximum_asset_feed_publishers: a,
                    maximum_witness_count: s,
                    maximum_committee_count: s,
                    maximum_authority_membership: s,
                    reserve_percent_of_fee: s,
                    network_percent_of_fee: s,
                    lifetime_referrer_percent_of_fee: s,
                    cashback_vesting_period_seconds: u,
                    cashback_vesting_threshold: f,
                    count_non_member_votes: d,
                    allow_non_member_whitelists: d,
                    witness_pay_per_block: f,
                    worker_budget_per_day: f,
                    max_predicate_opcode: s,
                    fee_liquidation_threshold: f,
                    accounts_per_fee_scale: s,
                    account_fee_scale_bitshifts: a,
                    max_authority_depth: a,
                    extensions: w(g)
                })),
                ve = (t.committee_member_update_global_parameters = new E(
                    "committee_member_update_global_parameters",
                    {fee: I, new_parameters: ye}
                )),
                we = y([
                    (t.linear_vesting_policy_initializer = new E(
                        "linear_vesting_policy_initializer",
                        {
                            begin_timestamp: x,
                            vesting_cliff_seconds: u,
                            vesting_duration_seconds: u
                        }
                    )),
                    (t.cdd_vesting_policy_initializer = new E(
                        "cdd_vesting_policy_initializer",
                        {start_claim: x, vesting_seconds: u}
                    ))
                ]),
                Be = (t.vesting_balance_create = new E(
                    "vesting_balance_create",
                    {
                        fee: I,
                        creator: h("account"),
                        owner: h("account"),
                        amount: I,
                        policy: we
                    }
                )),
                je = (t.vesting_balance_withdraw = new E(
                    "vesting_balance_withdraw",
                    {
                        fee: I,
                        vesting_balance: h("vesting_balance"),
                        owner: h("account"),
                        amount: I
                    }
                )),
                xe = y([
                    (t.refund_worker_initializer = new E(
                        "refund_worker_initializer"
                    )),
                    (t.vesting_balance_worker_initializer = new E(
                        "vesting_balance_worker_initializer",
                        {pay_vesting_period_days: s}
                    )),
                    (t.burn_worker_initializer = new E(
                        "burn_worker_initializer"
                    ))
                ]),
                Se = (t.worker_create = new E("worker_create", {
                    fee: I,
                    owner: h("account"),
                    work_begin_date: x,
                    work_end_date: x,
                    daily_pay: f,
                    name: _,
                    url: _,
                    initializer: xe
                })),
                ke = (t.custom = new E("custom", {
                    fee: I,
                    payer: h("account"),
                    required_auths: w(h("account")),
                    id: s,
                    data: l()
                })),
                Ee = y([
                    (t.account_name_eq_lit_predicate = new E(
                        "account_name_eq_lit_predicate",
                        {account_id: h("account"), name: _}
                    )),
                    (t.asset_symbol_eq_lit_predicate = new E(
                        "asset_symbol_eq_lit_predicate",
                        {asset_id: h("asset"), symbol: _}
                    )),
                    (t.block_id_predicate = new E("block_id_predicate", {
                        id: l(20)
                    }))
                ]),
                Oe = (t.assert = new E("assert", {
                    fee: I,
                    fee_paying_account: h("account"),
                    predicates: p(Ee),
                    required_auths: w(h("account")),
                    extensions: w(g)
                })),
                qe = (t.balance_claim = new E("balance_claim", {
                    fee: I,
                    deposit_to_account: h("account"),
                    balance_to_claim: h("balance"),
                    balance_owner_key: B,
                    total_claimed: I
                })),
                Ae = (t.override_transfer = new E("override_transfer", {
                    fee: I,
                    issuer: h("account"),
                    from: h("account"),
                    to: h("account"),
                    amount: I,
                    memo: S(P),
                    extensions: w(g)
                })),
                Ie = (t.stealth_confirmation = new E("stealth_confirmation", {
                    one_time_key: B,
                    to: S(B),
                    encrypted_memo: l()
                })),
                Te = (t.blind_output = new E("blind_output", {
                    commitment: l(33),
                    range_proof: l(),
                    owner: U,
                    stealth_memo: S(Ie)
                })),
                Me = (t.transfer_to_blind = new E("transfer_to_blind", {
                    fee: I,
                    amount: I,
                    from: h("account"),
                    blinding_factor: l(32),
                    outputs: p(Te)
                })),
                Pe = (t.blind_input = new E("blind_input", {
                    commitment: l(33),
                    owner: U
                })),
                Ce = (t.blind_transfer = new E("blind_transfer", {
                    fee: I,
                    inputs: p(Pe),
                    outputs: p(Te)
                })),
                De = (t.transfer_from_blind = new E("transfer_from_blind", {
                    fee: I,
                    amount: I,
                    to: h("account"),
                    blinding_factor: l(32),
                    inputs: p(Pe)
                })),
                ze = (t.asset_settle_cancel = new E("asset_settle_cancel", {
                    fee: I,
                    settlement: h("force_settlement"),
                    account: h("account"),
                    amount: I,
                    extensions: w(g)
                })),
                He = (t.asset_claim_fees = new E("asset_claim_fees", {
                    fee: I,
                    issuer: h("account"),
                    amount_to_claim: I,
                    extensions: w(g)
                }));
            k.st_operations = [
                C,
                D,
                z,
                H,
                K,
                N,
                R,
                F,
                J,
                V,
                Z,
                Y,
                G,
                X,
                ee,
                te,
                re,
                ne,
                ie,
                ae,
                se,
                ue,
                ce,
                _e,
                le,
                de,
                pe,
                he,
                me,
                be,
                ge,
                ve,
                Be,
                je,
                Se,
                ke,
                Oe,
                qe,
                Ae,
                Me,
                Ce,
                De,
                ze,
                He
            ];
            (t.transaction = new E("transaction", {
                ref_block_num: s,
                ref_block_prefix: u,
                expiration: x,
                operations: p(k),
                extensions: w(g)
            })),
                (t.signed_transaction = new E("signed_transaction", {
                    ref_block_num: s,
                    ref_block_prefix: u,
                    expiration: x,
                    operations: p(k),
                    extensions: w(g),
                    signatures: p(l(65))
                })),
                (t.stealth_memo_data = new E("stealth_memo_data", {
                    from: S(B),
                    amount: I,
                    blinding_factor: l(32),
                    commitment: l(33),
                    check: u
                }));
        },
        527: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.default = function(e) {
                    var t = e.toObject(void 0, {use_default: !0, annotate: !0});
                    console.error(JSON.stringify(t, null, 4)),
                        (t = e.toObject(void 0, {
                            use_default: !0,
                            annotate: !1
                        })),
                        console.error(JSON.stringify(t));
                }),
                (e.exports = t.default);
        },
        528: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = /\b\d+\.\d+\.(\d+)\b/,
                i = {
                    is_account_name: function(e) {
                        var t,
                            r,
                            n,
                            i,
                            o,
                            a =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1];
                        if (this.is_empty(e)) return !1;
                        if (((i = e.length), (!a && i < 3) || i > 63))
                            return !1;
                        for (t = 0, n = (o = e.split(".")).length; t < n; t++)
                            if (
                                ((r = o[t]),
                                !/^[a-z][a-z0-9-]*$/.test(r) ||
                                    /--/.test(r) ||
                                    !/[a-z0-9]$/.test(r))
                            )
                                return !1;
                        return !0;
                    },
                    is_object_id: function(e) {
                        return (
                            "string" == typeof e &&
                            (null !== n.exec(e) && 3 === e.split(".").length)
                        );
                    },
                    is_empty: function(e) {
                        return null == e || 0 === e.length;
                    },
                    is_account_name_error: function(e, t) {
                        var r, n, i, o, a, s;
                        if (
                            (null == t && (t = !1),
                            (s = "Account name should "),
                            this.is_empty(e))
                        )
                            return s + "not be empty.";
                        if (((o = e.length), !t && o < 3))
                            return s + "be longer.";
                        if (o > 63) return s + "be shorter.";
                        for (
                            /\./.test(e) &&
                                (s = "Each account segment should "),
                                r = 0,
                                i = (a = e.split(".")).length;
                            r < i;
                            r++
                        ) {
                            if (((n = a[r]), !/^[~a-z]/.test(n)))
                                return s + "start with a letter.";
                            if (!/^[~a-z0-9-]*$/.test(n))
                                return (
                                    s + "have only letters, digits, or dashes."
                                );
                            if (/--/.test(n))
                                return s + "have only one dash in a row.";
                            if (!/[a-z0-9]$/.test(n))
                                return s + "end with a letter or digit.";
                            if (!(n.length >= 3)) return s + "be longer";
                        }
                        return null;
                    },
                    is_cheap_name: function(e) {
                        return /[0-9-]/.test(e) || !/[aeiouy]/.test(e);
                    },
                    is_empty_user_input: function(e) {
                        return !!this.is_empty(e) || "" === (e + "").trim();
                    },
                    required: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                        if (this.is_empty(e))
                            throw new Error(
                                "value required for " + t + ": " + e
                            );
                        return e;
                    },
                    is_valid_symbol_error: function(e) {
                        var t = "Asset name should ";
                        return this.is_empty(e)
                            ? t + "not be empty."
                            : e.split(".").length > 2
                                ? t + "have only one dot."
                                : e.length < 3
                                    ? t + "be longer."
                                    : e.length > 16
                                        ? t + "be shorter."
                                        : /^[A-Z]/.test(e)
                                            ? /[A-Z]$/.test(e)
                                                ? /^[A-Z0-9\.]$/.test(e)
                                                    ? t +
                                                      "contain only letters numbers and perhaps a dot."
                                                    : null
                                                : t + "end with a letter"
                                            : t + "start with a letter";
                    }
                };
            (t.default = i), (e.exports = t.default);
        },
        529: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.default = function() {
                    n || (n = (0, i.default)({}));
                    return n;
                });
            var n,
                i = (function(e) {
                    return e && e.__esModule ? e : {default: e};
                })(r(500));
            e.exports = t.default;
        },
        530: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.SerializerValidation = t.template = t.ops = t.types = t.fp = t.Serializer = void 0);
            var n = f(r(426)),
                i = f(r(427)),
                o = f(r(428)),
                a = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) &&
                                (t[r] = e[r]);
                    return (t.default = e), t;
                })(r(526)),
                s = f(r(527)),
                u = f(r(343));
            function f(e) {
                return e && e.__esModule ? e : {default: e};
            }
            (t.Serializer = n.default),
                (t.fp = i.default),
                (t.types = o.default),
                (t.ops = a),
                (t.template = s.default),
                (t.SerializerValidation = u.default);
        },
        583: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = (function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                };
            })();
            t.default = function(e) {
                for (
                    var t,
                        r,
                        s = arguments.length,
                        u = Array(s > 1 ? s - 1 : 0),
                        f = 1;
                    f < s;
                    f++
                )
                    u[f - 1] = arguments[f];
                return (
                    (t = (function(t) {
                        function i(e) {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, i);
                            var t = (function(e, t) {
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
                                (i.__proto__ || Object.getPrototypeOf(i)).call(
                                    this,
                                    e
                                )
                            );
                            return (
                                r.call(t),
                                (t.state = e),
                                (t.shouldRender = !1),
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
                            })(i, t),
                            n(i, [
                                {
                                    key: "componentWillReceiveProps",
                                    value: function(e) {
                                        (this.shouldRender = !1),
                                            this.updateState(e);
                                    }
                                },
                                {
                                    key: "componentWillUnmount",
                                    value: function() {
                                        this.updateState.cancel();
                                    }
                                },
                                {
                                    key: "shouldComponentUpdate",
                                    value: function() {
                                        return this.shouldRender;
                                    }
                                },
                                {
                                    key: "render",
                                    value: function() {
                                        return o.default.createElement(
                                            e,
                                            this.state
                                        );
                                    }
                                }
                            ]),
                            i
                        );
                    })(i.Component)),
                    (r = function() {
                        var e = this;
                        this.updateState = a.default.apply(
                            void 0,
                            [
                                function(t) {
                                    (e.shouldRender = !0), e.setState(t);
                                }
                            ].concat(u)
                        );
                    }),
                    t
                );
            };
            var i = r(0),
                o = s(i),
                a = s(r(769));
            function s(e) {
                return e && e.__esModule ? e : {default: e};
            }
        },
        732: function(e, t, r) {
            var n = r(518),
                i = Object.prototype,
                o = i.hasOwnProperty,
                a = i.toString,
                s = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = o.call(e, s),
                    r = e[s];
                try {
                    e[s] = void 0;
                    var n = !0;
                } catch (e) {}
                var i = a.call(e);
                return n && (t ? (e[s] = r) : delete e[s]), i;
            };
        },
        733: function(e, t) {
            var r = Object.prototype.toString;
            e.exports = function(e) {
                return r.call(e);
            };
        },
        760: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = (function() {
                function e(t, r) {
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, e),
                        (this.message = t),
                        (void 0 !== r && null !== r ? r.message : void 0) &&
                            (this.message =
                                "cause\t" + r.message + "\t" + this.message);
                    var n = "";
                    (void 0 !== r && null !== r ? r.stack : void 0) &&
                        (n = "caused by\n\t" + r.stack + "\t" + n),
                        (this.stack = this.message + "\n" + n);
                }
                return (
                    (e.throw = function(e, t) {
                        var r = e;
                        throw ((void 0 !== t && null !== t
                            ? t.message
                            : void 0) && (r += "\t cause: " + t.message + " "),
                        (void 0 !== t && null !== t ? t.stack : void 0) &&
                            (r += "\n stack: " + t.stack + " "),
                        new Error(r));
                    }),
                    e
                );
            })();
            (t.default = n), (e.exports = t.default);
        },
        761: function(e, t, r) {
            "use strict";
            (function(e) {
                (t.__esModule = !0),
                    (t.verifyRaw = t.verify = t.sign = t.recoverPubKey = t.deterministicGenerateK = t.calcPubKeyRecoveryParam = void 0);
                var n = u(r(30)),
                    i = r(195),
                    o = u(r(524)),
                    a = u(r(55)),
                    s = u(r(762));
                function u(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                function f(t, r, s, u, f) {
                    (0, o.default)("Buffer", r),
                        (0, o.default)(a.default, s),
                        f && (r = (0, i.sha256)(e.concat([r, new e(f)]))),
                        n.default.equal(r.length, 32, "Hash must be 256 bit");
                    var c = s.toBuffer(32),
                        _ = new e(32),
                        l = new e(32);
                    l.fill(1),
                        _.fill(0),
                        (_ = (0, i.HmacSHA256)(
                            e.concat([l, new e([0]), c, r]),
                            _
                        )),
                        (l = (0, i.HmacSHA256)(l, _)),
                        (_ = (0, i.HmacSHA256)(
                            e.concat([l, new e([1]), c, r]),
                            _
                        )),
                        (l = (0, i.HmacSHA256)(l, _)),
                        (l = (0, i.HmacSHA256)(l, _));
                    for (
                        var d = a.default.fromBuffer(l);
                        d.signum() <= 0 || d.compareTo(t.n) >= 0 || !u(d);

                    )
                        (_ = (0, i.HmacSHA256)(e.concat([l, new e([0])]), _)),
                            (l = (0, i.HmacSHA256)(l, _)),
                            (l = (0, i.HmacSHA256)(l, _)),
                            (d = a.default.fromBuffer(l));
                    return d;
                }
                function c(e, t, r, n) {
                    var i = e.n,
                        o = e.G,
                        a = r.r,
                        s = r.s;
                    if (a.signum() <= 0 || a.compareTo(i) >= 0) return !1;
                    if (s.signum() <= 0 || s.compareTo(i) >= 0) return !1;
                    var u = s.modInverse(i),
                        f = t.multiply(u).mod(i),
                        c = a.multiply(u).mod(i),
                        _ = o.multiplyTwo(f, n, c);
                    return !e.isInfinity(_) && _.affineX.mod(i).equals(a);
                }
                function _(e, t, r, i) {
                    n.default.strictEqual(
                        3 & i,
                        i,
                        "Recovery param is more than two bits"
                    );
                    var o = e.n,
                        a = e.G,
                        s = r.r,
                        u = r.s;
                    (0, n.default)(
                        s.signum() > 0 && s.compareTo(o) < 0,
                        "Invalid r value"
                    ),
                        (0, n.default)(
                            u.signum() > 0 && u.compareTo(o) < 0,
                            "Invalid s value"
                        );
                    var f = 1 & i,
                        c = i >> 1 ? s.add(o) : s,
                        _ = e.pointFromX(f, c),
                        l = _.multiply(o);
                    (0, n.default)(
                        e.isInfinity(l),
                        "nR is not a valid curve point"
                    );
                    var d = t.negate().mod(o),
                        p = s.modInverse(o),
                        h = _.multiplyTwo(u, a, d).multiply(p);
                    return e.validate(h), h;
                }
                (t.calcPubKeyRecoveryParam = function(e, t, r, n) {
                    for (var i = 0; i < 4; i++)
                        if (_(e, t, r, i).equals(n)) return i;
                    throw new Error("Unable to find valid recovery factor");
                }),
                    (t.deterministicGenerateK = f),
                    (t.recoverPubKey = _),
                    (t.sign = function(e, t, r, n) {
                        var i,
                            o,
                            u = a.default.fromBuffer(t),
                            c = e.n,
                            _ = e.G,
                            l = (f(
                                e,
                                t,
                                r,
                                function(t) {
                                    var n = _.multiply(t);
                                    return (
                                        !e.isInfinity(n) &&
                                        0 !== (i = n.affineX.mod(c)).signum() &&
                                        0 !==
                                            (o = t
                                                .modInverse(c)
                                                .multiply(u.add(r.multiply(i)))
                                                .mod(c)).signum()
                                    );
                                },
                                n
                            ),
                            c.shiftRight(1));
                        return (
                            o.compareTo(l) > 0 && (o = c.subtract(o)),
                            new s.default(i, o)
                        );
                    }),
                    (t.verify = function(e, t, r, n) {
                        return c(e, a.default.fromBuffer(t), r, n);
                    }),
                    (t.verifyRaw = c);
            }.call(this, r(28).Buffer));
        },
        762: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i = s(r(30)),
                    o = s(r(524)),
                    a = s(r(55));
                function s(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                function u(e, t) {
                    (0, o.default)(a.default, e),
                        (0, o.default)(a.default, t),
                        (this.r = e),
                        (this.s = t);
                }
                (u.parseCompact = function(e) {
                    i.default.equal(e.length, 65, "Invalid signature length");
                    var t = e.readUInt8(0) - 27;
                    return (
                        i.default.equal(
                            t,
                            7 & t,
                            "Invalid signature parameter"
                        ),
                        {
                            compressed: !!(4 & t),
                            i: (t &= 3),
                            signature: new u(
                                a.default.fromBuffer(e.slice(1, 33)),
                                a.default.fromBuffer(e.slice(33))
                            )
                        }
                    );
                }),
                    (u.fromDER = function(e) {
                        i.default.equal(
                            e.readUInt8(0),
                            48,
                            "Not a DER sequence"
                        ),
                            i.default.equal(
                                e.readUInt8(1),
                                e.length - 2,
                                "Invalid sequence length"
                            ),
                            i.default.equal(
                                e.readUInt8(2),
                                2,
                                "Expected a DER integer"
                            );
                        var t = e.readUInt8(3);
                        (0, i.default)(t > 0, "R length is zero");
                        var r = 4 + t;
                        i.default.equal(
                            e.readUInt8(r),
                            2,
                            "Expected a DER integer (2)"
                        );
                        var n = e.readUInt8(r + 1);
                        (0, i.default)(n > 0, "S length is zero");
                        var o = e.slice(4, r),
                            s = e.slice(r + 2);
                        (r += 2 + n),
                            t > 1 &&
                                0 === o.readUInt8(0) &&
                                (0, i.default)(
                                    128 & o.readUInt8(1),
                                    "R value excessively padded"
                                ),
                            n > 1 &&
                                0 === s.readUInt8(0) &&
                                (0, i.default)(
                                    128 & s.readUInt8(1),
                                    "S value excessively padded"
                                ),
                            i.default.equal(
                                r,
                                e.length,
                                "Invalid DER encoding"
                            );
                        var f = a.default.fromDERInteger(o),
                            c = a.default.fromDERInteger(s);
                        return (
                            (0, i.default)(
                                f.signum() >= 0,
                                "R value is negative"
                            ),
                            (0, i.default)(
                                c.signum() >= 0,
                                "S value is negative"
                            ),
                            new u(f, c)
                        );
                    }),
                    (u.parseScriptSignature = function(e) {
                        var t = e.readUInt8(e.length - 1),
                            r = -129 & t;
                        return (
                            (0, i.default)(r > 0 && r < 4, "Invalid hashType"),
                            {signature: u.fromDER(e.slice(0, -1)), hashType: t}
                        );
                    }),
                    (u.prototype.toCompact = function(e, t) {
                        t && (e += 4), (e += 27);
                        var r = new n(65);
                        return (
                            r.writeUInt8(e, 0),
                            this.r.toBuffer(32).copy(r, 1),
                            this.s.toBuffer(32).copy(r, 33),
                            r
                        );
                    }),
                    (u.prototype.toDER = function() {
                        var e = this.r.toDERInteger(),
                            t = this.s.toDERInteger(),
                            r = [];
                        return (
                            r.push(2, e.length),
                            (r = r.concat(e)).push(2, t.length),
                            (r = r.concat(t)).unshift(48, r.length),
                            new n(r)
                        );
                    }),
                    (u.prototype.toScriptSignature = function(e) {
                        var t = new n(1);
                        return t.writeUInt8(e, 0), n.concat([this.toDER(), t]);
                    }),
                    (t.default = u),
                    (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        763: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i =
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
                    o = _(r(7)),
                    a = r(37),
                    s = _(r(317)),
                    u = _(r(528)),
                    f = _(r(55)),
                    c = _(r(529));
                function _(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var l = s.default.object_type,
                    d = s.default.impl_object_type,
                    p = (0, c.default)(),
                    h = parseInt(l.operation_history, 10),
                    m = parseInt(l.limit_order, 10),
                    b = parseInt(l.call_order, 10),
                    g = parseInt(l.proposal, 10),
                    y = parseInt(l.witness, 10),
                    v = parseInt(l.worker, 10),
                    w = parseInt(l.committee_member, 10),
                    B = parseInt(l.account, 10),
                    j = parseInt(l.asset, 10),
                    x = "1." + m + ".",
                    S = "1." + b + ".",
                    k = "1." + g + ".",
                    E = "1." + h + ".",
                    O = "2." + parseInt(d.account_balance, 10) + ".",
                    q = "2." + parseInt(d.account_statistics, 10) + ".",
                    A = "2." + parseInt(d.transaction, 10) + ".",
                    I =
                        "2." +
                        parseInt(d.account_transaction_history, 10) +
                        ".",
                    T = "2." + parseInt(d.asset_bitasset_data, 10) + ".",
                    M = "2." + parseInt(d.block_summary, 10) + ".",
                    P = "1." + y + ".",
                    C = "1." + v + ".",
                    D = "1." + w + ".",
                    z = "1." + j + ".",
                    H = "1." + B + ".",
                    K = JSON.parse(
                        n.env.npm_config__graphene_chain_chain_debug || !1
                    ),
                    U = new ((function() {
                        function e() {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, e),
                                (this.subscribers = new Set()),
                                (this.subscribed = !1),
                                this.clearCache(),
                                (this.chain_time_offset = []),
                                (this.dispatchFrequency = 40);
                        }
                        return (
                            (e.prototype.clearCache = function() {
                                (this.subbed_accounts = new Set()),
                                    (this.subbed_witnesses = new Set()),
                                    (this.subbed_committee = new Set()),
                                    (this.objects_by_id = new Map()),
                                    (this.accounts_by_name = new Map()),
                                    (this.assets_by_symbol = new Map()),
                                    (this.account_ids_by_key = o.default.Map()),
                                    (this.account_ids_by_account = o.default.Map()),
                                    (this.balance_objects_by_address = new Map()),
                                    (this.get_account_refs_of_keys_calls = new Set()),
                                    (this.get_account_refs_of_accounts_calls = new Set()),
                                    (this.account_history_requests = new Map()),
                                    (this.witness_by_account_id = new Map()),
                                    (this.workers = new Set()),
                                    (this.committee_by_account_id = new Map()),
                                    (this.objects_by_vote_id = new Map()),
                                    (this.fetching_get_full_accounts = new Map()),
                                    (this.get_full_accounts_subscriptions = new Map()),
                                    clearTimeout(this.timeout),
                                    (this.dispatched = !1);
                            }),
                            (e.prototype.resetCache = function(e) {
                                return (
                                    (this.subscribed = !1),
                                    (this.subError = null),
                                    this.clearCache(),
                                    (this.head_block_time_string = null),
                                    this.init(e).catch(function(e) {
                                        console.log(
                                            "resetCache init error:",
                                            e()
                                        );
                                    })
                                );
                            }),
                            (e.prototype.setDispatchFrequency = function(e) {
                                this.dispatchFrequency = e;
                            }),
                            (e.prototype.init = function() {
                                var e = this,
                                    t =
                                        !(
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                        ) || arguments[0],
                                    r = 0;
                                return new Promise(function(n, i) {
                                    return (function n(i, o) {
                                        if (e.subscribed) return i();
                                        var s = a.Apis.instance().db_api();
                                        return s
                                            ? s
                                                  .exec("get_objects", [
                                                      ["2.1.0"]
                                                  ])
                                                  .then(function(s) {
                                                      for (
                                                          var u = 0;
                                                          u < s.length;
                                                          u++
                                                      ) {
                                                          var f = s[u];
                                                          if (f) {
                                                              var c = new Date(
                                                                  f.time +
                                                                      "+00:00"
                                                              ).getTime();
                                                              if (
                                                                  ((e.head_block_time_string =
                                                                      f.time),
                                                                  e.chain_time_offset.push(
                                                                      new Date().getTime() -
                                                                          L(
                                                                              f.time
                                                                          ).getTime()
                                                                  ),
                                                                  (new Date().getTime() -
                                                                      c) /
                                                                      1e3 <
                                                                      60)
                                                              )
                                                                  a.Apis.instance()
                                                                      .db_api()
                                                                      .exec(
                                                                          "set_subscribe_callback",
                                                                          [
                                                                              e.onUpdate.bind(
                                                                                  e
                                                                              ),
                                                                              t
                                                                          ]
                                                                      )
                                                                      .then(
                                                                          function() {
                                                                              console.log(
                                                                                  "synced and subscribed, chainstore ready"
                                                                              ),
                                                                                  (e.subscribed = !0),
                                                                                  (e.subError = null),
                                                                                  e.notifySubscribers(),
                                                                                  i();
                                                                          }
                                                                      )
                                                                      .catch(
                                                                          function(
                                                                              t
                                                                          ) {
                                                                              (e.subscribed = !1),
                                                                                  (e.subError = t),
                                                                                  e.notifySubscribers(),
                                                                                  o(
                                                                                      t
                                                                                  ),
                                                                                  console.log(
                                                                                      "Error: ",
                                                                                      t
                                                                                  );
                                                                          }
                                                                      );
                                                              else {
                                                                  if (
                                                                      (console.log(
                                                                          "not yet synced, retrying in 1s"
                                                                      ),
                                                                      (e.subscribed = !1),
                                                                      r++,
                                                                      e.notifySubscribers(),
                                                                      r > 5)
                                                                  )
                                                                      return (
                                                                          (e.subError = new Error(
                                                                              "ChainStore sync error, please check your system clock"
                                                                          )),
                                                                          o(
                                                                              e.subError
                                                                          )
                                                                      );
                                                                  setTimeout(
                                                                      n.bind(
                                                                          e,
                                                                          i,
                                                                          o
                                                                      ),
                                                                      1e3
                                                                  );
                                                              }
                                                          } else
                                                              setTimeout(
                                                                  n.bind(
                                                                      e,
                                                                      i,
                                                                      o
                                                                  ),
                                                                  1e3
                                                              );
                                                      }
                                                  })
                                                  .catch(function(t) {
                                                      console.log(
                                                          "!!! Chain API error",
                                                          t
                                                      ),
                                                          e.objects_by_id.delete(
                                                              "2.1.0"
                                                          ),
                                                          o(t);
                                                  })
                                            : o(
                                                  new Error(
                                                      "Api not found, please initialize the api instance before calling the ChainStore"
                                                  )
                                              );
                                    })(n, i);
                                });
                            }),
                            (e.prototype._subTo = function(e, t) {
                                var r = "subbed_" + e;
                                this[r].has(t) || this[r].add(t);
                            }),
                            (e.prototype.unSubFrom = function(e, t) {
                                this["subbed_" + e].delete(t),
                                    this.objects_by_id.delete(t);
                            }),
                            (e.prototype._isSubbedTo = function(e, t) {
                                return this["subbed_" + e].has(t);
                            }),
                            (e.prototype.onUpdate = function(e) {
                                for (
                                    var t = [], r = [], n = 0;
                                    n < e.length;
                                    ++n
                                )
                                    for (var i = 0; i < e[n].length; ++i) {
                                        var o = e[n][i];
                                        if (u.default.is_object_id(o)) {
                                            var a = this.objects_by_id.get(o);
                                            if (
                                                0 == o.search(x) &&
                                                (t.push(o), a)
                                            ) {
                                                var s = this.objects_by_id.get(
                                                    a.get("seller")
                                                );
                                                if (s && s.has("orders")) {
                                                    var f = s.get("orders");
                                                    s.get("orders").has(o) &&
                                                        ((s = s.set(
                                                            "orders",
                                                            f.delete(o)
                                                        )),
                                                        this.objects_by_id.set(
                                                            s.get("id"),
                                                            s
                                                        ));
                                                }
                                            }
                                            if (
                                                0 == o.search(S) &&
                                                (r.push(o), a)
                                            ) {
                                                var c = this.objects_by_id.get(
                                                    a.get("borrower")
                                                );
                                                if (c && c.has("call_orders")) {
                                                    var _ = c.get(
                                                        "call_orders"
                                                    );
                                                    c
                                                        .get("call_orders")
                                                        .has(o) &&
                                                        ((c = c.set(
                                                            "call_orders",
                                                            _.delete(o)
                                                        )),
                                                        this.objects_by_id.set(
                                                            c.get("id"),
                                                            c
                                                        ));
                                                }
                                            }
                                            a &&
                                                this.objects_by_id.set(o, null);
                                        } else this._updateObject(o);
                                    }
                                t.length && p.emit("cancel-order", t),
                                    r.length && p.emit("close-call", r),
                                    this.notifySubscribers();
                            }),
                            (e.prototype.notifySubscribers = function() {
                                var e = this;
                                this.dispatched ||
                                    ((this.dispatched = !0),
                                    (this.timeout = setTimeout(function() {
                                        (e.dispatched = !1),
                                            e.subscribers.forEach(function(e) {
                                                e();
                                            });
                                    }, this.dispatchFrequency)));
                            }),
                            (e.prototype.subscribe = function(e) {
                                if (this.subscribers.has(e))
                                    return console.error(
                                        "Subscribe callback already exists",
                                        e
                                    );
                                this.subscribers.add(e);
                            }),
                            (e.prototype.unsubscribe = function(e) {
                                if (!this.subscribers.has(e))
                                    return console.error(
                                        "Unsubscribe callback does not exists",
                                        e
                                    );
                                this.subscribers.delete(e);
                            }),
                            (e.prototype.clearObjectCache = function(e) {
                                this.objects_by_id.delete(e);
                            }),
                            (e.prototype.getObject = function(e) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    r =
                                        !(
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                        ) || arguments[2],
                                    n =
                                        arguments.length > 3 &&
                                        void 0 !== arguments[3] &&
                                        arguments[3];
                                if (!u.default.is_object_id(e))
                                    throw Error(
                                        "argument is not an object id: " +
                                            JSON.stringify(e)
                                    );
                                var i = this.objects_by_id.get(e),
                                    o =
                                        e.substring(0, H.length) == H &&
                                        !this.get_full_accounts_subscriptions.get(
                                            e,
                                            !1
                                        ) &&
                                        r;
                                return null !== i || t
                                    ? void 0 === i || t || o
                                        ? this.fetchObject(e, t, r, n)
                                        : !0 !== i
                                            ? i
                                            : void 0
                                    : i;
                            }),
                            (e.prototype.getAsset = function(e) {
                                var t = this;
                                if (!e) return null;
                                if (u.default.is_object_id(e)) {
                                    var r = this.getObject(e);
                                    if (
                                        r &&
                                        r.get("bitasset") &&
                                        !r.getIn(["bitasset", "current_feed"])
                                    )
                                        return;
                                    return r;
                                }
                                var n = this.assets_by_symbol.get(e);
                                if (u.default.is_object_id(n)) {
                                    var i = this.getObject(n);
                                    if (
                                        i &&
                                        i.get("bitasset") &&
                                        !i.getIn(["bitasset", "current_feed"])
                                    )
                                        return;
                                    return i;
                                }
                                if (null === n) return null;
                                !0 !== n &&
                                    a.Apis.instance()
                                        .db_api()
                                        .exec("lookup_asset_symbols", [[e]])
                                        .then(function(r) {
                                            r.length && r[0]
                                                ? t._updateObject(r[0], !0)
                                                : (t.assets_by_symbol.set(
                                                      e,
                                                      null
                                                  ),
                                                  t.notifySubscribers());
                                        })
                                        .catch(function(r) {
                                            console.log("Error: ", r),
                                                t.assets_by_symbol.delete(e);
                                        });
                            }),
                            (e.prototype.getAccountRefsOfKey = function(e) {
                                var t = this;
                                return this.get_account_refs_of_keys_calls.has(
                                    e
                                )
                                    ? this.account_ids_by_key.get(e)
                                    : (this.get_account_refs_of_keys_calls.add(
                                          e
                                      ),
                                      void a.Apis.instance()
                                          .db_api()
                                          .exec("get_key_references", [[e]])
                                          .then(function(r) {
                                              var n = o.default.Set();
                                              (r = r[0]),
                                                  (n = n.withMutations(function(
                                                      e
                                                  ) {
                                                      for (
                                                          var t = 0;
                                                          t < r.length;
                                                          ++t
                                                      )
                                                          e.add(r[t]);
                                                  })),
                                                  (t.account_ids_by_key = t.account_ids_by_key.set(
                                                      e,
                                                      n
                                                  )),
                                                  t.notifySubscribers();
                                          })
                                          .catch(function(r) {
                                              console.error(
                                                  "get_key_references",
                                                  r
                                              ),
                                                  (t.account_ids_by_key = t.account_ids_by_key.delete(
                                                      e
                                                  )),
                                                  t.get_account_refs_of_keys_calls.delete(
                                                      e
                                                  );
                                          }));
                            }),
                            (e.prototype.getAccountRefsOfAccount = function(e) {
                                var t = this;
                                return this.get_account_refs_of_accounts_calls.has(
                                    e
                                )
                                    ? this.account_ids_by_account.get(e)
                                    : (this.get_account_refs_of_accounts_calls.add(
                                          e
                                      ),
                                      void a.Apis.instance()
                                          .db_api()
                                          .exec("get_account_references", [e])
                                          .then(function(r) {
                                              var n = o.default.Set();
                                              (n = n.withMutations(function(e) {
                                                  for (
                                                      var t = 0;
                                                      t < r.length;
                                                      ++t
                                                  )
                                                      e.add(r[t]);
                                              })),
                                                  (t.account_ids_by_account = t.account_ids_by_account.set(
                                                      e,
                                                      n
                                                  )),
                                                  t.notifySubscribers();
                                          })
                                          .catch(function(r) {
                                              console.error(
                                                  "get_account_references",
                                                  r
                                              ),
                                                  (t.account_ids_by_account = t.account_ids_by_account.delete(
                                                      e
                                                  )),
                                                  t.get_account_refs_of_accounts_calls.delete(
                                                      e
                                                  );
                                          }));
                            }),
                            (e.prototype.getBalanceObjects = function(e) {
                                var t = this;
                                return (
                                    void 0 ===
                                        this.balance_objects_by_address.get(
                                            e
                                        ) &&
                                        (this.balance_objects_by_address.set(
                                            e,
                                            o.default.Set()
                                        ),
                                        a.Apis.instance()
                                            .db_api()
                                            .exec("get_balance_objects", [[e]])
                                            .then(
                                                function(r) {
                                                    for (
                                                        var n = new Set(),
                                                            i = 0;
                                                        i < r.length;
                                                        ++i
                                                    )
                                                        t._updateObject(r[i]),
                                                            n.add(r[i].id);
                                                    t.balance_objects_by_address.set(
                                                        e,
                                                        o.default.Set(n)
                                                    ),
                                                        t.notifySubscribers();
                                                },
                                                function() {
                                                    t.balance_objects_by_address.delete(
                                                        e
                                                    );
                                                }
                                            )),
                                    this.balance_objects_by_address.get(e)
                                );
                            }),
                            (e.prototype.fetchObject = function(e) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    r = this,
                                    n =
                                        !(
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                        ) || arguments[2],
                                    i =
                                        arguments.length > 3 &&
                                        void 0 !== arguments[3] &&
                                        arguments[3];
                                if ("string" != typeof e) {
                                    for (var o = [], s = 0; s < e.length; ++s)
                                        o.push(this.fetchObject(e[s], t, n));
                                    return o;
                                }
                                if (
                                    (K &&
                                        console.log(
                                            "!!! fetchObject: ",
                                            e,
                                            this.subscribed,
                                            !this.subscribed && !t
                                        ),
                                    this.subscribed || t)
                                ) {
                                    if (
                                        (K &&
                                            console.log(
                                                "maybe fetch object: ",
                                                e
                                            ),
                                        !u.default.is_object_id(e))
                                    )
                                        throw Error(
                                            "argument is not an object id: " + e
                                        );
                                    if (0 === e.search("1.2.") && !i)
                                        return this.fetchFullAccount(e, n);
                                    0 === e.search(P) &&
                                        this._subTo("witnesses", e),
                                        0 === e.search(D) &&
                                            this._subTo("committee", e);
                                    var f = this.objects_by_id.get(e);
                                    if (void 0 === f) {
                                        if (
                                            (K &&
                                                console.log(
                                                    "fetching object: ",
                                                    e
                                                ),
                                            this.objects_by_id.set(e, !0),
                                            !a.Apis.instance().db_api())
                                        )
                                            return null;
                                        a.Apis.instance()
                                            .db_api()
                                            .exec("get_objects", [[e]])
                                            .then(function(t) {
                                                for (
                                                    var n = 0;
                                                    n < t.length;
                                                    n++
                                                ) {
                                                    var i = t[n];
                                                    i
                                                        ? r._updateObject(i, !0)
                                                        : (r.objects_by_id.set(
                                                              e,
                                                              null
                                                          ),
                                                          r.notifySubscribers());
                                                }
                                            })
                                            .catch(function(t) {
                                                console.log(
                                                    "!!! Chain API error",
                                                    t
                                                ),
                                                    r.objects_by_id.delete(e);
                                            });
                                    } else if (!0 === f) return;
                                    return f;
                                }
                            }),
                            (e.prototype.getAccount = function(e) {
                                var t =
                                    !(
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                    ) || arguments[1];
                                if (!e) return null;
                                if (
                                    "object" ===
                                    (void 0 === e ? "undefined" : i(e))
                                )
                                    return e.id
                                        ? this.getAccount(e.id, t)
                                        : e.get
                                            ? this.getAccount(e.get("id"), t)
                                            : void 0;
                                if (u.default.is_object_id(e)) {
                                    var r = this.getObject(e, !1, t);
                                    return null === r
                                        ? null
                                        : (!this.get_full_accounts_subscriptions.get(
                                              e,
                                              !1
                                          ) &&
                                              t) ||
                                          void 0 === r ||
                                          void 0 === r.get("name")
                                            ? this.fetchFullAccount(e, t)
                                            : r;
                                }
                                if (u.default.is_account_name(e, !0)) {
                                    var n = this.accounts_by_name.get(e);
                                    return null === n
                                        ? null
                                        : void 0 === n
                                            ? this.fetchFullAccount(e, t)
                                            : this.getObject(n, !1, t);
                                }
                                return (
                                    console.log(
                                        "!is_object_id && !is_account_name"
                                    ),
                                    null
                                );
                            }),
                            (e.prototype.getAccountName = function(e) {
                                var t = this.objects_by_id.get(e);
                                if (!0 !== t) {
                                    if (t) return t.get("name");
                                    this.getObject(e, !1, !1, !0);
                                }
                            }),
                            (e.prototype.getWitnessById = function(e) {
                                var t = this.witness_by_account_id.get(e);
                                if (void 0 !== t)
                                    return (
                                        t && this._subTo("witnesses", t),
                                        t ? this.getObject(t) : null
                                    );
                                this.fetchWitnessByAccount(e);
                            }),
                            (e.prototype.getCommitteeMemberById = function(e) {
                                var t = this.committee_by_account_id.get(e);
                                if (void 0 !== t)
                                    return (
                                        t && this._subTo("committee", t),
                                        t ? this.getObject(t) : null
                                    );
                                this.fetchCommitteeMemberByAccount(e);
                            }),
                            (e.prototype.fetchAllWorkers = function() {
                                var e = this;
                                return new Promise(function(t, r) {
                                    a.Apis.instance()
                                        .db_api()
                                        .exec("get_all_workers", [])
                                        .then(function(r) {
                                            r && r.length
                                                ? (r.forEach(function(t) {
                                                      e._updateObject(t, !1);
                                                  }),
                                                  t(r),
                                                  e.notifySubscribers())
                                                : t([]);
                                        }, r);
                                });
                            }),
                            (e.prototype.fetchWitnessByAccount = function(e) {
                                var t = this;
                                return new Promise(function(r, n) {
                                    a.Apis.instance()
                                        .db_api()
                                        .exec("get_witness_by_account", [e])
                                        .then(function(n) {
                                            if (n) {
                                                t._subTo("witnesses", n.id),
                                                    (t.witness_by_account_id = t.witness_by_account_id.set(
                                                        n.witness_account,
                                                        n.id
                                                    ));
                                                var i = t._updateObject(n, !0);
                                                r(i);
                                            } else (t.witness_by_account_id = t.witness_by_account_id.set(e, null)), t.notifySubscribers(), r(null);
                                        }, n);
                                });
                            }),
                            (e.prototype.fetchCommitteeMemberByAccount = function(
                                e
                            ) {
                                var t = this;
                                return new Promise(function(r, n) {
                                    a.Apis.instance()
                                        .db_api()
                                        .exec(
                                            "get_committee_member_by_account",
                                            [e]
                                        )
                                        .then(function(n) {
                                            if (n) {
                                                t._subTo("committee", n.id),
                                                    (t.committee_by_account_id = t.committee_by_account_id.set(
                                                        n.committee_member_account,
                                                        n.id
                                                    ));
                                                var i = t._updateObject(n, !0);
                                                r(i);
                                            } else (t.committee_by_account_id = t.committee_by_account_id.set(e, null)), t.notifySubscribers(), r(null);
                                        }, n);
                                });
                            }),
                            (e.prototype.fetchFullAccount = function(e) {
                                var t = this,
                                    r =
                                        !(
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                        ) || arguments[1];
                                K && console.log("Fetch full account: ", e);
                                var n =
                                        this.get_full_accounts_subscriptions.has(
                                            e
                                        ) &&
                                        !1 ===
                                            this.get_full_accounts_subscriptions.get(
                                                e
                                            ) &&
                                        r,
                                    i = u.default.is_object_id(e),
                                    s = !i && u.default.is_account_name(e, !0);
                                if (i && !n) {
                                    var f = this.objects_by_id.get(e);
                                    if (
                                        !(void 0 === f) &&
                                        f &&
                                        f.get("name") &&
                                        f.has("balances")
                                    )
                                        return f;
                                } else if (!n) {
                                    if (!s)
                                        throw Error(
                                            "argument is not an account name: " +
                                                e
                                        );
                                    var c = this.accounts_by_name.get(e);
                                    if (u.default.is_object_id(c))
                                        return this.getAccount(c, r);
                                }
                                (n ||
                                    !this.fetching_get_full_accounts.has(e) ||
                                    Date.now() -
                                        this.fetching_get_full_accounts.get(e) >
                                        5e3) &&
                                    (this.fetching_get_full_accounts.set(
                                        e,
                                        Date.now()
                                    ),
                                    a.Apis.instance()
                                        .db_api()
                                        .exec("get_full_accounts", [[e], r])
                                        .then(function(n) {
                                            if (0 !== n.length) {
                                                var u = n[0][1];
                                                t.get_full_accounts_subscriptions.set(
                                                    u.account.name,
                                                    r
                                                ),
                                                    t.get_full_accounts_subscriptions.set(
                                                        u.account.id,
                                                        r
                                                    ),
                                                    K &&
                                                        console.log(
                                                            "full_account: ",
                                                            u
                                                        ),
                                                    t._subTo(
                                                        "accounts",
                                                        u.account.id
                                                    );
                                                var f = u.account,
                                                    c = u.assets,
                                                    _ = u.vesting_balances,
                                                    l = u.statistics,
                                                    d = u.call_orders,
                                                    p = u.limit_orders,
                                                    h = u.referrer_name,
                                                    m = u.registrar_name,
                                                    b =
                                                        u.lifetime_referrer_name,
                                                    g = u.votes,
                                                    y = u.proposals;
                                                t.accounts_by_name.set(
                                                    f.name,
                                                    f.id
                                                ),
                                                    (f.assets = new o.default.List(
                                                        c || []
                                                    )),
                                                    (f.referrer_name = h),
                                                    (f.lifetime_referrer_name = b),
                                                    (f.registrar_name = m),
                                                    (f.balances = {}),
                                                    (f.orders = new o.default.Set()),
                                                    (f.vesting_balances = new o.default.Set()),
                                                    (f.balances = new o.default.Map()),
                                                    (f.call_orders = new o.default.Set()),
                                                    (f.proposals = new o.default.Set()),
                                                    (f.vesting_balances = f.vesting_balances.withMutations(
                                                        function(e) {
                                                            _.forEach(function(
                                                                r
                                                            ) {
                                                                t._updateObject(
                                                                    r
                                                                ),
                                                                    e.add(r.id);
                                                            });
                                                        }
                                                    ));
                                                var v = [];
                                                g.forEach(function(e) {
                                                    return t._updateObject(e);
                                                }),
                                                    (f.balances = f.balances.withMutations(
                                                        function(e) {
                                                            u.balances.forEach(
                                                                function(n) {
                                                                    t._updateObject(
                                                                        n
                                                                    ),
                                                                        e.set(
                                                                            n.asset_type,
                                                                            n.id
                                                                        ),
                                                                        r &&
                                                                            v.push(
                                                                                n.id
                                                                            );
                                                                }
                                                            );
                                                        }
                                                    )),
                                                    (f.orders = f.orders.withMutations(
                                                        function(e) {
                                                            p.forEach(function(
                                                                n
                                                            ) {
                                                                t._updateObject(
                                                                    n
                                                                ),
                                                                    e.add(n.id),
                                                                    r &&
                                                                        v.push(
                                                                            n.id
                                                                        );
                                                            });
                                                        }
                                                    )),
                                                    (f.call_orders = f.call_orders.withMutations(
                                                        function(e) {
                                                            d.forEach(function(
                                                                n
                                                            ) {
                                                                t._updateObject(
                                                                    n
                                                                ),
                                                                    e.add(n.id),
                                                                    r &&
                                                                        v.push(
                                                                            n.id
                                                                        );
                                                            });
                                                        }
                                                    )),
                                                    (f.proposals = f.proposals.withMutations(
                                                        function(e) {
                                                            y.forEach(function(
                                                                n
                                                            ) {
                                                                t._updateObject(
                                                                    n
                                                                ),
                                                                    e.add(n.id),
                                                                    r &&
                                                                        v.push(
                                                                            n.id
                                                                        );
                                                            });
                                                        }
                                                    )),
                                                    v.length &&
                                                        a.Apis.instance()
                                                            .db_api()
                                                            .exec(
                                                                "get_objects",
                                                                [v]
                                                            ),
                                                    t._updateObject(l);
                                                var w = t._updateObject(f);
                                                t.fetchRecentHistory(w),
                                                    t.notifySubscribers();
                                            } else i ? (t.objects_by_id.set(e, null), t.notifySubscribers()) : s && (t.accounts_by_name.set(e, null), t.notifySubscribers());
                                        })
                                        .catch(function(r) {
                                            console.log("Error: ", r),
                                                u.default.is_object_id(e)
                                                    ? t.objects_by_id.delete(e)
                                                    : t.accounts_by_name.delete(
                                                          e
                                                      );
                                        }));
                            }),
                            (e.prototype.getAccountMemberStatus = function(e) {
                                if (void 0 !== e)
                                    return null === e
                                        ? "unknown"
                                        : e.get("lifetime_referrer") ==
                                          e.get("id")
                                            ? "lifetime"
                                            : new Date(
                                                  e.get(
                                                      "membership_expiration_date"
                                                  )
                                              ).getTime() < new Date().getTime()
                                                ? "basic"
                                                : "annual";
                            }),
                            (e.prototype.getAccountBalance = function(e, t) {
                                var r = e.get("balances");
                                if (!r) return 0;
                                var n = r.get(t);
                                if (n) {
                                    var i = this.objects_by_id.get(n);
                                    if (i) return i.get("balance");
                                }
                                return 0;
                            }),
                            (e.prototype.fetchRecentHistory = function(e) {
                                var t = this,
                                    r =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 100,
                                    n = e;
                                if (
                                    (!u.default.is_object_id(n) &&
                                        e.toJS &&
                                        (n = e.get("id")),
                                    u.default.is_object_id(n) &&
                                        (e = this.objects_by_id.get(n)))
                                ) {
                                    var i = this.account_history_requests.get(
                                        n
                                    );
                                    if (i) return i.requests++, i.promise;
                                    i = {requests: 0};
                                    var s = "1." + h + ".0",
                                        f = e.get("history");
                                    f && f.size && (s = f.first().get("id"));
                                    var c = "1." + h + ".0";
                                    return (
                                        (i.promise = new Promise(function(
                                            e,
                                            i
                                        ) {
                                            a.Apis.instance()
                                                .history_api()
                                                .exec("get_account_history", [
                                                    n,
                                                    s,
                                                    r,
                                                    c
                                                ])
                                                .then(function(a) {
                                                    var s = t.objects_by_id.get(
                                                        n
                                                    );
                                                    if (s) {
                                                        var u = s.get(
                                                            "history"
                                                        );
                                                        u ||
                                                            (u = o.default.List());
                                                        var f = o.default.fromJS(
                                                            a
                                                        );
                                                        f = f.withMutations(
                                                            function(e) {
                                                                for (
                                                                    var t = 0;
                                                                    t < u.size;
                                                                    ++t
                                                                )
                                                                    e.push(
                                                                        u.get(t)
                                                                    );
                                                            }
                                                        );
                                                        var c = s.set(
                                                            "history",
                                                            f
                                                        );
                                                        t.objects_by_id.set(
                                                            n,
                                                            c
                                                        );
                                                        var _ = t.account_history_requests.get(
                                                            n
                                                        );
                                                        t.account_history_requests.delete(
                                                            n
                                                        ),
                                                            _.requests > 0
                                                                ? t
                                                                      .fetchRecentHistory(
                                                                          c,
                                                                          r
                                                                      )
                                                                      .then(
                                                                          e,
                                                                          i
                                                                      )
                                                                : e(c);
                                                    }
                                                });
                                        })),
                                        this.account_history_requests.set(n, i),
                                        i.promise
                                    );
                                }
                            }),
                            (e.prototype._updateObject = function(e) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    r =
                                        !(
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                        ) || arguments[2];
                                if (!("id" in e))
                                    return (
                                        console.log("object with no id:", e),
                                        void (
                                            "balance" in e &&
                                            "owner" in e &&
                                            "settlement_date" in e &&
                                            p.emit("settle-order-update", e)
                                        )
                                    );
                                if (e.id.substring(0, A.length) != A) {
                                    if (e.id.substring(0, I.length) == I) {
                                        if (
                                            !this._isSubbedTo(
                                                "accounts",
                                                e.account
                                            )
                                        )
                                            return;
                                    } else if (
                                        e.id.substring(0, x.length) == x
                                    ) {
                                        if (
                                            !this._isSubbedTo(
                                                "accounts",
                                                e.seller
                                            )
                                        )
                                            return;
                                    } else if (
                                        e.id.substring(0, S.length) == S
                                    ) {
                                        if (
                                            !this._isSubbedTo(
                                                "accounts",
                                                e.borrower
                                            )
                                        )
                                            return;
                                    } else if (
                                        e.id.substring(0, O.length) == O
                                    ) {
                                        if (
                                            !this._isSubbedTo(
                                                "accounts",
                                                e.owner
                                            )
                                        )
                                            return;
                                    } else {
                                        if (e.id.substring(0, E.length) == E)
                                            return;
                                        if (e.id.substring(0, M.length) == M)
                                            return;
                                        if (e.id.substring(0, q.length) == q) {
                                            if (
                                                !this._isSubbedTo(
                                                    "accounts",
                                                    e.owner
                                                )
                                            )
                                                return;
                                        } else if (
                                            e.id.substring(0, P.length) == P
                                        ) {
                                            if (
                                                !this._isSubbedTo(
                                                    "witnesses",
                                                    e.id
                                                )
                                            )
                                                return;
                                        } else if (
                                            e.id.substring(0, D.length) == D
                                        ) {
                                            if (
                                                !this._isSubbedTo(
                                                    "committee",
                                                    e.id
                                                )
                                            )
                                                return;
                                        } else if (
                                            "0.0." === e.id.substring(0, 4) ||
                                            "5." === e.id.substring(0, 2)
                                        )
                                            return;
                                    }
                                    "2.1.0" == e.id &&
                                        ((e.participation =
                                            ((0, f.default)(
                                                e.recent_slots_filled
                                            ).bitCount() /
                                                128) *
                                            100),
                                        (this.head_block_time_string = e.time),
                                        this.chain_time_offset.push(
                                            Date.now() - L(e.time).getTime()
                                        ),
                                        this.chain_time_offset.length > 10 &&
                                            this.chain_time_offset.shift());
                                    var n = this.objects_by_id.get(e.id);
                                    n || (n = o.default.Map());
                                    var i = n;
                                    if (
                                        (void 0 === n || !0 === n
                                            ? this.objects_by_id.set(
                                                  e.id,
                                                  (n = o.default.fromJS(e))
                                              )
                                            : this.objects_by_id.set(
                                                  e.id,
                                                  (n = n.mergeDeep(
                                                      o.default.fromJS(e)
                                                  ))
                                              ),
                                        e.id.substring(0, O.length) == O)
                                    ) {
                                        var s = this.objects_by_id.get(e.owner);
                                        if (
                                            void 0 === s ||
                                            null === s ||
                                            !0 === s
                                        )
                                            return;
                                        s.get("balances") ||
                                            (s = s.set(
                                                "balances",
                                                o.default.Map()
                                            )),
                                            (s = s.setIn(
                                                ["balances", e.asset_type],
                                                e.id
                                            )),
                                            this.objects_by_id.set(e.owner, s);
                                    } else if (e.id.substring(0, q.length) == q)
                                        try {
                                            i.get("most_recent_op", "2.9.0") !=
                                                e.most_recent_op &&
                                                this.fetchRecentHistory(
                                                    e.owner
                                                );
                                        } catch (e) {
                                            console.log(
                                                "prior error:",
                                                "object:",
                                                obj,
                                                "prior",
                                                i,
                                                "err:",
                                                e
                                            );
                                        }
                                    else if (e.id.substring(0, P.length) == P) {
                                        if (
                                            !this._isSubbedTo("witnesses", e.id)
                                        )
                                            return;
                                        this.witness_by_account_id.set(
                                            e.witness_account,
                                            e.id
                                        ),
                                            this.objects_by_vote_id.set(
                                                e.vote_id,
                                                e.id
                                            );
                                    } else if (
                                        e.id.substring(0, D.length) == D
                                    ) {
                                        if (
                                            !this._isSubbedTo("committee", e.id)
                                        )
                                            return;
                                        this.committee_by_account_id.set(
                                            e.committee_member_account,
                                            e.id
                                        ),
                                            this.objects_by_vote_id.set(
                                                e.vote_id,
                                                e.id
                                            );
                                    } else if (e.id.substring(0, H.length) == H)
                                        (n = (n = (n = (n = (n = (n = (n = n.set(
                                            "active",
                                            o.default.fromJS(e.active)
                                        )).set(
                                            "owner",
                                            o.default.fromJS(e.owner)
                                        )).set(
                                            "options",
                                            o.default.fromJS(e.options)
                                        )).set(
                                            "whitelisting_accounts",
                                            o.default.fromJS(
                                                e.whitelisting_accounts
                                            )
                                        )).set(
                                            "blacklisting_accounts",
                                            o.default.fromJS(
                                                e.blacklisting_accounts
                                            )
                                        )).set(
                                            "whitelisted_accounts",
                                            o.default.fromJS(
                                                e.whitelisted_accounts
                                            )
                                        )).set(
                                            "blacklisted_accounts",
                                            o.default.fromJS(
                                                e.blacklisted_accounts
                                            )
                                        )),
                                            this.objects_by_id.set(e.id, n),
                                            this.accounts_by_name.set(
                                                e.name,
                                                e.id
                                            );
                                    else if (e.id.substring(0, z.length) == z) {
                                        if (
                                            (this.assets_by_symbol.set(
                                                e.symbol,
                                                e.id
                                            ),
                                            !n.get("bitasset") &&
                                                e.bitasset_data_id)
                                        ) {
                                            var u = this.getObject(
                                                e.bitasset_data_id,
                                                !0
                                            );
                                            u || (u = o.default.Map()),
                                                u.get("asset_id") ||
                                                    (u = u.set(
                                                        "asset_id",
                                                        e.id
                                                    )),
                                                this.objects_by_id.set(
                                                    e.bitasset_data_id,
                                                    u
                                                ),
                                                (n = n.set("bitasset", u)),
                                                this.objects_by_id.set(e.id, n);
                                        }
                                    } else if (e.id.substring(0, C.length) == C)
                                        this.objects_by_vote_id.set(
                                            e.vote_for,
                                            e.id
                                        ),
                                            this.objects_by_vote_id.set(
                                                e.vote_against,
                                                e.id
                                            ),
                                            this.workers.has(e.id) ||
                                                this.workers.add(e.id);
                                    else if (e.id.substring(0, T.length) == T) {
                                        var c = n.get("asset_id");
                                        if (c) {
                                            var _ = this.getObject(c);
                                            _ &&
                                                ((_ = _.set("bitasset", n)),
                                                p.emit("bitasset-update", _),
                                                this.objects_by_id.set(c, _));
                                        }
                                    } else if (
                                        e.id.substring(0, S.length) == S
                                    ) {
                                        r && p.emit("call-order-update", e);
                                        var l = this.objects_by_id.get(
                                            e.borrower
                                        );
                                        if (l) {
                                            l.has("call_orders") ||
                                                (l = l.set(
                                                    "call_orders",
                                                    new o.default.Set()
                                                ));
                                            var d = l.get("call_orders");
                                            d.has(e.id) ||
                                                ((l = l.set(
                                                    "call_orders",
                                                    d.add(e.id)
                                                )),
                                                this.objects_by_id.set(
                                                    l.get("id"),
                                                    l
                                                ),
                                                a.Apis.instance()
                                                    .db_api()
                                                    .exec("get_objects", [
                                                        [e.id]
                                                    ]));
                                        }
                                    } else if (
                                        e.id.substring(0, x.length) == x
                                    ) {
                                        var h = this.objects_by_id.get(
                                            e.seller
                                        );
                                        if (h) {
                                            h.has("orders") ||
                                                (h = h.set(
                                                    "orders",
                                                    new o.default.Set()
                                                ));
                                            var m = h.get("orders");
                                            m.has(e.id) ||
                                                ((h = h.set(
                                                    "orders",
                                                    m.add(e.id)
                                                )),
                                                this.objects_by_id.set(
                                                    h.get("id"),
                                                    h
                                                ),
                                                a.Apis.instance()
                                                    .db_api()
                                                    .exec("get_objects", [
                                                        [e.id]
                                                    ]));
                                        }
                                    } else
                                        e.id.substring(0, k.length) == k &&
                                            (this.addProposalData(
                                                e.required_active_approvals,
                                                e.id
                                            ),
                                            this.addProposalData(
                                                e.required_owner_approvals,
                                                e.id
                                            ));
                                    return t && this.notifySubscribers(), n;
                                }
                            }),
                            (e.prototype.getObjectsByVoteIds = function(e) {
                                for (
                                    var t = this, r = [], n = [], i = 0;
                                    i < e.length;
                                    ++i
                                ) {
                                    var o = this.objects_by_vote_id.get(e[i]);
                                    o
                                        ? r.push(this.getObject(o))
                                        : (r.push(null), n.push(e[i]));
                                }
                                return (
                                    n.length &&
                                        a.Apis.instance()
                                            .db_api()
                                            .exec("lookup_vote_ids", [n])
                                            .then(function(e) {
                                                for (
                                                    var r = 0;
                                                    r < e.length;
                                                    ++r
                                                )
                                                    if (e[r]) {
                                                        var n =
                                                            e[r].id.substring(
                                                                0,
                                                                P.length
                                                            ) == P;
                                                        t._subTo(
                                                            n
                                                                ? "witnesses"
                                                                : "committee",
                                                            e[r].id
                                                        ),
                                                            t._updateObject(
                                                                e[r]
                                                            );
                                                    }
                                            })
                                            .catch(function(e) {
                                                console.log(
                                                    "Error looking up vote ids: ",
                                                    e
                                                );
                                            }),
                                    r
                                );
                            }),
                            (e.prototype.getObjectByVoteID = function(e) {
                                var t = this.objects_by_vote_id.get(e);
                                if (t) return this.getObject(t);
                            }),
                            (e.prototype.getHeadBlockDate = function() {
                                return L(this.head_block_time_string);
                            }),
                            (e.prototype.getEstimatedChainTimeOffset = function() {
                                return 0 === this.chain_time_offset.length
                                    ? 0
                                    : o.default
                                          .List(this.chain_time_offset)
                                          .sort()
                                          .get(
                                              Math.floor(
                                                  (this.chain_time_offset
                                                      .length -
                                                      1) /
                                                      2
                                              )
                                          );
                            }),
                            (e.prototype.addProposalData = function(e, t) {
                                var r = this;
                                e.forEach(function(e) {
                                    var n = r.objects_by_id.get(e);
                                    if (n) {
                                        var i = n.get(
                                            "proposals",
                                            o.default.Set()
                                        );
                                        i.includes(t) ||
                                            ((i = i.add(t)),
                                            (n = n.set("proposals", i)),
                                            r.objects_by_id.set(
                                                n.get("id"),
                                                n
                                            ));
                                    }
                                });
                            }),
                            e
                        );
                    })())();
                function L(e) {
                    return e
                        ? (/Z$/.test(e) || (e += "Z"), new Date(e))
                        : new Date("1970-01-01T00:00:00.000Z");
                }
                (U.FetchChainObjects = function(e, t, r, n) {
                    var i = e.bind(U);
                    return new Promise(function(o, a) {
                        var s = null;
                        function u() {
                            var r =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0],
                                a = t.map(function(t) {
                                    return "getAccount" === e.name
                                        ? i(t, n[t])
                                        : "getObject" === e.name
                                            ? i(t, !1, n[t])
                                            : i(t);
                                });
                            return (
                                -1 ===
                                    a.findIndex(function(e) {
                                        return void 0 === e;
                                    }) &&
                                (s && clearTimeout(s),
                                r || U.unsubscribe(u),
                                o(a),
                                !0)
                            );
                        }
                        var f = u(!0);
                        f || U.subscribe(u),
                            r &&
                                !f &&
                                (s = setTimeout(function() {
                                    U.unsubscribe(u),
                                        a(
                                            e.name +
                                                " request timed out after " +
                                                r +
                                                "ms with object ids: " +
                                                JSON.stringify(t)
                                        );
                                }, r));
                    });
                }),
                    (U.FetchChain = function(e, t) {
                        var r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : 3e3,
                            n =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : {},
                            i = U[e];
                        if (!i)
                            throw new Error(
                                "ChainStore does not have method " + e
                            );
                        var a = Array.isArray(t);
                        return (
                            a || (t = [t]),
                            U.FetchChainObjects(
                                i,
                                o.default.List(t),
                                r,
                                n
                            ).then(function(e) {
                                return a ? e : e.get(0);
                            })
                        );
                    }),
                    (t.default = U),
                    (e.exports = t.default);
            }.call(this, r(91)));
        },
        764: function(e, t, r) {
            "use strict";
            (function(n) {
                t.__esModule = !0;
                var i,
                    o,
                    a = _(r(30)),
                    s = r(429),
                    u = r(530),
                    f = r(37),
                    c = _(r(317));
                function _(e) {
                    return e && e.__esModule ? e : {default: e};
                }
                var l = (function() {
                        function e() {
                            !(function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, e),
                                (this.ref_block_num = 0),
                                (this.ref_block_prefix = 0),
                                (this.expiration = 0),
                                (this.operations = []),
                                (this.signatures = []),
                                (this.signer_private_keys = []),
                                (this._broadcast = function(e) {
                                    var t = this;
                                    return new Promise(function(r, n) {
                                        if (
                                            (t.signed || t.sign(), !t.tr_buffer)
                                        )
                                            throw new Error("not finalized");
                                        if (!t.signatures.length)
                                            throw new Error("not signed");
                                        if (!t.operations.length)
                                            throw new Error("no operations");
                                        var i = u.ops.signed_transaction.toObject(
                                            t
                                        );
                                        f.Apis.instance()
                                            .network_api()
                                            .exec(
                                                "broadcast_transaction_with_callback",
                                                [
                                                    function(e) {
                                                        return r(e);
                                                    },
                                                    i
                                                ]
                                            )
                                            .then(function() {
                                                e && e();
                                            })
                                            .catch(function(e) {
                                                console.log(e);
                                                var r = e.message;
                                                r || (r = ""),
                                                    n(
                                                        new Error(
                                                            r +
                                                                "\nbitshares-crypto  digest " +
                                                                s.hash
                                                                    .sha256(
                                                                        t.tr_buffer
                                                                    )
                                                                    .toString(
                                                                        "hex"
                                                                    ) +
                                                                " transaction " +
                                                                t.tr_buffer.toString(
                                                                    "hex"
                                                                ) +
                                                                " " +
                                                                JSON.stringify(
                                                                    i
                                                                )
                                                        )
                                                    );
                                            });
                                    });
                                }.bind(this));
                        }
                        return (
                            (e.prototype.add_type_operation = function(e, t) {
                                this.add_operation(
                                    this.get_type_operation(e, t)
                                );
                            }),
                            (e.prototype.process_transaction = function(e) {
                                var t = this,
                                    r =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null,
                                    n =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2] &&
                                        arguments[2],
                                    i = e.wallet.wallet_object;
                                return f.Apis.instance().chain_id !==
                                    i.get("chain_id")
                                    ? Promise.reject(
                                          "Mismatched chain_id; expecting " +
                                              i.get("chain_id") +
                                              ", but got " +
                                              f.Apis.instance().chain_id
                                      )
                                    : this.set_required_fees().then(function() {
                                          var i = {};
                                          if (r) {
                                              var o = e.getPubkeys_having_PrivateKey(
                                                  r
                                              );
                                              if (!o.length)
                                                  throw new Error(
                                                      "Missing signing key"
                                                  );
                                              var a = o,
                                                  s = Array.isArray(a),
                                                  u = 0;
                                              for (
                                                  a = s
                                                      ? a
                                                      : a[Symbol.iterator]();
                                                  ;

                                              ) {
                                                  var f;
                                                  if (s) {
                                                      if (u >= a.length) break;
                                                      f = a[u++];
                                                  } else {
                                                      if ((u = a.next()).done)
                                                          break;
                                                      f = u.value;
                                                  }
                                                  var c = f,
                                                      _ = e.getPrivateKey(c);
                                                  t.add_signer(_, c),
                                                      (i[c] = !0);
                                              }
                                          }
                                          return t
                                              .get_potential_signatures()
                                              .then(function(r) {
                                                  var n = r.pubkeys,
                                                      o = r.addys,
                                                      a = e.getPubkeys_having_PrivateKey(
                                                          n,
                                                          o
                                                      );
                                                  return t
                                                      .get_required_signatures(
                                                          a
                                                      )
                                                      .then(function(r) {
                                                          var n = r,
                                                              o = Array.isArray(
                                                                  n
                                                              ),
                                                              a = 0;
                                                          for (
                                                              n = o
                                                                  ? n
                                                                  : n[
                                                                        Symbol
                                                                            .iterator
                                                                    ]();
                                                              ;

                                                          ) {
                                                              var s;
                                                              if (o) {
                                                                  if (
                                                                      a >=
                                                                      n.length
                                                                  )
                                                                      break;
                                                                  s = n[a++];
                                                              } else {
                                                                  if (
                                                                      (a = n.next())
                                                                          .done
                                                                  )
                                                                      break;
                                                                  s = a.value;
                                                              }
                                                              var u = s;
                                                              if (!i[u]) {
                                                                  var f = e.getPrivateKey(
                                                                      u
                                                                  );
                                                                  if (!f)
                                                                      throw new Error(
                                                                          "Missing signing key for " +
                                                                              u
                                                                      );
                                                                  t.add_signer(
                                                                      f,
                                                                      u
                                                                  );
                                                              }
                                                          }
                                                      });
                                              })
                                              .then(function() {
                                                  return n
                                                      ? t.broadcast()
                                                      : t.serialize();
                                              });
                                      });
                            }),
                            (e.prototype.finalize = function() {
                                var e = this;
                                return new Promise(function(t, r) {
                                    if (e.tr_buffer)
                                        throw new Error("already finalized");
                                    t(
                                        f.Apis.instance()
                                            .db_api()
                                            .exec("get_objects", [["2.1.0"]])
                                            .then(function(t) {
                                                (i = t[0].time),
                                                    0 === e.expiration &&
                                                        (e.expiration =
                                                            d() +
                                                            f.ChainConfig
                                                                .expire_in_secs),
                                                    (e.ref_block_num =
                                                        65535 &
                                                        t[0].head_block_number),
                                                    (e.ref_block_prefix = new n(
                                                        t[0].head_block_id,
                                                        "hex"
                                                    ).readUInt32LE(4));
                                                for (
                                                    var r,
                                                        o = e.operations,
                                                        a = 0;
                                                    a < o.length;
                                                    a++
                                                )
                                                    (r = o[a])[1].finalize &&
                                                        r[1].finalize();
                                                e.tr_buffer = u.ops.transaction.toBuffer(
                                                    e
                                                );
                                            })
                                    );
                                });
                            }),
                            (e.prototype.id = function() {
                                if (!this.tr_buffer)
                                    throw new Error("not finalized");
                                return s.hash
                                    .sha256(this.tr_buffer)
                                    .toString("hex")
                                    .substring(0, 40);
                            }),
                            (e.prototype.add_operation = function(e) {
                                if (this.tr_buffer)
                                    throw new Error("already finalized");
                                if (
                                    ((0, a.default)(e, "operation"),
                                    !Array.isArray(e))
                                )
                                    throw new Error(
                                        "Expecting array [operation_id, operation]"
                                    );
                                this.operations.push(e);
                            }),
                            (e.prototype.get_type_operation = function(e, t) {
                                if (this.tr_buffer)
                                    throw new Error("already finalized");
                                (0, a.default)(e, "name"),
                                    (0, a.default)(t, "operation");
                                var r = u.ops[e];
                                (0, a.default)(r, "Unknown operation " + e);
                                var n = c.default.operations[r.operation_name];
                                if (void 0 === n)
                                    throw new Error(
                                        "unknown operation: " + r.operation_name
                                    );
                                if (
                                    (t.fee ||
                                        (t.fee = {amount: 0, asset_id: 0}),
                                    "proposal_create" === e)
                                ) {
                                    var i = !1,
                                        s = 0;
                                    t.proposed_ops.forEach(function(e) {
                                        var t = void 0;
                                        switch (e.op[0]) {
                                            case 0:
                                                t = "from";
                                                break;
                                            case 6:
                                            case 17:
                                                t = "account";
                                                break;
                                            case 10:
                                            case 11:
                                            case 12:
                                            case 13:
                                            case 14:
                                            case 18:
                                            case 43:
                                                t = "issuer";
                                                break;
                                            case 15:
                                                t = "payer";
                                                break;
                                            case 16:
                                                t = "from_account";
                                                break;
                                            case 22:
                                            case 23:
                                            case 24:
                                                t = "fee_paying_account";
                                                break;
                                            case 31:
                                                (i = !0), (s = 1123200);
                                        }
                                        t in e.op[1] &&
                                            0 === e.op[1][t] &&
                                            (i = !0);
                                    }),
                                        t.expiration_time ||
                                            (t.expiration_time =
                                                d() +
                                                f.ChainConfig
                                                    .expire_in_secs_proposal),
                                        i &&
                                            ((t.review_period_seconds =
                                                s + Math.max(o, 86400)),
                                            (t.expiration_time += 3600 + s));
                                }
                                return [n, r.fromObject(t)];
                            }),
                            (e.prototype.update_head_block = function() {
                                return Promise.all([
                                    f.Apis.instance()
                                        .db_api()
                                        .exec("get_objects", [["2.0.0"]]),
                                    f.Apis.instance()
                                        .db_api()
                                        .exec("get_objects", [["2.1.0"]])
                                ]).then(function(e) {
                                    var t = e[0],
                                        r = e[1];
                                    (i = r[0].time),
                                        (o =
                                            t[0].parameters
                                                .committee_proposal_review_period);
                                });
                            }),
                            (e.prototype.set_expire_seconds = function(e) {
                                if (this.tr_buffer)
                                    throw new Error("already finalized");
                                return (this.expiration = d() + e);
                            }),
                            (e.prototype.propose = function(e) {
                                if (this.tr_buffer)
                                    throw new Error("already finalized");
                                if (!this.operations.length)
                                    throw new Error("add operation first");
                                (0, a.default)(e, "proposal_create_options"),
                                    (0, a.default)(
                                        e.fee_paying_account,
                                        "proposal_create_options.fee_paying_account"
                                    );
                                var t = this.operations.map(function(e) {
                                    return {op: e};
                                });
                                return (
                                    (this.operations = []),
                                    (this.signatures = []),
                                    (this.signer_private_keys = []),
                                    (e.proposed_ops = t),
                                    this.add_type_operation(
                                        "proposal_create",
                                        e
                                    ),
                                    this
                                );
                            }),
                            (e.prototype.has_proposed_operation = function() {
                                for (
                                    var e = !1, t = 0;
                                    t < this.operations.length;
                                    t++
                                )
                                    if (
                                        "proposed_ops" in this.operations[t][1]
                                    ) {
                                        e = !0;
                                        break;
                                    }
                                return e;
                            }),
                            (e.prototype.set_required_fees = function(e, t) {
                                var r = this;
                                if (this.tr_buffer)
                                    throw new Error("already finalized");
                                if (!this.operations.length)
                                    throw new Error("add operations first");
                                function n(e) {
                                    return 22 === e[0];
                                }
                                var i = [],
                                    o = [],
                                    a = [],
                                    s = [],
                                    c = {};
                                function _(e) {
                                    var t = null;
                                    switch (e[0]) {
                                        case 0:
                                            var r = new Array(
                                                e[1].memo.message.length + 1
                                            ).join("a");
                                            t =
                                                e[0] +
                                                "_" +
                                                e[1].amount.asset_id +
                                                "_" +
                                                r;
                                    }
                                    return t;
                                }
                                for (
                                    var l, d = 0;
                                    d < this.operations.length;
                                    d++
                                ) {
                                    l = this.operations[d];
                                    var p = u.ops.operation.toObject(l),
                                        h = !1;
                                    if (t) {
                                        var m = _(p);
                                        m &&
                                            (c[m]
                                                ? (c[m].duplicates.push(d),
                                                  (h = !0))
                                                : (c[m] = {
                                                      original: d,
                                                      duplicates: []
                                                  }));
                                    }
                                    n(l) &&
                                        l[1].proposed_ops.forEach(function(e) {
                                            o.push(e),
                                                -1 ===
                                                    s.indexOf(
                                                        e.op[1].fee.asset_id
                                                    ) &&
                                                    s.push(
                                                        "1.3." +
                                                            e.op[1].fee.asset_id
                                                    );
                                        }),
                                        h ||
                                            (i.push(p),
                                            -1 ===
                                                a.indexOf(
                                                    i[d][1].fee.asset_id
                                                ) &&
                                                a.push(i[d][1].fee.asset_id));
                                }
                                if (!e) {
                                    var b = i[0][1].fee;
                                    e =
                                        b && null !== b.asset_id
                                            ? b.asset_id
                                            : "1.3.0";
                                }
                                var g = [];
                                if (
                                    (g.push(
                                        Promise.all(
                                            a.map(function(e) {
                                                return f.Apis.instance()
                                                    .db_api()
                                                    .exec("get_required_fees", [
                                                        i,
                                                        e
                                                    ]);
                                            })
                                        ).catch(function(e) {
                                            console.error(
                                                "get_required_fees API error: ",
                                                e.message
                                            );
                                        })
                                    ),
                                    s.length &&
                                        s.forEach(function(e) {
                                            -1 === a.indexOf(e) && a.push(e);
                                        }),
                                    a.length > 1 || "1.3.0" !== a[0])
                                ) {
                                    var y = a.map(function(e) {
                                        return e.replace(/^1\./, "2.");
                                    });
                                    g.push(
                                        f.Apis.instance()
                                            .db_api()
                                            .exec("get_required_fees", [
                                                i,
                                                "1.3.0"
                                            ])
                                    ),
                                        g.push(
                                            f.Apis.instance()
                                                .db_api()
                                                .exec("get_objects", [y])
                                        );
                                }
                                return Promise.all(g).then(function(e) {
                                    var o = e[0],
                                        a = e[1],
                                        s = e[2];
                                    void 0 === o && (o = a), a || (a = o[0]);
                                    var f = {},
                                        l = {};
                                    o.forEach(function(e) {
                                        var t = e.map(function(e) {
                                                return Array.isArray(e)
                                                    ? ((l[e[1][0].asset_id] =
                                                          e[1]),
                                                      e[0])
                                                    : e;
                                            }),
                                            r = t[0].asset_id;
                                        f[r] = t;
                                    }, {});
                                    var d = s
                                            ? s.reduce(function(e, t) {
                                                  return (
                                                      (e[
                                                          t.id.replace(
                                                              /^2\./,
                                                              "1."
                                                          )
                                                      ] = t),
                                                      e
                                                  );
                                              }, {})
                                            : {},
                                        p = {},
                                        h = {};
                                    function m(e, t, r, n) {
                                        return (
                                            e[t] ||
                                                (e[t] = {total: 0, ops: []}),
                                            e[t].propIdx
                                                ? e[t].propIdx.push(r)
                                                : e[t].ops.push(r),
                                            "1.3.0" !== t &&
                                                (e[t].total += n.length
                                                    ? n[r].amount
                                                    : n.amount),
                                            e
                                        );
                                    }
                                    for (
                                        var b = function(e) {
                                                var t = i[e],
                                                    r = t[1].fee.asset_id;
                                                n(t)
                                                    ? ((p = m(
                                                          p,
                                                          r,
                                                          e,
                                                          a[e][0]
                                                      )),
                                                      t[1].proposed_ops.forEach(
                                                          function(t, r) {
                                                              var n =
                                                                  t.op[1].fee
                                                                      .asset_id;
                                                              h[e] ||
                                                                  (h[e] = {}),
                                                                  h[e][n] ||
                                                                      (h[e][
                                                                          n
                                                                      ] = {
                                                                          total: 0,
                                                                          ops: [
                                                                              e
                                                                          ],
                                                                          propIdx: []
                                                                      }),
                                                                  (h[e] = m(
                                                                      h[e],
                                                                      n,
                                                                      r,
                                                                      a[e][1]
                                                                  ));
                                                          }
                                                      ))
                                                    : (p = m(p, r, e, a[e]));
                                            },
                                            g = 0;
                                        g < i.length;
                                        g++
                                    )
                                        b(g);
                                    function y(e) {
                                        if (!Object.keys(e).length) return [];
                                        var t = [],
                                            r = function(r) {
                                                var n = d[r]
                                                    ? parseInt(
                                                          d[r].fee_pool,
                                                          10
                                                      )
                                                    : 0;
                                                e[r].total > n
                                                    ? e[r].ops.forEach(function(
                                                          n
                                                      ) {
                                                          2 === a[n].length &&
                                                          "propIdx" in e[r]
                                                              ? e[
                                                                    r
                                                                ].propIdx.forEach(
                                                                    function(
                                                                        e
                                                                    ) {
                                                                        t[e] =
                                                                            a[
                                                                                n
                                                                            ][1][
                                                                                e
                                                                            ];
                                                                    }
                                                                )
                                                              : 2 ===
                                                                a[n].length
                                                                  ? (t[n] =
                                                                        a[n][0])
                                                                  : (t[n] =
                                                                        a[n]);
                                                      })
                                                    : e[r].ops.forEach(function(
                                                          n
                                                      ) {
                                                          2 === a[n].length &&
                                                          "propIdx" in e[r]
                                                              ? e[
                                                                    r
                                                                ].propIdx.forEach(
                                                                    function(
                                                                        e
                                                                    ) {
                                                                        t[e] =
                                                                            l[
                                                                                r
                                                                            ][
                                                                                e
                                                                            ];
                                                                    }
                                                                )
                                                              : (t[n] =
                                                                    f[r][n]);
                                                      });
                                            };
                                        for (var n in e) r(n);
                                        return t;
                                    }
                                    var v = y(p),
                                        w = {};
                                    for (var B in h) w[B] = y(h[B]);
                                    for (
                                        var j = function(e, n) {
                                                if (
                                                    !e.fee ||
                                                    0 === e.fee.amount ||
                                                    (e.fee.amount.toString &&
                                                        "0" ===
                                                            e.fee.amount.toString())
                                                )
                                                    if (t) {
                                                        var i = (function(
                                                            e,
                                                            t
                                                        ) {
                                                            var r = _(e),
                                                                n = c[r];
                                                            if (n) {
                                                                if (
                                                                    n.original ===
                                                                    t
                                                                )
                                                                    return t;
                                                                if (
                                                                    -1 !==
                                                                    n.duplicates.indexOf(
                                                                        t
                                                                    )
                                                                )
                                                                    return n.original;
                                                            }
                                                        })(
                                                            u.ops.operation.toObject(
                                                                r.operations[n]
                                                            ),
                                                            n
                                                        );
                                                        e.fee =
                                                            i >= 0
                                                                ? v[i]
                                                                : v[n];
                                                    } else e.fee = v[n];
                                                if (e.proposed_ops) {
                                                    for (
                                                        var o = 0;
                                                        o <
                                                        e.proposed_ops.length;
                                                        o++
                                                    )
                                                        e.proposed_ops[
                                                            o
                                                        ].op[1].fee.asset_id =
                                                            w[n][o].asset_id;
                                                    return [];
                                                }
                                            },
                                            x = 0;
                                        x < r.operations.length;
                                        x++
                                    )
                                        j(r.operations[x][1], x);
                                });
                            }),
                            (e.prototype.get_potential_signatures = function() {
                                var e = u.ops.signed_transaction.toObject(this);
                                return Promise.all([
                                    f.Apis.instance()
                                        .db_api()
                                        .exec("get_potential_signatures", [e]),
                                    f.Apis.instance()
                                        .db_api()
                                        .exec(
                                            "get_potential_address_signatures",
                                            [e]
                                        )
                                ]).then(function(e) {
                                    return {pubkeys: e[0], addys: e[1]};
                                });
                            }),
                            (e.prototype.get_required_signatures = function(e) {
                                if (!e.length) return Promise.resolve([]);
                                var t = u.ops.signed_transaction.toObject(this);
                                return f.Apis.instance()
                                    .db_api()
                                    .exec("get_required_signatures", [t, e])
                                    .then(function(e) {
                                        return e;
                                    });
                            }),
                            (e.prototype.add_signer = function(e) {
                                var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : e.toPublicKey();
                                if (
                                    ((0, a.default)(
                                        e.d,
                                        "required PrivateKey object"
                                    ),
                                    this.signed)
                                )
                                    throw new Error("already signed");
                                t.Q || (t = s.PublicKey.fromPublicKeyString(t));
                                var r = e.toHex(),
                                    n = this.signer_private_keys,
                                    i = Array.isArray(n),
                                    o = 0;
                                for (n = i ? n : n[Symbol.iterator](); ; ) {
                                    var u;
                                    if (i) {
                                        if (o >= n.length) break;
                                        u = n[o++];
                                    } else {
                                        if ((o = n.next()).done) break;
                                        u = o.value;
                                    }
                                    if (u[0].toHex() === r) return;
                                }
                                this.signer_private_keys.push([e, t]);
                            }),
                            (e.prototype.sign = function() {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : f.Apis.instance().chain_id;
                                if (!this.tr_buffer)
                                    throw new Error("not finalized");
                                if (this.signed)
                                    throw new Error("already signed");
                                if (!this.signer_private_keys.length)
                                    throw new Error(
                                        "Transaction was not signed. Do you have a private key? [no_signers]"
                                    );
                                for (
                                    var t = this.signer_private_keys.length,
                                        r = 0;
                                    0 < t ? r < t : r > t;
                                    r++
                                ) {
                                    var i = this.signer_private_keys[r],
                                        o = i[0],
                                        a = i[1],
                                        u = s.Signature.signBuffer(
                                            n.concat([
                                                new n(e, "hex"),
                                                this.tr_buffer
                                            ]),
                                            o,
                                            a
                                        );
                                    this.signatures.push(u.toBuffer());
                                }
                                (this.signer_private_keys = []),
                                    (this.signed = !0);
                            }),
                            (e.prototype.serialize = function() {
                                return u.ops.signed_transaction.toObject(this);
                            }),
                            (e.prototype.toObject = function() {
                                return u.ops.signed_transaction.toObject(this);
                            }),
                            (e.prototype.broadcast = function(e) {
                                var t = this;
                                return this.tr_buffer
                                    ? this._broadcast(e)
                                    : this.finalize().then(function() {
                                          return t._broadcast(e);
                                      });
                            }),
                            e
                        );
                    })(),
                    d = function() {
                        var e = Math.ceil(
                                (function(e) {
                                    return e
                                        ? (/Z$/.test(e) || (e += "Z"),
                                          new Date(e))
                                        : new Date("1970-01-01T00:00:00.000Z");
                                })(i).getTime() / 1e3
                            ),
                            t = Math.ceil(Date.now() / 1e3);
                        return t - e > 30 ? e : Math.max(t, e);
                    };
                (t.default = l), (e.exports = t.default);
            }.call(this, r(28).Buffer));
        },
        765: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n =
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
                i = (function(e) {
                    return e && e.__esModule ? e : {default: e};
                })(r(30));
            var o = {
                toImpliedDecimal: function(e, t) {
                    "number" == typeof e
                        ? ((0, i.default)(e <= 9007199254740991, "overflow"),
                          (e = "" + e))
                        : e.toString && (e = e.toString()),
                        (0, i.default)(
                            "string" == typeof e,
                            "number should be an actual number or string: " +
                                (void 0 === e ? "undefined" : n(e))
                        ),
                        (e = e.trim()),
                        (0, i.default)(
                            /^[0-9]*\.?[0-9]*$/.test(e),
                            "Invalid decimal number " + e
                        );
                    var r = e.split("."),
                        o = r[0],
                        a = void 0 === o ? "" : o,
                        s = r[1],
                        u = void 0 === s ? "" : s,
                        f = t - u.length;
                    (0, i.default)(
                        f >= 0,
                        "Too many decimal digits in " +
                            e +
                            " to create an implied decimal of " +
                            t
                    );
                    for (var c = 0; c < f; c++) u += "0";
                    for (; "0" === a.charAt(0); ) a = a.substring(1);
                    return a + u;
                }
            };
            (t.default = o), (e.exports = t.default);
        },
        766: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = (function(e) {
                    return e && e.__esModule ? e : {default: e};
                })(r(253)),
                i = r(65),
                o = r(429),
                a = r(530),
                s = r(37);
            var u = {
                unique_nonce_entropy: null,
                unique_nonce_uint64: function() {
                    var e = (u.unique_nonce_entropy =
                            null === u.unique_nonce_entropy
                                ? parseInt(n.default.randomUint8Array(1)[0])
                                : ++u.unique_nonce_entropy % 256),
                        t = i.Long.fromNumber(Date.now());
                    return (t = t
                        .shiftLeft(8)
                        .or(i.Long.fromNumber(e))).toString();
                },
                to_json: function(e) {
                    return (function(e, t) {
                        var r = a.ops.signed_transaction.toObject(e);
                        if (t) {
                            var n = s.Apis.instance().network_api();
                            return (
                                console.log("... tr_object", JSON.stringify(r)),
                                n.exec("broadcast_transaction", [r])
                            );
                        }
                        return r;
                    })(
                        e,
                        arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1]
                    );
                },
                signed_tr_json: function(e, t) {
                    var r = a.ops.transaction.toBuffer(e);
                    return (
                        ((e = a.ops.transaction.toObject(
                            e
                        )).signatures = (function() {
                            for (
                                var e = [], n = 0;
                                0 < t.length ? n < t.length : n > t.length;
                                t.length, n++
                            ) {
                                var i = t[n];
                                e.push(o.Signature.signBuffer(r, i).toHex());
                            }
                            return e;
                        })()),
                        e
                    );
                },
                expire_in_min: function(e) {
                    return Math.round(Date.now() / 1e3) + 60 * e;
                },
                seconds_from_now: function(e) {
                    return Math.round(Date.now() / 1e3) + e;
                },
                template: function(e) {
                    var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {use_default: !0, annotate: !0},
                        r = a.ops[e];
                    if (!r)
                        throw new Error(
                            "unknown serializer_operation_type " + e
                        );
                    return r.toObject(void 0, t);
                },
                new_operation: function(e) {
                    var t = a.ops[e];
                    if (!t)
                        throw new Error(
                            "unknown serializer_operation_type " + e
                        );
                    var r = t.toObject(void 0, {use_default: !0, annotate: !0});
                    return t.fromObject(r);
                },
                instance: function(e) {
                    return e.substring("0.0.".length);
                }
            };
            (t.default = u), (e.exports = t.default);
        },
        767: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = a(r(344)),
                i = a(r(432)),
                o = r(768);
            function a(e) {
                return e && e.__esModule ? e : {default: e};
            }
            var s = {},
                u = {},
                f = new ((function() {
                    function e() {
                        !(function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, e);
                        var t = {
                            loggedIn: !1,
                            roles: ["active", "owner", "memo"]
                        };
                        (this.get = (0, o.get)(t)),
                            (this.set = (0, o.set)(t)),
                            (this.subs = {});
                    }
                    return (
                        (e.prototype.addSubscription = function(e) {
                            this.subs[e] = e;
                        }),
                        (e.prototype.setRoles = function(e) {
                            this.set("roles", e);
                        }),
                        (e.prototype.generateKeys = function(e, t, r, o) {
                            new Date().getTime();
                            if (!e || !t)
                                throw new Error(
                                    "Account name or password required"
                                );
                            if (t.length < 12)
                                throw new Error(
                                    "Password must have at least 12 characters"
                                );
                            var a = {},
                                f = {};
                            return (
                                (r || this.get("roles")).forEach(function(r) {
                                    var c = e + r + t,
                                        _ = s[c]
                                            ? s[c]
                                            : n.default.fromSeed(
                                                  i.default.normalize_brainKey(
                                                      c
                                                  )
                                              );
                                    (s[c] = _),
                                        (a[r] = _),
                                        (f[r] = u[c]
                                            ? u[c]
                                            : _.toPublicKey().toString(o)),
                                        (u[c] = f[r]);
                                }),
                                {privKeys: a, pubKeys: f}
                            );
                        }),
                        (e.prototype.checkKeys = function(e) {
                            var t = this,
                                r = e.accountName,
                                n = e.password,
                                i = e.auths;
                            if (!r || !n || !i)
                                throw new Error("checkKeys: Missing inputs");
                            var o = !1,
                                a = function(e) {
                                    var a = t.generateKeys(r, n, [e]),
                                        s = a.privKeys,
                                        u = a.pubKeys;
                                    i[e].forEach(function(r) {
                                        r[0] === u[e] &&
                                            ((o = !0),
                                            t.set(e, {priv: s[e], pub: u[e]}));
                                    });
                                };
                            for (var s in i) a(s);
                            return (
                                o && this.set("name", r),
                                this.set("loggedIn", o),
                                o
                            );
                        }),
                        (e.prototype.signTransaction = function(e) {
                            var t = this,
                                r = !1;
                            if (
                                (this.get("roles").forEach(function(n) {
                                    var i = t.get(n);
                                    i &&
                                        ((r = !0),
                                        console.log("adding signer:", i.pub),
                                        e.add_signer(i.priv, i.pub));
                                }),
                                !r)
                            )
                                throw new Error(
                                    "You do not have any private keys to sign this transaction"
                                );
                        }),
                        e
                    );
                })())();
            (t.default = f), (e.exports = t.default);
        },
        768: function(e, t, r) {
            "use strict";
            (t.__esModule = !0),
                (t.get = function(e) {
                    return function(t) {
                        return e[t] || "";
                    };
                }),
                (t.set = function(e) {
                    return function(t, r) {
                        return (e[t] = r), this;
                    };
                });
        },
        769: function(e, t, r) {
            var n = r(425),
                i = r(770),
                o = r(771),
                a = "Expected a function",
                s = Math.max,
                u = Math.min;
            e.exports = function(e, t, r) {
                var f,
                    c,
                    _,
                    l,
                    d,
                    p,
                    h = 0,
                    m = !1,
                    b = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError(a);
                function y(t) {
                    var r = f,
                        n = c;
                    return (f = c = void 0), (h = t), (l = e.apply(n, r));
                }
                function v(e) {
                    var r = e - p;
                    return void 0 === p || r >= t || r < 0 || (b && e - h >= _);
                }
                function w() {
                    var e = i();
                    if (v(e)) return B(e);
                    d = setTimeout(
                        w,
                        (function(e) {
                            var r = t - (e - p);
                            return b ? u(r, _ - (e - h)) : r;
                        })(e)
                    );
                }
                function B(e) {
                    return (d = void 0), g && f ? y(e) : ((f = c = void 0), l);
                }
                function j() {
                    var e = i(),
                        r = v(e);
                    if (((f = arguments), (c = this), (p = e), r)) {
                        if (void 0 === d)
                            return (function(e) {
                                return (
                                    (h = e),
                                    (d = setTimeout(w, t)),
                                    m ? y(e) : l
                                );
                            })(p);
                        if (b) return (d = setTimeout(w, t)), y(p);
                    }
                    return void 0 === d && (d = setTimeout(w, t)), l;
                }
                return (
                    (t = o(t) || 0),
                    n(r) &&
                        ((m = !!r.leading),
                        (_ = (b = "maxWait" in r)
                            ? s(o(r.maxWait) || 0, t)
                            : _),
                        (g = "trailing" in r ? !!r.trailing : g)),
                    (j.cancel = function() {
                        void 0 !== d && clearTimeout(d),
                            (h = 0),
                            (f = p = c = d = void 0);
                    }),
                    (j.flush = function() {
                        return void 0 === d ? l : B(i());
                    }),
                    j
                );
            };
        },
        770: function(e, t, r) {
            var n = r(424);
            e.exports = function() {
                return n.Date.now();
            };
        },
        771: function(e, t, r) {
            var n = r(425),
                i = r(772),
                o = NaN,
                a = /^\s+|\s+$/g,
                s = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (n(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(a, "");
                var r = u.test(e);
                return r || f.test(e)
                    ? c(e.slice(2), r ? 2 : 8)
                    : s.test(e)
                        ? o
                        : +e;
            };
        },
        772: function(e, t, r) {
            var n = r(340),
                i = r(341),
                o = "[object Symbol]";
            e.exports = function(e) {
                return "symbol" == typeof e || (i(e) && n(e) == o);
            };
        }
    }
]);
