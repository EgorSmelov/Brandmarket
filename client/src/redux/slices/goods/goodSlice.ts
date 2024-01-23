import { createSlice } from '@reduxjs/toolkit';
import type { GoodState } from '../../../types/good';
import { getAllGoodsThunk, deleteGoodHandlerThunk, getOneGoodThunk } from './goodThunk';

const initialState: GoodState = { goods: [], good: null };

export const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {
    resetGood: (state) => {
      state.good = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOneGoodThunk.fulfilled, (state, action) => {
      state.good = action.payload;
    });
    builder.addCase(getAllGoodsThunk.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
    builder.addCase(deleteGoodHandlerThunk.fulfilled, (state, action) => {
      state.goods = state.goods.filter((good) => good.id !== action.payload);
    });
  },
});

export const { resetGood } = goodSlice.actions;

export default goodSlice.reducer;
