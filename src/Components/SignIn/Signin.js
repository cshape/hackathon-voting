import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="signinbutton">
			<header>Hello, please Sign in</header>
			<br />
			<button
			onClick={() => onRouteChange('home')}
			>Sign In</button>
		</div>
	);
}

export default SignIn;