export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const openledgerAPIs = {
    BASE: "https://ol-api1.openledger.info/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/v0_1",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address"
};

export const cryptoBridgeAPIs = {
    BASE: "https://api.crypto-bridge.org/api/v1",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/wallets",
    MARKETS: "/markets",
    TRADING_PAIRS: "/trading-pairs"
};

export const widechainAPIs = {
    BASE: "https://gateway.winex.pro/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address",
    WITHDRAW_HISTORY: "/latelyWithdraw",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_HISTORY: "/latelyRecharge"
};

export const gdex2APIs = {
    BASE: "https://api.gdex.io/adjust",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs"
};

// Legacy Deposit/Withdraw
export const gdexAPIs = {
    BASE: "https://api.gdex.io",
    ASSET_LIST: "/gateway/asset/assetList",
    ASSET_DETAIL: "/gateway/asset/assetDetail",
    GET_DEPOSIT_ADDRESS: "/gateway/address/getAddress",
    CHECK_WITHDRAY_ADDRESS: "/gateway/address/checkAddress",
    DEPOSIT_RECORD_LIST: "/gateway/deposit/recordList",
    DEPOSIT_RECORD_DETAIL: "/gateway/deposit/recordDetail",
    WITHDRAW_RECORD_LIST: "/gateway/withdraw/recordList",
    WITHDRAW_RECORD_DETAIL: "/gateway/withdraw/recordDetail",
    GET_USER_INFO: "/gateway/user/getUserInfo",
    USER_AGREEMENT: "/gateway/user/isAgree",
    WITHDRAW_RULE: "/gateway/withdraw/rule"
};

