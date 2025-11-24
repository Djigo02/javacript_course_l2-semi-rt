// EXO 1

// let N = Number(prompt("Saisir un nombre : "));

// while (isNaN(N)) {
//   N = Number(prompt("Saisir un nombre : "));
// }

// for (let index = 1; index <= N; index++) {
//   console.log(index);
// }

// EXO 2

let N = Number(prompt("Saisir un nombre : "));

while (isNaN(N)) {
  N = Number(prompt("Saisir un nombre : "));
}

// let i = 1;

// let somme = 0;

// while (i <= N) {
//   somme += i; // somme = somme + i
//   i++;
// }

// alert("La somme des nombres de 1 à " + N + " est : " + somme);

// EXO 4

// let secret = Math.floor(Math.random() * 10) + 1;
// // let N;
// do {
//   N = Number(prompt("Veuillez deviner le nombre : "));
//   if (N < secret) {
//     alert("Le nombre a deviner est plus grand");
//   } else if (N > secret) {
//     alert("Le nombre a deviner est plus petit");
//   }
// } while (N != secret);

// alert("Bravooooooo !!");

const elPair = document.querySelector("#elPair");
let cpt = 0;
let tabPair = [];

for (let index = 1; index <= N; index++) {
  if (index % 2 == 0) {
    tabPair.push(index);
    cpt++;
  }
}

elPair.textContent = `il y a ${cpt} nombre pairs (`;

// elPair.textContent += "Blablabla";
for (let index = 0; index < cpt; index++) {
  elPair.textContent += `${tabPair[index]}, `;
}
elPair.textContent += `)`;
