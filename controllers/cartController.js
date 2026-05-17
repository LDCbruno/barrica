const cartService = require('../services/cartService');
const db = require('../db/database');

function verCarrito(req, res) {
  const cart = cartService.getCart(req);
  const productos = db.prepare('SELECT * FROM products').all();
  const total = cartService.getTotal(cart);
  res.render('pages/carrito', { cart, productos, total });
}

function agregar(req, res) {
  const id = Number(req.params.id);
  if (!isNaN(id)) cartService.addProduct(req, id);
  res.redirect('/carrito');
}

function quitar(req, res) {
  const id = Number(req.params.id);
  if (!isNaN(id)) cartService.removeProduct(req, id);
  res.redirect('/carrito');
}

function vaciar(req, res) {
  cartService.clearCart(req);
  res.redirect('/carrito');
}

module.exports = { verCarrito, agregar, quitar, vaciar };