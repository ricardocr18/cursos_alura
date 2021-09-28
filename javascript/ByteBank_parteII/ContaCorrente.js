import { Conta } from "./conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //deixei essa variavel statica para receber o numero de contas que tenho no banco        
    constructor(cliente, agencia){
        super(0, cliente, agencia);
       ContaCorrente.numeroDeContas += 1; //aqui estu somando o nnumero de ContaCorrente que tenho no Banco
    }

    //está sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this_sacar(valor, taxa);
    }
}