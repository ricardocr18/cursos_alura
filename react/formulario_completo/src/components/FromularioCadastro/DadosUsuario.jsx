import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('')
    const [senha, setsenha] = useState('')
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);    
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }

        }}
        >
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id='email'
                name='email'
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

                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id='senha'
                name='senha'
                label='senha'
                type='password'
                required //Faz o campo ser obrigatorio
                variant='outlined'
                margin='normal'
                fullWidth
            />

            <Button variant="contained" color="primary" type='submit'>Próximo</Button>
        </form>
    )
}

export default DadosUsuario;