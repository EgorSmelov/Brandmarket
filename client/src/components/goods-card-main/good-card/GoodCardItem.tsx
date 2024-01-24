import { Card, CardActions, CardMedia, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import type { GoodType } from '../../../types/good';
import { StyledCardContent } from './ComponentStyled';
import FavoriteButton from '../../buttons/FavoriteButton';
import BasketButton from '../../buttons/basketButoon/BasketButton';
import BusketCountButton from '../../buttons/basketButoon/BusketCountButton';

type PropsCard = {
  good: GoodType;
};

function GoodCardItem({ good }: PropsCard): JSX.Element {
  return (
    <Grid className="wrapper" item xs={12} sm={6} md={4}>
      <Card
        className="card"
        elevation={0}
        sx={{
          ':hover': {
            boxShadow: 20, // theme.shadows[20]
          },
          border: '1px solid #e0e0e0',
        }}
      >
        <CardMedia
          component={NavLink}
          to={`/goods/${good.id}`}
          sx={{
            // 16:9
            pt: '40.25%',
            pb: '50.25%',
          }}
          image={`http://localhost:3000/${good.image}`}
        />
        <StyledCardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h2" sx={{ width: '100%' }} noWrap={true}>
            {good.title}
          </Typography>
          <Typography sx={{ color: 'gray' }} gutterBottom>
            Цвет: {good.color}
          </Typography>
          <Typography>{good.price} ₽</Typography>
        </StyledCardContent>
        <CardActions sx={{ zIndex: 'tooltip', justifyContent: 'space-between' }}>
          <FavoriteButton good={good} />
          <BasketButton good={good} />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default React.memo(GoodCardItem);
