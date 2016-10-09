import React from 'react';
import Select from 'react-select';

import CountrySelect from '../countrySelect/countrySelect';
import InfoCard from '../infoCard/infoCard';

var wildlifeData = require( "../../data.json" );
var animalConservationStatus = require("../../animals_with_status.json");

var country = wildlifeData.Namibia;
var rows = [];
for (var item in country) {
  var animal = country[item]; 
  var popular_items;
  var confiscatedItems = [];
  for (var i = animal.items.length - 1; i >= 0; i--) {
    confiscatedItems.push(animal.items[i].item);
  }
  popular_items = confiscatedItems.join(",  ");
  rows.push(<InfoCard
    popular_items={popular_items}
    name={animal.name}
    conservation_status={animal.cons}
    animal_image={"http://www.eonline.com/eol_images/Entire_Site/2013229/rs_560x415-130329112005-1024.BabyPig1.mh.032913.jpg"}
    product_image={"http://www.metmuseum.org/-/media/Images/Press/Press%20Images/Exhibitions/2011/Game%20of%20Kings/Teaser_King-front.jpg"} />);
}

console.log("rows");
console.log(rows);

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
          {this.state.selectedCountryAnimals.map(animal =>
            <InfoCard
              description={animal.description}
              name={animal.name}
              conservation_status={animal.cons}
              animal_image={'../../assets/ok/' + animal.img}
              product_image={animal.product_image}
              />
          )}
        </div>
      </div>
    )
  }
}
