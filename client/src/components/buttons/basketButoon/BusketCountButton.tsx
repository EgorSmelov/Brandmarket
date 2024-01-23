import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementCountBasketThunk,
  incrementCountBasketThunk,
} from '../../../redux/slices/baskets/basketThunks';
import type { GoodType } from '../../../types/good';

type BusketCountButtonPropsType = {
  good: GoodType;
};

export default function BusketCountButton({ good }: BusketCountButtonPropsType): JSX.Element {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => void dispatch(incrementCountBasketThunk(good.id))}>
        +
      </button>
      <button type="button" onClick={() => void dispatch(decrementCountBasketThunk(good.id))}>
        -
      </button>
    </>
  );
}
