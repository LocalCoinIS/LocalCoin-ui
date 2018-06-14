require("./stylesheets/app.scss");
require("file-loader?name=index.html!./index-dev.html");
require("file-loader?name=favicon.ico!./favicon.ico");
// require("file-loader?name=dictionary.json!common/dictionary_en.json");
require("babel-polyfill");
require("whatwg-fetch");
require("indexeddbshim");
require("./asset-symbols/symbols.js");
require("./language-dropdown/flags.js");

// import locales from "assets/locales";
// for (let locale of locales) {
//     require(`file-loader?name=[name].[ext]!./locales/locale-${locale}.json`);
// }
