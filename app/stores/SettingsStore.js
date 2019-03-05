import alt from "alt-instance";
import SettingsActions from "actions/SettingsActions";
import IntlActions from "actions/IntlActions";
import Immutable, {fromJS} from "immutable";
import {merge} from "lodash-es";
import ls from "common/localStorage";
import {Apis} from "bitsharesjs-ws";
import {settingsAPIs} from "api/apiConfig";
import {
    getDefaultTheme,
    getDefaultLogin,
    getMyMarketsBases,
    getMyMarketsQuotes,
    getUnits
} from "branding";

const CORE_ASSET = "LLC"; // Setting this to LLC to prevent loading issues when used with LLC chain which is the most usual case currently

const STORAGE_KEY = "__graphene__";
let ss = new ls(STORAGE_KEY);

class SettingsStore {
    constructor() {
        this.exportPublicMethods({
            init: this.init.bind(this),
            getSetting: this.getSetting.bind(this),
            getLastBudgetObject: this.getLastBudgetObject.bind(this),
            setLastBudgetObject: this.setLastBudgetObject.bind(this)
        });

        this.bindListeners({
            onSetExchangeLastExpiration:
                SettingsActions.setExchangeLastExpiration,
            onSetExchangeTutorialShown:
                SettingsActions.setExchangeTutorialShown,
            onChangeSetting: SettingsActions.changeSetting,
            onChangeViewSetting: SettingsActions.changeViewSetting,
            onChangeMarketDirection: SettingsActions.changeMarketDirection,
            onAddStarMarket: SettingsActions.addStarMarket,
            onRemoveStarMarket: SettingsActions.removeStarMarket,
            onClearStarredMarkets: SettingsActions.clearStarredMarkets,
            onAddWS: SettingsActions.addWS,
            onRemoveWS: SettingsActions.removeWS,
            onShowWS: SettingsActions.showWS,
            onHideWS: SettingsActions.hideWS,
            onHideAsset: SettingsActions.hideAsset,
            onHideMarket: SettingsActions.hideMarket,
            onClearSettings: SettingsActions.clearSettings,
            onSwitchLocale: IntlActions.switchLocale,
            onSetUserMarket: SettingsActions.setUserMarket,
            onUpdateLatencies: SettingsActions.updateLatencies,
            onModifyPreferedBases: SettingsActions.modifyPreferedBases
        });

        this.initDone = false;
        this.defaultSettings = Immutable.Map({
            locale: "en",
            apiServer: settingsAPIs.DEFAULT_WS_NODE,
            faucet_address: settingsAPIs.DEFAULT_FAUCET,
            unit: CORE_ASSET,
            showSettles: false,
            showAssetPercent: false,
            walletLockTimeout: 60 * 10,
            themes: "darkTheme",
            passwordLogin: false,
            browser_notifications: {
                allow: true,
                additional: {
                    transferToMe: true
                }
            }
        });

        // If you want a default value to be translated, add the translation to settings in locale-xx.js
        // and use an object {translate: key} in the defaults array
        let apiServer = settingsAPIs.WS_NODE_LIST;

        let defaults = {
            locale: [
                "en",
                "zh",
                "fr",
                "ko",
                "de",
                "es",
                "it",
                "tr",
                "ru",
                "ja"
            ],
            apiServer: apiServer,
            unit: [
                CORE_ASSET
                // "USD", "CNY", "EUR", "GBP",
                // "BTC"
            ],
            showSettles: [{translate: "yes"}, {translate: "no"}],
            showAssetPercent: [{translate: "yes"}, {translate: "no"}],
            themes: ["darkTheme", "lightTheme", "midnightTheme"],
            passwordLogin: [
                {translate: "cloud_login"},
                {translate: "local_wallet"}
            ]
            // confirmMarketOrder: [
            //     {translate: "confirm_yes"},
            //     {translate: "confirm_no"}
            // ]
        };

        this.settings = Immutable.Map(
            merge(this.defaultSettings.toJS(), ss.get("settings_v3"))
        );
        if (this.settings.get("themes") === "olDarkTheme") {
            this.settings = this.settings.set("themes", "midnightTheme");
        }
        let savedDefaults = ss.get("defaults_v1", {});
        /* Fix for old clients after changing cn to zh */
        if (savedDefaults && savedDefaults.locale) {
            let cnIdx = savedDefaults.locale.findIndex(a => a === "cn");
            if (cnIdx !== -1) savedDefaults.locale[cnIdx] = "zh";
        }
        if (savedDefaults && savedDefaults.themes) {
            let olIdx = savedDefaults.themes.findIndex(
                a => a === "olDarkTheme"
            );
            if (olIdx !== -1) savedDefaults.themes[olIdx] = "midnightTheme";
        }

        this.defaults = merge({}, defaults, savedDefaults);

        (savedDefaults.apiServer || []).forEach(api => {
            let hasApi = false;
            if (typeof api === "string") {
                api = {url: api, location: null};
            }
            this.defaults.apiServer.forEach(server => {
                if (server.url === api.url) {
                    hasApi = true;
                }
            });

            if (!hasApi) {
                this.defaults.apiServer.push(api);
            }
        });

        if (
            !savedDefaults ||
            (savedDefaults &&
                (!savedDefaults.apiServer || !savedDefaults.apiServer.length))
        ) {
            for (let i = apiServer.length - 1; i >= 0; i--) {
                let hasApi = false;
                this.defaults.apiServer.forEach(api => {
                    if (api.url === apiServer[i].url) {
                        hasApi = true;
                    }
                });
                if (!hasApi) {
                    this.defaults.apiServer.unshift(apiServer[i]);
                }
            }
        }

        this.viewSettings = Immutable.Map(ss.get("viewSettings_v1"));

        this.marketDirections = Immutable.Map(ss.get("marketDirections"));

        this.hiddenAssets = Immutable.List(ss.get("hiddenAssets", []));
        this.hiddenMarkets = Immutable.List(ss.get("hiddenMarkets", []));

        this.apiLatencies = ss.get("apiLatencies", {});

        this.mainnet_faucet = ss.get(
            "mainnet_faucet",
            settingsAPIs.DEFAULT_FAUCET
        );
        this.testnet_faucet = ss.get(
            "testnet_faucet",
            settingsAPIs.TESTNET_FAUCET
        );

        this.exchange = fromJS(ss.get("exchange", {}));
    }

