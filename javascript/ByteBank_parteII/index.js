import {Cliente} from './Cliente.js';
import { Conta } from './conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo', 1717171717); // aqui estou usando a função constructor do arquivo Cliente.js

const contaCorrenteRicardo = new Conta(0, cliente1, 171); //invocada no cosntructor do arquivo ContaCorrente.js
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 171);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);