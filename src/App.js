import React, { Component } from 'react';
import Ideas from './Components/Ideas/ideas';
import SignIn from './Components/SignIn/Signin';
import ideasForm from './Components/Ideas/ideasForm';
import ideasShow from './Components/Ideas/ideasShow';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
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
        <header className="app-header">Clio Hackathon Forum</header>
        <BrowserRouter>
          <div className="app-body">
            <Route exact path="/" component={SignIn}/>
            <Route path="/ideas" component={Ideas}/>
            <Route path="/ideasShow" component={ideasShow}/>
            <Route path="/ideasForm" component={ideasForm}/>
          </div>
        </BrowserRouter>
        </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="app-header">Clio Hackathon Forum
  //       </header>
  //       <div className="app-body">
  //         { this.state.route === 'home'
  //         ? <div className="home">

  //               <div className="ideaslist">
  //                 <Ideas onRouteChange={this.onRouteChange} />
  //               </div>

  //           </div>
  //         :
  //           <div>
  //             <div className="signincard">
  //               <SignIn onRouteChange={this.onRouteChange} />
  //             </div>
  //           </div>
  //         }
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
