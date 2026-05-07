// =============================================================
// EXERCITIUL 04 - let vs const
// =============================================================
// let   = variabila cu valoare CARE SE POATE SCHIMBA.
// const = variabila cu valoare CARE NU SE MAI SCHIMBA dupa
//         atribuirea initiala.
// =============================================================

const initialDiv = document.getElementById("initial");
const dupaDiv = document.getElementById("dupaSchimbare");

// =============================================================
// PAS 1: Declara cu LET o variabila "scor" de tip number cu
//        valoarea 0.
// =============================================================

// TODO: let scor: number = ...;
let scor: number = 0;

// =============================================================
// PAS 2: Afiseaza valoarea initiala in cutia "initialDiv".
//        initialDiv.textContent = "Scor initial: " + String(scor);
// =============================================================
//String(12)=>"12"

// TODO: initialDiv.textContent = ...;
initialDiv.textContent = "scor initial: " +scor;

// =============================================================
// PAS 3: Schimba valoarea lui "scor" in 100.
//        Cand reasignam o variabila let, NU mai punem "let" in fata.
//        Corect:    scor = 100;
//        Gresit:    let scor = 100;   <- creeaza alta variabila!
// =============================================================

// TODO: scor = ...;
scor =100;

// =============================================================
// PAS 4: Afiseaza noua valoare in cutia "dupaDiv".
// =============================================================

// TODO: dupaDiv.textContent = ...;
dupaDiv.textContent = "scor dupa: " + scor;

// =============================================================
// BONUS (optional):
// Decomenteaza randurile de mai jos si vezi eroarea de la TypeScript.
// const NU permite reasignare.
// =============================================================

// const PI: number = 3.14;
// PI = 4; // <- Eroare: "Cannot assign to 'PI' because it is a constant."
const PI: number = 3.14;

dupaDiv.textContent = "scor dupa " + PI;