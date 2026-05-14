// =============================================================
// EXERCITIUL 14 - AN NASTERE (estimare)
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara anul curent si varsta persoanei.
// =============================================================

// TODO: const anCurent: number = 2026;
// TODO: const varsta: number = ...;
const anCurent : number = 2026;
const varsta : number = 33
 

// =============================================================
// PAS 2: Calculeaza anul nasterii (anCurent - varsta).
// =============================================================

// TODO: const anNastere = ...;
const anNastere: number = anCurent - varsta 

// =============================================================
// PAS 3: Afiseaza rezultatul:
//        "La 25 de ani, te-ai nascut in 2001."
// =============================================================

// TODO: rezultat.textContent = "La " + String(varsta) + " ani, te-ai nascut in " + String(anNastere) + ".";
rezultat.textContent = "La" + String(varsta) + "ani, te-ai nascut in" + String(anNastere) + "."