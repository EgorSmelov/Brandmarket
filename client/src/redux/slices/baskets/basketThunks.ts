import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GoodType } from '../../../types/good';
import GoodsService from '../../../services/goodsService';
import BasketService from '../../../services/basketsService';

export const getBasketsThunk = createAsyncThunk('basket/getFavoritesThunk', async () => {
  const data = await BasketService.getBaskets();
  return data;
});

export const addBasketThunk = createAsyncThunk(
  'basket/addBasketThunk',
  async (goodId: GoodType['id']) => {
    await BasketService.addBasket(goodId);
    const BasketCard = await GoodsService.getOneGood(goodId);
    return BasketCard;
  },
);

export const delBasketThunk = createAsyncThunk(
  'basket/delBasketThunk',
  async (goodId: GoodType['id']) => {
    await BasketService.delBasket(goodId);
    return goodId;
  },
);

export const incrementCountBasketThunk = createAsyncThunk(
  'basket/incrementCountBasketThunk',
  async (goodId: GoodType['id']) => {
    const data = await BasketService.incrementCountBasket(goodId);
    return data;
  },
);

export const decrementCountBasketThunk = createAsyncThunk(
  'basket/decrementCountBasketThunk',
  async (goodId: GoodType['id']) => {
    const data = await BasketService.decrementCountBasket(goodId);
    return data;
  },
);
