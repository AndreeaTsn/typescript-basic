// =============================================================
// EXERCITIUL 20 - PRET CU REDUCERE CONDITIONATA
// =============================================================

const rezultat = document.getElementById("rezultat");

// =============================================================
// PAS 1: Datele de intrare:
//        - pretInitial: number
//        - areCard: boolean
// =============================================================

// TODO: const pretInitial: number = ...;
// TODO: const areCard: boolean = ...;
const pretInitial : number = 80;
const areCard : boolean = true ;

// =============================================================
// PAS 2: Variabilele pentru rezultat.
//        - reducere (procent, number)
//        - pretFinal (number)
// =============================================================
let reducere : number = 0
let pretFinal : number = pretInitial;
// TODO: let reducere: number = 0;
// TODO: let pretFinal: number = pretInitial;


// =============================================================
// PAS 3: Decide reducerea cu if / else if / else.
//        - daca areCard si pretInitial > 200  -> reducere = 20
//        - altfel daca areCard                -> reducere = 10
//        - altfel                              -> reducere = 0
//
//        Atentie: areCard este deja boolean, nu trebuie scris
//        "areCard === true". Doar "if (areCard)".
// =============================================================

// TODO: if (areCard && pretInitial > 200) {
// TODO:     reducere = 20;
// TODO: } else if (...) {
// TODO:     ...
// TODO: } else {
// TODO:     ...
// TODO: }
if (areCard && pretInitial > 200 ) { reducere = 20; }
else if (areCard) { reducere =10;}
else { reducere =0}

// =============================================================
// PAS 4: Calculeaza pretul final aplicand reducerea.
//        Formula: pretInitial - (pretInitial * reducere / 100)
// =============================================================

// TODO: pretFinal = ...;

pretFinal = pretInitial - (pretInitial * reducere / 100);

// =============================================================
// PAS 5: Afiseaza un mesaj cu template literal:
//        "Pret X lei, reducere Y%, total Z lei"
// =============================================================

// TODO: rezultat.textContent = `Pret ${pretInitial.toFixed(2)} lei, reducere ${reducere}%, total ${pretFinal.toFixed(2)} lei`;
rezultat.textContent = `Pret ${pretInitial.toFixed(2)} lei , reducere ${reducere}% total ${pretFinal.toFixed(2)} lei `