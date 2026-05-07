// =============================================================
// EXERCITIUL 05 - OPERATORI DE COMPARARE
// =============================================================
// Operatorii de comparare returneaza intotdeauna o valoare boolean
// (true sau false).
//
//   ===   egal           (10 === 10  =>  true)
//   !==   diferit        (10 !== 5   =>  true)
//   >     mai mare       (10 > 5     =>  true)
//   <     mai mic        (10 < 5     =>  false)
//   >=    mai mare sau egal
//   <=    mai mic sau egal
// =============================================================

const egalDiv = document.getElementById("egal");
const diferitDiv = document.getElementById("diferit");
const maiMareDiv = document.getElementById("maiMare");
const maiMicDiv = document.getElementById("maiMic");
const maiMareSauEgalDiv = document.getElementById("maiMareSauEgal");
const maiMicSauEgalDiv = document.getElementById("maiMicSauEgal");

// =============================================================
// PAS 1: Declara doua numere "a" si "b". Incepe cu a = 10, b = 5.
// =============================================================
const a: number = 10;
const b: number = 5;
// TODO: const a: number = ...;
// TODO: const b: number = ...;


// =============================================================
// PAS 2: Pentru fiecare comparare, salveaza rezultatul intr-o
//        variabila boolean si afiseaza-l in cutia corespunzatoare.
//
//        Exemplu:
//        const suntEgale: boolean = a === b;
//        egalDiv.textContent = "a === b? " + String(suntEgale);
// =============================================================

// TODO: a === b
const suntegale: boolean = a === b;
egalDiv.textContent = "a === b"  +  suntegale ;

// TODO: a !== b
const suntdiferite: boolean = a !== b;
diferitDiv.textContent = "a !== b?"  +   suntdiferite;

// TODO: a > b
const maimare : boolean = a > b;
maiMareDiv.textContent = "a > b?" +  maimare;

// TODO: a < b
const maimic : boolean = a < b;
maiMicDiv.textContent = "a < b?"  + maimic; 

// TODO: a >= b
const maimaresauegal : boolean = a >= b;
maiMareSauEgalDiv.textContent = "a >= b?" + maimaresauegal;

// TODO: a <= b
const maimicsauegal : boolean = a <= b;
maiMicSauEgalDiv.textContent = "a <= b?" +  maimicsauegal;