import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-around">
          <Grid item display="flex">
            <Typography variant="h6">Привет, Ежик</Typography>
            <Typography variant="h6">Привет, Ежик</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" component={NavLink} to="/">
              Главная
            </Button>
            <Button color="inherit" component={NavLink} to="/">
              Главная
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
