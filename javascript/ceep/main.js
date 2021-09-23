import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]'); // aqui percorro todo o DOM até achar o Data do button

const criarTarefa = (evento) => {

    evento.preventDefault(); // aqui está inpedindo do form atualizar e assim não aparecer a iformação digitada no console.log

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement ('li');
    tarefa.classList.add('task');
    const conteudo = `<p class='content'>${valor}</p>`;

    tarefa.innerHTML= conteudo;
    tarefa.appendChild(BotaoConclui()); //coloca um botão dentro de uma Li 
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
        
    // aqui faço atualizar os dados digitados no Form na Li do html
    //const tarefa = document.querySelector('[data-task]');
    //const conteudo = `<p class='content'>${valor}</p>`;
    //tarefa.innerHTML = conteudo;  //retorna todo o texto e o html que existem no elemento

    input.value= '';

};

novaTarefa.addEventListener('click', criarTarefa);


