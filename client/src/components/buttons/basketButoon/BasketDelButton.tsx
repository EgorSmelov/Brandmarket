import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { delBasketThunk } from '../../../redux/slices/baskets/basketThunks';
import type { GoodType } from '../../../types/good';

type BasketDelButtonPropsType = {
  good: GoodType;
};

export default function BasketDelButton({ good }: BasketDelButtonPropsType): JSX.Element {
  const dispatch = useDispatch();
  return (
    <IconButton
      aria-label="to basket"
      type="button"
      onClick={() => void dispatch(delBasketThunk(good.id))}
    >
      <DeleteForeverIcon />
    </IconButton>
  );
}
