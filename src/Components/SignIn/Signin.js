import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="card">
			<h1>Login</h1>
			<Link to="/ideas">
				<button className="button">Sign In</button>
			</Link>
		</div>
	);
}

export default SignIn;
