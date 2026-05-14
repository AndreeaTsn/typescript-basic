// =============================================================
// EXERCITIUL 16 - ANOTIMP DUPA LUNA
// =============================================================
// Aici exersam || (SAU). Pentru ca o luna sa fie "iarna", trebuie
// sa fie 12 SAU 1 SAU 2:
//
//   luna === 12 || luna === 1 || luna === 2
//
// Macar UNA din comparari sa fie true => totul e true.
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara o variabila "luna" cu o valoare intre 1 si 12.
// =============================================================

// TODO: const luna: number = ...;
const luna: number = 8

// =============================================================
// PAS 2: Variabila pentru anotimp.
// =============================================================

// TODO: let anotimp: string = "";
let anotimp : string = "iarna"

// =============================================================
// PAS 3: Foloseste if / else if / else cu mai multe || pe ramura:
//        - luna === 12 || luna === 1 || luna === 2  -> "iarna"
//        - luna = 3 && luna <= 5                   -> "primavara"
//        - luna >= 6 && luna <= 8                   -> "vara"
//        - altfel (deci 9, 10, 11)                  -> "toamna"
// =============================================================

// TODO: if (...) {
// TODO:     anotimp = "iarna";
// TODO: } else if (...) {
// TODO:     ...
// TODO: } ...

if (luna === 12 || luna === 1 || luna===2 ) {
    anotimp= "iarna"
}
else if (luna === 3 && luna <=5) {
    anotimp = "primavara"
}
else if (luna ===6 && luna <= 8 ){
    anotimp = "vara"
}
else { anotimp = "toamna"}
    
            
// =============================================================
// PAS 4: Afiseaza rezultatul.
// =============================================================

// TODO: rezultat.textContent = "Luna " + String(luna) + " - anotimp: " + anotimp;
rezultat.textContent = "Luna" + String(luna) + "-anotimp" + anotimp;