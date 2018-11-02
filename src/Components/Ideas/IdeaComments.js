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

//set the comments from the ideasShow component as the state

		componentDidMount(prevProps) {
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

//on update, check if the comment state in ideasShow has changed. if so, update the comments

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

//display the comments

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