import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="card">
			<h1>Login</h1>
			<button
			onClick={() => onRouteChange('home')}
			className="button">Sign In</button>
		</div>
	);
}

export default SignIn;
