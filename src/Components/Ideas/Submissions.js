import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FrontPageMembers from './FrontPageMembers';
import IdeaLikes from './IdeaLikes';
import HackImage from '../../hackidea.jpg'


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
    let url = `https://mighty-springs-20769.herokuapp.com/api/idea/${id}`
  	axios.delete(url)
  		.catch(err => {
  			console.log(err, "idea not deleted.")
  		})

  	this.setState(() => ({
  		submissions: this.state.submissions.filter(match => match.key !== idKey),
  	}))
  }

likeIdea(id, event) {
  let url = `https://mighty-springs-20769.herokuapp.com/api/idea/${id}`;
  let button = event.target;
  let idKey = button.id;
  axios.post(url)
    .then(() => {
      let ideaLikesHolder = `idea${idKey}likes`;
      let idea = this.state[ideaLikesHolder];
      this.setState({
        [ideaLikesHolder]: +this.state[ideaLikesHolder] + 1,
        liked: true
      })
    })
    .catch(err => {
      console.log(err, "idea not liked");
    })
};

  componentDidMount(props) {
        let width = { maxWidth: '50vw' };

  			fetch('https://mighty-springs-20769.herokuapp.com/api/ideas')
  			.then(results => {
  				return results.json();
  			}).then(data => {
  				let submissions = data.map((idea, i) => {
           let path = "/ideasShow/" + idea._id;
           let editPath = "/ideasEdit/" + idea._id;
           let ideaId = idea._id;

           let ideaLikesHolder = `idea${i}likes`;
           this.setState({
            [ideaLikesHolder]: idea.likes
           });
  	        return(
  	          	<tr className="ideaSubmission" key={i} id={idea._id}>
  								<td style={width}>
                    <Link to={path}>
                      <p><strong>{idea.name}</strong></p>
                    </Link><br/>
  									<span className="type-subdued type-small">Leader: {idea.leader}</span>
                    <IdeaLikes likes={this.state[ideaLikesHolder]} />
  								</td>
  								<td>
  									<div className="frontpagemembers">
  										<FrontPageMembers id={idea._id} members={idea.members}/>
  									</div>
  								</td>
  								<td>
                      <button onClick={this.likeIdea.bind(this,ideaId)} id={i} className="button button__clap">Clap</button>
                    {idea.leader === localStorage.getItem('fullName') &&
                      <Link to={editPath}><button className="button button__small">Edit</button></Link>
                    }
                    {idea.leader === localStorage.getItem('fullName') &&
                      <button onClick={this.deleteIdea.bind(this,ideaId)} id={i} className="button button__small">Delete</button>
                    }
                  </td>
  	          	</tr>
            )
  	    })
  	       this.setState({submissions: submissions.reverse()});
  			})
  }

  componentDidUpdate() {
    if (this.state.liked == true) {
      fetch('https://mighty-springs-20769.herokuapp.com/api/ideas')
        .then(results => {
          return results.json();
        }).then(data => {
          let submissions = data.map((idea, i) => {
           let path = "/ideasShow/" + idea._id;
           let editPath = "/ideasEdit/" + idea._id;
           let ideaId = idea._id;
           let ideaLikesHolder = `idea${i}likes`;
           this.setState({
            [ideaLikesHolder]: idea.likes
           });
            return(
                <tr className="ideaSubmission" key={i} id={idea._id}>
                  <td>
                    <Link to={path}>
                      <p><strong>{idea.name}</strong></p>
                    </Link><br/>
                    <span className="type-subdued type-small">Leader: {idea.leader}</span>
                    <IdeaLikes likes={this.state[ideaLikesHolder]} />
                  </td>
                  <td>
                    <div className="frontpagemembers">
                      <FrontPageMembers id={idea._id} members={idea.members}/>
                    </div>
                  </td>
                  <td>
                    <button onClick={this.likeIdea.bind(this,ideaId)} id={i} className="button button__clap">Clap</button>
                    {idea.leader === localStorage.getItem('fullName') &&
                      <Link to={editPath}><button className="button button__small">Edit</button></Link>
                    }
                    {idea.leader === localStorage.getItem('fullName') &&
                      <button onClick={this.deleteIdea.bind(this,ideaId)} id={i} className="button button__small">Delete</button>
                    }
                  </td>
                </tr>
            )
        })
           this.setState({submissions: submissions.reverse()});
           this.setState({liked: false});
      })
    }
  }
  render() {
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
