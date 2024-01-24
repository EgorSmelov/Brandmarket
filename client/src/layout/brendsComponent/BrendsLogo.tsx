import { Container, ImageList, ImageListItem } from '@mui/material';
import React from 'react';

export default function BrendsLogo(): JSX.Element {
  return (
    <Container
      maxWidth="lg"
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
      component="main"
    >
      <ImageList sx={{ width: 1000 }} cols={6} >
        <ImageListItem>
          <img
            srcSet="/img/minga.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
            src="/img/minga.png?w=164&h=164&fit=crop&auto=format"
            alt="logo"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet="/img/ripndip.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
            src="/img/ripndip.png?w=164&h=164&fit=crop&auto=format"
            alt="logo"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet="/img/evisu.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
            src="/img/evisu.png?w=164&h=164&fit=crop&auto=format"
            alt="logo"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet="/img/carhartt.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
            src="/img/carhartt.png?w=164&h=164&fit=crop&auto=format"
            alt="logo"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet="/img/buttergoods.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
            src="/img/buttergoods.png?w=164&h=164&fit=crop&auto=format"
            alt="logo"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            srcSet="/img/Jumpman_logo.svg.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x"
            src="/img/Jumpman_logo.svg.png?w=164&h=164&fit=crop&auto=format"
            alt="logo"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </Container>
  );
}
