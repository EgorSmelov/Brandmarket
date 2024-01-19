export type BrandType = {
  id: number;
  name: string;
  createdAt: string;
  updatetedAt: string;
};

export type BrandState = {
  brands: BrandType[];
  isLoading: boolean;
};
