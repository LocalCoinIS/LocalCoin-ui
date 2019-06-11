import React from "react";
import SettingsStore from "stores/SettingsStore";
import counterpart from "counterpart";
import LLCGateway from "./LLCGateway";
import LLCGatewayData from "./LLCGatewayData";
import DropdownList from "components/Utility/DropdownList";

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
                asset: null,
                currency: null
            };

        if (!this._current) {
            if (typeof list[0] === "undefined")
                return {
                    asset: null,
                    currency: null
                };
            return list[0];
        }

        for (var i in list) if (list[i].asset == this._current) return list[i];

        if (typeof list[0] === "undefined")
            return {
                asset: null,
                currency: null
            };
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
                    if (self.getCurrency())
                        self.props.bullet.setCurrency(self.getCurrency());
                }
            );
        });
    }

    onSelectCoin(key) {
        if (key) this._current = key;

        if (this.getCurrency())
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
        // //++test
        // let dataListCoins = [];
        // dataListCoins.push({
        //     asset: "asset0",
        //     currency: "currency0"
        // });
        // dataListCoins.push({
        //     asset: "asset1",
        //     currency: "currency1"
        // });
        // dataListCoins.push({
        //     asset: "asset2",
        //     currency: "currency2"
        // });
        // return dataListCoins;
        // //--test

        if (!this.state.currencies) return null;
        return this.state.currencies[this.state.type];
    }

    render() {
        let dataListCoins = this.getCoinByType();

        let options = [];
        if (dataListCoins)
            options = dataListCoins.map(coin => {
                return {
                    key: coin.asset,
                    label: coin.currency
                };
            });

        let selected = this.getCurrency();
        let self = this;

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
                    </span>
                    :{" "}
                </label>
                <DropdownList
                    options={options}
                    selected={{
                        key: selected ? selected.asset : null,
                        label: selected ? selected.currency : null
                    }}
                    onChange={key => {
                        self.onSelectCoin(key);
                    }}
                />
            </div>
        );
    }
}

export default ChooseCurrency;
