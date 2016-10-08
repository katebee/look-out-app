import React from 'react';

export default class InfoCard extends React.Component {

  render() {
    return(
      <div className="infoCard">
        <h2 className="infoCard__header">InfoCard</h2>
        <div className="infoCard__image">
          <img className="infoCard__image"
          style={{width: 50, height: 50}}
          src={'https://facebook.github.io/react/img/logo_og.png'} />
        </div>
        <div className="infoCard__image">{this.props.name}</div>
        <div className="infoCard__text">{this.props.text}</div>
      </div>
    )
  }
}
