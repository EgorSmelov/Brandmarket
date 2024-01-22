import React from 'react';
import { Button } from '@mui/material';
import type { CategoryType } from '../../../../../types/category';

type CategoryPropsType = {
  category: CategoryType;
};

function CategoryItem({ category }: CategoryPropsType): JSX.Element {
  return <Button>{category.name}</Button>;
}

export default React.memo(CategoryItem);
