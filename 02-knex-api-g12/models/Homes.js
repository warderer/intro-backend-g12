/*
El MODELO trae los datos de la base de datos.
No se encarga de validar datos, ni resolver promesas,
eso es trabajo del CONTROLADOR en MVC.
*/

// Paso #1: Necesito traer la configuración de knex
const knex = require('../config');

// Paso #2: Creo una función que traiga los datos que yo requiero de la base de datos.
const create = (bodyHome) => {
    //Crear un registro en la tabla HOMES
    //bodyHome es un objeto que contiene los valores a insertar

    return knex
        .insert(bodyHome) // Datos a insertar
        .into('homes') // ¿De qué tabla?
        .returning(['house_id','title','description','guest','address','rental_price','fk_user','active','created_at'])
}

const findAll = () => {
    //Obtener todos los registros de la tabla HOMES
    return knex
        .select(['house_id','title','description','guest','address','rental_price','fk_user','active','created_at'])
        .from('homes')
        .where({ active: true }) // Traemos solo los campos que no hayamos hecho softdelete
}


// Paso #3 Exportar mis funciones para que sean accesibles desde el controlador

module.exports = {
    create,
    findAll,

}