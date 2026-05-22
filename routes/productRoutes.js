const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/producto/:id', productController.detalle);
router.get('/categorias/:category', productController.categoria);
router.get('/buscar', productController.buscar);
router.get('/productos', productController.productos);
router.get('/', productController.home);

module.exports = router;