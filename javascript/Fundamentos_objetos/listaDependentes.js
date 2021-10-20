const cliente = {
    nome: 'Ricardo',
    idade: 45,
    cpf:'12345678900',
    email:'teste@teste',
    fones: ['55619831356789', '557190456789'], 
    dependentes: [{
    nome:'Fernanda',
    parentesco: 'filha',
    dataNasc: '18/01/2012'
    }]
}

cliente.dependentes.push({
    nome:'Bruno V. Ribeiro',
    parentesco: 'filho',
    dataNasc: '18/06/2016'
})

const filhaMaisNova = cliente.dependentes.filter(dependentes =>
    dependentes.dataNasc==='18/01/2012')

console.log(filhaMaisNova)
