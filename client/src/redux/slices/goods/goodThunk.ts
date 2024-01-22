import { createAsyncThunk } from '@reduxjs/toolkit';
import GoodsService from '../../../services/goodsService';
import type { GoodType } from '../../../types/good';

export const getAllGoodsThunk = createAsyncThunk(
  'good/getAllGoodsThunk',
  async (categoryId: number | null) => {
    const data = await GoodsService.getGoods(categoryId);
    return data;
  },
);

export const getOneGoodThunk = createAsyncThunk(
  'good/getOneGoodThunk',
  async (id: GoodType['id']) => {
    const data = await GoodsService.getOneGood(id);
    return data;
  },
);

export const deleteGoodHandlerThunk = createAsyncThunk(
  'good/deleteGoodHandlerThunk',
  async (id: GoodType['id']) => {
    await GoodsService.deleteGood(id);
    return id;
  },
);
