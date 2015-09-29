import React, { Component, PropTypes } from 'react';

export default class ToolBox extends Component {

    static propTypes = {

    };

    render() {
        const { children } = this.props;
        return (
            <div>
                <h1>ToolBox</h1>
            </div>
        );
    }
}