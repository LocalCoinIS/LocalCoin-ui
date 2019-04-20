const LOCALCOIN_HOST_URL = "https://localhost:44330";
class LocalcoinHost {
    send = (url, body, cb) => {          
          var xhr = new XMLHttpRequest();
          xhr.open('POST', LOCALCOIN_HOST_URL + url, true);
          
          xhr.onreadystatechange = function() {
            cb(this.responseText);
          }
          
          xhr.send(body);
    }
}

export default LocalcoinHost;