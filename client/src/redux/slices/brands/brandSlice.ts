import { createSlice } from '@reduxjs/toolkit';
import type { BrandState } from '../../../types/brand';
import getAllBrandsThunk from './brandThunks';

const initialState: BrandState = { brands: [], isLoading: false };

export const categoriesSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBrandsThunk.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
