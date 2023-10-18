"use strict";

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<HeaderPage />
				<NavbarPage />
				<div className="row">
					<SidebarPage />
					<ContentPage />
				</div>
				<footer>
				<FooterPage />
				</footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));