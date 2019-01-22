import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import SettingsActions from "actions/SettingsActions";
import AssetName from "../../components/Utility/AssetName";
import Notify from "notifyjs";
import cnames from "classnames";
import {
    greatBritainFlag,
    chinaFlag,
    franceFlag,
    southKoreaFlag,
    germanyFlag,
    spainFlag,
    italyFlag,
    turkeyFlag,
    russiaFlag,
    japanFlag
} from "../../assets/brand-new-layout/img/images";
import onClickOutside from "react-onclickoutside";

class SelectUnWrapped extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    handleClickOutside() {
        this.setState({isOpen: false});
    }
    render() {
        const {setting, options, selected, onChange} = this.props;
        return (
            <div
                className={cnames(
                    "select",
                    {"select-withicon": !!selected["icon"]},
                    {"is-open": this.state.isOpen}
                )}
            >
                <span
                    className="placeholder"
                    onClick={e => {
                        e.preventDefault();
                        this.setState({
                            isOpen: !this.state.isOpen
                        });
                    }}
                >
                    {!!selected["icon"] ? (
                        <i
                            className="icon"
                            style={{
                                backgroundImage: `url(${selected["icon"]})`
                            }}
                        />
                    ) : null}
                    {selected["label"]}
                </span>
                <ul className={setting.toLowerCase()}>
                    {options
                        .filter(entry => entry["key"] !== selected["key"])
                        .map(entry => {
                            return (
                                <li
                                    key={entry["key"]}
                                    onClick={e => {
                                        onChange.bind(
                                            this,
                                            setting,
                                            entry["key"]
                                        )(e);
                                        this.setState({isOpen: false});
                                    }}
                                >
                                    {!!entry["icon"] ? (
                                        <i
                                            className="icon"
                                            style={{
                                                backgroundImage: `url(${
                                                    entry["icon"]
                                                })`
                                            }}
                                        />
                                    ) : null}
                                    {entry["label"]}
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

const Select = onClickOutside(SelectUnWrapped);

export default class SettingsEntry extends React.Component {
    constructor() {
        super();

        this.state = {
            message: null
        };

        this.handleNotificationChange = this.handleNotificationChange.bind(
            this
        );
    }

    _setMessage(key) {
        this.setState({
            message: counterpart.translate(key)
        });

        this.timer = setTimeout(() => {
            this.setState({message: null});
        }, 4000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleNotificationChange(path) {
        return evt => {
            this.props.onNotificationChange(path, !!evt.target.checked);
        };
    }

    getFlag(locale) {
        const localeToFlagMap = {
            en: greatBritainFlag,
            zh: chinaFlag,
            fr: franceFlag,
            ko: southKoreaFlag,
            de: germanyFlag,
            es: spainFlag,
            it: italyFlag,
            tr: turkeyFlag,
            ru: russiaFlag,
            ja: japanFlag
        };
        return !!localeToFlagMap[locale] ? localeToFlagMap[locale] : null;
    }

    render() {
        let {defaults, setting, settings} = this.props;
        let options,
            optional,
            confirmButton,
            value,
            input,
            selected = settings.get(setting);
        let noHeader = false;
        let component = null;

        switch (setting) {
            case "locale":
                value = {
                    key: selected,
                    label: counterpart("languages." + selected),
                    icon: this.getFlag(selected)
                };
                options = defaults.map(entry => {
                    return {
                        key: entry,
                        label: counterpart("languages." + entry),
                        icon: this.getFlag(entry)
                    };
                });

                break;

            case "themes":
                value = selected;
                options = defaults.map(entry => {
                    let translationKey = "settings." + entry;
                    let value = counterpart.translate(translationKey);

                    return (
                        <option key={entry} value={entry}>
                            {value}
                        </option>
                    );
                });

                break;

            case "browser_notifications":
                value = selected;

                component = (
                    <div className="settings--notifications">
                        <div className="settings--notifications--group">
                            <div className="settings--notifications--item">
                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        className="checkbox__input"
                                        checked={!!value.allow}
                                        onChange={this.handleNotificationChange(
                                            "allow"
                                        )}
                                    />
                                    <span className="checkbox__styled" />
                                    <span className="checkbox__label">
                                        {counterpart.translate(
                                            "settings.browser_notifications_allow"
                                        )}
                                    </span>
                                </label>
                            </div>
                            <div className="settings--notifications--group">
                                <div className="settings--notifications--item">
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            className="checkbox__input"
                                            disabled={!value.allow}
                                            checked={
                                                !!value.additional.transferToMe
                                            }
                                            onChange={this.handleNotificationChange(
                                                "additional.transferToMe"
                                            )}
                                        />
                                        <span
                                            className={cnames(
                                                "checkbox__styled",
                                                {disable: !value.allow}
                                            )}
                                        />
                                        <span className="checkbox__label">
                                            {counterpart.translate(
                                                "settings.browser_notifications_additional_transfer_to_me"
                                            )}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {!!value.allow &&
                            Notify.needsPermission && (
                                <a
                                    href="https://goo.gl/zZ7NHY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Translate
                                        component="div"
                                        className="settings--notifications--no-browser-support"
                                        content="settings.browser_notifications_disabled_by_browser_notify"
                                    />
                                </a>
                            )}
                    </div>
                );

                break;

            case "defaultMarkets":
                options = null;
                value = null;
                break;

            case "walletLockTimeout":
                value = selected;
                input = (
                    <input
                        type="text"
                        className="settings-input"
                        value={selected}
                        onChange={e => {
                            this.props.onChange.bind(
                                this,
                                setting,
                                e.target.value
                            )(e);
                        }}
                    />
                );
                break;

            default:
                if (typeof selected === "number") {
                    value = defaults[selected];
                } else if (typeof selected === "boolean") {
                    if (selected) {
                        value = defaults[0];
                    } else {
                        value = defaults[1];
                    }
                } else if (typeof selected === "string") {
                    value = selected;
                }

                if (defaults) {
                    options = defaults.map(entry => {
                        let option = entry.translate
                            ? counterpart.translate(
                                  `settings.${entry.translate}`
                              )
                            : entry;
                        if (setting === "unit") {
                            option = <AssetName name={entry} />;
                        }
                        let key = entry.translate ? entry.translate : entry;
                        return {
                            key,
                            label: option
                        };
                    });
                    value = {
                        key: !!value.translate ? value.translate : value,
                        label: !!value.translate
                            ? counterpart.translate(
                                  "settings." + value.translate
                              )
                            : value
                    };
                } else {
                    input = (
                        <input
                            className="settings-input"
                            type="text"
                            defaultValue={value}
                            onBlur={e => {
                                this.props.onChange.bind(
                                    this,
                                    setting,
                                    e.target.value
                                )(e);
                            }}
                        />
                    );
                }
                break;
        }
        if (typeof value !== "number" && !value && !options) return null;

        if (value && value.translate) {
            value = value.translate;
        }

        return (
            <div className="options__form__row">
                {noHeader ? null : (
                    <label>
                        {counterpart.translate(`settings.${setting}`)}
                    </label>
                )}
                {options ? (
                    <Select
                        setting={setting}
                        options={options}
                        selected={value}
                        onChange={this.props.onChange}
                    />
                ) : null}
                {input ? input : null}
                {component ? component : null}
                <div className="facolor-success">{this.state.message}</div>
            </div>
        );
    }
}
