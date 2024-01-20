export type GenderType = {
  id: number;
  name: string;
  createdAt: string;
  updatetedAt: string;
};

export type GenderState = {
  genders: GenderType[];
  isLoading: boolean;
};
