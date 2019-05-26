import React from "react";
import AltContainer from "alt-container";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import DropdownList from "../Utility/DropdownList";

import WalletUnlockStore from "stores/WalletUnlockStore";
import SettingsActions from "actions/SettingsActions";

const LoginTypeSelector = props => {
    const options = [
        {
            key: "cloud",
            label: `${counterpart.translate(
                "account.name"
            )} (${counterpart
                .translate("wallet.password_model")
                .toLowerCase()})`
        },
        {
            key: "local",
            label: `${counterpart.translate(
                "wallet.key_file"
            )} (${counterpart.translate("wallet.wallet_model").toLowerCase()})`
        }
    ];
    return (
        <AltContainer
            stores={[WalletUnlockStore]}
            inject={{
                selected: () =>
                    options.find(
                        ({key}) =>
                            key ===
                            (WalletUnlockStore.getState().passwordLogin
                                ? "cloud"
                                : "local")
                    )
            }}
            actions={() => ({
                onChange: newType => {
                    return SettingsActions.changeSetting({
                        setting: "passwordLogin",
                        value: newType === "cloud"
                    });
                }
            })}
        >
            <DropdownList
                options={options}
                selected={props.selected}
                onChange={props.onChange}
            />
        </AltContainer>
    );
};

export default LoginTypeSelector;
