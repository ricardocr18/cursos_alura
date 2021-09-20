// Vamos adicionar um paciente na tabela
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');  // PEgando os dados digitados no forme

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    // cria a tr a td do paciente
    var pacienteTr = montaTr(paciente);  
    
    // mensagem de erro por motivo de cadastro de td e tr invalidos
    var erros = validaPaciente(paciente);    
    console.log(erros);
    if(erros.length > 0){ 
        exibeMensagensDeErro(erros);        
        return;
    }

    // adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset(); // Aqui limpa o Form após o cadastros dos dados
    var mensagensErro = document.querySelector('#mesnagens-erro');
    mensagensErro.innerHTML = "";

});

function exibeMensagensDeErro(erros){
    var ul =  document.querySelector('#mensagens-erro');
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);        
    });

}

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

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco")
    }
    
    if (!validaPeso(paciente.peso)){
        erros.push("O Peso está invalido")
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida")
    }

    if (paciente.gordura.length == 0 ){
        erros.push("A gordura não pode ser em branco")
    }

    if (paciente.peso.length ==0){
        erros.push('O peso não pode ficar vazio');
    }

    if (paciente.altura.length ==0){
        erros.push('A altura não pode ficar vazio');
    }

        return erros

}