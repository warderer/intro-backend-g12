const express = require('express');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
app.use('/api/v1', homeRoutes);

/* Levantamos el servidor */
app.listen(3000, () => {
    console.log('Server ON: 3000');
})