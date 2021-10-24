import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario({aoEnviar}) {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar();
        }}
        >

            <TextField
                id='email'
                label='email'
                type='email'
                required //Faz o campo ser obrigatorio
                variant='outlined'
                margin='normal'
                fullWidth //Aqui é o comendo que completa a linha inteir
            />

            <TextField
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