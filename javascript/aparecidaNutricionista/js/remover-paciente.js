//pegando todo paciente
let osPacientes = document.querySelectorAll(".paciente");

//Aqui escuta toda a tabela mais apaga o filh em questão
var tabela = document.querySelector('table');
tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut'); // Aqui faz o eveito de remover devagar (fadeOut) está no CSS

        //Aqui usa o evento de apagar em 500milisegundo
    setTimeout (function(){
        event.target.parentNode.remove();
    },500);

    // AS LINHAS COM event ACIMA PODE SER SUBSTITUIDAS POR ESSAS aqui
    // var alvoEvento = event.target;
    // var paiDoalvo = alvoEvento.parentNode; //TR = paciente = remover
    // paiDoalvo.remove();
});


//Aqui estou estou escutando os clicks nos elementos da tabela e removendo
// osPacientes.forEach(function (paciente) {
//     paciente.addEventListener('dblclick', function () {
//         console.log('Fui clicado com um duplo click')
//         this.remove();
//     });
// });