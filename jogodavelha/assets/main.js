const espacos = document.querySelectorAll(".espaco")
let span = document.querySelector("main > span")

let checarturno = true

const jogadorum = "X"
const jogadordois = "O"

let posicoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 6],
    [6, 4, 2],
    [0, 4, 8],
    [2, 4, 6],
  ];

document.addEventListener("click", (event) => {
    if(event.target.matches(".espaco")) {
        if(event.target.matches(".O"))
            return
        if(event.target.matches(".X"))
            return
        jogarjoguinho(event.target.id)
    }
})

function jogarjoguinho(id) {
    const espaco = document.getElementById(id)
    turno = checarturno ? jogadorum : jogadordois
    espaco.textContent = turno
    espaco.classList.add(turno)

    turnospan = checarturno ? jogadordois : jogadorum
    span.innerHTML = ""
    span.innerHTML = ` O jogador atual é "${turnospan}" `
    vencedorcheck(turno)
}

function vencedorcheck (turno) {
    const vencedor = posicoes.some((posi) => {
        return posi.every((index) => {
            return espacos[index].classList.contains(turno)
        })
    })

    if (vencedor) {
        caboujoguinho(turno)
    } else if (empatecheck()) {
        caboujoguinho()
    } else {
        checarturno = !checarturno
    }
}

function empatecheck () {
    let x = 0
    let o = 0

    for (index in espacos) {
        if(!isNaN(index)) {
            if(espacos[index].classList.contains(jogadorum)) {
                x++
            }
    
            if(espacos[index].classList.contains(jogadordois)) {
                o++
            }
        }
    }

    return x + o === 9 ? true : false
}

function caboujoguinho(vencedor = null) {
    const telaescura = document.getElementById("tela-escura")
    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")

    telaescura.style.visibility = "visible"
    telaescura.appendChild(h2)
    telaescura.appendChild(h3)

    if (vencedor) {
        console.log(`o vencedor é ${vencedor}`)
        h2.innerHTML = `o vencedor é <span>${vencedor}</span>`
    } else {
        console.log("empate")
        h2.innerHTML = "o jogo empatou"
    }

    let timer = 3

    setInterval(() => {
        h3.innerHTML = `reiniciando em ${timer--}...`
    }, 1000)
    setTimeout(() => location.reload(), 4000)
}