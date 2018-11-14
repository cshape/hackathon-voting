import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FrontPageMembers from './FrontPageMembers';


class Submissions extends React.Component {
	constructor(props) {
    	super(props);
			this.state = {
      			submissions: '',
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
    var likeObject = {
      'user': this.props.user.fullName,
      'date': Date.now()
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        likes: [...data.likes, likeObject]
      }, () => {
        console.log(this.state.likes)
        console.log(data);
      }))
    
    console.log(likeObject);
    axios.put(url, likeObject).then(response => {
      console.log(response, "like added");
    })
    this.setState({
      likes: ''
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

  	        return(

  	          	<tr className="ideaSubmission" key={i} id={idea.id}>
  								<td>
                    <Link to={path}>
                      <p>{idea.name}</p>
                    </Link><br/>
  									<span className="type-subdued type-small">Leader: {idea.leader}</span>
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
  			})
  }

   		// componentDidUpdate() {
   		// 	let deleteIdea = this.props.deleteIdea.bind(this);

   		// 	fetch('https://mighty-springs-20769.herokuapp.com/api/ideas')
   		// 	.then(results => {
   		// 		return results.json();
   		// 	}).then(data => {
   		// 		let submissions = data.map((idea) => {
			  //       return(
			  //         <div key={idea.results}>
			  //         	<hr />
			  //           <h2>{idea.name}</h2>
					// 	<h3>Leader: {idea.leader}</h3>
					// 	<p>Description: {idea.description} </p>
					// 	<button onClick={deleteIdea} className="delete">Delete</button>
		   //        </div>
		   //        )
			  //   })
			  // this.setState({submissions: submissions})
   		// 	})
   		//




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
