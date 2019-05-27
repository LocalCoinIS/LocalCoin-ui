import React from "react";
import {BackupCreate} from "../Wallet/Backup";
import BackupBrainkey from "../Wallet/BackupBrainkey";
import counterpart from "counterpart";
import BackupFavorites from "./BackupFavorites";
import DropdownList from "../Utility/DropdownList";

export default class BackupSettings extends React.Component {
    constructor() {
        super();
        this.state = {
            restoreType: 0,
            types: ["backup", "brainkey", "favorites"]
        };
    }

    _changeType(targetValue, e) {
        this.setState({
            restoreType: this.state.types.indexOf(targetValue)
        });
    }

    render() {
        let {types, restoreType} = this.state;
        let options = types.map(type => {
            return {
                key: type,
                label: counterpart.translate(`settings.backupcreate_${type}`)
            };
        });
        let placeholder = {
            key: types[restoreType],
            label: counterpart.translate(
                `settings.backupcreate_${types[restoreType]}`
            )
        };

        let content;

        switch (types[restoreType]) {
            case "backup":
                content = <BackupCreate />;
                break;

            case "brainkey":
                content = <BackupBrainkey />;
                break;

            case "favorites":
                content = <BackupFavorites />;
                break;

            default:
                break;
        }

        return (
            <div>
                <DropdownList
                    options={options}
                    selected={placeholder}
                    onChange={this._changeType.bind(this)}
                />

                {content}
            </div>
        );
    }
}
