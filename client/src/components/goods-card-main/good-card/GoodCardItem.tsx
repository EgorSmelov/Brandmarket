import { Card, CardActions, CardMedia, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import type { GoodType } from '../../../types/good';
import { StyledCardContent } from './ComponentStyled';
import type { UserType } from '../../../types/auth';
import FavoriteButton from '../../buttons/FavoriteButton';

type PropsCard = {
  good: GoodType;
  userId: UserType['id'];
};

function GoodCardItem({ good, userId }: PropsCard): JSX.Element {
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
          <Typography variant="h5" component="h2">
            {good.title}
          </Typography>
          <Typography sx={{ color: 'gray' }} gutterBottom>
            {good.description}
          </Typography>
          <Typography sx={{ fontStyle: 'italic' }}>{good.price} ₽</Typography>
        </StyledCardContent>
        <CardActions sx={{ zIndex: 'tooltip', justifyContent: 'space-between' }}>
          <FavoriteButton userId={userId} goodId={good.id} />
          <IconButton aria-label="add to basket">
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default React.memo(GoodCardItem);
