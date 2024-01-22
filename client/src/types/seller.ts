import type { GoodsInfosType } from './good';

export type SellerGoodType = {
  id: number;
  title: string;
  price: number;
  description: string;
  color: string;
  image: string;
  GoodsInfos: GoodsInfosType[];
};

export type SellerGoodState = {
  sellerGoods: SellerGoodType[];
  isLoading: boolean;
};
