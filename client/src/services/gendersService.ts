import axios from 'axios';
import type { GenderType } from '../types/gender';

export const apiGendersService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/genders/',
  withCredentials: true,
});

class GendersService {
  static async getGenders(): Promise<GenderType[]> {
    const response = await apiGendersService.get<GenderType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default GendersService;
