import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router/es";
import {connect} from "alt-react";
import counterpart from "counterpart";
import AccountStore from "stores/AccountStore";
import WalletUnlockStore from "stores/WalletUnlockStore";
import WalletManagerStore from "stores/WalletManagerStore";
import SettingsStore from "stores/SettingsStore";
import GatewayStore from "stores/GatewayStore";
import {Apis} from "bitsharesjs-ws";
import {
    logo,
    userAvatar,
    settingsIcon,
    lockIcon
} from "../../assets/brand-new-layout/img/images";

class Header extends React.Component {
    static contextTypes = {
        location: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props);
        this.state = {
            active: context.location.pathname,
            accountsListDropdownActive: false
        };

        this.unlisten = null;
        // this._toggleAccountDropdownMenu = this._toggleAccountDropdownMenu.bind(
        //     this
        // );
        // this._toggleDropdownMenu = this._toggleDropdownMenu.bind(this);
        // this._closeDropdown = this._closeDropdown.bind(this);
        // this._closeDropdownSubmenu = this._closeDropdownSubmenu.bind(this);
        // this._toggleDropdownSubmenu = this._toggleDropdownSubmenu.bind(this);
        // this._closeMenuDropdown = this._closeMenuDropdown.bind(this);
        // this._closeAccountsListDropdown = this._closeAccountsListDropdown.bind(
        //     this
        // );
        // this.onBodyClick = this.onBodyClick.bind(this);
    }

    componentWillMount() {
        this.unlisten = this.context.router.listen((newState, err) => {
            if (!err) {
                if (this.unlisten && this.state.active !== newState.pathname) {
                    this.setState({
                        active: newState.pathname
                    });
                }
            }
        });
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         ReactTooltip.rebuild();
    //     }, 1250);

    //     document.body.addEventListener("click", this.onBodyClick, {
    //         capture: false,
    //         passive: true
    //     });
    // }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
            this.unlisten = null;
        }

        // document.body.removeEventListener("click", this.onBodyClick);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.myActiveAccounts !== this.props.myActiveAccounts ||
            nextProps.currentAccount !== this.props.currentAccount ||
            nextProps.passwordLogin !== this.props.passwordLogin ||
            nextProps.locked !== this.props.locked ||
            nextProps.current_wallet !== this.props.current_wallet ||
            nextProps.lastMarket !== this.props.lastMarket ||
            nextProps.starredAccounts !== this.props.starredAccounts ||
            nextProps.currentLocale !== this.props.currentLocale ||
            nextState.active !== this.state.active ||
            nextState.hiddenAssets !== this.props.hiddenAssets ||
            nextState.dropdownActive !== this.state.dropdownActive ||
            nextState.dropdownSubmenuActive !==
                this.state.dropdownSubmenuActive ||
            nextState.accountsListDropdownActive !==
                this.state.accountsListDropdownActive ||
            nextProps.height !== this.props.height
        );
    }

    render() {
        let {active} = this.state;
        let {
            currentAccount,
            starredAccounts,
            passwordLogin,
            passwordAccount,
            height
        } = this.props;

        return (
            <header className="header">
                <div className="container-fluid">
                    <div className="mobile">
                        <span className="mobile__burger">
                            <span />
                        </span>
                        <div className="mobile__menu">
                            <span className="mobile__menu__close" />
                            <ul className="mobile__list">
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Create Account
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Send
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Deposit/Withdraw
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Explore
                                    </a>
                                </li>
                                <li className="mobile__list__item">
                                    <a className="mobile__list__link" href="#">
                                        Settings
                                    </a>
                                </li>
                            </ul>
                            <label className="mobile__accounts">Accounts</label>
                        </div>
                    </div>
                    <div className="header-line">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <nav className="navigation">
                            <ul className="navigation__list">
                                <li className="navigation__item active">
                                    <a className="navigation__link" href="#">
                                        {/* AccountOverview */}
                                        {counterpart.translate(
                                            "header.account"
                                        )}
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a className="navigation__link" href="#">
                                        {/* ExchangeContainer */}
                                        {counterpart.translate(
                                            "header.exchange"
                                        )}
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a className="navigation__link" href="#">
                                        {/* модалка */}
                                        {counterpart.translate(
                                            "header.payments"
                                        )}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="balance">
                            <span className="balance__label">Balance: 0</span>
                            <ul className="balance__list">
                                <li className="balance__item active">
                                    <a className="balance__link" href="#">
                                        LLC
                                    </a>
                                </li>
                                <li className="balance__item">
                                    <a className="balance__link" href="#">
                                        BTC
                                    </a>
                                </li>
                                <li className="balance__item">
                                    <a className="balance__link" href="#">
                                        XCR
                                    </a>
                                </li>
                                <li className="balance__item">
                                    <a className="balance__link" href="#">
                                        ETH
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="user">
                            <img
                                className="user__icon"
                                src={userAvatar}
                                alt="user"
                            />
                            <span className="user__name">{currentAccount}</span>
                        </div>
                        <a className="settings" href="#">
                            <img
                                className="settings__icon"
                                src={settingsIcon}
                                alt="settings"
                            />
                        </a>
                        <a className="lock" href="#">
                            <img
                                className="lock__icon"
                                src={lockIcon}
                                alt="lock"
                            />
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default connect(
    Header,
    {
        listenTo() {
            return [
                AccountStore,
                WalletUnlockStore,
                WalletManagerStore,
                SettingsStore,
                GatewayStore
            ];
        },
        getProps() {
            const chainID = Apis.instance().chain_id;
            return {
                backedCoins: GatewayStore.getState().backedCoins,
                myActiveAccounts: AccountStore.getState().myActiveAccounts,
                currentAccount:
                    AccountStore.getState().currentAccount ||
                    AccountStore.getState().passwordAccount,
                passwordAccount: AccountStore.getState().passwordAccount,
                locked: WalletUnlockStore.getState().locked,
                current_wallet: WalletManagerStore.getState().current_wallet,
                lastMarket: SettingsStore.getState().viewSettings.get(
                    `lastMarket${chainID ? "_" + chainID.substr(0, 8) : ""}`
                ),
                starredAccounts: AccountStore.getState().starredAccounts,
                passwordLogin: SettingsStore.getState().settings.get(
                    "passwordLogin"
                ),
                currentLocale: SettingsStore.getState().settings.get("locale"),
                hiddenAssets: SettingsStore.getState().hiddenAssets,
                settings: SettingsStore.getState().settings,
                locales: SettingsStore.getState().defaults.locale,
                contacts: AccountStore.getState().accountContacts
            };
        }
    }
);
