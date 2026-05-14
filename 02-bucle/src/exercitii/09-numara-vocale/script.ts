// =============================================================
// EXERCITIUL 09 - NUMARA VOCALELE
// =============================================================
// Forma noua de for: for...of
//
//   for (const ch of text) {
//       // ch este pe rand: text[0], text[1], ...
//   }
//
// Nu mai ai nevoie de indice. Cand vrei sa verifici daca o litera
// este vocala, foloseste || (sau) cu fiecare caz:
//   if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
//
// Atentie: pentru a prinde si "A", "E", etc., aplica text.toLowerCase()
// inainte de bucla.
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara "text" (string) si "contor" (let, 0).
// =============================================================

// TODO: const text: string = "Programare TypeScript";
// TODO: let contor: number = 0;


// =============================================================
// PAS 2: for (const ch of text.toLowerCase()) cu if pentru vocale.
// =============================================================

// TODO: for (const ch of text.toLowerCase()) {
// TODO:     if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
// TODO:         contor++;
// TODO:     }
// TODO: }


// =============================================================
// PAS 3: Afiseaza un text de forma "Textul are 7 vocale".
// =============================================================

// TODO: rezultat.textContent = `Textul are ${contor} vocale`;
