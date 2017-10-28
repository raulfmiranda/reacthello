import React, { Component } from 'react';
import Estoria from './Estoria';

class Taskboard extends Component {
    render() {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center orange-text">Estórias</h1>
                        <h3>2 estórias</h3>
                        <Estoria titulo="Primeiro Titulo" descricao="Primeira descrição" pontos="10"/>
                        <Estoria titulo="Segundo Titulo" descricao="Segunda descrição" pontos="20"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Taskboard;
