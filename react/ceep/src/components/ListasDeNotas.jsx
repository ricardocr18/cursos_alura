import React, { Component } from 'react'
import CardNotas from './CardNotas';

class ListaDeNotas extends Component {

    render() {
        return(
            <ul>
                {Array.of('Trabalho', 'Notas', 'Estudo').map((categoria) => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNotas />
                        </li>
                    );
                })}
            </ul>
        )
    }
}
export default ListaDeNotas;
