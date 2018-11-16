import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FrontPageMembers from './FrontPageMembers';


class Submissions extends React.Component {
	constructor(props) {
    	super(props);
			this.state = {
      			submissions: '',
            liked: false,
            likes: []
    		}
	  this.deleteIdea = this.deleteIdea.bind(this);
    this.likeIdea = this.likeIdea.bind(this);
   	}

// send a DELETE http request to the api to delete the idea with the matching id
// then set the state by to a filtered array of all submissions except the one with the matching id


  deleteIdea(id, event) {
  	let button = event.target;
  	let idKey = button.id;
    let url = `http://localhost:3001/api/idea/${id}`
  	axios.delete(url)
  		.then(response => {
  			console.log(response, "idea deleted.");
  		})
  		.catch(err => {
  			console.log(err, "idea not deleted.")
  		})

  	this.setState(() => ({
  		submissions: this.state.submissions.filter(match => match.key !== idKey),
  	}))
  }

likeIdea(id, event) {
  let url = `http://localhost:3001/api/idea/${id}`;
  let button = event.target;
  let idKey = button.id;
  console.log(idKey);
  axios.post(url)
    .then(response => {
      console.log(response, "idea liked");
      let idea = this.state.likes[idKey];
      idea.total = idea.total + 1;
      this.setState({idea}, () => {
      console.log(this.state.likes);
      })
      this.forceUpdate();
    })
    .catch(err => {
      console.log(err, "idea not liked");
    })
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

 

  componentDidMount(props) {

  			fetch('http://localhost:3001/api/ideas')
  			.then(results => {
  				return results.json();
  			}).then(data => {
  				let submissions = data.map((idea, i) => {
           let path = "/ideasShow/" + idea._id;
           let editPath = "/ideasEdit/" + idea._id;
           let ideaId = idea._id;
           let likesObject = {
            id: ideaId,
            total: idea.likes
           };
           this.setState({
                likes: [...this.state.likes, likesObject]
            });
  	        return(

  	          	<tr className="ideaSubmission" key={i} id={idea._id}>
  								<td>
                    <Link to={path}>
                      <p>{idea.name}</p>
                    </Link><br/>
  									<span className="type-subdued type-small">Leader: {idea.leader}    //    </span>
                    <span className="type-subdued type-small">This idea has a grand total of {this.state.likes[i].total} likes!</span>
  								</td>
  								<td>
  									<div className="frontpagemembers">
  										<FrontPageMembers id={idea._id} members={idea.members}/>
  									</div>
  								</td>
  								<td>
                      <button onClick={this.likeIdea.bind(this,ideaId)} id={i} className="button button__small">Like</button>

                    {idea.leader === this.props.user.fullName &&
                      <Link to={editPath}><button className="button button__small">Edit</button></Link>
                    }
                    {idea.leader === this.props.user.fullName &&
                      <button onClick={this.deleteIdea.bind(this,ideaId)} id={i} className="button button__small">Delete</button>
                    }
                  </td>
  	          	</tr>

            )
  	    })
  	       this.setState({submissions: submissions.reverse()});
  	       // console.log(submissions);
  	       console.log(this.state.submissions);
           console.log(this.state.likes[0]);
  			})
  }

    componentDidUpdate() {
      if (this.state.liked == true) {

      }
    }



        render() {

          console.log(this.props.user);
        	return (
        	<div className="Submissions">
	      		<table>
							<tr>
								<th>Idea name</th>
								<th>Team</th>
								<th>Actions</th>
							</tr>
	      			{this.state.submissions}
	      		</table>
        	</div>
        	);
        }
      }

export default Submissions;
