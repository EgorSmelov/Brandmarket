import { createAsyncThunk } from '@reduxjs/toolkit';
import BrandsService from '../../../services/brandsService';

const getAllBrandsThunk = createAsyncThunk('brands/getAllBrandsThunk', async () => {
  const data = await BrandsService.getBrands();
  return data;
});

export default getAllBrandsThunk;
