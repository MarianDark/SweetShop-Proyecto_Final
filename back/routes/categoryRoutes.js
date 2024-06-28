import express from 'express';
import { createCategory, deleteCategory, updateCategory, updateCategoryById, deleteCategoryById } from '../controllers/categoryController.js';
import { getCategory, getCategoryById } from '../controllers/categoryController.js';
import { getProductsByCategory } from '../controllers/productController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createCategory);
router.delete('/:id', authMiddleware, deleteCategory);
router.put('/:id', authMiddleware, updateCategory);
router.get('/', getCategory);
router.get('/:id', getCategoryById);
router.put('/:id', authMiddleware, updateCategoryById);
router.delete('/:id', authMiddleware, deleteCategoryById);
router.get('/:id/products', getProductsByCategory);

export default router;