/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import { GalleryService } from './gallery.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IGallery } from './gallery.interface';

// Insert into DB
const insertIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...data } = req.body;

    const result = await GalleryService.insertIntoDB(data);

    // Send Response
    sendResponse<IGallery>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data Created Successfully',
      data: result,
    });
  }
);

// Get all from DB
const getAllFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await GalleryService.getAllFromDB();

    // Send Response
    sendResponse<IGallery[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data retrieved Successfully',
      data: result,
    });
  }
);

// Get single data by id
const getSingleFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await GalleryService.getSingleFromDB(id);

    // Send Response
    sendResponse<IGallery>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get Single Data Successfully',
      data: result,
    });
  }
);

// Update Data
const updateData: RequestHandler = catchAsync(async (req, res) => {
  const updateData = req.body;

  const result = await GalleryService.updateData(updateData);

  sendResponse<IGallery>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data updated successfully',
    data: result,
  });
});

// Delete Data
const deleteData: RequestHandler = catchAsync(async (req, res) => {
  const GalleryIds = req.body;

  const result = await GalleryService.deleteData(GalleryIds);

  sendResponse<IGallery[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data deleted successfully',
    data: result,
  });
});

export const GalleryController = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateData,
  deleteData,
};
