import React from "react";
import Immutable from "immutable";
import AccountImage from "../../components/Account/AccountImage";
import ChainTypes from "../../components/Utility/ChainTypes";
import BindToChainState from "../../components/Utility/BindToChainState";
import {ChainStore} from "bitsharesjs/es";
import FormattedAsset from "../../components/Utility/FormattedAsset";
import Translate from "react-translate-component";
import TimeAgo from "../../components/Utility/TimeAgo";
import {connect} from "alt-react";
import SettingsActions from "actions/SettingsActions";
import SettingsStore from "stores/SettingsStore";
import classNames from "classnames";
import ExplorerTabs from "./ExplorerTabs";
import PropTypes from "prop-types";
import DropdownList from "../Utility/DropdownList";
import counterpart from "counterpart";
import {Apis} from "bitsharesjs-ws";

class ActivenodeInfo extends React.Component {
    data = () => {
        return [
            [ counterpart.translate("explorer.activenodes.current_activenode"), this.props.activeAccountName ],
            [ counterpart.translate("explorer.activenodes.active_activenodes"), this.props.countActivenodes  ],
            [ counterpart.translate("explorer.activenodes.pay_per_block"     ), "0.065000 LLC"                ],
            [ counterpart.translate("explorer.activenodes.daily_approximate" ),  this.props.dailyApproximate  ],
        ];
    }

    render() {
        return ( 
            <div className="witnesses-board__sidetable">
                { this.data().map(item => 
                    <div className="witnesses-board__sidetable__row">
                        <span>{typeof item[0] !== "undefined" ? item[0] : ""}</span>
                        <span>{typeof item[1] !== "undefined" ? item[1] : ""}</span>
                    </div>
                ) }
            </div>
        );
    }
}

