import React from "react";
import Translate from "react-translate-component";
import PubKeyInput from "../../components/Forms/PubKeyInput";
import ChainTypes from "../../components/Utility/ChainTypes";
import BindToChainState from "../../components/Utility/BindToChainState";
import {Tabs, Tab} from "../../components/Utility/Tabs";
import counterpart from "counterpart";
import SignedMessageAction from "../../actions/SignedMessageAction";
import SignedMessage from "../../components/Account/SignedMessage";
import cnames from "classnames";

/** This component gives a user interface for signing and verifying messages with the bitShares memo key.
 *  It consists of two tabs:
 *    - Sign message tab (code prefix: tabSM)
 *    - Verify message tab (code prefix: tabVM)
 *
 *  See SignedMessageAction for details on message format.
 *
 *    @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */
class AccountSignedMessages extends React.Component {
    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired
    };

    constructor(props) {
        super(props);
        // initialize state (do not use setState method!)
        this.state = {
            tabsm_memo_key: this.props.account.get("options").get("memo_key"),
            tabsm_popup: "",
            tabsm_message_text: null,
            tabsm_message_signed: null,
            tabvm_popup: "",
            tabvm_message_signed: null,
            tabvm_verified: null,
            tabvm_message_signed_and_verified: null,
            tabvm_flag_verifyonchange: false,
            activeTab: "account.signedmessages.verifying"
        };
    }

    /**
     * Event when user pushes sign button. Memo message and meta will be signed and displayed
     * in the bottom textarea
     *
     * @param event
     */
    _tabSMSignAction(event) {
        event.preventDefault();

        try {
            // validate keys are still the same. Better: make public memokey field uneditable
            let storedKey = this.props.account.get("options").get("memo_key");
            if (this.state.tabsm_memo_key !== storedKey) {
                throw Error(
                    counterpart.translate("account.signedmessages.keymismatch")
                );
            }

            // there should be a message entered
            if (this.state.tabsm_message_text) {
                this._tabSMPopMessage(
                    counterpart.translate("account.signedmessages.signing"),
                    0
                );
                SignedMessageAction.signMessage(
                    this.props.account,
                    this.state.tabsm_message_text
                )
                    .then(res => {
                        this.setState({
                            tabsm_message_signed: res,
                            tabsm_popup: "" // clear loading message
                        });
                    })
                    .catch(err => {
                        this._tabSMPopMessage(err.message);
                        this.setState({
                            tabsm_message_signed: null
                        });
                    });
            }
        } catch (err) {
            this._tabSMPopMessage(err.message);
            this.setState({
                tabsm_message_signed: null
            });
        }
    }

    _tabSMHandleChange(event) {
        // event for textarea
        this.setState({tabsm_message_text: event.target.value});
    }

    _tabSMHandleChangeKey(value) {
        // event for textfield of public key
        this.setState({tabsm_memo_key: value});
    }

    _tabSMCopyToClipBoard(event) {
        // event when user clicks into the signed message textarea
        if (event.target.value !== "") {
            event.target.focus();
            event.target.select();

            try {
                var successful = document.execCommand("copy");
                this._tabSMPopMessage(
                    successful
                        ? counterpart.translate(
                              "account.signedmessages.copysuccessful"
                          )
                        : counterpart.translate(
                              "account.signedmessages.copyunsuccessful"
                          )
                );
            } catch (err) {
                this._tabSMPopMessage(
                    counterpart.translate(
                        "account.signedmessages.copyunsuccessful"
                    )
                );
            }
        }
    }

    /**
     * Displays an information to the user that disappears over time
     *
     * @param message
     * @param timeout
     */
    _tabSMPopMessage(message, timeout = 3000) {
        this.setState({
            tabsm_popup: message
        });

        if (message !== "" && timeout > 0) {
            setTimeout(() => {
                this.setState({
                    tabsm_popup: ""
                });
            }, timeout);
        }
    }

    /**
     * Event when the user tries to verify a message, either manual through the button or onChange of the textarea.
     * The message is parsed and verified, the user gets the message restated in the bottom part of the site
     *
     * @param event
     */
    _tabVMAction(event) {
        event.preventDefault();

        // reset to unverified state
        this.setState({
            tabvm_message_signed_and_verified: null,
            tabvm_verified: false
        });

        // attempt verifying
        if (this.state.tabvm_message_signed) {
            this._tabVMPopMessage(
                counterpart.translate("account.signedmessages.verifying"),
                0
            );

            setTimeout(() => {
                // do not block gui
                try {
                    let message_signed_and_verified = SignedMessageAction.verifyMemo(
                        this.state.tabvm_message_signed
                    );
                    this.setState({
                        tabvm_message_signed_and_verified: message_signed_and_verified,
                        tabvm_verified: true,
                        tabvm_popup: "" // clear verifying message
                    });
                } catch (err) {
                    this._tabVMPopMessage(err.message);
                    this.setState({
                        tabvm_message_signed_and_verified: null,
                        tabvm_verified: false
                    });
                }
            }, 0);
        }
    }

    _tabVMHandleChange(event) {
        // onchange event of the input textarea
        this.setState({
            tabvm_message_signed: event.target.value,
            tabvm_verified: false,
            tabvm_message_signed_and_verified: null
        });
        if (this.state.tabvm_flag_verifyonchange) {
            this._tabVMAction(event);
        }
    }

    /**
     * Displays an information to the user that disappears over time
     *
     * @param message
     * @param timeout
     */
    _tabVMPopMessage(message, timeout = 3000) {
        this.setState({
            tabvm_popup: message
        });

        if (message !== "" && timeout > 0) {
            setTimeout(() => {
                this.setState({
                    tabvm_popup: ""
                });
            }, timeout);
        }
    }

    _tabVMToggleVerifyOnChange() {
        // event when the user enables / disables verifying while typing
        this.setState({
            tabvm_flag_verifyonchange: !this.state.tabvm_flag_verifyonchange
        });
    }

    render() {
        const tabs = [
            {
                title: "account.signedmessages.signmessage"
            },
            {
                title: "account.signedmessages.verifymessage"
            }
        ];
        const makeTab = ({title}) => {
            return (
                <div
                    key={title}
                    className={cnames("dashboard__tabs__item", {
                        active: this.state.activeTab
                    })}
                >
                    <h4>{counterpart.translate(title)}</h4>
                </div>
            );
        };
        const makeTabsMobile = tabs => {
            let clonedTabs = tabs;
            let filtered = clonedTabs.filter(
                ({title}) => title === this.state.activeTab
            );
            let activeTab =
                filtered.length > 0 ? filtered.shift() : clonedTabs.shift();
            return (
                <div className="select dashboard__mobileselect">
                    <span className="placeholder">
                        {counterpart.translate(activeTab.title)}
                    </span>
                    <ul>
                        {clonedTabs
                            .filter(({title}) => title !== this.state.activeTab)
                            .map(({title}) => (
                                <li key={title} data-value={title}>
                                    {counterpart.translate(title)}
                                </li>
                            ))}
                    </ul>
                </div>
            );
        };

        return tabs.length > 0 ? (
            <div>
                <div className="dashboard" ref="appTables">
                    <div className="dashboard__tabs permissions">
                        {makeTabsMobile(tabs)}
                        {tabs.map(makeTab)}
                    </div>
                </div>
                <div className="negative-margins">
                    <div className="container-fluid">
                        <p>
                            Active permissions define the accounts that have
                            permission to spend funds for this account.
                        </p>
                        <p>
                            They can be used to easily setup a multi-signature
                            scheme, see <a href="#">permissions </a>for more
                            details.
                        </p>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

AccountSignedMessages = BindToChainState(AccountSignedMessages);

export default AccountSignedMessages;
