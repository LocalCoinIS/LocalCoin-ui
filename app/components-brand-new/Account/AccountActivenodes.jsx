import React from "react";
import Immutable from "immutable";
import Translate from "react-translate-component";
import accountUtils from "common/account_utils";
import {ChainStore, FetchChainObjects} from "bitsharesjs/es";
import WorkerApproval from "../../components/Account/WorkerApproval";
import VotingAccountsList from "./VotingAccountsList";
import cnames from "classnames";
import Tabs from "../Utility/Tabs";
import BindToChainState from "../../components/Utility/BindToChainState";
import WalletUnlockStore from "stores/WalletUnlockStore";
import WalletDb from "stores/WalletDb";
import WalletUnlockActions from "actions/WalletUnlockActions";
import AccountActions from "actions/AccountActions";
import WalletManagerStore from "stores/WalletManagerStore";
import ChainTypes from "../../components/Utility/ChainTypes";
import {Link} from "react-router/es";
import ApplicationApi from "api/ApplicationApi";
import AccountSelector from "./AccountSelector";
import Icon from "../../components/Icon/Icon";
import AssetName from "../../components/Utility/AssetName";
import counterpart from "counterpart";
import {EquivalentValueComponent} from "../../components/Utility/EquivalentValueComponent";
import FormattedAsset from "../../components/Utility/FormattedAsset";
import SettingsStore from "stores/SettingsStore";
import AccountStore from "stores/AccountStore";
import {connect} from "alt-react";
import utils from "common/utils";
import assetUtils from "common/asset_utils";
import CliWalletAPI from "../../components/CliWalletAPI"; 

const MIN_BALANCE_FOR_ACTIVENODE = 511;
const ADD_ACTIVENODE_STEPS = [""];
class AccountActivenodes extends React.Component {
    static propTypes = {
        globalObject: ChainTypes.ChainObject.isRequired,
        dynGlobalObject: ChainTypes.ChainObject.isRequired
    };

    static defaultProps = {
        globalObject: "2.0.0",
        dynGlobalObject: "2.1.0"
    };

    constructor(props) {
        super(props);
    }

    _handleAddNode = () => {
        alert("add node");
    }

    _unlockHandle = (e) => {
        e.preventDefault();
        if (WalletDb.isLocked()) {
            WalletUnlockActions.unlock()
                .then(() => {
                    AccountActions.tryToSetCurrentAccount();
                })
                .catch(() => {});
        } else {
            WalletUnlockActions.lock();
        }        
    }

    canCreateTheActivenode = () => {
        if(this.getWalletBalance() < MIN_BALANCE_FOR_ACTIVENODE) return false;
        if(!this.isLifetimeMember())                             return false;
        if(!this.isLocalNodeRunning())                           return false;

        return true;
    }

    _createTheActivenodeHandle = () => {
        if(!this.canCreateTheActivenode()) return;

        let currentAccount = AccountStore.getState().currentAccount;
        let wallet         = new CliWalletAPI();
        wallet.isWalletExists(
            () => {
                wallet.createActivenodeByAccount(currentAccount, (data) => {
                    console.log(data);
                    
                    // if( typeof data.error !== "undefined" && typeof data.error.message !== "undefined")
                    //     return alert(data.error.message);
                });

                // wallet.getActivenodeByAccount(currentAccount, (data) => {
                //     if( typeof data.error !== "undefined" && typeof data.error.message !== "undefined")
                //         return alert(data.error.message);
                // });
            },
            () => { alert("Error!\nWallet cli not found!"); },
        );
    }

    unauthorizedView = () => {
        return  <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>Nodes</h2>
                    <span style={{ textAlign: 'center' }}>Authorize ti view and manage nodes</span><br />
                    <br />
                    <button className="button btn large inverted" onClick={this._unlockHandle}>
                        Login
                    </button>
                </div>;
    }

    addTheNodeView = () => {
        return (
            <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>Earn coins by running Activenode</h2>
                <span>Currently there are { this.getCountActivenodes() } activenodes in the network.</span><br />
                <span>Approximate daily profit is { this.calculateDailyApproximate() } LLC.</span><br />
                <br />
                <button className="button btn large inverted" onClick={this._handleAddNode}>
                    Add the activenode
                </button>
            </div>
        );
    }

