// =============================================================
// EXERCITIUL 18 - TEMPLATE LITERALS
// =============================================================
// Doua moduri de a construi acelasi text:
//
// 1) Cu + (concatenare):
//    "Salut, " + nume + "! Ai " + varsta + " ani."
//
// 2) Cu template literal (backticks `` si ${...}):
//    `Salut, ${nume}! Ai ${varsta} ani.`
//
// A doua varianta este mai usor de citit si nu mai necesita String(...)
// pentru numere - conversia se face automat.
// =============================================================

const cuPlusDiv = document.getElementById("cuPlus");
const cuTemplateDiv = document.getElementById("cuTemplate");

// =============================================================
// PAS 1: Doua variabile la alegere.
// =============================================================

// TODO: const nume: string = "Maria";
// TODO: const varsta: number = 28;


// =============================================================
// PAS 2: Construieste mesajul cu + (forma clasica).
// =============================================================

// TODO: const mesajClasic = "Salut, " + nume + "! Ai " + String(varsta) + " ani.";


// =============================================================
// PAS 3: Construieste acelasi mesaj cu template literal.
//        ATENTIE: ` (backtick) nu este apostrof. E langa tasta "1".
// =============================================================

// TODO: const mesajTemplate = `Salut, ${nume}! Ai ${varsta} ani.`;


// =============================================================
// PAS 4: Afiseaza ambele.
// =============================================================

// TODO: cuPlusDiv.textContent = "Cu + : " + mesajClasic;
// TODO: cuTemplateDiv.textContent = "Cu ` ` : " + mesajTemplate;
