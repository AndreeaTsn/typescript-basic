// =============================================================
// EXERCITIUL 25 - SECUNDE IN MINUTE SI SECUNDE
// =============================================================
// Cerinta: declara secundeTotal (numar intreg pozitiv), calculeaza
// cate minute intregi si cate secunde raman, apoi afiseaza in
// cutia verde un text de forma:
//   "125 secunde = 2 minute si 5 secunde"
// =============================================================

const rezultat = document.getElementById("rezultat");
const secundeTotal : number=60;
let minute = Math.floor(secundeTotal / 60);
let secunderamase = secundeTotal % 60;

rezultat.textContent = `${secundeTotal} = ${minute} minute si ${secunderamase} secunde`;
