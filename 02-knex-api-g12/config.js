// Dependiendo de la variable de entorno, va a usar la
// configuración adecuada de Base de Datos

// Tomar la configuración del entorno de Node y si no existe
// asigno Development

const env = process.env.NODE_ENV || 'development';

const knexfile = require('./knexfile');
const knex = require('knex');

// Mandar a llamar la configuración correcta
module.exports = knex(knexfile[env]);