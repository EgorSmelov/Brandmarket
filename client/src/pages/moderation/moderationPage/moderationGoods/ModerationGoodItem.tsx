import React, { useEffect } from 'react';
import {
  Container,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { GoodType } from '../../../../types/good';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { deleteSellerGoodHandlerThunk } from '../../../../redux/slices/seller/sellerThunk';
import { getAllUsersThunk } from '../../../../redux/slices/moderationSellers/moderationThunks';

type GoodAdminProps = {
  goods: GoodType[];
};

export default function ModerationGoodItem({ goods }: GoodAdminProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  console.log(users);

  useEffect(() => {
    void dispatch(getAllUsersThunk());
  }, []);

  // const user = users.find((userone) => userone.id === goods.map((good) => good.userId));

  return (
    <Container>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>№</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Продавец
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Товар
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Размер
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Цена
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goods.map((good, index) => (
            <TableRow key={good.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell style={{ width: '10%', fontWeight: 600 }} align="left">
                {index + 1}.
              </TableCell>
              <TableCell style={{ width: '10%' }} component="th" scope="row">
                {users.filter((user) => user.id === good.userId).map((user) => user.name)}
              </TableCell>
              <TableCell style={{ width: '35%' }} component="th" scope="row">
                {good.title}
              </TableCell>
              <TableCell style={{ width: '15%' }} align="left">
                Размер: {good.size}
              </TableCell>
              <TableCell style={{ width: '15%' }} align="right">
                {good.price} ₽
              </TableCell>
              <TableCell style={{ width: '22.5%' }} align="right">
                <Tooltip title="Редактировать">
                  <IconButton>
                    <Link
                      color="inherit"
                      underline="none"
                      component={NavLink}
                      to={`/good/${good.id}/edit`}
                    >
                      <ModeEditIcon />
                    </Link>
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell style={{ width: '22.5%' }} align="right">
                <Tooltip title="Удалить">
                  <IconButton onClick={() => void dispatch(deleteSellerGoodHandlerThunk(good.id))}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
