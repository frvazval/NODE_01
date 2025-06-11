const http = require("node:http");

// Obtener los datos del .env
process.loadEnvFile();
// Lo muestra todo
console.log(process.env);
// Muestra solo el password
console.log(process.env.PASSWORD);
const PUERTO = process.env.PORT|| process.argv[2] || 8888;

const server = http.createServer((req, res) => {
    console.log("Has hecho una petición desde Node");
})

server.listen(PUERTO, () => {
    console.log(`Servidor levantado en http://localhost:${PUERTO}`);
})