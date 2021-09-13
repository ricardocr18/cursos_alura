let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");  // aqui vejo todos as pacientes no meu Array
for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let imcTd = paciente.querySelector(".info-imc");
    // Validando Peso e Altura

    let pesoEhValido = true;
    let alturaEhValida = true;

    if (peso <= 0 || peso >= 300) {
        pesoEhValido = false;
        imcTd.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); // Aqui mudo a cor conforme  CSS está configurado

    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        imcTd.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        let imc = calculoImc(peso, altura);
        imcTd.textContent = imc;
    }
}

// uso essa função para calcular o imc em outro arquivo
function calculoImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //o toFixed() descreve quantas casas decimais serão aplicadas
}