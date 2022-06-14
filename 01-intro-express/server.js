// #1 Llamar a la biblioteca de express (importarla)
const express = require('express');

// #2 Crear una instancia de express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// #3 Crear o definir las rutas de mi servidor.
// Las Rutas siempre deben crearse después de crear la
// instancia de express y antes del app.listen
app.get('/', function (request, response) {
  response.send('Hola Mundo');
})

// #4 Levantar el servidor en un puerto, por defecto el 3000
app.listen(3000, () => {
    console.log('Server ON');
})