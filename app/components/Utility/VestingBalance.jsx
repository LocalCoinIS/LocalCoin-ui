import React from "react";
import FormattedAsset from "./FormattedAsset";
import ChainTypes from "./ChainTypes";
import BindToChainState from "./BindToChainState";

/**
 *  Given a balance_object, displays it in a pretty way
 *
 *  Expects one property, 'balance' which should be a balance_object id
 */

class VestingBalance extends React.Component {
    static propTypes = {
        balance: ChainTypes.ChainObject.isRequired
    };

    render() {
        let amount = Number(this.props.balance.getIn(["balance", "amount"]));
        let type = this.props.balance.getIn(["balance", "asset_id"]);
        return (
            <FormattedAsset
                hide_asset={this.props.hide_asset}
                amount={amount}
                asset={type}
                decimalOffset={this.props.decimalOffset || 0}
            />
        );
    }
}

export default BindToChainState(VestingBalance);
