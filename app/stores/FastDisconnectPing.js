import SettingsStore from "stores/SettingsStore";
import {ChainStore} from "bitsharesjs/es";
import counterpart from "counterpart";

/**
 * быстрое определение дисконнекта
 */
const UPDATE_BLOCK_TIME  = 2500;
const STATUS_OPEN        = "open";

export default class FastDisconnectPing {
    constructor(blockchainStore) { this.blockchainStore = blockchainStore; }

    lastCntBlocks = 0;

    getCurrentBlocksCnt = () => {
        try {
            return ChainStore
                .getObject("2.1.0")
                .get("head_block_number");
        } catch(ex) {}

        return 0;
    }

    setDisconnectStatus = () => {
        if(!this.currentNodeIsOpen()) return;

        if(typeof document.getElementsByClassName("footer-info__status")[0] !== "undefined") {
            document.getElementsByClassName("footer-info__status")[0].innerHTML
                = counterpart.translate("footer.disconnected");
        }

        this.blockchainStore.onUpdateRpcConnectionStatus("closed");
    }

    getCurrentNodeName = () => {
        try {
            let nodeUrl = SettingsStore.getState().settings.get( "apiServer" ) + "";
            let nodes = SettingsStore.getState().defaults.apiServer;
            let node = nodes.filter(
                el => el.url === nodeUrl
            );

            if(node.length > 0) return node[0].location;
        } catch(ex) {}

        return counterpart.translate("footer.connected");
    }

    setConnectStatus = () => {
        if(this.currentNodeIsOpen()) return;

        if(typeof document.getElementsByClassName("footer-info__status")[0] !== "undefined") {
            document.getElementsByClassName("footer-info__status")[0].innerHTML
                = this.getCurrentNodeName();
        }

        this.blockchainStore.onUpdateRpcConnectionStatus("open");
    }


    item = () => {
        let currentCntBlocks = this.getCurrentBlocksCnt();
        if(currentCntBlocks < 1) return;
        
        if(this.lastCntBlocks === 0) {
            this.lastCntBlocks = currentCntBlocks;
            return;
        }
        
        if(currentCntBlocks <= this.lastCntBlocks) {
            this.setDisconnectStatus();
        } else {
            this.setConnectStatus();
        }

        this.lastCntBlocks = currentCntBlocks;
    }

    currentNodeIsOpen = () => this.blockchainStore.rpc_connection_status === STATUS_OPEN;

    process = () => {
        if(typeof window.fastDisconnectPingInterval !== "undefined") return;

        window.fastDisconnectPingInterval = setInterval(() => {
            this.item();
        }, UPDATE_BLOCK_TIME);
    }
}
