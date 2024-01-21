import React from 'react';
import { Favorite } from '@mui/icons-material';
import { useAppDispatch } from '../../redux/hooks';
import { addFavoritesThunk } from '../../redux/slices/favorites/favoritesThunks';
import FavoriteButton from '../../components/buttons/FavoriteButton';

export default function BasketPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return <FavoriteButton />;
}
