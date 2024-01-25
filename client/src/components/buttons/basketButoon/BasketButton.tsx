import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { GoodType } from '../../../types/good';
import { addBasketThunk, delBasketThunk } from '../../../redux/slices/baskets/basketThunks';
import { BasketStyledButton } from '../StyledButtons';

type FavoriteButtonPropsType = {
  good: GoodType;
  page?: boolean;
};

export default function BasketButton({ good, page }: FavoriteButtonPropsType): JSX.Element {
  const [isBasket, setIsBasket] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (good.userBaskets?.length) {
      setIsBasket(true);
    } else {
      setIsBasket(false);
    }
  }, [good.userBaskets]);

  const addBasketHandler = (id): void => {
    if (!isBasket) {
      dispath(addBasketThunk(id))
        .then(() => setIsBasket(true))
        .catch((error) => console.error(error));
    }

    if (isBasket) {
      dispath(delBasketThunk(id))
        .then(() => setIsBasket(false))
        .catch((error) => console.error(error));
    }
  };

  if (user.status !== 'authenticated') {
    return <div />;
  }

  if (page) {
    return (
      <BasketStyledButton
        aria-label="add to basket"
        size="small"
        onClick={() => addBasketHandler(good.id)}
        isBasket={isBasket}
      >
        {isBasket ? 'Удалить из корзины' : 'Добавить в корзину'}
      </BasketStyledButton>
    );
  }

  if (isBasket)
    return (
      <IconButton aria-label="to basket" type="button" component={NavLink} to="/basket">
        <ShoppingCartIcon fontSize="medium" />
      </IconButton>
    );

  return (
    <IconButton aria-label="add to basket" type="button" onClick={() => addBasketHandler(good.id)}>
      <AddShoppingCartIcon fontSize="medium" />
    </IconButton>
  );
}
