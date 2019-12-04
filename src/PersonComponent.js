import React, { Component } from 'react';

class PersonComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <h6>{this.props.role}</h6>
                <button onClick={this.props.clickyClick}>Click Me!</button>
            </div>
        )
    }
}

export default PersonComponent;