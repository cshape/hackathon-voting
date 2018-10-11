import React from 'react';
import Submissions from './Submissions.js';
import Draggable from 'react-draggable-component';
import axios from 'axios';

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
				<div class="container">
					<div className="idea-detail-left-column">
						<div className="card idea-details-card">
							<input type="text" placeholder="What's your idea?" autofocus="true"/>
							<textarea placeholder="Describe your idea" className="idea-details-description-input"></textarea>
							<button className="button">Save idea</button>
						</div>
						<div className="card idea-comments-card">
							<textarea placeholder="Type your idea" className="no-margin-bottom"></textarea>
						</div>
					</div>
					<div className="idea-detail-right-column">
						<div className="card teamCard">
						</div>
					</div>
				</div>

				<Draggable>
					<div className="ideascard">
						<Submissions submitting={this.state.submitting} deleteIdea={this.deleteIdea} />
					</div>
				</Draggable>

				<div className="navigation">
					<button
					onClick={() => this.props.onRouteChange('signin')}
					className="button"
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
								<textarea rows="5" cols="25" name="description" value={this.state.description} onChange={this.handleChangeDescription} placeholder="Describe your idea" />
							</div>
							<input type="submit" value="Submit" className="button"/>
						</form>
					</div>
				</Draggable>
				</div>

		);
	}
}

export default Ideas;
