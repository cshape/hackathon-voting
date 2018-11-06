import React from 'react';
import Parser from 'html-react-parser';
import Avatar from '../UI/Avatar/Avatar';


class IdeaMembers extends React.Component { 
	constructor(props) {
		super(props);
			this.state = {
				comments: ''
			}
		this.id = this.props.id;
	}	

//set the members from the ideasShow component as the state

		componentDidMount(prevProps) {
			console.log(this.props.members);
      let themembers = this.props.members.map((member, i) => {
  					return(
  						<div className="avatarwrapper" key={i} id={member._id}>
                <Avatar
                  initials={member.name.charAt(0)}
                  textLabel={member.name}
                  textStyle="bold"
                  subTextLabel={member.role}
                  backgroundColor="#FBB134" />
                  
  						</div>
  					)
  				})
  				let theleader = this.props.leader;
          console.log(theleader);
          this.setState({ members: themembers
                           })
  			}

//on update, check if the member state in ideasShow has changed. if so, update the comments

  		componentDidUpdate(prevProps) {
  			if (prevProps.members !== this.props.members) {
          let themembers = this.props.members.map((member, i) => {
  					return(
  						<div className="avatarwrapper" key={i} id={member._id}>
                <Avatar
                  initials={member.name.charAt(0)}
                  textLabel={member.name}
                  textStyle="bold"
                  subTextLabel={member.role}
                  backgroundColor="#FBB134" />
               
              </div>
  					)
  				})
          let theleader = this.props.leader;
  				this.setState({ members: themembers
           })
  			}
  		}

//display the comments

    render() {
    	return (
        	<div>
          	{this.state.members}
        	</div>
    	);
    }
  }


export default IdeaMembers;