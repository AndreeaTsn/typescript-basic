// =============================================================
// EXERCITIUL 22 - PERIMETRUL PATRATULUI
// =============================================================
// Cerinta: declara latura unui patrat (numar), calculeaza
// perimetrul si afiseaza in cutia verde un text de forma:
//   "Patrat cu latura 4 are perimetrul 16"
// =============================================================

const rezultat = document.getElementById("rezultat");
const latura : number =4;
let perimetru : number = 4 * latura;

rezultat.textContent = `Patrat cu latura ${latura} are perimetrul ${perimetru};`