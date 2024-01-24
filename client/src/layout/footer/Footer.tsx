import {
  AppBar,
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

export default function Footer(): JSX.Element {
  // return (
  //   <Box component="footer" sx={{ mt: 'auto' }}>
  //     <AppBar position="static" color='inherit'>
  //       <Toolbar>
  //         <Box display="flex" alignItems="center">
  //           <CopyrightIcon />
  //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //             Ежи 2024
  //           </Typography>
  //         </Box>
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  // );
  return (
    <Box
      sx={{
        backgroundColor: '#2F2B4A',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '60px',
        paddingLeft: '60px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">Меню компании</Typography>
          <List dense>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="О компании" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Реквизиты и информация" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Поставщикам" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Контакты" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">Каталоги</Typography>
          <List dense>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Оригинальные запчасти" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Неоригинальные запчасти" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Автомасла" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Аккумуляторы" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">Помощь</Typography>
          <List dense>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Часто задаваемые вопросы" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Оплата заказа" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Доставка заказа" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Возврат товара" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant="h6">Товары и бренды</Typography>
          <List dense sx={{ fontSize: '20px' }}>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Список брендов" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Популярные товары" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Наличие на складах" />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider />
      <Box
        mt={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography>Copyright © 2024 - All right reserved</Typography>
        </Box>
        <Box />
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Link href="https://t.me/marie_poplavskaya" />
          <Link href="http://www.youtube.com/@mariepoplavskaya" />
          <Link href="https://vk.com/" />
        </Box>
      </Box>
    </Box>
  );
}
