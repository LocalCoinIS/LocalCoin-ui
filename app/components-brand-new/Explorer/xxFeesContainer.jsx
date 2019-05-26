import React from "react";
import ExplorerTabs from "./ExplorerTabs";
import RealFeesContainer from "../../components/Blockchain/FeesContainer";

class FeesContainer extends React.Component {
    render() {
        let content = <RealFeesContainer />;

        return (
            <div className="content">
                <ExplorerTabs
                    defaultActiveTab="fees.title"
                    defaultContent={content}
                />
            </div>
        );
    }
}

export default FeesContainer;
