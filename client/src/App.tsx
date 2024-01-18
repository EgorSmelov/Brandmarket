import React from 'react';
import { Container } from '@mui/material';
<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import NavBar from './layout/navbar/NavBar';
import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signin/SignUpPage';
=======
import NavBar from './layout/navbar/NavBar';
import Footer from './layout/footer/Footer';
>>>>>>> dev

function App(): JSX.Element {
  return (
    <>
      <NavBar />
<<<<<<< HEAD
      <Routes>
        <Route
          path="/"
          element={
            <Container
              maxWidth="lg"
              sx={{
                p: 2,
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }
        />
        <Route path="/auth/login" element={<SignInPage />} />
        <Route path="/auth/registration" element={<SignUpPage />} />
      </Routes>
=======
      <Container
        maxWidth="lg"
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Тут роутинг, мак длина lg
      </Container>
      <Footer />
>>>>>>> dev
    </>
  );
}

export default App;
