import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'

class Map extends Component {
	render(){

		const mapContainer = <div style={{minHeight:800, height:'100%', width:'100%'}} ></div>
		const center = {
			lat: 40.7355677,
			lng: -73.9906802
		}

		return (

			<GoogleMapLoader
				containerElement = { mapContainer }
				googleMapElement = {
					<GoogleMap
						defaultZoom={17}
						defaultCenter={center}
						options={{streetViewControl: false, mapTypeControl: false}}>
					</GoogleMap>
				} />

		)
	}
}

export default Map
