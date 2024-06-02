const modal = document.querySelector(".modal")
const showbutton = document.querySelector(".show")
const closebutton = modal.querySelector("button.close")

showbutton.addEventListener("click", () => {
    modal.classList.add("opened")
})

closebutton.addEventListener("click", () => {
    modal.classList.remove("opened")
})

modal.addEventListener("click", (evt) => {
    if(evt.target == modal) {
        modal.classList.remove("opened")
    }
})