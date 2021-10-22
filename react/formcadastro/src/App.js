import React from 'react';
import './App.css';
import FormularioCadastro from './components/FromularioCadastro/FormularioCadastro';
import '@fontsource/roboto/700.css';
import {Container, Typography} from '@material-ui/core';

function App() {
  return (
    <Container component='article' maxWidth='sm'>

      <Typography variante='h2' component='h1' align='center'>Formulário de Cadastro</Typography>
      <FormularioCadastro />

    </Container>
  );
}

export default App;
