import React from 'react';
import Avatar from '../UI/Avatar/Avatar';
import axios from 'axios';


class IdeaMembers extends React.Component { 
	constructor(props) {
		super(props);
			this.state = {
				members: ''
			}
		this.id = this.props.id;
    this.deleteMember = this.deleteMember.bind(this);
	}	


deleteMember(id, event) {
    let button = event.target;
    let idKey = button.id;
    let url = `http://localhost:3001/api/ideas/members/${this.id}`;
    let member2kill = this.state.members.filter(match => match.key === idKey);
    console.log(member2kill[0].props.id);

    axios.post(url, {
      deletionId: member2kill[0].props.id
    })
      .then(response => {
        console.log(response, "member removed")
      })
      .catch(err => {
        console.log(err, "member not removed")
      })

    this.setState(() => ({
      members: this.state.members.filter(match => match.key !== idKey),
    }))
  }

//set the members from the ideasShow component as the state

		componentDidMount(prevProps) {
			console.log(this.props.members);
      let themembers = this.props.members.map((member, i) => {
  					let memberId = member._id;
            return(
  						<div className="avatarwrapper" key={i} id={member._id}>
                <Avatar
                  initials={member.name.charAt(0)}
                  textLabel={member.name}
                  textStyle="bold"
                  subTextLabel={member.role}
                  backgroundColor="#FBB134" />
               <button id={i} onClick={this.deleteMember.bind(this, memberId)} className="button button__small">Leave Team</button>   
  						</div>
  					)
  				})
          this.setState({ members: themembers
                           });
          console.log(themembers);
  			}

//on update, check if the member state in ideasShow has changed. if so, update the comments

  		componentDidUpdate(prevProps) {
  			if (prevProps.members !== this.props.members) {
          let themembers = this.props.members.map((member, i) => {
  					let memberId = member._id;
            return(
  						<div className="avatarwrapper" key={i} id={member._id}>
                <Avatar
                  initials={member.name.charAt(0)}
                  textLabel={member.name}
                  textStyle="bold"
                  subTextLabel={member.role}
                  backgroundColor="#FBB134" />
                <a id={i} onClick={this.deleteMember.bind(this, memberId)}>Leave Team</a>
               
              </div>
  					)
  				})
  				this.setState({ members: themembers
           })
          console.log(themembers);
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