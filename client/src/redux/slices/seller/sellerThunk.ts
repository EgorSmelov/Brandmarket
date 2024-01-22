import { createAsyncThunk } from '@reduxjs/toolkit';

import type { SellerGoodType } from '../../../types/seller';
import SellerGoodsService from '../../../services/sellerGoodsService';

const getAllSellerGoodsThunk = createAsyncThunk('sellers/getAllSellerGoodsThunk', async () => {
  const data = await SellerGoodsService.getSellerGoods();
  return data;
});

export const deleteSellerGoodHandlerThunk = createAsyncThunk(
  'seller/deleteSellerGoodHandlerThunk',
  async (id: SellerGoodType['id']) => {
    await SellerGoodsService.deleteSellerGood(id);
    return id;
  },
);

export default getAllSellerGoodsThunk;
