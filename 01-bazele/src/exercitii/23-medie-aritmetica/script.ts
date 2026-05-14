// =============================================================
// EXERCITIUL 23 - MEDIA ARITMETICA A TREI NUMERE
// =============================================================
// Cerinta: declara trei numere, calculeaza media aritmetica si
// afiseaza in cutia verde un text de forma:
//   "Media dintre 4, 7 si 10 este 7"
// Daca rezultatul nu este intreg, afiseaza-l cu doua zecimale.
// =============================================================

const rezultat = document.getElementById("rezultat");
const numarul1 : number=4;
const numarul2 : number=7;
const numarul3 : number=10;

let media : number= (numarul1+numarul2+numarul3)/3;

rezultat.textContent= ` Media dintre ${numarul1}, ${numarul2} si ${numarul3} este ${media.toFixed(2)}`;
