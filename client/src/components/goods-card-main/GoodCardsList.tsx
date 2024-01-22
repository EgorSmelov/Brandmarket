import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import GoodCardItem from './good-card/GoodCardItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllGoodsThunk } from '../../redux/slices/goods/goodThunk';

export default function GoodCardsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { goods } = useAppSelector((state) => state.goods);

  useEffect(() => {
    void dispatch(getAllGoodsThunk(null));
  }, []);

  return (
    <Grid container spacing={4}>
      {goods.map((good) => (
        <GoodCardItem key={good.id} good={good} />
      ))}
    </Grid>
  );
}
