import type { UserType } from './auth';
import type { GoodType } from './good';

export type BasketType = {
  id: number;
  userId: UserType['id'];
  goodId: GoodType['id'];
  price: GoodType['price'];
  totalPrice: number;
  quantity: number;
  createdAt: string;
  updatetedAt: string;
};
