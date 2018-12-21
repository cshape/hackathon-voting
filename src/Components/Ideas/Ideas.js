import React from 'react';
import Submissions from './Submissions.js';

class Ideas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			leader: '',
			description: '',
			submitting: false
		};
	}


 	render() {
		return (
			<div>
				<Submissions user={this.props.user} submitting={this.state.submitting} deleteIdea={this.deleteIdea} />
			</div>
		);
	}
}

export default Ideas;
