// Vamos adicionar um paciente na tabela
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');  // PEgando os dados digitados no forme

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    // cria a tr a td do paciente
    var pacienteTr = montaTr(paciente);  
    
    // mensagem de erro po motivo de cadastro de td e tr invalidos
    var erros = validaPaciente(paciente);    
    if(erros.length > 0){ 
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    // adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset(); // Aqui limpa o Form após o cadastros dos dados

});

//Criando o objeto
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

//Aqui monta e retorna os dados de uma Tr
function montaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


// Validar paciente 
function validaPaciente(paciente){
    
    var erros = [];
    
    if (!validaPeso(paciente.peso)){
        erros.push("O Peso está invalido")
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida")
    }

        return erros

}