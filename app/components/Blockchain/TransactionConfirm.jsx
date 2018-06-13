import React from "react";
import BaseModal from "../Modal/BaseModal";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import Transaction from "./Transaction";
import Translate from "react-translate-component";
import TransactionConfirmActions from "actions/TransactionConfirmActions";
import TransactionConfirmStore from "stores/TransactionConfirmStore";
import {connect} from "alt-react";
import Icon from "../Icon/Icon";
import LoadingIndicator from "../LoadingIndicator";
import WalletDb from "stores/WalletDb";
import AccountStore from "stores/AccountStore";
import AccountSelect from "components/Forms/AccountSelect";
import {ChainStore} from "bitsharesjs/es";
import utils from "common/utils";
import Operation from "components/Blockchain/Operation";
import notify from "actions/NotificationActions";

class TransactionConfirm extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (!nextProps.transaction) {
            return false;
        }

        return !utils.are_equal_shallow(nextProps, this.props);
    }

    componentDidUpdate() {
        if (!this.props.closed) {
            ZfApi.publish("transaction_confirm_modal", "open");
        } else {
            ZfApi.publish("transaction_confirm_modal", "close");
        }
    }

    onConfirmClick(e) {
        e.preventDefault();
        if (this.props.propose) {
            const propose_options = {
                fee_paying_account: ChainStore.getAccount(
                    this.props.fee_paying_account
                ).get("id")
            };
            this.props.transaction.update_head_block().then(() => {
                WalletDb.process_transaction(
                    this.props.transaction.propose(propose_options),
                    null,
                    true
                );
            });
        } else {
            TransactionConfirmActions.broadcast(
                this.props.transaction,
                this.props.resolve,
                this.props.reject
            );
        }
    }

    onCloseClick(e) {
        e.preventDefault();
        TransactionConfirmActions.close();
    }

    onProposeClick(e) {
        e.preventDefault();
        TransactionConfirmActions.togglePropose();
    }

    onProposeAccount(fee_paying_account) {
        ChainStore.getAccount(fee_paying_account);
        TransactionConfirmActions.proposeFeePayingAccount(fee_paying_account);
    }

    componentWillReceiveProps(np) {
        if (np.broadcast && np.included && !this.props.included && !np.error) {
            notify.addNotification.defer({
                children: (
                    <div>
                        <p>
                            <Translate content="transaction.transaction_confirmed" />
                            &nbsp;&nbsp;<span>
                                <Icon
                                    name="checkmark-circle"
                                    title="icons.checkmark_circle.operation_succeed"
                                    size="1x"
                                    className="success"
                                />
                            </span>
                        </p>
                        <table>
                            <Operation
                                op={
                                    this.props.transaction.serialize()
                                        .operations[0]
                                }
                                block={1}
                                current={"1.2.0"}
                                hideFee
                                inverted={false}
                                hideOpLabel={true}
                                hideDate={true}
                            />
                        </table>
                    </div>
                ),
                level: "success",
                autoDismiss: 3
            });
        }
    }

    render() {
        let {broadcast, broadcasting} = this.props;
        if (!this.props.transaction || this.props.closed) {
            return null;
        }
        let button_group,
            header,
            confirmButtonClass = "button";
        if (this.props.propose && !this.props.fee_paying_account)
            confirmButtonClass += " disabled";

        if (this.props.error || this.props.included) {
            header = this.props.error ? (
                <div
                    style={{minHeight: 100}}
                    className="grid-content modal__header has-error"
                >
                    <Translate
                        component="h3"
                        content="transaction.broadcast_fail"
                    />
                    <h6>{this.props.error}</h6>
                </div>
            ) : (
                <div
                    style={{minHeight: 100}}
                    className="grid-content modal__header"
                >
                    <div className="float-left">
                        <Icon
                            name="checkmark-circle"
                            title="icons.checkmark_circle.operation_succeed"
                            size="4x"
                            className="success"
                        />
                    </div>
                    <Translate
                        component="h3"
                        content="transaction.transaction_confirmed"
                    />
                    <h6>
                        #{this.props.trx_id}@{this.props.trx_block_num}
                    </h6>
                </div>
            );
            button_group = (
                <div className="button-group">
                    <div
                        className="button primary hollow"
                        onClick={this.onCloseClick.bind(this)}
                    >
                        <Translate content="transfer.close" />
                    </div>
                </div>
            );
        } else if (broadcast) {
            header = (
                <div
                    style={{minHeight: 100}}
                    className="grid-content modal__header"
                >
                    <Translate
                        component="h3"
                        content="transaction.broadcast_success"
                    />
                    <Translate component="h6" content="transaction.waiting" />
                </div>
            );
            button_group = (
                <div className="button-group">
                    <div
                        className="button primary hollow"
                        onClick={this.onCloseClick.bind(this)}
                    >
                        <Translate content="transfer.close" />
                    </div>
                </div>
            );
        } else if (broadcasting) {
            header = (
                <div
                    style={{minHeight: 100}}
                    className="grid-content modal__header"
                >
                    <Translate
                        component="h3"
                        content="transaction.broadcasting"
                    />
                    <div style={{width: "100%", textAlign: "center"}}>
                        <LoadingIndicator type="three-bounce" />
                    </div>
                </div>
            );
            button_group = <div style={{height: 55}} />;
        } else {
            header = (
                <div
                    style={{minHeight: 100}}
                    className="grid-content modal__header"
                >
                    <Translate component="h3" content="transaction.confirm" />
                </div>
            );
            button_group = (
                <div className="button-group">
                    <div className="grid-block full-width-content">
                        <div
                            className={confirmButtonClass}
                            onClick={this.onConfirmClick.bind(this)}
                        >
                            {this.props.propose ? (
                                <Translate content="propose" />
                            ) : (
                                <Translate content="transfer.confirm" />
                            )}
                        </div>
                        <div
                            className="button primary hollow"
                            onClick={this.onCloseClick.bind(this)}
                        >
                            <Translate content="account.perm.cancel" />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div ref="transactionConfirm">
                <BaseModal
                    id="transaction_confirm_modal"
                    ref="modal"
                    overlay={true}
                    overlayClose={!broadcasting}
                    noCloseBtn={true}
                >
                    <div
                        style={{minHeight: 350}}
                        className="grid-block vertical no-padding no-margin"
                    >
                        {!broadcasting ? (
                            <div
                                className="close-button"
                                onClick={this.onCloseClick.bind(this)}
                            >
                                &times;
                            </div>
                        ) : null}
                        {header}
                        <div
                            className="grid-content shrink"
                            style={{
                                maxHeight: "60vh",
                                overflowY: "auto",
                                overflowX: "hidden"
                            }}
                        >
                            <Transaction
                                key={Date.now()}
                                trx={this.props.transaction.serialize()}
                                index={0}
                                no_links={true}
                            />
                        </div>

                        {/* P R O P O S E   F R O M */}
                        {this.props.propose ? (
                            <div className="grid-content full-width-content form-group">
                                <label>
                                    <Translate content="account.propose_from" />
                                </label>
                                <AccountSelect
                                    className="full-width"
                                    account_names={AccountStore.getMyAccounts()}
                                    onChange={this.onProposeAccount.bind(this)}
                                />
                            </div>
                        ) : null}

                        <div
                            className="grid-block shrink"
                            style={{paddingTop: "1rem"}}
                        >
                            {button_group}

                            {/* P R O P O S E   T O G G L E */}
                            {!this.props.transaction.has_proposed_operation() &&
                            !(broadcast || broadcasting) ? (
                                <div className="align-right grid-block">
                                    <label
                                        style={{
                                            paddingTop: "0.5rem",
                                            paddingRight: "0.5rem"
                                        }}
                                    >
                                        <Translate content="propose" />:
                                    </label>
                                    <div
                                        className="switch"
                                        onClick={this.onProposeClick.bind(this)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={this.props.propose}
                                        />
                                        <label />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </BaseModal>
            </div>
        );
    }
}

TransactionConfirm = connect(TransactionConfirm, {
    listenTo() {
        return [TransactionConfirmStore];
    },
    getProps() {
        return TransactionConfirmStore.getState();
    }
});

export default TransactionConfirm;
