import {hot} from "react-hot-loader";
import Trigger from "react-foundation-apps/src/trigger";
import React from "react";
import {ChainStore} from "bitsharesjs/es";
import IntlStore from "stores/IntlStore";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import IntlActions from "actions/IntlActions";
import NotificationStore from "stores/NotificationStore";
import intlData from "./components/Utility/intlData";
import alt from "alt-instance";
import {connect, supplyFluxContext} from "alt-react";
import {IntlProvider} from "react-intl";
import SyncError from "./components/SyncError";
import DynamicDataTip from "./components/DynamicDataTip";
//import RoutingEvents from "./components/RoutingEvents";
import FastLoader from "./components/FastLoader";
import DelayedExecution from "./components/DelayedExecution";
import LoadingIndicator from "./components/LoadingIndicator";
import BrowserNotifications from "./components/BrowserNotifications/BrowserNotificationsContainer";
import Header from "components/Layout/Header";
import ReactTooltip from "react-tooltip";
import NotificationSystem from "react-notification-system";
import TransactionConfirm from "./components/Blockchain/TransactionConfirm";
import WalletUnlockModal from "./components-brand-new/Wallet/WalletUnlockModal";
import BrowserSupportModal from "./components/Modal/BrowserSupportModal";
import Footer from "./components/Layout/Footer";
import Deprecate from "./Deprecate";
import WalletManagerStore from "stores/WalletManagerStore";
import Incognito from "./components/Layout/Incognito";
import {isIncognito} from "feature_detect";
import {updateGatewayBackers} from "common/gatewayUtils";
import titleUtils from "common/titleUtils";
import PropTypes from "prop-types";
import Modal from "react-foundation-apps/src/modal";
import Translate from "react-translate-component";
import BaseModal from "./components/Modal/BaseModal";
import Icon from "./components/Icon/Icon";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import counterpart from "counterpart";

