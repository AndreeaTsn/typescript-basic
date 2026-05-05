// =============================================================
// EXERCITIUL 02 - ADUNARE A DOUA NUMERE
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara doua variabile de tip number cu valori la alegere.
//
//        Sintaxa:  const numeleVariabilei: number = valoarea;
//        Exemplu:  const x: number = 7;
// =============================================================

// TODO: const a: number = ...;
// TODO: const b: number = ...;
const variabila1: number = 5;
const variabila2: number = 7;

// =============================================================
// PAS 2: Calculeaza suma si pune-o intr-o variabila noua "suma".
//        Operatorul + aduna doua numere.
// =============================================================

// TODO: const suma = ...;
const suma = variabila1 + variabila2; 

// =============================================================
// PAS 3: Afiseaza in cutia verde textul: Suma este: <suma>
//
//        ATENTIE: cand combini text cu un numar, e mai sigur sa
//        convertesti numarul la text cu String(suma).
//        Asa eviti probleme cum ar fi 5 + "5" = "55".
// =============================================================

// TODO: rezultat.textContent = "Suma este: " + String(...);
rezultat.textContent = "Suma este: " + suma;