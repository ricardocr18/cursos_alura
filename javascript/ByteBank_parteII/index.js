import {Cliente} from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo', 1717171717); // aqui estou usando a função constructor do arquivo Cliente.js

const contaCorrenteRicardo = new ContaCorrente(cliente1, 171); //invocada no cosntructor do arquivo ContaCorrente.js
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 171);

contaPoupanca.sacar(10)
console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
