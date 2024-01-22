import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addFavoritesThunk, delFavoritesThunk } from '../../redux/slices/favorites/favoritesThunks';
import type { GoodType } from '../../types/good';

type FavoriteButtonPropsType = {
  good: GoodType;
};

export default function FavoriteButton({ good }: FavoriteButtonPropsType): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispath = useAppDispatch();

  useEffect(() => {
    if (good.userFavorites.length) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  const addFavoritesHandler = (id): void => {
    if (!isFavorite) {
      dispath(addFavoritesThunk(id))
        .then(() => setIsFavorite(true))
        .catch((error) => console.error(error));
    }

    if (isFavorite) {
      dispath(delFavoritesThunk(id))
        .then(() => setIsFavorite(false))
        .catch((error) => console.error(error));
    }
  };

  if (user.status !== 'authenticated') {
    return <div />;
  }

  return (
    <IconButton
      aria-label="add to favorites"
      type="button"
      onClick={() => addFavoritesHandler(good.id)}
    >
      {isFavorite ? <StarRateIcon fontSize="medium" /> : <StarBorderIcon fontSize="medium" />}
    </IconButton>
  );
}
