(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{5228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n(80),l=n(9),c=n(1),s=n.n(c),u=n(270),p=n(10),f=n(19),m=n(2),d=n.n(m),v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(-1!==n.props.apiServer.indexOf("127.0.0.1")){var a=l.a.getState().defaults.apiServer.filter(function(e){return-1===e.url.indexOf("127.0.0.1")&&-1===e.url.indexOf("fake")});p.a.changeSetting({setting:"apiServer",value:a[0].url}),f.Apis.reset(a[0].url,!0)}return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),g(t,[{key:"componentWillReceiveProps",value:function(e){"open"===e.rpc_connection_status&&e.apiServer!==this.props.apiServer&&p.a.showWS(e.apiServer)}},{key:"triggerModal",value:function(e){this.refs.ws_modal.show(e)}},{key:"onChangeWS",value:function(e){p.a.changeSetting({setting:"apiServer",value:e.target.value}),f.Apis.reset(e.target.value,!0)}},{key:"onReloadClick",value:function(e){e&&e.preventDefault(),window.electron?(window.location.hash="",window.remote.getCurrentWindow().reload()):window.location.href="/"}},{key:"onReset",value:function(){p.a.changeSetting({setting:"apiServer",value:this.props.defaultConnection}),p.a.clearSettings()}},{key:"render",value:function(){var e=this.props.apis.reduce(function(e,t){return-1!==e.findIndex(function(e){return e.url===t.url})||e.push(t),e},[]).map(function(e){var t=-1!==e.url.indexOf("fake.automatic-selection"),n=e.location;return n&&"object"===(void 0===n?"undefined":v(n))&&"translate"in n&&(n=d.a.translate(n.translate)),r.a.createElement("option",{key:e.url,value:e.url},n||e.url," ",!t&&n?"("+e.url+")":null)});return r.a.createElement("div",{className:"grid-block page-layout"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-content no-overflow"},r.a.createElement("br",null),r.a.createElement(s.a,{component:"h3",content:"init_error.title"}),r.a.createElement("br",null),r.a.createElement("section",{className:"block-list"},r.a.createElement("header",null,r.a.createElement(s.a,{component:"span",content:"settings.apiServer"})),r.a.createElement("ul",null,r.a.createElement("li",{className:"with-dropdown"},r.a.createElement("select",{onChange:this.onChangeWS.bind(this),value:this.props.apiServer},e),r.a.createElement("div",{style:{paddingTop:10},className:"button-group"},r.a.createElement("div",{onClick:this.triggerModal.bind(this),className:"button outline",id:"add"},r.a.createElement(s.a,{id:"add_text",content:"settings.add_api"})))),r.a.createElement("li",{className:"key-value clearfix"},r.a.createElement("div",{className:"float-left"},r.a.createElement(s.a,{content:"init_error.ws_status"})),r.a.createElement("div",{className:"float-right"},"open"===this.props.rpc_connection_status?r.a.createElement("span",{className:"txtlabel success"},r.a.createElement(s.a,{content:"init_error.connected"})):r.a.createElement("span",{className:"txtlabel warning"},r.a.createElement(s.a,{content:"init_error.not_connected"})))))),r.a.createElement("br",null),r.a.createElement("div",{className:"button-group"},r.a.createElement("div",{className:"button outline",onClick:this.onReloadClick},r.a.createElement(s.a,{content:"init_error.retry"})),r.a.createElement("div",{onClick:this.onReset.bind(this),className:"button outline"},r.a.createElement(s.a,{content:"settings.reset"}))),r.a.createElement(u.a,{ref:"ws_modal",apis:this.props.apis}))))}}]),t}();t.default=Object(o.connect)(b,{listenTo:function(){return[i.a,l.a]},getProps:function(){return{rpc_connection_status:i.a.getState().rpc_connection_status,apis:l.a.getState().defaults.apiServer,apiServer:l.a.getState().settings.get("apiServer"),defaultConnection:l.a.getState().defaultSettings.get("apiServer")}}})}}]);