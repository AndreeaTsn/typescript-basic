// =============================================================
// EXERCITIUL 10 - INVERSEAZA TEXT
// =============================================================
// Truc: in loc de "invers += ch" (adauga la sfarsit), folosim
// "invers = ch + invers" (pune caracterul nou IN FATA).
//
// Asa, pentru "Salut":
//   ch = "S" -> invers = "S"
//   ch = "a" -> invers = "aS"
//   ch = "l" -> invers = "laS"
//   ch = "u" -> invers = "ulaS"
//   ch = "t" -> invers = "tulaS"
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara "text" (const) si "invers" (let, "").
// =============================================================

// TODO: const text: string = "Salut";
// TODO: let invers: string = "";


// =============================================================
// PAS 2: for (const ch of text) { invers = ch + invers; }
// =============================================================

// TODO: for (const ch of text) {
// TODO:     invers = ch + invers;
// TODO: }


// =============================================================
// PAS 3: Afiseaza un text de forma "Salut -> tulaS".
// =============================================================

// TODO: rezultat.textContent = `${text} -> ${invers}`;
