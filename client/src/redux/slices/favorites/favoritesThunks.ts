import { createAsyncThunk } from '@reduxjs/toolkit';
import FavoritesService from '../../../services/favoritesService';
import type { UserType } from '../../../types/auth';
import type { GoodType } from '../../../types/good';
import GoodsService from '../../../services/goodsService';

export const getFavoritesThunk = createAsyncThunk('favorites/getFavoritesThunk', async (userId) => {
  const data = await FavoritesService.getFavorites(userId);
  return data;
});

export const addFavoritesThunk = createAsyncThunk(
  'favorites/addFavoritesThunk',
  async ({ userId, goodId }: { userId: UserType['id']; goodId: GoodType['id'] }) => {
    await FavoritesService.addFavorites(userId, goodId);
    const favoriteCard = await GoodsService.getOneGood(goodId);
    return favoriteCard;
  },
);

export const delFavoritesThunk = createAsyncThunk(
  'favorites/delFavoritesThunk',
  async ({ userId, goodId }: { userId: UserType['id']; goodId: GoodType['id'] }) => {
    await FavoritesService.addFavorites(userId, goodId);
    return goodId;
  },
);
