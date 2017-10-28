import React, { Component } from 'react';
import Topo from './Topo';
import Taskboard from './Taskboard';
import Rodape from './Rodape';

class Hello extends Component {
    render() {
        return (
            <div>
                <Topo/>
                <Taskboard/>
                <Rodape/>
            </div>
        );
    }
}

export default Hello;
