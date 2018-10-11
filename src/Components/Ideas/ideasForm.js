import React from 'react';
import axios from 'axios';
class IdeasForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
		};

  }

  render() {
    return (
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
							<textarea placeholder="Type your idea"></textarea>
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
    );
  }
}

export default IdeasForm;
