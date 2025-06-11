const http = require("node:http");
const PUERTO = process.argv[2] || 8888;

const server = http.createServer((req, res) => {
    console.log("Has hecho una petición desde Node");
})

server.listen(PUERTO, () => {
    console.log(`Servidor levantado en http://localhost:${PUERTO}`);
})