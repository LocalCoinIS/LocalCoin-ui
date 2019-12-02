import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import FloatingDropdown from "../../Utility/FloatingDropdown";
import CopyButton from "../../Utility/CopyButton";
import LLCGatewayData from "./LLCGatewayData";
import Instructions from "./Instructions";
import SettingsStore from "stores/SettingsStore";
import AccountActions from "actions/AccountActions";
import LLCGateway from "./LLCGateway";
import ChainTypes from "components/Utility/ChainTypes";
import TransactionConfirmActions from "actions/TransactionConfirmActions";
import TransactionConfirmStore from "stores/TransactionConfirmStore";
import {
    SerializerValidation,
    TransactionBuilder,
    TransactionHelper,
    ChainStore
} from "bitsharesjs/es";
import {Asset} from "common/MarketClasses";
import {checkFeeStatusAsync, checkBalance} from "common/trxHelper";
import notify from "actions/NotificationActions";
import QRCode from "qrcode.react";

class LLCBridgeModal extends React.Component {
    static DEFAULT_CURRENCY = "ETH";
    static MODE_BRIDGE = "1";
    static PRESICTION = 4;

    currencies = [];
    courses = [];

    asset = null;
    localcoinAccount = null;

    constructor(props) {
        super(props);
        let self = this;

        this.state = {
            isActiveThisModal: "is-active",
            account: null,
            assets: [],
            bridgeAssets: [],
            asset: LLCBridgeModal.DEFAULT_CURRENCY,
            address: "",
            minimal: 0,
            confirmations: 0,
            assetValues: [],
            active: props.active,
            balance: props.isDashboard ? this.getBalance() : null,
            insufficient: props.isDashboard ? this.checkInsufficient() : null,
            wdBtn: "button btn large inverted disabled",
            feeAmount: new Asset({amount: 0}),
            validAddress: true,
            activeTab: props.activeTab ? props.activeTab : "buy_tab"
        };

        this.onChooseAsset = this.onChooseAsset.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleReceiveInput = this.handleReceiveInput.bind(this);
        this.handleSendInput = this.handleSendInput.bind(this);
        this.onWdClick = this.onWdClick.bind(this);

        props.isDashboard ? (setInterval(() => {
            if (!this.localcoinAccount || !this.asset) {
                this.asset = ChainStore.getAsset(this.props.currency.asset);
                this.localcoinAccount = ChainStore.getAccount(
                    "localcoin-wallet"
                );
                this._updateFee();
                this.setState({
                    balance: this.getBalance(),
                    insufficient: this.checkInsufficient()
                });
            }
        }, 1000)) : null;

        new LLCGatewayData().getAllowCurrency(function(response) {
            window.tokenList      = [];
            for(let i of response.deposit) {
                if(i.typeAsset === "token")
                    window.tokenList.push(i.asset);
            }

            self.currencies = response.deposit;

            let thisAsset = self.state.asset;
            /*TODO: Fix because it doesnt work
            if(typeof self.props.currency !== "undefined" && typeof self.props.currency.asset !== "undefined") {
                thisAsset = self.props.currency.asset;
            }*/
            
            if (!self.currencies) return;
            let assets          = [],
                bridgeAssets    = [],
                assetValues     = [];

            for (var i in self.currencies) {
                if (!self.currencies[i].asset) continue;

                assets.push(self.currencies[i].asset);
                assetValues[self.currencies[i].asset] =
                    self.currencies[i].asset;

                if (self.currencies[i].asset === props.asset)
                    thisAsset = props.asset;

                if(self.currencies[i].allowBridge)
                    bridgeAssets.push(self.currencies[i].asset);
            }
            self.setState({
                asset        : thisAsset,
                assets       : assets,
                bridgeAssets : bridgeAssets,
                assetValues  : assetValues
            });
            
            self.onChooseAsset(thisAsset);
        });

        this.inputAmountRef = React.createRef();
    }

