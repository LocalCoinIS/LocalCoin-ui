import {ChainStore} from "bitsharesjs/es";

class LLCGatewayData {
    getBaseUrl() {
        return "https://llcgateway.localcoin.is/";
    }

    getAllowCurrency(cb) {
        this.ajax(cb, "GetAllowCurrency");
    }

    getPairsCourse = function(cb) {
        this.ajax(cb, "GetPairsCourse");
    };

    сreatePaymentAddress(account, asset, mode, cb) {
        this.ajax(
            function(data) {
                cb(data.address);
            },
            "CreatePaymentAddress",
            {
                account: account,
                asset: asset,
                type: mode
            }
        );
    }

    validateAddress(address, asset, cb) {
        this.ajax(cb, "ValidateAddress", {
            address: address,
            currency: asset
        });
    }

    ajax(cb, action, params) {
        if (typeof params === "undefined") params = null;
        let url = this.getBaseUrl() + "?methodnameaction=" + action;
        if (params) url += "&" + this.encodeQueryData(params);

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(cb);
    }

    encodeQueryData(data) {
        let ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
    }

    precisionToCoef(precision) {
        let val = "1";
        for (let i = 0; i < precision; i++) val += "0";

        return parseInt(val);
    }

    getUserBalance(account, normalizeValue, byAsset) {
        let list = [];

        let normalizeBalance = function(normalizeValue, balance, currencyCoef) {
            if (!normalizeValue) return balance;

            if (!balance) return 0;

            return balance / currencyCoef;
        };

        let account_balances = account.get("balances").toJS();

        for (let assetId in account_balances) {
            let asset = ChainStore.getAsset(assetId);

            if (!asset) continue;

            let balanceId = account_balances[assetId];
            let balanceObject = ChainStore.getObject(balanceId);

            let precision = asset.get("precision");
            let currencyCoef = this.precisionToCoef(precision);

            list[asset.get("symbol")] = normalizeBalance(
                normalizeValue,
                balanceObject.get("balance"),
                currencyCoef
            );
        }

        if (typeof byAsset !== "undefined") {
            return typeof list[byAsset] !== "undefined" ? list[byAsset] : 0;
        }

        return list;
    }
}

export default LLCGatewayData;
