// =============================================================
// EXERCITIUL 29 - ZI DIN SAPTAMANA
// =============================================================
// Cerinta: declara nrZi (numar de la 1 la 7) si afiseaza numele
// zilei (Luni, Marti, ..., Duminica). Pentru valori in afara
// intervalului 1-7, afiseaza "Numar invalid".
// Format afisare:
//   "Ziua 3 = Miercuri"
// =============================================================

const rezultat = document.getElementById("rezultat");
const nrZi: number=1;
let zi: string = "" ;

if (nrZi=== 1){
    zi= "Luni";
}
else if (nrZi===2) {
    zi="Marti";
    
}else if (nrZi === 3) {
    zi = "Miercuri";
}
else if (nrZi === 4) {
    zi = "Joi";
}
else if (nrZi === 5) {
    zi = "Vineri";
}
else if (nrZi === 6) {
    zi = "Sambata";
}
else if (nrZi === 7) {
    zi = "Duminica";
}
else  {
    zi = "Numar invalid";
}

rezultat.textContent= `Ziua ${nrZi} = ${zi}`;