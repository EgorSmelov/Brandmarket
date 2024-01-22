import React from 'react';
import { Button } from '@mui/material';
import type { CategoryType } from '../../../../../types/category';
import { useAppDispatch } from '../../../../../redux/hooks';
import { getAllGoodsThunk } from '../../../../../redux/slices/goods/goodThunk';

type CategoryPropsType = {
  category: CategoryType;
};

function CategoryItem({ category }: CategoryPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Button onClick={() => void dispatch(getAllGoodsThunk(category.id))}>{category.name}</Button>
  );
}

export default React.memo(CategoryItem);
