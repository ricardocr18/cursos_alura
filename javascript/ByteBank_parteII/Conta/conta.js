//Classe abstrata, não pode ser estanciada
export class Conta {
    constructor (saldoInicial, cliente, agencia){

        if (this.constructor == Conta){
            throw new Error('Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrada.'); // lançando um erro no programa
        }

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
        
        //Metodo abstrato
        sacar(valor){
            throw new Error ('O metodo Sacar da conta é abstrato');
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