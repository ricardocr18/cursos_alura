import {Cliente} from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo', 1717171717); // aqui estou usando a função constructor do arquivo Cliente.js

const cliente2 = new Cliente('Alice', 696969696969 );

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1); //invocada no cosntructor do arquivo ContaCorrente.js
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2); //invocada no cosntructor do arquivo ContaCorrente.js

contaCorrenteRicardo.tranasferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);
