let genius = document.querySelector("div.genius")
let buttons = genius.querySelectorAll("*:not(.pontuos)")
let botaoinicio = document.querySelector('button#start')
let body = document.body

let buttonon = new Audio('sounds/start.mp3')
let startgame = new Audio('sounds/button-on.mp3')
let failgame = new Audio('sounds/failtrumpet.mp3')

let sequencia = [rng(), rng()]
let velocidade = 800

// random number generator
function rng() {
    return Math.floor(Math.random() * 4)
}

function ligar(item) {
    buttons[item].classList.add("on")
    const coresdefundo = {
        0: '#887d0f',
        1: '#d81515',
        2: '#6e6690',
        3: '#e85a17'
    }

    if (coresdefundo.hasOwnProperty(item)) {
        body.style.backgroundColor = coresdefundo[item]
    }
    buttonon.play()
}

function desligar(item) {
    buttons[item].classList.remove("on")
    body.style.backgroundColor = 'black'
}

function piscaluz(item) {
    ligar(item)
    setTimeout(function () { desligar(item) }, velocidade)
}

function apresentarSequencia() {
    let index = 0
    let interval = null

    return new Promise((resolve, reject) => {
        function piscarCorAtual() {
        if (index >= sequencia.length) {
            clearInterval(interval)
            resolve()
            return
        }
        let atual = sequencia[index++]
        piscaluz(atual)
        }
        interval = setInterval(piscarCorAtual, velocidade + 300)
    })
}

let currentIndex = 0

genius.addEventListener("click", (eventos) => {
    if (estado !== "playing") {
        return
    }
    const buttonIndex = [...buttons].indexOf(eventos.target)
    startgame.play()

    if (buttonIndex < 0) {
        return
    }

    if (buttonIndex != sequencia[currentIndex++]) {
        estado = "derrota"
        document.body.style.backgroundColor = 'white';
        botaoinicio.innerHTML = "!!!"
        failgame.play()
        setTimeout(function perdeu() {
            botaoinicio.innerHTML = "reiniciar"
            body.classList.add("perdeu")
        }, 1300)
        estado = "mostrandoSequencia"
        return
    }

    if (currentIndex === sequencia.length) {
        estado = "mostrandoSequencia"
        currentIndex = 0
        iniciar()
        return
    }
})

let estado = "mostrandoSequencia"

async function iniciar() {
    sequencia.push(rng())
    if (estado === "mostrandoSequencia") {
        estado = "..."
        botaoinicio.innerHTML = "..."
        await apresentarSequencia()
        estado = "playing"
        botaoinicio.innerHTML = ""
        return
    }
}

botaoinicio.addEventListener('click', function () {
    body.classList.remove("perdeu")
    body.style.backgroundColor = 'black'
    startgame.play()
    currentIndex = 0
    sequencia = [rng(), rng()]
    iniciar()
})
