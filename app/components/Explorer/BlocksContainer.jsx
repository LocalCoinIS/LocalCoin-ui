import React from "react";
import BlockchainStore from "stores/BlockchainStore";
import AltContainer from "alt-container";
import Blocks from "./Blocks";
import ExplorerTabs from "./ExplorerTabs";

class BlocksContainer extends React.Component {
    render() {
        let content = (
            <AltContainer
                stores={[BlockchainStore]}
                inject={{
                    latestBlocks: () => {
                        return BlockchainStore.getState().latestBlocks;
                    },
                    latestTransactions: () => {
                        return BlockchainStore.getState().latestTransactions;
                    }
                }}
            >
                <Blocks />
            </AltContainer>
        );

        return (
            <div className="content">
                <ExplorerTabs
                    defaultActiveTab="explorer.blocks.title"
                    defaultContent={content}
                />
            </div>
        );
    }
}

export default BlocksContainer;
