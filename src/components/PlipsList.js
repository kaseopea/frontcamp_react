import React, {Component} from 'react';
import PlipItem from './PlipItem';

class PlipsList extends Component {

    render() {
        let plipItems = [];

        if (this.props.plips) {
            plipItems = this.props.plips.map((plip) => {
                return (
                    <PlipItem key={plip.id} className="plips-list-item" plip={plip}/>
                );
            });
        }

        //sorting functionality

        return (
            <div className="plips-list">
                {plipItems}
            </div>
        );
    }
}

export default PlipsList;
