import React from 'react';

class Submissions extends React.Component {
	constructor(props) {
    	super(props);
			this.state = {
      			submissions: "",
    		}
   	}

       // componentDidMount() {
       // 	fetch('http://localhost:3001/api/ideas')
       // 	.then(results => {
       // 		console.log(results.json());
       // 	})
       // }


   		componentDidMount() {
   			fetch('http://localhost:3001/api/ideas')
   			.then(results => {
   				return results.json();
   			}).then(data => {
   				let submissions = data.map((idea) => {
			        return(
			          <div key={idea.results}>
			            <h3>{idea.name}</h3>
						<h2>{idea.leader}</h2>
						<p> {idea.description} </p>
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
			            <h3>{idea.name}</h3>
						<h2>{idea.leader}</h2>
						<p> {idea.description} </p>
		          </div>
		          )
			    })
			  this.setState({submissions: submissions})
   			})
   		}

        render() {
        	return (
        	<div className="guestdataContainer">
          		<h6>Hackathon Submissions</h6>
          		{this.state.submissions}
        	</div>
        	);
        }
      }

export default Submissions;