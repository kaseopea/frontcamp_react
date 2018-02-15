import React, { Component } from 'react';

class PlipItem extends Component {
    
  render() {
    const plip = this.props.plip;

    return (
      <div className="plip-item">
        <p>
          <strong>{plip.author}:</strong><br />
          "{plip.content}"
        </p>
        <a href="#">Remove this shit</a>
      </div>
    );
  }
}

export default PlipItem;
