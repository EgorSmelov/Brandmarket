import * as React from 'react';
import { TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import GoodItem from './good-item/GoodItem';

export default function GoodTableList(): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <GoodItem />
    </TableContainer>
  );
}