    init() {
        return new Promise(resolve => {
            if (this.initDone) resolve();
            this.starredKey = this._getChainKey("markets");
            this.marketsKey = this._getChainKey("userMarkets");
            this.basesKey = this._getChainKey("preferredBases");

            // Default markets setup
            let topMarkets = {
                markets_4018d784: getMyMarketsQuotes(),
                markets_39f5e2ed: [
                    // TESTNET
                    "PEG.FAKEUSD",
                    "BTWTY"
                ]
            };

            let bases = {
                markets_4018d784: getMyMarketsBases(),
                markets_39f5e2ed: [
                    // TESTNET
                    "TEST"
                ]
            };

            let coreAssets = {
                markets_4018d784: "BTS",
                markets_39f5e2ed: "TEST"
            };
            let coreAsset = coreAssets[this.starredKey] || "LLC";
            this.defaults.unit[0] = coreAsset;

            let defaultBases = bases[this.starredKey] || bases.markets_4018d784;
            let storedBases = ss.get(this.basesKey, []);

            this.preferredBases = Immutable.List(
                storedBases.length ? storedBases : defaultBases
            );
            let chainBases = bases[this.starredKey] || [];
            //this.preferredBases = Immutable.List(chainBases);

            function addMarkets(target, base, markets) {
                markets
                    .filter(a => {
                        return a !== base;
                    })
                    .forEach(market => {
                        target.push([
                            `${market}_${base}`,
                            {quote: market, base: base}
                        ]);
                    });
            }

            this.chainMarkets = topMarkets[this.starredKey] || [];

            let defaultMarkets = this._getDefaultMarkets();
            this.defaultMarkets = Immutable.Map(defaultMarkets);
            this.starredMarkets = Immutable.Map(ss.get(this.starredKey, []));
            this.userMarkets = Immutable.Map(ss.get(this.marketsKey, {}));

            this.initDone = true;
            resolve();
        });
    }

    getSetting(setting) {
        return this.settings.get(setting);
    }

    onChangeSetting(payload) {
        this.settings = this.settings.set(payload.setting, payload.value);

        switch (payload.setting) {
            case "faucet_address":
                if (payload.value.indexOf("testnet") === -1) {
                    this.mainnet_faucet = payload.value;
                    ss.set("mainnet_faucet", payload.value);
                } else {
                    this.testnet_faucet = payload.value;
                    ss.set("testnet_faucet", payload.value);
                }
                break;

            case "apiServer":
                let faucetUrl =
                    payload.value.indexOf("testnet") !== -1
                        ? this.testnet_faucet
                        : this.mainnet_faucet;
                this.settings = this.settings.set("faucet_address", faucetUrl);
                break;

            case "walletLockTimeout":
                ss.set("lockTimeout", payload.value);
                break;

            default:
                break;
        }

        ss.set("settings_v3", this.settings.toJS());
    }

    onChangeViewSetting(payload) {
        for (let key in payload) {
            this.viewSettings = this.viewSettings.set(key, payload[key]);
        }

        ss.set("viewSettings_v1", this.viewSettings.toJS());
    }

    onChangeMarketDirection(payload) {
        for (let key in payload) {
            if (payload[key]) {
                this.marketDirections = this.marketDirections.set(
                    key,
                    payload[key]
                );
            } else {
                this.marketDirections = this.marketDirections.delete(key);
            }
        }
        ss.set("marketDirections", this.marketDirections.toJS());
    }

    onHideAsset(payload) {
        if (payload.id) {
            if (!payload.status) {
                this.hiddenAssets = this.hiddenAssets.delete(
                    this.hiddenAssets.indexOf(payload.id)
                );
            } else {
                this.hiddenAssets = this.hiddenAssets.push(payload.id);
            }
        }

        ss.set("hiddenAssets", this.hiddenAssets.toJS());
    }

