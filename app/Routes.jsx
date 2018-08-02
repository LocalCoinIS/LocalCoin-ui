import React from "react";

import {Route, IndexRoute, Redirect} from "react-router/es";
import willTransitionTo from "./routerTransition";
import App from "./App";

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
                    import("components-brand-new/Layout/Header"),
                    import("components-brand-new/Layout/Sidebar"),
                    import("components-brand-new/Dashboard/DashboardPage"),
                    import("components-brand-new/Layout/Footer")
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
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/Explorer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/fees"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/FeesContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/blocks"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/BlocksContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/assets"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/AssetsContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/accounts"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/AccountsContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/witnesses"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/Witnesses"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/explorer/committee-members"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/CommitteeMembers"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />

        <Route
            path="wallet"
            getComponent={(location, cb) => {
                import("components/Wallet/WalletManager")
                    .then(loadRoute(cb, "WalletManager"))
                    .catch(errorLoading);
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
            getComponent={(location, cb) => {
                import("components/Wallet/WalletCreate")
                    .then(loadRoute(cb, "WalletCreate"))
                    .catch(errorLoading);
            }}
        />

        <Route
            path="create-wallet-brainkey"
            getComponent={(location, cb) => {
                import("components/Wallet/WalletCreate")
                    .then(loadRoute(cb, "CreateWalletFromBrainkey"))
                    .catch(errorLoading);
            }}
        />

        <Route
            path="transfer"
            getComponent={(location, cb) => {
                import("components/Transfer/Transfer")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />

        <Route
            path="invoice/:data"
            getComponent={(location, cb) => {
                import("components/Transfer/Invoice")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="explorer/markets"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components-brand-new/Explorer/MarketsContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="market/:marketID"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Exchange/ExchangeContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="settings"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Settings/SettingsContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="settings/:tab"
            getComponents={(location, cb) => {
                Promise.all([
                    import("components-brand-new/Layout/Header"),
                    Promise.resolve(null),
                    import("components/Settings/SettingsContainer"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="block/:height"
            getComponent={(location, cb) => {
                import("components/Blockchain/BlockContainer")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="asset/:symbol"
            getComponent={(location, cb) => {
                import("components/Blockchain/Asset")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="create-account"
            getComponent={(location, cb) => {
                import("components/LoginSelector")
                    .then(loadRoute(cb))
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
            getComponent={(location, cb) => {
                import("components/Dashboard/DashboardAccountsOnly")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />

        <Route
            path="existing-account"
            getComponent={(location, cb) => {
                import("components/Wallet/ExistingAccount")
                    .then(loadRoute(cb, "ExistingAccount"))
                    .catch(errorLoading);
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
                    import("components-brand-new/Layout/Header"),
                    import("components-brand-new/Layout/Sidebar"),
                    import("components-brand-new/Account/AccountPage"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        >
            <IndexRoute
                getComponent={(location, cb) => {
                    import("components-brand-new/Account/AccountOverview")
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
                    import("components-brand-new/Account/AccountSignedMessages")
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
            getComponent={(location, cb) => {
                import("components/Account/AccountDepositWithdraw")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="create-worker"
            getComponent={(location, cb) => {
                import("components/Account/CreateWorker")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/init-error"
            getComponent={(location, cb) => {
                import("components/InitError")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
        <Route
            path="/news"
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
                    import("components-brand-new/Layout/Header"),
                    import("components-brand-new/Help/Sidebar"),
                    import("components-brand-new/Help/Content"),
                    import("components-brand-new/Layout/Footer")
                ])
                    .then(loadMultiComponentsRoute(cb))
                    .catch(errorLoading);
            }}
        >
            <Route
                path=":path1"
                getComponents={(location, cb) => {
                    Promise.all([
                        import("components-brand-new/Layout/Header"),
                        import("components-brand-new/Help/Sidebar"),
                        import("components-brand-new/Help/Content"),
                        import("components-brand-new/Layout/Footer")
                    ])
                        .then(loadMultiComponentsRoute(cb))
                        .catch(errorLoading);
                }}
            >
                <Route
                    path=":path2"
                    getComponents={(location, cb) => {
                        Promise.all([
                            import("components-brand-new/Layout/Header"),
                            import("components-brand-new/Help/Sidebar"),
                            import("components-brand-new/Help/Content"),
                            import("components-brand-new/Layout/Footer")
                        ])
                            .then(loadMultiComponentsRoute(cb))
                            .catch(errorLoading);
                    }}
                >
                    <Route
                        path=":path3"
                        getComponents={(location, cb) => {
                            Promise.all([
                                import("components-brand-new/Layout/Header"),
                                import("components-brand-new/Help/Sidebar"),
                                import("components-brand-new/Help/Content"),
                                import("components-brand-new/Layout/Footer")
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
            getComponent={(location, cb) => {
                import("components/Page404/Page404")
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }}
        />
    </Route>
);

export default routes;
