import React, {Component} from 'react';
import './PlipItem.css';

class PlipItem extends Component {

    render() {
        const plip = this.props.plip;

        return (
            <div className="plip-item">
                <div className="plip-item-desc"><strong>{plip.author}</strong> on <i>{plip.date.toString()}</i>:</div>
                <p>{plip.content}</p>
                <button>Unplip</button>
            </div>
        );
    }
}

export default PlipItem;
