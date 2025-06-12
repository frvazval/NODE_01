const pizzas = [
    {"tipo": "Cuatro Quesos", "precio": 18.00},
    {"tipo": "Margherita", "precio": 16.00},
    {"tipo": "Napolitana", "precio": 17.25},
    {"tipo": "Diavola", "precio": 16.50}
]

// Para ejecutar el programa:
// node 09_pizzeria_1.js

let menu = "Pizzeria Nodini\n";
menu += "*".repeat(menu.length -1);



for (let i = 0; i < pizzas.length; i++ ) {
    menu += `\n\t${i + 1}. Pizza ${pizzas[i].tipo} a ${pizzas[i].precio.toFixed(2)}€`
}

menu += "\n¿Cuál es su elección?\n\n";

console.log("\n\n", menu);