const db = require('./db/database');

const productos = [
  // WHISKY
  { id: 1, nombre: 'Whisky Jack Daniels Tennessee 750ml', precio: 18500, categoria: 'whisky', descripcion: 'El clásico Tennessee Whiskey, suave y con notas ahumadas.', stock: 15, destacado: 1 },
  { id: 2, nombre: 'Whisky Jameson Irish 750ml', precio: 16700, categoria: 'whisky', descripcion: 'Irish Whiskey triple destilado, suave y accesible.', stock: 0, destacado: 1 },
  { id: 3, nombre: 'Whisky Glenfiddich 12 años 750ml', precio: 28900, categoria: 'whisky', descripcion: 'Single malt escocés con notas de pera y roble tostado.', stock: 5, destacado: 1 },
  { id: 4, nombre: 'Whisky Johnnie Walker Black Label 750ml', precio: 24500, categoria: 'whisky', descripcion: 'Blend escocés envejecido 12 años, profundo y ahumado.', stock: 10, destacado: 1 },
  { id: 5, nombre: 'Whisky Chivas Regal 12 años 750ml', precio: 22800, categoria: 'whisky', descripcion: 'Blend escocés suave con notas de miel y frutas maduras.', stock: 8, destacado: 0 },
  { id: 6, nombre: 'Whisky Macallan 12 años 750ml', precio: 45900, categoria: 'whisky', descripcion: 'Single malt premium envejecido en barricas de jerez.', stock: 4, destacado: 1 },
  { id: 7, nombre: "Whisky Ballantine's Finest 750ml", precio: 14200, categoria: 'whisky', descripcion: 'Blend escocés suave ideal para cócteles o solo con hielo.', stock: 20, destacado: 0 },
  { id: 8, nombre: 'Whisky Jim Beam Bourbon 750ml', precio: 13800, categoria: 'whisky', descripcion: 'Bourbon americano clásico, dulce y con notas de vainilla.', stock: 12, destacado: 0 },
  { id: 9, nombre: 'Whisky Wild Turkey 101 750ml', precio: 19400, categoria: 'whisky', descripcion: 'Bourbon robusto de alta graduación con carácter intenso.', stock: 6, destacado: 0 },
  { id: 10, nombre: 'Whisky Monkey Shoulder 750ml', precio: 26700, categoria: 'whisky', descripcion: 'Triple malt escocés suave y versátil, ideal para mezclas.', stock: 7, destacado: 1 },

  // GIN
  { id: 11, nombre: 'Gin Bombay Sapphire 750ml', precio: 15900, categoria: 'gin', descripcion: 'Gin premium con 10 botánicos seleccionados de todo el mundo.', stock: 10, destacado: 1 },
  { id: 12, nombre: 'Gin Hendricks 750ml', precio: 22400, categoria: 'gin', descripcion: 'Gin escocés inusual con pepino y pétalos de rosa.', stock: 7, destacado: 1 },
  { id: 13, nombre: 'Gin Tanqueray London Dry 750ml', precio: 17600, categoria: 'gin', descripcion: 'Gin clásico londinense con notas de enebro y cítricos.', stock: 15, destacado: 0 },
  { id: 14, nombre: 'Gin Beefeater London Dry 750ml', precio: 13900, categoria: 'gin', descripcion: 'Gin londinense tradicional con nueve botánicos cuidadosamente seleccionados.', stock: 18, destacado: 0 },
  { id: 15, nombre: 'Gin The Botanist Islay 750ml', precio: 31500, categoria: 'gin', descripcion: 'Gin artesanal de Islay elaborado con 22 botánicos locales.', stock: 5, destacado: 1 },
  { id: 16, nombre: 'Gin Monkey 47 500ml', precio: 38900, categoria: 'gin', descripcion: 'Gin alemán de la Selva Negra con 47 botánicos únicos.', stock: 4, destacado: 1 },
  { id: 17, nombre: "Gin Gordon's London Dry 750ml", precio: 11200, categoria: 'gin', descripcion: 'Gin clásico y asequible, perfecto para el gin tonic diario.', stock: 25, destacado: 0 },
  { id: 18, nombre: 'Gin Malfy Con Limone 700ml', precio: 24800, categoria: 'gin', descripcion: 'Gin italiano con limones de Amalfi, fresco y cítrico.', stock: 8, destacado: 0 },
  { id: 19, nombre: 'Gin Roku Japanese 700ml', precio: 27300, categoria: 'gin', descripcion: 'Gin japonés elaborado con seis botánicos japoneses de temporada.', stock: 6, destacado: 1 },
  { id: 20, nombre: 'Gin Aviation American 750ml', precio: 21600, categoria: 'gin', descripcion: 'Gin americano suave con notas florales y de lavanda.', stock: 9, destacado: 0 },

  // RON
  { id: 21, nombre: 'Ron Havana Club 7 años 750ml', precio: 12300, categoria: 'ron', descripcion: 'Ron cubano añejado 7 años, ideal para sipping y cócteles.', stock: 8, destacado: 1 },
  { id: 22, nombre: 'Ron Diplomático Reserva Exclusiva 750ml', precio: 28400, categoria: 'ron', descripcion: 'Ron venezolano premium de 12 años, complejo y elegante.', stock: 6, destacado: 1 },
  { id: 23, nombre: 'Ron Bacardi Superior 750ml', precio: 9800, categoria: 'ron', descripcion: 'Ron blanco cubano suave, base perfecta para mojitos y daiquiris.', stock: 20, destacado: 0 },
  { id: 24, nombre: 'Ron Captain Morgan Spiced 750ml', precio: 11400, categoria: 'ron', descripcion: 'Ron especiado con notas de vainilla y canela.', stock: 15, destacado: 0 },
  { id: 25, nombre: 'Ron Zacapa 23 años 750ml', precio: 42000, categoria: 'ron', descripcion: 'Ron guatemalteco envejecido en las alturas, sumamente premiado.', stock: 4, destacado: 1 },
  { id: 26, nombre: 'Ron Flor de Caña 12 años 750ml', precio: 18700, categoria: 'ron', descripcion: 'Ron nicaragüense orgánico y volcánico, suave y equilibrado.', stock: 9, destacado: 1 },
  { id: 27, nombre: 'Ron Appleton Estate 12 años 750ml', precio: 22100, categoria: 'ron', descripcion: 'Ron jamaicano complejo con notas de naranja y especias.', stock: 7, destacado: 0 },
  { id: 28, nombre: 'Ron Mount Gay Eclipse 750ml', precio: 16500, categoria: 'ron', descripcion: 'Ron de Barbados, el más antiguo del mundo, suave y tropical.', stock: 10, destacado: 0 },
  { id: 29, nombre: 'Ron Abuelo 12 años 750ml', precio: 19200, categoria: 'ron', descripcion: 'Ron panameño añejo con notas de caramelo y madera.', stock: 8, destacado: 0 },
  { id: 30, nombre: 'Ron Santa Teresa 1796 750ml', precio: 31800, categoria: 'ron', descripcion: 'Ron venezolano solera de 4 años, rico y aterciopelado.', stock: 5, destacado: 1 },

  // VODKA
  { id: 31, nombre: 'Vodka Absolut Original 750ml', precio: 11800, categoria: 'vodka', descripcion: 'Vodka sueco puro, destilado en Åhus con trigo de invierno.', stock: 20, destacado: 0 },
  { id: 32, nombre: 'Vodka Grey Goose 750ml', precio: 24500, categoria: 'vodka', descripcion: 'Vodka francés premium elaborado con trigo de la Beauce.', stock: 12, destacado: 1 },
  { id: 33, nombre: 'Vodka Belvedere 750ml', precio: 27800, categoria: 'vodka', descripcion: 'Vodka polaco de centeno, cuatro veces destilado y filtrado.', stock: 8, destacado: 1 },
  { id: 34, nombre: 'Vodka Ketel One 750ml', precio: 19400, categoria: 'vodka', descripcion: 'Vodka holandés destilado en alambiques de cobre desde 1691.', stock: 10, destacado: 0 },
  { id: 35, nombre: 'Vodka Cîroc 750ml', precio: 29900, categoria: 'vodka', descripcion: 'Vodka francés elaborado con uvas de la región de Gaillac.', stock: 6, destacado: 1 },
  { id: 36, nombre: 'Vodka Stolichnaya Premium 750ml', precio: 13200, categoria: 'vodka', descripcion: 'Vodka ruso clásico elaborado con trigo y centeno seleccionados.', stock: 15, destacado: 0 },
  { id: 37, nombre: 'Vodka Smirnoff No.21 750ml', precio: 8900, categoria: 'vodka', descripcion: 'Vodka triple destilado, suave y versátil para cualquier ocasión.', stock: 25, destacado: 0 },
  { id: 38, nombre: "Vodka Tito's Handmade 750ml", precio: 21500, categoria: 'vodka', descripcion: 'Vodka artesanal texano elaborado con maíz sin gluten.', stock: 9, destacado: 0 },
  { id: 39, nombre: 'Vodka Russian Standard 750ml', precio: 10800, categoria: 'vodka', descripcion: 'Vodka ruso elaborado con trigo de las estepas y agua glaciar.', stock: 18, destacado: 0 },
  { id: 40, nombre: 'Vodka Finlandia 750ml', precio: 12400, categoria: 'vodka', descripcion: 'Vodka finlandés puro elaborado con cebada de seis hileras.', stock: 14, destacado: 0 },

  // FERNET
  { id: 41, nombre: 'Fernet Branca 750ml', precio: 9800, categoria: 'fernet', descripcion: 'El amargo italiano más famoso del mundo, con 27 hierbas.', stock: 25, destacado: 1 },
  { id: 42, nombre: 'Fernet 1882 750ml', precio: 8400, categoria: 'fernet', descripcion: 'Fernet argentino clásico con hierbas seleccionadas y gran equilibrio.', stock: 20, destacado: 1 },
  { id: 43, nombre: 'Fernet Vittone 750ml', precio: 7900, categoria: 'fernet', descripcion: 'Fernet argentino tradicional, suave y herbal con final persistente.', stock: 18, destacado: 0 },
  { id: 44, nombre: 'Fernet Stock 750ml', precio: 11200, categoria: 'fernet', descripcion: 'Fernet checo con hierbas europeas seleccionadas, intenso y aromático.', stock: 10, destacado: 0 },
  { id: 45, nombre: 'Fernet Branca Menta 750ml', precio: 10500, categoria: 'fernet', descripcion: 'Versión mentolada del clásico Fernet Branca, refrescante y herbal.', stock: 15, destacado: 1 },
];

const insert = db.prepare(`
  INSERT OR IGNORE INTO products (id, nombre, precio, categoria, descripcion, stock, destacado)
  VALUES (@id, @nombre, @precio, @categoria, @descripcion, @stock, @destacado)
`);

const insertMany = db.transaction((productos) => {
  for (const p of productos) {
    insert.run(p);
  }
});

insertMany(productos);
console.log('Migración completada — ' + productos.length + ' productos cargados en SQLite.');