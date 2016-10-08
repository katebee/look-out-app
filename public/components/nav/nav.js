import React from 'react';

export default class Nav extends React.Component {
  render() {
    return(
      <div className="nav">
        <img id="header-logo" src="http://avva-beta.s3-website-us-west-2.amazonaws.com/lookout_logo.png" />
        <h2 className="header-highlight">Inform,<br />Prevent,<br />Protect</h2>
      </div>
    )
  }
}
