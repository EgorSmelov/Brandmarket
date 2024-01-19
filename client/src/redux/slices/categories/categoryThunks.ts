import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoriesService from '../../../services/categoriesService';

const getAllCategoriesThunk = createAsyncThunk('categories/getAllCategoriesThunk', async () => {
  const data = await CategoriesService.getCategories();
  return data;
});

export default getAllCategoriesThunk;
