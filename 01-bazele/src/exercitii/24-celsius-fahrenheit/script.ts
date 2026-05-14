// =============================================================
// EXERCITIUL 24 - CONVERSIE CELSIUS -> FAHRENHEIT
// =============================================================
// Cerinta: declara o temperatura in Celsius (numar), converteste
// in Fahrenheit folosind F = C * 9 / 5 + 32 si afiseaza in cutia
// verde un text de forma:
//   "25 C = 77 F"
// Rotunjeste rezultatul la o zecimala.
// =============================================================

const rezultat = document.getElementById("rezultat");
const temp : number=0;
let convertire = temp *9 / 5 + 32;
rezultat.textContent = `${temp}C = ${convertire.toFixed(1)}F`;

