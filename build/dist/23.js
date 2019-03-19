(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,47],{234:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(10),c=n(16),s=n(9),i=n(1),u=n.n(i),l=n(50),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.a.Component),p(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"page-404"},a.a.createElement("div",{className:"page-404-container"},a.a.createElement("div",{className:"page-404-logo"},a.a.createElement("img",{src:l.logoLight,height:"50px",width:"50px",alt:"Logo"})),a.a.createElement("div",{className:"page-404-title"},a.a.createElement(u.a,{content:"page404.page_not_found_title"})),a.a.createElement("div",{className:"page-404-subtitle"},a.a.createElement(u.a,{content:"page404."+this.props.subtitle})),a.a.createElement("div",{className:"page-404-button-back"},a.a.createElement(r.b,{to:"/"},a.a.createElement(u.a,{component:"button",className:"btn large inverted flat",content:"page404.home"})))))}}]),e}();f.defaultProps={subtitle:"page_not_found_subtitle"},e.default=f=Object(c.connect)(f,{listenTo:function(){return[s.a]},getProps:function(){return{theme:s.a.getState().settings.get("themes")}}})},762:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=(n(10),n(16)),c=(n(117),n(23),n(14)),s=n(9),i=n(11),u=(n(21),n(187),n(86)),l=(n(12),n(1),n(3),n(15),n(64)),p=(n(34),n(44)),f=(n(8),n(103),n(39),n(19)),h=(n(26),n(90),n(354),n(4)),g=(n(6),n(2)),d=n.n(g),b=(n(50),function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}());var v=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),a=n.location.pathname,r=o.props.currentAccount;return o.state={active:a,showSubMenu:r},o._toggleSubMenu=o._toggleSubMenu.bind(o),o.unlisten=null,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.a.Component),b(e,[{key:"componentWillMount",value:function(){var t=this;this.unlisten=this.context.router.listen(function(e,n){n||t.unlisten&&t.state.active!==e.pathname&&t.setState({active:e.pathname})})}},{key:"componentWillUnmount",value:function(){this.unlisten&&(this.unlisten(),this.unlisten=null)}},{key:"shouldComponentUpdate",value:function(t,e){return t.myActiveAccounts!==this.props.myActiveAccounts||t.currentAccount!==this.props.currentAccount||t.passwordLogin!==this.props.passwordLogin||t.locked!==this.props.locked||t.current_wallet!==this.props.current_wallet||t.lastMarket!==this.props.lastMarket||t.starredAccounts!==this.props.starredAccounts||t.currentLocale!==this.props.currentLocale||e.active!==this.state.active||e.hiddenAssets!==this.props.hiddenAssets||e.dropdownActive!==this.state.dropdownActive||e.dropdownSubmenuActive!==this.state.dropdownSubmenuActive||e.accountsListDropdownActive!==this.state.accountsListDropdownActive||t.height!==this.props.height||e.showSubMenu!==this.state.showSubMenu}},{key:"_onNavigate",value:function(t,e){e.preventDefault(),"/accounts"==t&&i.a.changeViewSetting({dashboardEntry:"accounts"}),this.context.router.push(t)}},{key:"_toggleSubMenu",value:function(t){t.preventDefault(),this.setState({showSubMenu:!this.state.showSubMenu})}},{key:"render",value:function(){this.state.active;var t=this.props,e=t.currentAccount,n=t.starredAccounts,o=t.passwordLogin,r=t.passwordAccount,s=c.a.getMyAccounts(),i=h.b.getAccount(e);!!i&&c.a.isMyAccount(i),this.props.contacts.has(e),f.Apis.instance()&&f.Apis.instance().chain_id;if(n.size){for(var u=s.length-1;u>=0;u--)n.has(s[u])||s.splice(u,1);n.forEach(function(t){-1===s.indexOf(t.name)&&s.push(t.name)})}c.a.getMyAccounts().length;return e?a.a.createElement("div",{className:"sidebar"},"test"):null}}]),e}();v.contextTypes={location:d.a.object.isRequired,router:d.a.object.isRequired},e.default=Object(r.connect)(v,{listenTo:function(){return[c.a,l.a,p.a,s.a,u.a]},getProps:function(){var t=f.Apis.instance().chain_id;return{backedCoins:u.a.getState().backedCoins,myActiveAccounts:c.a.getState().myActiveAccounts,currentAccount:c.a.getState().currentAccount||c.a.getState().passwordAccount,passwordAccount:c.a.getState().passwordAccount,locked:l.a.getState().locked,current_wallet:p.a.getState().current_wallet,lastMarket:s.a.getState().viewSettings.get("lastMarket"+(t?"_"+t.substr(0,8):"")),starredAccounts:c.a.getState().starredAccounts,passwordLogin:s.a.getState().settings.get("passwordLogin"),currentLocale:s.a.getState().settings.get("locale"),hiddenAssets:s.a.getState().hiddenAssets,settings:s.a.getState().settings,locales:s.a.getState().defaults.locale,contacts:c.a.getState().accountContacts}}})},7819:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(23),c=n(14),s=n(9),i=n(64),u=n(86),l=n(7),p=n(13),f=n(16),h=n(63),g=(n(6),n(234)),d=(n(229),n(228),n(762),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}),b=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var w=function(t){function e(){return v(this,e),m(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,a.a.Component),b(e,[{key:"componentDidMount",value:function(){this.props.account&&(r.a.setCurrentAccount.defer(this.props.account.get("name")),h.a.getPossibleFees(this.props.account,"transfer"))}},{key:"componentWillReceiveProps",value:function(t){if(t.account){var e=t.account.get("name"),n=this.props.account&&this.props.account.get("name");this.props.account&&e===n||(r.a.setCurrentAccount.defer(e),h.a.getPossibleFees(t.account,"transfer"))}}},{key:"render",value:function(){var t=this.props,e=(t.myActiveAccounts,t.account_name,t.searchAccounts,t.settings,t.wallet_locked,t.account);t.hiddenAssets;if(!e)return a.a.createElement(g.default,null);c.a.isMyAccount(e);return a.a.createElement("div",{className:"content account-page"},"test")}}]),e}();w.propTypes={account:l.a.ChainAccount.isRequired},w.defaultProps={account:"props.params.account_name"},w=Object(p.a)(w,{show_loader:!0});var A=function(t){function e(){return v(this,e),m(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return y(e,a.a.Component),b(e,[{key:"render",value:function(){var t=this.props.routeParams.account_name;return a.a.createElement(w,d({},this.props,{account_name:t}))}}]),e}();e.default=Object(f.connect)(A,{listenTo:function(){return[c.a,s.a,i.a,u.a]},getProps:function(){return{myActiveAccounts:c.a.getState().myActiveAccounts,searchAccounts:c.a.getState().searchAccounts,settings:s.a.getState().settings,hiddenAssets:s.a.getState().hiddenAssets,wallet_locked:i.a.getState().locked,viewSettings:s.a.getState().viewSettings,backedCoins:u.a.getState().backedCoins,bridgeCoins:u.a.getState().bridgeCoins,gatewayDown:u.a.getState().down}}})}}]);