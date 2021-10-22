import React from 'react';
import './App.css';
import FormularioCadastro from './components/FromularioCadastro/FormularioCadastro';
import '@fontsource/roboto';
import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <Container component='article' maxWidth='sm'>

      <Typography variant="h3" component="h1" align='center'>Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />

    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 digitos.' }
  } else {
    return { valido: true, texto: '' }
  }
}

export default App;
