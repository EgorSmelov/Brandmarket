import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function GoodAddForm(): JSX.Element {
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
          Добавление товара
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="Название товара"
            name="title"
            autoComplete="title"
            type="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="Цена"
            name="price"
            autoComplete="price"
            type="number"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="Изображение"
            name="image"
            autoComplete="image"
            type="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-multiline-static"
            label="Описание"
            name="description"
            autoComplete="description"
            type="text"
            autoFocus
            multiline
            rows={4}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="Цвет"
            name="color"
            autoComplete="color"
            type="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="Количество"
            name="quantity"
            autoComplete="quantity"
            type="number"
            autoFocus
          />
          <Box sx={{ mt: 3, mb: 2 }} display="flex" justifyContent="center">
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Загрузить изображение
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                // onChange={(e) => {
                //   setFile(e.target.files[0]);
                // }}
              />
            </Button>
          </Box>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Добавить
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
