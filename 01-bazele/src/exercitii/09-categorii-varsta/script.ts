// =============================================================
// EXERCITIUL 09 - CATEGORII DE VARSTA
// =============================================================
// Aici exersam combinarea operatorilor de comparare cu &&.
//
// Pentru a verifica un interval (de ex. intre 13 si 17 inclusiv)
// scriem doua conditii legate cu &&:
//
//   varsta >= 13 && varsta <= 17
//
// AMBELE trebuie sa fie adevarate in acelasi timp.
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara o variabila "varsta" de tip number.
//        Schimba valoarea ca sa testezi: 5, 14, 30, 70.
// =============================================================

// TODO: const varsta: number = ...;
const varsta : number = 70;

// =============================================================
// PAS 2: Variabila in care vom salva categoria.
// =============================================================

// TODO: let categorie: string = "";
let categorie: string = "text";

// =============================================================
// PAS 3: Foloseste if / else if / else cu intervale:
//        - varsta < 13                          -> "copil"
//        - varsta >= 13 && varsta <= 17         -> "adolescent"
//        - varsta >= 18 && varsta <= 64         -> "adult"
//        - altfel (deci 65+)                    -> "senior"
// =============================================================

// TODO: if (...) {
// TODO:     categorie = "copil";
// TODO: } else if (...) {
// TODO:     ...
// TODO: } ...
if ( varsta  < 13  ) { 
     categorie = "copil"
} else if ( varsta >= 13 && varsta <= 17 ) { categorie = "adolescent";

} else if ( varsta >= 18 && varsta <= 64 ){
    categorie = "adult"
}else if (varsta >65){ categorie = " senior"

}

// =============================================================
// PAS 4: Afiseaza un mesaj de forma:
//        "La X ani esti Y."
// =============================================================

// TODO: rezultat.textContent = "La " + String(varsta) + " ani esti " + categorie + ".";
rezultat.textContent ="la " + String(varsta) + "ani esti" + categorie + ".";
