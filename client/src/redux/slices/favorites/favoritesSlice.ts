import { createSlice } from '@reduxjs/toolkit';
import { addFavoritesThunk, delFavoritesThunk, getFavoritesThunk } from './favoritesThunks';

const initialState = { favorites: [], isLoading: false };

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    resetFavorites: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoritesThunk.fulfilled, (state, action) => {
      state.favorites = action.payload;
      state.isLoading = false;
    });

    builder.addCase(addFavoritesThunk.fulfilled, (state, action) => {
      if (!state.favorites.find((favorite) => favorite.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }

      state.isLoading = false;
    });

    builder.addCase(delFavoritesThunk.fulfilled, (state, action) => {
      state.favorites = state.favorites.filter((good) => good.id !== action.payload);
      state.isLoading = false;
    });
  },
});

export const { resetFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
