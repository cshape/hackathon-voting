import React, { Component } from 'react';
import Config from './config.json';
import Ideas from './Components/Ideas/Ideas';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { Route, Redirect, HashRouter, Link } from 'react-router-dom';
import IdeasForm from './Components/Ideas/ideasForm';
import IdeasShow from './Components/Ideas/ideasShow';
import IdeasEdit from './Components/Ideas/ideasEdit';
import ScrollToTop from './Components/UI/ScrollToTop';
import validator from 'validator';
import './App.scss';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  addSpot = ({x, y, lat, lng, event}) => {
    console.log(x, y, lat, lng, event);
    axios.post('http://localhost:3001/new', {
      name: 'cale (testing)',
      latitude: lat,
      longitude: lng,
      details: 'its dank here'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBcuiHAFFYtMtktsFWyzn0BBh2XHDkhR_s' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.addSpot}
        >
          <div>
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
