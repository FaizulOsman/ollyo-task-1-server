import express from 'express';
import { GalleryRoutes } from '../modules/gallery/gallery.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/gallery',
    route: GalleryRoutes,
  },
];

moduleRoutes?.forEach(route => router.use(route?.path, route?.route));

export default router;
