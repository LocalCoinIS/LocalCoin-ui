import React from "react";
import {Link} from "react-router/es";
import {connect} from "alt-react";
import ActionSheet from "react-foundation-apps/src/action-sheet";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import SendModal from "../Modal/SendModal";
import DepositModal from "../Modal/DepositModal";
import GatewayStore from "stores/GatewayStore";
import Icon from "../Icon/Icon";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import WalletDb from "stores/WalletDb";
import WalletUnlockStore from "stores/WalletUnlockStore";
import WalletUnlockActions from "actions/WalletUnlockActions";
import WalletManagerStore from "stores/WalletManagerStore";
import cnames from "classnames";
import TotalBalanceValue from "../Utility/TotalBalanceValue";
import ReactTooltip from "react-tooltip";
import {Apis} from "bitsharesjs-ws";
import notify from "actions/NotificationActions";
// import IntlActions from "actions/IntlActions";
import AccountImage from "../Account/AccountImage";
import {ChainStore} from "bitsharesjs/es";
import WithdrawModal from "../Modal/WithdrawModalNew";
import {List} from "immutable";
import PropTypes from "prop-types";

var logo = require("assets/brand-new-layout/img/logo.svg");

// const FlagImage = ({flag, width = 20, height = 20}) => {
//     return <img height={height} width={width} src={`${__BASE_URL__}language-dropdown/${flag.toUpperCase()}.png`} />;
// };

const SUBMENUS = {
    SETTINGS: "SETTINGS"
};

