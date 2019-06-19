import SettingsStore from "stores/SettingsStore";
import {Apis} from "bitsharesjs-ws";

/**
 * быстрое определение дисконнекта через пинг
 */
const TIMEOUT_EXP        = 2000;
const MAX_DISCONNECT_CNT = 2;
const MAX_CONNECT_CNT    = 2;
const STATUS_OPEN        = "open";

export default class FastDisconnectPing {
    constructor(blockchainStore) {
        this.blockchainStore = blockchainStore;
        window.disconnectCnt = 0;
        window.connectCnt    = 0;
    }

    setDisconnectStatus = () => {
        if(this.currentNodeIsOpen() && window.disconnectCnt === MAX_DISCONNECT_CNT)
            this.blockchainStore.onUpdateRpcConnectionStatus("closed");
    }

    setConnectStatus = () => {
        if(!this.currentNodeIsOpen() && window.connectCnt === MAX_CONNECT_CNT)
            this.blockchainStore.onUpdateRpcConnectionStatus("open");
    }

    checkConnect = () => {
        if(window.connectCnt >= MAX_CONNECT_CNT)
            this.setConnectStatus();
    }

    checkDisconnect = () => {
        if(window.disconnectCnt >= MAX_DISCONNECT_CNT)
            this.setDisconnectStatus();
    }

    item = () => {
        let uri = this.getCurrentNode();
        let websocket = new WebSocket( uri );

        websocket.onopen    = () => { window.disconnectCnt = 0;  window.connectCnt++;   this.checkConnect();    };
        websocket.onmessage = () => { window.disconnectCnt = 0;  window.connectCnt++;   websocket.close();      };
        websocket.onerror   = () => { window.disconnectCnt++;    window.connectCnt = 0; this.checkDisconnect(); };

        try {
            websocket.send("");
        } catch(ex) {}
    }

    getCurrentNode    = () => SettingsStore.getState().settings.get( "apiServer" ) + "";
    currentNodeIsOpen = () => this.blockchainStore.rpc_connection_status === STATUS_OPEN;

    process = () => setInterval(this.item, TIMEOUT_EXP);
}
