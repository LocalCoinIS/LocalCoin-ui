import React, {Component} from "react";
import {Link} from "react-router/es";
import Translate from "react-translate-component";
import notify from "actions/NotificationActions";
import cname from "classnames";
import WalletDb from "stores/WalletDb";
import PasswordConfirm from "../../components/Wallet/PasswordConfirm";
import counterpart from "counterpart";
import PropTypes from "prop-types";

export default class WalletChangePassword extends Component {
    constructor() {
        super();
        this.state = {success: false};
    }

    onAccept(e) {
        e.preventDefault();
        var {old_password, new_password} = this.state;
        WalletDb.changePassword(old_password, new_password, true /*unlock*/)
            .then(() => {
                notify.success("Password changed");
                this.setState({success: true});
                // window.history.back();
            })
            .catch(error => {
                // Programmer or database error ( validation missed something? )
                // .. translation may be unnecessary
                console.error(error);
                notify.error("Unable to change password: " + error);
            });
    }

    onOldPassword(old_password) {
        this.setState({old_password});
    }
    onNewPassword(new_password) {
        this.setState({new_password});
    }

    _onCancel() {
        this.setState({
            old_password: ""
        });

        this.refs.pwd.cancel();
    }

    render() {
        var ready = !!this.state.new_password;
        let {success} = this.state;

        if (success) {
            return (
                <div>
                    <Translate component="p" content="wallet.change_success" />
                    <Translate component="p" content="wallet.change_backup" />
                    <Link to="/wallet/backup/create">
                        <div className="button outline">
                            <Translate content="wallet.create_backup" />
                        </div>
                    </Link>
                </div>
            );
        }

        return (
            <div>
                <WalletPassword
                    ref="pwd"
                    onValid={this.onOldPassword.bind(this)}
                >
                    <PasswordConfirm
                        onSubmit={this.onAccept.bind(this)}
                        newPassword={true}
                        onValid={this.onNewPassword.bind(this)}
                    >
                        <button
                            className={cname("btn large inverted button", {
                                disabled: !ready
                            })}
                            type="submit"
                            onClick={this.onAccept.bind(this)}
                        >
                            <Translate content="wallet.accept" />
                        </button>
                        <div
                            className="button btn large outline"
                            onClick={this._onCancel.bind(this)}
                        >
                            <Translate content="wallet.cancel" />
                        </div>
                    </PasswordConfirm>
                </WalletPassword>
            </div>
        );
    }
}

class WalletPassword extends Component {
    static propTypes = {
        onValid: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            password: "",
            verified: false
        };
    }

    cancel() {
        this.setState({
            verified: false,
            password: ""
        });
    }

    onPassword(e) {
        e.preventDefault();
        let {success} = WalletDb.validatePassword(this.state.password, true);
        if (success) {
            this.setState({verified: true});
            this.props.onValid(this.state.password);
        } else notify.error("Invalid Password");
    }

    formChange(event) {
        var state = {};
        state[event.target.id] = event.target.value;
        this.setState(state);
    }

    render() {
        if (this.state.verified) {
            return <div className="grid-content">{this.props.children}</div>;
        } else {
            return (
                <form
                    className="options__form"
                    onSubmit={this.onPassword.bind(this)}
                >
                    <div className="options__form__row">
                        <label>
                            {counterpart.translate("wallet.existing_password")}
                        </label>
                        <input
                            placeholder={counterpart.translate(
                                "wallet.current_pass"
                            )}
                            type="password"
                            id="password"
                            onChange={this.formChange.bind(this)}
                            value={this.state.password}
                        />
                    </div>
                    <div className="options__form__row">
                        <button className="btn large inverted button">
                            <Translate content="wallet.submit" />
                        </button>
                    </div>
                </form>
            );
        }
    }
}

class Reset extends Component {
    render() {
        var label = this.props.label || <Translate content="wallet.reset" />;
        return (
            <span className="button outline" onClick={this.onReset.bind(this)}>
                {label}
            </span>
        );
    }

    onReset() {
        window.history.back();
    }
}
