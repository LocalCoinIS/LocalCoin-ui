import React, {Component} from "react";
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
            showNodesPopup: false
        };
    }

    componentDidMount() {
        this.checkNewVersionAvailable.call(this);

        this.downloadLink = "https://bitshares.org/download";
    }

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

    checkNewVersionAvailable() {
        if (__ELECTRON__) {
            fetch(
                "https://api.github.com/repos/bitshares/bitshares-ui/releases/latest"
            )
                .then(res => {
                    return res.json();
                })
                .then(
                    function(json) {
                        let oldVersion = String(json.tag_name);
                        let newVersion = String(APP_VERSION);
                        if (oldVersion !== newVersion) {
                            this.setState({newVersion});
                        }
                    }.bind(this)
                );
        }
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
            window.open(
                "http://docs.bitshares.org/bitshares/user/index.html",
                "_blank"
            );
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
        const {props} = this;
        let currentNode = this.getNodeIndexByURL.call(this, props.currentNode);

        return currentNode;
    }

    getNode(node) {
        const {props} = this;

        return {
            name: node.location || "Unknown location",
            url: node.url,
            up: node.url in props.apiLatencies,
            ping: props.apiLatencies[node.url],
            hidden: !!node.hidden
        };
    }

    render() {
        const autoSelectAPI = "wss://fake.automatic-selection.com";
        const {state, props} = this;
        const {synced} = props;
        const connected = !(this.props.rpc_connection_status === "closed");

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
        let updateStyles = {display: "inline-block", verticalAlign: "top"};
        let logoProps = {};

        return (
            <footer className="footer">
                <div className="footer-line">
                    <div className="footer-info">
                        <span className="footer-info__status">
                            {!connected
                                ? counterpart.translate("footer.disconnected")
                                : activeNode.name}
                        </span>
                        <span className="footer-info__data">
                            {counterpart.translate("footer.latency")}
                            &nbsp;{!connected
                                ? "-"
                                : !activeNode.ping
                                    ? "-"
                                    : activeNode.ping + "ms"}&nbsp;/&nbsp;
                            {counterpart.translate("footer.block")}
                            &nbsp;#{block_height}
                        </span>
                    </div>
                    <button
                        className="btn large inverted flat support-btn"
                        type="button"
                    >
                        {counterpart.translate("global.help")}
                    </button>
                </div>
            </footer>
        );
    }
}
Footer = BindToChainState(Footer);

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
