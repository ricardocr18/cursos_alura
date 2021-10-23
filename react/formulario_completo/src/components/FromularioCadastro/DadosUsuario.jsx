import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario() {
    return (
        <form>
            <TextField
                id='email'
                label='email'
                type='email'
                variant='outlined'
                margin='normal'
                fullWidth //Aqui é o comendo que completa a linha inteir
            />

            <TextField
                id='senha'
                label='senha'
                type='password'
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <Button variant="contained" color="primary" type='submit'>Cadastro</Button>
        </form>
    )
}

export default DadosUsuario;