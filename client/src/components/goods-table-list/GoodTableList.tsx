import * as React from 'react';
import { Box, TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import GoodItem from './good-item/GoodItem';
import type { GoodType } from '../../types/good';

type GoodsListType = {
  goods: GoodType[];
};

export default function GoodTableList({ goods }: GoodsListType): JSX.Element {
  console.log(goods);
  return (
    <TableContainer component={Paper}>
      {goods?.map((good) => (
        <div key={good.id}>
          <GoodItem good={good} />
        </div>
      ))}
    </TableContainer>
  );
}
