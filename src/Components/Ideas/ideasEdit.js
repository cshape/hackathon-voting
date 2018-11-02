import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import Avatar from '../UI/Avatar/Avatar';
import { withRouter } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class IdeasEdit extends React.Component {
  result = ''
  constructor(props) {
		super(props);
		this.state = {
      name: '',
      description: '',
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTeamMembers = this.addTeamMembers.bind(this);
    this.id = props.match.params.id;
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/idea/'+ this.id)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        description: data.description
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
    let url = `http://localhost:3001/api/idea/${id}`
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
    let url = `http://localhost:3001/api/idea/${this.id}`
    axios.put(url, {
      name: this.state.name,
      leader: this.state.leader,
      description: this.state.description
    }).then(response => {
      console.log(response, 'idea edited!');
      this.props.history.push('/Ideas');
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

export default withRouter(IdeasEdit);
