import React, { Component, PropTypes } from 'react';

export default class App extends Component {

    static propTypes = {
        
    };

    render() {
        const { children } = this.props;
        return <h1>Form Builder</h1>;
    }
    
}