import { Model } from 'mongoose';

export type IGallery = {
  imageUrl: string;
};

// Gallery Model
export type GalleryModel = Model<IGallery, Record<string, unknown>>;
