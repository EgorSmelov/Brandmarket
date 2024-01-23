import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TableRow from '@mui/material/TableRow';
import { IconButton, Link, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { deleteSellerGoodHandlerThunk } from '../../../redux/slices/seller/sellerThunk';
import { deleteGoodHandlerThunk } from '../../../redux/slices/goods/goodThunk';
import type { GoodType } from '../../../types/good';

type SellerGoodItemPropsType = {
  sellerGood: GoodType;
};

function GoodItem({ sellerGood, index }: SellerGoodItemPropsType & { index: number }): JSX.Element {
  const dispatch = useAppDispatch();

  console.log(sellerGood);

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={{ width: '10%', fontWeight: 600 }} align="left">
            {index}.
          </TableCell>
          <TableCell style={{ width: '25%' }} component="th" scope="row">
            {sellerGood.title}
          </TableCell>
          <TableCell style={{ width: '15%' }} align="left">
            Размер: {sellerGood.size}
          </TableCell>
          <TableCell style={{ width: '15%' }} align="right">
            {sellerGood.price} ₽
          </TableCell>
          <TableCell style={{ width: '22.5%' }} align="right">
            <Tooltip title="Редактировать">
              <IconButton>
                <Link
                  color="inherit"
                  underline="none"
                  component={NavLink}
                  to={`/good/${sellerGood.id}/edit`}
                >
                  <ModeEditIcon />
                </Link>
              </IconButton>
            </Tooltip>
          </TableCell>
          <TableCell style={{ width: '22.5%' }} align="right">
            <Tooltip title="Удалить">
              <IconButton
                onClick={() => void dispatch(deleteSellerGoodHandlerThunk(sellerGood.id))}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default React.memo(GoodItem);
