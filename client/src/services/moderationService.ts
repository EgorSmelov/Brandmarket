import axios from 'axios';
import type { UserType } from '../types/auth';
import type { SellerInputsFormType, SellerInputsType } from '../types/seller';

export const apiModerationService = axios.create({
  baseURL: 'http://localhost:3000/api/v1/moderation',
  withCredentials: true,
});

class ModerationService {
  static async getUsers(): Promise<UserType[]> {
    const response = await apiModerationService.get<UserType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addSellerData(formdata: SellerInputsFormType): Promise<SellerInputsType> {
    const response = await apiModerationService.post<SellerInputsType>('/', formdata);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error(`Server error on adding to Moderations`));
  }

  static async grandUserRole(id: UserType['id']): Promise<UserType> {
    const response = await apiModerationService.patch<UserType['id']>(`/${id}`);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Server error get user'));
  }
}

export default ModerationService;
