import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TableRow from '@mui/material/TableRow';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function GoodItem(): JSX.Element {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableBody>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            title
          </TableCell>
          <TableCell align="right">price</TableCell>
          <TableCell align="right">
            <Tooltip title="Edit">
              <IconButton>
                <ModeEditIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
          <TableCell align="right">
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
