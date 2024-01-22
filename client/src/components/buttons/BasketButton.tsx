import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { GoodType } from '../../types/good';
import { addBasketThunk, delBasketThunk } from '../../redux/slices/baskets/basketThunks';

type FavoriteButtonPropsType = {
  good: GoodType;
};

export default function BasketButton({ good }: FavoriteButtonPropsType): JSX.Element {
  const [isBasket, setIsBasket] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (good.userBaskets.length) {
      setIsBasket(true);
    } else {
      setIsBasket(false);
    }
  }, []);

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

  return (
    <IconButton aria-label="add to basket" type="button" onClick={() => addBasketHandler(good.id)}>
      {isBasket ? (
        <ShoppingCartIcon fontSize="medium" />
      ) : (
        <AddShoppingCartIcon fontSize="medium" />
      )}
    </IconButton>
  );
}
