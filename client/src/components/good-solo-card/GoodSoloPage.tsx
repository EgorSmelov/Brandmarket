import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import GoodSoloImage from './good-solo/GoodSoloImage';
import GoodSoloDesc from './good-solo/GoodSoloDesc';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getOneGoodThunk } from '../../redux/slices/goods/goodThunk';
import { resetGood } from '../../redux/slices/goods/goodSlice';

export default function GoodSoloPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { good } = useAppSelector((state) => state.goods);

  useEffect(() => {
    void dispatch(getOneGoodThunk(Number(id)));

    return () => {
      dispatch(resetGood());
    };
  }, [dispatch, id]);

  if (!good)
    return (
      <Container sx={{ margin: 'auto' }}>
        <Typography variant="h4">good is null</Typography>
      </Container>
    );

  return (
    <Grid
      container
      sx={{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: '40px',
        mt: '150px',
      }}
    >
      <GoodSoloImage good={good} />
      <GoodSoloDesc good={good} />
    </Grid>
  );
}
