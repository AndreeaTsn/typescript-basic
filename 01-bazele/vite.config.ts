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
        ex01: resolve(__dirname, "src/exercitii/01-salut/index.html"),
        ex02: resolve(__dirname, "src/exercitii/02-adunare/index.html"),
        ex03: resolve(__dirname, "src/exercitii/03-operatii-aritmetice/index.html"),
        ex04: resolve(__dirname, "src/exercitii/04-let-vs-const/index.html"),
        ex05: resolve(__dirname, "src/exercitii/05-comparare/index.html"),
        ex06: resolve(__dirname, "src/exercitii/06-operatori-logici/index.html"),
        ex07: resolve(__dirname, "src/exercitii/07-if-simplu/index.html"),
        ex08: resolve(__dirname, "src/exercitii/08-calificativ/index.html"),
        ex09: resolve(__dirname, "src/exercitii/09-categorii-varsta/index.html"),
        ex10: resolve(__dirname, "src/exercitii/10-login/index.html"),
        ex11: resolve(__dirname, "src/exercitii/11-nume-complet/index.html"),
        ex12: resolve(__dirname, "src/exercitii/12-par-sau-impar/index.html"),
        ex13: resolve(__dirname, "src/exercitii/13-pret-cu-tva/index.html"),
        ex14: resolve(__dirname, "src/exercitii/14-an-nastere/index.html"),
        ex15: resolve(__dirname, "src/exercitii/15-maxim-din-trei/index.html"),
        ex16: resolve(__dirname, "src/exercitii/16-anotimp/index.html"),
        ex17: resolve(__dirname, "src/exercitii/17-manipulare-string/index.html"),
        ex18: resolve(__dirname, "src/exercitii/18-template-literals/index.html"),
        ex19: resolve(__dirname, "src/exercitii/19-operator-ternar/index.html"),
        ex20: resolve(__dirname, "src/exercitii/20-pret-cu-reducere/index.html"),
      },
    },
  },
});
