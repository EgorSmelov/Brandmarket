import { createSlice } from '@reduxjs/toolkit';
import {
  addBasketThunk,
  decrementCountBasketThunk,
  delBasketThunk,
  getBasketsThunk,
  incrementCountBasketThunk,
} from './basketThunks';

const initialState = { baskets: [], isLoading: false };

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBasketsThunk.fulfilled, (state, action) => {
      state.baskets = action.payload;
      state.isLoading = false;
    });

    builder.addCase(addBasketThunk.fulfilled, (state, action) => {
      if (!state.baskets.find((good) => good.id === action.payload.id)) {
        state.baskets.push(action.payload);
      }
      state.isLoading = false;
    });

    builder.addCase(delBasketThunk.fulfilled, (state, action) => {
      state.baskets = state.baskets.filter((good) => good.id !== action.payload);
      state.isLoading = false;
    });

    builder.addCase(incrementCountBasketThunk.fulfilled, (state, action) => {
      const index = state.baskets.findIndex((good) => good.id === action.payload.goodId);
      state.baskets[index].userBaskets[0].Baskets.quantity = action.payload.quantity;
      state.baskets[index].userBaskets[0].Baskets.totalPrice = action.payload.totalPrice;
      state.isLoading = false;
    });

    builder.addCase(decrementCountBasketThunk.fulfilled, (state, action) => {
      const index = state.baskets.findIndex((good) => good.id === action.payload.goodId);
      state.baskets[index].userBaskets[0].Baskets.quantity = action.payload.quantity;
      state.baskets[index].userBaskets[0].Baskets.totalPrice = action.payload.totalPrice;
      state.isLoading = false;
    });
  },
});

export const {} = basketSlice.actions;

export default basketSlice.reducer;