    closeModal(e) {
        if(e.target.classList.contains("close-modal")) {
            this.setState({isActiveThisModal: ""});
            this.props.isDashboard ? this.props.onCloseModal() : null;
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

        let account = this.props.account;
        let accountName = typeof account === "object" ? account.get("name") :
            typeof account === "string" ? account : "";
        //update address
        new LLCGatewayData().сreatePaymentAddress(
            accountName,
            asset,
            LLCBridgeModal.MODE_BRIDGE,
            function(address) {
                self.setState({address: address});
            }
        );
    }

    getCountConfirmations(asset) {
        let bullet = (""+asset)
            .trim()
            .toUpperCase();

        switch (bullet) {
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
        if(this.refs.receive_input) {
            let course = this.getCourseByAsset(asset);
            let val = parseFloat(this.refs.send_input.value.replace(",", ".")) * parseFloat(course.coef);
            if (isNaN(val)) val = 0;
            this.refs.receive_input.value = val.toFixed(LLCBridgeModal.PRESICTION);
        }
    }

    updateSend(asset) {
        if(this.refs.send_input) {
            let course = this.getCourseByAsset(asset);
            let val = parseFloat( this.refs.receive_input.value.replace(",", ".")) / parseFloat(course.coef);
            if (isNaN(val)) val = 0;
            this.refs.send_input.value = val.toFixed(LLCBridgeModal.PRESICTION);
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

    getAssetId() {
        this.asset = ChainStore.getAsset(this.props.currency.asset);
        if (this.asset) return this.asset.get("id");
        return null;
    }

    checkInsufficient() {
        if (!this.props.account)
            return counterpart.translate("transfer.errors.noFeeBalance");
        if (!this.props.currency.asset)
            return counterpart.translate("transfer.errors.noFeeBalance");

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset,
            this.props.currency.currencyCoef
        );
        if (balance > this.props.currency.minimal) return "";

        return counterpart.translate("transfer.errors.noFeeBalance");
    }

    componentWillReceiveProps(props) {
        this.setState({
            active: props.active,
            balance:  props.isDashboard ? this.getBalance() : null,
            insufficient: props.isDashboard ? this.checkInsufficient() : null
        });
        props.isDashboard ? this.validateUnlockWithdrawBtn() : null;
    }

    getBalance() {
        if (!this.props.account) return 0;
        if (!this.props.currency.asset) return 0;

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset,
            this.props.currency.currencyCoef
        );

        if (!balance) return counterpart.translate("transfer.errors.noFunds");

        return balance;
    }

    wdAddr = null;
    onChangeWithdrAddr(e) {
        if (e.target.value.indexOf("") !== -1) {
            e.target.value = e.target.value.replace(new RegExp(" ", "g"), "");
        }

        this.wdAddr = e.target.value;
        this.validateUnlockWithdrawBtn();
    }

    wdAmount = null;
    onChangeAmount(e) {
        this.wdAmount = parseFloat(e.target.value);
        this.validateUnlockWithdrawBtn();
    }
    fillInputAmount() {
        if (typeof this.state.balance !== 'number') return;

        this.inputAmountRef.current.value = this.state.balance;
        this.wdAmount = this.state.balance;
        this.validateUnlockWithdrawBtn();
    }

    onChMemo(e) {
        this.setState({memo: e.target.value}, this._updateFee);
    }

    validateUnlockWithdrawBtn() {
        if (!this.wdAddr) {
            this.lockWithdrawBtn();
            return;
        }

        if (!this.props.account) {
            this.lockWithdrawBtn();
            return;
        }
        if (!this.props.currency.asset) {
            this.lockWithdrawBtn();
            return;
        }

        let balance = new LLCGatewayData().getUserBalance(
            this.props.account,
            true,
            this.props.currency.asset,
            this.props.currency.currencyCoef
        );

        let gatewayFee = this.props.currency.gatewayFee;

        let fee = this.state.feeAmount
            ? this.state.feeAmount.getAmount({real: true})
            : 0;

        if (!this.wdAmount) {
            this.lockWithdrawBtn();
            return;
        }

        if (this.wdAmount < this.props.currency.minimalAmountWithdraw) {
            this.lockWithdrawBtn();
            return;
        }

        if (this.wdAmount > balance - gatewayFee) {
            this.lockWithdrawBtn();
            return;
        }

        this.unlockWithdrawBtn();
    }

    unlockWithdrawBtn() {
        this.setState({
            wdBtn: "button btn large inverted"
        });
    }

    lockWithdrawBtn() {
        this.setState({
            wdBtn: "button disabled btn large inverted"
        });
    }

    generateMemo() {
        return JSON.stringify(["withdraw to", this.wdAddr, this.state.memo]);
    }

    //чекнем у btcservice правильность адреса
    //через llcgateway
    validateAddr(addr, asset, cb) {
        let provider = new LLCGatewayData();
        let self = this;
        provider.validateAddress(addr, asset, reponse => {
            var isValide =
                reponse == "true" || reponse == "True" || reponse == "1";

            self.setState(
                {
                    validAddress: isValide
                },
                function() {
                    if (isValide) cb();
                }
            );
        });
    }

    onWdClick() {
        let self = this;
        let next = function() {
            self.setState({modalActive: false});
            self.asset = ChainStore.getAsset(self.props.currency.asset);

            let feeAmount = 0;
            try {
                feeAmount = parseFloat(self.props.currency.gatewayFee);
                if(feeAmount < 0) feeAmount = 0;
            } catch(ex) {}

            const sendAmount = new Asset({
                real: self.wdAmount + feeAmount,
                asset_id: self.asset.get("id"),
                precision: self.asset.get("precision")
            });

            AccountActions.transfer(
                self.props.account.get("id"),
                self.localcoinAccount.get("id"),
                sendAmount.getAmount(),
                self.asset.get("id"),
                self.generateMemo(),
                self.state.propose ? self.state.propose_account : null,
                self.asset.get("id")
            )
                .then(() => {
                    self.resetForm.call(self);
                    TransactionConfirmStore.unlisten(self.onTrxIncluded);
                    TransactionConfirmStore.listen(self.onTrxIncluded);
                })
                .catch(e => {
                    let msg = e.message
                        ? e.message.split("\n")[1] || e.message
                        : null;
                    console.log("error: ", e, msg);
                    // self.setState({error: msg});
                });
        };

        this.validateAddr(this.wdAddr, this.props.currency.asset, next);
    }

    onTrxIncluded(confirm_store_state) {
        if (
            confirm_store_state.included &&
            confirm_store_state.broadcasted_transaction
        ) {
            // this.setState(Transfer.getInitialState());
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        } else if (confirm_store_state.closed) {
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        }
    }

    componentWillMount() {
        this.props.isDashboard ? this._updateFee() : null;
    }

    _updateFee() {
        let fee_asset_id = this.getAssetId();
        let from_account = this.props.account;
        if (!from_account || !fee_asset_id) return null;

        checkFeeStatusAsync({
            accountID: from_account.get("id"),
            feeID: fee_asset_id,
            options: ["price_per_kbyte"],
            data: {
                type: "memo",
                content: this.generateMemo()
            }
        }).then(({fee, hasBalance, hasPoolBalance}) => {
            if (this.unMounted) return;
            this.setState({feeAmount: fee}, this.validateUnlockWithdrawBtn);
        });
    }

    _changeTab(tab) {
        this.setState({
            activeTab: tab
        });
    }

    toClipboard() {
        try {
            notify.addNotification({
                message:
                    counterpart.translate("modal.deposit.copy_message"),
                level: "success",
                autoDismiss: 2
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        let fee = this.state.feeAmount
            ? this.state.feeAmount.getAmount({real: true})
            : 0;
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
                        ref="send_input"
                        className="send-input"
                        type="number"
                        onChange={this.handleSendInput}
                    />
                    <div className="form-label select floating-dropdown">

                        <FloatingDropdown
                            entries={this.state.bridgeAssets}
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
                        ref="receive_input"
                        className="receive-input"
                        type="number"
                        onChange={this.handleReceiveInput}
                        defaultValue={1000}
                    />
                    <div className="input-right-symbol">LLC</div>
                </div>
            </div>
        );

        let itsETH = false;
        if (this.state.asset === "ETH") {
            itsETH = true;
        }        

        let itsToken = typeof window.tokenList !== "undefined" && window.tokenList.indexOf(this.props.currency.asset) !== -1;

        var info = (
            <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
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
                {itsToken ? (
                                <Translate
                                    className="deposit-withdraw-info"
                                    component="b"
                                    content="gateway.token_info"
                                    type_action={
                                        counterpart.translate( "gateway.deposit" )
                                    }
                                    fee="0.2"
                                />
                            ) : null}
                <br />
                {itsETH ? (
                    <div>
                        <Translate
                            component="span"
                            style={{fontSize: "0.8rem", whiteSpace: "normal"}}
                            content="gateway.min_deposit_warning_asset"
                            minDeposit={this.state.minimal || 0}
                            coin={this.state.asset}
                        />
                        <Translate
                            className="has-error fz_14 ETH-warning"
                            component="p"
                            content="gateway.ETH_warning_asset"
                        />   
                    </div>
                ) : (
                    <Translate
                        component="span"
                        style={{fontSize: "0.8rem", whiteSpace: "normal"}}
                        content="gateway.min_deposit_warning_asset"
                        minDeposit={this.state.minimal || 0}
                        coin={this.state.asset}
                    />
                )}                             
            </div>
        );

        var copy = (
            <div className="d-flex" style={{paddingRight: "95px"}}>
                <div onClick={this.toClipboard.bind(this)}>
                    <CopyButton
                        text={this.state.address}
                        className={"btn icon"}
                    />
                </div>
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
                <div>
                    <QRCode
                        value={this.state.address ? this.state.address : ""}
                    />
                </div>
            </div>
        );

        var buyTab = (
            this.state.activeTab === "buy_tab" ? (
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
            ) : null
        );

        var depositTab = (
            this.state.activeTab === "deposit_tab" ? (
                <div className="grid-block vertical">
                    <Instructions
                        depositAddress={ this.state.activeTab === "deposit_tab" ? this.props.depositAddress : this.props.buyLLCAddress}
                        account={this.props.account}
                        type={this.props.type}
                        currency={this.props.currency}
                    />
                </div>
            ) : null
        );

        var withdrawTab = (
            this.state.activeTab === "withdraw_tab" ? (
                <div className="grid-block vertical">
                    <form className="grid-block vertical full-width-content">
                        <div className="grid-container">
                            <div className="content-block">
                                <h3>
                                    <span>
                                        {counterpart.translate(
                                            "modal.withdraw.withdraw"
                                        )}{" "}
                                        {this.props.currency.asset}
                                    </span>
                                </h3>
                            </div>
                            <div className="content-block">
                                <div className="amount-selector">
                                    <label
                                        className="right-label"
                                        onClick={this.fillInputAmount.bind(this)}
                                    >
                                        {counterpart.translate(
                                            "transfer.available"
                                        ) +
                                        ": "}
                                        <span
                                            className="withdraw-available__span"
                                            style = {{cursor: "pointer"}}
                                        >
                                            {this.state.balance + " " + this.props.currency.asset}
                                        </span>
                                    </label>
                                    <label className="left-label">
                                        {counterpart.translate(
                                            "modal.withdraw.amount"
                                        )}
                                    </label>
                                    <div className="inline-label input-wrapper">
                                        <input
                                            ref = {this.inputAmountRef}
                                            type="text"
                                            placeholder={0.0}
                                            tabIndex={0}
                                            defaultValue={0}
                                            onChange={this.onChangeAmount.bind(
                                                this
                                            )}
                                        />
                                        <div className="form-label select floating-dropdown">
                                            <div className="dropdown-wrapper inactive">
                                                <div>
                                                    <span className="no-amount">
                                                        <span className="currency">
                                                            <div className="inline-block tooltip">
                                                                <span>
                                                                    {
                                                                        this
                                                                            .props
                                                                            .currency
                                                                            .asset
                                                                    }
                                                                </span>
                                                            </div>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p
                                    className="no-margin"
                                    style={{paddingTop: 10}}
                                >
                                    <b>
                                        <span>
                                            <Translate
                                                content="gateway.rudex.min_amount"
                                                minAmount={
                                                    this.props.currency
                                                        .minimalAmountWithdraw
                                                }
                                                symbol={
                                                    this.props.currency
                                                        .asset
                                                }
                                            />
                                        </span>
                                    </b>
                                </p>
                                
                                { typeof window.tokenList !== "undefined" && window.tokenList.indexOf(this.props.currency.asset) !== -1 ? (
                                    <p className="no-margin" style={{paddingTop: 10}} >
                                        <b>
                                            <span>
                                                <Translate
                                                    className="deposit-withdraw-info"
                                                    component="b"
                                                    content="gateway.token_info"
                                                    type_action={
                                                        counterpart.translate( "modal.withdraw.withdraw" )
                                                    }
                                                    fee="0.2"
                                                />
                                            </span>
                                        </b>
                                    </p>
                                ) : null }
                            </div>
                            <div className="content-block gate_fee">
                                <div className="amount-selector">
                                    <label className="right-label" />
                                    <label className="left-label">
                                        {counterpart.translate(
                                            "modal.withdraw.fee"
                                        )}
                                    </label>
                                    <div className="inline-label input-wrapper">
                                        <input
                                            disabled
                                            type="text"
                                            tabIndex={2}
                                            defaultValue={fee + " LLC"}
                                            value={fee + " LLC"}
                                        />
                                        <div className="form-label select floating-dropdown" />
                                    </div>
                                </div>
                                <p
                                    className="has-error no-margin"
                                    style={{paddingTop: 10}}
                                >
                                    <span>{this.state.insufficient}</span>
                                </p>
                            </div>
                            <div className="content-block gate_fee">
                                <div className="amount-selector">
                                    <label className="right-label" />
                                    <label className="left-label">
                                        GATEWAY{" "}
                                        {counterpart.translate(
                                            "modal.withdraw.fee"
                                        )}
                                    </label>
                                    <div className="inline-label input-wrapper">
                                        <input
                                            disabled
                                            type="text"
                                            tabIndex={2}
                                            defaultValue={
                                                this.props.currency
                                                    .gatewayFee +
                                                " " +
                                                this.props.currency.asset
                                            }
                                            value={
                                                this.props.currency
                                                    .gatewayFee +
                                                " " +
                                                this.props.currency.asset
                                            }
                                        />
                                        <div className="form-label select floating-dropdown" />
                                    </div>
                                </div>
                            </div>
                            <div className="content-block">
                                <label className="left-label">
                                    <span>
                                        {counterpart.translate(
                                            "modal.withdraw.address"
                                        )}
                                    </span>
                                </label>
                                <div className="rudex-select-dropdown">
                                    <div className="inline-label">
                                        <input
                                            type="text"
                                            tabIndex={4}
                                            autoComplete="off"
                                            defaultValue={""}
                                            onChange={this.onChangeWithdrAddr.bind(
                                                this
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="rudex-position-options" />
                                {!this.state.validAddress ? (
                                    <div
                                        className="has-error"
                                        style={{paddingTop: 10}}
                                    >
                                        <Translate
                                            content="gateway.valid_address"
                                            coin_type={
                                                this.props.currency.asset
                                            }
                                        />
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="content-block">
                                <label>
                                    <span>
                                        {counterpart.translate(
                                            "transfer.memo"
                                        )}
                                    </span>
                                </label>
                                <textarea
                                    rows={3}
                                    tabIndex={1}
                                    defaultValue={""}
                                    onChange={this.onChMemo.bind(this)}
                                />
                            </div>
                            <div className="button-group">
                                <div
                                    className={this.state.wdBtn}
                                    onClick={this.onWdClick}
                                >
                                    <span>
                                        {counterpart.translate(
                                            "modal.withdraw.withdraw"
                                        )}
                                    </span>
                                </div>
                                <div
                                    className="button btn large outline close-modal"
                                    onClick={this.closeModal}
                                >
                                    <span
                                        className="close-modal"
                                    >
                                        {counterpart.translate(
                                            "global.cancel"
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : null
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
                    {this.props.isDashboard ? (<div>
                        <div
                            className="buy-table-modal__tabs"
                            style={{
                                fontSize: "1.8rem",
                                fontFamily:
                                    "Roboto-Medium, arial, sans-serif"
                            }}
                        >
                            <span
                                className={this.state.activeTab === "buy_tab" ? "buy-tab active" : "buy-tab"}
                                onClick={this._changeTab.bind(
                                    this,
                                    "buy_tab"
                                )}
                            >
                                <Translate
                                    unsafe
                                    content="modal.buy.title"
                                />
                            </span>
                            <span
                                className={this.state.activeTab === "deposit_tab" ? "deposit-tab active" : "deposit-tab"}
                                onClick={this._changeTab.bind(
                                    this,
                                    "deposit_tab"
                                )}
                            >
                                <Translate
                                    unsafe
                                    content="modal.deposit.header_short"
                                />
                            </span>
                            <span
                                className={this.state.activeTab === "withdraw_tab" ? "withdraw-tab active" : "withdraw-tab"}
                                onClick={this._changeTab.bind(
                                    this,
                                    "withdraw_tab"
                                )}
                            >
                                <Translate
                                    unsafe
                                    content="modal.withdraw.withdraw"
                                />
                            </span>
                        </div>
                        {buyTab}
                        {depositTab}
                        {withdrawTab}
                    </div>) : null}
                    {!this.props.isDashboard && this.props.activeTab === "deposit_tab" ? depositTab : null}
                    {!this.props.isDashboard && this.state.activeTab === "buy_tab" ? buyTab : null}
                </div>
            </div>
        );
    }
}

export default LLCBridgeModal;