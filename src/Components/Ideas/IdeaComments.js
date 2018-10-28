import React from 'react';
import Parser from 'html-react-parser';

class IdeaComments extends React.Component { 
	constructor(props) {
		super(props);
			this.state = {
				comments: ''
			}
		this.id = this.props.id;
	}	



componentDidMount() {


			fetch('http://localhost:3001/api/idea/'+ this.id)
  			 .then(response => response.json())
		      .then(data => {
		      	let onlycomments = data.comments;
  				let thecomments = onlycomments.map((comment, i) => {
	           let commentId = comment._id
	  	        return(
	  	        	<div className="legitcomments" key={i} id={commentId}>
		  	        	<h4>{comment.author}</h4>
		  	        	{Parser(`${comment.text}`)}
		  	        </div>
  	          	)
  	          })
  			console.log(thecomments);
  			this.setState({ comments: thecomments })
  			})
  			
  		}

  	// 	componentDidUpdate() {


			// fetch('http://localhost:3001/api/idea/'+ this.id)
  	// 		 .then(response => response.json())
		 //      .then(data => {
		 //      	let onlycomments = data.comments;
  	// 			let thecomments = onlycomments.map((comment, i) => {
	  //          let commentId = comment._id
	  // 	        return(
	  // 	        	<div className="legitcomments" key={i} id={commentId}>
		 //  	        	<h4>{comment.author}</h4>
		 //  	        	{Parser(`${comment.text}`)}
		 //  	        </div>
  	//           	)
  	//           })
  	// 		console.log(thecomments);
  	// 		this.setState({ comments: thecomments })
  	// 		})
  			
  	// 	}

    render() {
    	return (
        	<div>
        		<div className="ideacomments">
        		<h1>what the hell</h1>
          			<div className="commentlist">
          				{this.state.comments}
          			</div>
        		</div>
        	</div>
    	);
    }
  }


export default IdeaComments;