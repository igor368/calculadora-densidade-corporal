const sexoSelect = document.getElementById("sexo");
const dobrasSelect = document.getElementById("dobras");
const dobrasInput = document.getElementById('dobras-inputs');


const seteDobras = ["Peitoral", "Abdominal", "Coxa", "triceps", "Subscapular", "Axilar Media", "Supra Iliaca"]
const fem3 = ["Coxa", "Triceps", "Supra Iliaca"]


function verificaSelect() {
    const sexo = sexoSelect.value;
    const dobras = dobrasSelect.value;
    if (sexo && dobras) {
        atualizaDobras(sexo, dobras)
    };
};

function atualizaDobras(sexo, dobras) {
    // Limpa os inputs existentes
    dobrasInput.innerHTML = "";

    switch (`${sexo}-${dobras}`) {
        case "masculino-7" :
        case "feminino-7" :
            for (let i = 0; i < 7; i++) {
                const inputGroup = document.createElement("div")
                inputGroup.classList.add("input-group")

                const label = document.createElement("label")
                label.textContent = seteDobras[i]
                label.setAttribute("for", seteDobras[i].toLocaleLowerCase())

                const input = document.createElement("input")
                input.type = "number"
                input.id = seteDobras[i].toLowerCase()
                input.required = true

                inputGroup.appendChild(label)
                inputGroup.appendChild(input)
                dobrasInput.appendChild(inputGroup)
            }
            break
        case "masculino-3":
            for (let i = 0; i < 3; i++) {
                const inputGroup = document.createElement("div")
                inputGroup.classList.add("input-group")

                const label = document.createElement("label")
                label.textContent = seteDobras[i]
                label.setAttribute("for", seteDobras[i].toLocaleLowerCase())

                const input = document.createElement("input")
                input.type = "number"
                input.id = seteDobras[i].toLowerCase()
                input.required = true

                inputGroup.appendChild(label)
                inputGroup.appendChild(input)
                dobrasInput.appendChild(inputGroup)
            }
            break
        case "feminino-3":
            for (let i = 0; i < 3; i++) {
                const inputGroup = document.createElement("div")
                inputGroup.classList.add("input-group")

                const label = document.createElement("label")
                label.textContent = fem3[i]
                label.setAttribute("for", fem3[i].toLocaleLowerCase())

                const input = document.createElement("input")
                input.type = "number"
                input.id = fem3[i].toLowerCase()
                input.required = true

                inputGroup.appendChild(label)
                inputGroup.appendChild(input)
                dobrasInput.appendChild(inputGroup)
            }
            break
        default:
    }
};

sexoSelect.addEventListener("change", verificaSelect);
dobrasSelect.addEventListener("change", verificaSelect);
