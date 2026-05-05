// =============================================================
// EXERCITIUL 13 - PRET CU TVA
// =============================================================
// Formula:
//   valoareTVA = pretBaza * procentTVA / 100
//   pretFinal  = pretBaza + valoareTVA
//
// .toFixed(2) ne lasa doar 2 zecimale, returnand un string.
// Exemplu: (12.3456).toFixed(2)  =>  "12.35"
// =============================================================

const pretBazaDiv = document.getElementById("pretBaza");
const valoareTvaDiv = document.getElementById("valoareTva");
const pretFinalDiv = document.getElementById("pretFinal");

// =============================================================
// PAS 1: Declara pretul de baza si procentul de TVA (de exemplu 19).
// =============================================================

// TODO: const pretBaza: number = ...;
// TODO: const procentTVA: number = ...;


// =============================================================
// PAS 2: Calculeaza valoarea TVA-ului.
// =============================================================

// TODO: const valoareTVA = ...;


// =============================================================
// PAS 3: Calculeaza pretul final (pret baza + valoare TVA).
// =============================================================

// TODO: const pretFinal = ...;


// =============================================================
// PAS 4: Afiseaza fiecare valoare cu 2 zecimale.
//        Exemplu: pretBaza.toFixed(2)  -> "100.00"
// =============================================================

// TODO: pretBazaDiv.textContent = "Pret baza: " + pretBaza.toFixed(2) + " lei";
// TODO: valoareTvaDiv.textContent = "TVA " + procentTVA + "%: " + valoareTVA.toFixed(2) + " lei";
// TODO: pretFinalDiv.textContent = "Pret final: " + pretFinal.toFixed(2) + " lei";
