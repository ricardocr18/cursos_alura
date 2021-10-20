const cliente = {
    nome: 'Ricardo',
    idade: 45,
    cpf: '12345678900',
    email: 'teste@teste',
    fones: ['55619831356789', '557190456789'],
    dependentes: [
        {
            nome: 'Fernanda',
            parentesco: 'filha',
            dataNasc: '18/01/2012'
        },
        {
            nome: 'Bruno V. Ribeiro',
            parentesco: 'filho',
            dataNasc: '18/06/2016'
        }
    ],

    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}

let relatorio = '';

for (let info in cliente){
    if (typeof cliente[info] === 'object' || typeof
    cliente[info] === 'function'){
        continue
    }else {
        relatorio += `
        ${info}  ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)