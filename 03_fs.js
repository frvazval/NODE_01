const fs = require("node:fs");
let texto = "En un lugar de la Mancha de cuyo nombre";
let append = " no quiero acordarme";
fs.writeFileSync("prueba.txt", texto, "utf-8");

fs.appendFileSync("prueba.txt", append, "utf-8");