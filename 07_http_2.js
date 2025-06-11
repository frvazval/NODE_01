const http = require("node:http");

// Obtener los datos del .env
process.loadEnvFile();
// Lo muestra todo
console.log(process.env);
// Muestra solo el password
console.log(process.env.PASSWORD);

const PUERTO = process.env.PORT|| process.argv[2] || 8888;

const style = 

const server = http.createServer((req, res) => {
    console.log(res.statusCode);
    // console.log("Has hecho una petición desde Node");
    if (req.url == "/") {
        // console.log("Conectados a la raiz del server");
        res.writeHead(200,{"content-type": "text/html"});
        res.write("<h1>Estamos en / desde Node</h1>");
        res.end();
    } else if (req.url == "/contacto") {
        console.log("Conectados a /contacto");
    } else {
        // console.log("Ruta desconocida");
        res.writeHead(404,{"content-type": "text/html"});
    }
})

server.listen(PUERTO, () => {
    console.log(`Servidor levantado en http://localhost:${PUERTO}`);
})