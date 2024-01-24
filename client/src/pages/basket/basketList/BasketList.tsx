import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getBasketsThunk } from '../../../redux/slices/baskets/basketThunks';
import BasketTable from './BasketTable';
import { Typography } from '@mui/material';

export default function BasketList(): JSX.Element {
  const { baskets } = useAppSelector((state) => state.baskets);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getBasketsThunk());
  }, [dispatch]);

  if (!baskets.length)
    return (
      <Typography component="h1" variant="h5">
        В корзине ничего нет
      </Typography>
    );

  return <BasketTable basketGoods={baskets} />;
}
