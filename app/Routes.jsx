import React from "react";

import {Route, IndexRoute, Redirect} from "react-router/es";
import willTransitionTo from "./routerTransition";
import App from "./App";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Witnesses from "./components/Explorer/Witnesses";
import Activenodes from "./components/Explorer/Activenodes";
import CommitteeMembers from "./components/Explorer/CommitteeMembers";
import {WalletManager} from "./components/Wallet/WalletManager";
import {
    WalletCreate,
    CreateWalletFromBrainkey
} from "./components/Wallet/WalletCreate";
import {ExistingAccount} from "./components/Wallet/ExistingAccount";

/*
* Electron does not support async loading of components via System.import,
* so we make sure they're bundled already by including them here
*/
if (__ELECTRON__ || __HASH_HISTORY__) {
    require("./electron_imports");
}

class Auth extends React.Component {
    render() {
        return null;
    }
}

function loadRoute(cb, moduleName = "default") {
    return module => cb(null, module[moduleName]);
}

function loadMultiComponentsRoute(cb, moduleName = "default") {
    return modules => {
        const [
            headerBlock,
            sidebarBlock,
            contentBlock,
            footerBlock
        ] = modules.map(module => (!!module ? module["default"] : module));
        cb(null, {
            headerBlock,
            sidebarBlock,
            contentBlock,
            footerBlock
        });
    };
}

function errorLoading(err) {
    console.error("Dynamic page loading failed", err);
}

