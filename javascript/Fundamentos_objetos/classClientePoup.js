class Cliente {
    constructor (nome, email, cpf, saldo){
        this.nome= nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}
const ricardo = new ClientePoupanca('Ricardo','ricardo@teste.com', '094356782',115,200)

console.log(ricardo)

ricardo.depositar(50)
ricardo.depositarPoupanca(50)

console.log(ricardo)
   