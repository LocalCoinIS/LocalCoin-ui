import SettingsStore from "stores/SettingsStore";
import {Apis} from "bitsharesjs-ws";

/**
 * быстрое определение дисконнекта через пинг
 */
const TIMEOUT_EXP        = 2500;
const MAX_DISCONNECT_CNT = 2;
const MAX_CONNECT_CNT    = 2;
const STATUS_OPEN        = "open";

export default class FastDisconnectPing {
    constructor(blockchainStore) {
        this.blockchainStore = blockchainStore;
        window.disconnectCnt = 0;
        window.connectCnt    = 0;
        window.fastDisconnectPingInProcess = false;
    }

    setDisconnectStatus = () => {
        if(this.currentNodeIsOpen())
            this.blockchainStore.onUpdateRpcConnectionStatus("closed");
    }

    setConnectStatus = () => {
        if(!this.currentNodeIsOpen())
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

    item = (cb) => {
        let uri = this.getCurrentNode()+"";
        if(uri.indexOf("ws://") === -1) {
            cb();
            return;
        }

        let websocket = new WebSocket( uri );

        websocket.onopen    = () => { window.disconnectCnt = 0;  window.connectCnt++;   this.checkConnect();    cb(); };
        websocket.onmessage = () => { window.disconnectCnt = 0;  window.connectCnt++;   websocket.close();      cb(); };
        websocket.onerror   = () => { window.disconnectCnt++;    window.connectCnt = 0; this.checkDisconnect(); cb(); };

        try {
            websocket.send("");
        } catch(ex) {}
    }

    getCurrentNode    = () => SettingsStore.getState().settings.get( "apiServer" ) + "";
    currentNodeIsOpen = () => this.blockchainStore.rpc_connection_status === STATUS_OPEN;

    process = () => {
        if(typeof window.fastDisconnectPingInterval !== "undefined") return;

        window.fastDisconnectPingInterval = setInterval(() => {
            if(!window.fastDisconnectPingInProcess) {
                window.fastDisconnectPingInProcess = true;
                this.item(() => {
                    window.fastDisconnectPingInProcess = false;
                });
            }
        }, TIMEOUT_EXP+200);
    }
}
