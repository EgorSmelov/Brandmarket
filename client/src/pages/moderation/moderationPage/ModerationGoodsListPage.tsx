import { TableContainer } from '@mui/material';
import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ModerationGoodItem from './moderationGoods/ModerationGoodItem';
import { getAdminGoodsThunk } from '../../../redux/slices/goods/goodThunk';

export default function ModerationGoodsListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { goods } = useAppSelector((state) => state.goods);

  useEffect(() => {
    void dispatch(getAdminGoodsThunk());
  }, []);

  return (
    <TableContainer component={Paper}>
      {goods?.map((good, index) => (
        <ModerationGoodItem key={good.id} good={good} index={index + 1} />
      ))}
    </TableContainer>
  );
}
