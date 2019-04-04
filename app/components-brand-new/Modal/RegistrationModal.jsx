import React from "react";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import Translate from "react-translate-component";
import {Link} from "react-router/es";
import BaseModal from "../../components/Modal/BaseModal";
import PropTypes from "prop-types";
import counterpart from "counterpart";

class RegistrationModal extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = this.getInitialState(props);
    }

    getInitialState() {
        return {
            open: false
        };
    }

    show() {
        this.setState({open: true}, () => {
            ZfApi.publish(this.props.id, "open");
        });
    }

    onClose(publishClose = true) {
        this.setState(
            {
                open: false,
            },
            () => {
                if (publishClose) ZfApi.publish(this.props.id, "close");
            }
        );
    }

    render() {

        return !this.state.open ? null : (
            <BaseModal
                id={this.props.id}
                overlay={true}
                onClose={this.onClose.bind(this, false)}
            >
                <div
                    className="grid-block vertical no-overflow"
                >
                    <div
                        className="content-block registration-types"
                        style={{textAlign: "center", textTransform: "none"}}
                    >
                        <Link
                            className="registration-type"
                            to="/create-account/password"
                        >
                            <div className="registration-type__heading">{counterpart.translate("account.create_account_type.cloud_wallet.head")}</div>
                            <ul className="registration-type__list">
                                <li>{counterpart.translate("account.create_account_type.cloud_wallet.feature_1")}</li>
                                <li>{counterpart.translate("account.create_account_type.cloud_wallet.feature_2")}</li>
                                <li>{counterpart.translate("account.create_account_type.cloud_wallet.feature_3")}</li>
                                <li>{counterpart.translate("account.create_account_type.cloud_wallet.feature_4")}</li>
                            </ul>
                        </Link>
                        <Link
                            className="registration-type"
                            to="/create-account/wallet"
                        >
                            <div className="registration-type__heading">{counterpart.translate("account.create_account_type.local_wallet.head")}</div>
                            <ul className="registration-type__list">
                                <li>{counterpart.translate("account.create_account_type.local_wallet.feature_1")}</li>
                                <li>{counterpart.translate("account.create_account_type.local_wallet.feature_2")}</li>
                                <li>{counterpart.translate("account.create_account_type.local_wallet.feature_3")}</li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </BaseModal>
        );
    }
}

export default RegistrationModal;