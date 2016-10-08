import React from 'react';
import Select from 'react-select';

import CountrySelect from '../countrySelect/countrySelect';
import InfoCard from '../infoCard/infoCard';

var WILDLIFE = [
  {
    name:"Panda",
    conservation_status:"bad ass",
    description:"Pretty bad ass bear",
    animal_image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Panda_Mark.svg"
  },
  {
    name:"Pig",
    conservation_status:"bad ass",
    description:"Pretty bad ass bear",
    animal_image:"http://www.beliefnet.com/columnists//wholeliving/files/2011/08/tinypig.jpg"
  },
  {
    name:"Panda",
    conservation_status:"bad ass",
    description:"Pretty bad ass bear",
    animal_image:"http://www.eonline.com/eol_images/Entire_Site/2013229/rs_560x415-130329112005-1024.BabyPig1.mh.032913.jpg"
  }
];
var rows = [];

for (var i=0; i < WILDLIFE.length; i++) {
  rows.push(<InfoCard description={WILDLIFE[i].description} name={WILDLIFE[i].name} conservation_status={WILDLIFE[i].conservation_status} animal_image={WILDLIFE[i].animal_image}/>);
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
