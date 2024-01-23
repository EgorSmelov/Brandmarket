import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../redux/hooks';
import type { GoodType } from '../../../../types/good';

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

export default function GoodEditForm({ good }: { good: GoodType }): JSX.Element {
  const [img, setImg] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState<string>('');
  const navigate = useNavigate();

  const { categories } = useAppSelector((state) => state.categories);
  const { brands } = useAppSelector((state) => state.brands);
  const { genders } = useAppSelector((state) => state.genders);

  useEffect(() => {
    if (!img) {
      return;
    }

    setImgPreview(URL.createObjectURL(img));
  }, [img]);

  const editHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('file', img);
    const data = Object.fromEntries(formData);
    console.log(data);
    const response = await axios
      .patch(`http://localhost:3000/api/v1/goods/${good.id}`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .finally(() => {
        navigate('/');
      });
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
          Редактирование товара
        </Typography>
        <Box component="form" onSubmit={(e) => void editHandler(e)}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Бренд</InputLabel>
            <Select
              name="brandId"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Бренд"
              required
              defaultValue={good.brandId}
            >
              {brands.map((brand) => (
                <MenuItem key={brand.id} value={brand.id}>
                  {brand.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Категория</InputLabel>
            <Select
              name="categoryId"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Категории"
              required
              defaultValue={good.categoryId}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Пол</InputLabel>
            <Select
              name="genderId"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Пол"
              required
              defaultValue={good.genderId}
            >
              {genders.map((gender) => (
                <MenuItem key={gender.id} value={gender.id}>
                  {gender.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            defaultValue={good.title}
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
            defaultValue={good.price}
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
            defaultValue={good.description}
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
            defaultValue={good.color}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="standard-textarea"
            label="Размер"
            name="size"
            autoComplete="size"
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
            <Box
              component="img"
              sx={{
                objectFit: 'cover',
                height: 200,
                width: 200,
                borderRadius: 8,
              }}
              alt={img?.name}
              src={imgPreview || `http://localhost:3000/${good.image}`}
            />
          </Box>
          <Box sx={{ mt: 3, mb: 2 }} display="flex" justifyContent="center">
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Загрузить изображение
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                autoFocus
                required
                onChange={(e) => void setImg(e.target.files[0])}
              />
            </Button>
          </Box>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Сохранить
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
