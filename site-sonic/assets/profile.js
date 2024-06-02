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

const sectionbtns = document.querySelectorAll(".section-top > button")

sectionbtns.forEach(button => {
    button.addEventListener("click", yay)
})

function yay() {
    let sectiontop = this.parentNode;
    let content = sectiontop.nextElementSibling;

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden")
    } else {
        content.classList.add("hidden")
    }
}