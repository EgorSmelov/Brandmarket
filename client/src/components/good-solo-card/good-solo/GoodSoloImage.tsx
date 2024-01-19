import { Box, Grid, ImageListItem } from '@mui/material';
import React from 'react';

export default function GoodSoloImage(): JSX.Element {
  return (
    <Grid item>
      <Box>
        <ImageListItem>
          <img
            src="https://img.brandshop.ru/cache/products/d/ddrbs-000_1104x1104.jpg"
            alt="diadora"
          />
        </ImageListItem>
      </Box>
    </Grid>
  );
}
