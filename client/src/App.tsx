import React from 'react';
import { Box, Container } from '@mui/material';
import NavBar from './layout/navbar/NavBar';

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
    </>
  );
}

export default App;
