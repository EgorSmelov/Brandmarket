import { Box, Button } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OrdersService from '../../services/ordersService';
import { resetBaskets } from '../../redux/slices/baskets/basketSlice';

export default function OrderButton(): JSX.Element {
  const { baskets } = useAppSelector((state) => state.baskets);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Button
        variant="contained"
        onClick={() => {
          void OrdersService.addOrders(baskets);
          void dispatch(resetBaskets());
        }}
      >
        Купить
      </Button>
    </Box>
  );
}
