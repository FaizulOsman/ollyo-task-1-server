"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = void 0;
const mongoose_1 = require("mongoose");
// Gallery Schema
const GallerySchema = new mongoose_1.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Gallery = (0, mongoose_1.model)('Gallery', GallerySchema);
