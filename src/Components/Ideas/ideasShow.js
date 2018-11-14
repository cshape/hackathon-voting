import React from 'react';
import axios from 'axios';
import Card from '../UI/Card/Card';
import Parser from 'html-react-parser';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import IdeaComments from './IdeaComments.js';
import IdeaMembers from './IdeaMembers';

class IdeasShow extends React.Component {
  result = ''
  constructor(props) {
		super(props);
		this.state = {
      name: '',
      description: '',
      comments: [],
      leader: '',
      members: [],
      currentcomment: ''
    };

    this.id = props.match.params.id;
    this.addMembers = this.addMembers.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

handleChangeComment(value) {
    this.setState({ currentcomment: value });
  }
 
handleSubmitComment(event) {
    event.preventDefault();
    console.log(this.state);
    let url = `http://localhost:3001/api/idea/${this.id}`;
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
      this.forceUpdate();
    });
  });  
 }

  deleteMember(id, event) {
    let button = event.target;
    let idKey = button.id;
    let url = `http://localhost:3001/api/idea/members/${this.id}`;

    axios.put(url, {
      members: this.state.members.filter(match => match.key !== idKey)
    })
      .then(response => {
        console.log(response, "member removed")
      })
      .catch(err => {
        console.log(err, "member not removed")
      })

    this.setState(() => ({
      members: this.state.members.filter(match => match.key !== idKey),
    }))
  }

  addMembers() {
    let url = `http://localhost:3001/api/idea/${this.id}`
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

  componentDidMount() {

    fetch('http://localhost:3001/api/idea/'+ this.id)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        description: data.description,
        members: data.members,
        leader: data.leader,
        comments: data.comments
       }, () => {
        console.log(this.state);
       })); 
  }





  render() {   

    return (
      


    <div>
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
            <Card title="Comments">
             
             <IdeaComments id={this.id} comments={this.state.comments} />
             <ReactQuill
                  placeholder="Add a comment"
                  className="idea-details-description-input"
                  value={this.state.currentcomment}
                  onChange={this.handleChangeComment}
                >
                </ReactQuill>
                <button className="button" onClick={this.handleSubmitComment}>
                  Post comment
                </button> 
            </Card>
          </div>

          <div className="idea-detail-right-column">
            
            <Card title="Team" links={[{content: 'Join Team', onAction: this.addMembers}]}>
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
      </div>

      
    );
  }
}

export default IdeasShow;
