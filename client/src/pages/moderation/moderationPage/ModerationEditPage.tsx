import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Container, IconButton, Link, TableHead, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { UserType } from '../../../types/auth';
import { useAppDispatch } from '../../../redux/hooks';
import { deleteFormHandlerThunk, getUserThunk } from '../../../redux/slices/moderationSellers/moderationThunks';

type UserPropsType = {
  users: UserType[];
};

function ModerationEditPage({ users }: UserPropsType): JSX.Element {
  const dispatch = useAppDispatch();

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
              Почта
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Статус продавца
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="left">
                {user.id}
              </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">
                <Tooltip title="Сделать продавцом">
                  <IconButton
                    onClick={() => {
                      void dispatch(getUserThunk(user.id));
                      void dispatch(deleteFormHandlerThunk(user.id));
                    }}
                    color={user.roleId === 2 ? 'success' : 'default'}
                  >
                    <CheckCircleIcon />
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

export default React.memo(ModerationEditPage);
