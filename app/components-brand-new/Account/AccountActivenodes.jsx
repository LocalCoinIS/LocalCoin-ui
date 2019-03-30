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
import CliWalletAPI from "../../components/CliWalletAPI"; 
import TransactionConfirmActions from "../../actions/TransactionConfirmActions";
import NodeControll from "../../NodeControll";
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
            imIsActiveNode: false,
            calculatePanel: true
        };
    }

    _handleAddNode = () => {
        this.setState({ calculatePanel: false });
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
        (new NodeControll()).rewriteConfig("1", "2", "3");
        return;

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
            .then(() => {
                if(this.canCreateTheActivenode())
                    this.setState({ imIsActiveNode: true });

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
                    </span><br />
                </div>;
        }

    // imIsActiveNodeUpdateState = () => {
    //     // let currentActivenodes = [];
    //     // let accountName = AccountStore.getState().currentAccount;

    //     // let { globalObject} = this.props;
    //     // if(globalObject !== null) {
    //     //     globalObject = globalObject.toJS();
    //     //     if(typeof globalObject.current_activenodes !== "undefined")
    //     //         currentActivenodes = globalObject.current_activenodes;
    //     // }

    //     Apis.instance()
    //             .db_api()
    //             .exec("get_witness_by_account", [account_id])
    //             .then(optional_witness_object => {
    //                 if (optional_witness_object) {
    //                     this._subTo("witnesses", optional_witness_object.id);
    //                     this.witness_by_account_id = this.witness_by_account_id.set(
    //                         optional_witness_object.witness_account,
    //                         optional_witness_object.id
    //                     );
    //                     let witness_object = this._updateObject(
    //                         optional_witness_object,
    //                         true
    //                     );
    //                     resolve(witness_object);
    //                 } else {
    //                     this.witness_by_account_id = this.witness_by_account_id.set(
    //                         account_id,
    //                         null
    //                     );
    //                     this.notifySubscribers();
    //                     resolve(null);
    //                 }
    //             }, reject);
    // }

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
        return  <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>
                        {counterpart.translate("account.activenodes.activenode_requirements")}
                    </h2>
                    
                    <input type="checkbox" checked={this.getWalletBalance() >= MIN_BALANCE_FOR_ACTIVENODE} />
                    <span style={{ textAlign: 'center' }}>
                    {counterpart.translate("account.activenodes.min_balance")}
                    </span><br />

                    <input type="checkbox" checked={this.isLifetimeMember()} />
                    <span style={{ textAlign: 'center' }}>
                    {counterpart.translate("account.activenodes.lifetime_member")}
                    </span><br />

                    <input type="checkbox" checked={this.isLocalNodeRunning()} />
                    <span style={{ textAlign: 'center' }}>
                    {counterpart.translate("account.activenodes.localhost_connection")}
                    </span><br />
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

    render() {
        // if(this.state.imIsActiveNode)
        //     return this.imIsActiveNodeView();

        // if(WalletUnlockStore.getState().locked)
        //     return this.unauthorizedView();

        // if(this.state.calculatePanel)
        //     return this.addTheNodeView();

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
