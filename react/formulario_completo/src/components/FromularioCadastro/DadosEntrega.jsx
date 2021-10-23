import React from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega() {
    return (
        <form>
            <TextField
                id='cep'
                label='CEP'
                type='number'
                variant='outlined'
                margin='normal'
            />

            <TextField
                id='endereco'
                label='Endereço'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth //Aqui é o comendo que completa a linha inteir
            />

            <TextField
                id='numero'
                label='Numero'
                type='number'
                variant='outlined'
                margin='normal'

            />

            <TextField
                id='estado'
                label='Estado'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <TextField
                id='cidade'
                label='Cidade'
                type='text'
                variant='outlined'
                margin='normal'
            />

            <Button variant="contained" color="primary" type='submit' fullWidth>finalizar Cadastro</Button>

        </form>
    )

}

export default DadosEntrega;