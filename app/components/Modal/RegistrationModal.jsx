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
                            <span className="registration-type__icon">
                                <svg fill="#abbfd9" height="50px" enable-background="new 0 0 548.176 548.176" viewBox="0 0 548.176 548.176" xmlns="http://www.w3.org/2000/svg"><path d="m524.183 297.065c-15.985-19.893-36.265-32.691-60.815-38.399 7.81-11.993 11.704-25.126 11.704-39.399 0-20.177-7.139-37.401-21.409-51.678-14.273-14.272-31.498-21.411-51.675-21.411-18.271 0-34.071 5.901-47.39 17.703-11.225-27.028-29.075-48.917-53.529-65.667-24.46-16.746-51.728-25.125-81.802-25.125-40.349 0-74.802 14.279-103.353 42.83-28.553 28.544-42.825 62.999-42.825 103.351 0 2.856.191 6.945.571 12.275-22.078 10.279-39.876 25.838-53.389 46.686-13.512 20.836-20.271 43.824-20.271 68.949 0 35.211 12.517 65.333 37.544 90.359 25.028 25.033 55.15 37.548 90.362 37.548h310.636c30.259 0 56.096-10.715 77.512-32.121 21.413-21.412 32.121-47.249 32.121-77.515-.003-25.694-8.001-48.499-23.992-68.386z"/></svg>
                            </span>
                            <ul className="registration-type__list">
                                <li className="registration-type__choose">
                                {counterpart.translate("account.create_account_type.cloud_wallet.feature_1_1")}
                                    <span className="red">
                                        {counterpart.translate("account.create_account_type.cloud_wallet.feature_1_2")}
                                    </span>
                                </li>
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
                            <span className="registration-type__icon">
                                <svg fill="#abbfd9" height="37px" viewBox="0 0 414.8 312.8" xmlns="http://www.w3.org/2000/svg"><path d="m360.4 0h-312.8a47.6 47.6 0 0 0 -47.6 47.6v231.2a34 34 0 0 0 34 34h312.8a34 34 0 0 0 34-34v-91.46h-64.94a41.53 41.53 0 0 1 -41.41-41.41v-18.57a41.53 41.53 0 0 1 41.41-41.36h64.94v-24.8a27.2 27.2 0 0 0 -27.2-27.2h-312.8a6.8 6.8 0 1 1 0-13.6h312.8a40.8 40.8 0 0 1 40.8 40.8v209.1a47.71 47.71 0 0 0 20.4-39.1v-176.8a54.41 54.41 0 0 0 -54.4-54.4z"/><path d="m378.19 134.34a5.35 5.35 0 0 0 -4-1.69h-1.89v-11.66a26.56 26.56 0 0 0 -7.84-19.17 25.69 25.69 0 0 0 -37.3.1 26.56 26.56 0 0 0 -7.74 19.21v11.66h-1.89a5.37 5.37 0 0 0 -4 1.71 5.7 5.7 0 0 0 -1.64 4.13l.09 35a5.72 5.72 0 0 0 1.67 4.13 5.39 5.39 0 0 0 4 1.69l56.66-.15a5.43 5.43 0 0 0 4-1.71 5.69 5.69 0 0 0 1.64-4.14l-.09-35a5.69 5.69 0 0 0 -1.67-4.11zm-17.19-1.66-30.22.08v-11.66a15.17 15.17 0 0 1 4.4-11 14.79 14.79 0 0 1 21.36-.06 15.2 15.2 0 0 1 4.46 11z"/></svg>
                            </span>
                            <ul className="registration-type__list">
                                <li className="registration-type__choose"
                                    >
                                    {counterpart.translate("account.create_account_type.local_wallet.feature_1_1")}
                                    <span className="green">
                                        {counterpart.translate("account.create_account_type.local_wallet.feature_1_2")}
                                    </span>
                                </li>
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