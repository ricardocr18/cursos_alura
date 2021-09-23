class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 1717171717;
cliente1.agencia = 171;
cliente1.saldo = 0;

cliente2.nome = 'Alice';
cliente2.cpf = 696969696969;
cliente2.agencia = 171;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
