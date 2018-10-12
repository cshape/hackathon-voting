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
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeLeader = this.handleChangeLeader.bind(this);
		this.handleChangeDescription = this.handleChangeDescription.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.deleteIdea = this.deleteIdea.bind(this);
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
 			submitting: true
 		});

// use when testing w/ a local database
	// axios.post('http://localhost:3001/api/ideas', {
 // 		name: this.state.title,
 // 		leader: this.state.leader,
 // 		description: this.state.description
 // 	})
 // 	.then(response => {
 // 		console.log(response, 'idea noted!');
 // 	})
 // 	.catch(err => {
 // 		console.log(err, 'idea not noted god dammit');
 // 	})
	//  	this.setState({title: ''});
	//   	this.setState({leader: ''});
	//   	this.setState({description: ''});
 // 	}



 // use when connecting to heroku
 	axios.post('https://mighty-springs-20769.herokuapp.com/api/ideas', {
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

 	deleteIdea(id) {
	 			console.log("click");
	 			console.log(this.state);

	 				this.setState(prevState => ({
			        submissions: this.state.submissions.filter(el => el !== id )
			    }));
	 			axios.delete('http://localhost:3001/api/ideas', {
	 				body: {
	 					id: id,
	 				}
	 			})
	 			.then(response => {
	 				console.log(response, "idea deleted.")
	 			})
	 			.catch(err => {
	 				console.log(err, "idea not deleted.")
	 			})
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
