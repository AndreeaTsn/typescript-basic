import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        ex01: resolve(__dirname, "src/exercitii/01-numara-1-10/index.html"),
        ex02: resolve(__dirname, "src/exercitii/02-numara-invers/index.html"),
        ex03: resolve(__dirname, "src/exercitii/03-suma-1-100/index.html"),
        ex04: resolve(__dirname, "src/exercitii/04-numere-pare/index.html"),
        ex05: resolve(__dirname, "src/exercitii/05-tabla-inmultirii/index.html"),
        ex06: resolve(__dirname, "src/exercitii/06-while-contor/index.html"),
        ex07: resolve(__dirname, "src/exercitii/07-suma-cifrelor/index.html"),
        ex08: resolve(__dirname, "src/exercitii/08-putere-de-2/index.html"),
        ex09: resolve(__dirname, "src/exercitii/09-numara-vocale/index.html"),
        ex10: resolve(__dirname, "src/exercitii/10-inverseaza-text/index.html"),
        ex11: resolve(__dirname, "src/exercitii/11-break-divizibil-7/index.html"),
        ex12: resolve(__dirname, "src/exercitii/12-continue-fara-3/index.html"),
        ex13: resolve(__dirname, "src/exercitii/13-factorial/index.html"),
        ex14: resolve(__dirname, "src/exercitii/14-numar-prim/index.html"),
        ex15: resolve(__dirname, "src/exercitii/15-numara-cifre/index.html"),
        ex16: resolve(__dirname, "src/exercitii/16-cea-mai-mare-cifra/index.html"),
        ex17: resolve(__dirname, "src/exercitii/17-repeta-caracter/index.html"),
        ex18: resolve(__dirname, "src/exercitii/18-suma-pare-100/index.html"),
        ex19: resolve(__dirname, "src/exercitii/19-numara-aparitii/index.html"),
        ex20: resolve(__dirname, "src/exercitii/20-fizzbuzz-30/index.html"),
      },
    },
  },
});
