import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="card sign-in-card">
			<div class="card-title"><h1>Login</h1></div>
			<input type="text" placeholder="Email" className="spacing-stack-m"/>
			<input type="password" placeholder="Password" className="spacing-stack-m"/>
			<Link to="/ideas" className="button spacing-inline-m">
				Sign in
			</Link>
			<Link to="/signup">
				Sign up
			</Link>
		</div>
	);
}

export default SignIn;
