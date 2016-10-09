import React from 'react';

export default class InfoCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ConfiscatedItems: this.props.confiscatedItems
    };
  }

  render() {
    return(
      <div className="infoCard">
        <h2 className="infoCard__header">{this.props.name}</h2>
        <div className="infoCard__images">
            <img className="infoCard__image infoCard__animalImage"
            src={this.props.animal_image} />
            <img className="infoCard__image infoCard__productImage" src={this.props.product_image0} />
            <img className="infoCard__image infoCard__productImage" src={this.props.product_image1} />
            <img className="infoCard__image infoCard__productImage" src={this.props.product_image2} />
        </div>
        <div className="infoCard__conservation_status">Conservation Status: <b>{this.props.conservation_status}</b></div>
        <div className="infoCard__text">Popular items: {this.props.popular_items}</div>
      </div>
    )
  }
}
