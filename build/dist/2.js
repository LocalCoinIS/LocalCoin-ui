(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{762:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(10),i=n(16),o=(n(117),n(23),n(14)),r=n(9),u=n(11),l=(n(21),n(214)),d=n(86),p=(n(12),n(1),n(3)),h=n.n(p),m=(n(15),n(73)),b=(n(36),n(44)),g=n(8),_=n.n(g),f=(n(103),n(39),n(19)),v=(n(26),n(88)),A=(n(354),n(4)),w=(n(6),n(2)),k=n.n(w),S=(n(50),function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}());var y=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),s=n.location.pathname,c=a.props.currentAccount;return a.state={active:s,showSubMenu:c},a._toggleSubMenu=a._toggleSubMenu.bind(a),a.unlisten=null,a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.a.Component),S(e,[{key:"componentWillMount",value:function(){var t=this;this.unlisten=this.context.router.listen(function(e,n){n||t.unlisten&&t.state.active!==e.pathname&&t.setState({active:e.pathname})})}},{key:"componentWillUnmount",value:function(){this.unlisten&&(this.unlisten(),this.unlisten=null)}},{key:"shouldComponentUpdate",value:function(t,e){return t.myActiveAccounts!==this.props.myActiveAccounts||t.currentAccount!==this.props.currentAccount||t.passwordLogin!==this.props.passwordLogin||t.locked!==this.props.locked||t.current_wallet!==this.props.current_wallet||t.lastMarket!==this.props.lastMarket||t.starredAccounts!==this.props.starredAccounts||t.currentLocale!==this.props.currentLocale||e.active!==this.state.active||e.hiddenAssets!==this.props.hiddenAssets||e.dropdownActive!==this.state.dropdownActive||e.dropdownSubmenuActive!==this.state.dropdownSubmenuActive||e.accountsListDropdownActive!==this.state.accountsListDropdownActive||t.height!==this.props.height||e.showSubMenu!==this.state.showSubMenu}},{key:"_onNavigate",value:function(t,e){e.preventDefault(),"/accounts"==t&&u.a.changeViewSetting({dashboardEntry:"accounts"}),this.context.router.push(t)}},{key:"_toggleSubMenu",value:function(t){t.preventDefault(),this.setState({showSubMenu:!this.state.showSubMenu})}},{key:"render",value:function(){var t=this,e=this.state.active,n=this.props,a=n.currentAccount,i=n.starredAccounts,r=n.passwordLogin,u=n.passwordAccount,d=o.a.getMyAccounts(),p=A.b.getAccount(a);!!p&&o.a.isMyAccount(p),this.props.contacts.has(a),f.Apis.instance()&&f.Apis.instance().chain_id;if(i.size){for(var m=d.length-1;m>=0;m--)i.has(d[m])||d.splice(m,1);i.forEach(function(t){-1===d.indexOf(t.name)&&d.push(t.name)})}o.a.getMyAccounts().length;var b=function(t){var e=t.title,n=t.link,a=t.subLink,i=t.noBorder,o=t.isActive;a=!!a;var r=e;"string"==typeof r&&r.indexOf(".")>0&&(r=h.a.translate(r));var u=a?"sidebar__menu__sub__item":"sidebar__menu__item",l=a?"sidebar__menu__sub__link":"sidebar__menu__link";return s.a.createElement("li",{className:_()(u,{active:!!o},{noborder:!!i})},s.a.createElement(c.b,{className:l,to:n},r))};return a?s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"sidebar__qr"},s.a.createElement(v.a,{size:{height:150,width:150},account:a})),s.a.createElement("p",{className:"sidebar__descr"},h.a.translate("account.deposit_address")),s.a.createElement("span",{className:"sidebar__user"},s.a.createElement("b",null,a)),s.a.createElement("ul",{className:"sidebar__menu"},b({title:"header.dashboard",link:"/account/"+a,isActive:e==="/account/"+a}),b({title:"account.member.stats",link:"/account/"+a+"/member-stats",isActive:-1!==e.indexOf("/account/"+a+"/member-stats")}),b({title:"account.voting",link:"/account/"+a+"/voting",isActive:-1!==e.indexOf("/account/"+a+"/voting")}),null,s.a.createElement("li",{className:_()("sidebar__menu__item expand",{showsub:this.state.showSubMenu})},s.a.createElement("a",{className:"sidebar__menu__link",href:"#",onClick:this._toggleSubMenu},h.a.translate("account.advanced")),s.a.createElement("ul",{className:"sidebar__menu__sub"},b({title:"explorer.assets.title",link:"/account/"+a+"/assets",isActive:-1!==e.indexOf("/account/"+a+"/assets"),subLink:!0,noBorder:!0}),b({title:"account.permissions",link:"/account/"+a+"/permissions",isActive:-1!==e.indexOf("/account/"+a+"/permissions"),subLink:!0}),b({title:"account.whitelist.title",link:"/account/"+a+"/whitelist",isActive:-1!==e.indexOf("/account/"+a+"/whitelist"),subLink:!0}),b({title:"account.vesting.title",link:"/account/"+a+"/vesting",isActive:-1!==e.indexOf("/account/"+a+"/vesting"),subLink:!0}),b({title:"account.signedmessages.menuitem",link:"/account/"+a+"/signedmessages",isActive:-1!==e.indexOf("/account/"+a+"/signedmessages"),subLink:!0})))),s.a.createElement("button",{className:"btn large outline create-account",type:"button",onClick:this._onNavigate.bind(this,"/create-account/wallet")},h.a.translate("header.create_account")),s.a.createElement(l.a,{id:"send_modal_header",refCallback:function(e){e&&(t.send_modal=e)},from_name:a})):null}}]),e}();y.contextTypes={location:k.a.object.isRequired,router:k.a.object.isRequired},e.default=Object(i.connect)(y,{listenTo:function(){return[o.a,m.a,b.a,r.a,d.a]},getProps:function(){var t=f.Apis.instance().chain_id;return{backedCoins:d.a.getState().backedCoins,myActiveAccounts:o.a.getState().myActiveAccounts,currentAccount:o.a.getState().currentAccount||o.a.getState().passwordAccount,passwordAccount:o.a.getState().passwordAccount,locked:m.a.getState().locked,current_wallet:b.a.getState().current_wallet,lastMarket:r.a.getState().viewSettings.get("lastMarket"+(t?"_"+t.substr(0,8):"")),starredAccounts:o.a.getState().starredAccounts,passwordLogin:r.a.getState().settings.get("passwordLogin"),currentLocale:r.a.getState().settings.get("locale"),hiddenAssets:r.a.getState().hiddenAssets,settings:r.a.getState().settings,locales:r.a.getState().defaults.locale,contacts:o.a.getState().accountContacts}}})}}]);