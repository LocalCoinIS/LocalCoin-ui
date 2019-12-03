import React, { Component } from "react";
import AltContainer from "alt-container";
import Translate from "react-translate-component";
import BindToChainState from "../../components/Utility/BindToChainState";
import ChainTypes from "../../components/Utility/ChainTypes";
import CachedPropertyStore from "stores/CachedPropertyStore";
import BlockchainStore from "stores/BlockchainStore";
import WalletDb from "stores/WalletDb";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import AccessSettings from "../../components/Settings/AccessSettings";
import Icon from "../../components/Icon/Icon";
import counterpart from "counterpart";
import "intro.js/introjs.css";
import guide from "intro.js";
import PropTypes from "prop-types";
import AccountStore from "stores/AccountStore";

class Footer extends React.Component {
    static propTypes = {
        dynGlobalObject: ChainTypes.ChainObject.isRequired,
        synced: PropTypes.bool.isRequired
    };

    static defaultProps = {
        dynGlobalObject: "2.1.0"
    };

    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            showNodesPopup : false,
            connected      : this.isConnected()
        };
    }

    isConnected = () => !(BlockchainStore.getState().rpc_connection_status === "closed");

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.dynGlobalObject !== this.props.dynGlobalObject ||
            nextProps.backup_recommended !== this.props.backup_recommended ||
            nextProps.rpc_connection_status !==
            this.props.rpc_connection_status ||
            nextProps.synced !== this.props.synced ||
            nextState.showNodesPopup !== this.state.showNodesPopup
        );
    }

    downloadVersion() {
        var a = document.createElement("a");
        a.href = this.downloadLink;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.style = "display: none;";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    launchIntroJS() {
        const translator = require("counterpart");

        var hintData = document.querySelectorAll("[data-intro]");
        var theme = SettingsStore.getState().settings.get("themes");

        if (hintData.length == 0) {
            window.open("/help", "_blank");
        } else {
            guide
                .introJs()
                .setOptions({
                    tooltipClass: theme,
                    highlightClass: theme,
                    showBullets: false,
                    hideNext: true,
                    hidePrev: true,
                    nextLabel: translator.translate("walkthrough.next_label"),
                    prevLabel: translator.translate("walkthrough.prev_label"),
                    skipLabel: translator.translate("walkthrough.skip_label"),
                    doneLabel: translator.translate("walkthrough.done_label")
                })
                .start();
        }
    }

    getNodeIndexByURL(url) {
        let nodes = this.props.defaults.apiServer;

        let index = nodes.findIndex(node => node.url === url);
        if (index === -1) {
            return null;
        }
        return index;
    }

    getCurrentNodeIndex() {
        const { props } = this;
        let currentNode = this.getNodeIndexByURL.call(this, props.currentNode);

        return currentNode;
    }

    getNode(node) {
        const { props } = this;

        return {
            name: node.location || "Unknown location",
            url: node.url,
            up: node.url in props.apiLatencies,
            ping: props.apiLatencies[node.url],
            hidden: !!node.hidden
        };
    }

    chatToggle(e) {
        e.preventDefault();
        let chatBro = document.querySelector(".chatbro_chat");
        if (chatBro && chatBro.classList.contains("chatbro_opacity")) {
            document.querySelector(".chatbro_minimize_button").click();
        } else {
            if (chatBro) {
                document.querySelector(".chatbro_minimized_header .chatbro_header_caption_td").click();
            }
        }
    }

    _onNavigate(route, e) {
        e.preventDefault();
        if (
            route !== "/" &&
            route !== "/settings/general" &&
            this.isUnauthorizedUser(route)
        )
            return;

        // Set Accounts Tab as active tab
        if (route == "/accounts") {
            SettingsActions.changeViewSetting({
                dashboardEntry: "accounts"
            });
        }

        this.context.router.push(route);
    }



    _createAccountLink = null;
    isUnauthorizedUser(route) {
        //for exchange allow access forever
        let currentAccount = AccountStore.getState().currentAccount;
        if (typeof route !== "undefined" && route.indexOf("/market/") === 0)
            return false;

        if (!currentAccount || !!this._createAccountLink) {
            this.props.router.push("/create-account/wallet");
            return true;
        }

        return false;
    }

    render() {
        const autoSelectAPI = "wss://fake.automatic-selection.com";
        const { state, props } = this;
        const { synced } = props;

        // Current Node Details
        let nodes = this.props.defaults.apiServer;
        let getNode = this.getNode.bind(this);
        let currentNodeIndex = this.getCurrentNodeIndex.call(this);

        let activeNode = getNode(nodes[currentNodeIndex] || nodes[0]);

        if (activeNode.url == autoSelectAPI) {
            let nodeUrl = props.activeNode;
            currentNodeIndex = this.getNodeIndexByURL.call(this, nodeUrl);
            activeNode = getNode(nodes[currentNodeIndex]);
        }

        let block_height = this.props.dynGlobalObject.get("head_block_number");
        let version_match = APP_VERSION.match(/2\.0\.(\d\w+)/);
        let version = version_match
            ? `.${version_match[1]}`
            : ` ${APP_VERSION}`;
        let updateStyles = { display: "inline-block", verticalAlign: "top" };
        let logoProps = {};

        let currentAccount = AccountStore.getState().currentAccount;

        return (
            <footer className="footer">
                <div className="footer-line">
                    <div className="footer-left">
                        <button
                            className="btn large inverted flat support-btn"
                            type="button"
                            onClick={this._onNavigate.bind(
                                this,
                                `/account/${currentAccount}/create-asset/`
                            )}
                        >
                            <Translate content="footer.add_coin" />
                        </button>
                        <button
                            className="btn large inverted flat support-btn"
                            type="button"
                            onClick={this._onNavigate.bind(
                                this,
                                `/account/${currentAccount}/create-asset/`
                            )}
                        >
                            <Translate content="footer.ieo" />
                        </button>
                    </div>
                    <div className="footer-right">
                        <Social />
                        <button
                            className="btn large inverted flat support-btn"
                            type="button"
                            onClick={this.chatToggle.bind(this)}
                        >
                            Chat
                        </button>
                        <div
                            className="footer-info"
                            onClick={() => {
                                this.setState({ showNodesPopup: true });
                            }}
                        >
                            <div
                                onMouseEnter={() => {
                                    this.setState({ showNodesPopup: true });
                                }}
                                onMouseLeave={() => {
                                    this.setState({ showNodesPopup: false });
                                }}
                                className="node-access-popup"
                                style={{
                                    display: this.state.showNodesPopup ? "" : "none"
                                }}
                            >
                                <AccessSettings
                                    nodes={this.props.defaults.apiServer}
                                    popup={true}
                                />
                                <div style={{ paddingTop: 15 }}>
                                    <a onClick={this.onAccess.bind(this)}>
                                        <Translate content="footer.advanced_settings" />
                                    </a>
                                </div>
                            </div>
                            <span
                                className="footer-info__status"
                                onClick={e => {
                                    e.preventDefault();
                                    this.context.router.push("/settings/access");
                                }}
                            >
                                {!this.state.connected
                                    ? counterpart.translate("footer.disconnected")
                                    : activeNode.name}
                            </span>
                            <span className="footer-info__data">
                                <span>
                                    {counterpart.translate("footer.latency")}
                                    &nbsp;
                                    {!this.state.connected
                                        ? "-"
                                        : !activeNode.ping
                                            ? "-"
                                            : activeNode.ping + "ms"}
                                &nbsp;
                                </span>
                                /&nbsp;
                                {counterpart.translate("footer.block")}
                                &nbsp;#
                                {block_height}
                            </span>
                        </div>
                        <button
                            className="btn large inverted flat support-btn"
                            type="button"
                            onClick={e => {
                                e.preventDefault();
                                this.context.router.push("/help");
                            }}
                        >
                            {counterpart.translate("global.help")}
                        </button>
                    </div>
                </div>
            </footer>
        );
    }

    onBackup() {
        this.context.router.push("/wallet/backup/create");
    }

    onBackupBrainkey() {
        this.context.router.push("/wallet/backup/brainkey");
    }

    onPopup() {
        this.setState({
            showNodesPopup: !this.state.showNodesPopup
        });
    }

    onAccess() {
        SettingsActions.changeViewSetting({ activeSetting: 6 });
        this.context.router.push("/settings/access");
    }
}
Footer = BindToChainState(Footer);

