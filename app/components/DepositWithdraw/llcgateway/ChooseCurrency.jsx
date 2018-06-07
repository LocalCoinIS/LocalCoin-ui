import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";

class ChooseCurrency extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            data: null,
            currencies: null
        };

        this.onSelectCoin = this.onSelectCoin.bind(this);
        this.getAllowCurrencies();
    }

    _current = null;
    getCurrency() {
        let list = this.getCoinByType();
        if (!list)
            return {
                internalCurrency: null,
                externalCurrency: null
            };

        if (!this._current) return list[0];

        for (var i in list)
            if (list[i].internalCurrency == this._current) return list[i];

        return list[0];
    }

    getAllowCurrencies() {
        let provider = new LLCGatewayData();
        let self = this;
        provider.getAllowCurrency(data => {
            self.setState(
                {
                    currencies: data
                },
                function() {
                    self.props.bullet.setCurrency(self.getCurrency());
                }
            );
        });
    }

    onSelectCoin(event) {
        this._current = event.target.value;
        this.props.bullet.setCurrency(this.getCurrency());
    }

    componentWillReceiveProps(props) {
        let old = this.state.type;
        let self = this;

        this.setState(
            {
                type: props.type
            },
            () => {
                if (old != this.state.type) {
                    self.props.bullet.setCurrency(self.getCurrency());
                }
            }
        );
    }

    getCoinByType() {
        if (!this.state.currencies) return null;
        return this.state.currencies[this.state.type];
    }

    render() {
        let coins = null;

        let dataCoins = null;
        if ((dataCoins = this.getCoinByType()))
            coins = dataCoins.map(coin => {
                return (
                    <option
                        value={coin.internalCurrency}
                        key={coin.internalCurrency}
                    >
                        {this.state.type == LLCGateway.WITHDRAW
                            ? coin.internalCurrency
                            : coin.externalCurrency}
                    </option>
                );
            });

        return (
            <div>
                <label className="left-label">
                    <span>
                        {this.state.type == LLCGateway.DEPOSIT
                            ? counterpart
                                  .translate("gateway.choose_withdraw")
                                  .toUpperCase()
                            : counterpart
                                  .translate("gateway.choose_deposit")
                                  .toUpperCase()}
                    </span>:{" "}
                </label>
                <select
                    className="external-coin-types bts-select"
                    onChange={this.onSelectCoin}
                    value={this._current}
                >
                    {coins}
                </select>
            </div>
        );
    }
}

export default ChooseCurrency;