    onHideMarket(payload) {
        if (payload.id) {
            if (!payload.status) {
                this.hiddenMarkets = this.hiddenMarkets.delete(
                    this.hiddenMarkets.indexOf(payload.id)
                );
            } else {
                this.hiddenMarkets = this.hiddenMarkets.push(payload.id);
            }
        }

        ss.set("hiddenMarkets", this.hiddenMarkets.toJS());
    }

    onAddStarMarket(market) {
        let marketID = market.quote + "_" + market.base;
        if (!this.starredMarkets.has(marketID)) {
            this.starredMarkets = this.starredMarkets.set(marketID, {
                quote: market.quote,
                base: market.base
            });

            ss.set(this.starredKey, this.starredMarkets.toJS());
        } else {
            return false;
        }
    }

    onSetUserMarket(payload) {
        let marketID = payload.quote + "_" + payload.base;
        if (payload.value) {
            this.userMarkets = this.userMarkets.set(marketID, {
                quote: payload.quote,
                base: payload.base
            });
        } else {
            this.userMarkets = this.userMarkets.delete(marketID);
        }
        ss.set(this.marketsKey, this.userMarkets.toJS());
    }

    onRemoveStarMarket(market) {
        let marketID = market.quote + "_" + market.base;

        this.starredMarkets = this.starredMarkets.delete(marketID);

        ss.set(this.starredKey, this.starredMarkets.toJS());
    }

    onClearStarredMarkets() {
        this.starredMarkets = Immutable.Map({});
        ss.set(this.starredKey, this.starredMarkets.toJS());
    }

    onAddWS(ws) {
        if (typeof ws === "string") {
            ws = {url: ws, location: null};
        }
        this.defaults.apiServer.push(ws);
        ss.set("defaults_v1", this.defaults);
    }

    onRemoveWS(index) {
        this.defaults.apiServer.splice(index, 1);
        ss.set("defaults_v1", this.defaults);
    }

    onHideWS(url) {
        let node = this.defaults.apiServer.find(node => node.url === url);
        node.hidden = true;
        ss.set("defaults_v1", this.defaults);
    }

    onShowWS(url) {
        let node = this.defaults.apiServer.find(node => node.url === url);
        node.hidden = false;
        ss.set("defaults_v1", this.defaults);
    }

    onClearSettings(resolve) {
        ss.remove("settings_v3");
        this.settings = this.defaultSettings;

        ss.set("settings_v3", this.settings.toJS());

        if (resolve) {
            resolve();
        }
    }

    onSwitchLocale({locale}) {
        this.onChangeSetting({setting: "locale", value: locale});
    }

    _getChainKey(key) {
        const chainId = Apis.instance().chain_id;
        return key + (chainId ? `_${chainId.substr(0, 8)}` : "");
    }

    onUpdateLatencies(latencies) {
        ss.set("apiLatencies", latencies);
        this.apiLatencies = latencies;
    }

    getLastBudgetObject() {
        return ss.get(this._getChainKey("lastBudgetObject"), "2.13.1");
    }

    setLastBudgetObject(value) {
        ss.set(this._getChainKey("lastBudgetObject"), value);
    }

    setExchangeSettings(key, value) {
        this.exchange = this.exchange.set(key, value);

        ss.set("exchange", this.exchange.toJS());
    }

    getExchangeSettings(key) {
        return this.exchange.get(key);
    }

    onSetExchangeLastExpiration(value) {
        this.setExchangeSettings("lastExpiration", fromJS(value));
    }

    onSetExchangeTutorialShown(value) {
        this.setExchangeSettings("tutorialShown", value);
    }

    getExhchangeLastExpiration() {
        return this.getExchangeSettings("lastExpiration");
    }

    onModifyPreferedBases(payload) {
        if ("newIndex" in payload && "oldIndex" in payload) {
            /* Reorder */
            let current = this.preferredBases.get(payload.newIndex);
            this.preferredBases = this.preferredBases.set(
                payload.newIndex,
                this.preferredBases.get(payload.oldIndex)
            );
            this.preferredBases = this.preferredBases.set(
                payload.oldIndex,
                current
            );
        } else if ("remove" in payload) {
            /* Remove */
            this.preferredBases = this.preferredBases.delete(payload.remove);
            let defaultMarkets = this._getDefaultMarkets();
            this.defaultMarkets = Immutable.Map(defaultMarkets);
        } else if ("add" in payload) {
            /* Add new */
            this.preferredBases = this.preferredBases.push(payload.add);
            let defaultMarkets = this._getDefaultMarkets();
            this.defaultMarkets = Immutable.Map(defaultMarkets);
        }

        ss.set(this.basesKey, this.preferredBases.toArray());
    }

    _getDefaultMarkets() {
        let markets = [];

        this.preferredBases.forEach(base => {
            addMarkets(markets, base, this.chainMarkets);
        });

        function addMarkets(target, base, markets) {
            markets
                .filter(a => {
                    return a !== base;
                })
                .forEach(market => {
                    target.push([
                        `${market}_${base}`,
                        {quote: market, base: base}
                    ]);
                });
        }

        return markets;
    }
}

export default alt.createStore(SettingsStore, "SettingsStore");
