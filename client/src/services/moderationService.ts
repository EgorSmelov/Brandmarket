import axios from 'axios';
import type { UserType } from '../types/auth';

export const apiModerationService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/moderation',
  withCredentials: true,
});

class ModerationService {
  static async getUsers(): Promise<UserType[]> {
    const response = await apiModerationService.get<UserType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default ModerationService;
