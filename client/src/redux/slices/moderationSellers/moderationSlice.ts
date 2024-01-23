import { createSlice } from '@reduxjs/toolkit';
import type { UserModerState } from '../../../types/auth';
import { getAllUsersThunk, getUserThunk } from './moderationThunks';

const initialState: UserModerState = { users: [], user: null, isLoading: false };

export const ModerSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
  },
});

export default ModerSlice.reducer;
