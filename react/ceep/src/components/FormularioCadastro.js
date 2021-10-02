import { Component } from "react";

class FormularioCadastro extends Component {

    render() {
        return (
            <form>
                <input type='text' placeholder='Título' />
                <textarea placehoder='Escreva sua nota..' />
                <button>Criar Nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;