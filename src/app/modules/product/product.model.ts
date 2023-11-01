import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

// Product Schema
const ProductSchema = new Schema<IProduct, ProductModel>(
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

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);
