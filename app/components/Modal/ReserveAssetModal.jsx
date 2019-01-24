import React from "react";
import Translate from "react-translate-component";
import utils from "common/utils";
import BalanceComponent from "../Utility/BalanceComponent";
import counterpart from "counterpart";
import AmountSelector from "../Utility/AmountSelector";
import AssetActions from "actions/AssetActions";
import {ChainStore} from "bitsharesjs/es";

export default class ReserveAssetModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            showError: false
        };
    }

    onAmountChanged({amount, asset}) {
        this.setState({amount, asset});
    }

    getBalance() {
        let account = this.props.account;
        let account_balances = account.get("balances");
        let balance = 0;

        // really this iteration should be called once, and
        // each asset_id matched once with its balance

        // for every debt the account has, we iterate
        // through every balance the user has
        if (account_balances) {
            account_balances.forEach((a, asset_type) => {
                if (asset_type == this.props.assetId) {
                    let balanceObject = ChainStore.getObject(a);

                    // get the balance
                    balance = balanceObject.get("balance");
                }
            });
        }

        // it's possible that the account doesn't hold
        // any of the asset here
        return balance;
    }

    onSubmit() {
        let precision = utils.get_asset_precision(
            this.state.asset.get("precision")
        );
        let amount = this.state.amount.replace(/,/g, "");
        amount *= precision;

        let balanceAssetByAccount = this.getBalance();

        if (amount <= 0 || amount > balanceAssetByAccount) {
            this.setState({
                showError: true
            });

            return;
        }

        this.setState({
            showError: false
        });

        AssetActions.reserveAsset(
            amount,
            this.props.assetId,
            this.props.account.get("id")
        );
        this.props.onClose();
    }

    render() {
        let assetId = this.props.assetId;

        return (
            <form className="grid-block vertical full-width-content">
                <Translate component="h3" content="modal.reserve.title" />
                <div className="grid-container " style={{paddingTop: "2rem"}}>
                    <div
                        className="content-block"
                        onClick={() => {
                            this.setState({showError: false});
                        }}
                    >
                        <AmountSelector
                            label="modal.reserve.amount"
                            amount={this.state.amount}
                            onChange={this.onAmountChanged.bind(this)}
                            asset={assetId}
                            assets={[assetId]}
                            display_balance={
                                <BalanceComponent
                                    balance={this.props.account.getIn([
                                        "balances",
                                        assetId
                                    ])}
                                />
                            }
                            tabIndex={1}
                        />
                    </div>

                    {this.state.showError ? (
                        <p className="errorModal">
                            {counterpart.translate("exchange.invalid_amount")}
                        </p>
                    ) : null}

                    <div className="content-block button-group">
                        <input
                            type="submit"
                            className="button success btn large inverted"
                            onClick={this.onSubmit.bind(this)}
                            value={counterpart.translate(
                                "modal.reserve.submit"
                            )}
                            tabIndex={2}
                        />

                        <div
                            className="button btn large outline"
                            onClick={this.props.onClose}
                            tabIndex={3}
                        >
                            {counterpart.translate("cancel")}
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
