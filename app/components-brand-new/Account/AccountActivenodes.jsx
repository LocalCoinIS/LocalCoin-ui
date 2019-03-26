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

class AccountActivenodes extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleAddNode = () => {
        alert("add node");
    }

    addTheNodeView = () => {
        return (
            <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>Nodes</h2>
                <span>Earn coins by running Activenode</span><br />
                <span>Currently there are ***X*** activenodes in the network.</span><br />
                <span>Approximate daily profit is *** LLC.</span><br />
                <span>Add the activenode</span><br />
                <span>X = метод list_activenodes, выводим количество записей в массиве</span><br />
                <span>Y =0.065 / X * 43200</span><br />
                <br />
                <button className="btn large outline" onClick={this._handleAddNode}>
                    Add the node
                </button>
            </div>
        );
    }

    _toggleLock = (e) => {
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

    unauthorizedView = () => {
        return <div className="activenodes-container">
                    <div style={{ margin: "0 auto", width: 600, marginTop: 100, background: '#efefef', padding: 50, textAlign: 'center' }}>
                        <h2 style={{ textAlign: 'center' }}>Nodes</h2>
                        <span style={{ textAlign: 'center' }}>Authorize ti view and manage nodes</span><br />
                        <br />
                        <button className="btn large outline" onClick={this._toggleLock}>
                            Login
                        </button>
                    </div>
                </div>;
    }

    render() {
        if(WalletUnlockStore.getState().locked)
            return this.unauthorizedView();

        return (
            <div className="activenodes-container">
                { this.addTheNodeView() }
            </div>
        );
    }
}

AccountActivenodes = BindToChainState(AccountActivenodes);

const ActivenodesObjectWrapper = props => {
    return ( <AccountActivenodes {...props} /> );
};

export default ActivenodesObjectWrapper;
