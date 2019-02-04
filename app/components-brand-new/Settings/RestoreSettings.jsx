import React from "react";
import {BackupRestore} from "../Wallet/Backup";
import ImportKeys from "../../components/Wallet/ImportKeys";
import {CreateWalletFromBrainkey} from "../../components/Wallet/WalletCreate";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import SettingsActions from "actions/SettingsActions";
import RestoreFavorites from "./RestoreFavorites";
import DropdownList from "../Utility/DropdownList";

export default class RestoreSettings extends React.Component {
    constructor() {
        super();
        this.state = {
            restoreType: 0,
            types: ["backup", "key", "brainkey", "favorites"]
        };
    }

    _setWalletMode() {
        SettingsActions.changeSetting({
            setting: "passwordLogin",
            value: false
        });
    }

    _changeType(targetValue, e) {
        this.setState({
            restoreType: this.state.types.indexOf(targetValue)
        });
    }

    render() {
        let {passwordLogin} = this.props;

        if (passwordLogin) {
            return (
                <div>
                    <Translate
                        content="settings.wallet_required"
                        component="h4"
                    />
                    <p className="dark-text-color">
                        <Translate content="settings.wallet_required_text" />:
                    </p>

                    <button
                        className="btn large inverted"
                        style={{marginTop: "20px"}}
                        onClick={this._setWalletMode}
                    >
                        <Translate content="settings.enable_wallet" />
                    </button>
                </div>
            );
        }
        let {types, restoreType} = this.state;
        let options = types
            .filter(type => type !== types[restoreType])
            .map(type => {
                return {
                    key: type,
                    label: counterpart.translate(`settings.backup_${type}`)
                };
            });
        let placeholder = {
            key: types[restoreType],
            label: counterpart.translate(
                `settings.backup_${types[restoreType]}`
            )
        };

        let content;

        switch (types[restoreType]) {
            case "backup":
                content = (
                    <div>
                        <BackupRestore />
                    </div>
                );
                break;

            case "brainkey":
                content = (
                    <div>
                        <p style={{maxWidth: "40rem", paddingBottom: 10}}>
                            <Translate content="settings.restore_brainkey_text" />
                        </p>
                        <CreateWalletFromBrainkey nested />
                    </div>
                );
                break;

            case "favorites":
                content = (
                    <div>
                        <RestoreFavorites />
                    </div>
                );
                break;

            default:
                content = <ImportKeys privateKey={restoreType === 1} />;
                break;
        }

        return (
            <div>
                <DropdownList
                    options={options}
                    selected={placeholder}
                    onChange={e => this._changeType.bind(this)(e)}
                />
                {content}
            </div>
        );
    }
}
