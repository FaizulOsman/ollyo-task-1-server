import express from 'express';
import { GalleryController } from './gallery.controller';
const router = express.Router();

// Routes
router.post('/insert-image', GalleryController.insertIntoDB);

router.delete('/delete', GalleryController.deleteData);

router.get('/:id', GalleryController.getSingleFromDB);

router.patch('/update', GalleryController.updateData);

router.get('/', GalleryController.getAllFromDB);

export const GalleryRoutes = router;
