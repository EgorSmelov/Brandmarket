import axios from 'axios';

import type { GoodType } from '../types/good';

export const apiGoodsService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/goods',
  withCredentials: true,
});

class GoodsService {
  static async getGoods(categoryId: number | null): Promise<GoodType[]> {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await apiGoodsService.get<GoodType[]>(`/?categoryId=${categoryId}`);
    if (response.status === 200) return response.data;
    return [];
  }

  static async getSellerGoods(): Promise<GoodType[]> {
    const response = await apiGoodsService.get<GoodType[]>('/sellers');
    if (response.status === 200) return response.data;
    return [];
  }

  static async getSearchedGoods(search: string): Promise<GoodType[]> {
    const response = await apiGoodsService.get<GoodType[]>(`/search?searchText=${search}`);
    if (response.status === 200) return response.data;
    return [];
  }

  static async getFilters({ color, price, size }): Promise<GoodType[]> {
    console.log(color, price, size);
    const response = await apiGoodsService.get<GoodType[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/filter?color=${color}&price=${price}&size=${size}`,
    );
    if (response.status === 200) return response.data;
    return [];
  }

  static async getOneGood(id: GoodType['id']): Promise<GoodType> {
    const response = await apiGoodsService.get<GoodType>(`/${id}`);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Server error getting good'));
  }

  static async addGood(formdata: SellerInputsFormType): Promise<SellerInputsType> {
    const response = await apiGoodsService.post<SellerInputsType>('/', formdata, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    if (response.status === 200) return response.data;
    return Promise.reject(new Error(`Server error add good`));
  }

  static async editGood(
    goodId: GoodType['id'],
    formdata: SellerInputsFormType,
  ): Promise<SellerInputsType> {
    const response = await apiGoodsService.patch<SellerInputsType>(`/${goodId}`, formdata, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    if (response.status === 200) return response.data;
    return Promise.reject(new Error(`Server error edit good`));
  }

  static async deleteGood(id: GoodType['id']): Promise<void> {
    const response = await apiGoodsService.delete(`/${id}`);
    if (response.status === 200) return;
    return Promise.reject(new Error(`Server error deleting good id ${id}`));
  }
}

export default GoodsService;
