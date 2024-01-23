import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GoodType } from '../../../types/good';
import GoodsService from '../../../services/goodsService';

const getAllSellerGoodsThunk = createAsyncThunk('sellers/getAllSellerGoodsThunk', async () => {
  const data = await GoodsService.getSellerGoods();
  return data;
});

export const deleteSellerGoodHandlerThunk = createAsyncThunk(
  'seller/deleteSellerGoodHandlerThunk',
  async (id: GoodType['id']) => {
    await GoodsService.deleteGood(id);
    return id;
  },
);

export default getAllSellerGoodsThunk;
