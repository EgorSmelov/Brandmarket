import React from 'react';
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

function App(): JSX.Element {
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
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
