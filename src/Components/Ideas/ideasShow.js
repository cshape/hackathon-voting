import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import Avatar from '../UI/Avatar/Avatar';
import Parser from 'html-react-parser';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import IdeaComments from './IdeaComments.js';

class IdeasShow extends React.Component {
  result = ''
  constructor(props) {
		super(props);
		this.state = {
      name: '',
      description: '',
      comments: [],
      members: [],
      currentcomment: ''
    };

    this.id = props.match.params.id;
    this.addTeamMembers = this.addTeamMembers.bind(this);
    this.commentSubmit = this.commentSubmit.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChangeComment(value) {
    this.setState({ currentcomment: value });
  }
 



handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    let url = `http://localhost:3001/api/idea/${this.id}`
    var commentObject = {
      'author': this.props.user.fullName,
      'text': this.state.currentcomment,
      'date': Date.now()
    }



     this.setState({
      comments: [...this.state.comments, commentObject]
    }, () => {
      console.log(this.state.comments);
      axios.put(url, {
        comments: this.state.comments
      }).then(response => {
      console.log(response, 'comment added');
      this.setState({ currentcomment: ''})
      console.log(this.state.comments);
    });
  });


     
  }

  addTeamMembers() {
    alert('Add code to execute when this link is clicked to the addTeamMembers function');
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/idea/'+ this.id)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        description: data.description,
        members: data.members,
        comments: data.comments
       }));
      console.log(this.state);
  }

  commentSubmit() {
    alert("write function to submit a comment to the db.");
  }


  render() {
    let comments = this.state.comments;
    return (
      
      <div className="container">
          <div className="idea-detail-left-column">
            <Card>
              <div className="idea-details-title-input">
                {this.state.name}
              </div>
              <div className="idea-details-description-input">
                {Parser(`${this.state.description}`)}
              </div>
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
            <div className="idea-detail-right-column">
            <Card title="Comments">
              <IdeaComments id={this.id} comments={comments} />
             
              <ReactQuill
                  placeholder="Add a comment"
                  className="idea-details-description-input"
                  value={this.state.currentcomment}
                  onChange={this.handleChangeComment}
                >
                </ReactQuill>
                <div className="button spacing-inline-m" onClick={this.handleSubmit}>
                  Post comment
                </div>
            </Card>
          </div>
        </div>


      
    );
  }
}

export default IdeasShow;
