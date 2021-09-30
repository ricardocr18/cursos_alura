export class Cliente {
     get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){ // construindo os parametros 
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

   autenticar(){
       return true;
   }
}

