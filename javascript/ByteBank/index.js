class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo - https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor ) {
            this._saldo -= valor
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }    
}

const cliente1 = new Cliente();
    cliente1.nome = 'Ricardo';
    cliente1.cpf = 1717171717;

const cliente2 = new Cliente();
    cliente2.nome = 'Alice';
    cliente2.cpf = 696969696969;

const contaCorrenteRicardo = new ContaCorrente()
    contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(300);
const valorSacado =  contaCorrenteRicardo.sacar(10);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
