import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignIn extends React.Component {
	constructor(props){
		super(props);
	}

onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }


render() {
	return (
		<div className="card sign-in-card">
			<div class="card-title"><h1>Login</h1></div>
			<input type="text" 
				   placeholder="Email"
				   className="spacing-stack-m"
				   onChange={this.props.onTextboxChangeSignInEmail}/>
			<input type="password"
				   placeholder="Password" 
				   className="spacing-stack-m"
				   onChange={this.props.onTextboxChangeSignInPassword}/>
			<Link onClick={this.props.signIn} to="/ideas" className="button spacing-inline-m">
				Sign in
			</Link>
			<Link to="/signup">
				Sign up
			</Link>
		</div>
	);
  }
}


export default SignIn;
