export type GoodType = {
  id: number;
  title: string;
  price: number;
  description: string;
  color: string;
  image: string;
  GoodsInfos: GoodsInfosType[];
  categoryId: number;
  brandId: number;
  userId: number;
  genderId: number;
};

export type GoodsInfosType = {
  id: number;
  goodId: number;
  size: string;
  quantity: number;
};

export type GoodState = {
  goods: GoodType[];
  good: GoodType | null;
};
