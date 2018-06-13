import React from "react";
import BalanceComponent from "../Utility/BalanceComponent";
import AccountImage from "../Account/AccountImage";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import AccountStore from "stores/AccountStore";
import {ChainStore} from "bitsharesjs/es";
import PropTypes from "prop-types";

/**
 *  @brief displays the summary of a given account in a condenced view (for the dashboard)
 *
 *  This card has the following properties:
 *
 *  { account: ${name_or_id} }
 */

class AccountCard extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired
    };

    onCardClick(e) {
        e.preventDefault();
        let name = this.props.account.get("name");
        this.context.router.push(`/account/${name}/overview/`);
    }

    render() {
        let name = null;
        let balances = null;
        let isMyAccount = false;
        if (this.props.account) {
            name = this.props.account.get("name");
            let abal = this.props.account.get("balances");
            if (abal) {
                balances = abal
                    .map(x => {
                        let balanceAmount = ChainStore.getObject(x);
                        if (!balanceAmount.get("balance")) {
                            return null;
                        }
                        return (
                            <li key={x}>
                                <BalanceComponent balance={x} />
                            </li>
                        );
                    })
                    .toArray();
            }
            isMyAccount = AccountStore.isMyAccount(this.props.account);
        }

        return (
            <div
                className="grid-content account-card"
                onClick={this.onCardClick.bind(this)}
            >
                <div className={"card" + (isMyAccount ? " my-account" : "")}>
                    <h4 className="text-center">{name}</h4>
                    <div className="card-content clearfix">
                        <div className="float-left">
                            <AccountImage
                                account={name}
                                size={{height: 64, width: 64}}
                            />
                        </div>
                        <ul className="balances">{balances}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BindToChainState(AccountCard);
