import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GoodCardItem from './good-card/GoodCardItem';
import GoodsService from '../../services/goodsService';
import type { GoodType } from '../../types/good';

export default function GoodCardsList(): JSX.Element {
  const [goods, setGoods] = useState<GoodType[]>([]);

  useEffect(() => {
    GoodsService.getGoods()
      .then((goodsarr) => setGoods(goodsarr))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={4}>
      {goods.map((good) => (
        <GoodCardItem key={good.id} good={good} />
      ))}
    </Grid>
  );
}
