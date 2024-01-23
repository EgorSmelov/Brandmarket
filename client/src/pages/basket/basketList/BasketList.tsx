import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getBasketsThunk } from '../../../redux/slices/baskets/basketThunks';
import BasketTable from './BasketTable';

export default function BasketList(): JSX.Element {
  const { baskets } = useAppSelector((state) => state.baskets);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getBasketsThunk());
  }, [dispatch]);

  return <BasketTable basketGoods={baskets} />;
}
