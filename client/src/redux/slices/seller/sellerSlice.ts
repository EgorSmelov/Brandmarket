import { createSlice } from '@reduxjs/toolkit';
import type { SellerGoodState } from '../../../types/seller';
import getAllSellerGoodsThunk, { deleteSellerGoodHandlerThunk } from './sellerThunk';

const initialState: SellerGoodState = { sellerGoods: [], isLoading: false };

export const sellersSlice = createSlice({
  name: 'sellers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSellerGoodsThunk.fulfilled, (state, action) => {
      state.sellerGoods = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deleteSellerGoodHandlerThunk.fulfilled, (state, action) => {
      state.sellerGoods = state.sellerGoods.filter((el) => el.id !== action.payload);
      state.isLoading = false;
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = sellersSlice.actions;

export default sellersSlice.reducer;
