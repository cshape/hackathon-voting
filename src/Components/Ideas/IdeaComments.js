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

		componentDidMount(prevProps) {

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
  			console.log(prevProps);
  			console.log(thecomments);
  			this.setState({ comments: thecomments })
  			})
  		}

  		componentDidUpdate(prevProps) {
  			if (prevProps.comments !== this.props.comments) {
  				let thecomments = this.props.comments.map((comment, i) => {
  					return(
  						<div className="legitcomments" key={i} id={comment._id}>
  							<h4>{comment.author}</h4>
  							{Parser(`${comment.text}`)}
  						</div>
  					)
  				})
  				this.setState({ comments: thecomments })
  			}
  		}

    render() {
    	return (
        	<div>
        		<div className="ideacomments">
          			<div className="commentlist">
          				{this.state.comments}
          			</div>
        		</div>
        	</div>
    	);
    }
  }


export default IdeaComments;