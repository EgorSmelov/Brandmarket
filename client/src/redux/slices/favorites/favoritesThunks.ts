import { createAsyncThunk } from '@reduxjs/toolkit';
import FavoritesService from '../../../services/favoritesService';
import type { GoodType } from '../../../types/good';
import GoodsService from '../../../services/goodsService';

export const getFavoritesThunk = createAsyncThunk('favorites/getFavoritesThunk', async () => {
  const data = await FavoritesService.getFavorites();
  return data;
});

export const addFavoritesThunk = createAsyncThunk(
  'favorites/addFavoritesThunk',
  async (goodId: GoodType['id']) => {
    await FavoritesService.addFavorites(goodId);
    const favoriteCard = await GoodsService.getOneGood(goodId);
    return favoriteCard;
  },
);

export const delFavoritesThunk = createAsyncThunk(
  'favorites/deleteFavoritesThunk',
  async (goodId: GoodType['id']) => {
    await FavoritesService.delFavorites(goodId);
    return goodId;
  },
);
