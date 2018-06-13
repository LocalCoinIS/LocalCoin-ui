import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory, hashHistory} from "react-router/es";
/*
* Routes-dev is only needed for react hot reload, as this does not work with
* the async routes defined in Routes.jsx. Any changes to the routes must be kept
* synchronized between the two files
*/
import routes from "./Routes";

// require("./components/Utility/Prototypes"); // Adds a .equals method to Array for use in shouldComponentUpdate

/*
* Electron does not support browserHistory, so we need to use hashHistory.
* The same is true for servers without configuration options, such as Github Pages
*/
const history = __HASH_HISTORY__ ? hashHistory : browserHistory;

const rootEl = document.getElementById("content");
const render = () => {
    ReactDOM.render(<Router history={history} routes={routes} />, rootEl);
};
render();
