const http = require("node:http");

// Obtener los datos del .env
process.loadEnvFile();
// Lo muestra todo
console.log(process.env);
// Muestra solo el password
console.log(process.env.PASSWORD);

const PUERTO = process.env.PORT|| process.argv[2] || 8888;

let title = "";
let h1 = "";
let enlace = "<a href='/'>Volver a HOME</a>";

const server = http.createServer((req, res) => {
    console.log(res.statusCode);
    
    // console.log("Has hecho una petición desde Node");
    if (req.url == "/") {
        // console.log("Conectados a la raiz del server");
        res.writeHead(200,{"content-type": "text/html"});  
        title = "Home";  
        h1 = "<h1>Estamos en / desde Node</h1>";                         
        return
    } else if (req.url == "/contacto") {
        // console.log("Conectados a /contacto");
        res.writeHead(200,{"content-type": "text/html"});
         title = "Contacto";            
        h1 = "<h1>Estamos en /contacto</h1>";        
        return
    } else {
        // console.log("Ruta desconocida");        
        res.writeHead(200,{"content-type": "text/html"});
        title = "Error 404";       
        h1 = "<h1>Error 404</h1>";             
        return
    }

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        h1 {
        color: green;

        }
    </style>
</head>
<body>
    ${h1}
    ${enlace}
</body>
</html>`;

    res.write(html);
    res.end();
});

server.listen(PUERTO, () => {
    console.log(`Servidor levantado en http://localhost:${PUERTO}`);
});