const fs = require("node:fs");
// let texto = "En un lugar de la Mancha de cuyo nombre";
// let append = " no quiero acordarme\n";
// fs.writeFileSync("prueba.txt", texto, "utf-8");

// fs.appendFileSync("prueba.txt", append, "utf-8");
// append = "\t\tCervantes\n";
// fs.appendFileSync("prueba.txt", append, "utf-8");

// let prueba = fs.readFileSync("prueba.txt", "utf-8");
// console.log(prueba);

// Para borrar el contenido de prueba.txt
// fs.truncateSync("prueba.txt");


// Crear y borrar directorios

// if (fs.existsSync("temp")) {
//     fs.rmdirSync("temp");
//     console.log("Directorio borrado");
// }
// fs.mkdirSync("temp");

// Crear varios directorios a la vez

fs.mkdirSync("temp/temp2", {recursive: true});
fs.mkdirSync("temp/temp1", {recursive: true});


