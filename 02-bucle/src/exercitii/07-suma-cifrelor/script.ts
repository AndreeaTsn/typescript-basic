// =============================================================
// EXERCITIUL 07 - SUMA CIFRELOR UNUI NUMAR
// =============================================================
// Trucuri matematice utile:
//   - numar % 10              -> ultima cifra (ex: 1234 % 10 = 4)
//   - Math.floor(numar / 10)  -> numarul fara ultima cifra
//                                (ex: Math.floor(1234 / 10) = 123)
//
// Aplicam pana cand numarul devine 0.
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara "numarInitial" (const, valoarea pe care vrei sa o
//        testezi - ex: 1234). Apoi "numar" (let, copie pe care o vei
//        modifica) si "suma" (let, 0).
// =============================================================

// TODO: const numarInitial: number = 1234;
// TODO: let numar: number = numarInitial;
// TODO: let suma: number = 0;


// =============================================================
// PAS 2: while (numar > 0):
//          - cifra = numar % 10
//          - suma += cifra
//          - numar = Math.floor(numar / 10)
// =============================================================

// TODO: while (numar > 0) {
// TODO:     const cifra: number = numar % 10;
// TODO:     suma += cifra;
// TODO:     numar = Math.floor(numar / 10);
// TODO: }


// =============================================================
// PAS 3: Afiseaza un text de forma:
//        "Suma cifrelor lui 1234 este 10"
// =============================================================

// TODO: rezultat.textContent = `Suma cifrelor lui ${numarInitial} este ${suma}`;
