(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{7817:function(e,t,a){"use strict";a.r(t),a.d(t,"AccountAssetCreate",function(){return F}),a.d(t,"BitAssetOptions",function(){return O});var s=a(0),n=a.n(s),i=a(1),r=a.n(i),l=a(8),o=a.n(l),c=a(74),u=a(67),m=a(5),_=a(4),p=a(17),d=a(3),h=a.n(d),b=a(7),g=a(13),E=a(108),f=a(79),v=a.n(f),y=a(46),k=a(101),x=a(51),A=a(80),C=a.n(A),B=a(42),N=a(2),w=a.n(N),P=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}();function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var R=new v.a(C.a.GRAPHENE_MAX_SHARE_SUPPLY),O=function(e){function t(e){U(this,t);var a=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={backingAsset:e.backingAsset.get("symbol"),error:null},a}return S(t,n.a.Component),P(t,[{key:"_onInputBackingAsset",value:function(e){this.setState({backingAsset:e.toUpperCase(),error:null})}},{key:"_onFoundBackingAsset",value:function(e){e&&("1.3.0"===e.get("id")||e.get("bitasset_data_id")&&!e.getIn(["bitasset","is_prediction_market"])?e.get("precision")!==parseInt(this.props.assetPrecision,10)?this.setState({error:h.a.translate("account.user_issued_assets.error_precision",{asset:this.props.assetSymbol})}):this.props.onUpdate("short_backing_asset",e.get("id")):this.setState({error:h.a.translate("account.user_issued_assets.error_invalid")}))}},{key:"render",value:function(){var e=this.props.bitasset_opts,t=this.state.error;return n.a.createElement("div",{className:"small-12 grid-content"},n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.feed_lifetime_sec"}),n.a.createElement("input",{type:"number",value:e.feed_lifetime_sec/60,onChange:this.props.onUpdate.bind(this,"feed_lifetime_sec")})),n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.minimum_feeds"}),n.a.createElement("input",{type:"number",value:e.minimum_feeds,onChange:this.props.onUpdate.bind(this,"minimum_feeds")})),n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.force_settlement_delay_sec"}),n.a.createElement("input",{type:"number",value:e.force_settlement_delay_sec/60,onChange:this.props.onUpdate.bind(this,"force_settlement_delay_sec")})),n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.force_settlement_offset_percent"}),n.a.createElement("input",{type:"number",value:e.force_settlement_offset_percent/C.a.GRAPHENE_1_PERCENT,onChange:this.props.onUpdate.bind(this,"force_settlement_offset_percent")})),n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.maximum_force_settlement_volume"}),n.a.createElement("input",{type:"number",value:e.maximum_force_settlement_volume/C.a.GRAPHENE_1_PERCENT,onChange:this.props.onUpdate.bind(this,"maximum_force_settlement_volume")})),n.a.createElement("div",{className:"grid-block no-margin small-12"},n.a.createElement(E.a,{label:"account.user_issued_assets.backing",onChange:this._onInputBackingAsset.bind(this),asset:this.state.backingAsset,assetInput:this.state.backingAsset,tabIndex:1,style:{width:"100%",paddingRight:"10px"},onFound:this._onFoundBackingAsset.bind(this)}),t?n.a.createElement("div",{className:"content-block has-error"},t):null))}}]),t}();O.propTypes={backingAsset:b.a.ChainAsset.isRequired,isUpdate:w.a.bool},O.defaultProps={isUpdate:!1},O=Object(g.a)(O);var F=function(e){function t(e){U(this,t);var a=I(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=a.resetState(e),a}return S(t,n.a.Component),P(t,[{key:"resetState",value:function(e){m.a.get_asset_precision(4),m.a.get_asset_precision(e.core.get("precision"));var t=this._getPermissions({isBitAsset:!1}),a=t.flagBooleans,s=t.permissionBooleans;_.b.getAsset("1.3.0").get("symbol");return{update:{symbol:"",precision:4,max_supply:1e5,max_market_fee:0,market_fee_percent:0,description:{main:""}},errors:{max_supply:null},isValid:!0,flagBooleans:a,permissionBooleans:s,isBitAsset:!1,is_prediction_market:!1,core_exchange_rate:{quote:{asset_id:null,amount:1},base:{asset_id:"1.3.0",amount:1}},bitasset_opts:{feed_lifetime_sec:86400,minimum_feeds:7,force_settlement_delay_sec:86400,force_settlement_offset_percent:1*C.a.GRAPHENE_1_PERCENT,maximum_force_settlement_volume:20*C.a.GRAPHENE_1_PERCENT,short_backing_asset:"1.3.0"},marketInput:""}}},{key:"_getPermissions",value:function(e){return{flagBooleans:y.a.getFlagBooleans(0,e.isBitAsset),permissionBooleans:y.a.getFlagBooleans("all",e.isBitAsset)}}},{key:"_createAsset",value:function(e){e.preventDefault();var t=this.state,a=t.update,s=t.flagBooleans,n=t.permissionBooleans,i=t.core_exchange_rate,r=t.isBitAsset,l=t.is_prediction_market,o=t.bitasset_opts,u=this.props.account,m=y.a.getFlags(s,r),_=y.a.getPermissions(n,r);this.state.marketInput!==a.description.market&&(a.description.market="");var p=JSON.stringify(a.description);c.a.createAsset(u.get("id"),a,m,_,i,r,l,o,p).then(function(e){console.log("... AssetActions.createAsset(account_id, update)",u.get("id"),a,m,_)})}},{key:"_hasChanged",value:function(){return!m.a.are_equal_shallow(this.state,this.resetState(this.props))}},{key:"_reset",value:function(e){e.preventDefault(),this.setState(this.resetState(this.props))}},{key:"_forcePositive",value:function(e){return parseFloat(e)<0?"0":e}},{key:"_onUpdateDescription",value:function(e,t){var a=this.state.update,s=!0;switch(e){case"condition":if(t.target.value.length>60)return void(s=!1);a.description[e]=t.target.value;break;case"short_name":if(t.target.value.length>32)return void(s=!1);a.description[e]=t.target.value;break;case"market":a.description[e]=t;break;case"visible":a.description[e]=!a.description[e];break;default:a.description[e]=t.target.value}s&&(this.forceUpdate(),this._validateEditFields(a))}},{key:"onChangeBitAssetOpts",value:function(e,t){var a=this.state.bitasset_opts;switch(e){case"force_settlement_offset_percent":case"maximum_force_settlement_volume":a[e]=parseFloat(t.target.value)*C.a.GRAPHENE_1_PERCENT;break;case"minimum_feeds":a[e]=parseInt(t.target.value,10);break;case"feed_lifetime_sec":case"force_settlement_delay_sec":console.log(t.target.value,parseInt(60*parseFloat(t.target.value),10)),a[e]=parseInt(60*parseFloat(t.target.value),10);break;case"short_backing_asset":a[e]=t;break;default:a[e]=t.target.value}this.forceUpdate()}},{key:"_onUpdateInput",value:function(e,t){var a=this.state,s=a.update,n=a.errors,i=!1,r=m.a.get_asset_precision(this.state.update.precision),l=t.target,o=l.selectionStart,c=l.value;switch(e){case"market_fee_percent":s[e]=this._forcePositive(l.value);break;case"max_market_fee":if(new v.a(c).times(r).gt(R))return n.max_market_fee="The number you tried to enter is too large",this.setState({errors:n});l.value=m.a.limitByPrecision(l.value,this.state.update.precision),s[e]=l.value;break;case"precision":s[e]=this._forcePositive(l.value);break;case"max_supply":i=!0,new RegExp(/[[:digit:]]/).test(l.value)||(l.value=l.value.replace(/[^0-9.]/g,"")),"."==l.value.charAt(0)&&(l.value="0."),l.value.charAt(l.value.length)!=l.value.search(".")&&l.value.substr(1),l.value=m.a.limitByPrecision(l.value,this.state.update.precision),s[e]=l.value;break;case"symbol":i=!0;var u=l.value.toUpperCase(),p=new RegExp("^[.A-Z]+$");if(""!==u&&!p.test(u))break;_.b.getAsset(u),s[e]=this._forcePositive(u);break;default:s[e]=l.value}this.setState({update:s},function(){if(i){var t=o-(c.length-s[e].length);l.setSelectionRange(t,t)}}),this._validateEditFields(s)}},{key:"_validateEditFields",value:function(e){var t={max_supply:null};t.symbol=_.d.is_valid_symbol_error(e.symbol),_.b.getAsset(e.symbol)&&(t.symbol=h.a.translate("account.user_issued_assets.exists"));try{t.max_supply=e.max_supply<=0?h.a.translate("account.user_issued_assets.max_positive"):new v.a(e.max_supply).times(Math.pow(10,e.precision)).gt(R)?h.a.translate("account.user_issued_assets.too_large"):null}catch(e){console.log("err:",e),t.max_supply=h.a.translate("account.user_issued_assets.too_large")}var a=!t.symbol&&!t.max_supply;this.setState({isValid:a,errors:t})}},{key:"_onFlagChange",value:function(e){var t=this.state.flagBooleans;t[e]=!t[e],this.setState({flagBooleans:t})}},{key:"_onPermissionChange",value:function(e){var t=this.state.permissionBooleans;t[e]=!t[e],this.setState({permissionBooleans:t})}},{key:"_onInputCoreAsset",value:function(e,t){"quote"===e?this.setState({quoteAssetInput:t}):"base"===e&&this.setState({baseAssetInput:t})}},{key:"_onFoundCoreAsset",value:function(e,t){if(t){var a=this.state.core_exchange_rate;a[e].asset_id=t.get("id"),this.setState({core_exchange_rate:a}),this._validateEditFields({max_supply:this.state.max_supply,core_exchange_rate:a})}}},{key:"_onInputMarket",value:function(e){this.setState({marketInput:e})}},{key:"_onFoundMarketAsset",value:function(e){e&&this._onUpdateDescription("market",e.get("symbol"))}},{key:"_onCoreRateChange",value:function(e,t){var a=void 0,s=void 0;if("quote"===e)a=m.a.limitByPrecision(t.target.value,this.state.update.precision),s=null;else{if(!(t&&"amount"in t))return;a=""==t.amount?"0":m.a.limitByPrecision(t.amount.toString().replace(/,/g,""),this.props.core.get("precision")),s=t.asset.get("id")}this.state.core_exchange_rate[e]={amount:a,asset_id:s},this.forceUpdate()}},{key:"_onToggleBitAsset",value:function(){this.state.update;this.state.isBitAsset=!this.state.isBitAsset,this.state.isBitAsset||(this.state.is_prediction_market=!1);var e=this._getPermissions(this.state),t=e.flagBooleans,a=e.permissionBooleans;this.state.flagBooleans=t,this.state.permissionBooleans=a,this.forceUpdate()}},{key:"_onTogglePM",value:function(){this.state.is_prediction_market=!this.state.is_prediction_market,this.state.update.precision=this.props.core.get("precision"),this.state.core_exchange_rate.base.asset_id=this.props.core.get("id"),this.forceUpdate()}},{key:"render",value:function(){var e=this.props,t=e.globalObject,a=e.core,s=this.state,i=s.errors,l=s.isValid,c=s.update,_=s.flagBooleans,d=s.permissionBooleans,b=s.core_exchange_rate,g=s.is_prediction_market,f=s.isBitAsset,v=s.bitasset_opts,y=c.symbol.length,A="N/A";3===y?A=n.a.createElement(p.a,{amount:Object(B.c)("asset_create",["symbol3"],t),asset:"1.3.0"}):4===y?A=n.a.createElement(p.a,{amount:Object(B.c)("asset_create",["symbol4"],t),asset:"1.3.0"}):y>4&&(A=n.a.createElement(p.a,{amount:Object(B.c)("asset_create",["long_symbol"],t),asset:"1.3.0"}));var C=[],N=function(e,t,a){return n.a.createElement("table",{key:"table_"+e,className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{border:"none",width:"80%"}},n.a.createElement(r.a,{content:"account.user_issued_assets."+e}),":"),n.a.createElement("td",{style:{border:"none"}},n.a.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:t},n.a.createElement("input",{type:"checkbox",checked:a}),n.a.createElement("label",null))))))};for(var w in d)d[w]&&"charge_market_fee"!==w&&C.push(N(w,this._onFlagChange.bind(this,w),_[w]));C.push(N("visible",this._onUpdateDescription.bind(this,"visible"),!c.description.visible&&!1===c.description.visible));var P=[];for(var U in d)P.push(n.a.createElement("table",{key:"table_"+U,className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{border:"none",width:"80%"}},n.a.createElement(r.a,{content:"account.user_issued_assets."+U}),":"),n.a.createElement("td",{style:{border:"none"}},n.a.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:this._onPermissionChange.bind(this,U)},n.a.createElement("input",{type:"checkbox",checked:d[U],onChange:function(){}}),n.a.createElement("label",null)))))));var I=n.a.createElement("div",null,n.a.createElement("button",{className:"btn large outline",onClick:this._reset.bind(this),value:h.a.translate("account.perm.reset")},n.a.createElement(r.a,{content:"account.perm.reset"})),n.a.createElement("button",{className:"btn large inverted",disabled:!l,onClick:this._createAsset.bind(this)},n.a.createElement(r.a,{content:"header.create_asset"}))),S=n.a.createElement("div",{className:"small-12 grid-content"},n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.symbol"}),n.a.createElement("input",{type:"text",value:c.symbol,onChange:this._onUpdateInput.bind(this,"symbol")})),i.symbol?n.a.createElement("p",{className:"grid-content has-error"},i.symbol):null,n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.max_supply"})," ",c.symbol?n.a.createElement("span",null,"(",c.symbol,")"):null,n.a.createElement("input",{type:"text",value:c.max_supply,onChange:this._onUpdateInput.bind(this,"max_supply")})),i.max_supply?n.a.createElement("p",{className:"grid-content has-error"},i.max_supply):null,n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.decimals"}),n.a.createElement("input",{min:"0",max:"8",step:"1",type:"range",value:c.precision,onChange:this._onUpdateInput.bind(this,"precision")})),n.a.createElement("p",null,c.precision),n.a.createElement("div",{style:{marginBottom:10},className:"txtlabel cancel"},n.a.createElement(r.a,{content:"account.user_issued_assets.precision_warning"})),n.a.createElement("table",{className:"table",style:{width:"inherit"}},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{border:"none"}},n.a.createElement(r.a,{content:"account.user_issued_assets.mpa"}),":"),n.a.createElement("td",{style:{border:"none"}},n.a.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:this._onToggleBitAsset.bind(this)},n.a.createElement("input",{type:"checkbox",checked:f}),n.a.createElement("label",null)))))),f?n.a.createElement("table",{className:"table",style:{width:"inherit"}},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{border:"none"}},n.a.createElement(r.a,{content:"account.user_issued_assets.pm"}),":"),n.a.createElement("td",{style:{border:"none"}},n.a.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:this._onTogglePM.bind(this)},n.a.createElement("input",{type:"checkbox",checked:g}),n.a.createElement("label",null)))))):null,n.a.createElement(r.a,{component:"h3",content:"account.user_issued_assets.core_exchange_rate"}),n.a.createElement("label",null,n.a.createElement("div",{className:"grid-block no-margin"},i.quote_asset?n.a.createElement("p",{className:"grid-content has-error"},i.quote_asset):null,i.base_asset?n.a.createElement("p",{className:"grid-content has-error"},i.base_asset):null,n.a.createElement("div",{className:"grid-block no-margin small-12 medium-6"},n.a.createElement("div",{className:"amount-selector",style:{width:"100%",paddingRight:"10px"}},n.a.createElement(r.a,{component:"label",content:"account.user_issued_assets.quote"}),n.a.createElement("div",{className:"inline-label"},n.a.createElement("input",{type:"text",placeholder:"0.0",onChange:this._onCoreRateChange.bind(this,"quote"),value:b.quote.amount})))),n.a.createElement("div",{className:"grid-block no-margin small-12 medium-6"},n.a.createElement(x.a,{label:"account.user_issued_assets.base",amount:b.base.amount,onChange:this._onCoreRateChange.bind(this,"base"),asset:b.base.asset_id,assets:[b.base.asset_id],placeholder:"0.0",tabIndex:1,style:{width:"100%",paddingLeft:"10px"}}))),n.a.createElement("div",null,n.a.createElement("h5",null,n.a.createElement(r.a,{content:"exchange.price"}),n.a.createElement("span",null,":"," ",m.a.format_number(m.a.get_asset_price(b.quote.amount*m.a.get_asset_precision(c.precision),{precision:c.precision},b.base.amount*m.a.get_asset_precision(a),a),2+(parseInt(c.precision,10)||8))),n.a.createElement("span",null," ",c.symbol,"/",a.get("symbol"))))),n.a.createElement("div",null,n.a.createElement(r.a,{content:"account.user_issued_assets.cer_warning_1",component:"label",className:"has-error"}),n.a.createElement(r.a,{content:"account.user_issued_assets.cer_warning_2",component:"p"})),n.a.createElement("p",null,n.a.createElement(r.a,{content:"account.user_issued_assets.approx_fee"}),": ",A)),R=n.a.createElement("div",{className:"small-12 grid-content"},n.a.createElement(r.a,{component:"label",content:"account.user_issued_assets.description"}),n.a.createElement("label",null,n.a.createElement("textarea",{style:{height:"7rem"},rows:"1",value:c.description.main,onChange:this._onUpdateDescription.bind(this,"main")})),n.a.createElement(r.a,{component:"label",content:"account.user_issued_assets.short"}),n.a.createElement("label",null,n.a.createElement("input",{type:"text",rows:"1",value:c.description.short_name,onChange:this._onUpdateDescription.bind(this,"short_name")})),n.a.createElement(r.a,{component:"label",content:"account.user_issued_assets.market"}),n.a.createElement(E.a,{label:"account.user_issued_assets.name",onChange:this._onInputMarket.bind(this),asset:this.state.marketInput,assetInput:this.state.marketInput,style:{width:"100%",paddingRight:"10px"},onFound:this._onFoundMarketAsset.bind(this)}),g?n.a.createElement("div",null,n.a.createElement(r.a,{component:"h3",content:"account.user_issued_assets.condition"}),n.a.createElement("label",null,n.a.createElement("input",{type:"text",rows:"1",value:c.description.condition,onChange:this._onUpdateDescription.bind(this,"condition")})),n.a.createElement(r.a,{component:"h3",content:"account.user_issued_assets.expiry"}),n.a.createElement("label",null,n.a.createElement("input",{type:"date",value:c.description.expiry,onChange:this._onUpdateDescription.bind(this,"expiry")}))):null),F=n.a.createElement("div",{className:"small-12 grid-content"},n.a.createElement("div",{style:{maxWidth:800}},n.a.createElement(u.a,{path:"components/AccountAssetCreate",section:"permissions"})),P),j=n.a.createElement("div",{className:"small-12 grid-content"},n.a.createElement("div",{style:{maxWidth:800}},n.a.createElement(u.a,{path:"components/AccountAssetCreate",section:"flags"})),d.charge_market_fee?n.a.createElement("div",null,n.a.createElement(r.a,{component:"h3",content:"account.user_issued_assets.market_fee"}),n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{border:"none",width:"80%"}},n.a.createElement(r.a,{content:"account.user_issued_assets.charge_market_fee"}),":"),n.a.createElement("td",{style:{border:"none"}},n.a.createElement("div",{className:"switch",style:{marginBottom:"10px"},onClick:this._onFlagChange.bind(this,"charge_market_fee")},n.a.createElement("input",{type:"checkbox",checked:_.charge_market_fee}),n.a.createElement("label",null)))))),n.a.createElement("div",{className:o()({disabled:!_.charge_market_fee})},n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.market_fee"})," ","(%)",n.a.createElement("input",{type:"number",value:c.market_fee_percent,onChange:this._onUpdateInput.bind(this,"market_fee_percent")})),n.a.createElement("label",null,n.a.createElement(r.a,{content:"account.user_issued_assets.max_market_fee"})," ","(",c.symbol,")",n.a.createElement("input",{type:"number",value:c.max_market_fee,onChange:this._onUpdateInput.bind(this,"max_market_fee")})),i.max_market_fee?n.a.createElement("p",{className:"grid-content has-error"},i.max_market_fee):null)):null,n.a.createElement("h3",null,n.a.createElement(r.a,{content:"account.user_issued_assets.flags"})),C),T=n.a.createElement(O,{bitasset_opts:v,onUpdate:this.onChangeBitAssetOpts.bind(this),backingAsset:v.short_backing_asset,assetPrecision:c.precision,assetSymbol:c.symbol}),q=[{title:"account.user_issued_assets.primary",content:S},{title:"account.user_issued_assets.description",content:R},{title:"account.permissions",content:F},{title:"account.user_issued_assets.flags",content:j}];return f&&q.splice(2,0,{title:"account.user_issued_assets.bitasset_opts",content:T}),n.a.createElement("div",{className:"create-asset-container"},n.a.createElement("h2",{className:"content__heading"},h.a.translate("header.create_asset")),n.a.createElement(k.a,{items:q,dashboardTabsClass:"dashboard__tabs permissions small",buttons:I}))}}]),t}();F.propTypes={core:b.a.ChainAsset.isRequired,globalObject:b.a.ChainObject.isRequired},F.defaultProps={globalObject:"2.0.0",core:"1.3.0"},F=Object(g.a)(F)}}]);