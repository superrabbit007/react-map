import React, {Component} from 'react';
import Menu from './Menu';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';


const style = {  
  width: '100%',
  height: '92%',
  position: 'absolute'
};

class Main extends Component {
	render() {
		return (
			<div className="main">
          		<Menu 
          		/>
          		<Map 
                google={this.props.google}
                zoom={14}
                style={style}
                center={{
                  lat: 22.543096, 
                  lng: 114.05786499999999
                }}></Map>
        	</div>
		)
	}
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(Main);
// export default Main;