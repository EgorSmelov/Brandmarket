import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function GoodSoloDesc(): JSX.Element {
  return (
    <Grid item >
      <Typography gutterBottom variant="h5" component="h2">
        gfdgdgfdfg
      </Typography>
      <Typography sx={{ color: 'gray' }}>dfgdfgdfg</Typography>
      <Typography sx={{ color: 'gray' }}>dfgdfgdfgdf</Typography>
      <Typography>dfgdfgdfg ₽</Typography>
    </Grid>
  );
}
