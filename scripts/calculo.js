// homen
// Densidade Corporal = 1.112 - (0.00043499 * Soma das dobras) + (0.00000055 * Soma das dobras²) - (0.00028826 * Idade)
// percentual de gordura
// mulheres
// Densidade Corporal = 1.097 - (0.00046971 * Soma das dobras) + (0.00000056 * Soma das dobras²) - (0.00012828 * Idade)

// % de Gordura = [(4.95 / Densidade Corporal) - 4.50] * 100

const button = document.getElementById("btn-res")
const divRes = document.getElementById("resultado")



function calcular(event){
    event.preventDefault()
    const sexo = document.getElementById("sexo")
    const inputIdade = document.getElementById("idade")
    const idade =  parseFloat(inputIdade.value)
    const dobrasInputs = document.getElementById("dobras-inputs")
    const inputs = dobrasInputs.querySelectorAll("input")
    const valoresDobras = Array.from(inputs).map((input) => (parseFloat(input.value) || 0));

    let somaDobras=0
    let densidadeCorporal=0
    let porcentagemGordura=0

    for(let i in valoresDobras){
        somaDobras += valoresDobras[i]
    }

    if(sexo == "masculino"){
        densidadeCorporal = (1.112-(0.00043499*somaDobras)+(0.00000055 *somaDobras**2)-(0.00028826*idade))
    }
    else{
        densidadeCorporal = (1.097-(0.00046971*somaDobras)+(0.00000056*somaDobras**2)-(0.00012828*idade))
    }
    console.log(somaDobras);

    porcentagemGordura = ((4.95/densidadeCorporal) - 4.50)*100

    addRes(densidadeCorporal,porcentagemGordura)
    console.log(densidadeCorporal)
    console.log(typeof(idade))
   
    
    
}

function addRes(densidadeCorporal,porcentagemGordura){
const labelDencidade = document.createElement("label")
labelDencidade.textContent = "Dencidade corporal"
labelDencidade.setAttribute("for","dencidade")
const spamDencidade = document.createElement("spam")
spamDencidade.textContent = `${densidadeCorporal} g/cm³`

divRes.appendChild(labelDencidade)
divRes.appendChild(spamDencidade)

}

button.addEventListener("click",calcular)

