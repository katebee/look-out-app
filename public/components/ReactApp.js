import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/nav/nav';
import LeafletMap from '../components/leafletMap/leafletMap';

require('../stylesheets/main.scss');

export default class ReactApp extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
