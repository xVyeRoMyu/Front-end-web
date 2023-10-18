// create class message
class Message extends React.Component { 
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
class ContentPage extends React.Component {
	render() {
		// return JSX
		return (
			<div className="main">
				<h2>Live Chat with Chatbot</h2>
				<h5>This is just a demo chats, oct 18, 2023</h5>
				<Message user="Alexander John" content="Hi, apa kabar bot?" />
				<Message user="Chatbot" content="Hi human, saya baik saja." /> 
				<Message user="Alexander John" content="Baiklah, apakah kamu manusia?" />
				<Message user="Chatbot" content="Tentu saja tidak. Aku adalah mesin virtual bot, siap untuk melayanimu." />
			</div>
		);
	}
}