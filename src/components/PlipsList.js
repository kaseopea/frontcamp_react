import React, { Component } from 'react';
import PlipItem from './PlipItem';

class PlipsList extends Component {

  render() {
    let plipItems = [];

    if (this.props.plips) {
      plipItems = this.props.plips.map((plip) => {
        return (
          <li key={plip.id} className="plips-list-item"><PlipItem plip={plip} /></li>
        );
      });
    }

    //sorting functionality

    return (
      <div className="plips">
        <ul className="plips-list">{plipItems}</ul>
      </div>
    );
  }
}

export default PlipsList;
