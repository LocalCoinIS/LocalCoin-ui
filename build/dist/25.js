(window.webpackJsonp=window.webpackJsonp||[]).push([[25,43],{325:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a(13),l=a(8),s=a(1),i=a.n(s),u=a(29),p=a(335),d=(a(11),a(32)),h=a(147),m=a.n(h),f=a(9),g=a(110),y=a(149),b=a(43),_=a(2),v=a.n(_),w=a(22),E=a.n(w),k=a(40),A=a(3),S=a.n(A),C=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=a.getInitialState(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),C(t,[{key:"getInitialState",value:function(){return{open:!1}}},{key:"show",value:function(){var e=this;this.setState({open:!0},function(){E.a.publish(e.props.id,"open")})}},{key:"onClose",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({open:!1},function(){t&&E.a.publish(e.props.id,"close")})}},{key:"render",value:function(){return this.state.open?r.a.createElement(k.a,{id:this.props.id,overlay:!0,onClose:this.onClose.bind(this,!1)},r.a.createElement("div",{className:"grid-block vertical no-overflow"},r.a.createElement("div",{className:"content-block registration-types",style:{textAlign:"center",textTransform:"none"}},r.a.createElement(l.b,{className:"registration-type",to:"/create-account/password"},r.a.createElement("div",{className:"registration-type__heading"},v.a.translate("account.create_account_type.cloud_wallet.head")),r.a.createElement("span",{className:"registration-type__icon"},r.a.createElement("svg",{fill:"#abbfd9",height:"50px","enable-background":"new 0 0 548.176 548.176",viewBox:"0 0 548.176 548.176",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m524.183 297.065c-15.985-19.893-36.265-32.691-60.815-38.399 7.81-11.993 11.704-25.126 11.704-39.399 0-20.177-7.139-37.401-21.409-51.678-14.273-14.272-31.498-21.411-51.675-21.411-18.271 0-34.071 5.901-47.39 17.703-11.225-27.028-29.075-48.917-53.529-65.667-24.46-16.746-51.728-25.125-81.802-25.125-40.349 0-74.802 14.279-103.353 42.83-28.553 28.544-42.825 62.999-42.825 103.351 0 2.856.191 6.945.571 12.275-22.078 10.279-39.876 25.838-53.389 46.686-13.512 20.836-20.271 43.824-20.271 68.949 0 35.211 12.517 65.333 37.544 90.359 25.028 25.033 55.15 37.548 90.362 37.548h310.636c30.259 0 56.096-10.715 77.512-32.121 21.413-21.412 32.121-47.249 32.121-77.515-.003-25.694-8.001-48.499-23.992-68.386z"}))),r.a.createElement("ul",{className:"registration-type__list"},r.a.createElement("li",{className:"registration-type__choose"},v.a.translate("account.create_account_type.cloud_wallet.feature_1_1"),r.a.createElement("span",{className:"red"},v.a.translate("account.create_account_type.cloud_wallet.feature_1_2"))),r.a.createElement("li",null,v.a.translate("account.create_account_type.cloud_wallet.feature_2")),r.a.createElement("li",null,v.a.translate("account.create_account_type.cloud_wallet.feature_3")),r.a.createElement("li",null,v.a.translate("account.create_account_type.cloud_wallet.feature_4")))),r.a.createElement(l.b,{className:"registration-type",to:"/create-account/wallet"},r.a.createElement("div",{className:"registration-type__heading"},v.a.translate("account.create_account_type.local_wallet.head")),r.a.createElement("span",{className:"registration-type__icon"},r.a.createElement("svg",{fill:"#abbfd9",height:"37px",viewBox:"0 0 414.8 312.8",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m360.4 0h-312.8a47.6 47.6 0 0 0 -47.6 47.6v231.2a34 34 0 0 0 34 34h312.8a34 34 0 0 0 34-34v-91.46h-64.94a41.53 41.53 0 0 1 -41.41-41.41v-18.57a41.53 41.53 0 0 1 41.41-41.36h64.94v-24.8a27.2 27.2 0 0 0 -27.2-27.2h-312.8a6.8 6.8 0 1 1 0-13.6h312.8a40.8 40.8 0 0 1 40.8 40.8v209.1a47.71 47.71 0 0 0 20.4-39.1v-176.8a54.41 54.41 0 0 0 -54.4-54.4z"}),r.a.createElement("path",{d:"m378.19 134.34a5.35 5.35 0 0 0 -4-1.69h-1.89v-11.66a26.56 26.56 0 0 0 -7.84-19.17 25.69 25.69 0 0 0 -37.3.1 26.56 26.56 0 0 0 -7.74 19.21v11.66h-1.89a5.37 5.37 0 0 0 -4 1.71 5.7 5.7 0 0 0 -1.64 4.13l.09 35a5.72 5.72 0 0 0 1.67 4.13 5.39 5.39 0 0 0 4 1.69l56.66-.15a5.43 5.43 0 0 0 4-1.71 5.69 5.69 0 0 0 1.64-4.14l-.09-35a5.69 5.69 0 0 0 -1.67-4.11zm-17.19-1.66-30.22.08v-11.66a15.17 15.17 0 0 1 4.4-11 14.79 14.79 0 0 1 21.36-.06 15.2 15.2 0 0 1 4.46 11z"}))),r.a.createElement("ul",{className:"registration-type__list"},r.a.createElement("li",{className:"registration-type__choose"},v.a.translate("account.create_account_type.local_wallet.feature_1_1"),r.a.createElement("span",{className:"green"},v.a.translate("account.create_account_type.local_wallet.feature_1_2"))),r.a.createElement("li",null,v.a.translate("account.create_account_type.local_wallet.feature_2")),r.a.createElement("li",null,v.a.translate("account.create_account_type.local_wallet.feature_3"))))))):null}}]),t}();O.contextTypes={router:S.a.object};var x=O,N=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var j=function(e){var t=e.flag,a=e.width,n=void 0===a?50:a,o=e.height,c=void 0===o?50:o;return r.a.createElement("img",{height:c,width:n,src:"/language-dropdown/"+t.toUpperCase()+".png"})},I=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.updateStep=function(e){a.setState({step:e})},a.state={step:1,locales:f.a.getState().defaults.locale,currentLocale:f.a.getState().settings.get("locale")},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),N(t,[{key:"componentDidUpdate",value:function(){var e=c.a.getMyAccounts(),t=r.a.Children.count(this.props.children);this.props.router&&Array.isArray(e)&&0!==e.length&&0===t&&this.props.router.push("/account/"+this.props.currentAccount)}},{key:"componentWillMount",value:function(){var e=this;Object(p.a)(function(t){e.setState({incognito:t})})}},{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=this,t=a(2),n=r.a.Children.count(this.props.children),o=this,c=r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{updateStep:o.updateStep,currentAccount:o.props.currentAccount})}),s=r.a.createElement(m.a,null,r.a.createElement(m.a.Button,{title:"",style:{width:"64px"}},r.a.createElement("a",{style:{padding:"1rem",border:"none"},className:"button arrow-down"},r.a.createElement(j,{flag:this.state.currentLocale}))),r.a.createElement(m.a.Content,null,r.a.createElement("ul",{className:"no-first-element-top-border"},this.state.locales.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("a",{onClick:function(a){a.preventDefault(),y.a.switchLocale(t),e.setState({currentLocale:t})}},r.a.createElement("div",{className:"table-cell"},r.a.createElement(j,{width:"20",height:"20",flag:t})),r.a.createElement("div",{className:"table-cell",style:{paddingLeft:10}},r.a.createElement(i.a,{content:"languages."+t}))))}))));return r.a.createElement("div",{className:"grid-block align-center"},r.a.createElement("div",{className:"grid-block shrink vertical"},r.a.createElement("div",{className:"grid-content shrink text-center account-creation"},r.a.createElement("div",null,r.a.createElement("img",{src:b.logoLight,height:"50px",width:"50px"})),0==n?null:r.a.createElement("div",null,r.a.createElement(i.a,{content:2==this.state.step?"header.backup_your_brainKey":"header.create_account",component:"h4"})),1==n?null:r.a.createElement("div",null,r.a.createElement(i.a,{content:"account.intro_text_title",component:"h4",wallet_name:Object(g.f)()}),r.a.createElement(i.a,{unsafe:!0,content:"account.intro_text_1",component:"p"}),r.a.createElement("div",{className:"shrink text-center"},r.a.createElement("div",{className:"grp-menu-item overflow-visible account-drop-down"},r.a.createElement("div",{className:"grp-menu-item overflow-visible",style:{margin:"0 auto"},"data-intro":t.translate("walkthrough.language_flag")},s)))),n?null:r.a.createElement("div",{className:"grid-block account-login-options"},r.a.createElement(l.b,{id:"account_login_button",to:"/create-account/wallet",className:"button primary","data-intro":t.translate("walkthrough.create_cloud_wallet"),onClick:function(t){t.preventDefault(),e.refs.registration_modal.show()}},v.a.translate("header.create_account")),r.a.createElement("span",{id:"account_login_button2",className:"button primary outline",style:{color:"#00195b"},onClick:function(){d.a.unlock.defer()}},v.a.translate("header.unlock_short"))),n?null:r.a.createElement("div",{className:"additional-account-options"},r.a.createElement("h5",{style:{textAlign:"center"}},r.a.createElement(u.a,{string:"account.optional.formatter",keys:[{type:"link",value:"/settings/restore",translation:"account.optional.restore_link",dataIntro:t.translate("walkthrough.restore_account"),arg:"restore_link"},{type:"link",value:"/create-account/password",translation:"account.optional.restore_form",dataIntro:t.translate("walkthrough.create_local_wallet"),arg:"restore_form"}]}))),c)),r.a.createElement(x,{id:"registration-modal",ref:"registration_modal"}))}}]),t}();t.default=Object(o.connect)(I,{listenTo:function(){return[c.a]},getProps:function(){return{currentAccount:c.a.getState().currentAccount||c.a.getState().passwordAccount}}})},5234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=a(5),s=a(1),i=a.n(s),u=a(18),p=a(9),d=a(51),h=a(10),m=a(14),f=a(11),g=a(25),y=a(12),b=a(4),_=a(97),v=a(13),w=a(2),E=a.n(w),k=a(16),A=a(3),S=a.n(A),C=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j=function(e){function t(e){O(this,t);var a=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),n=e.viewSettings.get("marketLookupInput"),r=n?n.split(":"):[null];r[0],2===r.length&&r[1];return a.state={inverseSort:e.viewSettings.get("dashboardSortInverse",!0),sortBy:e.viewSettings.get("dashboardSort","star"),dashboardFilter:e.viewSettings.get("dashboardFilter","")},a}return N(t,r.a.Component),C(t,[{key:"shouldComponentUpdate",value:function(e,t){return!l.a.are_equal_shallow(e.accounts,this.props.accounts)||e.isContactsList!==this.props.isContactsList||e.showMyAccounts!==this.props.showMyAccounts||e.width!==this.props.width||e.showIgnored!==this.props.showIgnored||e.locked!==this.props.locked||e.passwordAccount!==this.props.passwordAccount||!l.a.are_equal_shallow(e.starredAccounts,this.props.starredAccounts)||!l.a.are_equal_shallow(t,this.state)}},{key:"_onStar",value:function(e,t,a){a.preventDefault(),t?g.a.removeStarAccount(e):g.a.addStarAccount(e)}},{key:"_goAccount",value:function(e,t){this.context.router.push("/account/"+e),f.a.changeViewSetting({overviewTab:t})}},{key:"_createAccount",value:function(){this.context.router.push("/create-account/wallet")}},{key:"_onFilter",value:function(e){this.setState({dashboardFilter:e.target.value.toLowerCase()}),f.a.changeViewSetting({dashboardFilter:e.target.value.toLowerCase()})}},{key:"_setSort",value:function(e){var t=e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort;this.setState({sortBy:e,inverseSort:t}),f.a.changeViewSetting({dashboardSort:e,dashboardSortInverse:t})}},{key:"_onAddContact",value:function(e){g.a.addAccountContact(e)}},{key:"_onRemoveContact",value:function(e){g.a.removeAccountContact(e)}},{key:"_renderList",value:function(e,t){var a=this,n=this.props,o=n.width,s=n.starredAccounts,i=n.isContactsList,u=n.passwordAccount,p=this.state,d=p.dashboardFilter,h=p.sortBy,m=p.inverseSort,f=c.a.List();return e.filter(function(e){if(!e)return!1;var t=e.get("name"),n=v.a.isMyAccount(e)||t===u;return!!i||n===a.props.showMyAccounts}).filter(function(e){return!!e&&-1!==e.get("name").toLowerCase().indexOf(d)}).sort(function(e,t){switch(h){case"star":return function(e,t,a,n){var r=e.get("name"),o=t.get("name"),c=n.has(r),s=n.has(o);return c&&!s?a?-1:1:s&&!c?a?1:-1:r>o?a?1:-1:r<o?a?-1:1:l.a.sortText(r,o,!a)}(e,t,m,s);case"name":return l.a.sortText(e.get("name"),t.get("name"),m)}}).map(function(e){if(e){var n={},c={},l={};f=f.clear();var p=e.get("name"),d=e.get("lifetime_referrer_name")===p;e.get("orders")&&e.get("orders").forEach(function(e,t){var a=b.b.getObject(e);if(a){var n=a.getIn(["sell_price","base","asset_id"]);l[n]?l[n]+=parseInt(a.get("for_sale"),10):l[n]=parseInt(a.get("for_sale"),10)}}),e.get("call_orders")&&e.get("call_orders").forEach(function(e,t){var a=b.b.getObject(e);if(a){var r=a.getIn(["call_price","base","asset_id"]);n[r]?n[r]+=parseInt(a.get("collateral"),10):n[r]=parseInt(a.get("collateral"),10);var o=a.getIn(["call_price","quote","asset_id"]);c[o]?c[o]+=parseInt(a.get("debt"),10):c[o]=parseInt(a.get("debt"),10)}});var h=e.get("balances");e.get("balances")&&h.forEach(function(e){var t=b.b.getObject(e);if(!t||!t.get("balance"))return null;f=f.push(e)});var m=v.a.isMyAccount(e)||p===u,g=s.has(p),w=g?"gold-star":"grey-star";return r.a.createElement("tr",{key:p},r.a.createElement("td",{className:"clickable",onClick:a._onStar.bind(a,p,g)},r.a.createElement(y.a,{className:w,name:"fi-star",title:"icons.fi_star.account"})),i?t&&r.a.createElement("td",{onClick:a._onAddContact.bind(a,p)},r.a.createElement(y.a,{name:"plus-circle",title:"icons.plus_circle.add_contact"}))||r.a.createElement("td",{onClick:a._onRemoveContact.bind(a,p)},r.a.createElement(y.a,{name:"minus-circle",title:"icons.minus_circle.remove_contact"})):null,r.a.createElement("td",{style:{textAlign:"left"}},e.get("id")),r.a.createElement("td",{style:{textAlign:"left",paddingLeft:10},onClick:a._goAccount.bind(a,p,0),className:"clickable"+(m?" my-account":"")},r.a.createElement("span",{className:d?"lifetime":""},p)),r.a.createElement("td",{className:"clickable",onClick:a._goAccount.bind(a,p,1),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:[],openOrders:l})),o>=750?r.a.createElement("td",{className:"clickable",onClick:a._goAccount.bind(a,p,2),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:[],collateral:n})):null,o>=1200?r.a.createElement("td",{className:"clickable",onClick:a._goAccount.bind(a,p,2),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:[],debt:c})):null,r.a.createElement("td",{className:"clickable",onClick:a._goAccount.bind(a,p,0),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:f,collateral:n,debt:c,openOrders:l})))}})}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.showIgnored,n=e.isContactsList,o=this.state.dashboardFilter,c=this._renderList(this.props.accounts),l=this._renderList(this.props.ignoredAccounts,!0),s=n?E.a.translate("explorer.accounts.filter_contacts"):E.a.translate("explorer.accounts.filter");s+="...";var u=!!k.a.getWallet();return r.a.createElement("div",{style:this.props.style},this.props.compact?null:r.a.createElement("section",{style:{paddingTop:"1rem",paddingLeft:"2rem"}},r.a.createElement("input",{placeholder:s,style:{maxWidth:"20rem",display:"inline-block"},type:"text",value:o,onChange:this._onFilter.bind(this)}),u&&!n?r.a.createElement("div",{onClick:this._createAccount.bind(this),style:{display:"inline-block",marginLeft:5,marginBottom:"1rem"},className:"button small"},r.a.createElement(i.a,{content:"header.create_account"})):null,l&&l.length?r.a.createElement("div",{onClick:this.props.onToggleIgnored,style:{display:"inline-block",float:"right",marginRight:"20px"},className:"button small"},r.a.createElement(i.a,{content:"account."+(this.props.showIgnored?"hide_ignored":"show_ignored")})):null),r.a.createElement("table",{className:"table table-hover dashboard-table",style:{fontSize:"0.85rem"}},this.props.compact?null:r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:this._setSort.bind(this,"star"),className:"clickable"},r.a.createElement(y.a,{className:"grey-star",name:"fi-star",title:"icons.fi_star.sort_accounts"})),n?r.a.createElement("th",null,r.a.createElement(y.a,{name:"user",title:"icons.user.account"})):null,r.a.createElement("th",{style:{textAlign:"left"}},"ID"),r.a.createElement("th",{style:{textAlign:"left",paddingLeft:10},onClick:this._setSort.bind(this,"name"),className:"clickable"},r.a.createElement(i.a,{content:"header.account"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(i.a,{content:"account.open_orders"})),t>=750?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(i.a,{content:"account.as_collateral"})):null,t>=1200?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(i.a,{content:"transaction.borrow_amount"})):null,r.a.createElement("th",{style:{textAlign:"right",marginRight:20}},r.a.createElement(i.a,{content:"account.total_value"})))),r.a.createElement("tbody",null,c,a&&l.length?r.a.createElement("tr",{className:"dashboard-table--hiddenAccounts",style:{backgroundColor:"transparent"},key:"hidden"},r.a.createElement("td",{colSpan:"8"},E.a.translate("account.hidden_accounts_row"),":")):null,a&&l)))}}]),t}();j.contextTypes={router:S.a.object.isRequired},j.propTypes={accounts:h.a.ChainAccountsList.isRequired,ignoredAccounts:h.a.ChainAccountsList},j.defaultProps={width:2e3,compact:!1},j=Object(m.a)(j);var I=function(e){function t(){return O(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return N(t,r.a.Component),C(t,[{key:"render",value:function(){return r.a.createElement(j,this.props)}}]),t}(),L=Object(u.connect)(I,{listenTo:function(){return[p.a,d.a,v.a]},getProps:function(){return{locked:d.a.getState().locked,starredAccounts:v.a.getState().starredAccounts,viewSettings:p.a.getState().viewSettings}}}),T=a(164),P=a(49),R=a(325),D=a(28),M=a(38),z=a(42),F=a.n(z),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},V=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function W(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var H=function(e){function t(){return q(this,t),U(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return W(t,r.a.Component),V(t,[{key:"render",value:function(){return r.a.createElement(F.a,{stores:[v.a,p.a,D.a],inject:{contacts:function(){return v.a.getState().accountContacts},myActiveAccounts:function(){return v.a.getState().myActiveAccounts},myHiddenAccounts:function(){return v.a.getState().myHiddenAccounts},accountsReady:function(){return v.a.getState().accountsLoaded&&v.a.getState().refsLoaded},passwordAccount:function(){return v.a.getState().passwordAccount},lowVolumeMarkets:function(){return D.a.getState().lowVolumeMarkets},currentEntry:p.a.getState().viewSettings.get("dashboardEntry","accounts")}},r.a.createElement(J,this.props))}}]),t}(),J=function(e){function t(e){q(this,t);var a=U(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={width:null,showIgnored:!1,currentEntry:e.currentEntry},a._setDimensions=a._setDimensions.bind(a),a}return W(t,r.a.Component),V(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return e.myActiveAccounts!==this.props.myActiveAccounts||e.contacts!==this.props.contacts||e.ignoredAccounts!==this.props.ignoredAccounts||e.passwordAccount!==this.props.passwordAccount||t.width!==this.state.width||e.accountsReady!==this.props.accountsReady||t.showIgnored!==this.state.showIgnored||t.currentEntry!==this.state.currentEntry}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_onToggleIgnored",value:function(){this.setState({showIgnored:!this.state.showIgnored})}},{key:"_onSwitchType",value:function(e){this.setState({currentEntry:e}),f.a.changeViewSetting({dashboardEntry:e})}},{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,a=e.myHiddenAccounts,n=e.accountsReady,o=e.passwordAccount,l=this.state,s=l.width,i=l.showIgnored;o&&!t.has(o)&&(t=t.add(o));var u=t.toArray().sort();o&&-1===u.indexOf(o)&&u.push(o);var p=a.toArray().sort(),d=t.size+a.size+(o?1:0);if(!n)return r.a.createElement(P.a,null);if(!d)return r.a.createElement(R.default,null);var h=this.props.contacts.toArray();return r.a.createElement("div",{ref:"wrapper",className:"grid-block page-layout vertical"},r.a.createElement("div",{ref:"container",className:"tabs-container generic-bordered-box"},r.a.createElement(M.b,{setting:"accountTab",className:"account-tabs",defaultActiveTab:1,segmented:!1,tabsClass:"account-overview no-padding bordered-header content-block"},r.a.createElement(M.a,{title:"account.accounts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(L,{accounts:c.a.List(u),ignoredAccounts:c.a.List(p),width:s,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:i,showMyAccounts:!0})))),r.a.createElement(M.a,{title:"account.contacts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(L,{accounts:h,passwordAccount:o,ignoredAccounts:c.a.List(p),width:s,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:i,isContactsList:!0})))),r.a.createElement(M.a,{title:"account.recent"},r.a.createElement(T.a,{accountsList:t,limit:10,compactView:!1,fullHeight:!0,showFilters:!0,dashboard:!0})))))}}]),t}();t.default=function(e){return r.a.createElement(H,B({},e,{onlyAccounts:!0}))}}}]);