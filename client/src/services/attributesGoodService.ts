import axios from 'axios';
import type { GoodType } from '../types/good';

export const apiAttributesGoodService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/attributes/',
  withCredentials: true,
});

class AttributesGoodService {
  static async getAllSizes(): Promise<GoodType['size'][]> {
    const response = await apiAttributesGoodService.get<GoodType['size'][]>('/sizes');
    if (response.status === 200) return response.data;
    return [];
  }

  static async getAllColors(): Promise<GoodType['color'][]> {
    const response = await apiAttributesGoodService.get<GoodType['size'][]>('/colors');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default AttributesGoodService;
