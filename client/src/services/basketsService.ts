import axios from 'axios';
import type { GoodType } from '../types/good';

export const apiBasketService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/baskets/',
  withCredentials: true,
});

class BasketService {
  static async getBaskets(): Promise<GoodType[]> {
    const response = await apiBasketService.get<GoodType[]>(`/`);
    if (response.status === 200) return response.data;
    return [];
  }

  static async addBasket(goodId: GoodType['id']): Promise<GoodType> {
    const response = await apiBasketService.post<GoodType>(`/${goodId}`);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error(`Server error on adding to baskets`));
  }

  static async delBasket(goodId: GoodType['id']): Promise<void> {
    const response = await apiBasketService.delete(`/${goodId}`);
    if (response.status === 200) return;
    return Promise.reject(new Error(`Server error deleting from baskets`));
  }

  static async incrementCountBasket(goodId: GoodType['id']): Promise<void> {
    const response = await apiBasketService.patch(`/${goodId}/increment`);
    if (response.status === 200) {
      const data = await apiBasketService.get<GoodType[]>(`/`);
      if (response.status === 200) return data.data;
    }
    return Promise.reject(new Error(`Server error increment count from baskets`));
  }

  static async decrementCountBasket(goodId: GoodType['id']): Promise<void> {
    const response = await apiBasketService.patch(`/${goodId}/decrement`);
    if (response.status === 200) {
      const data = await apiBasketService.get<GoodType[]>(`/`);
      if (response.status === 200) return data.data;
    }
    return Promise.reject(new Error(`Server error decrement count from baskets`));
  }
}

export default BasketService;
