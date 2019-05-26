import React from "react";
import Identicon from "./Identicon";
import {Component} from "react";
import PropTypes from "prop-types";

class AccountImage extends Component {
    render() {
        let {account, image, style} = this.props;
        let {height, width} = this.props.size;
        let custom_image = image ? (
            <img src={image} height={height + "px"} width={width + "px"} />
        ) : (
            <Identicon id={account} account={account} size={this.props.size} />
        );

        return (
            <div style={style} className="account-image">
                {custom_image}
            </div>
        );
    }
}

AccountImage.defaultProps = {
    src: "",
    account: "",
    size: {height: 120, width: 120},
    style: {}
};

AccountImage.propTypes = {
    src: PropTypes.string,
    account: PropTypes.string,
    size: PropTypes.object.isRequired,
    style: PropTypes.object
};

export default AccountImage;
