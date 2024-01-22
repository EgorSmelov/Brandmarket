import axios from 'axios';
import type { SellerGoodType } from '../types/seller';

export const apiSellersService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/goods/',
  withCredentials: true,
});

class SellerGoodsService {
  static async getSellerGoods(): Promise<SellerGoodType[]> {
    const response = await apiSellersService.get<SellerGoodType[]>('/sellers');
    if (response.status === 200) return response.data;
    return [];
  }

  static async deleteSellerGood(id: SellerGoodType['id']): Promise<void> {
    const response = await apiSellersService.delete(`/${id}`);
    if (response.status === 200) return;
    return Promise.reject(new Error(`Server error deleting good id ${id}`));
  }
}

export default SellerGoodsService;
