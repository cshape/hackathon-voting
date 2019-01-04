import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import { withRouter } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class IdeasForm extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      title: '',
      description: '',
      leader: '',
      members: [],
      comments: []
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      members: [{
        'name': this.props.user.fullName,
        'role': 'Leader'
      }]
    })
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
      leader: this.props.user.fullName,
      description: this.state.description,
      members: this.state.members,
      likes: 0,
      hacksession: 'January 2019'
    }).then(() => {
      this.props.history.push('/Ideas');
    })
  }

  render() {
    return (
      <div className="container">
          <div className="idea-detail-left-column">
            <Card id="newIdea">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Idea title"
                  autofocus="true"
                  className="idea-details-title-input"
                  value= {this.state.title}
                  onChange={this.handleChangeTitle}
                />
                <ReactQuill
                  placeholder="Idea description"
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
				</div>
    );
  }
}

export default withRouter(IdeasForm);
