const sexoSelect = document.getElementById("sexo");
const dobrasSelect = document.getElementById("dobras");
const dobrasInput = document.getElementById('dobras-inputs')

function verificaSelect(){
    const sexo = sexoSelect.value;
    const dobras = dobrasSelect.value;
    if(sexo && dobras){
        atualizaDobras(sexo, dobras)
    }
}

function atualizaDobras(sexo, dobras){
    window.alert('funcionou?')
}

sexoSelect.addEventListener("change",verificaSelect)
dobrasSelect.addEventListener("change",verificaSelect)
