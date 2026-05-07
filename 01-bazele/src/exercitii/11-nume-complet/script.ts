// =============================================================
// EXERCITIUL 11 - NUME COMPLET
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara doua variabile de tip string: prenume si nume.
// =============================================================

// TODO: const prenume: string = "...";
// TODO: const nume: string = "...";

const prenume: string = "Maria";
const nume: string = "Popescu"
// =============================================================
// PAS 2: Construieste numele complet combinand cele doua variabile
//        cu un spatiu intre ele.
//        Exemplu: prenume + " " + nume
// =============================================================

// TODO: const numeComplet: string = ...;
const numeComplet : string = prenume + " " + nume;

// =============================================================
// PAS 3: Afiseaza in cutia verde textul:
//        "Numele complet: <numeComplet>"
// =============================================================

// TODO: rezultat.textContent = ...;
rezultat.textContent = numeComplet ;