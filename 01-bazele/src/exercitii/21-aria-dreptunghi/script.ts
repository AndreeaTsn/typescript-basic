// =============================================================
// EXERCITIUL 21 - ARIA DREPTUNGHIULUI
// =============================================================
// Cerinta: declara lungimea si latimea unui dreptunghi (numere),
// calculeaza aria si afiseaza in cutia verde un text de forma:
//   "Dreptunghi 5 x 3 are aria 15"
// =============================================================

const rezultat = document.getElementById("rezultat");

const lungime = 5;
const latime = 3;

let aria : number = 0;

aria = lungime * latime ;


rezultat.textContent = `Dreptunghi ${lungime}x ${latime} are aria ${aria}`