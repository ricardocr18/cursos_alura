import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState('true');
    const [novidades, setNovidades] = useState('true');
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    
    return (
        <form
            //validação de enviar do formulário
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
                }
            }}
        >

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}

                onBlur={validarCampos}
                error={!erros.nome.vaido}
                helperText={erros.nome.texto}

                id="Nome"
                name='nome'
                label="Nome"
                variant='outlined'
                margin='normal'
                fullWidth //Aqui é o comendo que completa a linha inteir
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}

                id="SobreNome"
                name='SobreNome'
                label="SobreNome"
                variant='outlined'
                margin='normal'
                fullWidth
            />


            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name='cpf'
                label="CPF"
                variant='outlined'
                margin='normal'
                fullWidth />

            <FormControlLabel
                label='Promoções'
                control={<Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                    name='promocoes'
                    color='primary' />
                }
            />

            <FormControlLabel
                label='Novidade'
                control={<Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }} name='novidades'
                    color='primary' />
                }
            />

            <Button variant="contained" color="primary" type='submit'>Próximo</Button>
        </form >
    )
}

export default DadosPessoais;