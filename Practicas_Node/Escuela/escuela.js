// Escuela - Gestión de Alumnos y Asignaturas
// Le indico que tiene que utilizar el módulo 'fs' de Node.js para manejar archivos
const fs =require("node:fs");
let existeJson = true; // Variable para comprobar si existe el archivo JSON
let mensaje = ""; // Para mostrar información por pantalla
let alumno = {}; // Objeto para almacenar los datos del alumno

// Lectura del archivo JSON
// Compruebo si existe el archivo JSON
if (!fs.existsSync("escuela.json")) {
    // Si no existe, creo un mensaje indicandolo
    existeJson = false;
    mensaje = "Aun no hay alumnos matriculados en la escuela";
    
} else  {
    // Si existe, leo el archivo JSON
    let lectura = fs.readFileSync("escuela.json", "utf-8");
    let jsonLeido = JSON.parse(lectura);
    // console.log(jsonLeido);
}

// Comprobar si se han pasado argumentos al ejecutar el script
if (process.argv.length == 2) {
    if (existeJson) {
        // Mostrar todos los alumnos matriculados
        mensaje = mostrarAlumnos(jsonLeido);
    }       
} else if (process.argv.length == 3) {
    // process.argv[2] -> asignatura
    // mostraremos los alumnos matriculados en esa asignatura
    if (existeJson) {
        // Mostrar todos los alumnos matriculados
        let asignatura = process.argv[2];
        mensaje = mostrarAlumnosPorAsignatura(jsonLeido, asignatura);
    }         
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

console.log(mensaje);

// Funciones

// Función para mostrar los alumnos matriculados
function mostrarAlumnos(jsonLeido) {
    let mensaje = "";
    for (let i = 1; i < jsonLeido.length - 1; i++) {
        mensaje += `${i}: Nombre: ${jsonLeido[i - 1].nombre}, Apellido: ${jsonLeido[i - 1].apellido}, Edad: ${jsonLeido[i - 1].edad}, Asignatura: ${jsonLeido[i - 1].asignatura}\n`;
    }
    return mensaje;
}

// Función para mostrar los alumnos matriculados en una asignatura
function mostrarAlumnosPorAsignatura(jsonLeido, asignatura) {
    let mensaje = "";
    for (let i = 1; i < jsonLeido.length - 1; i++) {
        if (jsonLeido[i - 1].asignatura === asignatura) {
            mensaje += `${i}: Nombre: ${jsonLeido[i - 1].nombre}, Apellido: ${jsonLeido[i - 1].apellido}, Edad: ${jsonLeido[i - 1].edad}, Asignatura: ${jsonLeido[i - 1].asignatura}\n`;
        }
    }
    return mensaje;
}