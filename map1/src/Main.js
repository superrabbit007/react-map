import React, {Component} from 'react';
import Menu from './Menu';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';


class Main extends Component {
	render() {
		return (
			<div className="main">
				<Menu />
				<Map className='map' google={this.props.google} zoom={14}></Map>
			</div>
		)
	}
}


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
// })(Main);
export default Main;