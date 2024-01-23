import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GoodCardItem from './good-card/GoodCardItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllGoodsThunk } from '../../redux/slices/goods/goodThunk';

export default function GoodCardsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { goods } = useAppSelector((state) => state.goods);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') void dispatch(getAllGoodsThunk(null));
  }, [location.pathname]);

  return (
    <Grid container spacing={4}>
      {goods.map((good) => (
        <GoodCardItem key={good.id} good={good} />
      ))}
    </Grid>
  );
}
