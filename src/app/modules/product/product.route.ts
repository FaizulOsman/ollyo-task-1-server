import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();

// Routes
router.post('/create-product', ProductController.createProduct);

router.delete('/delete', ProductController.deleteProducts);

router.get('/:id', ProductController.getSingleProduct);

router.patch('/update', ProductController.updateProduct);

router.get('/', ProductController.getAllProducts);

export const ProductRoutes = router;
