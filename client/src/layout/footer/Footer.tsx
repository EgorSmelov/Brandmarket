import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer(): JSX.Element {
  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" alignItems="center">
            <CopyrightIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ежи 2024
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
