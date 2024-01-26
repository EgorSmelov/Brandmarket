import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import {
  decrementCountBasketThunk,
  incrementCountBasketThunk,
} from '../../../redux/slices/baskets/basketThunks';
import type { GoodType } from '../../../types/good';
import type { BasketType } from '../../../types/basket';
import { useAppSelector } from '../../../redux/hooks';

type BusketCountButtonPropsType = {
  good: GoodType;
  quantity: BasketType['quantity'];
};

export default function BusketCountButton({
  good,
  quantity,
}: BusketCountButtonPropsType): JSX.Element {
  const dispatch = useDispatch();
  const { baskets } = useAppSelector((state) => state.baskets);

  return (
    <>
      <Button
        variant="contained"
        size="small"
        onClick={() => void dispatch(decrementCountBasketThunk(good.id))}
        disabled={quantity === 1}
      >
        -
      </Button>

      <TextField
        id="standard-basic"
        variant="standard"
        value={quantity}
        inputProps={{ style: { textAlign: 'center' } }}
        sx={{ width: '50px' }}
      />

      <Button
        variant="contained"
        size="small"
        onClick={() => void dispatch(incrementCountBasketThunk(good.id))}
        disabled={quantity === good.quantity}
      >
        +
      </Button>
    </>
  );
}
