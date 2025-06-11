const fs = require("node:fs");
let texto = "En un lugar de la Mancha de cuyo nombre";
let append = " no quiero acordarme\n";
fs.writeFileSync("prueba.txt", texto, "utf-8");

fs.appendFileSync("prueba.txt", append, "utf-8");
append = "\t\tCervantes\n";
fs.appendFileSync("prueba.txt", append, "utf-8");

let prueba = fs.readFileSync("prueba.txt", "utf-8");
console.log(prueba);
