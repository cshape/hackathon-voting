import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class SignUp extends React.Component {
	constructor(props){
		super(props);
	}

onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

	render () {
		return (
			<div className="card sign-in-card">
				<div class="card-title"><h1>Sign up</h1></div>
				<input type="text" placeholder="First name" className="spacing-stack-m"/>
				<input type="text" placeholder="Last name" className="spacing-stack-m"/>
				<input type="text" 
					   placeholder="Email" 
					   className="spacing-stack-m"
					   onChange={this.props.onTextboxChangeSignUpEmail}/>
				<input type="password" 
					   placeholder="Password" 
					   className="spacing-stack-m"
					   onChange={this.props.onTextboxChangeSignUpPassword}/>
				<Link to="/ideas" onClick={this.props.onSignUp} className="button spacing-inline-m">
					Sign up
				</Link>
				<Link to="/">
					Sign in
				</Link>
			</div>
		);
	}
}

export default SignUp;
