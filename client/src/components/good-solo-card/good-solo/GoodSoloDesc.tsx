import { CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import type { GoodType } from '../../../types/good';
import FavoriteButton from '../../buttons/FavoriteButton';
import BasketButton from '../../buttons/BasketButton';
// import { StyledCardContent } from '../../goods-card-main/good-card/ComponentStyled';

type GoodTypeProps = {
  good: GoodType;
};
const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledDescription = styled(Typography)`
  color: #757575;
  margin-bottom: 10px;
`;

const StyledColor = styled(Typography)`
  color: #757575;
  margin-bottom: 10px;
`;

const StyledPrice = styled(Typography)`
  font-weight: bold;
  font-size: 18px;
`;
export default function GoodSoloDesc({ good }: GoodTypeProps): JSX.Element {
  return (
    <>
      <StyledCardContent>
        <StyledTitle gutterBottom variant="h5" component="h2">
          {good.title}
        </StyledTitle>
        <StyledDescription>{good.description}</StyledDescription>
        <StyledColor>Цвет: {good.color}</StyledColor>
        <StyledPrice>{good.price} ₽</StyledPrice>
      </StyledCardContent>
      <CardActions>
        <FavoriteButton good={good} />
        <BasketButton good={good} />
      </CardActions>
    </>
  );
}
