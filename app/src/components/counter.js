var io = require("socket.io-client/socket.io");

export default class CounterView extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: "constructor this.state" };
	}
	componentDidMount() {
		var socket = io("http://localhost:3000");
		socket.on("hit", function(data) {
			this.setState({message: data});
		}.bind(this));
	}
	render() {
		var text = this.state.message;
		return (<p>{text}</p>);
	}
}
