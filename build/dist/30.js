(window.webpackJsonp=window.webpackJsonp||[]).push([[30,47],{238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),s=a(16),o=a(9),c=a(1),i=a.n(c),m=a(51),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),u(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-404"},r.a.createElement("div",{className:"page-404-container"},r.a.createElement("div",{className:"page-404-logo"},r.a.createElement("img",{src:m.logoLight,height:"50px",width:"50px",alt:"Logo"})),r.a.createElement("div",{className:"page-404-title"},r.a.createElement(i.a,{content:"page404.page_not_found_title"})),r.a.createElement("div",{className:"page-404-subtitle"},r.a.createElement(i.a,{content:"page404."+this.props.subtitle})),r.a.createElement("div",{className:"page-404-button-back"},r.a.createElement(l.b,{to:"/"},r.a.createElement(i.a,{component:"button",className:"btn large inverted flat",content:"page404.home"})))))}}]),t}();p.defaultProps={subtitle:"page_not_found_subtitle"},t.default=p=Object(s.connect)(p,{listenTo:function(){return[o.a]},getProps:function(){return{theme:o.a.getState().settings.get("themes")}}})},8033:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),s=a(1),o=a.n(s),c=a(46),i=a(49),m=a(17),u=a(64),p=a(22),_=a(125),d=a(68),b=a(45),h=a(5),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var E=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={time:e.time},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),f(t,[{key:"getHours",value:function(e){return e/3600}},{key:"render",value:function(){return r.a.createElement("div",null,this.getHours(this.state.time),"h")}}]),t}(),g=a(4),y=a(19),v=a(72),k=a(20),x=a(238),O=a(359),w=a(14),A=a(16),P=a(3),N=a.n(P),S=a(105),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},q=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function D(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var I=function(e){function t(){return T(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return D(t,r.a.Component),q(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?r.a.createElement("label",{className:"btn orange"},r.a.createElement(o.a,{content:"account.user_issued_assets."+a})):r.a.createElement("span",null)}}]),t}(),F=function(e){function t(){return T(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return D(t,r.a.Component),q(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?r.a.createElement("label",{className:"btn orange"},r.a.createElement(o.a,{content:"account.user_issued_assets."+a})):r.a.createElement("span",null)}}]),t}(),L=function(e){function t(e){T(this,t);var a=R(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={callOrders:[],marginTableSort:"price",sortDirection:!0},a}return D(t,r.a.Component),q(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.asset.has("bitasset")){var t,a=(C(t={},this.props.asset.get("id"),this.props.asset.toJS()),C(t,this.props.backingAsset.get("id"),this.props.backingAsset.toJS()),t),n=this.props.asset.getIn(["bitasset","is_prediction_market"],!1),r=this.props.asset.getIn(["bitasset","current_feed","maximum_short_squeeze_ratio"]),l=this.props.asset.getIn(["bitasset","current_feed","settlement_price"]);n&&l.getIn(["base","asset_id"])===l.getIn(["quote","asset_id"])&&(a[this.props.backingAsset.get("id")]||(a[this.props.backingAsset.get("id")]={precision:this.props.asset.get("precision")}),l=(l=(l=(l=l.setIn(["base","amount"],1)).setIn(["base","asset_id"],this.props.backingAsset.get("id"))).setIn(["quote","amount"],1)).setIn(["quote","asset_id"],this.props.asset.get("id")),r=1e3);try{var s=new k.c({priceObject:l,market_base:this.props.asset.get("id"),sqr:r,assets:a});y.Apis.instance().db_api().exec("get_call_orders",[this.props.asset.get("id"),300]).then(function(t){var r=t.map(function(t){return new k.b(t,a,e.props.asset.get("id"),s,n)});e.setState({callOrders:r})})}catch(e){}}}},{key:"_toggleSortOrder",value:function(e){e!==this.state.marginTableSort?this.setState({marginTableSort:e}):this.setState({sortDirection:!this.state.sortDirection})}},{key:"_assetType",value:function(e){return"bitasset"in e?e.bitasset.is_prediction_market?"Prediction":"Smart":"Simple"}},{key:"renderFlagIndicators",value:function(e,t){return r.a.createElement("div",null,t.map(function(t){return r.a.createElement(I,{key:"flag_"+t,name:t,isSet:e[t]})}))}},{key:"renderPermissionIndicators",value:function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{colspan:"2"},r.a.createElement("div",{className:"table-blocks__item__table__labels"},t.map(function(t){return r.a.createElement(F,{key:"perm_"+t,name:t,isSet:e[t]})}))))}},{key:"formattedPrice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.base,l=e.quote;return r.a.createElement(u.a,{base_amount:n.amount,base_asset:n.asset_id,quote_amount:l.amount,quote_asset:l.asset_id,hide_value:a,hide_symbols:t})}},{key:"renderAuthorityList",value:function(e){return e.map(function(e){return r.a.createElement("span",null," ",r.a.createElement(c.a,{account:e}))})}},{key:"renderMarketList",value:function(e,t){var a=e.symbol;return t.map(function(e){if(e==a)return null;var t=e+"_"+a,n=e+"/"+a;return r.a.createElement("span",null,r.a.createElement(l.b,{to:"/market/"+t},n)," "," ")}.bind(this))}},{key:"renderAboutBox",value:function(e,t){var a=g.b.getObject(e.issuer,!1,!1),n=a?a.get("name"):"",s=b.a.parseDescription(e.options.description),c=s.main,i=s.short_name?s.short_name:null,m=(c=c&&c.length>0?c+" ":c).match(/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g),u=g.b.getAsset("1.3.0"),p=s.market?s.market:u?u.get("symbol"):"LLC";"bitasset"in e&&e.bitasset.is_prediction_market&&(p=(p=g.b.getAsset(e.bitasset.options.short_backing_asset))?p.get("symbol"):u.get("symbol")),e.symbol===u.get("symbol")&&(p="USD"),m&&m.length&&m.forEach(function(e){var t='<a target="_blank" rel="noopener noreferrer" href="'+e+'">'+e+"</a>";c=c.replace(e,t)});var _=h.a.replaceName(t),f=_.name,E=_.prefix;return r.a.createElement("div",{style:{overflow:"visible"}},r.a.createElement(d.a,{path:"assets/"+e.symbol,alt_path:"assets/Asset",section:"summary",symbol:(E||"")+f,description:c,issuer:n,hide_issuer:"true"}),i?r.a.createElement("p",null,i):null,r.a.createElement("button",{className:"btn large inverted marketw3c-btn"},r.a.createElement(l.b,{to:"/market/"+e.symbol+"_"+p},r.a.createElement(o.a,{content:"exchange.market"})," ",r.a.createElement("span",null,e.symbol," / ",p))))}},{key:"renderSummary",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options,n=b.a.getFlagBooleans(e.options.flags,this.props.asset.has("bitasset_data_id")),l=Object.keys(n),s=t?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.current_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(m.a,{amount:t.current_supply,asset:e.id})," ")):null,i=t?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.stealth_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(m.a,{amount:t.confidential_supply,asset:e.id})," ")):null,u=n.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.market_fee"})," "),r.a.createElement("td",null," ",a.market_fee_percent/100," % ")):null,_=n.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.max_market_fee"})," "),r.a.createElement("td",null," ",r.a.createElement(m.a,{amount:+a.max_market_fee,asset:e.id})," ")):null;return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},r.a.createElement(p.a,{name:e.symbol})),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.asset_type"})," "),r.a.createElement("td",null," ",this._assetType(e)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.summary.issuer"})," "),r.a.createElement("td",null," ",r.a.createElement(c.a,{account:e.issuer})," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.assets.precision"})," "),r.a.createElement("td",null," ",e.precision," ")),s,i,u,_)),this.renderFlagIndicators(n,l))}},{key:"renderPriceFeed",value:function(e,t){var a=r.a.createElement(o.a,{content:"explorer.asset.price_feed.title"}),n=e.bitasset;if(!("current_feed"in n))return r.a.createElement("div",{header:a});var l=n.current_feed,s=n.options.force_settlement_delay_sec,c=n.options.force_settlement_offset_percent,i=this.getGlobalSettlementPrice();return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},a),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.settlement_price"})," "),r.a.createElement("td",null," ",this.formattedPrice(l.settlement_price)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.maintenance_collateral_ratio"})," "),r.a.createElement("td",null," ",l.maintenance_collateral_ratio/10,"%"," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.maximum_short_squeeze_ratio"})," "),r.a.createElement("td",null," ",l.maximum_short_squeeze_ratio/10,"%"," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.global_settlement_price"})," "),r.a.createElement("td",null," ",i||"-"," ")))),r.a.createElement("table",{className:"table-blocks__item__table",style:{marginTop:"2rem"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.settlement_delay"})," "),r.a.createElement("td",null," ",r.a.createElement(E,{time:s})," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed.force_settlement_offset"})," "),r.a.createElement("td",null," ",c/100,"% ")))))}},{key:"renderFeePool",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options;return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},N.a.translate("explorer.asset.fee_pool.title")),r.a.createElement("table",{className:"table-blocks__item__table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.fee_pool.core_exchange_rate"})," "),r.a.createElement("td",null," ",this.formattedPrice(a.core_exchange_rate)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.fee_pool.pool_balance"})," "),r.a.createElement("td",null," ",t?r.a.createElement(m.a,{asset:"1.3.0",amount:t.fee_pool}):null," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"})," "),r.a.createElement("td",null," ",t?r.a.createElement(m.a,{asset:e.id,amount:t.accumulated_fees}):null," ")))),r.a.createElement(O.a,{asset:e.symbol,funderAccountName:this.props.currentAccount,hideBalance:!0}))}},{key:"renderPermissions",value:function(e){var t=e.options,a=b.a.getFlagBooleans(e.options.issuer_permissions,this.props.asset.has("bitasset_data_id")),n=Object.keys(a),l=a.charge_market_fee?r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.permissions.max_market_fee"})," "),r.a.createElement("td",null," ",r.a.createElement(m.a,{amount:+t.max_market_fee,asset:e.id})," ")):null,s=r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(o.a,{content:"explorer.asset.permissions.max_supply"})," "),r.a.createElement("td",null," ",r.a.createElement(m.a,{amount:+t.max_supply,asset:e.id})," "));a.white_list&&r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.blacklist_authorities"}),":  ",this.renderAuthorityList(t.blacklist_authorities),r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.blacklist_markets"}),":  ",this.renderMarketList(e,t.blacklist_markets),r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.whitelist_authorities"}),":  ",this.renderAuthorityList(t.whitelist_authorities),r.a.createElement("br",null),r.a.createElement(o.a,{content:"explorer.asset.permissions.whitelist_markets"}),":  ",this.renderMarketList(e,t.whitelist_markets));return r.a.createElement("div",{className:"table-blocks__item"},r.a.createElement("h5",{className:"table-blocks__item__heading"},N.a.translate("explorer.asset.permissions.title")),r.a.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},r.a.createElement("tbody",null,l,s)),this.renderPermissionIndicators(a,n))}},{key:"getMarginPositions",value:function(){var e=this.state.sortDirection,t={name:function(t,a){var n=g.b.getAccount(t.borrower,!1);n&&(n=n.get("name"));var r=g.b.getAccount(a.borrower,!1);return r&&(r=r.get("name")),n>r?e?1:-1:n<r?e?-1:1:0},price:function(t,a){return(e?1:-1)*(t.call_price.toReal()-a.call_price.toReal())},collateral:function(t,a){return(e?1:-1)*(a.getCollateral().getAmount()-t.getCollateral().getAmount())},debt:function(t,a){return(e?1:-1)*(a.amountToReceive().getAmount()-t.amountToReceive().getAmount())},ratio:function(t,a){return(e?1:-1)*(t.getRatio()-a.getRatio())}};return this.state.callOrders.sort(t[this.state.marginTableSort])}},{key:"getGlobalSettlementPriceFromSorted",value:function(e){if(console.log("global settlement sorted called"),!e||e.length<=0)return console.log("length array 0 passed in"),null;console.log("sortedCallOrders exists according to sorted get globa");var t=e[0],a=t.amountToReceive().getAmount(),n=t.getCollateral().getAmount();return r.a.createElement(u.a,{base_amount:n,base_asset:t.call_price.base.asset_id,quote_amount:a,quote_asset:t.call_price.quote.asset_id})}},{key:"getGlobalSettlementPrice",value:function(){if(!this.state.callOrders)return null;this.state.callOrders;for(var e=null,t=null,a=this.state.callOrders.length,n=0;n<a;n++){var l=this.state.callOrders[n];null==e?(e=l,t=l.getRatio()):l.getRatio()<t&&(t=l.getRatio(),e=l)}if(null==e)return console.log("couldn't find the least col short"),null;var s=e.amountToReceive().getAmount(),o=e.getCollateral().getAmount();return r.a.createElement(u.a,{base_amount:o,base_asset:e.call_price.base.asset_id,quote_amount:s,quote_asset:e.call_price.quote.asset_id})}},{key:"renderPriceFeedData",value:function(e,t){var a=e.bitasset;if(!("feeds"in a)||0==a.feeds.length||a.is_prediction_market)return null;var n=(new Date).getTime(),l=new Date(n-1e3*e.bitasset.options.feed_lifetime_sec),s=a.feeds;if(!(s=s.filter(function(e){return new Date(e[1][0])>l}).sort(function(e,t){return new Date(t[1][0])-new Date(e[1][0])})).length)return null;for(var i=[],p=s[0][1][1].settlement_price,d=s[0][1][1].core_exchange_rate,b=r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{textAlign:"left"}}," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.publisher"})," "),r.a.createElement("th",null,r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.settlement_price"}),r.a.createElement("br",null),"(",this.formattedPrice(p,!1,!0),")"),r.a.createElement("th",null,r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.core_exchange_rate"}),r.a.createElement("br",null),"(",this.formattedPrice(d,!1,!0),")"),r.a.createElement("th",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.maintenance_collateral_ratio"})," "),r.a.createElement("th",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.maximum_short_squeeze_ratio"})," "),r.a.createElement("th",null," ",r.a.createElement(o.a,{content:"explorer.asset.price_feed_data.published"})," "))),h=0;h<s.length;h++){var f=s[h],E=f[0],g=new Date(f[1][0]+"Z"),y=f[1][1].settlement_price,k=f[1][1].core_exchange_rate,x=f[1][1].maintenance_collateral_ratio/10+"%",O=f[1][1].maximum_short_squeeze_ratio/10+"%";i.push(r.a.createElement("tr",{key:E},r.a.createElement("td",null," ",r.a.createElement(c.a,{account:E})," "),r.a.createElement("td",{style:{textAlign:"right"}},this.formattedPrice(y,!0)),r.a.createElement("td",{style:{textAlign:"right"}}," ",this.formattedPrice(k,!0)," "),r.a.createElement("td",{style:{textAlign:"right"}}," ",x),r.a.createElement("td",{style:{textAlign:"right"}}," ",O),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(_.a,{time:g}))))}var w=r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"name"),style:{textAlign:"left"}},r.a.createElement(o.a,{content:"transaction.borrower"})),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"collateral")},r.a.createElement(o.a,{content:"transaction.collateral"}),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(m.a,{amount:this.state.callOrders[0].getCollateral().getAmount(),asset:this.state.callOrders[0].getCollateral().asset_id,hide_amount:!0})," ",")"):null),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"debt")},r.a.createElement(o.a,{content:"transaction.borrow_amount"}),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(m.a,{amount:this.state.callOrders[0].amountToReceive().getAmount(),asset:this.state.callOrders[0].amountToReceive().asset_id,hide_amount:!0})," ",")"):null),r.a.createElement("th",{style:{paddingRight:10},className:"clickable"},r.a.createElement("span",{onClick:this._toggleSortOrder.bind(this,"price")},r.a.createElement(o.a,{content:"exchange.call"})),this.state.callOrders.length?r.a.createElement("span",null," (",r.a.createElement(u.a,{base_amount:this.state.callOrders[0].call_price.base.amount,base_asset:this.state.callOrders[0].call_price.base.asset_id,quote_amount:this.state.callOrders[0].call_price.quote.amount,quote_asset:this.state.callOrders[0].call_price.quote.asset_id,hide_value:!0,noPopOver:!0}),")"):null),r.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"ratio")},r.a.createElement(o.a,{content:"borrow.coll_ratio"})))),A=t.map(function(e){return r.a.createElement("tr",{className:"margin-row",key:e.id},r.a.createElement("td",null,r.a.createElement(c.a,{account:e.borrower})),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(m.a,{amount:e.getCollateral().getAmount(),asset:e.getCollateral().asset_id,hide_asset:!0})),r.a.createElement("td",{style:{textAlign:"right"}},r.a.createElement(m.a,{amount:e.amountToReceive().getAmount(),asset:e.amountToReceive().asset_id,hide_asset:!0})),r.a.createElement("td",{style:{textAlign:"right",paddingRight:10}},r.a.createElement(u.a,{base_amount:e.call_price.base.amount,base_asset:e.call_price.base.asset_id,quote_amount:e.call_price.quote.amount,quote_asset:e.call_price.quote.asset_id,hide_symbols:!0})),r.a.createElement("td",{className:e.getStatus(),style:{textAlign:"right"}},e.getRatio().toFixed(3)))});return r.a.createElement("div",{className:"grid-block"},r.a.createElement("div",{className:"grid-content no-padding"},r.a.createElement("div",{className:""},r.a.createElement(v.b,{defaultActiveTab:0,segmented:!1,setting:"bitassetDataTabs"},r.a.createElement(v.a,{title:"explorer.asset.price_feed_data.title"},r.a.createElement("div",{className:"responsive-table"},r.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},b,r.a.createElement("tbody",null,i)))),r.a.createElement(v.a,{title:"explorer.asset.margin_positions.title"},r.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},w,r.a.createElement("tbody",null,A)))))))}},{key:"render",value:function(){var e=this.props.asset.toJS(),t=this.getMarginPositions(),a="bitasset"in e?this.renderPriceFeed(e,t):null;"bitasset"in e&&this.renderPriceFeedData(e,t);return r.a.createElement("div",{className:"content",style:{margin:20}},r.a.createElement("h2",{className:"content__heading"},r.a.createElement(S.a,{showIcon:!0,asset:e.id})),this.renderAboutBox(e,this.props.asset),r.a.createElement("div",{className:"table-blocks"},this.renderSummary(e),a||this.renderPermissions(e),this.renderFeePool(e),a?this.renderPermissions(e):null))}}]),t}();L=Object(A.connect)(L,{listenTo:function(){return[w.a]},getProps:function(){y.Apis.instance().chain_id;return{currentAccount:w.a.getState().currentAccount||w.a.getState().passwordAccount}}}),L=Object(i.a)(L,{propNames:["backingAsset"]});var J=function(e){function t(){return T(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return D(t,r.a.Component),q(t,[{key:"render",value:function(){if(null===this.props.asset)return r.a.createElement(x.default,{subtitle:"asset_not_found_subtitle"});var e=this.props.asset.has("bitasset")?this.props.asset.getIn(["bitasset","options","short_backing_asset"]):"1.3.0";return r.a.createElement(L,j({},this.props,{backingAsset:e}))}}]),t}();J=Object(i.a)(J,{withDynamic:!0});var z=function(e){function t(){return T(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return D(t,r.a.Component),q(t,[{key:"render",value:function(){var e=this.props.params.symbol.toUpperCase();return r.a.createElement(J,j({},this.props,{asset:e}))}}]),t}();t.default=z}}]);