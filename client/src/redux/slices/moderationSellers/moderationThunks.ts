import { createAsyncThunk } from '@reduxjs/toolkit';
import ModerationService from '../../../services/moderationService';
import type { UserType } from '../../../types/auth';

export const getAllUsersThunk = createAsyncThunk('users/getAllUsersThunk', async () => {
  const data = await ModerationService.getUsers();
  return data;
});

export const getUserThunk = createAsyncThunk('user/getUserThunk', async (id: UserType['id']) => {
  const data = await ModerationService.grandUserRole(id);
  return data;
});

export const deleteFormHandlerThunk = createAsyncThunk(
  'form/deleteFormHandlerThunk',
  async (id: UserType['id']) => {
    await ModerationService.deleteFormUser(id);
    return id;
  },
);
