import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import Avatar from '../UI/Avatar/Avatar';

class IdeasForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      title: '',
      description: '',
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTeamMembers = this.addTeamMembers.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }

	handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/api/ideas', {
      name: this.state.title,
      leader: this.state.leader,
      description: this.state.description
    }).then(response => {
      console.log(response, 'idea noted!');
    })
  }

  addTeamMembers() {
    alert('Add code to execute when this link is clicked to the addTeamMembers function');
  }

  render() {
    return (
      <div className="container">
          <div className="idea-detail-left-column">
            <Card>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="What's your idea?"
                  autofocus="true"
                  className="idea-details-title-input"
                  value= {this.state.title}
                  onChange={this.handleChangeTitle}
                />
                <textarea
                  placeholder="Describe your idea"
                  className="idea-details-description-input"
                  value={this.state.description}
                  onChange={this.handleChangeDescription}
                >
                </textarea>
                <Link to="/ideas" className="button spacing-inline-m" onClick={this.handleSubmit}>
                  Save idea
                </Link>
                <Link to="/ideas">
                  Cancel
                </Link>
              </form>
            </Card>
          </div>
					<div className="idea-detail-right-column">
            <Card title="Team" links={[{content: 'Add team members', onAction: this.addTeamMembers}]}>
              <Avatar></Avatar>
              <Avatar
                initial="G"
                primaryTextLabel="Geoff Thierman"
                primaryTextStyle="bold"
                subTextLabel="Owner"
                initialsBackgroundColor="#AB34FB"
              >
              </Avatar>
            </Card>
					</div>
				</div>
    );
  }
}

export default IdeasForm;
