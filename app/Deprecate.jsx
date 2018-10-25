import React from "react";
import WalletDb from "stores/WalletDb";
import Settings from "./components/Settings/SettingsContainer";
import Translate from "react-translate-component";

export default class Deprecate extends React.Component {
    hasWallet() {
        return !!WalletDb.getWallet();
    }

    renderForWallet() {
        return (
            <div>
                <Translate content="migration.text_1" component="h4" />
                <Translate content="migration.text_2" component="p" unsafe />
            </div>
        );
    }

    renderForCloud() {
        return (
            <div>
                <Translate content="migration.text_3" unsafe component="p" />
            </div>
        );
    }

    render() {
        return (
            <div className="grid-frame">
                <div className="grid-block vertical" style={{paddingBottom: "3rem"}}>
                    <div className="grid-content large-offset-2 large-8 shrink">

                        <Translate content="migration.title" component="h2" />
                        <Translate content="migration.announcement_1" unsafe component="p" />
                        <p><a href="https://wallet.localcoin.is" target='blank' rel='noopener noreferrer'>https://wallet.localcoin.is</a></p>

                        {this.hasWallet() ? this.renderForWallet() : this.renderForCloud()}

                    </div>
                    {this.hasWallet() ? <Settings {...this.props} deprecated /> : null}
                </div>
            </div>
        );
    }
};
