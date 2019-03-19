(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(5),i=n(16),r=n(90),c=n(14),u=n(23),l=n(1),p=n.n(l),m=n(4),d=n(7),h=n(13),f=n(8),b=n.n(f),_=n(3),g=n.n(_),v=n(12),y=n(63),E=n(168),k=n(347),w=n(2),A=n.n(w),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var T=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={inputChanged:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),S(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.account,n=e.accountName;void 0===t&&(t=m.b.getAccount(n)),this.props.onAccountChanged&&t&&this.props.onAccountChanged(t),!this.props.typeahead&&n&&this.onInputChanged(n)}},{key:"componentWillReceiveProps",value:function(e){e.account&&e.account!==this.props.account&&this.props.onAccountChanged(e.account)}},{key:"getAccount",value:function(){return this.props.account}},{key:"getError",value:function(){var e=this.props,t=e.account,n=e.error;return n||!t||this.getInputType(t.get("name"))||(n=g.a.translate("account.errors.invalid")),n}},{key:"getInputType",value:function(e){return e?"#"===e[0]&&o.a.is_object_id("1.2."+e.substring(1))?"id":m.d.is_account_name(e,!0)?"name":this.props.allowPubKey&&m.i.fromPublicKeyString(e)?"pubkey":null:null}},{key:"onSelected",value:function(e){this.setState({inputChanged:!1});var t=this.getVerifiedAccountName(e),n=m.b.getAccount(t);n&&(this.props.onChange(t),this.props.onAccountChanged(n))}},{key:"onInputChanged",value:function(e){var t=this.props,n=t.onChange,a=t.onAccountChanged,s=t.accountName,o=t.typeahead;this.setState({inputChanged:!0});var i=this.getVerifiedAccountName(e),r=m.b.getAccount(i);n&&i!==s&&n(i),o||(n&&n(i),a&&a(r))}},{key:"getVerifiedAccountName",value:function(e){var t=this.props.allowUppercase,n=null;n="string"==typeof e?e:e&&e.target?e.target.value.trim():"",t||(n=n.toLowerCase());var a=n.replace("#","").match(/(?:\/account\/)(.*)(?:\/overview)/);return a&&(n=a[1]),n}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"_onAddContact",value:function(){u.a.addAccountContact(this.props.accountName)}},{key:"_onRemoveContact",value:function(){u.a.removeAccountContact(this.props.accountName)}},{key:"onAction",value:function(e){var t=this.props,n=t.onAction,a=t.disableActionButton,s=t.account,o=t.accountName;e.preventDefault(),this.getError()||!n||a||(s?n(s):"pubkey"===this.getInputType(o)&&n(o))}},{key:"render",value:function(){var e=this.props,t=e.accountName,n=e.account,a=e.allowPubKey,o=e.typeahead,i=e.disableActionButton,c=e.contacts,u=e.myActiveAccounts,l=(e.noPlaceHolder,e.useHR),d=e.labelClass,h=e.reserveErrorSpace,f=this.getInputType(t),_=[],w=this.getError(),A=u;A=A.concat(c);var S=void 0;n&&(n.isKnownScammer=y.a.isKnownScammer(n.get("name")),n.accountType=this.getInputType(n.get("name")),n.accountStatus=m.b.getAccountMemberStatus(n),n.statusText=n.isKnownScammer?g.a.translate("account.member.suspected_scammer"):g.a.translate("account.member."+n.accountStatus),S="name"===n.accountType?"#"+n.get("id").substring(4):"id"===n.accountType?n.get("name"):null),o?a&&"pubkey"===f||w||!t||n||(w=g.a.translate("account.errors.unknown")):!n&&t&&"pubkey"!==f&&(w=g.a.translate("account.errors.unknown")),a&&"pubkey"===f&&(S="Public Key"),n&&A&&(n.isFavorite=u.has(n.get("name"))||c.has(n.get("name"))),o&&A&&A.map(function(e){var t=m.b.getAccount(e),n=m.b.getAccountMemberStatus(t),a=y.a.isKnownScammer(e)?"account.member.suspected_scammer":"account.member."+n;_.push({id:e,label:e,status:g.a.translate(a),className:y.a.isKnownScammer(e)?"negative":"positive"})});var T=!!t&&_.reduce(function(e,n){return e||n.label===t},!1);if(t&&!T&&this.state.inputChanged){var x=m.b.getAccount(t),N=x?m.b.getAccountMemberStatus(x):null,O=x?y.a.isKnownScammer(x.get("name"))?g.a.translate("account.member.suspected_scammer"):g.a.translate("account.member."+N):g.a.translate("account.errors.unknown");_.push({id:this.props.accountName,label:this.props.accountName,status:O,className:y.a.isKnownScammer(t)||!x?"negative":null,disabled:!x})}_.sort(function(e,t){return e.label>t.label?1:-1});var j=this.props.account?u.has(n.get("name"))||c.has(n.get("name"))?s.a.createElement("span",{className:"tooltip green","data-place":"top","data-tip":g.a.translate("tooltip.follow_user"),onClick:this._onRemoveContact.bind(this)},s.a.createElement(v.a,{style:{position:"absolute",top:"-0.15em",right:".2em"},name:"user",title:"icons.user.following"})):s.a.createElement("span",{className:"tooltip","data-place":"top","data-tip":g.a.translate("tooltip.follow_user_add"),onClick:this._onAddContact.bind(this)},s.a.createElement(v.a,{style:{position:"absolute",top:"-0.05em",right:".2em"},name:"plus-circle",title:"icons.plus_circle.add_contact"})):null,P=b()("button btn large outline",{disabled:!(n||"pubkey"===f)||w||i});return s.a.createElement("div",{className:"account-selector",style:this.props.style},s.a.createElement("div",{className:"content-area"},this.props.label?s.a.createElement("div",{className:"header-area"+(this.props.hideImage?" no-margin":"")},s.a.createElement("label",{className:b()("right-label",n&&n.isFavorite?"positive":null,n&&n.isKnownScammer?"negative":null)},s.a.createElement("span",{style:{paddingRight:"1.5rem"}},n&&n.statusText," ",!!S&&S),j),s.a.createElement(p.a,{className:"left-label "+(d||""),component:"label",content:this.props.label}),l&&s.a.createElement("hr",null)):null,s.a.createElement("div",{className:"input-area"},s.a.createElement("div",{className:"inline-label input-wrapper"},n&&"pubkey"===n.accountType?s.a.createElement("div",{className:"account-image"},s.a.createElement(v.a,{name:"key",title:"icons.key",size:"4x"})):this.props.hideImage?null:s.a.createElement(r.a,{size:{height:this.props.size||80,width:this.props.size||80},account:n?n.get("name"):null,custom_image:null}),void 0!==this.props.typeahead?s.a.createElement(k.a,C({items:_,style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",defaultValue:this.props.accountName||"",placeholder:this.props.placeholder||g.a.translate("account.name"),ref:"user_input",onSelect:this.onSelected.bind(this),onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex,inputProps:{placeholder:"Search for an account"}},this.props.typeaheadOptions||{})):s.a.createElement("input",{style:{textTransform:"pubkey"===this.getInputType(t)?null:"lowercase",fontVariant:"initial"},name:"username",id:"username",type:"text",value:this.props.accountName||"",placeholder:this.props.placeholder||g.a.translate("account.name"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.dropDownContent?s.a.createElement("div",{className:"form-label select floating-dropdown"},s.a.createElement(E.a,{entries:this.props.dropDownContent,values:this.props.dropDownContent.reduce(function(e,t){return t&&(e[t]=t),e},{}),singleEntry:this.props.dropDownContent[0],value:this.props.dropDownValue||"",onChange:this.props.onDropdownSelect})):null,this.props.children,this.props.onAction?s.a.createElement("button",{className:P,style:{marginLeft:4},onClick:this.onAction.bind(this)},s.a.createElement(p.a,{content:this.props.action_label})):null)),w||h?s.a.createElement("div",{className:this.props.hideImage?"has-error":"error-area",style:{marginTop:"1rem",position:"relative"}},s.a.createElement("span",null,w)):null))}}]),t}();T.propTypes={label:A.a.string,error:A.a.element,placeholder:A.a.string,onChange:A.a.func,onAccountChanged:A.a.func,onAction:A.a.func,accountName:A.a.string,account:d.a.ChainAccount,tabIndex:A.a.number,disableActionButton:A.a.bool,allowUppercase:A.a.bool,typeahead:A.a.array},T.defaultProps={autosubscribe:!1},T=Object(h.a)(T),T=Object(i.connect)(T,{listenTo:function(){return[c.a]},getProps:function(){return{myActiveAccounts:c.a.getState().myActiveAccounts,contacts:c.a.getState().accountContacts}}}),t.a=T},108:function(e,t,n){"use strict";var a=n(84),s=n(6),o=n.n(s),i=n(25),r=n(74),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=o.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:r.a.getAssetList,onLookupAsset:r.a.lookupAsset}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["a"]),c(t,[{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(n){for(var a=0;a<e.dynamic.length;a++)if(e.dynamic[a].id===n.dynamic_asset_data_id){n.dynamic=e.dynamic[a];break}if(n.bitasset_data_id){n.market_asset=!0;for(a=0;a<e.bitasset_data.length;a++)if(e.bitasset_data[a].id===n.bitasset_data_id){n.bitasset_data=e.bitasset_data[a];break}}else n.market_asset=!1;t.assets=t.assets.set(n.id,n),t.asset_symbol_to_id[n.symbol]=n.id})}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}();t.a=i.a.createStore(u,"AssetStore")},351:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(1),i=n.n(o),r=n(5),c=n(71),u=n(3),l=n.n(u),p=n(52),m=n(74),d=n(4),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={amount:0,showError:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.Component),h(t,[{key:"onAmountChanged",value:function(e){var t=e.amount,n=e.asset;this.setState({amount:t,asset:n})}},{key:"getBalance",value:function(){var e=this,t=this.props.account.get("balances"),n=0;return t&&t.forEach(function(t,a){if(a==e.props.assetId){var s=d.b.getObject(t);n=s.get("balance")}}),n}},{key:"onSubmit",value:function(){var e=r.a.get_asset_precision(this.state.asset.get("precision")),t=this.state.amount.replace(/,/g,"");t*=e;var n=this.getBalance();t<=0||t>n?this.setState({showError:!0}):(this.setState({showError:!1}),m.a.reserveAsset(t,this.props.assetId,this.props.account.get("id")),this.props.onClose())}},{key:"render",value:function(){var e=this,t=this.props.assetId;return s.a.createElement("form",{className:"grid-block vertical full-width-content"},s.a.createElement(i.a,{component:"h3",content:"modal.reserve.title"}),s.a.createElement("div",{className:"grid-container ",style:{paddingTop:"2rem"}},s.a.createElement("div",{className:"content-block",onClick:function(){e.setState({showError:!1})}},s.a.createElement(p.a,{label:"modal.reserve.amount",amount:this.state.amount,onChange:this.onAmountChanged.bind(this),asset:t,assets:[t],display_balance:s.a.createElement(c.a,{balance:this.props.account.getIn(["balances",t])}),tabIndex:1})),this.state.showError?s.a.createElement("p",{className:"errorModal"},l.a.translate("exchange.invalid_amount")):null,s.a.createElement("div",{className:"content-block button-group"},s.a.createElement("input",{type:"submit",className:"button success btn large inverted",onClick:this.onSubmit.bind(this),value:l.a.translate("modal.reserve.submit"),tabIndex:2}),s.a.createElement("div",{className:"button btn large outline",onClick:this.props.onClose,tabIndex:3},l.a.translate("cancel")))))}}]),t}();t.a=f},574:function(e,t,n){"use strict";(function(e){var a=n(0),s=n.n(a),o=n(1),i=n.n(o),r=n(7),c=n(13),u=n(5),l=n(3),p=n.n(l),m=n(74),d=n(106),h=n(52),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var b=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={amount:e.amount,to:e.to,to_id:null,memo:""},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,s.a.Component),f(n,[{key:"onAmountChanged",value:function(e){var t=e.amount;this.setState({amount:t})}},{key:"onToAccountChanged",value:function(e){var t=e?{to:e.get("name"),to_id:e.get("id")}:{to_id:null};this.setState(t)}},{key:"onToChanged",value:function(e){this.setState({to:e,to_id:null})}},{key:"onSubmit",value:function(){var t=this.props.asset_to_issue,n=u.a.get_asset_precision(t.get("precision")),a=this.state.amount.toString().replace(/,/g,"");a*=n,m.a.issueAsset(this.state.to_id,t.get("issuer"),t.get("id"),a,this.state.memo?new e(this.state.memo,"utf-8"):this.state.memo),this.setState({amount:0,to:"",to_id:null,memo:""})}},{key:"onMemoChanged",value:function(e){this.setState({memo:e.target.value})}},{key:"render",value:function(){var e=this.props.asset_to_issue.get("id"),t=1;return s.a.createElement("form",{className:"grid-block vertical full-width-content"},s.a.createElement("div",{className:"grid-container ",style:{paddingTop:"2rem"}},s.a.createElement("div",{className:"content-block"},s.a.createElement(d.a,{label:"modal.issue.to",accountName:this.state.to,onAccountChanged:this.onToAccountChanged.bind(this),onChange:this.onToChanged.bind(this),account:this.state.to,tabIndex:t++})),s.a.createElement("div",{className:"content-block"},s.a.createElement(h.a,{label:"modal.issue.amount",amount:this.state.amount,onChange:this.onAmountChanged.bind(this),asset:e,assets:[e],tabIndex:t++})),s.a.createElement("div",{className:"content-block"},s.a.createElement("label",null,s.a.createElement(i.a,{component:"span",content:"transfer.memo"})," ","(",s.a.createElement(i.a,{content:"transfer.optional"}),")"),s.a.createElement("textarea",{rows:"3",value:this.state.memo,tabIndex:t++,onChange:this.onMemoChanged.bind(this)})),s.a.createElement("div",{className:"content-block button-group"},s.a.createElement("button",{type:"submit",className:"button primary",onClick:this.onSubmit.bind(this,this.state.to,this.state.amount),disabled:!this.state.to_id||!this.state.amount,tabIndex:t++},p.a.translate("modal.issue.submit")),s.a.createElement("button",{className:"button primary hollow",onClick:this.props.onClose,tabIndex:t++},p.a.translate("cancel")))))}}]),n}();b.propTypes={asset_to_issue:r.a.ChainAsset.isRequired},t.a=Object(c.a)(b)}).call(this,n(31).Buffer)},72:function(e,t,n){"use strict";n.d(t,"b",function(){return v}),n.d(t,"a",function(){return g});var a=n(0),s=n.n(a),o=n(2),i=n.n(o),r=(n(1),n(8)),c=n.n(r),u=n(16),l=n(11),p=n(9),m=n(3),d=n.n(m),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(e){function t(){return f(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,s.a.Component),h(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,i=e.className,r=e.updatedTab,u=e.disabled,l=e.subText,p=c()({"is-active":t},i);return"string"==typeof o&&o.indexOf(".")>0&&(o=d.a.translate(o)),this.props.collapsed?("string"==typeof l&&(l=l.trim()),s.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},s.a.createElement("span",{className:"tab-title"},o,r?"*":"",l&&" (",l&&l,l&&")"))):s.a.createElement("li",{className:p,onClick:u?null:a.bind(this,n,this.props.isLinkTo)},s.a.createElement("a",null,s.a.createElement("span",{className:"tab-title"},o,r?"*":""),l&&s.a.createElement("div",{className:"tab-subtext"},l)))}}]),t}();g.propTypes={changeTab:i.a.func,isActive:i.a.bool.isRequired,index:i.a.number.isRequired,className:i.a.string,isLinkTo:i.a.string,subText:i.a.oneOfType([i.a.object,i.a.string])},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var v=function(e){function t(e){f(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return _(t,s.a.Component),h(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""===t?(this.props.setting&&l.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)):this.context.router.push(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,i=t.style,r=t.segmented,u=this.state.width<900&&s.a.Children.count(n)>2,l=null,p=s.a.Children.map(n,function(t,n){if(!t)return null;if(u&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(l=t.props.children),s.a.cloneElement(t,{collapsed:u,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return l||(l=p[0].props.children),s.a.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},s.a.createElement("div",{className:"service-selector"},s.a.createElement("ul",{style:i,className:c()("button-group no-margin",o,{segmented:r})},u?s.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},s.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p)),this.props.actionButtons?s.a.createElement("div",{className:"tabs-action-buttons"},this.props.actionButtons):null,s.a.createElement("div",{className:c()("tab-content",a)},l))}}]),t}();v.propTypes={setting:i.a.string,defaultActiveTab:i.a.number,segmented:i.a.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v.contextTypes={router:i.a.object.isRequired},v=Object(u.connect)(v,{listenTo:function(){return[p.a]},getProps:function(){return{viewSettings:p.a.getState().viewSettings}}})},74:function(e,t,n){"use strict";var a=n(25),s=n(19),o=n(5),i=n(82),r=n(115),c=n(15),u=n(4),l=n(79),p=n.n(l),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var d={},h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return m(e,[{key:"fundPool",value:function(e,t,n,a){var s=i.a.new_transaction(),r=o.a.get_asset_precision(t.get("precision"));return s.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:n.get("id"),amount:a*r}),function(e){return c.a.process_transaction(s,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"updateFeedProducers",value:function(e,t,n){var a=i.a.new_transaction();return a.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:t.get("id"),new_feed_producers:n}),function(e){return c.a.process_transaction(a,null,!0).then(function(){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- updateFeedProducers error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,n){var a=i.a.new_transaction(),s=o.a.get_asset_precision(t.get("precision"));return a.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:n*s}}),function(e){return c.a.process_transaction(a,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,n,a,s,r,l,m,d){console.log("create asset:",t,"flags:",n,"isBitAsset:",r,"bitasset_opts:",m);var h=i.a.new_transaction(),f=o.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var b=new p.a(t.max_supply).times(f).toString(),_=new p.a(t.max_market_fee||0).times(f).toString(),g=o.a.get_asset_precision(u.b.getAsset(s.base.asset_id).get("precision")),v={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:b,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:_,issuer_permissions:a,flags:n,core_exchange_rate:{base:{amount:s.base.amount*g,asset_id:s.base.asset_id},quote:{amount:s.quote.amount*f,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:d,extensions:null},is_prediction_market:l,extensions:null};return r&&(v.bitasset_opts=m),h.add_type_operation("asset_create",v),function(e){return c.a.process_transaction(h,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,n,a,s,r,l,m,d,h,f,b,_,g,v){var y=i.a.new_transaction();if(v){var E=o.a.get_asset_precision(s.get("precision"));p.a.config({DECIMAL_PLACES:s.get("precision")});var k=new p.a(n.max_supply).times(E).toString(),w=new p.a(n.max_market_fee||0).times(E).toString(),A=u.b.getAsset(a.quote.asset_id),C=o.a.get_asset_precision(A.get("precision")),S=u.b.getAsset(a.base.asset_id),T=o.a.get_asset_precision(S.get("precision")),x=new p.a(a.quote.amount).times(C).toString(),N=new p.a(a.base.amount).times(T).toString();console.log("auths:",b);var O={fee:{amount:0,asset_id:0},asset_to_update:s.get("id"),extensions:s.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:k,max_market_fee:w,market_fee_percent:100*n.market_fee_percent,description:f,issuer_permissions:l,flags:r,whitelist_authorities:b.whitelist_authorities.toJS(),blacklist_authorities:b.blacklist_authorities.toJS(),whitelist_markets:b.whitelist_markets.toJS(),blacklist_markets:b.blacklist_markets.toJS(),extensions:s.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:x,asset_id:a.quote.asset_id},base:{amount:N,asset_id:a.base.asset_id}}}};e!==t&&t||delete O.new_issuer,y.add_type_operation("asset_update",O)}if(console.log("bitasset_opts:",d,"original_bitasset_opts:",h),m&&(d.feed_lifetime_sec!==h.feed_lifetime_sec||d.minimum_feeds!==h.minimum_feeds||d.force_settlement_delay_sec!==h.force_settlement_delay_sec||d.force_settlement_offset_percent!==h.force_settlement_offset_percent||d.maximum_force_settlement_volume!==h.maximum_force_settlement_volume||d.short_backing_asset!==h.short_backing_asset)){var j={fee:{amount:0,asset_id:0},asset_to_update:s.get("id"),issuer:e,new_options:d};y.add_type_operation("asset_update_bitasset",j)}return console.log("feedProducers:",_,"originalFeedProducers:",g),m&&!o.a.are_equal_shallow(_,g)&&y.add_type_operation("asset_update_feed_producers",{fee:{amount:0,asset_id:"1.3.0"},issuer:e,asset_to_update:s.get("id"),new_feed_producers:_}),c.a.process_transaction(y,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- updateAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,n,a,s){r.a.issue_asset(e,t,n,a,s)}},{key:"getAssetList",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e+"_"+t;return function(i){if(!d[o]){var r;if(d[o]=!0,i({loading:!0}),r=s.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],n=[];e.forEach(function(e){u.b._updateObject(e,!1),n.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var a=s.Apis.instance().db_api().exec("get_objects",[n]),r=t.length>0?s.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([a,r]).then(function(t){return delete d[o],i({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetActions.getAssetList: ",e),i({loading:!1}),delete d[o]}),a){["BRIDGE","GDEX","RUDEX","OPEN","WIN"].forEach(function(t){n.getAssetList(t+"."+e,10)})}return r}}}},{key:"lookupAsset",value:function(e,t){var n=u.b.getAsset(e);return n?{assets:[n],searchID:t,symbol:e}:function(n){setTimeout(function(){var a=u.b.getAsset(e);a&&n({assets:[a],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,n){var a=i.a.new_transaction();return a.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:n,extensions:[]}),c.a.process_transaction(a,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=a.a.createActions(h)},7820:function(e,t,n){"use strict";n.r(t);var a=n(89),s=n(0),o=n.n(s),i=n(2),r=n.n(i),c=n(10),u=n(1),l=n.n(u),p=n(74),m=n(108),d=n(23),h=n(38),f=n(17),b=n(21),_=n.n(b),g=n(26),v=n(5),y=n(42),E=n(574),k=n(351),w=n(16),A=n(46),C=n(6),S=n(48),T=(n(72),n(3)),x=n.n(T),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={create:{symbol:"",name:"",description:"",max_supply:1e15,precision:4},issue:{amount:0,to:"",to_id:"",asset_id:"",symbol:""},errors:{symbol:null},isValid:!1,searchTerm:""},n._searchAccounts=Object(a.a)(n._searchAccounts,150),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),N(t,[{key:"_checkAssets",value:function(e,t){if(!this.props.account.get("assets").size){var n=e.sort(function(e,t){return e.symbol>t.symbol?1:e.symbol<t.symbol?-1:0}).last();0===e.size||t?(p.a.getAssetList.defer("A",100),this.setState({assetsFetched:100})):e.size>=this.state.assetsFetched&&(p.a.getAssetList.defer(n.symbol,100),this.setState({assetsFetched:this.state.assetsFetched+99}))}}},{key:"componentWillReceiveProps",value:function(e){this._checkAssets(e.assets)}},{key:"componentWillMount",value:function(){this._checkAssets(this.props.assets,!0)}},{key:"_onIssueInput",value:function(e,t){var n=t.target.id,a=this.state.issue;if("to"===n){this._searchAccounts(t.target.value),a.to=t.target.value;var s=this.props.searchAccounts.findEntry(function(e){return e===t.target.value});a.to_id=s?s[0]:null}else a[e]=t.target.value;this.setState({issue:a})}},{key:"_searchAccounts",value:function(e){d.a.accountSearch(e)}},{key:"_issueAsset",value:function(e,t){var n=this;t.preventDefault(),_.a.publish("issue_asset","close");var a=this.state.issue,s=this.props.assets.get(a.asset_id);a.amount*=v.a.get_asset_precision(s.precision),p.a.issueAsset(e,a).then(function(e){e?(g.a.addNotification({message:"Successfully issued "+v.a.format_asset(a.amount,n.props.assets.get(a.asset_id)),level:"success",autoDismiss:10}),ChainStore.getAsset(a.asset_id)):g.a.addNotification({message:"Failed to issue asset",level:"error",autoDismiss:10})})}},{key:"_reserveButtonClick",value:function(e,t){t.preventDefault(),this.setState({reserve:e}),_.a.publish("reserve_asset","open")}},{key:"_reserveAsset",value:function(e,t){t.preventDefault(),_.a.publish("reserve_asset","close");var n=this.state.issue,a=this.props.assets.get(n.asset_id);n.amount*=v.a.get_asset_precision(a.precision),p.a.issueAsset(e,n)}},{key:"_issueButtonClick",value:function(e,t,n){n.preventDefault();var a=this.state.issue;a.asset_id=e,a.symbol=t,this.setState({issue:a}),_.a.publish("issue_asset","open")}},{key:"_editButtonClick",value:function(e,t,n){n.preventDefault(),this.props.router.push("/account/"+t+"/update-asset/"+e)}},{key:"_onAccountSelect",value:function(e){var t=this.state.issue;t.to=e,t.to_id=this.props.account_name_to_id[e],this.setState({issue:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.account,a=t.account_name,s=t.assets,i=t.assetsList,r=!0;if(!n)return o.a.createElement(y.a,{type:"circle"});if(n.notFound&&(r=!1),!r)return o.a.createElement("div",{className:"grid-block"},o.a.createElement("h5",null,o.a.createElement(l.a,{component:"h5",content:"account.errors.not_found",name:a})));i.length&&(s=s.clear(),i.forEach(function(e){e&&(s=s.set(e.get("id"),e.toJS()))}));var u=s.filter(function(e){return e.issuer===n.get("id")}).sort(function(e,t){return parseInt(e.id.substring(4,e.id.length),10)-parseInt(t.id.substring(4,t.id.length),10)}).map(function(t){var n=A.a.parseDescription(t.options.description),s=n.short_name?n.short_name:n.main;s.length>100&&(s=s.substr(0,100)+"...");var i=e.props.getDynamicObject(t.dynamic_asset_data_id);return o.a.createElement("tr",{key:t.symbol},o.a.createElement("td",null,o.a.createElement(c.b,{to:"/asset/"+t.symbol},t.symbol)),o.a.createElement("td",{style:{maxWidth:"250px"}},s),o.a.createElement("td",null,i?o.a.createElement(f.a,{amount:parseInt(i.get("current_supply"),10),asset:t.id}):null),o.a.createElement("td",null,o.a.createElement(f.a,{amount:parseInt(t.options.max_supply,10),asset:t.id})),o.a.createElement("td",null,t.bitasset_data_id?null:o.a.createElement("button",{onClick:e._issueButtonClick.bind(e,t.id,t.symbol),className:"btn outline"},x.a.translate("transaction.trxTypes.asset_issue"))),o.a.createElement("td",null,t.bitasset_data_id?null:o.a.createElement("button",{onClick:e._reserveButtonClick.bind(e,t.id),className:"btn outline"},o.a.createElement(l.a,{content:"transaction.trxTypes.asset_reserve"}))),o.a.createElement("td",null,o.a.createElement("button",{onClick:e._editButtonClick.bind(e,t.symbol,a),className:"btn outline"},x.a.translate("transaction.trxTypes.asset_update"))))}).toArray();return o.a.createElement("div",{className:"assets-layout"},o.a.createElement("h2",{className:"content__heading"},x.a.translate("account.user_issued_assets.issued_assets")),o.a.createElement("div",{className:"negative-margins"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"content-block"},o.a.createElement("table",{className:"blue-bg with-borders"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement(l.a,{content:"account.user_issued_assets.symbol"})),o.a.createElement("th",{style:{maxWidth:"200px"}},o.a.createElement(l.a,{content:"account.user_issued_assets.description"})),o.a.createElement(l.a,{component:"th",content:"markets.supply"}),o.a.createElement("th",null,o.a.createElement(l.a,{content:"account.user_issued_assets.max_supply"})),o.a.createElement("th",{style:{textAlign:"center"},colSpan:"3"},o.a.createElement(l.a,{content:"account.perm.action"})))),o.a.createElement("tbody",null,u))),o.a.createElement("div",{className:"content-block"},o.a.createElement(c.b,{to:"/account/"+a+"/create-asset/"},o.a.createElement("button",{className:"btn large inverted"},x.a.translate("transaction.trxTypes.asset_create")))))),o.a.createElement(h.a,{id:"issue_asset",overlay:!0},o.a.createElement("br",null),o.a.createElement("div",{className:"grid-block vertical"},o.a.createElement(E.a,{asset_to_issue:this.state.issue.asset_id,onClose:function(){_.a.publish("issue_asset","close")}}))),o.a.createElement(h.a,{id:"reserve_asset",overlay:!0},o.a.createElement("br",null),o.a.createElement("div",{className:"grid-block vertical"},o.a.createElement(k.a,{assetId:this.state.reserve,account:n,onClose:function(){_.a.publish("reserve_asset","close")}}))))}}]),t}();O.defaultProps={symbol:"",name:"",description:"",max_supply:0,precision:0},O.propTypes={symbol:r.a.string.isRequired},O=Object(S.a)(O,{propNames:["assetsList"],asList:!0,withDynamic:!0}),t.default=Object(w.connect)(O,{listenTo:function(){return[m.a]},getProps:function(e){var t=Object(C.Map)(),n=Object(C.List)();return e.account.get("assets",[]).size?e.account.get("assets",[]).forEach(function(e){n=n.push(e)}):t=m.a.getState().assets,{assets:t,assetsList:n}}})}}]);