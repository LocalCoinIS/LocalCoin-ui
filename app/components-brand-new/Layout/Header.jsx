import React from "react";
import {Link} from "react-router/es";
import {connect} from "alt-react";
import ActionSheet from "react-foundation-apps/src/action-sheet";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import SendModal from "../../components/Modal/SendModal";
import FormattedAsset from "../../components/Utility/FormattedAsset";
import DepositModal from "../../components/Modal/DepositModal";
import GatewayStore from "stores/GatewayStore";
import Icon from "../../components/Icon/Icon";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import WalletDb from "stores/WalletDb";
import WalletUnlockStore from "stores/WalletUnlockStore";
import WalletUnlockActions from "actions/WalletUnlockActions";
import WalletManagerStore from "stores/WalletManagerStore";
import cnames from "classnames";
import TotalBalanceValue from "../../components/Utility/TotalBalanceValue";
import ReactTooltip from "react-tooltip";
import {Apis} from "bitsharesjs-ws";
import notify from "actions/NotificationActions";
import AccountImage from "../../components/Account/AccountImage";
import Identicon from "../../components/Account/Identicon";
import {ChainStore} from "bitsharesjs/es";
import WithdrawModal from "../../components/Modal/WithdrawModalNew";
import {List} from "immutable";
import PropTypes from "prop-types";
import {
    logo,
    userAvatar,
    settingsIcon,
    lockIcon,
    unlockIcon
} from "../../assets/brand-new-layout/img/images";
import onClickOutside from "react-onclickoutside";

