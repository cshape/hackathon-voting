import React, { Component } from 'react';
import Config from './config.json';
import Ideas from './Components/Ideas/Ideas';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

import { Route, Redirect, BrowserRouter, Link } from 'react-router-dom';

import IdeasForm from './Components/Ideas/ideasForm';
import IdeasShow from './Components/Ideas/ideasShow';
import IdeasEdit from './Components/Ideas/ideasEdit';


import './App.scss';

class App extends Component {

  constructor() {
    super()
      this.state = {
        route: 'signin',
        isAuthenticated: false,
        user: null, 
        token: ''
        }
    this.logout = this.logout.bind(this);
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null});
  };



googleResponse = (response) => {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              access_token: response.accessToken
            }),
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3001/api/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            console.log(token);
            r.json().then(user => {
                console.log("user email:", user.email);
                if (token) {
                    this.setState({isAuthenticated: true, user, token});
                    console.log(this.state);
                    console.log(user);
                }
            });
        })
    };

  onFailure = (error) => {
      alert(error);
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

signOut() {
  this.setState(prevState => ({
    signedIn: !prevState.signedIn
  }))
}  

onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });


    // Post request to backend
    fetch('http://localhost:3001/api/google', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            signedIn: true
          });
        console.log("signedin:", this.state.signedIn);

        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: ''
          });
          console.log("signedin:", this.state.signedIn);
        }
      });
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

    let loggedinuser = this.state.user;

    return (
      <BrowserRouter basename="/hackathon-voting">
      <div className="App">
          <header className="app-header">
            <h1><Link to="/ideas">Clio Hackathon Forum</Link></h1>
            <div className="cond-button">

              { 
                (this.state.isAuthenticated === true)
                  ? <div><div><Link to="/ideasForm" className="button">New Idea as: {this.state.user.fullName}</Link></div>
                    <div onClick={this.logout} className="button">Log out</div></div>
                  : <div></div>
              }

            </div>
          </header>
          <div className="app-body">
            <Route  exact path="/" 
                    render={(props) => (
                    this.state.isAuthenticated === true ? (  
                      <Redirect to="/ideas"/>
                      ) : (
                      <GoogleLogin
                        clientId={Config.GOOGLE_CLIENT_ID}
                        buttonText="Mufukin Google Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />)
                  )}/>
           

         {/*   <Route
              path='/signup'
              render={(props) => <SignUp 
                onSignUp={this.onSignUp} 
                onTextboxChangeSignUpEmail={this.onTextboxChangeSignUpEmail}
                onTextboxChangeSignUpPassword={this.onTextboxChangeSignUpPassword}
                />}
            />*/}

            <Route  path="/ideas" 
                    render={(props) => (
                    this.state.isAuthenticated === false ? (  
                      <Redirect to="/"/>
                      ) : (
                      <Ideas />)
                  )}/>

            <Route  path="/ideasShow/:id" 
                    render={({ props, match }) => (
                    this.state.isAuthenticated === false ? (  
                      <Redirect to="/"/>
                      ) : (
                      <IdeasShow user={loggedinuser} match={match} />)
                  )}/>

            <Route  path="/ideasEdit/:id" 
                    render={({ props, match }) => (
                    this.state.isAuthenticated === false ? (  
                      <Redirect to="/"/>
                      ) : (
                      <IdeasEdit match={match} />)
                  )}/>


            <Route  path="/ideasForm" 
                    render={(props) => (
                    this.state.isAuthenticated === false ? (  
                      <Redirect to="/"/>
                      ) : (
                      <IdeasForm />)
                  )}/>

          </div>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
