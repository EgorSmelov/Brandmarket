import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signin/SignUpPage';
import Footer from './layout/footer/Footer';
import HomePage from './pages/home/HomePage';
import GoodAddPage from './pages/good-add/GoodAddPage';
import SellerPage from './pages/seller/SellerPage';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<SignInPage />} />
          <Route path="/auth/registration" element={<SignUpPage />} />
          <Route path="/seller/add" element={<GoodAddPage />} />
          <Route path="/seller/goods" element={<SellerPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
