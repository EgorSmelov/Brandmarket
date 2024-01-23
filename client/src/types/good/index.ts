export type GoodType = {
  id: number;
  title: string;
  price: number;
  description: string;
  color: string;
  image: string;
  categoryId: number;
  brandId: number;
  userId: number;
  genderId: number;
  size: string;
  quantity: number;
};

export type GoodState = {
  goods: GoodType[];
  good: GoodType | null;
};

export type SellerGoodState = {
  sellerGoods: GoodType[];
  isLoading: boolean;
};
