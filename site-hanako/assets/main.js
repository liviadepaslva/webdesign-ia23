const btToggleMenu = document.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

//dialog do trailer
const btDialog = document.querySelector(".bt-dialog")
const Trailerdialog = document.querySelector("dialog#trailer")

btDialog.addEventListener('click', () => Trailerdialog.show())

document.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => {
    event.preventDefault()
    Trailerdialog.close()
  })
)

//modal de seleção de tema
const Themedialog = document.querySelector("dialog#tema")
const btModal = document.querySelector(".bt-modal")


btModal.addEventListener('click', () => Themedialog.showModal())
document.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => Themedialog.close()
  )
)

const btLightMode = document.querySelector("#light-btn")
const btDarkMode = document.querySelector("#dark-btn")

const valoresCSS = ['--text-color','--background-color','--section-break-text','--section-break-bg', '--img-text', '--img-background']

const valLightMode = ['rgb(14, 1, 1)', 'rgb(255, 255, 255)', 'rgb(14, 1, 1)', 'rgb(255, 145, 0)', 'rgb(14, 1, 1)','rgba(255, 233, 192, 0.49)']
const valDarkMode = ['rgb(223, 230, 237)', 'rgb(18, 18, 35)', 'rgb(223, 230, 237)', 'rgb(47, 178, 239)', 'rgb(232, 239, 246)', 'rgba(120, 75, 209, 0.523)']

btLightMode.addEventListener('click', () => {
  for(let i = 0; i < 6; i++) {
    document.documentElement.style.setProperty(valoresCSS[i], valLightMode[i])
  }
})

btDarkMode.addEventListener('click', () => {
  for(let i = 0; i < 6; i++) {
    document.documentElement.style.setProperty(valoresCSS[i], valDarkMode[i])
  }
});