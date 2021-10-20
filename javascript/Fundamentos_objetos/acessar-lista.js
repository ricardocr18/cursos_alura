const cliente = {
    nome: 'Ricardo',
    idade: 45,
    cpf:'12345678900',
    email:'teste@teste'    
}
const chaves = ['nome', 'idade', 'cpf', 'email']

// Aqui realizo a impressão da posição 1 
// console.log(cliente[chaves[1]])

//Aqui percorre todo o objeto e imprime no Terminal
chaves.forEach(info => console.log(cliente[info]))