import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import type { GoodType } from '../../../types/good';
import RubleIcon from '../../../components/icons/RubleIcon';
import BasketDelButton from '../../../components/buttons/basketButoon/BasketDelButton';
import BusketCountButton from '../../../components/buttons/basketButoon/BusketCountButton';
import OrderButton from '../../../components/buttons/OrderButton';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

type BasketTablePropsType = {
  basketGoods: GoodType[];
};

export default function BasketTable({ basketGoods }: BasketTablePropsType): JSX.Element {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>№</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Название
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Изображение
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Размер
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Цена
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Остаток
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Товаров в корзине
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {basketGoods.map((good, index) => (
              <TableRow key={good.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">
                  <Link
                    color="inherit"
                    underline="none"
                    component={NavLink}
                    to={`/goods/${good.id}`}
                  >
                    {good.title}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="img"
                    sx={{
                      objectFit: 'cover',
                      height: 50,
                      width: 50,
                      borderRadius: '10%',
                    }}
                    alt={good.title}
                    src={`http://localhost:3000/${good.image}`}
                  />
                </TableCell>
                <TableCell align="center">{good.size}</TableCell>
                <TableCell align="center">
                  {good.userBaskets[0].Baskets.totalPrice}
                  <RubleIcon />
                </TableCell>
                <TableCell align="center">{good.quantity}</TableCell>
                <TableCell align="center">
                  <BusketCountButton good={good} quantity={good.userBaskets[0].Baskets.quantity} />
                </TableCell>
                <TableCell align="center">
                  <BasketDelButton good={good} />
                </TableCell>
              </TableRow>
            ))}
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{ fontWeight: 'bold' }} component="th" scope="row">
                Итого
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }} />
              <TableCell align="center" sx={{ fontWeight: 'bold' }} />
              <TableCell align="center" sx={{ fontWeight: 'bold' }} />
              <TableCell sx={{ fontWeight: 'bold' }} align="center">
                {basketGoods.reduce(
                  (accum, item) => accum + item.userBaskets[0].Baskets.totalPrice,
                  0,
                )}
                <RubleIcon />
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }} />
              <TableCell sx={{ fontWeight: 'bold' }} align="center">
                {basketGoods.reduce(
                  (accum, item) => accum + item.userBaskets[0].Baskets.quantity,
                  0,
                )}
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }} />
            </TableRow>
            <TableRow />
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Button variant="contained" component={NavLink} to="/orders/purchase/">
          Оформить заказ
        </Button>
      </Box>
    </Container>
  );
}
