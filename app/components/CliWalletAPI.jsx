const CLI_WALLET_HOST = "ws://127.0.0.1:8077/";
class CliWalletAPI {
    ws = null;

    constructor() { this.ws = new WebSocket(CLI_WALLET_HOST); }
    Dispose =  () => this.ws.close();

    isWalletExists = (success, error) => {
        try {
            this.ws.onopen  = () => {
                success();
                this.ws.onopen  = null;
                this.ws.onerror = null;
            };
            this.ws.onerror = () => {
                error();
                this.ws.onopen  = null;
                this.ws.onerror = null;
            };
            
            return;
        } catch(ex) {}

        try {
            this.ws.onopen  = null;
            this.ws.onerror = null;
        } catch(ex) {}

        error();
    }

    importAccountInWallet(account, privKey, cb) {
        let q = "{ " +
                "\"jsonrpc\" : \"2.0\"," +
                "\"method\" : \"import_key\"," +
                "\"params\" : [" +
                    "\"" + account + "\", " +
                    "\"" + privKey + "\"" +
                "]," +
                "\"id\" : 1 " +
            " }";

        this.ws.onmessage = (response) => {
            cb(JSON.parse(response.data));
            this.ws.onmessage = null;
        };
        this.ws.send(q);
    }

    lockWallet(cb) {
        let q = "{ " +
                "\"jsonrpc\" : \"2.0\"," +
                "\"method\" : \"lock\"," +
                "\"params\" : [" +
                "]," +
                "\"id\" : 1 " +
            " }";

        this.ws.onmessage = (response) => {
            cb(JSON.parse(response.data));
            this.ws.onmessage = null;
        };
        this.ws.send(q);
    }

    unlockWallet(walletPassword, cb) {
        let q = "{ " +
                "\"jsonrpc\" : \"2.0\"," +
                "\"method\" : \"unlock\"," +
                "\"params\" : [" +
                    "\"" + walletPassword + "\"" +
                "]," +
                "\"id\" : 1 " +
            " }";

        this.ws.onmessage = (response) => {
            cb(JSON.parse(response.data));
            this.ws.onmessage = null;
        };
        this.ws.send(q);
    }

    setPassWallet(walletPassword, cb) {
        let q = "{ " +
                "\"jsonrpc\" : \"2.0\"," +
                "\"method\" : \"set_password\"," +
                "\"params\" : [" +
                    "\"" + walletPassword + "\"" +
                "]," +
                "\"id\" : 1 " +
            " }";

        this.ws.onmessage = (response) => {
            cb(JSON.parse(response.data));
            this.ws.onmessage = null;
        };
        this.ws.send(q);
    }

    getActivenodeByAccount = (account, cb) => {
        let q = "{ " +
                "\"jsonrpc\" : \"2.0\"," +
                "\"method\" : \"get_activenode\"," +
                "\"params\" : [" +
                    "\"" + account + "\"" +
                "]," +
                "\"id\" : 1 " +
            " }";
        
        this.ws.onmessage = (response) => {
            cb(JSON.parse(response.data));
            this.ws.onmessage = null;
        };
        this.ws.send(q);
    }

    createActivenodeByAccount = (account, cb) => {
        let q = "{ " +
                "\"jsonrpc\" : \"2.0\"," +
                "\"method\" : \"create_activenode\"," +
                "\"params\" : [" +
                    "\"" + account + "\", " + 
                    "true" + 
                "]," +
                "\"id\" : 1 " +
            " }";
        
        this.ws.onmessage = (response) => {
            cb(JSON.parse(response.data));
            this.ws.onmessage = null;
        };
        this.ws.send(q);
    }
}

export default CliWalletAPI;