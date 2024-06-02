const btToggleMenu = document.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

const sectionbtns = document.querySelectorAll(".section-top > button")

sectionbtns.forEach(button => {
    button.addEventListener("click", yay)
})

function yay() {
    let sectiontop = this.parentNode;
    let content = sectiontop.nextElementSibling;

    content.classList.toggle("hidden")
}