import React, { Component } from 'react';
import Ideas from './Components/Ideas/Ideas';
import SignIn from './Components/SignIn/Signin';
import './App.css';

class App extends Component {

  constructor() {
    super()
      this.state = {
        isSignedIn: false,
        route: 'signin',
        user: {}
      }
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  } 

  render() {
    return (
      <div className="App">
        <header className="title">Clio Hackathon Forum</header>
        { this.state.route === 'home'
        ? <div className="home">
            <div className="ideaslist"> 
              <Ideas onRouteChange={this.onRouteChange} />
            </div>
          </div>
        : 
          <div>
            <div className="signincard">
              <SignIn onRouteChange={this.onRouteChange} />
            </div>
          </div>
        }
      </div>    
    );
  }
}

export default App;
