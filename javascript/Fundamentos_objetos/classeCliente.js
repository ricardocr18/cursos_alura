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

const ricardo = new Cliente('Ricardo', 'ricardo@teste', '0987612345', 100)

ricardo.exibirSaldo()