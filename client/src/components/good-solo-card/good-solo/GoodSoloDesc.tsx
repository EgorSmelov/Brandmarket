import { Grid, Typography } from '@mui/material';
import React from 'react';
import type { GoodType } from '../../../types/good';
import { StyledCardContent } from '../../goods-card-main/good-card/ComponentStyled';

type GoodTypeProps = {
  good: GoodType;
};

export default function GoodSoloDesc({ good }: GoodTypeProps): JSX.Element {
  return (
    <Grid item>
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {good.title}
        </Typography>
        <Typography sx={{ color: 'gray' }}>{good.description}</Typography>
        <Typography sx={{ color: 'gray' }}>Цвет: {good.color}</Typography>
        <Typography>{good.price} ₽</Typography>
      </StyledCardContent>
    </Grid>
  );
}
