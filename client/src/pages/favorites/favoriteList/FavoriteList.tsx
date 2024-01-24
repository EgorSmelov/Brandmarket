import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getFavoritesThunk } from '../../../redux/slices/favorites/favoritesThunks';
import FavoriteTable from './FavoriteTable';
import { Typography } from '@mui/material';

export default function FavoriteList(): JSX.Element {
  const { favorites } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getFavoritesThunk());
  }, [dispatch]);

  if (!favorites.length)
    return (
      <Typography component="h1" variant="h5">
        В избранном ничего нет
      </Typography>
    );

  return <FavoriteTable favoriteGoods={favorites} />;
}
