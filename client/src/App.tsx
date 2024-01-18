import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signin/SignUpPage';
import Footer from './layout/footer/Footer';
import HomePage from './pages/home/HomePage';

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
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
