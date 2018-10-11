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
				<div className="container">

					<div className="idea-detail-left-column">
						<div className="card idea-details-card">
							<input type="text" placeholder="What's your idea?" autofocus="true" className="idea-details-title-input"/>
							<textarea placeholder="Describe your idea" className="idea-details-description-input"></textarea>
							<button className="button">Save idea</button>
							<div className="card-title spacing-stack-m">
								<h1>Hackathon Idea Pitching/Team Organization Web App</h1>
								<a className="spacing-inline-m">Delete</a>
								<a>Edit</a>
							</div>

							<div className="avatar spacing-stack-l">
								<div className="avatar-picture">
									C
								</div>
								<div className="avatar-info">
									<span className="type-small type-subdued">Posted by Cale Shapera on October 10, 2018.</span>
								</div>
							</div>
							<div>
								<p>Discourse works okay for pitching hackathon ideas and organizing our groups… but wouldn’t a custom solution be nice? We can build it here and then use it to coordinate teams and ideas for the next hackathon!</p>

								<p>Basically, I’m pitching a hackathon app that can be used to pitch hackathon apps. I heard that developers like recursivity… :sweat_smile:</p>

								<p>The #dev-newbs group has built the beginnings of a MERN-stack webapp, but it would be amazing to get a designer, and a couple experienced developers to help us toward the finish line. The finish line would look something like:</p>

								<ul>
									<li>The user can log in to view a list of submissions (and add a submission themself)</li>
									<li>The user can add themself as a team member to a submission</li>
									<li>Users can comment on submissions</li>
									<li>The design is clear and intuitive</li>
								</ul>

								Nice to have features:
								<ul>
									<li>SSO with Google</li>
									<li>Voting on submissions</li>
									<li>Take a look at what we have so far here 3 (and the repo here 1).</li>
								</ul>
							</div>
						</div>
						<div className="card idea-comments-card">
							<div className="card-title">
								<h1>Comments</h1>
							</div>
							<div className="comment">
								<div className="avatar spacing-stack-l">
									<div className="avatar-picture">
										C
									</div>
									<div className="avatar-info">
										<strong>Cale Shapera</strong>
										<br/>
										<span className="type-small type-subdued">2 days ago</span>
									</div>
								</div>
								<div className="comment-content">
									Quisque ut dolor gravida, placerat libero vel, euismod. Phasellus laoreet lorem vel dolor tempus vehicula.
								</div>
							</div>
							<div className="comment">
								<div className="avatar spacing-stack-l">
									<div className="avatar-picture">
										C
									</div>
									<div className="avatar-info">
										<strong>Cale Shapera</strong>
										<br/>
										<span className="type-small type-subdued">2 days ago</span>
									</div>
								</div>
								<div className="comment-content">
									Quisque ut dolor gravida, placerat libero vel, euismod. Phasellus laoreet lorem vel dolor tempus vehicula.
								</div>
							</div>
							<textarea placeholder="Type a comment" className="comment-text-area"></textarea>
							<button className="button">Add comment</button>
						</div>
					</div>

					<div className="idea-detail-right-column">
						<div className="card team-card">
							<div className="card-title">
								<h1>Team</h1>
								<a>Add team members</a>
							</div>
							<div className="avatar">
								<div className="avatar-picture">
									C
								</div>
								<div className="avatar-info">
									<strong>Cale Shapera</strong><br/>
									<span className="type-small type-subdued">Owner</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Draggable>
					<div className="ideascard">
						<Submissions submitting={this.state.submitting} deleteIdea={this.deleteIdea} />
					</div>
				</Draggable>

				<div className="navigation">
					<Link to="/">
						<button className="button">Sign Out</button>
					</Link>
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
