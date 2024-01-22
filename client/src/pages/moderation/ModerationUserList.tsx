import { TableContainer } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllUsersThunk } from '../../redux/slices/moderationSellers/userThunks';
import ModerationEditPage from './moderationPage/ModerationEditPage';

export default function ModerationUserList(): JSX.Element {
  const { users } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllUsersThunk());
  }, []);

  return (
    <TableContainer>
      {users?.map((user) => (
        <div key={user.id}>
          <ModerationEditPage user={user} />
        </div>
      ))}
    </TableContainer>
  );
}
