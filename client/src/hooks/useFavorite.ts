import type React from 'react';
import { useCallback, useState } from 'react';
import { addFavoritesThunk, delFavoritesThunk } from '../redux/slices/favorites/favoritesThunks';
import { useAppDispatch } from '../redux/hooks';

// type ReturnUsePostsData = {
//   products: ProductCardType[];
//   submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
//   deleteHandler: (id: ProductCardType['id']) => void;
// };

function useFavorite(): ReturnUsePostsData {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispath = useAppDispatch();

  const addFavoritesHandler = useCallback(({ userId, goodId }): void => {
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
  }, []);

  return {
    isFavorite,
    setIsFavorite,
    addFavoritesHandler,
  };
}

export default useFavorite;
