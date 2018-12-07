import React from "react";
import {Link} from "react-router/es";
import AssetWrapper from "./AssetWrapper";
import AssetName from "./AssetName";
import {coinIcon} from "../../assets/brand-new-layout/img/images";

//require("file-loader?name=asset-symbols/[name].png!./bts.png");
class LinkToAssetById extends React.Component {
    static defaultProps = {
        showIcon: false
    };

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
                        src={"/asset-symbols/" + symbol.toLowerCase() + ".png"}
                        onError={e => {
                            var tmpImg = e.target;
                            let img = new Image();
                            img.src =
                                "/asset-symbols/" +
                                symbol.toLowerCase() +
                                ".svg";
                            tmpImg.src = img.src;
                            img.onerror = function() {
                                return (tmpImg.src = "/asset-symbols/coin.png");
                            };
                            e.target.src = tmpImg.src;
                        }}
                        alt={`ico-${symbol}`}
                    />
                ) : null}
                {assetName}
            </Link>
        );
    }
}

export default AssetWrapper(LinkToAssetById);
