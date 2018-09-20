import React, { Component } from 'react';

class Key extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
                className="key"
                onMouseUp={() => this.props.onKeyPress(this.props.label)}
            >
                {this.props.label}
            </div>
        );
    }
}

export default Key;
