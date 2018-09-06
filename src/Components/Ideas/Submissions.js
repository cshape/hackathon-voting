import React from 'react';

class Submissions extends React.Component {
	constructor(props) {
    	super(props);
			this.state = {
      			submissions: "",
    		}
   	}


   		componentDidMount() {
   			fetch('http://localhost:3001/api/ideas')
   			.then(results => {
   				return results.json();
   			}).then(data => {
   				let submissions = data.map((idea) => {
			        return(
			          <div key={idea.results}>
			            <hr />
			            <h2>Title: {idea.name}</h2>
						<h3>Leader: {idea.leader}</h3>
						<p>Description: {idea.description} </p>
						
		          </div>
		          )
			    })
			  this.setState({submissions: submissions})
   			})
   		}

   		componentDidUpdate() {
   			fetch('http://localhost:3001/api/ideas')
   			.then(results => {
   				return results.json();
   			}).then(data => {
   				let submissions = data.map((idea) => {
			        return(
			          <div key={idea.results}>
			          	<hr />
			            <h2>Title: {idea.name}</h2>
						<h3>Leader: {idea.leader}</h3>
						<p>Description: {idea.description} </p>
						
		          </div>
		          )
			    })
			  this.setState({submissions: submissions})
   			})
   		}

        render() {
        	return (
        	<div className="guestdataContainer">
          		<h1>Hackathon Submissions</h1>
          		<br />
          		{this.state.submissions}
        	</div>
        	);
        }
      }

export default Submissions;