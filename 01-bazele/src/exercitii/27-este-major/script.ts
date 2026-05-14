// =============================================================
// EXERCITIUL 27 - ESTE MAJOR
// =============================================================
// Cerinta: declara varsta (numar). Calculeaza un boolean
// esteMajor folosind o comparare (NU folosi if). Afiseaza in
// cutia verde un text de forma:
//   "Are 17 ani. Este major: false"
// =============================================================

const rezultat = document.getElementById("rezultat");
const varsta : number= 17;
let esteMajor: boolean =
varsta >= 18;
rezultat.textContent= `Are ${varsta}. Este major: ${esteMajor}`