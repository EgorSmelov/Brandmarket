import axios from 'axios';

import type { GoodType } from '../types/good';
import type { UserType } from '../types/auth';

export const apiFavoritesService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/favorites',
  withCredentials: true,
});

class FavoritesService {
  static async getFavorites(): Promise<GoodType[]> {
    const response = await apiFavoritesService.get<GoodType[]>(`/`);
    if (response.status === 200) return response.data;
    return [];
  }

  static async addFavorites(goodId: GoodType['id']): Promise<GoodType> {
    const response = await apiFavoritesService.post<GoodType>(`/${goodId}`);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error(`Server error on adding to favorites`));
  }

  static async delFavorites(goodId: GoodType['id']): Promise<void> {
    const response = await apiFavoritesService.delete(`/${goodId}`);
    if (response.status === 200) return;
    return Promise.reject(new Error(`Server error deleting from favorites`));
  }
}

export default FavoritesService;