class SettingsMenuUnWrapped extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this._toggleIsOpen = this._toggleIsOpen.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    handleClickOutside() {
        this.setState({isOpen: false});
    }
    _toggleIsOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const {onChange} = this.props;
        const items = [
            {
                label: "header.settings",
                path: "/settings"
            },
            {
                label: "header.explorer",
                path: "/explorer/blocks"
            },
            {
                label: "header.help",
                path: "/help"
            }
        ];

        return (
            <div className="settings">
                <img
                    className="settings__icon"
                    src={settingsIcon}
                    alt="settings"
                    onClick={this._toggleIsOpen}
                />
                <ul
                    className={cnames("balance__list", {
                        "is-active": this.state.isOpen
                    })}
                >
                    {items.map(({label, path}) => {
                        return (
                            <li className="balance__item" key={label}>
                                <a
                                    className="balance__link"
                                    href="javascript:void(0)"
                                    onClick={e => {
                                        onChange(path, e);
                                        this._toggleIsOpen();
                                    }}
                                >
                                    {typeof label === "string" &&
                                    label.indexOf(".") > 0
                                        ? counterpart.translate(label)
                                        : label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const SettingsMenu = onClickOutside(SettingsMenuUnWrapped);

class Header extends React.Component {
    static contextTypes = {
        location: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props);
        this.state = {
            active: context.location.pathname,
            accountsListDropdownActive: false,
            selectedAsset: "LLC"
        };

        this.unlisten = null;
        this._toggleAccountDropdownMenu = this._toggleAccountDropdownMenu.bind(
            this
        );
        this._toggleDropdownMenu = this._toggleDropdownMenu.bind(this);
        this._closeDropdown = this._closeDropdown.bind(this);
        this._closeDropdownSubmenu = this._closeDropdownSubmenu.bind(this);
        this._toggleDropdownSubmenu = this._toggleDropdownSubmenu.bind(this);
        this._closeMenuDropdown = this._closeMenuDropdown.bind(this);
        this._closeAccountsListDropdown = this._closeAccountsListDropdown.bind(
            this
        );
        this.onBodyClick = this.onBodyClick.bind(this);
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

    componentDidMount() {
        setTimeout(() => {
            ReactTooltip.rebuild();
        }, 1250);

        document.body.addEventListener("click", this.onBodyClick, {
            capture: false,
            passive: true
        });
    }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
            this.unlisten = null;
        }

        document.body.removeEventListener("click", this.onBodyClick);
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

    _showSend(e) {
        e.preventDefault();

        console.log("_showSend");

        if (this.isUnauthorizedUser()) return;
        else if (this.send_modal) this.send_modal.show();

        this._closeDropdown();
    }

    _showDeposit(e) {
        e.preventDefault();

        if (this.isUnauthorizedUser()) return;

        this.refs.deposit_modal_new.show();
        this._closeDropdown();
    }

    _showWithdraw(e) {
        e.preventDefault();

        if (this.isUnauthorizedUser()) return;

        this._closeDropdown();
        this.refs.withdraw_modal_new.show();
    }

    _triggerMenu(e) {
        e.preventDefault();
        ZfApi.publish("mobile-menu", "toggle");
    }

    _toggleLock(e) {
        e.preventDefault();
        if (WalletDb.isLocked()) {
            WalletUnlockActions.unlock()
                .then(() => {
                    AccountActions.tryToSetCurrentAccount();
                })
                .catch(() => {});
        } else {
            WalletUnlockActions.lock();
        }
        this._closeDropdown();
    }

    _currentAccount = null;
    _createAccountLink = null;
    isUnauthorizedUser(route) {
        //for exchange allow access forever

        if (typeof route !== "undefined" && route.indexOf("/market/") === 0)
            return false;

        if (!this._currentAccount || !!this._createAccountLink) {
            this.context.router.push("/create-account/password");
            return true;
        }

        return false;
    }

    _onNavigate(route, e) {
        e.preventDefault();

        if (
            route !== "/" &&
            route !== "/settings/general" &&
            this.isUnauthorizedUser(route)
        )
            return;

        // Set Accounts Tab as active tab
        if (route == "/accounts") {
            SettingsActions.changeViewSetting({
                dashboardEntry: "accounts"
            });
        }

        this.context.router.push(route);
        this._closeDropdown();
    }

    _closeAccountsListDropdown() {
        this.setState({
            accountsListDropdownActive: false
        });
    }

    _closeMenuDropdown() {
        this.setState({
            dropdownActive: false
        });
    }

    _closeDropdownSubmenu() {
        this.setState({
            dropdownSubmenuActive: false
        });
    }

    _closeDropdown() {
        this._closeMenuDropdown();
        this._closeAccountsListDropdown();
        this._closeDropdownSubmenu();
    }

    _onGoBack(e) {
        e.preventDefault();
        window.history.back();
    }

    _onGoForward(e) {
        e.preventDefault();
        window.history.forward();
    }

    _onGoAccount(e) {
        e.preventDefault();

        console.log("_onGoAccount(e)");
    }

    _accountClickHandler(account_name, e) {
        e.preventDefault();

        if (this.isUnauthorizedUser()) return;

        ZfApi.publish("account_drop_down", "close");
        if (this.context.location.pathname.indexOf("/account/") !== -1) {
            let currentPath = this.context.location.pathname.split("/");
            currentPath[2] = account_name;
            this.context.router.push(currentPath.join("/"));
        }
        if (account_name !== this.props.currentAccount) {
            AccountActions.setCurrentAccount.defer(account_name);
            notify.addNotification({
                message: counterpart.translate("header.account_notify", {
                    account: account_name
                }),
                level: "success",
                autoDismiss: 2,
                position: "br"
            });
            this._closeDropdown();
        }
    }

    _toggleAccountDropdownMenu() {
        // prevent state toggling if user cannot have multiple accounts

        const hasLocalWallet = !!WalletDb.getWallet();

        if (!hasLocalWallet) return false;

        this.setState({
            accountsListDropdownActive: !this.state.accountsListDropdownActive
        });
    }

    _toggleDropdownSubmenu(item = this.state.dropdownSubmenuActiveItem, e) {
        if (e) e.stopPropagation();

        this.setState({
            dropdownSubmenuActive: !this.state.dropdownSubmenuActive,
            dropdownSubmenuActiveItem: item
        });
    }

    _toggleDropdownMenu(e) {
        this.setState({
            dropdownActive: !this.state.dropdownActive
        });
    }

    onBodyClick(e) {
        let el = e.target;
        let insideMenuDropdown = false;
        let insideAccountDropdown = false;

        do {
            if (
                el.classList &&
                el.classList.contains("account-dropdown-wrapper")
            ) {
                insideAccountDropdown = true;
                break;
            }

            if (
                el.classList &&
                el.classList.contains("menu-dropdown-wrapper")
            ) {
                insideMenuDropdown = true;
                break;
            }
        } while ((el = el.parentNode));

        if (!insideAccountDropdown) this._closeAccountsListDropdown();
        if (!insideMenuDropdown) {
            this._closeMenuDropdown();
            this._closeDropdownSubmenu();
        }
    }

    _onAddContact() {
        AccountActions.addAccountContact(this.props.currentAccount);
    }

    _onRemoveContact() {
        AccountActions.removeAccountContact(this.props.currentAccount);
    }

    _onChangeAsset(symbol, e) {
        this.setState({
            selectedAsset: symbol
        });
    }

    getAllowWalletBalances() {
        let list = [];
        let currentAccount = ChainStore.getAccount(
            AccountStore.getState().currentAccount
        );

        if (!currentAccount) return list;

        currentAccount.get("balances").forEach((balanceId, asset_type) => {
            let assetObject = ChainStore.getAsset(asset_type);
            if (!assetObject) return;

            let symbol = assetObject.get("symbol");
            if (!symbol) return;

            list.push(
                <li
                    className={
                        "balance__item " +
                        (this.state.selectedAsset == symbol ? "active" : "")
                    }
                >
                    <a
                        className="balance__link"
                        href="javascript:void(0)"
                        onClick={this._onChangeAsset.bind(this, symbol)}
                    >
                        {symbol}
                    </a>
                </li>
            );
        });

        return list;
    }

    getBalanceBySelectedCurrency() {
        var balance = "0";

        let currentAccount = ChainStore.getAccount(
            AccountStore.getState().currentAccount
        );

        if (!currentAccount) return "";

        currentAccount.get("balances").forEach((balanceId, asset_type) => {
            let balanceObject = ChainStore.getObject(balanceId);
            if (!balanceObject) return "";

            let assetObject = ChainStore.getAsset(asset_type);
            if (!assetObject) return;

            let symbol = assetObject.get("symbol");
            if (!symbol) return;

            if (symbol != this.state.selectedAsset) return;

            balance = (
                <FormattedAsset
                    amount={balanceObject.get("balance")}
                    asset={asset_type}
                    decimalOffset={0}
                />
            );
        });

        return balance;
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

        let tradingAccounts = AccountStore.getMyAccounts();
        let maxHeight = Math.max(40, height - 67 - 36) + "px";

        const a = ChainStore.getAccount(currentAccount);
        const isMyAccount = !a
            ? false
            : AccountStore.isMyAccount(a) ||
              (passwordLogin && currentAccount === passwordAccount);
        const isContact = this.props.contacts.has(currentAccount);
        const enableDepositWithdraw =
            Apis.instance() && Apis.instance().chain_id;

        if (starredAccounts.size) {
            for (let i = tradingAccounts.length - 1; i >= 0; i--) {
                if (!starredAccounts.has(tradingAccounts[i])) {
                    tradingAccounts.splice(i, 1);
                }
            }
            starredAccounts.forEach(account => {
                if (tradingAccounts.indexOf(account.name) === -1) {
                    tradingAccounts.push(account.name);
                }
            });
        }

        let myAccounts = AccountStore.getMyAccounts();
        let myAccountCount = myAccounts.length;

        let walletBalance =
            myAccounts.length && this.props.currentAccount ? (
                <div
                    className="total-value"
                    onClick={this._toggleAccountDropdownMenu}
                >
                    {this.getBalanceBySelectedCurrency()}
                </div>
            ) : null;

        let createAccountLink =
            myAccountCount === 0 ? (
                <ActionSheet.Button title="" setActiveState={() => {}}>
                    <a
                        className="button create-account"
                        onClick={this._onNavigate.bind(this, "/create-account")}
                        style={{padding: "1rem", border: "none"}}
                    >
                        <Icon
                            className="icon-14px"
                            name="user"
                            title="icons.user.create_account"
                        />{" "}
                        <Translate content="header.create_account" />
                    </a>
                </ActionSheet.Button>
            ) : null;

        let tradeUrl = this.props.lastMarket
            ? `/market/${this.props.lastMarket}`
            : "/market/USD_LLC";

        // Account selector: Only active inside the exchange
        let account_display_name, accountsList;
        if (currentAccount) {
            account_display_name =
                currentAccount.length > 20
                    ? `${currentAccount.slice(0, 20)}..`
                    : currentAccount;
            if (tradingAccounts.indexOf(currentAccount) < 0 && isMyAccount) {
                tradingAccounts.push(currentAccount);
            }
            if (tradingAccounts.length >= 1) {
                accountsList = tradingAccounts
                    .sort()
                    .filter(name => name !== currentAccount)
                    .map(name => {
                        return (
                            <li
                                key={name}
                                className={cnames({
                                    active:
                                        active
                                            .replace("/account/", "")
                                            .indexOf(name) === 0
                                })}
                                onClick={this._accountClickHandler.bind(
                                    this,
                                    name
                                )}
                            >
                                <div
                                    style={{paddingTop: 0}}
                                    className="table-cell"
                                >
                                    <AccountImage
                                        style={{position: "relative", top: 4}}
                                        size={{height: 20, width: 20}}
                                        account={name}
                                    />
                                </div>
                                <div
                                    className="table-cell"
                                    style={{paddingLeft: 10}}
                                >
                                    <a
                                        className={
                                            "text lower-case" +
                                            (name === account_display_name
                                                ? " current-account"
                                                : "")
                                        }
                                    >
                                        {name}
                                    </a>
                                </div>
                            </li>
                        );
                    });
            }
        }

        const hasLocalWallet = !!WalletDb.getWallet();

        const usedAssets = this.getAllowWalletBalances();

        this._currentAccount = currentAccount;
        this._createAccountLink = createAccountLink;

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
                                    <a
                                        className="mobile__list__link"
                                        href="#"
                                        onClick={this._onNavigate.bind(
                                            this,
                                            tradeUrl
                                        )}
                                    >
                                        {/* ExchangeContainer */}
                                        {counterpart.translate(
                                            "header.exchange"
                                        )}
                                    </a>
                                </li>
                                {
                                    <li className="mobile__list__item">
                                        <a
                                            className="mobile__list__link"
                                            href="#"
                                            onClick={this._showSend.bind(this)}
                                        >
                                            {/* модалка */}
                                            {counterpart.translate(
                                                "header.payments"
                                            )}
                                        </a>
                                    </li>
                                }
                                {
                                    <li className="mobile__list__item">
                                        <a
                                            className="mobile__list__link"
                                            href="#"
                                            onClick={this._onNavigate.bind(
                                                this,
                                                "/deposit-withdraw"
                                            )}
                                        >
                                            {counterpart.translate(
                                                "header.deposit-withdraw"
                                            )}
                                        </a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="header-line">
                        <div
                            className="logo"
                            onClick={this._onNavigate.bind(this, "/")}
                        >
                            <img src={logo} alt="logo" />
                        </div>
                        <nav className="navigation">
                            <ul className="navigation__list">
                                <li
                                    className={cnames("navigation__item", {
                                        active: active.indexOf("market/") !== -1
                                    })}
                                >
                                    <a
                                        className="navigation__link"
                                        href="#"
                                        onClick={this._onNavigate.bind(
                                            this,
                                            tradeUrl
                                        )}
                                    >
                                        {/* ExchangeContainer */}
                                        {counterpart.translate(
                                            "header.exchange"
                                        )}
                                    </a>
                                </li>
                                {
                                    <li className="navigation__item">
                                        <a
                                            className="navigation__link"
                                            href="#"
                                            onClick={this._showSend.bind(this)}
                                        >
                                            {/* модалка */}
                                            {counterpart.translate(
                                                "header.payments"
                                            )}
                                        </a>
                                    </li>
                                }
                                {
                                    <li
                                        className={cnames("navigation__item", {
                                            active:
                                                active.indexOf(
                                                    "/deposit-withdraw"
                                                ) !== -1
                                        })}
                                    >
                                        <a
                                            className="navigation__link"
                                            href="#"
                                            onClick={this._onNavigate.bind(
                                                this,
                                                "/deposit-withdraw"
                                            )}
                                        >
                                            {counterpart.translate(
                                                "header.deposit-withdraw"
                                            )}
                                        </a>
                                    </li>
                                }
                                {
                                    <li
                                        className={cnames("navigation__item", {
                                            active:
                                                active.indexOf("/explorer") !==
                                                -1
                                        })}
                                    >
                                        <a
                                            className="navigation__link"
                                            href="#"
                                            onClick={this._onNavigate.bind(
                                                this,
                                                "/explorer"
                                            )}
                                        >
                                            {counterpart.translate(
                                                "header.explorer"
                                            )}
                                        </a>
                                    </li>
                                }

                                <li
                                    className={cnames("navigation__item", {
                                        active:
                                            active.indexOf(
                                                `/account/${currentAccount}/voting`
                                            ) !== -1
                                    })}
                                >
                                    <a
                                        className="navigation__link"
                                        href="#"
                                        onClick={this._onNavigate.bind(
                                            this,
                                            `/account/${currentAccount}/voting`
                                        )}
                                    >
                                        {counterpart.translate(
                                            "account.voting"
                                        )}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {currentAccount ? (
                            <div className="balance">
                                <span
                                    className="balance__label"
                                    style={{
                                        display: walletBalance ? "" : "none"
                                    }}
                                >
                                    {counterpart.translate("exchange.balance")}:
                                    &nbsp;
                                    {walletBalance}
                                    &nbsp;
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 129 129"
                                        enableBackground="new 0 0 129 129"
                                        width="15px"
                                        height="15px"
                                    >
                                        <g>
                                            <path
                                                d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                                                fill="#FFFFFF"
                                            />
                                        </g>
                                    </svg>
                                </span>
                                <ul className="balance__list">{usedAssets}</ul>
                            </div>
                        ) : null}
                        {currentAccount ? (
                            <div className="user">
                                <AccountImage
                                    size={{height: 20, width: 20}}
                                    account={currentAccount}
                                />
                                &nbsp;
                                <a
                                    className="navigation__link navigation__item"
                                    href="#"
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/account/" + currentAccount
                                    )}
                                >
                                    <span className="user__name">
                                        {currentAccount}
                                    </span>
                                </a>
                            </div>
                        ) : null}

                        {currentAccount ? null : <div className="balance" />}

                        <a
                            href="#"
                            className="settings"
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/general"
                            )}
                        >
                            <img
                                className="settings__icon"
                                src="/asset-symbols/settings.svg"
                                alt="settings"
                            />
                        </a>
                        {/* {currentAccount ? (
                            <SettingsMenu
                                onChange={this._onNavigate.bind(this)}
                            />
                        ) : null} */}

                        <a
                            href="#"
                            className="lock"
                            title={
                                this.props.locked
                                    ? counterpart.translate(
                                          "icons.locked.common"
                                      )
                                    : counterpart.translate(
                                          "icons.unlocked.common"
                                      )
                            }
                            onClick={this._toggleLock.bind(this)}
                        >
                            <img
                                className="lock__icon"
                                src={this.props.locked ? lockIcon : unlockIcon}
                                alt="lock"
                            />
                        </a>
                    </div>
                </div>
                <SendModal
                    id="send_modal_header"
                    refCallback={e => {
                        if (e) this.send_modal = e;
                    }}
                    from_name={currentAccount}
                />

                <DepositModal
                    ref="deposit_modal_new"
                    modalId="deposit_modal_new"
                    account={currentAccount}
                    backedCoins={this.props.backedCoins}
                />
                <WithdrawModal
                    ref="withdraw_modal_new"
                    modalId="withdraw_modal_new"
                    backedCoins={this.props.backedCoins}
                />
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
