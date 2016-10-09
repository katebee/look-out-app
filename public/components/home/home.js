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


var wildlifeData = require( "../../data.json" );
console.log(wildlifeData)

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
        <div className="country-select">
          <h3>Destination:</h3>
          <CountrySelect
            countries={this.state.countries}
            onSuggestionSelected={this.onSuggestionSelected}
          />
        </div>
        <div className="infoCard-wrapper">
          {Object.keys(this.state.selectedCountryAnimals).map(key =>
            <InfoCard
              description={organism.description}
              name={organism.name}
              conservation_status={organism.conservation_status}
              animal_image={organism.animal_image}
              product_image={organism.product_image}
              />
          )}
        </div>
      </div>
    )
  }
}
