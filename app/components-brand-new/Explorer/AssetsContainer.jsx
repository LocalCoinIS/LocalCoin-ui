import React from "react";
import AssetStore from "stores/AssetStore";
import SettingsStore from "stores/SettingsStore";
import AltContainer from "alt-container";
import Assets from "./Assets";
import ExplorerTabs from "./ExplorerTabs";

class AssetsContainer extends React.Component {
    render() {
        let content = (
            <AltContainer
                stores={[AssetStore, SettingsStore]}
                inject={{
                    assets: () => {
                        return AssetStore.getState().assets;
                    },
                    filterMPA: () => {
                        return SettingsStore.getState().viewSettings.get(
                            "filterMPA"
                        );
                    },
                    filterUIA: () => {
                        return SettingsStore.getState().viewSettings.get(
                            "filterUIA"
                        );
                    }
                }}
            >
                <Assets />
            </AltContainer>
        );

        return (
            <div className="content">
                <ExplorerTabs
                    defaultActiveTab="explorer.assets.title"
                    defaultContent={content}
                />
            </div>
        );
    }
}

export default AssetsContainer;
