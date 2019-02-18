import alt from "alt-instance";
import WalletUnlockActions from "actions/WalletUnlockActions";
import SettingsActions from "actions/SettingsActions";
import WalletDb from "stores/WalletDb";
import ls from "common/localStorage";

const STORAGE_KEY = "__graphene__";
let ss = new ls(STORAGE_KEY);

class WalletUnlockStore {
    constructor() {
        this.bindActions(WalletUnlockActions);
        const storedSettings = ss.get("settings_v3");
        // let passwordLogin =
        //     "passwordLogin" in storedSettings
        //         ? storedSettings.passwordLogin
        //         : true;
        let passwordLogin = false;
        this.state = {
            locked: true,
            passwordLogin: passwordLogin
        };

        this.walletLockTimeout = this._getTimeout(); // seconds (10 minutes)
        this.timeout = null;

        this.bindListeners({
            onChangeSetting: SettingsActions.changeSetting
        });

        // let timeoutSetting = this._getTimeout();

        // if (timeoutSetting) {
        //     this.walletLockTimeout = timeoutSetting;
        // }
    }

    onUnlock({resolve, reject}) {
        //DEBUG console.log('... onUnlock setState', WalletDb.isLocked())
        //
        this._setLockTimeout();
        if (!WalletDb.isLocked()) {
            this.setState({locked: false});
            resolve();
            return;
        }

        this.setState({resolve, reject, locked: WalletDb.isLocked(), passwordLogin: false});
    }

    onLock({resolve}) {
        //DEBUG console.log('... WalletUnlockStore\tprogramatic lock', WalletDb.isLocked())
        if (WalletDb.isLocked()) {
            resolve();
            return;
        }
        WalletDb.onLock();
        this.setState({
            resolve: null,
            reject: null,
            locked: WalletDb.isLocked()
        });
        resolve();
    }

    onCancel() {
        if (typeof this.state.reject === "function")
            this.state.reject({isCanceled: true});
        this.setState({resolve: null, reject: null});
    }

    onChange() {
        this.setState({locked: WalletDb.isLocked()});
    }

    onChangeSetting(payload) {
        if (payload.setting === "walletLockTimeout") {
            this.walletLockTimeout = payload.value;
            this._clearLockTimeout();
            this._setLockTimeout();
        } else if (payload.setting === "passwordLogin") {
            this.setState({
                passwordLogin: payload.value
            });
        }
    }

    _setLockTimeout() {
        this._clearLockTimeout();
        /* If the timeout is different from zero, auto unlock the wallet using a timeout */
        if (!!this.walletLockTimeout) {
            this.timeout = setTimeout(() => {
                if (!WalletDb.isLocked()) {
                    console.log(
                        "auto locking after",
                        this.walletLockTimeout,
                        "s"
                    );
                    WalletDb.onLock();
                    this.setState({locked: true});
                }
            }, this.walletLockTimeout * 1000);
        }
    }

    _clearLockTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    _getTimeout() {
        return parseInt(ss.get("lockTimeout", 600), 10);
    }

    onCheckLock() {
        this.setState({locked: WalletDb.isLocked()});
    }
}

export default alt.createStore(WalletUnlockStore, "WalletUnlockStore");
