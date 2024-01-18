import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Grid } from '@mui/material';
import DropDownList from './components/drop-down-list/DropDownList';
import Burger from './components/burger/Burger';

export default function NavBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid display="flex">
              <Button color="inherit">
                <Burger />
              </Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Brandmarket
              </Typography>
            </Grid>
            <Grid display="flex">
              <DropDownList />
              <Button color="inherit">Регистрация</Button>
              <Button color="inherit">Войти</Button>
              <Button color="inherit">
                <FavoriteIcon />
              </Button>
              <Button color="inherit">
                <LocalGroceryStoreIcon />
              </Button>
              <Button color="inherit">Выйти</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
