"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const gallery_controller_1 = require("./gallery.controller");
const router = express_1.default.Router();
// Routes
router.post('/insert-image', gallery_controller_1.GalleryController.insertIntoDB);
router.delete('/delete', gallery_controller_1.GalleryController.deleteData);
router.get('/:id', gallery_controller_1.GalleryController.getSingleFromDB);
router.patch('/update', gallery_controller_1.GalleryController.updateData);
router.get('/', gallery_controller_1.GalleryController.getAllFromDB);
exports.GalleryRoutes = router;
