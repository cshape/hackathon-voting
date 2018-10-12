import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class SignUp extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
		return (
			<div className="card sign-in-card">
				<div class="card-title"><h1>Sign up</h1></div>
				<input type="text" placeholder="First name" className="spacing-stack-m"/>
				<input type="text" placeholder="Last name" className="spacing-stack-m"/>
				<input type="text" placeholder="Email" className="spacing-stack-m"/>
				<input type="password" placeholder="Password" className="spacing-stack-m"/>
				<input type="password" placeholder="Confirm password" className="spacing-stack-m"/>
				<Link to="/ideas" onClick={this.props.onSignUp.bind(this)} className="button spacing-inline-m">
					Sign up
				</Link>
				<Link to="/">
					Sign in
				</Link>
			</div>
		);
	}
}

export default SignUp;
