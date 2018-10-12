import React, { Component } from 'react';
import Ideas from './Components/Ideas/Ideas';
import SignIn from './Components/SignIn/Signin';
import SignUp from './Components/SignIn/SignUp';
import axios from 'axios';

import { Route, NavLink, BrowserRouter, Link } from 'react-router-dom';

import ideasForm from './Components/Ideas/ideasForm';
import ideasShow from './Components/Ideas/ideasShow';


import './App.scss';

class App extends Component {

  constructor() {
    super()
      this.state = {
        route: 'signin',
        user: {},
        signedIn: false,
        isLoading: false,
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: '',
        firstname: '',
        lastname: ''
        }
    this.signIn = this.signIn.bind(this);
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

    componentDidMount() {
   this.setState({
     isLoading: false
   });
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

  signIn = () => {
   this.setState(prevState => ({
    signedIn: !prevState.signedIn
  }));
    console.log(this.state.signedIn);
  }

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
      firstname,
      lastname
    } = this.state;
    this.setState({
      isLoading: true,
    });

    console.log("attempting signup");
    console.log(this.state.firstname);
    // Post request to backend
    
      axios.post('https://mighty-springs-20769.herokuapp.com/api/users/signup', {
        email: signUpEmail,
        password: signUpPassword,
        firstname: firstname,
        lastname: lastname
      })
      .then(response => {
        console.log(response, 'new user added!');
      })
      .catch(err => {
        console.log(err, 'something fucked happened');
      })
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({firstname: ''});
        this.setState({lastname: ''});
      }



  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <header className="app-header">
            <h1><Link to="/ideas">Clio Hackathon Forum</Link></h1>
            <div className="cond-button">

              { //Check if message failed
                (this.state.signedIn == false)
                  ? <div><Link onClick={this.signIn} to="/ideas" className="button">Sign In</Link></div>
                  : <div><Link onClick={this.signIn} to="/">Sign Out</Link>
                    <Link to="/ideasForm" className="button">New Idea</Link></div>
              }

            </div>
          </header>
          <div className="app-body">
            <Route  exact path="/" 
                    render={(props) => <SignIn 
                    signIn={this.signIn} 
                    onTextboxChangeSignInEmail={this.onTextboxChangeSignInEmail}
                    onTextboxChangeSignInPassword={this.onTextboxChangeSignInPassword}
                      />}
                  />
           

            <Route
              path='/signup'
              render={(props) => <SignUp 
                onSignUp={this.onSignUp} 
                onTextboxChangeSignUpEmail={this.onTextboxChangeSignUpEmail}
                onTextboxChangeSignUpPassword={this.onTextboxChangeSignUpPassword}
                />}
            />


            <Route path="/ideas" component={Ideas}/>
            <Route path="/ideasShow/:id" component={ideasShow}/>
            <Route path="/ideasForm" component={ideasForm}/>
          </div>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
