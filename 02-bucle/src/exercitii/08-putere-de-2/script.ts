// =============================================================
// EXERCITIUL 08 - CEA MAI MARE PUTERE DE 2 SUB 1000
// =============================================================
// Conditia ne spune "cat timp dublarea NU depaseste 1000, dubleaza".
// Cand iesim din bucla, in "putere" ramane ultima valoare valida.
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara "putere" (let, 1).
// =============================================================

// TODO: let putere: number = 1;


// =============================================================
// PAS 2: while (putere * 2 < 1000) -> dubleaza putere.
//
//        Atentie: verificam "putere * 2 < 1000", NU "putere < 1000".
//        Asa garantam ca dupa dublare ramanem sub 1000.
// =============================================================

// TODO: while (putere * 2 < 1000) {
// TODO:     putere *= 2;
// TODO: }


// =============================================================
// PAS 3: Afiseaza un text de forma:
//        "Cea mai mare putere de 2 sub 1000 este 512"
// =============================================================

// TODO: rezultat.textContent = `Cea mai mare putere de 2 sub 1000 este ${putere}`;
