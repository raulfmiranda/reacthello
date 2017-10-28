import React, { Component } from 'react';
import Estoria from './Estoria';
import EstoriaForm from './EstoriaForm';
import jQuery from 'jquery';

class Taskboard extends Component {
    componentWillMount() {
        this._buscarEstorias();
    }

    constructor() {
        super();
        this.state = {
            estorias: []
        }
    }

    render() {
        const estorias = this._getEstorias();
        const titulo = this._getTitulo(estorias.length); 

        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center orange-text">Estórias</h1>
                        <h3>{titulo}</h3>
                        {estorias}
                    </div>
                </div>
                <EstoriaForm adicionarEstoria={this._adicionarEstoria.bind(this)}/>
            </div>
        );
    }

    _buscarEstorias() {
        jQuery.ajax({
            method: 'GET',
            url: 'http://localhost:3004/estorias',
            success: (estorias) => {
                this.setState({estorias})
            }
        });
    }

    _adicionarEstoria(titulo, pontos, descricao) {
        const estoria = {
            titulo,
            descricao,
            pontos,
            id: this.state.estorias.length + 1
        };

        this.setState({
            estorias: this.state.estorias.concat([estoria])
        });
    }

    _getEstorias() {
        return this.state.estorias.map( estoria => 
            <Estoria
                titulo={estoria.titulo} descricao={estoria.descricao}
                pontos={estoria.pontos} key={estoria.id} />);
    }

    _getTitulo(totalDeEstorias) {
        if (totalDeEstorias === 0) {
            return "Backlog vazio";
        } else if (totalDeEstorias === 1) {
            return "1 estória";
        } else {
            return `${totalDeEstorias} estórias`;
        }
    }
}

export default Taskboard;
