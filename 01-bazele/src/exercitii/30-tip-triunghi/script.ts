// =============================================================
// EXERCITIUL 30 - TIP TRIUNGHI
// =============================================================
// Cerinta: declara trei laturi a, b, c (numere). Stabileste daca
// triunghiul este echilateral (toate trei egale), isoscel (exact
// doua egale) sau oarecare (toate diferite). Afiseaza in cutia
// verde un text de forma:
//   "Triunghi (5, 5, 8) este isoscel"
// =============================================================

const rezultat = document.getElementById("rezultat");
const a : number=5;
const b : number=5;
const c : number=8;

let tip: string = "";
if (a === b && b===c ) { 
    tip= "echilateral";
}
else if( a=== b  ||  b===c  ||  a===c ){ 
    tip= "isoscel";
}
else {
    tip="oarecare";
}

rezultat.textContent= `Triunghi (${a},${b},${c}) este ${tip})`
