import {Cliente} from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Fernanda', 10000, 1234567800);
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Bruno', 5000, 1234567800);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Lais', 7473615142, 'qwer')

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 'qwer');

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);