// membuat objek
const Link = ReactRouterDOM.Link; 
const Route = ReactRouterDOM.Route;

// create main class
class App extends React.Component { 
	constructor() { 
		super();
	}
	
	render() {
		return (
			<ReactRouterDOM.HashRouter>
				<div className="App">
					<ul className="App-header">
						<li><Link to="/">Home </Link> </li>
						<li><Link to="/about">About </Link> </li>
						<li><Link to="/contact">Contact </Link> </li>
					</ul>
					
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</div>
			</ReactRouterDOM.HashRouter>
		);
	}
}

// render komponen ke RealDOM
ReactDOM.render (<App />, document.getElementById("app"));