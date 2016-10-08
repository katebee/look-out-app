import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class LeafletMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 2,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="map-wrapper">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
