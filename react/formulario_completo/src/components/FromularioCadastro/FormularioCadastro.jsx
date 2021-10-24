
import { Typography, Step, Stepper, StepLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    //useEffedt - Aqui consigo ver os dados dentro do objeto se chamar um console.log
    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variante='h5'>Obrigado pelo Cadastro! </Typography>
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados })
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    // return <Typography>Erro ao selecinaor formulário</Typography>

    return <>
        
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>

        {formularios[etapaAtual]}

    </>;
}


export default FormularioCadastro;