import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ReactApp from './components/ReactApp';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import LeafletMap from './components/leafletMap/leafletMap';


export default [
    <Route path='/' component={ReactApp}>
      <Route path='/contact' component={Contact} />
      <Route path='/map' component={LeafletMap} />
      <IndexRoute component={Home} />
    </Route>
];
