import React from "react";
import SettingsStore from "stores/SettingsStore";
import AltContainer from "alt-container";
import Fees from "./Fees";

class FeesContainer extends React.Component {
    dikiHack() {
        let bullets = [
            ["Price per KByte Transaction Size", "highlight-all"],
            ["Symbols with 4 Characters", "highlight-all"],
            ["Fee for Premium Names", "highlight-all"],
            ["Lifetime Membership", "highlight-all"]
        ];

        let tds = document.getElementsByTagName("td");
        if (tds.length < 50) return false;

        for (let tdI in tds)
            for (let bulletI in bullets) {
                let haystack = tds[tdI].innerHTML;
                let needle = bullets[bulletI][0];

                try {
                    if (haystack.indexOf(needle) > -1) {
                        tds[tdI].parentNode.className = bullets[bulletI][1];
                    }
                } catch (e) {}
            }

        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.dikiHack()) {
            setTimeout(this.dikiHack, 1000);
        }
    }

    componentDidMount() {
        if (!this.dikiHack()) {
            setTimeout(this.dikiHack, 1000);
        }
    }
    render() {
        return (
            <AltContainer
                stores={[SettingsStore]}
                inject={{
                    settings: SettingsStore.getState().settings
                }}
            >
                <Fees {...this.props} />
            </AltContainer>
        );
    }
}

export default FeesContainer;
