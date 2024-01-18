import React from 'react';
import { Container } from '@mui/material';
import NavBar from './layout/navbar/NavBar';
import Footer from './layout/footer/Footer';

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
        Тут роутинг, мак длина lg
      </Container>
      <Footer />
    </>
  );
}

export default App;
