import React from 'react';

export default class InfoCard extends React.Component {

  render() {
    return(
      <div className="infoCard">
        <h2 className="infoCard__header">{this.props.name}</h2>
        <div className="infoCard__images">
            <img className="infoCard__image"
            src={this.props.animal_image} />
            <img className="infoCard__productImage" src={this.props.product_image} />
            <img className="infoCard__productImage" src={this.props.product_image} />
        </div>
        <div className="infoCard__conservation_status">Conservation Status: <b>{this.props.conservation_status}</b></div>
        <div className="infoCard__text">{this.props.description}</div>
      </div>
    )
  }
}
