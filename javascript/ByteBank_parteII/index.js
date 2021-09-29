import {Cliente} from './Cliente.js';
import { Conta } from './conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';

const cliente1 = new Cliente('Ricardo', 1717171717); // aqui estou usando a função constructor do arquivo Cliente.js

const contaCorrenteRicardo = new ContaCorrente(cliente1, 171); //invocada no cosntructor do arquivo ContaCorrente.js
const contaPoupanca = new ContaPoupanca(50, cliente1, 171);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);


