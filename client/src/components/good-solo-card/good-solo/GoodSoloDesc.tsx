import {
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import type { GoodType } from '../../../types/good';
import FavoriteButton from '../../buttons/FavoriteButton';
import BasketButton from '../../buttons/basketButoon/BasketButton';
// import { StyledCardContent } from '../../goods-card-main/good-card/ComponentStyled';

type GoodTypeProps = {
  good: GoodType;
};

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledTitle = styled(Typography)`
  font-size: 24px;
  margin-bottom: 10px;
  color: #212121;
  line-height: 1.3;
  align-items: flex-start;
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
    <Grid item sx={{ width: '560px' }}>
      <Card elevation={0}>
        <StyledCardContent>
          <Grid item sx={{ width: '100%' }}>
            <StyledTitle gutterBottom variant="h5" component="h2">
              {good.title}
            </StyledTitle>
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Описание:
            </Typography>
            <List>
              {good.description.split('.').map((data) => (
                <ListItemText primary={data} sx={{ color: '#757575' }} />
              ))}
            </List>
            <StyledColor>Цвет: {good.color}</StyledColor>
            <StyledPrice>{good.price} ₽</StyledPrice>
            <Typography variant="body2" color="text.secondary">
              Количество: {good.quantity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Размеры: {good.size}
            </Typography>
          </Grid>
        </StyledCardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <StyledActionContainer>
            <FavoriteButton page good={good} />
            <BasketButton page good={good} />
          </StyledActionContainer>
        </CardActions>
      </Card>
    </Grid>
  );
}
