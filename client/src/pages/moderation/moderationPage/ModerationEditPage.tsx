import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IconButton, Link, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { UserType } from '../../../types/auth';
import { useAppDispatch } from '../../../redux/hooks';
import { getUserThunk } from '../../../redux/slices/moderationSellers/moderationThunks';

type UserPropsType = {
  user: UserType;
};

function ModerationEditPage({ user }: UserPropsType): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            {user.id}
          </TableCell>
          <TableCell align="right">{user.name}</TableCell>
          <TableCell align="right">{user.email}</TableCell>
          <TableCell align="right">
            <Tooltip title="Сделать продавцом">
              <IconButton onClick={() => void dispatch(getUserThunk(user.id))}>
                <CheckCircleIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default React.memo(ModerationEditPage);
