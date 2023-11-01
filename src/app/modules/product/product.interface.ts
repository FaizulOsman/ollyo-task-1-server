import { Model } from 'mongoose';

export type IProduct = {
  imageUrl: string;
};

// Product Model
export type ProductModel = Model<IProduct, Record<string, unknown>>;
