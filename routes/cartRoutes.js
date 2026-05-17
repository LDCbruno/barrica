const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.verCarrito);
router.post('/agregar/:id', cartController.agregar);
router.post('/quitar/:id', cartController.quitar);
router.post('/vaciar', cartController.vaciar);

module.exports = router;