import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GoodEditForm from './components/forms/GoodEditForm';
import { getOneGoodThunk } from '../../redux/slices/goods/goodThunk';
import { resetGood } from '../../redux/slices/goods/goodSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function GoodEditPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { good } = useAppSelector((state) => state.goods);

  useEffect(() => {
    void dispatch(getOneGoodThunk(Number(id)));

    return () => {
      dispatch(resetGood());
    };
  }, [dispatch, id]);

  if (!good) {
    return <div>Loading...</div>;
  }

  return <GoodEditForm good={good} />;
}
