import React from "react";
import {connect} from "alt-react";

import LoadingIndicator from "../../components/LoadingIndicator";
import LoginSelector from "../LoginSelector";
import AccountStore from "stores/AccountStore";

import Tab from "../Utility/Tab"; import Tabs from "../Utility/Tabs";
import {StarredMarkets, TopMarkets, FeaturedMarkets} from "./Markets";

class DashboardPage extends React.Component {
    render() {
        let {
            myActiveAccounts,
            myHiddenAccounts,
            accountsReady,
            passwordAccount
        } = this.props;
        if (!accountsReady) {
            return <LoadingIndicator />;
        }

        let accountCount =
            myActiveAccounts.size +
            myHiddenAccounts.size +
            (passwordAccount ? 1 : 0);
        if (!accountCount) {
            return <LoginSelector />;
        }

        const items = [
            {
                title: "dashboard.starred_markets",
                content: <StarredMarkets />
            },
            {
                title: "dashboard.featured_markets",
                content: <FeaturedMarkets />
            }
            // {
            //     title: "",
            //     content: (<TopMarkets />)
            // }
        ];

        return (
            <div className="content dashboard-page">
                <Tabs items={items} inner={true} dashboardTabsClass="voting" />
            </div>
        );
    }
}

export default connect(
    DashboardPage,
    {
        listenTo() {
            return [AccountStore];
        },
        getProps() {
            let {
                myActiveAccounts,
                myHiddenAccounts,
                passwordAccount,
                accountsLoaded,
                refsLoaded
            } = AccountStore.getState();

            return {
                myActiveAccounts,
                myHiddenAccounts,
                passwordAccount,
                accountsReady: accountsLoaded && refsLoaded
            };
        }
    }
);
