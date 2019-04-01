import React, {Component} from "react";
import {FormattedDate} from "react-intl";
import Translate from "react-translate-component";
import WalletActions from "actions/WalletActions";
import WalletDb from "stores/WalletDb";
import {hash} from "bitsharesjs/es";

export default class BackupBrainkey extends Component {
    constructor() {
        super();
        this.state = this._getInitialState();
    }

    _getInitialState() {
        return {
            password: null,
            brainkey: null,
            invalid_password: false
        };
    }

    render() {
        var content;
        var brainkey_backup_date = WalletDb.getWallet()
            ? WalletDb.getWallet().brainkey_backup_date
            : null;

        var brainkey_backup_time = brainkey_backup_date ? (
            <div>
                <Translate content="wallet.brainkey_backed_up" />:{" "}
                <FormattedDate value={brainkey_backup_date} />
            </div>
        ) : (
            <Translate
                className="facolor-error"
                component="p"
                content="wallet.brainkey_not_backed_up"
            />
        );

        if (this.state.verified) {
            var sha1 = hash
                .sha1(this.state.brainkey)
                .toString("hex")
                .substring(0, 4);
            content = (
                <div>
                    <h3>
                        <Translate content="wallet.brainkey" />
                    </h3>
                    <div className="card">
                        <div className="card-content">
                            <h5>{this.state.brainkey}</h5>
                        </div>
                    </div>
                    <br />
                    <pre className="no-overflow">
                        sha1 hash of the brainkey: {sha1}
                    </pre>
                    <br />
                    {brainkey_backup_time}
                </div>
            );
        }

        if (!content && this.state.brainkey) {
            var sha1 = hash
                .sha1(this.state.brainkey)
                .toString("hex")
                .substring(0, 4);
            content = (
                <div>
                    <h3>
                        <Translate content="wallet.brainkey" />
                    </h3>
                    <div className="card">
                        <div className="card-content">
                            <h5>{this.state.brainkey}</h5>
                        </div>
                    </div>
                    <div>
                        <pre className="no-overflow">
                            sha1 hash of your brainkey: {sha1}
                        </pre>
                    </div>
                    <hr />
                    <div style={{padding: "10px 0 20px 0"}}>
                        <Translate content="wallet.brainkey_w1" />
                        <br />
                        <Translate content="wallet.brainkey_w2" />
                        <br />
                        <Translate content="wallet.brainkey_w3" />
                    </div>

                    <button
                        className="btn large inverted button"
                        onClick={this.onComplete.bind(this)}
                    >
                        <Translate content="wallet.verify" />
                    </button>
                    <button
                        className="btn large outline button cancel"
                        onClick={this.reset.bind(this)}
                    >
                        <Translate content="wallet.cancel" />
                    </button>
                </div>
            );
        }

        if (!content) {
            var valid = this.state.password && this.state.password !== "";
            content = (
                <div>
                    <form
                        onSubmit={this.onSubmit.bind(this)}
                        className="name-form"
                        noValidate
                    >
                        <div className="options__form__row">
                            <label>
                                <Translate content="wallet.enter_password" />
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={this.onPassword.bind(this)}
                            />
                            <p>
                                {this.state.invalid_password ? (
                                    <span className="error">
                                        Invalid password
                                    </span>
                                ) : (
                                    <span>
                                        <Translate content="wallet.pwd4brainkey" />
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            {brainkey_backup_time}
                            <br />
                        </div>
                        <button className="btn large inverted button success">
                            <Translate content="wallet.show_brainkey" />
                        </button>
                    </form>
                </div>
            );
        }
        return <div>{content}</div>;
    }

    onComplete(brnkey) {
        this.setState({verified: true});
        WalletActions.setBrainkeyBackupDate();
    }

    reset(e) {
        if (e) {
            e.preventDefault();
        }
        this.setState(this._getInitialState());
    }

    onBack(e) {
        e.preventDefault();
        window.history.back();
    }

    onSubmit(e) {
        e.preventDefault();
        var was_locked = WalletDb.isLocked();
        let {success} = WalletDb.validatePassword(this.state.password, true);
        if (success) {
            var brainkey = WalletDb.getBrainKey();
            if (was_locked) WalletDb.onLock();
            this.setState({brainkey});
        } else this.setState({invalid_password: true});
    }

    onPassword(event) {
        this.setState({password: event.target.value, invalid_password: false});
    }
}
