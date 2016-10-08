import React from 'react';
import Select from 'react-select';

import CountrySelect from '../countrySelect/countrySelect';
import InfoCard from '../infoCard/infoCard';

var WILDLIFE = ["foo", "bar", "eep"];
var rows = [];

var wildlifeData = require( "../../data.json" );

for (var i=0; i < WILDLIFE.length; i++) {
    rows.push(<InfoCard text={WILDLIFE[i]} name={WILDLIFE[i]} conservation_status={"NC"}/>);
}

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <div className="country-select">
          <h3>Destination:</h3>
          <CountrySelect />
        </div>
        <div className="infoCard-wrapper">
          {rows}
        </div>
      </div>
    )
  }
}
