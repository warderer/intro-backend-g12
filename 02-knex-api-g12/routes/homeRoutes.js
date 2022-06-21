const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Si la ruta es homes, ejecuta homeController y la funcion createHome

router.post('/homes',(homeController.createHome));
router.get('/homes', (homeController.findAllHomes));
router.get('/homes/:idHome', (homeController.findOneHome));
router.patch('/homes/:idHome', (homeController.updateOneHome));
router.delete('/homes/:idHome', (homeController.softDeleteOneHome));
router.delete('/homes/:idHome/destroy/', (homeController.destroyOneHome));
router.get('/homes/:idHome/detail', (homeController.findOneWithUser));

module.exports = router;