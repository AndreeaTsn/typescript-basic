// =============================================================
// EXERCITIUL 33 - SUMA CIFRELOR (NUMAR DE 2 CIFRE)
// =============================================================
// Cerinta: declara numar (intreg intre 10 si 99). Afla cifra
// zecilor si cifra unitatilor folosind operatii aritmetice (NU
// conversie la string), apoi afiseaza in cutia verde un text de
// forma:
//   "47: 4 + 7 = 11"
// =============================================================

const rezultat = document.getElementById("rezultat");
const numar : number=47;
let zeci:number= Math.floor(numar/10);//23.5=>23  123/10=>12.3=> 12
let unitati : number = numar % 10;
let suma : number =zeci + unitati;

rezultat.textContent = `${numar} : ${zeci} + ${unitati} = ${suma} `;





 