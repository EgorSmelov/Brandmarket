import React from 'react';
import { Grid } from '@mui/material';
import GoodSoloImage from './good-solo/GoodSoloImage';
import GoodSoloDesc from './good-solo/GoodSoloDesc';

export default function GoodSoloPage(): JSX.Element {
  return (
    <Grid
      container
      sx={{ justifyContent: 'space-around', alignItems: 'center', flexWrap: 'nowrap', gap: '40px' }}
    >
      <GoodSoloImage />
      <GoodSoloDesc />
    </Grid>
  );
}
