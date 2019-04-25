const LOCALCOIN_HOST_URL = "https://localhost:5001";
export default class LocalcoinHost {
	send = (url, body, cb) =>
		fetch(LOCALCOIN_HOST_URL + url, {
			method: "POST",
			body: body
		})
		.then(result => cb(result))
		.catch(err   => cb(null));

	isRunnging = (cb) =>
		fetch(LOCALCOIN_HOST_URL, {
			method: "get",
			headers: new Headers({Accept: "application/json"})
		})
		.then(reply => cb(true))
		.catch(err  => cb(false));

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