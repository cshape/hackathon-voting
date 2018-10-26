import React from 'react';
import '../../App.css';

class SubmittedIdeas extends React.Component { 	


    render() {
    	return (
        	<div>
        		<div className="submissions">
          			{this.props.submissions}
        		</div>
        	</div>
    	);
    }
}

export default SubmittedIdeas;