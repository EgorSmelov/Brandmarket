import { createSlice } from '@reduxjs/toolkit';
import type { GenderState } from '../../../types/gender';
import getAllGendersThunk from './genderThunks';

const initialState: GenderState = { genders: [], isLoading: false };

export const gendersSlice = createSlice({
  name: 'genders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGendersThunk.fulfilled, (state, action) => {
      state.genders = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = gendersSlice.actions;

export default gendersSlice.reducer;
