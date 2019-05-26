import React from "react";
import counterpart from "counterpart";
import IntlActions from "actions/IntlActions";
import Translate from "react-translate-component";
import SettingsActions from "actions/SettingsActions";
import WebsocketAddModal from "../../components/Settings/WebsocketAddModal";
import SettingsEntry from "./SettingsEntry";
import AccountsSettings from "./AccountsSettings";
import WalletSettings from "./WalletSettings";
import PasswordSettings from "./PasswordSettings";
import RestoreSettings from "./RestoreSettings";
import ResetSettings from "./ResetSettings";
import BackupSettings from "./BackupSettings";
import AccessSettings from "./AccessSettings";
import {set} from "lodash-es";
import PropTypes from "prop-types";

class Settings extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props) {
        super();

        let menuEntries = this._getMenuEntries(props);
        let activeSetting = 0;

        let tabIndex = !!props.params.tab
            ? menuEntries.indexOf(props.params.tab)
            : props.viewSettings.get("activeSetting", 0);
        if (tabIndex >= 0) activeSetting = tabIndex;

        this.state = {
            apiServer: props.settings.get("apiServer"),
            activeSetting,
            menuEntries,
            settingEntries: {
                general: [
                    "locale",
                    "unit",
                    "browser_notifications",
                    "showSettles",
                    "walletLockTimeout",
                    //"themes",
                    "showAssetPercent",
                    "passwordLogin",
                    "reset"
                ],
                access: ["apiServer", "faucet_address"]
            }
        };

