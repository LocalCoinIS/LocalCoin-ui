export default class LocalcoinHost {
	_LOCALCOIN_HOST_URL = null;
	LOCALCOIN_HOST_URL = () => {
		if(this._LOCALCOIN_HOST_URL !== null) return this._LOCALCOIN_HOST_URL;

		try {
			if(typeof window.remote 				=== "undefined") this._LOCALCOIN_HOST_URL = "";
			if(typeof window.remote.process 		=== "undefined") this._LOCALCOIN_HOST_URL = "";
			if(typeof window.remote.process.argv 	=== "undefined") this._LOCALCOIN_HOST_URL = "";
			if(typeof window.remote.process.argv[1] === "undefined") this._LOCALCOIN_HOST_URL = "";
			else 								   					 this._LOCALCOIN_HOST_URL = window.remote.process.argv[1];
		} catch(ex) {
			this._LOCALCOIN_HOST_URL = "http://localhost:52209";
		}

		return this._LOCALCOIN_HOST_URL;
	}

	send = (url, body, cb) =>
		fetch(this.LOCALCOIN_HOST_URL() + url, {
			method: "POST",
			body: body
		})
		.then(r =>
			r.text().then(res => {
				if (typeof cb !== "undefined") cb(res);
			})
		)
		.catch(err   => cb(null));

	isRunnging = (cb) =>
		fetch(this.LOCALCOIN_HOST_URL(), {
			method: "get",
			headers: new Headers({Accept: "application/json"})
		})
		.then(reply => cb(true))
		.catch(err  => cb(false));

	walletIsLoaded = () =>
		fetch(this.LOCALCOIN_HOST_URL()+"/wallet_is_loaded", {
			method: "get",
			headers: new Headers({Accept: "application/json"})
		})
		.then ( data => {} )
		.catch( data => {} );

	getLastBlock = (url, cb) =>
		(new WebSocket(url)).onopen = function (event) {
			this.onmessage = function (event) {
				try {
					let responseArr = JSON.parse(event.data);
					let lastBlock = responseArr.result[0].head_block_number;
					cb(lastBlock);
				} catch(ex) { cb(-1); }
			};

			this.onerror = function(error) { cb(-1); };

			this.send(JSON.stringify(
				{
					"jsonrpc": "2.0",
					"method": "call",
					"params": [0, "get_objects", [["2.1.0"]]], "id": 1
				}
			));
		};
}