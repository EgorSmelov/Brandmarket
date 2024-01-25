import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import OrderButton from '../../../../components/buttons/OrderButton';

export default function OrderForm(): JSX.Element {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCvv, setCardCvv] = useState('');

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
          />
          <InputMask
            mask="9999-9999-9999-9999"
            value={cardNumber}
            disabled={false}
            slotChar="XXXX-XXXXX-XXXXX-XXXXX"
            onChange={(e) => setCardNumber(e.target.value)}
          >
            {() => (
              <TextField
                margin="normal"
                required
                fullWidth
                id="outlined-multiline-static"
                label="Номер карты"
                name="cardNumber"
                autoComplete="cardNumber"
                autoFocus
              />
            )}
          </InputMask>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <InputMask
              mask="99/9999"
              value={cardDate}
              disabled={false}
              slotChar="XX/XXXX"
              onChange={(e) => setCardDate(e.target.value)}
            >
              {() => (
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
              )}
            </InputMask>
            <InputMask
              mask="999"
              value={cardCvv}
              disabled={false}
              slotChar="XXX"
              onChange={(e) => setCardCvv(e.target.value)}
            >
              {() => (
                <TextField
                  margin="normal"
                  required
                  id="standard-textarea"
                  label="CVV"
                  name="cardCvv"
                  autoComplete="cardCvv"
                  type="text"
                  autoFocus
                  sx={{ width: '49%' }}
                />
              )}
            </InputMask>
          </Box>
          <OrderButton />
        </Box>
      </Box>
    </Container>
  );
}
