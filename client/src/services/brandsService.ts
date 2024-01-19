import axios from 'axios';
import type { BrandType } from '../types/category';

export const apiBrandsService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/brands/',
});

class BrandsService {
  static async getBrands(): Promise<BrandType[]> {
    const response = await apiBrandsService.get<BrandType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default BrandsService;
