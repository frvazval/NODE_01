// Escuela - Gestión de Alumnos y Asignaturas
// Le indico que tiene que utilizar el módulo 'fs' de Node.js para manejar archivos
const fs =require("node:fs");
let jsonLeido; // Variable para almacenar el contenido del archivo JSON leído
let existeJson = true; // Variable para comprobar si existe el archivo JSON
let mensaje; // Para mostrar información por pantalla
let alumno = {}; // Objeto para almacenar los datos del alumno
let contador; // Contador para los alumnos

// Lectura del archivo JSON
// Compruebo si existe el archivo JSON
if (!fs.existsSync("escuela.json")) {
    // Si no existe, creo un mensaje indicandolo
    existeJson = false;
    mensaje = "Aun no hay alumnos matriculados en la escuela";
    
} else  {
    // Si existe, leo el archivo JSON
    let lectura = fs.readFileSync("escuela.json", "utf-8");
    jsonLeido = JSON.parse(lectura);
    existeJson = true; // Ahora sabemos que el archivo JSON existe
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
        let asignatura = process.argv[2];
        mensaje = mostrarAlumnosPorAsignatura(jsonLeido, asignatura);
    }         
} else if (process.argv.length == 4) {
    // process.argv[2] -> nombre
    // process.argv[3] -> apellido
    // mostraremos las asignaturas de las que esta matriculado
    if (existeJson) {
        let nombre = process.argv[2];
        let apellido = process.argv[3];
        mensaje = mostrarAsignaturasAlumno(jsonLeido, nombre, apellido);        
    }
} else if (process.argv.length == 5) {
    // process.argv[2] -> nombre
    // process.argv[3] -> apellido
    // borraremos el alumno con ese nombre y apellido
    if (existeJson) {
        let nombre = process.argv[2];
        let apellido = process.argv[3];
        mensaje = borrarAlumno(jsonLeido, nombre, apellido);
    }
} else if (process.argv.length == 6) {
    // process.argv[2] -> nombre
    // process.argv[3] -> apellido
    // process.argv[4] -> edad
    // process.argv[5] -> asignatura
    // matricular al alumno con estos datos
    let nombre = process.argv[2];
    let apellido = process.argv[3];
    let edad = process.argv[4];
    let asignatura = process.argv[5];
    // Comprobar si el archivo JSON existe y si ya está matriculado
    if (existeJson) {        
        mensaje = matricularAlumno(jsonLeido, nombre, apellido, edad, asignatura);
    } else {
        // Si no existe el archivo JSON, lo creo y añado el alumno        
        alumno = { nombre: nombre, apellido: apellido, edad: edad, asignatura: asignatura };
        jsonLeido = [alumno]; // Inicializo el array con el nuevo alumno
        fs.writeFileSync("escuela.json", JSON.stringify(jsonLeido, null, 2));
        mensaje = `Alumno ${nombre} ${apellido} matriculado correctamente en la asignatura ${asignatura}.\n`;
        existeJson = true; // Ahora el archivo JSON existe
    }
};

// Mostrar el mensaje final
console.log(mensaje);


// Funciones

// Función para mostrar los alumnos matriculados
function mostrarAlumnos(jsonLeido ) {
    mensaje = "Alumnos matriculados en la escuela:\n";
    mensaje += "*".repeat(mensaje.length -1).concat("\n");
    contador = 0; // Inicializo el contador

    for (let i = 0; i < jsonLeido.length; i++) {
        mensaje += `${i + 1}: ${jsonLeido[i].nombre} ${jsonLeido[i].apellido}, Edad: ${jsonLeido[i].edad}, Asignatura: ${jsonLeido[i].asignatura}\n`;
        contador++;
    }

    mensaje += "-".repeat(50).concat("\n");
    mensaje += `Total: ${contador} alumnos matriculados\n`;
    return mensaje;
}

// Función para mostrar los alumnos matriculados en una asignatura
function mostrarAlumnosPorAsignatura(jsonLeido, asignatura) {
    mensaje = `Alumnos matriculados en ${asignatura}\n`;
    mensaje += "*".repeat(mensaje.length -1).concat("\n");
    contador = 0; // Inicializo el contador
    for (let i = 0; i < jsonLeido.length; i++) {
        if (jsonLeido[i].asignatura === asignatura) {
            mensaje += `${i + 1}: ${jsonLeido[i].nombre} ${jsonLeido[i].apellido} Edad: ${jsonLeido[i].edad}\n`;
            contador++;
        }
    }
    mensaje += "-".repeat(50).concat("\n");
    mensaje += `Total: ${contador} alumnos matriculados\n`;
    return mensaje;
}

// Función para mostrar las asignaturas de un alumno
function mostrarAsignaturasAlumno(jsonLeido, nombre, apellido) {
    mensaje = "";
    for (let i = 0; i < jsonLeido.length - 1; i++) {
        if (jsonLeido[i + 1].nombre === nombre && jsonLeido[i].apellido === apellido) {
            mensaje += `Asignaturas de ${nombre} ${apellido}: ${jsonLeido[i].asignatura}\n`;
        }
    }
    return mensaje;
}

// Función para borrar un alumno
function borrarAlumno(jsonLeido, nombre, apellido) {
    let mensaje = "";
    let encontrado = false;
    for (let i = 1; i < jsonLeido.length - 1; i++) {
        if (jsonLeido[i - 1].nombre === nombre && jsonLeido[i - 1].apellido === apellido) {
            jsonLeido.splice(i - 1, 1); // Elimina el alumno del array
            encontrado = true;
            mensaje = `Alumno ${nombre} ${apellido} borrado correctamente.\n`;
            break;
        }
    }
    if (!encontrado) {
        mensaje = `Alumno ${nombre} ${apellido} no encontrado.\n`;
    }
    // Guardar los cambios en el archivo JSON
    fs.writeFileSync("escuela.json", JSON.stringify(jsonLeido, null, 2));
    return mensaje;
}

// Función para matricular a un alumno
function matricularAlumno(jsonLeido, nombre, apellido, edad, asignatura) {
    let mensaje = "";
    // Comprobar si el alumno ya está matriculado
    for (let i = 1; i < jsonLeido.length - 1; i++) {
        if (jsonLeido[i - 1].nombre === nombre && jsonLeido[i - 1].apellido === apellido) {
            mensaje = `El alumno ${nombre} ${apellido} ya está matriculado.\n`;
            return mensaje;
        }
    }
    // Si no está matriculado, lo añado al array
    alumno = { nombre: nombre, apellido: apellido, edad: edad, asignatura: asignatura };
    jsonLeido.push(alumno);
    // Guardar los cambios en el archivo JSON
    fs.writeFileSync("escuela.json", JSON.stringify(jsonLeido, null, 2));
    mensaje = `Alumno ${nombre} ${apellido} matriculado correctamente en la asignatura ${asignatura}.\n`;
    return mensaje;
}
