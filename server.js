const express = require('express');
const path = require('path');
require('dotenv').config();

const api = require('./api/index.js');

const app = express();

// Servir index.html y todos los archivos del proyecto
app.use(express.static(path.join(__dirname)));

// Rutas de la API
app.use('/api', api);

// Capturar cualquier ruta y devolver index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
