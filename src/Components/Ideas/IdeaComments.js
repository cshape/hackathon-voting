import React from 'react';
import Parser from 'html-react-parser';
import ta from 'time-ago';

// var ta = require('./time-ago.js')

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
  							<div className="comment-header">
                  <p>{comment.author}</p>
                  <p>{ta.ago(comment.date)}</p>
                </div>
  							<div className="comment-body">
                  {Parser(`${comment.text}`)}
                </div>
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
                <div className="comment-header">
                  <p>{comment.author}</p>
                  <p>{ta.ago(comment.date)}</p>
                </div>
                <div className="comment-body">
                  {Parser(`${comment.text}`)}
                </div>
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