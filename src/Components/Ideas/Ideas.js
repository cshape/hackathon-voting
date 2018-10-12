import React from 'react';
import Submissions from './Submissions.js';
import Draggable from 'react-draggable-component';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
				<Submissions submitting={this.state.submitting} deleteIdea={this.deleteIdea} />
			</div>
		);
	}
}

export default Ideas;
