import { Box, Grid, ImageListItem } from '@mui/material';
import React from 'react';
import type { GoodType } from '../../../types/good';

type GoodTypeProps = {
  good: GoodType;
};

export default function GoodSoloImage({ good }: GoodTypeProps): JSX.Element {
  
  return (
    <Grid item>
      <Box>
        <ImageListItem sx={{ width: '450px', height: '500px' }}>
          <img src={`http://localhost:3000/${good.image}`} alt="diadora" />
        </ImageListItem>
      </Box>
    </Grid>
  );
}
