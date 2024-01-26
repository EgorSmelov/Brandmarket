import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import type { GoodType } from '../../../types/good';
import FavoriteButton from '../../../components/buttons/FavoriteButton';
import BasketButton from '../../../components/buttons/basketButoon/BasketButton';

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
  favoriteGoods: GoodType[];
};

export default function FavoriteTable({ favoriteGoods }: BasketTablePropsType): JSX.Element {
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
              <TableCell align="center" sx={{ fontWeight: 'bold' }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {favoriteGoods.map((good, index) => (
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
                  <FavoriteButton good={good} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
