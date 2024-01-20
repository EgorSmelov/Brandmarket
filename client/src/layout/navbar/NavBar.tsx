import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Grid, IconButton, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

import DropDownList from './components/drop-down-list/DropDownList';
import Burger from './components/burger/Burger';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutHandlerThunk } from '../../redux/slices/auth/authThunks';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid display="flex" alignItems="center">
              <IconButton color="inherit">
                <Burger />
              </IconButton>
              <Link color="inherit" underline="none" component={NavLink} to="/">
                <Typography variant="h6" component="div">
                  Brandmarket
                </Typography>
              </Link>
            </Grid>

            <Grid display="flex" alignItems="center">
              {user.status === 'authenticated' && <DropDownList />}

              {user.status !== 'authenticated' && (
                <>
                  <Button color="inherit" component={NavLink} to="/auth/registration">
                    Регистрация
                  </Button>
                  <Button color="inherit" component={NavLink} to="/auth/login">
                    Войти
                  </Button>
                </>
              )}

              <IconButton color="inherit" component={NavLink} to="/favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="inherit" component={NavLink} to="/basket">
                <LocalGroceryStoreIcon />
              </IconButton>

              {user.status === 'authenticated' && (
                <Button color="inherit" onClick={() => void dispatch(logoutHandlerThunk())}>
                  Выйти
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
