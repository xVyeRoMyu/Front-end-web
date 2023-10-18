// create class message
class UserMessage extends React.Component { 
	render() { // render function
		return (// return JSX
			<div>
				<small>{this.props.user}:</small> 
				<p>{this.props.content}</p>
				<hr />
			</div>
		);
	}
}

// create component ChatBox
class ChatBox extends React.Component {
	// render function
	render() {
		// return JSX
		return (
			<div>
				<UserMessage user="Semmy Taju" content="Hi, apa kabar semua?" />
				<UserMessage user="Nani Patricia" content="Baik, apa kabar juga?" /> 
				<UserMessage user="Nadia Luxie" content="Sehat juga." />
				<UserMessage user="Piter Pan" content="Aku senang dan girang selalu !!!" />
				<UserMessage user="Jefri Putra" content="Senang bisa juga via message dengan kalian semua." />
				<UserMessage user="Agus Wandi" content="Biasa aja kale." />
			</div>
		);
	}
}

// render elements to DOM
ReactDOM.render (<ChatBox />, document.getElementById("app"));