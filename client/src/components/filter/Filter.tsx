import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getFilterThunk } from '../../redux/slices/goods/goodThunk';
import {
  getAllColorsThunk,
  getAllSizesThunk,
} from '../../redux/slices/attributes/attributesThunks';

export default function Filter(): JSX.Element {
  const dispatch = useAppDispatch();

  const { colors, sizes } = useAppSelector((state) => state.goodAttributes);

  useEffect(() => {
    void dispatch(getAllColorsThunk());
    void dispatch(getAllSizesThunk());
  }, [dispatch]);

  const [sliderPriceValue, setSliderPriceValue] = useState([1, 100000]);

  const handleChange = (event, sliderPriceValue) => {
    setSliderPriceValue(sliderPriceValue);
  };

  const filterHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('price', sliderPriceValue);
    const data = Object.fromEntries(formData);
    const { color, price, size } = data;
    void dispatch(getFilterThunk({ color, price, size })).finally(() => e.currentTarget.reset());
  };

  return (
    <Box
      sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ml: 10,
      }}
    >
      <Typography component="h1" variant="h5">
        Фильтр
      </Typography>
      <Box component="form" sx={{ width: '100%' }} onSubmit={(e) => filterHandler(e)}>
        <Slider
          min={1}
          max={100000}
          step={100}
          getAriaLabel={() => 'Price range'}
          value={sliderPriceValue}
          onChange={handleChange}
          valueLabelDisplay="on"
          valueLabelFormat={(prev) => `${prev} ₽`}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Размер</InputLabel>
          <Select
            name="size"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Размер"
          >
            {sizes.map((size) => (
              <MenuItem key={size} value={size.size}>
                {size.size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Цвет</InputLabel>
          <Select
            name="color"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Цвет"
          >
            {colors.map((color) => (
              <MenuItem key={color} value={color.color}>
                {color.color}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Фильтровать
        </Button>
      </Box>
    </Box>
  );
}
