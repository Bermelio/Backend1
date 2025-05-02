const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '..', 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const productos = JSON.parse(data);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el archivo de productos 😢' });
  }
});

router.get('/:pid', async (req, res) => {
    try {
      const productsID = parseInt(req.params.pid);
      const filePath = path.join(__dirname, '..', 'data', 'products.json');
      const data = await fs.readFile(filePath, 'utf-8');
      const productos = JSON.parse(data);
      const product = productos.find((p) => p.id === productsID);
  
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado 😢' });
      }
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error al leer el producto 😢' });
    }
  });

module.exports = router;