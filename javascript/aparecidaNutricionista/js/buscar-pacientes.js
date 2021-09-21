var botoaAdicionar = document.querySelector("#buscar-pacientes");

botoaAdicionar.addEventListener('click', function(){  //Buscando dados de uma API
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){

        var erroAjax = document.querySelector('#erro-ajax');
        if (xhr.status == 200){
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)  // transforma o texto que é JSON em contexto JAVAscript

            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente)
            });
        } else {            // aqui descreve no console o erro que pode aparece 404, 201 e outros
            console.log(xhr.status);
            console.log(xhr.responseText);            
            erroAjax.classList.remove('invisivel');
        }

        
    });

    xhr.send();

});