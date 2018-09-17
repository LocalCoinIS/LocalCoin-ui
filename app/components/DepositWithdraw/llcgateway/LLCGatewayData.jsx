import {ChainStore} from "bitsharesjs/es";

class LLCGatewayData {
    getBaseUrl() {
        // if (window.location.host == "localhost:8080")
        //     return "http://localhost:8081/LLCGatewayWCF/";

        return "http://194.63.140.239:8081/LLCGatewayWCF/";
    }

    getAllowCurrency(cb) {
        this.ajax(cb, "GetAllowCurrency");
    }

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

        let url = this.getBaseUrl() + action;

        if (params) url += "?" + this.encodeQueryData(params);

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

    getUserBalance(account, normalizeValue, byAsset, currencyCoef) {
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
