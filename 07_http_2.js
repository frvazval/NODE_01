const http = require("node:http");

// Obtener los datos del .env
process.loadEnvFile();
// Lo muestra todo
console.log(process.env);
// Muestra solo el password
console.log(process.env.PASSWORD);

const PUERTO = process.env.PORT|| process.argv[2] || 8888;

const style = `
<style>
h1 {
color: red;
}
</style>`

const server = http.createServer((req, res) => {
    
    // console.log("Has hecho una petición desde Node");
    if (req.url == "/") {
        // console.log("Conectados a la raiz del server");
        res.writeHead(200,{"content-type": "text/html"});
        console.log(res.statusCode);
        res.write(style);
        res.write("<h1>Estamos en / desde Node</h1>");
        res.end();
        console.log(res.statusCode);
        return
    } else if (req.url == "/contacto") {
        // console.log("Conectados a /contacto");
        res.writeHead(200,{"content-type": "text/html"});        
        res.write(style);
        res.write("<h1>Estamos en /contacto</h1>");
        res.end();
        
        return
    } else {
        // console.log("Ruta desconocida");        
        res.writeHead(200,{"content-type": "text/html"});
        res.write(style);
        res.write("<h1>Error 404</h1>");
        res.end();        
        return
    }
})

server.listen(PUERTO, () => {
    console.log(`Servidor levantado en http://localhost:${PUERTO}`);
})