const routes = (
    <Route path="/" component={App} onEnter={willTransitionTo}>
        <IndexRoute
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    import("components/Layout/Sidebar"),
                    import("components/Dashboard/DashboardPage"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route path="/auth/:data" component={Auth} />

        <Route
            path="explorer"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/Explorer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/fees"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/FeesContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/blocks"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/BlocksContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/assets"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/AssetsContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/accounts"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/AccountsContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/witnesses"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: Witnesses,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/activenodes"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: Activenodes,
                footerBlock: Footer
            }}
        />
        <Route
            path="/explorer/committee-members"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: CommitteeMembers,
                footerBlock: Footer
            }}
        />
        {/*
        <Route
            path="/explorer/witnesses"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/Witnesses"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/committee-members"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/CommitteeMembers"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        */}

        <Route
            path="wallet"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: WalletManager,
                footerBlock: Footer
            }}
        >
            {/* wallet management console */}
            <IndexRoute
                getComponent={(location, cb) => {
                    import("components/Wallet/WalletManager")
                        .then(loadRoute(cb, "WalletOptions"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="change"
                getComponent={(location, cb) => {
                    import("components/Wallet/WalletManager")
                        .then(loadRoute(cb, "ChangeActiveWallet"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="change-password"
                getComponent={(location, cb) => {
                    import("components/Wallet/WalletChangePassword")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="import-keys"
                getComponent={(location, cb) => {
                    import("components/Wallet/ImportKeys")
                        .then(loadRoute(cb, "ExistingAccountOptions"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="brainkey"
                getComponent={(location, cb) => {
                    import("components/Wallet/Brainkey")
                        .then(loadRoute(cb, "ExistingAccountOptions"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="create"
                getComponent={(location, cb) => {
                    import("components/Wallet/WalletCreate")
                        .then(loadRoute(cb, "WalletCreate"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="delete"
                getComponent={(location, cb) => {
                    import("components/Wallet/WalletManager")
                        .then(loadRoute(cb, "WalletDelete"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="backup/restore"
                getComponent={(location, cb) => {
                    import("components/Wallet/Backup")
                        .then(loadRoute(cb, "BackupRestore"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="backup/create"
                getComponent={(location, cb) => {
                    import("components/Wallet/Backup")
                        .then(loadRoute(cb, "BackupCreate"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="backup/brainkey"
                getComponent={(location, cb) => {
                    import("components/Wallet/BackupBrainkey")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="balance-claims"
                getComponent={(location, cb) => {
                    import("components/Wallet/BalanceClaimActive")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
        </Route>

        <Route
            path="create-wallet"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: WalletCreate,
                footerBlock: Footer
            }}
        />

        <Route
            path="create-wallet-brainkey"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: CreateWalletFromBrainkey,
                footerBlock: Footer
            }}
        />
        <Route
            path="OTC"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/OTC/OTC"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="activenode"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Account/AccountActivenodes"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="transfer"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Transfer/Transfer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />

        <Route
            path="invoice/:data"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Transfer/Invoice"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="explorer/markets"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Explorer/MarketsContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="market/:marketID"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Exchange/ExchangeContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
            onEnter={(nextState, replace, callback) => {
                document.querySelector("#content > div") &&
                    document
                        .querySelector("#content > div")
                        .classList.add("exchange-layout");
                callback();
            }}
            onLeave={() => {
                document.querySelector("#content > div") &&
                    document
                        .querySelector("#content > div")
                        .classList.remove("exchange-layout");
            }}
        />
        <Route
            path="settings"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Settings/SettingsContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="settings/:tab"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Settings/SettingsContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="block/:height"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Blockchain/BlockContainer"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="asset/:symbol"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    import("components/Layout/Sidebar"),
                    import("components/Blockchain/Asset"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="create-account"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/LoginSelector"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        >
            <Route
                path="wallet"
                getComponent={(location, cb) => {
                    import("components/Account/CreateAccount")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="password"
                getComponent={(location, cb) => {
                    import("components/Account/CreateAccountPassword")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
        </Route>

        <Route
            path="accounts"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Dashboard/DashboardAccountsOnly"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />

        <Route
            path="existing-account"
            components={{
                headerBlock: Header,
                sidebarBlock: null,
                contentBlock: ExistingAccount,
                footerBlock: Footer
            }}
        >
            <IndexRoute
                getComponent={(location, cb) => {
                    import("components/Wallet/Backup")
                        .then(loadRoute(cb, "BackupRestore"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="import-backup"
                getComponent={(location, cb) => {
                    import("components/Wallet/ExistingAccount")
                        .then(loadRoute(cb, "ExistingAccountOptions"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="import-keys"
                getComponent={(location, cb) => {
                    import("components/Wallet/ImportKeys")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="brainkey"
                getComponent={(location, cb) => {
                    import("components/Wallet/Brainkey")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="balance-claim"
                getComponent={(location, cb) => {
                    import("components/Wallet/BalanceClaimActive")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
        </Route>

        <Route
            path="/account/:account_name"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    import("components/Layout/Sidebar"),
                    import("components/Account/AccountPage"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        >
            <IndexRoute
                getComponent={(location, cb) => {
                    import("components/Account/AccountOverview")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            {/* <Route path="dashboard" getComponent={(location, cb) => {
                import("components/Account/AccountOverview").then(loadRoute(cb)).catch(errorLoading);
            }}/> */}
            {/* <Route path="deposit-withdraw" getComponent={(location, cb) => {
                import("components/Account/AccountDepositWithdraw").then(loadRoute(cb)).catch(errorLoading);
            }}/> */}
            {/* <Route path="orders" getComponent={(location, cb) => {
                import("components/Account/AccountOrders").then(loadRoute(cb)).catch(errorLoading);
            }}/> */}

            <Route
                path="assets"
                getComponent={(location, cb) => {
                    import("components/Account/AccountAssets")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="create-asset"
                getComponent={(location, cb) => {
                    import("components/Account/AccountAssetCreate")
                        .then(loadRoute(cb, "AccountAssetCreate"))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="update-asset/:asset"
                getComponent={(location, cb) => {
                    import("components/Account/AccountAssetUpdate")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="member-stats"
                getComponent={(location, cb) => {
                    import("components/Account/AccountMembership")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="vesting"
                getComponent={(location, cb) => {
                    import("components/Account/AccountVesting")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="permissions"
                getComponent={(location, cb) => {
                    import("components/Account/AccountPermissions")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="voting"
                getComponent={(location, cb) => {
                    import("components/Account/AccountVoting")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="activenodes"
                getComponent={(location, cb) => {
                    import("components/Account/AccountActivenodes")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="whitelist"
                getComponent={(location, cb) => {
                    import("components/Account/AccountWhitelist")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Route
                path="signedmessages"
                getComponent={(location, cb) => {
                    import("components/Account/AccountSignedMessages")
                        .then(loadRoute(cb))
                        .catch(errorLoading);
                }}
            />
            <Redirect from="overview" to="/account/:account_name" />
            <Redirect from="dashboard" to="/account/:account_name" />
            <Redirect from="orders" to="/account/:account_name" />
        </Route>
        <Route
            path="deposit-withdraw"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    import("components/Layout/Sidebar"),
                    import("components/Account/AccountDepositWithdraw"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="create-worker"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    import("components/Layout/Sidebar"),
                    import("components/Account/CreateWorker"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/init-error"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/InitError"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/news"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/News"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
            getComponent={(location, cb) => {
                import("components/News")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/help"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    import("components/Help/Sidebar"),
                    import("components/Help/Content"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        >
            <Route
                path=":path1"
                getComponents={(location, cb) => {
                    Promise.all([
                        import("components/Layout/Header"),
                        import("components/Help/Sidebar"),
                        import("components/Help/Content"),
                        import("components/Layout/Footer")
                    ])
                        .then(loadMultiComponentsRoute(cb))
                        .catch(errorLoading);
                }}
            >
                <Route
                    path=":path2"
                    getComponents={(location, cb) => {
                        Promise.all([
                            import("components/Layout/Header"),
                            import("components/Help/Sidebar"),
                            import("components/Help/Content"),
                            import("components/Layout/Footer")
                        ])
                            .then(loadMultiComponentsRoute(cb))
                            .catch(errorLoading);
                    }}
                >
                    <Route
                        path=":path3"
                        getComponents={(location, cb) => {
                            Promise.all([
                                import("components/Layout/Header"),
                                import("components/Help/Sidebar"),
                                import("components/Help/Content"),
                                import("components/Layout/Footer")
                            ])
                                .then(loadMultiComponentsRoute(cb))
                                .catch(errorLoading);
                        }}
                    />
                </Route>
            </Route>
        </Route>
        <Route
            path="*"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Page404/Page404"),
                    import("components/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
    </Route>
);

export default routes;