        this._handleNotificationChange = this._handleNotificationChange.bind(
            this
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.tab !== this.props.params.tab) {
            this._onChangeMenu(this.props.params.tab);
        }
    }

    componentWillReceiveProps(np) {
        if (
            np.settings.get("passwordLogin") !==
            this.props.settings.get("passwordLogin")
        ) {
            const currentEntries = this._getMenuEntries(this.props);
            const menuEntries = this._getMenuEntries(np);
            const currentActive = currentEntries[this.state.activeSetting];
            const newActiveIndex = menuEntries.indexOf(currentActive);
            const newActive = menuEntries[newActiveIndex];
            this.setState({
                menuEntries
            });
            if (newActiveIndex && newActiveIndex !== this.state.activeSetting) {
                this.setState({
                    activeSetting: menuEntries.indexOf(currentActive)
                });
            } else if (
                !newActive ||
                this.state.activeSetting > menuEntries.length - 1
            ) {
                this.setState({
                    activeSetting: 0
                });
            }
        }
    }

    _getMenuEntries(props) {
        if (props.deprecated) {
            return ["wallet", "backup"];
        }
        let menuEntries = [
            "general",
            "wallet",
            "accounts",
            "password",
            "backup",
            "restore",
            "access",
            "faucet_address",
            "reset"
        ];

        if (props.settings.get("passwordLogin")) {
            menuEntries.splice(4, 1);
            menuEntries.splice(3, 1);
            menuEntries.splice(1, 1);
        }
        return menuEntries;
    }

    triggerModal(e, ...args) {
        this.refs.ws_modal.show(e, ...args);
    }

    _handleNotificationChange(path, value) {
        // use different change handler because checkbox doesn't work
        // normal with e.preventDefault()

        let updatedValue = set(
            this.props.settings.get("browser_notifications"),
            path,
            value
        );

        SettingsActions.changeSetting({
            setting: "browser_notifications",
            value: updatedValue
        });
    }

    _onChangeSetting(setting, eTargetValue, e) {
        e.preventDefault();
        // eTargetValue e.target.value

        let {defaults} = this.props;
        let value = null;

        function findEntry(targetValue, targetDefaults) {
            if (!targetDefaults) return targetValue;
            if (targetDefaults[0].translate) {
                for (var i = 0; i < targetDefaults.length; i++) {
                    if (
                        counterpart.translate(
                            `settings.${targetDefaults[i].translate}`
                        ) === targetValue
                    ) {
                        return i;
                    }
                }
            } else {
                return targetDefaults.indexOf(targetValue);
            }
        }

        switch (setting) {
            case "locale":
                let myLocale = counterpart.getLocale();
                if (eTargetValue !== myLocale) {
                    IntlActions.switchLocale(eTargetValue);
                    SettingsActions.changeSetting({
                        setting: "locale",
                        value: eTargetValue
                    });
                }
                break;

            case "themes":
                SettingsActions.changeSetting({
                    setting: "themes",
                    value: eTargetValue
                });
                break;

            case "defaultMarkets":
                break;

            case "walletLockTimeout":
                let newValue = parseInt(eTargetValue, 10);
                if (isNaN(newValue)) newValue = 0;
                if (!isNaN(newValue) && typeof newValue === "number") {
                    SettingsActions.changeSetting({
                        setting: "walletLockTimeout",
                        value: newValue
                    });
                }
                break;

            case "inverseMarket":
            case "confirmMarketOrder":
                value = findEntry(eTargetValue, defaults[setting]) === 0; // USD/LLC is true, LLC/USD is false
                break;

            case "apiServer":
                SettingsActions.changeSetting({
                    setting: "apiServer",
                    value: eTargetValue
                });
                this.setState({
                    apiServer: eTargetValue
                });
                break;

            case "showSettles":
            case "showAssetPercent":
            case "passwordLogin":
                let reference = defaults[setting][0];
                if (reference.translate) reference = reference.translate;
                SettingsActions.changeSetting({
                    setting,
                    value: eTargetValue === reference
                });
                break;

            case "unit":
                let index = findEntry(eTargetValue, defaults[setting]);
                SettingsActions.changeSetting({
                    setting: setting,
                    value: defaults[setting][index]
                });
                break;

            default:
                value = findEntry(eTargetValue, defaults[setting]);
                break;
        }

        if (value !== null) {
            SettingsActions.changeSetting({setting: setting, value: value});
        }
    }

    onReset() {
        SettingsActions.clearSettings();
    }

    _redirectToEntry(entry, e) {
        e.preventDefault();
        this.context.router.push("/settings/" + entry);
    }

    _onChangeMenu(entry) {
        let index = this.state.menuEntries.indexOf(entry);
        this.setState({
            activeSetting: index
        });

        SettingsActions.changeViewSetting({activeSetting: index});
    }

    render() {
        let {settings, defaults} = this.props;
        const {menuEntries, activeSetting, settingEntries} = this.state;
        let entries;
        let activeEntry = menuEntries[activeSetting] || menuEntries[0];

        switch (activeEntry) {
            case "accounts":
                entries = <AccountsSettings />;
                break;

            case "wallet":
                entries = <WalletSettings {...this.props} />;
                break;

            case "password":
                entries = <PasswordSettings />;
                break;

            case "backup":
                entries = <BackupSettings />;
                break;

            case "restore":
                entries = (
                    <RestoreSettings
                        passwordLogin={this.props.settings.get("passwordLogin")}
                    />
                );
                break;

            case "access":
                entries = (
                    <AccessSettings
                        faucet={settings.get("faucet_address")}
                        nodes={defaults.apiServer}
                        onChange={this._onChangeSetting.bind(this)}
                        triggerModal={this.triggerModal.bind(this)}
                    />
                );
                break;
            case "faucet_address":
                entries = (
                    <input
                        type="text"
                        className="settings-input"
                        defaultValue={settings.get("faucet_address")}
                        onChange={this._onChangeSetting.bind(
                            this,
                            "faucet_address"
                        )}
                    />
                );
                break;

            case "reset":
                entries = <ResetSettings />;
                break;

            default:
                entries = settingEntries[activeEntry].map(setting => {
                    return (
                        <SettingsEntry
                            key={setting}
                            setting={setting}
                            settings={settings}
                            defaults={defaults[setting]}
                            onChange={this._onChangeSetting.bind(this)}
                            onNotificationChange={
                                this._handleNotificationChange
                            }
                            locales={this.props.localesObject}
                            {...this.state}
                        />
                    );
                });
                break;
        }

        return (
            <div className="content">
                <div className="options">
                    <div className="container">
                        <h2 className="content__heading">
                            {counterpart.translate("header.settings")}
                        </h2>
                        <div className="options__row">
                            <ul className="options__nav">
                                {menuEntries.map((entry, index) => {
                                    const title = counterpart.translate(
                                        "settings." + entry
                                    );
                                    return (
                                        <li className={`options__nav__item ${index === activeSetting ? "is-active" : ""}`}>
                                            {index === activeSetting ? (
                                                <span className="options__nav__link">
                                                    {title}
                                                </span>
                                            ) : (
                                                <a
                                                    className="options__nav__link"
                                                    href="#"
                                                    key={entry}
                                                    onClick={this._redirectToEntry.bind(
                                                        this,
                                                        entry
                                                    )}
                                                >
                                                    {title}
                                                </a>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="options__setup">
                                <Translate
                                    component="h3"
                                    content={
                                        "settings." + menuEntries[activeSetting]
                                    }
                                />
                                {activeEntry != "access" && (
                                
                                    <Translate
                                        unsafe
                                        style={{
                                            paddingTop: 5,
                                            display: 'block',
                                            marginBottom: 10
                                        }}
                                        content={`settings.${
                                            menuEntries[activeSetting]
                                        }_text`}
                                        className="panel-bg-color"
                                    />
                                
                                )}
                                {entries}
                            </div>
                        </div>
                    </div>
                </div>
                <WebsocketAddModal
                    ref="ws_modal"
                    apis={defaults["apiServer"]}
                    api={defaults["apiServer"]
                        .filter(a => {
                            return a.url === this.state.apiServer;
                        })
                        .reduce((a, b) => {
                            return b && b.url;
                        }, null)}
                    changeConnection={apiServer => {
                        this.setState({apiServer});
                    }}
                />
            </div>
        );
    }
}

export default Settings;
