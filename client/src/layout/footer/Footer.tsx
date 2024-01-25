import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <Box
      sx={{
        backgroundColor: '#1f1f1f',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingRight: '60px',
        paddingLeft: '60px',
        mt: 'auto',
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
          <Typography variant="h6">О НАС</Typography>
          <List dense>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Магазины" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Дистрибуция" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Контакты" />
            </ListItem>
            <ListItem sx={{ padding: '0', color: '#ffffff' }} component={Link} to="/seller/new">
              <ListItemText primary="Стать продавцом" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">БРЕНДЫ</Typography>
          <List dense>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Evisu" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="RIPNDIP" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Butter Goods" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Jordan" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="MINGA LONDON" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Carhartt WIP" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6">ПОМОЩЬ ПОКУПАТЕЛЮ</Typography>
          <List dense>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Доставка и оплата" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Условия возврата товаров с Garage Sale" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Условия возврата" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Публичная оферта" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Таблица размеров" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Программа лояльности" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Продуктовые рекомендации" />
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
          <Typography variant="h6">КОНТАКТЫ</Typography>
          <List dense sx={{ fontSize: '20px' }}>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="+7 (800) 555-35-35" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="+7 (800) 555-35-35" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Ежедневно с 9:00 до 19:00" />
            </ListItem>
            <ListItem sx={{ padding: '0' }}>
              <ListItemText primary="Email: online@brandmarket.com" />
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
        <Box sx={{ color: '#ffffff8c' }}>
          <Typography>Copyright © 2024 - BRANDMARKET</Typography>
        </Box>
        <Box sx={{ color: '#ffffff8c' }}>
          <Typography sx={{ fontSize: '12px' }}>Пользовательское соглашение Условия</Typography>
        </Box>
      </Box>
    </Box>
  );
}
