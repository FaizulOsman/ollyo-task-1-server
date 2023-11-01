/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import { ProductService } from './product.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IProduct } from './product.interface';

// Create Product
const createProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...productData } = req.body;

    const result = await ProductService.createProduct(productData);

    // Send Response
    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Created Successfully',
      data: result,
    });
  }
);

// Get all Products
const getAllProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductService.getAllProducts();

    // Send Response
    sendResponse<IProduct[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products retrieved Successfully',
      data: result,
    });
  }
);

// Get single Product by id
const getSingleProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ProductService.getSingleProduct(id);

    // Send Response
    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get Single Product Successfully',
      data: result,
    });
  }
);

// Update Product
const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const updateData = req.body;

  const result = await ProductService.updateProduct(updateData);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});

// Delete Product
const deleteProducts: RequestHandler = catchAsync(async (req, res) => {
  const productIds = req.body;

  const result = await ProductService.deleteProducts(productIds);

  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products deleted successfully',
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProducts,
};
