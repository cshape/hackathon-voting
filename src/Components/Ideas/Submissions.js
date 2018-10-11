import React from 'react';
import axios from 'axios';



class Submissions extends React.Component {
	constructor(props) {
    	super(props);
			this.state = {
      			submissions: '',
    		}
	  this.deleteIdea = this.deleteIdea.bind(this);


   	}


deleteIdea(event) {
	let button = event.target;
	let idKey = button.id;
	let idea = button.parentNode.firstChild.nextSibling.textContent;
	axios.delete('https://mighty-springs-20769.herokuapp.com/api/ideas', {
		data: { name: idea }
		})
		.then(response => {
			console.log(response, "idea deleted.")
		})
		.catch(err => {
			console.log(err, "idea not deleted.")
		})
	console.log(idea);
	// this.setState({
	// 	submissions: "poop",
	// });
	// this.setState({
	// 	submissions: this.state.submissions.filter(newlist => this.state.submissions.key !== "poop"),
	// });

	this.setState(() => ({
		submissions: this.state.submissions.filter(match => match.key !== idKey),
	}))
}

// use when testing locally

	// componentDidMount() {
	// // let deleteIdea = this.props.deleteIdea.bind(this);



	// fetch('http://localhost:3001/api/ideas')
 //   			.then(results => {
 //   				return results.json();
 //   			}).then(data => {
 //   				let submissions = data.map((idea, i) => {
	// 		        return(

	// 		          	<div className="ideaSubmission" key={i} id={idea.id}>
	// 			            <hr />
	// 			            <h2>{idea.name}</h2>
	// 						<h3>Leader: {idea.leader}</h3>
	// 						<p>Description: {idea.description} </p>
	// 						<button onClick={this.deleteIdea.bind(this)} id={i}>Delete</button>
	// 		          	</div>

	// 	          )

	// 		    })
	// 		        this.setState({submissions: submissions});
	// 		  // console.log(submissions);
	// 		  console.log(this.state.submissions);
 //   			})
 //   		}

   		//  componentDidUpdate(prevProps, prevState) {



   		// 	fetch('http://localhost:3001/api/ideas')
   		// 	.then(results => {
   		// 		return results.json();
   		// 	}).then(data => {
   		// 		let submissions = data.map((idea, i) => {
			  //       return(

			  //         	<div className="ideaSubmission" key={i} id={idea.id}>
				 //            <hr />
				 //            <h2>{idea.name}</h2>
					// 		<h3>Leader: {idea.leader}</h3>
					// 		<p>Description: {idea.description} </p>
					// 		<button onClick={this.deleteIdea.bind(this)} id={i}>Delete</button>
			  //         	</div>

		   //        )
			  //   })
			  // this.setState({submissions: submissions})

   		// 	})
   		// }










 // use when live on heroku
   		componentDidMount() {



   			fetch('https://mighty-springs-20769.herokuapp.com/api/ideas')
   			.then(results => {
   				return results.json();
   			}).then(data => {
   				let submissions = data.map((idea, i) => {
			        return(

			          	<div className="ideaSubmission" key={i} id={idea.id}>
				            <hr />
				            <h2>{idea.name}</h2>
							<h3>Leader: {idea.leader}</h3>
							<p>Description: {idea.description} </p>
							<button onClick={this.deleteIdea.bind(this)} id={i} className="button">Delete</button>
			          	</div>

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
          		<h1>Hackathon Submissions</h1>
          		<br />
          		<ul>
          			{this.state.submissions}
          		</ul>
        	</div>
        	);
        }
      }

export default Submissions;
