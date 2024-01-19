import axios from 'axios';
import type { CategoryType } from '../types/category';

export const apiCategoriesService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/categories/',
});

class CategoriesService {
  static async getCategories(): Promise<CategoryType[]> {
    const response = await apiCategoriesService.get<CategoryType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default CategoriesService;
