// =============================================================
// EXERCITIUL 31 - PRET BILET CINEMA
// =============================================================
// Cerinta: declara varsta (numar). Stabileste pretul biletului
// dupa regulile:
//   < 7 ani         -> 0 lei
//   7 - 17 ani      -> 15 lei
//   18 - 64 ani     -> 30 lei
//   65+ ani         -> 20 lei
// Afiseaza in cutia verde un text de forma:
//   "La 14 ani, biletul costa 15 lei"
// =============================================================

const rezultat = document.getElementById("rezultat");
const varsta : number = 17;
let bilet : number = 0;

if (varsta  < 7  ) {
    bilet=0;
}else if (varsta >= 7 && varsta <= 17) {
    bilet=15;
}else if (varsta  >= 18 && varsta <= 64){
    bilet=30;
}else {
    bilet = 20;
}

rezultat.textContent = `La  ${varsta} ani, biletul costa ${bilet}`;