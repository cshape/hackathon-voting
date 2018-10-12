import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Submissions extends React.Component {
	constructor(props) {
    	super(props);
			this.state = {
      			submissions: '',
    		}
	  this.deleteIdea = this.deleteIdea.bind(this);


   	}


  deleteIdea(id, event) {
    debugger
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

  componentDidMount() {

  			fetch('http://localhost:3001/api/ideas')
  			.then(results => {
  				return results.json();
  			}).then(data => {
  				let submissions = data.map((idea, i) => {
           let path = "/ideasShow/" + idea._id;
           let ideaId = idea._id
  	        return(

  	          	<tr className="ideaSubmission" key={i} id={idea.id}>
  								<td>
                    <Link to={path}>
                      <a>{idea.name}</a>
                    </Link><br/>
  									<span class="type-subdued type-small">Owned by {idea.leader}</span>
  								</td>
  								<td>
  									<div className="avatar">
  										<div className="avatar-picture">
  											C
  										</div>
  										<div className="avatar-picture">
  											C
  										</div>
  										<div className="avatar-picture">
  											C
  										</div>
  									</div>
  								</td>
  								<td><button onClick={this.deleteIdea.bind(this,ideaId)} id={i} className="button button__small">Delete</button></td>
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
