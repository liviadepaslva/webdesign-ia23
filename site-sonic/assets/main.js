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

let prevbotao = document.querySelector('button#prev');
let nextbotao = document.querySelector('button#next');
let selecttime = document.querySelector('button#time-selecionado');
let imgtime = document.querySelector('img#bannertime');

const times = ['Team Dark', 'Sonic Team'];
const links = ['teamdark.html', 'sonicteam.html'];
const imagens = ['imgs/teamdark-sa2.png', 'imgs/sonicteam-sa2.png'];
const cores = ['#da0f0f', '#006cba'];

let timeselected = 0;

prevbotao.addEventListener('click', prevTeam);
nextbotao.addEventListener('click', nextTeam);

function prevTeam() {
  timeselected = (timeselected - 1 + times.length) % times.length;
  updateTeam();
}

function nextTeam() {
  timeselected = (timeselected + 1) % times.length;
  updateTeam();
}

function updateTeam() {
  selecttime.textContent = times[timeselected];
  selecttime.innerHTML = '';
  const link = document.createElement('a');
  link.href = links[timeselected];
  link.textContent = times[timeselected];
  selecttime.appendChild(link);

  imgtime.src = imagens[timeselected];

  document.documentElement.style.setProperty('--time-selecionado', cores[timeselected]);

}
