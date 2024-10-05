var express = require('express');
var router = express.Router();
const fs = require('fs');

// routes klasöründeki tüm .js dosyalarını yükle
let routes = fs.readdirSync(__dirname);

for (let route of routes) {
  // .js dosyalarını ve index.js dışındakileri seç
  if (route.includes('.js') && route != 'index.js') {
    // Route'ların bir middleware olup olmadığını kontrol et
    const routeModule = require('./' + route);
    
    // routeModule bir router değilse hata fırlat
    if (typeof routeModule !== 'function') {
      throw new Error(`Module ${route} does not export a valid router`);
    }
    
    // Router'ı ekle
    router.use('/' + route.replace('.js', ''), routeModule);
  }
}

module.exports = router;
