# 02 - Bucle in TypeScript (Starter)

Al doilea pas in TypeScript. Aici inveti sa repeti instructiuni cu
`for`, `while` si `for...of`, plus cum sa intrerupi sau sa sari o
iteratie cu `break` si `continue`.

---

## Cum rulezi proiectul

```bash
cd 02-bucle/starter
npm install
npm run dev
```

Vite porneste un server pe `http://localhost:5173`. Deschide adresa, vei
vedea meniul cu cele 20 de exercitii. Pentru fiecare exercitiu:

1. Deschizi pagina exercitiului din meniu.
2. Editezi `script.ts` din folderul exercitiului.
3. Salvezi fisierul si reincarci pagina (sau Vite o reincarca automat).
4. Verifici daca rezultatul apare corect in cutia verde.

---

## Teoria pe care trebuie sa o stii

### 1. Ce este o bucla

O bucla repeta o bucata de cod de mai multe ori. In loc sa scrii:

```ts
console.log(1);
console.log(2);
console.log(3);
```

Scrii:

```ts
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

### 2. `for` clasic (cu contor)

Forma generala:

```ts
for (initializare; conditie; pas) {
  // se executa cat timp "conditie" este true
}
```

Exemplu - numere de la 1 la 5:

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i);   // 1, 2, 3, 4, 5
}
```

- `let i = 1` se executa **o singura data**, la inceput.
- `i <= 5` se verifica **inainte de fiecare iteratie**.
- `i++` se executa **dupa fiecare iteratie** (creste i cu 1).

### 3. `for` cu pas negativ (numarare invers)

```ts
for (let i = 10; i >= 1; i--) {
  console.log(i);   // 10, 9, 8, ..., 1
}
```

`i--` scade i cu 1 la fiecare iteratie.

### 4. Acumulator

Cand vrei sa aduni / inmultesti / construiesti ceva intr-o bucla,
declari o variabila INAINTE de bucla si o actualizezi in interior.

```ts
let suma: number = 0;
for (let i = 1; i <= 10; i++) {
  suma = suma + i;       // sau:  suma += i;
}
console.log(suma);       // 55
```

**Regula:** `suma = 0` pentru adunare, `produs = 1` pentru inmultire,
`text = ""` pentru concatenare.

### 5. `while` (cat timp)

`while` repeta cat timp o conditie este `true`. Nu are contor automat -
trebuie sa actualizezi singur variabila, altfel intri in bucla
infinita.

```ts
let i: number = 1;
while (i <= 5) {
  console.log(i);
  i++;                  // FOARTE IMPORTANT, altfel se blocheaza
}
```

**Cand alegi `while` in loc de `for`:** cand NU stii dinainte de cate
ori vei repeta (ex: pana cand numarul devine 0).

### 6. `for...of` (parcurge fiecare element)

Pentru un string, parcurge caracter cu caracter:

```ts
const text: string = "abc";
for (const litera of text) {
  console.log(litera);   // "a", apoi "b", apoi "c"
}
```

In bucle peste un string nu mai ai nevoie de indice. Daca ai nevoie de
indice, ramai la `for` clasic cu `text[i]` si `text.length`.

### 7. `break` (iesi din bucla)

Cand gasesti ce cautai si nu mai vrei sa continui:

```ts
for (let i = 1; i <= 100; i++) {
  if (i % 13 === 0) {
    console.log("Primul: " + i);
    break;            // iese din for, sare la codul de dupa bucla
  }
}
```

### 8. `continue` (sari peste iteratia curenta)

Cand vrei sa ignori unele valori, dar sa continui bucla:

```ts
let suma: number = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;         // sare peste numerele pare
  }
  suma += i;          // aduna doar impare
}
```

### 9. Construirea unui string in bucla

Foarte util pentru afisare in pagina. Folosesti `\n` pentru linie noua
(va trebui sa setezi si CSS `white-space: pre-line;` daca vrei sa fie
linii separate vizual, dar nu e nevoie - cutia verde foloseste deja
font monospace).

```ts
let output: string = "";
for (let i = 1; i <= 5; i++) {
  output += i + " ";
}
// output === "1 2 3 4 5 "
```

Sau cu virgule:

```ts
let output: string = "";
for (let i = 1; i <= 5; i++) {
  output += i;
  if (i < 5) {
    output += ", ";
  }
}
// output === "1, 2, 3, 4, 5"
```

### 10. Bucla infinita - capcana

```ts
let i: number = 0;
while (i < 10) {
  console.log(i);
  // AM UITAT i++ -> bucla nu se opreste niciodata!
}
```

Daca ti se blocheaza browser-ul / vezi tab-ul ca incarca la infinit -
ai bucla infinita. Inchide tab-ul, verifica fisierul, adauga
incrementul.

---

## Hinturi pentru fiecare exercitiu

### 01 - Numara 1-10

- `for (let i = 1; i <= 10; i++)`.
- Construiesti `output += i + " "` intr-un `let output: string = ""`.

