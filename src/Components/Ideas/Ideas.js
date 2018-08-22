import React from 'react';

const Ideas = ({ onRouteChange }) => {
	return (
		<div>
			<div className="ideascard">
				<header>Ideas</header>
				<ul>
					<li>pancake-making robot</li>
					<li>tennis court on roof</li>
					<li>automate david's job</li>
				</ul>
			</div>
			<div className="navigation">
				<button
				onClick={() => onRouteChange('signin')}
				>Sign Out</button>
			</div>
		</div>
	);
}

export default Ideas;