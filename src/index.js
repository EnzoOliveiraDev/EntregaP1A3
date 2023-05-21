const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/login/login.html'));
});

router.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/register/register.html'));
});

router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/home/home.html'));
});

router.get('/perfil', function(req, res) {
   res.sendFile(path.join(__dirname + '/pages/perfil/perfil.html'));
});

router.get('/serie', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/serie/serie.html'));
});

router.get('/favorites', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/favorites/favorites.html'));
});

  app.use('/', router);
  app.listen(process.env.port || 3000);
  console.log('Conexão estabelecida na porta 3000')