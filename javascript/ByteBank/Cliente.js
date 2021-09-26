export class Cliente {
    nome;
    cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){ // construindo os parametros 
        this.nome = nome;
        this._cpf = cpf
    }
}

