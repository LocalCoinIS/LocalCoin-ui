import React from "react";
import PropTypes from "prop-types";
import Tab from "../Utility/Tab"; import Tabs from "../Utility/Tabs";

class ExplorerTabs extends React.Component {
    static propTypes = {
        defaultActiveTab: PropTypes.string
    };

    static defaultProps = {
        defaultActiveTab: "blocks"
    };

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    // name: "blocks",
                    link: "/explorer/blocks",
                    title: "explorer.blocks.title"
                },
                {
                    // name: "assets",
                    link: "/explorer/assets",
                    title: "explorer.assets.title"
                },
                {
                    // name: "accounts",
                    link: "/explorer/accounts",
                    title: "explorer.accounts.title"
                },
                {
                    // name: "witnesses",
                    link: "/explorer/witnesses",
                    title: "explorer.witnesses.title"
                },
                {
                    // name: "activenodes",
                    link: "/explorer/activenodes",
                    title: "account.activenodes.activenodes"
                },
                {
                    // name: "committee_members",
                    link: "/explorer/committee-members",
                    title: "explorer.committee_members.title"
                },
                {
                    // name: "markets",
                    link: "/explorer/markets",
                    title: "markets.title"
                },
                {
                    // name: "fees",
                    link: "/explorer/fees",
                    title: "fees.title"
                }
            ]
        };
    }

    render() {
        const {defaultActiveTab, defaultContent} = this.props;
        return (
            <Tabs
                items={this.state.tabs}
                defaultActiveTab={defaultActiveTab}
                defaultContent={defaultContent}
            />
        );
    }
}

export default ExplorerTabs;
