import { createSlice } from '@reduxjs/toolkit';
import { getAllColorsThunk, getAllSizesThunk } from './attributesThunks';
import type { AttributesState } from '../../../types/attributes';

const initialState: AttributesState = { sizes: [], colors: [], isLoading: false };

export const AttributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSizesThunk.fulfilled, (state, action) => {
      state.sizes = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getAllColorsThunk.fulfilled, (state, action) => {
      state.colors = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = AttributesSlice.actions;

export default AttributesSlice.reducer;
