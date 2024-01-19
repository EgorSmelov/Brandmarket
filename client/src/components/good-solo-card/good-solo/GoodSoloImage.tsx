import { Box, CardMedia, Container } from '@mui/material';
import React from 'react';

export default function GoodSoloImage(): JSX.Element {
  return (
    <Container>
      <CardMedia
        sx={{
          // 16:9
          pt: '40.25%',
          pb: '50.25%',
        }}
        image="https://img.brandshop.ru/cache/products/d/ddrbs-000_1104x1104.jpg"
      />
    </Container>
  );
}
