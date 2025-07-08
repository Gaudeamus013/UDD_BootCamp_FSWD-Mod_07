// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect } = require('../middleware/middleware');

// Crear producto (solo admin)
router.post('/', protect, async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto' });
    }
});

// Obtener productos
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Obtener producto por ID
router.get('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID de producto no válido' });
        }
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener producto' });
    }
});

// Actualizar producto
router.put('/:id', protect, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar producto' });
    }
});

// Eliminar producto
router.delete('/:id', protect, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto' });
    }
});

module.exports = router;