import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { NavLink } from 'react-router-dom';
import type { GoodType } from '../../../types/good';
import { StyledCardContent } from './ComponentStyled';

type PropsCard = {
  good: GoodType;
};

export default function GoodCardItem({ good }: PropsCard): JSX.Element {
  return (
    <Grid className="wrapper" item xs={12} sm={6} md={4}>
      <Card
        className="card"
        elevation={0}
        sx={{
          ':hover': {
            boxShadow: 20, // theme.shadows[20]
          },
        }}
      >
        <CardHeader
          action={
            <Tooltip title="Favourite">
              <IconButton aria-label="settings">
                <StarBorderIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          }
        />
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
          <Typography gutterBottom variant="h5" component="h2">
            {good.title}
          </Typography>
          <Typography sx={{ color: 'gray' }}>{good.description}</Typography>
          <Typography sx={{ color: 'gray' }}>{good.color}</Typography>
          <br />
          <Typography>{good.price} ₽</Typography>
        </StyledCardContent>
        <CardActions sx={{ zIndex: 'tooltip', justifyContent: 'flex-end' }}>
          <Tooltip title="Cart">
            <IconButton aria-label="add to basket">
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
}
