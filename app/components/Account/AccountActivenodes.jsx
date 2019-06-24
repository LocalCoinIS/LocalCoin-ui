import React from "react";
import Immutable from "immutable";
import Translate from "react-translate-component";
import accountUtils from "common/account_utils";
import WorkerApproval from "../../components/Account/WorkerApproval";
import VotingAccountsList from "./VotingAccountsList";
import cnames from "classnames";
import Tab from "../Utility/Tab"; import Tabs from "../Utility/Tabs";
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
import PropTypes from "prop-types";
import {Apis} from "bitsharesjs-ws";
import BlockchainStore from "stores/BlockchainStore";
import { runInThisContext } from "vm";
let ops = Object.keys(operations);

class AccountActivenodes extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        globalObject: ChainTypes.ChainObject.isRequired,
        dynGlobalObject: ChainTypes.ChainObject.isRequired
    };

    static defaultProps = {
        globalObject: "2.0.0",
        dynGlobalObject: "2.1.0"
    };

    _onNavigate(route, e) {
        e.preventDefault();
        this.context.router.push(route);
    }

    constructor(props) {
        super(props);

        this.state = {  toUpdateConfig             : false,
                        calculatePanel             : true,
                        existsInConfActivenodeData : false,
                        failconnection             : false,
                        percentreplay              : false,
                        MIN_BALANCE_FOR_ACTIVENODE : this.get_MIN_BALANCE_FOR_ACTIVENODE(),
                        cntPenalty                 : 0,
                        imIsActivenode             : true   };

        this.isActivenode((isActivenode) => this.setState({
            imIsActivenode: isActivenode,
            calculatePanel: false
        }));

        this.cntPenalty(cnt => this.setState({ cntPenalty: cnt }));

        if(typeof window.activenodePageLifecycleInterval === "undefined") window.activenodePageLifecycleInterval = null;
        if(window.activenodePageLifecycleInterval !== null) clearInterval(window.activenodePageLifecycleInterval);

        let checkerLifecycle = () => {
            this.checkPercentReplay();
            this.checkFailConnection();
            this.checkActivenodeKeysHasBeenWriten();
            this.isActivenode((isActivenode) => {
                if(this.state.imIsActivenode !== isActivenode)
                    this.setState({ imIsActivenode: isActivenode });
            });
        };
        checkerLifecycle();
        window.activenodePageLifecycleInterval = setInterval(checkerLifecycle, 5000);
    }

    /**
     * 43200*0.1/30*8=1152
     * 43200 количество блоков за последние 24 часа(берется из блокчейна)
     * 0.1 комиссия за активность ноды (берется из блокчейна)
     * 30 количество активных ном в сети(берется из блокчейна)
     * 8 - фиксированная цифра обозначающая количество дней до снятия вестинга
     */
    get_MIN_BALANCE_FOR_ACTIVENODE = () => parseInt(43200 * 0.1 / this.getCountActivenodes() * 8) + 550;

    _handleAddNode = () => this.setState({ calculatePanel: false });

    _unlockHandle = () => WalletUnlockActions.unlock()
                            .then(() => {
                                AccountActions.tryToSetCurrentAccount();
                            })
                            .catch(() => {});

    canCreateTheActivenode = () => {
        if(this.getWalletBalance() < this.state.MIN_BALANCE_FOR_ACTIVENODE) return false;
        if(!this.isLifetimeMember())                                        return false;
        if(!this.isLocalNodeRunning())                                      return false;

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

    yourNodeUpAndRunningView = () => {
        let accountName = AccountStore.getState().currentAccount;
        
        return  <div className="market-list-wrap">
                    <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                        <h2 style={{ textAlign: 'center' }}>
                            {counterpart.translate("account.activenodes.your_node_up_and_running", {
                                name: accountName
                            })}
                        </h2>
                        <span style={{ textAlign: 'center' }}>
                            {counterpart.translate("account.activenodes.currently_there_are")} { this.getCountActivenodes() } 
                            {counterpart.translate("account.activenodes.activenodes_in_the_network")}</span><br />
                        <span style={{ textAlign: 'center' }}>
                            {counterpart.translate("account.activenodes.approximate_daily_profit_is")} { this.calculateDailyApproximate() } 
                            {counterpart.translate("account.activenodes.llc")}.</span><br /><br />
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
                    </div>
                </div>;
        }

    unauthorizedView = () => {
        return  <div className="market-list-wrap">
                    <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
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
                    </div>
                </div>;
    }

    addTheNodeView = () => {
        return (
            <div className="market-list-wrap">
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

    checkActivenodeKeysHasBeenWriten = () => {
        this.checkKeyExistsInConfig(isExists => {
            if(this.state.existsInConfActivenodeData !== isExists)
                this.setState({ existsInConfActivenodeData: isExists });
        });
    }

    checkKeyExistsInConfig = (cb) => {
        try {
            let accountName = AccountStore.getState().currentAccount;
            let account     = ChainStore.getAccount(accountName);
            let publicKey   = account.get("options").get("memo_key");
            var private_key = WalletDb.getPrivateKey(publicKey);
            let privateKey  = private_key.toWif();

            let mainRows = (new ConfigINI(accountName, publicKey, privateKey)).getMainRows();
                        
            if(mainRows !== null)
                (new LocalcoinHost())
                    .send(
                        "/ExistsRowsInConfigAction",
                        JSON.stringify(mainRows),
                        (request) => {
                            if(typeof cb !== "undefined")  {
                                cb(("" + request).trim().toLocaleLowerCase() === "true");
                            }
                                
                        }
                    );
        } catch(ex) { cb(false); }
    }

    cntPenalty = (cb) => {
        let accountName = AccountStore.getState().currentAccount;
        let account     = ChainStore.getAccount(accountName);
        
        Apis
            .instance()
            .db_api()
            .exec("get_activenode_by_account", [account.get("id")])
            .then(result => {
                if(result !== null) {
                    try {
                        let max_penalty  = parseInt(result.max_penalty);
                        let penalty_left = parseInt(result.penalty_left);

                        if(penalty_left > 0 && penalty_left <= max_penalty) cb(max_penalty-penalty_left);
                        else                                                cb(0);

                    } catch(ex) { cb(0); }
                } else cb(0);
            })
            .catch(error => cb(0));
    }

    isActivenode = (cb) => {
        let accountName = AccountStore.getState().currentAccount;
        let account     = ChainStore.getAccount(accountName);
        
        Apis
            .instance()
            .db_api()
            .exec("get_activenode_by_account", [account.get("id")])
            .then(result => { cb(result !== null); })
            .catch(error => cb(false));
    }

    isLocalNodeRunning = () => {
        let currentNode = SettingsStore.getState().settings.get( "apiServer" ) + "";
        
        const connected = !(BlockchainStore.getState().rpc_connection_status.rpc_connection_status === "closed");

        if(currentNode.indexOf("://127.0.0.1:") !== -1 && connected) return true;
        if(currentNode.indexOf("://localhost:") !== -1 && connected) return true;

        return false;
    }

    _reloadActivenodeHandle = () => {
        let accountName = AccountStore.getState().currentAccount;
        let account     = ChainStore.getAccount(accountName);
        let publicKey   = account.get("options").get("memo_key");
        var private_key = WalletDb.getPrivateKey(publicKey);
        let privateKey  = private_key.toWif();

        let text = (new ConfigINI(accountName, publicKey, privateKey)).get();
        
        this.processReloadHost(text);
    }

    rewriteConfigView = () => {
        return (
            <div className="market-list-wrap">
                <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.activenode_reload")}</h2>

                    <span>
                        {counterpart.translate("account.activenodes.need_rewrite_config_and_reload_node")}.</span><br /><br />

                    <button className="button btn large inverted" onClick={this._reloadActivenodeHandle}>
                        {counterpart.translate("account.activenodes.reload")}</button>
                </div>
            </div>
        );
    }

    getPercetnSync = () => {
        if(typeof window.lastLocalBlock !== "undefined" && typeof window.lastActualBlock !== "undefined" &&
                  window.lastLocalBlock !=  0           &&        window.lastActualBlock !=  0) {

            try {
                let percent = ((window.lastLocalBlock / window.lastActualBlock ) * 100).toFixed(1);
                return isNaN(percent) ? 0 : percent;
            } catch(ex) {}
        }
        return 0;
    }

    activenodeRequirementsView = () => {
        let accountName = AccountStore.getState().currentAccount;
        let percetnSync = this.getPercetnSync();

        return  <div className="market-list-wrap">
                    <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                        <h2 style={{ textAlign: 'center' }}>
                            {counterpart.translate("account.activenodes.activenode_requirements")}
                        </h2>
                        <br />
                        <table>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right' }}>
                                    <input type="checkbox" checked={this.getWalletBalance() >= this.state.MIN_BALANCE_FOR_ACTIVENODE} />
                                </td>
                                <td style={{ textAlign: 'left' }}><span style={{ textAlign: 'center' }}>{counterpart.translate("account.activenodes.min_balance", {
                                    val: this.state.MIN_BALANCE_FOR_ACTIVENODE 
                                })}</span></td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right' }}><input type="checkbox" checked={this.isLifetimeMember()} /></td>
                                <td style={{ textAlign: 'left' }}>
                                    <Link to={`/account/${accountName}/member-stats/`}>
                                        {counterpart.translate("account.activenodes.lifetime_member")}
                                    </Link>
                                </td>
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
                    </div>
                </div>;
    }

    calculateDailyApproximate = () => parseInt(0.065 / this.getCountActivenodes() * 43200);

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

    processReloadHost = (fileContent, cb) =>
        (new LocalcoinHost())
            .send("/ReloadToActivenodeAction", fileContent, (request) => {
                if(typeof cb !== "undefined") cb(request);
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
        return  <div className="market-list-wrap">
                    <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                        <h2 style={{ textAlign: 'center' }}>
                            {counterpart.translate("account.activenodes.nodes")}
                        </h2>

                        <span style={{ textAlign: 'center' }}>
                            1. {counterpart.translate("account.activenodes.open_in_witness_node_data_dir_file")}:
                        </span><br />

                        <span style={{ textAlign: 'center' }}>
                            2. {counterpart.translate("account.activenodes.restart_the_node")}:
                        </span><br />
                    </div>
                </div>;
    }

    yourNodeSkippedView = () => {
        return (<div className="market-list-wrap">
                    <div style={{
                            margin     : "0 auto",
                            width      : 600,
                            marginTop  : 100,
                            background : '#efefef',
                            padding    : 50,
                            textAlign  : 'center' 
                        }}>
                        <h2 style={{ textAlign: 'center' }}>
                            {counterpart.translate(
                                "account.activenodes.your_node_skipped"
                            )}.
                        </h2>
                        <span>
                            {counterpart.translate("account.activenodes.you_can_start_getting_reward_after_penalty_period", {
                                cnt_days: this.state.cntPenalty
                            })}.
                        </span>
                        <br />
                    </div>
                </div>);
    }

    checkFailConnection = () => {
        let accountName = ("" + AccountStore.getState().currentAccount).trim().toLocaleLowerCase();

        //Нода должна быть синхронизирована
        let percetnSync = this.getPercetnSync();
        let isSync= ( this.state.imIsActivenode                             ) &&
                    ( this.isLocalNodeRunning()                             ) &&
                    ( this.state.existsInConfActivenodeData                 ) &&
                    ( percetnSync === null || this.isLocalNodeRunning()     );

        if(!isSync) {
            if(this.state.failconnection)
                this.setState({ failconnection: false });
            return;
        }


        fetch(
            "https://api.llc.is/get_all_activenodes",
            { method: "GET" }
        ).then(r =>
            r.json().then(items => {
                let myAccountInfoList = items.filter(
                    el => (""+el.activenode_account_name).trim().toLocaleLowerCase() === accountName
                );                
                let myAccountInfo = myAccountInfoList.length > 0 ? myAccountInfoList[0] : null;
                
                if(myAccountInfo && !myAccountInfo.is_new && myAccountInfo.penalty_left == 0 && myAccountInfo.activities_sent == 0) {
                    if(!this.state.failconnection)
                        this.setState({ failconnection: true });
                } else {
                    if(this.state.failconnection)
                        this.setState({ failconnection: false });
                }
			})
		);
    }

    //percentreplay
    checkPercentReplay = () => {
        (new LocalcoinHost())
                    .send(
                        "/percentreplay",
                        null,
                        (request) => {
                            let percent = parseInt((""+request).trim());
                            if(percent > 0) {
                                if(this.state.percentreplay !== percent)
                                    this.setState({ percentreplay: percent });
                            } else {
                                if(this.state.percentreplay !== false)
                                    this.setState({ percentreplay: false });
                            }
                            
                        }
                    );
    }

    failConnectionView = () => {
        return (
            <div className="market-list-wrap">
                <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.fail_connect_node")}
                    </h2>
                    <br />
                    <b style={{ textAlign: 'center' }}>{counterpart.translate("account.activenodes.fail_connect_node_descr")}</b>
                </div>
            </div>
        );
    }

    percentReplayView = () => {
        return (
            <div className="market-list-wrap">
                <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.node_block__replays")}
                    </h2>
                    <br />
                    <b style={{ textAlign: 'center' }}>{counterpart.translate("account.activenodes.state_replay")}: { this.state.percentreplay }%</b>
                </div>
            </div>
        );
    }

    render() {
        const s             = this.state;
        const lcNdIsRunning = this.isLocalNodeRunning();

        if(WalletUnlockStore.getState().locked)                                 return this.unauthorizedView();

        if(s.failconnection)                                                    return this.failConnectionView();
        if(s.percentreplay)                                                     return this.percentReplayView();

        if(s.imIsActivenode && !lcNdIsRunning)                                  return this.activenodeRequirementsView();
        if(s.imIsActivenode && !s.existsInConfActivenodeData)                   return this.rewriteConfigView();
        if(parseInt(s.cntPenalty) > 0)                                          return this.yourNodeSkippedView();

        if(s.imIsActivenode && s.existsInConfActivenodeData && lcNdIsRunning)   return this.yourNodeUpAndRunningView();

        if(s.toUpdateConfig)                                                    return this.updateConfigView();
        if(s.calculatePanel)                                                    return this.addTheNodeView();

        return                                                                  this.activenodeRequirementsView();
    }
}

AccountActivenodes = BindToChainState(AccountActivenodes);

class ActivenodesObjectWrapper extends React.Component {
    render() { return <AccountActivenodes {...this.props} />; }
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
