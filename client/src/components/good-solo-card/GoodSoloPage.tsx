import React from 'react';
import { Grid } from '@mui/material';
import GoodSoloImage from './good-solo/GoodSoloImage';
import GoodSoloDesc from './good-solo/GoodSoloDesc';

export default function GoodSoloPage(): JSX.Element {
  return (
    <Grid container >
      <GoodSoloImage />
      <GoodSoloDesc />
    </Grid>
  );
}
