import { createAsyncThunk } from '@reduxjs/toolkit';
import FavoritesService from '../../../services/favoritesService';
import type { UserType } from '../../../types/auth';
import type { GoodType } from '../../../types/good';

export const getFavoritesThunk = createAsyncThunk('favorites/getFavoritesThunk', async () => {
  const data = await FavoritesService.getFavorites();
  return data;
});

export const addFavoritesThunk = createAsyncThunk(
  'favorites/addFavoritesThunk',
  async ({ userId, goodId }: { userId: UserType['id']; goodId: GoodType['id'] }) => {
    const data = await FavoritesService.addFavorites(userId, goodId);
    return data;
  },
);

export const delFavoritesThunk = createAsyncThunk(
  'favorites/delFavoritesThunk',
  async ({ userId, goodId }: { userId: UserType['id']; goodId: GoodType['id'] }) => {
    await FavoritesService.addFavorites(userId, goodId);
    return goodId;
  },
);
