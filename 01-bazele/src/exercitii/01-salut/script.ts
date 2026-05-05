// =============================================================
// EXERCITIUL 01 - PRIMUL PROGRAM
// =============================================================
// Vei invata sa declari o variabila de tip string si sa afisezi
// valoarea ei in pagina.
// =============================================================

// Acest rand gaseste cutia verde din pagina (div-ul cu id="rezultat").
// Nu trebuie sa intelegi complet cum functioneaza inca.
const rezultat = document.querySelector("#rezultat");

// =============================================================
// PAS 1: Declara o variabila numita "nume" de tip string si pune
//        in ea numele tau.
//
//        Sintaxa:  const numeleVariabilei: tip = valoarea;
//        Exemplu:  const oras: string = "Cluj";
// =============================================================

// TODO: const nume: string = "...";

const nume: string="Andreea";


// =============================================================
// PAS 2: Pune in cutia verde textul: Salut, <numele tau>!
//
//        Pentru a combina text cu o variabila, folosim semnul "+".
//        Exemplu:  rezultat.textContent = "Buna, " + oras;
// =============================================================

// TODO: rezultat.textContent = ...;

rezultat.textContent ="Salut "+nume+"!";