    isLifetimeMember = () => {
        try {
            let currentAccount = ChainStore.getAccount(
                AccountStore.getState().currentAccount
            );

            if(currentAccount === null) return false;            
            let account = currentAccount.toJS();

            let expiration_date = account.membership_expiration_date;
            
            // if (expiration_date === "1969-12-31T23:59:59")
            //     return false;
            if (expiration_date === "1970-01-01T00:00:00")
                return false;

            return true;
        } catch(ex) {}

        return false;
    }

    getWalletBalance = () => {
        var balance = 0;

        let currentAccount = ChainStore.getAccount(
            AccountStore.getState().currentAccount
        );
        
        if (!currentAccount) return 0;

        currentAccount.get("balances").forEach((balanceId, asset_type) => {
            let balanceObject = ChainStore.getObject(balanceId);
            if (!balanceObject) return "";

            let assetObject = ChainStore.getAsset(asset_type);
            if (!assetObject) return;

            let symbol = assetObject.get("symbol");
            if (!symbol) return;

            
            if(symbol.toUpperCase() === "LLC") {
                let precision = utils.get_asset_precision(assetObject.get("precision"));
                balance = balanceObject.get("balance") / precision;
            }
        });

        return balance;
        
    }

    isLocalNodeRunning = () => {
        let currentNode = SettingsStore.getState().settings.get( "apiServer" ) + "";
        
        if(currentNode.indexOf("://127.0.0.1:") !== -1) return true;
        if(currentNode.indexOf("://localhost:") !== -1) return true;

        return false;
    }

    activenodeRequirementsView = () => {
        return  <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>Activenode requirements</h2>
                    
                    <input type="checkbox" checked={this.getWalletBalance() >= MIN_BALANCE_FOR_ACTIVENODE} />
                        <span style={{ textAlign: 'center' }}>Minimum balance is 511 LLC/Минимальный баланс 511 LLC</span><br />

                    <input type="checkbox" checked={this.isLifetimeMember()} />
                        <span style={{ textAlign: 'center' }}>Lifetime Member (LTM) status/Наличие премиум статуса</span><br />

                    <input type="checkbox" checked={this.isLocalNodeRunning()} />
                        <span style={{ textAlign: 'center' }}>Localhost connection/Запущена локальная нода</span><br />
                    <br />
                    <button style={{
                        opacity : this.canCreateTheActivenode() ? 1 : 0.3
                    }} className="button btn large inverted" onClick={this._createTheActivenodeHandle}>
                        Create the activenode
                    </button>
                </div>;
    }

    calculateDailyApproximate = () => 0.065 / this.getCountActivenodes() * 43200;

    getCountActivenodes = () => {
        try {
            let { globalObject} = this.props;

            if(globalObject === null) return 1;
            globalObject = globalObject.toJS();

            let len = Object.keys( globalObject.current_activenodes ).length;
            return len < 1 ? 1 : len;
        } catch(ex) {}

        return null;
    }

    getListActivenodes = () => {
        try {
            let { globalObject} = this.props;

            if(globalObject === null) return null;
            globalObject = globalObject.toJS();

            return globalObject.current_activenodes;
        } catch(ex) {}

        return null;
    }

// <TranslateWithLinks
// string={
// op[1].upgrade_to_lifetime_member
// ? "operation.lifetime_upgrade_account"
// : "operation.annual_upgrade_account"
// }
// keys={[
// {
// type: "account",
// value: op[1].account_to_upgrade,
// arg: "account"
// }
// ]}
// />
    render() {
        // if(WalletUnlockStore.getState().locked)
        //     return this.unauthorizedView();

        //return this.addTheNodeView();
        return this.activenodeRequirementsView();
    }
}

AccountActivenodes = BindToChainState(AccountActivenodes);

class ActivenodesObjectWrapper extends React.Component {
    render() {
        return <AccountActivenodes {...this.props} />;
    }
}

ActivenodesObjectWrapper = connect(
    ActivenodesObjectWrapper,
    {
        listenTo() {
            return [SettingsStore];
        },
        getProps() {
            return {
                cardView: SettingsStore.getState().viewSettings.get("cardView"),
                filterWitness: SettingsStore.getState().viewSettings.get(
                    "filterWitness"
                )
            };
        }
    }
);

export default ActivenodesObjectWrapper;
