import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import Avatar from '../UI/Avatar/Avatar';
import { withRouter } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

  handleChangeDescription(value) {
    this.setState({ description: value });
  }

	handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/api/ideas', {
      name: this.state.title,
      leader: this.state.leader,
      description: this.state.description
    }).then(response => {
      console.log(response, 'idea noted!');
      this.props.history.push(`/ideasShow/${response.data._id}`);
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
                <ReactQuill
                  placeholder="Describe your idea"
                  className="idea-details-description-input"
                  value={this.state.description}
                  onChange={this.handleChangeDescription}
                >
                </ReactQuill>
                <br />
                <br />
                <br />
                <div className="button spacing-inline-m" onClick={this.handleSubmit}>
                  Save idea
                </div>
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
                initials="C"
                textLabel="Cale Shapera"
                textStyle="bold"
                subTextLabel="Owner"
                backgroundColor="#FBB134"
              >
              </Avatar>
              <Avatar
                initials="G"
                textLabel="Geoff Thierman"
                textStyle="bold"
                subTextLabel="Designer"
                backgroundColor="#B264E7"
                spacing="none"
              >
              </Avatar>
            </Card>
					</div>
				</div>
    );
  }
}

export default withRouter(IdeasForm);
