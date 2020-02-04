export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://de.localcoin.is",
    WS_NODE_LIST: [
        {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
        {url: "wss://chippawa-for-life.com", location: "US Denver by crazy-indain"},
        {url: "wss://de.localcoin.is", location: "Germany"},
        {url: "wss://de2.localcoin.is", location: "Germany activenode"},
        {url: "wss://llcnode.buycoinbot.com", location: "Germany by BuyCoinFast"},
        {url: "wss://node.gate.is", location: "Africa"},
        {url: "wss://fi.localcoin.is", location: "Finland"},
        {url: "wss://ru.localcoin.is", location: "Russia"}
    ],
    DEFAULT_FAUCET: "https://faucet.localcoin.is", // 2018-12-infrastructure worker proposal
    TESTNET_FAUCET: "https://faucet.testnet.localcoin.is",
    RPC_URL: "https://api.llc.is/apidocs/"
};
