import React, { Component } from 'react';
import Ideas from './Components/Ideas/Ideas';
import SignIn from './Components/SignIn/Signin';

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
              <header className="app-header">Clio Hackathon Forum</header>
              <div className="cond-button">
                
                { //Check if message failed
                  (this.state.signedIn === false)
                    ? <div><Link onClick={this.signIn} to="/ideas"><button >Sign In</button></Link></div> 
                    : <div><Link onClick={this.signIn} to="/"><button>Sign Out</button></Link></div>
                }
              
              </div>
        </div>
          
        
        
  
       
        
          <div className="app-body">
            <Route exact path="/" component={SignIn}/>
            <Route path="/ideas" component={Ideas}/>
            <Route path="/ideasShow" component={ideasShow}/>
            <Route path="/ideasForm" component={ideasForm}/>
          </div>
        
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
