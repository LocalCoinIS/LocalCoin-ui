import React from "react";
import AccountStore from "stores/AccountStore";
import AltContainer from "alt-container";
import Accounts from "./Accounts";
import ExplorerTabs from "./ExplorerTabs";

class AccountsContainer extends React.Component {
    render() {
        let content = (
            <AltContainer
                stores={[AccountStore]}
                inject={{
                    searchAccounts: () => {
                        return AccountStore.getState().searchAccounts;
                    },
                    searchTerm: () => {
                        return AccountStore.getState().searchTerm;
                    }
                }}
            >
                <Accounts />
            </AltContainer>
        );

        return (
            <div className="content">
                <ExplorerTabs
                    defaultActiveTab="explorer.accounts.title"
                    defaultContent={content}
                />
            </div>
        );
    }
}

export default AccountsContainer;
