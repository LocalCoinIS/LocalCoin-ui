import React from "react";
import Immutable from "immutable";
import Translate from "react-translate-component";
import accountUtils from "common/account_utils";
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
import ConfigINI from "./ConfigINI";
import CliWalletAPI from "../../components/CliWalletAPI"; 
import TransactionConfirmActions from "../../actions/TransactionConfirmActions";
import AddressIndex from "stores/AddressIndex";
import LocalcoinHost from "../../components/LocalcoinHost";
import {ChainTypes as grapheneChainTypes, TransactionBuilder, PrivateKey, ChainStore, FetchChainObjects, key} from "bitsharesjs/es";
const {operations} = grapheneChainTypes;
let ops = Object.keys(operations);

const MIN_BALANCE_FOR_ACTIVENODE = 511;
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

        this.state = {
            toUpdateConfig : false,
            imIsActiveNode: false,
            calculatePanel: true
        };
    }

    _handleAddNode = () => this.setState({ calculatePanel: false });

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

    activenodeCreate = () => {
        let accountName = AccountStore.getState().currentAccount;
        let account = ChainStore.getAccount(accountName);
        
        let tr = new TransactionBuilder();
        tr.add_type_operation("activenode_create_operation", {
            fee: {
                amount: 0,
                asset_id: "1.3.0"
            },
            activenode_account: account.get("id")
        });

        WalletDb.process_transaction(tr, null, true)
            .then((result) => {
                if(this.canCreateTheActivenode()) {
                    this.outpudConfigFile();
                }

                return true;
            });
    }

    _createTheActivenodeHandle = () => {
        if(!this.canCreateTheActivenode()) return;
        this.activenodeCreate();
    }

    imIsActiveNodeView = () => {
        let accountName = AccountStore.getState().currentAccount;
        
        return  <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.your_node_up_and_running")}
                    </h2>
                    <span style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.activenode_has_been_successfully")}
                    </span><br />
                    <span style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.you_have_to_keep_it_up")}
                    </span><br />
                    <span style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.if_you_do_not_keep_your_node")}
                    </span><br />
                    <span style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.you_can_check")} 
                        <Link to={`/account/${accountName}/vesting/`} activeClassName="active" >
                            {counterpart.translate("account.activenodes.vesting_section")}
                        </Link>
                    </span>
                </div>;
        }

    unauthorizedView = () => {
        return  <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.nodes")}
                    </h2>
                    <span style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.authorize_ti_view_and_manage_nodes")}
                    </span><br />
                    <br />
                    <button className="button btn large inverted" onClick={this._unlockHandle}>
                    {counterpart.translate("account.activenodes.login")}
                    </button>
                </div>;
    }

    addTheNodeView = () => {
        return (
            <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>
                    {counterpart.translate("account.activenodes.earn_coins_by_running_activenode")}</h2>

                <span>
                    {counterpart.translate("account.activenodes.currently_there_are")} { this.getCountActivenodes() } 
                    {counterpart.translate("account.activenodes.activenodes_in_the_network")}</span><br />

                <span>
                    {counterpart.translate("account.activenodes.approximate_daily_profit_is")} { this.calculateDailyApproximate() } 
                    {counterpart.translate("account.activenodes.llc")}.</span><br /><br />

                <button className="button btn large inverted" onClick={this._handleAddNode}>
                    {counterpart.translate("account.activenodes.add_the_activenode")}</button>
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
        let percetnSync = null;
        if(typeof window.lastLocalBlock !== "undefined" && typeof window.lastActualBlock !== "undefined" &&
                  window.lastLocalBlock !=  0           &&        window.lastActualBlock !=  0) {

            percetnSync = parseInt((window.lastLocalBlock / window.lastActualBlock ) * 100);
            if(percetnSync >= 100) percetnSync = null;
        }

        return  <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.activenode_requirements")}
                    </h2>
                    <br />
                    <table>
                        <tr>
                            <td style={{ width: '30%', textAlign: 'right' }}><input type="checkbox" checked={this.getWalletBalance() >= MIN_BALANCE_FOR_ACTIVENODE} /></td>
                            <td style={{ textAlign: 'left' }}><span style={{ textAlign: 'center' }}>{counterpart.translate("account.activenodes.min_balance")}</span></td>
                        </tr>
                        <tr>
                            <td style={{ width: '30%', textAlign: 'right' }}><input type="checkbox" checked={this.isLifetimeMember()} /></td>
                            <td style={{ textAlign: 'left' }}><span style={{ textAlign: 'center' }}>{counterpart.translate("account.activenodes.lifetime_member")}</span></td>
                        </tr>
                        <tr>
                            <td style={{ width: '30%', textAlign: 'right' }}><input type="checkbox" checked={this.isLocalNodeRunning()} /></td>
                            <td style={{ textAlign: 'left' }}><span style={{ textAlign: 'center' }}>{counterpart.translate("account.activenodes.localhost_connection")}</span></td>
                        </tr>
                    </table>
                    <br />
                    { percetnSync === null || this.isLocalNodeRunning() ? null :
                        <b style={{ textAlign: 'center' }}>{counterpart.translate("account.activenodes.sync_process_local_node")}: { percetnSync }%</b>
                    }
                    { percetnSync === null || this.isLocalNodeRunning() ? null : <br /> }
                    <br />
                    <br />
                    <button style={{
                        opacity : this.canCreateTheActivenode() ? 1 : 0.3
                    }} className="button btn large inverted" onClick={this._createTheActivenodeHandle}>
                        {counterpart.translate("account.activenodes.create_the_activenode")}
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

    getP(address) {
        var addresses = AddressIndex.getState().addresses;
        var pubkey = addresses.get(address);

        return pubkey;
    }

    processReloadHost = (fileContent) =>
        (new LocalcoinHost())
            .send("/ReloadToActivenodeAction", fileContent, (request) => {
                console.log("LocalcoinHost");
                console.log("LocalcoinHost");
                console.log("LocalcoinHost");
                console.log(request);
                console.log("LocalcoinHost");
                console.log("LocalcoinHost");
                console.log("LocalcoinHost");
            });

    checkHostIsRunnging = (cb) => (new LocalcoinHost()).isRunnging(cb);

    outpudConfigFile() {
        WalletUnlockActions.unlock()
            .then(() => {
                let accountName = AccountStore.getState().currentAccount;
                let account     = ChainStore.getAccount(accountName);
                let publicKey   = account.get("options").get("memo_key");
                var private_key = WalletDb.getPrivateKey(publicKey);
                let privateKey  = private_key.toWif();

                let text = (new ConfigINI(accountName, publicKey, privateKey)).get();
                
                this.checkHostIsRunnging((hostIsRunnging) => {
                    if(hostIsRunnging) {
                        this.setState({ imIsActiveNode: true });
                        this.processReloadHost(text);
                    } else {
                        this.setState({ toUpdateConfig: true });

                        //download if host not found
                        let element = document.createElement('a');
                        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                        element.setAttribute('download', "config.ini");        
                        element.style.display = 'none';
                        document.body.appendChild(element);        
                        element.click();        
                        document.body.removeChild(element);
                    }
                });
            })
            .catch(() => {});
    }

    updateConfigView = () => {        
        return  <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.nodes")}
                    </h2>

                    <span style={{ textAlign: 'center' }}>
                        1. {counterpart.translate("account.activenodes.open_in_witness_node_data_dir_file")}:
                    </span><br />

                    <span style={{ textAlign: 'center' }}>
                        2. {counterpart.translate("account.activenodes.restart_the_node")}:
                    </span><br />

                    <br />
                    <button className="button btn large inverted"
                            onClick={() => {
                                this.setState({ imIsActiveNode: true });
                            }}>OK</button>
                </div>;
        }

    render() {
         if(this.state.imIsActiveNode)
            return this.imIsActiveNodeView();

        if(this.state.toUpdateConfig)
            return this.updateConfigView();

        if(WalletUnlockStore.getState().locked)
            return this.unauthorizedView();

        if(this.state.calculatePanel)
            return this.addTheNodeView();

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
