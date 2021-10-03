import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from '../../assets/Img/delete.svg' // Chamando a imagem da lixeira e esconde a imagem no inspecionar do navegador

class CardNotas extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)} /* aqui é o start de todo o processo de deletar no icone da lixeira no card *//> 
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        
      </section>
    );
  }
}

export default CardNotas;