class Header extends React.Component {
    static contextTypes = {
        location: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super();
        this.state = {
            active: context.location.pathname,
            accountsListDropdownActive: false
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
        if (this.send_modal) this.send_modal.show();
        this._closeDropdown();
    }

    _showDeposit(e) {
        e.preventDefault();
        this.refs.deposit_modal_new.show();
        this._closeDropdown();
    }

    _showWithdraw(e) {
        e.preventDefault();
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

    _onNavigate(route, e) {
        e.preventDefault();

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

    _accountClickHandler(account_name, e) {
        e.preventDefault();
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
        // this.onClickUser(account_name, e);
    }

    // onClickUser(account, e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //
    //     this.context.router.push(`/account/${account}/overview`);
    // }

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
                    <TotalBalanceValue.AccountWrapper
                        hiddenAssets={this.props.hiddenAssets}
                        accounts={List([this.props.currentAccount])}
                        noTip
                        style={{minHeight: 15}}
                    />
                </div>
            ) : null;

        let dashboard = (
            <a
                className={cnames("logo", {
                    active:
                        active === "/" ||
                        (active.indexOf("dashboard") !== -1 &&
                            active.indexOf("account") === -1)
                })}
                onClick={this._onNavigate.bind(this, "/")}
            >
                <img style={{margin: 0, height: 40}} src={logo} />
            </a>
        );

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

        // let lock_unlock = ((!!this.props.current_wallet) || passwordLogin) ? (
        //     <div className="grp-menu-item" >
        //     { this.props.locked ?
        //         <a style={{padding: "1rem"}} href onClick={this._toggleLock.bind(this)} data-class="unlock-tooltip" data-offset="{'left': 50}" data-tip={locked_tip} data-place="bottom" data-html><Icon className="icon-14px" name="locked" title="icons.locked.common" /></a>
        //         : <a style={{padding: "1rem"}} href onClick={this._toggleLock.bind(this)} data-class="unlock-tooltip" data-offset="{'left': 50}" data-tip={unlocked_tip} data-place="bottom" data-html><Icon className="icon-14px" name="unlocked" title="icons.unlocked.common" /></a> }
        //     </div>
        // ) : null;

        let tradeUrl = this.props.lastMarket
            ? `/market/${this.props.lastMarket}`
            : "/market/LLC_USD";

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

        let hamburger = this.state.dropdownActive ? (
            <Icon
                className="icon-14px"
                name="hamburger-x"
                title="icons.hamburger_x"
            />
        ) : (
            <Icon
                className="icon-14px"
                name="hamburger"
                title="icons.hamburger"
            />
        );
        const hasLocalWallet = !!WalletDb.getWallet();

        /* Dynamic Menu Item */
        let dynamicMenuItem;
        if (active.indexOf("transfer") !== -1) {
            dynamicMenuItem = (
                <a style={{flexFlow: "row"}} className={cnames({active: true})}>
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="transfer"
                        title="icons.transfer"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.payments"
                    />
                </a>
            );
        }
        if (active.indexOf("settings") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("settings") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="cogs"
                        title="icons.cogs"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.settings"
                    />
                </a>
            );
        }
        if (active.indexOf("deposit-withdraw") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("deposit-withdraw") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="deposit"
                        title="icons.deposit.deposit_withdraw"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.deposit-withdraw"
                    />
                </a>
            );
        }
        if (active.indexOf("news") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({active: active.indexOf("news") !== -1})}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="news"
                        title="icons.news"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="news.news"
                    />
                </a>
            );
        }
        if (active.indexOf("help") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({active: active.indexOf("help") !== -1})}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="question-circle"
                        title="icons.question_circle"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.help"
                    />
                </a>
            );
        }
        if (active.indexOf("/voting") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/voting") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="thumbs-up"
                        title="icons.thumbs_up"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.voting"
                    />
                </a>
            );
        }
        if (
            active.indexOf("/assets") !== -1 &&
            active.indexOf("explorer") === -1
        ) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/assets") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="assets"
                        title="icons.assets"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="explorer.assets.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/signedmessages") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/signedmessages") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="text"
                        title="icons.text.signed_messages"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.signedmessages.menuitem"
                    />
                </a>
            );
        }
        if (active.indexOf("/member-stats") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/member-stats") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="text"
                        title="icons.text.membership_stats"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.member.stats"
                    />
                </a>
            );
        }
        if (active.indexOf("/vesting") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/vesting") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="hourglass"
                        title="icons.hourglass"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.vesting.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/whitelist") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/whitelist") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="list"
                        title="icons.list"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.whitelist.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/permissions") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/permissions") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="warning"
                        title="icons.warning"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.permissions"
                    />
                </a>
            );
        }

        const submenus = {
            [SUBMENUS.SETTINGS]: (
                <ul
                    className="dropdown header-menu header-submenu"
                    style={{
                        left: -200,
                        top: 64,
                        maxHeight: !this.state.dropdownActive ? 0 : maxHeight,
                        overflowY: "auto"
                    }}
                >
                    <li
                        className="divider parent-item"
                        onClick={this._toggleDropdownSubmenu.bind(
                            this,
                            undefined
                        )}
                    >
                        <div className="table-cell">
                            <span className="parent-item-icon">&lt;</span>
                            <Translate
                                content="header.settings"
                                component="span"
                                className="parent-item-name"
                            />
                        </div>
                    </li>
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/general"
                        )}
                    >
                        <Translate
                            content="settings.general"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    {!this.props.settings.get("passwordLogin") && (
                        <li
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/wallet"
                            )}
                        >
                            <Translate
                                content="settings.wallet"
                                component="div"
                                className="table-cell"
                            />
                        </li>
                    )}
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/accounts"
                        )}
                    >
                        <Translate
                            content="settings.accounts"
                            component="div"
                            className="table-cell"
                        />
                    </li>

                    {!this.props.settings.get("passwordLogin") && [
                        <li
                            key={"settings.password"}
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/password"
                            )}
                        >
                            <Translate
                                content="settings.password"
                                component="div"
                                className="table-cell"
                            />
                        </li>,
                        <li
                            key={"settings.backup"}
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/backup"
                            )}
                        >
                            <Translate
                                content="settings.backup"
                                component="div"
                                className="table-cell"
                            />
                        </li>
                    ]}
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/restore"
                        )}
                    >
                        <Translate
                            content="settings.restore"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/access"
                        )}
                    >
                        <Translate
                            content="settings.access"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/faucet_address"
                        )}
                    >
                        <Translate
                            content="settings.faucet_address"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li
                        onClick={this._onNavigate.bind(this, "/settings/reset")}
                    >
                        <Translate
                            content="settings.reset"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                </ul>
            )
        };

        return (
            <div className="header-container" style={{minHeight: "64px"}}>
                <div>
                    <div
                        className="header menu-group primary"
                        style={{flexWrap: "nowrap", justifyContent: "none"}}
                    >
                        {__ELECTRON__ ? (
                            <div className="grid-block show-for-medium shrink electron-navigation">
                                <ul className="menu-bar">
                                    <li>
                                        <div
                                            style={{
                                                marginLeft: "1rem",
                                                height: "3rem"
                                            }}
                                        >
                                            <div
                                                style={{marginTop: "0.5rem"}}
                                                onClick={this._onGoBack.bind(
                                                    this
                                                )}
                                                className="button outline small"
                                            >
                                                {"<"}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                                height: "3rem",
                                                marginLeft: "0.5rem",
                                                marginRight: "0.75rem"
                                            }}
                                        >
                                            <div
                                                style={{marginTop: "0.5rem"}}
                                                onClick={this._onGoForward.bind(
                                                    this
                                                )}
                                                className="button outline small"
                                            >
                                                >
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ) : null}

                        <ul className="menu-bar">
                            <li>{dashboard}</li>
                            {!currentAccount || !!createAccountLink ? null : (
                                <li>
                                    <Link
                                        style={{flexFlow: "row"}}
                                        to={`/account/${currentAccount}`}
                                        className={cnames({
                                            active:
                                                active.indexOf("account/") !==
                                                    -1 &&
                                                active.indexOf("/account/") !==
                                                    -1 &&
                                                active.indexOf("/assets") ===
                                                    -1 &&
                                                active.indexOf("/voting") ===
                                                    -1 &&
                                                active.indexOf(
                                                    "/signedmessages"
                                                ) === -1 &&
                                                active.indexOf(
                                                    "/member-stats"
                                                ) === -1 &&
                                                active.indexOf("/vesting") ===
                                                    -1 &&
                                                active.indexOf("/whitelist") ===
                                                    -1 &&
                                                active.indexOf(
                                                    "/permissions"
                                                ) === -1
                                        })}
                                    >
                                        <Icon
                                            size="1_5x"
                                            style={{
                                                position: "relative",
                                                top: -2,
                                                left: -8
                                            }}
                                            name="dashboard"
                                            title="icons.dashboard"
                                        />
                                        <Translate
                                            className="column-hide-small"
                                            content="header.dashboard"
                                        />
                                    </Link>
                                </li>
                            )}
                            <li>
                                <a
                                    style={{flexFlow: "row"}}
                                    className={cnames(
                                        active.indexOf("market/") !== -1
                                            ? null
                                            : "column-hide-xxs",
                                        {
                                            active:
                                                active.indexOf("market/") !== -1
                                        }
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        tradeUrl
                                    )}
                                >
                                    <Icon
                                        size="1_5x"
                                        style={{
                                            position: "relative",
                                            top: -2,
                                            left: -8
                                        }}
                                        name="trade"
                                        title="icons.trade.exchange"
                                    />
                                    <Translate
                                        className="column-hide-small"
                                        component="span"
                                        content="header.exchange"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    style={{flexFlow: "row"}}
                                    className={cnames(
                                        active.indexOf("explorer") !== -1
                                            ? null
                                            : "column-hide-xs",
                                        {
                                            active:
                                                active.indexOf("explorer") !==
                                                -1
                                        }
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/explorer/blocks"
                                    )}
                                >
                                    <Icon
                                        size="2x"
                                        style={{
                                            position: "relative",
                                            top: 0,
                                            left: -8
                                        }}
                                        name="server"
                                        title="icons.server"
                                    />
                                    <Translate
                                        className="column-hide-small"
                                        component="span"
                                        content="header.explorer"
                                    />
                                </a>
                            </li>
                            {!!createAccountLink ? null : (
                                <li className="column-hide-small">
                                    <a
                                        style={{flexFlow: "row"}}
                                        onClick={this._showSend.bind(this)}
                                    >
                                        <Icon
                                            size="1_5x"
                                            style={{
                                                position: "relative",
                                                top: 0,
                                                left: -8
                                            }}
                                            name="transfer"
                                            title="icons.transfer"
                                        />
                                        <span>
                                            <Translate content="header.payments" />
                                        </span>
                                    </a>
                                </li>
                            )}
                            {/* Dynamic Menu Item */}
                            <li>{dynamicMenuItem}</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="truncated active-account"
                    style={{cursor: "pointer"}}
                >
                    <div
                        className="text account-name"
                        onClick={this._toggleAccountDropdownMenu}
                    >
                        {currentAccount}
                    </div>
                    {walletBalance}

                    {hasLocalWallet && (
                        <ul
                            className="dropdown header-menu local-wallet-menu"
                            style={{
                                right: 0,
                                maxHeight: !this.state
                                    .accountsListDropdownActive
                                    ? 0
                                    : maxHeight,
                                overflowY: "auto",
                                position: "absolute",
                                width: "20em"
                            }}
                        >
                            <li
                                className={cnames(
                                    {
                                        active:
                                            active.indexOf("/accounts") !== -1
                                    },
                                    "divider"
                                )}
                                onClick={this._onNavigate.bind(
                                    this,
                                    "/accounts"
                                )}
                            >
                                <div className="table-cell">
                                    <Icon
                                        size="2x"
                                        name="folder"
                                        title="icons.folder"
                                    />
                                </div>
                                <div className="table-cell">
                                    <Translate content="explorer.accounts.title" />
                                </div>
                            </li>
                            {accountsList}
                        </ul>
                    )}
                </div>
                <div>
                    {this.props.currentAccount == null ? null : (
                        <span
                            onClick={this._toggleLock.bind(this)}
                            style={{cursor: "pointer"}}
                        >
                            <Icon
                                className="lock-unlock"
                                size="2x"
                                name={this.props.locked ? "locked" : "unlocked"}
                                title={
                                    this.props.locked
                                        ? "icons.locked.common"
                                        : "icons.unlocked.common"
                                }
                            />
                        </span>
                    )}
                </div>
                <div className="app-menu">
                    <div
                        onClick={this._toggleDropdownMenu}
                        className={cnames(
                            "menu-dropdown-wrapper dropdown-wrapper",
                            {active: this.state.dropdownActive}
                        )}
                    >
                        <div className="hamburger">{hamburger}</div>

                        {(this.state.dropdownSubmenuActive &&
                            submenus[this.state.dropdownSubmenuActiveItem] &&
                            submenus[this.state.dropdownSubmenuActiveItem]) || (
                            <ul
                                className="dropdown header-menu"
                                style={{
                                    left: -200,
                                    top: 64,
                                    maxHeight: !this.state.dropdownActive
                                        ? 0
                                        : maxHeight,
                                    overflowY: "auto"
                                }}
                            >
                                <li
                                    className="divider"
                                    onClick={this._toggleLock.bind(this)}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="power"
                                            title="icons.power"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate
                                            content={`header.${
                                                this.props.locked
                                                    ? "unlock_short"
                                                    : "lock_short"
                                            }`}
                                        />
                                    </div>
                                </li>

                                {this.props.locked ? (
                                    <li
                                        className={cnames({
                                            active:
                                                active.indexOf(
                                                    `/create-account/${
                                                        !passwordLogin
                                                            ? "wallet"
                                                            : "password"
                                                    }`
                                                ) !== -1
                                        })}
                                        onClick={this._onNavigate.bind(
                                            this,
                                            `/create-account/${
                                                !passwordLogin
                                                    ? "wallet"
                                                    : "password"
                                            }`
                                        )}
                                    >
                                        <div className="table-cell">
                                            <Icon
                                                size="2x"
                                                name="user"
                                                title="icons.user.create_account"
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <Translate content="header.create_account" />
                                        </div>
                                    </li>
                                ) : null}

                                {!this.props.locked ? (
                                    <li
                                        className={cnames({
                                            active:
                                                active.indexOf("/account") !==
                                                -1
                                        })}
                                        onClick={this._onNavigate.bind(
                                            this,
                                            `/account/${currentAccount}`
                                        )}
                                    >
                                        <div className="table-cell">
                                            <Icon
                                                size="2x"
                                                name="dashboard"
                                                title="icons.dasboard"
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <Translate content="header.dashboard" />
                                        </div>
                                    </li>
                                ) : null}

                                {!isMyAccount ? (
                                    <li
                                        className="divider"
                                        onClick={this[
                                            isContact
                                                ? "_onRemoveContact"
                                                : "_onAddContact"
                                        ].bind(this)}
                                    >
                                        <div className="table-cell">
                                            <Icon
                                                size="2x"
                                                name={`${
                                                    isContact ? "minus" : "plus"
                                                }-circle`}
                                                title={
                                                    isContact
                                                        ? "icons.minus_circle.remove_contact"
                                                        : "icons.plus_circle.add_contact"
                                                }
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <Translate
                                                content={`account.${
                                                    isContact
                                                        ? "unfollow"
                                                        : "follow"
                                                }`}
                                            />
                                        </div>
                                    </li>
                                ) : null}

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf("/market/") !==
                                                -1
                                        },
                                        "column-show-small"
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        tradeUrl
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="trade"
                                            title="icons.trade.exchange"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="header.exchange" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf(
                                                    "/explorer/blocks"
                                                ) !== -1
                                        },
                                        "column-show-small"
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/explorer/blocks"
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="server"
                                            title="icons.server"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="header.explorer" />
                                    </div>
                                </li>

                                <li
                                    className={cnames({
                                        active:
                                            active.indexOf("/transfer") !== -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/transfer"
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="transfer"
                                            title="icons.transfer"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="header.payments_legacy" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf(
                                                    "/deposit-withdraw"
                                                ) !== -1
                                        },
                                        {disabled: !enableDepositWithdraw}
                                    )}
                                    onClick={
                                        !enableDepositWithdraw
                                            ? () => {}
                                            : this._onNavigate.bind(
                                                  this,
                                                  "/deposit-withdraw"
                                              )
                                    }
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="deposit"
                                            title="icons.deposit.deposit"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="gateway.deposit" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf(
                                                    "/deposit-withdraw"
                                                ) !== -1
                                        },
                                        {disabled: !enableDepositWithdraw}
                                    )}
                                    onClick={
                                        !enableDepositWithdraw
                                            ? () => {}
                                            : this._showDeposit.bind(this)
                                    }
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="deposit"
                                            title="icons.deposit.deposit"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="modal.deposit.submit_beta" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf(
                                                    "/deposit-withdraw"
                                                ) !== -1
                                        },
                                        {disabled: !enableDepositWithdraw}
                                    )}
                                    onClick={
                                        !enableDepositWithdraw
                                            ? () => {}
                                            : this._onNavigate.bind(
                                                  this,
                                                  "/deposit-withdraw"
                                              )
                                    }
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="withdraw"
                                            title="icons.withdraw"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="modal.withdraw.submit" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        "divider",
                                        {
                                            active:
                                                active.indexOf(
                                                    "/deposit-withdraw"
                                                ) !== -1
                                        },
                                        {disabled: !enableDepositWithdraw}
                                    )}
                                    onClick={
                                        !enableDepositWithdraw
                                            ? () => {}
                                            : this._showWithdraw.bind(this)
                                    }
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="withdraw"
                                            title="icons.withdraw"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="modal.withdraw.submit_beta" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf("/settings") !==
                                                -1
                                        },
                                        "divider",
                                        "desktop-only"
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/settings"
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="cogs"
                                            title="icons.cogs"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="header.settings" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf("/settings") !==
                                                -1
                                        },
                                        "divider",
                                        "mobile-only",
                                        "has-submenu"
                                    )}
                                    onClick={this._toggleDropdownSubmenu.bind(
                                        this,
                                        SUBMENUS.SETTINGS
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="cogs"
                                            title="icons.cogs"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="header.settings" />{" "}
                                    </div>
                                </li>

                                <li
                                    className={cnames({
                                        active: active.indexOf("/news") !== -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/news"
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="news"
                                            title="icons.news"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="news.news" />
                                    </div>
                                </li>

                                <li
                                    className={cnames(
                                        {
                                            active:
                                                active.indexOf(
                                                    "/help/introduction/localcoin"
                                                ) !== -1
                                        },
                                        "divider"
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/help/introduction/localcoin"
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="question-circle"
                                            title="icons.question_circle"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="header.help" />
                                    </div>
                                </li>

                                <li
                                    className={cnames({
                                        active: active.indexOf("/voting") !== -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        `/account/${currentAccount}/voting`
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="thumbs-up"
                                            title="icons.thumbs_up"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="account.voting" />
                                    </div>
                                </li>

                                <li
                                    className={cnames({
                                        active:
                                            active.indexOf("/assets") !== -1 &&
                                            active.indexOf("/account/") !== -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        `/account/${currentAccount}/assets`
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="assets"
                                            title="icons.assets"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="explorer.assets.title" />
                                    </div>
                                </li>
                                <li
                                    className={cnames({
                                        active:
                                            active.indexOf(
                                                "/signedmessages"
                                            ) !== -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        `/account/${currentAccount}/signedmessages`
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="text"
                                            title="icons.text.signed_messages"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="account.signedmessages.menuitem" />
                                    </div>
                                </li>

                                <li
                                    className={cnames({
                                        active:
                                            active.indexOf("/member-stats") !==
                                            -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        `/account/${currentAccount}/member-stats`
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="text"
                                            title="icons.text.membership_stats"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="account.member.stats" />
                                    </div>
                                </li>

                                {isMyAccount ? (
                                    <li
                                        className={cnames({
                                            active:
                                                active.indexOf("/vesting") !==
                                                -1
                                        })}
                                        onClick={this._onNavigate.bind(
                                            this,
                                            `/account/${currentAccount}/vesting`
                                        )}
                                    >
                                        <div className="table-cell">
                                            <Icon
                                                size="2x"
                                                name="hourglass"
                                                title="icons.hourglass"
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <Translate content="account.vesting.title" />
                                        </div>
                                    </li>
                                ) : null}

                                <li
                                    className={cnames({
                                        active:
                                            active.indexOf("/whitelist") !== -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        `/account/${currentAccount}/whitelist`
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="list"
                                            title="icons.list"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="account.whitelist.title" />
                                    </div>
                                </li>

                                <li
                                    className={cnames("divider", {
                                        active:
                                            active.indexOf("/permissions") !==
                                            -1
                                    })}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        `/account/${currentAccount}/permissions`
                                    )}
                                >
                                    <div className="table-cell">
                                        <Icon
                                            size="2x"
                                            name="warning"
                                            title="icons.warning"
                                        />
                                    </div>
                                    <div className="table-cell">
                                        <Translate content="account.permissions" />
                                    </div>
                                </li>

                                {!hasLocalWallet && (
                                    <li
                                        className={cnames(
                                            {
                                                active:
                                                    active.indexOf(
                                                        "/accounts"
                                                    ) !== -1
                                            },
                                            "divider"
                                        )}
                                        onClick={this._onNavigate.bind(
                                            this,
                                            "/accounts"
                                        )}
                                    >
                                        <div className="table-cell">
                                            <Icon
                                                size="2x"
                                                name="folder"
                                                title="icons.folder"
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <Translate content="explorer.accounts.title" />
                                        </div>
                                    </li>
                                )}
                            </ul>
                        )}
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
            </div>
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
