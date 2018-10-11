import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="card">
			<header>Hello, please Sign in</header>
			<button
			onClick={() => onRouteChange('home')}
			className="button">Sign In</button>
		</div>
	);
}

export default SignIn;