class App extends React.Component {
    constructor(props) {
        super();

        let syncFail =
            ChainStore.subError &&
            ChainStore.subError.message ===
                "ChainStore sync error, please check your system clock"
                ? true
                : false;

        this.state = {
            loading: false,
            synced: this._syncStatus(),
            syncFail,
            theme: SettingsStore.getState().settings.get("themes"),
            incognito: false,
            incognitoWarningDismissed: false,
            height: window && window.innerHeight
        };

        this._rebuildTooltips = this._rebuildTooltips.bind(this);
        this._onSettingsChange = this._onSettingsChange.bind(this);
        this._chainStoreSub = this._chainStoreSub.bind(this);
        this._syncStatus = this._syncStatus.bind(this);
        this._getWindowHeight = this._getWindowHeight.bind(this);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._getWindowHeight);
        NotificationStore.unlisten(this._onNotificationChange);
        SettingsStore.unlisten(this._onSettingsChange);
        ChainStore.unsubscribe(this._chainStoreSub);
        clearInterval(this.syncCheckInterval);
    }

    _syncStatus(setState = false) {
        let synced = true;
        let dynGlobalObject = ChainStore.getObject("2.1.0");
        if (dynGlobalObject) {
            let block_time = dynGlobalObject.get("time");
            if (!/Z$/.test(block_time)) {
                block_time += "Z";
            }

            let bt =
                (new Date(block_time).getTime() +
                    ChainStore.getEstimatedChainTimeOffset()) /
                1000;
            let now = new Date().getTime() / 1000;
            synced = Math.abs(now - bt) < 5;
        }
        if (setState && synced !== this.state.synced) {
            this.setState({synced});
        }
        return synced;
    }

    _setListeners() {
        try {
            window.addEventListener("resize", this._getWindowHeight, {
                capture: false,
                passive: true
            });
            NotificationStore.listen(this._onNotificationChange.bind(this));
            SettingsStore.listen(this._onSettingsChange);
            ChainStore.subscribe(this._chainStoreSub);
            AccountStore.tryToSetCurrentAccount();
        } catch (e) {
            console.error("e:", e);
        }
    }

    componentDidMount() {
        this._setListeners();
        this.syncCheckInterval = setInterval(this._syncStatus, 5000);
        const user_agent = navigator.userAgent.toLowerCase();
        if (
            !(
                window.electron ||
                user_agent.indexOf("firefox") > -1 ||
                user_agent.indexOf("chrome") > -1 ||
                user_agent.indexOf("edge") > -1
            )
        ) {
            this.refs.browser_modal.show();
        }

        this.props.router.listen(this._rebuildTooltips);

        this._rebuildTooltips();

        isIncognito(
            function(incognito) {
                this.setState({incognito});
            }.bind(this)
        );
        updateGatewayBackers();

        if(typeof window.electron !== "undefined")
            this.checkUpdate();
    }

    /**
     * Compares two software version numbers (e.g. "1.7.1" or "1.2b").
     *
     * This function was born in http://stackoverflow.com/a/6832721.
     *
     * @param {string} v1 The first version to be compared.
     * @param {string} v2 The second version to be compared.
     * @param {object} [options] Optional flags that affect comparison behavior:
     * lexicographical: (true/[false]) compares each part of the version strings lexicographically instead of naturally; 
     *                  this allows suffixes such as "b" or "dev" but will cause "1.10" to be considered smaller than "1.2".
     * zeroExtend: ([true]/false) changes the result if one version string has less parts than the other. In
     *             this case the shorter string will be padded with "zero" parts instead of being considered smaller.
     *
     * @returns {number|NaN}
     * - 0 if the versions are equal
     * - a negative integer iff v1 < v2
     * - a positive integer iff v1 > v2
     * - NaN if either version string is in the wrong format
     */ 
    versionCompare(v1, v2, options) {
        var lexicographical = (options && options.lexicographical) || false,
            zeroExtend = (options && options.zeroExtend) || true,
            v1parts = (v1 || "0").split('.'),
            v2parts = (v2 || "0").split('.');
    
        function isValidPart(x) {
            return (lexicographical ? /^\d+[A-Za-zαß]*$/ : /^\d+[A-Za-zαß]?$/).test(x);
        }
    
        if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
            return NaN;
        }
    
        if (zeroExtend) {
            while (v1parts.length < v2parts.length) v1parts.push("0");
            while (v2parts.length < v1parts.length) v2parts.push("0");
        }
    
        if (!lexicographical) {
            v1parts = v1parts.map(function(x){
                var match = (/[A-Za-zαß]/).exec(x);  
                return Number(match ? x.replace(match[0], "." + x.charCodeAt(match.index)):x);
            });
            v2parts = v2parts.map(function(x){
                var match = (/[A-Za-zαß]/).exec(x);  
                return Number(match ? x.replace(match[0], "." + x.charCodeAt(match.index)):x);
            });
        }
    
        for (var i = 0; i < v1parts.length; ++i) {
            if (v2parts.length == i) {
                return 1;
            }
        
            if (v1parts[i] == v2parts[i]) {
                continue;
            }
            else if (v1parts[i] > v2parts[i]) {
                return 1;
            }
            else {
                return -1;
            }
        }
    
        if (v1parts.length != v2parts.length) {
            return -1;
        }
    
        return 0;
    }

    checkUpdate = () => {
        const remoteVersionUrl = "https://raw.githubusercontent.com/LocalCoinIS/LocalCoin-ui/live/version.json?t="+Date.now();
        
        const localVersion = require('../version.json');
        if(typeof localVersion.current_version === "undefined") return;

        fetch(remoteVersionUrl)
            .then(res => {
                return res.json();
            })
            .then((remoteVersion) => {
                if(typeof remoteVersion.last_build_version === "undefined") return;

                if(this.versionCompare(remoteVersion.last_build_version, localVersion.current_version) === 1) {
                    ZfApi.publish("update_modal_notify", "open");
                }
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        document.title = titleUtils.GetTitleByPath(
            this.props.router.location.pathname
        );
    }

    _onIgnoreIncognitoWarning() {
        this.setState({incognitoWarningDismissed: true});
    }

    _rebuildTooltips() {
        if (this.rebuildTimeout) return;
        ReactTooltip.hide();

        this.rebuildTimeout = setTimeout(() => {
            if (this.refs.tooltip) {
                this.refs.tooltip.globalRebuild();
            }
            this.rebuildTimeout = null;
        }, 1500);
    }

    _chainStoreSub() {
        let synced = this._syncStatus();
        if (synced !== this.state.synced) {
            this.setState({synced});
        }
        if (
            ChainStore.subscribed !== this.state.synced ||
            ChainStore.subError
        ) {
            let syncFail =
                ChainStore.subError &&
                ChainStore.subError.message ===
                    "ChainStore sync error, please check your system clock"
                    ? true
                    : false;
            this.setState({
                syncFail
            });
        }
    }

    /** Usage: NotificationActions.[success,error,warning,info] */
    _onNotificationChange() {
        let notification = NotificationStore.getState().notification;
        if (notification.autoDismiss === void 0) {
            notification.autoDismiss = 10;
        }
        if (this.refs.notificationSystem)
            this.refs.notificationSystem.addNotification(notification);
    }

    _onSettingsChange() {
        let {settings} = SettingsStore.getState();
        if (settings.get("themes") !== this.state.theme) {
            this.setState({
                theme: settings.get("themes")
            });
        }
    }

    _getWindowHeight() {
        this.setState({height: window && window.innerHeight});
    }

    // /** Non-static, used by passing notificationSystem via react Component refs */
    // _addNotification(params) {
    //     console.log("add notification:", this.refs, params);
    //     this.refs.notificationSystem.addNotification(params);
    // }

    downloadVersion() {
        var a = document.createElement("a");
        a.href = "https://localcoin.is/#download";
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.style = "display: none;";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    render() {        
        const {
            headerBlock,
            sidebarBlock,
            contentBlock,
            footerBlock
        } = this.props; // !!!
        let {theme, incognito, incognitoWarningDismissed} = this.state;
        let {walletMode} = this.props;

        let content = null;

        let showFooter = 1;

        if (this.state.syncFail) {
            content = <SyncError />;
        } else if (this.state.loading) {
            content = (
                <div className="grid-frame vertical">
                    <LoadingIndicator
                        loadingText={"Connecting to APIs and starting app"}
                    />
                </div>
            );
        } else if (this.props.location.pathname === "/init-error") {
            content = (
                <div className="grid-frame vertical">{this.props.children}</div>
            );
        } else if (__DEPRECATED__) {
            content = <Deprecate {...this.props} />;
        } else {
            content = (
                <div className="grid-frame vertical">
                    <Header height={this.state.height} />
                    <div className="grid-block">
                        <div className="grid-block vertical">
                            {this.props.children}
                        </div>
                    </div>
                    {showFooter ? <Footer synced={this.state.synced} /> : null}
                </div>
            );
        }

        const modalUpdate = (
            <BaseModal
                id="update_modal_notify"
                overlay={true}
                overlayClose={true}
                ref="modal"
            >
                <div style={{ textAlign: "center" }}>
                    <br />
                    <h3>{counterpart.translate("icons.download")}</h3>
                    
                    <div style={{ marginTop: "19px" }} className="button success btn large inverted" onClick={this.downloadVersion.bind(this)}>
                        {counterpart.translate("wallet.download")}
                    </div>
                </div>
            </BaseModal>
        );

        // !!! если есть эти блоки, значит новый лейаут
        if (
            !!headerBlock &&
            // !!sidebarBlock && // может быть null на некоторых страницах
            !!contentBlock &&
            !!footerBlock
        ) {
            return (
                <div>
                    { modalUpdate }
                    {walletMode && incognito && !incognitoWarningDismissed ? (
                        <Incognito
                            onClickIgnore={this._onIgnoreIncognitoWarning.bind(
                                this
                            )}
                        />
                    ) : null}
                    {headerBlock}
                    <main className="main">
                        {sidebarBlock}
                        {contentBlock}
                    </main>
                    {React.cloneElement(footerBlock, {
                        synced: this.state.synced
                    })}
                    <NotificationSystem
                        ref="notificationSystem"
                        allowHTML={true}
                        style={{
                            Containers: {
                                DefaultStyle: {
                                    width: "425px"
                                }
                            }
                        }}
                    />
                    <TransactionConfirm />
                    <BrowserNotifications />
                    <WalletUnlockModal />
                    <BrowserSupportModal ref="browser_modal" />
                    <ReactTooltip
                        ref="tooltip"
                        place="top"
                        type={theme === "lightTheme" ? "dark" : "light"}
                        effect="solid"
                    />
                </div>
            );
        }

        return (
            <div
                style={{backgroundColor: !this.state.theme ? "#2a2a2a" : null}}
                className={this.state.theme}
            >
                { modalUpdate }
                {walletMode && incognito && !incognitoWarningDismissed ? (
                    <Incognito
                        onClickIgnore={this._onIgnoreIncognitoWarning.bind(
                            this
                        )}
                    />
                ) : null}
                <div id="content-wrapper">
                    {content}
                    <NotificationSystem
                        ref="notificationSystem"
                        allowHTML={true}
                        style={{
                            Containers: {
                                DefaultStyle: {
                                    width: "425px"
                                }
                            }
                        }}
                    />
                    <TransactionConfirm />
                    <BrowserNotifications />
                    <WalletUnlockModal />
                    <BrowserSupportModal ref="browser_modal" />
                    <ReactTooltip
                        ref="tooltip"
                        place="top"
                        type={theme === "lightTheme" ? "dark" : "light"}
                        effect="solid"
                    />
                </div>
            </div>
        );
    }
}

class RootIntl extends React.Component {
    componentWillMount() {
        IntlActions.switchLocale(this.props.locale);
    }

    render() {
        return (
            <IntlProvider
                locale={this.props.locale}
                formats={intlData.formats}
                initialNow={Date.now()}
            >
                <App {...this.props} />
            </IntlProvider>
        );
    }
}

RootIntl = connect(
    RootIntl,
    {
        listenTo() {
            return [IntlStore, WalletManagerStore, SettingsStore];
        },
        getProps() {
            return {
                locale: IntlStore.getState().currentLocale,
                walletMode:
                    !SettingsStore.getState().settings.get("passwordLogin") ||
                    !!WalletManagerStore.getState().current_wallet
            };
        }
    }
);

class Root extends React.Component {
    static childContextTypes = {
        router: PropTypes.object,
        location: PropTypes.object
    };

    componentDidMount() {
        //Detect OS for platform specific fixes
        if (navigator.platform.indexOf("Win") > -1) {
            var main = document.getElementById("content");
            var windowsClass = "windows";
            if (main.className.indexOf("windows") === -1) {
                main.className =
                    main.className +
                    (main.className.length ? " " : "") +
                    windowsClass;
            }
        }

        //new DynamicDataTip().register();

/*         var self = this;
        let re = new RoutingEvents(this.props.router);
        re.register();
        setInterval(function() {
            re.updateRouter(self.props.router);
        }, 500); */

        document.fastLoader = new FastLoader();
        document.delayedExecution = new DelayedExecution();
    }

    getChildContext() {
        return {
            router: this.props.router,
            location: this.props.location
        };
    }

    render() {
        return <RootIntl {...this.props} />;
    }
}

Root = supplyFluxContext(alt)(Root);
export default hot(module)(Root);
