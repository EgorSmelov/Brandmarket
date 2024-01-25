import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Badge, Grid, IconButton, Link, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DropDownList from './components/drop-down-list/DropDownList';
import Burger from './components/burger/Burger';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutHandlerThunk } from '../../redux/slices/auth/authThunks';
import GlobalSearch from './components/search/GlobalSearch';
import { resetBaskets } from '../../redux/slices/baskets/basketSlice';
import { resetFavorites } from '../../redux/slices/favorites/favoritesSlice';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { favorites } = useAppSelector((state) => state.favorites);
  const { baskets } = useAppSelector((state) => state.baskets);

  return (
    <Box>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid display="flex" alignItems="center">
              <IconButton color="inherit">
                <Burger />
              </IconButton>
              <Link color="inherit" underline="none" component={NavLink} to="/">
                <Box
                  component="img"
                  sx={{
                    height: 45,
                    width: 200,
                  }}
                  alt="logo"
                  src="/img/wiotqupl.png"
                />
              </Link>
            </Grid>
            <Grid display="flex" alignItems="center">
              <GlobalSearch />
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
              {user.status === 'authenticated' && (
                <>
                  {user.roleId === 3 && <AdminPanelSettingsIcon />}
                  <Tooltip title="Избранное">
                    <IconButton color="inherit" component={NavLink} to="/favorites">
                      <Badge badgeContent={favorites.length} color="primary">
                        <FavoriteIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Корзина">
                    <IconButton color="inherit" component={NavLink} to="/basket">
                      <Badge
                        badgeContent={baskets.reduce(
                          (accum, sum) => accum + sum.userBaskets[0].Baskets.quantity,
                          0,
                        )}
                        color="primary"
                      >
                        <LocalGroceryStoreIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>

                  <Button
                    color="inherit"
                    onClick={() => {
                      void dispatch(logoutHandlerThunk());
                      void dispatch(resetBaskets());
                      void dispatch(resetFavorites());
                    }}
                  >
                    Выйти
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
