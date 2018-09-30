import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Menu from './Menu';
import Main from './Main';
import Nav from './Nav';
import MapContainer from './MapContainer';

const style = {  
  width: '100%',
  height: '100%',
  position: 'absolute'
};

class App extends Component {
  render() {
    return (
      <div id="container">
        <Nav />
        <div className="main">
          <Menu/>
          <div className="map">
            <MapContainer />
          </div>
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(App);