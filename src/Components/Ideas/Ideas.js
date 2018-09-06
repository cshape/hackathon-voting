import React from 'react';
import Submissions from './Submissions.js';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable-component';
import axios from 'axios';

class Ideas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			leader: '',
			description: ''
		};
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeLeader = this.handleChangeLeader.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this)
	}	

	handleChangeTitle(event) {
    	this.setState({title: event.target.value});
 	}

 	handleChangeLeader(event) {
    	this.setState({leader: event.target.value});
 	}

 	handleChangeDescription(event) {
    	this.setState({description: event.target.value});
 	}

 	handleSubmit(event) {
 		event.preventDefault();
 		this.setState({
 			title: event.target.value,
 			leader: event.target.value,
 			description: event.target.value,
 		});

 	axios.post('http://localhost:3001/api/ideas', {
 		name: this.state.title,
 		leader: this.state.leader,
 		description: this.state.description
 	})
 	.then(response => {
 		console.log(response, 'idea noted!');
 	})
 	.catch(err => {
 		console.log(err, 'idea not noted god dammit');
 	})
	 	this.setState({title: ''});
	  	this.setState({leader: ''});
	  	this.setState({description: ''});
 	}

	
 	render() {
		return (
			<div>
				<Draggable>
					<div className="ideascard">
						<Submissions />
					</div>
				</Draggable>

				<div className="navigation">
					<button
					onClick={() => this.props.onRouteChange('signin')}
					>Sign Out</button>
				</div>
				<Draggable>
					<div className="formcontainer">
						<form className="formnewidea" onSubmit={this.handleSubmit}>
							<header className="cardheader">Gimme a cool idea!</header>
							<div>
								<label>Title:</label>
								<input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle} />
							</div>
							<div>
								<label>Leader:</label>
								<input type="text" name="leader"value={this.state.leader} onChange={this.handleChangeLeader} />
							</div>
							<div>
								<label>Description:</label>
								<textarea rows="5" cols="25" name="description" value={this.state.description} onChange={this.handleChangeDescription} />
							</div>
							<input type="submit" value="Submit" />
						</form>
					</div>
				</Draggable>
				</div>

		);
	}
}

export default Ideas;