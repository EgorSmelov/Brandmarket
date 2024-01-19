import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import SignUpForm from './components/forms/SignUpForm ';

const defaultTheme = createTheme();

export default function SignUpPage(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SignUpForm />
    </ThemeProvider>
  );
}
