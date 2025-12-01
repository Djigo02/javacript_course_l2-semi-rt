const guess = document.querySelector(".guess");
const chNumberSecret = document.querySelector(".number");
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const message = document.querySelector(".message");

var secret = Math.floor(Math.random() * 100) + 1;

btnCheck.addEventListener("click", () => {
  if (isNaN(Number(guess.value))) {
    messageValue("Le nombre a deviner est entre 1 et 100");
  } else {
    if (guess.value < secret) {
      messageValue("Le nombre a deviner est plus grand");
    } else if (guess.value > secret) {
      messageValue("Le nombre a deviner est plus petit");
    } else {
      messageValue("Bravo 🎉");
      chNumberSecret.textContent = guess.value;
      //   document.body.style.backgroundColor = "#52a938ff";
    }
  }
});

btnAgain.addEventListener("click", () => {
  reset();
});

document.addEventListener("DOMContentLoaded", () => {
  reset();
});

function reset() {
  guess.value = "";
  chNumberSecret.textContent = "?";
  message.textContent = "Demmarage ...";
  //   document.body.style.backgroundColor = "";
  document.body.classList.add("my-element");
}

function messageValue(value) {
  message.textContent = value;
}
