import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div>
        <p>showing stuff for user {this.id}</p>
        <p>{this.state.name}</p>
        <p>---</p>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default IdeasShow;
