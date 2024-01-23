import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import type { GoodType } from '../../../types/good';
import FavoriteButton from '../../buttons/FavoriteButton';
import BasketButton from '../../buttons/BasketButton';
// import { StyledCardContent } from '../../goods-card-main/good-card/ComponentStyled';

type GoodTypeProps = {
  good: GoodType;
};
const StyledCard = styled(Card)`
  border: 1px solid #dddddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 24px;
  margin-bottom: 10px;
  color: #212121;
  line-height: 1.3;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
  }
`;

const StyledDescription = styled(Typography)`
  color: #757575;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const StyledColor = styled(Typography)`
  color: #757575;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const StyledPrice = styled(Typography)`
  font-weight: bold;
  font-size: 18px;
  color: black;
  line-height: 1.3;
`;

const StyledActionContainer = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px 20px;
`;

export default function GoodSoloDesc({ good }: GoodTypeProps): JSX.Element {
  return (
    <Grid item>
      <StyledCard elevation={0}>
        <StyledCardContent>
          <StyledTitle gutterBottom variant="h5" component="h2">
            {good.title}
          </StyledTitle>
          <StyledDescription>{good.description}</StyledDescription>
          <StyledColor>Цвет: {good.color}</StyledColor>
          <StyledPrice>{good.price} ₽</StyledPrice>
          <Typography variant="body2" color="text.secondary">
            Количество: {good.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Размеры: {good.size}
          </Typography>
        </StyledCardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <StyledActionContainer>
            <FavoriteButton page good={good} />
            <BasketButton page good={good} />
          </StyledActionContainer>
        </CardActions>
      </StyledCard>
    </Grid>
  );
}
