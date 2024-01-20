import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signin/SignUpPage';
import Footer from './layout/footer/Footer';
import HomePage from './pages/home/HomePage';
import GoodAddPage from './pages/good-add/GoodAddPage';
import SellerPage from './pages/seller/SellerPage';
import BasketPage from './pages/basket/BasketPage';
import FavoritesPage from './pages/favorites/FavoritesPage';
import GoodEditPage from './pages/edit/GoodEditPage';
import GoodSoloPage from './components/good-solo-card/GoodSoloPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { userCheckThunk } from './redux/slices/auth/authThunks';
import getAllCategoriesThunk from './redux/slices/categories/categoryThunks';
import getAllBrandsThunk from './redux/slices/brands/brandThunks';
import getAllGendersThunk from './redux/slices/genders/genderThunks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { categories } = useAppSelector((state) => state.categories);
  const { brands } = useAppSelector((state) => state.brands);
  const { genders } = useAppSelector((state) => state.genders);

  useEffect(() => {
    void dispatch(userCheckThunk());
  }, [dispatch]);

  useEffect(() => {
    void dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    void dispatch(getAllBrandsThunk());
  }, [dispatch]);

  useEffect(() => {
    void dispatch(getAllGendersThunk());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
        component="main"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<SignInPage />} />
          <Route path="/auth/registration" element={<SignUpPage />} />
          <Route path="/seller/add" element={<GoodAddPage />} />
          <Route path="/seller/goods" element={<SellerPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/good/:id/edit" element={<GoodEditPage />} />
          <Route path="/goods/:id" element={<GoodSoloPage />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
