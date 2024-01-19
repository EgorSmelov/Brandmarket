import axios from 'axios';

import type { GoodType } from '../types/good';

export const apiGoodsService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/goods',
});

class GoodsService {
  static async getGoods(): Promise<GoodType[]> {
    const response = await apiGoodsService.get<GoodType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async deleteGood(id: GoodType['id']): Promise<void> {
    const response = await apiGoodsService.delete(`/${id}`);
    if (response.status === 200) return;
    return Promise.reject(new Error(`Server error deleting product id ${id}`));
  }
}

export default GoodsService;