import React, {Component} from 'react';
import uuid from 'uuid';

class AddPlip extends Component {

    constructor() {
        super();

        this.state = {
            newPlip: {}
        };
    }

    submitHandler(event) {
        const author = this.props.author;
        const plipContents = this.refs.plip.value;

        // todo: remove author from props

        if (!plipContents.length || !author.length) {
            console.error('Not enough data specified');
        } else {
            this.setState({
                newPlip: {
                    id: uuid.v4(),
                    date: new Date(Date.now()),
                    content: plipContents,
                    author: author
                }
            }, () => this.props.addPlip(this.state.newPlip));
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="add-plip">
                <form onSubmit={this.submitHandler.bind(this)}>

                    <div>
                        <input type="text" ref="plip"/>
                        <input type="submit" value="Plip now!"/>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddPlip;
