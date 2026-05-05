// =============================================================
// EXERCITIUL 06 - OPERATORI LOGICI
// =============================================================
// Operatorii logici lucreaza cu valori boolean (true / false):
//
//   &&  AND (SI)  =>  true && true   = true
//                     true && false  = false
//                     false && true  = false
//                     false && false = false
//
//   ||  OR (SAU)  =>  true || true   = true
//                     true || false  = true
//                     false || true  = true
//                     false || false = false
//
//   !   NOT (NU)  =>  !true  = false
//                     !false = true
// =============================================================

const esteAdultDiv = document.getElementById("esteAdult");
const areCarnetDiv = document.getElementById("areCarnet");
const poateConduceDiv = document.getElementById("poateConduce");
const celPutinUnaDiv = document.getElementById("celPutinUna");
const nuEsteAdultDiv = document.getElementById("nuEsteAdult");

// =============================================================
// PAS 1: Declara doua variabile boolean.
//        Schimba valorile (true / false) ca sa vezi cum se schimba
//        rezultatele.
// =============================================================

// TODO: const esteAdult: boolean = ...;
// TODO: const areCarnet: boolean = ...;


// =============================================================
// PAS 2: Afiseaza valorile celor doua variabile in cutiile lor.
//        esteAdultDiv.textContent = "esteAdult = " + String(esteAdult);
// =============================================================

// TODO: afiseaza esteAdult


// TODO: afiseaza areCarnet


// =============================================================
// PAS 3: Foloseste && pentru a verifica daca persoana poate conduce
//        (trebuie sa fie si adult, si sa aiba carnet).
// =============================================================

// TODO: const poateConduce: boolean = esteAdult && areCarnet;
// TODO: poateConduceDiv.textContent = "Poate conduce? " + String(poateConduce);


// =============================================================
// PAS 4: Foloseste || pentru a verifica daca cel putin una dintre
//        cele doua conditii este indeplinita.
// =============================================================

// TODO: const celPutinUna: boolean = esteAdult || areCarnet;
// TODO: celPutinUnaDiv.textContent = "Cel putin una? " + String(celPutinUna);


// =============================================================
// PAS 5: Foloseste ! pentru a inversa "esteAdult".
// =============================================================

// TODO: const nuEsteAdult: boolean = !esteAdult;
// TODO: nuEsteAdultDiv.textContent = "Nu este adult? " + String(nuEsteAdult);
