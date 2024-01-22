import { createAsyncThunk } from '@reduxjs/toolkit';
import ModerationService from '../../../services/moderationService';

const getAllUsersThunk = createAsyncThunk('users/getAllUsersThunk', async () => {
  const data = await ModerationService.getUsers();
  return data;
});

export default getAllUsersThunk;
