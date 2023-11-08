import React, { Component } from 'react';

class LoginForm extends Component {
	render() {
		return (
			<div className="card" >
				<h3>Sign in</h3>
				<p className="small">Sign in to check your registration progress</p>

				<form action="#" >
					<div className="form-content" >
						<input type="text" name="username" id="username" placeholder="Username" />
					</div>
						<div className="form-content" >
						<input type="password" name="password" id="password" placeholder="Password" />
					</div>

					<p><a href="#">Forgot password?</a></p>

					<button className="submit">Sign in</button>

					<p className="divider"><span>or</span></p>

					<button className="social"><i className="fa-brands fa-google"></i> Sign in with Google</button>
				</form>
			</div>
		);
	}
}

class Content extends Component {
	render() {
		return (
			<div className="col-sm-6 offset-sm-6" style={{ height: '250px' }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="card">
								<div className="card-body">
								<LoginForm />
								</div>
								<div>
									<>Don't have an account? <a href="#">Join now</a></>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;
