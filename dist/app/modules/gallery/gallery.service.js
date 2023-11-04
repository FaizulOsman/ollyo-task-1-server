"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const gallery_model_1 = require("./gallery.model");
// Insert into DB
const insertIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_model_1.Gallery.create(payload);
    return result;
});
// Get All From DB (can also filter)
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_model_1.Gallery.find();
    return result;
});
// Get Single Data From DB
const getSingleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_model_1.Gallery.findById(id);
    return result;
});
const updateData = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_model_1.Gallery.updateMany(payload);
    return result;
});
// Delete Data
const deleteData = (GalleryIds) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { _id: { $in: GalleryIds } };
    const result = yield gallery_model_1.Gallery.deleteMany(filter);
    return result;
});
exports.GalleryService = {
    insertIntoDB,
    getAllFromDB,
    getSingleFromDB,
    updateData,
    deleteData,
};