export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    // DEFAULT_WS_NODE: "ws://127.0.0.1:8090",
    WS_NODE_LIST: [{
            url: "wss://fake.automatic-selection.com",
            location: { translate: "settings.api_closest" }
        },
        {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
        {url: "wss://id.localcoin.is", location: "Indonesia - billpresta3101"},
        {url: "wss://hk.localcoin.is", location: "Hong Kong - vdon61"},
        {url: "wss://sg.localcoin.is", location: "Singapore - mine1412"},
        {url: "wss://us.localcoin.is", location: "US - crazy-indain"},
        {url: "wss://ru1.localcoin.is", location: "Russia - george2607"},
        {url: "wss://ua.localcoin.is", location: "Ukraine - l0l"},
        {url: "wss://de1.localcoin.is", location: "Germany - firedswiss1"},
        {url: "wss://uk.localcoin.is", location: "UK - riggen01"},
        {url: "wss://au.localcoin.is", location: "Australia - ip23"},
        {url: "wss://de.localcoin.is", location: "Germany - W"},
        {url: "wss://fi.localcoin.is", location: "Finland - W"},
        {url: "wss://ru.localcoin.is", location: "Russia - W"},
        {url: "wss://ru2.localcoin.is", location: "Russia"},
        {url: "wss://ru3.localcoin.is", location: "Russia"},
        {url: "wss://ru4.localcoin.is", location: "Russia"},
        {url: "wss://ru5.localcoin.is", location: "Russia"},
        {url: "wss://id1.localcoin.is", location: "Indonesia"},
        {url: "wss://vn.localcoin.is", location: "Vietnam"},
        {url: "wss://vn1.localcoin.is", location: "Vietnam"},
        {url: "wss://vn2.localcoin.is", location: "Vietnam"},
        {url: "wss://vn3.localcoin.is", location: "Vietnam"},
        {url: "wss://in.localcoin.is", location: "India"},
        {url: "wss://in1.localcoin.is", location: "India"},
        {url: "wss://in2.localcoin.is", location: "India"},
        {url: "wss://in3.localcoin.is", location: "India"},
        {url: "wss://hk1.localcoin.is", location: "Hong Kong"},
        {url: "wss://cn.localcoin.is", location: "China"},
        {url: "wss://cn1.localcoin.is", location: "China"},
        {url: "wss://cn2.localcoin.is", location: "China"},
        {url: "wss://cn3.localcoin.is", location: "China"},
        {url: "wss://cn4.localcoin.is", location: "China"},
        {url: "wss://cn5.localcoin.is", location: "China"},
        {url: "wss://nl.localcoin.is", location: "Netherlands"},
        {url: "wss://nl1.localcoin.is", location: "Netherlands"},
        {url: "wss://ch.localcoin.is", location: "Switzerland"},
        {url: "wss://us1.localcoin.is", location: "US"},
        {url: "wss://us2.localcoin.is", location: "US"},
        {url: "wss://us3.localcoin.is", location: "US"},
        {url: "wss://us4.localcoin.is", location: "US"},
        {url: "wss://us5.localcoin.is", location: "US"},
        {url: "wss://ca.localcoin.is", location: "Canada"},
        {url: "wss://ca1.localcoin.is", location: "Canada"},
        {url: "wss://ca2.localcoin.is", location: "Canada"},
        {url: "wss://ar.localcoin.is", location: "Argentina"},
        {url: "wss://ar1.localcoin.is", location: "Argentina"},
        {url: "wss://cl.localcoin.is", location: "Chile"},
        {url: "wss://ve.localcoin.is", location: "Venezuela"},
        {url: "wss://ve1.localcoin.is", location: "Venezuela"},
        {url: "wss://ve2.localcoin.is", location: "Venezuela"},
        {url: "wss://jp.localcoin.is", location: "Japan"},
        {url: "wss://jp1.localcoin.is", location: "Japan"},
        {url: "wss://jp2.localcoin.is", location: "Japan"},
        {url: "wss://au1.localcoin.is", location: "Australia"},
        {url: "wss://au2.localcoin.is", location: "Australia"},
        {url: "wss://nz.localcoin.is", location: "New Zealand"},
        {url: "wss://fr.localcoin.is", location: "France"},
        {url: "wss://uk1.localcoin.is", location: "UK"},
        {url: "wss://uk2.localcoin.is", location: "UK"},
        {url: "wss://ie.localcoin.is", location: "Ireland"},
        {url: "wss://kr.localcoin.is", location: "Korea"},
        {url: "wss://kr1.localcoin.is", location: "Korea"},
        {url: "wss://kr2.localcoin.is", location: "Korea"},
        {url: "wss://it.localcoin.is", location: "Italy"},
        {url: "wss://es.localcoin.is", location: "Spain"},
        {url: "wss://mx.localcoin.is", location: "Mexico"},
        {url: "wss://pl.localcoin.is", location: "Poland"},
        {url: "wss://pk.localcoin.is", location: "Pakistan"},
        {url: "wss://tr.localcoin.is", location: "Turkey"},
        {url: "wss://tr1.localcoin.is", location: "Turkey"},
        {url: "wss://tr2.localcoin.is", location: "Turkey"},
        {url: "wss://tr3.localcoin.is", location: "Turkey"},
        {url: "wss://ua1.localcoin.is", location: "Ukraine"},
        {url: "wss://ua2.localcoin.is", location: "Ukraine"},
        {url: "wss://th.localcoin.is", location: "Thailand"},
        {url: "wss://my.localcoin.is", location: "Malaysia"},
        {url: "wss://ir.localcoin.is", location: "Iran"},
        {url: "wss://ir1.localcoin.is", location: "Iran"},
        {url: "wss://za.localcoin.is", location: "South Africa"},
        {url: "wss://za1.localcoin.is", location: "South Africa"},
        {url: "wss://br.localcoin.is", location: "Brazil"},
        {url: "wss://br1.localcoin.is", location: "Brazil"},
        {url: "wss://br2.localcoin.is", location: "Brazil"}
    ],
    DEFAULT_FAUCET: "https://tapin.localcoin.is", // 2018-12-infrastructure worker proposal
    TESTNET_FAUCET: "https://faucet.testnet.localcoin.is",
    RPC_URL: "https://api.llc.is/apidocs/"
};
