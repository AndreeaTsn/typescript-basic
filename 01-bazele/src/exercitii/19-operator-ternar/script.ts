// =============================================================
// EXERCITIUL 19 - OPERATOR TERNAR
// =============================================================
// Forma generala:
//
//   conditie ? valoarea_daca_true : valoarea_daca_false
//
// Exemplu:
//   const semn = numar >= 0 ? "pozitiv" : "negativ";
//
// Este o forma SCURTA pentru:
//
//   let semn: string;
//   if (numar >= 0) {
//       semn = "pozitiv";
//   } else {
//       semn = "negativ";
//   }
// =============================================================

const cuIfDiv = document.getElementById("cuIf");
const cuTernarDiv = document.getElementById("cuTernar");

// =============================================================
// PAS 1: Declara un numar.
// =============================================================

// TODO: const numar: number = ...;


// =============================================================
// PAS 2: Varianta cu if/else - completeaza.
// =============================================================

// TODO: let mesajIf: string = "";
// TODO: if (numar % 2 === 0) {
// TODO:     mesajIf = "par";
// TODO: } else {
// TODO:     mesajIf = "impar";
// TODO: }


// =============================================================
// PAS 3: Aceeasi logica scrisa cu operatorul ternar (o singura linie).
// =============================================================

// TODO: const mesajTernar = numar % 2 === 0 ? "par" : "impar";


// =============================================================
// PAS 4: Afiseaza ambele in pagina.
// =============================================================

// TODO: cuIfDiv.textContent = `Cu if/else: ${numar} este ${mesajIf}`;
// TODO: cuTernarDiv.textContent = `Cu ternar:  ${numar} este ${mesajTernar}`;
