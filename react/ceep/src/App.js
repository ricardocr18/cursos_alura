import React, {Component} from 'react';
import ListaDeNotas from "./components/ListasDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {

  render(){
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>  
    );
  }  
}

export default App;
