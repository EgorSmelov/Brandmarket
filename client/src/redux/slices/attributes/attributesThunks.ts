import { createAsyncThunk } from '@reduxjs/toolkit';
import AttributesGoodService from '../../../services/attributesGoodService';

export const getAllSizesThunk = createAsyncThunk('attributes/getAllSizesThunk', async () => {
  const data = await AttributesGoodService.getAllSizes();
  return data;
});

export const getAllColorsThunk = createAsyncThunk('attributes/getAllColors', async () => {
  const data = await AttributesGoodService.getAllColors();
  return data;
});
