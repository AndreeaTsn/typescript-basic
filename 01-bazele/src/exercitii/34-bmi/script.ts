// =============================================================
// EXERCITIUL 34 - BMI (INDICE DE MASA CORPORALA)
// =============================================================
// Cerinta: declara greutate (kg) si inaltime (m). Calculeaza BMI
// dupa formula: BMI = greutate / (inaltime * inaltime). Stabileste
// categoria:
//   < 18.5         -> "subponderal"
//   18.5 - 24.9    -> "normal"
//   25 - 29.9      -> "supraponderal"
//   30+            -> "obez"
// Afiseaza in cutia verde un text de forma:
//   "BMI = 22.86 (normal)"
// BMI rotunjit la doua zecimale.
// =============================================================

// const rezultat = document.getElementById("rezultat");
// const kg : number = 1;
// const inaltime : number = 180;
// let bmi : kg/ ( inaltime * inaltime);

// if (BMI < 18.5  ){ subponderal}

const kilogram : number = 110;
const inaltime : number = 165;
let bmi = kilogram  /(inaltime * inaltime);

let raspuns:string="";
bmi = Math.round(bmi*100)/100; // 123.1234 *100=12312.34=>12312/100=>123.12
1.555 *100  155.5 => //155 dupa aceea se imparte dupa ce s a facut estimarea 

if (bmi  < 18.5 ){
    raspuns= "subponderal";
}else if (bmi  >18.5 || bmi < 24.9 ){
    raspuns = "normal";
}else if (bmi >25 || bmi < 29.9 ) {
    raspuns = "supraponderal";
}else {
    raspuns= "obez";
}

rezultat.textContent = `BMI = ${bmi} (${raspuns})`;