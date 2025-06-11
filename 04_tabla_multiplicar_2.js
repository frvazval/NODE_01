/*
TABLA DE MULTIPLICAR
El usuario indicara que numero desea para la tabla , desde que numero empieza y en que numero acaba:
node 04_tabla_multiplicar.js 5 2 8
Con eso generaremos esta salida por el terminal:
Tabla de multiplicar del X <- es el numero que ha elegido el usuario
========================================
1 x X = ?
2 x X = ?
.....
10 x X = ?

*/
const fs = require("node:fs");
let numero = process.argv[2];
let inicio = process.argv[3];
let fin = process.argv[4];

let salida = `Tabla de multiplicar del ${numero}\n`;
salida += "=".repeat(salida.length - 1);


for (let i=inicio; i <= fin; i++) {
    salida += `\t\n${i} x ${numero} = ${i * numero}`;        
};

console.log(salida);

try {
    fs.writeFileSync("tabla2.txt", salida, "utf-8");
} catch (error) {
    console.log(error);
}