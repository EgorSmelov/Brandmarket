import axios from 'axios';

import type { GoodType } from '../types/good';

export const apiOrdersService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/orders',
  withCredentials: true,
});

class OrdersService {
  static async getOrders(): Promise<GoodType[]> {
    const response = await apiOrdersService.get<GoodType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addOrders(formdata: SellerInputsFormType): Promise<SellerInputsType> {
    const response = await apiOrdersService.post<SellerInputsType>('/purchase', formdata);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error(`Server error add good`));
  }
}

export default OrdersService;
