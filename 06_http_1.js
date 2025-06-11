const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log("Has hecho una petición");
})

server.listen(8888, () => {
    console.log("Servidor levantado en http://localhost:8888");
})