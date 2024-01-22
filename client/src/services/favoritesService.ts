import axios from 'axios';

import type { GoodType } from '../types/good';
import type { UserType } from '../types/auth';

export const apiFavoritesService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/favorites',
  withCredentials: true,
});

class FavoritesService {
  static async getFavorites(userId: UserType['id']): Promise<GoodType[]> {
    const response = await apiFavoritesService.get<GoodType[]>(`/${userId}`);
    console.log(response.data);
    if (response.status === 200) return response.data;
    return [];
  }

  static async addFavorites(userId: UserType['id'], goodId: GoodType['id']): Promise<void> {
    const response = await apiFavoritesService.post(`/${userId}/${goodId}`);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error(`Server error on adding to favorites`));
  }

  static async delFavorites(userId: UserType['id'], goodId: GoodType['id']): Promise<void> {
    const response = await apiFavoritesService.delete(`/${userId}/${goodId}`);
    if (response.status === 200) return;
    return Promise.reject(new Error(`Server error deleting from favorites`));
  }
}

export default FavoritesService;
