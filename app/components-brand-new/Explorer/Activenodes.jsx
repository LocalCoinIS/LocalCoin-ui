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

class ActivenodeInfo extends React.Component {
    data = () => {
        return [
            [ "Current witness",    "winstonsmith"     ],
            [ "Active Witnesses",   "9"                ],
            [ "Participation rate", "100%"             ],
            [ "Pay-per-block",      "0.65000 LLC"      ],
            [ "Remaining budget",   "13,993.85000 LLC" ],
            [ "Next vote update",   "in 13 hours"      ],
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

const TABS_TITLE = ["Rank", "Name", "Last block", "Last confirmed", "Blocks missed", "Votes" ];
class Activenodes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterActivenodes : "",
            activeAccountName : "",
        };
    }

    _onFilter(e) {
        e.preventDefault();
        this.setState({filterActivenodes: e.target.value.toLowerCase().trim()});
    }

    data = () => {
        let source = [
            [
                'winstonsmith',
                '2 hours ago',
                '3086234',
                '9689',
                '542,081 LLC',
            ],
            [
                'winstonsmith2',
                '2 hours ago',
                '3086234',
                '9689',
                '542,081 LLC',
            ]
        ];

        if(this.state.filterActivenodes == "") return source;

        return source
            .filter(
                line => typeof line[0] !== "undefined" &&
                    (line[0] + "").trim().toLocaleLowerCase().indexOf(this.state.filterActivenodes) !== -1
            )
            .sort(function(a, b){
                // ASC  -> a.length - b.length
                // DESC -> b.length - a.length
                return b.length - a.length;
            });
    }

    getActivenodes = (cb) => {
        
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid" style={{ marginTop: 20 }}>
                    <div className="witnesses-board">
                        <ActivenodeInfo />
                        <div className="witnesses-board__accounts">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-6">
                                        <input  type        = "text"
                                                value       = {this.state.filterActivenodes}
                                                onChange    = {this._onFilter.bind(this)}
                                                placeholder = "Filter accounts..." />
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