import React from 'react';
import { Button } from '@mui/material';
import type { BrandType } from '../../../../../types/brand';

type BrandPropsType = {
  brand: BrandType;
};

function BrandItem({ brand }: BrandPropsType): JSX.Element {
  return <Button sx={{ color: 'black' }}>{brand.name}</Button>;
}

export default React.memo(BrandItem);
