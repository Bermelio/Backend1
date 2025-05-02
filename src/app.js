const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const productsRouter = require('./routes/products.router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
  res.send(`<h1>Bienvenido a la API de productos 🚀. Visita <a href="http://localhost:${PORT}/api/products">/api/products</a> para ver los productos.</h1>`);
});



app.listen(PORT, () => {
  console.log(`Servidor escuchando en 🚀 http://localhost:${PORT}`);
});
