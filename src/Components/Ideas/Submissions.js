import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FrontPageMembers from './FrontPageMembers';


class Submissions extends React.Component {
	constructor(props) {
    	super(props);
			this.state = {
      			submissions: '',
            ideastojoin: []
    		}
	  this.deleteIdea = this.deleteIdea.bind(this);
    this.likeIdea = this.likeIdea.bind(this);
    this.joinTeam = this.joinTeam.bind(this);
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
        console.log("poop");
  		})
  		.catch(err => {
  			console.log(err, "idea not deleted.")
  		})

  	this.setState(() => ({
  		submissions: this.state.submissions.filter(match => match.id !== idKey),
  	}))
  }

  likeIdea(id, event) {
    let button = event.target;
    console.log(button);
    let idKey = button.id;
    let url = `http://localhost:3001/api/idea/${id}`;
    console.log(idKey);

    let likedIdea = this.state.ideastojoin.filter(match => match._id === idKey);

    var likeObject = {
      "likeuser": this.props.user.fullName,
      "date": Date.now()
    }

    console.log(likeObject);

    axios.put(url, likeObject).then(response => {
      console.log(response, "idea liked");
    }).catch(err => {
      console.log(err, "idea not liked");
    })
    console.log(likedIdea);
  }

  


  joinTeam() {
    alert("add code to join a team from this screen");
  }

 

  componentDidMount(props) {

  			fetch('http://localhost:3001/api/ideas')
  			.then(results => {
  				return results.json();
  			}).then(data => {
          let ideastojoin = data;
          console.log(ideastojoin);
          this.setState({ideastojoin: ideastojoin});
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
  									<div className="subdued-text">
                      <div className="type-subdued type-small">Leader: {idea.leader}</div>
  								  </div>
                  </td>
  								<td>
  									<div className="frontpagemembers">
  										<FrontPageMembers id={idea._id} members={idea.members}/>
  									</div>
  								</td>
  								<td>
                      <button onClick={this.likeIdea.bind(this,ideaId)} id={idea._id} className="button button__small">Like</button>
                      <button onClick={this.joinTeam.bind(this,ideaId)} id={idea._id} className="button button__small">Join Team</button>

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
