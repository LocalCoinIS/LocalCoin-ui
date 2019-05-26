import React from "react";
import HelpContent from "../Utility/HelpContent";

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
