const cliente = {
    nome: 'Ricardo',
    idade: 45,
    cpf:'12345678900',
    email:'teste@teste',
    fones: ['55619831356789', '557190456789']    
}
cliente.dependentes = {
    nome:'Fernanda',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
}

cliente.dependentes.nome = 'Fernanda V. Ribeiro'

console.log(cliente)