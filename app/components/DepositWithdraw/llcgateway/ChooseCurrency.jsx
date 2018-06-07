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

    getAllowCurrencies() {
        let provider = new LLCGatewayData();
        let self = this;
        provider.getAllowCurrency(data => {
            self.setState({
                currencies: data
            });
        });
    }

    onSelectCoin(val) {}

    componentWillUpdate(props) {
        this.setState({
            type: props.type
        });
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
                    <option value={coin.key} key={coin.key}>
                        {coin.name}
                    </option>
                );
            });

        return (
            <div>
                <label className="left-label">
                    <span>
                        {this.state.type == LLCGateway.WITHDRAW
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
                    onChange={this.onSelectCoin.bind(this)}
                >
                    {coins}
                </select>
            </div>
        );
    }
}

export default ChooseCurrency;
