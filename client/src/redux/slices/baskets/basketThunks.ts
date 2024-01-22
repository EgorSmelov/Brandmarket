import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GoodType } from '../../../types/good';
import GoodsService from '../../../services/goodsService';
import BasketService from '../../../services/basketsService';

export const getBasketsThunk = createAsyncThunk('basket/getFavoritesThunk', async () => {
  const data = await BasketService.getBaskets();
  return data;
});

export const addBasketThunk = createAsyncThunk(
  'basket.addBasketThunk',
  async (goodId: GoodType['id']) => {
    await BasketService.addBasket(goodId);
    const favoriteCard = await GoodsService.getOneGood(goodId);
    return favoriteCard;
  },
);

export const delBasketThunk = createAsyncThunk(
  'basket/delBasketThunk',
  async (goodId: GoodType['id']) => {
    await BasketService.delBasket(goodId);
    return goodId;
  },
);
