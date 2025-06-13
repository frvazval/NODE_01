// Escuela - Gestión de Alumnos y Asignaturas
// Le indico que tiene que utilizar el módulo 'fs' de Node.js para manejar archivos
const fs =require("node:fs");
let lectura = ""; // Para mostrar información por pantalla

// Lectura del archivo JSON
// Compruebo si existe el archivo JSON
if (!fs.existsSync("escuela.json")) {
    // Si no existe, creo un mensaje indicandolo
    lectura = "Aun no hay alumnos matriculados en la escuela";
    console.log(lectura);
} else  {
    lectura = fs.readFileSync("escuela.json", "utf-8");
    let jsonLeido = JSON.parse(lectura);
    // console.log(jsonLeido);
}

// Comprobar si se han pasado argumentos al ejecutar el script


if (process.argv.length == 2) {
    // Mostrar JjsonLeido
} else if (process.argv.length == 3) {
    // process.argv[2] -> asignatura
    // mostraremos los alumnos matriculados en esa asignatura
} else if (process.argv.length == 4) {
    // process.argv[2] -> nombre
    // process.argv[3] -> apellido
    // mostraremos las asignaturas de las que esta matriculado
} else if (process.argv.length == 5) {
    // process.argv[2] -> nombre
    // process.argv[3] -> apellido
    // borraremos el alumno con ese nombre y apellido
} else if (process.argv.length == 6) {
    // process.argv[2] -> nombre
    // process.argv[3] -> apellido
    // process.argv[4] -> edad
    // process.argv[5] -> asignatura
    // matricular al alumno con estos datos
};