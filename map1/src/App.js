import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Menu from './Menu';
import Main from './Main';
import Nav from './Nav';

const style = {  
  width: '100%',
  height: '100%',
  position: 'relative'
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="main">
          <Menu />
          <Map google={this.props.google} zoom={14} style={style}></Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(App);

