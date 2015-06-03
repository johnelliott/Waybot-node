//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
var injectTapEventPlugin = require("react-tap-event-plugin/src/injectTapEventPlugin.js")();

// var Alt = require("./alt.js");
var Main = require("./components/main.js");

React.render(<Main />, document.getElementById("app"));
