const http = require("node:http");

// Obtener los datos del .env
process.loadEnvFile();
// Lo muestra todo
console.log(process.env);
// Muestra solo el password
console.log(process.env.PASSWORD);

const PUERTO = process.env.PORT|| process.argv[2] || 8888;

const server = http.createServer((req, res) => {
    console.log(res.statusCode);
    // console.log("Has hecho una petición desde Node");
    if (req.url == "/") {
        console.log("Conectados a la raiz del server");
    } else if (req.url == "/contacto") {
        console.log("Conectados a /contacto");
    } else {
        console.log("Ruta desconocida");
    }
})

server.listen(PUERTO, () => {
    console.log(`Servidor levantado en http://localhost:${PUERTO}`);
})