// =============================================================
// EXERCITIUL 11 - BREAK
// =============================================================
// "break" intrerupe complet bucla si sare la prima instructiune
// de DUPA ea. NU mai face nicio iteratie suplimentara.
//
//   for (let i = 1; i <= 10; i++) {
//       if (i === 5) {
//           break;       // ies din bucla complet
//       }
//       console.log(i);
//   }
//   // Afiseaza: 1, 2, 3, 4 (NU si 5)
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara "primul" cu valoarea -1 (semnal ca "inca nu am gasit").
// =============================================================

// TODO: let primul: number = -1;


// =============================================================
// PAS 2: Bucla for de la 50 la 100. Daca i este divizibil cu 7:
//          - salveaza-l in "primul"
//          - opreste bucla cu break
// =============================================================

// TODO: for (let i = 50; i <= 100; i++) {
// TODO:     if (i % 7 === 0) {
// TODO:         primul = i;
// TODO:         break;
// TODO:     }
// TODO: }


// =============================================================
// PAS 3: Afiseaza un text de forma:
//        "Primul divizibil cu 7 incepand de la 50 este 56"
// =============================================================

// TODO: rezultat.textContent = `Primul divizibil cu 7 incepand de la 50 este ${primul}`;
