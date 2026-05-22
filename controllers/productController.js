const productsService = require('../services/productsService');

function home(req, res) {
  const sugeridos = productsService.getDestacados(5);
  const masPedidos = productsService.getMasPedidos(10);
  res.render('pages/home', { sugeridos, masPedidos });
}

function detalle(req, res) {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).render('pages/404');
  const producto = productsService.getById(id);
  if (!producto) return res.status(404).render('pages/404');
  const relacionados = productsService.getRelacionados(id, producto.categoria);
  res.render('pages/producto', { producto, relacionados });
}

function categoria(req, res) {
  const { category } = req.params;
  const { sort } = req.query;
  let productos = productsService.getByCategoria(category);
  if (sort === 'asc') productos = productos.sort((a, b) => a.precio - b.precio);
  if (sort === 'desc') productos = productos.sort((a, b) => b.precio - a.precio);
  res.render('pages/categoria', { productos, categoria: category, sort });
}

function buscar(req, res) {
  const { query } = req.query;
  const productos = query ? productsService.buscar(query) : [];
  res.render('pages/buscar', { productos, query });
}

function productos(req, res) {
  const { sort } = req.query;
  const lista = productsService.getAll(sort);
  res.render('pages/productos', { productos: lista, sort });
}

module.exports = { home, detalle, categoria, buscar, productos };