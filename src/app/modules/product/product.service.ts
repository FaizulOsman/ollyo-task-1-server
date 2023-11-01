/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { IProduct } from './product.interface';
import { Product } from './product.model';

// Create Product
const createProduct = async (payload: IProduct): Promise<IProduct | null> => {
  const result = await Product.create(payload);
  return result;
};

// Get All Products (can also filter)
const getAllProducts = async (): Promise<any> => {
  const result = await Product.find();

  return result;
};

// Get Single Product
const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);

  return result;
};

const updateProduct = async (payload: Partial<IProduct>): Promise<any> => {
  const result = await Product.updateMany(payload);

  return result;
};

// Delete Products
const deleteProducts = async (productIds: any): Promise<any> => {
  const filter = { _id: { $in: productIds } };
  const result = await Product.deleteMany(filter);

  return result;
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProducts,
};
