import React, { Component } from 'react';
import Ideas from './Components/Ideas/Ideas';
import SignIn from './Components/SignIn/Signin';
import SignUp from './Components/SignIn/SignUp';

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
        signedIn: false
      }
    this.signIn = this.signIn.bind(this);
  }

  signIn = () => {
   this.setState(prevState => ({
    signedIn: !prevState.signedIn
  }));
    console.log(this.state.signedIn);
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <div className="banner">
              <header className="app-header">
                <h1>Clio Hackathon Forum</h1>
                <div className="cond-button">

                  { //Check if message failed
                    (this.state.signedIn === false)
                      ? <div><Link onClick={this.signIn} to="/ideas" className="button">Sign In</Link></div>
                      : <div><Link onClick={this.signIn} to="/" className="button">Sign Out</Link>
                        <Link to="/ideasForm" className="button">New Idea</Link></div>
                  }

                </div>
              </header>
        </div>
          <div className="app-body">
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
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
