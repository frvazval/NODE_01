const fs = require("node:fs");
const ingredientes_pizza = require("./ingredientes_pizza.js");

let masas = [];
let ingredientes = [];
let tiket = "Pizzeria Nodidi\n";

for (let i = 0; i < ingredientes_pizza.length; i++) {
    for (clave in ingredientes_pizza[i]) {
        if (clave == "masa") {
            masas.push(ingredientes_pizza[i]);
        } else if (clave == "ingrediente") {
            ingredientes.push(ingredientes_pizza[i]);
        }

    }
}

// console.log(ingredientes);
let menu = "";
// Paso 1 : Mostrar el menu de opciones al usuario

if (process.argv.length == 2) {
    menu = "Pizzeria Nodini\n";
    menu += "*".repeat(menu.length -1);

    // Mostrar la información de las masas
    menu += "\n\nNuestras masas (elegir una):"
    for (let i = 0; i < masas.length; i++) {
        menu += `\n${i + 1}. ${masas[i].masa} a ${masas[i].precio.toFixed(2)}€`
    }
    
    menu += "\nNuestro ingredientes (elegir 4 de la lista):"
    // Mostrar la información de los ingredientes
    for (let i = 0; i < ingredientes.length; i++) {
        menu += `\n${i + 1}. ${ingredientes[i].ingrediente} a ${ingredientes[i].precio.toFixed(2)}€`
    }
    console.log("\n", menu, "\n");

} else if (process.argv.length == 7) {
    // Nuestro modelo de texto de salida sera
    // Has elegido pizza de masa....., con ..., ..., ... y ...
    // Importe total : X€

    const tipoMasa = masas[process.argv[2] - 1];

    if (tipoMasa == undefined) {
        console.log("Error al elegir la masa");
       
    } else {
        let total = 0;
        let mensaje = "Has elegido pizza de ";
        mensaje += `${masas[process.argv[2] - 1].masa} con `;
        total += tipoMasa.precio;

        for (let i = 3; i < process.argv.length - 1; i++) {
            mensaje += `${ingredientes[process.argv[i] - 1].ingrediente}, `;
            total += ingredientes[process.argv[i] - 1].precio;
        }

       mensaje += `y ${ingredientes[process.argv[6] - 1].ingrediente}\n`;
       total += ingredientes[process.argv[6] - 1].precio;
       console.log(mensaje, `Importe total : ${total.toFixed(2)}€`, "\n\n");

       
        tiket += mensaje;
        tiket += `Importe total : ${total.toFixed(2)}€ \n\n`;


        fs.writeFileSync("tiquet_pizzeria.txt", tiket, "utf-8");
    }  

    

}





