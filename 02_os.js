const os = require("node:os");
console.log("Hay",os.cpus().length,"procesadores en");
console.log(os.cpus()[0]);
console.log("Memoria disponible", os.freemem()/1024/1024, "Mb");
console.log("Memoria Total", os.totalmem()/1024/1024, "Mb");
console.log("Nombre del equipo",os.hostname());
console.log("Información del usuario:", os.userInfo());
console.log("Versión SO", os.release());
