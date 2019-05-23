import SettingsStore from "stores/SettingsStore";
import {Apis} from "bitsharesjs-ws";

/**
 * быстрое определение дисконнекта через пинг
 */
const TIMEOUT_EXP    = 2000;
const MAX_DISCNT_CNT = 2;
const STATUS_OPEN    = "open";

export default class FastDisconnectPing {
    constructor(blockchainStore) {
        this.blockchainStore = blockchainStore;
        window.disconnectCnt = 0;
    }

    setDisconnectStatus = () => {
        if(this.currentNodeIsOpen() && window.disconnectCnt === MAX_DISCNT_CNT) {
            this.blockchainStore.onUpdateRpcConnectionStatus("closed");
        }
    }

    check = () => {
        if(window.disconnectCnt >= MAX_DISCNT_CNT)
            this.setDisconnectStatus();
    }

    item = () => {
        let uri = this.getCurrentNode();
        let websocket = new WebSocket( uri );

        websocket.onopen    = () => { window.disconnectCnt = 0;                      };
        websocket.onmessage = () => { window.disconnectCnt = 0;   websocket.close(); };
        websocket.onerror   = () => { window.disconnectCnt++;     this.check();      };

        websocket.send("");
    }

    getCurrentNode    = () => SettingsStore.getState().settings.get( "apiServer" ) + "";
    currentNodeIsOpen = () => this.blockchainStore.rpc_connection_status === STATUS_OPEN;

    process = () => setInterval(this.item, TIMEOUT_EXP);
}
