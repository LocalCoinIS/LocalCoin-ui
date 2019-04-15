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
// import DepositModal from "../../components/Modal/DepositModal";
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
// import IntlActions from "actions/IntlActions";
import AccountImage from "../../components/Account/AccountImage";
import Identicon from "../Account/Identicon";
import {ChainStore} from "bitsharesjs/es";
// import WithdrawModal from "../../components/Modal/WithdrawModalNew";
import {List} from "immutable";
import PropTypes from "prop-types";
import {qr} from "../../assets/brand-new-layout/img/images";

class Sidebar extends React.Component {
    static contextTypes = {
        location: PropTypes.object.isRequired,
        router: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props);
        const active = context.location.pathname;
        const currentAccount = this.props.currentAccount;
        const showSubMenu = currentAccount;
        this.state = {
            active,
            showSubMenu,
        };
        this._toggleSubMenu = this._toggleSubMenu.bind(this);

        this.unlisten = null;
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

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
            this.unlisten = null;
        }
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
            nextProps.height !== this.props.height ||
            nextState.showSubMenu !== this.state.showSubMenu
        );
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
    }

    _toggleSubMenu(e) {
        e.preventDefault();
        this.setState({showSubMenu: !this.state.showSubMenu});
    }

    render() {
        let {active} = this.state;
        let {
            currentAccount,
            starredAccounts,
            passwordLogin,
            passwordAccount
        } = this.props;

        let tradingAccounts = AccountStore.getMyAccounts();

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

        const makeSidebarMenuItem = ({
            title,
            link,
            subLink,
            noBorder,
            isActive
        }) => {
            subLink = !!subLink;
            let str = title;
            if (typeof str === "string" && str.indexOf(".") > 0) {
                str = counterpart.translate(str);
            }
            const liClassName = subLink
                ? "sidebar__menu__sub__item"
                : "sidebar__menu__item";
            const aClassName = subLink
                ? "sidebar__menu__sub__link"
                : "sidebar__menu__link";
            return (
                <li
                    className={cnames(
                        liClassName,
                        {active: !!isActive},
                        {noborder: !!noBorder}
                    )}
                >
                    <Link className={aClassName} to={link}>
                        {str}
                    </Link>
                </li>
            );
        };

        return !currentAccount ? null : (
            <div className="sidebar">
                <div className="sidebar__qr">
                    <AccountImage
                        size={{height: 150, width: 150}}
                        account={currentAccount}
                    />
                    {/*
                    <img src={qr} alt="code" />
                    */}
                </div>
                <p className="sidebar__descr">
                    {counterpart.translate("account.deposit_address")}
                </p>
                <span className="sidebar__user">
                    <b>{currentAccount}</b>
                </span>
                <ul className="sidebar__menu">
                    {makeSidebarMenuItem({
                        title: "header.dashboard",
                        link: `/account/${currentAccount}`,
                        isActive: active === `/account/${currentAccount}`
                    })}
                    {makeSidebarMenuItem({
                        title: "account.member.stats",
                        link: `/account/${currentAccount}/member-stats`,
                        isActive:
                            active.indexOf(
                                `/account/${currentAccount}/member-stats`
                            ) !== -1
                    })}
                    {makeSidebarMenuItem({
                        title: "account.voting",
                        link: `/account/${currentAccount}/voting`,
                        isActive:
                            active.indexOf(
                                `/account/${currentAccount}/voting`
                            ) !== -1
                    })}
                    {false
                        ? makeSidebarMenuItem({
                              title: "account.voting",
                              link: `/account/${currentAccount}/voting`,
                              isActive:
                                  active.indexOf(
                                      `/account/${currentAccount}/voting`
                                  ) !== -1
                          })
                        : null}
                    <li
                        className={cnames("sidebar__menu__item expand", {
                            showsub: this.state.showSubMenu
                        })}
                    >
                        <a
                            className="sidebar__menu__link"
                            href="#"
                            onClick={this._toggleSubMenu}
                        >
                            {counterpart.translate("account.advanced")}
                        </a>
                        <ul className="sidebar__menu__sub">
                            {makeSidebarMenuItem({
                                title: "explorer.assets.title",
                                link: `/account/${currentAccount}/assets`,
                                isActive:
                                    active.indexOf(
                                        `/account/${currentAccount}/assets`
                                    ) !== -1,
                                subLink: true,
                                noBorder: true
                            })}
                            {makeSidebarMenuItem({
                                title: "account.permissions",
                                link: `/account/${currentAccount}/permissions`,
                                isActive:
                                    active.indexOf(
                                        `/account/${currentAccount}/permissions`
                                    ) !== -1,
                                subLink: true
                            })}
                            {makeSidebarMenuItem({
                                title: "account.whitelist.title",
                                link: `/account/${currentAccount}/whitelist`,
                                isActive:
                                    active.indexOf(
                                        `/account/${currentAccount}/whitelist`
                                    ) !== -1,
                                subLink: true
                            })}
                            {makeSidebarMenuItem({
                                title: "account.vesting.title",
                                link: `/account/${currentAccount}/vesting`,
                                isActive:
                                    active.indexOf(
                                        `/account/${currentAccount}/vesting`
                                    ) !== -1,
                                subLink: true
                            })}
                            {makeSidebarMenuItem({
                                title: "account.signedmessages.menuitem",
                                link: `/account/${currentAccount}/signedmessages`,
                                isActive:
                                    active.indexOf(
                                        `/account/${currentAccount}/signedmessages`
                                    ) !== -1,
                                subLink: true
                            })}
                        </ul>
                    </li>
                </ul>
                <button
                    className="btn large outline create-account"
                    type="button"
                    onClick={this._onNavigate.bind(
                        this,
                        `/create-account/${(this.props.passwordLogin) ? 'password': 'wallet'}`
                    )}
                >
                    {counterpart.translate("header.create_account")}
                </button>
                <SendModal
                    id="send_modal_header"
                    refCallback={e => {
                        if (e) this.send_modal = e;
                    }}
                    from_name={currentAccount}
                />

                {/*<DepositModal*/}
                    {/*ref="deposit_modal_new"*/}
                    {/*modalId="deposit_modal_new"*/}
                    {/*account={currentAccount}*/}
                    {/*backedCoins={this.props.backedCoins}*/}
                {/*/>*/}
                {/*<WithdrawModal*/}
                    {/*ref="withdraw_modal_new"*/}
                    {/*modalId="withdraw_modal_new"*/}
                    {/*backedCoins={this.props.backedCoins}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default connect(
    Sidebar,
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
