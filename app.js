const express = require('express');
const session = require('express-session');
const path = require('path');
const cartService = require('./services/cartService');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'barrica-secret',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  res.locals.cartCount = cartService.getCartCount(req);
  next();
});

app.get('/login', (req, res) => res.render('pages/login'));
app.get('/registro', (req, res) => res.render('pages/registro'));
app.get('/checkout', (req, res) => res.render('pages/checkout'));

app.use('/', productRoutes);
app.use('/carrito', cartRoutes);

app.use((req, res) => {
  res.status(404).render('pages/404');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('pages/500');
});

app.listen(3000, () => {
  console.log('Barrica corriendo en http://localhost:3000');
});