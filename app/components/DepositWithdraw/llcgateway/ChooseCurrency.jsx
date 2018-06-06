import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";

class ChooseCurrency extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            data: null
        };

        this.onSelectCoin = this.onSelectCoin.bind(this);
    }

    onSelectCoin(val) {}

    componentWillUpdate(props) {
        this.setState({
            type: props.type
        });
    }

    getCoinByType() {
        return [
            {value: "q123", name: "a234"},
            {value: "w123", name: "s234"},
            {value: "e123", name: "d234"},
            {value: "r123", name: "f234"}
        ];
    }

    render() {
        let coins = null;

        let dataCoins = null;
        if ((dataCoins = this.getCoinByType()))
            coins = dataCoins.map(coin => {
                return (
                    <option value={coin.value} key={coin.value}>
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
