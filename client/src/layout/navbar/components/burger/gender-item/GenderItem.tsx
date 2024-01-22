import React from 'react';
import { Button } from '@mui/material';
import type { GenderType } from '../../../../../types/gender';

type GenderPropsType = {
  gender: GenderType;
};

function GenderItem({ gender }: GenderPropsType): JSX.Element {
  return <Button>{gender.name}</Button>;
}

export default React.memo(GenderItem);
