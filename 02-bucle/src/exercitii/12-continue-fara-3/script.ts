// =============================================================
// EXERCITIUL 12 - CONTINUE
// =============================================================
// "continue" sare peste RESTUL iteratiei curente si trece la
// urmatoarea valoare. Bucla NU se opreste.
//
//   for (let i = 1; i <= 10; i++) {
//       if (i % 2 === 0) {
//           continue;     // sare peste numerele pare
//       }
//       console.log(i);   // afiseaza doar impare: 1, 3, 5, 7, 9
//   }
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara "suma" (let, 0).
// =============================================================

// TODO: let suma: number = 0;


// =============================================================
// PAS 2: Bucla for de la 1 la 50.
//        Daca i este divizibil cu 3 -> continue.
//        Altfel -> suma += i.
// =============================================================

// TODO: for (let i = 1; i <= 50; i++) {
// TODO:     if (i % 3 === 0) {
// TODO:         continue;
// TODO:     }
// TODO:     suma += i;
// TODO: }


// =============================================================
// PAS 3: Afiseaza un text de forma:
//        "Suma 1-50 fara multiplii de 3 este 867"
// =============================================================

// TODO: rezultat.textContent = `Suma 1-50 fara multiplii de 3 este ${suma}`;
