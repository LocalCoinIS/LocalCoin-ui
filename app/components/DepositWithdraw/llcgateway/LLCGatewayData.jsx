class LLCGatewayData {
    getBaseUrl() {
        return "http://localhost:8081/LLCGatewayWCF/";
    }

    getAllowCurrency(cb) {
        this.ajax(cb, "GetAllowCurrency");
    }

    сreatePaymentAddress(account, asset, cb) {
        this.ajax(
            function(data) {
                cb(data.address);
            },
            "CreatePaymentAddress",
            {
                account: account,
                asset: asset
            }
        );
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
}

export default LLCGatewayData;
