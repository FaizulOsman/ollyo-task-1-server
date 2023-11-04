/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { IGallery } from './gallery.interface';
import { Gallery } from './gallery.model';

// Insert into DB
const insertIntoDB = async (payload: IGallery): Promise<IGallery | null> => {
  const result = await Gallery.create(payload);
  return result;
};

// Get All From DB (can also filter)
const getAllFromDB = async (): Promise<any> => {
  const result = await Gallery.find();

  return result;
};

// Get Single Data From DB
const getSingleFromDB = async (id: string): Promise<IGallery | null> => {
  const result = await Gallery.findById(id);

  return result;
};

const updateData = async (payload: Partial<IGallery>): Promise<any> => {
  const result = await Gallery.updateMany(payload);

  return result;
};

// Delete Data
const deleteData = async (GalleryIds: any): Promise<any> => {
  const filter = { _id: { $in: GalleryIds } };
  const result = await Gallery.deleteMany(filter);

  return result;
};

export const GalleryService = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateData,
  deleteData,
};
