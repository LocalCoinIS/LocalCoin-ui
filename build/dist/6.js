(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,t,s){"use strict";var n=s(0),a=s.n(n),o=s(1),r=s.n(o),i=s(4),u=s(7),c=s(13),l=s(3),p=s.n(l),_=s(169),d=s(17),f=s(6),h=s.n(f),m=s(8),g=s.n(m),b=s(48),y=s(2),v=s.n(y),k=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}();function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){function t(){return A(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return x(t,a.a.Component),k(t,[{key:"render",value:function(){return 0!==this.props.assets.length&&this.props.value?a.a.createElement(_.a,{entries:this.props.assets.map(function(e){return e&&e.get("symbol")}).filter(function(e){return!!e}),values:this.props.assets.reduce(function(e,t){return t&&t.get("symbol")&&(e[t.get("symbol")]=t),e},{}),singleEntry:this.props.assets[0]?a.a.createElement(d.a,{asset:this.props.assets[0].get("id"),amount:0,hide_amount:!0}):null,value:"",onChange:this.props.onChange}):null}}]),t}();E.propTypes={value:v.a.string,onChange:v.a.func},E=Object(b.a)(E,{asList:!0});var C=function(e){function t(){return A(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return x(t,a.a.Component),k(t,[{key:"getAsset",value:function(){return this.props.asset}},{key:"getError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.assetInput,t=this.props.error;return t||!e||this.getNameType(e)||(t=p.a.translate("explorer.asset.invalid",{name:e})),t}},{key:"getNameType",value:function(e){return e?i.d.is_valid_symbol_error(e,!0)?null:"symbol":null}},{key:"onInputChanged",value:function(e){var t=e.target.value.trim().substr(0,16).toUpperCase();this.props.onChange&&t!==this.props.assetInput&&this.props.onChange(t)}},{key:"onKeyDown",value:function(e){13===e.keyCode&&(this.onFound(e),this.onAction(e))}},{key:"componentDidMount",value:function(){this.props.onFound&&this.props.asset&&this.props.onFound(this.props.asset)}},{key:"componentWillReceiveProps",value:function(e){this.props.onFound&&e.asset!==this.props.asset&&this.props.onFound(e.asset)}},{key:"onFound",value:function(e){e.preventDefault(),!this.props.onFound||this.getError()||this.props.disableActionButton||this.props.asset&&this.props.onFound(this.props.asset)}},{key:"onAssetSelect",value:function(e){e&&(this.props.onFound(e),this.props.onChange(e.get("symbol")))}},{key:"onAction",value:function(e){e.preventDefault(),!this.props.onAction||this.getError()||this.props.disableActionButton||this.props.asset&&this.props.onAction(this.props.asset)}},{key:"render",value:function(){var e=this.props,t=e.disabled,s=e.noLabel,n=this.getError(),o=void 0;t||(this.props.asset?o=this.props.asset.get("symbol"):!n&&this.props.assetInput&&(n=p.a.translate("explorer.asset.not_found",{name:this.props.assetInput})));var i=g()("button btn large outline",{disabled:!this.props.asset||n||this.props.disableActionButton});return a.a.createElement("div",{className:"asset-selector",style:this.props.style},a.a.createElement("div",null,a.a.createElement("div",{className:"header-area"},n||s?null:a.a.createElement("label",{className:"right-label"},"  ",a.a.createElement("span",null,o)),a.a.createElement(r.a,{component:"label",content:this.props.label})),a.a.createElement("div",{className:"input-area"},a.a.createElement("div",{className:"inline-label input-wrapper"},a.a.createElement("input",{style:this.props.inputStyle,disabled:this.props.disabled,type:"text",value:this.props.assetInput||"",placeholder:this.props.placeholder||p.a.translate("explorer.assets.symbol"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),a.a.createElement("div",{className:"form-label select floating-dropdown"},this.props.asset?a.a.createElement(E,{ref:this.props.refCallback,value:this.props.asset.get("symbol"),assets:h.a.List(this.props.assets),onChange:this.onAssetSelect.bind(this)}):null),this.props.children,this.props.onAction?a.a.createElement("button",{className:i,style:{marginLeft:10},onClick:this.onAction.bind(this)},a.a.createElement(r.a,{content:this.props.action_label})):null)),a.a.createElement("div",{className:"error-area",style:{paddingBottom:"10px"}},a.a.createElement("span",{style:{wordBreak:"break-all"}},n))))}}]),t}();C.propTypes={label:v.a.string,error:v.a.string,placeholder:v.a.string,onChange:v.a.func,onFound:v.a.func,assetInput:v.a.string,asset:u.a.ChainAsset,tabIndex:v.a.number,disableActionButton:v.a.string},C.defaultProps={disabled:!1},t.a=Object(c.a)(C)},74:function(e,t,s){"use strict";var n=s(25),a=s(19),o=s(5),r=s(82),i=s(106),u=s(15),c=s(4),l=s(79),p=s.n(l),_=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}();var d={},f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return _(e,[{key:"fundPool",value:function(e,t,s,n){var a=r.a.new_transaction(),i=o.a.get_asset_precision(t.get("precision"));return a.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:s.get("id"),amount:n*i}),function(e){return u.a.process_transaction(a,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"updateFeedProducers",value:function(e,t,s){var n=r.a.new_transaction();return n.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:t.get("id"),new_feed_producers:s}),function(e){return u.a.process_transaction(n,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,s){var n=r.a.new_transaction(),a=o.a.get_asset_precision(t.get("precision"));return n.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:s*a}}),function(e){return u.a.process_transaction(n,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,s,n,a,i,l,_,d){console.log("create asset:",t,"flags:",s,"isBitAsset:",i,"bitasset_opts:",_);var f=r.a.new_transaction(),h=o.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var m=new p.a(t.max_supply).times(h).toString(),g=new p.a(t.max_market_fee||0).times(h).toString(),b=o.a.get_asset_precision(c.b.getAsset(a.base.asset_id).get("precision")),y={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:m,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:g,issuer_permissions:n,flags:s,core_exchange_rate:{base:{amount:a.base.amount*b,asset_id:a.base.asset_id},quote:{amount:a.quote.amount*h,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:d,extensions:null},is_prediction_market:l,extensions:null};return i&&(y.bitasset_opts=_),f.add_type_operation("asset_create",y),function(e){return u.a.process_transaction(f,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,s,n,a,i,l,_,d,f,h,m,g,b,y){var v=r.a.new_transaction();if(y){var k=o.a.get_asset_precision(a.get("precision"));p.a.config({DECIMAL_PLACES:a.get("precision")});var A=new p.a(s.max_supply).times(k).toString(),w=new p.a(s.max_market_fee||0).times(k).toString(),x=c.b.getAsset(n.quote.asset_id),E=o.a.get_asset_precision(x.get("precision")),C=c.b.getAsset(n.base.asset_id),j=o.a.get_asset_precision(C.get("precision")),I=new p.a(n.quote.amount).times(E).toString(),P=new p.a(n.base.amount).times(j).toString();console.log("auths:",m);var S={fee:{amount:0,asset_id:0},asset_to_update:a.get("id"),extensions:a.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:A,max_market_fee:w,market_fee_percent:100*s.market_fee_percent,description:h,issuer_permissions:l,flags:i,whitelist_authorities:m.whitelist_authorities.toJS(),blacklist_authorities:m.blacklist_authorities.toJS(),whitelist_markets:m.whitelist_markets.toJS(),blacklist_markets:m.blacklist_markets.toJS(),extensions:a.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:I,asset_id:n.quote.asset_id},base:{amount:P,asset_id:n.base.asset_id}}}};e!==t&&t||delete S.new_issuer,v.add_type_operation("asset_update",S)}if(console.log("bitasset_opts:",d,"original_bitasset_opts:",f),_&&(d.feed_lifetime_sec!==f.feed_lifetime_sec||d.minimum_feeds!==f.minimum_feeds||d.force_settlement_delay_sec!==f.force_settlement_delay_sec||d.force_settlement_offset_percent!==f.force_settlement_offset_percent||d.maximum_force_settlement_volume!==f.maximum_force_settlement_volume||d.short_backing_asset!==f.short_backing_asset)){var F={fee:{amount:0,asset_id:0},asset_to_update:a.get("id"),issuer:e,new_options:d};v.add_type_operation("asset_update_bitasset",F)}return console.log("feedProducers:",g,"originalFeedProducers:",b),_&&!o.a.are_equal_shallow(g,b)&&v.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:a.get("id"),new_feed_producers:g}),u.a.process_transaction(v,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- updateAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,s,n,a){i.a.issue_asset(e,t,s,n,a)}},{key:"getAssetList",value:function(e,t){var s=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e+"_"+t;return function(r){if(!d[o]){var i;if(d[o]=!0,r({loading:!0}),i=a.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],s=[];e.forEach(function(e){c.b._updateObject(e,!1),s.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var n=a.Apis.instance().db_api().exec("get_objects",[s]),i=t.length>0?a.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([n,i]).then(function(t){return delete d[o],r({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetActions.getAssetList: ",e),r({loading:!1}),delete d[o]}),n){["BRIDGE","GDEX","RUDEX","OPEN","WIN"].forEach(function(t){s.getAssetList(t+"."+e,10)})}return i}}}},{key:"lookupAsset",value:function(e,t){var s=c.b.getAsset(e);return s?{assets:[s],searchID:t,symbol:e}:function(s){setTimeout(function(){var n=c.b.getAsset(e);n&&s({assets:[n],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,s){var n=r.a.new_transaction();return n.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:s,extensions:[]}),u.a.process_transaction(n,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=n.a.createActions(f)}}]);