const db = require('./db/database');

const productos = [
  // WHISKY
  { id: 1, nombre: 'Whisky Jack Daniels Tennessee 750ml', precio: 18500, categoria: 'whisky', descripcion: 'Tennessee Whiskey elaborado con la técnica del filtrado por carbón de arce. Notas de vainilla, caramelo y roble tostado.', stock: 15, destacado: 1 },
  { id: 2, nombre: 'Whisky Jameson Irish 750ml', precio: 16700, categoria: 'whisky', descripcion: 'Irish Whiskey triple destilado, suave y equilibrado. Notas de frutos secos, vainilla y especias suaves.', stock: 0, destacado: 1 },
  { id: 3, nombre: 'Whisky Glenfiddich 12 años 750ml', precio: 28900, categoria: 'whisky', descripcion: 'Single malt escocés del Valle de Livet. Notas frescas de pera, roble cremoso y toque de manzana.', stock: 5, destacado: 1 },
  { id: 4, nombre: 'Whisky Johnnie Walker Black Label 750ml', precio: 24500, categoria: 'whisky', descripcion: 'Blend escocés envejecido mínimo 12 años. Profundo y ahumado con notas de fruta madura y chocolate.', stock: 10, destacado: 1 },
  { id: 5, nombre: 'Whisky Chivas Regal 12 años 750ml', precio: 22800, categoria: 'whisky', descripcion: 'Blend escocés suave y generoso. Notas de miel, vainilla, trébol y manzana fresca.', stock: 8, destacado: 0 },
  { id: 6, nombre: 'Whisky Macallan 12 años 750ml', precio: 45900, categoria: 'whisky', descripcion: 'Single malt premium de las Highlands escocesas. Envejecido en barricas de jerez con notas de frutos secos, naranja y especias.', stock: 4, destacado: 1 },
  { id: 7, nombre: "Whisky Ballantine's Finest 750ml", precio: 14200, categoria: 'whisky', descripcion: 'Blend escocés suave y versátil. Notas de vainilla, miel y frutas con un final limpio y ligero.', stock: 20, destacado: 0 },
  { id: 8, nombre: 'Whisky Jim Beam Bourbon 750ml', precio: 13800, categoria: 'whisky', descripcion: 'Bourbon americano clásico envejecido en barricas de roble blanco. Dulce y suave con notas de vainilla y caramelo.', stock: 12, destacado: 0 },
  { id: 9, nombre: 'Whisky Wild Turkey 101 750ml', precio: 19400, categoria: 'whisky', descripcion: 'Bourbon Kentucky de alta graduación (50.5%). Robusto y especiado con notas de caramelo, vainilla y roble.', stock: 6, destacado: 0 },
  { id: 10, nombre: 'Whisky Monkey Shoulder 750ml', precio: 26700, categoria: 'whisky', descripcion: 'Triple malt escocés elaborado con tres single malts de Speyside. Suave y cremoso con notas de vainilla, miel y especias.', stock: 7, destacado: 1 },

  // GIN
  { id: 11, nombre: 'Gin Bombay Sapphire 750ml', precio: 15900, categoria: 'gin', descripcion: 'Gin premium londinense elaborado con 10 botánicos de todo el mundo. Fresco y aromático con notas cítricas y florales.', stock: 10, destacado: 1 },
  { id: 12, nombre: 'Gin Hendricks 750ml', precio: 22400, categoria: 'gin', descripcion: 'Gin escocés de estilo inusual elaborado con pepino y pétalos de rosa búlgara. Floral, fresco y delicadamente perfumado.', stock: 7, destacado: 1 },
  { id: 13, nombre: 'Gin Tanqueray London Dry 750ml', precio: 17600, categoria: 'gin', descripcion: 'London Dry Gin clásico y equilibrado. Notas de enebro, cilantro, angélica y regaliz con un final limpio y seco.', stock: 15, destacado: 0 },
  { id: 14, nombre: 'Gin Beefeater London Dry 750ml', precio: 13900, categoria: 'gin', descripcion: 'London Dry Gin tradicional macerado durante 24 horas con 9 botánicos. Fresco y cítrico con enebro bien presente.', stock: 18, destacado: 0 },
  { id: 15, nombre: 'Gin The Botanist Islay 750ml', precio: 31500, categoria: 'gin', descripcion: 'Gin artesanal de la isla de Islay elaborado con 22 botánicos silvestres locales. Complejo, floral y herbáceo.', stock: 5, destacado: 1 },
  { id: 16, nombre: 'Gin Monkey 47 500ml', precio: 38900, categoria: 'gin', descripcion: 'Gin alemán de la Selva Negra elaborado con 47 botánicos únicos incluyendo arándanos silvestres. Complejo y especiado.', stock: 4, destacado: 1 },
  { id: 17, nombre: "Gin Gordon's London Dry 750ml", precio: 11200, categoria: 'gin', descripcion: 'El gin más vendido del mundo. London Dry clásico con notas de enebro, cilantro y angélica. Ideal para gin tonic.', stock: 25, destacado: 0 },
  { id: 18, nombre: 'Gin Malfy Con Limone 700ml', precio: 24800, categoria: 'gin', descripcion: 'Gin italiano elaborado con limones IGP de la Costa de Amalfi. Cítrico, fresco y aromático con base de enebro.', stock: 8, destacado: 0 },
  { id: 19, nombre: 'Gin Roku Japanese 700ml', precio: 27300, categoria: 'gin', descripcion: 'Gin japonés elaborado por Suntory con 6 botánicos japoneses únicos como flor de cerezo y té sencha. Delicado y elegante.', stock: 6, destacado: 1 },
  { id: 20, nombre: 'Gin Aviation American 750ml', precio: 21600, categoria: 'gin', descripcion: 'Gin americano de estilo New Western. Notas florales de lavanda, cardamomo y anís estrellado con enebro suave.', stock: 9, destacado: 0 },

  // RON
  { id: 21, nombre: 'Ron Havana Club 7 años 750ml', precio: 12300, categoria: 'ron', descripcion: 'Ron cubano añejado 7 años en barricas de roble americano. Suave y complejo con notas de tabaco, madera y frutos secos.', stock: 8, destacado: 1 },
  { id: 22, nombre: 'Ron Diplomático Reserva Exclusiva 750ml', precio: 28400, categoria: 'ron', descripcion: 'Ron venezolano premium de 12 años. Rico y complejo con notas de chocolate negro, naranja confitada y especias finas.', stock: 6, destacado: 1 },
  { id: 23, nombre: 'Ron Bacardi Superior 750ml', precio: 9800, categoria: 'ron', descripcion: 'Ron blanco cubano filtrado en carbón de madera. Suave y limpio, ideal como base para mojitos, daiquiris y cócteles.', stock: 20, destacado: 0 },
  { id: 24, nombre: 'Ron Captain Morgan Spiced 750ml', precio: 11400, categoria: 'ron', descripcion: 'Ron especiado del Caribe con una mezcla de especias naturales. Notas dulces de vainilla, canela y clavo de olor.', stock: 15, destacado: 0 },
  { id: 25, nombre: 'Ron Zacapa 23 años 750ml', precio: 42000, categoria: 'ron', descripcion: 'Ron guatemalteco elaborado a 2300 metros de altura y envejecido por el sistema solera. Suave y aterciopelado con notas de miel, vainilla y chocolate.', stock: 4, destacado: 1 },
  { id: 26, nombre: 'Ron Flor de Caña 12 años 750ml', precio: 18700, categoria: 'ron', descripcion: 'Ron nicaragüense orgánico y volcánico, libre de azúcar y aditivos. Equilibrado con notas de caramelo, vainilla y roble.', stock: 9, destacado: 1 },
  { id: 27, nombre: 'Ron Appleton Estate 12 años 750ml', precio: 22100, categoria: 'ron', descripcion: 'Ron jamaicano añejado en Jamaica. Complejo y afrutado con notas de naranja, especias caribeñas y madera dulce.', stock: 7, destacado: 0 },
  { id: 28, nombre: 'Ron Mount Gay Eclipse 750ml', precio: 16500, categoria: 'ron', descripcion: 'Ron de Barbados de la destilería más antigua del mundo (1703). Suave y tropical con notas de banana, almendra y vainilla.', stock: 10, destacado: 0 },
  { id: 29, nombre: 'Ron Abuelo 12 años 750ml', precio: 19200, categoria: 'ron', descripcion: 'Ron panameño añejado 12 años en barricas de bourbon americano. Elegante con notas de caramelo, frutos secos y madera.', stock: 8, destacado: 0 },
  { id: 30, nombre: 'Ron Santa Teresa 1796 750ml', precio: 31800, categoria: 'ron', descripcion: 'Ron venezolano solera elaborado con rones de hasta 35 años. Rico y complejo con notas de chocolate, café y especias.', stock: 5, destacado: 1 },

  // VODKA
  { id: 31, nombre: 'Vodka Absolut Original 750ml', precio: 11800, categoria: 'vodka', descripcion: 'Vodka sueco producido en Åhus con trigo de invierno y agua de manantial local. Puro, suave y con carácter de grano.', stock: 20, destacado: 0 },
  { id: 32, nombre: 'Vodka Grey Goose 750ml', precio: 24500, categoria: 'vodka', descripcion: 'Vodka francés premium elaborado con trigo de la Beauce y agua de Cognac filtrada. Suave y cremoso con final largo.', stock: 12, destacado: 1 },
  { id: 33, nombre: 'Vodka Belvedere 750ml', precio: 27800, categoria: 'vodka', descripcion: 'Vodka polaco elaborado con centeno Dankowskie. Cuatro veces destilado con notas de vainilla y crema con final cálido.', stock: 8, destacado: 1 },
  { id: 34, nombre: 'Vodka Ketel One 750ml', precio: 19400, categoria: 'vodka', descripcion: 'Vodka holandés de trigo destilado en alambiques de cobre desde 1691. Fresco y limpio con notas cítricas y de grano.', stock: 10, destacado: 0 },
  { id: 35, nombre: 'Vodka Cîroc 750ml', precio: 29900, categoria: 'vodka', descripcion: 'Vodka francés único elaborado con uvas de las regiones de Gaillac y Cognac. Frutal y delicado con final fresco.', stock: 6, destacado: 1 },
  { id: 36, nombre: 'Vodka Stolichnaya Premium 750ml', precio: 13200, categoria: 'vodka', descripcion: 'Vodka ruso clásico elaborado con trigo y centeno seleccionados. Suave y equilibrado con notas de grano y un final limpio.', stock: 15, destacado: 0 },
  { id: 37, nombre: 'Vodka Smirnoff No.21 750ml', precio: 8900, categoria: 'vodka', descripcion: 'Vodka triple destilado y filtrado diez veces a través de carbón de abedul. Limpio, suave y versátil para cualquier ocasión.', stock: 25, destacado: 0 },
  { id: 38, nombre: "Vodka Tito's Handmade 750ml", precio: 21500, categoria: 'vodka', descripcion: 'Vodka artesanal texano elaborado con maíz amarillo sin gluten. Seis veces destilado con notas dulces y final suave.', stock: 9, destacado: 0 },
  { id: 39, nombre: 'Vodka Russian Standard 750ml', precio: 10800, categoria: 'vodka', descripcion: 'Vodka ruso elaborado con trigo dorado de las estepas y agua glaciar del lago Ladoga. Suave, puro y bien equilibrado.', stock: 18, destacado: 0 },
  { id: 40, nombre: 'Vodka Finlandia 750ml', precio: 12400, categoria: 'vodka', descripcion: 'Vodka finlandés elaborado con cebada de seis hileras y agua de manantial glaciar. Limpio y cristalino con final fresco.', stock: 14, destacado: 0 },

  // FERNET
  { id: 41, nombre: 'Fernet Branca 750ml', precio: 9800, categoria: 'fernet', descripcion: 'El amargo italiano más famoso del mundo, elaborado desde 1845 con 27 hierbas de 4 continentes. Intenso, herbal y digestivo.', stock: 25, destacado: 1 },
  { id: 42, nombre: 'Fernet 1882 750ml', precio: 8400, categoria: 'fernet', descripcion: 'Fernet argentino elaborado desde 1882 con hierbas seleccionadas. Amargo equilibrado con notas herbales y un toque dulce.', stock: 20, destacado: 1 },
  { id: 43, nombre: 'Fernet Vittone 750ml', precio: 7900, categoria: 'fernet', descripcion: 'Fernet argentino tradicional de larga trayectoria. Sabor herbal suave con notas de menta, hierbas aromáticas y final persistente.', stock: 18, destacado: 0 },
  { id: 44, nombre: 'Fernet Stock 750ml', precio: 11200, categoria: 'fernet', descripcion: 'Fernet checo elaborado con hierbas europeas seleccionadas. Intenso y aromático con notas de menta, anís y raíces amargas.', stock: 10, destacado: 0 },
  { id: 45, nombre: 'Fernet Branca Menta 750ml', precio: 10500, categoria: 'fernet', descripcion: 'Versión mentolada del clásico Fernet Branca. Refrescante y herbal con notas intensas de menta piperita y hierbas alpinas.', stock: 15, destacado: 1 },
];

const insert = db.prepare(`
  INSERT OR REPLACE INTO products (id, nombre, precio, categoria, descripcion, stock, destacado)
  VALUES (@id, @nombre, @precio, @categoria, @descripcion, @stock, @destacado)
`);

const insertMany = db.transaction((productos) => {
  for (const p of productos) {
    insert.run(p);
  }
});

insertMany(productos);
console.log('Migración completada — ' + productos.length + ' productos cargados en SQLite.');