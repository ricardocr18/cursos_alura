export class Conta {
    constructor (saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
        }

        set cliente(novoValor){  // REFERENCIANDO O CLIENTE cadastrado
            if (novoValor instanceof Cliente){
                this._cliente = novoValor;
            }
        }
    
        get cliente(){  //proteção de dados
            return this._cliente;
        }    
        
        get saldo(){ //proteção de dados
            return this._saldo;
        }
    
        sacar(valor){
            let taxa = 1;
            return this._sacar(valor, taxa);
        }

        _sacar(valor, taxa){
            const valorSacado = taxa * valor;
            if(this._saldo >= valorSacado ) {
                this._saldo -= valorSacado
                return valorSacado;
            }
            return 0;
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