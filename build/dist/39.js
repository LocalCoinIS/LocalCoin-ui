(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{8023:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=(n(6),n(1),n(61),n(330),n(361),n(8),n(101),n(13)),i=n(59),c=n(15),s=n(34),l=n(23),u=(n(44),n(7)),d=n(10),p=(n(107),n(111),n(12),n(22),n(3)),f=n.n(p),m=(n(126),n(17),n(9)),h=n(14),g=n(16),b=n(5),y=(n(45),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}());var v='# Endpoint for P2P node to listen on\np2p-endpoint = 0.0.0.0:11020\n\n# P2P nodes to connect to on startup (may specify multiple times)\nseed-node = moscow.localcoin.is:11020\nseed-node = helsinki.localcoin.is:11020\nseed-node = ru.localcoin.is:11020\nseed-node = quebec.airdroptelegramknights.io:11020\nseed-node = tokio.airdroptelegramknights.io:11020\nseed-node = charlotte.airdroptelegramknights.io:11020\n\n# JSON array of P2P nodes to connect to on startup\n# seed-nodes = \n\n# Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.\n# checkpoint = \n\n# Endpoint for websocket RPC to listen on\nrpc-endpoint = 127.0.0.1:8090\n\n# Endpoint for TLS websocket RPC to listen on\n# rpc-tls-endpoint = \n\n# The TLS certificate file for this server\n# server-pem = \n\n# Password for this certificate\n# server-pem-password = \n\n# File to read Genesis State from\ngenesis-json = genesis.json\n\n# Block signing key to use for init witnesses, overrides genesis file\n# dbg-init-key = \n\n# JSON file specifying API permissions\n# api-access = \n\n# Space-separated list of plugins to activate\n# plugins = \n\n# Enable block production, even if the chain is stale.\nenable-stale-production = false\n\n# Percent of witnesses (0-99) that must be participating in order to produce blocks\nrequired-participation = false\n\n# ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)\n# witness-id = \n\n# Tuple of [PublicKey, WIF private key] (may specify multiple times)\nprivate-key = ["LLC6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"]\n\n# Tuple of [PublicKey, WIF private key] (may specify multiple times)\ndebug-private-key = ["LLC6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"]\n\n# Account ID to track history for (may specify multiple times)\n# track-account = \n\n# Keep only those operations in memory that are related to account history tracking\npartial-operations = 1\n\n# Maximum number of operations per account will be kept in memory\nmax-ops-per-account = 1000\n\n# Elastic Search database node url\n# elasticsearch-node-url = \n\n# Number of bulk documents to index on replay(5000)\n# elasticsearch-bulk-replay = \n\n# Number of bulk documents to index on a syncronied chain(10)\n# elasticsearch-bulk-sync = \n\n# Log bulk events to database\n# elasticsearch-logs = \n\n# Use visitor to index additional data(slows down the replay)\n# elasticsearch-visitor = \n\n# Track market history by grouping orders into buckets of equal size measured in seconds specified as a JSON array of numbers\nbucket-size = [60,300,900,1800,3600,14400,86400]\n\n# How far back in time to track history for each bucket size, measured in the number of buckets (default: 1000)\nhistory-per-size = 1000\n\n# Will only store this amount of matched orders for each market in order history for querying, or those meet the other option, which has more data (default: 1000)\nmax-order-his-records-per-market = 1000\n\n# Will only store matched orders in last X seconds for each market in order history for querying, or those meet the other option, which has more data (default: 259200 (3 days))\nmax-order-his-seconds-per-market = 259200\n\n# RPC endpoint of a trusted validating node (required)\n# trusted-node = \n\n# Block number after which to do a snapshot\n# snapshot-at-block = \n\n# Block time (ISO format) after which to do a snapshot\n# snapshot-at-time = \n\n# Pathname of JSON file where to store the snapshot\n# snapshot-to = \n\n# Elasticsearch node url\n# es-objects-elasticsearch-url = \n\n# Log bulk events to database\n# es-objects-logs = \n\n# Number of bulk documents to index on replay(5000)\n# es-objects-bulk-replay = \n\n# Number of bulk documents to index on a syncronied chain(10)\n# es-objects-bulk-sync = \n\n# Store proposal objects\n# es-objects-proposals = \n\n# Store account objects\n# es-objects-accounts = \n\n# Store asset objects\n# es-objects-assets = \n\n# Store balances objects\n# es-objects-balances = \n\n# Store limit order objects\n# es-objects-limit-orders = \n\n# Store feed data\n# es-objects-asset-bitasset = \n\n# Group orders by percentage increase on price. Specify a JSON array of numbers here, each number is a group, number 1 means 0.01%. \ntracked-groups = [10,100]\n\n# declare an appender named "stderr" that writes messages to the console\n[log.console_appender.stderr]\nstream=std_error\n\n# declare an appender named "p2p" that writes messages to p2p.log\n[log.file_appender.p2p]\n# filename can be absolute or relative to this config file\nfilename=logs/p2p/p2p.log\n# Rotate log every ? minutes, if leave out default to 60\nrotation_interval=60\n# how long will logs be kept (in days), if leave out default to 7\nrotation_limit=7\n\n# route any messages logged to the default logger to the "stderr" logger we\n# declared above, if they are info level are higher\n[logger.default]\nlevel=info\nappenders=stderr\n\n# route messages sent to the "p2p" logger to the p2p appender declared above\n[logger.p2p]\nlevel=info\nappenders=p2p\n\n# Name of account that is an activenode\nactivenode-account = {accountName}\n\n# Tuple of [PublicKey, WIF private key] (for account that will get rewards for being an activenode)\nactivenode-private-key = ["{publicKey}","{privateKey}"]\n',w=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.accountName=null,this.publicKey=null,this.privateKey=null,this.accountName=t,this.publicKey=n,this.privateKey=a}return y(e,[{key:"get",value:function(){return v.replace("{accountName}",this.accountName).replace("{publicKey}",this.publicKey).replace("{privateKey}",this.privateKey)}}]),e}(),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var _="ws://127.0.0.1:8077/",E=(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ws=null,this.Dispose=function(){return t.ws.close()},this.isWalletExists=function(e,n){try{return t.ws.onopen=function(){e(),t.ws.onopen=null,t.ws.onerror=null},void(t.ws.onerror=function(){n(),t.ws.onopen=null,t.ws.onerror=null})}catch(e){}try{t.ws.onopen=null,t.ws.onerror=null}catch(e){}n()},this.getActivenodeByAccount=function(e,n){var a='{ "jsonrpc" : "2.0","method" : "get_activenode","params" : ["'+e+'"],"id" : 1  }';t.ws.onmessage=function(e){n(JSON.parse(e.data)),t.ws.onmessage=null},t.ws.send(a)},this.createActivenodeByAccount=function(e,n){var a='{ "jsonrpc" : "2.0","method" : "create_activenode","params" : ["'+e+'", true],"id" : 1  }';t.ws.onmessage=function(e){n(JSON.parse(e.data)),t.ws.onmessage=null},t.ws.send(a)},this.ws=new WebSocket(_)}k(e,[{key:"importAccountInWallet",value:function(e,t,n){var a=this,o='{ "jsonrpc" : "2.0","method" : "import_key","params" : ["'+e+'", "'+t+'"],"id" : 1  }';this.ws.onmessage=function(e){n(JSON.parse(e.data)),a.ws.onmessage=null},this.ws.send(o)}},{key:"lockWallet",value:function(e){var t=this;this.ws.onmessage=function(n){e(JSON.parse(n.data)),t.ws.onmessage=null},this.ws.send('{ "jsonrpc" : "2.0","method" : "lock","params" : [],"id" : 1  }')}},{key:"unlockWallet",value:function(e,t){var n=this,a='{ "jsonrpc" : "2.0","method" : "unlock","params" : ["'+e+'"],"id" : 1  }';this.ws.onmessage=function(e){t(JSON.parse(e.data)),n.ws.onmessage=null},this.ws.send(a)}},{key:"setPassWallet",value:function(e,t){var n=this,a='{ "jsonrpc" : "2.0","method" : "set_password","params" : ["'+e+'"],"id" : 1  }';this.ws.onmessage=function(e){t(JSON.parse(e.data)),n.ws.onmessage=null},this.ws.send(a)}}])}(),n(124),n(149)),A=n(4),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var N=A.c.operations,O=(Object.keys(N),511),P=function(e){function t(e){j(this,t);var n=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleAddNode=function(){n.setState({calculatePanel:!1})},n._unlockHandle=function(e){e.preventDefault(),c.a.isLocked()?s.a.unlock().then(function(){l.a.tryToSetCurrentAccount()}).catch(function(){}):s.a.lock()},n.canCreateTheActivenode=function(){return!(n.getWalletBalance()<O)&&(!!n.isLifetimeMember()&&!!n.isLocalNodeRunning())},n.activenodeCreate=function(){var e=h.a.getState().currentAccount,t=A.b.getAccount(e),a=new A.l;a.add_type_operation("activenode_create_operation",{fee:{amount:0,asset_id:"1.3.0"},activenode_account:t.get("id")}),c.a.process_transaction(a,null,!0).then(function(e){return n.canCreateTheActivenode()&&(n.setState({toUpdateConfig:!0}),n.outpudConfigFile()),!0})},n._createTheActivenodeHandle=function(){n.canCreateTheActivenode()&&n.activenodeCreate()},n.imIsActiveNodeView=function(){var e=h.a.getState().currentAccount;return o.a.createElement("div",{style:{margin:"0 auto",width:600,marginTop:100,background:"#efefef",padding:50,textAlign:"center"}},o.a.createElement("h2",{style:{textAlign:"center"}},f.a.translate("account.activenodes.your_node_up_and_running")),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.activenode_has_been_successfully")),o.a.createElement("br",null),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.you_have_to_keep_it_up")),o.a.createElement("br",null),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.if_you_do_not_keep_your_node")),o.a.createElement("br",null),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.you_can_check"),o.a.createElement(d.b,{to:"/account/"+e+"/vesting/",activeClassName:"active"},f.a.translate("account.activenodes.vesting_section"))))},n.unauthorizedView=function(){return o.a.createElement("div",{style:{margin:"0 auto",width:600,marginTop:100,background:"#efefef",padding:50,textAlign:"center"}},o.a.createElement("h2",{style:{textAlign:"center"}},f.a.translate("account.activenodes.nodes")),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.authorize_ti_view_and_manage_nodes")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"button btn large inverted",onClick:n._unlockHandle},f.a.translate("account.activenodes.login")))},n.addTheNodeView=function(){return o.a.createElement("div",{style:{margin:"0 auto",width:600,marginTop:100,background:"#efefef",padding:50,textAlign:"center"}},o.a.createElement("h2",{style:{textAlign:"center"}},f.a.translate("account.activenodes.earn_coins_by_running_activenode")),o.a.createElement("span",null,f.a.translate("account.activenodes.currently_there_are")," ",n.getCountActivenodes(),f.a.translate("account.activenodes.activenodes_in_the_network")),o.a.createElement("br",null),o.a.createElement("span",null,f.a.translate("account.activenodes.approximate_daily_profit_is")," ",n.calculateDailyApproximate(),f.a.translate("account.activenodes.llc"),"."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"button btn large inverted",onClick:n._handleAddNode},f.a.translate("account.activenodes.add_the_activenode")))},n.isLifetimeMember=function(){try{var e=A.b.getAccount(h.a.getState().currentAccount);return null!==e&&"1970-01-01T00:00:00"!==e.toJS().membership_expiration_date}catch(e){}return!1},n.getWalletBalance=function(){var e=0,t=A.b.getAccount(h.a.getState().currentAccount);return t?(t.get("balances").forEach(function(t,n){var a=A.b.getObject(t);if(!a)return"";var o=A.b.getAsset(n);if(o){var r=o.get("symbol");if(r&&"LLC"===r.toUpperCase()){var i=b.a.get_asset_precision(o.get("precision"));e=a.get("balance")/i}}}),e):0},n.isLocalNodeRunning=function(){var e=m.a.getState().settings.get("apiServer")+"";return-1!==e.indexOf("://127.0.0.1:")||-1!==e.indexOf("://localhost:")},n.activenodeRequirementsView=function(){return o.a.createElement("div",{style:{margin:"0 auto",width:600,marginTop:100,background:"#efefef",padding:50,textAlign:"center"}},o.a.createElement("h2",{style:{textAlign:"center"}},f.a.translate("account.activenodes.activenode_requirements")),o.a.createElement("input",{type:"checkbox",checked:n.getWalletBalance()>=O}),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.min_balance")),o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",checked:n.isLifetimeMember()}),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.lifetime_member")),o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",checked:n.isLocalNodeRunning()}),o.a.createElement("span",{style:{textAlign:"center"}},f.a.translate("account.activenodes.localhost_connection")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{style:{opacity:n.canCreateTheActivenode()?1:.3},className:"button btn large inverted",onClick:n._createTheActivenodeHandle},f.a.translate("account.activenodes.create_the_activenode")))},n.calculateDailyApproximate=function(){return.065/n.getCountActivenodes()*43200},n.getCountActivenodes=function(){try{var e=n.props.globalObject;if(null===e)return 1;e=e.toJS();var t=Object.keys(e.current_activenodes).length;return t<1?1:t}catch(e){}return null},n.getListActivenodes=function(){try{var e=n.props.globalObject;return null===e?null:(e=e.toJS()).current_activenodes}catch(e){}return null},n.updateConfigView=function(){return o.a.createElement("div",{style:{margin:"0 auto",width:600,marginTop:100,background:"#efefef",padding:50,textAlign:"center"}},o.a.createElement("h2",{style:{textAlign:"center"}},f.a.translate("account.activenodes.nodes")),o.a.createElement("span",{style:{textAlign:"center"}},"1. ",f.a.translate("account.activenodes.open_in_witness_node_data_dir_file"),":"),o.a.createElement("br",null),o.a.createElement("span",{style:{textAlign:"center"}},"2. ",f.a.translate("account.activenodes.restart_the_node"),":"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"button btn large inverted",onClick:function(){n.setState({imIsActiveNode:!0})}},"OK"))},n.state={toUpdateConfig:!1,imIsActiveNode:!1,calculatePanel:!0},n}return C(t,o.a.Component),S(t,[{key:"getP",value:function(e){return E.a.getState().addresses.get(e)}},{key:"outpudConfigFile",value:function(){s.a.unlock().then(function(){var e=h.a.getState().currentAccount,t=A.b.getAccount(e).get("options").get("memo_key"),n=c.a.getPrivateKey(t).toWif(),a=new w(e,t,n).get(),o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(a)),o.setAttribute("download","config.ini"),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}).catch(function(){})}},{key:"render",value:function(){return this.state.imIsActiveNode?this.imIsActiveNodeView():this.state.toUpdateConfig?this.updateConfigView():i.a.getState().locked?this.unauthorizedView():this.state.calculatePanel?this.addTheNodeView():this.activenodeRequirementsView()}}]),t}();P.propTypes={globalObject:u.a.ChainObject.isRequired,dynGlobalObject:u.a.ChainObject.isRequired},P.defaultProps={globalObject:"2.0.0",dynGlobalObject:"2.1.0"},P=Object(r.a)(P);var T=function(e){function t(){return j(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,o.a.Component),S(t,[{key:"render",value:function(){return o.a.createElement(P,this.props)}}]),t}();T=Object(g.connect)(T,{listenTo:function(){return[m.a]},getProps:function(){return{cardView:m.a.getState().viewSettings.get("cardView"),filterWitness:m.a.getState().viewSettings.get("filterWitness")}}});t.default=T}}]);