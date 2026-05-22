const db = require('../db/database');

function getAll(sort) {
  let query = 'SELECT * FROM products';
  if (sort === 'asc') query += ' ORDER BY precio ASC';
  if (sort === 'desc') query += ' ORDER BY precio DESC';
  return db.prepare(query).all();
}

function getById(id) {
  return db.prepare('SELECT * FROM products WHERE id = ?').get(id);
}

function getDestacados(limit = 5) {
  return db.prepare('SELECT * FROM products WHERE destacado = 1 LIMIT ?').all(limit);
}

function getMasPedidos(limit = 10) {
  const todos = db.prepare('SELECT * FROM products').all();
  return todos.sort(() => Math.random() - 0.5).slice(0, limit);
}

function getByCategoria(categoria) {
  return db.prepare('SELECT * FROM products WHERE categoria = ?').all(categoria);
}

function getRelacionados(id, categoria, limit = 4) {
  const todos = db.prepare('SELECT * FROM products WHERE categoria = ? AND id != ?').all(categoria, id);
  return todos.sort(() => Math.random() - 0.5).slice(0, limit);
}

function buscar(query) {
  return db.prepare('SELECT * FROM products WHERE nombre LIKE ?').all(`%${query}%`);
}

module.exports = { getAll, getById, getDestacados, getMasPedidos, getByCategoria, getRelacionados, buscar };