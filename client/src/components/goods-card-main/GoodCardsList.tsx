import { Grid } from '@mui/material';
import React from 'react';
import GoodCardItem from './good-card/GoodCardItem';

export default function GoodCardsList(): JSX.Element {

  



  return (
    <Grid container spacing={4}>
      <GoodCardItem />
    </Grid>
  );
}
