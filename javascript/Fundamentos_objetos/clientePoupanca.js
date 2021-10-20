function Cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this. email = email,
    this.saldo =saldo,
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const raquel = new ClientePoupanca('Raquel', '0987654542', 'raquel@teste.com', 5000, 40000)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

raquel.depositarPoup(30)
console.log(raquel.saldoPoup)