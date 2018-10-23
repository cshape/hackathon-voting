import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import Avatar from '../UI/Avatar/Avatar';

class IdeasShow extends React.Component {
  result = ''
  constructor(props) {
		super(props);
		this.state = {
      name: '',
      description: '',
    };

    this.id = props.match.params.id;
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/idea/'+ this.id)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        description: data.description
       }));
  }


  render() {
    return (

      <div className="container">
          <div className="idea-detail-left-column">
            <Card>
              <div className="idea-details-title-input">
                {this.state.name}
              </div>
              <div className="idea-details-description-input">
                {this.state.description}
              </div>
            </Card>
          </div>

          <div className="idea-detail-right-column">
            <Card title="Team" links={[{content: 'Add team members', onAction: this.addTeamMembers}]}>
              <Avatar></Avatar>
              <Avatar
                initials="C"
                textLabel="Cale Shapera"
                textStyle="bold"
                subTextLabel="Owner"
                backgroundColor="#FBB134"
              >
              </Avatar>
              <Avatar
                initials="G"
                textLabel="Geoff Thierman"
                textStyle="bold"
                subTextLabel="Designer"
                backgroundColor="#B264E7"
                spacing="none"
              >
              </Avatar>
            </Card>
          </div>
        </div>


      
    );
  }
}

export default IdeasShow;
