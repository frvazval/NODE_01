const fs =require("node:fs");

// Lectura
let lectura = fs.readFileSync("test.json", "utf-8");
let jsonLeido = JSON.parse(lectura);
// console.log(jsonLeido);

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
}


const jsonPrueba = [
    {"nombre" : "Peter", "apellido" : "Parker", "edad" : 25, "asignatura" : "NodeJS"}
];

// Escritura
fs.writeFileSync("test.json", JSON.stringify(jsonPrueba), "utf-8");



let objeto = {"nombre" : "Bruce", "apellido" : "Lee", "edad" : 30, "asignatura" : "HTML"};
jsonPrueba.push(objeto);
objeto = {"nombre" : "Bruce", "apellido" : "Lee", "edad" : 30, "asignatura" : "CSS"};
jsonPrueba.push(objeto);
objeto = {"nombre" : "Pedro", "apellido" : "Picapiedra", "edad" : 45, "asignatura" : "NodeJS"};
jsonPrueba.push(objeto);
// console.log(jsonPrueba);

// Escritura
// fs.writeFileSync("test.json", JSON.stringify(jsonPrueba), "utf-8");

let alumnoBorrable = {"nombre" : "Bruce", "apellido" : "Lee", "edad" : -1};

for (let i = jsonPrueba.length - 1; i >= 0; i--) {
    
    if (jsonPrueba[i].nombre == alumnoBorrable.nombre && jsonPrueba[i].apellido == alumnoBorrable.apellido) {
        jsonPrueba.splice(i, 1);
    }
}

console.log(jsonPrueba);
