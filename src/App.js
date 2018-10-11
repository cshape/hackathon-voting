import React, { Component } from 'react';
import Ideas from './Components/Ideas/Ideas';
import SignIn from './Components/SignIn/Signin';
import './App.scss';

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
        <header className="app-header">Clio Hackathon Forum
        </header>
        <div className="app-body">
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
      </div>
    );
  }
}

export default App;
