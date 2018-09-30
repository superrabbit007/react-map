import React, {Component} from 'react';
import {Map, InfoWindow, Marker} from 'google-maps-react';
import {GoogleApiWrapper} from 'google-maps-react';


const style = {  
  width: '100%',
  height: '100%',
  position: 'absolute'
};

var locations=[
		{title:'深圳红树湾', location:{lat: 22.53056, lng: 113.96632799999998}},
		{title:'欢乐谷', location: {lat: 22.533468, lng: 113.99344819999999}},
		{title:'深圳白石洲华侨城', location: {lat: 22.533583, lng: 113.96849799999995}},
		{title:'深圳市盐田区大梅沙东部华侨城', location:{lat:22.631358 ,lng:114.28218500000003 }}];

class MapContainer extends Component {

	state={

	};

	onMouseoverMarker() {

	};
	render() {
		return (
		<Map 
            google={this.props.google}
            zoom={14}
            style={style}
            center={{
              lat: 22.543096, 
              lng: 114.05786499999999
            }}>
            {locations.map(loc=>{

            	<Marker
            		
            		title={loc.title}
            		position={loc.location}
            		onMouseoverMarker={this.onMouseoverMarker}/>
            })}

        </Map>
		)
		
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(MapContainer);