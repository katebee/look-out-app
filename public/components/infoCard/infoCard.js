import React from 'react';

export default class InfoCard extends React.Component {

  render() {
    return(
      <div className="infoCard">
        <h2 className="infoCard__header">ANIMAL NAME</h2>
        <div className="infoCard__images">
            <img className="infoCard__image"
            // style={{width: 50, height: 50}}
            src={'https://upload.wikimedia.org/wikipedia/commons/d/d5/Panda_Mark.svg'} />
            <img className="infoCard__productImage"
            src={'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg'} />
            <img className="infoCard__productImage"
            src={'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg'} />
            <img className="infoCard__productImage"
            src={'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg'} />
            <img className="infoCard__productImage"
            src={'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg'} />
        </div>
        <div className="infoCard__conservation_status">Conservation Status: {this.props.conservation_status}</div>
        <div className="infoCard__text">{this.props.text}</div>
      </div>
    )
  }
}
