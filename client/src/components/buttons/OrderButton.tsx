import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import OrdersService from '../../services/ordersService';
import { resetBaskets } from '../../redux/slices/baskets/basketSlice';

export default function OrderButton(): JSX.Element {
  const { baskets } = useAppSelector((state) => state.baskets);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalprice = baskets.reduce(
    (accum, item) => accum + item.userBaskets[0].Baskets.totalPrice,
    0,
  );
  const handleFormSubmit = async (): Promise<void> => {
    const orderGoods = baskets;
    const price = totalprice;
    const response = await axios
      .post('http://localhost:3000/api/v1/mail/sendorder', {
        orderGoods,
        price,
      })
      .then((res) => console.log(res));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Button
        variant="contained"
        onClick={() => {
          void OrdersService.addOrders(baskets);
          void handleFormSubmit();
          void dispatch(resetBaskets());
          navigate('/orders/purchase/thankyou');
        }}
      >
        Купить
      </Button>
    </Box>
  );
}
