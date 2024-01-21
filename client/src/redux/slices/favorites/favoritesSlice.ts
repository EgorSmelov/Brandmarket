import { createSlice } from '@reduxjs/toolkit';
import { getFavoritesThunk } from './favoritesThunks';

const initialState = { favorites: [], isLoading: false };

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoritesThunk.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