### 02 - Numara invers 10-1

- Pornesti de la `i = 10`, conditia `i >= 1`, pas `i--`.

### 03 - Suma 1-100

- Declari `let suma: number = 0;` INAINTE de bucla.
- `suma += i;` in interior.
- Rezultat asteptat: 5050.

### 04 - Numere pare 1-20

- Doua variante:
  - `for (let i = 2; i <= 20; i += 2)`.
  - `for (let i = 1; i <= 20; i++)` cu `if (i % 2 === 0)`.

### 05 - Tabla inmultirii cu 5

- `for (let i = 1; i <= 10; i++)`.
- Construiesti `output += i + " x 5 = " + (i * 5) + "\n";`.

### 06 - While contor

- `let i: number = 1; while (i <= limita) { ... i++; }`.
- NU uita `i++` altfel intri in bucla infinita.

### 07 - Suma cifrelor cu while

- Pana cand `numar > 0`:
  - `cifra = numar % 10` (ultima cifra).
  - `suma += cifra`.
  - `numar = Math.floor(numar / 10)` (taie ultima cifra).

### 08 - Putere de 2 sub 1000

- `let putere: number = 1; while (putere * 2 < 1000) { putere *= 2; }`.
- Rezultat: 512.

### 09 - Numara vocalele

- `for (const ch of text.toLowerCase())`.
- `if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")`.

### 10 - Inverseaza text

- `let invers: string = "";`
- `for (const ch of text) { invers = ch + invers; }`.

### 11 - Break: primul divizibil cu 7

- `for (let i = 1; i <= 100; i++)`.
- `if (i % 7 === 0) { ... break; }`.

### 12 - Continue: suma fara multiplii de 3

- `for (let i = 1; i <= 50; i++)`.
- `if (i % 3 === 0) { continue; }`.
- `suma += i;`.

### 13 - Factorial

- `5! = 1 * 2 * 3 * 4 * 5 = 120`.
- `let produs: number = 1;` (NU 0 - ar anula tot).
- `for (let i = 1; i <= numar; i++) { produs *= i; }`.

### 14 - Numar prim

- Un numar < 2 nu este prim.
- Pentru `i` de la 2 la `numar - 1`: daca `numar % i === 0` -> NU e prim, `break`.
- Daca ai ajuns pana la final fara sa gasesti divizor -> e prim.
- Foloseste un boolean `let estePrim: boolean = true;` pe care il pui pe `false` cand gasesti divizor.

### 15 - Numara cifre

- Pentru 12345 ar trebui sa obtii 5.
- `while (numar > 0) { cifre++; numar = Math.floor(numar / 10); }`.
- Atentie: pentru 0 raspunsul corect e 1 (1 cifra) - trateaza separat.

### 16 - Cea mai mare cifra

- `let max: number = 0;`
- Pana cand `numar > 0`: `cifra = numar % 10`, daca `cifra > max` -> `max = cifra`.

### 17 - Repeta caracter

- `let output: string = "";`
- `for (let i = 0; i < de_cate_ori; i++) { output += caracter; }`.

### 18 - Suma pare 1-100

- Doua variante (la fel ca exercitiul 04).
- Rezultat asteptat: 2550.

### 19 - Numara aparitii

- `for (const ch of text)`.
- `if (ch === caracterCautat) { contor++; }`.

### 20 - FizzBuzz 1-30

- `for (let i = 1; i <= 30; i++)`.
- Ordinea: `i % 15 === 0` ("FizzBuzz") PRIMUL, apoi `% 3` ("Fizz"),
  apoi `% 5` ("Buzz"), apoi numarul.
- Construiesti un string cu `\n` intre linii sau cu separator " ".

---

## Probleme frecvente

- **Bucla nu se mai opreste (browser ingheata)** => ai uitat `i++` la
  `while`, sau ai conditie care nu devine niciodata `false`.
- **"Cannot find name X" intr-o bucla** => variabila e declarata in
  `{}` (block scope). Foloseste `let` in afara buclei daca ai nevoie
  de ea si dupa.
- **`for (let i = 1; i < 10)` afiseaza pana la 9, nu pana la 10** =>
  `<` exclude limita; foloseste `<=` daca vrei sa includa.
- **Suma da `NaN`** => ai uitat sa initializezi `suma` cu 0 (sau
  `produs` cu 1).
- **`for...of` da `index` ciudat pe string** => `for...of` da deja
  caracterul direct, nu indicele. Daca vrei indicele, foloseste
  `for (let i = 0; i < text.length; i++)`.

---

## Ce urmeaza

Dupa ce termini cele 20 de exercitii de aici, urmatoarele topice sunt:

1. **03-functii** - declarare, parametri, return, arrow
2. **04-liste** - array si metode (`map`, `filter`, `find`)
3. **05-obiecte** - proprietati, metode, interface, type
4. **06-dom** - selectoare, evenimente, manipulare DOM
5. **07-async** - Promise, async/await, fetch

Apoi esti pregatit pentru Playwright.
