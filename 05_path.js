const path = require("node:path");

// separador de carpetas del SO
console.log(path.sep);

// Crear ruta con varias carpetas y un fichero
const rutaInventada = path.join("project", "public", "css", "styles.css");
console.log(rutaInventada);

// Obtener el nombre y extensión del fichero
console.log(path.basename(rutaInventada));

// Obtener la ruta de las carpetas
console.log(path.dirname(rutaInventada));