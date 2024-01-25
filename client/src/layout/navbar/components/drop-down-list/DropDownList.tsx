import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useAppSelector } from '../../../../redux/hooks';

export default function BasicMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user } = useAppSelector((state) => state.auth);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* <MenuItem> */}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'black',
          ':hover': {
            backgroundColor: '#f2f2f2', // theme.shadows[20]
          },
        }}
        startIcon={<PersonIcon />}
      >
        Личный кабинет
        <ArrowDropDownIcon />
      </Button>
      {/* </MenuItem> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {user.roleId === 2 && (
          <>
            <MenuItem onClick={handleClose} component={Link} to="/seller/add">
              Добавить товар
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/seller/goods">
              Мои товары
            </MenuItem>
          </>
        )}
        {user.roleId === 3 && (
          <>
            <MenuItem color="inherit" component={Link} to="/moderation">
              Пользователи
            </MenuItem>
            <MenuItem color="inherit" component={Link} to="/moderation/goods">
              Все товары
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
}
