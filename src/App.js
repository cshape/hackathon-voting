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
        isLoading: true,
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

// use when testing w/ a local database
  // axios.post('http://localhost:3001/api/ideas', {
 //     name: this.state.title,
 //     leader: this.state.leader,
 //     description: this.state.description
 //   })
 //   .then(response => {
 //     console.log(response, 'idea noted!');
 //   })
 //   .catch(err => {
 //     console.log(err, 'idea not noted god dammit');
 //   })
  //    this.setState({title: ''});
  //    this.setState({leader: ''});
  //    this.setState({description: ''});
 //   }



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
            <Route exact path="/" component={SignIn}/>
           

            <Route
              path='/signup'
              render={(props) => <SignUp onSignUp={this.onSignUp} />}
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
