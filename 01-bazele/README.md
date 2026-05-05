# 01 - Bazele TypeScript (Starter)

Primul pas in TypeScript ca pregatire pentru testare cu Playwright. Aici inveti
sa declari variabile, sa folosesti operatori si sa iei decizii cu `if/else`.

---

## Cum rulezi proiectul

```bash
cd 01-bazele/starter
npm install
npm run dev
```

Vite porneste un server pe `http://localhost:5173`. Deschide adresa, vei vedea
meniul cu cele 20 de exercitii. Pentru fiecare exercitiu:

1. Deschizi pagina exercitiului din meniu.
2. Editezi `script.ts` din folderul exercitiului.
3. Salvezi fisierul si reincarci pagina (sau Vite o reincarca automat).
4. Verifici daca rezultatul apare corect in cutia verde.

---

## Teoria pe care trebuie sa o stii

### 1. Variabile: `let` si `const`

O variabila este un loc cu nume in care pastrezi o valoare.

```ts
const nume: string = "Ana";   // valoarea NU se mai schimba
let scor: number = 0;          // valoarea POATE fi schimbata
scor = 10;                     // OK - reasignare la let
// nume = "Maria";             // EROARE - const nu se reasigneaza
```

**Regula simpla:** foloseste `const` mereu, doar daca trebuie sa schimbi
valoarea mai tarziu folosesti `let`.

### 2. Tipurile primitive

| Tip | Pentru ce | Exemplu |
|-----|-----------|---------|
| `string` | text | `"Salut"`, `"Ana"`, `""` |
| `number` | numere (intregi sau cu zecimale) | `42`, `3.14`, `-5` |
| `boolean` | adevarat / fals | `true`, `false` |

Cum declari cu tip explicit:

```ts
const oras: string = "Cluj";
const varsta: number = 25;
const esteAdult: boolean = true;
```

### 3. Operatori aritmetici (lucreaza cu `number`)

| Operator | Ce face | Exemplu |
|----------|---------|---------|
| `+` | adunare | `5 + 3 = 8` |
| `-` | scadere | `5 - 3 = 2` |
| `*` | inmultire | `5 * 3 = 15` |
| `/` | impartire | `10 / 4 = 2.5` |
| `%` | rest la impartire | `10 % 3 = 1` |

`%` e foarte util pentru a verifica paritatea (`numar % 2 === 0` => par).

### 4. Operatori de comparare (returneaza `boolean`)

| Operator | Ce verifica | Exemplu |
|----------|-------------|---------|
| `===` | egal | `5 === 5` => `true` |
| `!==` | diferit | `5 !== 3` => `true` |
| `>` | mai mare | `5 > 3` => `true` |
| `<` | mai mic | `5 < 3` => `false` |
| `>=` | mai mare sau egal | `5 >= 5` => `true` |
| `<=` | mai mic sau egal | `5 <= 3` => `false` |

**Important:** foloseste mereu `===` (trei semne), nu `==`. `==` are reguli
ciudate de conversie si poate da rezultate suprinzatoare.

### 5. Operatori logici (lucreaza cu `boolean`)

| Operator | Numele | Cand este `true` |
|----------|--------|------------------|
| `&&` | SI (AND) | doar daca AMBELE sunt true |
| `\|\|` | SAU (OR) | daca cel putin UNA este true |
| `!` | NU (NOT) | inverseaza valoarea |

```ts
const a: boolean = true;
const b: boolean = false;

a && b   // false
a || b   // true
!a       // false
```

### 6. Instructiunea `if / else if / else`

Programul ia o decizie pe baza unei conditii.

```ts
if (conditie) {
  // se executa daca conditia este true
} else if (alta_conditie) {
  // se executa daca prima e false dar a doua e true
} else {
  // se executa daca toate de mai sus sunt false
}
```

**Atentie la ordine:** verifica mereu cazul cel mai specific PRIMUL.
Ex: pentru calificativ, incepi cu `nota >= 9`, nu cu `nota >= 5`.

