import { createSlice } from '@reduxjs/toolkit';
import getAllCategoriesThunk from './categoryThunks';
import type { CategoriesState } from '../../../types/category';

const initialState: CategoriesState = { categories: [], isLoading: false };

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
