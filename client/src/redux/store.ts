import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import categorySlice from './slices/categories/categorySlice';
import brandSlice from './slices/brands/brandSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categorySlice,
    brands: brandSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
