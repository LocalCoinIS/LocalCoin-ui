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

require("../../components/Explorer/witnesses.scss");

class WitnessCard extends React.Component {
    static propTypes = {
        witness: ChainTypes.ChainAccount.isRequired
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    _onCardClick(e) {
        e.preventDefault();
        this.context.router.push(`/account/${this.props.witness.get("name")}`);
    }

    render() {
        let witness_data = ChainStore.getWitnessById(
            this.props.witness.get("id")
        );
        if (!witness_data) return null;
        let total_votes = witness_data.get("total_votes");

        let witness_aslot = witness_data.get("last_aslot");
        let color = {};
        if (this.props.most_recent - witness_aslot > 100) {
            color = {borderLeft: "1px solid #FCAB53"};
        } else {
            color = {borderLeft: "1px solid #50D2C2"};
        }
        let last_aslot_time = new Date(
            Date.now() -
                (this.props.most_recent - witness_aslot) *
                    ChainStore.getObject("2.0.0").getIn([
                        "parameters",
                        "block_interval"
                    ]) *
                    1000
        );

        return (
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <a
                    className="witness-item"
                    href="#"
                    onClick={this._onCardClick.bind(this)}
                >
                    <h5>
                        #{this.props.rank}: {this.props.witness.get("name")}
                    </h5>
                    <div className="witness-item__content">
                        <div className="witness-item__pic">
                            {/*className="witness-item__img"*/}
                            <AccountImage
                                account={this.props.witness.get("name")}
                                size={{height: 64, width: 64}}
                            />
                        </div>
                        <div className="witness-item__row">
                            <span>Votes</span>
                            <FormattedAsset
                                amount={total_votes}
                                asset="1.3.0"
                                decimalOffset={5}
                            />
                        </div>
                        <div className="witness-item__row light">
                            <span>Last Block</span>
                            <TimeAgo time={new Date(last_aslot_time)} />
                        </div>
                        <div className="witness-item__row">
                            <span>Missed</span>
                            <span>{witness_data.get("total_missed")}</span>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}
WitnessCard = BindToChainState(WitnessCard);

class WitnessRow extends React.Component {
    static propTypes = {
        witness: ChainTypes.ChainAccount.isRequired
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    _onRowClick(e) {
        e.preventDefault();
        this.context.router.push(`/account/${this.props.witness.get("name")}`);
    }

    // componentWillUnmount() {
    //     ChainStore.unSubFrom("witnesses", ChainStore.getWitnessById( this.props.witness.get("id") ).get("id"));
    // }

    render() {
        let {witness, isCurrent, rank} = this.props;
        let witness_data = ChainStore.getWitnessById(
            this.props.witness.get("id")
        );
        if (!witness_data) return null;
        let total_votes = witness_data.get("total_votes");

        let witness_aslot = witness_data.get("last_aslot");
        let color = {};
        if (this.props.most_recent - witness_aslot > 100) {
            color = {borderLeft: "1px solid #FCAB53"};
        } else {
            color = {borderLeft: "1px solid #50D2C2"};
        }
        let last_aslot_time = new Date(
            Date.now() -
                (this.props.most_recent - witness_aslot) *
                    ChainStore.getObject("2.0.0").getIn([
                        "parameters",
                        "block_interval"
                    ]) *
                    1000
        );

        let currentClass = isCurrent ? "active-witness" : "";

        let missed = witness_data.get("total_missed");
        let missedClass = classNames(
            "txtlabel",
            {success: missed <= 500},
            {info: missed > 500 && missed <= 1250},
            {warning: missed > 1250 && missed <= 2000},
            {error: missed >= 200}
        );

        return (
            <tr className={currentClass} onClick={this._onRowClick.bind(this)}>
                <td>{rank}</td>
                <td style={color}>{witness.get("name")}</td>
                <td>
                    <TimeAgo time={new Date(last_aslot_time)} />
                </td>
                <td>{witness_data.get("last_confirmed_block_num")}</td>
                <td className={missedClass}>{missed}</td>
                <td>
                    <FormattedAsset
                        amount={witness_data.get("total_votes")}
                        asset="1.3.0"
                        decimalOffset={5}
                    />
                </td>
            </tr>
        );
    }
}
WitnessRow = BindToChainState(WitnessRow);

class WitnessList extends React.Component {
    static propTypes = {
        witnesses: ChainTypes.ChainObjectsList.isRequired
    };

    constructor() {
        super();
        this.state = {
            sortBy: "rank",
            inverseSort: true
        };
    }

    _setSort(field) {
        this.setState({
            sortBy: field,
            inverseSort:
                field === this.state.sortBy
                    ? !this.state.inverseSort
                    : this.state.inverseSort
        });
    }

    render() {
        let {witnesses, current, cardView, witnessList} = this.props;
        let {sortBy, inverseSort} = this.state;
        let most_recent_aslot = 0;
        let ranks = {};

        witnesses
            .filter(a => {
                if (!a) {
                    return false;
                }
                return witnessList.indexOf(a.get("id")) !== -1;
            })
            .sort((a, b) => {
                if (a && b) {
                    return (
                        parseInt(b.get("total_votes"), 10) -
                        parseInt(a.get("total_votes"), 10)
                    );
                }
            })
            .forEach((w, index) => {
                if (w) {
                    let s = w.get("last_aslot");
                    if (most_recent_aslot < s) {
                        most_recent_aslot = s;
                    }

                    ranks[w.get("id")] = index + 1;
                }
            });

        let itemRows = null;
        if (witnesses.length > 0 && witnesses[1]) {
            itemRows = witnesses
                .filter(a => {
                    if (!a) {
                        return false;
                    }
                    let account = ChainStore.getObject(
                        a.get("witness_account")
                    );
                    if (!account) return false;
                    let name = account.get("name");
                    if (!name) return false;
                    return name.indexOf(this.props.filter) !== -1;
                })
                .sort((a, b) => {
                    let a_account = ChainStore.getObject(
                        a.get("witness_account")
                    );
                    let b_account = ChainStore.getObject(
                        b.get("witness_account")
                    );

                    if (!a_account || !b_account) {
                        return 0;
                    }
                    // console.log("a:", a.toJS());

                    switch (sortBy) {
                        case "name":
                            if (a_account.get("name") > b_account.get("name")) {
                                return inverseSort ? 1 : -1;
                            } else if (
                                a_account.get("name") < b_account.get("name")
                            ) {
                                return inverseSort ? -1 : 1;
                            } else {
                                return 0;
                            }
                            break;

                        case "rank":
                            return !inverseSort
                                ? ranks[b.get("id")] - ranks[a.get("id")]
                                : ranks[a.get("id")] - ranks[b.get("id")];
                            break;

                        default:
                            return !inverseSort
                                ? parseInt(b.get(sortBy), 10) -
                                      parseInt(a.get(sortBy), 10)
                                : parseInt(a.get(sortBy), 10) -
                                      parseInt(b.get(sortBy), 10);
                    }
                })
                .map(a => {
                    if (!cardView) {
                        return (
                            <WitnessRow
                                key={a.get("id")}
                                rank={ranks[a.get("id")]}
                                isCurrent={current === a.get("id")}
                                witness={a.get("witness_account")}
                                most_recent={this.props.current_aslot}
                            />
                        );
                    } else {
                        return (
                            <WitnessCard
                                key={a.get("id")}
                                rank={ranks[a.get("id")]}
                                witness={a.get("witness_account")}
                                most_recent={this.props.current_aslot}
                            />
                        );
                    }
                });
        }

        // table view
        if (!cardView) {
            return (
                <div className="table-witnesses-wrap">
                    <table className="table-witnesses">
                        <thead>
                            <tr>
                                <th
                                    className="clickable"
                                    onClick={this._setSort.bind(this, "rank")}
                                >
                                    <Translate content="explorer.witnesses.rank" />
                                </th>
                                <th
                                    className="clickable"
                                    onClick={this._setSort.bind(this, "name")}
                                >
                                    <Translate content="account.votes.name" />
                                </th>
                                <th
                                    className="clickable"
                                    onClick={this._setSort.bind(
                                        this,
                                        "last_aslot"
                                    )}
                                >
                                    <Translate content="explorer.blocks.last_block" />
                                </th>
                                <th
                                    className="clickable"
                                    onClick={this._setSort.bind(
                                        this,
                                        "last_confirmed_block_num"
                                    )}
                                >
                                    <Translate content="explorer.witnesses.last_confirmed" />
                                </th>
                                <th
                                    className="clickable"
                                    onClick={this._setSort.bind(
                                        this,
                                        "total_missed"
                                    )}
                                >
                                    <Translate content="explorer.witnesses.missed" />
                                </th>
                                <th
                                    className="clickable"
                                    onClick={this._setSort.bind(
                                        this,
                                        "total_votes"
                                    )}
                                >
                                    <Translate content="account.votes.votes" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>{itemRows}</tbody>
                    </table>
                </div>
            );
        } else {
            return <div className="row">{itemRows}</div>;
        }
    }
}
WitnessList = BindToChainState(WitnessList, {
    show_loader: true
});

class Witnesses extends React.Component {
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
            filterWitness: props.filterWitness || "",
            cardView: props.cardView
        };
    }

    _onFilter(e) {
        e.preventDefault();
        this.setState({filterWitness: e.target.value.toLowerCase()});

        SettingsActions.changeViewSetting({
            filterWitness: e.target.value.toLowerCase()
        });
    }

    _toggleView() {
        SettingsActions.changeViewSetting({
            cardView: !this.state.cardView
        });

        this.setState({
            cardView: !this.state.cardView
        });
    }

    render() {
        let {dynGlobalObject, globalObject} = this.props;
        dynGlobalObject = dynGlobalObject.toJS();
        globalObject = globalObject.toJS();

        let current = ChainStore.getObject(dynGlobalObject.current_witness),
            currentAccount = null;
        if (current) {
            currentAccount = ChainStore.getObject(
                current.get("witness_account")
            );
        }

        let content = (
            <div className="container-fluid" style={{marginTop: "20px"}}>
                <div className="witnesses-board">
                    <div className="witnesses-board__sidetable">
                        <div className="witnesses-board__sidetable__row">
                            <Translate content="explorer.witnesses.current" />
                            <span>
                                {currentAccount
                                    ? currentAccount.get("name")
                                    : null}
                            </span>
                        </div>
                        <div className="witnesses-board__sidetable__row">
                            <Translate content="explorer.blocks.active_witnesses" />
                            <span>
                                {
                                    Object.keys(globalObject.active_witnesses)
                                        .length
                                }
                            </span>
                        </div>
                        <div className="witnesses-board__sidetable__row">
                            <Translate content="explorer.witnesses.participation" />
                            <span>{dynGlobalObject.participation}%</span>
                        </div>
                        <div className="witnesses-board__sidetable__row">
                            <Translate content="explorer.witnesses.pay" />
                            <FormattedAsset
                                amount={
                                    globalObject.parameters
                                        .witness_pay_per_block
                                }
                                asset="1.3.0"
                            />
                        </div>
                        <div className="witnesses-board__sidetable__row">
                            <Translate content="explorer.witnesses.budget" />
                            <FormattedAsset
                                amount={dynGlobalObject.witness_budget}
                                asset="1.3.0"
                            />
                        </div>
                        <div className="witnesses-board__sidetable__row">
                            <Translate content="explorer.witnesses.next_vote" />
                            <TimeAgo
                                time={
                                    new Date(
                                        dynGlobalObject.next_maintenance_time +
                                            "Z"
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="witnesses-board__accounts">
                        <div className="container-fluid">
                            {/*filter*/}
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <input
                                        type="text"
                                        value={this.state.filterWitness}
                                        onChange={this._onFilter.bind(this)}
                                        placeholder="Filter accounts..."
                                    />
                                </div>
                                <div className="col-xl-3 offset-xl-2 offset-lg-0 col-lg-6">
                                    <DropdownList
                                        options={[
                                            {
                                                key: "card-true",
                                                label: counterpart.translate(
                                                    "explorer.witnesses.card"
                                                )
                                            },
                                            {
                                                key: "card-false",
                                                label: counterpart.translate(
                                                    "explorer.witnesses.table"
                                                )
                                            }
                                        ]}
                                        selected={{
                                            key: this.state.cardView
                                                ? "card-true"
                                                : "card-false",
                                            label: this.state.cardView
                                                ? counterpart.translate(
                                                      "explorer.witnesses.card"
                                                  )
                                                : counterpart.translate(
                                                      "explorer.witnesses.table"
                                                  )
                                        }}
                                        onChange={e =>
                                            this._toggleView.bind(this)(e)
                                        }
                                    />
                                </div>
                            </div>
                            {/*end of filter*/}
                            <WitnessList
                                current_aslot={dynGlobalObject.current_aslot}
                                current={current ? current.get("id") : null}
                                witnesses={Immutable.List(
                                    globalObject.active_witnesses
                                )}
                                witnessList={globalObject.active_witnesses}
                                filter={this.state.filterWitness}
                                cardView={this.state.cardView}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="content">
                <ExplorerTabs
                    defaultActiveTab="explorer.witnesses.title"
                    defaultContent={content}
                />
            </div>
        );
    }
}
Witnesses = BindToChainState(Witnesses);

class WitnessStoreWrapper extends React.Component {
    render() {
        return <Witnesses {...this.props} />;
    }
}

WitnessStoreWrapper = connect(
    WitnessStoreWrapper,
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

export default WitnessStoreWrapper;
