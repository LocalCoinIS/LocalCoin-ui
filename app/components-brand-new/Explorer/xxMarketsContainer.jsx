import React from "react";
import ExplorerTabs from "./ExplorerTabs";
import RealMarketsContainer from "../../components/Exchange/MarketsContainer";

class MarketsContainer extends React.Component {
    render() {
        let content = <RealMarketsContainer />;

        return (
            <div className="content">
                <ExplorerTabs
                    defaultActiveTab="markets.title"
                    defaultContent={content}
                />
            </div>
        );
    }
}

export default MarketsContainer;
