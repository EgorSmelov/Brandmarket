import { createAsyncThunk } from '@reduxjs/toolkit';
import GendersService from '../../../services/gendersService';

const getAllGendersThunk = createAsyncThunk('genders/getAllGenders', async () => {
  const data = await GendersService.getGenders();
  return data;
});

export default getAllGendersThunk;
