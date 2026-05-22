const db = require('../db/database');

function getCart(req) {
  if (!req.session.cart) req.session.cart = [];
  return req.session.cart;
}

function addProduct(req, productId) {
  const producto = db.prepare('SELECT * FROM products WHERE id = ?').get(productId);
  if (!producto) return;
  const cart = getCart(req);
  const item = cart.find(i => i.productId === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  req.session.cart = cart;
}

function removeProduct(req, productId) {
  const cart = getCart(req);
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    req.session.cart = cart.filter(i => i.productId !== productId);
  }
}

function clearCart(req) {
  req.session.cart = [];
}

function getTotal(cart) {
  return cart.reduce((total, item) => {
    const producto = db.prepare('SELECT precio FROM products WHERE id = ?').get(item.productId);
    return total + (producto ? producto.precio * item.quantity : 0);
  }, 0);
}

function getCartCount(req) {
  if (!req.session || !req.session.cart) return 0;
  return req.session.cart.reduce((total, item) => total + item.quantity, 0);
}

module.exports = { getCart, addProduct, removeProduct, clearCart, getTotal, getCartCount };