import React, { Component, PropTypes } from 'react';

export default class WorkBench extends Component {

    static propTypes = {

    };

    render() {
        const { children } = this.props;
        return (
            <div>
                <h1>WorkBench</h1>
            </div>
        );
    }
}