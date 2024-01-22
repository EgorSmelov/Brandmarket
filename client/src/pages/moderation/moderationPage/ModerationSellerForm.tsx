import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { SellerInputsFormType } from '../../../types/seller';
import ModerationService from '../../../services/moderationService';

export default function ModerationSellerForm(): JSX.Element {
  const navigate = useNavigate();

  const addHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as unknown as SellerInputsFormType;
    ModerationService.addSellerData(formData).catch((error) => console.error(error));
    navigate('/');
    e.currentTarget.reset();
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
          Введите информацию о себе!
        </Typography>
        <Box component="form" onSubmit={(e) => void addHandler(e)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="ИНН"
            name="inn"
            autoComplete="title"
            type="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="Телефон"
            name="phone"
            autoComplete="size"
            type="text"
            autoFocus
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Добавить
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
