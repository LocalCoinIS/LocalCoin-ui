import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import FloatingDropdown from "../../Utility/FloatingDropdown";
import CopyButton from "../../Utility/CopyButton";
import LLCGatewayData from "./LLCGatewayData";

class LLCBridgeModal extends React.Component {
    static DEFAULT_CURRENCY = "BTC";
    static MODE_BRIDGE = "1";
    static PRESICTION = 4;

    currencies = [];
    courses = [];

    constructor(props) {
        super(props);
        let self = this;

        this.state = {
            isActiveThisModal: "is-active",
            account: null,
            assets: [],
            asset: LLCBridgeModal.DEFAULT_CURRENCY,
            address: "",
            minimal: 0,
            confirmations: 0,
            assetValues: []
        };

        this.onChooseAsset = this.onChooseAsset.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleReceiveInput = this.handleReceiveInput.bind(this);
        this.handleSendInput = this.handleSendInput.bind(this);


        new LLCGatewayData().getAllowCurrency(function(response) {
            self.currencies = response.deposit;

            let thisAsset = LLCBridgeModal.DEFAULT_CURRENCY;
            if (!self.currencies) return;
            let assets = [],
                assetValues = [];

            for (var i in self.currencies) {
                if (!self.currencies[i].asset) continue;

                assets.push(self.currencies[i].asset);
                assetValues[self.currencies[i].asset] =
                    self.currencies[i].asset;

                if (self.currencies[i].asset === props.asset)
                    thisAsset = props.asset;
            }

            self.onChooseAsset(thisAsset);
            self.setState({
                asset: thisAsset,
                assets: assets,
                assetValues: assetValues
            });
        });
    }

    closeModal(e) {
        if(e.target.classList.contains("close-modal")) {
            this.setState({isActiveThisModal: ""});
        }
    }

    showModal() {
        this.setState({isActiveThisModal: "is-active"});
    }

    loadAssetCourse(asset, cb) {
        let self = this;
        new LLCGatewayData().getPairsCourse(function(courses) {
            self.courses = courses.list;
            cb(asset);
        });
    }

    onChooseAsset(asset) {
        var self = this;

        //update asset view
        var currentCurrency = this.findCurrentCurrency(asset);
        this.setState({
            asset: asset,
            confirmations: this.getCountConfirmations(asset),
            minimal: currentCurrency ? currentCurrency.minimal : 0
        });
        this.loadAssetCourse(asset, this.updateSend.bind(this));

        //update address
        new LLCGatewayData().сreatePaymentAddress(
            this.props.account.get("name"),
            asset,
            LLCBridgeModal.MODE_BRIDGE,
            function(address) {
                self.setState({address: address});
            }
        );
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

    updateReceive(asset) {
        if(document.querySelector(".receive-input")) {
            let course = this.getCourseByAsset(asset);
            let val = parseFloat(document.querySelector(".send-input").value.replace(",", ".")) * parseFloat(course.coef);
            if (isNaN(val)) val = 0;
            document.querySelector(".receive-input").value = val.toFixed(LLCBridgeModal.PRESICTION);
        }
    }

    updateSend(asset) {
        if(document.querySelector(".send-input")) {
            let course = this.getCourseByAsset(asset);
            let val = parseFloat(document.querySelector(".receive-input").value.replace(",", ".")) / parseFloat(course.coef);
            if (isNaN(val)) val = 0;
            document.querySelector(".send-input").value = val.toFixed(LLCBridgeModal.PRESICTION);
        }
    }

    getCourseByAsset(asset) {
        for (var i in this.courses) {
            let course = this.courses[i];
            if (course.to == asset) return course;
        }

        return null;
    }

    handleSendInput(e) {
        e.preventDefault();
        this.updateReceive(this.state.asset);
    }

    handleReceiveInput(e) {
        e.preventDefault();
        this.updateSend(this.state.asset);
    }

    render() {
        var buttons = (
            <div className="button-group" style={{marginTop: 10}}>
                <div onClick={this.closeModal} className="button btn large outline close-modal">
                    <span
                        className="close-modal"
                    >
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
                        className="send-input"
                        type="number"
                        onChange={this.handleSendInput}
                    />
                    <div className="form-label select floating-dropdown">
                        <FloatingDropdown
                            entries={this.state.assets}
                            values={this.state.assetValues}
                            singleEntry={this.state.asset}
                            value={this.state.asset}
                            onChange={this.onChooseAsset}
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
                    <input
                        className="receive-input"
                        type="number"
                        onChange={this.handleReceiveInput}
                        defaultValue={1000}
                    />
                    <div className="input-right-symbol">LLC</div>
                </div>
            </div>
        );

        var info = (
            <div>
                <br />
                <Translate
                    content="gateway.rudex.min_amount"
                    minAmount={this.state.minimal}
                    symbol={this.state.asset}
                />
                <br />
                <Translate
                    className="deposit-withdraw-info"
                    component="b"
                    content="gateway.min_count_confirmations"
                    cnt={this.state.confirmations}
                />
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
            <div className="d-flex">
                <CopyButton text={this.state.address} className={"btn icon"} />
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
                    <div className="modal__highlight bridge_modal_address">
                        {this.state.address}
                    </div>
                </div>
            </div>
        );

        return (
            <div
                onClick={this.closeModal}
                className={"modal-overlay close-modal " + this.state.isActiveThisModal}>
                <div
                    id="withdraw_asset_rudex-scorum_RUDEX.SCR"
                    data-closable="true"
                    className="modal fadeIn ng-enter is-active ng-enter-active buy-table-modal"
                >
                    <a
                        onClick={this.closeModal}
                        href="javascript:void(0)"
                        className="close-button close-modal"
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
                                <br/>
                                <br/>
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
