import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta{    
    constructor (saldoInicial, cliente, agencia){   
        super(saldoInicial, cliente, agencia); 
    }
    
    sacar(valor){
        const taxa = 1.02; //taxa de 2%
        return this._sacar(valor, taxa);
    }

}