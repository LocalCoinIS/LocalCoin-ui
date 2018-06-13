import React from "react";
import PropTypes from "prop-types";
import FormattedAsset from "./FormattedAsset";
import ChainTypes from "./ChainTypes";
import BindToChainState from "./BindToChainState";
import {estimateFee} from "common/trxHelper";

/**
 *
 *  Given an operation type, displays the CORE fee for that operation
 *
 */

class FormattedFee extends React.Component {
    static propTypes = {
        globalObject: ChainTypes.ChainObject.isRequired,
        opType: PropTypes.string,
        options: PropTypes.array
    };

    static defaultProps = {
        globalObject: "2.0.0",
        options: []
    };

    getFee() {
        // Return fee via refs
        return estimateFee(
            this.props.opType,
            this.props.options,
            this.props.globalObject
        );
    }

    render() {
        let {opType, options, globalObject} = this.props;

        if (!opType || !options || !globalObject) {
            return null;
        }

        let amount = estimateFee(opType, options, globalObject);

        return <FormattedAsset amount={amount} asset="1.3.0" />;
    }
}

export default BindToChainState(FormattedFee);
