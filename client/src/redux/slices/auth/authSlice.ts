import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/auth';

const initialState: AuthState = { accessToken: '', user: { status: 'pending' } };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refresh: (state, action: PayloadAction<AuthState['accessToken']>) => {
      state.accessToken = action.payload;
    },
    login: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.accessToken = '';
      state.user = { status: 'guest' };
    },
  },
});

export const { login, logout, refresh } = authSlice.actions;

export default authSlice.reducer;
