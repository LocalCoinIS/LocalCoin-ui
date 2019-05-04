import React from "react";
import {connect} from "alt-react";
import classNames from "classnames";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import AccountNameInput from "./../Forms/AccountNameInput";
import PasswordInput from "./../Forms/PasswordInput";
import WalletDb from "stores/WalletDb";
import notify from "actions/NotificationActions";
import {Link} from "react-router/es";
import AccountSelect from "../Forms/AccountSelect";
import WalletUnlockActions from "actions/WalletUnlockActions";
import TransactionConfirmStore from "stores/TransactionConfirmStore";
import LoadingIndicator from "../LoadingIndicator";
import WalletActions from "actions/WalletActions";
import Translate from "react-translate-component";
import {ChainStore, FetchChain} from "bitsharesjs/es";
import {BackupCreate} from "../Wallet/Backup";
import ReactTooltip from "react-tooltip";
import utils from "common/utils";
import SettingsActions from "actions/SettingsActions";
import counterpart from "counterpart";
import {hash} from "bitsharesjs/es";
import SendModal from "../Modal/SendModal";
import WalletUnlockStore from "stores/WalletUnlockStore";

class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            validAccountName: false,
            accountName: "",
            validPassword: false,
            registrar_account: null,
            loading: false,
            hide_refcode: true,
            show_identicon: false,
            step: 1,
            brainkey: null,
            isCreateAcc: true,
        };
        this.onFinishConfirm = this.onFinishConfirm.bind(this);

        this.accountNameInput = null;
    }

    componentWillMount() {
        SettingsActions.changeSetting({
            setting: "passwordLogin",
            value: false
        });
    }

    componentDidMount() {
        this.props.updateStep(this.state.step);
        ReactTooltip.rebuild();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !utils.are_equal_shallow(nextState, this.state);
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.updateStep(this.state.step);
    }

    isValid() {
        let firstAccount = AccountStore.getMyAccounts().length === 0;
        let valid = this.state.validAccountName;
        if (!WalletDb.getWallet()) {
            valid = valid && this.state.validPassword;
        }
        if (!firstAccount) {
            valid = valid && this.state.registrar_account;
        }
        return valid;
    }

    onAccountNameChange(e) {
        const state = {};
        if (e.valid !== undefined) state.validAccountName = e.valid;
        if (e.value !== undefined) state.accountName = e.value;
        if (!this.state.show_identicon) state.show_identicon = true;
        this.setState(state);
    }

    onPasswordChange(e) {
        this.setState({validPassword: e.valid});
    }

    onFinishConfirm(confirm_store_state) {
        if (
            confirm_store_state.included &&
            confirm_store_state.broadcasted_transaction
        ) {
            TransactionConfirmStore.unlisten(this.onFinishConfirm);
            TransactionConfirmStore.reset();

            FetchChain("getAccount", this.state.accountName, undefined, {
                [this.state.accountName]: true
            }).then(() => {
                console.log("onFinishConfirm");
                this.props.router.push("/wallet/backup/create?newAccount=true");
            });
        }
    }

    createAccount(name) {
        let refcode = this.refs.refcode ? this.refs.refcode.value() : null;
        let referralAccount = AccountStore.getState().referralAccount;
        WalletUnlockActions.unlock()
            .then(() => {
                this.setState({loading: true});

                AccountActions.createAccount(
                    name,
                    this.state.registrar_account,
                    referralAccount || this.state.registrar_account,
                    0,
                    refcode
                )
                    .then(() => {
                        // User registering his own account
                        if (this.state.registrar_account) {
                            FetchChain("getAccount", name, undefined, {
                                [name]: true
                            }).then(() => {
                                var brainkey = WalletDb.getBrainKey();
                                this.setState({
                                    step: 2,
                                    loading: false,
                                    brainkey
                                });
                            });
                            TransactionConfirmStore.listen(
                                this.onFinishConfirm
                            );
                        } else {
                            // Account registered by the faucet
                            FetchChain("getAccount", name, undefined, {
                                [name]: true
                            }).then(() => {
                                var brainkey = WalletDb.getBrainKey();
                                this.setState({
                                    step: 2,
                                    loading: false,
                                    brainkey
                                });
                            });
                        }
                    })
                    .catch(error => {
                        console.log(
                            "ERROR AccountActions.createAccount",
                            error
                        );
                        let error_msg =
                            error.base &&
                            error.base.length &&
                            error.base.length > 0
                                ? error.base[0]
                                : "unknown error";
                        if (error.remote_ip) error_msg = error.remote_ip[0];
                        if (error_msg === "Only one account per IP") error_msg = "Try again in 24 hours";
                        notify.addNotification({
                            message: `Failed to create account: ${name} - ${error_msg}`,
                            level: "error",
                            autoDismiss: 10
                        });
                        this.setState({loading: false});
                    });
            })
            .catch(() => {});
    }

    createWallet(password) {
        return WalletActions.setWallet(
            "default", //wallet name
            password
        )
            .then(() => {
                console.log(
                    "Congratulations, your wallet was successfully created."
                );
            })
            .catch(err => {
                console.log("CreateWallet failed:", err);
                notify.addNotification({
                    message: `Failed to create wallet: ${err}`,
                    level: "error",
                    autoDismiss: 10
                });
            });
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.isValid()) return;
        let account_name = this.accountNameInput.getValue();
        if (WalletDb.getWallet()) {
            this.createAccount(account_name);
        } else {
            let password = this.refs.password.value();
            this.createWallet(password).then(() =>
                this.createAccount(account_name)
            );
        }
    }

    onRegistrarAccountChange(registrar_account) {
        this.setState({registrar_account});
    }

    // showRefcodeInput(e) {
    //     e.preventDefault();
    //     this.setState({hide_refcode: false});
    // }

    _renderAccountCreateForm() {
        let {registrar_account} = this.state;

        let my_accounts = AccountStore.getMyAccounts();
        let firstAccount = my_accounts.length === 0;
        let hasWallet = WalletDb.getWallet();
        let valid = this.isValid();
        let isLTM = false;
        let registrar = registrar_account
            ? ChainStore.getAccount(registrar_account)
            : null;
        if (registrar) {
            if (registrar.get("lifetime_referrer") == registrar.get("id")) {
                isLTM = true;
            }
        }

        let buttonClass = classNames("submit-button button no-margin btn inverted large", {
            disabled: !valid || (registrar_account && !isLTM)
        });

        return (
            <form
                style={{maxWidth: "40rem"}}
                onSubmit={this.onSubmit.bind(this)}
                noValidate
            >
                <p
                    style={{
                        fontWeight: "normal",
                        fontFamily: "Roboto-Medium, arial, sans-serif",
                        fontStyle: "normal"
                    }}
                >
                    {firstAccount ? (
                        <Translate content="wallet.create_w_a" />
                    ) : (
                        <Translate content="wallet.create_a" />
                    )}
                </p>
                <AccountNameInput
                    ref={ref => {
                        if (ref) {
                            this.accountNameInput = ref.refs.nameInput;
                        }
                    }}
                    cheapNameOnly={!!firstAccount}
                    onChange={this.onAccountNameChange.bind(this)}
                    accountShouldNotExist={true}
                    placeholder={counterpart.translate("wallet.account_public")}
                    noLabel
                />

                {/* Only ask for password if a wallet already exists */}
                {hasWallet ? null : (
                    <PasswordInput
                        ref="password"
                        confirmation={true}
                        onChange={this.onPasswordChange.bind(this)}
                        noLabel
                        checkStrength
                    />
                )}

                {/* If this is not the first account, show dropdown for fee payment account */}
                {firstAccount ? null : (
                    <div className="full-width-content form-group">
                        <label>
                            <Translate content="account.pay_from" />
                        </label>
                        <AccountSelect
                            account_names={my_accounts}
                            onChange={this.onRegistrarAccountChange.bind(this)}
                        />
                        {registrar_account && !isLTM ? (
                            <div
                                style={{textAlign: "left"}}
                                className="facolor-error"
                            >
                                <Translate content="wallet.must_be_ltm" />
                            </div>
                        ) : null}
                    </div>
                )}

                <div className="divider" />

                {/* Submit button */}
                {this.state.loading ? (
                    <LoadingIndicator type="three-bounce" />
                ) : (
                    <button style={{width: "100%"}} className={buttonClass}>
                        <Translate content="account.create_account" />
                    </button>
                )}

                {/* Backup restore option */}
                <div style={{paddingTop: 40}}>
                    <label>
                        <Link to="/settings/restore">
                            <Translate content="wallet.restore" />
                        </Link>
                    </label>

                    <label>
                        <Link to="/settings/restore">
                            <Translate content="settings.backup_brainkey" />
                        </Link>
                    </label>
                </div>

                {/* Skip to step 3 */}
                {!hasWallet || firstAccount ? null : (
                    <div style={{paddingTop: 20}}>
                        <label>
                            <a
                                onClick={() => {
                                    this.setState({step: 4});
                                }}
                            >
                                <Translate content="wallet.go_get_started" />
                            </a>
                        </label>
                    </div>
                )}
            </form>
        );
    }

    _renderAccountCreateText() {
        let hasWallet = WalletDb.getWallet();
        let my_accounts = AccountStore.getMyAccounts();
        let firstAccount = my_accounts.length === 0;

        return (
            <div className="confirm-checks">
                <h4
                    style={{
                        fontWeight: "normal",
                        fontFamily: "Roboto-Medium, arial, sans-serif",
                        fontStyle: "normal",
                        paddingBottom: 15,
                        marginTop: 0
                    }}
                >
                    <Translate content="wallet.wallet_browser" />
                </h4>

                <p>
                    {!hasWallet ? (
                        <Translate content="wallet.has_wallet" />
                    ) : null}
                </p>

                <Translate
                    style={{textAlign: "left"}}
                    component="p"
                    content="wallet.create_account_text"
                />

                {firstAccount ? (
                    <Translate
                        style={{textAlign: "left"}}
                        component="p"
                        content="wallet.first_account_paid"
                    />
                ) : (
                    <Translate
                        style={{textAlign: "left"}}
                        component="p"
                        content="wallet.not_first_account"
                    />
                )}

                {/* {this.state.hide_refcode ? null :
                    <div>
                        <RefcodeInput ref="refcode" label="refcode.refcode_optional" expandable={true}/>
                        <br/>
                    </div>
                } */}
            </div>
        );
    }

    _renderBackupBrainKey() {
        var sha1 = hash
            .sha1(this.state.brainkey)
            .toString("hex")
            .substring(0, 4);
        return (
            <div>
                <h3>
                    <Translate content="wallet.brainkey" />
                </h3>
                <div className="card">
                    <div className="card-content">
                        <h5>{this.state.brainkey}</h5>
                    </div>
                </div>
                <div style={{padding: "10px 0"}}>
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
                    className="btn large outline button"
                    onClick={this.onComplete.bind(this)}
                >
                    <Translate content="wallet.verify" />
                </button>
            </div>
        );
    }

    onComplete(brnkey) {
        WalletActions.setBrainkeyBackupDate();
        this.setState({
            step: 3
        });
    }

    _renderBackup() {
        return (
            <div className="backup-submit">
                <p>
                    <Translate unsafe content="wallet.wallet_crucial" />
                </p>
                <div className="divider" />
                <BackupCreate noText downloadCb={this._onBackupDownload} isCreateAcc={this.state.isCreateAcc} />
            </div>
        );
    }

    _onBackupDownload = () => {
        this.setState({
            step: 4
        });
    };

    _renderBackupText() {
        return (
            <div>
                <p
                    style={{
                        fontWeight: "normal",
                        fontFamily: "Roboto-Medium, arial, sans-serif",
                        fontStyle: "normal"
                    }}
                >
                    <Translate content="footer.backup" />
                </p>
                <p>
                    <Translate content="wallet.wallet_move" unsafe />
                </p>
                <p className="txtlabel warning">
                    <Translate unsafe content="wallet.wallet_lose_warning" />
                </p>
            </div>
        );
    }

    _renderGetStarted() {
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <Translate content="wallet.tips_dashboard" />:
                            </td>
                            <td>
                                <Link to="/">
                                    <Translate content="header.dashboard" />
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Translate content="wallet.tips_account" />:
                            </td>
                            <td>
                                <Link
                                    to={`/account/${
                                        this.props.currentAccount
                                    }/overview`}
                                >
                                    <Translate content="wallet.link_account" />
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Translate content="wallet.tips_deposit" />:
                            </td>
                            <td>
                                <Link to="/deposit-withdraw">
                                    <Translate content="wallet.link_deposit" />
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Translate content="wallet.tips_transfer" />:
                            </td>
                            <td>
                                <Link onClick={this._showSend.bind(this)} >
                                    <Translate content="wallet.link_transfer" />
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <Translate content="wallet.tips_settings" />:
                            </td>
                            <td>
                                <Link to="/settings">
                                    <Translate content="header.settings" />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    _renderGetStartedText() {
        return (
            <div>
                <p
                    style={{
                        fontWeight: "normal",
                        fontFamily: "Roboto-Medium, arial, sans-serif",
                        fontStyle: "normal"
                    }}
                >
                    <Translate content="wallet.congrat" />
                </p>

                <p>
                    <Translate content="wallet.tips_explore" />
                </p>

                <p>
                    <Translate content="wallet.tips_header" />
                </p>

                <p className="txtlabel warning">
                    <Translate content="wallet.tips_login" />
                </p>
            </div>
        );
    }

    _showSend(e) {
        e.preventDefault();
        if (this.isUnauthorizedUser()) return;
        else if (this.props.locked)
            if (WalletDb.isLocked()) {
                WalletUnlockActions.unlock()
                    .then(() => {
                        AccountActions.tryToSetCurrentAccount();
                        this.send_modal.show();
                    })
                    .catch(() => {});
            } else {
                WalletUnlockActions.lock();
            }
        else if (this.send_modal) this.send_modal.show();

    }

    _currentAccount = null;
    _createAccountLink = null;
    isUnauthorizedUser(route) {
        //for exchange allow access forever
        if (typeof route !== "undefined" && route.indexOf("/market/") === 0)
            return false;

        if (!this.props.currentAccount || !!this._createAccountLink) {
            this.props.router.push("/create-account/wallet");
            return true;
        }

        return false;
    }

    render() {
        let {step} = this.state;
        let {currentAccount} = this.props;
        return (
            <div className="sub-content">
                <div style={{maxWidth: "95vw"}}>
                    {step !== 1 && step !== 2 ? (
                        <p
                            style={{
                                fontWeight: "normal",
                                fontFamily: "Roboto-Medium, arial, sans-serif",
                                fontStyle: "normal"
                            }}
                        >
                            <Translate content={"wallet.step_" + step} />
                        </p>
                    ) : null}

                    {step === 1
                        ? this._renderAccountCreateForm()
                        : step === 2
                            ? this._renderBackupBrainKey()
                            : step === 3
                                ? this._renderBackup()
                                : this._renderGetStarted()}
                </div>

                <div style={{maxWidth: "95vw", paddingTop: "2rem"}}>
                    {step === 1
                        ? this._renderAccountCreateText()
                        : step === 2
                            ? null
                            : step === 3
                                ? this._renderBackupText()
                                : this._renderGetStartedText()}

                </div>
                <Link to="/">
                    <button className="button btn large outline">
                        <Translate content="wallet.back" />
                    </button>
                </Link>
                <SendModal
                    id="send_modal_main"
                    refCallback={e => {
                        if (e) this.send_modal = e;
                    }}
                    from_name={currentAccount}
                />
            </div>
        );
    }
}

export default connect(CreateAccount, {
    listenTo() {
        return [AccountStore];
    },
    getProps() {
        return {locked: WalletUnlockStore.getState().locked};
    }
});
