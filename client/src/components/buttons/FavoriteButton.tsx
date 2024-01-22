import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addFavoritesThunk, delFavoritesThunk } from '../../redux/slices/favorites/favoritesThunks';
import type { GoodType } from '../../types/good';
import type { UserType } from '../../types/auth';

type FavoriteButtonPropsType = {
  userId: UserType['id'];
  goodId: GoodType['id'];
};

export default function FavoriteButton({ userId, goodId }: FavoriteButtonPropsType): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispath = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);

  useEffect(() => {
    if (favorites.find((favorite: GoodType) => favorite.id === goodId)) {
      setIsFavorite(true);
    }
  }, []);

  const addFavoritesHandler = (): void => {
    if (!isFavorite) {
      dispath(addFavoritesThunk({ userId, goodId }))
        .then(() => setIsFavorite(true))
        .catch((error) => console.error(error));
    }

    if (isFavorite) {
      dispath(delFavoritesThunk({ userId, goodId }))
        .then(() => setIsFavorite(false))
        .catch((error) => console.error(error));
    }
  };

  return (
    <IconButton aria-label="add to favorites" type="button" onClick={() => addFavoritesHandler()}>
      {isFavorite ? <StarRateIcon fontSize="medium" /> : <StarBorderIcon fontSize="medium" />}
    </IconButton>
  );
}
