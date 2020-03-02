class Plate extends React.Component {
	render() {
		return (
			<h1>Hello from Plate</h1>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Plate />
			</React.Fragment>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);