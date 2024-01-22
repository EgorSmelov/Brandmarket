import { createSlice } from '@reduxjs/toolkit';
import type { UserModerState } from '../../../types/auth';
import getAllUsersThunk from './userThunks';

const initialState: UserModerState = { users: [], isLoading: false };

export const categoriesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
  },
});


export default categoriesSlice.reducer;
