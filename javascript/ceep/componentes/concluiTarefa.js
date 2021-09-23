const BotaoConclui = () => { // Criando um botão dentro da Li para tikar uma tarefa
    const botaoConclui= document.createElement ('button')

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa);
        
    return botaoConclui;

}

const concluirTarefa = (evento) => { // aqui efetuamos o lance de rabisco da tarefa concluida
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui