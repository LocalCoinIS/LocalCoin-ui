(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{5212:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(1),l=n.n(r),o=n(15),i=n(4),s=n(5),u=n(48),m=n(19),p=(n(38),n(2)),b=n.n(p),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){function t(){return f(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,c.a.Component),d(t,[{key:"_onClaim",value:function(e,t){var n=this;t.preventDefault(),u.a.claimVestingBalance(this.props.account.id,this.props.vb,e).then(function(){"function"==typeof n.props.handleChanged&&n.props.handleChanged()})}},{key:"render",value:function(){var e=this.props.vb;if(!this.props.vb)return null;var t=void 0,n=void 0,a=void 0,r=void 0,u=void 0;return e&&(u=e.balance.amount,t=i.b.getAsset(e.balance.asset_id),a=e.policy[1].coin_seconds_earned,r=0===(n=e.policy[1].vesting_seconds)?1:a/(n*u)),t&&u?c.a.createElement("div",{className:"table-blocks__item"},c.a.createElement(l.a,{component:"h5",className:"table-blocks__item__heading",content:"account.vesting.balance_number",id:e.id}),c.a.createElement("table",{className:"table-blocks__item__table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(l.a,{content:"account.member.cashback"})),c.a.createElement("td",null,c.a.createElement(o.a,{amount:e.balance.amount,asset:e.balance.asset_id}))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(l.a,{content:"account.member.earned"})),c.a.createElement("td",null,s.a.format_number(s.a.get_asset_amount(a/86400,t),0)," ",c.a.createElement(l.a,{content:"account.member.coindays"}))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(l.a,{content:"account.member.required"})),c.a.createElement("td",null,s.a.format_number(s.a.get_asset_amount(e.balance.amount*n/86400,t),0)," ",c.a.createElement(l.a,{content:"account.member.coindays"}))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(l.a,{content:"account.member.remaining"})),c.a.createElement("td",null,s.a.format_number(n*(1-r)/86400||0,2)," days")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(l.a,{content:"account.member.available"})),c.a.createElement("td",null,s.a.format_number(100*r,2),"% /"," ",c.a.createElement(o.a,{amount:r*e.balance.amount,asset:t.get("id")}))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},c.a.createElement("button",{onClick:this._onClaim.bind(this,!1),className:"btn large inverted"},c.a.createElement(l.a,{content:"account.member.claim"}))))))):null}}]),t}(),E=function(e){function t(){f(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={vbs:null},e}return v(t,c.a.Component),d(t,[{key:"componentWillMount",value:function(){this.retrieveVestingBalances.call(this,this.props.account.get("id"))}},{key:"componentWillUpdate",value:function(e){var t=e.account.get("id");t!==this.props.account.get("id")&&this.retrieveVestingBalances.call(this,t)}},{key:"retrieveVestingBalances",value:function(e){var t=this;e=e||this.props.account.get("id"),m.Apis.instance().db_api().exec("get_vesting_balances",[e]).then(function(e){t.setState({vbs:e})}).catch(function(e){console.log("error:",e)})}},{key:"render",value:function(){var e=this,t=this.state.vbs;if(!t||!this.props.account||!this.props.account.get("vesting_balances"))return null;var n=this.props.account.toJS(),a=t.map(function(t){if(t.balance.amount)return c.a.createElement(_,{key:t.id,vb:t,account:n,handleChanged:e.retrieveVestingBalances.bind(e)})}).filter(function(e){return!!e});return c.a.createElement("div",{className:"vesting-layout"},c.a.createElement("h2",{className:"content__heading"},b.a.translate("account.vesting.title")),c.a.createElement("p",{className:"content__description"},b.a.translate("account.vesting.explain")),a.length?c.a.createElement("div",{className:"table-blocks"},a):c.a.createElement("h4",{style:{paddingTop:"1rem"}},c.a.createElement(l.a,{content:"account.vesting.no_balances"})))}}]),t}();E.VestingBalance=_,t.default=E}}]);