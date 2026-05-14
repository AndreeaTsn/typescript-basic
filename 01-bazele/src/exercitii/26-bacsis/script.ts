// =============================================================
// EXERCITIUL 26 - BACSIS LA RESTAURANT
// =============================================================
// Cerinta: declara nota (suma in lei) si procentBacsis (ex: 10),
// calculeaza valoarea bacsisului si totalul de plata, apoi
// afiseaza in cutia verde un text de forma:
//   "Nota: 80 lei. Bacsis: 8 lei. Total: 88 lei."
// =============================================================

const rezultat = document.getElementById("rezultat");
const nota : number=80;
const procentBacsis: number=10;
const bacsis :  number =
nota * procentBacsis / 100;
let total = nota + bacsis;

rezultat.textContent=`Nota : ${nota} lei. Bacsis: ${bacsis}. Total: ${total}`;