import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const { name, price, description, category, image } = req.body;

    if (!name || !price || !description || !category || !image) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            image
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

export const getProducts = async (req, res) => {
    // Lógica para obtener todos los productos
    try {
        // Implementa la lógica para obtener productos aquí
        res.status(200).json({ message: 'Obteniendo todos los productos' });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

export const getProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        console.error(`Error al obtener el producto con ID ${productId}:`, error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const updateProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(updatedProduct);
    } catch (error) {
        console.error(`Error al actualizar el producto con ID ${productId}:`, error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const deleteProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error(`Error al eliminar el producto con ID ${productId}:`, error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.id });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener productos por categoría' });
    }
};