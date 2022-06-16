/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// ** EXPORTS.UP **
/* Aquí colocaremos toda la lógica de creación de tablas, actualización de campos, relaciones, etc. */
exports.up = function(knex) {
  return knex.schema.hasTable("homes").then(function (exists) {
    if (!exists) {
        /* Si la tabla no existe, voy a crear una nueva tabla*/
        return knex.schema.createTable("homes", function (table){
            // sintaxis: table.tipoDeDato("nombreAtributo").chainableMethods
            table.increments("house_id").primary();// en knex usamos increments en vez de serial como tipo de dato
            table.string("title").notNullable(); //notNullable es que no puede quedar nulo (not null)
            table.text("description");
            table.integer("guest");
            table.text("address");
            table.decimal("rental_price", 8, 2);
            table.boolean("active").notNullable().defaultTo(true); //defaultTo: Especifico un valor por defecto
            table.timestamp('created_at').defaultTo(knex.fn.now()); //knex.fn.now() me devuelve la fecha y hora actual al momento se crear el registro en la base de datos.
        });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// ** EXPORTS.DOWN **
/* Aquí colocaremos toda la lógica que nos va a permitir DESHACER
 los cambios de arriba (EXPORTS.UP)*/
exports.down = function(knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (exists) {
            return knex.schema.dropTable("homes")
        }
    });
};

/* *** GUIA DE USO RÁPIDO DE KNEX *** */

// ** CREAR UNA MIGRACIÓN **
// knex migrate:make nombreDeMiMigracion
// Esto crea una carpeta llamada migrations, y coloca dentro
// del historial de migraciones archivos .js

// ** EJECUTAR UNA MIGRACIÓN SOBRE EXPORTS.UP **
// Al ejecutar una migración sobre EXPORTS.UP estamos creando
// o modificando la tabla en la BASE DE DATOS.
// Ejecutar la última migración(up): knex migrate:latest
// Ejecutar una migración(up) en especifico: knex migrate:up nombre_archivo_migracion.js

// ** EJECUTAR UNA MIGRACIÓN SOBRE EXPORTS.DOWN **
// Al ejecutar una migración sobre EXPORTS.DOWN estamos deshaciendo
// los cambios que hicimos en EXPORTS.UP
// Deshacer la última migración ejecutada: knex migrate:rollback latest
// Deshacer todos los cambios: knex migrate:rollback
// Deshacer una migración en concreto: knex migrate:down nombre_archivo_migracion.js