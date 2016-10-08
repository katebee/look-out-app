import React from 'react';
import Select from 'react-select';

import CountrySelect from '../countrySelect/countrySelect';
import InfoCard from '../infoCard/infoCard';

var WILDLIFE = ["foo", "bar", "eep"];
var rows = [];

for (var i=0; i < WILDLIFE.length; i++) {
    rows.push(<InfoCard text={WILDLIFE[i]} name={WILDLIFE[i]} />);
}

export default class Home extends React.Component {

  render() {
    return(
      <div>
        <CountrySelect />
        <h2 className="header-highlight">Home Page Content</h2>
        <div>
          {rows}
        </div>
      </div>
    )
  }
}