class Social extends Component {
    render() {
        let socialArr = [
            { item: "btc", href: "https://bitcointalk.org/index.php?topic=5125670", img: "btc" },
            { item: "vk", href: "https://vk.com/localcoin", img: "vk" },
            { item: "tm", href: "https://t.me/LocalCoinIS", img: "tm" },
            { item: "discord", href: "https://discord.gg/vzxSzYN", img: "s-584" },
            { item: "medium", href: "https://medium.com/@localcoinis", img: "m-1" },
            { item: "golos", href: "https://golos.io/@localcoin", img: "s-574" },
            { item: "reddit", href: "https://www.reddit.com/r/LocalCoinIs", img: "redd" },
            { item: "steemit", href: "https://steemit.com/@localcoin", img: "s-576" },
            { item: "twitter", href: "https://twitter.com/LocalCoinIS", img: "tw" },
            { item: "coinmarket", href: "https://coinmarketcap.com/exchanges/localcoin-dex/", img: "cmc" },
        ];

        let list = socialArr.map((item, i) => {
            return (
                <li className="social__item">
                    <a key={item.item} href={item.href} className={`social__link ${item.item}`} target="_blank">
                        <Icon name={item.img}/>
                    </a>
                </li>
            );
        });

        return (
            <div className="social">
                <ul className="social__list">
                    {list}
                </ul>
            </div >
        );
    }
}

class AltFooter extends Component {
    render() {
        var wallet = WalletDb.getWallet();
        return (
            <AltContainer
                stores={[
                    CachedPropertyStore,
                    BlockchainStore,
                    WalletDb,
                    SettingsStore
                ]}
                inject={{
                    defaults: () => {
                        return SettingsStore.getState().defaults;
                    },
                    apiLatencies: () => {
                        return SettingsStore.getState().apiLatencies;
                    },
                    currentNode: () => {
                        return SettingsStore.getState().settings.get(
                            "apiServer"
                        );
                    },
                    activeNode: () => {
                        return SettingsStore.getState().settings.get(
                            "activeNode"
                        );
                    },
                    backup_recommended: () =>
                        wallet &&
                        (!wallet.backup_date ||
                            CachedPropertyStore.get("backup_recommended")),
                    rpc_connection_status: () =>
                        BlockchainStore.getState().rpc_connection_status
                }}
            >
                <Footer {...this.props} />
            </AltContainer>
        );
    }
}

export default AltFooter;
