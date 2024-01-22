import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import categorySlice from './slices/categories/categorySlice';
import brandSlice from './slices/brands/brandSlice';
import goodReducer from './slices/goods/goodSlice';
import genderSlice from './slices/genders/genderSlice';
import favoritesReducer from './slices/favorites/favoritesSlice';
import userReducer from './slices/users/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categorySlice,
    brands: brandSlice,
    goods: goodReducer,
    genders: genderSlice,
    favorites: favoritesReducer,
    users: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
