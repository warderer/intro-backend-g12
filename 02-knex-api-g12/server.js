const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */

/* Levantamos el servidor */
app.listen(3000, () => {
    console.log('Server ON: 3000');
})