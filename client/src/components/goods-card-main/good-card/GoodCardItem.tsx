import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import type { GoodType } from '../../../types/good';
import { StyledCardContent } from './ComponentStyled';

type PropsCard = {
  good: GoodType;
};

export default function GoodCardItem({ good }: PropsCard): JSX.Element {
  return (
    <Grid className="wrapper" item xs={12} sm={6} md={4}>
      <Card
        elevation={0}
        className="card"
        sx={{
          ':hover': {
            boxShadow: 20, // theme.shadows[20]
          },
        }}
      >
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <StarBorderIcon fontSize="large" />
            </IconButton>
          }
        />
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '40.25%',
            pb: '50.25%',
          }}
          image={good.image}
        />
        <StyledCardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {good.title}
          </Typography>
          <Typography>{good.description}</Typography>
          <Typography>{good.color}</Typography>
          <Typography>{good.price}</Typography>
        </StyledCardContent>
        <CardActions sx={{ zIndex: 'tooltip' }}>
          <IconButton aria-label="add to basket">
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
