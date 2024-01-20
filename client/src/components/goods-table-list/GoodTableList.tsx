import * as React from 'react';
import { TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import GoodItem from './good-item/GoodItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllGoodsThunk } from '../../redux/slices/goods/goodThunk';

export default function GoodTableList(): JSX.Element {
  const { goods } = useAppSelector((state) => state.goods);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getAllGoodsThunk());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      {goods?.map((good) => (
        <div key={good.id}>
          <GoodItem good={good} />
        </div>
      ))}
    </TableContainer>
  );
}
