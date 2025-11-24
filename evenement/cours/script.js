const btn_click = document.querySelector("#btn-click");
const btn_blue = document.querySelector("#btn-blue");
const btn_red = document.querySelector("#btn-red");
const zone_survol = document.querySelector("#zone-survol");
const text_clavier = document.querySelector("#text-clavier");
const input_clavier = document.querySelector("#input-clavier");
const count_chars = document.querySelector("#count-chars");

const container = document.querySelector(".container");
const btn_green = document.querySelector("#btn-green");
const sortie = document.querySelector("#sortie");

function direBonjour() {
  sortie.innerText = "Bonjour tout le monde !";
}

//deconseiller

// btn_click.onclick = function () {
//   direBonjour();
// };

//
function changeColor(color) {
  document.body.style.backgroundColor = color;
}

btn_click.addEventListener("dblclick", () => {
  direBonjour();
});

btn_blue.addEventListener("click", () => {
  changeColor("blue");
});
btn_red.addEventListener("click", () => {
  changeColor("red");
});
btn_green.addEventListener("click", () => {
  changeColor("green");
});

zone_survol.addEventListener("mouseover", () => {
  zone_survol.innerText = "La souris est entree";
});

zone_survol.addEventListener("mouseout", () => {
  zone_survol.innerText = "La souris est sortie";
});

input_clavier.addEventListener("keyup", () => {
  text_clavier.innerText = "Tape quelque chose : " + input_clavier.value;
  console.log("Tape quelque chose : " + input_clavier.value.trim());
  count_chars.textContent = input_clavier.value.trim().length + " caractere(s)";
});

window.addEventListener("resize", () => {
  document.querySelector(
    "#resize-info"
  ).textContent = `Largeur : ${window.innerWidth} px`;
});
