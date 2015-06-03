// var Alt = require("./alt.js");
var CounterView = require("./components/counter.js");
var injectTapEventPlugin = require("react-tap-event-plugin/src/injectTapEventPlugin.js")();
// var React = require('react');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin

React.render(<CounterView />, document.getElementById("app"));
