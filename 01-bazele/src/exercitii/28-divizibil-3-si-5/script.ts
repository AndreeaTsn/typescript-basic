// =============================================================
// EXERCITIUL 28 - DIVIZIBIL CU 3 SI CU 5
// =============================================================
// Cerinta: declara numar (numar intreg). Calculeaza un boolean
// care arata daca numar este divizibil simultan cu 3 si cu 5.
// Afiseaza in cutia verde un text de forma:
//   "15 este divizibil cu 3 si cu 5: true"
// =============================================================

const rezultat = document.getElementById("rezultat");
const numar : number=15;
let divizibil : boolean= numar % 3 === 0 && numar % 5 === 0 ;

rezultat.textContent= `${numar} este divizibil cu 3 si cu 5: ${divizibil}`;
