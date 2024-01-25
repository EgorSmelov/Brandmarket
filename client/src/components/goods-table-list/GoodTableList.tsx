import * as React from 'react';
import { TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import GoodItem from './good-item/GoodItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import getAllSellerGoodsThunk from '../../redux/slices/seller/sellerThunk';

export default function GoodTableList(): JSX.Element {
  const { sellerGoods } = useAppSelector((state) => state.sellers);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getAllSellerGoodsThunk());
  }, [dispatch]);

  if (sellerGoods.length === 0) {
    return <div>Товыры не найдены</div>;
  }

  return (
    <TableContainer component={Paper}>
      {sellerGoods?.map((sellerGood, index) => (
        <GoodItem key={sellerGood.id} sellerGood={sellerGood} index={index + 1} />
      ))}
    </TableContainer>
  );
}
