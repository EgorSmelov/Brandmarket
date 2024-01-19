import * as React from 'react';
import { TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import GoodItem from './good-item/GoodItem';
import type { GoodType } from '../../types/good';

type GoodsListType = {
  goods: GoodType[];
  deleteHandler: (id: GoodType['id']) => void;
};

export default function GoodTableList({ goods, deleteHandler }: GoodsListType): JSX.Element {
  console.log(goods);
  return (
    <TableContainer component={Paper}>
      {goods?.map((good) => (
        <div key={good.id}>
          <GoodItem good={good} deleteHandler={deleteHandler} />
        </div>
      ))}
    </TableContainer>
  );
}
