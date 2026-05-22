const productsService = require('../services/productsService');

function home(req, res) {
  try {
    const sugeridos = productsService.getDestacados(5);
    const masPedidos = productsService.getMasPedidos(10);
    res.render('pages/home', { sugeridos, masPedidos });
  } catch (err) {
    res.status(500).render('pages/500');
  }
}

function detalle(req, res) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).render('pages/404');
    const producto = productsService.getById(id);
    if (!producto) return res.status(404).render('pages/404');
    const relacionados = productsService.getRelacionados(id, producto.categoria);
    res.render('pages/producto', { producto, relacionados });
  } catch (err) {
    res.status(500).render('pages/500');
  }
}

function categoria(req, res) {
  try {
    const { category } = req.params;
    const { sort } = req.query;
    const productos = productsService.getByCategoria(category);
    const ordenados = sort === 'asc'
      ? productos.sort((a, b) => a.precio - b.precio)
      : sort === 'desc'
      ? productos.sort((a, b) => b.precio - a.precio)
      : productos;
    res.render('pages/categoria', { productos: ordenados, categoria: category, sort });
  } catch (err) {
    res.status(500).render('pages/500');
  }
}

function buscar(req, res) {
  try {
    const { query } = req.query;
    const productos = query ? productsService.buscar(query) : [];
    res.render('pages/buscar', { productos, query });
  } catch (err) {
    res.status(500).render('pages/500');
  }
}

function productos(req, res) {
  try {
    const { sort } = req.query;
    const lista = productsService.getAll(sort);
    res.render('pages/productos', { productos: lista, sort });
  } catch (err) {
    res.status(500).render('pages/500');
  }
}

module.exports = { home, detalle, categoria, buscar, productos };