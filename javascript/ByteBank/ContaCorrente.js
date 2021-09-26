import {Cliente} from "./Cliente.js"; // para o instanceof funcionar

export class ContaCorrente{
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