// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Grid } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

// export default function NavBar(): JSX.Element {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Grid container justifyContent="space-around">
//           <Grid item display="flex">
//             <Typography variant="h6">Brandmarket</Typography>
//             <Button color="inherit" component={NavLink} to="/">
//               burger
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button color="inherit" component={NavLink} to="/">
//               Продавец
//             </Button>
//             <Button color="inherit" component={NavLink} to="/">
//               регистрация
//             </Button>
//             <Button color="inherit" component={NavLink} to="/">
//               авторизация
//             </Button>
//             <Button color="inherit" component={NavLink} to="/">
//               <FavoriteIcon />
//             </Button>
//             <Button color="inherit" component={NavLink} to="/">
//               <LocalGroceryStoreIcon />
//             </Button>
//             <Button color="inherit" component={NavLink} to="/">
//               Выйти
//             </Button>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Grid } from '@mui/material';
import DropDownList from './drop-down-list/DropDownList';
import Burger from './burger/Burger';

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
