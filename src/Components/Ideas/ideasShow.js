import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class IdeasShow extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
    };

    this.id = props.match.params.id
  }

  render() {
    return (
      <div>
        <p>showing stuff for user {this.id}</p>
      </div>
    );
  }
}

export default IdeasShow;
