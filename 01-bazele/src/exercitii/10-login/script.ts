// =============================================================
// EXERCITIUL 10 - VERIFICARE LOGIN
// =============================================================
// Acesta este exercitiul final care combina:
//   - declarare cu const
//   - tipul string si comparatia cu ===
//   - operatorul logic && (AND)
//   - instructiunea if / else
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Datele "corecte" - cele acceptate de aplicatie.
// =============================================================

// TODO: const utilizatorCorect: string = "admin";
// TODO: const parolaCorecta: string = "admin123";
const utilizator_corect : string = "admin";
const parola_corecta: string = "admin123";

// =============================================================
// PAS 2: Datele introduse de utilizator (le simulam in cod).
//        Schimba valorile ca sa testezi atat cazul corect cat
//        si cazurile gresite.
// =============================================================

// TODO: const utilizatorIntrodus: string = "admin";
// TODO: const parolaIntrodusa: string = "admin123";

const utilizatorIntrodus : string = "admin";
const parolaIntrodusa : string = "admin1233"
// =============================================================
// PAS 3: Variabila pentru mesajul final.
// =============================================================

// TODO: let mesaj: string = "";

let mesaj : string = " variabila mesaj final"

// =============================================================
// PAS 4: Foloseste if / else.
//        Conditia (utilizatorIntrodus === utilizatorCorect &&
//                  parolaIntrodusa === parolaCorecta)
//        este adevarata DOAR daca AMBELE comparari sunt true.
//
//        - daca este adevarata  -> mesaj = "Bine ai venit, " + utilizatorIntrodus + "!"
//        - altfel               -> mesaj = "Date de autentificare gresite."
// =============================================================

// TODO: if (...) {
// TODO:     ...
// TODO: } else {
// TODO:     ...
// TODO: }^
if ( utilizatorIntrodus === utilizator_corect && parolaIntrodusa===parola_corecta){
    mesaj = "Bine ai venit," + utilizatorIntrodus + "!";
} else  if(utilizatorIntrodus !== utilizator_corect ){ 
    mesaj= "utilizatorul este gresit";
}else {
    mesaj="a-ti introdus parola gresita";
}


// =============================================================
// PAS 5: Afiseaza mesajul.
// =============================================================

// TODO: rezultat.textContent = mesaj;
rezultat.textContent=mesaj;