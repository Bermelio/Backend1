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

module.exports = router;