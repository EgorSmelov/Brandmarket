import axios from 'axios';

import type { GoodType } from '../types/good';

export const apiGoodsService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/goods',
  withCredentials: true,
});

class GoodsService {
  static async getGoods(): Promise<GoodType[]> {
    const response = await apiGoodsService.get<GoodType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async getOneGood(id: GoodType['id']): Promise<GoodType> {
    const response = await apiGoodsService.get<GoodType>(`/${id}`);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Server error getting good'));
  }

  static async deleteGood(id: GoodType['id']): Promise<void> {
    const response = await apiGoodsService.delete(`/${id}`);
    if (response.status === 200) return;
    return Promise.reject(new Error(`Server error deleting good id ${id}`));
  }
}

export default GoodsService;