### 7. Operatorul ternar (forma scurta)

Cand ai doar doua optiuni (true / false) si vrei o singura linie:

```ts
const semn = numar >= 0 ? "pozitiv" : "negativ";
```

Echivalent cu:

```ts
let semn: string;
if (numar >= 0) {
  semn = "pozitiv";
} else {
  semn = "negativ";
}
```

### 8. Template literals (text cu variabile)

In loc de:

```ts
const mesaj = "Salut, " + nume + "! Ai " + String(varsta) + " ani.";
```

Poti scrie mai clar cu **backticks** ` `` ` si `${...}`:

```ts
const mesaj = `Salut, ${nume}! Ai ${varsta} ani.`;
```

`` ` `` (backtick) NU e apostrof. E langa tasta `1`, sub `Esc`. Conversia
numar -> text se face automat in `${}`.

### 9. Conversii intre tipuri

| Conversie | Cum |
|-----------|-----|
| numar -> text | `String(42)` => `"42"` |
| text -> numar | `Number("42")` => `42` |
| numar -> text cu 2 zecimale | `(3.14159).toFixed(2)` => `"3.14"` |

### 10. Lucruri folositoare pe `string`

```ts
const text: string = "Salut";

text.length          // 5 (numarul de caractere) - PROPRIETATE, fara paranteze
text.toUpperCase()   // "SALUT"  - METODA, cu paranteze
text.toLowerCase()   // "salut"
```

### 11. Cum afisezi ceva in pagina

Toate exercitiile au un cod gata-pus in fata fisierului care gaseste cutia
verde:

```ts
const rezultat = document.getElementById("rezultat");
```

Tu trebuie doar sa pui textul in `textContent`:

```ts
rezultat.textContent = "Mesajul tau aici";
```

---

## Hinturi pentru fiecare exercitiu

### 01 - Salut

- Declara `nume` cu `const` si tip `string`.
- Pune in `rezultat.textContent` textul `"Salut, " + nume + "!"`.

### 02 - Adunare

- Doua `const` de tip `number` (a si b).
- `const suma = a + b;`
- Cand combini text cu un numar, foloseste `String(suma)` sa fii sigur ca nu
  obtii lipire de stringuri (`5 + "5"` ar da `"55"` daca vreun operand e text).

### 03 - Operatii aritmetice

- 5 cutii diferite (`sumaDiv`, `diferentaDiv`, etc.). Pune in fiecare alta
  operatie.
- Tine minte: `/` poate da rezultat cu zecimale (`10 / 3 = 3.33...`).
- `%` da restul: `10 % 3 = 1` (fiindca `10 = 3*3 + 1`).

### 04 - let vs const

- Declara cu `let` (pentru ca o sa schimbam valoarea).
- Cand reasignezi, NU mai scrii `let` din nou: `scor = 100;` (nu `let scor = 100;`).
- Decomenteaza randurile cu `const PI` ca sa vezi eroarea.

### 05 - Comparare

- Pentru fiecare cutie ai cate o comparare.
- Rezultatul unei comparari este `boolean`. Foloseste `String(...)` cand il
  pui in text.

### 06 - Operatori logici

- Schimba pe rand `esteAdult` si `areCarnet` la `true` / `false`.
- `&&` cere AMBELE adevarate; `||` cere CEL PUTIN UNA; `!` inverseaza.

### 07 - if simplu

- Foloseste `let` pentru `mesaj` (ii dam valoare in if/else).
- Ordinea verificarilor: `> 0`, `< 0`, altfel zero.
- Testeaza schimband `numar` la 5, -3, 0 si reincarcand pagina.

### 08 - Calificativ

- **Cea mai grea capcana**: incepe cu cea mai MARE conditie (`nota >= 9`).
  Daca incepi cu `nota >= 5`, ar prinde si o nota de 10.
- Testeaza cu 10, 8, 6, 4.

### 09 - Categorii de varsta

- Pentru intervale folosesti `&&`:
  `varsta >= 13 && varsta <= 17`.
- Ramurile: `< 13`, `13-17`, `18-64`, altfel.
- Testeaza cu 5, 14, 30, 70.

### 10 - Login

- Doua `const` cu valorile corecte.
- Doua `const` cu valorile introduse (le simulam in cod).
- Verificarea: `utilizatorIntrodus === utilizatorCorect && parolaIntrodusa === parolaCorecta`.
- Schimba valorile introduse ca sa testezi atat reusita cat si esecul.

### 11 - Nume complet

- `prenume + " " + nume` - atentie la spatiul intre ghilimele.

### 12 - Par sau impar

- `numar % 2 === 0` => par.
- Testeaza cu 7, 8, 0, -3.

### 13 - Pret cu TVA

- `valoareTVA = pretBaza * procentTVA / 100`
- `pretFinal = pretBaza + valoareTVA`
- `.toFixed(2)` returneaza un string cu 2 zecimale.

### 14 - An nastere

- `anCurent - varsta`. Operatie simpla de scadere.

### 15 - Maxim din 3

- Conditia pentru `a` cel mai mare: `a >= b && a >= c`.
- Apoi pentru `b`, apoi `else` -> c.
- Testeaza cu valori unde maximul e in pozitii diferite.

### 16 - Anotimp

- Iarna are luni neconsecutive (12, 1, 2) - foloseste `||`:
  `luna === 12 || luna === 1 || luna === 2`.
- Pentru lunile consecutive (3-5, 6-8) folosesti `&&` pentru interval.

### 17 - Manipulare string

- `.length` - **fara paranteze** (e proprietate).
- `.toUpperCase()` si `.toLowerCase()` - **cu paranteze** (sunt metode).
- Testeaza cu un text cu spatii ca sa vezi ca si spatiile se numara la `.length`.

### 18 - Template literals

- Backtick-ul ` `` ` se afla langa tasta `1` (sub `Esc`).
- `${variabila}` interpoleaza variabila in text.
- Nu mai trebuie `String(...)` pentru numere - se face automat.

### 19 - Operator ternar

- `conditie ? valoareA : valoareB`.
- Useste-l doar cand alegi intre 2 optiuni. Pentru 3+ ramuri, ramai la `if/else if/else`.

### 20 - Pret cu reducere

- Cazul cu 2 conditii (`areCard && pretInitial > 200`) trebuie verificat
  PRIMUL, altfel ramura `else if (areCard)` ar prinde si cazul de 20%.
- `if (areCard)` e suficient - nu scrie `if (areCard === true)`.
- Combina `let pretFinal`, calcul cu `*`, `/`, `-` si afisare cu template
  literal.

---

## Probleme frecvente

- **"Cannot find name X"** => ai gresit numele variabilei. TypeScript e strict.
- **"Cannot assign to X because it is a constant"** => ai folosit `const` dar
  ai vrut sa schimbi valoarea. Schimba in `let`.
- **Rezultat aratat ca `[object HTMLDivElement]`** => ai pus div-ul direct in
  text in loc sa pui textContent.
- **`5 + "5" === "55"`** => atentie cand ai operanzi de tipuri diferite.
  Foloseste `String(...)` sau `Number(...)` ca sa fii sigur de tip.
- **Backtick vs apostrof** => `` ` `` permite `${...}`. `'` si `"` nu permit.

---

## Ce urmeaza

Dupa ce termini cele 20 de exercitii de aici, urmatoarele topice sunt:

1. **02-bucle** - `for`, `while`, `for...of`
2. **03-functii** - declarare, parametri, return, arrow
3. **04-liste** - array si metode (`map`, `filter`, `find`)
4. **05-obiecte** - proprietati, metode, interface, type
5. **06-dom** - selectoare, evenimente, manipulare DOM
6. **07-async** - Promise, async/await, fetch

Apoi esti pregatit pentru Playwright.
