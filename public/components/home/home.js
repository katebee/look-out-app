import React from 'react';
import Select from 'react-select';

import CountrySelect from '../countrySelect/countrySelect';
import InfoCard from '../infoCard/infoCard';

var wildlifeData = require( "../../data.json" );
var animalConservationStatus = require("../../animals_with_status.json");

var cam = wildlifeData.Namibia;
for (var item in cam) {
  var rows = [];
  var popular_items;
  var confiscatedItems = [];
  for (var i = cam[item].items.length - 1; i >= 0; i--) {
    confiscatedItems.push(cam[item].items[i][0]);
  }
  popular_items = confiscatedItems.join(",  ");

  rows.push(<InfoCard
    popular_items={popular_items}
    name={item}
    conservation_status={animalConservationStatus[item]}
    animal_image={"http://www.eonline.com/eol_images/Entire_Site/2013229/rs_560x415-130329112005-1024.BabyPig1.mh.032913.jpg"}
    product_image={"http://www.metmuseum.org/-/media/Images/Press/Press%20Images/Exhibitions/2011/Game%20of%20Kings/Teaser_King-front.jpg"} />);
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountryAnimals: [],
      countries: this.extractCountriesFromWildlifeJSON()
    }
  }

  extractCountriesFromWildlifeJSON() {
    return Object.keys(wildlifeData);
  }

  onSuggestionSelected = (e, { suggestion }) => {
    console.log('🐍')
    console.log(suggestion)
    console.log(wildlifeData[suggestion]);
    this.setState({
      selectedCountryAnimals: wildlifeData[suggestion]
    });
  }

  render() {
    return(
      <div>
      <div id="country-select-wrapper">
        <div className="country-select">
          <h3>Destination:</h3>
          <CountrySelect
            countries={this.state.countries}
            onSuggestionSelected={this.onSuggestionSelected}
          />
        </div>
        </div>
        <div className="infoCard-wrapper">
          {Object.keys(this.state.selectedCountryAnimals).map(key =>
            <InfoCard
              description={key.description}
              name={key.name}
              conservation_status={key.conservation_status}
              animal_image={key.animal_image}
              product_image={key.product_image}
              />
          )}
        </div>
      </div>
    )
  }
}
