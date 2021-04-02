const form = document.getElementById("form")
const inputs = document.querySelectorAll("input")

const regExp = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	number: /^[0-9]{10,10}$/, // 6 a 20 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const values = {
    name: false,
    number: false,
    email: false,
    text: true
}

const stylesInputs = (regExpName, inputPos, inputName, inputValue) => {
    if(regExpName.test(inputs[inputPos].value)){
        document.getElementById(`${inputName}`).classList.add("input--valid")
        document.getElementById(`${inputName}`).classList.remove("input--error")
        document.querySelector(`.${inputName}__group .error`).classList.remove("error--active")
        inputValue = true
        return inputValue
    } else {
        document.getElementById(`${inputName}`).classList.remove("input--valid")
        document.getElementById(`${inputName}`).classList.add("input--error")
        document.querySelector(`.${inputName}__group .error`).classList.add("error--active")
        inputValue = false
        return inputValue
    }
}

inputs.forEach( (input) => {
    if(input.name === "name") {
        input.addEventListener("keyup", () => {
            values.name = stylesInputs(regExp.name, 0, "name", values.name)
        })
        input.addEventListener("blur", () => {
            values.name = stylesInputs(regExp.name, 0, "name", values.name)
        })
    }
    if(input.name === "number") {
        input.addEventListener("keyup", () => {
            values.number = stylesInputs(regExp.number, 1, "number", values.number)
        })
        input.addEventListener("blur", () => {
            values.number = stylesInputs(regExp.number, 1, "number", values.number)
        })
    }
    if(input.name === "email") {
        input.addEventListener("keyup", () => {
            values.email = stylesInputs(regExp.email, 2, "email", values.email)
        })
        input.addEventListener("blur", () => {
            values.email = stylesInputs(regExp.email, 2, "email", values.email)
        })
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(values.name && values.number && values.email && values.text){
        form.reset()
        document.querySelector(".warning__submit").classList.add("warning__submit--success")
        document.querySelector(".warning__submit").classList.remove("warning__submit--invalid")
        document.querySelector(".warning__submit").innerText = "Mensaje enviado con exito"
    }
    else{
        document.querySelector(".warning__submit").classList.add("warning__submit--invalid")
        document.querySelector(".warning__submit").classList.remove("warning__submit--success")
        document.querySelector(".warning__submit").innerText = "Debe completar todos los campos"
    }
})