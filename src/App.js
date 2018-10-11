import React, { Component } from 'react';
import Ideas from './Components/Ideas/Ideas';
import SignIn from './Components/SignIn/Signin';
import './App.css';

class App extends Component {

  constructor() {
    super()
      this.state = {
        route: 'signin',
        user: {}
      }
  }

  onRouteChange = (route) => {
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
