let linksega = document.querySelector("nav > a")
let logo = document.querySelector("img#logobr")

linksega.addEventListener("click", (event) => {
    event.preventDefault() //previni o comportamento normal do hyperlink, assim ele espera a animação ocorrer
    logo.classList.add("sega-on")

    setTimeout(() => {
        logo.classList.remove("sega-on")
        setTimeout(() => {
            window.location.href = linksega.href
        }, 100)
    }, 300)
})