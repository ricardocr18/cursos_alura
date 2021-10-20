function Cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this. email = email,
    this.saldo =saldo,
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const ricardo = new Cliente('Ricardo', '1234567890', 'ricardo@teste', 10000)

console.log(ricardo)