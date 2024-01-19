import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import SignInForm from './components/forms/SignInForm';

const defaultTheme = createTheme();

export default function SignInPage(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SignInForm />
    </ThemeProvider>
  );
}
