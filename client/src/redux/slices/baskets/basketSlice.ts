import { createSlice } from '@reduxjs/toolkit';
import { addBasketThunk, delBasketThunk, getBasketsThunk } from './basketThunks';

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
  },
});

export const {} = basketSlice.actions;

export default basketSlice.reducer;
