import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getFavoritesThunk } from '../../../redux/slices/favorites/favoritesThunks';
import FavoriteTable from './FavoriteTable';

export default function FavoriteList(): JSX.Element {
  const { favorites } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getFavoritesThunk());
  }, [dispatch]);

  return <FavoriteTable favoriteGoods={favorites} />;
}
