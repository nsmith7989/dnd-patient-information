import React, { Component, PropTypes } from 'react';
import ToolBox from './ToolBox';
import WorkBench from './WorkBench';


export default class App extends Component {

    static propTypes = {
        
    };

    render() {
        const { children } = this.props;
        return (
            <div>
                <h1>Form Builder</h1>
                <ToolBox/>
                <WorkBench/>
            </div>
        );
    }
    
}