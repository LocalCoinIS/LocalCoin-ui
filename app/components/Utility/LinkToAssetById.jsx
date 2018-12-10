import React from "react";
import {Link} from "react-router/es";
import AssetWrapper from "./AssetWrapper";
import AssetName from "./AssetName";
import {coins} from "../../assets/asset-symbols/symbols";

//require("file-loader?name=asset-symbols/[name].png!./bts.png");
class LinkToAssetById extends React.Component {
    static defaultProps = {
        showIcon: false
    };

    findCoin(symbol) {
        for(let i in coins) {
            let coin = coins[i];
            if(coin.name === symbol) return coin.image;
        }
        return this.getDefault();
    }

    getDefault() {
        for(let i in coins) {
            let coin = coins[i];
            if(coin.name === 'coin') return coin.image;
        }
        return null;
    }

    render() {
        const symbol = this.props.asset.get("symbol");
        const assetName = <AssetName name={symbol} noTip />;
        return this.props.noLink ? (
            assetName
        ) : (
            <Link
                className={
                    this.props.showIcon ? "dashboard__table__link" : null
                }
                to={`/asset/${symbol}/`}
            >
                {this.props.showIcon ? (
                    <img
                        src={this.findCoin(symbol.toLowerCase())}
                        alt={`ico-${symbol}`}
                    />
                ) : null}
                {assetName}
            </Link>
        );
    }
}

export default AssetWrapper(LinkToAssetById);
