import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('')
    const [senha, setsenha] = useState('')
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email,senha});
        }}
        >
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id='email'
                label='email'
                type='email'
                required //Faz o campo ser obrigatorio
                variant='outlined'
                margin='normal'
                fullWidth //Aqui é o comendo que completa a linha inteir
            />

            <TextField
                value={senha}
                onChange={(event) => { setsenha(event.target.value) }}
                id='senha'
                label='senha'
                type='password'
                required //Faz o campo ser obrigatorio
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <Button variant="contained" color="primary" type='submit'>Cadastro</Button>
        </form>
    )
}

export default DadosUsuario;