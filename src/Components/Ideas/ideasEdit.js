import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import { withRouter } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import IdeaMembers from './IdeaMembers';

class IdeasEdit extends React.Component {
  result = ''
  constructor(props) {
		super(props);
		this.state = {
      name: '',
      description: '',
      leader: '',
      members: [],
      title: ''
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTeamMembers = this.addTeamMembers.bind(this);
    this.id = props.match.params.id;
  }

    

  componentDidMount() {
    fetch('https://mighty-springs-20769.herokuapp.com/api/idea/'+ this.id)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        description: data.description,
        leader: data.leader,
        members: data.members
       }));
  }

handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

handleChangeDescription(value) {
    this.setState({ description: value });
  }

  deleteIdea(id, event) {
    let button = event.target;
    let idKey = button.id;
    let url = `https://mighty-springs-20769.herokuapp.com/api/idea/${id}`
    axios.delete(url)
      .then(response => {
        console.log(response, "idea deleted.")
      })
      .catch(err => {
        console.log(err, "idea not deleted.")
      })

    this.setState(() => ({
      submissions: this.state.submissions.filter(match => match.key !== idKey),
    }))
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = `https://mighty-springs-20769.herokuapp.com/api/idea/${this.id}`
    axios.put(url, {
      name: this.state.name,
      leader: this.state.leader,
      description: this.state.description
    }).then(response => {
      console.log(response, 'idea edited!');
      this.props.history.push(`/ideasShow/${this.id}`);
    })
  }

  addTeamMembers() {
    let url = `https://mighty-springs-20769.herokuapp.com/api/idea/${this.id}`
    var newMember = prompt("Enter the name of the new team member");
    var newRole = prompt("What will their role be?");
    var memberObject = {
      'name': newMember,
      'role': newRole
    }
    this.setState({
      members: [...this.state.members, memberObject]
    }, () => {
      axios.put(url, {
        members: this.state.members
      }).then(response => {
        console.log(response, 'member added');
        console.log(this.state.members);
      });
    });
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
                  value= {this.state.name}
                  onChange={this.handleChangeTitle}
                />
                <ReactQuill
                  placeholder="Describe your idea"
                  className="idea-details-description-input"
                  value={this.state.description}
                  onChange={this.handleChangeDescription}
                >
                </ReactQuill>
                <div className="button-row">
                  <div className="button" onClick={this.handleSubmit}>
                    Save idea
                  </div>
                  <Link className="button" to="/ideas">
                    Cancel
                  </Link>
                </div>
              </form>
            </Card>
          </div>
          <div className="idea-detail-right-column">
            <Card title="Team" links={[{content: 'Add team members', onAction: this.addTeamMembers}]}>
               {/*<Avatar
                  initials={this.state.leader.charAt(0)}
                  textLabel={this.state.leader}
                  textStyle="bold"
                  subTextLabel="Leader"
                  backgroundColor="#FBB134" />*/}
              <IdeaMembers id={this.id} members={this.state.members} />
            </Card>
          </div>
        </div>


      
    );
  }
}

export default withRouter(IdeasEdit);
