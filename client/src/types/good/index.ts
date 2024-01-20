export type GoodType = {
  id: number;
  title: string;
  price: number;
  description: string;
  color: string;
  image: string;
};

export type GoodState = {
  goods: GoodType[];
  good: GoodType | null;
};
