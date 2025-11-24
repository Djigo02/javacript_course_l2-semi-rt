const resultat = document.querySelector("#resultat");
// var N = 0;
// const paraList = document.querySelectorAll("p");

// const resultatId = document.getElementById("resultat");
// const titre = document.getElementsByClassName("titre");
// const titreClass = document.querySelectorAll(".titre");

function saisieNombre(message) {
  let N = Number(prompt(`${message} : `));

  while (isNaN(N)) {
    N = Number(prompt(`${message} : `));
  }
  return N;
}

function multiplication(nombre, limite = 10) {
  console.log("Nommee");
  for (let index = 1; index <= limite; index++) {
    console.log(`${nombre} * ${index} = ${nombre * index}`);
  }
}

// let N = saisieNombre("Saisir le nombre a afficher la table");
// let lim = saisieNombre("Saisir la limite");
// console.log(saisieNombre());

// multiplication(N, lim);
// multiplication(25, 20);

// console.log(resultat.textContent);
// console.log("-----------------------------");
// console.log(paraList[2]);

const tableMulti = function (nombre, limite = 10) {
  console.log("Anonyme");

  for (let index = 1; index <= limite; index++) {
    console.log(`${nombre} * ${index} = ${nombre * index}`);
  }
};

// tableMulti(N, lim);

const tableMultiFlechee = (nombre, limite = 10) => {
  console.log("Flecher");

  for (let index = 1; index <= limite; index++) {
    console.log(`${nombre} * ${index} = ${nombre * index}`);
  }
};

// tableMultiFlechee(N, lim);

const sayHi = () => {
  let nom = prompt(`Saisir votre nom : `);
  alert(`Votre nom est ${nom}`);
};

// sayHi();

const carre = (nombre) => {
  alert(`Le carre de ${nombre} est ${nombre * nombre}`);
};

const carree = (nombre) => nombre * nombre;
let c = carree(9);
alert(c);
