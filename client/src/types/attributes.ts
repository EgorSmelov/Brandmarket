import type { GoodType } from './good';

export type AttributesState = {
  colors: GoodType['color'][];
  sizes: GoodType['size'][];
  isLoading: boolean;
};
