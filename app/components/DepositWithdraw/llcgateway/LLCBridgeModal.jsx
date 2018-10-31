import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import FloatingDropdown from "../../Utility/FloatingDropdown";
import CopyButton from "../../Utility/CopyButton";
import LLCGatewayData from "./LLCGatewayData";

class LLCBridgeModal extends React.Component {
    currencies = [];

    constructor(props) {
        super(props);
        let self = this;

        this.state = {
            isActiveThisModal: "is-active",
            account: null,
            receiveAmount: 0,
            assets: [],
            asset: props.asset,
            address: "",
            minimal: 0,
            confirmations: 0,
            assetValues: []
        };

        this.chooseAsset = this.chooseAsset.bind(this);
        this.closeModal = this.closeModal.bind(this);

        new LLCGatewayData().getAllowCurrency(function(response) {
            self.currencies = response.deposit;

            if (!self.currencies) return;
            let assets = [],
                assetValues = [];
            for (var i in self.currencies) {
                assets.push(self.currencies[i].asset);
                assetValues[self.currencies[i].asset] =
                    self.currencies[i].asset;
            }

            self.chooseAsset(props.asset);
            self.setState({
                assets: assets,
                assetValues: assetValues
            });
        });
    }

    closeModal() {
        this.setState({isActiveThisModal: ""});
    }

    loadAssetCourse(asset) {
        // (new LLCGatewayData())
        //     .
        //after update course
        //this.updateReceive();
    }

    chooseAsset(asset) {
        var currentCurrency = this.findCurrentCurrency(asset);
        this.setState({
            asset: asset,
            confirmations: this.getCountConfirmations(asset),
            minimal: currentCurrency ? currentCurrency.minimal : 0
        });
        this.loadAssetCourse(asset);
    }

    getCountConfirmations(asset) {
        switch (asset) {
            case "BTC":
                return 2;
            case "LTC":
                return 6;
            case "DASH":
                return 6;
            case "USDT":
                return 2;
            case "ETH":
                return 6;
            case "XMR":
                return 10;
        }

        return 6;
    }

    findCurrentCurrency(asset) {
        if (typeof asset === "undefined") asset = this.state.asset;

        for (var i in this.currencies) {
            var currency = this.currencies[i];
            if (currency.asset == asset) return currency;
        }

        return null;
    }

    updateReceive() {}

    _onAmountChange(value, e) {
        const regexp_numeral = new RegExp(/[[:digit:]]/);
        const target = e.target;

        // Ensure input is valid
        if (!regexp_numeral.test(target.value)) {
            target.value = target.value.replace(/[^0-9.]/g, "");
        }

        // Catch initial decimal input
        if (target.value.charAt(0) == ".") {
            target.value = "0.";
        }

        // Catch double decimal and remove if invalid
        if (
            target.value.charAt(target.value.length) != target.value.search(".")
        ) {
            target.value.substr(1);
        }

        target.value = utils.limitByPrecision(target.value, 8);

        console.log(target.value);
    }

    render() {
        var buttons = (
            <div className="button-group" style={{marginTop: 10}}>
                <div onClick={this.closeModal} className="button">
                    <span>
                        {counterpart.translate("modal.withdraw.cancel")}
                    </span>
                </div>
            </div>
        );

        var send = (
            <div
                className="small-6"
                style={{
                    paddingTop: 10,
                    paddingRight: 10,
                    float: "left",
                    width: "49%"
                }}
            >
                <div className="grid-block">
                    <label className="left-label">
                        <Translate content="transfer.send" />
                    </label>
                </div>
                <div className="inline-label input-wrapper">
                    <input
                        type="text"
                        value="0"
                        onInput={this._onAmountChange.bind(this, "input")}
                    />
                    <div className="form-label select floating-dropdown">
                        <FloatingDropdown
                            entries={this.state.assets}
                            values={this.state.assetValues}
                            singleEntry={this.state.asset}
                            value={this.state.asset}
                            onChange={this.chooseAsset}
                        />
                    </div>
                </div>
            </div>
        );

        var receive = (
            <div
                className="small-6"
                style={{
                    paddingTop: 10,
                    paddingRight: 10,
                    float: "left",
                    width: "49%"
                }}
            >
                <label className="left-label">
                    <Translate content="exchange.receive" />
                </label>
                <div className="inline-label input-wrapper">
                    <input type="text" value={this.state.receiveAmount} />
                    <div className="input-right-symbol">LLC</div>
                </div>
            </div>
        );

        var info = (
            <div>
                <br />
                <br />
                <br />
                <br />
                <Translate
                    content="gateway.rudex.min_amount"
                    minAmount={this.state.minimal}
                    symbol={this.state.asset}
                />
                <br />
                <br />
                <Translate
                    className="deposit-withdraw-info"
                    component="b"
                    content="gateway.min_count_confirmations"
                    cnt={this.state.confirmations}
                />
                <br />
                <br />
                <Translate
                    component="span"
                    style={{fontSize: "0.8rem"}}
                    content="gateway.min_deposit_warning_asset"
                    minDeposit={this.state.minimal || 0}
                    coin={this.state.asset}
                />
            </div>
        );

        var copy = (
            <div className="grid-block">
                <CopyButton text={this.state.address} className={"copyIcon"} />
                <div>
                    <Translate
                        component="div"
                        style={{
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                            paddingBottom: "0.3rem"
                        }}
                        content="gateway.purchase_notice"
                        inputAsset={this.state.asset}
                        outputAsset="LLC"
                    />
                    <div className="modal__highlight">{this.state.address}</div>
                </div>
            </div>
        );

        return (
            <div className={"modal-overlay " + this.state.isActiveThisModal}>
                <div
                    id="withdraw_asset_rudex-scorum_RUDEX.SCR"
                    data-closable="true"
                    className="modal fadeIn ng-enter is-active ng-enter-active"
                >
                    <a
                        onClick={this.closeModal}
                        href="javascript:void(0)"
                        className="close-button"
                    >
                        ×
                    </a>
                    <br />
                    <div className="grid-block vertical">
                        <form className="grid-block vertical full-width-content">
                            <div className="grid-container">
                                <div className="content-block">
                                    <h3>
                                        <span>
                                            {counterpart.translate(
                                                "exchange.buy"
                                            )}{" "}
                                            LLC
                                        </span>
                                    </h3>
                                </div>
                                {send}
                                {receive}
                                {info}
                                <br />
                                {copy}
                                <br />
                                {buttons}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LLCBridgeModal;
