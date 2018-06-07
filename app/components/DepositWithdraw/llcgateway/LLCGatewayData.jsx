class LLCGatewayData {
    getBaseUrl() {
        return "http://localhost:8081/LLCGatewayWCF/";
    }

    getAllowCurrency(cb) {
        let url = this.getBaseUrl() + "GetAllowCurrency";
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(cb);
    }
}

export default LLCGatewayData;
