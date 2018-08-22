import React from 'react';
import NewIdea from './NewIdea';

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
			<NewIdea />
			<div className="navigation">
				<button
				onClick={() => onRouteChange('signin')}
				>Sign Out</button>
			</div>
		</div>
	);
}

export default Ideas;