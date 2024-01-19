export type CategoryType = {
  id: number;
  name: string;
  createdAt: string;
  updatetedAt: string;
};

export type CategoriesState = {
  categories: CategoryType[];
  isLoading: boolean;
};
