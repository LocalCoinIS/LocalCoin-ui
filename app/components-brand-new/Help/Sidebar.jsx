import React from "react";
import HelpContent from "../../components/Utility/HelpContent";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <HelpContent path="toc" />
            </div>
        );
    }
}

export default Sidebar;
