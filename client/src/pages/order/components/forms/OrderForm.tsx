import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useAppSelector } from '../../../../redux/hooks';
import OrderButton from '../../../../components/buttons/OrderButton';

export default function OrderForm(): JSX.Element {
  const navigate = useNavigate();

  const { baskets } = useAppSelector((state) => state.baskets);

  const addHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Оформление заказа
        </Typography>
        <Box component="form" onSubmit={(e) => void addHandler(e)}>
          <InputMask
            mask="(0)999 999 99 99"
            value={phone}
            disabled={false}
            maskChar=" "
            onChange={(e) => setPhone(e.target.value)}
          >
            {() => (
              <TextField
                margin="normal"
                required
                fullWidth
                id="outlined-multiline-static"
                label="Адрес доставки"
                name="adress"
                autoComplete="adress"
                type="text"
                autoFocus
                multiline
              />
            )}
          </InputMask>

          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-multiline-static"
            label="Номер карты"
            name="cardNumber"
            autoComplete="cardNumber"
            type="number"
            autoFocus
            multiline
          />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              margin="normal"
              required
              id="standard-textarea"
              label="ММ/ГГГГ"
              name="cardDate"
              autoComplete="cardDate"
              type="text"
              autoFocus
              sx={{ width: '49%' }}
            />
            <TextField
              margin="normal"
              required
              id="standard-textarea"
              label="CVV"
              name="cvv"
              autoComplete="cvv"
              type="number"
              autoFocus
              sx={{ width: '49%' }}
            />
          </Box>
          <OrderButton />
        </Box>
      </Box>
    </Container>
  );
}
