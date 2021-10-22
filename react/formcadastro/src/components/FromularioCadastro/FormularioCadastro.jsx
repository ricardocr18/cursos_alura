import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    return (
        <form>
            <TextField id="Nome" label="Nome" variant='outlined' margin='normal' fullWidth />
            <TextField id="SobreNome" label="SobreNome" variant='outlined' margin='normal' fullWidth />
            <TextField id="CPF" label="CPF" variant='outlined' margin='normal' fullWidth />

            <FormControlLabel label='Promoções' control={<Switch name='promocoes' defaultChecked color='primary' />} />
            <FormControlLabel label='Novidade' control={<Switch name='novidades' defaultChecked color='primary' />} />
           
            <Button variant="contained" color="primary" type='submit'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;