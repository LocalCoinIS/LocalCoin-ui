import React from "react";
import Translate from "react-translate-component";
import FormattedAsset from "../Utility/FormattedAsset";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";

class Statistics extends React.Component {
    static propTypes = {
        stat_object: ChainTypes.ChainObject.isRequired
    };

    render() {
        let stat_object = this.props.stat_object.toJS();
        return (
            <tbody>
                <tr>
                    <td>
                        <Translate content="account.member.fees_paid" />{" "}
                    </td>
                    <td>
                        <FormattedAsset
                            amount={parseFloat(stat_object.lifetime_fees_paid)}
                            asset="1.3.0"
                        />
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default BindToChainState(Statistics);
