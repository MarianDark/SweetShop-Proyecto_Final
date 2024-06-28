import express from 'express';
import { createProduct, getProducts, getAllProducts, getProductById, updateProductById, deleteProductById } from '../controllers/productController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createProduct);
router.get('/', getProducts);
router.get('/all', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', authMiddleware, updateProductById);
router.delete('/:id', authMiddleware, deleteProductById);

export default router;