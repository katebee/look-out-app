import React from 'react';
import Select from 'react-select';

import CountrySelect from '../countrySelect/countrySelect';
import InfoCard from '../infoCard/infoCard';

var WILDLIFE = [
  {
    name:"Panda",
    conservation_status:"bad ass",
    description:"Pretty bad ass bear",
    animal_image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Panda_Mark.svg",
    product_image:"http://www.metmuseum.org/-/media/Images/Press/Press%20Images/Exhibitions/2011/Game%20of%20Kings/Teaser_King-front.jpg"
  },
  {
    name:"Pig",
    conservation_status:"bad ass",
    description:"Pretty bad ass bear",
    animal_image:"http://www.beliefnet.com/columnists//wholeliving/files/2011/08/tinypig.jpg",
    product_image:"http://www.metmuseum.org/-/media/Images/Press/Press%20Images/Exhibitions/2011/Game%20of%20Kings/Teaser_King-front.jpg"
  },
  {
    name:"Panda",
    conservation_status:"bad ass",
    description:"Pretty bad ass bear",
    animal_image:"http://www.eonline.com/eol_images/Entire_Site/2013229/rs_560x415-130329112005-1024.BabyPig1.mh.032913.jpg",
    product_image:"http://www.metmuseum.org/-/media/Images/Press/Press%20Images/Exhibitions/2011/Game%20of%20Kings/Teaser_King-front.jpg"
  }
];
var rows = [];

var wildlifeData = require( "../../data.json" );
var animalConservationStatus = require("../../animals_with_status.json");

console.log(wildlifeData.Cambodia);
  // rows.push(<InfoCard description={WILDLIFE[i].description} name={WILDLIFE[i].name} conservation_status={WILDLIFE[i].conservation_status} animal_image={WILDLIFE[i].animal_image} product_image={WILDLIFE[i].product_image} />);

var cam = wildlifeData.Cambodia;
for (var item in cam) {
  console.log(item);
  console.log(cam[item]);
  var popular_items;
  var confiscatedItems = [];
  for (var i = cam[item].items.length - 1; i >= 0; i--) {
    confiscatedItems.push(cam[item].items[i][0]);
  }
  popular_items = confiscatedItems.join(", ");

  rows.push(<InfoCard popular_items={popular_items} name={item} conservation_status={animalConservationStatus[item]} animal_image={"http://www.eonline.com/eol_images/Entire_Site/2013229/rs_560x415-130329112005-1024.BabyPig1.mh.032913.jpg"} product_image={"http://www.metmuseum.org/-/media/Images/Press/Press%20Images/Exhibitions/2011/Game%20of%20Kings/Teaser_King-front.jpg"} />);
}

for (var i=0; i < WILDLIFE.length; i++) {
  rows.push(<InfoCard description={WILDLIFE[i].description} name={WILDLIFE[i].name} conservation_status={WILDLIFE[i].conservation_status} animal_image={WILDLIFE[i].animal_image} product_image={WILDLIFE[i].product_image} />);
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
