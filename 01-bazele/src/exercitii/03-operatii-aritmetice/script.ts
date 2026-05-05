// =============================================================
// EXERCITIUL 03 - OPERATII ARITMETICE
// =============================================================

const sumaDiv = document.getElementById("suma");
const diferentaDiv = document.getElementById("diferenta");
const produsDiv = document.getElementById("produs");
const catDiv = document.getElementById("cat");
const restDiv = document.getElementById("rest");

// =============================================================
// PAS 1: Declara doua numere "a" si "b". Foloseste 10 si 3 ca sa
//        vezi clar diferentele intre operatii.
// =============================================================

// TODO: const a: number = ...;
// TODO: const b: number = ...;
const a: number = 10;
const b: number = 3;

// =============================================================
// PAS 2: Calculeaza fiecare operatie si afiseaz-o in cutia ei.
//
//        +  =>  adunare
//        -  =>  scadere
//        *  =>  inmultire
//        /  =>  impartire
//        %  =>  rest la impartire (10 % 3 = 1, fiindca 10 = 3*3 + 1)
//
//        Exemplu pentru suma:
//        sumaDiv.textContent = "a + b = " + String(a + b);
// =============================================================

const suma :number = a+b;


sumaDiv.textContent = "a + b =" + suma;

// TODO: sumaDiv.textContent = ...;
// sumaDiv.textContent = a+b;

// // TODO: diferentaDiv.textContent = ...;
const diferenta: number = a-b;
diferentaDiv.textContent = "a-b =" + diferenta;
// diferentaDiv.textContent= a - b =
// // TODO: produsDiv.textContent = ...;
const inmultire : number = a*b;
produsDiv.textContent = "a*b =" + inmultire;
// produsDiv.textContent = a * b ;
// // TODO: catDiv.textContent = ...;
const impartire: number = a/b;
catDiv.textContent ="a/b =" + impartire;
// catDiv.textContent = a/b;
// // TODO: restDiv.textContent = ...;
const restlaimpartire: number = a%b;
restDiv.textContent = "a%b =" + restlaimpartire;
// restDiv.textContent = a%b ;