const TABS_TITLE = [
    counterpart.translate("explorer.activenodes.rank"),
    counterpart.translate("explorer.activenodes.name"),
    counterpart.translate("explorer.activenodes.last_block"),
    counterpart.translate("explorer.activenodes.max_penalty"),
];
class Activenodes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts          : null,
            activenodes       : null,
            filterActivenodes : "",
            activeAccountName : "",
        };

        setInterval(() => {
            try {
                this.getActivenodes((accounts, activenodes) => {
                    this.setState({
                        accounts    : accounts,
                        activenodes : activenodes,
                    }, this.updateActiveAccountName);
                });
            } catch(ex) {}
        }, 1000);
    }

    updateActiveAccountName = () => {
        if(this.state.activenodes === null) return;

        let sorted = this.state.activenodes.sort(function(b, a){
            try {
                let a_last_activity = new Date(a.last_activity);
                let b_last_activity = new Date(b.last_activity);

                return a_last_activity.getTime() - b_last_activity.getTime();
            } catch(ex) {
                return 1;
            }
        });

        let last = null;

        for(let i of sorted) {
            if(last !== null) break;
            if(i == null) continue;
            last = i;
        }

        if(last == null) return;

        if(typeof last.activenode_account === "undefined") return;
        let account = this.getAccount(last.activenode_account);

        if(typeof account.name === "undefined") return;
        this.setState({ activeAccountName: account.name });
    }

    _onFilter(e) {
        e.preventDefault();
        this.setState({filterActivenodes: e.target.value.toLowerCase().trim()});
    }

    getCountActivenodes = () => this.state.activenodes !== null && typeof this.state.activenodes.length !== "undefined" ? this.state.activenodes.length : 0;
    getDailyApproximate = () => this.getCountActivenodes() == 0 ? 0 : 0.065 / this.getCountActivenodes() * 43200;

    getAccount(accountId) {
        if(this.state.accounts === null) return null;

        let account = this.state.accounts.filter(
            el => el.id === accountId
        );

        if(account.length > 0 && typeof account.length !== "undefined") return account[0];

        return null;
    }

    getActivenodeData(accountId) {
        if(this.state.activenodes === null) return null;

        let ectivenode = this.state.activenodes.filter(
            el => el !== null && el.activenode_account === accountId
        );

        if(ectivenode.length > 0 && typeof ectivenode.length !== "undefined") return ectivenode[0];

        return null;
    }

    data = () => {
        let source = [];
        if(this.state.accounts === null) return source;

        for(let account of this.state.accounts) {
            let activenode = this.getActivenodeData(account.id);
            let last_activity = null;

            if(activenode !== null) {
                last_activity = new Date(activenode.last_activity);
                last_activity.setMinutes(last_activity.getMinutes() - new Date().getTimezoneOffset());
            }

            source.push([
                account.name,
                activenode !== null && last_activity !== null && last_activity.getTime() > 1000000000 ? <TimeAgo time={last_activity} /> : "-",
                activenode !== null ? activenode.max_penalty : null
            ]);
        }

        if(this.state.filterActivenodes == "") return source;

        return source
            .filter(
                line => typeof line[0] !== "undefined" &&
                    (line[0] + "").trim().toLocaleLowerCase().indexOf(this.state.filterActivenodes) !== -1
            )
            .sort(function(a, b){
                // ASC  -> a.length - b.length
                // DESC -> b.length - a.length
                return (typeof b.length !== "undefined" ? b.length : 0) - (typeof a.length !== "undefined" ? a.length : 0);
            });
    }

    getIdsActivenodes = () => Object.values(ChainStore.getObject("2.0.0").toJS().current_activenodes);

    getActivenodes = (cb) => {
        Apis
            .instance()
            .db_api()
            .exec("get_activenodes", [this.getIdsActivenodes()])
            .then(activenodes => {
                let accountsIds = [];

                for(let data of Object.values(activenodes)) {
                    if(data == null || typeof data.activenode_account === "undefined") continue;
                    accountsIds.push(data.activenode_account);
                }

                Apis
                    .instance()
                    .db_api()
                    .exec("get_accounts", [accountsIds])
                    .then(accounts => cb(accounts, activenodes))
                    .catch(error => cb(null));
            })
            .catch(error => cb(null));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid" style={{ marginTop: 20 }}>
                    <div className="witnesses-board">
                        <ActivenodeInfo
                            activeAccountName = { this.state.activeAccountName }
                            countActivenodes  = { this.getCountActivenodes()   }
                            dailyApproximate  = { this.getDailyApproximate()   }
                         />
                        <div className="witnesses-board__accounts">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-6">
                                        <input  type        = "text"
                                                value       = {this.state.filterActivenodes}
                                                onChange    = {this._onFilter.bind(this)}
                                                placeholder = {counterpart.translate("explorer.activenodes.filter_acc")} />
                                    </div>
                                </div>
                                    <div className="table-witnesses-wrap">
                                        <table className="table-witnesses">
                                            <thead>
                                                <tr>
                                                    { TABS_TITLE.map(label => <th className="clickable"><span>{label}</span></th>) }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { this.data().map(
                                                    (item, key) => {
                                                        return  <tr className={ typeof item[0] !== "undefined" && item[0] === this.state.activeAccountName ? "active-witness" : "" }>
                                                                    <td>{key + 1}</td>
                                                                    { item.map(
                                                                        (itemValue, itemKey) => <td style={ itemKey === 0 ? { borderLeft: "1px solid rgb(80, 210, 194)" } : null}>{ itemValue }</td>
                                                                    ) }
                                                                </tr>;
                                                    }
                                                ) }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    };
}

Activenodes = BindToChainState(Activenodes);

class ActivenodeStoreWrapper extends React.Component {
    render() {
        return  <div className="content">
                    <ExplorerTabs   defaultActiveTab="account.activenodes.activenodes"
                                    defaultContent={<Activenodes {...this.props} />} />
                </div>;
    }
}

ActivenodeStoreWrapper = connect(
    ActivenodeStoreWrapper,
    { listenTo() { return [SettingsStore]; } }
);

export default ActivenodeStoreWrapper;