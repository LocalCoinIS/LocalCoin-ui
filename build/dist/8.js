(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{127:function(e,t,n){"use strict";n.d(t,"b",function(){return j}),n.d(t,"a",function(){return C});var r=n(0),a=n.n(r),o=n(17),s=n(7),i=n(13),l=n(49),c=n(5),p=n(16),u=n(32),m=n(1),h=n.n(m),d=n(3),f=n.n(d),v=n(39),y=n.n(v),b=n(272),_=n(40),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function k(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=function(e){function t(e){return A(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return O(t,b["a"]),E(t,[{key:"componentDidMount",value:function(){y.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in a)return a.value;var s=a.get;return void 0!==s?s.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||!c.a.are_equal_shallow(e.pulsate,this.props.pulsate)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,a=e.fullPrecision,o=e.marketStats,s=e.coreAsset;return _.a.convertValue(t,n,r,o,s,a)}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,s=e.fullPrecision,i=k(e,["amount","toAsset","fromAsset","fullPrecision"]),l=n.get("id"),p=n.get("symbol");s||(t=c.a.get_asset_amount(t,r));var u=this.getValue();return u||0===u?a.a.createElement(o.a,g({noPrefix:!0,amount:u,asset:l,decimalOffset:-1!==p.indexOf("BTC")?4:this.props.fullDecimals?0:this.props.noDecimals?n.get("precision"):n.get("precision")-2},i)):a.a.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":f.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},a.a.createElement(h.a,{content:"account.no_price"}))}}]),t}();x.defaultProps={fullPrecision:!0,noDecimals:!1,fullDecimals:!1,hide_asset:!1},x=Object(l.a)(x,{propNames:["toAsset","fromAsset","coreAsset"],defaultProps:{toAsset:"1.3.0",coreAsset:"1.3.0"}});var j=function(e){function t(){return A(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,a.a.Component),E(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=k(e,["refCallback"]);return a.a.createElement(x,g({},n,{ref:t}))}}]),t}();j=Object(p.connect)(j,{listenTo:function(){return[u.a]},getProps:function(){return{marketStats:u.a.getState().allMarketStats}}});var C=function(e){function t(){return A(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,a.a.Component),E(t,[{key:"render",value:function(){var e=this.props,t=e.balance,n=k(e,["balance"]),r=!!t.getIn(["balance","amount"]),o=Number(r?t.getIn(["balance","amount"]):t.get("balance")),s=r?t.getIn(["balance","asset_id"]):t.get("asset_type");return isNaN(o)?a.a.createElement("span",null,"--"):a.a.createElement(j,g({amount:o,fromAsset:s,noDecimals:!0},n))}}]),t}();C.propTypes={balance:s.a.ChainObject.isRequired},C=Object(i.a)(C,{keep_updating:!0})},330:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),s=n.n(o),i=n(5),l=n(7),c=n(17),p=n(46),u=n(13),m=n(127),h=n(12),d=n(2),f=n.n(d),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var y=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),v(t,[{key:"onApprove",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))||e.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"onReject",value:function(){var e=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&e.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))&&e.push(this.props.worker.get("vote_for")),this.props.onChangeVotes([],e)}},{key:"render",value:function(){var e=this.props.rank,t=this.props.worker.toJS(),n=t.total_votes_for-t.total_votes_against,r=!!this.props.vote_ids.has(t.vote_for)||!this.props.vote_ids.has(t.vote_against)&&null,o=0;t.daily_pay<this.props.rest?o=100:this.props.rest>0&&(o=this.props.rest/t.daily_pay*100);var l=s.a.localize(new Date(t.work_begin_date+"Z"),{type:"date",format:"short_custom"}),u=s.a.localize(new Date(t.work_end_date+"Z"),{type:"date",format:"short_custom"}),d=new Date,f=new Date(t.work_end_date+"Z")<=d,v=new Date(t.work_begin_date+"Z")<=d,y=!f&&n<this.props.voteThreshold||!v;return a.a.createElement("tr",{className:r?"":"unsupported"},f?null:a.a.createElement("td",{style:{textAlign:"right",paddingRight:10,paddingLeft:0}},e),a.a.createElement("td",{className:"worker-id",style:{textAlign:"left"}},t.id),a.a.createElement("td",{className:"worker-name",style:{textAlign:"left"}},a.a.createElement("div",{className:"inline-block",style:{paddingRight:5,position:"relative",top:-1}},a.a.createElement("a",{style:{visibility:t.url&&-1!==t.url.indexOf(".")?"visible":"hidden"},href:t.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(h.a,{name:"share",title:"icons.share"}))),a.a.createElement("div",{"data-tip":t.name,className:"inline-block tooltip"},t.name,a.a.createElement("br",null),a.a.createElement(p.a,{account:t.worker_account}))),a.a.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},a.a.createElement(c.a,{amount:n,asset:"1.3.0",decimalOffset:5,hide_asset:!0})),y?a.a.createElement("td",{style:{textAlign:"right"}},a.a.createElement(c.a,{amount:Math.max(0,this.props.voteThreshold-n),asset:"1.3.0",hide_asset:!0,decimalOffset:5})):null,a.a.createElement("td",null,l," - ",u),f||y?null:a.a.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},i.a.format_number(o,2),"%"),a.a.createElement("td",{style:{textAlign:"right"},className:"hide-column-small"},a.a.createElement(m.b,{hide_asset:!0,fromAsset:"1.3.0",toAsset:this.props.preferredUnit,amount:t.daily_pay})),f||y?null:a.a.createElement("td",{style:{textAlign:"right"}},this.props.rest<=0?"0.00":a.a.createElement(m.b,{hide_asset:!0,fromAsset:"1.3.0",toAsset:this.props.preferredUnit,amount:this.props.rest})),a.a.createElement("td",{className:"clickable",onClick:this.props.proxy?function(){}:this[r?"onReject":"onApprove"].bind(this)},this.props.proxy?a.a.createElement(h.a,{name:"locked",title:"icons.locked.action"}):a.a.createElement(h.a,{name:r?"checkmark-circle":"minus-circle",title:r?"icons.checkmark_circle.approved":"icons.minus_circle.disapproved"})))}}]),t}();y.propTypes={worker:l.a.ChainObject.isRequired,onAddVote:f.a.func,onRemoveVote:f.a.func,vote_ids:f.a.object},y.defaultProps={tempComponent:"tr"},t.a=Object(u.a)(y)},362:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(111),s=n(1),i=n.n(s),l=n(12),c=n(4),p=n(7),u=n(17),m=n(13),h=n(46),d=n(3),f=n.n(d),v=n(2),y=n.n(v),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function k(e,t){var n="",r=0,a=void 0;return"witness"===e?a=c.b.getWitnessById(t.get("id")):"committee"===e&&(a=c.b.getCommitteeMemberById(t.get("id"))),{url:n=a?a.get("url"):n,votes:r=a?a.get("total_votes"):r,id:a.get("id")}}var A=function(e){function t(){return _(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,a.a.Component),b(t,[{key:"shouldComponentUpdate",value:function(e){return e.account!==this.props.account||e.action!==this.props.action||e.isActive!==this.props.isActive||e.idx!==this.props.idx||e.proxy!==this.props.proxy}},{key:"onAction",value:function(e){this.props.onAction(e)}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.type,r=e.action,o=e.isActive,s=t.get("id"),c=k(n,t),p=c.url,m=c.votes,d=p&&p.length>0&&-1===p.indexOf("http")?"http://"+p:p,f="remove"===r;return a.a.createElement("tr",{className:f?"":"unsupported"},a.a.createElement("td",{style:{textAlign:"right"}},this.props.idx+1),a.a.createElement("td",{style:{textAlign:"left"}},a.a.createElement(h.a,{account:t.get("id")})),a.a.createElement("td",null,d&&-1!==d.indexOf(".")?a.a.createElement("a",{href:d,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(l.a,{name:"share",title:"icons.share"})):null),a.a.createElement("td",null,a.a.createElement(u.a,{amount:m,asset:"1.3.0",decimalOffset:5,hide_asset:!0})),a.a.createElement("td",null,a.a.createElement(i.a,{content:"account.votes."+(o?"active_short":"inactive")})),a.a.createElement("td",{style:{textAlign:"center"}},a.a.createElement(i.a,{content:"settings."+(f?"yes":"no")})),a.a.createElement("td",{className:this.props.proxy?"":"clickable",onClick:this.props.proxy?function(){}:this.onAction.bind(this,s)},this.props.proxy?a.a.createElement(l.a,{name:"locked",title:"icons.locked.action"}):a.a.createElement(l.a,{name:f?"checkmark-circle":"minus-circle",title:f?"icons.checkmark_circle.yes":"icons.minus_circle.no"})))}}]),t}();A.propTypes={account:y.a.object.isRequired,onAction:y.a.func.isRequired};var w=function(e){function t(e){_(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return E(t,a.a.Component),b(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then(function(e){return t.setState({error:e})})}}},{key:"onAddItem",value:function(e){if(e){this.setState({selected_item:null,item_name_input:"",error:null}),this.props.onAddItem(e.get("id"))}}},{key:"render",value:function(){var e=this;if(!this.props.items)return null;var t=this.props.items.filter(function(e){return!!e}).sort(function(t,n){var r=k(e.props.type,t).votes,a=k(e.props.type,n).votes;return r!==a?parseInt(a,10)-parseInt(r,10):t.get("name")>n.get("name")?1:t.get("name")<n.get("name")?-1:0}).map(function(t,n){var r=e.props.supported&&e.props.supported.includes(t.get("id"))?"remove":"add",o=e.props.active.includes(k(e.props.type,t).id);return a.a.createElement(A,{idx:n,key:t.get("name"),account:t,type:e.props.type,onAction:"add"===r?e.props.onAddItem:e.props.onRemoveItem,isSelected:-1!==e.props.items.indexOf(t),action:r,isActive:o,proxy:e.props.proxy})}),n=this.state.error;!n&&this.state.selected_item&&-1!==this.props.items.indexOf(this.state.selected_item)&&(n=f.a.translate("account.votes.already"));var r=["10%","20%","40%","20%","10%"];return a.a.createElement("div",null,this.props.withSelector?a.a.createElement("div",{className:"header-selector"},a.a.createElement(o.a,{style:{maxWidth:"600px"},label:this.props.label,error:n,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex})):null,this.props.title&&t.length?a.a.createElement("h4",null,this.props.title):null,t.length?a.a.createElement("div",{className:"dashboard__adaptive"},a.a.createElement("table",{className:"dashboard__table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:{textAlign:"right"}},"#"),a.a.createElement("th",{style:{textAlign:"left",maxWidth:r[1]}},a.a.createElement(i.a,{content:"account.votes.name"})),a.a.createElement("th",{style:{maxWidth:r[2]}},a.a.createElement(i.a,{content:"account.votes.about"})),a.a.createElement("th",{style:{maxWidth:r[3]}},a.a.createElement(i.a,{content:"account.votes.votes"})),a.a.createElement("th",{style:{maxWidth:r[4]}},a.a.createElement(i.a,{content:"account.votes.status.title"})),a.a.createElement("th",{style:{maxWidth:r[0]}},a.a.createElement(i.a,{content:"account.votes.supported"})),a.a.createElement("th",{style:{maxWidth:r[5]}},a.a.createElement(i.a,{content:"account.votes.toggle"})))),a.a.createElement("tbody",null,t))):null)}}]),t}();w.propTypes={items:p.a.ChainObjectsList,onAddItem:y.a.func.isRequired,onRemoveItem:y.a.func.isRequired,validateAccount:y.a.func,label:y.a.string.isRequired,placeholder:y.a.string,tabIndex:y.a.number,action:y.a.string,withSelector:y.a.bool},w.defaultProps={action:"remove",withSelector:!0,autosubscribe:!1},t.a=Object(m.a)(w)}}]);