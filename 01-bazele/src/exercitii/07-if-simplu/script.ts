// =============================================================
// EXERCITIUL 07 - IF SIMPLU
// =============================================================
// Instructiunea if are forma:
//
//   if (conditie) {
//       // se executa daca conditia este true
//   } else if (alta_conditie) {
//       // se executa daca prima e false dar a doua e true
//   } else {
//       // se executa daca toate conditiile de mai sus sunt false
//   }
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Declara o variabila "numar" de tip number cu o valoare la
//        alegere (incearca pe rand: 5, -3, 0).
// =============================================================

// TODO: const numar: number = ...;
let   numar : number = -5;




// =============================================================
// PAS 2: Foloseste o variabila "mesaj" de tip string in care vei
//        salva textul de afisat.
//        Declar-o cu let pentru ca ii vom da valoare in if/else.
// =============================================================

// TODO: let mesaj: string = "";
let mesaj : string = " if "

// =============================================================
// PAS 3: Scrie if / else if / else cu urmatoarea logica:
//        - daca numar > 0  -> mesaj devine "Numarul este pozitiv"
//        - daca numar < 0  -> mesaj devine "Numarul este negativ"
//        - altfel          -> mesaj devine "Numarul este zero"
// =============================================================

// TODO: if (numar > 0) {
// TODO:     mesaj = "Numarul este pozitiv";
// TODO: } else if (numar < 0) {
// TODO:     mesaj = "Numarul este negativ";
// TODO: } else {
// TODO:     mesaj = "Numarul este zero";
// TODO: }


numar=2;

if ( numar > 0 ) {

    mesaj="numarul este pozitiv";

 }else  if(numar==0){

     mesaj="numarul este null";
 }
 else if (numar==2) { 
    mesaj = "numarul este 2";}
 
 else{
    mesaj="nuamrule ste negativ";
 }
// =============================================================
// PAS 4: Afiseaza mesajul in cutia verde.
// =============================================================

// TODO: rezultat.textContent = mesaj;

rezultat.textContent=mesaj;