import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import SettingsActions from "actions/SettingsActions";

export default class ResetSettings extends React.Component {
    constructor() {
        super();

        this.state = {
            message: null
        };
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

    render() {
        return (
            <div className="block-list no-border-bottom">
                <div>
                    <Translate
                        component="span"
                        style={{
                            fontWeight: "normal",
                            fontStyle: "normal"
                        }}
                        content={"settings.reset_text_description"}
                        generalName={counterpart.translate("settings.general")}
                        with={{
                            generalName: counterpart.translate(
                                "settings.general"
                            ),
                            accessName: counterpart.translate(
                                "settings.access"
                            ),
                            faucetName: counterpart.translate(
                                "settings.faucet_address"
                            )
                        }}
                    />
                </div>

                <div
                    style={{
                        height: 60,
                        width: "100%",
                        marginTop: 20,
                        textAlign: "center",
                        cursor: "pointer"
                    }}
                    className="btn large inverted"
                    onClick={() => {
                        SettingsActions.clearSettings().then(() => {
                            this._setMessage(
                                "settings.restore_default_success"
                            );
                        });
                    }}
                >
                    {counterpart.translate("settings.reset")}
                </div>

                <div
                    className="facolor-success"
                    style={{marginTop: "20px", height: "18px"}}
                >
                    {this.state.message}
                </div>
            </div>
        );
    }
}
