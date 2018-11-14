import React from 'react';


class FrontPageMembers extends React.Component { 
	constructor(props) {
		super(props);
			this.state = {
				members: ''
			}
		this.id = this.props.id;
	}	

//set the members from the ideasShow component as the state

		componentDidMount(prevProps) {
			console.log(this.props.members);
      let themembers = this.props.members.map((member, i) => {
  					return(
  						<div className="avatarwrapwrap" key={i} id={member._id}>
                <p className="avatarwrapper">{member.name}</p>   
  						</div>
                
  					)
  				})
  				let theleader = this.props.leader;
          console.log(theleader);
          this.setState({ members: themembers
                           })
  			}

//on update, check if the member state in ideasShow has changed. if so, update the members

  		componentDidUpdate(prevProps) {
  			if (prevProps.members !== this.props.members) {
          let themembers = this.props.members.map((member, i) => {
  					return(
  						<div className="avatarwrapper" key={i} id={member._id}>
               <p className="avatarwrapper">{member.name}</p>
              </div>
  					)
  				})
  				this.setState({ members: themembers
           })
  			}
  		}

//display the members

    render() {
    	return (
        	<div>
          	{this.state.members}
        	</div>
    	);
    }
  }


export default FrontPageMembers;