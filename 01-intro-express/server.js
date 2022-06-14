// #1 Llamar a la biblioteca de express (importarla)
const { application } = require('express');
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

// Obtener parámetros de rutas dinámicas
// Params 'URL/api/pets/1'
// Los : en la ruta indican que es un valor dinámico (params)
app.get('/api/v1/pets/:petId', function (request, response) {
    console.log(request.params);
    const idPet = request.params.petId;
    response.send(`El ID que buscas es: ${idPet}`);
})

// Los códigos de estado son una CONVENCIÓN,
// por lo que no es obligación seguir las reglas existentes.
// Cada desarrollador puede implementar la lógica que guste.
// Pero no es recomendable
app.get('/api/cakes/:cakeId', (req, res) => {
    const idCake = parseInt(req.params.cakeId);
    if ( idCake > 100 ) {
        res.status(401).send({ mensaje: 'El ID del pastel esta feo'});
    } else {
        const mensaje = { id: `El ID que buscas es: ${idCake}`};
        res.send(mensaje);
    }
})

// Query
// Query 'URL/api/v1/pets?color=blanco&comida=croquetas'
// Son similares a Params, pero se suelen usar para incluir más de un dato
// Las querys son abiertas, no definimos cuantas variables nos tienen que
// enviar ni como se llaman. La responsabilidad del Backend es SOLO
// tomar en cuenta los adecuados

app.get('/api/v1/pets', (req,res) => {
    console.log(req.query);
    const { color, comida } = req.query;
    // Imaginemos que va a la base de datos y trae una lista de mascotas
    const petsArray = [
        {
            id: 1,
            name: 'Firulais',
            color: 'blanco',
            comida: 'croquetas'
        },
        {
            id: 2,
            name: 'Zeus',
            color: 'gris',
            comida: 'pescado'
        },
        {
            id: 3,
            name: 'Ronney',
            color: 'cafe',
            comida: 'croquetas'
        }
    ]

    const respuesta = petsArray.filter(pet => pet.comida === comida || pet.color === color);

    res.send(respuesta);
})




// #4 Levantar el servidor en un puerto, por defecto el 3000
app.listen(3000, () => {
    console.log('Server ON');
})