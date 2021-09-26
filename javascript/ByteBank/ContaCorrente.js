import {Cliente} from "./Cliente.js"; // para o instanceof funcionar

export class ContaCorrente{
    static numeroDeContas = 0; //deixei essa variavel statica para receber o numero de contas que tenho no banco
    agencia;
    _cliente;

    set cliente(novoValor){  // REFERENCIANDO O CLIENTE cadastrado
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    // #saldo - https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //aqui estu somando o nnumero de ContaCorrente que tenho no Banco
    }

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
    
    tranasferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}