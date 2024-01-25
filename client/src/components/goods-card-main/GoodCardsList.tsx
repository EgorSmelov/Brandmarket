import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GoodCardItem from './good-card/GoodCardItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllGoodsThunk } from '../../redux/slices/goods/goodThunk';
import BrendsLogo from '../../layout/brendsComponent/BrendsLogo';
import Filter from '../filter/Filter';

export default function GoodCardsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { goods } = useAppSelector((state) => state.goods);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') void dispatch(getAllGoodsThunk(null));
  }, [location.pathname]);

  return (
    <Box>
      <Box>
        <BrendsLogo />
      </Box>
      <Box />
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid container spacing={4}>
          {goods.map((good) => (
            <GoodCardItem key={good.id} good={good} />
          ))}
        </Grid>
        <Filter />
      </Box>
    </Box>
  );
}
