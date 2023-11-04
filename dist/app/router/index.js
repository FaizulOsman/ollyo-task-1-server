"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gallery_route_1 = require("../modules/gallery/gallery.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/gallery',
        route: gallery_route_1.GalleryRoutes,
    },
];
moduleRoutes === null || moduleRoutes === void 0 ? void 0 : moduleRoutes.forEach(route => router.use(route === null || route === void 0 ? void 0 : route.path, route === null || route === void 0 ? void 0 : route.route));
exports.default = router;
