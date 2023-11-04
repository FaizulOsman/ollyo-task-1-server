import { Schema, model } from 'mongoose';
import { IGallery, GalleryModel } from './gallery.interface';

// Gallery Schema
const GallerySchema = new Schema<IGallery, GalleryModel>(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Gallery = model<IGallery, GalleryModel>('Gallery', GallerySchema);
